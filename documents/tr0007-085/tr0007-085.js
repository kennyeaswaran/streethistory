module.exports = {
  id: "tr0007-085",
  title: "Plat of the Niosi Tract",
  shortTitle: "Niosi Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0007/TR0007-085.pdf",
  scan: "documents/tr0007-085/tr0007-085.pdf",
  transcription: null,

  date: { on: "1903-06-09" },   
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
    [1637, 123], [175, 156], [113, 1151], [1664, 992]
  ],
  alignment: {
    image: "documents/tr0007-085/tr0007-085-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.036596, -118.247412], note: "map-tool corner (0,0)" },
      { px: [1842, 0], ll: [34.037663, -118.246207], note: "map-tool corner (1842,0)" },
      { px: [0, 1180], ll: [34.035952, -118.246593], note: "map-tool corner (0,1180)" }
    ]
  },

  sweptFully: false,
  sweptFor: [],

  rows: [
    {
      "kind": "state",
      "asWritten": "Eighth St",
      "street": "8th Street",
      "from": {
        "px": [
          379,
          151
        ]
      },
      "to": {
        "px": [
          355,
          1126
        ]
      },
      "basis": "alignment",
      "note": "The marginal widening annotation identifies the two-edged 8th Street corridor.",
      "name": "eighth-street"
    },
    {
      "kind": "state",
      "asWritten": "RUTH AVE.",
      "street": "Stanford Avenue",
      "from": {
        "px": [
          375,
          358
        ]
      },
      "to": {
        "px": [
          1643,
          305
        ]
      },
      "basis": "alignment",
      "note": "The modern Stanford Avenue trace follows the roadway lettered RUTH AVE.",
      "name": "ruth-ave"
    }
  ]
};
