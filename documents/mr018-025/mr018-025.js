module.exports = {
  id: "mr018-025",
  title: "M. L. Wicks Subdivision of Kiefer Tract",
  shortTitle: "Wicks' Kiefer Tract Subdivision",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR018/MR018-025.pdf",
  scan: "documents/mr018-025/mr018-025.pdf",
  transcription: null,

  date: { on: "1887-06-11" },   
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
    [190, 427], [89, 1376], [1122, 1342], [1090, 403]
  ],
  alignment: {
    image: "documents/mr018-025/mr018-025-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.036838, -118.235263], note: "map-tool corner (0,0)" },
      { px: [1142, 0], ll: [34.036898, -118.229407], note: "map-tool corner (1142,0)" },
      { px: [0, 1630], ll: [34.029863, -118.235161], note: "map-tool corner (0,1630)" }
    ]
  },

  // The polygon strays onto these; the document does not inform about them.
  // NOT the same as a absent row, which says the sheet covers the ground and
  // draws nothing there (MODEL-SPEC §4.4, §5.2).
  coverageExcept: [{"street":"7th Place","from":"Santa Fe Avenue","to":null},{"street":"7th Place","from":null,"to":"Wilson Street"}],

  sweptFully: true,
  sweptFor: ["7th Place","7th Street","Imperial Street","Mateo Street","Santa Fe Avenue","Wilson Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "Atlantic Street.",
      "street": "7th Place",
      "from": {
        "px": [
          240,
          795
        ]
      },
      "to": {
        "px": [
          1009,
          780
        ]
      },
      "basis": "alignment",
      "note": "Modern 7th Place follows the tract's Atlantic Street corridor.",
      "name": "atlantic-st-dtla"
    },
    {
      "kind": "state",
      "asWritten": "Seventh Street",
      "street": "7th Street",
      "from": {
        "px": [
          182,
          502
        ]
      },
      "to": {
        "px": [
          1095,
          544
        ]
      },
      "basis": "alignment",
      "name": "seventh-street"
    },
    {
      "kind": "unnamed",
      "street": "Imperial Street",
      "from": {
        "px": [
          775,
          411
        ]
      },
      "to": {
        "px": [
          784,
          536
        ]
      },
      "basis": "alignment",
      "note": "A short two-edged north-south road enters Seventh Street, but no name is lettered on it."
    },
    {
      "kind": "state",
      "asWritten": "Mateo Street",
      "street": "Mateo Street",
      "from": {
        "px": [
          563,
          417
        ]
      },
      "to": {
        "px": [
          572,
          1360
        ]
      },
      "basis": "alignment",
      "name": "mateo"
    },
    {
      "kind": "state",
      "asWritten": "Santa Fe Avenue.",
      "street": "Santa Fe Avenue",
      "from": {
        "px": [
          992,
          406
        ]
      },
      "to": {
        "px": [
          1010,
          1346
        ]
      },
      "basis": "alignment",
      "name": "santa-fe-ave",
      "note": "The label is divided along one corridor: 'Santa Fe' farther south and 'Avenue.' farther north."
    },
    {
      "kind": "state",
      "asWritten": "Lemon Street.",
      "street": "Wilson Street",
      "from": {
        "px": [
          264,
          509
        ]
      },
      "to": {
        "px": [
          202,
          1372
        ]
      },
      "basis": "alignment",
      "note": "Modern Wilson follows the older Lemon Street alignment.",
      "name": "lemon-st-arts-district"
    },
    {
      "kind": "vanished",
      "asWritten": "Pacific Street",
      "trace": [
        [
          235,
          1005
        ],
        [
          996,
          1012
        ]
      ],
      "basis": "alignment",
      "note": "East-west road between the Atlantic and San Francisco frontages, without a modern match in the supplied street list.",
      "name": "pacific-st-dtla"
    },
    {
      "kind": "vanished",
      "asWritten": "San Francisco Street",
      "trace": [
        [
          226,
          1280
        ],
        [
          994,
          1281
        ]
      ],
      "basis": "alignment",
      "note": "Southern east-west road across the tract, without a modern match in the supplied street list.",
      "name": "san-francisco-st-dtla"
    }
  ]
};
