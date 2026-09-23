module.exports = {
  id: "mr009-052",
  title: "Map of Collins Subdivision of Block 1, Bell's Addition to Los Angeles, Cal.",
  shortTitle: "Collins Subdivision",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR009/MR009-052.pdf",
  scan: "documents/mr009-052/mr009-052.pdf",
  transcription: null,

  date: { on: "1886-01" },
  recorded: "1886-05-15",
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
    [204, 685], [256, 1250], [1065, 1232], [1013, 593]
  ],
  alignment: {
    image: "documents/mr009-052/mr009-052-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.040648, -118.271677], note: "map-tool corner (0,0)" },
      { px: [1148, 0], ll: [34.039061, -118.268189], note: "map-tool corner (1148,0)" },
      { px: [0, 1640], ll: [34.036489, -118.274394], note: "map-tool corner (0,1640)" }
    ]
  },

  sweptFully: false,
  sweptFor: [],

  // Rows arrive from the AI pass and are confirmed in phase 2 (MAP-TOOL-SPEC §3-§4).
  rows: [
    { kind: "state", asWritten: "Montgomery Street.", street: "17th Street", from: { px: [307, 1159] }, to: { px: [932, 1158] }, basis: "alignment", confirmed: false },
    { kind: "state", asWritten: "Georgia Bell St.", street: "Delong Street", from: { px: [246, 680] }, to: "Venice Boulevard", basis: "alignment", confirmed: false },
    { kind: "state", asWritten: "Figueroa St.", name: "figueroa-gov", street: "Figueroa Street", from: { px: [928, 603] }, to: { px: [933, 1235] }, basis: "alignment", confirmed: false },
    { kind: "absent", street: "Georgia Street", from: { px: [374, 666] }, to: "Venice Boulevard", confirmed: false, note: "The modern segment crosses blank ground and the end of a numbered lot; no roadway corridor is drawn." },
    { kind: "absent", street: "Santa Monica Freeway", from: { px: [240, 1079] }, to: { px: [1057, 1139] }, confirmed: false, note: "This freeway carriageway cuts diagonally across the subdivision lots." },
    { kind: "absent", street: "Santa Monica Freeway", from: { px: [287, 989] }, to: { px: [1051, 1066] }, confirmed: false, note: "This freeway carriageway cuts diagonally across the subdivision lots." },
    { kind: "absent", street: "Santa Monica Freeway", from: { px: [226, 929] }, to: { px: [1047, 1007] }, confirmed: false, note: "This freeway carriageway cuts diagonally across the subdivision lots." },
    { kind: "state", asWritten: "Rowland Street", name: "rouland-street", street: "Venice Boulevard", from: { px: [211, 763] }, to: { px: [1024, 725] }, basis: "alignment", confirmed: false },
    { kind: "vanished", asWritten: "Georgia Bell St.", trace: [[247, 764], [266, 1159]], basis: "alignment", confirmed: false, note: "The historical corridor continues south of the supplied modern Delong Street segment to Montgomery Street." }
  ]
};
