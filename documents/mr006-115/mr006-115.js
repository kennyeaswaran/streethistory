module.exports = {
  id: "mr006-115",
  title: "Subdivision Map of 35 Acre Lot 1, Block 38, Hancock's Survey, and Part of Woolen Mill Tract",
  shortTitle: "35 Acre Lot 1, Block 38",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-115.pdf",
  scan: "documents/mr006-115/mr006-115.pdf",
  transcription: null,

  date: { on: "1884-11-24" },   
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
    [172, 933], [914, 938], [930, 534], [1306, 538],
    [1337, 221], [812, 150], [198, 231]
  ],
  alignment: {
    image: "documents/mr006-115/mr006-115-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.063793, -118.26004], note: "map-tool corner (0,0)" },
      { px: [1712, 0], ll: [34.059499, -118.249718], note: "map-tool corner (1712,0)" },
      { px: [0, 1084], ll: [34.05834, -118.263299], note: "map-tool corner (0,1084)" }
    ]
  },

  // The polygon strays onto these; the document does not inform about them.
  // NOT the same as a absent row, which says the sheet covers the ground and
  // draws nothing there (MODEL-SPEC §4.4, §5.2).
  coverageExcept: [{"street":"2nd Street","from":null,"to":null},{"street":"Miramar Street","from":null,"to":null}],

  sweptFully: true,
  sweptFor: ["1st Street","2nd Street","Beaudry Avenue","Bixel Street","Boylston Street","Diamond Street","Edgeware Road","Emerald Drive","Emerald Street","Glendale Boulevard","Harbor Freeway","Huntley Drive","Lucas Avenue","Miramar Street","Toluca Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "Diamond St.",
      "street": "1st Street",
      "from": {
        "px": [
          196,
          280
        ]
      },
      "to": {
        "px": [
          868,
          297
        ]
      },
      "basis": "alignment",
      "name": "diamond-street"
    },
    {
      "kind": "absent",
      "street": "1st Street",
      "from": {
        "px": [
          868,
          297
        ]
      },
      "to": {
        "px": [
          1321,
          383
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "absent",
      "street": "2nd Street",
      "from": {
        "px": [
          221,
          283
        ]
      },
      "to": {
        "px": [
          928,
          581
        ]
      },
      "note": "The modern diagonal crosses the gridded lots and several old streets."
    },
    {
      "kind": "state",
      "asWritten": "Beaudry",
      "street": "Beaudry Avenue",
      "from": {
        "px": [
          1146,
          195
        ]
      },
      "to": {
        "px": [
          1118,
          536
        ]
      },
      "basis": "alignment",
      "name": "beaudry-avenue"
    },
    {
      "kind": "absent",
      "street": "Bixel Street",
      "from": "1st Street",
      "to": "2nd Street",
      "basis": "alignment"
    },
    {
      "kind": "state",
      "street": "Bixel Street",
      "from": "Miramar Street",
      "to": {
        "px": [
          527,
          935
        ]
      },
      "basis": "alignment",
      "asWritten": "Lafayette Av.",
      "name": "lafayette-bixel"
    },
    {
      "kind": "state",
      "street": "Boylston Street",
      "from": "Miramar Street",
      "to": {
        "px": [
          855,
          938
        ]
      },
      "basis": "alignment",
      "asWritten": "Figueroa St",
      "name": "figueroa-gov"
    },
    {
      "kind": "state",
      "asWritten": "Diamond St.",
      "street": "Diamond Street",
      "from": "Beaudry Avenue",
      "to": {
        "px": [
          1234,
          283
        ]
      },
      "basis": "alignment",
      "name": "diamond-street"
    },
    {
      "kind": "absent",
      "street": "Edgeware Road",
      "from": "2nd Street",
      "to": {
        "px": [
          513,
          310
        ]
      }
    },
    {
      "kind": "state",
      "asWritten": "Farmer St.",
      "street": "Emerald Drive",
      "from": "Lucas Avenue",
      "to": {
        "px": [
          363,
          685
        ]
      },
      "basis": "alignment",
      "name": "farmer"
    },
    {
      "kind": "absent",
      "street": "Emerald Street",
      "from": "2nd Street",
      "to": {
        "px": [
          582,
          582
        ]
      },
      "note": "The modern curved line cuts through the old blocks rather than following their streets."
    },
    {
      "kind": "state",
      "street": "Emerald Street",
      "from": {
        "px": [
          582,
          582
        ]
      },
      "to": "Emerald Drive",
      "note": "The modern curved line cuts through the old blocks rather than following their streets.",
      "basis": "alignment",
      "asWritten": "Emerald St.",
      "name": "emerald"
    },
    {
      "kind": "absent",
      "street": "Glendale Boulevard",
      "from": {
        "px": [
          197,
          256
        ]
      },
      "to": "2nd Street"
    },
    {
      "kind": "absent",
      "street": "Harbor Freeway",
      "from": {
        "px": [
          1315,
          218
        ]
      },
      "to": {
        "px": [
          1264,
          538
        ]
      }
    },
    {
      "kind": "absent",
      "street": "Huntley Drive",
      "from": {
        "px": [
          781,
          670
        ]
      },
      "to": {
        "px": [
          860,
          731
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "Figueroa St.",
      "street": "Huntley Drive",
      "from": {
        "px": [
          860,
          731
        ]
      },
      "to": {
        "px": [
          857,
          895
        ]
      },
      "basis": "alignment",
      "name": "figueroa-gov"
    },
    {
      "kind": "state",
      "asWritten": "Lucas Ave",
      "street": "Lucas Avenue",
      "from": {
        "px": [
          195,
          301
        ]
      },
      "to": {
        "px": [
          226,
          933
        ]
      },
      "basis": "alignment",
      "name": "lucas-avenue"
    },
    {
      "kind": "state",
      "asWritten": "Seminary Street",
      "street": "Miramar Street",
      "from": "Bixel Street",
      "to": {
        "px": [
          915,
          905
        ]
      },
      "basis": "alignment",
      "name": "seminary"
    },
    {
      "kind": "absent",
      "street": "Toluca Street",
      "from": {
        "px": [
          369,
          208
        ]
      },
      "to": "Emerald Street",
      "basis": "alignment"
    },
    {
      "kind": "vanished",
      "asWritten": "Seminary Street",
      "trace": [
        [
          230,
          834
        ],
        [
          532,
          840
        ]
      ],
      "basis": "alignment",
      "name": "seminary"
    },
    {
      "kind": "vanished",
      "asWritten": "Emerald St",
      "trace": [
        [
          437,
          837
        ],
        [
          363,
          684
        ]
      ],
      "basis": "alignment",
      "name": "emerald"
    },
    {
      "kind": "vanished",
      "asWritten": "Sapphire St.",
      "trace": [
        [
          460,
          837
        ],
        [
          864,
          638
        ]
      ],
      "basis": "alignment",
      "name": "sapphire"
    },
    {
      "kind": "vanished",
      "asWritten": "Jewel St.",
      "trace": [
        [
          537,
          798
        ],
        [
          471,
          658
        ]
      ],
      "basis": "alignment",
      "name": "jewel-st"
    },
    {
      "kind": "vanished",
      "asWritten": "Emerald Street",
      "trace": [
        [
          583,
          582
        ],
        [
          857,
          575
        ]
      ],
      "basis": "alignment",
      "name": "emerald"
    },
    {
      "kind": "vanished",
      "asWritten": "Figueroa St",
      "trace": [
        [
          858,
          727
        ],
        [
          866,
          299
        ]
      ],
      "basis": "alignment",
      "name": "figueroa-gov"
    },
    {
      "kind": "vanished",
      "asWritten": "Mariposa Street",
      "trace": [
        [
          585,
          581
        ],
        [
          587,
          296
        ]
      ],
      "basis": "alignment",
      "name": "mariposa-street-hancock"
    },
    {
      "kind": "vanished-unnamed",
      "trace": [
        [
          326,
          388
        ],
        [
          245,
          284
        ]
      ],
      "basis": "alignment"
    },
    {
      "kind": "vanished",
      "asWritten": "Brook St",
      "trace": [
        [
          310,
          683
        ],
        [
          323,
          388
        ]
      ],
      "basis": "alignment",
      "name": "brook-st"
    },
    {
      "kind": "vanished",
      "asWritten": "South Diamond Street",
      "trace": [
        [
          326,
          389
        ],
        [
          864,
          389
        ],
        [
          1265,
          431
        ]
      ],
      "basis": "alignment",
      "name": "south-diamond"
    },
    {
      "kind": "vanished",
      "asWritten": "Ruby Street",
      "trace": [
        [
          586,
          480
        ],
        [
          860,
          481
        ]
      ],
      "basis": "alignment",
      "name": "ruby-street-hancock"
    }
  ]
};
