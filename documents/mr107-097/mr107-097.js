module.exports = {
  id: "mr107-097",
  title: "Map of the George K. Frink Subdivision of the Western Portion of Block No. 1 of the Coronel Tract, Los Angeles City, Los Angeles County, California",
  shortTitle: "George K. Frink Subdivision",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR107/MR107-097.pdf",
  scan: "documents/mr107-097/mr107-097.pdf",
  transcription: null,

  date: { on: "1905-12-07" },
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
    [759, 292], [188, 306], [233, 902], [814, 915]
  ],
  alignment: {
    image: "documents/mr107-097/mr107-097-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.036772, -118.241972], note: "map-tool corner (0,0)" },
      { px: [1113, 0], ll: [34.037952, -118.240734], note: "map-tool corner (1113,0)" },
      { px: [0, 1790], ll: [34.03511, -118.239697], note: "map-tool corner (0,1790)" }
    ]
  },

  sweptFully: false,
  sweptFor: [],

  // Rows arrive from the AI pass and are confirmed in phase 2 (MAP-TOOL-SPEC §3-§4).
  rows: [
    { kind: "state", asWritten: "SEVENTH ST.", name: "seventh-street", street: "7th Street", from: { px: [301, 303] }, to: { px: [309, 904] }, basis: "alignment", confirmed: false },
    { kind: "state", asWritten: "CENTRAL AVE.", name: "central-ave", street: "Central Avenue", from: { px: [763, 340] }, to: { px: [193, 369] }, basis: "alignment", confirmed: false }
  ]
};
