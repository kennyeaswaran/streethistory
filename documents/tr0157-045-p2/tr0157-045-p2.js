module.exports = {
  id: "tr0157-045-p2",
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
    [124, 65], [-51, 1743], [1289, 1841], [2467, 384]
  ],
  alignment: {
    image: "documents/tr0157-045-p2/tr0157-045-p2-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.058796, -118.237904], note: "map-tool corner (0,0)" },
      { px: [2446, 0], ll: [34.057749, -118.229894], note: "map-tool corner (2446,0)" },
      { px: [0, 1796], ll: [34.053889, -118.238825], note: "map-tool corner (0,1796)" }
    ]
  },

  sweptFully: false,
  sweptFor: [],

  // Rows arrive from the AI pass and are confirmed in phase 2 (MAP-TOOL-SPEC §3-§4).
  rows: []
};
