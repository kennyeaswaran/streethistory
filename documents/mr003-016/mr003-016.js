module.exports = {
  id: "mr003-016",
  title: "Subdivision of Land Known as Block 22 1/2, Part of Hancock's Survey, Los Angeles",
  shortTitle: "Block 22 1/2, Hancock's Survey",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-016.pdf",
  scan: "documents/mr003-016/mr003-016.pdf",
  transcription: null,

  date: { on: "1875-04-09" },   
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
    [1241, 202], [203, 145], [263, 936], [1242, 897]
  ],
  alignment: {
    image: "documents/mr003-016/mr003-016-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.049221, -118.261049], note: "map-tool corner (0,0)" },
      { px: [1713, 0], ll: [34.052266, -118.258177], note: "map-tool corner (1713,0)" },
      { px: [0, 1123], ll: [34.04765, -118.258657], note: "map-tool corner (0,1123)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["6th Street","7th Street","Figueroa Street","Flower Street","Wilshire Boulevard"],

  rows: [
    {
      "kind": "state",
      "asWritten": "SIXTH STR.",
      "street": "6th Street",
      "from": {
        "px": [
          1155,
          197
        ]
      },
      "to": {
        "px": [
          1140,
          901
        ]
      },
      "basis": "alignment",
      "note": "The modern 6th Street trace follows the roadway lettered SIXTH STR. along the eastern side of the subdivision.",
      "name": "sixth-street"
    },
    {
      "kind": "state",
      "asWritten": "SEVENTH STR.",
      "street": "7th Street",
      "from": {
        "px": [
          284,
          149
        ]
      },
      "to": {
        "px": [
          329,
          933
        ]
      },
      "basis": "alignment",
      "note": "The modern 7th Street trace follows the roadway lettered SEVENTH STR. along the western side.",
      "name": "seventh-street"
    },
    {
      "kind": "state",
      "asWritten": "PEARL STR.",
      "street": "Figueroa Street",
      "from": {
        "px": [
          1241,
          291
        ]
      },
      "to": {
        "px": [
          214,
          288
        ]
      },
      "basis": "alignment",
      "note": "The modern Figueroa Street trace follows the northern roadway lettered PEARL STR.",
      "name": "pearl"
    },
    {
      "kind": "state",
      "asWritten": "FLOWER STR.",
      "street": "Flower Street",
      "from": {
        "px": [
          1242,
          795
        ]
      },
      "to": {
        "px": [
          253,
          801
        ]
      },
      "basis": "alignment",
      "note": "The modern Flower Street trace follows the southern roadway lettered FLOWER STR.",
      "name": "flower"
    },
    {
      "kind": "absent",
      "street": "Wilshire Boulevard",
      "from": {
        "px": [
          699,
          172
        ]
      },
      "to": {
        "px": [
          706,
          918
        ]
      },
      "note": "Modern Wilshire crosses the interiors of both numbered blocks; the only east-west corridor through the subdivision is the offset Part Lane."
    },
    {
      "kind": "vanished",
      "asWritten": "PARK LANE",
      "trace": [
        [
          350,
          548
        ],
        [
          1098,
          548
        ]
      ],
      "basis": "alignment",
      "note": "The central lane is drawn as a corridor between the two blocks, but no supplied modern street follows it.",
      "name": "park-lane"
    }
  ]
};
