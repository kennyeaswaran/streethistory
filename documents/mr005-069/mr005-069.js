module.exports = {
  id: "mr005-069",
  title: "Subdivision Map of Lot 8, Block 35, Hancock Survey",
  shortTitle: "Lot 8, Block 35, Hancock Survey",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-069.pdf",
  scan: "documents/mr005-069/mr005-069.pdf",
  transcription: null,

  date: { on: "1883-01-25" },   
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
    [1092, 1244], [1097, 327], [397, 467], [371, 927],
    [244, 1032], [279, 1172]
  ],
  alignment: {
    image: "documents/mr005-069/mr005-069-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.068516, -118.258393], note: "map-tool corner (0,0)" },
      { px: [1146, 0], ll: [34.065479, -118.251398], note: "map-tool corner (1146,0)" },
      { px: [0, 1786], ll: [34.059422, -118.264068], note: "map-tool corner (0,1786)" }
    ]
  },

  // The polygon strays onto these; the document does not inform about them.
  // NOT the same as a absent row, which says the sheet covers the ground and
  // draws nothing there (MODEL-SPEC §4.4, §5.2).
  coverageExcept: [{"street":"Lucas Avenue","from":null,"to":null}],

  sweptFully: true,
  sweptFor: ["1st Street","2nd Street","Bixel Street","Boylston Street","Colton Street","Court Street","Douglas Street","Edgeware Road","Firmin Street","Glendale Boulevard","Lucas Avenue","Toluca Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "DIAMOND STREET",
      "street": "1st Street",
      "from": {
        "px": [
          263,
          1110
        ]
      },
      "to": {
        "px": [
          1093,
          1122
        ]
      },
      "basis": "alignment",
      "name": "diamond-street"
    },
    {
      "kind": "unnamed",
      "street": "2nd Street",
      "from": {
        "px": [
          389,
          1114
        ]
      },
      "to": {
        "px": [
          598,
          1200
        ]
      },
      "note": "The modern fragments cross the tract edge and lot ground without following a roadway."
    },
    {
      "kind": "absent",
      "street": "Bixel Street",
      "from": {
        "px": [
          788,
          389
        ]
      },
      "to": "1st Street",
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "FIGUEROA STREET",
      "street": "Boylston Street",
      "from": {
        "px": [
          1025,
          341
        ]
      },
      "to": "Colton Street",
      "basis": "alignment",
      "name": "figueroa-gov"
    },
    {
      "kind": "state",
      "asWritten": "STATE STREET",
      "street": "Colton Street",
      "from": {
        "px": [
          381,
          744
        ]
      },
      "to": "Boylston Street",
      "basis": "alignment",
      "name": "state-colton"
    },
    {
      "kind": "state",
      "asWritten": "COURT STREET",
      "street": "Court Street",
      "from": {
        "px": [
          391,
          574
        ]
      },
      "to": "Boylston Street",
      "basis": "alignment",
      "name": "court-street"
    },
    {
      "kind": "absent",
      "street": "Douglas Street",
      "from": {
        "px": [
          376,
          839
        ]
      },
      "to": {
        "px": [
          530,
          1063
        ]
      },
      "note": "The diagonal crosses lots rather than a roadway."
    },
    {
      "kind": "absent",
      "street": "Edgeware Road",
      "from": {
        "px": [
          628,
          421
        ]
      },
      "to": "Court Street",
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "ALABAMA STREET",
      "street": "Edgeware Road",
      "from": "Court Street",
      "to": {
        "px": [
          675,
          1207
        ]
      },
      "basis": "alignment",
      "name": "alabama-street"
    },
    {
      "kind": "absent",
      "street": "Firmin Street",
      "from": {
        "px": [
          879,
          371
        ]
      },
      "to": {
        "px": [
          877,
          485
        ]
      }
    },
    {
      "kind": "unnamed",
      "street": "Glendale Boulevard",
      "from": {
        "px": [
          293,
          992
        ]
      },
      "to": "2nd Street"
    },
    {
      "kind": "state",
      "street": "Toluca Street",
      "from": {
        "px": [
          517,
          1161
        ]
      },
      "to": "Court Street",
      "basis": "alignment",
      "note": "A north-south corridor is drawn between the blocks without a legible name.",
      "asWritten": "Virginia St",
      "name": "virginia-st-angeleno-hgts"
    },
    {
      "kind": "absent",
      "street": "Bixel Street",
      "from": null,
      "to": "Colton Street",
      "note": "Added in review: the sheet covers this 107 m and draws no street along it."
    },
    {
      "kind": "state",
      "asWritten": "Alabama Street",
      "street": "Edgeware Road",
      "from": null,
      "to": null,
      "basis": "alignment",
      "note": "Added in review: the sheet draws and letters this stretch and the AI pass had no row for it.",
      "name": "alabama-street"
    },
    {
      "kind": "vanished",
      "asWritten": "Alabama Street",
      "trace": [
        [
          681,
          817
        ],
        [
          677,
          1133
        ]
      ],
      "basis": "alignment",
      "name": "alabama-street"
    },
    {
      "kind": "vanished",
      "asWritten": "Ohio Street",
      "trace": [
        [
          849,
          742
        ],
        [
          844,
          1116
        ]
      ],
      "basis": "alignment",
      "name": "ohio-street"
    },
    {
      "kind": "state",
      "asWritten": "Ohio Street",
      "street": "Bixel Street",
      "from": "1st Street",
      "to": null,
      "basis": "alignment",
      "note": "Added in review: the sheet draws and letters this stretch and the AI pass had no row for it.",
      "name": "ohio-street"
    },
    {
      "kind": "vanished",
      "asWritten": "Figueroa Street",
      "trace": [
        [
          1023,
          740
        ],
        [
          1023,
          1229
        ]
      ],
      "basis": "alignment",
      "name": "figueroa-gov"
    }
  ]
};
