module.exports = {
  id: "tr0001-057a",
  title: "Map of the Nicklin Tract in the City of Los Angeles, County of Los Angeles, California",
  shortTitle: "Nicklin Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0001/TR0001-057a.pdf",
  scan: "documents/tr0001-057a/tr0001-057a.pdf",
  transcription: null,

  date: { on: "1901-12-13" },   
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
    [1077, 272], [177, 285], [227, 1740], [1022, 1723]
  ],
  alignment: {
    image: "documents/tr0001-057a/tr0001-057a-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.058198, -118.262488], note: "map-tool corner (0,0)" },
      { px: [1151, 0], ll: [34.059613, -118.261586], note: "map-tool corner (1151,0)" },
      { px: [0, 1842], ll: [34.056993, -118.259773], note: "map-tool corner (0,1842)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["3rd Street","Bixel Street","Lucas Avenue"],

  rows: [
    {
      "kind": "state",
      "asWritten": "Arnold Street",
      "street": "3rd Street",
      "from": {
        "px": [
          300,
          283
        ]
      },
      "to": {
        "px": [
          345,
          1737
        ]
      },
      "basis": "alignment",
      "name": "arnold"
    },
    {
      "kind": "state",
      "asWritten": "Bixel Street",
      "name": "bixel",
      "street": "Bixel Street",
      "from": {
        "px": [
          860,
          1647
        ]
      },
      "to": {
        "px": [
          223,
          1633
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "Lucas Avenue",
      "name": "lucas-avenue",
      "street": "Lucas Avenue",
      "from": {
        "px": [
          1071,
          422
        ]
      },
      "to": {
        "px": [
          182,
          423
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "vanished",
      "asWritten": "Third Street",
      "trace": [
        [
          872,
          1639
        ],
        [
          891,
          424
        ]
      ],
      "basis": "alignment",
      "name": "third-street"
    }
  ]
};
