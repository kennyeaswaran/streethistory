module.exports = {
  id: "tr0030-069",
  title: "Tract No. 2905",
  shortTitle: "Tract No. 2905",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0030/TR0030-069.pdf",
  scan: "documents/tr0030-069/tr0030-069.pdf",
  transcription: null,

  date: { on: "1915-10-04" },   
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
    [516, 1271], [2067, 1319], [2060, 302], [629, 389]
  ],
  alignment: {
    image: "documents/tr0030-069/tr0030-069-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.054252, -118.26788], note: "map-tool corner (0,0)" },
      { px: [2392, 0], ll: [34.052642, -118.264265], note: "map-tool corner (2392,0)" },
      { px: [0, 1746], ll: [34.052051, -118.269289], note: "map-tool corner (0,1746)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["7th Street","Garland Avenue","Ingraham Street","Lucas Avenue","Witmer Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "SEVENTH STREET",
      "name": "seventh-street",
      "street": "7th Street",
      "from": {
        "px": [
          533,
          1139
        ]
      },
      "to": {
        "px": [
          2066,
          1134
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "GARLAND AVENUE",
      "street": "Garland Avenue",
      "from": {
        "px": [
          1642,
          1142
        ]
      },
      "to": {
        "px": [
          1641,
          1306
        ]
      },
      "basis": "alignment",
      "name": "garland"
    },
    {
      "kind": "state",
      "asWritten": "INGRAHAM STREET",
      "name": "ingraham",
      "street": "Ingraham Street",
      "from": {
        "px": [
          610,
          539
        ]
      },
      "to": {
        "px": [
          1964,
          543
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "LUCAS AVENUE",
      "name": "lucas-avenue",
      "street": "Lucas Avenue",
      "from": {
        "px": [
          1968,
          308
        ]
      },
      "to": {
        "px": [
          1963,
          1139
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "WITMER STREET",
      "street": "Witmer Street",
      "from": {
        "px": [
          768,
          381
        ]
      },
      "to": "7th Street",
      "basis": "alignment",
      "name": "witmer-street"
    },
    {
      "kind": "absent",
      "street": "Witmer Street",
      "from": "7th Street",
      "to": {
        "px": [
          675,
          1276
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "vanished",
      "asWritten": "Hartford Ave",
      "trace": [
        [
          990,
          1141
        ],
        [
          980,
          1316
        ]
      ],
      "basis": "alignment",
      "name": "hartford-ave"
    }
  ]
};
