module.exports = {
  id: "mr053-065",
  title: "Map of the Clark and Bryan Tract, Los Angeles City, Calif.",
  shortTitle: "Clark and Bryan Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-065.pdf",
  scan: "documents/mr053-065/mr053-065.pdf",
  transcription: null,

  date: { on: "1893-11" },   
  form: "drawn",
  type: "tract-map",
  attests: "planned-by",
  completeness: "incidental",
  readBy: "human",

  // Coverage is the ground this document informs about — the tract boundary,
  // not the sheet edge (MODEL-SPEC §4.4). SCAN PIXELS against alignment.image,
  // so a better alignment carries it along (§4.6).
  coverage: [
    [448, 46], [914, 182], [920, 1355], [256, 1289]
  ],
  alignment: {
    image: "documents/mr053-065/mr053-065-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.039741, -118.250539], note: "document-tool corner (0,0)" },
      { px: [1121, 0], ll: [34.037812, -118.246645], note: "document-tool corner (1121,0)" },
      { px: [0, 1752], ll: [34.034663, -118.254152], note: "document-tool corner (0,1752)" }
    ]
  },

  // The polygon strays onto these; the document does not inform about them.
  // NOT the same as a absent row, which says the sheet covers the ground and
  // draws nothing there (MODEL-SPEC §4.4, §5.2).
  coverageExcept: [{"street":"10th Street","from":"Crocker Street","to":null}],

  sweptFully: true,
  sweptFor: ["10th Street","8th Street","9th Place","9th Street","Crocker Street","San Pedro Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "11th St.",
      "street": "10th Street",
      "from": "San Pedro Street",
      "to": "Crocker Street",
      "basis": "alignment",
      "note": "West of Crocker, the modern 10th Street trace follows the roadway lettered 11th St.",
      "name": "eleventh-street"
    },
    {
      "kind": "state",
      "asWritten": "8th St.",
      "street": "8th Street",
      "from": {
        "px": [
          442,
          86
        ]
      },
      "to": {
        "px": [
          914,
          254
        ]
      },
      "basis": "alignment",
      "note": "The modern 8th Street line follows the complete roadway lettered 8th St.",
      "name": "eighth-street"
    },
    {
      "kind": "state",
      "asWritten": "10th St.",
      "street": "9th Place",
      "from": "San Pedro Street",
      "to": "Crocker Street",
      "basis": "alignment",
      "note": "The modern 9th Place centerline follows the historical roadway lettered 10th St.",
      "name": "tenth-street"
    },
    {
      "kind": "state",
      "asWritten": "9th St.",
      "street": "9th Street",
      "from": {
        "px": [
          365,
          586
        ]
      },
      "to": {
        "px": [
          917,
          750
        ]
      },
      "basis": "alignment",
      "note": "The modern 9th Street trace follows the full roadway lettered 9th St.",
      "name": "ninth-street"
    },
    {
      "kind": "state",
      "asWritten": "Clark Ave.",
      "street": "Crocker Street",
      "from": "8th Street",
      "to": {
        "px": [
          778,
          1341
        ]
      },
      "basis": "alignment",
      "note": "South of 8th, the modern Crocker centerline follows the same roadway lettered Clark Ave. through the remainder of the coverage.",
      "name": "clark-ave"
    },
    {
      "kind": "state",
      "asWritten": "San Pedro St.",
      "street": "San Pedro Street",
      "from": {
        "px": [
          510,
          64
        ]
      },
      "to": {
        "px": [
          330,
          1296
        ]
      },
      "basis": "alignment",
      "note": "The modern San Pedro Street trace follows the complete bending roadway lettered San Pedro St.",
      "name": "san-pedro"
    }
  ]
};
