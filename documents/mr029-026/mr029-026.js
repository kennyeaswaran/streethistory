module.exports = {
  id: "mr029-026",
  title: "Map of the Resubdivision of the Widow Botiller Tract",
  shortTitle: "Widow Botiller Tract resubdivision",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR029/MR029-026.pdf",
  scan: "documents/mr029-026/mr029-026.pdf",
  transcription: null,

  date: { on: "1888-03-15" },   
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
    [166, 552], [1428, 564], [1417, 897], [132, 863]
  ],
  alignment: {
    image: "documents/mr029-026/mr029-026-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.044854, -118.251627], note: "map-tool corner (0,0)" },
      { px: [1682, 0], ll: [34.040583, -118.247067], note: "map-tool corner (1682,0)" },
      { px: [0, 1096], ll: [34.042374, -118.254962], note: "map-tool corner (0,1096)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["8th Street","Cecelia Street","Los Angeles Street","Main Street","Maple Avenue","Santee Street","Wall Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "8th Street",
      "street": "8th Street",
      "from": {
        "px": [
          150,
          702
        ]
      },
      "to": {
        "px": [
          1423,
          703
        ]
      },
      "basis": "alignment",
      "note": "The modern 8th Street trace follows the complete east-west corridor lettered 8th Street across the resubdivision.",
      "name": "eighth-street"
    },
    {
      "kind": "state",
      "asWritten": "Ida Street",
      "street": "Cecelia Street",
      "from": "8th Street",
      "to": {
        "px": [
          1091,
          888
        ]
      },
      "basis": "alignment",
      "note": "South of 8th Street, the short modern Cecelia Street trace follows the historical corridor lettered Ida Street; the modest offset is within the width and alignment tolerance of the mapped roadway.",
      "name": "ida-street"
    },
    {
      "kind": "state",
      "asWritten": "Los Angeles Street",
      "street": "Los Angeles Street",
      "from": {
        "px": [
          536,
          556
        ]
      },
      "to": {
        "px": [
          524,
          873
        ]
      },
      "basis": "alignment",
      "note": "The modern Los Angeles Street line follows the complete corridor lettered Los Angeles Street within the coverage.",
      "name": "los-angeles-street"
    },
    {
      "kind": "state",
      "asWritten": "Main Street",
      "street": "Main Street",
      "from": {
        "px": [
          217,
          552
        ]
      },
      "to": {
        "px": [
          194,
          865
        ]
      },
      "basis": "alignment",
      "note": "The modern Main Street line follows the complete corridor lettered Main Street within the coverage.",
      "name": "main-street-dtla"
    },
    {
      "kind": "state",
      "asWritten": "Maple Avenue",
      "street": "Maple Avenue",
      "from": {
        "px": [
          942,
          559
        ]
      },
      "to": {
        "px": [
          968,
          885
        ]
      },
      "basis": "alignment",
      "note": "The modern Maple Avenue trace follows the complete corridor lettered Maple Avenue within the coverage.",
      "name": "maple-dtla"
    },
    {
      "kind": "state",
      "asWritten": "Botiller Street",
      "street": "Santee Street",
      "from": {
        "px": [
          763,
          558
        ]
      },
      "to": {
        "px": [
          763,
          880
        ]
      },
      "basis": "alignment",
      "note": "Modern Santee Street follows the north-south corridor lettered Botiller Street on the plat.",
      "name": "botiller-street"
    },
    {
      "kind": "state",
      "asWritten": "Wall Street",
      "street": "Wall Street",
      "from": {
        "px": [
          1215,
          562
        ]
      },
      "to": "8th Street",
      "basis": "alignment",
      "note": "The modern Wall Street trace follows the complete corridor lettered Wall Street within the coverage.",
      "name": "wall-street"
    },
    {
      "kind": "absent",
      "street": "Wall Street",
      "from": "8th Street",
      "to": {
        "px": [
          1254,
          893
        ]
      },
      "basis": "alignment",
      "note": "The modern Wall Street trace follows the complete corridor lettered Wall Street within the coverage."
    }
  ]
};
