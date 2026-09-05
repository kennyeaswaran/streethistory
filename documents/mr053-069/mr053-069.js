module.exports = {
  id: "mr053-069",
  title: "Plan de la Ciudad de Los Angeles",
  shortTitle: "Hutton / Ord Survey",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf",
  scan: "documents/mr053-069/mr053-069.pdf",
  transcription: null,

  date: { on: "1849-08-29" },   
  // §4.1a. Whatever this tool saves has a sheet under it — that is what the
  // tool is for — but a loaded document's own declaration wins, so re-saving
  // one this tool should not have opened cannot quietly reclassify it.
  form: "drawn",
  type: "tract-map",
  attests: "planned-on",
  completeness: "incidental",
  readBy: "human",

  // Coverage is the ground this document informs about — the tract boundary,
  // not the sheet edge (MODEL-SPEC §4.4). SCAN PIXELS against alignment.image,
  // so a better alignment carries it along (§4.6).
  coverage: [
    [111, 1092], [105, 1437], [426, 1433], [442, 1519],
    [895, 1526], [961, 1385], [916, 1210]
  ],
  alignment: {
    image: "documents/mr053-069/mr053-069-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.059891, -118.269356], note: "document-tool corner (0,0)" },
      { px: [1086, 0], ll: [34.073221, -118.257051], note: "document-tool corner (1086,0)" },
      { px: [0, 1717], ll: [34.04366, -118.244094], note: "document-tool corner (0,1717)" }
    ]
  },

  // The polygon strays onto these; the document does not inform about them.
  // NOT the same as a absent row, which says the sheet covers the ground and
  // draws nothing there (MODEL-SPEC §4.4, §5.2).
  coverageExcept: [{"street":"4th Street","from":"Main Street","to":null}],

  sweptFully: true,
  sweptFor: ["1st Street","2nd Street","2nd Street Tunnel","3rd Street","4th Street","Alameda Street","Aliso Street","Arcadia Street","Broad Plaza","Broadway","Cesar E Chavez Avenue","Community Terrace","Fort Moore Place","Hill Street","Los Angeles Street","Main Street","Marketplace","Metro Red/Purple Lines Entrance","New High Street","Olive Street","Olvera Street","Sanchez Street","Santa Ana Freeway","Spring Street","Temple Street"],

  rows: [
    {
      "kind": "absent",
      "street": "1st Street",
      "from": {
        "px": [
          462,
          1144
        ]
      },
      "to": "Broadway",
      "basis": "alignment",
      "note": "The aligned modern run stays within the historic roadway lettered CALLE 1a."
    },
    {
      "kind": "state",
      "asWritten": [
        "CALLE 1a",
        "1ST ST"
      ],
      "street": "1st Street",
      "from": "Broadway",
      "to": {
        "px": [
          455,
          1519
        ]
      },
      "basis": "alignment",
      "note": "The aligned modern run stays within the historic roadway lettered CALLE 1a.",
      "name": "first-street"
    },
    {
      "kind": "absent",
      "street": "2nd Street Tunnel",
      "from": {
        "px": [
          362,
          1129
        ]
      },
      "to": {
        "px": [
          362,
          1155
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "3rd Street",
      "from": {
        "px": [
          245,
          1112
        ]
      },
      "to": "Hill Street",
      "basis": "alignment",
      "note": "The aligned modern run stays within the historic roadway lettered CALLE 3a."
    },
    {
      "kind": "state",
      "asWritten": [
        "CALLE 3a",
        "3RD ST"
      ],
      "street": "3rd Street",
      "from": "Hill Street",
      "to": {
        "px": [
          229,
          1435
        ]
      },
      "basis": "alignment",
      "note": "The aligned modern run stays within the historic roadway lettered CALLE 3a.",
      "name": "third-street"
    },
    {
      "kind": "absent",
      "street": "4th Street",
      "from": {
        "px": [
          127,
          1094
        ]
      },
      "to": "Hill Street",
      "basis": "alignment",
      "note": "The aligned modern run stays within the historic roadway lettered CALLE 4a."
    },
    {
      "kind": "state",
      "asWritten": [
        "CALLE 4a",
        "4TH ST"
      ],
      "street": "4th Street",
      "from": "Hill Street",
      "to": "Main Street",
      "basis": "alignment",
      "note": "The aligned modern run stays within the historic roadway lettered CALLE 4a.",
      "name": "fourth-street"
    },
    {
      "kind": "absent",
      "street": "Alameda Street",
      "from": {
        "px": [
          920,
          1473
        ]
      },
      "to": {
        "px": [
          820,
          1525
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Aliso Street",
      "from": {
        "px": [
          720,
          1264
        ]
      },
      "to": {
        "px": [
          717,
          1523
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Arcadia Street",
      "from": {
        "px": [
          750,
          1264
        ]
      },
      "to": {
        "px": [
          757,
          1524
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Broad Plaza",
      "from": {
        "px": [
          408,
          1433
        ]
      },
      "to": {
        "px": [
          428,
          1443
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Cesar E Chavez Avenue",
      "from": {
        "px": [
          882,
          1205
        ]
      },
      "to": {
        "px": [
          951,
          1407
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Community Terrace",
      "from": "Hill Street",
      "to": "Broadway",
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Fort Moore Place",
      "from": {
        "px": [
          851,
          1201
        ]
      },
      "to": {
        "px": [
          770,
          1189
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "unnamed",
      "street": "Los Angeles Street",
      "from": {
        "px": [
          818,
          1464
        ]
      },
      "to": {
        "px": [
          719,
          1469
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment.",
      "attests": "built-by"
    },
    {
      "kind": "absent",
      "street": "Los Angeles Street",
      "from": {
        "px": [
          872,
          1498
        ]
      },
      "to": {
        "px": [
          819,
          1466
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "unnamed",
      "street": "Los Angeles Street",
      "from": {
        "px": [
          503,
          1477
        ]
      },
      "to": {
        "px": [
          435,
          1481
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment.",
      "attests": "built-by"
    },
    {
      "kind": "unnamed",
      "street": "Los Angeles Street",
      "from": {
        "px": [
          656,
          1469
        ]
      },
      "to": {
        "px": [
          575,
          1470
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment.",
      "attests": "built-by"
    },
    {
      "kind": "state",
      "asWritten": "MAIN STREET",
      "street": "Main Street",
      "from": {
        "px": [
          950,
          1408
        ]
      },
      "to": {
        "px": [
          106,
          1408
        ]
      },
      "basis": "alignment",
      "note": "The aligned modern run stays within the historic roadway lettered MAIN STREET.",
      "name": "main-street-dtla"
    },
    {
      "kind": "absent",
      "street": "Marketplace",
      "from": "Broadway",
      "to": "Spring Street",
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Metro Red/Purple Lines Entrance",
      "from": "Hill Street",
      "to": "1st Street",
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "New High Street",
      "from": {
        "px": [
          945,
          1323
        ]
      },
      "to": {
        "px": [
          898,
          1337
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "New High Street",
      "from": {
        "px": [
          847,
          1337
        ]
      },
      "to": {
        "px": [
          823,
          1351
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Olive Street",
      "from": {
        "px": [
          267,
          1115
        ]
      },
      "to": {
        "px": [
          111,
          1115
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "unnamed",
      "street": "Olvera Street",
      "from": {
        "px": [
          937,
          1436
        ]
      },
      "to": {
        "px": [
          861,
          1436
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment.",
      "attests": "built-by"
    },
    {
      "kind": "unnamed",
      "street": "Sanchez Street",
      "from": {
        "px": [
          805,
          1437
        ]
      },
      "to": {
        "px": [
          760,
          1441
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment.",
      "attests": "built-by"
    },
    {
      "kind": "absent",
      "street": "Santa Ana Freeway",
      "from": {
        "px": [
          739,
          1184
        ]
      },
      "to": {
        "px": [
          745,
          1524
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Santa Ana Freeway",
      "from": {
        "px": [
          731,
          1183
        ]
      },
      "to": {
        "px": [
          734,
          1524
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Temple Street",
      "from": {
        "px": [
          646,
          1170
        ]
      },
      "to": {
        "px": [
          598,
          1521
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "2nd Street",
      "from": {
        "px": [
          370,
          1130
        ]
      },
      "to": {
        "px": [
          362,
          1155
        ]
      },
      "note": "This short approach lies in the hillside above the mapped CALLE 2a corridor; no roadway is drawn here."
    },
    {
      "kind": "absent",
      "street": "2nd Street",
      "from": {
        "px": [
          361,
          1188
        ]
      },
      "to": "Broadway",
      "basis": "alignment",
      "note": "The aligned modern run stays within the historic roadway lettered CALLE 2a."
    },
    {
      "kind": "state",
      "asWritten": [
        "CALLE 2a",
        "2D ST"
      ],
      "street": "2nd Street",
      "from": "Broadway",
      "to": {
        "px": [
          362,
          1434
        ]
      },
      "basis": "alignment",
      "note": "The aligned modern run stays within the historic roadway lettered CALLE 2a.",
      "name": "second-street"
    },
    {
      "kind": "unnamed",
      "street": "Broadway",
      "from": {
        "px": [
          935,
          1283
        ]
      },
      "to": "Cesar E Chavez Avenue",
      "note": "North of 1st Street, modern Broadway crosses the hill and Plaza ground rather than a continuous roadway."
    },
    {
      "kind": "absent",
      "street": "Broadway",
      "from": "Cesar E Chavez Avenue",
      "to": "1st Street",
      "note": "North of 1st Street, modern Broadway crosses the hill and Plaza ground rather than a continuous roadway."
    },
    {
      "kind": "state",
      "asWritten": "FORT STREET",
      "street": "Broadway",
      "from": "1st Street",
      "to": {
        "px": [
          108,
          1261
        ]
      },
      "basis": "alignment",
      "note": "South of 1st Street, modern Broadway follows the gridded corridor lettered FORT STREET.",
      "name": "fort-street"
    },
    {
      "kind": "absent",
      "street": "Hill Street",
      "from": {
        "px": [
          920,
          1224
        ]
      },
      "to": "1st Street",
      "note": "North of 1st Street, the modern trace traverses hillside without a two-edge street corridor.",
      "basis": "alignment"
    },
    {
      "kind": "absent",
      "street": "Hill Street",
      "from": "1st Street",
      "to": {
        "px": [
          310,
          1187
        ]
      },
      "basis": "alignment",
      "note": "This southern grid segment continues the HILL STREET corridor lettered on sheet 68."
    },
    {
      "kind": "state",
      "asWritten": "HILL STREET",
      "street": "Hill Street",
      "from": {
        "px": [
          310,
          1187
        ]
      },
      "to": {
        "px": [
          211,
          1187
        ]
      },
      "basis": "alignment",
      "note": "This southern grid segment continues the HILL STREET corridor lettered on sheet 68.",
      "name": "hill-street-downtown"
    },
    {
      "kind": "state",
      "asWritten": "HILL STREET",
      "street": "Hill Street",
      "from": {
        "px": [
          182,
          1188
        ]
      },
      "to": {
        "px": [
          109,
          1187
        ]
      },
      "basis": "alignment",
      "note": "The detached southern run also stays within the same historic HILL STREET corridor.",
      "name": "hill-street-downtown"
    },
    {
      "kind": "absent",
      "street": "Spring Street",
      "from": "Cesar E Chavez Avenue",
      "to": "1st Street",
      "note": "North of 1st Street, the modern continuation crosses the hill and Plaza rather than a drawn roadway."
    },
    {
      "kind": "state",
      "asWritten": "SPRING STREET",
      "street": "Spring Street",
      "from": "1st Street",
      "to": {
        "px": [
          107,
          1333
        ]
      },
      "basis": "alignment",
      "note": "The aligned modern run stays within the historic roadway lettered SPRING STREET.",
      "name": "spring"
    },
    {
      "kind": "unnamed",
      "street": "Spring Street",
      "from": {
        "px": [
          956,
          1364
        ]
      },
      "to": {
        "px": [
          923,
          1373
        ]
      },
      "note": "This detached modern branch is outside the mapped SPRING STREET grid corridor."
    },
    {
      "kind": "absent",
      "street": "Marketplace",
      "from": null,
      "to": "Broadway",
      "note": "Added in review: the sheet covers this 92 m and draws no street along it."
    },
    {
      "kind": "absent",
      "street": "Community Terrace",
      "from": "Broadway",
      "to": null,
      "note": "Added in review: the sheet covers this 50 m and draws no street along it."
    },
    {
      "kind": "absent",
      "street": "Metro Red/Purple Lines Entrance",
      "from": null,
      "to": "Hill Street",
      "note": "Added in review: the sheet covers this 73 m and draws no street along it."
    },
    {
      "kind": "state",
      "street": "Hill Street",
      "from": {
        "px": [
          186,
          1188
        ]
      },
      "to": null,
      "note": "Added in review: the sheet covers this 47 m and draws no street along it.",
      "basis": "alignment",
      "name": "hill-street-downtown",
      "asWritten": "HILL ST"
    },
    {
      "kind": "state",
      "street": "Hill Street",
      "from": {
        "px": [
          212,
          1186
        ]
      },
      "to": {
        "px": [
          189,
          1184
        ]
      },
      "note": "Added in review: the sheet covers this 39 m and draws no street along it.",
      "basis": "alignment",
      "name": "hill-street-downtown",
      "asWritten": "HILL STREET"
    },
    {
      "kind": "vanished-unnamed",
      "trace": [
        [
          644,
          1403
        ],
        [
          464,
          1330
        ],
        [
          283,
          1260
        ],
        [
          110,
          1171
        ]
      ],
      "basis": "alignment"
    }
  ]
};
