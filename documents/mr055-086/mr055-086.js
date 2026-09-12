module.exports = {
  id: "mr055-086",
  title: "Map of the Stanford Ave Tract",
  shortTitle: "Stanford Ave Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR055/MR055-086.pdf",
  scan: "documents/mr055-086/mr055-086.pdf",
  transcription: null,

  date: { on: "1895-10-23" },   
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
    [180, 42], [112, 1517], [690, 1659], [664, 106]
  ],
  alignment: {
    image: "documents/mr055-086/mr055-086-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.036841, -118.247025], note: "map-tool corner (0,0)" },
      { px: [1138, 0], ll: [34.036035, -118.245412], note: "map-tool corner (1138,0)" },
      { px: [0, 1752], ll: [34.034767, -118.248512], note: "map-tool corner (0,1752)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["8th Street","9th Street","Stanford Avenue"],

  rows: [
    {
      "kind": "state",
      "asWritten": "8TH STREET",
      "street": "8th Street",
      "from": {
        "px": [
          177,
          116
        ]
      },
      "to": {
        "px": [
          666,
          234
        ]
      },
      "basis": "alignment",
      "name": "eighth-street"
    },
    {
      "kind": "state",
      "asWritten": "9TH STREET",
      "street": "9th Street",
      "from": {
        "px": [
          120,
          1343
        ]
      },
      "to": {
        "px": [
          687,
          1503
        ]
      },
      "basis": "alignment",
      "name": "ninth-street"
    },
    {
      "kind": "state",
      "asWritten": "STANFORD AVE.",
      "street": "Stanford Avenue",
      "from": {
        "px": [
          245,
          135
        ]
      },
      "to": {
        "px": [
          260,
          1553
        ]
      },
      "basis": "alignment",
      "name": "stanford-ave"
    }
  ]
};
