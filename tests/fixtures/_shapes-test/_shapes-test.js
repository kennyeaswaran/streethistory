// A test fixture, not a document: tests/browser-test.js serves this folder as
// documents/_shapes-test/. A made-up sheet over the made-up streets in
// ../streets.js, for review-mode behaviour that needs awkward geometry: a street
// that branches, and rings. These were first tested on the live M.R. 1-489
// (Hope Street, Community Terrace), so every check depended on that sheet's
// rows and on OpenStreetMap's drawing of Bunker Hill staying put.
//
// The image is blank; only its size matters. Scan pixel (px, py) is the point
// (px - 200, 700 - py) metres from ../streets.js's origin, so one pixel is one
// metre. The extents below are pixels; the comments give the same points in
// ../streets.js's metres.
module.exports = {
  id: "_shapes-test",
  title: "t", shortTitle: "t", url: "http://x", scan: null, transcription: null,
  date: { on: "1884" }, type: "tract-map", attests: "planned-by",
  completeness: "incidental", readBy: "human",
  coverage: [[20, 20], [1729, 20], [1729, 1095], [20, 1095]],
  alignment: {
    image: "documents/_shapes-test/_shapes-test-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [33.9563325, -118.6021658] },
      { px: [1749, 0], ll: [33.9563325, -118.5832255] },
      { px: [0, 1115], ll: [33.9462457, -118.6021658] }
    ]
  },
  sweptFully: false, sweptFor: [],
  // "name" is a made-up entity (../entities.js) only so the rows resolve.
  rows: [
    // On the spur, from its tip (160, 380) to "its end": the whole spur,
    // about 179 m, and NOT the spine from the junction on (the bug this guards).
    { kind: "state", asWritten: "Branch St", street: "Synthetic Branch Street",
      from: { px: [360, 320] }, to: null, name: "test-shape", basis: "alignment",
      confirmed: true },
    // On the spine, (0, 500) to (0, 100): 400 m of spine and none of the spur.
    { kind: "state", asWritten: "Branch St", street: "Synthetic Branch Street",
      from: { px: [200, 200] }, to: { px: [200, 600] }, name: "test-shape", basis: "alignment",
      confirmed: true },
    // From a corner (900, 0) to "its end": on a ring, that is the whole ring.
    { kind: "state", asWritten: "Ring Ct", street: "Synthetic Ring Court",
      from: { px: [1100, 700] }, to: null, name: "test-shape", basis: "alignment",
      confirmed: true },
    // Two neighbouring corners, (1150, 300) to (1250, 300): the 100 m arc one
    // way round, the 300 m arc the other.
    { kind: "state", asWritten: "Ring Pl", street: "Synthetic Ring Place",
      from: { px: [1350, 400] }, to: { px: [1450, 400] }, name: "test-shape", basis: "alignment",
      confirmed: true }
  ]
};
