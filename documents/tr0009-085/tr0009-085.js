module.exports = {
  id: "tr0009-085",
  title: "Map of Pierre Nicolas Lot in the City of Los Angeles, Cal.",
  shortTitle: "Pierre Nicolas Lot",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0009/TR0009-085.pdf",
  scan: "documents/tr0009-085/tr0009-085.pdf",
  transcription: null,

  date: { on: "1906-02" },
  recorded: "1906-02-26",
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
    [889, 305], [988, 1451], [102, 1650], [198, 354]
  ],
  alignment: {
    image: "documents/tr0009-085/tr0009-085-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.060378, -118.238167], note: "map-tool corner (0,0)" },
      { px: [1171, 0], ll: [34.061291, -118.2377], note: "map-tool corner (1171,0)" },
      { px: [0, 1842], ll: [34.059765, -118.236446], note: "map-tool corner (0,1842)" }
    ]
  },

  sweptFully: false,
  sweptFor: [],

  // Rows arrive from the AI pass and are confirmed in phase 2 (MAP-TOOL-SPEC §3-§4).
  rows: [
    { kind: "state", asWritten: "ALAMEDA STREET", name: "alameda-st", street: "Alameda Street", from: { px: [979, 1350] }, to: { px: [110, 1548] }, basis: "alignment", confirmed: false },
    { kind: "state", asWritten: "SAN FERNANDO STREET", name: "san-fernando-st-spring", street: "Spring Street", from: { px: [901, 443] }, to: { px: [190, 459] }, basis: "alignment", confirmed: false }
  ]
};
