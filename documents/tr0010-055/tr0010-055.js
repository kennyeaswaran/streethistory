module.exports = {
  id: "tr0010-055",
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
    [108, 420], [126, 1639], [805, 1395], [857, 1102],
    [793, 711], [942, 394]
  ],
  alignment: {
    image: "documents/tr0010-055/tr0010-055-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.060586, -118.237831], note: "map-tool corner (0,0)" },
      { px: [1140, 0], ll: [34.059893, -118.235866], note: "map-tool corner (1140,0)" },
      { px: [0, 1829], ll: [34.057956, -118.239162], note: "map-tool corner (0,1829)" }
    ]
  },

  sweptFully: false,
  sweptFor: [],

  // Rows arrive from the AI pass and are confirmed in phase 2 (MAP-TOOL-SPEC §3-§4).
  rows: []
};
