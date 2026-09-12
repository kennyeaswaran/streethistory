module.exports = {
  id: "mr054-051",
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
    [274, 259], [231, 1133], [817, 1246], [749, 307]
  ],
  alignment: {
    image: "documents/mr054-051/mr054-051-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.039714, -118.243149], note: "map-tool corner (0,0)" },
      { px: [1059, 0], ll: [34.037179, -118.238578], note: "map-tool corner (1059,0)" },
      { px: [0, 1688], ll: [34.033634, -118.247989], note: "map-tool corner (0,1688)" }
    ]
  },

  sweptFully: false,
  sweptFor: [],

  // Rows arrive from the AI pass and are confirmed in phase 2 (MAP-TOOL-SPEC §3-§4).
  rows: []
};
