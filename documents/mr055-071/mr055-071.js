module.exports = {
  id: "mr055-071",
  title: "Plat of F. T. Bicknell's Subdivision of a Part of the Vineyard of Isidro Reyes, Los Angeles City, California",
  shortTitle: "F. T. Bicknell's Subdivision",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR055/MR055-071.pdf",
  scan: "documents/mr055-071/mr055-071.pdf",
  transcription: null,

  date: { on: "1895-03" },
  recorded: "1895-09-20",
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
    [531, 308], [155, 989], [638, 1325], [1024, 584]
  ],
  alignment: {
    image: "documents/mr055-071/mr055-071-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.03514, -118.244291], note: "map-tool corner (0,0)" },
      { px: [1125, 0], ll: [34.035164, -118.242456], note: "map-tool corner (1125,0)" },
      { px: [0, 1775], ll: [34.032724, -118.244246], note: "map-tool corner (0,1775)" }
    ]
  },

  sweptFully: false,
  sweptFor: [],

  // Rows arrive from the AI pass and are confirmed in phase 2 (MAP-TOOL-SPEC §3-§4).
  rows: [
    { kind: "state", asWritten: "NINTH ST.", street: "8th Street", from: { px: [260, 799] }, to: { px: [685, 1235] }, basis: "alignment", confirmed: false },
    { kind: "state", asWritten: "CENTRAL AVE", name: "central-ave", street: "Central Avenue", from: { px: [907, 519] }, to: { px: [544, 1259] }, basis: "alignment", confirmed: false }
  ]
};
