module.exports = {
  id: "mr007-026-p1",
  title: "Map of the Park Tract, Los Angeles City, Cal.",
  shortTitle: "Park Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR007/MR007-026.pdf",
  scan: "documents/mr007-026-p1/mr007-026-p1.pdf",
  transcription: null,

  date: { on: "1885-01" },   
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
    [519, 1714], [903, 1571], [1067, 654], [927, 3],
    [218, 85], [335, 1248]
  ],
  alignment: {
    image: "documents/mr007-026-p1/mr007-026-p1-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.061191, -118.241541], note: "map-tool corner (0,0)" },
      { px: [1128, 0], ll: [34.057057, -118.247594], note: "map-tool corner (1128,0)" },
      { px: [0, 1678], ll: [34.068703, -118.248911], note: "map-tool corner (0,1678)" }
    ]
  },

  // The polygon strays onto these; the document does not inform about them.
  // NOT the same as a absent row, which says the sheet covers the ground and
  // draws nothing there (MODEL-SPEC §4.4, §5.2).
  coverageExcept: [{"street":"Fort Moore Place","from":null,"to":null},{"street":"Cesar E Chavez Avenue","from":null,"to":null},{"street":"Sunvue Place","from":null,"to":null},{"street":"Angelina Street","from":null,"to":null},{"street":"Hope Street","from":null,"to":null}],

  sweptFully: true,
  sweptFor: ["Angelina Street","Beaudry Avenue","Bellevue Avenue","Boston Street","Boylston Street","Bunker Hill Avenue","Cesar E Chavez Avenue","Custer Avenue","Dewap Road","Figueroa Street","Fort Moore Place","Fremont Avenue","Grand Avenue","Harbor Freeway","Hollywood Freeway","Hope Street","Santa Ana Freeway","Sunset Boulevard","Sunvue Place","Temple Street","Victor Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "Beaudry avenue",
      "street": "Beaudry Avenue",
      "from": {
        "px": [
          979,
          1145
        ]
      },
      "to": {
        "px": [
          331,
          1212
        ]
      },
      "basis": "alignment",
      "name": "beaudry-avenue"
    },
    {
      "kind": "state",
      "street": "Bellevue Avenue",
      "from": {
        "px": [
          496,
          1657
        ]
      },
      "to": {
        "px": [
          454,
          1284
        ]
      },
      "basis": "alignment",
      "note": "An unlettered curving roadway is drawn along this stretch.",
      "asWritten": "Canal and Reservoir St",
      "name": "canal-and-reservoir-st"
    },
    {
      "kind": "absent",
      "street": "Boston Street",
      "from": {
        "px": [
          688,
          1651
        ]
      },
      "to": {
        "px": [
          675,
          1590
        ]
      },
      "note": "No distinct street corridor is shown in this short covered stretch."
    },
    {
      "kind": "state",
      "street": "Boylston Street",
      "from": {
        "px": [
          507,
          1649
        ]
      },
      "to": {
        "px": [
          920,
          1477
        ]
      },
      "basis": "alignment",
      "note": "The line follows an unlettered roadway at the southern edge of the tract.",
      "asWritten": "Figueroa Street",
      "name": "figueroa-gov"
    },
    {
      "kind": "state",
      "asWritten": "Montreal St",
      "street": "Bunker Hill Avenue",
      "from": {
        "px": [
          243,
          338
        ]
      },
      "to": {
        "px": [
          341,
          288
        ]
      },
      "basis": "alignment",
      "name": "montreal-st"
    },
    {
      "kind": "state",
      "asWritten": "Canal and Reservoir Street",
      "street": "Cesar E Chavez Avenue",
      "from": {
        "px": [
          368,
          633
        ]
      },
      "to": {
        "px": [
          310,
          74
        ]
      },
      "basis": "alignment",
      "name": "canal-and-reservoir-st"
    },
    {
      "kind": "state",
      "asWritten": "Custer ave",
      "street": "Custer Avenue",
      "from": {
        "px": [
          413,
          1067
        ]
      },
      "to": {
        "px": [
          504,
          1048
        ]
      },
      "basis": "alignment",
      "name": "custer-ave"
    },
    {
      "kind": "unnamed",
      "street": "Dewap Road",
      "from": {
        "px": [
          1018,
          428
        ]
      },
      "to": {
        "px": [
          920,
          431
        ]
      },
      "basis": "alignment",
      "note": "A roadway is drawn, but no label is legible on this short stretch."
    },
    {
      "kind": "state",
      "asWritten": "Pearl Street",
      "street": "Figueroa Street",
      "from": {
        "px": [
          277,
          675
        ]
      },
      "to": {
        "px": [
          1028,
          473
        ]
      },
      "basis": "alignment",
      "name": "pearl"
    },
    {
      "kind": "state",
      "street": "Fremont Avenue",
      "from": {
        "px": [
          1064,
          668
        ]
      },
      "to": {
        "px": [
          869,
          648
        ]
      },
      "basis": "alignment",
      "note": "A roadway is drawn here, but its lettering is not legible on this page.",
      "asWritten": "Beaudry St",
      "name": "beaudry-st"
    },
    {
      "kind": "state",
      "asWritten": "Philadelphia St",
      "street": "Grand Avenue",
      "from": {
        "px": [
          934,
          34
        ]
      },
      "to": {
        "px": [
          224,
          143
        ]
      },
      "basis": "alignment",
      "name": "philadelphia-st"
    },
    {
      "kind": "absent",
      "street": "Harbor Freeway",
      "from": {
        "px": [
          1042,
          796
        ]
      },
      "to": {
        "px": [
          299,
          888
        ]
      },
      "note": "The freeway alignment crosses the subdivided lots and older streets."
    },
    {
      "kind": "absent",
      "street": "Hollywood Freeway",
      "from": {
        "px": [
          719,
          1640
        ]
      },
      "to": {
        "px": [
          674,
          32
        ]
      },
      "note": "The freeway alignment cuts across the tract grid."
    },
    {
      "kind": "absent",
      "street": "Santa Ana Freeway",
      "from": {
        "px": [
          703,
          1551
        ]
      },
      "to": {
        "px": [
          652,
          35
        ]
      },
      "note": "The freeway alignment cuts through lots and streets."
    },
    {
      "kind": "state",
      "street": "Sunset Boulevard",
      "from": {
        "px": [
          375,
          1348
        ]
      },
      "to": {
        "px": [
          368,
          633
        ]
      },
      "basis": "alignment",
      "note": "A continuous roadway is drawn, but its label is not legible on this page.",
      "asWritten": "Canal and Reservoir Street",
      "name": "canal-and-reservoir-st"
    },
    {
      "kind": "state",
      "street": "Temple Street",
      "from": {
        "px": [
          855,
          1589
        ]
      },
      "to": {
        "px": [
          877,
          9
        ]
      },
      "basis": "alignment",
      "note": "The modern line follows the eastern boundary roadway; the lettering is not legible on this page.",
      "asWritten": "Temple Street",
      "name": "temple"
    },
    {
      "kind": "state",
      "asWritten": "Victor ave",
      "street": "Victor Street",
      "from": {
        "px": [
          856,
          1341
        ]
      },
      "to": {
        "px": [
          555,
          1393
        ]
      },
      "basis": "alignment",
      "name": "victor-ave"
    },
    {
      "kind": "vanished",
      "asWritten": "Custer Ave",
      "trace": [
        [
          507,
          1046
        ],
        [
          892,
          984
        ]
      ],
      "basis": "alignment",
      "name": "custer-ave"
    },
    {
      "kind": "vanished",
      "asWritten": "Centennial Ave",
      "trace": [
        [
          327,
          895
        ],
        [
          920,
          791
        ]
      ],
      "basis": "alignment",
      "name": "centennial-ave"
    },
    {
      "kind": "vanished-unnamed",
      "trace": [
        [
          914,
          829
        ],
        [
          996,
          838
        ]
      ],
      "basis": "alignment"
    },
    {
      "kind": "vanished",
      "asWritten": "Boston Street",
      "trace": [
        [
          584,
          845
        ],
        [
          541,
          554
        ],
        [
          504,
          249
        ]
      ],
      "basis": "alignment",
      "name": "boston-street"
    },
    {
      "kind": "vanished",
      "asWritten": "Montreal St",
      "trace": [
        [
          344,
          291
        ],
        [
          678,
          265
        ]
      ],
      "basis": "alignment",
      "name": "montreal-st"
    },
    {
      "kind": "vanished",
      "asWritten": "Bunker Hill Ave",
      "trace": [
        [
          818,
          451
        ],
        [
          719,
          361
        ],
        [
          678,
          266
        ],
        [
          731,
          177
        ],
        [
          810,
          130
        ],
        [
          888,
          124
        ]
      ],
      "basis": "alignment",
      "name": "bunker-hill-ave"
    },
    {
      "kind": "vanished-unnamed",
      "trace": [
        [
          891,
          127
        ],
        [
          968,
          108
        ]
      ],
      "basis": "alignment"
    },
    {
      "kind": "vanished",
      "asWritten": "Sand St",
      "trace": [
        [
          715,
          196
        ],
        [
          698,
          4
        ]
      ],
      "basis": "alignment",
      "name": "sand-st"
    },
    {
      "kind": "vanished",
      "asWritten": "Crescent Ave",
      "trace": [
        [
          867,
          647
        ],
        [
          798,
          654
        ],
        [
          709,
          620
        ],
        [
          633,
          675
        ],
        [
          562,
          682
        ]
      ],
      "basis": "alignment",
      "name": "crescent-park-tract"
    },
    {
      "kind": "state",
      "street": "Boylston Street",
      "from": null,
      "to": null,
      "basis": "alignment",
      "note": "Added in review: the sheet draws this corridor with no name lettered on it.",
      "asWritten": "Figueroa Street",
      "name": "figueroa-gov"
    },
    {
      "kind": "vanished",
      "asWritten": "Figueroa Street",
      "trace": [
        [
          673,
          1589
        ],
        [
          773,
          1541
        ]
      ],
      "basis": "alignment",
      "name": "figueroa-gov"
    },
    {
      "kind": "vanished",
      "asWritten": "Victor Ave",
      "trace": [
        [
          615,
          1384
        ],
        [
          755,
          1359
        ]
      ],
      "basis": "alignment",
      "name": "victor-ave"
    }
  ]
};
