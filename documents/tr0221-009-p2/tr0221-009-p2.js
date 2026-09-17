module.exports = {
  id: "tr0221-009-p2",
  title: "Tract No. 9697",
  shortTitle: "Tract No. 9697",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0221/TR0221-009-p2.pdf",
  scan: "documents/tr0221-009-p2/tr0221-009-p2.pdf",
  transcription: null,

  date: { on: "1939-09-29" },   
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
    [-241, 614], [272, 2152], [1776, 1982], [1895, 635]
  ],
  alignment: {
    image: "documents/tr0221-009-p2/tr0221-009-p2-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.060801, -118.255302], note: "map-tool corner (0,0)" },
      { px: [1796, 0], ll: [34.059949, -118.253975], note: "map-tool corner (1796,0)" },
      { px: [0, 2536], ll: [34.059238, -118.256745], note: "map-tool corner (0,2536)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["1st Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "FIRST STREET",
      "name": "first-street",
      "street": "1st Street",
      "from": {
        "px": [
          -109,
          1011
        ]
      },
      "to": {
        "px": [
          1869,
          928
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "vanished",
      "asWritten": "Boylston Street",
      "trace": [
        [
          226,
          481
        ],
        [
          547,
          2203
        ]
      ],
      "basis": "alignment",
      "name": "boylston"
    },
    {
      "kind": "vanished",
      "asWritten": "Corto Street",
      "trace": [
        [
          1536,
          924
        ],
        [
          1522,
          2104
        ]
      ],
      "basis": "alignment",
      "name": "corto-street"
    }
  ]
};
