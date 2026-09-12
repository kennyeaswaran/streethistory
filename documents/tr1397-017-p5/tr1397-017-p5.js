module.exports = {
  id: "tr1397-017-p5",
  title: "Tract No. 71141 in the City of Los Angeles",
  shortTitle: "Tract No. 71141",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB1397/TR1397-017.pdf",
  scan: "documents/tr1397-017-p5/tr1397-017-p5.pdf",
  transcription: null,

  date: { on: "2017-05-04" },   
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
    [318, 338], [351, 1360], [1476, 1067], [1440, 268]
  ],
  alignment: {
    image: "documents/tr1397-017-p5/tr1397-017-p5-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.051612, -118.260679], note: "map-tool corner (0,0)" },
      { px: [1800, 0], ll: [34.050104, -118.258374], note: "map-tool corner (1800,0)" },
      { px: [0, 2600], ll: [34.048834, -118.263289], note: "map-tool corner (0,2600)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["7th Street","Figueroa Street","Francisco Street","Wilshire Boulevard"],

  rows: [
    {
      "kind": "state",
      "asWritten": "7TH STREET",
      "street": "7th Street",
      "from": {
        "px": [
          350,
          1330
        ]
      },
      "to": {
        "px": [
          1473,
          993
        ]
      },
      "basis": "alignment",
      "name": "seventh-street"
    },
    {
      "kind": "state",
      "asWritten": "FIGUEROA STREET",
      "street": "Figueroa Street",
      "from": {
        "px": [
          1395,
          271
        ]
      },
      "to": {
        "px": [
          1386,
          1090
        ]
      },
      "basis": "alignment",
      "name": "figueroa-gov"
    },
    {
      "kind": "state",
      "asWritten": "FRANCISCO STREET",
      "street": "Francisco Street",
      "from": {
        "px": [
          415,
          376
        ]
      },
      "to": {
        "px": [
          424,
          1306
        ]
      },
      "basis": "alignment",
      "name": "francisco"
    },
    {
      "kind": "state",
      "asWritten": "WILSHIRE BOULEVARD",
      "street": "Wilshire Boulevard",
      "from": {
        "px": [
          319,
          376
        ]
      },
      "to": {
        "px": [
          1444,
          359
        ]
      },
      "basis": "alignment",
      "name": "wilshire"
    }
  ]
};
