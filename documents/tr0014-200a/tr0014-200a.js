module.exports = {
  id: "tr0014-200a",
  title: "Oil Well Supply Company Tract, being a plat of a portion of acreage property in the City of Los Angeles",
  shortTitle: "Oil Well Supply Company Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0014/TR0014-200A.pdf",
  scan: "documents/tr0014-200a/tr0014-200a.pdf",
  transcription: null,

  date: { on: "1909-01" },   
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
    [562, 582], [162, 599], [79, 981], [1064, 1454],
    [1248, 1101], [1028, 556]
  ],
  alignment: {
    image: "documents/tr0014-200a/tr0014-200a-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.058996, -118.239498], note: "map-tool corner (0,0)" },
      { px: [1151, 0], ll: [34.061677, -118.238206], note: "map-tool corner (1151,0)" },
      { px: [0, 1842], ll: [34.057271, -118.234356], note: "map-tool corner (0,1842)" }
    ]
  },

  // The polygon strays onto these; the document does not inform about them.
  // NOT the same as a absent row, which says the sheet covers the ground and
  // draws nothing there (MODEL-SPEC §4.4, §5.2).
  coverageExcept: [{"street":"Bauchet Street","from":null,"to":null}],

  sweptFully: true,
  sweptFor: ["Alameda Street","Bauchet Street","Main Street","Ord Street","Rosabell Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "ALAMEDA ST.",
      "name": "alameda-st",
      "street": "Alameda Street",
      "from": {
        "px": [
          1067,
          653
        ]
      },
      "to": {
        "px": [
          108,
          850
        ]
      },
      "basis": "alignment",
      "confirmed": true
    },
    {
      "kind": "state",
      "asWritten": "ROSABELL ST.",
      "name": "rosabell-street",
      "street": "Bauchet Street",
      "from": {
        "px": [
          467,
          1167
        ]
      },
      "to": {
        "px": [
          757,
          1235
        ]
      },
      "basis": "alignment",
      "confirmed": true
    },
    {
      "kind": "state",
      "asWritten": "MAIN ST.",
      "name": "main-street-dtla",
      "street": "Main Street",
      "from": {
        "px": [
          145,
          678
        ]
      },
      "to": {
        "px": [
          310,
          806
        ]
      },
      "basis": "alignment",
      "confirmed": true
    },
    {
      "kind": "state",
      "asWritten": "MAIN ST.",
      "name": "main-street-dtla",
      "street": "Main Street",
      "from": {
        "px": [
          503,
          768
        ]
      },
      "to": {
        "px": [
          1180,
          934
        ]
      },
      "basis": "alignment",
      "confirmed": true
    },
    {
      "kind": "state",
      "asWritten": "MAIN ST.",
      "name": "main-street-dtla",
      "street": "Main Street",
      "from": {
        "px": [
          946,
          678
        ]
      },
      "to": {
        "px": [
          1170,
          908
        ]
      },
      "basis": "alignment",
      "confirmed": true
    },
    {
      "kind": "state",
      "asWritten": "ORD ST.",
      "name": "ord-street",
      "street": "Ord Street",
      "from": {
        "px": [
          504,
          584
        ]
      },
      "to": {
        "px": [
          503,
          768
        ]
      },
      "basis": "alignment",
      "confirmed": true
    },
    {
      "kind": "state",
      "asWritten": "ROSABELL ST.",
      "name": "rosabell-street",
      "street": "Rosabell Street",
      "from": {
        "px": [
          979,
          1335
        ]
      },
      "to": {
        "px": [
          1110,
          1365
        ]
      },
      "basis": "alignment",
      "confirmed": true
    },
    {
      "kind": "vanished",
      "asWritten": "ROSABELL ST.",
      "name": "rosabell-street",
      "trace": [
        [
          349,
          1139
        ],
        [
          467,
          1167
        ]
      ],
      "basis": "alignment",
      "confirmed": true
    },
    {
      "kind": "vanished",
      "asWritten": "ROSABELL ST.",
      "name": "rosabell-street",
      "trace": [
        [
          757,
          1235
        ],
        [
          979,
          1335
        ]
      ],
      "basis": "alignment",
      "confirmed": true
    }
  ]
};
