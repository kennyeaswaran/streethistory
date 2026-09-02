module.exports = {
  id: "mr003-033",
  title: "Blocks 73 & 72 of Ord's Survey belonging to W. M. Williams",
  shortTitle: "Blocks 73 & 72 of Ord's Survey",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-033.pdf",
  scan: "documents/mr003-033/mr003-033.pdf",
  transcription: null,

  date: { on: "1875-04-29" },   
  type: "tract-map",
  attests: "planned-by",
  completeness: "incidental",
  readBy: "human",

  // Coverage is the ground this document informs about — the tract boundary,
  // not the sheet edge (MODEL-SPEC §4.4). SCAN PIXELS against alignment.image,
  // so a better alignment carries it along (§4.6).
  coverage: [
    [-26, 65], [-23, 1413], [1004, 1402], [1022, -25]
  ],
  alignment: {
    image: "documents/mr003-033/mr003-033-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.044887, -118.263032], note: "document-tool corner (0,0)" },
      { px: [1121, 0], ll: [34.043742, -118.261236], note: "document-tool corner (1121,0)" },
      { px: [0, 1749], ll: [34.042549, -118.265174], note: "document-tool corner (0,1749)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["11th Street","Flower Street","Hope Street","Olympic Boulevard"],

  rows: [
    {
      "kind": "state",
      "asWritten": "ELEVENTH STREET",
      "street": "11th Street",
      "from": {
        "px": [
          -23,
          1233
        ]
      },
      "to": {
        "px": [
          1006,
          1254
        ]
      },
      "basis": "alignment",
      "note": "STREET is printed on this sheet and ELEVENTH on the adjoining Block 73 sheet; the modern line follows the continuous corridor.",
      "name": "eleventh-street"
    },
    {
      "kind": "state",
      "asWritten": "FLOWER STREET",
      "street": "Flower Street",
      "from": {
        "px": [
          274,
          39
        ]
      },
      "to": {
        "px": [
          253,
          1410
        ]
      },
      "basis": "alignment",
      "note": "The modern Flower Street centerline remains within the complete roadway lettered FLOWER STREET.",
      "name": "flower"
    },
    {
      "kind": "state",
      "asWritten": "HOPE STREET",
      "street": "Hope Street",
      "from": {
        "px": [
          949,
          -19
        ]
      },
      "to": {
        "px": [
          934,
          1403
        ]
      },
      "basis": "alignment",
      "note": "The modern Hope Street centerline remains within the complete roadway lettered HOPE STREET.",
      "name": "hope"
    },
    {
      "kind": "state",
      "asWritten": "TENTH STREET",
      "street": "Olympic Boulevard",
      "from": {
        "px": [
          -26,
          180
        ]
      },
      "to": {
        "px": [
          1020,
          151
        ]
      },
      "basis": "alignment",
      "note": "STREET is printed on this sheet and TENTH on the adjoining Block 73 sheet; the modern Olympic line follows the continuous corridor.",
      "name": "tenth-street"
    }
  ]
};
