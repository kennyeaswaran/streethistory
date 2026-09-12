module.exports = {
  id: "mr003-569",
  title: "Map of Nichols Addition to West Los Angeles",
  shortTitle: "Nichols Addition",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-569.pdf",
  scan: "documents/mr003-569/mr003-569.pdf",
  transcription: null,

  date: { on: "1878-05-04" },   
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
    [255, 736], [364, 1022], [1480, 1014], [1617, 369],
    [349, 667]
  ],
  alignment: {
    image: "documents/mr003-569/mr003-569-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.047946, -118.269661], note: "map-tool corner (0,0)" },
      { px: [1757, 0], ll: [34.055815, -118.262241], note: "map-tool corner (1757,0)" },
      { px: [0, 1115], ll: [34.044017, -118.263677], note: "map-tool corner (0,1115)" }
    ]
  },

  // The polygon strays onto these; the document does not inform about them.
  // NOT the same as a absent row, which says the sheet covers the ground and
  // draws nothing there (MODEL-SPEC §4.4, §5.2).
  coverageExcept: [{"street":"8th Street","from":null,"to":"Francisco Street"},{"street":"Fremont Avenue","from":"6th Street","to":"6th Street"},{"street":"Fremont Avenue","from":null,"to":"6th Street"},{"street":"Harbor Freeway","from":null,"to":"7th Street"},{"street":"Harbor Freeway","from":null,"to":"7th Street"},{"street":"Harbor Freeway","from":null,"to":"7th Street"},{"street":"Harbor Freeway","from":null,"to":"7th Street"}],

  sweptFully: false,
  sweptFor: [],

  rows: [
    {
      "kind": "absent",
      "street": "5th Street",
      "from": "6th Street",
      "to": {
        "px": [
          1590,
          494
        ]
      },
      "note": "The short modern 5th Street branch lies east of the Ward St. corridor and does not follow a roadway shown on the map."
    },
    {
      "kind": "absent",
      "street": "6th Street",
      "from": {
        "px": [
          1559,
          383
        ]
      },
      "to": {
        "px": [
          1581,
          538
        ]
      },
      "note": "The northern modern 6th Street branch lies just east of Ward St.; it does not track that corridor's middle."
    },
    {
      "kind": "absent",
      "street": "6th Street",
      "from": {
        "px": [
          1546,
          702
        ]
      },
      "to": "Figueroa Street",
      "note": "West of Figueroa, modern 6th Street curves through blank land and parcel interiors rather than a drawn roadway."
    },
    {
      "kind": "state",
      "asWritten": "6TH ST",
      "street": "6th Street",
      "from": "Figueroa Street",
      "to": {
        "px": [
          1407,
          1015
        ]
      },
      "basis": "alignment",
      "note": "Immediately east of Pearl St., the modern trace enters the short roadway lettered 6TH ST at the coverage edge.",
      "name": "sixth-street"
    },
    {
      "kind": "state",
      "asWritten": "SEVENTH ST",
      "street": "7th Street",
      "from": {
        "px": [
          949,
          526
        ]
      },
      "to": {
        "px": [
          1084,
          1017
        ]
      },
      "basis": "alignment",
      "note": "The modern 7th Street centerline follows the slanting roadway lettered SEVENTH ST.",
      "name": "seventh-street"
    },
    {
      "kind": "state",
      "asWritten": "RUBY ST",
      "street": "8th Place",
      "from": {
        "px": [
          487,
          716
        ]
      },
      "to": {
        "px": [
          518,
          975
        ]
      },
      "basis": "alignment",
      "note": "The modern 8th Place trace follows the roadway lettered TRUBY ST.",
      "name": "ruby-st"
    },
    {
      "kind": "state",
      "asWritten": "EIGHTH ST",
      "street": "8th Street",
      "from": "Francisco Street",
      "to": {
        "px": [
          763,
          1019
        ]
      },
      "basis": "alignment",
      "note": "The modern 8th Street trace follows the roadway lettered EIGHTH ST.",
      "name": "eighth-street"
    },
    {
      "kind": "absent",
      "street": "9th Street",
      "from": "Figueroa Street",
      "to": {
        "px": [
          418,
          1022
        ]
      },
      "note": "The small modern 9th Street segment at the southern coverage edge does not follow a roadway drawn on this map."
    },
    {
      "kind": "absent",
      "street": "Beaudry Avenue",
      "from": {
        "px": [
          1565,
          614
        ]
      },
      "to": {
        "px": [
          1129,
          519
        ]
      },
      "note": "Modern Beaudry curves across parcel 9 and other property interiors, only crossing Loomis St. diagonally."
    },
    {
      "kind": "state",
      "asWritten": "PEARL ST",
      "street": "Figueroa Street",
      "from": {
        "px": [
          1490,
          969
        ]
      },
      "to": {
        "px": [
          346,
          975
        ]
      },
      "basis": "alignment",
      "note": "The modern Figueroa Street trace follows the long roadway lettered PEARL ST.",
      "name": "pearl"
    },
    {
      "kind": "absent",
      "street": "Francisco Street",
      "from": "Wilshire Boulevard",
      "to": "7th Street",
      "note": "Between Wilshire and 7th, modern Francisco crosses orchard and parcel interiors with no roadway corridor."
    },
    {
      "kind": "state",
      "asWritten": "MOORE ST",
      "street": "Francisco Street",
      "from": "8th Street",
      "to": {
        "px": [
          330,
          718
        ]
      },
      "basis": "alignment",
      "note": "The southern supplied Francisco segment follows Moore St. from Eighth St. west to the modern James M Wood edge.",
      "name": "moore-st"
    },
    {
      "kind": "absent",
      "street": "Fremont Avenue",
      "from": {
        "px": [
          1479,
          817
        ]
      },
      "to": {
        "px": [
          1423,
          854
        ]
      },
      "note": "The second short Fremont branch likewise lies in undivided land rather than a mapped roadway."
    },
    {
      "kind": "absent",
      "street": "Harbor Freeway",
      "from": {
        "px": [
          1550,
          686
        ]
      },
      "to": {
        "px": [
          937,
          529
        ]
      },
      "note": "Both freeway traces cut diagonally through the mapped parcels and orchards; no historical corridor tracks them."
    },
    {
      "kind": "state",
      "asWritten": "NINTH ST",
      "street": "James M Wood Boulevard",
      "from": {
        "px": [
          323,
          686
        ]
      },
      "to": "Figueroa Street",
      "basis": "alignment",
      "note": "The modern James M Wood Boulevard trace follows the roadway lettered NINTH ST.",
      "name": "ninth-street"
    },
    {
      "kind": "absent",
      "street": "Saint Paul Avenue",
      "from": "Wilshire Boulevard",
      "to": "5th Street",
      "note": "Modern Saint Paul follows a parcel boundary toward Ward St., but the map does not draw a two-edged street corridor along it."
    },
    {
      "kind": "state",
      "asWritten": "ORANGE ST",
      "street": "Wilshire Boulevard",
      "from": {
        "px": [
          1213,
          464
        ]
      },
      "to": {
        "px": [
          1234,
          1016
        ]
      },
      "basis": "alignment",
      "note": "The modern Wilshire Boulevard trace follows the roadway originally lettered ORANGE ST; later vacation annotations partly overwrite the label.",
      "name": "orange-st-wilshire"
    },
    {
      "kind": "vanished",
      "asWritten": "MOORE ST",
      "trace": [
        [
          736,
          711
        ],
        [
          990,
          708
        ]
      ],
      "basis": "alignment",
      "note": "Moore St. continues east of the modern Francisco segment to Seventh St., where no modern street survives.",
      "name": "moore-st"
    },
    {
      "kind": "vanished",
      "asWritten": "FLORIDA ST",
      "trace": [
        [
          618,
          705
        ],
        [
          638,
          973
        ]
      ],
      "basis": "alignment",
      "note": "The roadway between Truby St. and Eighth St. has no supplied modern counterpart.",
      "name": "florida-st"
    },
    {
      "kind": "vanished",
      "asWritten": "LOOMIS ST",
      "trace": [
        [
          1225,
          640
        ],
        [
          1430,
          640
        ]
      ],
      "basis": "alignment",
      "note": "The east-west roadway between Orange St. and the tract's eastern side is not followed by a supplied modern street.",
      "name": "loomis-st"
    },
    {
      "kind": "vanished",
      "asWritten": "WARD ST",
      "trace": [
        [
          1534,
          382
        ],
        [
          1554,
          478
        ]
      ],
      "basis": "alignment",
      "note": "Ward St. is drawn as a separate corridor west of the modern 5th and 6th Street branches.",
      "name": "ward-st"
    },
    {
      "kind": "vanished-unnamed",
      "trace": [
        [
          441,
          975
        ],
        [
          445,
          1064
        ]
      ],
      "basis": "alignment"
    },
    {
      "kind": "absent",
      "street": "Harbor Freeway",
      "from": null,
      "to": "7th Street",
      "note": "Added in review: the sheet covers this 39 m and draws no street along it."
    },
    {
      "kind": "absent",
      "street": "Harbor Freeway",
      "from": null,
      "to": "7th Street",
      "note": "Added in review: the sheet covers this 39 m and draws no street along it."
    },
    {
      "kind": "absent",
      "street": "Harbor Freeway",
      "from": null,
      "to": "7th Street",
      "note": "Added in review: the sheet covers this 39 m and draws no street along it."
    }
  ]
};
