module.exports = {
  id: "mr003-166-p1",
  title: "Map showing Building Lots near L.A. & I. RR. Depot on San Pedro Street known as the Moreno Vineyard Tract",
  shortTitle: "Moreno Vineyard Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-166.pdf",
  scan: "documents/mr003-166-p1/mr003-166-p1.pdf",
  transcription: null,

  date: { on: "1876-03-01" },   
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
    [199, 13], [140, 1129], [1689, 1091], [1486, -13]
  ],
  alignment: {
    image: "documents/mr003-166-p1/mr003-166-p1-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.045581, -118.247692], note: "map-tool corner (0,0)" },
      { px: [1742, 0], ll: [34.044141, -118.245443], note: "map-tool corner (1742,0)" },
      { px: [0, 1109], ll: [34.044386, -118.248791], note: "map-tool corner (0,1109)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["6th Street","Maple Avenue","Wall Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "Sixth St Extension.",
      "street": "6th Street",
      "from": {
        "px": [
          143,
          1064
        ]
      },
      "to": {
        "px": [
          1679,
          1037
        ]
      },
      "basis": "alignment",
      "note": "The modern 6th Street trace follows the proposed extension lettered along the lower edge of this sheet.",
      "name": "sixth-street"
    },
    {
      "kind": "state",
      "asWritten": "Regent Street",
      "street": "Maple Avenue",
      "from": {
        "px": [
          605,
          5
        ]
      },
      "to": {
        "px": [
          633,
          1117
        ]
      },
      "basis": "alignment",
      "note": "Modern Maple Avenue follows the corridor whose label is split between the two filing sheets: Regent appears here and Street appears on sheet 2.",
      "name": "regent-street"
    },
    {
      "kind": "state",
      "asWritten": "Wall Street",
      "street": "Wall Street",
      "from": {
        "px": [
          1209,
          -7
        ]
      },
      "to": {
        "px": [
          1218,
          1103
        ]
      },
      "basis": "alignment",
      "note": "The modern Wall Street trace follows the corridor whose label is split between the two filing sheets: Wall appears here and Street appears on sheet 2.",
      "name": "wall-street"
    }
  ]
};
