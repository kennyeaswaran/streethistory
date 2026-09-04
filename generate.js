// generate.js — derives streets-data from names.js + documents/ (MODEL-SPEC §6).
// Run: node generate.js
// Writes: generated/streets-data.gen.js, generated/search-index.js, generated/report.md
//
// The authored layers hold what documents SAY (documents/) and facts about
// names (names.js); everything here is computed and never authored:
// segmentation, timelines, `how`, planned/built, labels, bands, the search
// index. During migration the output goes to generated/ and the live
// hand-authored streets-data.js is untouched (MODEL-SPEC §0, §11).

const fs = require("fs");
const path = require("path");
const { NAME_ENTITIES } = require("./names.js");
// Entities minted in review mode live in a separate file so a browser tool
// never writes into hand-authored names.js (see names-new.js). They are merged
// here and validated identically; `pendingResearch` marks them as un-researched.
let NEW_NAME_ENTITIES = {};
try { ({ NEW_NAME_ENTITIES } = require("./names-new.js")); } catch (e) { /* none yet */ }
for (const [id, e] of Object.entries(NEW_NAME_ENTITIES)) {
  if (NAME_ENTITIES[id]) {
    console.error(`ERROR: names-new.js "${id}" also exists in names.js — ` +
                  `it has probably been researched and moved; delete it from names-new.js.`);
    process.exitCode = 1;
  }
  NAME_ENTITIES[id] = { ...e, pendingResearch: true };
}

const { DOCUMENTS } = require("./documents/index.js");

const OUT_DIR = path.join(__dirname, "generated");

// ---------------------------------------------------------------------------
// Config carried into the generated file.
// ⚠ SWITCHOVER TRAP (see MODEL-IMPLEMENTATION.md, checklist item A): these
// constants are read out of the HAND-AUTHORED streets-data.js. The moment
// streets-data.js becomes generated output, this read is self-referential and
// breaks on a clean build. Move NEIGHBORHOODS / CATEGORIES / SIMILAR_PROJECTS
// into an authored site-config.js BEFORE flipping the output target.
const srcData = fs.readFileSync(path.join(__dirname, "streets-data.js"), "utf8");
const { NEIGHBORHOODS, CATEGORIES, SIMILAR_PROJECTS } =
  new Function(srcData + "; return { NEIGHBORHOODS, CATEGORIES, SIMILAR_PROJECTS };")();
const GEN_CATEGORIES = CATEGORIES.some(c => c.id === "unresearched") ? CATEGORIES
  : CATEGORIES.concat([{ id: "unresearched", label: "Not yet researched" }]);

// ---------------------------------------------------------------------------
// Dates. Partial ISO strings: "1875", "1894-03", "1875-05-19".
function dkey(d) { // sortable; missing parts sort early for starts — callers pad
  return (d + "-01-01").slice(0, 10);
}
function dyear(d) { return d.slice(0, 4); }
const MONTHS = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
function dfmtFull(d) { // "May 19, 1875" / "Mar. 1894" / "1875"
  const [y, m, day] = d.split("-");
  if (day) return `${MONTHS[+m - 1]} ${+day}, ${y}`;
  if (m) return `${MONTHS[+m - 1]} ${y}`;
  return y;
}
function dfmtMonth(d) { // "Feb. 1897" / "1897"
  const [y, m] = d.split("-");
  return m ? `${MONTHS[+m - 1]} ${y}` : y;
}
function docDate(doc) { // representative date for ordering/brackets
  return doc.date.on || doc.date.before || doc.date.after;
}

// ---------------------------------------------------------------------------
// Geometry: group ways by normalized street name; scalar projection.
const normalizeName = n => n.replace(/^(North|South|East|West|N\.?|S\.?|E\.?|W\.?)\s+/i, "");
const geomSrc = fs.readFileSync(path.join(__dirname, "streets-geometry.js"), "utf8");
const GEOM = new Function(geomSrc + "; return STREET_GEOMETRY;")();
const geom = GEOM.data || GEOM;

// Names where the leading token is NOT a directional prefix but part of the
// name itself, so the shared normalizeName convention (and the checker's
// key rule, and the map's click lookup) all misparse them. Excluded from
// generation and reported; resolving them properly is an entity-model
// question for the map/checker migration.
const EXCLUDE_NAMES = new Set([
  "East West Bank Plaza at The Broad"   // a plaza named for East West Bank
]);
// ⚠ SWITCHOVER (checklist item B): the map's NAME_ALIASES ("2nd Street
// Tunnel" → "2nd Street") is NOT applied here, so the tunnel is a separate
// stub street and its pavement reads as a gap in 2nd Street (inflating its
// segmentation). Move that alias table into this file at switchover so
// aliased ways join the parent street's geometry, and export it for the map.

const streets = new Map(); // name -> { ways:[], points:[], orientation, axis }
for (const w of geom.elements) {
  if (!w.geometry || !w.tags || !w.tags.name) continue;
  if (EXCLUDE_NAMES.has(w.tags.name)) continue;
  const n = normalizeName(w.tags.name);
  if (!streets.has(n)) streets.set(n, { ways: [], points: [] });
  const s = streets.get(n);
  s.ways.push(w);
  s.points.push(...w.geometry);
}
for (const [n, s] of streets) {
  const lats = s.points.map(p => p.lat), lons = s.points.map(p => p.lon);
  const dLat = (Math.max(...lats) - Math.min(...lats)) * 111;
  const dLon = (Math.max(...lons) - Math.min(...lons)) * 92.5;
  s.orientation = dLat >= dLon ? "NS" : "EW";
  s.axis = s.orientation === "NS" ? "lat" : "lon";
  s.min = s.axis === "lat" ? Math.min(...lats) : Math.min(...lons);
  s.max = s.axis === "lat" ? Math.max(...lats) : Math.max(...lons);
}
function scalarOf(street, p) { return street.axis === "lat" ? p.lat : p.lon; }

// Intersection scalar of two streets (same math as intersect.js).
const xCache = new Map();
function crossScalar(streetName, crossName) {
  const key = streetName + "|" + crossName;
  if (xCache.has(key)) return xCache.get(key);
  const a = streets.get(streetName), b = streets.get(crossName);
  if (!a || !b) { xCache.set(key, null); return null; }
  let best = { d: Infinity };
  for (const p of a.points) for (const q of b.points) {
    const d = Math.hypot(p.lat - q.lat, (p.lon - q.lon) * 0.83);
    if (d < best.d) best = { d, lat: (p.lat + q.lat) / 2, lon: (p.lon + q.lon) / 2 };
  }
  const res = best.d < 0.0015 // ~165 m sanity bound
    ? { scalar: a.axis === "lat" ? best.lat : best.lon, m: Math.round(best.d * 111000) }
    : null;
  xCache.set(key, res);
  return res;
}

// Pavement coverage along the axis: union of way intervals; gaps beyond
// GAP_M meters are physical discontinuities (rail yards, river).
const GAP_DEG = 120 / 111000 / 0.9; // ~120 m in axis degrees (rough)
function pavement(street) {
  const ivs = street.ways.map(w => {
    const ss = w.geometry.map(p => scalarOf(street, p));
    return [Math.min(...ss), Math.max(...ss)];
  }).sort((x, y) => x[0] - y[0]);
  const merged = [];
  for (const [a, b] of ivs) {
    const last = merged[merged.length - 1];
    if (last && a <= last[1] + GAP_DEG) last[1] = Math.max(last[1], b);
    else merged.push([a, b]);
  }
  return merged;
}

// ---------------------------------------------------------------------------
// Names: canonical forms, rendering expansion, matching.
const ORDINALS = [["1st", "First"], ["2nd", "Second"], ["3rd", "Third"], ["4th", "Fourth"],
  ["5th", "Fifth"], ["6th", "Sixth"], ["7th", "Seventh"], ["8th", "Eighth"], ["9th", "Ninth"],
  ["10th", "Tenth"], ["11th", "Eleventh"], ["12th", "Twelfth"], ["14th", "Fourteenth"],
  ["15th", "Fifteenth"], ["16th", "Sixteenth"], ["17th", "Seventeenth"], ["18th", "Eighteenth"],
  ["20th", "Twentieth"], ["21st", "Twenty-first"], ["23rd", "Twenty-third"]];
const NUMWORDS = [["1", "One"], ["18", "Eighteen"], ["19", "Nineteen"], ["20", "Twenty"],
  ["21", "Twenty-one"], ["22", "Twenty-two"], ["26", "Twenty-six"], ["33", "Thirty-three"],
  ["43", "Forty-three"], ["50", "Fifty"], ["52", "Fifty-two"], ["57", "Fifty-seven"],
  ["61", "Sixty-one"], ["64", "Sixty-four"], ["66", "Sixty-six"]];
const TYPE_ABBR = { "St": "Street", "Ave": "Avenue", "Av": "Avenue", "Blvd": "Boulevard",
  "Ct": "Court", "Dr": "Drive", "Pl": "Place", "Rd": "Road", "Ln": "Lane", "Wy": "Way",
  "Hwy": "Highway", "Ter": "Terrace", "Terr": "Terrace" };

// Canonical token form: expand type abbreviations, numerals for ordinals.
function canonTokens(name) {
  return name.replace(/[.,]/g, "").split(/\s+/).map(t => {
    if (TYPE_ABBR[t]) return TYPE_ABBR[t].toLowerCase();
    for (const [num, word] of ORDINALS) if (t.toLowerCase() === word.toLowerCase()) return num;
    for (const [num, word] of NUMWORDS) if (t.toLowerCase() === word.toLowerCase()) return num;
    return t.toLowerCase();
  });
}
function canon(name) { return canonTokens(name).join(" "); }

// Does a document's verbatim string match a form? (§5.1: matching only —
// asWritten is never promoted to a spelling.) Type word may be absent.
// ONE ROW, MORE THAN ONE FORM OF THE INK (§5.1). The Ord survey letters most
// of its streets in English and in Spanish at once, so `asWritten` is a string
// or an array of them, in reading order. The FIRST is the one prose quotes —
// on a bilingual sheet that is the form the reader is most likely to be able
// to look up — and all of them count for spelling matching.
function asWrittenForms(v) {
  if (v == null) return [];
  return (Array.isArray(v) ? v : [v]).filter(x => typeof x === "string" && x.trim());
}
const asWrittenLead = v => asWrittenForms(v)[0] || null;
// "GRASSHOPPER ST." and "CALLE DE LAS CHAPULES", for a prose clause.
const asWrittenQuoted = v => {
  const f = asWrittenForms(v);
  return f.length < 2 ? (f[0] ? `“${f[0]}”` : "")
    : f.slice(0, -1).map(x => `“${x}”`).join(", ") + ` and “${f[f.length - 1]}”`;
};

function formMatches(asWritten, form) {
  const a = canon(normalizeName(asWritten)), f = canon(form);
  if (a === f) return true;
  const ftoks = canonTokens(form);
  const last = ftoks[ftoks.length - 1];
  if (["street", "avenue", "boulevard", "court", "drive", "place", "road", "lane", "way"].includes(last)) {
    if (a === ftoks.slice(0, -1).join(" ")) return true; // "Garey" ~ "Garey Street"
  }
  return false;
}

const entities = {}; // id -> normalized entity record
const aliasOf = {};
for (const [id, e] of Object.entries(NAME_ENTITIES)) {
  entities[id] = e;
  for (const a of e.aliases || []) aliasOf[a] = id;
}
function resolveEntity(id) { return entities[id] ? id : aliasOf[id]; }
function displayForm(e) { const sp = e.spellings[e.spellings.length - 1]; return sp.forms[0]; }

// ---------------------------------------------------------------------------
// OSM binding (§4.1): resolve each OSM street name to an entity, minting
// stubs for new coverage. Reports ambiguities instead of guessing.
const DocGeom = require("./doc-geometry.js");
const report = { stubs: [], ambiguous: [], unmatchedAsWritten: new Map(),
                 derivedDisambig: [], partialDocs: [], notes: [] };
const vanished = [];   // §5.3 — drawn pavement with no modern counterpart
const osmDoc = DOCUMENTS.find(d => d.type === "osm");
let proposalCount = 0;              // unconfirmed rows held back from the map
const nonOsmDocs = DOCUMENTS.filter(d => d.type !== "osm");

function entityHasRowsOnStreet(id, streetName) {
  for (const doc of nonOsmDocs) for (const r of doc.rows) {
    if (r.kind === "annotation" || r.kind === "absent" || r.kind === "unnamed") continue;
    const ids = r.kind === "change" ? [r.from, r.to] : [r.name];
    if (ids.map(resolveEntity).includes(id) && r.street === streetName) return true;
  }
  return false;
}

const slug = n => n.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const osmBinding = new Map(); // street name -> entity id
for (const streetName of streets.keys()) {
  const matches = Object.entries(entities)
    .filter(([, e]) => formMatches(streetName, displayForm(e)))
    .map(([id]) => id);
  if (matches.length === 1) { osmBinding.set(streetName, matches[0]); continue; }
  if (matches.length > 1) {
    // Disambiguate by geometry: the entity whose known (documented) extents
    // lie on this street. A wrong bind fabricates history — report instead
    // of guessing when this fails.
    const onStreet = matches.filter(id => entityHasRowsOnStreet(id, streetName));
    if (onStreet.length === 1) { osmBinding.set(streetName, onStreet[0]); continue; }
    report.ambiguous.push(`OSM "${streetName}" matches entities ${matches.join(", ")} — not bound`);
    continue;
  }
  // No match: mint a stub (this is how new coverage bootstraps).
  let id = slug(streetName);
  if (entities[id]) id += "-osm";
  entities[id] = {
    spellings: [{ forms: [streetName] }],
    namedAfter: null, namedAfterLink: null,
    categories: ["unresearched"], sources: [],
    disputed: false, note: null, possiblySameAs: null, aliases: [],
    stub: true
  };
  osmBinding.set(streetName, id);
  report.stubs.push(id);
}

// ---------------------------------------------------------------------------
// Collect rows per street. Each becomes {kind, entity, interval [a,b],
// fromCross, toCross, doc, attests, basis, asWritten, ...}.
function rowAttests(row, doc) { return row.attests || doc.attests; }

// A row still marked `confirmed: false` is a proposal from the AI pass that no
// human has checked. It is not evidence yet, so it does not reach the map: a
// proposal that generated a public claim would make review optional in
// practice. Review (map-tool.html) is where it becomes evidence, by
// having the flag removed.
const isProposal = row => row.confirmed === false;

const perStreet = new Map(); // street -> rows[]
function addRow(streetName, rec) {
  if (!perStreet.has(streetName)) perStreet.set(streetName, []);
  perStreet.get(streetName).push(rec);
}
const problems = [];

// ---------------------------------------------------------------------------
// Truncate every row to its document's footprint (§4.4/§5.4, tightened
// 2026-08-31): a row may not claim ground the sheet never showed, however its
// ends are written — a `null` end (the street's own end) on a street that
// runs past the polygon was quietly claiming blocks the document has no
// testimony about (mr006-138's Court Street row pinned 1.3 km off one
// sheet-width of ink). check-model's warning on such ends stays — the
// authored file should still say what it means — but the generated claim is
// clipped regardless. Edge-aware via DocGeom.segmentsInBounds (vertex-only
// tests lose the ground between the last inside vertex and the boundary).
const CLIP_BUF = 3e-4; // ~30 m of slack for alignment imprecision
const clipCache = new Map();
function coverageScalarHull(doc, streetName, street) {
  if (!doc.coverage) return null;
  // coverageExcept: a whole street ("Name") or one stretch ({street, from,
  // to}). A whole-street disclaimer means the polygon overshoots onto ground
  // the sheet does not actually show — no footprint semantics for that
  // street at all. (A stretch-form disclaimer narrows the sweep gate, not the
  // hull; rows on such streets are still clipped to the polygon.)
  if ((doc.coverageExcept || []).some(x => typeof x === "string" && normalizeName(x) === streetName))
    return null;
  const key = doc.id + "|" + streetName;
  if (clipCache.has(key)) return clipCache.get(key);
  let ringLL = doc.coverage;
  if (DocGeom.ringIsPixels(ringLL)) {
    if (!doc.alignment) { clipCache.set(key, null); return null; } // checker's problem
    try { ringLL = DocGeom.coverageToWorld(DocGeom.fitAlignment(doc.alignment.points), ringLL); }
    catch (e) { clipCache.set(key, null); return null; }
  }
  const inb = DocGeom.segmentsInBounds(
    street.ways.map(w => ({ name: streetName, geometry: w.geometry })), ringLL);
  const ss = inb.flatMap(r => r.runs.flat()).map(p => scalarOf(street, p));
  const hull = ss.length ? [Math.min(...ss) - CLIP_BUF, Math.max(...ss) + CLIP_BUF] : [];
  clipCache.set(key, hull);
  return hull;
}

for (const doc of nonOsmDocs) {
  if (doc.sweptFully === false) report.partialDocs.push(`${doc.id}: sweptFor = ${JSON.stringify(doc.sweptFor)}`);
  for (const row of doc.rows) {
    if (isProposal(row)) { proposalCount++; continue; }
    // §5.3: no modern street to hang an extent on — the extent IS the trace,
    // stored in scan pixels and derived through the document's alignment so a
    // better alignment moves the ghost with the map (§4.6).
    if (row.kind === "vanished" || row.kind === "vanished-unnamed") {
      if (!doc.alignment) { problems.push(`${doc.id}: ${row.kind} row without an alignment`); continue; }
      let fit;
      try { fit = DocGeom.fitAlignment(doc.alignment.points); }
      catch (e) { problems.push(`${doc.id}: alignment does not fit (${e.message})`); continue; }
      // A corridor with nothing lettered on it has no entity to resolve — it
      // is a fact about pavement, not about a name (§5.3a).
      const unlettered = row.kind === "vanished-unnamed";
      const ent = unlettered ? null : resolveEntity(row.name);
      if (!unlettered && !ent) { problems.push(`${doc.id}: unknown entity ${row.name}`); continue; }
      vanished.push({
        entity: ent, asWritten: unlettered ? null : row.asWritten, doc: doc.id,
        basis: row.basis || "alignment", note: row.note || null,
        // Traced by a human through an alignment good to roughly a street
        // width — never render this as though it were surveyed.
        path: row.trace.map(([x, y]) => DocGeom.scanToWorld(fit, x, y))
                       .map(([lat, lng]) => [+lat.toFixed(6), +lng.toFixed(6)])
      });
      continue;
    }
    const street = streets.get(row.street);
    if (!street) { problems.push(`${doc.id}: street not in geometry: ${row.street}`); continue; }
    const ends = [row.kind === "change" ? row.fromCross : row.from,
                  row.kind === "change" ? row.toCross : row.to];
    // Row from/to follow canonical order (as segment from/to do): N→S for NS
    // streets, W→E for EW. A null end means the street's end on that side.
    const isNS = street.orientation === "NS";
    const iv = ends.map((c, i) => {
      if (c === null || c === undefined) {
        const fromSide = i === 0;
        return isNS ? (fromSide ? street.max : street.min)
                    : (fromSide ? street.min : street.max);
      }
      // §5.4: a mid-block end, given as a point rather than a cross-street.
      if (typeof c === "object") {
        let ll = c.ll;
        if (!ll && c.px) {
          if (!doc.alignment) { problems.push(`${doc.id}: pixel extent without an alignment`); return null; }
          try { ll = DocGeom.scanToWorld(DocGeom.fitAlignment(doc.alignment.points), c.px[0], c.px[1]); }
          catch (e) { problems.push(`${doc.id}: alignment does not fit (${e.message})`); return null; }
        }
        if (!ll) { problems.push(`${doc.id}: extent object carries neither px nor ll`); return null; }
        return scalarOf(street, { lat: ll[0], lon: ll[1] });
      }
      const x = crossScalar(row.street, c);
      if (!x) { problems.push(`${doc.id}: cross-street not on ${row.street}: ${c}`); return null; }
      return x.scalar;
    });
    if (iv.includes(null)) continue;
    let [a, b] = [Math.min(iv[0], iv[1]), Math.max(iv[0], iv[1])];
    let [endA, endB] = [iv[0] <= iv[1] ? ends[0] : ends[1],
                        iv[0] <= iv[1] ? ends[1] : ends[0]];
    // Clip to the document's footprint. An end that moves loses its
    // cross-street name — the claim no longer reaches that crossing.
    const hull = coverageScalarHull(doc, row.street, street);
    if (hull) {
      if (!hull.length) {
        problems.push(`${doc.id}: row on ${row.street} — the street does not enter this document's coverage at all`);
        continue;
      }
      const [lo, hi] = hull;
      if (b <= lo || a >= hi) {
        problems.push(`${doc.id}: row on ${row.street} (${asWrittenLead(row.asWritten) || row.kind}) lies entirely outside the document's coverage footprint`);
        continue;
      }
      if (a < lo - 4e-5) { a = lo; endA = null; }
      if (b > hi + 4e-5) { b = hi; endB = null; }
    }
    // Both ends landing in the same place means the row covers nothing, and it
    // used to produce NO segment and NO complaint — the street simply came out
    // with no history and the build said "0 row problems". The usual cause is
    // ends given the wrong way round: `from` is the WEST end of an EW street
    // and the NORTH end of an NS one (§5.4), so `from: null, to: X` where X
    // sits at that same end is empty, while `from: X, to: null` is the whole
    // street. (MR006-138's Colton Street row was exactly this.)
    //
    // This message used to say SOUTH for a north-south street — the opposite of
    // §5.4 and of the arithmetic ten lines above, which takes `from` from
    // `street.max` on the latitude axis. It also offered the same "try this"
    // either way, so it read as advice while saying nothing. Both fixed.
    if (b - a < 4e-5) {
      const near = row.from === null ? "from" : "to";
      problems.push(`${doc.id}: row on ${row.street} (${asWrittenLead(row.asWritten) || row.kind}) spans ` +
        `nothing — its two ends resolve to the same point. ${row.from === null || row.to === null
          ? `\`from\` is the ${isNS ? "NORTH" : "WEST"} end and \`to\` the ` +
            `${isNS ? "SOUTH" : "EAST"} end, so \`${near}: null\` here means the end ` +
            `the other extent is already at; try swapping them.`
          : "the two cross streets meet this one at the same place."}`);
      continue;
    }
    const base = { doc, a, b, crossA: endA, crossB: endB, basis: row.basis || null };
    if (row.kind === "state") {
      const ent = resolveEntity(row.name);
      if (!ent) { problems.push(`${doc.id}: unknown entity ${row.name}`); continue; }
      addRow(row.street, { ...base, kind: "state", entity: ent, asWritten: row.asWritten,
                           attests: rowAttests(row, doc) });
      // §5.1 report: recurring unmatched forms are probably real spellings.
      // Each lettered form is checked on its own — the English half of a
      // bilingual label can match a recorded spelling while the Spanish half
      // does not, and that asymmetry is the interesting part.
      const e = entities[ent];
      for (const w of asWrittenForms(row.asWritten)) {
        if (e.spellings.some(sp => sp.forms.some(f => formMatches(w, f)))) continue;
        const k = `${ent}: "${w}"`;
        report.unmatchedAsWritten.set(k, (report.unmatchedAsWritten.get(k) || 0) + 1);
      }
    } else if (row.kind === "change") {
      const from = resolveEntity(row.from), to = resolveEntity(row.to);
      if (!from || !to) { problems.push(`${doc.id}: unknown entity in change row`); continue; }
      addRow(row.street, { ...base, kind: "change", from, to, toForm: row.toForm || null,
                           mechanism: row.mechanism || null, date: docDate(doc) });
    } else if (row.kind === "annotation") {
      addRow(row.street, { ...base, kind: "annotation", text: row.text, url: row.url });
    } else if (row.kind === "unnamed") {
      // §5.2a: the document draws the roadway and letters no name on it. It
      // dates the PAVEMENT and says nothing about the name, so it feeds
      // planned/built exactly as a state row does and never reaches a
      // timeline. Without this kind such a stretch has to be recorded as
      // either a name it does not attest or an absence it contradicts.
      addRow(row.street, { ...base, kind: "unnamed", note: row.note || null,
                           attests: rowAttests(row, doc) });
    } else if (row.kind === "absent") {
      // §5.2 — "this document covers this ground and shows nothing here".
      // Carried so the tool's sweep gate and (later) the age colour schemes
      // can read it; it is not evidence OF a name, so it never becomes a source.
      addRow(row.street, { ...base, kind: "absent", note: row.note || null });
    }
  }
}
// OSM rows: geometric extents, entity from the street-level binding.
for (const row of osmDoc.rows) {
  const streetName = row.street;
  const street = streets.get(streetName);
  if (!street) continue;
  const ent = osmBinding.get(streetName);
  if (!ent) continue; // ambiguous bind already reported
  const ss = row.geometry.map(p => scalarOf(street, p));
  addRow(streetName, { kind: "state", entity: ent, asWritten: row.asWritten,
    doc: osmDoc, a: Math.min(...ss), b: Math.max(...ss), crossA: null, crossB: null,
    attests: "built-by", basis: "label", osm: true });
}

// ---------------------------------------------------------------------------
// Segmentation (§6.1): cut at every extent boundary + pavement gap, then
// merge adjacent intervals with identical timelines. Never merge across a
// physical gap.
const SNAP = 0.0004; // ~40 m: cuts closer than this are the same boundary

function buildStreet(streetName) {
  const street = streets.get(streetName);
  const rows = perStreet.get(streetName) || [];
  const pav = pavement(street);

  // Cut points: named (from row extents) + pavement edges.
  const cuts = []; // {scalar, cross}
  const pushCut = (scalar, cross) => {
    const near = cuts.find(c => Math.abs(c.scalar - scalar) < SNAP);
    if (near) { if (!near.cross && cross) near.cross = cross; return; }
    cuts.push({ scalar, cross });
  };
  for (const r of rows) {
    if (r.osm) continue; // way boundaries are not evidence boundaries
    pushCut(r.a, r.crossA); pushCut(r.b, r.crossB);
  }
  for (const [a, b] of pav) { pushCut(a, null); pushCut(b, null); }
  cuts.sort((x, y) => x.scalar - y.scalar);

  // Elementary intervals: consecutive cuts, where pavement exists.
  const intervals = [];
  for (let i = 0; i + 1 < cuts.length; i++) {
    const a = cuts[i].scalar, b = cuts[i + 1].scalar;
    if (b - a < SNAP) continue;
    const mid = (a + b) / 2;
    if (!pav.some(([pa, pb]) => mid >= pa - SNAP && mid <= pb + SNAP)) continue;
    const eps = Math.min(SNAP, (b - a) / 3); // don't starve narrow intervals
    intervals.push({ a, b, crossA: cuts[i].cross, crossB: cuts[i + 1].cross,
      rows: rows.filter(r => r.a < b - eps && r.b > a + eps) });
  }
  intervals.forEach(iv => { iv.timeline = timelineFor(streetName, iv); });

  // Merge adjacent intervals that would produce the SAME ENTRY (not across
  // pavement gaps). Not the same timeline — the same entry. A segment carries
  // more than its name history, and everything else it carries has to match
  // too, or the merge quietly spreads it over ground it was never about.
  //
  // `unnamed` rows are how this got noticed. They make no timeline period —
  // there is no name to put in one — but they DO date the roadway (§5.2a), so
  // an interval with one and the interval next door without one had identical
  // timelines and merged. The Ord survey's unnamed stretch of 11th Street then
  // dated the whole street east of Figueroa "planned by 1849", including the
  // half past Main that the survey's grid never reached.
  const merged = [];
  for (const iv of intervals) {
    const last = merged[merged.length - 1];
    const gapBefore = last && iv.a - last.b > SNAP;
    if (last && !gapBefore && entryKey(last) === entryKey(iv)) {
      last.b = iv.b; last.crossB = iv.crossB;
      // The witnesses either side of the boundary are not the same objects,
      // and both have to survive: the merged stretch is cited from all of them.
      last.rows = last.rows.concat(iv.rows.filter(r => !last.rows.includes(r)));
      last.timeline = mergeTimelines(last.timeline, iv.timeline);
    } else {
      if (gapBefore && last) last.gapAfter = true;
      merged.push({ ...iv, rows: iv.rows.slice(), timeline: iv.timeline.slice() });
    }
  }
  return { street, merged, pav };
}

// WHICH DOCUMENT SAW IT IS NOT PART OF WHAT A TIMELINE SAYS (§6.1).
//
// A multi-sheet map tiles a street across several sheets, each witnessing its
// own stretch. With the witness in the signature, such a street comes out in
// one segment per sheet, every one of them repeating the same history —
// Crocker Street was five identical "part of (Stanford Ave)" bands, one for
// each sheet of M.R. 30-9/13. The stretches abut and every metre of them is
// attested, so nothing is being inferred here: this is bookkeeping, not the
// rectangle rule (§6.2a).
// What a merge must preserve: the name history, the dates derived from the
// rows, and whether any document speaks about the ground at all. Deliberately
// NOT the documents' identities or urls — sheets of one survey have different
// urls and must still merge (§6.1) — only what the reader would see differ.
function entryKey(iv) {
  const pb = plannedBuiltFor(iv);
  const txt = v => v && typeof v === "object" ? v.text : v;
  const attested = iv.rows.some(r => !r.osm);
  return JSON.stringify([sig(iv.timeline), txt(pb.planned), txt(pb.built), attested]);
}

function sig(timeline) {
  return JSON.stringify(timeline.map(p => [p.entity, p.form, p.start, p.startKind,
    p.end, p.endKind, p.how]));
}

// Merging two identical timelines: the same periods, with more witnesses
// behind each. Periods correspond one to one — the signature they matched on
// fixes their order — and neither input is mutated, because adjacent
// intervals share period objects.
function mergeTimelines(A, B) {
  return A.map((p, i) => {
    const q = B[i];
    if (!q) return p;
    const sightings = p.ctx.sightings.slice();
    for (const s of q.ctx.sightings) if (!sightings.includes(s)) sightings.push(s);
    sightings.sort((x, y) => dkey(docDate(x.doc)) < dkey(docDate(y.doc)) ? -1 : 1);
    const docs = p.docs.slice();
    for (const d of q.docs) if (!docs.includes(d)) docs.push(d);
    return { ...p, docs, ctx: { ...p.ctx, sightings } };
  });
}

// ---------------------------------------------------------------------------
// Timeline for one elementary interval (§6.2): per entity, presence runs
// from earliest sighting to latest, gap-filled; change rows pin transitions.
// Spelling periods expand into one timeline period per form in force.
function timelineFor(streetName, iv) {
  const states = iv.rows.filter(r => r.kind === "state");
  const changes = iv.rows.filter(r => r.kind === "change")
    .sort((x, y) => dkey(x.date) < dkey(y.date) ? -1 : 1);

  const present = new Map(); // entity -> {sightings:[], opens:[], closes:[]}
  const get = id => { if (!present.has(id)) present.set(id, { sightings: [], opens: [], closes: [] }); return present.get(id); };
  for (const s of states) get(s.entity).sightings.push(s);
  for (const c of changes) {
    if (c.from === c.to) { get(c.from).respells = get(c.from).respells || []; get(c.from).respells.push(c); }
    else { get(c.to).opens.push(c); get(c.from).closes.push(c); }
  }

  const periods = [];
  for (const [ent, info] of present) {
    const e = entities[ent];
    const sight = info.sightings.slice().sort((x, y) => dkey(docDate(x.doc)) < dkey(docDate(y.doc)) ? -1 : 1);
    const nonOsm = sight.filter(s => !s.osm);
    const hasOsm = sight.some(s => s.osm);
    const open = info.opens.sort((x, y) => dkey(x.date) < dkey(y.date) ? -1 : 1)[0] || null;
    const close = info.closes.sort((x, y) => dkey(x.date) < dkey(y.date) ? -1 : 1)[0] || null;

    // Presence bracket.
    let start, startKind, startDoc = null;
    if (open) { start = open.date; startKind = "change"; startDoc = open.doc; }
    else if (nonOsm.length) {
      const s0 = nonOsm[0];
      start = docDate(s0.doc);
      startKind = s0.attests === "planned-on" ? "exact" : "by";
      startDoc = s0.doc;
    } else if (close || (info.respells && info.respells.length)) {
      // Presence implied by a transition out of (or within) this name; the
      // prose-dated first spelling period may supply an earlier start below.
      start = null; startKind = "unknown";
    } else if (hasOsm) { start = null; startKind = "unknown"; }
    else continue;

    let end, endKind, endDoc = null;
    if (close) { end = close.date; endKind = "change"; endDoc = close.doc; }
    else if (hasOsm) { end = null; endKind = "current"; }
    else { end = "?"; endKind = "unknown"; }

    // Expand into spelling periods (most entities have exactly one).
    const sps = e.spellings;
    if (sps.length === 1) {
      // A prose-dated spelling (§3 exception) can supply the start when no
      // rows do — e.g. an entity known only from prose plus the change row
      // that ended it.
      if (start === null && sps[0].from) { start = sps[0].from; startKind = "prose"; }
      periods.push(mkPeriod(ent, sps[0].forms[0], start, startKind, end, endKind,
        { sightings: sight, open, close, startDoc, endDoc, proseSource: sps[0].source || null }));
    } else {
      // Boundaries between spelling periods: respell pins first, then prose
      // dates authored on the periods themselves (§3 prose exception).
      const bounds = []; // between sps[i] and sps[i+1]
      const respells = (info.respells || []).slice().sort((x, y) => dkey(x.date) < dkey(y.date) ? -1 : 1);
      let ri = respells.length - 1;
      for (let i = sps.length - 2; i >= 0; i--) {
        let bnd = null;
        // A respell whose toForm matches sps[i+1] pins this boundary.
        const r = respells[ri];
        if (r && r.toForm && sps[i + 1].forms.some(f => formMatches(r.toForm, f))) { bnd = { date: r.date, kind: "change", doc: r.doc }; ri--; }
        else if (sps[i + 1].from) bnd = { date: sps[i + 1].from, kind: "prose", source: sps[i + 1].source };
        else if (sps[i].until) bnd = { date: sps[i].until, kind: "prose", source: sps[i].source };
        bounds[i] = bnd;
      }
      let cursorStart = start, cursorKind = startKind;
      if (cursorStart === null && sps[0].from) { cursorStart = sps[0].from; cursorKind = "prose"; }
      for (let i = 0; i < sps.length; i++) {
        const isLast = i === sps.length - 1;
        const bnd = bounds[i];
        const pEnd = isLast ? end : (bnd ? bnd.date : "?");
        const pEndKind = isLast ? endKind : (bnd ? bnd.kind : "unknown");
        periods.push(mkPeriod(ent, sps[i].forms[0], cursorStart, cursorKind, pEnd, pEndKind,
          { sightings: sight, open: i === 0 ? open : (bounds[i - 1] && bounds[i - 1].kind === "change" ? { date: bounds[i - 1].date, doc: bounds[i - 1].doc, respell: true } : null),
            close: isLast ? close : null, startDoc, endDoc: isLast ? endDoc : null,
            proseSource: sps[i].source || null, spellingIndex: i }));
        cursorStart = pEnd === "?" ? null : pEnd;
        cursorKind = bnd ? bnd.kind : "unknown";
      }
    }
  }

  // Order by effective date; on a tie (a transition day), the period ENDING
  // that day precedes the one beginning.
  periods.sort((x, y) => {
    const key = p => p.start ? dkey(p.start) : (p.end && p.end !== "?" ? dkey(p.end) : "9999");
    const endsAt = p => p.end && p.end !== "?" && dkey(p.end) === key(p) ? 0 : 1;
    const kx = key(x), ky = key(y);
    if (kx !== ky) return kx < ky ? -1 : 1;
    return endsAt(x) - endsAt(y);
  });
  return periods;
}

function mkPeriod(entity, form, start, startKind, end, endKind, ctx) {
  const docs = [];
  for (const s of ctx.sightings || []) if (!docs.includes(s.doc)) docs.push(s.doc);
  if (ctx.open && ctx.open.doc && !docs.includes(ctx.open.doc)) docs.push(ctx.open.doc);
  if (ctx.close && ctx.close.doc && !docs.includes(ctx.close.doc)) docs.push(ctx.close.doc);
  return { entity, form, start, startKind, end, endKind, docs, ctx, how: null };
}

// ---------------------------------------------------------------------------
// `how`, derived (§6.3) — conservative:
//  * origin    — the entity's earliest dated non-OSM sighting anywhere lies here.
//  * renaming  — a change row pins it, OR a documented predecessor occupied
//                this ground (its rows are evidence on THIS interval, so the
//                inference is local even when the date is unknown).
//  * transfer  — pinned renaming whose arriving entity vacated a different
//                roadway in the same window (±2 y), or stated by the document.
//  * extension — only when this interval has a DATED non-OSM sighting later
//                than the entity's dated presence on an adjacent interval.
//                (An undated arrival next to older ground is NOT called an
//                extension: 3rd's western reach is exactly where that
//                presumption is a trap — its 1894 "Third St" is modern
//                Miramar. Never guess.)
function earliestSightingOf(entity) {
  let best = null;
  for (const doc of nonOsmDocs) for (const r of doc.rows) {
    if (r.kind !== "state" || resolveEntity(r.name) !== entity) continue;
    const d = docDate(doc);
    if (!best || dkey(d) < dkey(best.date)) best = { date: d, street: r.street, row: r, doc };
  }
  return best;
}
function vacatedElsewhere(entity, date, streetName) {
  for (const doc of nonOsmDocs) for (const r of doc.rows) {
    if (r.kind !== "change" || r.from === r.to) continue;
    if (resolveEntity(r.from) !== entity || r.street === streetName) continue;
    const d = docDate(doc);
    if (Math.abs(+dyear(d) - +dyear(date)) <= 2) return true;
  }
  return false;
}

function deriveHow(streetName, seg, allSegs) {
  const tl = seg.timeline;
  for (let i = 0; i < tl.length; i++) {
    const p = tl[i];
    if (p.ctx.spellingIndex !== undefined && p.ctx.spellingIndex > 0) {
      // A respelling within one entity keeps the arrival story of the entity;
      // the item documents the spelling change, not a new arrival.
      p.how = p.ctx.open && p.ctx.open.respell ? "renaming" : null;
      continue;
    }
    const first = earliestSightingOf(p.entity);
    const ownDated = p.ctx.sightings.filter(s => !s.osm);
    if (first && ownDated.some(s => s.doc === first.doc) && first.street === streetName) {
      p.how = "origin"; continue;
    }
    if (p.startKind === "change") {
      const mech = p.ctx.open && p.ctx.open.mechanism;
      p.how = mech || (vacatedElsewhere(p.entity, p.start, streetName) ? "transfer" : "renaming");
      continue;
    }
    const predecessors = tl.slice(0, i).filter(q => q.entity !== p.entity);
    if (predecessors.length) { p.how = "renaming"; continue; }
    if (ownDated.length) {
      const myEarliest = dkey(docDate(ownDated[0].doc));
      const adj = allSegs.filter(s2 => s2 !== seg &&
        (Math.abs(s2.b - seg.a) < SNAP || Math.abs(s2.a - seg.b) < SNAP));
      const earlierNextDoor = adj.some(s2 => s2.timeline.some(q =>
        q.entity === p.entity && q.ctx.sightings.some(s =>
          !s.osm && dkey(docDate(s.doc)) < myEarliest)));
      if (earlierNextDoor) { p.how = "extension"; continue; }
    }
    p.how = null;
  }
}

// ---------------------------------------------------------------------------
// Rendering: prose fields in today's consumable shape (§6.6). Structure is
// derived; namesake meaning comes only from names.js (§7).
function shortCross(name) {
  if (!name) return null;
  // MODEL-SPEC §5.4 lets an extent end mid-block, as {px} or {ll} rather than a
  // cross-street name. There is nothing to name such a point after, so callers
  // fall back to "beyond <the other end>". Unhandled, this threw — no document
  // used a point extent until MR006-138.
  if (typeof name !== "string") return null;
  return name.replace(/ Street$/, "").replace(/ Avenue$/, "").replace(/ Boulevard$/, "")
             .replace(/ Road$/, " Rd").replace(/ Place$/, " Pl");
}
// True when an extent end is a mid-block point rather than a cross street.
const isPointEnd = v => !!v && typeof v === "object" && (v.px || v.ll);
function shortForm(form) {
  return form.replace(/ Street$/, " St").replace(/ Avenue$/, " Ave").replace(/ Boulevard$/, " Blvd");
}
function fmtStart(p) {
  if (!p.start) return "?";
  if (p.startKind === "by") return "by " + dyear(p.start);
  if (p.startKind === "change") return dfmtMonth(p.start);
  if (p.startKind === "prose") return dyear(p.start);
  return dyear(p.start); // exact
}
function fmtEnd(p) {
  if (p.end === null) return null;
  if (p.end === "?") return "?";
  if (p.endKind === "change") return dfmtMonth(p.end);
  return dyear(p.end);
}
// WHICH DOCUMENTS LETTER A NAME, and the earliest of them.
//
// A name entity's own `sources` used to carry a hand-typed citation of the
// sheet somebody first noticed the name on — frozen, so it stayed put when an
// older sheet arrived, and on a multi-sheet plat it often named the wrong
// sheet. The corpus can answer the question properly, so it does: every
// stretch that has ever carried a name cites the earliest document in the
// corpus that letters it, whether or not that document says anything about
// THIS stretch. Ties (the five Ord sheets share a date) break on id, so the
// answer is stable.
const DOCS_ATTESTING = new Map();        // entity id -> [doc, ...] oldest first
for (const doc of nonOsmDocs) {
  const here = new Set();
  for (const r of doc.rows || [])
    for (const ref of [r.name, r.from, r.to])
      if (typeof ref === "string" && ref) here.add(aliasOf[ref] || ref);
  for (const id of here) {
    if (!DOCS_ATTESTING.has(id)) DOCS_ATTESTING.set(id, []);
    DOCS_ATTESTING.get(id).push(doc);
  }
}
for (const list of DOCS_ATTESTING.values())
  list.sort((a, b) => dkey(docDate(a)) < dkey(docDate(b)) ? -1
                    : dkey(docDate(a)) > dkey(docDate(b)) ? 1
                    : String(a.id).localeCompare(String(b.id)));
const earliestDocFor = id => (DOCS_ATTESTING.get(id) || [])[0] || null;
// Every url by which the corpus can be reached, and which entity ids the
// document behind it letters. Used to drop a hand-written citation that the
// corpus already answers — and to KEEP one that it does not, since an entity
// may cite a sheet for something other than its own name on it.
const CORPUS_ATTESTS = new Map();        // url -> Set of entity ids
for (const [id, docs] of DOCS_ATTESTING)
  for (const d of docs)
    for (const u of [d.url, ...(d.copies || []).map(c => c.url)])
      if (u) { if (!CORPUS_ATTESTS.has(u)) CORPUS_ATTESTS.set(u, new Set()); CORPUS_ATTESTS.get(u).add(id); }

function docShort(doc) { return doc.shortTitle || doc.title.replace(/^Recorded map: /, "").split(",")[0]; }

// A SOURCE LINE HAS TO BE A CITATION, not just what the sheet letters across
// its own title block. The registry holds the pieces — the title, the short
// handle that usually carries the map-book reference and sheet number, and the
// date — so compose them here, once, and every entry that cites the document
// gets the same sentence (§6.6: "each document described once and cited
// everywhere"). This is the line thirty name entities used to retype by hand,
// each freezing whichever sheet somebody first noticed the name on; four of
// them named the wrong sheet of a multi-sheet plat.
//
// Nothing is invented: a part is added only when the title does not already
// say it, so a document whose title is already a full citation is left alone.
const MAP_REF = /\b(?:M\.?\s?[RB]\.?|T\.?\s?R\.?)\s?\d+\s?[-\u2013]\s?\d+/i;
const HAS_YEAR = /\b(?:1[6-9]\d\d|20\d\d)\b/;
function docCitation(doc, qualifier) {
  const short = doc.shortTitle || "";
  const bits = [];
  const sheet = (short.match(/sheet \d+/i) || [])[0];
  if (sheet && !new RegExp(sheet, "i").test(doc.title)) bits.push(sheet);
  // The reference comes from the short title where there is one, and otherwise
  // from the folder id, which is where it came from in the first place.
  const idRef = String(doc.id).match(/^(m[rb])(\d+)-(\d+)/i);
  const ref = (short.match(MAP_REF) || [])[0] ||
              (idRef ? `M.${idRef[1][1].toUpperCase()}. ${+idRef[2]}-${+idRef[3]}` : null);
  if (ref && !doc.title.includes(ref)) bits.push(ref);
  const when = docDate(doc) ? dfmtFull(docDate(doc)) : null;
  if (when && !HAS_YEAR.test(doc.title))
    bits.push(doc.date.on ? when : doc.date.after ? `after ${when}` : `before ${when}`);
  // The qualifier is a remark about the evidence, not another citation part,
  // so it is separated by a semicolon rather than folded into the list.
  const inner = bits.join(", ") + (bits.length && qualifier ? "; " : "") + (qualifier || "");
  return inner ? `${doc.title} (${inner})` : doc.title;
}

// ---------------------------------------------------------------------------
// knownFraction: how much of [1850, extract-date] the derived timeline PINS
// this stretch's state (§8 scheme 1's saturation ramp; Kenny, 2026-08-31).
// A year counts as known when it falls in
//   - a documented name period: from its pinned start (exact / change /
//     prose / "by X" — the name held from X) or its earliest dated sighting,
//     through its pinned end, the extract date (current names), or its
//     LATEST dated sighting when the end is "?" (§6.2 constancy fills
//     between sightings, not past them);
//   - documented not-yet-existence: any year up to an `absent` sighting
//     (the existence frontier is monotone — not planned at t means not
//     planned before t), or before the ground's first period when that
//     period starts with an exact planning act.
// The "?" gaps between names, un-dated early history, and everything before
// a "by" date count as unknown — precisely the years research hasn't pinned.
// `built` being unknown is deliberately NOT in this number (pavement, not
// names); the map caps saturation on it separately.
const ERA_START = 1850;
function knownFraction(seg, tl, nowYear) {
  const iv = [];
  tl.forEach((p, idx) => {
    const dated = (p.ctx.sightings || []).filter(x => !x.osm)
      .map(x => +dyear(docDate(x.doc)));
    let s = p.start ? +dyear(p.start) : (dated.length ? Math.min(...dated) : null);
    let e = p.end === null ? nowYear
          : p.end === "?" ? (dated.length ? Math.max(...dated) : null)
          : +dyear(p.end);
    if (s !== null && e !== null && e >= s) iv.push([s, e]);
    if (idx === 0 && p.startKind === "exact" && p.start)
      iv.push([ERA_START, +dyear(p.start)]);
  });
  for (const r of seg.rows)
    if (r.kind === "absent") iv.push([ERA_START, +dyear(docDate(r.doc))]);
  // union measure, clipped to the era
  const cl = iv.map(([a, b]) => [Math.max(a, ERA_START), Math.min(b, nowYear)])
    .filter(([a, b]) => b > a).sort((x, y) => x[0] - y[0]);
  let total = 0, cur = null;
  for (const [a, b] of cl) {
    if (!cur || a > cur[1]) { if (cur) total += cur[1] - cur[0]; cur = [a, b]; }
    else cur[1] = Math.max(cur[1], b);
  }
  if (cur) total += cur[1] - cur[0];
  return Math.max(0, Math.min(1, total / (nowYear - ERA_START)));
}

// "2, 4, 5, 6" -> "2, 4–6". Sheet lists get long enough to be worth it.
function runsOf(ns) {
  const out = [];
  for (let i = 0; i < ns.length; i++) {
    let j = i;
    while (j + 1 < ns.length && ns[j + 1] === ns[j] + 1) j++;
    out.push(j > i + 0 ? (j > i + 1 ? `${ns[i]}–${ns[j]}` : `${ns[i]}, ${ns[j]}`) : String(ns[i]));
    i = j;
  }
  return out.join(", ");
}
const andList = xs => xs.length < 2 ? (xs[0] || "")
  : `${xs.slice(0, -1).join(", ")} and ${xs[xs.length - 1]}`;

// Citing a multi-sheet map, once (§4.4a).
//
// Sheets of one recorded map are separate documents sharing a title and a url
// — that shared url is what makes them one map bibliographically. Now that a
// merged segment can be attested by four of them at once, naming each by its
// full sheet title produces a sentence nobody finishes: "on the 1888 Wolfskill
// Orchard Tract, sheet 2 (M.R. 30-10) and the 1888 Wolfskill Orchard Tract,
// sheet 3 (M.R. 30-11) and…". So sheets of one map collapse to the map, with
// the sheets named from the `-pN` ids the folder convention guarantees.
const sheetBase = d => docShort(d).replace(/,\s*sheets?\s.*$/i, "").trim();
function citeDocs(docs) {
  // Grouped by SHORT TITLE, not by url. A multi-page county file gives its
  // sheets one url, but the Ord survey's eight sheets are eight separate
  // county PDFs with eight urls and one title — and citing "the 1849 Hutton /
  // Ord Survey, the 1849 Hutton / Ord Survey and the 1849 Hutton / Ord Survey"
  // is how that reads if the url is the key. What makes them one map is that
  // they are one map, which the title is the honest handle for.
  const byTitle = new Map();
  for (const d of docs) {
    const k = `${dyear(docDate(d))}|${sheetBase(d)}`;
    if (!byTitle.has(k)) byTitle.set(k, []);
    if (!byTitle.get(k).includes(d)) byTitle.get(k).push(d);
  }
  return [...byTitle.values()].map(ds => {
    const year = dyear(docDate(ds[0]));
    if (ds.length === 1) return `the ${year} ${docShort(ds[0])}`;
    const ns = ds.map(d => (String(d.id).match(/-p(\d+)$/) || [])[1])
                 .filter(Boolean).map(Number).sort((a, b) => a - b);
    // Only claim sheet numbers when every document offered one; otherwise the
    // list would silently be short.
    return ns.length === ds.length
      ? `the ${year} ${sheetBase(ds[0])} (sheets ${runsOf(ns)})`
      : `the ${year} ${sheetBase(ds[0])}`;
  });
}

function originLine(streetName, p, tl) {
  const e = entities[p.entity];
  const isCurrent = p.end === null;
  const dated = p.ctx.sightings.filter(s => !s.osm);
  const parts = [];
  let link = null, marked = false;

  if (p.startKind === "change" && p.ctx.open) {
    const open = p.ctx.open;
    const mech = open.respell ? "renamed — reviving a spelling the street had carried before —" :
      p.how === "transfer" ? "the name arrived from another roadway, renamed" : "renamed";
    parts.push(`${mech} per ${docShort(open.doc)} {{(source)}}`);
    link = open.doc.url; marked = true;
  } else if (dated.length && (p.ctx.spellingIndex || 0) === 0) {
    // A stretch can be lettered more than one way on one sheet, and more than
    // one sheet can letter it: quote every distinct form, once each.
    const forms = [...new Set(dated.flatMap(x => asWrittenForms(x.asWritten)))];
    parts.push(`labeled ${asWrittenQuoted(forms)} on ${andList(citeDocs(dated.map(s => s.doc)))} {{(source)}}`);
    link = dated[0].doc.url; marked = true;
  } else if (p.startKind === "prose" && p.ctx.proseSource) {
    parts.push(`this spelling attested from ${dyear(p.start)} {{(source)}}`);
    link = p.ctx.proseSource.url; marked = true;
  } else {
    parts.push("arrival on this stretch not directly documented");
  }

  // The naming claim itself is entity-owned meaning (§7). The CURRENT name's
  // claim already lives in the segment's namedAfter field; former names have
  // no other home, so it rides on their history line.
  const lcFirst = t => /^[A-Z][a-z]/.test(t) ? t[0].toLowerCase() + t.slice(1) : t;
  if (!isCurrent) {
    if (e.namedAfter) {
      // at most one {{}} span per field (checker rule): if the clause already
      // carries a {{(source)}} marker, the namesake rides along unmarked
      parts.push(marked ? e.namedAfter.replace(/\{\{|\}\}/g, "") : e.namedAfter);
      if (!marked && e.namedAfterLink) link = e.namedAfterLink;
    } else if (e.note) parts.push(lcFirst(e.note.replace(/\.$/, "")));
    else if (!e.stub) parts.push("no namesake documented");
  }
  return { origin: parts.join(" — "), originLink: link };
}

function namedAfterFor(streetName, seg) {
  const tl = seg.timeline;
  const cur = tl.find(p => p.end === null);
  if (!cur) return { namedAfter: null, namedAfterLink: null, entity: null };
  const e = entities[cur.entity];
  const others = tl.some(p => p.entity !== cur.entity);
  const base = e.namedAfter;
  if (!base) return { namedAfter: null, namedAfterLink: e.namedAfterLink || null, entity: cur.entity };
  const head = base.split(" — ")[0];
  const arrival = tl.filter(p => p.entity === cur.entity)
                    .find(p => (p.ctx.spellingIndex || 0) === 0);
  const how = arrival && arrival.how;
  const disp = displayForm(e);
  if (how === "origin") return { namedAfter: base, namedAfterLink: e.namedAfterLink, entity: cur.entity };
  if (how === "renaming" || how === "transfer")
    return { namedAfter: `${head}, once this stretch was folded into ${disp}`, namedAfterLink: e.namedAfterLink, entity: cur.entity };
  if (how === "extension")
    return { namedAfter: `${head}, extended onto this stretch`, namedAfterLink: e.namedAfterLink, entity: cur.entity };
  if (others)
    return { namedAfter: `${head}, once this stretch was folded into ${disp}`, namedAfterLink: e.namedAfterLink, entity: cur.entity };
  return { namedAfter: `${head} — how and when this stretch joined ${disp} is not yet researched`, namedAfterLink: e.namedAfterLink, entity: cur.entity };
}

function plannedBuiltFor(seg) {
  // `unnamed` counts here and nowhere else: drawn pavement with no lettering
  // dates the roadway just as well as a labelled one does.
  const states = seg.rows.filter(r => (r.kind === "state" || r.kind === "unnamed") && !r.osm);
  const byAttest = k => states.filter(s => s.attests === k)
    .sort((x, y) => dkey(docDate(x.doc)) < dkey(docDate(y.doc)) ? -1 : 1);
  const po = byAttest("planned-on")[0], pb = byAttest("planned-by")[0];
  const bo = byAttest("built-on")[0], bb = byAttest("built-by")[0];
  let planned = null, built = null;
  if (po) planned = { text: dyear(docDate(po.doc)), url: po.doc.url };
  else if (pb) planned = { text: "by " + dyear(docDate(pb.doc)), url: pb.doc.url };
  // §6.4's collapse: planned ON an exact date, and already attested built BY
  // that same date, means it was built on it — the plat that dedicates the
  // street is also drawing it. Only on an exact match: a `built-by` EARLIER
  // than the planning date says the street existed before it was dedicated,
  // which is a fact about paper catching up with pavement, not a date to
  // sharpen.
  if (!bo && po && bb && dkey(docDate(bb.doc)) === dkey(docDate(po.doc)))
    built = { text: dfmtFull(docDate(po.doc)), url: bb.doc.url };
  else if (bo) built = { text: dfmtFull(docDate(bo.doc)), url: bo.doc.url };
  else if (bb) built = { text: asWrittenForms(bb.asWritten).length
      ? `already ${asWrittenQuoted(bb.asWritten)} by ${dfmtFull(docDate(bb.doc))} (${docShort(bb.doc)})`
      : `drawn, unlabelled, by ${dfmtFull(docDate(bb.doc))} (${docShort(bb.doc)})`,
    url: bb.doc.url };
  if (!planned && !built) return { planned: "not yet researched", built: "not yet researched" };
  return { planned: planned || null, built: built || "not yet researched" };
}

function sourcesFor(seg, curEntity) {
  const out = []; const seen = new Set();
  const push = (title, url) => { if (url && !seen.has(url)) { seen.add(url); out.push({ title, url }); } };
  // Current name's own origin citations first (the naming claim), then the
  // documents that testify about this ground, oldest first — each described
  // once, from the registry (§6.6).
  const docs = [];
  for (const r of seg.rows) if (!r.osm && r.kind !== "annotation" && r.kind !== "absent" && !docs.includes(r.doc)) docs.push(r.doc);
  docs.sort((x, y) => dkey(docDate(x)) < dkey(docDate(y)) ? -1 : 1);

  // EACH PIECE OF EVIDENCE ONCE. An entity's `sources` are the naming claim,
  // and they belong here — except where the same evidence already reaches the
  // reader by a better route:
  //
  //   - it is the `namedAfterLink`, which the namedAfter line already links;
  //   - it is a document in the corpus that letters this name, which the
  //     generator cites itself, dated and from the registry (a copy of that
  //     document — the LAPL scan of the Ord survey — counts as the same
  //     evidence, §4.4a).
  //
  // What it does NOT drop is a citation of a corpus document that does *not*
  // letter this name: an entity may cite a sheet for something other than its
  // own name on it — a related name, an adjoining tract — and that is a claim
  // the corpus cannot make on its behalf.
  const entitySources = (id, e) => (e && e.sources || []).filter(s =>
    s.url !== e.namedAfterLink && !(CORPUS_ATTESTS.get(s.url) || new Set()).has(id));

  if (curEntity) for (const s of entitySources(curEntity, entities[curEntity])) push(s.title, s.url);
  for (const d of docs) {
    const weakBasis = seg.rows.some(r => r.doc === d && ["alignment", "position"].includes(r.basis));
    push(docCitation(d, weakBasis ? "identified by map alignment, not a lot-level record" : null), d.url);
    // A `copy` is another scan of the SAME document, not a second source — it
    // is here so the two urls are known to be one piece of evidence, not so
    // the list prints both.
  }
  // The earliest sheet that letters each name this stretch has carried, even
  // where that sheet says nothing about this stretch: it is what the entity's
  // hand-typed citation used to stand in for, and unlike that citation it
  // moves when an older sheet arrives.
  for (const p of seg.timeline || []) {
    const d = earliestDocFor(p.entity);
    if (d) push(docCitation(d), d.url);
  }
  // Former entities' claims and prose-dated spellings.
  for (const p of seg.timeline || []) {
    const e = entities[p.entity];
    if (p.entity !== curEntity) for (const s of entitySources(p.entity, e)) push(s.title, s.url);
    if (p.ctx && p.ctx.proseSource) push(p.ctx.proseSource.title, p.ctx.proseSource.url);
  }
  if (!out.length) push("OpenStreetMap (current extract — this street has no research behind it yet)", "https://www.openstreetmap.org/");
  return out;
}

function labelFor(streetName, seg, i, segs, street) {
  const first = i === 0, last = i === segs.length - 1;
  const dirLo = street.orientation === "EW" ? "west of" : "south of";
  const dirHi = street.orientation === "EW" ? "east of" : "north of";
  // canonical chip order handled by caller; here segs are in ascending scalar
  let core;
  const a = shortCross(seg.crossA), b = shortCross(seg.crossB);
  // A mid-block end has no name to print. Say it relative to the end that does
  // have one — "beyond Colton" reads as an extent; "? to Colton" does not.
  // Neither end named. Usually that is a street with one segment and nothing
  // documented about it; occasionally a middle piece bounded by pavement edges.
  // Either way it beats what this used to print, which was a literal "?".
  if (!a && !b) core = segs.length === 1 ? "whole street" : "part of";
  else if (!a && isPointEnd(seg.crossA)) core = `beyond ${b}`;
  else if (!b && isPointEnd(seg.crossB)) core = `beyond ${a}`;
  else if (first && !a) core = `${dirLo} ${b || "?"}`;
  else if (last && !b) core = `${dirHi} ${a || "?"}`;
  // canonical reading order: N→S for NS streets, W→E for EW
  else core = street.orientation === "NS" ? `${b || "?"} to ${a || "?"}` : `${a || "?"} to ${b || "?"}`;
  // suffix: former name, "original X" on the origin stretch, discontinuity
  const tl = seg.timeline;
  const cur = tl.find(p => p.end === null);
  const formers = tl.filter(p => cur && p.entity !== cur.entity);
  const prevGap = i > 0 && segs[i - 1].gapAfter;
  let suffix = "";
  if (formers.length) suffix = ` (${shortForm(formers[formers.length - 1].form)})`;
  else if (cur) {
    const arrival = tl.find(p => p.entity === cur.entity && (p.ctx.spellingIndex || 0) === 0);
    if (arrival && arrival.how === "origin" && tl.length === 1 && segs.length > 1 &&
        arrival.ctx.sightings.some(s => !s.osm))
      suffix = ` (original ${shortForm(cur.form)})`;
  }
  if (prevGap) suffix += " (discontinuous)";
  return (core + suffix).trim();
}

// ---------------------------------------------------------------------------
// Boundary naming: a segment boundary that came from a pavement gap (not a
// row extent) carries no cross-street name; find the street that intersects
// nearest to it. Bounded search, bbox-prefiltered.
function nearestCrossName(streetName, scalar) {
  const street = streets.get(streetName);
  let best = null;
  for (const [other, o] of streets) {
    if (other === streetName) continue;
    if (o.orientation === street.orientation) continue; // want cross streets
    // quick reject: the other street's scalar range (on OUR axis) must span near the cut
    const oss = o.points.map(p => scalarOf(street, p));
    if (Math.min(...oss) > scalar + SNAP * 2 || Math.max(...oss) < scalar - SNAP * 2) continue;
    const x = crossScalar(streetName, other);
    if (!x || x.m > 40) continue;
    const d = Math.abs(x.scalar - scalar);
    if (d < SNAP * 2 && (!best || d < best.d)) best = { d, name: other };
  }
  return best ? best.name : null;
}

// ---------------------------------------------------------------------------
// Assemble STREET_DATA.
const STREET_DATA = {};
const searchIndex = new Map(); // canon form -> [{entity, form}]

for (const streetName of [...streets.keys()].sort()) {
  const { street, merged } = buildStreet(streetName);
  if (!merged.length) continue;
  merged.forEach(seg => deriveHow(streetName, seg, merged));

  // Resolve unnamed internal boundaries (pavement-gap edges) to cross names.
  for (let i = 0; i + 1 < merged.length; i++) {
    if (!merged[i].crossB) merged[i].crossB = nearestCrossName(streetName, merged[i].b);
    if (!merged[i + 1].crossA) merged[i + 1].crossA = nearestCrossName(streetName, merged[i + 1].a);
  }

  // Shared band boundaries: bands must tile even across physical gaps (the
  // boundary falls at the gap's start — no pavement there to classify).
  // chain[k] = boundary between ascending segments k-1 and k.
  const chain = [];
  for (let i = 1; i < merged.length; i++) chain[i] = merged[i - 1].b;

  const isNS = street.orientation === "NS";
  const n = merged.length;

  const segEntries = merged.map((seg, i) => {
    const na = namedAfterFor(streetName, seg);
    const pb = plannedBuiltFor(seg);
    const tl = seg.timeline;
    const cur = tl.find(p => p.end === null);
    const entry = {
      label: labelFor(streetName, seg, i, merged, street),
      name: streetName,
      entityId: cur ? cur.entity : null,   // §6.6: entity queries without the corpus
      namedAfter: na.namedAfter,
      namedAfterLink: na.namedAfterLink || null,
      planned: pb.planned,
      built: pb.built
    };

    // nameHistory: emit when the timeline says more than "one name, story
    // unknown" — ≥2 periods, or a single period with a derivable `how`.
    const items = tl.map(p => {
      const ol = originLine(streetName, p, tl);
      const it = { from: fmtStart(p), until: fmtEnd(p), name: p.form,
                   entityId: p.entity, formInForce: p.form };
      if (p.how) it.how = p.how;
      it.origin = ol.origin; it.originLink = ol.originLink;
      return it;
    });
    if (items.length >= 2 || (items.length === 1 && items[0].how)) entry.nameHistory = items;

    // The current name's own note had nowhere to go.
    //
    // An entity's `note` is public and is about the naming claim (§3). A
    // FORMER name's note rides on its history line (originLine), but the
    // CURRENT name's had no home at all: where `namedAfter` is null the note
    // is the only thing the project has to say, and it was being dropped.
    // Ceres Avenue showed a link to the Roman harvest goddess and not one word
    // about why she might be on a subdivided orchard.
    const notes = [];
    if (cur && entities[cur.entity] && entities[cur.entity].note)
      notes.push(entities[cur.entity].note);
    for (const a of seg.rows.filter(r => r.kind === "annotation")) notes.push(a.text);
    entry.note = notes.length ? notes.join(" ") : null;

    // Blue on the map means THIS STRETCH has testimony, not that its current
    // name has been looked up (§8 scheme 1). Every stretch of every street
    // carries an `osm` row — that is the base map, not research — so what
    // counts is a sighting from anything else. Without this, a numbered street
    // ran blue from end to end on the strength of one entity in names.js,
    // while the blocks a plat actually letters looked no different.
    //
    // And the testimony must be POSITIVE (Kenny, 2026-08-31): a stretch whose
    // only non-OSM row is an `absent` — a sheet showing NO street here yet —
    // must not look the same as one a document letters. It stays grey, and
    // the absence surfaces in the popup via `absentAsOf` below (it will also
    // feed §8 scheme 4 when that lands).
    entry.attested = seg.rows.some(r => !r.osm && r.kind !== "absent");
    const absents = seg.rows.filter(r => r.kind === "absent")
      .sort((x, y) => dkey(docDate(x.doc)) < dkey(docDate(y.doc)) ? 1 : -1);
    if (absents.length)
      entry.absentAsOf = { text: `${dyear(docDate(absents[0].doc))} (${docShort(absents[0].doc)})`,
                           url: absents[0].doc.url };
    if (entry.attested)
      entry.knownFraction = +knownFraction(seg, tl,
        +dyear(docDate(osmDoc))).toFixed(2);

    const e = cur ? entities[cur.entity] : null;
    const cats = e ? [...e.categories] : ["unresearched"];
    // "renamed" = the timeline has more than one period — a different entity
    // OR a documented respelling of the same one (Georgia Bell → Georgia).
    if (tl.length >= 2 && !cats.includes("renamed")) cats.push("renamed");
    entry.categories = cats;
    // Categories of FORMER name entities on this ground, so the map can show
    // "formerly in this category" (violet) alongside current matches (§8) —
    // e.g. Miramar's ex-"3rd St" stretches under the numbered-streets filter.
    const formerCats = [...new Set(tl
      .filter(p => !cur || p.entity !== cur.entity)
      .flatMap(p => entities[p.entity].categories || [])
      .filter(c => c !== "unresearched"))];
    if (formerCats.length) entry.formerCategories = formerCats;
    entry.disputed = e ? !!e.disputed : false;
    entry.sources = sourcesFor(seg, cur ? cur.entity : null);

    // Bands (scalar space is the same for both orientations).
    if (i > 0) entry[isNS ? "minLat" : "minLng"] = +chain[i].toFixed(4);
    if (i < n - 1) entry[isNS ? "maxLat" : "maxLng"] = +chain[i + 1].toFixed(4);
    return entry;
  });

  // Canonical chip order: NS = north→south (descending lat); EW = west→east
  // (ascending lng). Assign from/to and gapAfter in DISPLAY order.
  const order = isNS ? [...Array(n).keys()].reverse() : [...Array(n).keys()];
  const ordered = order.map((ai, j) => {
    const entry = segEntries[ai], seg = merged[ai];
    if (isNS) {
      entry.from = j === 0 ? null : seg.crossB;             // northern boundary
      entry.to = j === n - 1 ? null : seg.crossA;           // southern boundary
      const nextAsc = ai - 1;                                // display-next = asc-previous
      if (j < n - 1 && merged[nextAsc] && merged[nextAsc].gapAfter) entry.gapAfter = true;
    } else {
      entry.from = j === 0 ? null : seg.crossA;
      entry.to = j === n - 1 ? null : seg.crossB;
      if (seg.gapAfter && j < n - 1) entry.gapAfter = true;
    }
    return entry;
  });

  if (ordered.length === 1) {
    const single = ordered[0];
    delete single.label; delete single.from; delete single.to;
    delete single.minLat; delete single.maxLat; delete single.minLng; delete single.maxLng;
    delete single.gapAfter;
    STREET_DATA[streetName] = single;
  } else {
    STREET_DATA[streetName] = { name: streetName, orientation: street.orientation, segments: ordered };
  }

  // Search index rows: every recorded form of every entity seen on this street.
  for (const seg of merged) for (const p of seg.timeline) {
    const key = canon(p.form);
    if (!searchIndex.has(key)) searchIndex.set(key, []);
    const list = searchIndex.get(key);
    if (!list.some(x => x.entity === p.entity)) list.push({ entity: p.entity, form: p.form, street: streetName });
  }
}

// ---------------------------------------------------------------------------
// Search index labels (§6.5): unique form → alone; shared → disambiguated,
// authored disambiguation preferred, derived otherwise (and reported).
const SEARCH_INDEX = [];
for (const [key, list] of searchIndex) {
  for (const x of list) {
    const e = entities[x.entity];
    let label = x.form;
    if (list.length > 1) {
      const sp = e.spellings.find(s => s.forms.some(f => canon(f) === key));
      if (sp && sp.disambiguation) label += ` (${sp.disambiguation})`;
      else { label += ` (${x.street})`; report.derivedDisambig.push(`${x.entity}: "${label}"`); }
    }
    SEARCH_INDEX.push({ form: x.form, entity: x.entity, label, street: x.street });
  }
}

// ---------------------------------------------------------------------------
// Emit.
fs.mkdirSync(OUT_DIR, { recursive: true });
const stringify = o => JSON.stringify(o, null, 2);

const header = `// GENERATED FILE — DO NOT EDIT (built by generate.js from names.js and
// documents/; see MODEL-SPEC.md). Regenerate with: node generate.js
// Built: ${new Date().toISOString().slice(0, 10)}
`;
fs.writeFileSync(path.join(OUT_DIR, "streets-data.gen.js"),
  header +
  `const NEIGHBORHOODS = ${stringify(NEIGHBORHOODS)};\n\n` +
  `const CATEGORIES = ${stringify(GEN_CATEGORIES)};\n\n` +
  `const SIMILAR_PROJECTS = ${stringify(SIMILAR_PROJECTS)};\n\n` +
  `const STREET_DATA = ${stringify(STREET_DATA)};\n\n` +
  // §5.3 — ghost streets: drawn pavement with no modern counterpart. Emitted
  // as their own collection so their name entities stay reachable by search
  // rather than existing in names.js with no way to find them. Whether the
  // public map draws them is a display decision, deliberately still open.
  `const VANISHED_STREETS = ${stringify(vanished)};\n`);

fs.writeFileSync(path.join(OUT_DIR, "search-index.js"),
  header + `const SEARCH_INDEX = ${stringify(SEARCH_INDEX)};\n`);

// preview.html is a STANDING FILE, no longer generated from index.html
// (decision 2026-08-25): it is the map-side migration workspace for the §8
// features (entity search, grey/blue scheme, former-name and former-category
// highlighting, way-splitting at band boundaries) and is edited directly.
// At the §10 switchover it replaces index.html. It reads
// generated/streets-data.gen.js + generated/search-index.js, so a data
// regeneration here is all it needs to stay current.

const rep = [];
rep.push("# Generated report", "", "**Overwritten every build** (`node generate.js`).", "");
rep.push(`- Streets: ${Object.keys(STREET_DATA).length}; entries: ${Object.values(STREET_DATA).flatMap(v => v.segments || [v]).length}`);
rep.push(`- Stub entities minted from OSM (unresearched): ${report.stubs.length}`);
rep.push(`- Curated entities: ${Object.keys(NAME_ENTITIES).length}`);
if (EXCLUDE_NAMES.size) rep.push(`- Excluded OSM names (normalizeName misparses them; see generate.js): ${[...EXCLUDE_NAMES].join("; ")}`);
rep.push("");
if (report.ambiguous.length) { rep.push("## Ambiguous OSM binds (NOT bound — fix by adding extents or disambiguation)"); report.ambiguous.forEach(x => rep.push("- " + x)); rep.push(""); }
if (problems.length) { rep.push("## Row problems"); problems.forEach(x => rep.push("- " + x)); rep.push(""); }
if (report.partialDocs.length) { rep.push("## Partially swept documents (no negative inference contributed)"); report.partialDocs.forEach(x => rep.push("- " + x)); rep.push(""); }
if (report.unmatchedAsWritten.size) {
  rep.push("## asWritten strings matching no recorded spelling (recurring ones may be real spellings — §5.1)");
  for (const [k, n] of report.unmatchedAsWritten) rep.push(`- ${k} ×${n}`);
  rep.push("");
}
if (report.derivedDisambig.length) {
  rep.push("## Derived (unauthored) search disambiguations — consider authoring better ones");
  [...new Set(report.derivedDisambig)].forEach(x => rep.push("- " + x)); rep.push("");
}
if (vanished.length) {
  rep.push("", "## Vanished streets (§5.3)", "",
    "Traced through a document alignment; approximate to roughly a street width.", "");
  for (const v of vanished)
    rep.push(`- **${v.entity ? asWrittenForms(v.asWritten).join(" / ") : "(unlettered)"}**` +
             `${v.entity ? ` (${v.entity})` : ""} — ${v.path.length} points, from ${v.doc}`);
}
fs.writeFileSync(path.join(OUT_DIR, "report.md"), rep.join("\n") + "\n");

if (proposalCount)
  console.log(`Held back ${proposalCount} unconfirmed proposal row(s) — confirm them ` +
              `in the map tool's Review mode to let them reach the map.`);
console.log(`Generated ${Object.keys(STREET_DATA).length} streets, ` +
  `${Object.values(STREET_DATA).flatMap(v => v.segments || [v]).length} entries; ` +
  `${report.stubs.length} stubs; ${problems.length} row problems` +
  (problems.length ? "  ← see generated/report.md" : ""));
if (problems.length) process.exitCode = 1;
