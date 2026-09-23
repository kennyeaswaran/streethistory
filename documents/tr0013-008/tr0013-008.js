module.exports = {
  id: "tr0013-008",
  title: "Tract Number Fifty-Four in the City of Los Angeles, County of Los Angeles, California",
  shortTitle: "Tract No. 54",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0013/TR0013-008.pdf",
  scan: "documents/tr0013-008/tr0013-008.pdf",
  transcription: null,

  date: { on: "1907-04" },
  recorded: "1907-08-19",
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
    [304, 610], [297, 1387], [873, 1266], [813, 543]
  ],
  alignment: {
    image: "documents/tr0013-008/tr0013-008-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.053225, -118.264815], note: "map-tool corner (0,0)" },
      { px: [1160, 0], ll: [34.051872, -118.261303], note: "map-tool corner (1160,0)" },
      { px: [0, 1842], ll: [34.048573, -118.267391], note: "map-tool corner (0,1842)" }
    ]
  },

  sweptFully: false,
  sweptFor: [],

  // Rows arrive from the AI pass and are confirmed in phase 2 (MAP-TOOL-SPEC §3-§4).
  rows: [
    { kind: "state", asWritten: "SEVENTH ST.", name: "seventh-street", street: "7th Street", from: { px: [303, 697] }, to: { px: [825, 694] }, basis: "alignment", confirmed: false },
    { kind: "state", asWritten: "EIGHTH ST.", name: "eighth-street", street: "8th Street", from: { px: [298, 1252] }, to: { px: [865, 1165] }, basis: "alignment", confirmed: false },
    { kind: "state", asWritten: "BIXEL ST.", name: "bixel", street: "Bixel Street", from: { px: [534, 580] }, to: { px: [515, 820] }, basis: "alignment", confirmed: false },
    { kind: "absent", street: "Harbor Freeway", from: { px: [847, 950] }, to: { px: [643, 1314] }, confirmed: false, note: "This freeway carriageway cuts diagonally across the tract lots and Eighth Street." },
    { kind: "absent", street: "Harbor Freeway", from: { px: [855, 1047] }, to: { px: [717, 1299] }, confirmed: false, note: "The second freeway carriageway also crosses the lots rather than a historical roadway." },
    { kind: "vanished", asWritten: "BIXEL ST.", trace: [[515, 820], [511, 1210]], basis: "alignment", confirmed: false, note: "The historical Bixel Street corridor continues south to Eighth Street beyond the supplied modern Bixel Street endpoint." }
  ]
};
