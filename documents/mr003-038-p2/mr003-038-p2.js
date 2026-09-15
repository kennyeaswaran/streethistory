module.exports = {
  id: "mr003-038-p2",
  title: "Vineyard Subdivision, Los Angeles Cal., for Sale by Wiley & Berry",
  shortTitle: "Vineyard Subdivision",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-038.pdf",
  scan: "documents/mr003-038-p2/mr003-038-p2.pdf",
  transcription: null,

  date: { on: "1915-05-04" },   
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
    [124, 129], [959, 116], [941, 1579], [121, 1604]
  ],
  alignment: {
    image: "documents/mr003-038-p2/mr003-038-p2-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.038495, -118.262329], note: "map-tool corner (0,0)" },
      { px: [1144, 0], ll: [34.036707, -118.259139], note: "map-tool corner (1144,0)" },
      { px: [0, 1761], ll: [34.034397, -118.265627], note: "map-tool corner (0,1761)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["14th Place","14th Street","15th Street","Broadway","Hill Street","Main Street","Pico Boulevard","Venice Boulevard"],

  rows: [
    {
      "kind": "absent",
      "street": "14th Place",
      "from": {
        "px": [
          207,
          591
        ]
      },
      "to": {
        "px": [
          913,
          595
        ]
      },
      "note": "This modern transverse line crosses the undivided John S. Carr parcel; no street is drawn there."
    },
    {
      "kind": "state",
      "asWritten": "CALIFORNIA STREET",
      "street": "14th Street",
      "from": {
        "px": [
          122,
          898
        ]
      },
      "to": {
        "px": [
          911,
          898
        ]
      },
      "basis": "alignment",
      "note": "STREET is lettered here and CALIFORNIA on the adjoining half of the same sheet.",
      "name": "california-street-14th"
    },
    {
      "kind": "state",
      "asWritten": "LAUREL STREET",
      "street": "15th Street",
      "from": {
        "px": [
          122,
          1193
        ]
      },
      "to": {
        "px": [
          946,
          1195
        ]
      },
      "basis": "alignment",
      "note": "STREET is lettered here and LAUREL on the adjoining half of the same sheet.",
      "name": "laurel-dtla"
    },
    {
      "kind": "absent",
      "street": "Broadway",
      "from": {
        "px": [
          558,
          122
        ]
      },
      "to": {
        "px": [
          555,
          1591
        ]
      },
      "note": "The modern Broadway line runs through John S. Carr's blank parcel and the centers of blocks A and B, not a road corridor."
    },
    {
      "kind": "state",
      "asWritten": "HILL STREET",
      "name": "hill-street-downtown",
      "street": "Hill Street",
      "from": {
        "px": [
          218,
          128
        ]
      },
      "to": {
        "px": [
          206,
          1601
        ]
      },
      "basis": "alignment",
      "note": "HILL and STREET are lettered on different portions of the same western corridor."
    },
    {
      "kind": "state",
      "asWritten": "MAIN STREET",
      "name": "main-street-dtla",
      "street": "Main Street",
      "from": {
        "px": [
          915,
          117
        ]
      },
      "to": {
        "px": [
          909,
          1580
        ]
      },
      "basis": "alignment",
      "note": "MAIN and STREET are lettered on different portions of the same eastern corridor."
    },
    {
      "kind": "state",
      "asWritten": "PICO STREET",
      "name": "pico",
      "street": "Pico Boulevard",
      "from": {
        "px": [
          124,
          219
        ]
      },
      "to": {
        "px": [
          712,
          223
        ]
      },
      "basis": "alignment",
      "note": "STREET is lettered here and PICO on the adjoining half of the same sheet."
    },
    {
      "kind": "state",
      "street": "Pico Boulevard",
      "from": {
        "px": [
          915,
          203
        ]
      },
      "to": {
        "px": [
          712,
          223
        ]
      },
      "note": "The separate southeast-running modern branch crosses the blank margin beyond the tract edge, not the drawn northern roadway.",
      "basis": "alignment",
      "asWritten": "Pico Street",
      "name": "pico"
    },
    {
      "kind": "absent",
      "street": "Pico Boulevard",
      "from": {
        "px": [
          712,
          223
        ]
      },
      "to": {
        "px": [
          956,
          323
        ]
      },
      "note": "The separate southeast-running modern branch crosses the blank margin beyond the tract edge, not the drawn northern roadway."
    },
    {
      "kind": "state",
      "asWritten": "PINE STREET",
      "street": "Venice Boulevard",
      "from": {
        "px": [
          121,
          1484
        ]
      },
      "to": {
        "px": [
          906,
          1494
        ]
      },
      "basis": "alignment",
      "note": "STREET is lettered here and PINE on the adjoining half of the same sheet.",
      "name": "pine-street-venice"
    }
  ]
};
