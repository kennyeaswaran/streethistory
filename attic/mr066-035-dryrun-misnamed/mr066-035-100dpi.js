module.exports = {
  id: "mr066-035-100dpi",
  title: "Map of the Compromise Subdivision of the Washington Tract",
  shortTitle: "Washington Tract",
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
    [259, 485], [45, 830], [873, 1246], [1003, 998],
    [792, 706]
  ],
  alignment: {
    image: "documents/mr066-035-100dpi/mr066-035-100dpi-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.059358, -118.260074], note: "document-tool corner (0,0)" },
      { px: [1038, 0], ll: [34.059358, -118.25735], note: "document-tool corner (1038,0)" },
      { px: [0, 1774], ll: [34.055474, -118.260074], note: "document-tool corner (0,1774)" }
    ]
  },

  sweptFully: false,
  sweptFor: [],

  // Rows arrive from the AI pass and are confirmed in phase 2 (TOOL-SPEC §3-§4).
  rows: []
};
