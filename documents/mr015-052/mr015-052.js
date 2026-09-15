module.exports = {
  id: "mr015-052",
  title: "Wingerter Tract",
  shortTitle: "Wingerter Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR015/MR015-052.pdf",
  scan: "documents/mr015-052/mr015-052.pdf",
  transcription: null,

  date: { on: "1887-03-29" },   
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
    [-1, 529], [37, 1269], [1100, 1255], [978, 552]
  ],
  alignment: {
    image: "documents/mr015-052/mr015-052-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.039533, -118.233023], note: "map-tool corner (0,0)" },
      { px: [1136, 0], ll: [34.039441, -118.227291], note: "map-tool corner (1136,0)" },
      { px: [0, 1619], ll: [34.032715, -118.23318], note: "map-tool corner (0,1619)" }
    ]
  },

  // The polygon strays onto these; the document does not inform about them.
  // NOT the same as a absent row, which says the sheet covers the ground and
  // draws nothing there (MODEL-SPEC §4.4, §5.2).
  coverageExcept: [{"street":"7th Street","from":null,"to":"Mateo Street"},{"street":"Imperial Street","from":null,"to":{"px":[321,600]}}],

  sweptFully: true,
  sweptFor: ["7th Street","Conway Place","Imperial Street","Industrial Street","Jesse Street","Mateo Street","Mesquit Street","Santa Fe Avenue"],

  rows: [
    {
      "kind": "state",
      "asWritten": "Seventh Street.",
      "street": "7th Street",
      "from": {
        "px": [
          95,
          1166
        ]
      },
      "to": {
        "px": [
          1084,
          1162
        ]
      },
      "basis": "alignment",
      "name": "seventh-street"
    },
    {
      "kind": "absent",
      "street": "Conway Place",
      "from": {
        "px": [
          7,
          691
        ]
      },
      "to": {
        "px": [
          112,
          698
        ]
      },
      "note": "No east-west road is drawn west of Mateo at this level; the spur only reaches the Mateo road."
    },
    {
      "kind": "state",
      "asWritten": "Palm St.",
      "street": "Imperial Street",
      "from": {
        "px": [
          319,
          575
        ]
      },
      "to": {
        "px": [
          382,
          1167
        ]
      },
      "basis": "alignment",
      "name": "palm-st-arts-district",
      "note": "Modern Imperial follows the plat's Palm St. corridor."
    },
    {
      "kind": "absent",
      "street": "Industrial Street",
      "from": {
        "px": [
          18,
          898
        ]
      },
      "to": {
        "px": [
          137,
          904
        ]
      },
      "note": "No east-west corridor is drawn west of Mateo here."
    },
    {
      "kind": "unnamed",
      "street": "Jesse Street",
      "from": {
        "px": [
          123,
          792
        ]
      },
      "to": {
        "px": [
          769,
          718
        ]
      },
      "basis": "alignment",
      "note": "Two edges separate the northern and southern rows of lots; only a bearing is written in the corridor, not a street name."
    },
    {
      "kind": "state",
      "asWritten": "Mateo St.",
      "street": "Mateo Street",
      "from": {
        "px": [
          95,
          531
        ]
      },
      "to": "7th Street",
      "basis": "alignment",
      "name": "mateo"
    },
    {
      "kind": "absent",
      "street": "Mateo Street",
      "from": "7th Street",
      "to": {
        "px": [
          172,
          1267
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "Mesquit St.",
      "street": "Mesquit Street",
      "from": {
        "px": [
          748,
          547
        ]
      },
      "to": {
        "px": [
          818,
          1133
        ]
      },
      "basis": "alignment",
      "name": "mesquit"
    },
    {
      "kind": "state",
      "asWritten": "Tulip St.",
      "street": "Santa Fe Avenue",
      "from": {
        "px": [
          537,
          575
        ]
      },
      "to": {
        "px": [
          613,
          1261
        ]
      },
      "basis": "alignment",
      "name": "tulip",
      "note": "The modern avenue tracks the plat's Tulip St. roadway."
    }
  ]
};
