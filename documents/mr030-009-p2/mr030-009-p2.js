module.exports = {
  id: "mr030-009-p2",
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
    [1024, 360], [649, 95], [85, 821], [483, 1065],
    [149, 1611], [953, 1674], [990, 1253], [615, 1042]
  ],
  alignment: {
    image: "documents/mr030-009-p2/mr030-009-p2-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.037554, -118.247727], note: "document-tool corner (0,0)" },
      { px: [1144, 0], ll: [34.043159, -118.247411], note: "document-tool corner (1144,0)" },
      { px: [0, 1677], ll: [34.037166, -118.237881], note: "document-tool corner (0,1677)" }
    ]
  },

  sweptFully: false,
  sweptFor: [],

  // Rows arrive from the AI pass and are confirmed in phase 2 (TOOL-SPEC §3-§4).
  rows: []
};
