module.exports = {
  id: "tr0116-085-p1",
  title: "Tract No. 8421, Sheet No. 1",
  shortTitle: "Tract No. 8421",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0116/TR0116-085.pdf",
  scan: "documents/tr0116-085-p1/tr0116-085-p1.pdf",
  transcription: null,

  date: { on: "1925-04-19" },   
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
    [-48, 32], [-74, 1205], [848, 1366], [808, 2120],
    [1603, 2157], [1673, 206]
  ],
  alignment: {
    image: "documents/tr0116-085-p1/tr0116-085-p1-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.048833, -118.235147], note: "map-tool corner (0,0)" },
      { px: [1746, 0], ll: [34.048846, -118.232143], note: "map-tool corner (1746,0)" },
      { px: [0, 2395], ll: [34.045394, -118.235126], note: "map-tool corner (0,2395)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["1st Street","2nd Street","3rd Street","Santa Fe Avenue","Vignes Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "FIRST ST.",
      "name": "first-street",
      "street": "1st Street",
      "from": {
        "px": [
          -52,
          195
        ]
      },
      "to": {
        "px": [
          1664,
          464
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "FIRST ST.",
      "name": "first-street",
      "street": "1st Street",
      "from": {
        "px": [
          -49,
          94
        ]
      },
      "to": {
        "px": [
          1667,
          368
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "SECOND ST.",
      "name": "second-street",
      "street": "2nd Street",
      "from": {
        "px": [
          -73,
          1160
        ]
      },
      "to": {
        "px": [
          1435,
          1161
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "THIRD ST.",
      "name": "third-street",
      "street": "3rd Street",
      "from": {
        "px": [
          815,
          1980
        ]
      },
      "to": {
        "px": [
          1442,
          1983
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "SANTA FE AVE.",
      "street": "Santa Fe Avenue",
      "from": {
        "px": [
          1477,
          186
        ]
      },
      "to": {
        "px": [
          1442,
          2150
        ]
      },
      "basis": "alignment",
      "name": "santa-fe-ave"
    },
    {
      "kind": "state",
      "asWritten": "VIGNES ST.",
      "street": "Vignes Street",
      "from": {
        "px": [
          747,
          112
        ]
      },
      "to": {
        "px": [
          713,
          1158
        ]
      },
      "basis": "alignment",
      "name": "vignes-street"
    }
  ]
};
