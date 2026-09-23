module.exports = {
  id: "tr0035-050",
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
    [37, 1549], [608, 1679], [1663, 1156], [880, 113],
    [308, 630]
  ],
  alignment: {
    image: "documents/tr0035-050/tr0035-050-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.063312, -118.235742], note: "map-tool corner (0,0)" },
      { px: [1528, 0], ll: [34.06325, -118.232884], note: "map-tool corner (1528,0)" },
      { px: [0, 2263], ll: [34.059781, -118.235853], note: "map-tool corner (0,2263)" }
    ]
  },

  sweptFully: false,
  sweptFor: [],

  // Rows arrive from the AI pass and are confirmed in phase 2 (MAP-TOOL-SPEC §3-§4).
  rows: []
};
