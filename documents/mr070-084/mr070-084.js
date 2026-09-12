module.exports = {
  id: "mr070-084",
  title: "Johnson and Keeney's Resubdivision of Lots 22 to 35, Block 3, Wilde and Strong Subdivision of the Frank Sabichi Tract",
  shortTitle: "Johnson and Keeney Resubdivision",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR070/MR070-084.pdf",
  scan: "documents/mr070-084/mr070-084.pdf",
  transcription: null,

  date: { on: "1898-12-04" },   
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
    [299, 311], [277, 1167], [794, 1145], [804, 328]
  ],
  alignment: {
    image: "documents/mr070-084/mr070-084-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.040916, -118.245205], note: "map-tool corner (0,0)" },
      { px: [1084, 0], ll: [34.039271, -118.242888], note: "map-tool corner (1084,0)" },
      { px: [0, 1740], ll: [34.037813, -118.24837], note: "map-tool corner (0,1740)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["7th Street","Agatha Street","Stanford Avenue","Towne Avenue"],

  rows: [
    {
      "kind": "state",
      "asWritten": "SEVENTH STREET",
      "street": "7th Street",
      "from": {
        "px": [
          296,
          430
        ]
      },
      "to": {
        "px": [
          803,
          430
        ]
      },
      "basis": "alignment",
      "name": "seventh-street"
    },
    {
      "kind": "state",
      "asWritten": "Agatha Street",
      "street": "Agatha Street",
      "from": {
        "px": [
          279,
          1099
        ]
      },
      "to": {
        "px": [
          795,
          1097
        ]
      },
      "basis": "alignment",
      "name": "agatha"
    },
    {
      "kind": "state",
      "asWritten": "RUTH AVENUE",
      "street": "Stanford Avenue",
      "from": {
        "px": [
          733,
          326
        ]
      },
      "to": {
        "px": [
          730,
          1148
        ]
      },
      "basis": "alignment",
      "note": "The modern Stanford Avenue trace follows the roadway lettered Ruth Avenue.",
      "name": "ruth-ave"
    },
    {
      "kind": "state",
      "asWritten": "TOWNE AVE",
      "street": "Towne Avenue",
      "from": {
        "px": [
          386,
          314
        ]
      },
      "to": {
        "px": [
          364,
          1163
        ]
      },
      "basis": "alignment",
      "name": "towne-ave"
    }
  ]
};
