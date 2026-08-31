module.exports = {
  id: "mr030-009-p4",
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
    [1030, 588], [599, 441], [111, 1227], [157, 1532],
    [591, 1533]
  ],
  alignment: {
    image: "documents/mr030-009-p4/mr030-009-p4-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.041226, -118.24709], note: "document-tool corner (0,0)" },
      { px: [1133, 0], ll: [34.046946, -118.246766], note: "document-tool corner (1133,0)" },
      { px: [0, 1717], ll: [34.040817, -118.236701], note: "document-tool corner (0,1717)" }
    ]
  },

  sweptFully: false,
  sweptFor: [],

  // Rows arrive from the AI pass and are confirmed in phase 2 (TOOL-SPEC §3-§4).
  rows: []
};
