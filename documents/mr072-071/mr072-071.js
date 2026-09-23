module.exports = {
  id: "mr072-071",
  title: "Replat of Lots 64, 65, 66, 67 and 67 1/2 of the Subdivision of the Lands of St. Paul's School, Lot 1, Block 37, Hancock's Survey",
  shortTitle: "St. Paul's School Replat",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR072/MR072-071.pdf",
  scan: "documents/mr072-071/mr072-071.pdf",
  transcription: null,

  date: { on: "1899-08" },
  recorded: "1899-08-31",
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
    [352, 511], [383, 986], [871, 1005], [885, 469]
  ],
  alignment: {
    image: "documents/mr072-071/mr072-071-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.055339, -118.261859], note: "map-tool corner (0,0)" },
      { px: [1121, 0], ll: [34.054211, -118.259349], note: "map-tool corner (1121,0)" },
      { px: [0, 1767], ll: [34.052037, -118.26399], note: "map-tool corner (0,1767)" }
    ]
  },

  sweptFully: false,
  sweptFor: [],

  // Rows arrive from the AI pass and are confirmed in phase 2 (MAP-TOOL-SPEC §3-§4).
  rows: [
    { kind: "absent", street: "5th Street (south branch)", from: "6th Street", to: { px: [883, 546] }, confirmed: false, note: "The modern branch leaves Sixth Street across blank ground; no separate roadway is drawn." },
    { kind: "state", asWritten: "SIXTH STREET", name: "sixth-street", street: "6th Street", from: { px: [357, 584] }, to: { px: [882, 585] }, basis: "alignment", confirmed: false },
    { kind: "state", asWritten: "ST. PAUL AVENUE", name: "st-paul-avenue", street: "Saint Paul Avenue", from: "6th Street", to: { px: [745, 1000] }, basis: "alignment", confirmed: false }
  ]
};
