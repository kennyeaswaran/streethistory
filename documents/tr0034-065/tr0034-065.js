module.exports = {
  id: "tr0034-065",
  title: "Tract No. 3267",
  shortTitle: "Tract No. 3267",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0034/TR0034-065.pdf",
  scan: "documents/tr0034-065/tr0034-065.pdf",
  transcription: null,

  date: { on: "1919-06-09" },   
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
    [-33, 860], [1169, 1057], [1128, 72]
  ],
  alignment: {
    image: "documents/tr0034-065/tr0034-065-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.061438, -118.260718], note: "map-tool corner (0,0)" },
      { px: [1173, 0], ll: [34.060999, -118.259695], note: "map-tool corner (1173,0)" },
      { px: [0, 1746], ll: [34.060167, -118.261501], note: "map-tool corner (0,1746)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["2nd Street","Lucas Avenue"],

  rows: [
    {
      "kind": "state",
      "asWritten": "SECOND STREET",
      "name": "second-street",
      "street": "2nd Street",
      "from": {
        "px": [
          66,
          876
        ]
      },
      "to": {
        "px": [
          942,
          343
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "LUCAS AVENUE",
      "name": "lucas-avenue",
      "street": "Lucas Avenue",
      "from": {
        "px": [
          943,
          198
        ]
      },
      "to": {
        "px": [
          937,
          1019
        ]
      },
      "basis": "alignment"
    }
  ]
};
