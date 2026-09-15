module.exports = {
  id: "tr0159-021-p2",
  title: "Tract No. 8772",
  shortTitle: "Tract No. 8772",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0159/TR0159-021.pdf",
  scan: "documents/tr0159-021-p2/tr0159-021-p2.pdf",
  transcription: null,

  date: { on: "1928-12-19" },   
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
    [43, 427], [36, 1742], [1541, 1732], [1565, 371]
  ],
  alignment: {
    image: "documents/tr0159-021-p2/tr0159-021-p2-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.037503, -118.230713], note: "map-tool corner (0,0)" },
      { px: [1702, 0], ll: [34.037622, -118.229046], note: "map-tool corner (1702,0)" },
      { px: [0, 2449], ll: [34.035501, -118.230507], note: "map-tool corner (0,2449)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["Jesse Street","Mesquit Street","Santa Fe Avenue"],

  rows: [
    {
      "kind": "state",
      "asWritten": "Jesse Street",
      "street": "Jesse Street",
      "from": {
        "px": [
          79,
          1426
        ]
      },
      "to": {
        "px": [
          1409,
          1413
        ]
      },
      "basis": "alignment",
      "name": "jesse"
    },
    {
      "kind": "state",
      "asWritten": "Mesquit Street",
      "street": "Mesquit Street",
      "from": {
        "px": [
          1396,
          377
        ]
      },
      "to": {
        "px": [
          1413,
          1733
        ]
      },
      "basis": "alignment",
      "name": "mesquit"
    },
    {
      "kind": "state",
      "asWritten": "Santa Fe Avenue",
      "street": "Santa Fe Avenue",
      "from": {
        "px": [
          306,
          417
        ]
      },
      "to": {
        "px": [
          310,
          1740
        ]
      },
      "basis": "alignment",
      "name": "santa-fe-ave",
      "note": "'Santa Fe' and 'Avenue' are lettered at different points along the same western road corridor."
    }
  ]
};
