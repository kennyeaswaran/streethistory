module.exports = {
  id: "mr005-573",
  title: "Map of Feldhauser's Subdivision of Blocks 85 and 86, Ord's Survey",
  shortTitle: "Feldhauser's Subdivision",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-573.pdf",
  scan: "documents/mr005-573/mr005-573.pdf",
  transcription: null,

  date: { on: "1884-05-24" },   
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
    [73, 481], [63, 1315], [1126, 1218], [1117, 397]
  ],
  alignment: {
    image: "documents/mr005-573/mr005-573-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.041834, -118.262547], note: "map-tool corner (0,0)" },
      { px: [1115, 0], ll: [34.03988, -118.259624], note: "map-tool corner (1115,0)" },
      { px: [0, 1677], ll: [34.038166, -118.266069], note: "map-tool corner (0,1677)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["12th Street","Grand Avenue","Hill Street","Margo Street","Olive Street","Pico Boulevard"],

  rows: [
    {
      "kind": "state",
      "asWritten": "Twelfth Street",
      "name": "twelfth-street",
      "street": "12th Street",
      "from": {
        "px": [
          71,
          615
        ]
      },
      "to": {
        "px": [
          1119,
          599
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "Charity Street",
      "name": "charity",
      "street": "Grand Avenue",
      "from": {
        "px": [
          204,
          470
        ]
      },
      "to": {
        "px": [
          243,
          1148
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "Hill Street",
      "name": "hill-street-downtown",
      "street": "Hill Street",
      "from": {
        "px": [
          1015,
          405
        ]
      },
      "to": {
        "px": [
          1035,
          1226
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "Olive Street",
      "name": "olive",
      "street": "Olive Street",
      "from": {
        "px": [
          611,
          438
        ]
      },
      "to": {
        "px": [
          619,
          1124
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "absent",
      "street": "Olive Street",
      "from": {
        "px": [
          619,
          1124
        ]
      },
      "to": {
        "px": [
          675,
          1259
        ]
      },
      "note": "South of Pico, this modern branch falls on dashed survey extensions, not a drawn street corridor."
    },
    {
      "kind": "unnamed",
      "street": "Olive Street",
      "from": "Pico Boulevard",
      "to": {
        "px": [
          741,
          1253
        ]
      },
      "note": "The separate short modern run south of Pico likewise crosses the dashed extension area."
    },
    {
      "kind": "state",
      "asWritten": "Pico Street",
      "name": "pico",
      "street": "Pico Boulevard",
      "from": {
        "px": [
          65,
          1181
        ]
      },
      "to": {
        "px": [
          1124,
          1080
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "unnamed",
      "street": "Margo Street",
      "from": "Pico Boulevard",
      "to": {
        "px": [
          437,
          1281
        ]
      },
      "basis": "alignment",
      "note": "Two dashed parallel edges extend the twenty-foot alley south across Pico along the modern Margo run; whether this denotes an existing roadway is uncertain."
    },
    {
      "kind": "unnamed",
      "street": "Grand Avenue",
      "from": "Pico Boulevard",
      "to": null,
      "basis": "alignment",
      "note": "Added in review: the sheet draws and letters this stretch and the AI pass had no row for it."
    }
  ]
};
