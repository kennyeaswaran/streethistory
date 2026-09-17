module.exports = {
  id: "tr0043-032",
  title: "Tract No. 4071",
  shortTitle: "Tract No. 4071",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0043/TR0043-032.pdf",
  scan: "documents/tr0043-032/tr0043-032.pdf",
  transcription: null,

  date: { on: "1921-02-17" },   
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
    [37, 1546], [911, 1498], [897, 416], [24, 480]
  ],
  alignment: {
    image: "documents/tr0043-032/tr0043-032-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.06142, -118.25573], note: "map-tool corner (0,0)" },
      { px: [1746, 0], ll: [34.060747, -118.25416], note: "map-tool corner (1746,0)" },
      { px: [0, 2434], ll: [34.059595, -118.256855], note: "map-tool corner (0,2434)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["1st Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "First Street",
      "street": "1st Street",
      "from": {
        "px": [
          35,
          1360
        ]
      },
      "to": {
        "px": [
          909,
          1370
        ]
      },
      "basis": "alignment",
      "name": "first-street"
    },
    {
      "kind": "vanished",
      "asWritten": "Boylston St",
      "trace": [
        [
          787,
          1548
        ],
        [
          759,
          402
        ]
      ],
      "basis": "alignment",
      "name": "boylston"
    }
  ]
};
