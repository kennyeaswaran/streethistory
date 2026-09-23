module.exports = {
  id: "tr0147-027-p2",
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
    [-75, 2201], [1517, 2604], [1383, 876], [122, 41]
  ],
  alignment: {
    image: "documents/tr0147-027-p2/tr0147-027-p2-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.058873, -118.220378], note: "map-tool corner (0,0)" },
      { px: [1746, 0], ll: [34.054802, -118.219666], note: "map-tool corner (1746,0)" },
      { px: [0, 2485], ll: [34.058028, -118.227323], note: "map-tool corner (0,2485)" }
    ]
  },

  sweptFully: false,
  sweptFor: [],

  // Rows arrive from the AI pass and are confirmed in phase 2 (MAP-TOOL-SPEC §3-§4).
  rows: []
};
