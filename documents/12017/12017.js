module.exports = {
  id: "12017",
  title: "Map of O. W. Childs Tract in the city of Los Angeles, Cal.",
  shortTitle: "O. W. Childs Tract (Hansen & Solano survey)",
  url: "https://hdl.huntington.org/digital/collection/p15150coll4/id/12017",
  scan: "documents/12017/12017.jpg",
  transcription: null,

  date: { on: "1883-04-10" },   
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
    [385, 1173], [8475, 1973], [8933, 6108], [442, 5893]
  ],
  alignment: {
    image: "documents/12017/12017.jpg",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.041159, -118.257068], note: "map-tool corner (0,0)" },
      { px: [8999, 0], ll: [34.036478, -118.249862], note: "map-tool corner (8999,0)" },
      { px: [0, 7542], ll: [34.036119, -118.261769], note: "map-tool corner (0,7542)" }
    ]
  },

  // The polygon strays onto these; the document does not inform about them.
  // NOT the same as a absent row, which says the sheet covers the ground and
  // draws nothing there (MODEL-SPEC §4.4, §5.2).
  coverageExcept: [{"street":"Pico Boulevard","from":null,"to":null}],

  sweptFully: true,
  sweptFor: ["11th Street","12th Street","Los Angeles Street","Main Street","Maple Avenue","Pico Boulevard","San Julian Street","San Pedro Street","Santee Alley","Santee Street","Wall Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "Eleventh Street",
      "street": "11th Street",
      "from": {
        "px": [
          402,
          2581
        ]
      },
      "to": {
        "px": [
          8086,
          2573
        ]
      },
      "basis": "alignment",
      "note": "The modern 11th Street trace follows the roadway lettered Eleventh Street across the tract.",
      "name": "eleventh-street"
    },
    {
      "kind": "state",
      "asWritten": "Twelfth Street",
      "street": "12th Street",
      "from": {
        "px": [
          428,
          4719
        ]
      },
      "to": {
        "px": [
          8770,
          4637
        ]
      },
      "basis": "alignment",
      "note": "The modern 12th Street trace follows the roadway lettered Twelfth Street across the tract.",
      "name": "twelfth-street"
    },
    {
      "kind": "state",
      "asWritten": "Los Angeles Street",
      "street": "Los Angeles Street",
      "from": {
        "px": [
          1934,
          1326
        ]
      },
      "to": {
        "px": [
          2134,
          5936
        ]
      },
      "basis": "alignment",
      "name": "los-angeles-street"
    },
    {
      "kind": "state",
      "asWritten": "Main Street",
      "street": "Main Street",
      "from": {
        "px": [
          592,
          1193
        ]
      },
      "to": {
        "px": [
          893,
          5904
        ]
      },
      "basis": "alignment",
      "name": "main-street-dtla"
    },
    {
      "kind": "state",
      "asWritten": "Maple Avenue",
      "street": "Maple Avenue",
      "from": {
        "px": [
          4358,
          1566
        ]
      },
      "to": {
        "px": [
          4634,
          5999
        ]
      },
      "basis": "alignment",
      "name": "maple-dtla"
    },
    {
      "kind": "state",
      "asWritten": "San Julian Street",
      "street": "San Julian Street",
      "from": {
        "px": [
          6842,
          1812
        ]
      },
      "to": {
        "px": [
          7124,
          6062
        ]
      },
      "basis": "alignment",
      "name": "san-julian-st"
    },
    {
      "kind": "state",
      "asWritten": "San Pedro Street",
      "street": "San Pedro Street",
      "from": {
        "px": [
          8008,
          1927
        ]
      },
      "to": {
        "px": [
          8455,
          5975
        ]
      },
      "basis": "alignment",
      "name": "san-pedro"
    },
    {
      "kind": "unnamed",
      "street": "Santee Alley",
      "from": {
        "px": [
          3758,
          1507
        ]
      },
      "to": "12th Street",
      "basis": "alignment",
      "note": "A narrow 20-foot alley is drawn through the blocks on this alignment, but no name is lettered along it."
    },
    {
      "kind": "absent",
      "street": "Santee Alley",
      "from": "12th Street",
      "to": {
        "px": [
          3974,
          5319
        ]
      },
      "basis": "alignment",
      "note": "A narrow 20-foot alley is drawn through the blocks on this alignment, but no name is lettered along it."
    },
    {
      "kind": "state",
      "asWritten": "William Street",
      "street": "Santee Street",
      "from": {
        "px": [
          3143,
          1446
        ]
      },
      "to": {
        "px": [
          3402,
          5968
        ]
      },
      "basis": "alignment",
      "name": "william"
    },
    {
      "kind": "state",
      "asWritten": "Wall Street",
      "street": "Wall Street",
      "from": {
        "px": [
          5618,
          1691
        ]
      },
      "to": {
        "px": [
          5877,
          6031
        ]
      },
      "basis": "alignment",
      "name": "myrtle"
    }
  ]
};
