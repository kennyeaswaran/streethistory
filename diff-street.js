// diff-street.js — the acceptance-test harness (MODEL-SPEC.md §11).
// Usage: node diff-street.js "3rd Street" [--full]
// Structurally diffs one street's entry between legacy/streets-data-2026-08.js
// and generated/streets-data.gen.js, field by field, segment by segment.
// Formatting noise (key order, whitespace) is invisible by construction:
// both sides are parsed and compared as data.

const fs = require("fs");
const path = require("path");

function loadData(file) {
  const src = fs.readFileSync(path.join(__dirname, file), "utf8");
  return new Function(src + "; return STREET_DATA;")();
}
const legacy = loadData("legacy/streets-data-2026-08.js");
const gen = loadData("generated/streets-data.gen.js");

const streetName = process.argv[2] || "3rd Street";
const full = process.argv.includes("--full");
const L = legacy[streetName], G = gen[streetName];
if (!L || !G) { console.error(`missing entry: legacy=${!!L} generated=${!!G}`); process.exit(1); }

const val = v => v && typeof v === "object" && !Array.isArray(v) ? (v.text !== undefined ? `{${v.text}}` : JSON.stringify(v)) : JSON.stringify(v);

function diffEntry(id, a, b) {
  const out = [];
  const fields = ["label", "from", "to", "gapAfter", "minLat", "maxLat", "minLng", "maxLng",
    "name", "namedAfter", "namedAfterLink", "planned", "built", "note", "disputed"];
  for (const f of fields) {
    const av = val(a[f]), bv = val(b[f]);
    if (av !== bv) out.push(`  ${f}: legacy=${av}\n  ${" ".repeat(f.length)}    gen=${bv}`);
  }
  const ac = JSON.stringify(a.categories || []), bc = JSON.stringify(b.categories || []);
  if (ac !== bc) out.push(`  categories: legacy=${ac}  gen=${bc}`);

  const ah = a.nameHistory || [], bh = b.nameHistory || [];
  if (ah.length !== bh.length) out.push(`  nameHistory: legacy has ${ah.length} item(s), gen has ${bh.length}`);
  const n = Math.max(ah.length, bh.length);
  for (let i = 0; i < n; i++) {
    const x = ah[i], y = bh[i];
    const fmt = h => h ? `${h.name} [${h.from} – ${h.until}] how=${h.how || "-"}` : "(none)";
    if (fmt(x) !== fmt(y)) out.push(`  nameHistory[${i}]: legacy=${fmt(x)}\n                     gen=${fmt(y)}`);
    if (full && x && y && x.origin !== y.origin)
      out.push(`  nameHistory[${i}].origin:\n    legacy: ${x.origin}\n    gen:    ${y.origin}`);
  }

  const urls = s => (s.sources || []).map(x => x.url);
  const au = urls(a), bu = urls(b);
  for (const u of au) if (!bu.includes(u)) out.push(`  source only in legacy: ${u}`);
  for (const u of bu) if (!au.includes(u)) out.push(`  source only in gen:    ${u}`);

  if (out.length) console.log(`\n--- ${id} ---\n` + out.join("\n"));
  else console.log(`\n--- ${id} --- identical (structurally)`);
  return out.length;
}

let diffs = 0;
const aSegs = L.segments || [L], bSegs = G.segments || [G];
console.log(`${streetName}: legacy ${aSegs.length} segment(s), generated ${bSegs.length} segment(s)` +
  (L.orientation || G.orientation ? `; orientation legacy=${L.orientation} gen=${G.orientation}` : ""));
const n = Math.max(aSegs.length, bSegs.length);
for (let i = 0; i < n; i++) {
  const a = aSegs[i], b = bSegs[i];
  if (!a || !b) { console.log(`\n--- segment ${i} --- only in ${a ? "legacy" : "generated"}: ${(a || b).label}`); diffs++; continue; }
  diffs += diffEntry(`segment ${i}: ${a.label || "(single)"} | ${b.label || "(single)"}`, a, b);
}
console.log(`\n${diffs ? diffs + " differing field(s)" : "STRUCTURALLY IDENTICAL"}`);
