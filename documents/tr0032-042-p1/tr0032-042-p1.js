module.exports = {
  id: "tr0032-042-p1",
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
    [-59, 1560], [275, 1752], [679, 1644], [1336, 375],
    [879, 106], [679, 131], [23, 1101]
  ],
  alignment: {
    image: "documents/tr0032-042-p1/tr0032-042-p1-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.037102, -118.243782], note: "map-tool corner (0,0)" },
      { px: [2430, 0], ll: [34.036924, -118.235651], note: "map-tool corner (2430,0)" },
      { px: [0, 1746], ll: [34.032227, -118.243935], note: "map-tool corner (0,1746)" }
    ]
  },

  sweptFully: false,
  sweptFor: [],

  // Rows arrive from the AI pass and are confirmed in phase 2 (MAP-TOOL-SPEC §3-§4).
  rows: []
};
