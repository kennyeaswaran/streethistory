// test-review.js — headless tests for the phase 2 review model (TOOL-SPEC §4).
// Run: node test-review.js
//
// The functions under test live inside document-tool.html, because they are
// only meaningful next to the canvas. Rather than keep a second copy here that
// could drift, this file EXTRACTS the review block out of the page and runs it
// against the real street geometry and a frozen copy of MR066-035's alignment
// and coverage — so a regression means the tool would mis-colour a real sheet.

const fs = require("fs"), path = require("path"), vm = require("vm");
const G = require("./doc-geometry.js");

const html = fs.readFileSync(path.join(__dirname, "document-tool.html"), "utf8");
const i = html.indexOf("const REVC = {"), j = html.indexOf("function drawReview()");
if (i < 0 || j < 0) {
  console.error("Could not find the review block in document-tool.html — if it was " +
                "renamed, update the markers in this file.");
  process.exit(1);
}
const source = html.slice(i, j);

// documentStreets() lives beside the serialiser, not in the review block, but
// it is the same kind of thing: geometry the tool asserts about a real sheet.
const di = html.indexOf("function documentStreets()"), dj = html.indexOf("function streetsJsonText");
if (di < 0 || dj < 0) { console.error("Could not find documentStreets in document-tool.html"); process.exit(1); }
const bundleSource = html.slice(di, dj);

// --- fixtures --------------------------------------------------------------
// Frozen, not read from documents/mr066-035/: the document is live data and
// these tests must keep meaning something after it is swept (fixtures/README).
const ALIGN_POINTS = [
  { px: [0, 0],       ll: [34.059385, -118.260251] },
  { px: [1038, 0],    ll: [34.059506, -118.257396] },
  { px: [0, 1774],    ll: [34.055314, -118.260004] }
];
const COVERAGE = [[272, 479], [63, 827], [839, 1243], [989, 985], [799, 709]];
const IMG = { width: 1038, height: 1774 };

// --- the environment the browser would provide -----------------------------
const g = new Function(fs.readFileSync(path.join(__dirname, "streets-geometry.js"), "utf8") +
                       "; return STREET_GEOMETRY;")();
const normalize = n => n.replace(/^(North|South|East|West|N\.?|S\.?|E\.?|W\.?)\s+/i, "");
const ways = [], streetPoints = new Map();
for (const w of (g.data || g).elements) {
  if (!w.geometry || !w.tags || !w.tags.name) continue;
  const n = normalize(w.tags.name);
  ways.push({ name: n, geometry: w.geometry });
  if (!streetPoints.has(n)) streetPoints.set(n, []);
  streetPoints.get(n).push(...w.geometry);
}
const { NAME_ENTITIES } = require("./names.js");
const fit = G.fitAlignment(ALIGN_POINTS);

let rows = [];
const sandbox = {
  G, ways, streetPoints, NAME_ENTITIES, console, JSON, Math, Map, Array, Object, String,
  img: IMG, coverage: COVERAGE,
  controlPoints: () => ALIGN_POINTS,
  scanToWorldDirect: (px, py) => G.scanToWorld(fit, px, py)
};
Object.defineProperty(sandbox, "loadedDoc", { get: () => ({ rows }) });
vm.createContext(sandbox);
vm.runInContext(source + bundleSource +
  "\n;this.API = { reviewModel, clipRun, extentPoint, crossPoint, documentStreets, stitchRuns };", sandbox);
const API = sandbox.API;
const setRows = r => { rows = r; };

let pass = 0, fail = 0;
const ok = (n, c, d) => c ? (pass++, console.log("  ok  " + n))
                          : (fail++, console.error("  FAIL " + n + (d ? " — " + d : "")));

console.log("what phase 1 leaves behind");
{
  setRows([]);
  const m = API.reviewModel();
  const names = m.streets.map(s => s.name).sort();
  // Same six as test-doc-geometry finds for this coverage ring.
  ok("finds the sheet's six in-bounds streets", names.length === 6, names.join(", "));
  ok("with no rows, every one is unaccounted", m.counts.unaccounted === 6);
  ok("an empty document is not a problem", m.problems.length === 0, JSON.stringify(m.problems));
}

console.log("a plausible AI pass");
{
  setRows([
    { kind: "state", name: "third-street", asWritten: "Third St", street: "Miramar Street",
      from: "Bixel Street", to: "Boylston Street", basis: "alignment", confirmed: false },
    { kind: "state", name: "third-street", asWritten: "Arnold St", street: "3rd Street",
      from: "Bixel Street", to: null, basis: "alignment", confirmed: false },
    { kind: "silent", street: "Huntley Drive", from: null, to: null, confirmed: false },
    { kind: "vanished", name: "third-street", asWritten: "Gone St",
      trace: [[300, 500], [600, 800]], basis: "alignment", confirmed: false }
  ]);
  const m = API.reviewModel();
  const by = Object.fromEntries(m.streets.map(s => [s.name, s]));
  ok("named streets read as named", m.counts.named === 2, JSON.stringify(m.counts));
  ok("a silent row is not a naming", by["Huntley Drive"].status === "silent");
  ok("everything unmentioned stays unaccounted", m.counts.unaccounted === 3, JSON.stringify(m.counts));
  ok("a vanished row is held apart from the streets", m.vanished.length === 1);
  ok("confirmed:false is counted as awaiting review", m.proposed === 4, String(m.proposed));
  ok("nothing plausible is reported as a problem", m.problems.length === 0, JSON.stringify(m.problems));
}

console.log("the mistakes review mode exists to catch");
{
  setRows([
    { kind: "state", name: "no-such-entity", asWritten: "X", street: "3rd Street",
      from: "Bixel Street", to: "Boylston Street", confirmed: false },
    { kind: "state", name: "third-street", asWritten: "Y", street: "Alameda Street",
      from: null, to: null, confirmed: false },
    { kind: "state", name: "third-street", asWritten: "Z", confirmed: false }
  ]);
  const p = API.reviewModel().problems.join(" | ");
  ok("an invented name entity is flagged", /no name entity/.test(p), p);
  ok("a street outside the coverage polygon is flagged", /not inside the coverage/.test(p), p);
  ok("a row with no street at all is flagged", /has no street/.test(p), p);
}

console.log("extents (MODEL-SPEC §5.4)");
{
  const problems = [];
  const bixel = API.extentPoint("3rd Street", "Bixel Street", problems);
  ok("a real cross street resolves to their meeting point", bixel && isFinite(bixel.lat));
  ok("a street that never meets it is refused",
     API.extentPoint("Bixel Street", "Alameda Street", problems) === null);
  ok("…and says so rather than silently drawing the whole street",
     /does not meet/.test(problems.join(" | ")), problems.join(" | "));
  ok("null means the street's own end", API.extentPoint("3rd Street", null, problems) === null);
  const px = API.extentPoint("3rd Street", { px: [519, 887] }, problems);
  ok("a pixel extent comes back through the alignment",
     px && Math.abs(px.lat - 34.0574) < 0.003 && Math.abs(px.lon + 118.2588) < 0.003,
     JSON.stringify(px));
}

console.log("clipping a run to a row's extent");
{
  setRows([]);
  const m = API.reviewModel();
  let run = [];
  for (const s of m.streets) for (const r of s.runs) if (r.length > run.length) run = r;
  const len = pts => pts.slice(1).reduce((s, p, i) => s + G.metres(pts[i], p), 0);
  const q = i => ({ lat: run[i].lat, lon: run[i].lon });
  ok("a run long enough to test on exists", run.length >= 5, String(run.length));

  const clipped = API.clipRun(run, q(1), q(run.length - 2));
  ok("clipping drops vertices", clipped.length < run.length, `${clipped.length} of ${run.length}`);
  ok("and shortens the drawn line", len(clipped) < len(run),
     `${len(clipped).toFixed(0)} m of ${len(run).toFixed(0)} m`);
  ok("both ends null draws the whole run", API.clipRun(run, null, null).length === run.length);
  ok("the ends are unordered", API.clipRun(run, q(run.length - 2), q(1)).length === clipped.length);
  ok("coincident ends still leave something drawable", API.clipRun(run, q(3), q(3)).length >= 2);
  // A row may legitimately run past the coverage edge; it must clamp, not vanish.
  const far = API.clipRun(run, { lat: 34.2, lon: -118.5 }, q(2));
  ok("an end outside the run clamps to it", far.length >= 2 && far.length <= run.length);
}

console.log("stitching OSM's fragments back into streets");
{
  const P = [{lat:1,lon:1},{lat:1,lon:2},{lat:1,lon:3},{lat:1,lon:4}];
  const one = API.stitchRuns([[P[0],P[1]],[P[1],P[2]],[P[2],P[3]]]);
  ok("end-to-end fragments become one polyline", one.length === 1 && one[0].length === 4,
     JSON.stringify(one.map(r => r.length)));
  const rev = API.stitchRuns([[P[0],P[1]],[P[2],P[1]]]);
  ok("a fragment digitised backwards still joins", rev.length === 1 && rev[0].length === 3,
     JSON.stringify(rev.map(r => r.length)));
  const gap = API.stitchRuns([[P[0],P[1]],[P[2],P[3]]]);
  ok("genuinely separate pieces stay separate", gap.length === 2);
  ok("a lone touching point is not thrown away when it is all there is",
     API.stitchRuns([[P[0]]]).length === 1);
  ok("...but is dropped when a real run exists",
     API.stitchRuns([[P[0]], [P[2],P[3]]]).length === 1);
  setRows([]);
  const m = API.reviewModel();
  ok("no in-bounds street is left as a one-point run",
     m.streets.every(s => s.runs.every(r => r.length >= 2)),
     JSON.stringify(m.streets.map(s => [s.name, s.runs.map(r => r.length)])));
  ok("each street on this sheet stitches to a single polyline",
     m.streets.every(s => s.runs.length === 1),
     JSON.stringify(m.streets.map(s => [s.name, s.runs.length])));
}

console.log("the streets bundle that ships with the document");
{
  const d = API.documentStreets();
  const names = d.streets.map(s => s.name).sort();
  ok("carries every in-bounds street", names.length === 6, names.join(", "));

  const third = d.streets.find(s => s.name === "3rd Street");
  ok("each street has at least one run", d.streets.every(s => s.runs.length >= 1));
  ok("runs carry pixels and lat/lng of the same length",
     d.streets.every(s => s.runs.every(r => r.px.length === r.ll.length && r.px.length > 0)));

  // The pixels are the point of the file: they must land on the render.
  const all = d.streets.flatMap(s => s.runs.flatMap(r => r.px));
  ok("every pixel lands inside the render",
     all.every(([x, y]) => x >= -50 && x <= IMG.width + 50 && y >= -50 && y <= IMG.height + 50),
     JSON.stringify(all.filter(([x, y]) => x < -50 || x > IMG.width + 50 || y < -50 || y > IMG.height + 50).slice(0, 3)));

  // A pixel round-trip: the ll and the px in a run must describe one point.
  let worst = 0;
  for (const s of d.streets) for (const r of s.runs) r.px.forEach((px, i) => {
    const back = G.scanToWorld(fit, px[0], px[1]);
    worst = Math.max(worst, G.metres({ lat: back[0], lon: back[1] },
                                     { lat: r.ll[i][0], lon: r.ll[i][1] }));
  });
  ok("px and ll agree to within a metre", worst < 1, `${worst.toFixed(2)} m`);

  // Crossings are what from/to are written in terms of, so they have to be real.
  const xs = third.crossings.map(c => c.name);
  ok("3rd Street's crossings include its neighbours on this sheet",
     xs.includes("Bixel Street") && xs.includes("Boylston Street"), xs.join(", "));
  ok("no street is listed as crossing itself", d.streets.every(s => !s.crossings.some(c => c.name === s.name)));
  ok("every crossing marks whether it is inside coverage",
     d.streets.every(s => s.crossings.every(c => typeof c.insideCoverage === "boolean")));
  ok("crossings are near the street they belong to",
     d.streets.every(s => s.crossings.every(c =>
       s.runs.some(r => r.ll.some(([la, lo]) =>
         G.metres({ lat: la, lon: lo }, { lat: c.ll[0], lon: c.ll[1] }) < 400)))));
  // Everything an extent could name must be resolvable by review mode.
  ok("every crossing resolves as an extent",
     d.streets.every(s => s.crossings.every(c => API.extentPoint(s.name, c.name, []) !== null)));
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
