// Compromise Subdivision / "Washington Tract" — the adversarial benchmark:
// its "Third St" is modern MIRAMAR and its "Arnold St" is modern 3RD
// (identified by map alignment; name continuity is a trap, not evidence).

module.exports = {
  id: "mr066-035",
  title: "Map of the Compromise Subdivision. Being a resubdivision of block W of he Subdivision of 3.5 acre lot I, Block 38 Hancock Survey",
  shortTitle: "Washington Tract map",
  url: "",
  scan: null,
  transcription: null,

  date: { on: "1894-03" },
  type: "tract-map",
  attests: "planned-by",
  completeness: "incidental",
  readBy: "human",

  // Coverage is the ground this document informs about — the tract boundary,
  // not the sheet edge (MODEL-SPEC §4.4). SCAN PIXELS against alignment.image,
  // so a better alignment carries it along (§4.6).
  coverage: [
    [206, 343], [38, 604], [589, 881], [705, 727],
    [575, 519]
  ],
  alignment: {
    image: "tracts/renders/MR066-035.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.059411, -118.260332], note: "document-tool corner (0,0)" },
      { px: [747, 0], ll: [34.059574, -118.257456], note: "document-tool corner (747,0)" },
      { px: [0, 1276], ll: [34.055311, -118.259997], note: "document-tool corner (0,1276)" }
    ]
  },

  sweptFully: false,
  sweptFor: [],

  // Rows arrive from the AI pass and are confirmed in phase 2 (TOOL-SPEC §3-§4).
  rows: []
};
