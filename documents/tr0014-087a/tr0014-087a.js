module.exports = {
  id: "tr0014-087a",
  title: "Map of Tract No. 321",
  shortTitle: "Tract No. 321",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0014/TR0014-087a.pdf",
  scan: "documents/tr0014-087a/tr0014-087a.pdf",
  transcription: null,

  date: { on: "1908-11-16" },   
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
    [257, 1118], [278, 1310], [569, 1300], [919, 857],
    [940, 709], [291, 671]
  ],
  alignment: {
    image: "documents/tr0014-087a/tr0014-087a-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.057103, -118.26391], note: "map-tool corner (0,0)" },
      { px: [1144, 0], ll: [34.055789, -118.260623], note: "map-tool corner (1144,0)" },
      { px: [0, 1842], ll: [34.052688, -118.266445], note: "map-tool corner (0,1842)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["6th Street","Lucas Avenue"],

  rows: [
    {
      "kind": "state",
      "asWritten": "SIXTH ST.",
      "name": "sixth-street",
      "street": "6th Street",
      "from": {
        "px": [
          283,
          782
        ]
      },
      "to": {
        "px": [
          928,
          795
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "LUCAS AVE.",
      "name": "lucas-avenue",
      "street": "Lucas Avenue",
      "from": {
        "px": [
          427,
          679
        ]
      },
      "to": {
        "px": [
          405,
          1306
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "vanished",
      "asWritten": "Shatto St",
      "trace": [
        [
          411,
          1167
        ],
        [
          214,
          1158
        ]
      ],
      "basis": "alignment",
      "name": "shatto-st"
    }
  ]
};
