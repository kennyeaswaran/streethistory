module.exports = {
  id: "mr003-032",
  title: "Blocks 73 & 72 of Ord's Survey belonging to W. M. Williams",
  shortTitle: "Blocks 73 & 72 of Ord's Survey",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-032.pdf",
  scan: "documents/mr003-032/mr003-032.pdf",
  transcription: null,

  date: { on: "1875-04-29" },   
  form: "drawn",
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
    image: "documents/mr003-032/mr003-032-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.045446, -118.263902], note: "document-tool corner (0,0)" },
      { px: [1138, 0], ll: [34.044242, -118.262176], note: "document-tool corner (1138,0)" },
      { px: [0, 1752], ll: [34.043229, -118.266123], note: "document-tool corner (0,1752)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["11th Street","Chick Hearn Court","Figueroa Street","Flower Street","Olympic Boulevard"],

  rows: [
    {
      "kind": "state",
      "asWritten": "ELEVENTH STREET",
      "street": "11th Street",
      "from": "Figueroa Street",
      "to": {
        "px": [
          1006,
          1240
        ]
      },
      "basis": "alignment",
      "note": "The modern line follows the roadway lettered ELEVENTH on this sheet and STREET on the adjoining Block 72 sheet.",
      "name": "eleventh-street"
    },
    {
      "kind": "state",
      "asWritten": "ELEVENTH STREET",
      "street": "Chick Hearn Court",
      "from": {
        "px": [
          -23,
          1311
        ]
      },
      "to": "Figueroa Street",
      "basis": "alignment",
      "note": "West of Figueroa, the modern Chick Hearn Court segment is the continuation of the same historical ELEVENTH STREET corridor.",
      "name": "eleventh-street"
    },
    {
      "kind": "state",
      "asWritten": "PEARL STREET",
      "street": "Figueroa Street",
      "from": {
        "px": [
          147,
          50
        ]
      },
      "to": {
        "px": [
          168,
          1411
        ]
      },
      "basis": "alignment",
      "note": "The modern Figueroa centerline remains within the full north-south roadway lettered PEARL STREET.",
      "name": "pearl"
    },
    {
      "kind": "state",
      "asWritten": "FLOWER STREET",
      "street": "Flower Street",
      "from": {
        "px": [
          836,
          -9
        ]
      },
      "to": {
        "px": [
          876,
          1403
        ]
      },
      "basis": "alignment",
      "note": "The modern line follows the roadway at the Block 73/72 division; its FLOWER STREET label is printed on the adjoining sheet.",
      "name": "flower"
    },
    {
      "kind": "state",
      "asWritten": "TENTH STREET",
      "street": "Olympic Boulevard",
      "from": {
        "px": [
          -25,
          316
        ]
      },
      "to": {
        "px": [
          1020,
          123
        ]
      },
      "basis": "alignment",
      "note": "The modern Olympic Boulevard trace follows the full roadway lettered TENTH on this sheet and STREET on the adjoining sheet.",
      "name": "tenth-street"
    }
  ]
};
