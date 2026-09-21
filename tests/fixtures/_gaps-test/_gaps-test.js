// A test fixture, not a document: tests/browser-test.js serves this folder as
// documents/_gaps-test/. Stretches no row speaks for, and what the tool offers
// for them: the sweep list, the gap card, the absent / state / exclusion
// buttons, re-classifying and deleting a row. These used to run on the live
// M.R. 6-138, and had to delete its rows in memory first because the review
// kept closing the very gaps they needed.
//
// The image is blank; only its size matters. Scan pixel (px, py) is the point
// (7000 + px - 200, 700 - py) in ../streets.js's metres (X0 = 7000).
//
// Colton has a row along its whole length. Douglas and Waters each have one
// from their north end down to Colton and nothing south of it: about 595 m
// unaccounted apiece, from Colton to the bottom edge of the coverage.
module.exports = {
  id: "_gaps-test",
  title: "Gaps test sheet", shortTitle: "Gaps test sheet", url: "http://x",
  scan: null, transcription: null,
  date: { on: "1884" }, type: "tract-map", attests: "planned-by",
  completeness: "incidental", readBy: "human",
  coverage: [[20, 20], [1729, 20], [1729, 1095], [20, 1095]],
  alignment: {
    image: "documents/_gaps-test/_gaps-test-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [33.9563325, -118.5263613] },
      { px: [1749, 0], ll: [33.9563325, -118.507421] },
      { px: [0, 1115], ll: [33.9462457, -118.5263613] }
    ]
  },
  sweptFully: false, sweptFor: [],
  rows: [
    { kind: "state", asWritten: "COLTON ST", street: "Synthetic Colton Street",
      from: null, to: null, name: "test-colton", basis: "alignment",
      confirmed: true },
    { kind: "state", asWritten: "WATERS ST", street: "Synthetic Douglas Street",
      from: null, to: "Synthetic Colton Street", name: "test-douglas", basis: "alignment",
      confirmed: true },
    { kind: "state", asWritten: "WATERS ST", street: "Synthetic Waters Street",
      from: null, to: "Synthetic Colton Street", name: "test-waters", basis: "alignment",
      confirmed: true }
  ]
};
