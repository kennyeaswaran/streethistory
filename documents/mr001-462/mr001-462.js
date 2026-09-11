module.exports = {
  id: "mr001-462",
  title: "Plan of Lots and Fractional Lots of the 39 Acre Tract Known as The Beaudry Tract",
  shortTitle: "Beaudry Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-462.pdf",
  scan: "documents/mr001-462/mr001-462.pdf",
  transcription: null,

  date: { on: "1868-12-28" },   
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
    [416, 186], [114, 186], [154, 1468], [790, 1455],
    [684, 1207]
  ],
  alignment: {
    image: "documents/mr001-462/mr001-462-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.052054, -118.261852], note: "map-tool corner (0,0)" },
      { px: [1098, 0], ll: [34.056435, -118.257509], note: "map-tool corner (1098,0)" },
      { px: [0, 1657], ll: [34.046586, -118.253929], note: "map-tool corner (0,1657)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["5th Street","6th Street","Figueroa Street","Flower Street","Fremont Avenue","Grand Avenue","Harbor Freeway","Hope Street","Olive Street"],

  rows: [
    {
      "kind": "absent",
      "street": "5th Street",
      "from": {
        "px": [
          373,
          186
        ]
      },
      "to": {
        "px": [
          454,
          331
        ]
      },
      "note": "The northwestern modern 5th Street segment crosses Block 106 and the tract boundary rather than following a drawn roadway."
    },
    {
      "kind": "state",
      "asWritten": "Fifth St.",
      "street": "5th Street",
      "from": {
        "px": [
          514,
          560
        ]
      },
      "to": {
        "px": [
          538,
          1460
        ]
      },
      "basis": "alignment",
      "note": "From the Figueroa edge southward, the modern 5th Street trace follows the roadway lettered Fifth St.",
      "name": "fifth-street"
    },
    {
      "kind": "absent",
      "street": "6th Street",
      "from": {
        "px": [
          342,
          186
        ]
      },
      "to": "Fremont Avenue",
      "note": "West of Fremont, modern 6th Street passes through the interior of Block 106; no street corridor is drawn there."
    },
    {
      "kind": "absent",
      "street": "6th Street",
      "from": "Fremont Avenue",
      "to": "Figueroa Street",
      "basis": "alignment",
      "note": "East of Fremont, the modern 6th Street trace follows the long roadway lettered Sixth St."
    },
    {
      "kind": "state",
      "asWritten": "Sixth St.",
      "street": "6th Street",
      "from": "Figueroa Street",
      "to": {
        "px": [
          192,
          1467
        ]
      },
      "basis": "alignment",
      "note": "East of Fremont, the modern 6th Street trace follows the long roadway lettered Sixth St.",
      "name": "sixth-street"
    },
    {
      "kind": "state",
      "asWritten": "Grasshopper St.",
      "street": "Figueroa Street",
      "from": {
        "px": [
          498,
          560
        ]
      },
      "to": {
        "px": [
          126,
          564
        ]
      },
      "basis": "alignment",
      "note": "The modern Figueroa centerline follows the roadway lettered Grasshopper St. across the tract.",
      "name": "chapules"
    },
    {
      "kind": "state",
      "asWritten": "Flower St.",
      "street": "Flower Street",
      "from": {
        "px": [
          570,
          774
        ]
      },
      "to": {
        "px": [
          133,
          786
        ]
      },
      "basis": "alignment",
      "note": "The modern Flower Street trace follows the roadway lettered Flower St.",
      "name": "flower"
    },
    {
      "kind": "absent",
      "street": "Fremont Avenue",
      "from": "6th Street",
      "to": {
        "px": [
          468,
          385
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "absent",
      "street": "Fremont Avenue",
      "from": {
        "px": [
          236,
          395
        ]
      },
      "to": {
        "px": [
          175,
          437
        ]
      },
      "note": "The short southwestern Fremont branch crosses the interior of Block 105 and does not follow the nearby Beaudry St. corridor."
    },
    {
      "kind": "state",
      "asWritten": "Charity St.",
      "street": "Grand Avenue",
      "from": {
        "px": [
          685,
          1210
        ]
      },
      "to": {
        "px": [
          146,
          1225
        ]
      },
      "basis": "alignment",
      "note": "The modern Grand Avenue trace follows the roadway lettered Charity St.",
      "name": "charity"
    },
    {
      "kind": "absent",
      "street": "Harbor Freeway",
      "from": {
        "px": [
          441,
          280
        ]
      },
      "to": {
        "px": [
          116,
          243
        ]
      },
      "note": "Both modern freeway traces cut diagonally through Block 106 and the western tract edge; the plat draws no roadway along them."
    },
    {
      "kind": "state",
      "asWritten": "Hope St.",
      "street": "Hope Street",
      "from": {
        "px": [
          333,
          998
        ]
      },
      "to": {
        "px": [
          140,
          1005
        ]
      },
      "basis": "alignment",
      "note": "The modern Hope Street trace follows the roadway lettered Hope St.",
      "name": "hope"
    },
    {
      "kind": "state",
      "asWritten": "Olive St.",
      "street": "Olive Street",
      "from": {
        "px": [
          778,
          1426
        ]
      },
      "to": {
        "px": [
          153,
          1446
        ]
      },
      "basis": "alignment",
      "note": "The modern Olive Street trace follows the roadway lettered Olive St.",
      "name": "olive"
    },
    {
      "kind": "vanished",
      "asWritten": "Sixth St",
      "trace": [
        [
          160,
          559
        ],
        [
          158,
          176
        ]
      ],
      "basis": "alignment",
      "name": "sixth-street"
    },
    {
      "kind": "vanished",
      "asWritten": "Hope St",
      "trace": [
        [
          335,
          998
        ],
        [
          672,
          993
        ]
      ],
      "basis": "alignment",
      "name": "hope"
    },
    {
      "kind": "vanished",
      "asWritten": "Beaudry St",
      "trace": [
        [
          157,
          337
        ],
        [
          482,
          338
        ]
      ],
      "basis": "alignment",
      "name": "beaudry-st"
    }
  ]
};
