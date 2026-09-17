module.exports = {
  id: "mr010-081",
  title: "Map of the Los Angeles Improvement Co's Subdivision of Part of Lot 1, Block 38, Hancock's Survey",
  shortTitle: "Los Angeles Improvement Co. Subdivision",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR010/MR010-081.pdf",
  scan: "documents/mr010-081/mr010-081.pdf",
  transcription: null,

  date: { after: "1886-06-30" },   
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
    [-80, 84], [382, 955], [984, 793], [1648, 152],
    [1622, -102], [99, -74]
  ],
  alignment: {
    image: "documents/mr010-081/mr010-081-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.062302, -118.259578], note: "map-tool corner (0,0)" },
      { px: [1779, 0], ll: [34.058336, -118.255701], note: "map-tool corner (1779,0)" },
      { px: [0, 1100], ll: [34.060302, -118.262517], note: "map-tool corner (0,1100)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["1st Street","2nd Street","Bixel Street","Edgeware Road","Emerald Drive","Emerald Street","Glendale Boulevard","Lucas Avenue","Toluca Street"],

  rows: [
    {
      "kind": "unnamed",
      "street": "1st Street",
      "from": {
        "px": [
          -35,
          168
        ]
      },
      "to": {
        "px": [
          571,
          -83
        ]
      },
      "note": "The covered portions of the modern line do not follow a mapped roadway."
    },
    {
      "kind": "absent",
      "street": "2nd Street",
      "from": {
        "px": [
          191,
          594
        ]
      },
      "to": "Lucas Avenue",
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "Lake Shore Ave",
      "street": "2nd Street",
      "from": "Lucas Avenue",
      "to": {
        "px": [
          1639,
          64
        ]
      },
      "basis": "alignment",
      "name": "lake-shore-ave"
    },
    {
      "kind": "absent",
      "street": "Bixel Street",
      "from": {
        "px": [
          1037,
          -91
        ]
      },
      "to": {
        "px": [
          1111,
          94
        ]
      },
      "note": "No corresponding roadway is shown in the covered fragment."
    },
    {
      "kind": "absent",
      "street": "Edgeware Road",
      "from": {
        "px": [
          676,
          -85
        ]
      },
      "to": {
        "px": [
          740,
          99
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "unnamed",
      "street": "Emerald Drive",
      "from": {
        "px": [
          474,
          806
        ]
      },
      "to": {
        "px": [
          710,
          703
        ]
      },
      "note": "The modern drive follows the tract edge and lot interiors rather than a drawn street."
    },
    {
      "kind": "state",
      "asWritten": "Emerald St",
      "street": "Emerald Street",
      "from": {
        "px": [
          710,
          703
        ]
      },
      "to": {
        "px": [
          1182,
          98
        ]
      },
      "basis": "alignment",
      "name": "emerald"
    },
    {
      "kind": "unnamed",
      "street": "Glendale Boulevard",
      "from": {
        "px": [
          -21,
          32
        ]
      },
      "to": {
        "px": [
          148,
          78
        ]
      },
      "note": "No corresponding roadway is shown in this small covered corner."
    },
    {
      "kind": "state",
      "asWritten": "Lucas Ave",
      "name": "lucas-avenue",
      "street": "Lucas Avenue",
      "from": {
        "px": [
          46,
          84
        ]
      },
      "to": {
        "px": [
          524,
          917
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "absent",
      "street": "Toluca Street",
      "from": {
        "px": [
          365,
          -79
        ]
      },
      "to": {
        "px": [
          409,
          53
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "Brook St",
      "street": "Toluca Street",
      "from": {
        "px": [
          409,
          53
        ]
      },
      "to": {
        "px": [
          673,
          388
        ]
      },
      "basis": "alignment",
      "name": "brook-st"
    },
    {
      "kind": "state",
      "asWritten": "Lake Shore Ave",
      "street": "2nd Street",
      "from": null,
      "to": null,
      "basis": "alignment",
      "note": "Added in review: the sheet draws and letters this stretch and the AI pass had no row for it.",
      "name": "lake-shore-ave"
    },
    {
      "kind": "vanished-unnamed",
      "trace": [
        [
          710,
          703
        ],
        [
          872,
          838
        ]
      ],
      "basis": "alignment"
    },
    {
      "kind": "vanished-unnamed",
      "trace": [
        [
          1517,
          88
        ],
        [
          1605,
          257
        ]
      ],
      "basis": "alignment"
    }
  ]
};
