module.exports = {
  id: "mr007-026-p2",
  title: "Map of the Park Tract, Los Angeles City, Cal.",
  shortTitle: "Park Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR007/MR007-026.pdf",
  scan: "documents/mr007-026-p2/mr007-026-p2.pdf",
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
    [127, 129], [341, 529], [543, 426], [838, 1025],
    [1652, 540], [1580, -46]
  ],
  alignment: {
    image: "documents/mr007-026-p2/mr007-026-p2-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.067336, -118.253751], note: "map-tool corner (0,0)" },
      { px: [1661, 0], ll: [34.059241, -118.247545], note: "map-tool corner (1661,0)" },
      { px: [0, 1125], ll: [34.06383, -118.260323], note: "map-tool corner (0,1125)" }
    ]
  },

  // The polygon strays onto these; the document does not inform about them.
  // NOT the same as a absent row, which says the sheet covers the ground and
  // draws nothing there (MODEL-SPEC §4.4, §5.2).
  coverageExcept: [{"street":"Court Street","from":null,"to":null},{"street":"Colton Street","from":null,"to":null}],

  sweptFully: true,
  sweptFor: ["1st Street","Angelina Street","Beaudry Avenue","Bixel Street","Boylston Street","Colton Street","Court Street","Dewap Road","Diamond Street","Figueroa Street","Firmin Street","Fremont Avenue","Harbor Freeway","Mignonette Street","Temple Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "Diamond",
      "street": "1st Street",
      "from": {
        "px": [
          807,
          963
        ]
      },
      "to": {
        "px": [
          1253,
          777
        ]
      },
      "basis": "alignment",
      "name": "diamond-street"
    },
    {
      "kind": "state",
      "street": "Angelina Street",
      "from": {
        "px": [
          741,
          182
        ]
      },
      "to": {
        "px": [
          806,
          147
        ]
      },
      "basis": "alignment",
      "note": "A short roadway is drawn, but no label is legible here.",
      "asWritten": "Angelina St",
      "name": "angelina-st"
    },
    {
      "kind": "state",
      "street": "Beaudry Avenue",
      "from": {
        "px": [
          778,
          51
        ]
      },
      "to": {
        "px": [
          1165,
          830
        ]
      },
      "basis": "alignment",
      "note": "The mapped road is continuous, but its lettering is not clear enough to quote.",
      "asWritten": "Beaudry",
      "name": "beaudry-avenue"
    },
    {
      "kind": "state",
      "asWritten": "Metcalf St",
      "street": "Bixel Street",
      "from": {
        "px": [
          196,
          147
        ]
      },
      "to": {
        "px": [
          394,
          502
        ]
      },
      "basis": "alignment",
      "name": "metcalf-st"
    },
    {
      "kind": "state",
      "street": "Boylston Street",
      "from": {
        "px": [
          438,
          92
        ]
      },
      "to": {
        "px": [
          705,
          592
        ]
      },
      "basis": "alignment",
      "note": "A roadway is drawn along the alignment, without a securely legible label.",
      "asWritten": "Figueroa St",
      "name": "figueroa-gov"
    },
    {
      "kind": "absent",
      "street": "Dewap Road",
      "from": {
        "px": [
          1561,
          594
        ]
      },
      "to": {
        "px": [
          1523,
          53
        ]
      },
      "note": "The modern alignment lies beyond the tract street grid on this page."
    },
    {
      "kind": "state",
      "street": "Diamond Street",
      "from": {
        "px": [
          1125,
          756
        ]
      },
      "to": {
        "px": [
          1489,
          546
        ]
      },
      "basis": "alignment",
      "note": "The sheet draws a roadway here, but its label is not securely legible.",
      "name": "diamond-street",
      "asWritten": "Diamond St"
    },
    {
      "kind": "state",
      "asWritten": "Pearl St",
      "name": "pearl",
      "street": "Figueroa Street",
      "from": {
        "px": [
          1513,
          623
        ]
      },
      "to": {
        "px": [
          1495,
          -36
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "street": "Firmin Street",
      "from": {
        "px": [
          293,
          133
        ]
      },
      "to": {
        "px": [
          462,
          437
        ]
      },
      "basis": "alignment",
      "note": "A road corridor is drawn along this alignment without a legible label.",
      "name": "fireman-st",
      "asWritten": "Fireman St"
    },
    {
      "kind": "state",
      "asWritten": "Beaudry St",
      "street": "Fremont Avenue",
      "from": {
        "px": [
          1343,
          724
        ]
      },
      "to": {
        "px": [
          1301,
          28
        ]
      },
      "basis": "alignment",
      "name": "beaudry-st"
    },
    {
      "kind": "absent",
      "street": "Harbor Freeway",
      "from": {
        "px": [
          1270,
          768
        ]
      },
      "to": {
        "px": [
          1122,
          9
        ]
      },
      "note": "The freeway alignment crosses lots and older streets."
    },
    {
      "kind": "state",
      "asWritten": "Mignonette St",
      "street": "Mignonette Street",
      "from": {
        "px": [
          1036,
          603
        ]
      },
      "to": {
        "px": [
          1164,
          527
        ]
      },
      "basis": "alignment",
      "name": "mignonette-st"
    },
    {
      "kind": "unnamed",
      "street": "Temple Street",
      "from": {
        "px": [
          140,
          154
        ]
      },
      "to": {
        "px": [
          1590,
          38
        ]
      },
      "basis": "alignment",
      "note": "The roadway at the northern edge is drawn, but its lettering is not legible."
    },
    {
      "kind": "vanished",
      "asWritten": "Court St",
      "trace": [
        [
          631,
          445
        ],
        [
          867,
          305
        ],
        [
          1027,
          270
        ]
      ],
      "basis": "alignment",
      "name": "court-street"
    },
    {
      "kind": "vanished",
      "asWritten": "Angelina St",
      "trace": [
        [
          740,
          183
        ],
        [
          546,
          287
        ]
      ],
      "basis": "alignment",
      "name": "angelina-st"
    },
    {
      "kind": "vanished",
      "asWritten": "Mignonette Street",
      "trace": [
        [
          1161,
          529
        ],
        [
          1297,
          472
        ]
      ],
      "basis": "alignment",
      "name": "mignonette-st"
    },
    {
      "kind": "vanished",
      "asWritten": "Mignonette St",
      "trace": [
        [
          1035,
          604
        ],
        [
          785,
          741
        ]
      ],
      "basis": "alignment",
      "name": "mignonette-st"
    },
    {
      "kind": "vanished",
      "asWritten": "Figueroa St",
      "trace": [
        [
          706,
          590
        ],
        [
          879,
          917
        ]
      ],
      "basis": "alignment",
      "name": "figueroa-gov"
    },
    {
      "kind": "vanished",
      "asWritten": "Pink St",
      "trace": [
        [
          704,
          591
        ],
        [
          1113,
          374
        ]
      ],
      "basis": "alignment",
      "name": "pink-st"
    },
    {
      "kind": "vanished",
      "asWritten": "Centennial Ave",
      "trace": [
        [
          1121,
          193
        ],
        [
          1129,
          95
        ]
      ],
      "basis": "alignment",
      "name": "centennial-ave"
    },
    {
      "kind": "vanished",
      "asWritten": "North Court",
      "trace": [
        [
          1027,
          267
        ],
        [
          1117,
          190
        ],
        [
          1206,
          255
        ]
      ],
      "basis": "alignment",
      "name": "north-court"
    },
    {
      "kind": "vanished",
      "asWritten": "South Court",
      "trace": [
        [
          1024,
          274
        ],
        [
          1109,
          370
        ],
        [
          1207,
          265
        ]
      ],
      "basis": "alignment",
      "name": "south-court"
    },
    {
      "kind": "vanished",
      "asWritten": "Court Street",
      "trace": [
        [
          1208,
          260
        ],
        [
          1301,
          270
        ]
      ],
      "basis": "alignment",
      "name": "court-street"
    },
    {
      "kind": "vanished",
      "asWritten": "Diamond St",
      "trace": [
        [
          1198,
          711
        ],
        [
          1322,
          640
        ]
      ],
      "basis": "alignment",
      "name": "diamond-street"
    }
  ]
};
