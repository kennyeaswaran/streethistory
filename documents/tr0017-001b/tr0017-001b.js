module.exports = {
  id: "tr0017-001b",
  title: "Tract No. 520",
  shortTitle: "Tract No. 520",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0017/TR0017-001b.pdf",
  scan: "documents/tr0017-001b/tr0017-001b.pdf",
  transcription: null,

  date: { on: "1910-06" },   
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
    [24, 410], [94, 1551], [911, 1617], [1286, 770]
  ],
  alignment: {
    image: "documents/tr0017-001b/tr0017-001b-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.050784, -118.24215], note: "map-tool corner (0,0)" },
      { px: [1182, 0], ll: [34.050628, -118.240588], note: "map-tool corner (1182,0)" },
      { px: [0, 1730], ll: [34.048876, -118.242423], note: "map-tool corner (0,1730)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["2nd Street","Astronaut Ellison S Onizuka Street","San Pedro Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "SECOND ST.",
      "name": "second-street",
      "street": "2nd Street",
      "from": {
        "px": [
          65,
          1077
        ]
      },
      "to": {
        "px": [
          930,
          1573
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "WILMINGTON ST.",
      "street": "Astronaut Ellison S Onizuka Street",
      "from": {
        "px": [
          217,
          465
        ]
      },
      "to": {
        "px": [
          349,
          1127
        ]
      },
      "basis": "alignment",
      "name": "wilmington-street"
    },
    {
      "kind": "state",
      "asWritten": "SAN PEDRO ST.",
      "name": "san-pedro",
      "street": "San Pedro Street",
      "from": {
        "px": [
          767,
          622
        ]
      },
      "to": {
        "px": [
          390,
          1575
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "vanished",
      "asWritten": "Woodworth Court",
      "trace": [
        [
          712,
          1439
        ],
        [
          883,
          1183
        ]
      ],
      "basis": "alignment",
      "name": "woodworth-court"
    }
  ]
};
