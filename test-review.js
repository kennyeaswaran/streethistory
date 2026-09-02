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

// zoomView sits with the projections, not the review block.
const zi = html.indexOf("function zoomView("), zj = html.indexOf("\n// The three control points");
if (zi < 0 || zj < 0) { console.error("Could not find zoomView in document-tool.html"); process.exit(1); }
const zoomSource = html.slice(zi, zj);

// The two gates review mode enforces: what stops a row being confirmed, and
// what stops a document being called fully swept.
const slice = (a, b) => {
  const i = html.indexOf(a), j = html.indexOf(b);
  if (i < 0 || j < 0) { console.error("Could not find " + a + " in document-tool.html"); process.exit(1); }
  return html.slice(i, j);
};
const gateSource = slice("function confirmBlocker(", "function mintEntityFor(") +
                   slice("function sweepBlockers()", "function updateReviewActions()");

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
vm.runInContext("const KY = 110540; let lastModel = null; let coverageExcept = [];\n" +
  "let docSwept = { fully: false, for: [] };\n" + zoomSource + source + bundleSource + gateSource +
  "\n;this.API = { reviewModel, clipRun, extentPoint, crossPoint, documentStreets, stitchRuns, coverageStreets, zoomView, MIN_RUN_M, confirmBlocker, sweepBlockers, runGaps, clipRange, splitRowAt, sameExtent, blockingRows, rowMetres, asWrittenForms, retractSweepIfBroken, setModel: m => { lastModel = m; }, runEnds, streetIsNS, rowSpansNothing, emptyRows, setSwept: v => { docSwept = v; }, getSwept: () => docSwept };", sandbox);
const API = sandbox.API;
const setRows = r => { rows = r; };

let pass = 0, fail = 0;
const ok = (n, c, d) => c ? (pass++, console.log("  ok  " + n))
                          : (fail++, console.error("  FAIL " + n + (d ? " — " + d : "")));

console.log("zooming the view about the cursor");
{
  // The property that matters: whatever ground point is under the cursor must
  // still be under it afterwards. A sign error here does not read as a broken
  // zoom, it reads as the map scrolling away — which is how it shipped.
  const at = (v, cw, ch, sx, sy) => [v.lat + (ch/2 - sy) * v.mpp / 110540,
                                     v.lng + (sx - cw/2) * v.mpp /
                                       (111320 * Math.cos(v.lat * Math.PI/180))];
  const V0 = { lat: 34.057, lng: -118.259, mpp: 0.55 };
  const CW = 1400, CH = 900;
  let worst = 0, worstAt = null;
  for (const [sx, sy] of [[700,450],[0,0],[1400,900],[100,860],[1300,40]])
    for (const f of [1.02, 0.98, 1.25, 0.8, 2, 0.5]) {
      const before = at(V0, CW, CH, sx, sy);
      const v = API.zoomView(V0, CW, CH, sx, sy, f);
      const after = at(v, CW, CH, sx, sy);
      const d = G.metres({lat:before[0],lon:before[1]}, {lat:after[0],lon:after[1]});
      if (d > worst) { worst = d; worstAt = [sx, sy, f]; }
    }
  ok("the point under the cursor does not move", worst < 0.05,
     worst.toFixed(3) + " m at " + JSON.stringify(worstAt));

  const zin = API.zoomView(V0, CW, CH, 700, 450, 1.25);
  ok("zooming in shrinks metres-per-pixel", zin.mpp < V0.mpp);
  ok("zooming about the centre leaves the centre alone",
     Math.abs(zin.lat - V0.lat) < 1e-9 && Math.abs(zin.lng - V0.lng) < 1e-9);

  // The bug that shipped was a slow drift, not a jump: simulate a trackpad
  // swipe of many tiny zooms and check the anchor still holds at the end.
  let v = V0;
  for (let i = 0; i < 40; i++) v = API.zoomView(v, CW, CH, 700, 200, 1.01);
  const b = at(V0, CW, CH, 700, 200), a2 = at(v, CW, CH, 700, 200);
  const drift = G.metres({lat:b[0],lon:b[1]}, {lat:a2[0],lon:a2[1]});
  ok("40 small zooms do not drift the anchor", drift < 0.5, drift.toFixed(2) + " m");
  ok("...and they do zoom", v.mpp < V0.mpp * 0.8, v.mpp.toFixed(3));
}

console.log("slivers: streets that merely clip the polygon");
{
  const cov = API.coverageStreets();
  const names = cov.streets.map(s => s.name).sort();
  const len = r => r.slice(1).reduce((t, p, i) => t + G.metres(r[i], p), 0);
  ok("Huntley Drive's 6.5 m stub is not in bounds", !names.includes("Huntley Drive"),
     names.join(", "));
  ok("it is reported as a sliver, not silently dropped",
     cov.slivers.some(s => s.name === "Huntley Drive"), JSON.stringify(cov.slivers));
  ok("every sliver really is under the threshold",
     cov.slivers.every(s => s.metres < API.MIN_RUN_M), JSON.stringify(cov.slivers));
  ok("everything kept has a run at least that long",
     cov.streets.every(s => s.runs.some(r => len(r) >= API.MIN_RUN_M)));
  ok("4th Street's short but real run survives", names.includes("4th Street"), names.join(", "));
  ok("five streets remain", names.length === 5, names.join(", "));
}

console.log("what phase 1 leaves behind");
{
  setRows([]);
  const m = API.reviewModel();
  const names = m.streets.map(s => s.name).sort();
  // Same six as test-doc-geometry finds for this coverage ring.
  ok("finds the sheet's five in-bounds streets", names.length === 5, names.join(", "));
  ok("with no rows, every one is unaccounted", m.counts.unaccounted === 5);
  ok("an empty document is not a problem", m.problems.length === 0, JSON.stringify(m.problems));
}

console.log("a plausible AI pass");
{
  // 3rd Street's row stops at a mid-block point, so part of it is left over.
  // It used to stop at `to: null`, which reached only as far as whichever end
  // OSM drew first; now that a null end means the street's canonical end, that
  // row would cover the lot and there would be nothing partial to test.
  setRows([]);
  API.setModel(null);
  const thirdRun = API.reviewModel().streets.find(s => s.name === "3rd Street").runs[0];
  const midPt = thirdRun[Math.floor(thirdRun.length / 2)];
  const midOn3rd = { px: G.worldToScan(fit, midPt.lat, midPt.lon).map(v => Math.round(v)) };
  setRows([
    { kind: "state", name: "third-street", asWritten: "Third St", street: "Miramar Street",
      from: "Bixel Street", to: "Boylston Street", basis: "alignment", confirmed: false },
    { kind: "state", name: "third-street", asWritten: "Arnold St", street: "3rd Street",
      from: "Bixel Street", to: midOn3rd, basis: "alignment", confirmed: false },
    { kind: "absent", street: "4th Street", from: null, to: null, confirmed: false },
    { kind: "vanished", name: "third-street", asWritten: "Gone St",
      trace: [[300, 500], [600, 800]], basis: "alignment", confirmed: false }
  ]);
  API.setModel(null);
  const m = API.reviewModel();
  const by = Object.fromEntries(m.streets.map(s => [s.name, s]));
  // A row that covers only part of a street leaves the rest unaccounted, so
  // the street reads "partial" — that stretch is the thing still to be decided.
  ok("a fully covered street reads as named", m.counts.named === 1, JSON.stringify(m.counts));
  ok("a partly covered one reads as partial", m.counts.partial === 1, JSON.stringify(m.counts));
  ok("and the leftover is measured, not just noted", m.counts.gapMetres > 0,
     String(m.counts.gapMetres));
  ok("a absent row is not a naming", by["4th Street"].status === "absent");
  ok("everything unmentioned stays unaccounted", m.counts.unaccounted === 2, JSON.stringify(m.counts));
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
  ok("carries every in-bounds street", names.length === 5, names.join(", "));

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

console.log("finding the stretches no row speaks for");
{
  const run = Array.from({ length: 11 }, (_, i) => ({ lat: 34, lon: -118 + i * 0.001 }));
  const L = r => r.slice(1).reduce((t, p, i) => t + G.metres(r[i], p), 0);
  ok("this test run is long enough to have gaps in", L(run) > 500, L(run).toFixed(0));

  ok("nothing covered, one gap over the whole run",
     JSON.stringify(API.runGaps(run, [])) === JSON.stringify([[0, 10]]),
     JSON.stringify(API.runGaps(run, [])));
  ok("fully covered, no gaps", API.runGaps(run, [[0, 10]]).length === 0);
  ok("covered in the middle leaves a gap at each end",
     API.runGaps(run, [[4, 6]]).length === 2, JSON.stringify(API.runGaps(run, [[4, 6]])));
  ok("overlapping ranges merge rather than inventing a gap between them",
     API.runGaps(run, [[0, 6], [4, 10]]).length === 0,
     JSON.stringify(API.runGaps(run, [[0, 6], [4, 10]])));
  ok("ranges given out of order still merge",
     API.runGaps(run, [[4, 10], [0, 6]]).length === 0);
  ok("two separated ranges leave the gap between them",
     API.runGaps(run, [[0, 3], [7, 10]]).length === 1,
     JSON.stringify(API.runGaps(run, [[0, 3], [7, 10]])));
  // A sliver of a gap is not worth reporting, for the same reason a sliver of
  // coverage is not worth including. This run's steps are ~9 m, so leaving one
  // uncovered is under the threshold and leaving four is over it.
  const fine = Array.from({ length: 11 }, (_, i) => ({ lat: 34, lon: -118 + i * 0.0001 }));
  ok("a gap under the minimum length is not reported",
     API.runGaps(fine, [[0, 9]]).length === 0, JSON.stringify(API.runGaps(fine, [[0, 9]])));
  ok("…but a real one still is",
     API.runGaps(fine, [[0, 6]]).length === 1, JSON.stringify(API.runGaps(fine, [[0, 6]])));
}

console.log("the gate on confirming a row");
{
  const nameless = { kind: "state", asWritten: "ARNOLD ST.", street: "3rd Street", confirmed: false };
  ok("a state row with no name entity cannot be confirmed",
     /no name entity/.test(API.confirmBlocker(nameless) || ""), String(API.confirmBlocker(nameless)));
  ok("...nor one with no verbatim ink",
     /asWritten/.test(API.confirmBlocker({ kind: "state", name: "arnold", street: "3rd Street" }) || ""));
  ok("a complete state row can be confirmed",
     API.confirmBlocker({ kind: "state", name: "arnold", asWritten: "ARNOLD ST.",
                          street: "3rd Street" }) === null);
  ok("a absent row needs neither — it names nothing",
     API.confirmBlocker({ kind: "absent", street: "4th Street" }) === null);
  ok("a vanished row is held to the same standard as a state row",
     /no name entity/.test(API.confirmBlocker({ kind: "vanished", asWritten: "Gone St" }) || ""));
}

console.log("the gate on sweptFully");
{
  setRows([]);
  let b = API.sweepBlockers().join(" | ");
  ok("an empty document is not sweepable", /unaccounted/.test(b), b);

  // Everything named, but still unconfirmed proposals.
  const full = [
    { kind: "state", name: "arnold", asWritten: "ARNOLD ST.", street: "3rd Street", confirmed: false },
    { kind: "state", name: "third-street", asWritten: "THIRD ST.", street: "Miramar Street", confirmed: false },
    { kind: "state", name: "bixel", asWritten: "BIXEL ST", street: "Bixel Street", confirmed: false },
    { kind: "state", name: "figueroa-gov", asWritten: "FIGUEROA ST.", street: "Boylston Street", confirmed: false },
    { kind: "absent", street: "4th Street", confirmed: false }
  ];
  setRows(full);
  b = API.sweepBlockers().join(" | ");
  ok("covering every street is not enough while proposals stand",
     /unconfirmed proposal/.test(b), b);

  // Confirmed, as review would leave them.
  // Naming a street is not the same as accounting for all of it. Truncate one
  // row at a mid-block point and the sweep must refuse, in metres — which is
  // what coverage is a claim about. (This is the MR006-138 case: a row for the
  // part matching the plat, and 152 m past it that nothing spoke for.)
  const confirmed = full.map(r => { const c = { ...r }; delete c.confirmed; return c; });
  const mir = API.reviewModel().streets.find(s => s.name === "Miramar Street");
  const mid = mir.runs[0][Math.floor(mir.runs[0].length / 2)];
  const midPx = G.worldToScan(fit, mid.lat, mid.lon).map(v => Math.round(v));
  setRows(confirmed.map(r => r.street === "Miramar Street"
    ? { ...r, to: { px: midPx } } : r));
  ok("a row truncated mid-block leaves the rest unaccounted",
     /m across/.test(API.sweepBlockers().join(" | ")), API.sweepBlockers().join(" | "));
  ok("…and it is reported against the right street",
     /Miramar/.test(API.sweepBlockers().join(" | ")), API.sweepBlockers().join(" | "));

  // A confirmed row that lost its name must still block: the sweep is the
  // claim that licenses arguing from silence, so it checks, not trusts.
  setRows(full.map(r => { const c = { ...r }; delete c.confirmed;
                          if (c.name === "bixel") delete c.name; return c; }));
  ok("a confirmed row with no name entity still blocks the sweep",
     /no name entity/.test(API.sweepBlockers().join(" | ")), API.sweepBlockers().join(" | "));

  // Huntley is a sliver, so leaving it unmentioned must not block.
  // Whole-street extents: nothing left over.
  setRows(confirmed);
  ok("with every metre accounted for and confirmed, it sweeps",
     API.sweepBlockers().length === 0, API.sweepBlockers().join(" | "));
  ok("the Huntley sliver still does not have to be accounted for",
     !/Huntley/.test(API.sweepBlockers().join(" | ")));
}

console.log("splitting a row in two");
{
  // The property that makes a split safe: the two halves together account for
  // exactly the ground the one row did. A split that quietly lost a stretch
  // would leave the sweep passing on ground nobody had decided anything about.
  const whole = { kind: "state", name: "bixel", asWritten: "BIXEL ST", street: "Bixel Street" };
  setRows([whole]);
  API.setModel(null);
  const before = API.reviewModel();
  const bx = before.streets.find(s => s.name === "Bixel Street");
  const run = bx.runs[0];
  const mid = run[Math.floor(run.length / 2)];
  const at = { px: G.worldToScan(fit, mid.lat, mid.lon).map(v => Math.round(v)) };

  const [A, B] = API.splitRowAt(whole, at);
  ok("the first half keeps `from` and takes the split point as `to`",
     A.from === undefined && JSON.stringify(A.to) === JSON.stringify(at));
  ok("the second half starts at the split point and keeps `to`",
     JSON.stringify(B.from) === JSON.stringify(at) && B.to === undefined);
  ok("neither half inherits confirmation",
     A.confirmed === false && B.confirmed === false);
  ok("everything else is carried across unchanged",
     A.name === "bixel" && B.name === "bixel" && A.asWritten === "BIXEL ST" &&
     B.street === "Bixel Street");
  ok("splitting does not mutate the row it was given",
     whole.to === undefined && whole.confirmed === undefined);

  setRows([A, B]);
  API.setModel(null);
  const after = API.reviewModel();
  const gapsFor = m => Math.round((m.gaps.filter(g => g.street === "Bixel Street"))
    .reduce((t, g) => t + g.metres, 0));
  ok("the two halves leave exactly the gaps the one row left",
     gapsFor(after) === gapsFor(before), `${gapsFor(before)} m -> ${gapsFor(after)} m`);
  ok("...and the halves add up to the whole",
     Math.abs(API.rowMetres(A) + API.rowMetres(B) - API.rowMetres(whole)) <= 2,
     `${API.rowMetres(A)} + ${API.rowMetres(B)} vs ${API.rowMetres(whole)}`);
  ok("each half is shorter than the whole",
     API.rowMetres(A) > 0 && API.rowMetres(B) > 0 &&
     API.rowMetres(A) < API.rowMetres(whole));

  // A change row carries its extent in fromCross/toCross, not from/to.
  const ch = { kind: "change", from: "aztec-avenue", to: "belmont-avenue",
               street: "Bixel Street", fromCross: null, toCross: null };
  const [CA, CB] = API.splitRowAt(ch, at);
  ok("a change row splits on fromCross/toCross, leaving from/to as entity ids",
     CA.from === "aztec-avenue" && JSON.stringify(CA.toCross) === JSON.stringify(at) &&
     JSON.stringify(CB.fromCross) === JSON.stringify(at));

  ok("null and undefined are the same extent", API.sameExtent(null, undefined));
  ok("a point equal to an end is caught", API.sameExtent(at, { px: at.px.slice() }));
  ok("...and a different point is not", !API.sameExtent(at, { px: [at.px[0] + 1, at.px[1]] }));
}

console.log("reaching the rows that block a sweep");
{
  // A blocker stated as a count is unreachable when the row is metres long and
  // drawn underneath a longer one. The panel lists the rows themselves, so
  // this is the list it lists.
  const good = { kind: "state", name: "bixel", asWritten: "BIXEL ST", street: "Bixel Street" };
  const prop = { kind: "absent", street: "4th Street", confirmed: false };
  const nameless = { kind: "state", asWritten: "ARNOLD ST.", street: "3rd Street" };
  const both = { kind: "state", asWritten: "X", street: "Miramar Street", confirmed: false };
  setRows([good, prop, nameless, both]);
  API.setModel(null);
  const b = API.blockingRows();
  ok("a confirmed, named row is not a blocker", !b.includes(good));
  ok("an unconfirmed row is", b.includes(prop));
  ok("a nameless state row is, even though it is confirmed", b.includes(nameless));
  ok("a row that is both appears once", b.filter(r => r === both).length === 1);
  ok("the list and the count agree",
     b.length === 3 && /unconfirmed proposal/.test(API.sweepBlockers().join(" | ")) &&
     /no name entity/.test(API.sweepBlockers().join(" | ")), String(b.length));

  // The measurement the panel shows next to each one — the thing that makes
  // "this is a stray, delete it" a judgement rather than a guess.
  setRows([good]);
  API.setModel(null);
  API.reviewModel();
  const full = API.rowMetres(good);
  const bxRun = API.reviewModel().streets.find(s => s.name === "Bixel Street").runs[0];
  const px = i => ({ px: G.worldToScan(fit, bxRun[i].lat, bxRun[i].lon).map(v => Math.round(v)) });
  const stub = { ...good, from: px(0), to: px(1) };
  setRows([stub]);
  API.setModel(null);
  API.reviewModel();
  ok("a whole-street row measures the whole street in coverage", full > 50, String(full));
  ok("a one-vertex stub measures far less", API.rowMetres(stub) < full / 2,
     `${API.rowMetres(stub)} vs ${full}`);
  ok("a row on a street outside coverage measures nothing",
     API.rowMetres({ kind: "state", street: "Wilshire Boulevard" }) === null);
  ok("a vanished row has no stretch to measure",
     API.rowMetres({ kind: "vanished", asWritten: "Gone St", trace: [[0,0],[9,9]] }) === null);
}

console.log("a vanished corridor with nothing lettered on it");
{
  // The one claim the six kinds could not make: the plat draws a street, no
  // modern street follows it, AND it carries no name. Entered as `vanished`
  // with asWritten "unnamed" it was a lie about the ink; entered as `vanished`
  // with nothing it looked like a half-filled row and blocked the sweep.
  const lettered = { kind: "vanished", asWritten: "CALLE PRINCIPAL", name: "chapules",
                     trace: [[0, 0], [9, 9]] };
  const bare = { kind: "vanished-unnamed", trace: [[0, 0], [9, 9]] };
  ok("a lettered vanished row still needs a name", API.confirmBlocker({ ...lettered, name: undefined }) !== null);
  ok("…and still needs its ink", API.confirmBlocker({ ...lettered, asWritten: undefined }) !== null);
  ok("a complete lettered vanished row can be confirmed", API.confirmBlocker(lettered) === null);
  ok("an unlettered one needs neither, and can be confirmed",
     API.confirmBlocker(bare) === null, String(API.confirmBlocker(bare)));

  setRows([bare]);
  API.setModel(null);
  ok("…and it is not counted as a row missing its name entity",
     !/no name entity/.test(API.sweepBlockers().join(" | ")), API.sweepBlockers().join(" | "));
  ok("…nor listed as a blocker", !API.blockingRows().includes(bare));
}

console.log("one row, more than one form of the ink");
{
  ok("a plain string is one form",
     JSON.stringify(API.asWrittenForms("GRASSHOPPER ST.")) === '["GRASSHOPPER ST."]');
  ok("an array is all of them",
     API.asWrittenForms(["GRASSHOPPER ST.", "CALLE DE LAS CHAPULES"]).length === 2);
  ok("nothing is no forms",
     API.asWrittenForms(null).length === 0 && API.asWrittenForms(undefined).length === 0 &&
     API.asWrittenForms([]).length === 0);
  ok("blank strings do not count as ink",
     API.asWrittenForms(["", "   ", "REAL"]).length === 1);

  // The gate reads the forms, not the field: a bilingual row is as confirmable
  // as a monolingual one, and an empty array is as unconfirmable as no field.
  const bi = { kind: "state", name: "chapules", street: "3rd Street",
               asWritten: ["GRASSHOPPER ST.", "CALLE DE LAS CHAPULES"] };
  ok("a row lettered twice can be confirmed", API.confirmBlocker(bi) === null,
     String(API.confirmBlocker(bi)));
  ok("an empty array is still no ink",
     /asWritten/.test(API.confirmBlocker({ ...bi, asWritten: [] }) || ""));
}

console.log("a sweep that stops being true is withdrawn");
{
  // mr053-068 was saved sweptFully:true with an unconfirmed proposal in it:
  // the gate only ever ran on the way IN, so an edit afterwards left the
  // strongest claim the model makes standing over rows that no longer support
  // it, and only check-model.js noticed.
  // A set that really does account for every metre — anything less and the
  // sweep would be withdrawn for having gaps, which is not what is under test.
  const covered = [
    { kind: "state", name: "arnold", asWritten: "ARNOLD ST.", street: "3rd Street" },
    { kind: "state", name: "third-street", asWritten: "THIRD ST.", street: "Miramar Street" },
    { kind: "state", name: "bixel", asWritten: "BIXEL ST", street: "Bixel Street" },
    { kind: "state", name: "figueroa-gov", asWritten: "FIGUEROA ST.", street: "Boylston Street" },
    { kind: "absent", street: "4th Street" }
  ];
  setRows(covered);
  API.setModel(null);
  API.setSwept({ fully: true, for: [] });
  ok("a sweep with nothing wrong stands", API.retractSweepIfBroken() === false &&
     API.getSwept().fully === true, API.sweepBlockers().join(" | "));

  setRows([...covered, { kind: "vanished", trace: [[0, 0], [9, 9]], confirmed: false }]);
  API.setModel(null);
  ok("tracing an unconfirmed vanished street withdraws it",
     API.retractSweepIfBroken() === true && API.getSwept().fully === false);
  ok("…and it stays withdrawn rather than flapping",
     API.retractSweepIfBroken() === false && API.getSwept().fully === false);

  // An unlettered trace is complete on arrival, so it must NOT cost the sweep
  // once confirmed — otherwise the new kind would be unusable on a swept sheet.
  setRows([...covered, { kind: "vanished-unnamed", trace: [[0, 0], [9, 9]] }]);
  API.setModel(null);
  API.setSwept({ fully: true, for: [] });
  ok("a confirmed unlettered trace does not cost the sweep",
     API.retractSweepIfBroken() === false && API.getSwept().fully === true);
  API.setSwept({ fully: false, for: [] });
}

console.log("rows whose two ends are the same place");
{
  // These make no segment, account for no metres, and leave the ground they
  // were meant to cover unaccounted — while looking, in the file, like a row
  // somebody has dealt with. Colton Street's naming was one of them.
  const whole = { kind: "state", name: "bixel", asWritten: "BIXEL ST", street: "Bixel Street" };
  setRows([whole]);
  API.setModel(null);
  const bx = API.reviewModel().streets.find(s => s.name === "Bixel Street");
  const run = bx.runs[0];
  const px = i => ({ px: G.worldToScan(fit, run[i].lat, run[i].lon).map(v => Math.round(v)) });

  ok("a whole-street row spans plenty", !API.rowSpansNothing(whole));
  const oneVertex = { ...whole, from: px(0), to: px(0) };
  setRows([oneVertex]); API.setModel(null);
  ok("both ends on the same point spans nothing", API.rowSpansNothing(oneVertex));
  const twoVertices = { ...whole, from: px(0), to: px(run.length - 1) };
  setRows([twoVertices]); API.setModel(null);
  ok("…but end to end does not", !API.rowSpansNothing(twoVertices));

  // The case the generator catches and vertex-snapping does not: two ends
  // metres apart across a diagonal street that project to the same cut.
  ok("a traced vanished row is never called empty — it has no street",
     !API.rowSpansNothing({ kind: "vanished", asWritten: "X", trace: [[0, 0], [9, 9]] }));
  ok("a row on a street outside coverage is not called empty either",
     !API.rowSpansNothing({ kind: "state", street: "Wilshire Boulevard", from: null, to: null }));

  setRows([whole, oneVertex]);
  API.setModel(null);
  ok("the empty one is listed", API.emptyRows().length === 1);
  ok("…and it blocks the sweep, in words",
     /span/.test(API.sweepBlockers().join(" | ")), API.sweepBlockers().join(" | "));
  ok("…and is reachable from the blockers list", API.blockingRows().includes(oneVertex));

  // The point of NOT deleting it automatically: the usual cause is reversed
  // ends, and the row is real. Swapping them fixes it in place.
  // Why the tool must not delete these for you: a collapsed row is a real
  // claim with a bad extent, and moving ONE end brings it back. Deleting it
  // would throw away the testimony and the diagnosis together — which is what
  // would have happened to Colton Street.
  const fixed = { ...oneVertex, to: px(run.length - 1) };
  setRows([fixed]); API.setModel(null);
  ok("moving one end revives a collapsed row", !API.rowSpansNothing(fixed));
  ok("…and the row is otherwise untouched",
     fixed.name === "bixel" && fixed.asWritten === "BIXEL ST");
}

console.log("which way round a run is");
{
  // §5.4 fixes the vocabulary — `from` is the NORTH end of a north-south
  // street and the WEST end of an east-west one — but a run's point order
  // comes from OSM, which has no such convention. Half of them run the other
  // way, and everything that turned a null end into a run index used to assume
  // index 0 was `from`.
  const NS = [{ lat: 34.06, lon: -118.25 }, { lat: 34.05, lon: -118.25 }];   // north -> south
  const NSrev = NS.slice().reverse();
  ok("a north-to-south run starts at `from`", API.runEnds(NS, true).fromIdx === 0);
  ok("a south-to-north run does not", API.runEnds(NSrev, true).fromIdx === 1);
  ok("…and its `to` is the other end", API.runEnds(NSrev, true).toIdx === 0);
  const EW = [{ lat: 34.05, lon: -118.26 }, { lat: 34.05, lon: -118.25 }];   // west -> east
  ok("a west-to-east run starts at `from`", API.runEnds(EW, false).fromIdx === 0);
  ok("an east-to-west run does not", API.runEnds(EW.slice().reverse(), false).fromIdx === 1);

  ok("a street longer north-south than east-west is NS",
     API.streetIsNS({ runs: [NS] }) === true);
  ok("…and the other way round is EW", API.streetIsNS({ runs: [EW] }) === false);

  // The consequence that matters: `from: X, to: null` covers the ground from X
  // to the street's canonical end, whichever way OSM happened to draw it.
  setRows([]);
  API.setModel(null);
  const m = API.reviewModel();
  const third = m.streets.find(s => s.name === "3rd Street");
  const run = third.runs[0];
  const west = run.reduce((a, b) => a.lon <= b.lon ? a : b);
  const east = run.reduce((a, b) => a.lon >= b.lon ? a : b);
  const fwd = API.clipRun(run, west, null, false);
  const back = API.clipRun(run.slice().reverse(), west, null, false);
  const len = r => r.slice(1).reduce((t, p, i) => t + G.metres(r[i], p), 0);
  ok("a null `to` reaches the east end whichever way the run is drawn",
     Math.abs(len(fwd) - len(back)) < 1, `${len(fwd).toFixed(0)} vs ${len(back).toFixed(0)}`);
  ok("…and that is nearly the whole run", len(fwd) > len(run) * 0.9,
     `${len(fwd).toFixed(0)} of ${len(run).toFixed(0)}`);
  const partial = API.clipRun(run, west, east, false);
  ok("two given ends are order-insensitive too",
     Math.abs(len(partial) - len(API.clipRun(run, east, west, false))) < 1);
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
