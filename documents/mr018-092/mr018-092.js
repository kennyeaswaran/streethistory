module.exports = {
  id: "mr018-092",
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
    [1582, 299], [185, 304], [133, 824], [1493, 841]
  ],
  alignment: {
    image: "documents/mr018-092/mr018-092-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.036008, -118.247747], note: "map-tool corner (0,0)" },
      { px: [1716, 0], ll: [34.039863, -118.244402], note: "map-tool corner (1716,0)" },
      { px: [0, 1136], ll: [34.03416, -118.244688], note: "map-tool corner (0,1136)" }
    ]
  },

  sweptFully: false,
  sweptFor: [],

  // Rows arrive from the AI pass and are confirmed in phase 2 (MAP-TOOL-SPEC §3-§4).
  rows: []
};
