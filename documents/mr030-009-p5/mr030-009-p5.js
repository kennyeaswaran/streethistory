module.exports = {
  id: "mr030-009-p5",
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
    [991, 476], [632, 391], [222, 1015], [253, 1303],
    [721, 1313]
  ],
  alignment: {
    image: "documents/mr030-009-p5/mr030-009-p5-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.042646, -118.245834], note: "document-tool corner (0,0)" },
      { px: [1115, 0], ll: [34.048331, -118.245513], note: "document-tool corner (1115,0)" },
      { px: [0, 1682], ll: [34.042241, -118.235556], note: "document-tool corner (0,1682)" }
    ]
  },

  sweptFully: false,
  sweptFor: [],

  // Rows arrive from the AI pass and are confirmed in phase 2 (TOOL-SPEC §3-§4).
  rows: []
};
