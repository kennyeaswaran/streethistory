module.exports = {
  id: "tr0013-060",
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
    [310, 669], [336, 1368], [1156, 1391], [968, 511]
  ],
  alignment: {
    image: "documents/tr0013-060/tr0013-060-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.060029, -118.230686], note: "map-tool corner (0,0)" },
      { px: [1165, 0], ll: [34.058775, -118.227129], note: "map-tool corner (1165,0)" },
      { px: [0, 1842], ll: [34.055336, -118.233062], note: "map-tool corner (0,1842)" }
    ]
  },

  sweptFully: false,
  sweptFor: [],

  // Rows arrive from the AI pass and are confirmed in phase 2 (MAP-TOOL-SPEC §3-§4).
  rows: []
};
