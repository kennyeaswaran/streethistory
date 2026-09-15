module.exports = {
  id: "tr0755-073-p2",
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
    [139, 714], [1679, 631], [1672, 2367], [152, 2396]
  ],
  alignment: {
    image: "documents/tr0755-073-p2/tr0755-073-p2-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.035275, -118.255401], note: "map-tool corner (0,0)" },
      { px: [1746, 0], ll: [34.033638, -118.252287], note: "map-tool corner (1746,0)" },
      { px: [0, 2438], ll: [34.031646, -118.258139], note: "map-tool corner (0,2438)" }
    ]
  },

  sweptFully: false,
  sweptFor: [],

  // Rows arrive from the AI pass and are confirmed in phase 2 (MAP-TOOL-SPEC §3-§4).
  rows: []
};
