// test-doc-geometry.js — headless tests for the geometry core (TOOL-SPEC §6).
// Run: node test-doc-geometry.js
// Fixtures are real project data (fixtures/, frozen copies) plus the live
// street geometry, so a regression here means the tool would put something
// in the wrong place on a real sheet.

const fs = require("fs");
const path = require("path");
const G = require("./doc-geometry.js");

let pass = 0, fail = 0;
function ok(name, cond, detail) {
  if (cond) { pass++; console.log(`  ok  ${name}`); }
  else { fail++; console.error(`  FAIL ${name}${detail ? " — " + detail : ""}`); }
}
function near(a, b, tol) { return Math.abs(a - b) <= tol; }

// --- fixtures --------------------------------------------------------------
// A frozen copy, not the live document: see fixtures/README.md.
const alignPath = path.join(__dirname, "fixtures/mr066-035-alignment.json");
const align = JSON.parse(fs.readFileSync(alignPath, "utf8"));
const fit = G.fitAlignment(align.points);

const g = new Function(fs.readFileSync(path.join(__dirname, "streets-geometry.js"), "utf8") +
                       "; return STREET_GEOMETRY;")();
const geom = g.data || g;
const normalize = n => n.replace(/^(North|South|East|West|N\.?|S\.?|E\.?|W\.?)\s+/i, "");
const streetPoints = new Map();
const ways = [];
for (const w of geom.elements) {
  if (!w.geometry || !w.tags || !w.tags.name) continue;
  const n = normalize(w.tags.name);
  if (!streetPoints.has(n)) streetPoints.set(n, []);
  streetPoints.get(n).push(...w.geometry);
  ways.push({ name: n, geometry: w.geometry });
}

console.log("alignment fit + round trip");
{
  // Control points must come back where they were put.
  let worst = 0;
  for (const p of align.points) {
    const [lat, lng] = G.scanToWorld(fit, p.px[0], p.px[1]);
    const dm = G.metres({ lat, lon: lng }, { lat: p.ll[0], lon: p.ll[1] });
    worst = Math.max(worst, dm);
  }
  ok("control points reproduce within 1 m", worst < 1, `worst ${worst.toFixed(2)} m`);

  // pixel -> world -> pixel is the property that matters for stored traces.
  let worstPx = 0;
  for (const [x, y] of [[0, 0], [400, 700], [747, 1276], [123, 999]]) {
    const [lat, lng] = G.scanToWorld(fit, x, y);
    const [bx, by] = G.worldToScan(fit, lat, lng);
    worstPx = Math.max(worstPx, Math.hypot(bx - x, by - y));
  }
  ok("scan->world->scan within 1 px", worstPx < 1, `worst ${worstPx.toFixed(3)} px`);

  // Sanity on scale: this render is 100 dpi, so ~0.5-0.7 m per pixel. A wrong
  // handedness or a transposed axis shows up here loudly.
  const [latA, lngA] = G.scanToWorld(fit, 0, 0);
  const [latB, lngB] = G.scanToWorld(fit, 100, 0);
  const mPerPx = G.metres({ lat: latA, lon: lngA }, { lat: latB, lon: lngB }) / 100;
  ok("scale is plausible (0.2-2 m/px)", mPerPx > 0.2 && mPerPx < 2, `${mPerPx.toFixed(3)} m/px`);

  // y grows downward in pixels, so a larger py must be further SOUTH.
  const [latTop] = G.scanToWorld(fit, 300, 0);
  const [latBottom] = G.scanToWorld(fit, 300, 1200);
  ok("pixel y increases southward", latBottom < latTop);
}

console.log("polygons");
{
  const square = [[0, 0], [0, 10], [10, 10], [10, 0]];
  ok("inside", G.pointInPolygon([5, 5], square));
  ok("outside", !G.pointInPolygon([15, 5], square));
  ok("outside (shared edge line, beyond)", !G.pointInPolygon([-1, 5], square));

  // A coverage ring in scan pixels becomes a ring on the earth.
  const ringPx = [[0, 0], [747, 0], [747, 1276], [0, 1276]];
  const ringLL = G.coverageToWorld(fit, ringPx);
  ok("coverage ring has 4 corners", ringLL.length === 4);
  const mid = G.scanToWorld(fit, 373, 638);
  ok("sheet centre is inside its own coverage", G.pointInPolygon(mid, ringLL));
  ok("a point well outside is outside", !G.pointInPolygon([34.05, -118.30], ringLL));
}

console.log("segmentsInBounds");
{
  const ringLL = G.coverageToWorld(fit, [[0, 0], [747, 0], [747, 1276], [0, 1276]]);
  const found = G.segmentsInBounds(ways, ringLL);
  const names = new Set(found.map(f => f.name));
  // ANSWER-KEY.md: this sheet's block is Bixel / Miramar / Boylston / 3rd.
  for (const expected of ["Bixel Street", "Miramar Street", "Boylston Street", "3rd Street"])
    ok(`finds ${expected}`, names.has(expected));
  ok("does not drag in far-away streets", !names.has("Alameda Street"),
      [...names].slice(0, 8).join(", "));
  ok("returns point runs", found.every(f => f.runs.every(r => r.length > 0)));
}

console.log("coverage is clipped at the boundary, not at the vertex");
{
  // A square ring, and a way whose two vertices sit outside it on either side:
  // OSM records long straight streets exactly like this, and testing only
  // vertices would report the way as absent from a polygon it crosses end to
  // end. On MR006-138 the vertex-only test silently dropped 127 m of Douglas
  // Street, which is what sent us looking.
  const ring = [[0, 0], [0, 10], [10, 10], [10, 0]];        // [lat, lon]
  const across = [{ lat: 5, lon: -5 }, { lat: 5, lon: 15 }];
  const got = G.segmentsInBounds([{ name: "across", geometry: across }], ring);
  ok("a way crossing with no vertex inside is still found", got.length === 1,
     JSON.stringify(got));
  const run = got[0].runs[0];
  ok("…and is clipped to the two boundary crossings",
     run.length === 2 && Math.abs(run[0].lon - 0) < 1e-9 && Math.abs(run[1].lon - 10) < 1e-9,
     JSON.stringify(run));

  // Entering: the run must start at the boundary, not at the first inside vertex.
  const entering = [{ lat: 5, lon: -5 }, { lat: 5, lon: 6 }];
  const e = G.segmentsInBounds([{ name: "in", geometry: entering }], ring)[0].runs[0];
  ok("entering starts at the boundary", Math.abs(e[0].lon - 0) < 1e-9, JSON.stringify(e));
  ok("…and keeps the inside vertex", Math.abs(e[e.length - 1].lon - 6) < 1e-9);

  // Leaving: likewise at the far end.
  const leaving = [{ lat: 5, lon: 6 }, { lat: 5, lon: 15 }];
  const l = G.segmentsInBounds([{ name: "out", geometry: leaving }], ring)[0].runs[0];
  ok("leaving ends at the boundary", Math.abs(l[l.length - 1].lon - 10) < 1e-9, JSON.stringify(l));

  // In and out and in again: two runs, not one.
  const weave = [{ lat: 5, lon: 2 }, { lat: 5, lon: 15 }, { lat: 8, lon: 15 }, { lat: 8, lon: 4 }];
  const wruns = G.segmentsInBounds([{ name: "weave", geometry: weave }], ring)[0].runs;
  ok("a way that leaves and returns yields two runs", wruns.length === 2,
     JSON.stringify(wruns.map(r => r.length)));

  const clear = [{ lat: 20, lon: 20 }, { lat: 30, lon: 30 }];
  ok("a way nowhere near it is still absent",
     G.segmentsInBounds([{ name: "far", geometry: clear }], ring).length === 0);

  ok("ringCrossings orders hits along the segment",
     G.ringCrossings({ lat: 5, lon: -5 }, { lat: 5, lon: 15 }, ring)
       .map(h => h.lon).every((v, i, a) => i === 0 || a[i - 1] <= v));
}

console.log("cross-street snapping");
{
  // Ground truth from intersect.js: 3rd Street x Bixel Street.
  const pts3 = streetPoints.get("3rd Street"), ptsB = streetPoints.get("Bixel Street");
  let best = { d: Infinity };
  for (const p of pts3) for (const q of ptsB) {
    const d = Math.hypot(p.lat - q.lat, (p.lon - q.lon) * 0.83);
    if (d < best.d) best = { d, lat: (p.lat + q.lat) / 2, lon: (p.lon + q.lon) / 2 };
  }
  const target = { lat: best.lat, lon: best.lon };

  const snapped = G.snapOrPoint(streetPoints, "3rd Street", target,
                                (lat, lon) => G.worldToScan(fit, lat, lon));
  ok("a click at the intersection snaps to the cross-street",
     snapped.snapped && snapped.value === "Bixel Street", JSON.stringify(snapped.value));

  // Mid-block: walk ~120 m east along 3rd from that intersection. Nothing
  // should be within tolerance, so §5.4's point fallback must kick in.
  const midBlock = { lat: target.lat, lon: target.lon + 0.0013 };
  const pt = G.snapOrPoint(streetPoints, "3rd Street", midBlock,
                           (lat, lon) => G.worldToScan(fit, lat, lon), { maxM: 25 });
  ok("a mid-block click falls back to a pixel point",
     !pt.snapped && Array.isArray(pt.value.px), JSON.stringify(pt.value));
  ok("the fallback point is inside the render", pt.value.px &&
     pt.value.px[0] > -2000 && pt.value.px[1] > -2000);

  // Scanless documents (ordinances) have no pixel space to fall back into.
  const noScan = G.snapOrPoint(streetPoints, "3rd Street", midBlock, null, { maxM: 25 });
  ok("without an alignment the fallback is lat/lng", !noScan.snapped && Array.isArray(noScan.value.ll));

  const none = G.nearestCrossStreet(streetPoints, "3rd Street", { lat: 34.2, lon: -118.9 });
  ok("nothing near returns null", none === null);
}

console.log("scan placement (what the document tool stores)");
{
  // The tool holds a placement, not a screen position. Restoring one from a
  // saved alignment and re-deriving the corners must reproduce the alignment —
  // otherwise resuming a document silently moves the scan.
  const W = 747, H = 1276;                        // MR066-035 render size
  const pl = G.placementFromAlignment(align.points, W, H);
  let worst = 0;
  for (const p of align.points) {
    const [lat, lng] = G.placementToWorld(pl, W, H, p.px[0], p.px[1]);
    worst = Math.max(worst, G.metres({ lat, lon: lng }, { lat: p.ll[0], lon: p.ll[1] }));
  }
  ok("placement reproduces the saved corners within 2 m", worst < 2, `worst ${worst.toFixed(2)} m`);

  const mPerPx = pl.mppx;
  ok("placement scale matches the fit (0.2-2 m/px)", mPerPx > 0.2 && mPerPx < 2, `${mPerPx.toFixed(3)}`);
  ok("rotation is small for a near-north-up sheet", Math.abs(pl.rot) < 0.6,
     `${(pl.rot * 180 / Math.PI).toFixed(2)}°`);

  // Round-trip through the alignment format: placement -> corners -> placement.
  const pts = [[0, 0], [W, 0], [0, H]].map(([px, py]) => {
    const [lat, lng] = G.placementToWorld(pl, W, H, px, py);
    return { px: [px, py], ll: [+lat.toFixed(6), +lng.toFixed(6)] };
  });
  const pl2 = G.placementFromAlignment(pts, W, H);
  const drift = G.metres({ lat: pl.lat, lon: pl.lng }, { lat: pl2.lat, lon: pl2.lng });
  ok("save -> reload -> save does not move the scan", drift < 0.5, `${drift.toFixed(3)} m`);
  ok("…nor change its scale", Math.abs(pl.mppx - pl2.mppx) < 0.002,
     `${pl.mppx.toFixed(4)} vs ${pl2.mppx.toFixed(4)}`);
  ok("…nor its rotation", Math.abs(pl.rot - pl2.rot) < 0.001);
}

console.log("which space a coverage ring is in");
{
  // The bug this replaces: "is the first x > 1000?". A polygon traced from the
  // sheet's top-left corner starts small, and seven of the corpus's fourteen
  // documents were being read as degrees — which silently turned every check
  // that uses the ring into a no-op.
  ok("a ring traced from near the top-left corner is still pixels",
     G.ringIsPixels([[88, 1533], [1039, 1520], [1062, 64], [297, 103]]));
  ok("…so is one that starts large", G.ringIsPixels([[1092, 878], [200, 100], [300, 900]]));
  ok("an LA lat/lng ring is not pixels",
     !G.ringIsPixels([[34.0625, -118.265], [34.0625, -118.26], [34.0585, -118.26]]));
  ok("a latitude over 90 gives it away", G.ringIsPixels([[91, 10], [20, 30], [40, 50]]));
  ok("so does a longitude over 180", G.ringIsPixels([[10, 181], [20, 30], [40, 50]]));
  ok("an empty or absent ring is not pixels",
     !G.ringIsPixels([]) && !G.ringIsPixels(null) && !G.ringIsPixels(undefined));

  // Round trip: a pixel ring through the alignment and back.
  const world = G.coverageToWorld(fit, [[0, 0], [100, 0], [0, 100]]);
  ok("converting a pixel ring gives a lat/lng ring", !G.ringIsPixels(world),
     JSON.stringify(world[0]));
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
