module.exports = {
  id: "tr0018-025a",
  title: "Tract No. 1152",
  shortTitle: "Tract No. 1152",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0018/TR0018-025a.pdf",
  scan: "documents/tr0018-025a/tr0018-025a.pdf",
  transcription: null,

  date: { on: "1911-01" },   
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
    [202, 622], [274, 1569], [1070, 1525], [1116, 560]
  ],
  alignment: {
    image: "documents/tr0018-025a/tr0018-025a-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.054142, -118.236298], note: "map-tool corner (0,0)" },
      { px: [1196, 0], ll: [34.053929, -118.234693], note: "map-tool corner (1196,0)" },
      { px: [0, 1842], ll: [34.052079, -118.23669], note: "map-tool corner (0,1842)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["Commercial Street","Ducommun Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "COMMERCIAL ST.",
      "name": "commercial-street",
      "street": "Commercial Street",
      "from": {
        "px": [
          207,
          694
        ]
      },
      "to": {
        "px": [
          1110,
          692
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "DUCOMMUN ST.",
      "street": "Ducommun Street",
      "from": {
        "px": [
          256,
          1330
        ]
      },
      "to": {
        "px": [
          1079,
          1335
        ]
      },
      "basis": "alignment",
      "name": "ducommun"
    }
  ]
};
