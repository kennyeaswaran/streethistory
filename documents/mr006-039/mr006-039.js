module.exports = {
  id: "mr006-039",
  title: "Map of the Rowan Tract, Los Angeles City, Cal.",
  shortTitle: "Rowan Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-039.pdf",
  scan: "documents/mr006-039/mr006-039.pdf",
  transcription: null,

  date: { on: "1884-09-15" },   
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
    [104, 280], [-11, 975], [1092, 999], [1082, 129]
  ],
  alignment: {
    image: "documents/mr006-039/mr006-039-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.042023, -118.247509], note: "map-tool corner (0,0)" },
      { px: [1689, 0], ll: [34.040406, -118.245395], note: "map-tool corner (1689,0)" },
      { px: [0, 1119], ll: [34.040854, -118.248793], note: "map-tool corner (0,1119)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["7th Street","San Julian Street","San Pedro Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "Seventh St.",
      "street": "7th Street",
      "from": {
        "px": [
          78,
          439
        ]
      },
      "to": {
        "px": [
          1085,
          388
        ]
      },
      "basis": "alignment",
      "note": "The modern 7th Street trace follows the complete roadway lettered Seventh St.",
      "name": "seventh-street"
    },
    {
      "kind": "state",
      "asWritten": "Earl St.",
      "street": "San Julian Street",
      "from": {
        "px": [
          425,
          230
        ]
      },
      "to": {
        "px": [
          374,
          983
        ]
      },
      "basis": "alignment",
      "note": "Modern San Julian Street follows the roadway lettered Euclid St. between the tract's two blocks.",
      "name": "earl-st"
    },
    {
      "kind": "state",
      "asWritten": "San Pedro St.",
      "street": "San Pedro Street",
      "from": {
        "px": [
          942,
          151
        ]
      },
      "to": {
        "px": [
          963,
          996
        ]
      },
      "basis": "alignment",
      "note": "The modern San Pedro Street trace follows the complete roadway lettered San Pedro St.",
      "name": "san-pedro"
    }
  ]
};
