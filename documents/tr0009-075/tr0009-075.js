module.exports = {
  id: "tr0009-075",
  title: "Power Plant Tract No. 1",
  shortTitle: "Power Plant Tract No. 1",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0009/TR0009-075.pdf",
  scan: "documents/tr0009-075/tr0009-075.pdf",
  transcription: null,

  date: { on: "1906-02-17" },   
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
    [-16, 453], [255, 984], [258, 1320], [1390, 1343],
    [816, 323]
  ],
  alignment: {
    image: "documents/tr0009-075/tr0009-075-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.040743, -118.239572], note: "map-tool corner (0,0)" },
      { px: [1171, 0], ll: [34.038981, -118.236295], note: "map-tool corner (1171,0)" },
      { px: [0, 1842], ll: [34.036441, -118.242894], note: "map-tool corner (0,1842)" }
    ]
  },

  // The polygon strays onto these; the document does not inform about them.
  // NOT the same as a absent row, which says the sheet covers the ground and
  // draws nothing there (MODEL-SPEC §4.4, §5.2).
  coverageExcept: [{"street":"6th Street","from":"Alameda Street","to":null},{"street":"6th Street","from":null,"to":"Central Avenue"},{"street":"Industrial Street","from":"Alameda Street","to":null}],

  sweptFully: true,
  sweptFor: ["6th Street","Alameda Street","Central Avenue","Industrial Street","Wilde Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "SIXTH ST.",
      "street": "6th Street",
      "from": {
        "px": [
          93,
          584
        ]
      },
      "to": "Alameda Street",
      "basis": "alignment",
      "name": "sixth-street"
    },
    {
      "kind": "state",
      "street": "Alameda Street",
      "from": {
        "px": [
          653,
          349
        ]
      },
      "to": {
        "px": [
          715,
          465
        ]
      },
      "note": "Short northern reach above the plat's parallel Alameda edges.",
      "basis": "alignment",
      "asWritten": "Alameda St",
      "name": "alameda-st"
    },
    {
      "kind": "state",
      "asWritten": "ALAMEDA ST.",
      "street": "Alameda Street",
      "from": {
        "px": [
          715,
          465
        ]
      },
      "to": "Industrial Street",
      "basis": "alignment",
      "name": "alameda-st",
      "note": "'ST.' and 'ALAMEDA' are lettered at different positions within the same diagonal corridor."
    },
    {
      "kind": "state",
      "asWritten": "CENTRAL AVE.",
      "street": "Central Avenue",
      "from": {
        "px": [
          137,
          429
        ]
      },
      "to": {
        "px": [
          384,
          1323
        ]
      },
      "basis": "alignment",
      "name": "central-ave"
    },
    {
      "kind": "state",
      "asWritten": [
        "EASTON ST.",
        "Industrial"
      ],
      "street": "Industrial Street",
      "from": {
        "px": [
          257,
          1164
        ]
      },
      "to": {
        "px": [
          669,
          1211
        ]
      },
      "basis": "alignment",
      "note": "The printed Easton St. label is supplemented by handwritten 'Industrial' and an ordinance number; the latter number is not part of the street name.",
      "name": "easton"
    },
    {
      "kind": "state",
      "asWritten": [
        "EASTON ST.",
        "Industrial"
      ],
      "street": "Industrial Street",
      "from": {
        "px": [
          739,
          1217
        ]
      },
      "to": "Alameda Street",
      "basis": "alignment",
      "note": "Second modern run along the same two-edged road; the sheet ends shortly beyond Alameda.",
      "name": "easton"
    },
    {
      "kind": "state",
      "asWritten": "WILDE ST.",
      "street": "Wilde Street",
      "from": {
        "px": [
          196,
          868
        ]
      },
      "to": {
        "px": [
          390,
          889
        ]
      },
      "basis": "alignment",
      "name": "wilde-st"
    },
    {
      "kind": "state",
      "asWritten": "Alameda St",
      "street": "Alameda Street",
      "from": "Industrial Street",
      "to": null,
      "basis": "alignment",
      "note": "Added in review: the sheet draws and letters this stretch and the AI pass had no row for it.",
      "name": "alameda-st"
    },
    {
      "kind": "vanished",
      "asWritten": "Easton St",
      "trace": [
        [
          669,
          1210
        ],
        [
          738,
          1217
        ]
      ],
      "basis": "alignment",
      "name": "easton"
    }
  ]
};
