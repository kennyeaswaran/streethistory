module.exports = {
  id: "mr005-566",
  title: "Plat of Subdivision of a Portion of Lot 1, Block 37, Hancock's Survey, Los Angeles City, Made at the Request of the Vestry of St. Paul's P.E. Church",
  shortTitle: "St. Paul's P.E. Church Subdivision",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-566.pdf",
  scan: "documents/mr005-566/mr005-566.pdf",
  transcription: null,

  date: { on: "1889-05-09" },   
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
    [-26, 163], [-20, 869], [911, 990], [979, 522],
    [1298, 263], [867, 33]
  ],
  alignment: {
    image: "documents/mr005-566/mr005-566-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.053167, -118.263721], note: "map-tool corner (0,0)" },
      { px: [1718, 0], ll: [34.051148, -118.258262], note: "map-tool corner (1718,0)" },
      { px: [0, 1119], ll: [34.0502, -118.265297], note: "map-tool corner (0,1119)" }
    ]
  },

  // The polygon strays onto these; the document does not inform about them.
  // NOT the same as a absent row, which says the sheet covers the ground and
  // draws nothing there (MODEL-SPEC §4.4, §5.2).
  coverageExcept: [{"street":"Bixel Street","from":"7th Street","to":null}],

  sweptFully: true,
  sweptFor: ["7th Street","Beaudry Avenue","Bixel Street","Harbor Freeway","Ingraham Street","Saint Paul Avenue","Saint Paul Place","Wilshire Boulevard"],

  rows: [
    {
      "kind": "state",
      "asWritten": "SEVENTH ST.",
      "name": "seventh-street",
      "street": "7th Street",
      "from": {
        "px": [
          -21,
          782
        ]
      },
      "to": {
        "px": [
          941,
          784
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "absent",
      "street": "Beaudry Avenue",
      "from": {
        "px": [
          703,
          441
        ]
      },
      "to": {
        "px": [
          937,
          70
        ]
      },
      "note": "The modern line crosses the subdivision lots rather than following a drawn corridor."
    },
    {
      "kind": "absent",
      "street": "Bixel Street",
      "from": {
        "px": [
          229,
          126
        ]
      },
      "to": "Ingraham Street",
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "WILLIAM ST.",
      "street": "Bixel Street",
      "from": "Ingraham Street",
      "to": "7th Street",
      "basis": "alignment",
      "name": "william-farragut"
    },
    {
      "kind": "absent",
      "street": "Harbor Freeway",
      "from": {
        "px": [
          553,
          944
        ]
      },
      "to": {
        "px": [
          1029,
          120
        ]
      },
      "note": "The freeway alignment cuts diagonally through the nineteenth-century lots."
    },
    {
      "kind": "absent",
      "street": "Ingraham Street",
      "from": {
        "px": [
          -24,
          431
        ]
      },
      "to": "Bixel Street",
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "INGRAHAM ST.",
      "name": "ingraham",
      "street": "Ingraham Street",
      "from": "Bixel Street",
      "to": {
        "px": [
          703,
          441
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "absent",
      "street": "Saint Paul Avenue",
      "from": {
        "px": [
          660,
          63
        ]
      },
      "to": {
        "px": [
          647,
          254
        ]
      },
      "note": "The modern street crosses lot interiors north of Orange Street."
    },
    {
      "kind": "absent",
      "street": "Saint Paul Place",
      "from": {
        "px": [
          432,
          96
        ]
      },
      "to": {
        "px": [
          417,
          237
        ]
      },
      "note": "The modern street crosses lot interiors north of Orange Street."
    },
    {
      "kind": "state",
      "asWritten": [
        "ORANGE ST.",
        "Wilshire Blvd"
      ],
      "street": "Wilshire Boulevard",
      "from": {
        "px": [
          -26,
          203
        ]
      },
      "to": {
        "px": [
          1181,
          358
        ]
      },
      "basis": "alignment",
      "note": "\u2605\u2605 THIS SHEET RECORDS THE WHOLE ORANGE/WILSHIRE FIGHT IN ONE LABEL, and the Wilshire half of it is STRUCK OUT. Three layers: (1) the plat's own 1889 lettering, \u201cORANGE \u2026 ST.\u201d in capitals, which stands; (2) a later cursive overwrite reading \u201cWilshire \u2026 Blvd.\u201d with \u201cORD 16790\u201d, EVERY WORD OF IT STRUCK THROUGH, alongside an unstruck \u201cord.16915\u201d beside the surviving ORANGE; (3) a clean marginal note in the draughtsman's later hand, \u201cOrange St. changed to Wilshire Blvd. Ord. 48435\u201d, beside \u201cPor. of Kip St. vacated Ord. 46278\u201d. So the sheet shows the June 1908 change annotated and then cancelled after the December 1908 repeal, and the 1924 change recorded separately as a marginal note. The row is assigned to `orange-st-wilshire`, the name in force on 9 May 1889 when this copy was recorded \u2014 and the only name on the sheet that was never struck out.",
      "name": "orange-st-wilshire"
    },
    {
      "kind": "vanished",
      "asWritten": "Kip St",
      "trace": [
        [
          837,
          580
        ],
        [
          878,
          274
        ]
      ],
      "basis": "alignment",
      "name": "kip-street"
    },
    {
      "kind": "vanished",
      "asWritten": "Loomis St",
      "trace": [
        [
          1003,
          312
        ],
        [
          1050,
          140
        ]
      ],
      "basis": "alignment",
      "name": "loomis-st"
    }
  ]
};
