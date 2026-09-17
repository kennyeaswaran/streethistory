module.exports = {
  id: "tr0771-036-p2",
  title: "Tract No. 26170",
  shortTitle: "Tract No. 26170",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0771/TR0771-036-p2.pdf",
  scan: "documents/tr0771-036-p2/tr0771-036-p2.pdf",
  transcription: null,

  date: { on: "1968-02-20" },   
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
    [242, 840], [1021, 2333], [1621, 2233], [1674, 446],
    [668, 468]
  ],
  alignment: {
    image: "documents/tr0771-036-p2/tr0771-036-p2-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.064849, -118.242677], note: "map-tool corner (0,0)" },
      { px: [1734, 0], ll: [34.06389, -118.240034], note: "map-tool corner (1734,0)" },
      { px: [0, 2448], ll: [34.061736, -118.244299], note: "map-tool corner (0,2448)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["Alpine Street","Cleveland Street","Hill Place","Ord Street","Yale Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "ALPINE STREET",
      "name": "alpine",
      "street": "Alpine Street",
      "from": {
        "px": [
          292,
          936
        ]
      },
      "to": {
        "px": [
          1668,
          646
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "CLEVELAND STREET",
      "street": "Cleveland Street",
      "from": {
        "px": [
          984,
          461
        ]
      },
      "to": {
        "px": [
          981,
          1125
        ]
      },
      "basis": "alignment",
      "name": "cleveland-st"
    },
    {
      "kind": "state",
      "asWritten": "HILL PLACE",
      "street": "Hill Place",
      "from": {
        "px": [
          407,
          854
        ]
      },
      "to": {
        "px": [
          1163,
          2309
        ]
      },
      "basis": "alignment",
      "name": "hill-place"
    },
    {
      "kind": "state",
      "asWritten": "ORD STREET",
      "street": "Ord Street",
      "from": {
        "px": [
          1140,
          2220
        ]
      },
      "to": {
        "px": [
          1327,
          2155
        ]
      },
      "basis": "alignment",
      "name": "ord-street"
    },
    {
      "kind": "state",
      "asWritten": "YALE STREET",
      "name": "yale",
      "street": "Yale Street",
      "from": {
        "px": [
          1491,
          450
        ]
      },
      "to": {
        "px": [
          1553,
          2128
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "vanished",
      "asWritten": "Ord Street",
      "trace": [
        [
          1322,
          2197
        ],
        [
          1568,
          2154
        ]
      ],
      "basis": "alignment",
      "name": "ord-street"
    }
  ]
};
