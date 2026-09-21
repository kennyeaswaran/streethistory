// The made-up streets every browser-test fixture sheet is read against. None
// of them is in data/streets-geometry.js, and none ever may be:
// tests/browser-test.js adds them to the page once, at the start of the run.
//
// Everything is in METRES east (x) and north (y) of one origin in Santa Monica
// Bay, which no real street in the extract comes near. Each fixture sheet is
// 1749 x 1115 pixels at one pixel per metre, placed at its own x offset X0:
// scan pixel (px, py) is the point (X0 + px - 200, 700 - py). So a row's
// {px} extent can be read straight off this file.
//
//   _shapes-test  X0 = 0      branches and rings
//   _main-test    X0 = 3000   the sheet the run keeps coming back to
//   _gaps-test    X0 = 7000   stretches no row speaks for
const ORIGIN = { lat: 33.95, lon: -118.6 };
const KY = 110540, KX = 111320 * Math.cos(ORIGIN.lat * Math.PI / 180);
const P = (x, y) => ({ lat: +(ORIGIN.lat + y / KY).toFixed(7), lon: +(ORIGIN.lon + x / KX).toFixed(7) });
const range = (a, b, step) => Array.from({ length: Math.round((b - a) / step) + 1 }, (_, i) => a + i * step);
const ew = (name, y, x0, x1, step = 100) => ({ name, geometry: range(x0, x1, step).map(x => P(x, y)) });
const ns = (name, x, y0, y1, step = 100) => ({ name, geometry: range(y0, y1, step).map(y => P(x, y)) });

const WAYS = [
  // ---- _shapes-test --------------------------------------------------------
  // A north-south spine with a spur leaving its middle to the north-east
  // (Hope Street's shape on M.R. 1-489): two runs under one name. The spur is
  // diagonal because a row's null end is the street's canonical end (north,
  // for a north-south street), and a spur running dead east has no north end.
  ns("Synthetic Branch Street", 0, 0, 600),
  { name: "Synthetic Branch Street", geometry: [P(0, 300), P(80, 340), P(160, 380)] },
  // Two square rings, 100 m a side, each closed on itself (Community Terrace).
  { name: "Synthetic Ring Court",
    geometry: [P(900, 0), P(1000, 0), P(1000, 100), P(900, 100), P(900, 0)] },
  { name: "Synthetic Ring Place",
    geometry: [P(1150, 300), P(1250, 300), P(1250, 400), P(1150, 400), P(1150, 300)] },

  // ---- _main-test (X0 = 3000; the sheet covers x 2820..4529, y -395..680) --
  // A long east-west street running off both edges: the row to split.
  ew("Synthetic Main Street", 0, 2700, 4650),
  // Third runs straight into Miramar at x = 3700, both on the sheet: a name
  // attested on one is a candidate on the other (M.R. 66-35's 3rd / Miramar).
  ew("Synthetic Third Street", 400, 3000, 3700),
  ew("Synthetic Miramar Street", 400, 3700, 4300),
  // First runs off the sheet and straight into Far Boulevard 670 m east of
  // its edge: a junction that far away must NOT make candidates (1st Street
  // and Beverly Boulevard).
  ew("Synthetic First Street", -250, 3000, 5200),
  ew("Synthetic Far Boulevard", -250, 5200, 5800),

  // ---- _gaps-test (X0 = 7000; the sheet covers x 6820..8529) --------------
  // Colton crosses Douglas and Waters at y = 200. Douglas and Waters each have
  // a row from their north end down to Colton, and nothing south of it: an
  // unaccounted stretch apiece (M.R. 6-138's Douglas Street). Crossing streets
  // share a vertex where they meet, as OSM ways share a node: the tool finds
  // "where X meets Y" from the vertices, not by intersecting the lines.
  ew("Synthetic Colton Street", 200, 6700, 8700),
  ns("Synthetic Douglas Street", 7400, -500, 800),
  ns("Synthetic Waters Street", 8000, -500, 800)
];

// Pixel (px, py) on the sheet at X0, as the alignment's control points need it.
const corner = (X0, px, py) => { const p = P(X0 + px - 200, 700 - py); return { px: [px, py], ll: [p.lat, p.lon] }; };

module.exports = { ORIGIN, P, WAYS, corner };
