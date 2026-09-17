module.exports = {
  id: "tr0030-086",
  title: "Map of Whiffen Tract",
  shortTitle: "Whiffen Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0030/TR0030-086.pdf",
  scan: "documents/tr0030-086/tr0030-086.pdf",
  transcription: null,

  date: { on: "1915-10" },   
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
    [716, 46], [1522, -82], [1626, 1463], [706, 1440]
  ],
  alignment: {
    image: "documents/tr0030-086/tr0030-086-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.039097, -118.273267], note: "map-tool corner (0,0)" },
      { px: [1746, 0], ll: [34.038243, -118.271248], note: "map-tool corner (1746,0)" },
      { px: [0, 2397], ll: [34.036785, -118.274672], note: "map-tool corner (0,2397)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["17th Street","Delong Street","Georgia Street","Santa Monica Freeway","Venice Boulevard"],

  rows: [
    {
      "kind": "state",
      "asWritten": "17TH STREET",
      "street": "17th Street",
      "from": {
        "px": [
          799,
          1247
        ]
      },
      "to": {
        "px": [
          1613,
          1271
        ]
      },
      "basis": "alignment",
      "name": "seventeenth-street"
    },
    {
      "kind": "absent",
      "street": "Santa Monica Freeway",
      "from": {
        "px": [
          709,
          1036
        ]
      },
      "to": {
        "px": [
          1576,
          716
        ]
      },
      "note": "The freeway alignment crosses the tract lots."
    },
    {
      "kind": "state",
      "asWritten": "16TH STREET",
      "name": "sixteenth-street",
      "street": "Venice Boulevard",
      "from": {
        "px": [
          715,
          251
        ]
      },
      "to": {
        "px": [
          1545,
          266
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "vanished",
      "asWritten": "Georgia Street",
      "trace": [
        [
          1237,
          268
        ],
        [
          1224,
          1467
        ]
      ],
      "basis": "alignment",
      "name": "georgia-bell"
    },
    {
      "kind": "vanished",
      "asWritten": "Seventeenth Street",
      "trace": [
        [
          1162,
          1286
        ],
        [
          687,
          1258
        ]
      ],
      "basis": "alignment",
      "name": "seventeenth-street"
    },
    {
      "kind": "state",
      "asWritten": "Georgia Street",
      "street": "Georgia Street",
      "from": null,
      "to": null,
      "basis": "alignment",
      "note": "Added in review: the sheet draws and letters this stretch and the AI pass had no row for it.",
      "name": "georgia-bell"
    },
    {
      "kind": "state",
      "asWritten": "Delong Street",
      "street": "Delong Street",
      "from": null,
      "to": null,
      "basis": "alignment",
      "note": "Added in review: the sheet draws and letters this stretch and the AI pass had no row for it.",
      "name": "delong-street"
    }
  ]
};
