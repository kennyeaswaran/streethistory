module.exports = {
  id: "mr005-105",
  title: "Map of Subdivision of North Part of Carr Tract in Los Angeles City",
  shortTitle: "North Carr Tract Subdivision",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-105.pdf",
  scan: "documents/mr005-105/mr005-105.pdf",
  transcription: null,

  date: { on: "1883-02-21" },   
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
    [45, 267], [10, 699], [1143, 682], [1133, 214]
  ],
  alignment: {
    image: "documents/mr005-105/mr005-105-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.038551, -118.261939], note: "map-tool corner (0,0)" },
      { px: [1775, 0], ll: [34.036338, -118.25799], note: "map-tool corner (1775,0)" },
      { px: [0, 1149], ll: [34.036418, -118.263655], note: "map-tool corner (0,1149)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["Broadway","Hill Street","Main Street","Pico Boulevard"],

  rows: [
    {
      "kind": "state",
      "asWritten": "Hill Street",
      "name": "hill-street-downtown",
      "street": "Hill Street",
      "from": {
        "px": [
          167,
          261
        ]
      },
      "to": {
        "px": [
          155,
          697
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "Main Street",
      "name": "main-street-dtla",
      "street": "Main Street",
      "from": {
        "px": [
          1039,
          219
        ]
      },
      "to": {
        "px": [
          1038,
          684
        ]
      },
      "basis": "alignment",
      "note": "The words Main and Street are separated along the same east-side corridor."
    },
    {
      "kind": "state",
      "asWritten": "Pico Street",
      "name": "pico",
      "street": "Pico Boulevard",
      "from": {
        "px": [
          36,
          377
        ]
      },
      "to": {
        "px": [
          786,
          382
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "street": "Pico Boulevard",
      "from": "Main Street",
      "to": {
        "px": [
          786,
          382
        ]
      },
      "note": "The diagonal modern branch east of Main crosses blank sheet space rather than following the lettered Pico corridor.",
      "basis": "alignment",
      "asWritten": "Pico Street",
      "name": "pico"
    },
    {
      "kind": "absent",
      "street": "Pico Boulevard",
      "from": {
        "px": [
          786,
          382
        ]
      },
      "to": {
        "px": [
          1139,
          515
        ]
      },
      "note": "The diagonal modern branch east of Main crosses blank sheet space rather than following the lettered Pico corridor."
    },
    {
      "kind": "absent",
      "street": "Broadway",
      "from": {
        "px": [
          593,
          240
        ]
      },
      "to": {
        "px": [
          591,
          690
        ]
      },
      "note": "The modern Broadway line passes through numbered lot interiors; no roadway is drawn there."
    }
  ]
};
