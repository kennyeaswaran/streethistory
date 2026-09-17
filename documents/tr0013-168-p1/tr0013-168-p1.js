module.exports = {
  id: "tr0013-168-p1",
  title: "Tract No. 207",
  shortTitle: "Tract No. 207",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0013/TR0013-168.pdf",
  scan: "documents/tr0013-168-p1/tr0013-168-p1.pdf",
  transcription: null,

  date: { on: "1908-03-02" },   
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
    [283, 1522], [287, 1680], [975, 1624], [1025, 1016],
    [792, 755], [536, 728], [576, 415], [17, 260],
    [-7, 379], [398, 532], [323, 842], [767, 930],
    [810, 1129], [771, 1456]
  ],
  alignment: {
    image: "documents/tr0013-168-p1/tr0013-168-p1-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.049831, -118.231503], note: "map-tool corner (0,0)" },
      { px: [1164, 0], ll: [34.05101, -118.223956], note: "map-tool corner (1164,0)" },
      { px: [0, 1842], ll: [34.039865, -118.229268], note: "map-tool corner (0,1842)" }
    ]
  },

  // The polygon strays onto these; the document does not inform about them.
  // NOT the same as a absent row, which says the sheet covers the ground and
  // draws nothing there (MODEL-SPEC §4.4, §5.2).
  coverageExcept: [{"street":"Anderson Street","from":null,"to":null},{"street":"Myers Street","from":null,"to":null},{"street":"Artemus Street","from":null,"to":null},{"street":"Boyd Street","from":null,"to":null}],

  sweptFully: true,
  sweptFor: ["1st Street","3rd Street","4th Street","Anderson Street","Artemus Street","Boyd Street","Mission Road","Myers Street","Utah Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "FIRST STREET",
      "name": "first-street",
      "street": "1st Street",
      "from": {
        "px": [
          2,
          335
        ]
      },
      "to": {
        "px": [
          564,
          508
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "THIRD ST.",
      "name": "third-street",
      "street": "3rd Street",
      "from": {
        "px": [
          788,
          1028
        ]
      },
      "to": {
        "px": [
          1022,
          1051
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "FOURTH ST.",
      "name": "fourth-street",
      "street": "4th Street",
      "from": {
        "px": [
          284,
          1578
        ]
      },
      "to": {
        "px": [
          925,
          1494
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "FOURTH ST.",
      "name": "fourth-street",
      "street": "4th Street",
      "from": {
        "px": [
          395,
          1549
        ]
      },
      "to": {
        "px": [
          646,
          1506
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "FOURTH ST.",
      "name": "fourth-street",
      "street": "4th Street",
      "from": {
        "px": [
          396,
          1603
        ]
      },
      "to": {
        "px": [
          656,
          1564
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "street": "Anderson Street",
      "from": {
        "px": [
          584,
          733
        ]
      },
      "to": {
        "px": [
          549,
          887
        ]
      },
      "note": "No north-south roadway is drawn on this short modern alignment.",
      "basis": "alignment",
      "asWritten": "Rio St",
      "name": "rio-st"
    },
    {
      "kind": "absent",
      "street": "Mission Road",
      "from": {
        "px": [
          395,
          1507
        ]
      },
      "to": {
        "px": [
          396,
          1671
        ]
      },
      "note": "The modern road crosses Fourth Street and undivided ground; no separate north-south corridor is shown."
    },
    {
      "kind": "state",
      "asWritten": "ANDERSON ST.",
      "street": "Mission Road",
      "from": {
        "px": [
          511,
          397
        ]
      },
      "to": {
        "px": [
          392,
          856
        ]
      },
      "basis": "alignment",
      "name": "anderson"
    },
    {
      "kind": "unnamed",
      "street": "Myers Street",
      "from": {
        "px": [
          352,
          353
        ]
      },
      "to": "1st Street",
      "basis": "alignment"
    },
    {
      "kind": "absent",
      "street": "Myers Street",
      "from": "1st Street",
      "to": {
        "px": [
          334,
          508
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "unnamed",
      "street": "Myers Street",
      "from": {
        "px": [
          351,
          370
        ]
      },
      "to": {
        "px": [
          331,
          476
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "UTAH ST.",
      "street": "Utah Street",
      "from": {
        "px": [
          806,
          771
        ]
      },
      "to": {
        "px": [
          831,
          1032
        ]
      },
      "basis": "alignment",
      "name": "utah-st"
    },
    {
      "kind": "vanished",
      "asWritten": "Clarence St",
      "trace": [
        [
          947,
          1043
        ],
        [
          905,
          1605
        ]
      ],
      "basis": "alignment",
      "name": "clarence-st"
    }
  ]
};
