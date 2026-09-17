module.exports = {
  id: "mr010-077",
  title: "Map of the Harvey Tract, Los Angeles, Cal., the Property of Henry W. O'Melveny",
  shortTitle: "Harvey Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR010/MR010-077.pdf",
  scan: "documents/mr010-077/mr010-077.pdf",
  transcription: null,

  date: { on: "1886-08" },   
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
    [141, 1247], [1008, 1261], [1027, 570], [161, 579]
  ],
  alignment: {
    image: "documents/mr010-077/mr010-077-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.041636, -118.270963], note: "map-tool corner (0,0)" },
      { px: [1125, 0], ll: [34.040052, -118.267581], note: "map-tool corner (1125,0)" },
      { px: [0, 1605], ll: [34.037609, -118.273671], note: "map-tool corner (0,1605)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["15th Drive","Convention Center Drive","Delong Street","Figueroa Street","Georgia Street","Venice Boulevard"],

  rows: [
    {
      "kind": "absent",
      "street": "15th Drive",
      "from": {
        "px": [
          352,
          940
        ]
      },
      "to": {
        "px": [
          925,
          923
        ]
      },
      "note": "The modern road crosses the interior of Block 2."
    },
    {
      "kind": "absent",
      "street": "Convention Center Drive",
      "from": {
        "px": [
          157,
          713
        ]
      },
      "to": {
        "px": [
          352,
          940
        ]
      },
      "note": "The modern diagonal crosses lots and does not follow a mapped roadway."
    },
    {
      "kind": "state",
      "asWritten": "Virginia St",
      "street": "Delong Street",
      "from": {
        "px": [
          245,
          884
        ]
      },
      "to": {
        "px": [
          245,
          1164
        ]
      },
      "basis": "alignment",
      "name": "virginia-conv-center"
    },
    {
      "kind": "state",
      "asWritten": "Figueroa St",
      "name": "figueroa-gov",
      "street": "Figueroa Street",
      "from": {
        "px": [
          917,
          571
        ]
      },
      "to": {
        "px": [
          931,
          1260
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "street": "Georgia Street",
      "from": {
        "px": [
          352,
          940
        ]
      },
      "to": {
        "px": [
          379,
          1162
        ]
      },
      "basis": "alignment",
      "note": "A north-south roadway is drawn, but it is not lettered on the sheet.",
      "asWritten": "Nevado St",
      "name": "nevada-1886"
    },
    {
      "kind": "state",
      "asWritten": "Rowland St",
      "street": "Venice Boulevard",
      "from": {
        "px": [
          189,
          1165
        ]
      },
      "to": {
        "px": [
          1012,
          1116
        ]
      },
      "basis": "alignment",
      "name": "rouland-street"
    },
    {
      "kind": "vanished",
      "asWritten": "Adele St",
      "trace": [
        [
          393,
          797
        ],
        [
          876,
          797
        ]
      ],
      "basis": "alignment",
      "name": "adele-st"
    },
    {
      "kind": "vanished",
      "asWritten": "Nevado St",
      "trace": [
        [
          353,
          939
        ],
        [
          363,
          579
        ]
      ],
      "basis": "alignment",
      "name": "nevada-1886"
    }
  ]
};
