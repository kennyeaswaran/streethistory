module.exports = {
  id: "mr030-009-p3",
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
    [551, 305], [73, 1014], [489, 1322], [990, 509]
  ],
  alignment: {
    image: "documents/mr030-009-p3/mr030-009-p3-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.039536, -118.24767], note: "document-tool corner (0,0)" },
      { px: [1137, 0], ll: [34.045463, -118.247335], note: "document-tool corner (1137,0)" },
      { px: [0, 1693], ll: [34.03912, -118.237094], note: "document-tool corner (0,1693)" }
    ]
  },

  sweptFully: false,
  sweptFor: [],

  // Rows arrive from the AI pass and are confirmed in phase 2 (TOOL-SPEC §3-§4).
  rows: []
};
