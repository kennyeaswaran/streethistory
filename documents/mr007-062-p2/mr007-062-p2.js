module.exports = {
  id: "mr007-062-p2",
  title: "Map of a Portion of Los Angeles",
  shortTitle: "New Depot Street subdivision",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR007/MR007-062.pdf",
  scan: "documents/mr007-062-p2/mr007-062-p2.pdf",
  transcription: null,

  date: { on: "1885" },   
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
    [1152, 1], [69, -110], [52, 1593], [1158, 1554]
  ],
  alignment: {
    image: "documents/mr007-062-p2/mr007-062-p2-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.063718, -118.245907], note: "map-tool corner (0,0)" },
      { px: [1120, 0], ll: [34.066676, -118.24441], note: "map-tool corner (1120,0)" },
      { px: [0, 1600], ll: [34.061934, -118.240843], note: "map-tool corner (0,1600)" }
    ]
  },

  // The polygon strays onto these; the document does not inform about them.
  // NOT the same as a absent row, which says the sheet covers the ground and
  // draws nothing there (MODEL-SPEC §4.4, §5.2).
  coverageExcept: [{"street":"Adobe Street","from":null,"to":null},{"street":"Chavez Ravine Place","from":null,"to":null},{"street":"Yale Street","from":null,"to":null}],

  sweptFully: true,
  sweptFor: ["Adobe Street","Alpine Street","Arroyo Seco Parkway","Bunker Hill Avenue","Chavez Ravine Place","Cleveland Street","College Street","Figueroa Street","Figueroa Terrace","Grand Avenue","Hill Place","New Depot Street","Yale Street"],

  rows: [
    {
      "kind": "absent",
      "street": "Alpine Street",
      "from": {
        "px": [
          382,
          -78
        ]
      },
      "to": "Figueroa Street",
      "note": "The modern line crosses the old lots and several transverse streets."
    },
    {
      "kind": "state",
      "street": "Alpine Street",
      "from": "Figueroa Street",
      "to": {
        "px": [
          409,
          1580
        ]
      },
      "note": "The modern line crosses the old lots and several transverse streets.",
      "basis": "alignment",
      "asWritten": "Virgin St",
      "name": "virgin"
    },
    {
      "kind": "absent",
      "street": "Arroyo Seco Parkway",
      "from": {
        "px": [
          334,
          -83
        ]
      },
      "to": {
        "px": [
          1155,
          764
        ]
      },
      "note": "The parkway alignment cuts diagonally through the subdivision."
    },
    {
      "kind": "state",
      "asWritten": "Montreal St",
      "street": "Bunker Hill Avenue",
      "from": {
        "px": [
          63,
          487
        ]
      },
      "to": {
        "px": [
          873,
          923
        ]
      },
      "basis": "alignment",
      "name": "montreal-st"
    },
    {
      "kind": "state",
      "asWritten": "Cleveland St",
      "street": "Cleveland Street",
      "from": {
        "px": [
          1045,
          1193
        ]
      },
      "to": {
        "px": [
          180,
          1182
        ]
      },
      "basis": "alignment",
      "name": "cleveland-st"
    },
    {
      "kind": "state",
      "asWritten": "College St",
      "name": "college",
      "street": "College Street",
      "from": {
        "px": [
          1037,
          -11
        ]
      },
      "to": {
        "px": [
          1045,
          1558
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "Pearl St",
      "name": "pearl",
      "street": "Figueroa Street",
      "from": {
        "px": [
          195,
          68
        ]
      },
      "to": {
        "px": [
          67,
          61
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "street": "Figueroa Terrace",
      "from": {
        "px": [
          1152,
          118
        ]
      },
      "to": "New Depot Street",
      "note": "The modern terrace crosses lot interiors.",
      "basis": "alignment",
      "name": "pearl",
      "asWritten": "Pearl St"
    },
    {
      "kind": "state",
      "street": "Grand Avenue",
      "from": {
        "px": [
          218,
          698
        ]
      },
      "to": {
        "px": [
          60,
          771
        ]
      },
      "basis": "alignment",
      "note": "The boundary roadway is drawn, but the lettering is not legible on this page.",
      "asWritten": "Philadelphia St",
      "name": "philadelphia-st"
    },
    {
      "kind": "state",
      "asWritten": "Rosas St",
      "street": "Hill Place",
      "from": {
        "px": [
          314,
          905
        ]
      },
      "to": {
        "px": [
          57,
          1045
        ]
      },
      "basis": "alignment",
      "name": "rosas-street"
    },
    {
      "kind": "absent",
      "street": "New Depot Street",
      "from": {
        "px": [
          192,
          306
        ]
      },
      "to": "Arroyo Seco Parkway",
      "basis": "alignment",
      "note": "A curving roadway is drawn, but the label along this particular alignment is not securely legible."
    },
    {
      "kind": "state",
      "street": "New Depot Street",
      "from": "Arroyo Seco Parkway",
      "to": {
        "px": [
          1046,
          1056
        ]
      },
      "basis": "alignment",
      "note": "A curving roadway is drawn, but the label along this particular alignment is not securely legible.",
      "asWritten": "New Depot St",
      "name": "new-depot-st"
    },
    {
      "kind": "state",
      "asWritten": "Yale St",
      "name": "yale",
      "street": "Yale Street",
      "from": {
        "px": [
          1158,
          1436
        ]
      },
      "to": {
        "px": [
          54,
          1432
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "vanished",
      "asWritten": "New Depot St",
      "trace": [
        [
          686,
          449
        ],
        [
          501,
          -48
        ]
      ],
      "basis": "alignment",
      "name": "new-depot-st"
    },
    {
      "kind": "vanished",
      "asWritten": "Pearl St",
      "trace": [
        [
          599,
          69
        ],
        [
          195,
          66
        ]
      ],
      "basis": "alignment",
      "name": "pearl"
    }
  ]
};
