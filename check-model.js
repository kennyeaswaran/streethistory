// check-model.js — validates the AUTHORED layers (names.js + documents/)
// against MODEL-SPEC.md §9. Run: node check-model.js
// (The generated output is separately validated by the existing
// check-data.js, which reads the same consumable shape as before.)

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

const DocGeom = require("./doc-geometry.js");
const { DOCUMENTS } = require("./documents/index.js");

let errors = 0;
const err = (...m) => { errors++; console.error("ERROR:", ...m); };
const warn = (...m) => console.warn("warn: ", ...m);

// ---- geometry (for street / cross-street existence and extent sanity) -----
const normalizeName = n => n.replace(/^(North|South|East|West|N\.?|S\.?|E\.?|W\.?)\s+/i, "");
const g = new Function(fs.readFileSync(path.join(__dirname, "streets-geometry.js"), "utf8") + "; return STREET_GEOMETRY;")();
const geom = g.data || g;
const streets = new Map();
for (const w of geom.elements) {
  if (!w.geometry || !w.tags || !w.tags.name) continue;
  const n = normalizeName(w.tags.name);
  if (!streets.has(n)) streets.set(n, []);
  streets.get(n).push(...w.geometry);
}
function intersectionM(a, b) {
  const pa = streets.get(a), pb = streets.get(b);
  if (!pa || !pb) return null;
  let best = Infinity;
  for (const p of pa) for (const q of pb)
    best = Math.min(best, Math.hypot(p.lat - q.lat, (p.lon - q.lon) * 0.83));
  return Math.round(best * 111000);
}

// ---- names.js -------------------------------------------------------------
const ids = new Set(Object.keys(NAME_ENTITIES));
const aliasOwner = {};
for (const [id, e] of Object.entries(NAME_ENTITIES)) {
  if (!Array.isArray(e.spellings) || !e.spellings.length) err(id, "no spellings");
  (e.spellings || []).forEach((sp, i) => {
    if (!Array.isArray(sp.forms) || !sp.forms.length) err(id, `spellings[${i}] has no forms`);
    if ((sp.from || sp.until) && !sp.source)
      err(id, `spellings[${i}] carries prose dates but no source (§3 prose exception requires one)`);
  });
  if (e.namedAfter === undefined) err(id, "namedAfter missing (use null if genuinely nothing)");
  // `note` is PUBLIC: when a former name has no namedAfter, generate.js prints
  // the note as that name's origin line on the map. Working notes — identity
  // decisions, what was searched and not found, whose call it was — belong in
  // `internalNote`, which nothing renders. Getting this backwards put "Kenny:
  // worth a look" and a paragraph about Kines onto the public site.
  if (e.internalNote !== undefined && typeof e.internalNote !== "string" && e.internalNote !== null)
    err(id, "internalNote must be a string or null");
  if (typeof e.note === "string" && /\b(Kenny|TODO|check this|research-leads|2026-\d\d-\d\d)\b/.test(e.note))
    warn(id, "note reads like a working note and `note` is shown to readers — " +
             "move it to internalNote");
  if (!Array.isArray(e.categories) || !e.categories.length) err(id, "no categories");
  if (e.namedAfter) {
    const open = (e.namedAfter.match(/\{\{/g) || []).length, close = (e.namedAfter.match(/\}\}/g) || []).length;
    if (open !== close || open > 1) err(id, "namedAfter has unbalanced or multiple {{}} markers");
  }
  for (const s of e.sources || []) if (!/^https?:\/\//.test(s.url || "")) err(id, "bad source url:", s.url);
  if (e.possiblySameAs && !ids.has(e.possiblySameAs)) err(id, "possiblySameAs references unknown id:", e.possiblySameAs);
  for (const a of e.aliases || []) {
    if (ids.has(a)) err(id, "alias collides with a live entity id:", a);
    if (aliasOwner[a]) err(id, `alias "${a}" already claimed by ${aliasOwner[a]}`);
    aliasOwner[a] = id;
  }
  if (e.namedAfter === null && !e.categories.some(c => ["unknown", "unresearched"].includes(c)))
    warn(id, "namedAfter is null — expected 'unknown' (researched, not found) or 'unresearched'");
}
const resolve = id => ids.has(id) ? id : aliasOwner[id];

// ONE ROW, MORE THAN ONE FORM OF THE INK (§5.1).
//
// The Ord survey letters most of its streets twice, in English and in
// Spanish: "GRASSHOPPER ST." and "CALLE DE LAS CHAPULES" name one street on
// one sheet. Entered as two rows they double-count the same ground and draw
// as two overlapping periods; joined with a slash they record punctuation the
// sheet does not have. So `asWritten` may be a string or an ARRAY of strings,
// in reading order, and everything downstream asks for the forms rather than
// the field.
function asWrittenForms(v) {
  if (v == null) return [];
  return (Array.isArray(v) ? v : [v]).filter(x => typeof x === "string" && x.trim());
}

// ---- documents ------------------------------------------------------------
const DATE_RE = /^\d{4}(-\d{2}(-\d{2})?)?$/;
const TYPES = ["tract-map", "survey", "sanborn", "directory", "ordinance", "osm", "annotation", "news-report"];
const ATTESTS = ["planned-on", "planned-by", "built-on", "built-by"];
// §4.1a: what KIND of evidence, as opposed to what kind of publication. It is
// what the tools dispatch on, and it is declared rather than sniffed — "is
// there a render in the folder?" breaks the day a scanned ordinance arrives.
const FORMS = ["drawn", "textual", "derived"];
// §5: change rows only on documents that attest the transition itself.
const TRANSITION_TYPES = ["ordinance", "news-report"];

const seenDocIds = new Set();
for (const doc of DOCUMENTS) {
  const d = doc.id || "?";
  if (seenDocIds.has(doc.id)) err(d, "duplicate document id");
  seenDocIds.add(doc.id);
  // A document with no rows yet is a STUB: phase 1 has aligned it and bounded
  // it, and the facts printed on the sheet — its title, its date, where the
  // scan came from — are still to be read off the map itself. That is the AI
  // pass's job (TASK.md asks for them), so a stub is warned about, not failed:
  // blocking would have meant discarding an alignment only a human can make.
  const stub = !(doc.rows || []).length && doc.type !== "osm";
  const need = (f, msg) => stub ? warn(d, "stub:", msg) : err(d, msg);
  for (const f of ["id", "type", "attests", "completeness", "form"])
    if (!doc[f]) err(d, "missing", f);
  for (const f of ["title", "url"])
    if (!doc[f]) need(f, "missing " + f);
  if (!doc.date || !(doc.date.on || doc.date.after || doc.date.before))
    need("date", "missing/empty date");
  else for (const k of ["on", "after", "before"])
    if (doc.date[k] && !DATE_RE.test(doc.date[k]) && doc.date[k] !== "unknown") err(d, `date.${k} malformed:`, doc.date[k]);
  if (!TYPES.includes(doc.type)) err(d, "unknown type:", doc.type);
  if (doc.form && !FORMS.includes(doc.form)) err(d, "unknown form:", doc.form);
  // A DECLARATION IS ONLY WORTH ANYTHING IF SOMETHING ENFORCES IT. Everything
  // below is what "the evidence is what this document says, not where things
  // sit on a sheet" rules out; without these the field would be a comment.
  if (doc.form === "textual") {
    if (doc.alignment)
      err(d, "textual document carries an alignment — there is no sheet to align (§4.1a)");
    if (Array.isArray(doc.coverage) &&
        doc.coverage.some(pt => Array.isArray(pt) && pt.length === 2 &&
                                (Math.abs(pt[0]) > 90 || Math.abs(pt[1]) > 180)))
      err(d, "textual document's coverage looks like scan pixels — a declared scope is lat/lng (§4.1a)");
    for (const [i, row] of (doc.rows || []).entries()) {
      if (row.trace)
        err(`${d}.rows[${i}]`, "trace on a textual document — a trace is drawn pavement (§5.3)");
      for (const k of ["from", "to", "fromCross", "toCross"])
        if (row[k] && typeof row[k] === "object" && row[k].px)
          err(`${d}.rows[${i}]`, `${k} is a scan pixel on a textual document — extents here are cross streets or null (§4.1a)`);
    }
  }
  if (!ATTESTS.includes(doc.attests)) err(d, "unknown attests:", doc.attests);
  if (!["incidental", "exhaustive-in-scope"].includes(doc.completeness)) err(d, "unknown completeness:", doc.completeness);
  if (doc.type !== "osm") {
    if (!Array.isArray(doc.coverage) || doc.coverage.length < 3)
      err(d, "coverage must be a polygon (≥3 points) — §4.4, load-bearing");
    else if (!doc.coverage.every(pt => Array.isArray(pt) && pt.length === 2 && pt.every(Number.isFinite)))
      err(d, "coverage points must be two finite numbers");
    else if (!doc.alignment && doc.coverage.some(([la, ln]) => Math.abs(la) > 90 || Math.abs(ln) > 180))
      err(d, "coverage looks like pixels but the document has no alignment — §4.6 stores pixels only where there is a scan to measure them against");
    if (doc.sweptFully === undefined) err(d, "sweptFully missing (gates negative inference — §4.5)");
    if (doc.sweptFully === false && !Array.isArray(doc.sweptFor))
      err(d, "sweptFully:false requires sweptFor (partial work must be visible and resumable)");

  // §4.4: a hand-traced polygon sometimes strays a few metres onto ground the
  // document says nothing about. Naming those streets here is a claim about
  // the POLYGON; a absent row would be a claim about the MAP, and only the
  // latter licenses arguing from the document's silence. Keeping them apart is
  // the point, so a name that is not a real street — or that also carries rows
  // — means one of the two has been used for the other.
  if (doc.coverageExcept !== undefined) {
    if (!Array.isArray(doc.coverageExcept)) err(d, "coverageExcept must be an array");
    else for (const x of doc.coverageExcept) {
      // Either a street name (all of it) or {street, from, to} (one stretch).
      // The stretch form exists because a polygon usually overshoots past a
      // crossing, not onto a whole street the document is otherwise silent on.
      const n = typeof x === "string" ? x : x && x.street;
      if (!n || !streets.has(n)) { err(d, "coverageExcept names a street not in the geometry:", n); continue; }
      if (typeof x === "string") {
        if ((doc.rows || []).some(r => r.street === n))
          err(d, `coverageExcept drops all of "${n}" but rows also speak for it — it is ` +
                 `either covered or it is not; drop a stretch instead`);
        if ((doc.sweptFor || []).includes(n))
          err(d, `coverageExcept and sweptFor both list "${n}"`);
      } else if (x.from === undefined || x.to === undefined) {
        err(d, `coverageExcept entry for "${n}" needs from and to (null for the street's own end)`);
      }
    }
  }
  }
  if (doc.scan !== undefined && doc.scan !== null && typeof doc.scan !== "string")
    err(d, "scan must be a path string or null");
  if (doc.alignment) {
    const al = doc.alignment;
    if (!al.image) err(d, "alignment.image missing — pixels are meaningless without the render they were measured on");
    if (!al.dpi) warn(d, "alignment.dpi missing — PIPELINE.md requires the render's dpi alongside any pixel coordinate");
    if (!Array.isArray(al.points) || al.points.length < 2)
      err(d, "alignment needs at least 2 control points");
    else for (const [i, pt] of al.points.entries()) {
      if (!Array.isArray(pt.px) || pt.px.length !== 2 || !pt.px.every(Number.isFinite))
        err(d, `alignment.points[${i}].px must be [x, y]`);
      if (!Array.isArray(pt.ll) || pt.ll.length !== 2 || !pt.ll.every(Number.isFinite))
        err(d, `alignment.points[${i}].ll must be [lat, lng]`);
    }
  }
  // §5.5: a fully swept document is one a human has vouched for, row by row.
  // The osm pseudo-document is exempt: it is derived from streets-geometry.js
  // at load time, not read by anyone, and it is tertiary evidence (§4.1).
  // `confirmed: false` marks a PROPOSAL awaiting review; an absent flag means
  // the row was authored directly rather than proposed. Only an explicit false
  // blocks the sweep.
  if (doc.sweptFully === true && doc.type !== "osm")
    for (const [i, row] of (doc.rows || []).entries())
      if (row.confirmed === false)
        err(d, `sweptFully:true but rows[${i}] is still an unconfirmed proposal (§5.5)`);

  // A row still marked `confirmed: false` is a proposal nobody has checked;
  // holding it to the full contract would mean the checker fails on every
  // fresh AI pass, which trains people to ignore it. Warn instead — and note
  // that sweptFully:true is already blocked while any proposal remains, so an
  // incomplete proposal can never reach the generated data unnoticed.
  const proposalOrErr = (row, r, msg) =>
    row.confirmed === false ? warn(r, "proposal:", msg) : err(r, msg);

  // §5.4: `null` means the modern street's own end, which for a long street is
  // far outside any one sheet. A row that ends in `null` on a street whose
  // geometry leaves the coverage polygon claims testimony over ground the
  // document never showed — and for an `absent` row that is a false negative
  // spanning half the city. Warned, not errored: on a short street that really
  // does end inside coverage, `null` is exactly right.
  if (doc.coverage && doc.coverage.length >= 3 && doc.alignment) {
    let ring = null;
    try {
      ring = DocGeom.ringIsPixels(doc.coverage)
        ? DocGeom.coverageToWorld(DocGeom.fitAlignment(doc.alignment.points), doc.coverage)
        : doc.coverage;
    } catch (e) { /* alignment problems are reported elsewhere */ }
    if (ring) for (const [i, row] of (doc.rows || []).entries()) {
      if (!row.street || (row.from !== null && row.to !== null)) continue;
      const pts = streets.get(row.street);
      if (!pts) continue;
      const outside = pts.filter(p => !DocGeom.pointInPolygon([p.lat, p.lon], ring)).length;
      if (outside)
        warn(`${d}.rows[${i}]`, `${row.kind} row on ${row.street} ends in null, but that ` +
             `street runs outside this document's coverage — null means the STREET's end, ` +
             `not the coverage edge, so this claims more ground than the sheet shows`);
    }
  }

  for (const [i, row] of (doc.rows || []).entries()) {
    const r = `${d}.rows[${i}]`;
    if (!["state", "change", "annotation", "absent", "unnamed", "vanished",
          "vanished-unnamed"].includes(row.kind)) { err(r, "unknown kind:", row.kind); continue; }
    // §5.3 vanished rows describe absent pavement: no modern street, a traced
    // polyline in scan pixels instead. `vanished-unnamed` is the same corridor
    // with nothing lettered on it — `unnamed` (§5.2a) crossed with `vanished`,
    // and the one combination the other five kinds cannot express.
    if (row.kind === "vanished" || row.kind === "vanished-unnamed") {
      if (!doc.alignment) err(r, `${row.kind} row needs the document to have an alignment (§4.6) — its trace is in scan pixels`);
      if (!Array.isArray(row.trace) || row.trace.length < 2)
        err(r, `${row.kind} row needs a trace of at least 2 points`);
      else if (!row.trace.every(pt => Array.isArray(pt) && pt.length === 2 && pt.every(Number.isFinite)))
        err(r, `${row.kind} trace points must be [x, y] scan pixels`);
      if (row.street) err(r, `${row.kind} row must not name a modern street — that is what makes it vanished`);
      if (row.kind === "vanished-unnamed") {
        // Nothing is lettered, so there is nothing to name it after and no
        // ink to record. Carrying either would make it a `vanished` row that
        // someone half-filled in, which is the state this kind exists to end.
        if (row.name) err(r, "vanished-unnamed row must not carry a name — nothing is lettered on it");
        if (row.asWritten) err(r, "vanished-unnamed row must not carry asWritten — if there IS ink, it is a `vanished` row");
        continue;
      }
      if (row.name == null) proposalOrErr(row, r,
        "vanished row has no name id — identity is assigned in review (§5.5)");
      else if (!resolve(row.name)) err(r, "name id does not resolve:", row.name);
      if (!asWrittenForms(row.asWritten).length)
        err(r, "vanished row missing asWritten (verbatim ink — §5.1)");
      continue;
    }
    if (doc.type !== "osm" && !streets.has(row.street)) err(r, "street not in geometry:", row.street);
    // §5.2 silence is stated, not inferred, so it can be reviewed and ticked off.
    if (row.kind === "absent") {
      if (row.name) err(r, "absent row must not carry a name — it records that the map shows NO STREET here");
      if (row.asWritten) err(r, "absent row must not carry asWritten");
    }
    // §5.2a — pavement drawn, nothing lettered. Positive evidence that the
    // roadway existed; no evidence at all about its name, which is exactly
    // what distinguishes it from `absent` (no roadway) and from `state`.
    if (row.kind === "unnamed") {
      if (row.name) err(r, "unnamed row must not carry a name — the point of it is that the document names nothing here");
      if (row.asWritten) err(r, "unnamed row must not carry asWritten — there is no ink to quote");
      if (row.attests && !ATTESTS.includes(row.attests)) err(r, "bad attests override:", row.attests);
    }
    if (row.kind === "state") {
      // An unconfirmed proposal is allowed to have no `name` yet. Identity is a
      // claim about a naming LINEAGE, which needs the whole corpus in view, so
      // the AI pass is told to leave it out and record the ink in asWritten
      // instead; review is where it gets assigned. Anything not marked as a
      // proposal must still resolve.
      if (doc.type !== "osm") {
        if (row.name == null) proposalOrErr(row, r,
          "state row has no name id — identity is assigned in review (§5.5)");
        else if (!resolve(row.name)) err(r, "name id does not resolve:", row.name);
      }
      const forms = asWrittenForms(row.asWritten);
      if (doc.type !== "osm" && !forms.length) err(r, "state row missing asWritten (verbatim ink — §5.1)");
      if (Array.isArray(row.asWritten)) {
        if (row.asWritten.length !== forms.length)
          err(r, "asWritten array holds something that is not a non-empty string");
        if (new Set(forms.map(f => f.toLowerCase())).size !== forms.length)
          err(r, "asWritten lists the same form twice:", JSON.stringify(row.asWritten));
        if (forms.length === 1)
          warn(r, "asWritten is an array of one — write the single form as a plain string");
      }
      if (row.attests && !ATTESTS.includes(row.attests)) err(r, "bad attests override:", row.attests);
    }
    if (row.kind === "change") {
      if (!TRANSITION_TYPES.includes(doc.type))
        err(r, `change row on a ${doc.type} document — only a document attesting the transition itself may carry one (§5)`);
      if (!resolve(row.from)) err(r, "from id does not resolve:", row.from);
      if (!resolve(row.to)) err(r, "to id does not resolve:", row.to);
      if (row.from === row.to && !row.toForm)
        err(r, "respelling row (from === to) needs toForm to say which spelling took effect");
    }
    if (row.kind === "annotation") {
      if (!row.url) err(r, "annotation must carry its own source url (§5)");
      if (!row.text) err(r, "annotation missing text");
    }
    // extents parse and lie on the named street
    if (doc.type !== "osm") {
      const crosses = row.kind === "change" ? [row.fromCross, row.toCross] : [row.from, row.to];
      for (const c of crosses) {
        if (c === null || c === undefined) continue;
        // §5.4: an extent may end mid-block, as a point instead of a name.
        if (typeof c === "object") {
          if (c.px) {
            if (!doc.alignment) err(r, "pixel extent needs an alignment on the document (§4.6)");
            if (!Array.isArray(c.px) || c.px.length !== 2 || !c.px.every(Number.isFinite))
              err(r, "extent px must be [x, y]");
          } else if (c.ll) {
            if (!Array.isArray(c.ll) || c.ll.length !== 2 || !c.ll.every(Number.isFinite))
              err(r, "extent ll must be [lat, lng]");
          } else err(r, "extent object must carry px or ll (§5.4)");
          continue;
        }
        if (!streets.has(c)) { err(r, "cross-street not in geometry:", c); continue; }
        const m = intersectionM(row.street, c);
        if (m !== null && m > 60) err(r, `"${c}" does not meet ${row.street} (nearest ${m} m)`);
      }
    }
  }
}

// ---- an entity citing a document it is not attested on --------------------
//
// A name entity's `sources` may link a recorded map that has since been read
// into documents/. That is fine and often useful: on a stretch no sheet
// covers, the entity's own citation is the only link to the evidence for the
// name, so generate.js keeps it (it yields only where the stretch already
// cites the same document, §6.6).
//
// What is NOT fine is citing a sheet that says nothing about this name. It
// means one of two things, and both are worth knowing: a row is missing, or —
// the usual cause — the citation names one sheet of a multi-sheet plat while
// the name is lettered on another. Four entities did exactly that: three cited
// sheet 5 of the Wolfskill Orchard Tract for names lettered on sheets 1-4, and
// `bull` cited M.R. 53-68 for a name that appears on 53-73. Nothing else would
// have caught it, because every one of those links resolves to a real scan.
{
  const attesting = new Map();          // entity id -> Set of document ids
  for (const doc of DOCUMENTS) {
    if (doc.type === "osm") continue;
    for (const r of doc.rows || [])
      for (const ref of [r.name, r.from, r.to].filter(Boolean)) {
        const id = resolve(ref);
        if (!id) continue;
        if (!attesting.has(id)) attesting.set(id, new Set());
        attesting.get(id).add(doc.id);
      }
  }
  // ONE URL CAN BE SEVERAL DOCUMENTS. The county serves all five sheets of the
  // Wolfskill Orchard Tract as one PDF, so MR030-009.pdf is the url of
  // mr030-009-p1 through -p5. A citation of that url is answered by a row on
  // ANY of them — treating it as the last sheet read would flag three
  // perfectly good citations. Sheets that are separate FILES (M.R. 53-68 and
  // 53-73 are) stay separate, which is where the real errors live.
  const docsByUrl = new Map();
  const at = url => { if (!docsByUrl.has(url)) docsByUrl.set(url, []); return docsByUrl.get(url); };
  for (const doc of DOCUMENTS) {
    if (doc.type === "osm") continue;
    if (doc.url) at(doc.url).push(doc.id);
    for (const c of doc.copies || []) if (c.url) at(c.url).push(doc.id);
  }
  for (const [id, e] of Object.entries(NAME_ENTITIES)) {
    for (const src of e.sources || []) {
      const cited = docsByUrl.get(src.url);
      if (!cited) continue;
      const on = attesting.get(id) || new Set();
      if (cited.some(d => on.has(d))) continue;
      const elsewhere = [...on];
      const what = cited.length === 1 ? `documents/${cited[0]}/`
                                      : `documents/${cited[0]}/ (and ${cited.length - 1} more sharing that scan)`;
      warn(id, `sources cites ${what}, but no row there names this entity —`,
           elsewhere.length
             ? `it IS attested on ${elsewhere.join(", ")}, so the citation probably names ` +
               `the wrong sheet of the same map`
             : `and it is not attested anywhere in the corpus, so either a row is missing ` +
               `or the citation is wrong`);
    }
  }
}

// ---- generator-facing ambiguity check (§9): two entities sharing a form
// must be separable into distinct search labels.
const formOwners = new Map();
for (const [id, e] of Object.entries(NAME_ENTITIES)) {
  for (const sp of e.spellings) for (const f of sp.forms) {
    const k = f.toLowerCase();
    if (!formOwners.has(k)) formOwners.set(k, []);
    formOwners.get(k).push({ id, disambiguation: sp.disambiguation || null });
  }
}
// THE CHECKER HAS TO MODEL WHAT THE GENERATOR ACTUALLY EMITS.
//
// This stood in for an unauthored disambiguation with `(derived for <id>)`,
// which is unique per entity — so two entities sharing a form could never
// collide and this check could never fire. What generate.js really derives is
// the modern street name (`label += ` (${x.street})``), so two entities that
// share a form AND appear on the same street produce the same label, silently.
// Nothing in the corpus does today; the point is to hear about it when
// something does.
const streetsOfEntity = new Map();       // entity id -> Set of modern streets
for (const doc of DOCUMENTS)
  for (const row of doc.rows || []) {
    if (!row.name || !row.street) continue;
    const id = resolve(row.name);
    if (!id) continue;
    if (!streetsOfEntity.has(id)) streetsOfEntity.set(id, new Set());
    streetsOfEntity.get(id).add(row.street);
  }
for (const [form, owners] of formOwners) {
  const uniqIds = [...new Set(owners.map(o => o.id))];
  if (uniqIds.length < 2) continue;
  const labelsFor = id => {
    const o = owners.find(x => x.id === id && x.disambiguation);
    if (o) return [o.disambiguation];               // authored: one label
    const streets = [...(streetsOfEntity.get(id) || [])];
    // No rows yet means no derived label yet, and nothing to collide.
    return streets.length ? streets : [`(no rows for ${id})`];
  };
  const seen = new Map();
  for (const id of uniqIds)
    for (const label of labelsFor(id)) {
      if (!seen.has(label)) seen.set(label, []);
      seen.get(label).push(id);
    }
  for (const [label, ids] of seen)
    if (ids.length > 1)
      err(`form "${form}"`, "on", label, "— shared by", ids.join(", "),
          "and the derived label is the street name, so both render identically. " +
          "Give at least one an authored `disambiguation` (§6.5).");
}

// Entities minted in review mode are usable but un-researched. Named here so
// they stay visible: an entry in names-new.js is a to-do, not a resting place.
const pending = Object.entries(NAME_ENTITIES).filter(([, e]) => e.pendingResearch).map(([id]) => id);
if (pending.length)
  warn("names-new.js", `${pending.length} entit${pending.length === 1 ? "y" : "ies"} awaiting ` +
       `research (namesake, sources), then a move into names.js:`, pending.join(", "));

if (errors) { console.error(`\n${errors} error(s).`); process.exit(1); }
console.log(`Model checks pass: ${Object.keys(NAME_ENTITIES).length} entities, ` +
  `${DOCUMENTS.length} documents, ${DOCUMENTS.reduce((n, d) => n + (d.rows || []).length, 0)} rows.`);
