module.exports = {
  id: "tr0082-050",
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
    [-125, 654], [-24, 1775], [1454, 1827], [1756, 500]
  ],
  alignment: {
    image: "documents/tr0082-050/tr0082-050-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.052163, -118.263673], note: "map-tool corner (0,0)" },
      { px: [1746, 0], ll: [34.050791, -118.260541], note: "map-tool corner (1746,0)" },
      { px: [0, 2413], ll: [34.048551, -118.265946], note: "map-tool corner (0,2413)" }
    ]
  },

  sweptFully: false,
  sweptFor: [],

  // Rows arrive from the AI pass and are confirmed in phase 2 (MAP-TOOL-SPEC §3-§4).
  rows: []
};
