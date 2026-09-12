module.exports = {
  id: "mr010-080",
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
    [223, 507], [417, 1092], [1177, 1088], [998, 457]
  ],
  alignment: {
    image: "documents/mr010-080/mr010-080-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.036912, -118.241833], note: "map-tool corner (0,0)" },
      { px: [1737, 0], ll: [34.033137, -118.237294], note: "map-tool corner (1737,0)" },
      { px: [0, 1108], ll: [34.034496, -118.244718], note: "map-tool corner (0,1108)" }
    ]
  },

  sweptFully: false,
  sweptFor: [],

  // Rows arrive from the AI pass and are confirmed in phase 2 (MAP-TOOL-SPEC §3-§4).
  rows: []
};
