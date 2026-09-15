module.exports = {
  id: "tr0273-017",
  title: "Tract No. 13301",
  shortTitle: "Tract No. 13301",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0273/TR0273-017.pdf",
  scan: "documents/tr0273-017/tr0273-017.pdf",
  transcription: null,

  date: { on: "1945-02" },   
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
    [204, 1352], [180, 2246], [1456, 2275], [1093, 998]
  ],
  alignment: {
    image: "documents/tr0273-017/tr0273-017-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.041257, -118.239531], note: "map-tool corner (0,0)" },
      { px: [1784, 0], ll: [34.039718, -118.237253], note: "map-tool corner (1784,0)" },
      { px: [0, 2531], ll: [34.03856, -118.242149], note: "map-tool corner (0,2531)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["6th Street","Central Avenue","Kohler Street","Wilde Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "6TH STREET",
      "street": "6th Street",
      "from": {
        "px": [
          235,
          1475
        ]
      },
      "to": {
        "px": [
          1130,
          1414
        ]
      },
      "basis": "alignment",
      "name": "sixth-street",
      "note": "'6TH' and 'STREET' are printed far apart within the same east-west corridor."
    },
    {
      "kind": "state",
      "asWritten": "CENTRAL AVENUE",
      "street": "Central Avenue",
      "from": {
        "px": [
          620,
          1187
        ]
      },
      "to": {
        "px": [
          1282,
          2271
        ]
      },
      "basis": "alignment",
      "name": "central-ave",
      "note": "The two words are lettered at different points along the same broad diagonal avenue."
    },
    {
      "kind": "state",
      "asWritten": "KOHLER STREET",
      "street": "Kohler Street",
      "from": {
        "px": [
          392,
          1469
        ]
      },
      "to": {
        "px": [
          390,
          2251
        ]
      },
      "basis": "alignment",
      "name": "kohler"
    },
    {
      "kind": "state",
      "asWritten": "WILDE STREET",
      "street": "Wilde Street",
      "from": {
        "px": [
          395,
          2014
        ]
      },
      "to": {
        "px": [
          1197,
          2011
        ]
      },
      "basis": "alignment",
      "name": "wilde-st"
    }
  ]
};
