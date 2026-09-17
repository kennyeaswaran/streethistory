module.exports = {
  id: "tr0588-055",
  title: "Tract No. 21497",
  shortTitle: "Tract No. 21497",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0588/TR0588-055.pdf",
  scan: "documents/tr0588-055/tr0588-055.pdf",
  transcription: null,

  date: { on: "1955-03" },   
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
    [85, 2145], [900, 2151], [1353, 2347], [1597, 1215],
    [1073, 1007], [702, 1240], [148, 1293]
  ],
  alignment: {
    image: "documents/tr0588-055/tr0588-055-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.059008, -118.259785], note: "map-tool corner (0,0)" },
      { px: [1746, 0], ll: [34.057305, -118.255709], note: "map-tool corner (1746,0)" },
      { px: [0, 2497], ll: [34.054144, -118.262705], note: "map-tool corner (0,2497)" }
    ]
  },

  // The polygon strays onto these; the document does not inform about them.
  // NOT the same as a absent row, which says the sheet covers the ground and
  // draws nothing there (MODEL-SPEC §4.4, §5.2).
  coverageExcept: [{"street":"4th Street","from":null,"to":null}],

  sweptFully: true,
  sweptFor: ["4th Street","5th Street","Beaudry Avenue","Bixel Street","Boylston Street","Maryland Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "FIFTH STREET",
      "name": "fifth-street",
      "street": "5th Street",
      "from": {
        "px": [
          98,
          1966
        ]
      },
      "to": {
        "px": [
          1292,
          1970
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "BEAUDRY AVENUE",
      "name": "beaudry-avenue",
      "street": "Beaudry Avenue",
      "from": {
        "px": [
          1440,
          1153
        ]
      },
      "to": {
        "px": [
          1227,
          2293
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "BIXEL STREET",
      "name": "bixel",
      "street": "Bixel Street",
      "from": {
        "px": [
          283,
          1280
        ]
      },
      "to": {
        "px": [
          273,
          2146
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "BOYLSTON STREET",
      "name": "boylston",
      "street": "Boylston Street",
      "from": {
        "px": [
          1127,
          1028
        ]
      },
      "to": {
        "px": [
          1096,
          2236
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "MARYLAND STREET",
      "street": "Maryland Street",
      "from": {
        "px": [
          132,
          1514
        ]
      },
      "to": {
        "px": [
          280,
          1512
        ]
      },
      "basis": "alignment",
      "name": "maryland-street"
    },
    {
      "kind": "vanished",
      "asWritten": "Maryland Street",
      "trace": [
        [
          277,
          1507
        ],
        [
          1115,
          1525
        ]
      ],
      "basis": "alignment",
      "name": "maryland-street"
    },
    {
      "kind": "vanished",
      "asWritten": "Fourth Street",
      "trace": [
        [
          1124,
          1161
        ],
        [
          1416,
          1225
        ]
      ],
      "basis": "alignment",
      "name": "fourth-street"
    },
    {
      "kind": "vanished",
      "asWritten": "Maryland Street",
      "trace": [
        [
          1316,
          1831
        ],
        [
          1552,
          1876
        ]
      ],
      "basis": "alignment",
      "name": "maryland-street"
    }
  ]
};
