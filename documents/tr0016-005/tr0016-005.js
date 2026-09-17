module.exports = {
  id: "tr0016-005",
  title: "Map of the Bisbee Tract",
  shortTitle: "Bisbee Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0016/TR0016-005.pdf",
  scan: "documents/tr0016-005/tr0016-005.pdf",
  transcription: null,

  date: { on: "1910-02" },   
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
    [935, 430], [231, 483], [233, 1619], [721, 1633],
    [1033, 1358]
  ],
  alignment: {
    image: "documents/tr0016-005/tr0016-005-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.050382, -118.244519], note: "map-tool corner (0,0)" },
      { px: [1139, 0], ll: [34.051632, -118.243403], note: "map-tool corner (1139,0)" },
      { px: [0, 1842], ll: [34.048875, -118.242097], note: "map-tool corner (0,1842)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["2nd Street","Astronaut Ellison S Onizuka Street","Los Angeles Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "SECOND STREET",
      "name": "second-street",
      "street": "2nd Street",
      "from": {
        "px": [
          360,
          473
        ]
      },
      "to": {
        "px": [
          372,
          1623
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "WILMINGTON STREET",
      "street": "Astronaut Ellison S Onizuka Street",
      "from": {
        "px": [
          1013,
          1167
        ]
      },
      "to": {
        "px": [
          536,
          1628
        ]
      },
      "basis": "alignment",
      "name": "wilmington-street"
    },
    {
      "kind": "state",
      "asWritten": "LOS ANGELES ST.",
      "name": "los-angeles-street",
      "street": "Los Angeles Street",
      "from": {
        "px": [
          950,
          573
        ]
      },
      "to": {
        "px": [
          231,
          626
        ]
      },
      "basis": "alignment"
    }
  ]
};
