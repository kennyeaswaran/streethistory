// branch-check.js — finds two roadways that run side by side under ONE name.
// Run: node branch-check.js            (after replacing streets-geometry.js)
//
// The model folds every OSM way that shares a name onto one axis, so two
// parallel branches occupy the same interval of it, and a sheet that letters
// them differently puts two names on one stretch at once — West 5th Street's
// one-way southern branch was Ward Street in 1875 while the through street a
// block north was Fifth (documents/mr003-046-p2). Such a branch is keyed as
// its own street by OSM way id in WAY_STREET_KEYS (site-config.js). This
// script prints the candidates; deciding is a person's job — see
// handbook/ADDING-A-NEIGHBORHOOD.md, "Branches".
//
// The test: same normalised name; project both ways onto the street's
// principal axis; where their along-axis ranges overlap by > MIN_OVERLAP m,
// compare mean across-axis offsets; report pairs > MIN_SEP m apart. Ways
// already in WAY_STREET_KEYS are keyed apart and do not report.

const fs = require("fs");
const path = require("path");
const { normalizeName, WAY_STREET_KEYS } = require(path.join(__dirname, "site-config.js"));
const g = new Function(fs.readFileSync(path.join(__dirname, "streets-geometry.js"), "utf8") + "; return STREET_GEOMETRY;")();
const geom = g.data || g;
const MIN_SEP = 40, MIN_OVERLAP = 80;
const M = 111000, C = Math.cos(34.05 * Math.PI / 180);
const xy = p => [p.lon * C * M, p.lat * M];

const byName = new Map();
for (const w of geom.elements) {
  if (!w.tags || !w.tags.name || !w.geometry) continue;
  const n = normalizeName(w.tags.name, w.id);
  if (!byName.has(n)) byName.set(n, []);
  byName.get(n).push(w);
}
function axis(ways) {
  const pts = ways.flatMap(w => w.geometry.map(xy));
  const mx = pts.reduce((s, p) => s + p[0], 0) / pts.length, my = pts.reduce((s, p) => s + p[1], 0) / pts.length;
  let sxx = 0, syy = 0, sxy = 0;
  for (const [x, y] of pts) { sxx += (x - mx) ** 2; syy += (y - my) ** 2; sxy += (x - mx) * (y - my); }
  const th = 0.5 * Math.atan2(2 * sxy, sxx - syy);
  return [Math.cos(th), Math.sin(th), mx, my];
}
const nearest = (p, skip) => { // the closest other street to a point, to describe an end
  let best = null;
  for (const [n, ws] of byName) { if (n === skip) continue; for (const w of ws) for (const q of w.geometry) {
    const d = Math.hypot((q.lon - p.lon) * C, q.lat - p.lat) * M; if (!best || d < best.d) best = { d, n }; } }
  return best ? `${best.n} (${Math.round(best.d)} m)` : "?";
};

const hits = new Map();
for (const [name, ways] of byName) {
  if (ways.length < 2) continue;
  const [ux, uy, mx, my] = axis(ways);
  const P = ways.map(w => w.geometry.map(xy).map(([x, y]) => [(x - mx) * ux + (y - my) * uy, -(x - mx) * uy + (y - my) * ux]));
  for (let i = 0; i < ways.length; i++) for (let j = i + 1; j < ways.length; j++) {
    const a = P[i], b = P[j];
    const [a0, a1] = [Math.min(...a.map(p => p[0])), Math.max(...a.map(p => p[0]))];
    const [b0, b1] = [Math.min(...b.map(p => p[0])), Math.max(...b.map(p => p[0]))];
    const lo = Math.max(a0, b0), hi = Math.min(a1, b1);
    if (hi - lo < MIN_OVERLAP) continue;
    const ma = a.filter(p => p[0] >= lo && p[0] <= hi).map(p => p[1]), mb = b.filter(p => p[0] >= lo && p[0] <= hi).map(p => p[1]);
    if (!ma.length || !mb.length) continue;
    const sep = Math.abs(ma.reduce((s, v) => s + v, 0) / ma.length - mb.reduce((s, v) => s + v, 0) / mb.length);
    if (sep < MIN_SEP) continue;
    if (!hits.has(name)) hits.set(name, { ways: new Set(), sep: 0, ov: 0 });
    const h = hits.get(name); h.ways.add(ways[i]); h.ways.add(ways[j]); h.sep = Math.max(h.sep, sep); h.ov = Math.max(h.ov, hi - lo);
  }
}
if (!hits.size) { console.log("No side-by-side ways under one name."); process.exit(0); }
console.log(`${hits.size} street name(s) with ways running side by side (> ${MIN_SEP} m apart over > ${MIN_OVERLAP} m). Not every one wants a key — see the handbook.\n`);
for (const [name, h] of [...hits].sort((x, y) => y[1].ways.size - x[1].ways.size)) {
  console.log(`## ${name} — up to ${Math.round(h.sep)} m apart over ${Math.round(h.ov)} m`);
  for (const w of h.ways) {
    const a = w.geometry[0], b = w.geometry[w.geometry.length - 1];
    const lat = w.geometry.map(p => p.lat), lon = w.geometry.map(p => p.lon);
    console.log(`   way ${w.id}  "${w.tags.name}"  ${w.tags.highway || "?"}${w.tags.oneway === "yes" ? ", one-way" : ""}${w.tags.bridge ? ", bridge" : ""}${w.tags.tunnel ? ", tunnel" : ""}` +
      `  lat ${Math.min(...lat).toFixed(4)}–${Math.max(...lat).toFixed(4)} lon ${Math.min(...lon).toFixed(4)}–${Math.max(...lon).toFixed(4)}`);
    console.log(`        ${nearest(a, name)} → ${nearest(b, name)}`);
  }
}
