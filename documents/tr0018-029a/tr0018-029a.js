module.exports = {
  id: "tr0018-029a",
  title: "Tract No. 1153",
  shortTitle: "Tract No. 1153",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0018/TR0018-029a.pdf",
  scan: "documents/tr0018-029a/tr0018-029a.pdf",
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
    [171, 604], [223, 1422], [1010, 1390], [1006, 605]
  ],
  alignment: {
    image: "documents/tr0018-029a/tr0018-029a-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.054052, -118.235517], note: "map-tool corner (0,0)" },
      { px: [1171, 0], ll: [34.053817, -118.233951], note: "map-tool corner (1171,0)" },
      { px: [0, 1842], ll: [34.051996, -118.235961], note: "map-tool corner (0,1842)" }
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
          177,
          702
        ]
      },
      "to": {
        "px": [
          1006,
          681
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
          218,
          1339
        ]
      },
      "to": {
        "px": [
          1010,
          1334
        ]
      },
      "basis": "alignment",
      "name": "ducommun"
    }
  ]
};
