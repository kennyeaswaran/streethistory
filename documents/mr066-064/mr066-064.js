module.exports = {
  id: "mr066-064",
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
    [141, 1563], [1086, 1436], [1074, 164], [229, 144]
  ],
  alignment: {
    image: "documents/mr066-064/mr066-064-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.039113, -118.249662], note: "map-tool corner (0,0)" },
      { px: [1053, 0], ll: [34.041385, -118.247385], note: "map-tool corner (1053,0)" },
      { px: [0, 1700], ll: [34.036046, -118.245267], note: "map-tool corner (0,1700)" }
    ]
  },

  sweptFully: false,
  sweptFor: [],

  // Rows arrive from the AI pass and are confirmed in phase 2 (MAP-TOOL-SPEC §3-§4).
  rows: []
};
