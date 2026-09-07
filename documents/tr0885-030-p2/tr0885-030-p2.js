module.exports = {
  id: "tr0885-030-p2",
  title: "Tract No. 30211 in the City of Los Angeles, State of California, for Redevelopment Purposes",
  shortTitle: "Tract No. 30211",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0885/TR0885-030.pdf",
  scan: "documents/tr0885-030-p2/tr0885-030-p2.pdf",
  transcription: null,

  date: { on: "1977-10-26" },   
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
    [672, 304], [-5, 1233], [1517, 2402], [1653, 818]
  ],
  alignment: {
    image: "documents/tr0885-030-p2/tr0885-030-p2-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.050626, -118.241499], note: "map-tool corner (0,0)" },
      { px: [1746, 0], ll: [34.050594, -118.238745], note: "map-tool corner (1746,0)" },
      { px: [0, 2484], ll: [34.047357, -118.241553], note: "map-tool corner (0,2484)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["1st Street","2nd Street","Central Avenue","Japanese Village Plaza Mall"],

  rows: [
    {
      "kind": "state",
      "asWritten": "1ST STREET",
      "street": "1st Street",
      "from": {
        "px": [
          621,
          374
        ]
      },
      "to": {
        "px": [
          1629,
          1093
        ]
      },
      "basis": "alignment",
      "note": "The modern 1st Street centerline follows the roadway lettered 1ST STREET.",
      "name": "first-street"
    },
    {
      "kind": "state",
      "asWritten": "2ND STREET",
      "street": "2nd Street",
      "from": {
        "px": [
          52,
          1155
        ]
      },
      "to": {
        "px": [
          1527,
          2291
        ]
      },
      "basis": "alignment",
      "note": "The modern 2nd Street centerline follows the roadway lettered 2ND STREET.",
      "name": "second-street"
    },
    {
      "kind": "state",
      "asWritten": "CENTRAL AVENUE",
      "street": "Central Avenue",
      "from": {
        "px": [
          1516,
          746
        ]
      },
      "to": {
        "px": [
          1362,
          2283
        ]
      },
      "basis": "alignment",
      "note": "The two supplied modern runs join across 1st Street and follow the continuous roadway lettered CENTRAL AVENUE.",
      "name": "central-ave"
    },
    {
      "kind": "state",
      "asWritten": "JAPANESE VILLAGE PLAZA MALL",
      "street": "Japanese Village Plaza Mall",
      "from": "1st Street",
      "to": "2nd Street",
      "basis": "alignment",
      "note": "The modern pedestrian mall follows the angular public pedestrian way whose label is distributed across its JAPANESE, VILLAGE, PLAZA, and MALL legs.",
      "name": "japanese-village-plaza-mall"
    }
  ]
};
