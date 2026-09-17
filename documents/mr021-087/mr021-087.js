module.exports = {
  id: "mr021-087",
  title: "Potter's Subdivision of Block 3 of Nichols' Addition to West Los Angeles, Also Lots 26 and 27 of Meyers' Subdivision of Block 4",
  shortTitle: "Potter's Subdivision",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR021/MR021-087.pdf",
  scan: "documents/mr021-087/mr021-087.pdf",
  transcription: null,

  date: { on: "1887-08-13" },   
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
    [230, 469], [230, 1161], [972, 1055], [999, 312]
  ],
  alignment: {
    image: "documents/mr021-087/mr021-087-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.050485, -118.26251], note: "map-tool corner (0,0)" },
      { px: [1145, 0], ll: [34.048515, -118.259498], note: "map-tool corner (1145,0)" },
      { px: [0, 1708], ll: [34.046737, -118.266033], note: "map-tool corner (0,1708)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["8th Place","8th Street","Figueroa Street","Francisco Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "Lincoln Street",
      "street": "8th Place",
      "from": {
        "px": [
          343,
          1045
        ]
      },
      "to": {
        "px": [
          872,
          981
        ]
      },
      "basis": "alignment",
      "name": "lincoln-street"
    },
    {
      "kind": "state",
      "asWritten": "Eighth Street",
      "name": "eighth-street",
      "street": "8th Street",
      "from": {
        "px": [
          230,
          542
        ]
      },
      "to": {
        "px": [
          993,
          480
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "Pearl Street",
      "street": "Figueroa Street",
      "from": {
        "px": [
          858,
          341
        ]
      },
      "to": {
        "px": [
          873,
          1069
        ]
      },
      "basis": "alignment",
      "name": "pearl"
    },
    {
      "kind": "state",
      "asWritten": "Moore Street",
      "street": "Francisco Street",
      "from": {
        "px": [
          333,
          534
        ]
      },
      "to": {
        "px": [
          344,
          1145
        ]
      },
      "basis": "alignment",
      "name": "moore-st"
    }
  ]
};
