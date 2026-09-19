// check-legacy.js — every legacy segment is SUBSUMED by the generated output,
// or ACCEPTED by a person. The pre-switchover gate that replaced the
// street-by-street structural diff on 2026-09-15 (MODEL-IMPLEMENTATION.md,
// "What remains" §2): the generator cuts at every coverage edge, so segment
// counts will never match again, and "every difference accounted" stopped
// being a bar that could be met. This asks the question that matters instead:
// does the new map still say everything the old one said, on the same ground?
//
// Run: node check-legacy.js [--verbose] [--street "3rd Street"]
// Reads: legacy/streets-data-2026-08.js (the hand-authored map, frozen),
//        streets-data.js (the generated file), streets-geometry.js,
//        legacy/accepted-differences.js (what a person has waived, with reasons).
// Exits 1 while any HARD finding stands unaccepted.
//
// Ground is matched by GEOMETRY, never by label: a legacy segment's band
// (minLat/maxLat or minLng/maxLng along the street's axis; open ends closed
// with the street's own extent from the OSM geometry) against the generated
// segments' bands. For each legacy segment the overlapping generated
// segments are taken in union and asked:
//   coverage   — what fraction of the ground is `attested` (a document speaks
//                about it, so the new map paints it blue where the old one
//                painted the whole entry blue). HARD below COVERAGE_HARD,
//                soft below 1.
//   names      — every name in the legacy nameHistory (and the street's own)
//                appears somewhere in the union. HARD.
//   namesake   — a legacy namedAfter is not answered by null everywhere. HARD.
//   dates      — a legacy planned / built that carried a year is not answered
//                by "not yet researched" everywhere. Soft: the old value was
//                often a hedge the generator refuses to make (§6.3).
//   sources    — every legacy source URL is somewhere in the union. Soft, and
//                informational: §6.6 replaced hand-typed citations with the
//                registry's, and the LAPL Ord scan became a `copies` entry.
//
// The soft findings are the sweep list. The hard ones are the switchover's
// blockers until a person accepts each one by name in
// legacy/accepted-differences.js — an accepted finding is printed as such
// and never fails the run.

const fs = require("fs");
const path = require("path");
const { normalizeName } = require(path.join(__dirname, "site-config.js"));

const load = f => new Function(fs.readFileSync(path.join(__dirname, f), "utf8") + "; return STREET_DATA;")();
const LEGACY = load("legacy/streets-data-2026-08.js");
const GEN = load("streets-data.js");
const ACCEPTED = fs.existsSync(path.join(__dirname, "legacy/accepted-differences.js"))
  ? require(path.join(__dirname, "legacy/accepted-differences.js")) : [];
const VERBOSE = process.argv.includes("--verbose");
const ONLY = (() => { const i = process.argv.indexOf("--street"); return i > 0 ? process.argv[i + 1] : null; })();
const COVERAGE_HARD = 0.5;

// ---- street extents from the geometry, to close open-ended bands ----------
const g = new Function(fs.readFileSync(path.join(__dirname, "streets-geometry.js"), "utf8") + "; return STREET_GEOMETRY;")();
const geom = g.data || g;
const extent = new Map(); // name -> { lat:[min,max], lng:[min,max] }
for (const w of geom.elements) {
  if (!w.geometry || !w.tags || !w.tags.name) continue;
  const n = normalizeName(w.tags.name, w.id);
  const e = extent.get(n) || { lat: [Infinity, -Infinity], lng: [Infinity, -Infinity] };
  for (const p of w.geometry) {
    e.lat[0] = Math.min(e.lat[0], p.lat); e.lat[1] = Math.max(e.lat[1], p.lat);
    e.lng[0] = Math.min(e.lng[0], p.lon); e.lng[1] = Math.max(e.lng[1], p.lon);
  }
  extent.set(n, e);
}

// ---- helpers ----------------------------------------------------------------
const num = x => (x === null || x === undefined) ? null : x;
function band(unit, isNS, ext) {
  // A unit is a segment (banded on one axis) or a whole-street entry (open).
  const lo = num(isNS ? unit.minLat : unit.minLng), hi = num(isNS ? unit.maxLat : unit.maxLng);
  const full = isNS ? ext.lat : ext.lng;
  return [lo === null ? full[0] : lo, hi === null ? full[1] : hi];
}
const overlap = (a, b) => Math.max(0, Math.min(a[1], b[1]) - Math.max(a[0], b[0]));
// Only the TRAILING type word is dropped — "Court Street" is the name Court,
// not nothing (2026-09-18: stripping type words anywhere made it match itself
// on neither side and flagged Court Street as lost from Court Street).
const canon = s => (s || "").toLowerCase()
  .replace(/[“”"']/g, "").replace(/\(.*?\)/g, " ").trim()
  .replace(/\s+(street|st|avenue|ave|boulevard|blvd|place|pl|road|rd|court|ct|lane|ln|alley|drive|dr|way|terrace|parkway|freeway)\.?$/, "")
  .replace(/[^a-z0-9]+/g, " ").trim();
const nameForms = s => { // "Calle de los Chapules (“Grasshopper Street”)" → both forms
  const inner = (s.match(/\((.*?)\)/) || [])[1];
  return [canon(s), inner ? canon(inner) : null].filter(Boolean);
};
const hasYear = s => typeof s === "string" ? /\b1[89]\d\d\b/.test(s) : s && typeof s === "object" && /\b1[89]\d\d\b/.test(s.text || "");
const urlOf = s => (typeof s === "string" ? s : s.url || "").replace(/\/+$/, "").replace(/^http:/, "https:");
const isAccepted = (street, label, check) => ACCEPTED.find(a =>
  a.street === street && (a.label === "*" || a.label === label || (a.label === undefined && label === "*")) && a.check === check);

// ---- the check ----------------------------------------------------------------
const findings = []; // { street, label, check, hard, detail, accepted }
let legacyUnits = 0;
for (const [street, lv] of Object.entries(LEGACY)) {
  if (ONLY && street !== ONLY) continue;
  const gv = GEN[street];
  const lunits = lv.segments ? lv.segments : [lv];
  legacyUnits += lunits.length;
  if (!gv) { findings.push({ street, label: "*", check: "street", hard: true, detail: "street absent from generated output" }); continue; }
  const ext = extent.get(street);
  if (!ext) { findings.push({ street, label: "*", check: "street", hard: true, detail: "street not in streets-geometry.js — bands cannot be closed" }); continue; }
  const isNS = (gv.orientation || lv.orientation) === "NS";
  const gunits = gv.segments ? gv.segments : [gv];
  const gbands = gunits.map(u => band(u, isNS, ext));

  for (const lu of lunits) {
    const label = lv.segments ? lu.label : "*";
    const lb = band(lu, isNS, ext);
    const len = lb[1] - lb[0];
    const hits = gunits.map((u, i) => ({ u, ov: overlap(lb, gbands[i]) })).filter(h => h.ov > 0);
    const push = (check, hard, detail) => findings.push({ street, label, check, hard, detail, accepted: isAccepted(street, label, check) });
    if (!hits.length) { push("coverage", true, "no generated segment overlaps this ground"); continue; }
    const union = hits.map(h => h.u);

    // coverage
    const attested = hits.filter(h => h.u.attested).reduce((t, h) => t + h.ov, 0) / (len || 1);
    if (attested < 1 - 1e-6) {
      const pct = Math.round(attested * 100);
      push("coverage", attested < COVERAGE_HARD, `${pct}% of this ground is attested by a document (old map: whole entry blue)` +
        (VERBOSE ? ` — generated: ${hits.map(h => `${h.u.label || h.u.name}${h.u.attested ? "" : " [grey]"}`).join("; ")}` : ""));
    }
    // names
    // A name the generated map carries as a period, OR as a lettered form
    // quoted in a period's origin line ("labeled “CALLE PRINCIPAL”, “MAIN
    // STREET” on…") — §5.1 records a Spanish/English pair as one period.
    const quoted = t => [...(t || "").matchAll(/[“"]([^”"]+)[”"]/g)].map(m => m[1]);
    const gnames = new Set(union.flatMap(u => [u.name, ...(u.nameHistory || []).flatMap(h => [h.name, ...quoted(h.origin)])])
      .map(canon).filter(Boolean));
    const lnames = [lu.name, ...(lu.nameHistory || []).map(h => h.name)].filter(Boolean);
    const missing = lnames.filter(n => !nameForms(n).some(f => gnames.has(f) || [...gnames].some(x => x.includes(f) || f.includes(x))));
    if (missing.length) push("names", true, `name(s) the old map recorded here are absent from the new: ${missing.map(n => `"${n}"`).join(", ")}`);
    // namesake
    if (lu.namedAfter && !union.some(u => u.namedAfter)) push("namesake", true, `namedAfter lost — old: "${lu.namedAfter.slice(0, 80)}"`);
    // dates
    for (const f of ["planned", "built"]) {
      if (hasYear(lu[f]) && !union.some(u => hasYear(u[f])))
        push("dates", false, `${f} lost its year — old: "${typeof lu[f] === "string" ? lu[f] : lu[f].text}", new: "${[...new Set(union.map(u => typeof u[f] === "string" ? u[f] : (u[f] && u[f].text) || "—"))].join('" / "')}"`);
    }
    // sources
    const gurls = new Set(union.flatMap(u => u.sources || []).map(urlOf));
    const lost = (lu.sources || []).map(urlOf).filter(u => u && !gurls.has(u));
    if (lost.length) push("sources", false, `${lost.length} of ${(lu.sources || []).length} source URL(s) not cited on this ground` + (VERBOSE ? `: ${lost.join(" ")}` : ""));
  }
}

// ---- report ------------------------------------------------------------------
const byStreet = new Map();
for (const f of findings) { if (!byStreet.has(f.street)) byStreet.set(f.street, []); byStreet.get(f.street).push(f); }
const hardOpen = findings.filter(f => f.hard && !f.accepted);
const softOpen = findings.filter(f => !f.hard && !f.accepted);
const acc = findings.filter(f => f.accepted);
for (const [street, fs_] of byStreet) {
  console.log(`\n${street}`);
  for (const f of fs_) {
    const tag = f.accepted ? "accepted" : f.hard ? "HARD" : "soft";
    console.log(`  ${tag.padEnd(8)} ${f.check.padEnd(9)} ${f.label === "*" ? "(whole street)" : f.label}: ${f.detail}${f.accepted ? ` — ${f.accepted.reason}` : ""}`);
  }
}
const streetsChecked = ONLY ? 1 : Object.keys(LEGACY).length;
console.log(`\n${streetsChecked} legacy street(s), ${legacyUnits} legacy entries checked against ${Object.keys(GEN).length} generated streets.`);
console.log(`HARD findings open: ${hardOpen.length}  (coverage<${COVERAGE_HARD * 100}%: ${hardOpen.filter(f => f.check === "coverage").length}, names: ${hardOpen.filter(f => f.check === "names").length}, namesake: ${hardOpen.filter(f => f.check === "namesake").length}, street: ${hardOpen.filter(f => f.check === "street").length})`);
console.log(`soft findings open: ${softOpen.length}  (coverage partial: ${softOpen.filter(f => f.check === "coverage").length}, dates: ${softOpen.filter(f => f.check === "dates").length}, sources: ${softOpen.filter(f => f.check === "sources").length})`);
console.log(`accepted: ${acc.length}`);
if (hardOpen.length) { console.log("\nThe switchover waits for the HARD list to be empty — fix the corpus, or accept each by name in legacy/accepted-differences.js."); process.exit(1); }
console.log("\nEvery legacy entry is subsumed or accepted.");
