module.exports = {
  id: "mr011-042",
  title: "Plan of the Goodwin Tract",
  shortTitle: "Goodwin Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR011/MR011-042.pdf",
  scan: "documents/mr011-042/mr011-042.pdf",
  transcription: null,

  date: { on: "1886-10-06" },   
  form: "drawn",
  type: "tract-map",
  attests: "planned-by",
  completeness: "incidental",
  readBy: "human",

  // Coverage is the ground this document informs about — the tract boundary,
  // not the sheet edge (MODEL-SPEC §4.4). SCAN PIXELS against alignment.image,
  // so a better alignment carries it along (§4.6).
  coverage: [
    [168, 648], [139, 1192], [923, 1375], [933, 655]
  ],
  alignment: {
    image: "documents/mr011-042/mr011-042-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.04197, -118.234239], note: "document-tool corner (0,0)" },
      { px: [1111, 0], ll: [34.042596, -118.228467], note: "document-tool corner (1111,0)" },
      { px: [0, 1636], ll: [34.034877, -118.233135], note: "document-tool corner (0,1636)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["6th Street","Imperial Street","Mateo Street","Mesquit Street","Santa Fe Avenue","Willow Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "Sixth St",
      "street": "6th Street",
      "from": {
        "px": [
          156,
          877
        ]
      },
      "to": {
        "px": [
          929,
          921
        ]
      },
      "basis": "alignment",
      "note": "The modern 6th Street trace follows the full east-west roadway lettered Sixth St.",
      "name": "sixth-street"
    },
    {
      "kind": "state",
      "asWritten": "Palm St",
      "street": "Imperial Street",
      "from": null,
      "to": {
        "px": [
          378,
          1248
        ]
      },
      "basis": "alignment",
      "note": "Modern Imperial Street begins at 6th Street within the coverage and follows the roadway lettered Palm St southward.",
      "name": "palm-st-arts-district"
    },
    {
      "kind": "state",
      "asWritten": "Spruce St",
      "street": "Mateo Street",
      "from": {
        "px": [
          188,
          648
        ]
      },
      "to": {
        "px": [
          168,
          1199
        ]
      },
      "basis": "alignment",
      "note": "The modern Mateo Street centerline remains within the complete roadway lettered Spruce St.",
      "name": "spruce"
    },
    {
      "kind": "absent",
      "street": "Mesquit Street",
      "from": "Santa Fe Avenue",
      "to": "6th Street",
      "note": "This modern connecting stretch curves east from Santa Fe through the interiors of lots 69 through 75; the plat draws no roadway along it."
    },
    {
      "kind": "state",
      "asWritten": "Mesquit St",
      "street": "Mesquit Street",
      "from": "6th Street",
      "to": {
        "px": [
          789,
          1344
        ]
      },
      "basis": "alignment",
      "note": "South of 6th Street, the modern Mesquit trace follows the eastern roadway lettered Mesquit St.",
      "name": "mesquit"
    },
    {
      "kind": "state",
      "asWritten": "Tulip St",
      "street": "Santa Fe Avenue",
      "from": {
        "px": [
          607,
          652
        ]
      },
      "to": {
        "px": [
          584,
          1296
        ]
      },
      "basis": "alignment",
      "note": "The modern Santa Fe Avenue centerline follows the complete roadway lettered Tulip St.",
      "name": "tulip"
    },
    {
      "kind": "state",
      "asWritten": "Willow St",
      "street": "Willow Street",
      "from": "Mateo Street",
      "to": "Santa Fe Avenue",
      "basis": "alignment",
      "note": "The supplied modern Willow Street segment follows the western portion of the roadway lettered Willow St.",
      "name": "willow"
    },
    {
      "kind": "vanished",
      "asWritten": "Willow St",
      "trace": [
        [
          607,
          681
        ],
        [
          929,
          694
        ]
      ],
      "basis": "alignment",
      "note": "The labeled Willow St roadway continues east of modern Willow Street's end at Santa Fe Avenue, with no supplied modern counterpart.",
      "name": "willow"
    },
    {
      "kind": "vanished",
      "asWritten": "Mesquit St",
      "trace": [
        [
          798,
          973
        ],
        [
          803,
          906
        ]
      ],
      "basis": "alignment",
      "name": "mesquit"
    }
  ]
};
