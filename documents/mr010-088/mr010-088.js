module.exports = {
  id: "mr010-088",
  title: "Map of J. W. Ellis' Subdivision of Parts of Lots 2 and 3, Block 38, Hancock's Survey",
  shortTitle: "J. W. Ellis' Subdivision",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR010/MR010-088.pdf",
  scan: "documents/mr010-088/mr010-088.pdf",
  transcription: null,

  date: { on: "1886-09-02" },   
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
    [286, 1294], [661, 1140], [628, 826], [1038, 729],
    [1030, 534], [247, 448], [32, 1022]
  ],
  alignment: {
    image: "documents/mr010-088/mr010-088-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.066688, -118.263958], note: "map-tool corner (0,0)" },
      { px: [1103, 0], ll: [34.064498, -118.258959], note: "map-tool corner (1103,0)" },
      { px: [0, 1667], ll: [34.060385, -118.267924], note: "map-tool corner (0,1667)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["2nd Street","Belmont Avenue","Beverly Boulevard","Crown Hill Avenue","Loma Drive","Union Place"],

  rows: [
    {
      "kind": "unnamed",
      "street": "2nd Street",
      "from": {
        "px": [
          86,
          879
        ]
      },
      "to": {
        "px": [
          231,
          938
        ]
      },
      "note": "The short modern segment crosses undivided ground west of the subdivision street."
    },
    {
      "kind": "unnamed",
      "street": "Belmont Avenue",
      "from": {
        "px": [
          465,
          472
        ]
      },
      "to": {
        "px": [
          508,
          599
        ]
      },
      "note": "The modern line crosses Diamond Street and undivided ground; no north-south corridor is shown."
    },
    {
      "kind": "state",
      "asWritten": "DIAMOND ST",
      "name": "diamond-street",
      "street": "Beverly Boulevard",
      "from": {
        "px": [
          191,
          597
        ]
      },
      "to": {
        "px": [
          1033,
          605
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "Western Ave",
      "street": "Crown Hill Avenue",
      "from": {
        "px": [
          265,
          1127
        ]
      },
      "to": {
        "px": [
          382,
          1255
        ]
      },
      "basis": "alignment",
      "name": "western-ave-colina-park"
    },
    {
      "kind": "state",
      "asWritten": "Belmont Ave",
      "street": "Loma Drive",
      "from": {
        "px": [
          508,
          599
        ]
      },
      "to": {
        "px": [
          501,
          1033
        ]
      },
      "basis": "alignment",
      "name": "belmont-ave"
    },
    {
      "kind": "absent",
      "street": "Loma Drive",
      "from": {
        "px": [
          501,
          1033
        ]
      },
      "to": "2nd Street",
      "basis": "alignment"
    },
    {
      "kind": "unnamed",
      "street": "Loma Drive",
      "from": "2nd Street",
      "to": {
        "px": [
          601,
          1165
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "Western Ave",
      "street": "Union Place",
      "from": {
        "px": [
          349,
          598
        ]
      },
      "to": {
        "px": [
          220,
          1224
        ]
      },
      "basis": "alignment",
      "name": "western-ave-colina-park"
    },
    {
      "kind": "vanished",
      "asWritten": "Silver St",
      "trace": [
        [
          308,
          1190
        ],
        [
          627,
          1098
        ]
      ],
      "basis": "alignment",
      "name": "silver-st"
    }
  ]
};
