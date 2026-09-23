module.exports = {
  id: "tr0157-045-p3",
  title: "",
  shortTitle: "",
  url: "",
  scan: null,
  transcription: null,

  date: { on: null },   // TODO: read from the sheet's title block
  // §4.1a. Whatever this tool saves has a sheet under it — that is what the
  // tool is for — but a loaded document's own declaration wins, so re-saving
  // one this tool should not have opened cannot quietly reclassify it.
  form: "drawn",
  type: "tract-map",
  attests: "planned-by",
  completeness: "incidental",
  readBy: "human",

  // Coverage is the ground this document informs about — the tract boundary,
  // not the sheet edge (MODEL-SPEC §4.4). SCAN PIXELS against alignment.image,
  // so a better alignment carries it along (§4.6).
  coverage: [
    [-118, 472], [164, 1727], [2192, 1694], [2219, -153],
    [759, 134]
  ],
  alignment: {
    image: "documents/tr0157-045-p3/tr0157-045-p3-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.061285, -118.232725], note: "map-tool corner (0,0)" },
      { px: [2440, 0], ll: [34.058999, -118.225115], note: "map-tool corner (2440,0)" },
      { px: [0, 1796], ll: [34.056612, -118.234741], note: "map-tool corner (0,1796)" }
    ]
  },

  sweptFully: false,
  sweptFor: [],

  // Rows arrive from the AI pass and are confirmed in phase 2 (MAP-TOOL-SPEC §3-§4).
  rows: []
};
