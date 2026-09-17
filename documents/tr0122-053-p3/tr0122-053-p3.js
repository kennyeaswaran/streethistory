module.exports = {
  id: "tr0122-053-p3",
  title: "Tract No. 5301, Sheet No. 3",
  shortTitle: "Tract No. 5301",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0122/TR0122-053.pdf",
  scan: "documents/tr0122-053-p3/tr0122-053-p3.pdf",
  transcription: null,

  date: { on: "1926-02-20" },   
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
    [334, 338], [911, 522], [967, 824], [1260, 884],
    [1528, 1262], [1466, 1981], [378, 2112]
  ],
  alignment: {
    image: "documents/tr0122-053-p3/tr0122-053-p3-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.049541, -118.23226], note: "map-tool corner (0,0)" },
      { px: [1746, 0], ll: [34.050903, -118.223455], note: "map-tool corner (1746,0)" },
      { px: [0, 2446], ll: [34.039248, -118.229974], note: "map-tool corner (0,2446)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["1st Street","2nd Street","3rd Street","4th Street","Anderson Street","Artemus Street","Azusa Street","Boyd Street","Mission Road","Myers Street","Utah Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "FIRST STREET",
      "name": "first-street",
      "street": "1st Street",
      "from": {
        "px": [
          337,
          453
        ]
      },
      "to": {
        "px": [
          930,
          626
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "FIRST STREET",
      "name": "first-street",
      "street": "1st Street",
      "from": {
        "px": [
          336,
          418
        ]
      },
      "to": {
        "px": [
          923,
          585
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "absent",
      "street": "2nd Street",
      "from": {
        "px": [
          929,
          831
        ]
      },
      "to": {
        "px": [
          1086,
          872
        ]
      },
      "note": "The short modern segment crosses open railroad/property ground; no street corridor is drawn here."
    },
    {
      "kind": "state",
      "asWritten": "THIRD STREET",
      "name": "third-street",
      "street": "3rd Street",
      "from": {
        "px": [
          662,
          1353
        ]
      },
      "to": {
        "px": [
          1523,
          1315
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "FOURTH STREET",
      "name": "fourth-street",
      "street": "4th Street",
      "from": {
        "px": [
          374,
          1965
        ]
      },
      "to": {
        "px": [
          1351,
          1879
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "FOURTH STREET",
      "name": "fourth-street",
      "street": "4th Street",
      "from": {
        "px": [
          670,
          1952
        ]
      },
      "to": {
        "px": [
          992,
          1896
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "FOURTH STREET",
      "name": "fourth-street",
      "street": "4th Street",
      "from": {
        "px": [
          670,
          2022
        ]
      },
      "to": {
        "px": [
          1004,
          1971
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "ANDERSON STREET",
      "street": "Anderson Street",
      "from": {
        "px": [
          952,
          743
        ]
      },
      "to": {
        "px": [
          1015,
          2035
        ]
      },
      "basis": "alignment",
      "name": "anderson"
    },
    {
      "kind": "state",
      "asWritten": "ARTEMUS STREET",
      "street": "Artemus Street",
      "from": {
        "px": [
          668,
          1751
        ]
      },
      "to": {
        "px": [
          1259,
          1662
        ]
      },
      "basis": "alignment",
      "name": "artemus"
    },
    {
      "kind": "state",
      "asWritten": "AZUSA STREET",
      "street": "Azusa Street",
      "from": {
        "px": [
          660,
          1149
        ]
      },
      "to": {
        "px": [
          865,
          1118
        ]
      },
      "basis": "alignment",
      "name": "azusa"
    },
    {
      "kind": "state",
      "asWritten": "BOYD STREET",
      "street": "Boyd Street",
      "from": {
        "px": [
          666,
          1547
        ]
      },
      "to": {
        "px": [
          1253,
          1463
        ]
      },
      "basis": "alignment",
      "name": "boyd-street"
    },
    {
      "kind": "state",
      "asWritten": "MISSION ROAD",
      "street": "Mission Road",
      "from": {
        "px": [
          810,
          490
        ]
      },
      "to": {
        "px": [
          670,
          2077
        ]
      },
      "basis": "alignment",
      "name": "mission-road"
    },
    {
      "kind": "unnamed",
      "street": "Myers Street",
      "from": {
        "px": [
          610,
          426
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
          666,
          1018
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "unnamed",
      "street": "Myers Street",
      "from": {
        "px": [
          609,
          435
        ]
      },
      "to": {
        "px": [
          584,
          571
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "UTAH STREET",
      "street": "Utah Street",
      "from": {
        "px": [
          1215,
          875
        ]
      },
      "to": {
        "px": [
          1229,
          1286
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
          1384,
          1301
        ],
        [
          1347,
          1982
        ]
      ],
      "basis": "alignment",
      "name": "clarence-st"
    }
  ]
};
