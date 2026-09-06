module.exports = {
  id: "mr006-378",
  title: "Map of the O. W. Childs Tract, 200 Lots in the City of Los Angeles, Cal.",
  shortTitle: "O. W. Childs Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-378.pdf",
  scan: "documents/mr006-378/mr006-378.pdf",
  transcription: null,

  date: { on: "1885-07-11" },   
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
    [240, 307], [1486, 305], [1538, 837], [301, 899]
  ],
  alignment: {
    image: "documents/mr006-378/mr006-378-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.041992, -118.25807], note: "map-tool corner (0,0)" },
      { px: [1658, 0], ll: [34.036184, -118.249321], note: "map-tool corner (1658,0)" },
      { px: [0, 1130], ll: [34.037015, -118.262813], note: "map-tool corner (0,1130)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["11th Street","12th Street","Los Angeles Street","Main Street","Maple Avenue","San Julian Street","San Pedro Street","Santee Alley","Santee Street","Wall Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "Eleventh Street",
      "street": "11th Street",
      "from": {
        "px": [
          251,
          412
        ]
      },
      "to": {
        "px": [
          1429,
          398
        ]
      },
      "basis": "alignment",
      "note": "The modern 11th Street trace follows the complete roadway lettered Eleventh Street.",
      "name": "eleventh-street"
    },
    {
      "kind": "state",
      "asWritten": "Twelfth Street",
      "street": "12th Street",
      "from": {
        "px": [
          284,
          733
        ]
      },
      "to": {
        "px": [
          1525,
          708
        ]
      },
      "basis": "alignment",
      "note": "The modern 12th Street trace follows the complete roadway lettered Twelfth Street.",
      "name": "twelfth-street"
    },
    {
      "kind": "state",
      "asWritten": "Los Angeles St.",
      "street": "Los Angeles Street",
      "from": {
        "px": [
          497,
          307
        ]
      },
      "to": {
        "px": [
          538,
          887
        ]
      },
      "basis": "alignment",
      "note": "The modern centerline remains within the full roadway lettered Los Angeles St.",
      "name": "los-angeles-street"
    },
    {
      "kind": "state",
      "asWritten": "Main St.",
      "street": "Main Street",
      "from": {
        "px": [
          304,
          307
        ]
      },
      "to": {
        "px": [
          351,
          896
        ]
      },
      "basis": "alignment",
      "note": "The modern Main Street line follows the full roadway lettered Main St.",
      "name": "main-street-dtla"
    },
    {
      "kind": "state",
      "asWritten": "Maple Ave.",
      "street": "Maple Avenue",
      "from": {
        "px": [
          868,
          306
        ]
      },
      "to": {
        "px": [
          913,
          868
        ]
      },
      "basis": "alignment",
      "note": "The modern Maple Avenue centerline follows the roadway lettered Maple Ave.",
      "name": "maple-dtla"
    },
    {
      "kind": "state",
      "asWritten": "San Julian St.",
      "street": "San Julian Street",
      "from": {
        "px": [
          1242,
          305
        ]
      },
      "to": {
        "px": [
          1285,
          850
        ]
      },
      "basis": "alignment",
      "note": "The modern San Julian Street line follows the full roadway lettered San Julian St.",
      "name": "san-julian-st"
    },
    {
      "kind": "state",
      "asWritten": "San Pedro St.",
      "street": "San Pedro Street",
      "from": {
        "px": [
          1417,
          305
        ]
      },
      "to": {
        "px": [
          1481,
          840
        ]
      },
      "basis": "alignment",
      "note": "The modern San Pedro Street line follows the full roadway lettered San Pedro St.",
      "name": "san-pedro"
    },
    {
      "kind": "unnamed",
      "street": "Santee Alley",
      "from": {
        "px": [
          775,
          306
        ]
      },
      "to": {
        "px": [
          815,
          817
        ]
      },
      "note": "The modern alley runs through the interiors of the numbered lots between William and Maple; no roadway is drawn there."
    },
    {
      "kind": "state",
      "asWritten": "William St.",
      "street": "Santee Street",
      "from": {
        "px": [
          681,
          306
        ]
      },
      "to": {
        "px": [
          727,
          878
        ]
      },
      "basis": "alignment",
      "note": "The modern Santee Street centerline follows the historical roadway lettered William St.",
      "name": "william"
    },
    {
      "kind": "state",
      "asWritten": "Myrtle Ave.",
      "street": "Wall Street",
      "from": {
        "px": [
          1058,
          306
        ]
      },
      "to": {
        "px": [
          1097,
          859
        ]
      },
      "basis": "alignment",
      "note": "The modern Wall Street centerline follows the historical roadway lettered Myrtle Ave.",
      "name": "myrtle"
    }
  ]
};
