module.exports = {
  id: "tr0015-161b",
  title: "Plat of Tract No. 680, Showing Relocation of the Stern Tract and Adjacent Property of Chas. Stern, Los Angeles City, Cal.",
  shortTitle: "Tract No. 680",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0015/TR0015-161B.pdf",
  scan: "documents/tr0015-161b/tr0015-161b.pdf",
  transcription: null,

  date: { on: "1909-12" },
  recorded: "1910-02-02",
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
    [311, 1170], [327, 1350], [635, 1381], [914, 1047]
  ],
  alignment: {
    image: "documents/tr0015-161b/tr0015-161b-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.060988, -118.228879], note: "map-tool corner (0,0)" },
      { px: [1136, 0], ll: [34.06105, -118.221799], note: "map-tool corner (1136,0)" },
      { px: [0, 1842], ll: [34.051409, -118.228759], note: "map-tool corner (0,1842)" }
    ]
  },

  sweptFully: false,
  sweptFor: [],

  // Rows arrive from the AI pass and are confirmed in phase 2 (MAP-TOOL-SPEC §3-§4).
  rows: [
    { kind: "state", asWritten: "MACY ST.", name: "macy-street", street: "Cesar E Chavez Avenue", from: { px: [313, 1188] }, to: { px: [611, 1351] }, basis: "alignment", confirmed: false },
    { kind: "state", asWritten: "MISSION ROAD", name: "mission-road", street: "Mission Road", from: { px: [648, 1209] }, to: { px: [415, 1359] }, basis: "alignment", confirmed: false }
  ]
};
