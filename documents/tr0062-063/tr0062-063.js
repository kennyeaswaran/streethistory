module.exports = {
  id: "tr0062-063",
  title: "Tract No. 5941",
  shortTitle: "Tract No. 5941",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0062/TR0062-063.pdf",
  scan: "documents/tr0062-063/tr0062-063.pdf",
  transcription: null,

  date: { on: "1923-01-22" },   
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
    [259, 1357], [1655, 1385], [1681, -27], [425, 264]
  ],
  alignment: {
    image: "documents/tr0062-063/tr0062-063-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.061924, -118.263098], note: "map-tool corner (0,0)" },
      { px: [1746, 0], ll: [34.060987, -118.261029], note: "map-tool corner (1746,0)" },
      { px: [0, 2424], ll: [34.059528, -118.264657], note: "map-tool corner (0,2424)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["2nd Street","Columbia Avenue","Miramar Street","Witmer Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "SECOND STREET",
      "name": "second-street",
      "street": "2nd Street",
      "from": {
        "px": [
          388,
          510
        ]
      },
      "to": {
        "px": [
          1677,
          195
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "COLUMBIA AVENUE",
      "street": "Columbia Avenue",
      "from": {
        "px": [
          478,
          475
        ]
      },
      "to": {
        "px": [
          409,
          1360
        ]
      },
      "basis": "alignment",
      "name": "columbia-avenue"
    },
    {
      "kind": "state",
      "asWritten": "THIRD STREET",
      "street": "Miramar Street",
      "from": {
        "px": [
          422,
          1257
        ]
      },
      "to": {
        "px": [
          1657,
          1258
        ]
      },
      "basis": "alignment",
      "name": "third-street"
    },
    {
      "kind": "state",
      "asWritten": "WITMER STREET",
      "name": "witmer-street",
      "street": "Witmer Street",
      "from": {
        "px": [
          1441,
          29
        ]
      },
      "to": {
        "px": [
          1432,
          1258
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "vanished-unnamed",
      "trace": [
        [
          945,
          1269
        ],
        [
          939,
          1445
        ]
      ],
      "basis": "alignment"
    }
  ]
};
