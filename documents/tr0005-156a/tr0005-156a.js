module.exports = {
  id: "tr0005-156a",
  title: "Map of Culvers Addition to the Frank Sabichi Tract",
  shortTitle: "Culvers Addition",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0005/TR0005-156a.pdf",
  scan: "documents/tr0005-156a/tr0005-156a.pdf",
  transcription: null,

  date: { on: "1904-07-26" },   
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
    [154, 529], [183, 1573], [1265, 1552], [1047, 527]
  ],
  alignment: {
    image: "documents/tr0005-156a/tr0005-156a-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.038874, -118.246474], note: "map-tool corner (0,0)" },
      { px: [1178, 0], ll: [34.037736, -118.245085], note: "map-tool corner (1178,0)" },
      { px: [0, 1842], ll: [34.037063, -118.248607], note: "map-tool corner (0,1842)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["8th Street","Stanford Avenue","Towne Avenue"],

  rows: [
    {
      "kind": "state",
      "asWritten": "EIGHTH ST.",
      "street": "8th Street",
      "from": {
        "px": [
          177,
          1347
        ]
      },
      "to": {
        "px": [
          1178,
          1359
        ]
      },
      "basis": "alignment",
      "name": "eighth-street"
    },
    {
      "kind": "state",
      "asWritten": "RUTH AVE.",
      "street": "Stanford Avenue",
      "from": {
        "px": [
          903,
          527
        ]
      },
      "to": {
        "px": [
          955,
          1356
        ]
      },
      "basis": "alignment",
      "note": "North of Eighth Street, the modern Stanford corridor is lettered Ruth Avenue.",
      "name": "ruth-ave"
    },
    {
      "kind": "state",
      "asWritten": "STANFORD AVENUE",
      "street": "Stanford Avenue",
      "from": {
        "px": [
          1066,
          1359
        ]
      },
      "to": {
        "px": [
          1116,
          1555
        ]
      },
      "basis": "alignment",
      "note": "South of Eighth Street this separately drawn segment bears the Stanford label.",
      "name": "stanford-ave"
    },
    {
      "kind": "state",
      "asWritten": "TOWNE AVE.",
      "street": "Towne Avenue",
      "from": {
        "px": [
          282,
          529
        ]
      },
      "to": {
        "px": [
          342,
          1348
        ]
      },
      "basis": "alignment",
      "note": "Northern Towne segment ends west of the southern segment at Eighth Street.",
      "name": "towne-ave"
    },
    {
      "kind": "state",
      "asWritten": "TOWNE AVE.",
      "street": "Towne Avenue",
      "from": {
        "px": [
          435,
          1350
        ]
      },
      "to": {
        "px": [
          487,
          1567
        ]
      },
      "basis": "alignment",
      "note": "Southern Towne segment is offset eastward across Eighth Street.",
      "name": "towne-ave"
    }
  ]
};
