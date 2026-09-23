module.exports = {
  id: "tr0130-049-p2",
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
    [942, 943], [1435, 1119], [772, 1856], [758, 2197],
    [225, 2053], [201, 1686]
  ],
  alignment: {
    image: "documents/tr0130-049-p2/tr0130-049-p2-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.05978, -118.234037], note: "map-tool corner (0,0)" },
      { px: [1746, 0], ll: [34.059845, -118.226547], note: "map-tool corner (1746,0)" },
      { px: [0, 2469], ll: [34.050943, -118.233926], note: "map-tool corner (0,2469)" }
    ]
  },

  sweptFully: false,
  sweptFor: [],

  // Rows arrive from the AI pass and are confirmed in phase 2 (MAP-TOOL-SPEC §3-§4).
  rows: []
};
