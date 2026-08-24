// check-model.js — validates the AUTHORED layers (names.js + documents/)
// against MODEL-SPEC.md §9. Run: node check-model.js
// (The generated output is separately validated by the existing
// check-data.js, which reads the same consumable shape as before.)

const fs = require("fs");
const path = require("path");
const { NAME_ENTITIES } = require("./names.js");
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

// ---- documents ------------------------------------------------------------
const DATE_RE = /^\d{4}(-\d{2}(-\d{2})?)?$/;
const TYPES = ["tract-map", "survey", "sanborn", "directory", "ordinance", "osm", "annotation", "news-report"];
const ATTESTS = ["planned-on", "planned-by", "built-on", "built-by"];
// §5: change rows only on documents that attest the transition itself.
const TRANSITION_TYPES = ["ordinance", "news-report"];

const seenDocIds = new Set();
for (const doc of DOCUMENTS) {
  const d = doc.id || "?";
  if (seenDocIds.has(doc.id)) err(d, "duplicate document id");
  seenDocIds.add(doc.id);
  for (const f of ["id", "title", "url", "type", "attests", "completeness"])
    if (!doc[f]) err(d, "missing", f);
  if (!doc.date || !(doc.date.on || doc.date.after || doc.date.before)) err(d, "missing/empty date");
  else for (const k of ["on", "after", "before"])
    if (doc.date[k] && !DATE_RE.test(doc.date[k]) && doc.date[k] !== "unknown") err(d, `date.${k} malformed:`, doc.date[k]);
  if (!TYPES.includes(doc.type)) err(d, "unknown type:", doc.type);
  if (!ATTESTS.includes(doc.attests)) err(d, "unknown attests:", doc.attests);
  if (!["incidental", "exhaustive-in-scope"].includes(doc.completeness)) err(d, "unknown completeness:", doc.completeness);
  if (doc.type !== "osm") {
    if (!Array.isArray(doc.coverage) || doc.coverage.length < 3)
      err(d, "coverage must be a polygon (≥3 [lat,lng] points) — §4.4, load-bearing");
    if (doc.sweptFully === undefined) err(d, "sweptFully missing (gates negative inference — §4.5)");
    if (doc.sweptFully === false && !Array.isArray(doc.sweptFor))
      err(d, "sweptFully:false requires sweptFor (partial work must be visible and resumable)");
  }

  for (const [i, row] of (doc.rows || []).entries()) {
    const r = `${d}.rows[${i}]`;
    if (!["state", "change", "annotation"].includes(row.kind)) { err(r, "unknown kind:", row.kind); continue; }
    if (doc.type !== "osm" && !streets.has(row.street)) err(r, "street not in geometry:", row.street);
    if (row.kind === "state") {
      if (doc.type !== "osm" && !resolve(row.name)) err(r, "name id does not resolve:", row.name);
      if (doc.type !== "osm" && !row.asWritten) err(r, "state row missing asWritten (verbatim ink — §5.1)");
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
        if (!streets.has(c)) { err(r, "cross-street not in geometry:", c); continue; }
        const m = intersectionM(row.street, c);
        if (m !== null && m > 60) err(r, `"${c}" does not meet ${row.street} (nearest ${m} m)`);
      }
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
for (const [form, owners] of formOwners) {
  const uniqIds = [...new Set(owners.map(o => o.id))];
  if (uniqIds.length < 2) continue;
  const labels = uniqIds.map(id => {
    const o = owners.find(x => x.id === id && x.disambiguation);
    return o ? o.disambiguation : `(derived for ${id})`;
  });
  if (new Set(labels).size < labels.length)
    err(`form "${form}"`, "shared by", uniqIds.join(", "), "— disambiguations do not produce distinct labels");
}

if (errors) { console.error(`\n${errors} error(s).`); process.exit(1); }
console.log(`Model checks pass: ${Object.keys(NAME_ENTITIES).length} entities, ` +
  `${DOCUMENTS.length} documents, ${DOCUMENTS.reduce((n, d) => n + (d.rows || []).length, 0)} rows.`);
