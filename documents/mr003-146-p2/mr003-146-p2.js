module.exports = {
  id: "mr003-146-p2",
  title: "Subdivision of Property of Don Manuel Requena, Surveyed by Moore and Kelleher",
  shortTitle: "Requena Subdivision",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-146.pdf",
  scan: "documents/mr003-146-p2/mr003-146-p2.pdf",
  transcription: null,

  date: { on: "1876-02-11" },   
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
    [184, 1364], [958, 1310], [1098, 673], [558, 483],
    [179, 623]
  ],
  alignment: {
    image: "documents/mr003-146-p2/mr003-146-p2-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.052542, -118.243029], note: "map-tool corner (0,0)" },
      { px: [1115, 0], ll: [34.055071, -118.241973], note: "map-tool corner (1115,0)" },
      { px: [0, 1771], ll: [34.051142, -118.238213], note: "map-tool corner (0,1771)" }
    ]
  },

  sweptFully: false,
  sweptFor: [],

  rows: [
    {
      "kind": "state",
      "asWritten": "WILMINGTON",
      "street": "Judge John Aiso Street",
      "from": "Temple Street",
      "to": {
        "px": [
          182,
          1104
        ]
      },
      "basis": "alignment",
      "note": "This short continuation is unlabeled on page 2, but it joins the same roadway lettered WILMINGTON on page 1.",
      "name": "wilmington-street"
    },
    {
      "kind": "state",
      "asWritten": "LOS ANGELES STREET",
      "street": "Los Angeles Street",
      "from": {
        "px": [
          1085,
          731
        ]
      },
      "to": {
        "px": [
          428,
          531
        ]
      },
      "basis": "alignment",
      "note": "The modern Los Angeles Street centerline follows the broad roadway lettered LOS ANGELES STREET.",
      "name": "los-angeles-street"
    },
    {
      "kind": "state",
      "asWritten": "REQUENA STREET",
      "street": "Temple Street",
      "from": "Los Angeles Street",
      "to": {
        "px": [
          221,
          1361
        ]
      },
      "basis": "alignment",
      "note": "Modern Temple Street follows the diagonal roadway lettered REQUENA STREET across the mapped tract.",
      "name": "requena-street"
    },
    {
      "kind": "vanished",
      "asWritten": "Commercial Street",
      "trace": [
        [
          1033,
          735
        ],
        [
          890,
          1239
        ],
        [
          912,
          1380
        ]
      ],
      "basis": "alignment",
      "name": "commercial-street"
    },
    {
      "kind": "vanished",
      "asWritten": "Wilmington Street",
      "trace": [
        [
          933,
          1096
        ],
        [
          349,
          1095
        ]
      ],
      "basis": "alignment",
      "name": "wilmington-street"
    }
  ]
};
