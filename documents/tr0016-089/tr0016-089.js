module.exports = {
  id: "tr0016-089",
  title: "Tract No. 841, Being a Resubdivision of Lots 12 and 13 of F. McLaughlin's Subdivision and Lots 38 and 39 of the Wright Tract",
  shortTitle: "Tract No. 841",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0016/TR0016-089.pdf",
  scan: "documents/tr0016-089/tr0016-089.pdf",
  transcription: null,

  date: { on: "1910-03" },
  recorded: "1910-05-03",
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
    [126, 512], [1163, 676], [1176, 1377], [96, 1402]
  ],
  alignment: {
    image: "documents/tr0016-089/tr0016-089-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.036959, -118.269338], note: "map-tool corner (0,0)" },
      { px: [1159, 0], ll: [34.0362, -118.267605], note: "map-tool corner (1159,0)" },
      { px: [0, 1842], ll: [34.034661, -118.270783], note: "map-tool corner (0,1842)" }
    ]
  },

  sweptFully: false,
  sweptFor: [],

  // Rows arrive from the AI pass and are confirmed in phase 2 (MAP-TOOL-SPEC §3-§4).
  rows: [
    { kind: "state", asWritten: "18TH ST.", name: "eighteenth-street", street: "18th Street", from: { px: [103, 1182] }, to: { px: [1172, 1184] }, basis: "alignment", confirmed: false },
    { kind: "state", asWritten: "FLOWER ST.", name: "flower", street: "Flower Street", from: { px: [244, 531] }, to: { px: [233, 1399] }, basis: "alignment", confirmed: false },
    { kind: "state", asWritten: "HOPE ST.", name: "hope", street: "Hope Street", from: "18th Street", to: { px: [993, 1381] }, basis: "alignment", confirmed: false },
    { kind: "absent", street: "Santa Monica Freeway", from: { px: [122, 643] }, to: { px: [1166, 850] }, confirmed: false, note: "This freeway carriageway cuts diagonally across the tract lots." },
    { kind: "absent", street: "Santa Monica Freeway", from: { px: [117, 769] }, to: { px: [1168, 950] }, confirmed: false, note: "This freeway carriageway cuts diagonally across the tract lots." },
    { kind: "absent", street: "Santa Monica Freeway", from: { px: [126, 525] }, to: { px: [1164, 729] }, confirmed: false, note: "This freeway carriageway cuts diagonally across the tract lots." }
  ]
};
