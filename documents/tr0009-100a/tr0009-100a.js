module.exports = {
  id: "tr0009-100a",
  title: "6th St. Terminal Tract",
  shortTitle: "6th St. Terminal Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0009/TR0009-100a.pdf",
  scan: "documents/tr0009-100a/tr0009-100a.pdf",
  transcription: null,

  date: { on: "1906-03-02" },   
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
    [272, 678], [251, 1534], [915, 1501], [817, 633]
  ],
  alignment: {
    image: "documents/tr0009-100a/tr0009-100a-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.046869, -118.24814], note: "map-tool corner (0,0)" },
      { px: [1176, 0], ll: [34.044655, -118.245245], note: "map-tool corner (1176,0)" },
      { px: [0, 1842], ll: [34.043084, -118.252296], note: "map-tool corner (0,1842)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["6th Street","7th Street","Los Angeles Street","Maple Avenue"],

  rows: [
    {
      "kind": "state",
      "asWritten": "SIXTH ST.",
      "street": "6th Street",
      "from": {
        "px": [
          270,
          780
        ]
      },
      "to": {
        "px": [
          827,
          725
        ]
      },
      "basis": "alignment",
      "note": "The modern 6th Street centerline follows the roadway lettered SIXTH ST.",
      "name": "sixth-street"
    },
    {
      "kind": "state",
      "asWritten": "SEVENTH ST.",
      "street": "7th Street",
      "from": {
        "px": [
          254,
          1423
        ]
      },
      "to": {
        "px": [
          903,
          1398
        ]
      },
      "basis": "alignment",
      "note": "The modern 7th Street centerline follows the roadway lettered SEVENTH ST.",
      "name": "seventh-street"
    },
    {
      "kind": "state",
      "asWritten": "LOS ANGELES ST.",
      "street": "Los Angeles Street",
      "from": {
        "px": [
          351,
          671
        ]
      },
      "to": {
        "px": [
          355,
          1529
        ]
      },
      "basis": "alignment",
      "note": "The modern Los Angeles Street centerline follows the roadway lettered LOS ANGELES ST.",
      "name": "los-angeles-street"
    },
    {
      "kind": "state",
      "asWritten": "MAPLE AVE.",
      "street": "Maple Avenue",
      "from": {
        "px": [
          740,
          639
        ]
      },
      "to": {
        "px": [
          810,
          1506
        ]
      },
      "basis": "alignment",
      "note": "The modern Maple Avenue centerline follows the roadway lettered MAPLE AVE.",
      "name": "maple-dtla"
    }
  ]
};
