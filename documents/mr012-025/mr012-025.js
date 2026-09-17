module.exports = {
  id: "mr012-025",
  title: "Map of Blocks 23, 24 and 25, Angeleno Heights, Los Angeles, Cal.",
  shortTitle: "Angeleno Heights, Blocks 23–25",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR012/MR012-025.pdf",
  scan: "documents/mr012-025/mr012-025.pdf",
  transcription: null,

  date: { on: "1886-11-24" },   
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
    [23, 1308], [1095, 1711], [1157, 807], [695, 197],
    [17, 693]
  ],
  alignment: {
    image: "documents/mr012-025/mr012-025-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.069947, -118.253137], note: "map-tool corner (0,0)" },
      { px: [1108, 0], ll: [34.068471, -118.249751], note: "map-tool corner (1108,0)" },
      { px: [0, 1671], ll: [34.065688, -118.255806], note: "map-tool corner (0,1671)" }
    ]
  },

  // The polygon strays onto these; the document does not inform about them.
  // NOT the same as a absent row, which says the sheet covers the ground and
  // draws nothing there (MODEL-SPEC §4.4, §5.2).
  coverageExcept: [{"street":"Bellevue Avenue","from":null,"to":null}],

  sweptFully: true,
  sweptFor: ["Bellevue Avenue","Bixel Street","Boston Street","Boylston Street","Edgeware Road","Firmin Street","Hollywood Freeway","Kensington Road","Marion Avenue","Santa Ana Freeway","Temple Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "Bellevue Ave",
      "street": "Bellevue Avenue",
      "from": {
        "px": [
          19,
          893
        ]
      },
      "to": {
        "px": [
          1144,
          991
        ]
      },
      "basis": "alignment",
      "name": "bellevue-ave"
    },
    {
      "kind": "absent",
      "street": "Bixel Street",
      "from": {
        "px": [
          458,
          1338
        ]
      },
      "to": {
        "px": [
          458,
          1471
        ]
      },
      "note": "The modern line crosses the interior of Block 24."
    },
    {
      "kind": "state",
      "asWritten": "Cummings ave.",
      "street": "Boston Street",
      "from": {
        "px": [
          150,
          933
        ]
      },
      "to": {
        "px": [
          918,
          1134
        ]
      },
      "basis": "alignment",
      "name": "cummings-ave"
    },
    {
      "kind": "unnamed",
      "street": "Boylston Street",
      "from": {
        "px": [
          1011,
          614
        ]
      },
      "to": {
        "px": [
          932,
          1650
        ]
      },
      "note": "Most of the modern alignment crosses Block 25 rather than a drawn street.",
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "New Cincinnati St",
      "street": "Edgeware Road",
      "from": {
        "px": [
          158,
          590
        ]
      },
      "to": {
        "px": [
          139,
          1352
        ]
      },
      "basis": "alignment",
      "name": "new-cincinnati-st"
    },
    {
      "kind": "absent",
      "street": "Firmin Street",
      "from": {
        "px": [
          642,
          1413
        ]
      },
      "to": {
        "px": [
          640,
          1540
        ]
      },
      "note": "The modern segment crosses the interior of Block 24."
    },
    {
      "kind": "absent",
      "street": "Hollywood Freeway",
      "from": {
        "px": [
          20,
          1026
        ]
      },
      "to": {
        "px": [
          1123,
          1298
        ]
      },
      "note": "The freeway alignment cuts diagonally through the platted blocks."
    },
    {
      "kind": "state",
      "asWritten": "Holliday St",
      "street": "Kensington Road",
      "from": {
        "px": [
          611,
          526
        ]
      },
      "to": {
        "px": [
          611,
          1040
        ]
      },
      "basis": "alignment",
      "name": "holliday-st"
    },
    {
      "kind": "state",
      "asWritten": "Marion Ave",
      "street": "Marion Avenue",
      "from": {
        "px": [
          569,
          505
        ]
      },
      "to": {
        "px": [
          797,
          332
        ]
      },
      "basis": "alignment",
      "name": "marion-ave"
    },
    {
      "kind": "absent",
      "street": "Santa Ana Freeway",
      "from": {
        "px": [
          967,
          1217
        ]
      },
      "to": {
        "px": [
          1126,
          1258
        ]
      },
      "note": "The freeway alignment crosses lot interiors."
    },
    {
      "kind": "state",
      "asWritten": "Temple St",
      "name": "temple",
      "street": "Temple Street",
      "from": {
        "px": [
          22,
          1187
        ]
      },
      "to": {
        "px": [
          1103,
          1600
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "Figueroa St",
      "street": "Boylston Street",
      "from": null,
      "to": null,
      "basis": "alignment",
      "note": "Added in review: the sheet draws and letters this stretch and the AI pass had no row for it.",
      "name": "figueroa-gov"
    },
    {
      "kind": "vanished",
      "asWritten": "Figueroa St",
      "trace": [
        [
          938,
          1358
        ],
        [
          936,
          1099
        ]
      ],
      "basis": "alignment",
      "name": "figueroa-gov"
    },
    {
      "kind": "vanished",
      "asWritten": "Park",
      "trace": [
        [
          756,
          568
        ],
        [
          607,
          298
        ]
      ],
      "basis": "alignment",
      "name": "park-angeleno-hgts"
    }
  ]
};
