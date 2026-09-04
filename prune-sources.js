// prune-sources.js — one-off cleanup of redundant `sources` in names.js.
// Run with --write to apply; without it, it only reports.
//
// Removes exactly two kinds of entry, both of which the generator now supplies
// or already links:
//
//   1. a source whose url is the entity's own `namedAfterLink` — the
//      namedAfter line already links it;
//   2. a source whose url is a document in documents/ (or a declared copy of
//      one, §4.4a) that LETTERS THIS NAME — generate.js cites the earliest
//      such document itself, dated and titled from the registry, on every
//      stretch that has carried the name.
//
// It does NOT touch a citation of a corpus document that does not letter the
// name: an entity may cite a sheet for a related name or an adjoining tract,
// and nothing in the corpus can make that claim on its behalf.
//
// The surgery is per-source, not per-entity: only the removed lines change, so
// the diff is readable and every entity's hand formatting survives. The parse
// comes from names-tool.html, so there is one implementation of it, and every
// edit is verified by evaluating the entity back and comparing it field by
// field with what was expected.

const fs = require("fs"), path = require("path"), vm = require("vm");

const html = fs.readFileSync(path.join(__dirname, "names-tool.html"), "utf8");
const i = html.indexOf("const SRC = {"), j = html.indexOf("\n// ====", i);
const { SRC } = vm.runInNewContext("(function(){\n" + html.slice(i, j) + "\nreturn { SRC };\n})()", {});

const { DOCUMENTS } = require("./documents/index.js");

// url -> the entity ids the document behind it letters
const attests = new Map();
for (const doc of DOCUMENTS) {
  if (doc.type === "osm") continue;
  const here = new Set();
  for (const r of doc.rows || [])
    for (const ref of [r.name, r.from, r.to]) if (typeof ref === "string" && ref) here.add(ref);
  for (const u of [doc.url, ...(doc.copies || []).map(c => c.url)]) {
    if (!u) continue;
    if (!attests.has(u)) attests.set(u, new Set());
    for (const id of here) attests.get(u).add(id);
  }
}

// --- removing one element from a `sources: [...]` array, in the source text --
function pruneSources(valueText, drop) {
  const k = valueText.indexOf("sources:");
  if (k < 0) return null;
  const open = valueText.indexOf("[", k);
  if (open < 0) return null;
  const close = SRC.endBraced(valueText, open);          // index just past "]"
  let p = open + 1;
  const els = [];
  for (;;) {
    const s = SRC.skip(valueText, p);
    if (valueText[s] === "]" || s >= close - 1) { var tail = valueText.slice(p, close - 1); break; }
    const lead = valueText.slice(p, s);
    const e = SRC.endBraced(valueText, s);
    const text = valueText.slice(s, e);
    const c = SRC.skip(valueText, e);
    const sep = valueText[c] === "," ? valueText.slice(e, c + 1) : "";
    els.push({ lead, text, sep });
    p = sep ? c + 1 : e;
  }
  const keep = els.filter(el => !drop.some(u => el.text.includes(JSON.stringify(u))));
  if (keep.length === els.length) return null;            // nothing matched
  if (keep.length) keep[keep.length - 1].sep = "";
  const body = keep.map(el => el.lead + el.text + el.sep).join("");
  const inner = keep.length ? body + tail : "";
  return valueText.slice(0, open) + "[" + inner + "]" + valueText.slice(close);
}

// --- the pass ---------------------------------------------------------------
const file = path.join(__dirname, "names.js");
const text = fs.readFileSync(file, "utf8");
const parsed = SRC.parse(text, "NAME_ENTITIES");
const before = SRC.evaluate(parsed);

let removed = 0, touched = 0, kept = [];
for (const [id, e] of Object.entries(before)) {
  const drop = [];
  for (const s of e.sources || []) {
    if (s.url === e.namedAfterLink) { drop.push(s.url); continue; }
    const who = attests.get(s.url);
    if (who && who.has(id)) { drop.push(s.url); continue; }
    if (who) kept.push(`${id}: keeps ${s.url} — the document does not letter this name`);
  }
  if (!drop.length) continue;
  const span = SRC.find(parsed, id);
  const next = pruneSources(span.valueText, drop);
  if (next === null) { console.error(`  !! ${id}: could not locate the sources to remove`); continue; }
  span.valueText = next;
  removed += drop.length; touched++;
  console.log(`  ${id}: -${drop.length}`);
}

const out = SRC.render(parsed);
const after = SRC.evaluate(SRC.parse(out, "NAME_ENTITIES"));

// --- verify: only `sources` moved, and only by the entries we meant to drop --
let bad = 0;
for (const id of Object.keys(before)) {
  const a = { ...before[id] }, b = { ...after[id] };
  const as = a.sources || [], bs = b.sources || [];
  delete a.sources; delete b.sources;
  if (JSON.stringify(a) !== JSON.stringify(b)) { console.error(`  !! ${id}: a field other than sources changed`); bad++; }
  const expect = as.filter(s => s.url !== before[id].namedAfterLink &&
                                !((attests.get(s.url) || new Set()).has(id)));
  if (JSON.stringify(bs) !== JSON.stringify(expect)) {
    console.error(`  !! ${id}: sources are not what was intended`);
    console.error(`     got    ${JSON.stringify(bs.map(s => s.url))}`);
    console.error(`     wanted ${JSON.stringify(expect.map(s => s.url))}`);
    bad++;
  }
}
if (Object.keys(before).length !== Object.keys(after).length) { console.error("  !! entity count changed"); bad++; }

console.log(`\n${removed} sources removed from ${touched} entities; ${bad} verification failures`);
if (kept.length) {
  console.log(`\nkept (a corpus document that does not letter the name — worth a look):`);
  kept.forEach(k => console.log("  " + k));
}
if (bad) { console.error("\nNOTHING WRITTEN."); process.exit(1); }
if (process.argv.includes("--write")) { fs.writeFileSync(file, out); console.log("\nnames.js written."); }
else console.log("\n(dry run — pass --write to apply)");
