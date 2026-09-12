module.exports = {
  id: "mr018-092",
  title: "Map of E. M. Funk's Subdivision of the Valenzuela Tract",
  shortTitle: "Valenzuela Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR018/MR018-092.pdf",
  scan: "documents/mr018-092/mr018-092.pdf",
  transcription: null,

  date: { on: "1887-06" },   
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
    [1582, 299], [185, 304], [133, 824], [1493, 841]
  ],
  alignment: {
    image: "documents/mr018-092/mr018-092-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.036008, -118.247747], note: "map-tool corner (0,0)" },
      { px: [1716, 0], ll: [34.039863, -118.244402], note: "map-tool corner (1716,0)" },
      { px: [0, 1136], ll: [34.03416, -118.244688], note: "map-tool corner (0,1136)" }
    ]
  },

  // The polygon strays onto these; the document does not inform about them.
  // NOT the same as a absent row, which says the sheet covers the ground and
  // draws nothing there (MODEL-SPEC §4.4, §5.2).
  coverageExcept: [{"street":"Gladys Avenue","from":null,"to":null},{"street":"Ceres Avenue","from":null,"to":null},{"street":"Agatha Street","from":null,"to":null}],

  sweptFully: true,
  sweptFor: ["7th Street","8th Street","Agatha Street","Ceres Avenue","Gladys Avenue"],

  rows: [
    {
      "kind": "state",
      "asWritten": "Seventh St.",
      "street": "7th Street",
      "from": {
        "px": [
          1460,
          299
        ]
      },
      "to": {
        "px": [
          1422,
          840
        ]
      },
      "basis": "alignment",
      "name": "seventh-street"
    },
    {
      "kind": "state",
      "asWritten": "Eighth St.",
      "street": "8th Street",
      "from": {
        "px": [
          288,
          304
        ]
      },
      "to": {
        "px": [
          210,
          825
        ]
      },
      "basis": "alignment",
      "name": "eighth-street"
    },
    {
      "kind": "state",
      "asWritten": "Elmore Ave.",
      "street": "Ceres Avenue",
      "from": {
        "px": [
          237,
          668
        ]
      },
      "to": {
        "px": [
          1437,
          647
        ]
      },
      "basis": "alignment",
      "note": "The modern Ceres Avenue centerline follows the roadway lettered Elmore Ave.",
      "name": "elmore-ave"
    },
    {
      "kind": "absent",
      "street": "Gladys Avenue",
      "from": {
        "px": [
          169,
          461
        ]
      },
      "to": {
        "px": [
          266,
          451
        ]
      },
      "note": "The western short branch lies through lots south of Helena Ave."
    },
    {
      "kind": "state",
      "asWritten": "Helena Ave.",
      "street": "Gladys Avenue",
      "from": {
        "px": [
          275,
          400
        ]
      },
      "to": {
        "px": [
          1453,
          369
        ]
      },
      "basis": "alignment",
      "note": "The long modern Gladys line follows Helena Ave. across the top of the subdivision.",
      "name": "helena-ave"
    }
  ]
};
