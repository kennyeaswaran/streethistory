module.exports = {
  id: "tr0015-166a-p2",
  title: "Plat of \"Crownwood\"",
  shortTitle: "Crownwood",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0015/TR0015-166a.pdf",
  scan: "documents/tr0015-166a-p2/tr0015-166a-p2.pdf",
  transcription: null,

  date: { on: "1909-12-10" },   
  form: "drawn",
  type: "tract-map",
  attests: "planned-by",
  completeness: "incidental",
  readBy: "human",

  // Coverage is the ground this document informs about — the tract boundary,
  // not the sheet edge (MODEL-SPEC §4.4). SCAN PIXELS against alignment.image,
  // so a better alignment carries it along (§4.6).
  coverage: [
    [86, 1732], [1158, 1631], [1070, 48], [374, 171],
    [127, 932]
  ],
  alignment: {
    image: "documents/tr0015-166a-p2/tr0015-166a-p2-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.062332, -118.261992], note: "document-tool corner (0,0)" },
      { px: [1138, 0], ll: [34.061107, -118.259366], note: "document-tool corner (1138,0)" },
      { px: [0, 1842], ll: [34.058785, -118.264368], note: "document-tool corner (0,1842)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["2nd Street","3rd Street","Emerald Drive","Lucas Avenue","Miramar Street","Witmer Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "W. 2ND STREET",
      "street": "2nd Street",
      "from": {
        "px": [
          273,
          481
        ]
      },
      "to": "Lucas Avenue",
      "basis": "alignment",
      "note": "W. 2ND is lettered on the western reach and STREET on the diagonal reach approaching Lucas; the modern trace follows both.",
      "name": "second-street"
    },
    {
      "kind": "state",
      "asWritten": "CROWN HILL AVE.",
      "street": "3rd Street",
      "from": {
        "px": [
          94,
          1580
        ]
      },
      "to": {
        "px": [
          1152,
          1521
        ]
      },
      "basis": "alignment",
      "note": "The modern 3rd Street centerline follows the long roadway lettered CROWN HILL AVE. across the lower part of the page.",
      "name": "crown-hill-ave"
    },
    {
      "kind": "state",
      "asWritten": "FARMER ST.",
      "street": "Emerald Drive",
      "from": "Lucas Avenue",
      "to": {
        "px": [
          1110,
          767
        ]
      },
      "basis": "alignment",
      "note": "The short modern Emerald Drive trace east of Lucas lies in the roadway lettered FARMER ST.",
      "name": "farmer"
    },
    {
      "kind": "state",
      "asWritten": "LUCAS AVENUE",
      "street": "Lucas Avenue",
      "from": {
        "px": [
          967,
          66
        ]
      },
      "to": {
        "px": [
          1017,
          1644
        ]
      },
      "basis": "alignment",
      "note": "LUCAS and AVENUE are split along the same north-south roadway, which the supplied modern trace follows throughout the coverage.",
      "name": "lucas-avenue"
    },
    {
      "kind": "state",
      "asWritten": "W. 3RD STREET",
      "street": "Miramar Street",
      "from": {
        "px": [
          123,
          1004
        ]
      },
      "to": "Lucas Avenue",
      "basis": "alignment",
      "note": "The modern Miramar Street trace follows the tract roadway carrying W. 3RD on the west and STREET farther east.",
      "name": "third-street"
    },
    {
      "kind": "state",
      "asWritten": "WITMER STREET",
      "street": "Witmer Street",
      "from": {
        "px": [
          456,
          156
        ]
      },
      "to": "Miramar Street",
      "basis": "alignment",
      "note": "North of Miramar, the modern centerline follows the roadway lettered WITMER.",
      "name": "witmer-street"
    },
    {
      "kind": "state",
      "asWritten": "WITMER",
      "street": "Witmer Street",
      "from": "Miramar Street",
      "to": {
        "px": [
          238,
          1718
        ]
      },
      "basis": "alignment",
      "note": "South of Miramar, modern Witmer resumes on the offset roadway, again lettered WITMER.",
      "name": "witmer-street"
    },
    {
      "kind": "vanished",
      "asWritten": "W. 3RD ST.",
      "trace": [
        [
          1008,
          1162
        ],
        [
          1130,
          1162
        ]
      ],
      "basis": "alignment",
      "note": "A separate W. 3RD ST. stub is drawn east of Lucas, but none of the supplied modern street traces follows it.",
      "name": "third-street"
    }
  ]
};
