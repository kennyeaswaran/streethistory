module.exports = {
  id: "mr030-009-p1",
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
    [1092, 878], [667, 613], [71, 1434], [800, 1437]
  ],
  alignment: {
    image: "documents/mr030-009-p1/mr030-009-p1-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.034874, -118.247266], note: "document-tool corner (0,0)" },
      { px: [1084, 0], ll: [34.040412, -118.246743], note: "document-tool corner (1084,0)" },
      { px: [0, 1675], ll: [34.0342, -118.237011], note: "document-tool corner (0,1675)" }
    ]
  },

  sweptFully: false,
  sweptFor: [],

  // Rows arrive from the AI pass and are confirmed in phase 2 (TOOL-SPEC §3-§4).
  rows: []
};
