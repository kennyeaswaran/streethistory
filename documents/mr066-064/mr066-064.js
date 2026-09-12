module.exports = {
  id: "mr066-064",
  title: "Map of Wilde and Strong's Subdivision of the Frank Sabichi Tract",
  shortTitle: "Wilde and Strong Subdivision",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR066/MR066-064.pdf",
  scan: "documents/mr066-064/mr066-064.pdf",
  transcription: null,

  date: { on: "1897-09-21" },   
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
    [141, 1563], [1086, 1436], [1074, 164], [229, 144]
  ],
  alignment: {
    image: "documents/mr066-064/mr066-064-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.039113, -118.249662], note: "map-tool corner (0,0)" },
      { px: [1053, 0], ll: [34.041385, -118.247385], note: "map-tool corner (1053,0)" },
      { px: [0, 1700], ll: [34.036046, -118.245267], note: "map-tool corner (0,1700)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["7th Street","Agatha Street","Crocker Street","Gladys Avenue","San Pedro Street","Stanford Avenue","Towne Avenue"],

  rows: [
    {
      "kind": "state",
      "asWritten": "SEVENTH STREET",
      "street": "7th Street",
      "from": {
        "px": [
          984,
          162
        ]
      },
      "to": {
        "px": [
          973,
          1451
        ]
      },
      "basis": "alignment",
      "name": "seventh-street"
    },
    {
      "kind": "state",
      "asWritten": "AGATHA STREET",
      "street": "Agatha Street",
      "from": {
        "px": [
          436,
          287
        ]
      },
      "to": {
        "px": [
          422,
          1463
        ]
      },
      "basis": "alignment",
      "name": "agatha"
    },
    {
      "kind": "state",
      "asWritten": "CROCKER STREET",
      "street": "Crocker Street",
      "from": {
        "px": [
          200,
          604
        ]
      },
      "to": {
        "px": [
          983,
          620
        ]
      },
      "basis": "alignment",
      "note": "The western modern Crocker run follows the roadway lettered Crocker Street.",
      "name": "crocker-street"
    },
    {
      "kind": "state",
      "asWritten": "GLADYS AVENUE",
      "street": "Gladys Avenue",
      "from": {
        "px": [
          146,
          1490
        ]
      },
      "to": {
        "px": [
          972,
          1408
        ]
      },
      "basis": "alignment",
      "name": "gladys-ave"
    },
    {
      "kind": "state",
      "asWritten": "SAN PEDRO STREET",
      "street": "San Pedro Street",
      "from": {
        "px": [
          221,
          280
        ]
      },
      "to": {
        "px": [
          1075,
          296
        ]
      },
      "basis": "alignment",
      "name": "san-pedro"
    },
    {
      "kind": "state",
      "asWritten": "RUTH AVENUE",
      "street": "Stanford Avenue",
      "from": {
        "px": [
          164,
          1199
        ]
      },
      "to": {
        "px": [
          1084,
          1211
        ]
      },
      "basis": "alignment",
      "note": "The modern Stanford Avenue corridor is lettered Ruth Avenue on the plat.",
      "name": "ruth-ave"
    },
    {
      "kind": "state",
      "asWritten": "TOWNE AVENUE",
      "street": "Towne Avenue",
      "from": {
        "px": [
          182,
          896
        ]
      },
      "to": {
        "px": [
          1081,
          922
        ]
      },
      "basis": "alignment",
      "name": "towne-ave"
    }
  ]
};
