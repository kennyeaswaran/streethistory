module.exports = {
  id: "mr053-068",
  title: "Plan de la Ciudad de Los Angeles",
  shortTitle: "Hutton / Ord Survey",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf",
  scan: "documents/mr053-068/mr053-068.pdf",
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
    [221, 811], [249, 1484], [906, 1474], [867, 818]
  ],
  alignment: {
    image: "documents/mr053-068/mr053-068-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.051578, -118.277448], note: "document-tool corner (0,0)" },
      { px: [1113, 0], ll: [34.064826, -118.264865], note: "document-tool corner (1113,0)" },
      { px: [0, 1725], ll: [34.035305, -118.252842], note: "document-tool corner (0,1725)" }
    ]
  },

  // The polygon strays onto these; the document does not inform about them.
  // NOT the same as a absent row, which says the sheet covers the ground and
  // draws nothing there (MODEL-SPEC §4.4, §5.2).
  coverageExcept: [{"street":"8th Place","from":null,"to":null},{"street":"8th Street","from":"Figueroa Street","to":null}],

  sweptFully: false,
  sweptFor: [],

  rows: [
    {
      "kind": "absent",
      "street": "4th Street",
      "from": {
        "px": [
          855,
          844
        ]
      },
      "to": {
        "px": [
          858,
          994
        ]
      },
      "basis": "alignment",
      "note": "The aligned modern run stays within the historic roadway lettered CALLE 4a."
    },
    {
      "kind": "absent",
      "street": "4th Street",
      "from": {
        "px": [
          835,
          818
        ]
      },
      "to": {
        "px": [
          849,
          1053
        ]
      },
      "basis": "alignment",
      "note": "The aligned modern run stays within the historic roadway lettered CALLE 4a."
    },
    {
      "kind": "absent",
      "street": "4th Street",
      "from": {
        "px": [
          845,
          818
        ]
      },
      "to": "Olive Street",
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
      "from": "Olive Street",
      "to": {
        "px": [
          850,
          1475
        ]
      },
      "basis": "alignment",
      "note": "The aligned modern run stays within the historic roadway lettered CALLE 4a.",
      "name": "fourth-street"
    },
    {
      "kind": "absent",
      "street": "5th Street",
      "from": {
        "px": [
          726,
          816
        ]
      },
      "to": "Olive Street",
      "basis": "alignment",
      "note": "The aligned modern run stays within the historic roadway lettered CALLE 5a."
    },
    {
      "kind": "state",
      "asWritten": [
        "CALLE 5a",
        "5TH ST"
      ],
      "street": "5th Street",
      "from": "Olive Street",
      "to": {
        "px": [
          734,
          1477
        ]
      },
      "basis": "alignment",
      "note": "The aligned modern run stays within the historic roadway lettered CALLE 5a.",
      "name": "fifth-street"
    },
    {
      "kind": "absent",
      "street": "6th Street",
      "from": {
        "px": [
          611,
          815
        ]
      },
      "to": "Flower Street",
      "basis": "alignment",
      "note": "The aligned modern run stays within the historic roadway lettered CALLE 6a."
    },
    {
      "kind": "state",
      "asWritten": [
        "CALLE 6a",
        "6TH ST"
      ],
      "street": "6th Street",
      "from": "Flower Street",
      "to": {
        "px": [
          612,
          1478
        ]
      },
      "basis": "alignment",
      "note": "The aligned modern run stays within the historic roadway lettered CALLE 6a.",
      "name": "sixth-street"
    },
    {
      "kind": "absent",
      "street": "7th Street",
      "from": {
        "px": [
          477,
          814
        ]
      },
      "to": {
        "px": [
          487,
          884
        ]
      },
      "basis": "alignment",
      "note": "The aligned modern run stays within the historic roadway lettered CALLE 7a."
    },
    {
      "kind": "state",
      "asWritten": [
        "CALLE 7a",
        "7th ST"
      ],
      "street": "7th Street",
      "from": {
        "px": [
          487,
          884
        ]
      },
      "to": {
        "px": [
          493,
          1480
        ]
      },
      "basis": "alignment",
      "note": "The aligned modern run stays within the historic roadway lettered CALLE 7a.",
      "name": "seventh-street"
    },
    {
      "kind": "state",
      "asWritten": [
        "CALLE 8a",
        "8TH ST"
      ],
      "street": "8th Street",
      "from": "Figueroa Street",
      "to": {
        "px": [
          358,
          1482
        ]
      },
      "basis": "alignment",
      "note": "The aligned modern run stays within the historic roadway lettered CALLE 8a.",
      "name": "eighth-street"
    },
    {
      "kind": "state",
      "asWritten": "CALLE 9a",
      "street": "9th Street",
      "from": {
        "px": [
          223,
          849
        ]
      },
      "to": {
        "px": [
          246,
          1406
        ]
      },
      "basis": "alignment",
      "note": "The aligned modern run stays within the historic roadway lettered CALLE 9a.",
      "name": "ninth-street"
    },
    {
      "kind": "state",
      "asWritten": "CALLE FORTIN",
      "street": "Broadway",
      "from": {
        "px": [
          895,
          1293
        ]
      },
      "to": {
        "px": [
          241,
          1298
        ]
      },
      "basis": "alignment",
      "note": "The aligned modern run stays within the historic roadway lettered CALLE FORTIN.",
      "name": "fort-street"
    },
    {
      "kind": "absent",
      "street": "Figueroa Street",
      "from": {
        "px": [
          869,
          843
        ]
      },
      "to": {
        "px": [
          455,
          845
        ]
      },
      "basis": "alignment",
      "note": "This is the continuation of the corridor lettered CALLE DE LAS CHAPULAS and GRASSHOPPER ST. on sheet 67."
    },
    {
      "kind": "state",
      "asWritten": "CALLE DE LAS CHAPULAS",
      "street": "Figueroa Street",
      "from": {
        "px": [
          455,
          845
        ]
      },
      "to": {
        "px": [
          223,
          849
        ]
      },
      "basis": "alignment",
      "note": "This is the continuation of the corridor lettered CALLE DE LAS CHAPULAS and GRASSHOPPER ST. on sheet 67.",
      "name": "chapules"
    },
    {
      "kind": "absent",
      "street": "Flower Street",
      "from": {
        "px": [
          873,
          918
        ]
      },
      "to": "6th Street",
      "basis": "alignment",
      "note": "The aligned modern run stays within the historic roadway lettered FLOWER."
    },
    {
      "kind": "state",
      "asWritten": "FLOWER",
      "street": "Flower Street",
      "from": "6th Street",
      "to": {
        "px": [
          226,
          924
        ]
      },
      "basis": "alignment",
      "note": "The aligned modern run stays within the historic roadway lettered FLOWER.",
      "name": "flower"
    },
    {
      "kind": "absent",
      "street": "Grand Avenue",
      "from": {
        "px": [
          882,
          1065
        ]
      },
      "to": "6th Street",
      "basis": "alignment",
      "note": "The aligned modern run stays within the historic roadway lettered CHARITY ST.."
    },
    {
      "kind": "state",
      "asWritten": [
        "CHARITY ST.",
        "CALLE DE CARIDAD"
      ],
      "street": "Grand Avenue",
      "from": "6th Street",
      "to": {
        "px": [
          232,
          1074
        ]
      },
      "basis": "alignment",
      "note": "The aligned modern run stays within the historic roadway lettered CHARITY ST..",
      "name": "charity"
    },
    {
      "kind": "absent",
      "street": "Grand Avenue",
      "from": {
        "px": [
          882,
          1073
        ]
      },
      "to": {
        "px": [
          839,
          1069
        ]
      },
      "basis": "alignment",
      "note": "The aligned modern run stays within the historic roadway lettered CHARITY ST.."
    },
    {
      "kind": "absent",
      "street": "Grand Avenue Lower Level",
      "from": {
        "px": [
          882,
          1069
        ]
      },
      "to": {
        "px": [
          849,
          1070
        ]
      },
      "basis": "alignment",
      "note": "The short lower-level branch lies within the same broad historic CHARITY ST. corridor."
    },
    {
      "kind": "state",
      "asWritten": [
        "HILL STREET",
        "CALLE LOMA"
      ],
      "street": "Hill Street",
      "from": {
        "px": [
          891,
          1218
        ]
      },
      "to": {
        "px": [
          238,
          1224
        ]
      },
      "basis": "alignment",
      "note": "The aligned modern run stays within the historic roadway lettered HILL STREET.",
      "name": "hill-street-downtown"
    },
    {
      "kind": "absent",
      "street": "Hope Place",
      "from": {
        "px": [
          790,
          995
        ]
      },
      "to": {
        "px": [
          789,
          1069
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Hope Street",
      "from": {
        "px": [
          663,
          995
        ]
      },
      "to": "6th Street",
      "basis": "alignment",
      "note": "The aligned modern run stays within the historic roadway lettered HOPE ST.."
    },
    {
      "kind": "state",
      "asWritten": [
        "HOPE ST.",
        "CALLE DE LAS ESPERANZAS"
      ],
      "street": "Hope Street",
      "from": "6th Street",
      "to": {
        "px": [
          229,
          1000
        ]
      },
      "basis": "alignment",
      "note": "The aligned modern run stays within the historic roadway lettered HOPE ST..",
      "name": "hope"
    },
    {
      "kind": "absent",
      "street": "Hope Street",
      "from": {
        "px": [
          877,
          995
        ]
      },
      "to": {
        "px": [
          790,
          995
        ]
      },
      "basis": "alignment",
      "note": "The aligned modern run stays within the historic roadway lettered HOPE ST.."
    },
    {
      "kind": "absent",
      "street": "Hope Street",
      "from": {
        "px": [
          839,
          994
        ]
      },
      "to": {
        "px": [
          820,
          994
        ]
      },
      "basis": "alignment",
      "note": "The aligned modern run stays within the historic roadway lettered HOPE ST.."
    },
    {
      "kind": "absent",
      "street": "Los Angeles Street",
      "from": {
        "px": [
          248,
          1451
        ]
      },
      "to": {
        "px": [
          382,
          1482
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "state",
      "street": "Main Street",
      "from": {
        "px": [
          904,
          1443
        ]
      },
      "to": "7th Street",
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment.",
      "basis": "alignment",
      "asWritten": "CALLE PRINCIPAL",
      "name": "main-street-dtla"
    },
    {
      "kind": "absent",
      "street": "Main Street",
      "from": "7th Street",
      "to": {
        "px": [
          244,
          1373
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment.",
      "basis": "alignment"
    },
    {
      "kind": "absent",
      "street": "Olive Street",
      "from": {
        "px": [
          886,
          1144
        ]
      },
      "to": "5th Street",
      "basis": "alignment",
      "note": "The aligned modern run stays within the historic roadway lettered OLIVE ST.."
    },
    {
      "kind": "state",
      "asWritten": [
        "OLIVE ST.",
        "CALLE ACEYTUNA"
      ],
      "street": "Olive Street",
      "from": "5th Street",
      "to": {
        "px": [
          235,
          1149
        ]
      },
      "basis": "alignment",
      "note": "The aligned modern run stays within the historic roadway lettered OLIVE ST..",
      "name": "olive"
    },
    {
      "kind": "state",
      "asWritten": "CALLE PRIMAVERA",
      "street": "Spring Street",
      "from": {
        "px": [
          900,
          1366
        ]
      },
      "to": {
        "px": [
          251,
          1374
        ]
      },
      "basis": "alignment",
      "note": "The aligned modern run stays within the historic roadway lettered CALLE PRIMAVERA.",
      "name": "spring"
    },
    {
      "kind": "absent",
      "street": "Wilshire Boulevard",
      "from": {
        "px": [
          542,
          814
        ]
      },
      "to": {
        "px": [
          546,
          1071
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Winston Street",
      "from": {
        "px": [
          807,
          1444
        ]
      },
      "to": {
        "px": [
          798,
          1476
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "vanished",
      "asWritten": "CALLE PRINCIPAL",
      "trace": [
        [
          493,
          1442
        ],
        [
          255,
          1447
        ]
      ],
      "basis": "alignment",
      "name": "main-street-dtla"
    },
    {
      "kind": "vanished-unnamed",
      "trace": [
        [
          889,
          1247
        ],
        [
          735,
          1142
        ],
        [
          589,
          1069
        ],
        [
          453,
          916
        ],
        [
          389,
          815
        ]
      ],
      "basis": "alignment"
    }
  ]
};
