module.exports = {
  id: "mr024-081",
  title: "Subdivision of the Bigelow Tract Adjoining the California Central Depot Grounds, Los Angeles, California",
  shortTitle: "Bigelow Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR024/MR024-081.pdf",
  scan: "documents/mr024-081/mr024-081.pdf",
  transcription: null,

  date: { on: "1887-10-14" },   
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
    [1553, 353], [755, 434], [410, 483], [130, 981],
    [1502, 965]
  ],
  alignment: {
    image: "documents/mr024-081/mr024-081-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.04236, -118.237249], note: "map-tool corner (0,0)" },
      { px: [1679, 0], ll: [34.049611, -118.237082], note: "map-tool corner (1679,0)" },
      { px: [0, 1137], ll: [34.042265, -118.231364], note: "map-tool corner (0,1137)" }
    ]
  },

  // The polygon strays onto these; the document does not inform about them.
  // NOT the same as a absent row, which says the sheet covers the ground and
  // draws nothing there (MODEL-SPEC §4.4, §5.2).
  coverageExcept: [{"street":"Avery Street","from":null,"to":null}],

  sweptFully: true,
  sweptFor: ["1st Street","2nd Street","3rd Street","Avery Street","Merrick Street","Santa Fe Avenue","Traction Avenue","Vignes Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "FIRST ST.",
      "name": "first-street",
      "street": "1st Street",
      "from": {
        "px": [
          1441,
          364
        ]
      },
      "to": {
        "px": [
          1361,
          967
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "TOPEKA ST.",
      "street": "2nd Street",
      "from": {
        "px": [
          1121,
          397
        ]
      },
      "to": {
        "px": [
          1132,
          863
        ]
      },
      "basis": "alignment",
      "name": "topeka-st"
    },
    {
      "kind": "state",
      "asWritten": "ATCHISON ST.",
      "street": "3rd Street",
      "from": {
        "px": [
          839,
          426
        ]
      },
      "to": {
        "px": [
          859,
          872
        ]
      },
      "basis": "alignment",
      "name": "atchison-st"
    },
    {
      "kind": "unnamed",
      "street": "Merrick Street",
      "from": {
        "px": [
          375,
          668
        ]
      },
      "to": {
        "px": [
          322,
          640
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "SANTA FE ST.",
      "street": "Santa Fe Avenue",
      "from": {
        "px": [
          1509,
          877
        ]
      },
      "to": {
        "px": [
          181,
          890
        ]
      },
      "basis": "alignment",
      "name": "santa-fe-ave"
    },
    {
      "kind": "state",
      "asWritten": "SECOND ST.",
      "name": "second-street",
      "street": "Traction Avenue",
      "from": {
        "px": [
          522,
          467
        ]
      },
      "to": {
        "px": [
          375,
          668
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "unnamed",
      "street": "Vignes Street",
      "from": {
        "px": [
          1530,
          634
        ]
      },
      "to": {
        "px": [
          1127,
          623
        ]
      },
      "basis": "alignment",
      "note": "A roadway between Blocks A and B is drawn but not lettered."
    },
    {
      "kind": "vanished",
      "asWritten": "2nd St",
      "trace": [
        [
          381,
          666
        ],
        [
          245,
          888
        ]
      ],
      "basis": "alignment",
      "name": "second-street"
    },
    {
      "kind": "vanished",
      "asWritten": "Freight St",
      "trace": [
        [
          598,
          876
        ],
        [
          598,
          572
        ]
      ],
      "basis": "alignment",
      "name": "freight-st"
    }
  ]
};
