module.exports = {
  id: "tr0015-166a-p1",
  title: "Plat of \"Crownwood\"",
  shortTitle: "Crownwood",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0015/TR0015-166a.pdf",
  scan: "documents/tr0015-166a-p1/tr0015-166a-p1.pdf",
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
    [39, 1800], [758, 1791], [727, 1348], [1013, 1081],
    [1008, 389], [268, 542]
  ],
  alignment: {
    image: "documents/tr0015-166a-p1/tr0015-166a-p1-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.062914, -118.262822], note: "document-tool corner (0,0)" },
      { px: [1140, 0], ll: [34.061745, -118.260154], note: "document-tool corner (1140,0)" },
      { px: [0, 1842], ll: [34.059317, -118.265086], note: "document-tool corner (0,1842)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["2nd Street","3rd Street","Columbia Avenue","Crown Hill Avenue","Miramar Street","Witmer Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "W. 2ND ST.",
      "street": "2nd Street",
      "from": {
        "px": [
          232,
          738
        ]
      },
      "to": {
        "px": [
          1009,
          556
        ]
      },
      "basis": "alignment",
      "note": "The aligned modern trace follows the full curved roadway lettered W. 2ND at its west end and ST. near its east end.",
      "name": "second-street"
    },
    {
      "kind": "absent",
      "street": "3rd Street",
      "from": {
        "px": [
          61,
          1679
        ]
      },
      "to": "Columbia Avenue",
      "basis": "alignment",
      "note": "The modern 3rd Street centerline follows the east-west continuation of the plat's CROWN HILL AVE. corridor."
    },
    {
      "kind": "state",
      "asWritten": "CROWN HILL AVE.",
      "street": "3rd Street",
      "from": "Columbia Avenue",
      "to": {
        "px": [
          749,
          1663
        ]
      },
      "basis": "alignment",
      "note": "The modern 3rd Street centerline follows the east-west continuation of the plat's CROWN HILL AVE. corridor.",
      "name": "crown-hill-ave"
    },
    {
      "kind": "state",
      "asWritten": "COLUMBIA AVENUE",
      "street": "Columbia Avenue",
      "from": "2nd Street",
      "to": {
        "px": [
          213,
          1798
        ]
      },
      "basis": "alignment",
      "note": "COLUMBIA and AVENUE are lettered on different portions of this continuous north-south corridor; the modern trace follows it through the Crown Hill junction.",
      "name": "columbia-avenue"
    },
    {
      "kind": "state",
      "asWritten": "CROWN HILL AVE.",
      "street": "Crown Hill Avenue",
      "from": {
        "px": [
          91,
          1516
        ]
      },
      "to": "3rd Street",
      "basis": "alignment",
      "note": "The short modern Crown Hill Avenue segment follows the diagonal western arm of the corridor lettered CROWN HILL AVE.",
      "name": "crown-hill-ave"
    },
    {
      "kind": "state",
      "asWritten": "W. 3RD STREET",
      "street": "Miramar Street",
      "from": "Columbia Avenue",
      "to": {
        "px": [
          993,
          1099
        ]
      },
      "basis": "alignment",
      "note": "The modern Miramar Street line stays within the roadway carrying W. 3RD west of Witmer and STREET east of it.",
      "name": "third-street"
    },
    {
      "kind": "state",
      "asWritten": "WITMER",
      "street": "Witmer Street",
      "from": {
        "px": [
          851,
          421
        ]
      },
      "to": "Miramar Street",
      "basis": "alignment",
      "note": "North of Miramar, the modern centerline follows the eastern roadway lettered WITMER.",
      "name": "witmer-street"
    },
    {
      "kind": "state",
      "asWritten": "WITMER",
      "street": "Witmer Street",
      "from": "Miramar Street",
      "to": {
        "px": [
          594,
          1793
        ]
      },
      "basis": "alignment",
      "note": "South of Miramar, modern Witmer resumes on the offset western roadway, which is also lettered WITMER.",
      "name": "witmer-street"
    }
  ]
};
