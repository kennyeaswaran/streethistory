module.exports = {
  id: "tr0035-092",
  title: "Tract No. 3085",
  shortTitle: "Tract No. 3085",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0035/TR0035-092.pdf",
  scan: "documents/tr0035-092/tr0035-092.pdf",
  transcription: null,

  date: { on: "1917-10" },   
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
    [600, 1238], [750, 2170], [1678, 2124], [1659, 1188]
  ],
  alignment: {
    image: "documents/tr0035-092/tr0035-092-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.059168, -118.257132], note: "map-tool corner (0,0)" },
      { px: [1746, 0], ll: [34.057664, -118.255013], note: "map-tool corner (1746,0)" },
      { px: [0, 2440], ll: [34.056699, -118.259651], note: "map-tool corner (0,2440)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["3rd Street","4th Street","Beaudry Avenue","Boylston Street","Miramar Street"],

  rows: [
    {
      "kind": "absent",
      "street": "3rd Street",
      "from": {
        "px": [
          674,
          1701
        ]
      },
      "to": {
        "px": [
          1661,
          1305
        ]
      },
      "note": "The modern diagonal crosses the tract interior."
    },
    {
      "kind": "absent",
      "street": "4th Street",
      "from": {
        "px": [
          694,
          1821
        ]
      },
      "to": {
        "px": [
          1371,
          2139
        ]
      },
      "note": "The modern diagonal crosses lots rather than following Fourth Street."
    },
    {
      "kind": "state",
      "asWritten": "BEAUDRY AVE.",
      "name": "beaudry-avenue",
      "street": "Beaudry Avenue",
      "from": {
        "px": [
          1513,
          1195
        ]
      },
      "to": {
        "px": [
          1525,
          2132
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "BOYLSTON ST.",
      "name": "boylston",
      "street": "Boylston Street",
      "from": {
        "px": [
          781,
          1336
        ]
      },
      "to": {
        "px": [
          962,
          2159
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "THIRD ST.",
      "name": "third-street",
      "street": "Miramar Street",
      "from": {
        "px": [
          612,
          1315
        ]
      },
      "to": {
        "px": [
          1511,
          1309
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "vanished",
      "asWritten": "Fourth St",
      "trace": [
        [
          931,
          2029
        ],
        [
          1525,
          2004
        ]
      ],
      "basis": "alignment",
      "name": "fourth-street"
    }
  ]
};
