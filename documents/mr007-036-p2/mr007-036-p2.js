module.exports = {
  id: "mr007-036-p2",
  title: "Map of Colina Park, Los Angeles City, California",
  shortTitle: "Colina Park",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR007/MR007-036.pdf",
  scan: "documents/mr007-036-p2/mr007-036-p2.pdf",
  transcription: null,

  date: { on: "1885-11-28" },   
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
    [55, 38], [1073, 40], [1087, 1603], [2, 1630]
  ],
  alignment: {
    image: "documents/mr007-036-p2/mr007-036-p2-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.065711, -118.266909], note: "map-tool corner (0,0)" },
      { px: [1148, 0], ll: [34.06269, -118.260099], note: "map-tool corner (1148,0)" },
      { px: [0, 1637], ll: [34.057609, -118.272073], note: "map-tool corner (0,1637)" }
    ]
  },

  // The polygon strays onto these; the document does not inform about them.
  // NOT the same as a absent row, which says the sheet covers the ground and
  // draws nothing there (MODEL-SPEC §4.4, §5.2).
  coverageExcept: [{"street":"4th Street","from":null,"to":null},{"street":"Maryland Street","from":null,"to":null},{"street":"5th Street","from":null,"to":null},{"street":"Burlington Avenue","from":null,"to":null},{"street":"Miramar Street","from":null,"to":null}],

  sweptFully: true,
  sweptFor: ["2nd Street","3rd Street","4th Street","5th Street","6th Street","Belmont Avenue","Beverly Boulevard","Burlington Avenue","Columbia Avenue","Crown Hill Avenue","Loma Drive","Loma Place","Maryland Street","Miramar Street","Union Avenue","Union Drive","Union Place","Valencia Street","Witmer Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "North Ave",
      "street": "2nd Street",
      "from": {
        "px": [
          269,
          267
        ]
      },
      "to": {
        "px": [
          486,
          353
        ]
      },
      "basis": "alignment",
      "name": "north-ave"
    },
    {
      "kind": "state",
      "asWritten": "Silver St",
      "street": "2nd Street",
      "from": {
        "px": [
          791,
          472
        ]
      },
      "to": {
        "px": [
          1076,
          374
        ]
      },
      "basis": "alignment",
      "name": "silver-st"
    },
    {
      "kind": "absent",
      "street": "3rd Street",
      "from": {
        "px": [
          28,
          836
        ]
      },
      "to": {
        "px": [
          858,
          813
        ]
      },
      "note": "West of the Arnold Street corridor, the modern line follows lot and tract boundaries rather than a two-edged roadway."
    },
    {
      "kind": "state",
      "asWritten": "ARNOLD ST",
      "street": "3rd Street",
      "from": {
        "px": [
          858,
          813
        ]
      },
      "to": {
        "px": [
          1080,
          807
        ]
      },
      "basis": "alignment",
      "name": "arnold"
    },
    {
      "kind": "state",
      "asWritten": "Acacia St",
      "street": "4th Street",
      "from": {
        "px": [
          273,
          999
        ]
      },
      "to": {
        "px": [
          860,
          1279
        ]
      },
      "basis": "alignment",
      "name": "acacia-st"
    },
    {
      "kind": "absent",
      "street": "5th Street",
      "from": {
        "px": [
          317,
          1279
        ]
      },
      "to": {
        "px": [
          379,
          1278
        ]
      },
      "note": "The short central segment crosses Lot R and is not a roadway on the plat."
    },
    {
      "kind": "state",
      "asWritten": "Ward Street",
      "street": "6th Street",
      "from": {
        "px": [
          5,
          1530
        ]
      },
      "to": {
        "px": [
          1086,
          1516
        ]
      },
      "basis": "alignment",
      "name": "ward-st"
    },
    {
      "kind": "state",
      "asWritten": "TEXAS ST",
      "street": "Belmont Avenue",
      "from": {
        "px": [
          689,
          39
        ]
      },
      "to": {
        "px": [
          696,
          95
        ]
      },
      "basis": "alignment",
      "name": "texas-st"
    },
    {
      "kind": "state",
      "asWritten": "Diamond St",
      "name": "diamond-street",
      "street": "Beverly Boulevard",
      "from": {
        "px": [
          53,
          89
        ]
      },
      "to": {
        "px": [
          1074,
          96
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "street": "Burlington Avenue",
      "from": {
        "px": [
          98,
          90
        ]
      },
      "to": "Maryland Street",
      "note": "The modern avenue runs along block and lot edges west of Union Avenue, not through a drawn street corridor.",
      "basis": "alignment",
      "asWritten": "Union Avenue",
      "name": "union-avenue"
    },
    {
      "kind": "absent",
      "street": "Burlington Avenue",
      "from": "Maryland Street",
      "to": {
        "px": [
          99,
          1530
        ]
      },
      "note": "The modern avenue runs along block and lot edges west of Union Avenue, not through a drawn street corridor."
    },
    {
      "kind": "state",
      "asWritten": "Columbia Ave",
      "street": "Columbia Avenue",
      "from": {
        "px": [
          913,
          426
        ]
      },
      "to": {
        "px": [
          912,
          1520
        ]
      },
      "basis": "alignment",
      "name": "columbia-avenue"
    },
    {
      "kind": "state",
      "asWritten": "Arch St",
      "street": "Crown Hill Avenue",
      "from": {
        "px": [
          513,
          498
        ]
      },
      "to": {
        "px": [
          858,
          813
        ]
      },
      "basis": "alignment",
      "name": "arch-st"
    },
    {
      "kind": "absent",
      "street": "Loma Drive",
      "from": {
        "px": [
          696,
          95
        ]
      },
      "to": "2nd Street",
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "Loma Drive",
      "street": "Loma Drive",
      "from": "2nd Street",
      "to": {
        "px": [
          605,
          1141
        ]
      },
      "basis": "alignment",
      "name": "loma-drive"
    },
    {
      "kind": "state",
      "asWritten": "Loma Drive",
      "street": "Loma Drive",
      "from": {
        "px": [
          638,
          1197
        ]
      },
      "to": {
        "px": [
          616,
          1525
        ]
      },
      "basis": "alignment",
      "name": "loma-drive"
    },
    {
      "kind": "absent",
      "street": "Loma Place",
      "from": {
        "px": [
          517,
          730
        ]
      },
      "to": {
        "px": [
          582,
          580
        ]
      },
      "note": "The modern place cuts through Lot L without a drawn roadway."
    },
    {
      "kind": "absent",
      "street": "Miramar Street",
      "from": {
        "px": [
          901,
          583
        ]
      },
      "to": {
        "px": [
          1078,
          585
        ]
      },
      "note": "The eastern modern segment crosses Lot I."
    },
    {
      "kind": "unnamed",
      "street": "Miramar Street",
      "from": {
        "px": [
          107,
          682
        ]
      },
      "to": {
        "px": [
          270,
          684
        ]
      },
      "note": "The modern line follows a single lot boundary in Block B, not a two-edged street."
    },
    {
      "kind": "absent",
      "street": "Union Avenue",
      "from": {
        "px": [
          319,
          1020
        ]
      },
      "to": {
        "px": [
          316,
          1530
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "Union St",
      "street": "Union Avenue",
      "from": {
        "px": [
          443,
          1530
        ]
      },
      "to": {
        "px": [
          442,
          1619
        ]
      },
      "basis": "alignment",
      "name": "union-st"
    },
    {
      "kind": "state",
      "asWritten": "Collado St",
      "street": "Union Avenue",
      "from": {
        "px": [
          233,
          38
        ]
      },
      "to": {
        "px": [
          273,
          999
        ]
      },
      "basis": "alignment",
      "name": "collado-st"
    },
    {
      "kind": "absent",
      "street": "Union Drive",
      "from": {
        "px": [
          482,
          1072
        ]
      },
      "to": {
        "px": [
          478,
          1528
        ]
      },
      "note": "The modern drive cuts through the interior of Lot R."
    },
    {
      "kind": "state",
      "asWritten": "Western Ave",
      "street": "Union Place",
      "from": {
        "px": [
          575,
          94
        ]
      },
      "to": {
        "px": [
          366,
          1034
        ]
      },
      "basis": "alignment",
      "name": "western-ave-colina-park"
    },
    {
      "kind": "state",
      "street": "Valencia Street",
      "from": {
        "px": [
          744,
          1522
        ]
      },
      "to": {
        "px": [
          743,
          1612
        ]
      },
      "note": "No street continues south from Ward Street on this alignment.",
      "basis": "alignment",
      "asWritten": "Vernon Av",
      "name": "vernon-ave"
    },
    {
      "kind": "state",
      "asWritten": "Nichols Avenue",
      "street": "Witmer Street",
      "from": {
        "px": [
          1005,
          585
        ]
      },
      "to": {
        "px": [
          1032,
          1604
        ]
      },
      "basis": "alignment",
      "name": "nichols-ave"
    },
    {
      "kind": "vanished",
      "asWritten": "Silver St",
      "trace": [
        [
          789,
          472
        ],
        [
          553,
          542
        ]
      ],
      "basis": "alignment",
      "name": "silver-st"
    },
    {
      "kind": "vanished",
      "asWritten": "Gravilla St",
      "trace": [
        [
          385,
          863
        ],
        [
          471,
          916
        ],
        [
          569,
          917
        ],
        [
          859,
          1078
        ]
      ],
      "basis": "alignment",
      "name": "gravilla-st"
    },
    {
      "kind": "vanished",
      "asWritten": "Western Ave",
      "trace": [
        [
          216,
          1526
        ],
        [
          147,
          1305
        ],
        [
          224,
          1155
        ],
        [
          287,
          1009
        ],
        [
          364,
          842
        ],
        [
          395,
          760
        ]
      ],
      "basis": "alignment",
      "name": "western-ave-colina-park"
    }
  ]
};
