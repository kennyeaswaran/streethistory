module.exports = {
  id: "tr0023-058a",
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
    [-3, 572], [174, 1417], [1114, 1593], [1157, 490]
  ],
  alignment: {
    image: "documents/tr0023-058a/tr0023-058a-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.037751, -118.271636], note: "map-tool corner (0,0)" },
      { px: [1138, 0], ll: [34.037108, -118.270187], note: "map-tool corner (1138,0)" },
      { px: [0, 1767], ll: [34.035873, -118.272832], note: "map-tool corner (0,1767)" }
    ]
  },

  sweptFully: false,
  sweptFor: [],

  // Rows arrive from the AI pass and are confirmed in phase 2 (MAP-TOOL-SPEC §3-§4).
  rows: []
};
