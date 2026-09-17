module.exports = {
  id: "tr0014-101a",
  title: "Map of Orsatti and Vitagliano Tract",
  shortTitle: "Orsatti and Vitagliano Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0014/TR0014-101a.pdf",
  scan: "documents/tr0014-101a/tr0014-101a.pdf",
  transcription: null,

  date: { on: "1908-08" },   
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
    [186, 605], [175, 1087], [881, 1066], [923, 556]
  ],
  alignment: {
    image: "documents/tr0014-101a/tr0014-101a-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.066183, -118.240732], note: "map-tool corner (0,0)" },
      { px: [1138, 0], ll: [34.065573, -118.238966], note: "map-tool corner (1138,0)" },
      { px: [0, 1842], ll: [34.063799, -118.241916], note: "map-tool corner (0,1842)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["Cleveland Street","College Street","Yale Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "CLEVELAND ST.",
      "street": "Cleveland Street",
      "from": {
        "px": [
          281,
          684
        ]
      },
      "to": {
        "px": [
          274,
          1084
        ]
      },
      "basis": "alignment",
      "name": "cleveland-st"
    },
    {
      "kind": "state",
      "asWritten": "COLLEGE ST.",
      "street": "College Street",
      "from": {
        "px": [
          184,
          682
        ]
      },
      "to": {
        "px": [
          912,
          688
        ]
      },
      "basis": "alignment",
      "name": "college"
    },
    {
      "kind": "state",
      "asWritten": "YALE ST.",
      "name": "yale",
      "street": "Yale Street",
      "from": {
        "px": [
          778,
          566
        ]
      },
      "to": {
        "px": [
          745,
          1070
        ]
      },
      "basis": "alignment"
    }
  ]
};
