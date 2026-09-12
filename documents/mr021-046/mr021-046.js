module.exports = {
  id: "mr021-046",
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
    [241, 384], [271, 1470], [979, 1573], [855, 392]
  ],
  alignment: {
    image: "documents/mr021-046/mr021-046-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.039636, -118.242652], note: "map-tool corner (0,0)" },
      { px: [1165, 0], ll: [34.037278, -118.238777], note: "map-tool corner (1165,0)" },
      { px: [0, 1759], ll: [34.034754, -118.246918], note: "map-tool corner (0,1759)" }
    ]
  },

  sweptFully: false,
  sweptFor: [],

  // Rows arrive from the AI pass and are confirmed in phase 2 (MAP-TOOL-SPEC §3-§4).
  rows: []
};
