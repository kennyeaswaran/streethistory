module.exports = {
  id: "tr0001-038a",
  title: "Map of R. W. Poindexter's Subdivision of the easterly portion of Block A of the Mrs. Fitzgerald Tract",
  shortTitle: "R. W. Poindexter's Subdivision",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0001/TR0001-038A.pdf",
  scan: "documents/tr0001-038a/tr0001-038a.pdf",
  transcription: null,

  date: { on: "1901-10" },   
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
    [389, 460], [858, 438], [843, 1231], [376, 1230]
  ],
  alignment: {
    image: "documents/tr0001-038a/tr0001-038a-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.049806, -118.267211], note: "map-tool corner (0,0)" },
      { px: [1177, 0], ll: [34.048172, -118.263694], note: "map-tool corner (1177,0)" },
      { px: [0, 1842], ll: [34.045212, -118.270275], note: "map-tool corner (0,1842)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["8th Place","Bixel Street","Georgia Street","Harbor Freeway","James M Wood Boulevard","Olympic Boulevard"],

  rows: [
    {
      "kind": "state",
      "asWritten": "NINTH STREET",
      "name": "ninth-street",
      "street": "8th Place",
      "from": {
        "px": [
          425,
          458
        ]
      },
      "to": {
        "px": [
          765,
          503
        ]
      },
      "basis": "alignment",
      "confirmed": true
    },
    {
      "kind": "state",
      "asWritten": "GRATTAN STREET",
      "name": "grattan-street",
      "street": "Bixel Street",
      "from": {
        "px": [
          442,
          919
        ]
      },
      "to": {
        "px": [
          458,
          1156
        ]
      },
      "basis": "alignment",
      "confirmed": true
    },
    {
      "kind": "state",
      "asWritten": "VALENCIA STREET",
      "name": "valencia-street-poindexter",
      "street": "Georgia Street",
      "from": {
        "px": [
          765,
          503
        ]
      },
      "to": {
        "px": [
          743,
          1231
        ]
      },
      "basis": "alignment",
      "confirmed": true
    },
    {
      "kind": "absent",
      "street": "Harbor Freeway",
      "from": {
        "px": [
          534,
          453
        ]
      },
      "to": {
        "px": [
          384,
          781
        ]
      },
      "confirmed": true,
      "note": "The freeway carriageway crosses Grattan Street and the subdivision lots diagonally."
    },
    {
      "kind": "absent",
      "street": "Harbor Freeway",
      "from": {
        "px": [
          465,
          456
        ]
      },
      "to": {
        "px": [
          386,
          629
        ]
      },
      "confirmed": true,
      "note": "The second carriageway crosses lot interiors rather than a historical roadway."
    },
    {
      "kind": "state",
      "asWritten": "NINTH STREET",
      "name": "ninth-street",
      "street": "James M Wood Boulevard",
      "from": {
        "px": [
          388,
          517
        ]
      },
      "to": {
        "px": [
          857,
          502
        ]
      },
      "basis": "alignment",
      "confirmed": true
    },
    {
      "kind": "state",
      "asWritten": "TENTH STREET",
      "name": "tenth-street",
      "street": "Olympic Boulevard",
      "from": {
        "px": [
          377,
          1157
        ]
      },
      "to": {
        "px": [
          844,
          1152
        ]
      },
      "basis": "alignment",
      "confirmed": true
    },
    {
      "kind": "vanished",
      "asWritten": "GRATTAN STREET",
      "name": "grattan-street",
      "trace": [
        [
          466,
          555
        ],
        [
          442,
          919
        ]
      ],
      "basis": "alignment",
      "confirmed": true,
      "note": "The northern part of Grattan Street continues beyond the surviving modern Bixel segment without a supplied modern counterpart."
    }
  ]
};
