module.exports = {
  id: "mr012-064",
  title: "Map of the Whisler Subdivision on the West Side of San Pedro Street on Part of the Urquidez Vineyard in the City of Los Angeles, Cal.",
  shortTitle: "Whisler Subdivision",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR012/MR012-064.pdf",
  scan: "documents/mr012-064/mr012-064.pdf",
  transcription: null,

  date: { on: "1886-12-14" },   
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
    [26, 864], [106, 1319], [1101, 1279], [1082, 679]
  ],
  alignment: {
    image: "documents/mr012-064/mr012-064-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.045767, -118.245146], note: "map-tool corner (0,0)" },
      { px: [1117, 0], ll: [34.04478, -118.24317], note: "map-tool corner (1117,0)" },
      { px: [0, 1705], ll: [34.04325, -118.246951], note: "map-tool corner (0,1705)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["San Julian Street","San Pedro Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "Whisler St.",
      "street": "San Julian Street",
      "from": {
        "px": [
          422,
          795
        ]
      },
      "to": {
        "px": [
          452,
          1305
        ]
      },
      "basis": "alignment",
      "note": "Modern San Julian Street follows the complete 80-foot roadway lettered Whisler St.",
      "name": "whisler-st"
    },
    {
      "kind": "state",
      "asWritten": "San Pedro Street",
      "street": "San Pedro Street",
      "from": {
        "px": [
          991,
          695
        ]
      },
      "to": {
        "px": [
          996,
          1283
        ]
      },
      "basis": "alignment",
      "note": "The modern San Pedro Street trace follows the complete 80-foot roadway lettered San Pedro Street.",
      "name": "san-pedro"
    }
  ]
};
