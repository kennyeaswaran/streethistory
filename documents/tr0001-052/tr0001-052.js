module.exports = {
  id: "tr0001-052",
  title: "Allison Barlow's Subdivision of Part of Block 9, Woolen Mill Tract",
  shortTitle: "Allison Barlow's Subdivision",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0001/TR0001-052.pdf",
  scan: "documents/tr0001-052/tr0001-052.pdf",
  transcription: null,

  date: { on: "1901-11" },   
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
    [195, 475], [283, 950], [665, 1452], [1050, 1448],
    [1049, 419]
  ],
  alignment: {
    image: "documents/tr0001-052/tr0001-052-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.06008, -118.256278], note: "map-tool corner (0,0)" },
      { px: [1157, 0], ll: [34.058508, -118.253943], note: "map-tool corner (1157,0)" },
      { px: [0, 1842], ll: [34.056978, -118.259278], note: "map-tool corner (0,1842)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["2nd Street","3rd Street","Beaudry Avenue","Huntley Drive","Miramar Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "2ND ST.",
      "name": "second-street",
      "street": "2nd Street",
      "from": {
        "px": [
          204,
          526
        ]
      },
      "to": {
        "px": [
          1049,
          520
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "absent",
      "street": "3rd Street",
      "from": {
        "px": [
          743,
          1451
        ]
      },
      "to": "Beaudry Avenue",
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "3RD ST.",
      "name": "third-street",
      "street": "3rd Street",
      "from": "Beaudry Avenue",
      "to": {
        "px": [
          1050,
          1363
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "BEAUDRY AVE.",
      "street": "Beaudry Avenue",
      "from": {
        "px": [
          926,
          427
        ]
      },
      "to": {
        "px": [
          915,
          1449
        ]
      },
      "basis": "alignment",
      "name": "beaudry-avenue"
    },
    {
      "kind": "absent",
      "street": "Huntley Drive",
      "from": {
        "px": [
          257,
          811
        ]
      },
      "to": {
        "px": [
          382,
          951
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
          382,
          951
        ]
      },
      "to": {
        "px": [
          418,
          1127
        ]
      },
      "basis": "alignment",
      "name": "boylston"
    },
    {
      "kind": "state",
      "asWritten": "3RD ST.",
      "name": "third-street",
      "street": "Miramar Street",
      "from": {
        "px": [
          597,
          1363
        ]
      },
      "to": {
        "px": [
          915,
          1363
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "vanished",
      "asWritten": "Boylston St",
      "trace": [
        [
          379,
          946
        ],
        [
          308,
          540
        ]
      ],
      "basis": "alignment",
      "name": "boylston"
    }
  ]
};
