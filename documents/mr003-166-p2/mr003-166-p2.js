module.exports = {
  id: "mr003-166-p2",
  title: "Map showing Building Lots near L.A. & I. RR. Depot on San Pedro Street known as the Moreno Vineyard Tract",
  shortTitle: "Moreno Vineyard Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-166.pdf",
  scan: "documents/mr003-166-p2/mr003-166-p2.pdf",
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
    [456, 291], [327, 945], [1475, 955], [1304, 138]
  ],
  alignment: {
    image: "documents/mr003-166-p2/mr003-166-p2-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.046549, -118.246769], note: "map-tool corner (0,0)" },
      { px: [1669, 0], ll: [34.04517, -118.244615], note: "map-tool corner (1669,0)" },
      { px: [0, 1119], ll: [34.045344, -118.247878], note: "map-tool corner (0,1119)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["5th Street","Maple Avenue","Wall Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "Fifth St. (Extension)",
      "street": "5th Street",
      "from": {
        "px": [
          393,
          609
        ]
      },
      "to": {
        "px": [
          1397,
          584
        ]
      },
      "basis": "alignment",
      "note": "The modern 5th Street trace follows the extension lettered across this sheet.",
      "name": "fifth-street"
    },
    {
      "kind": "state",
      "asWritten": "Regent Street",
      "street": "Maple Avenue",
      "from": {
        "px": [
          590,
          613
        ]
      },
      "to": {
        "px": [
          589,
          947
        ]
      },
      "basis": "alignment",
      "note": "Modern Maple Avenue follows the corridor whose complete label is split between the sheets: Regent on sheet 1 and Street on this sheet.",
      "name": "regent-street"
    },
    {
      "kind": "state",
      "asWritten": "Wall Street",
      "street": "Wall Street",
      "from": {
        "px": [
          1203,
          156
        ]
      },
      "to": {
        "px": [
          1193,
          953
        ]
      },
      "basis": "alignment",
      "note": "The modern Wall Street trace follows the corridor whose complete label is split between the sheets: Wall on sheet 1 and Street on this sheet.",
      "name": "wall-street"
    }
  ]
};
