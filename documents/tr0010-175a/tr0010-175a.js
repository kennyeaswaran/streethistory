module.exports = {
  id: "tr0010-175a",
  title: "Arthur G. Newton's Subdivision of Block 18, Woolen Mill Tract",
  shortTitle: "Arthur G. Newton's Subdivision",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0010/TR0010-175a.pdf",
  scan: "documents/tr0010-175a/tr0010-175a.pdf",
  transcription: null,

  date: { on: "1906-04" },   
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
    [210, 375], [976, 350], [949, 1602], [504, 1639]
  ],
  alignment: {
    image: "documents/tr0010-175a/tr0010-175a-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.055017, -118.259568], note: "map-tool corner (0,0)" },
      { px: [1171, 0], ll: [34.054113, -118.258104], note: "map-tool corner (1171,0)" },
      { px: [0, 1842], ll: [34.053095, -118.261273], note: "map-tool corner (0,1842)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["5th Street","6th Street","Beaudry Avenue","Boylston Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "5TH ST.",
      "name": "fifth-street",
      "street": "5th Street",
      "from": {
        "px": [
          429,
          1318
        ]
      },
      "to": {
        "px": [
          763,
          495
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "6TH ST.",
      "name": "sixth-street",
      "street": "6th Street",
      "from": {
        "px": [
          445,
          1386
        ]
      },
      "to": {
        "px": [
          954,
          1380
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "BEAUDRY AVE.",
      "name": "beaudry-avenue",
      "street": "Beaudry Avenue",
      "from": {
        "px": [
          763,
          357
        ]
      },
      "to": {
        "px": [
          922,
          1604
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "BOYLSTON ST.",
      "name": "boylston",
      "street": "Boylston Street",
      "from": {
        "px": [
          438,
          368
        ]
      },
      "to": {
        "px": [
          425,
          1300
        ]
      },
      "basis": "alignment"
    }
  ]
};
