module.exports = {
  id: "mr007-021",
  title: "Map of the Cameron Tract, Los Angeles, Los Angeles Co., Cal.",
  shortTitle: "Cameron Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR007/MR007-021.pdf",
  scan: "documents/mr007-021/mr007-021.pdf",
  transcription: null,

  date: { on: "1885-10" },   
  form: "drawn",
  type: "tract-map",
  attests: "planned-by",
  completeness: "incidental",
  readBy: "human",

  // Coverage is the ground this document informs about — the tract boundary,
  // not the sheet edge (MODEL-SPEC §4.4). SCAN PIXELS against alignment.image,
  // so a better alignment carries it along (§4.6).
  coverage: [
    [218, 376], [192, 852], [1193, 835], [1200, 369]
  ],
  alignment: {
    image: "documents/mr007-021/mr007-021-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.043097, -118.268243], note: "document-tool corner (0,0)" },
      { px: [1622, 0], ll: [34.039748, -118.260943], note: "document-tool corner (1622,0)" },
      { px: [0, 1136], ll: [34.038831, -118.271053], note: "document-tool corner (0,1136)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["Figueroa Street","Flower Street","Grand Avenue","Hope Street","Pico Boulevard"],

  rows: [
    {
      "kind": "unnamed",
      "street": "Figueroa Street",
      "from": {
        "px": [
          325,
          375
        ]
      },
      "to": "Pico Boulevard",
      "basis": "alignment",
      "note": "North of Pico, the modern Figueroa trace follows the bending roadway shown on the plat, but that stretch carries no name."
    },
    {
      "kind": "state",
      "asWritten": "Figueroa St",
      "street": "Figueroa Street",
      "from": "Pico Boulevard",
      "to": {
        "px": [
          311,
          850
        ]
      },
      "basis": "alignment",
      "note": "South of Pico, the modern centerline follows the straight roadway explicitly lettered Figueroa St.",
      "name": "figueroa-gov"
    },
    {
      "kind": "state",
      "asWritten": "Flower St",
      "street": "Flower Street",
      "from": {
        "px": [
          591,
          373
        ]
      },
      "to": {
        "px": [
          576,
          845
        ]
      },
      "basis": "alignment",
      "note": "The modern Flower Street line remains within the full roadway lettered Flower St.",
      "name": "flower"
    },
    {
      "kind": "state",
      "asWritten": "Charity St",
      "street": "Grand Avenue",
      "from": {
        "px": [
          1141,
          369
        ]
      },
      "to": {
        "px": [
          1150,
          836
        ]
      },
      "basis": "alignment",
      "note": "The modern Grand Avenue centerline follows the complete north-south roadway lettered Charity St.",
      "name": "charity"
    },
    {
      "kind": "state",
      "asWritten": "Hope St",
      "street": "Hope Street",
      "from": {
        "px": [
          872,
          371
        ]
      },
      "to": {
        "px": [
          848,
          841
        ]
      },
      "basis": "alignment",
      "note": "The modern Hope Street line remains within the full roadway lettered Hope St.",
      "name": "hope"
    },
    {
      "kind": "state",
      "asWritten": "Pico Street",
      "street": "Pico Boulevard",
      "from": {
        "px": [
          211,
          498
        ]
      },
      "to": "Figueroa Street",
      "basis": "alignment",
      "note": "The southern modern branch west of Figueroa lies inside the broad roadway lettered Pico Street.",
      "name": "pico"
    },
    {
      "kind": "state",
      "asWritten": "Pico Street",
      "street": "Pico Boulevard",
      "from": {
        "px": [
          213,
          468
        ]
      },
      "to": "Figueroa Street",
      "basis": "alignment",
      "note": "The northern modern branch west of Figueroa also lies inside the broad roadway lettered Pico Street.",
      "name": "pico"
    },
    {
      "kind": "state",
      "asWritten": "Pico Street",
      "street": "Pico Boulevard",
      "from": "Figueroa Street",
      "to": {
        "px": [
          1198,
          497
        ]
      },
      "basis": "alignment",
      "note": "East of Figueroa, the modern Pico Boulevard trace follows the roadway lettered Pico Street across the tract.",
      "name": "pico"
    },
    {
      "kind": "vanished",
      "asWritten": "CAMERON LANE",
      "trace": [
        [
          312,
          615
        ],
        [
          1145,
          615
        ]
      ],
      "basis": "alignment",
      "note": "The plat draws this east-west lane through Blocks A, B, and C, but none of the supplied modern street traces follows it.",
      "name": "cameron-lane"
    },
    {
      "kind": "vanished",
      "asWritten": "ALEXANDER LANE",
      "trace": [
        [
          442,
          615
        ],
        [
          442,
          846
        ]
      ],
      "basis": "alignment",
      "note": "This named north-south lane is drawn through Block A with no supplied modern counterpart.",
      "name": "alexander-lane"
    },
    {
      "kind": "vanished",
      "asWritten": "CENTERBROOK LANE",
      "trace": [
        [
          710,
          615
        ],
        [
          710,
          846
        ]
      ],
      "basis": "alignment",
      "note": "This named north-south lane is drawn through Block B with no supplied modern counterpart.",
      "name": "centerbrook-lane"
    },
    {
      "kind": "vanished",
      "asWritten": "CATSBY LANE",
      "trace": [
        [
          997,
          615
        ],
        [
          997,
          844
        ]
      ],
      "basis": "alignment",
      "note": "This named north-south lane is drawn through Block C with no supplied modern counterpart.",
      "name": "catesby-lane"
    }
  ]
};
