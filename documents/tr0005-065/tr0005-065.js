module.exports = {
  id: "tr0005-065",
  title: "Map of a portion of the E. N. Fletcher Tract in the City of Los Angeles (surveyed April 1896 and March 1904 by V. J. Rowan)",
  shortTitle: "E. N. Fletcher Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0005/TR0005-065.pdf",
  scan: "documents/tr0005-065/tr0005-065.pdf",
  transcription: null,

  date: { on: "1904-03" },   
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
    [178, 510], [358, 436], [499, 688], [1139, 857],
    [1128, 1192], [150, 1235]
  ],
  alignment: {
    image: "documents/tr0005-065/tr0005-065-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.036545, -118.247683], note: "map-tool corner (0,0)" },
      { px: [1176, 0], ll: [34.034841, -118.244312], note: "map-tool corner (1176,0)" },
      { px: [0, 1842], ll: [34.032138, -118.250881], note: "map-tool corner (0,1842)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["10th Street","9th Street","Stanford Avenue"],

  rows: [
    {
      "kind": "state",
      "asWritten": "TENTH ST.",
      "name": "tenth-street",
      "street": "10th Street",
      "from": {
        "px": [
          158,
          1019
        ]
      },
      "to": {
        "px": [
          1134,
          1020
        ]
      },
      "basis": "alignment",
      "confirmed": true
    },
    {
      "kind": "state",
      "asWritten": "9th St.",
      "name": "ninth-street",
      "street": "9th Street",
      "from": {
        "px": [
          235,
          487
        ]
      },
      "to": {
        "px": [
          415,
          539
        ]
      },
      "basis": "alignment",
      "confirmed": true
    },
    {
      "kind": "state",
      "asWritten": "STANFORD AVE.",
      "name": "stanford-ave",
      "street": "Stanford Avenue",
      "from": {
        "px": [
          240,
          485
        ]
      },
      "to": {
        "px": [
          250,
          1231
        ]
      },
      "basis": "alignment",
      "confirmed": true
    }
  ]
};
