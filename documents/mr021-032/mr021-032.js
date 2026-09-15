module.exports = {
  id: "mr021-032",
  title: "J. H. Bryan's Figueroa Street Subdivision",
  shortTitle: "Bryan's Figueroa Street Subdivision",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR021/MR021-032.pdf",
  scan: "documents/mr021-032/mr021-032.pdf",
  transcription: null,

  date: { on: "1887-08-06" },   
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
    [98, 614], [90, 1291], [1140, 1285], [1104, 557]
  ],
  alignment: {
    image: "documents/mr021-032/mr021-032-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.040767, -118.268855], note: "map-tool corner (0,0)" },
      { px: [1171, 0], ll: [34.039219, -118.265324], note: "map-tool corner (1171,0)" },
      { px: [0, 1750], ll: [34.036363, -118.271626], note: "map-tool corner (0,1750)" }
    ]
  },

  // The polygon strays onto these; the document does not inform about them.
  // NOT the same as a absent row, which says the sheet covers the ground and
  // draws nothing there (MODEL-SPEC §4.4, §5.2).
  coverageExcept: [{"street":"Venice Boulevard","from":"Hope Street","to":null}],

  sweptFully: true,
  sweptFor: ["15th Drive","15th Street","Figueroa Street","Flower Street","Hope Street","Venice Boulevard"],

  rows: [
    {
      "kind": "absent",
      "street": "15th Drive",
      "from": {
        "px": [
          94,
          975
        ]
      },
      "to": {
        "px": [
          219,
          977
        ]
      },
      "note": "Blank ground west of the Figueroa Street corridor; no east-west roadway is drawn here."
    },
    {
      "kind": "absent",
      "street": "15th Street",
      "from": {
        "px": [
          1031,
          940
        ]
      },
      "to": {
        "px": [
          1123,
          940
        ]
      },
      "note": "East of Hope Street the sheet shows no transverse roadway at this level."
    },
    {
      "kind": "state",
      "asWritten": "Figueroa Street",
      "street": "Figueroa Street",
      "from": {
        "px": [
          221,
          607
        ]
      },
      "to": {
        "px": [
          216,
          1290
        ]
      },
      "basis": "alignment",
      "name": "figueroa-gov"
    },
    {
      "kind": "state",
      "asWritten": "Flower Street",
      "street": "Flower Street",
      "from": {
        "px": [
          621,
          590
        ]
      },
      "to": {
        "px": [
          617,
          1288
        ]
      },
      "basis": "alignment",
      "name": "flower"
    },
    {
      "kind": "state",
      "asWritten": "Hope Street",
      "street": "Hope Street",
      "from": {
        "px": [
          1033,
          569
        ]
      },
      "to": {
        "px": [
          1030,
          1286
        ]
      },
      "basis": "alignment",
      "name": "hope"
    },
    {
      "kind": "state",
      "asWritten": "Pine Street.",
      "street": "Venice Boulevard",
      "from": {
        "px": [
          91,
          1199
        ]
      },
      "to": {
        "px": [
          1003,
          1184
        ]
      },
      "basis": "alignment",
      "name": "pine-street-venice",
      "note": "The label is split across the roadway: 'Pine' at the west, 'Street.' at the east. The modern line follows this corridor until it bends away near Hope Street."
    }
  ]
};
