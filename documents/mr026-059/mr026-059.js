module.exports = {
  id: "mr026-059",
  title: "Map of the Goldsworthy 9th St. Tract",
  shortTitle: "Goldsworthy 9th St. Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR026/MR026-059.pdf",
  scan: "documents/mr026-059/mr026-059.pdf",
  transcription: null,

  date: { on: "1887-11-29" },   
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
    [321, 537], [300, 1102], [758, 1163], [773, 656]
  ],
  alignment: {
    image: "documents/mr026-059/mr026-059-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.036794, -118.247129], note: "map-tool corner (0,0)" },
      { px: [954, 0], ll: [34.035695, -118.244821], note: "map-tool corner (954,0)" },
      { px: [0, 1702], ll: [34.033357, -118.249478], note: "map-tool corner (0,1702)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["9th Street","Gladys Avenue","Olympic Boulevard"],

  rows: [
    {
      "kind": "state",
      "asWritten": "East 9th Street",
      "street": "9th Street",
      "from": {
        "px": [
          310,
          837
        ]
      },
      "to": "Gladys Avenue",
      "basis": "alignment",
      "name": "ninth-street"
    },
    {
      "kind": "state",
      "asWritten": "Melendrez St",
      "street": "Gladys Avenue",
      "from": {
        "px": [
          542,
          595
        ]
      },
      "to": "9th Street",
      "basis": "alignment",
      "note": "The corridor now called Gladys is lettered Melendrez north of East 9th Street.",
      "name": "melendrez-st"
    },
    {
      "kind": "state",
      "asWritten": "East 9th Street",
      "street": "Olympic Boulevard",
      "from": "Gladys Avenue",
      "to": {
        "px": [
          765,
          942
        ]
      },
      "basis": "alignment",
      "note": "East of Melendrez, the modern Olympic alignment follows the same East 9th Street corridor.",
      "name": "ninth-street"
    }
  ]
};
