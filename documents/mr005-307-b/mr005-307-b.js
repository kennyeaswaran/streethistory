module.exports = {
  id: "mr005-307-b",
  title: "Map of Hamilton's Subdivision of Part of the Urquidez Garden, Los Angeles City, Cal.",
  shortTitle: "Hamilton's Subdivision",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-307.pdf",
  scan: "documents/mr005-307-b/mr005-307-b.pdf",
  transcription: null,

  date: { on: "1883-09-12" },   
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
    [441, 423], [444, 722], [1119, 716], [1112, 365]
  ],
  alignment: {
    image: "documents/mr005-307-b/mr005-307-b-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.045775, -118.24554], note: "map-tool corner (0,0)" },
      { px: [1142, 0], ll: [34.044856, -118.243262], note: "map-tool corner (1142,0)" },
      { px: [0, 739], ll: [34.044545, -118.246253], note: "map-tool corner (0,739)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["5th Street","San Julian Street","San Pedro Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "FIFTH STREET",
      "street": "5th Street",
      "from": {
        "px": [
          442,
          480
        ]
      },
      "to": "San Pedro Street",
      "basis": "alignment",
      "note": "The modern 5th Street trace follows the roadway lettered FIFTH STREET along the northern boundary.",
      "name": "fifth-street"
    },
    {
      "kind": "unnamed",
      "street": "San Julian Street",
      "from": {
        "px": [
          494,
          477
        ]
      },
      "to": {
        "px": [
          487,
          722
        ]
      },
      "note": "South of Fifth, the modern San Julian Street trace lies beside a single tract boundary line; the sheet draws no two-edged roadway there."
    },
    {
      "kind": "state",
      "asWritten": "SAN PEDRO STREET",
      "street": "San Pedro Street",
      "from": {
        "px": [
          1032,
          372
        ]
      },
      "to": {
        "px": [
          1019,
          717
        ]
      },
      "basis": "alignment",
      "note": "The modern San Pedro Street trace follows the roadway lettered SAN PEDRO STREET along the eastern boundary.",
      "name": "san-pedro"
    }
  ]
};
