// A test fixture, not a document: tests/browser-test.js serves this folder as
// documents/_main-test/. It is the sheet the run opens first and keeps coming
// back to: the popup, confirming, tracing, splitting, the Tab walk, the brief
// the AI pass reads and its name candidates. Those used to run on the live
// M.R. 66-35, so they depended on its rows and on the sweep that closed it.
//
// The image is blank; only its size matters. Scan pixel (px, py) is the point
// (3000 + px - 200, 700 - py) in ../streets.js's metres (X0 = 3000). Rows name
// made-up entities from ../entities.js.
module.exports = {
  id: "_main-test",
  title: "Main test sheet", shortTitle: "Main test sheet", url: "http://x",
  scan: null, transcription: null,
  date: { on: "1884" }, type: "tract-map", attests: "planned-by",
  completeness: "incidental", readBy: "human",
  coverage: [[20, 20], [1729, 20], [1729, 1095], [20, 1095]],
  alignment: {
    image: "documents/_main-test/_main-test-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [33.9563325, -118.5696782] },
      { px: [1749, 0], ll: [33.9563325, -118.5507379] },
      { px: [0, 1115], ll: [33.9462457, -118.5696782] }
    ]
  },
  sweptFully: false, sweptFor: [],
  rows: [
    // Main Street, x 3000 to 4200: a long row with many vertices, to split.
    { kind: "state", asWritten: "MAIN ST", street: "Synthetic Main Street",
      from: { px: [200, 700] }, to: { px: [1400, 700] }, name: "test-main", basis: "alignment",
      confirmed: true },
    // Third Street, its whole length on the sheet (x 3000 to 3700).
    { kind: "state", asWritten: "THIRD ST", street: "Synthetic Third Street",
      from: { px: [200, 300] }, to: { px: [900, 300] }, name: "test-third", basis: "alignment",
      confirmed: true },
    // Miramar, x 3700 to 4300: left as a proposal, so the sweep has a row
    // waiting on it.
    { kind: "state", asWritten: "MIRAMAR ST", street: "Synthetic Miramar Street",
      from: { px: [900, 300] }, to: { px: [1500, 300] }, name: "test-miramar", basis: "alignment",
      confirmed: false },
    // First Street, x 3000 to 4000.
    { kind: "state", asWritten: "FIRST ST", street: "Synthetic First Street",
      from: { px: [200, 950] }, to: { px: [1200, 950] }, name: "test-first", basis: "alignment",
      confirmed: true }
  ]
};
