module.exports = {
  id: "tr0005-042b",
  title: "E. M. Crow's Replat of Block 6 of Nichols Addition to West Los Angeles and land adjoining on the west",
  shortTitle: "E. M. Crow's Replat",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0005/TR0005-042B.pdf",
  scan: "documents/tr0005-042b/tr0005-042b.pdf",
  transcription: null,

  date: { on: "1904-02" },   
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
    [341, 507], [158, 1741], [686, 1823], [964, 550]
  ],
  alignment: {
    image: "documents/tr0005-042b/tr0005-042b-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.051115, -118.262624], note: "map-tool corner (0,0)" },
      { px: [1155, 0], ll: [34.050592, -118.260802], note: "map-tool corner (1155,0)" },
      { px: [0, 1842], ll: [34.048691, -118.263624], note: "map-tool corner (0,1842)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["7th Street","8th Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "SEVENTH ST.",
      "name": "seventh-street",
      "street": "7th Street",
      "from": {
        "px": [
          329,
          589
        ]
      },
      "to": {
        "px": [
          948,
          622
        ]
      },
      "basis": "alignment",
      "confirmed": true
    },
    {
      "kind": "state",
      "asWritten": "EIGHTH ST.",
      "name": "eighth-street",
      "street": "8th Street",
      "from": {
        "px": [
          186,
          1550
        ]
      },
      "to": {
        "px": [
          716,
          1688
        ]
      },
      "basis": "alignment",
      "confirmed": true
    },
    {
      "kind": "vanished",
      "asWritten": "FRANCISCO ST.",
      "name": "francisco",
      "trace": [
        [
          802,
          708
        ],
        [
          478,
          1738
        ]
      ],
      "basis": "alignment",
      "confirmed": true
    }
  ]
};
