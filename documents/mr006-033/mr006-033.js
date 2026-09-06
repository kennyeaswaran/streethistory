module.exports = {
  id: "mr006-033",
  title: "Map of the Nordholdt Tract",
  shortTitle: "Nordholdt Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-033.pdf",
  scan: "documents/mr006-033/mr006-033.pdf",
  transcription: null,

  date: { on: "1884-08-19" },   
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
    [439, 441], [473, 1265], [873, 1263], [764, 445]
  ],
  alignment: {
    image: "documents/mr006-033/mr006-033-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.045466, -118.247372], note: "map-tool corner (0,0)" },
      { px: [1132, 0], ll: [34.043469, -118.244458], note: "map-tool corner (1132,0)" },
      { px: [0, 1675], ll: [34.041868, -118.250914], note: "map-tool corner (0,1675)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["6th Street","7th Street","Wall Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "proposed line of Sixth Street.",
      "street": "6th Street",
      "from": {
        "px": [
          442,
          516
        ]
      },
      "to": {
        "px": [
          772,
          508
        ]
      },
      "basis": "alignment",
      "note": "The modern 6th Street trace follows the explicitly proposed line shown across the northern end of the tract.",
      "name": "sixth-street"
    },
    {
      "kind": "state",
      "asWritten": "SEVENTH STREET",
      "street": "7th Street",
      "from": {
        "px": [
          471,
          1207
        ]
      },
      "to": {
        "px": [
          866,
          1209
        ]
      },
      "basis": "alignment",
      "note": "The modern 7th Street trace follows the complete roadway lettered SEVENTH STREET.",
      "name": "seventh-street"
    },
    {
      "kind": "state",
      "asWritten": "WALL STREET",
      "street": "Wall Street",
      "from": {
        "px": [
          504,
          442
        ]
      },
      "to": {
        "px": [
          533,
          1265
        ]
      },
      "basis": "alignment",
      "note": "The modern Wall Street trace follows the complete roadway lettered WALL STREET.",
      "name": "wall-street"
    }
  ]
};
