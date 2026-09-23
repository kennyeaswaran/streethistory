module.exports = {
  id: "mr005-035",
  title: "W. G. Spencer Subdivision of the North Half of Block 57, Ord's Survey",
  shortTitle: "W. G. Spencer Subdivision",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-035.pdf",
  scan: "documents/mr005-035/mr005-035.pdf",
  transcription: null,

  date: { on: "1883-03-28" },
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
    [233, 1333], [1093, 1327], [1087, 427], [238, 457]
  ],
  alignment: {
    image: "documents/mr005-035/mr005-035-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.048876, -118.261126], note: "map-tool corner (0,0)" },
      { px: [1142, 0], ll: [34.047762, -118.259381], note: "map-tool corner (1142,0)" },
      { px: [0, 1767], ll: [34.046623, -118.26319], note: "map-tool corner (0,1767)" }
    ]
  },

  sweptFully: false,
  sweptFor: [],

  // Rows arrive from the AI pass and are confirmed in phase 2 (MAP-TOOL-SPEC §3-§4).
  rows: [
    { kind: "state", asWritten: "8th Street", name: "eighth-street", street: "8th Street", from: { px: [238, 501] }, to: { px: [1087, 485] }, basis: "alignment", confirmed: false },
    { kind: "state", asWritten: "Pearl Street", name: "pearl", street: "Figueroa Street", from: { px: [303, 455] }, to: { px: [313, 1332] }, basis: "alignment", confirmed: false },
    { kind: "state", asWritten: "Flower Street", name: "flower", street: "Flower Street", from: { px: [1027, 429] }, to: { px: [1023, 1327] }, basis: "alignment", confirmed: false }
  ]
};
