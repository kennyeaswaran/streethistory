// Plat of Mills and Wicks' Extension of Second Street — sheet 1 of 2.
//
// One document per PAGE: a document holds one alignment and one coverage
// polygon (MODEL-SPEC §4.4, §4.6), and two sheets have two of each. Sheet 2
// is parked at documents/_mr013-087-p2/ — Kenny read it and found only one
// street on it that was ever built, so it is not worth encoding; the render is
// kept there rather than deleted.
//
// The alignment below is Kenny's, made 2026-08-30 and carried over unchanged
// when this folder was renamed into the per-page convention.

module.exports = {
  id: "mr013-087-p1",
  title: "",
  shortTitle: "",
  url: "",
  scan: null,
  transcription: null,

  date: { on: null },   // TODO: read from the sheet's title block
  type: "tract-map",
  attests: "planned-by",
  completeness: "incidental",
  readBy: "human",

  // Coverage is the ground this document informs about — the tract boundary,
  // not the sheet edge (MODEL-SPEC §4.4). SCAN PIXELS against alignment.image,
  // so a better alignment carries it along (§4.6).
  coverage: [
    [156, 29], [91, 711], [565, 689], [822, 877],
    [1043, 595], [857, 184], [668, 30]
  ],
  alignment: {
    image: "documents/mr013-087-p1/mr013-087-p1-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.046209, -118.239097], note: "document-tool corner (0,0)" },
      { px: [1092, 0], ll: [34.046566, -118.233407], note: "document-tool corner (1092,0)" },
      { px: [0, 1530], ll: [34.039556, -118.238498], note: "document-tool corner (0,1530)" }
    ]
  },

  sweptFully: false,
  sweptFor: [],

  // Rows arrive from the AI pass and are confirmed in phase 2 (TOOL-SPEC §3-§4).
  rows: []
};
