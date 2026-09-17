module.exports = {
  id: "tr0006-150a",
  title: "Map of Allison Barlow Tract",
  shortTitle: "Allison Barlow Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0006/TR0006-150a.pdf",
  scan: "documents/tr0006-150a/tr0006-150a.pdf",
  transcription: null,

  date: { on: "1903-02" },   
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
    [227, 1341], [935, 1490], [1029, 532], [205, 523]
  ],
  alignment: {
    image: "documents/tr0006-150a/tr0006-150a-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.06089, -118.256362], note: "map-tool corner (0,0)" },
      { px: [1172, 0], ll: [34.058994, -118.25329], note: "map-tool corner (1172,0)" },
      { px: [0, 1842], ll: [34.056862, -118.259935], note: "map-tool corner (0,1842)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["2nd Street","3rd Street","Beaudry Avenue","Huntley Drive","Miramar Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "SECOND ST.",
      "name": "second-street",
      "street": "2nd Street",
      "from": {
        "px": [
          207,
          614
        ]
      },
      "to": {
        "px": [
          1015,
          672
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "absent",
      "street": "3rd Street",
      "from": {
        "px": [
          665,
          1433
        ]
      },
      "to": "Beaudry Avenue",
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "THIRD ST.",
      "name": "third-street",
      "street": "3rd Street",
      "from": "Beaudry Avenue",
      "to": {
        "px": [
          950,
          1340
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "BEAUDRY AVE.",
      "name": "beaudry-avenue",
      "street": "Beaudry Avenue",
      "from": {
        "px": [
          924,
          531
        ]
      },
      "to": {
        "px": [
          873,
          1477
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "absent",
      "street": "Huntley Drive",
      "from": {
        "px": [
          288,
          897
        ]
      },
      "to": {
        "px": [
          470,
          992
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "BOYLSTON ST.",
      "street": "Huntley Drive",
      "from": {
        "px": [
          470,
          992
        ]
      },
      "to": {
        "px": [
          523,
          1326
        ]
      },
      "basis": "alignment",
      "name": "boylston"
    },
    {
      "kind": "state",
      "asWritten": "THIRD ST.",
      "name": "third-street",
      "street": "Miramar Street",
      "from": {
        "px": [
          225,
          1281
        ]
      },
      "to": {
        "px": [
          880,
          1337
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "vanished",
      "asWritten": "Boylston St",
      "trace": [
        [
          467,
          988
        ],
        [
          393,
          544
        ]
      ],
      "basis": "alignment",
      "name": "boylston"
    },
    {
      "kind": "vanished",
      "asWritten": "Sapphire St",
      "trace": [
        [
          431,
          796
        ],
        [
          210,
          967
        ]
      ],
      "basis": "alignment",
      "name": "sapphire"
    }
  ]
};
