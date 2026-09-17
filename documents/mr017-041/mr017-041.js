module.exports = {
  id: "mr017-041",
  title: "Map of the Clement Tract, Situated on First Street in the City and County of Los Angeles, California",
  shortTitle: "Clement Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR017/MR017-041.pdf",
  scan: "documents/mr017-041/mr017-041.pdf",
  transcription: null,

  date: { on: "1887-05-23" },   
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
    [121, 1531], [912, 1543], [768, 493], [223, 451]
  ],
  alignment: {
    image: "documents/mr017-041/mr017-041-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.051681, -118.230163], note: "map-tool corner (0,0)" },
      { px: [1155, 0], ll: [34.051808, -118.224719], note: "map-tool corner (1155,0)" },
      { px: [0, 1663], ll: [34.045141, -118.229944], note: "map-tool corner (0,1663)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["1st Street","2nd Street","Anderson Street","Kearney Street","Mission Road","Myers Street","Plaza Del Sol"],

  rows: [
    {
      "kind": "state",
      "asWritten": "First Street",
      "name": "first-street",
      "street": "1st Street",
      "from": {
        "px": [
          172,
          993
        ]
      },
      "to": {
        "px": [
          847,
          1070
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "Clementina Street",
      "street": "2nd Street",
      "from": {
        "px": [
          679,
          1268
        ]
      },
      "to": {
        "px": [
          854,
          1285
        ]
      },
      "basis": "alignment",
      "name": "clementina-street"
    },
    {
      "kind": "state",
      "asWritten": "Rio Avenue",
      "street": "Anderson Street",
      "from": {
        "px": [
          704,
          1013
        ]
      },
      "to": {
        "px": [
          651,
          1539
        ]
      },
      "basis": "alignment",
      "name": "rio-avenue"
    },
    {
      "kind": "state",
      "asWritten": "Shenandoah Avenue",
      "street": "Kearney Street",
      "from": {
        "px": [
          308,
          488
        ]
      },
      "to": {
        "px": [
          544,
          513
        ]
      },
      "basis": "alignment",
      "name": "shenandoah-avenue"
    },
    {
      "kind": "state",
      "asWritten": "Anderson Street",
      "street": "Mission Road",
      "from": {
        "px": [
          554,
          477
        ]
      },
      "to": {
        "px": [
          486,
          1016
        ]
      },
      "basis": "alignment",
      "name": "anderson"
    },
    {
      "kind": "state",
      "asWritten": "Anderson Street",
      "street": "Mission Road",
      "from": {
        "px": [
          486,
          1016
        ]
      },
      "to": {
        "px": [
          429,
          1536
        ]
      },
      "basis": "alignment",
      "name": "anderson"
    },
    {
      "kind": "state",
      "asWritten": "Myers Street",
      "street": "Myers Street",
      "from": {
        "px": [
          317,
          458
        ]
      },
      "to": {
        "px": [
          268,
          897
        ]
      },
      "basis": "alignment",
      "name": "myers"
    },
    {
      "kind": "state",
      "asWritten": "Myers St",
      "street": "Myers Street",
      "from": {
        "px": [
          268,
          897
        ]
      },
      "to": {
        "px": [
          240,
          1469
        ]
      },
      "basis": "alignment",
      "name": "myers"
    },
    {
      "kind": "absent",
      "street": "Plaza Del Sol",
      "from": {
        "px": [
          516,
          728
        ]
      },
      "to": {
        "px": [
          804,
          759
        ]
      },
      "note": "The modern plaza crosses the interior lots of Block B."
    },
    {
      "kind": "vanished",
      "asWritten": "Rio Avenue",
      "trace": [
        [
          700,
          1005
        ],
        [
          745,
          557
        ]
      ],
      "basis": "alignment",
      "name": "rio-avenue"
    },
    {
      "kind": "vanished",
      "asWritten": "Shenandoah Avenue",
      "trace": [
        [
          543,
          509
        ],
        [
          746,
          529
        ]
      ],
      "basis": "alignment",
      "name": "shenandoah-avenue"
    },
    {
      "kind": "vanished",
      "asWritten": "Grace Street",
      "trace": [
        [
          657,
          1466
        ],
        [
          887,
          1461
        ]
      ],
      "basis": "alignment",
      "name": "grace"
    },
    {
      "kind": "absent",
      "street": "Myers Street",
      "from": {
        "px": [
          240,
          1469
        ]
      },
      "to": null,
      "note": "Added in review: the sheet covers this 89 m and draws no street along it."
    }
  ]
};
