module.exports = {
  id: "12685",
  title: "Map of the Mott Tract, Subdivided & Surveyed 1868 & 1869 by H. Pickel",
  shortTitle: "Mott Tract (Pickel survey)",
  url: "https://hdl.huntington.org/digital/collection/p15150coll4/id/12685",
  scan: "documents/12685/12685.jpg",
  transcription: null,

  date: { before: "1869-03-02" },   
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
    [5260, 565], [4966, 3818], [1374, 3769], [509, 636]
  ],
  alignment: {
    image: "documents/12685/12685.jpg",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.052267, -118.259976], note: "map-tool corner (0,0)" },
      { px: [6000, 0], ll: [34.063172, -118.249505], note: "map-tool corner (6000,0)" },
      { px: [0, 4774], ll: [34.045316, -118.249576], note: "map-tool corner (0,4774)" }
    ]
  },

  // The polygon strays onto these; the document does not inform about them.
  // NOT the same as a absent row, which says the sheet covers the ground and
  // draws nothing there (MODEL-SPEC §4.4, §5.2).
  coverageExcept: [{"street":"5th Street","from":null,"to":null},{"street":"Diamond Street","from":null,"to":null},{"street":"Fremont Avenue","from":null,"to":null},{"street":"Marketplace","from":{"px":[4142,3807]},"to":{"px":[4085,3806]}}],

  sweptFully: true,
  sweptFor: ["1st Street","2nd Place","2nd Street","2nd Street Tunnel","3rd Street","4th Street","5th Street","Broadway","Community Terrace","Dewap Road","Diamond Street","Figueroa Street","Flower Street","Fremont Avenue","General Thaddeus Kosciuszko Way","Grand Avenue","Grand Avenue Lower Level","Hill Street","Hope Place","Hope Street","Jerry Moss Plaza","Marketplace","Metro Red/Purple Lines Entrance","Olive Court","Olive Street","Temple Street","West Bank Plaza at The Broad"],

  rows: [
    {
      "kind": "state",
      "asWritten": "FIRST STREET",
      "street": "1st Street",
      "from": {
        "px": [
          3631,
          589
        ]
      },
      "to": {
        "px": [
          3694,
          3801
        ]
      },
      "basis": "alignment",
      "note": "The modern line follows the historical roadway despite small local displacement from folds in the sheet.",
      "name": "first-street"
    },
    {
      "kind": "absent",
      "street": "2nd Place",
      "from": {
        "px": [
          2795,
          1469
        ]
      },
      "to": {
        "px": [
          2670,
          1760
        ]
      },
      "note": "The modern short segment crosses a historical lot interior; no separate roadway is drawn."
    },
    {
      "kind": "state",
      "asWritten": "SECOND STREET",
      "street": "2nd Street",
      "from": {
        "px": [
          2963,
          599
        ]
      },
      "to": {
        "px": [
          3023,
          3791
        ]
      },
      "basis": "alignment",
      "note": "The surface street follows the roadway lettered SECOND STREET across the covered tract.",
      "name": "second-street"
    },
    {
      "kind": "state",
      "asWritten": "SECOND STREET",
      "street": "2nd Street Tunnel",
      "from": {
        "px": [
          2967,
          918
        ]
      },
      "to": {
        "px": [
          3006,
          2966
        ]
      },
      "basis": "alignment",
      "note": "The later tunnel occupies the same historical SECOND STREET corridor; the sheet predates and does not distinguish the tunnel structure.",
      "name": "second-street"
    },
    {
      "kind": "state",
      "asWritten": "THIRD STREET",
      "street": "3rd Street",
      "from": {
        "px": [
          2190,
          611
        ]
      },
      "to": {
        "px": [
          2243,
          3781
        ]
      },
      "basis": "alignment",
      "name": "third-street"
    },
    {
      "kind": "state",
      "asWritten": "FOURTH STREET",
      "street": "4th Street",
      "from": {
        "px": [
          1330,
          624
        ]
      },
      "to": {
        "px": [
          1461,
          3770
        ]
      },
      "basis": "alignment",
      "note": "The modern line follows the lettered roadway; modest bends and offsets are consistent with the visibly wrinkled paper.",
      "name": "fourth-street"
    },
    {
      "kind": "state",
      "asWritten": "FORT STREET",
      "street": "Broadway",
      "from": {
        "px": [
          4981,
          3650
        ]
      },
      "to": {
        "px": [
          1356,
          3703
        ]
      },
      "basis": "alignment",
      "note": "Modern Broadway follows the roadway lettered FORT STREET.",
      "name": "fort-street"
    },
    {
      "kind": "state",
      "asWritten": "COURT HOUSE STREET",
      "street": "Community Terrace",
      "from": "Hill Street",
      "to": "Broadway",
      "basis": "alignment",
      "note": "The modern terrace occupies the former Court House Street corridor between Hill and Fort/Broadway; the scan's folds account for the small local offset.",
      "name": "court-house-street"
    },
    {
      "kind": "absent",
      "street": "Dewap Road",
      "from": "1st Street",
      "to": "Temple Street",
      "note": "The modern diagonal crosses the interiors of historical blocks W and V; no roadway is drawn along it."
    },
    {
      "kind": "absent",
      "street": "Figueroa Street",
      "from": {
        "px": [
          5201,
          1215
        ]
      },
      "to": "Diamond Street",
      "basis": "alignment",
      "note": "Modern Figueroa follows the historical roadway lettered GRASSHOPPER STREET; the varying pixel offset follows visible paper distortion rather than a different corridor."
    },
    {
      "kind": "state",
      "asWritten": "GRASSHOPPER STREET",
      "street": "Figueroa Street",
      "from": "Diamond Street",
      "to": {
        "px": [
          553,
          796
        ]
      },
      "basis": "alignment",
      "note": "Modern Figueroa follows the historical roadway lettered GRASSHOPPER STREET; the varying pixel offset follows visible paper distortion rather than a different corridor.",
      "name": "chapules"
    },
    {
      "kind": "absent",
      "street": "Flower Street",
      "from": {
        "px": [
          3219,
          1757
        ]
      },
      "to": {
        "px": [
          2230,
          1241
        ]
      },
      "basis": "alignment",
      "note": "The modern line follows the historical FLOWER STREET roadway, allowing for the scan's local folds and wrinkling."
    },
    {
      "kind": "state",
      "asWritten": "FLOWER STREET",
      "street": "Flower Street",
      "from": {
        "px": [
          2230,
          1241
        ]
      },
      "to": {
        "px": [
          685,
          1275
        ]
      },
      "basis": "alignment",
      "note": "The modern line follows the historical FLOWER STREET roadway, allowing for the scan's local folds and wrinkling.",
      "name": "flower"
    },
    {
      "kind": "absent",
      "street": "General Thaddeus Kosciuszko Way",
      "from": {
        "px": [
          2670,
          1760
        ]
      },
      "to": {
        "px": [
          2700,
          2703
        ]
      },
      "note": "The modern way cuts through historical blocks between HOPE and OLIVE and only crosses CHARITY; no street follows its alignment."
    },
    {
      "kind": "state",
      "asWritten": "CHARITY STREET",
      "street": "Grand Avenue",
      "from": {
        "px": [
          5112,
          2201
        ]
      },
      "to": {
        "px": [
          954,
          2248
        ]
      },
      "basis": "alignment",
      "note": "Modern Grand Avenue follows the historical roadway lettered CHARITY STREET.",
      "name": "charity"
    },
    {
      "kind": "state",
      "asWritten": "CHARITY STREET",
      "street": "Grand Avenue Lower Level",
      "from": {
        "px": [
          2964,
          2237
        ]
      },
      "to": {
        "px": [
          1432,
          2245
        ]
      },
      "basis": "alignment",
      "note": "The modern lower-level roadway occupies the same historical CHARITY STREET corridor on this covered stretch.",
      "name": "charity"
    },
    {
      "kind": "state",
      "asWritten": "HILL STREET",
      "street": "Hill Street",
      "from": {
        "px": [
          5020,
          3218
        ]
      },
      "to": {
        "px": [
          1221,
          3213
        ]
      },
      "basis": "alignment",
      "name": "hill-street-downtown"
    },
    {
      "kind": "absent",
      "street": "Hope Place",
      "from": "Hope Street",
      "to": "Grand Avenue",
      "note": "The modern short street lies along and within a historical block between HOPE and CHARITY; no separate roadway is drawn."
    },
    {
      "kind": "state",
      "asWritten": "HOPE STREET",
      "street": "Hope Street",
      "from": {
        "px": [
          5048,
          1703
        ]
      },
      "to": {
        "px": [
          1042,
          1760
        ]
      },
      "basis": "alignment",
      "name": "hope"
    },
    {
      "kind": "absent",
      "street": "Jerry Moss Plaza",
      "from": "Hope Street",
      "to": "Grand Avenue",
      "basis": "alignment",
      "note": "The plaza's east-west axis occupies the historical COURT HOUSE STREET corridor between HOPE and CHARITY/Grand; the paper fold produces a modest local displacement."
    },
    {
      "kind": "absent",
      "street": "Metro Red/Purple Lines Entrance",
      "from": "1st Street",
      "to": "Hill Street",
      "note": "The modern entrance loop lies inside the historical block adjoining FIRST and HILL rather than on a drawn roadway."
    },
    {
      "kind": "state",
      "asWritten": "OLIVE STREET",
      "street": "Olive Court",
      "from": {
        "px": [
          4181,
          2660
        ]
      },
      "to": {
        "px": [
          4366,
          2713
        ]
      },
      "basis": "alignment",
      "note": "The covered portion of modern Olive Court lies within the broad historical OLIVE STREET corridor.",
      "name": "olive"
    },
    {
      "kind": "state",
      "asWritten": "OLIVE STREET",
      "street": "Olive Street",
      "from": {
        "px": [
          3668,
          2697
        ]
      },
      "to": {
        "px": [
          1087,
          2729
        ]
      },
      "basis": "alignment",
      "name": "olive"
    },
    {
      "kind": "state",
      "asWritten": "TEMPLE STREET",
      "street": "Temple Street",
      "from": {
        "px": [
          5229,
          565
        ]
      },
      "to": {
        "px": [
          4801,
          3816
        ]
      },
      "basis": "alignment",
      "note": "The modern line follows the historical TEMPLE STREET boundary roadway, allowing for local paper distortion.",
      "name": "temple"
    },
    {
      "kind": "absent",
      "street": "West Bank Plaza at The Broad",
      "from": "Hope Street",
      "to": "Grand Avenue",
      "note": "The modern plaza loop lies within a historical block between HOPE and CHARITY; no roadway is drawn along it."
    },
    {
      "kind": "state",
      "asWritten": "Second Street",
      "street": "2nd Street",
      "from": null,
      "to": null,
      "basis": "alignment",
      "note": "Added in review: the sheet draws and letters this stretch and the AI pass had no row for it.",
      "name": "second-street"
    },
    {
      "kind": "state",
      "asWritten": "Third Street",
      "street": "3rd Street",
      "from": null,
      "to": null,
      "basis": "alignment",
      "note": "Added in review: the sheet draws and letters this stretch and the AI pass had no row for it.",
      "name": "third-street"
    },
    {
      "kind": "state",
      "asWritten": "Fourth Street",
      "street": "4th Street",
      "from": null,
      "to": null,
      "basis": "alignment",
      "note": "Added in review: the sheet draws and letters this stretch and the AI pass had no row for it.",
      "name": "fourth-street"
    },
    {
      "kind": "state",
      "asWritten": "Court House Street",
      "street": "Community Terrace",
      "from": {
        "px": [
          4315,
          3498
        ]
      },
      "to": {
        "px": [
          4335,
          3326
        ]
      },
      "basis": "alignment",
      "note": "Added in review: the sheet draws and letters this stretch and the AI pass had no row for it.",
      "name": "court-house-street"
    },
    {
      "kind": "vanished",
      "asWritten": "Grasshopper Street",
      "trace": [
        [
          3954,
          756
        ],
        [
          5183,
          723
        ]
      ],
      "basis": "alignment",
      "name": "chapules"
    },
    {
      "kind": "state",
      "asWritten": "Charity Street",
      "street": "Grand Avenue",
      "from": "West Bank Plaza at The Broad",
      "to": {
        "px": [
          1385,
          2248
        ]
      },
      "basis": "alignment",
      "note": "Added in review: the sheet draws and letters this stretch and the AI pass had no row for it.",
      "name": "charity"
    },
    {
      "kind": "state",
      "asWritten": "Hill Street",
      "street": "Hill Street",
      "from": {
        "px": [
          2010,
          3199
        ]
      },
      "to": {
        "px": [
          1836,
          3197
        ]
      },
      "basis": "alignment",
      "note": "Added in review: the sheet draws and letters this stretch and the AI pass had no row for it.",
      "name": "hill-street-downtown"
    },
    {
      "kind": "state",
      "street": "Hope Street",
      "from": null,
      "to": "1st Street",
      "note": "Added in review: the sheet covers this 214 m and draws no street along it.",
      "basis": "alignment",
      "asWritten": "Hope Street",
      "name": "hope"
    },
    {
      "kind": "state",
      "street": "Hope Street",
      "from": "1st Street",
      "to": "Flower Street",
      "note": "Added in review: the sheet covers this 214 m and draws no street along it.",
      "basis": "alignment",
      "asWritten": "Hope Street",
      "name": "hope"
    },
    {
      "kind": "state",
      "street": "Hope Street",
      "from": "Flower Street",
      "to": null,
      "note": "Added in review: the sheet covers this 214 m and draws no street along it.",
      "basis": "alignment",
      "asWritten": "Hope Street",
      "name": "hope"
    },
    {
      "kind": "absent",
      "street": "Jerry Moss Plaza",
      "from": {
        "px": [
          4289,
          2034
        ]
      },
      "to": {
        "px": [
          4316,
          1806
        ]
      },
      "note": "Added in review: the sheet covers this 137 m and draws no street along it."
    },
    {
      "kind": "state",
      "asWritten": "Olive Street",
      "street": "Olive Court",
      "from": {
        "px": [
          4366,
          2713
        ]
      },
      "to": {
        "px": [
          4181,
          2660
        ]
      },
      "basis": "alignment",
      "note": "Added in review: the sheet draws and letters this stretch and the AI pass had no row for it.",
      "name": "olive"
    },
    {
      "kind": "absent",
      "street": "West Bank Plaza at The Broad",
      "from": {
        "px": [
          2728,
          2155
        ]
      },
      "to": {
        "px": [
          2721,
          1904
        ]
      },
      "note": "Added in review: the sheet covers this 65 m and draws no street along it."
    },
    {
      "kind": "vanished",
      "asWritten": "Flower Street",
      "trace": [
        [
          2253,
          1232
        ],
        [
          5231,
          1196
        ]
      ],
      "basis": "alignment",
      "name": "flower"
    },
    {
      "kind": "vanished",
      "asWritten": "Court House Street",
      "trace": [
        [
          4228,
          741
        ],
        [
          4317,
          3654
        ]
      ],
      "basis": "alignment",
      "name": "court-house-street"
    }
  ]
};
