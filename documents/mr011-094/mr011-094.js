module.exports = {
  id: "mr011-094",
  title: "Map of the Josefa Subdivision of the Celis Vineyard Tract",
  shortTitle: "Josefa Subdivision",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR011/MR011-094.pdf",
  scan: "documents/mr011-094/mr011-094.pdf",
  transcription: null,

  date: { on: "1886-11-09" },   
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
    [907, 381], [103, 395], [127, 1398], [887, 1357]
  ],
  alignment: {
    image: "documents/mr011-094/mr011-094-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.034816, -118.264771], note: "map-tool corner (0,0)" },
      { px: [1109, 0], ll: [34.038702, -118.261558], note: "map-tool corner (1109,0)" },
      { px: [0, 1659], ll: [34.030805, -118.257804], note: "map-tool corner (0,1659)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["14th Place","14th Street","15th Street","Los Angeles Street","Main Street","Maple Avenue","Pico Boulevard","Santee Street"],

  rows: [
    {
      "kind": "absent",
      "street": "14th Place",
      "from": {
        "px": [
          598,
          386
        ]
      },
      "to": {
        "px": [
          599,
          509
        ]
      },
      "note": "The short modern line west of Main Street crosses blank ground above the first lot row, with no roadway shown."
    },
    {
      "kind": "state",
      "asWritten": "Consuelo Street",
      "street": "14th Street",
      "from": {
        "px": [
          493,
          509
        ]
      },
      "to": {
        "px": [
          505,
          1254
        ]
      },
      "basis": "alignment",
      "note": "This sheet is rotated; the modern east-west 14th Street follows the vertical Consuelo corridor across the lots.",
      "name": "consuelo"
    },
    {
      "kind": "unnamed",
      "street": "14th Street",
      "from": {
        "px": [
          397,
          390
        ]
      },
      "to": {
        "px": [
          400,
          510
        ]
      },
      "note": "The separate short western run north of Main crosses blank ground, not the Consuelo corridor."
    },
    {
      "kind": "state",
      "street": "15th Street",
      "from": {
        "px": [
          202,
          393
        ]
      },
      "to": {
        "px": [
          215,
          1393
        ]
      },
      "basis": "alignment",
      "note": "The western two-edged corridor is lettered only with the generic word Street.",
      "asWritten": "Laurel Street",
      "name": "laurel-dtla"
    },
    {
      "kind": "state",
      "asWritten": "Los Angeles Street",
      "name": "los-angeles-street",
      "street": "Los Angeles Street",
      "from": {
        "px": [
          899,
          753
        ]
      },
      "to": {
        "px": [
          112,
          759
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
          904,
          506
        ]
      },
      "to": {
        "px": [
          106,
          513
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "Maple Avenue",
      "name": "maple-dtla",
      "street": "Maple Avenue",
      "from": {
        "px": [
          889,
          1249
        ]
      },
      "to": {
        "px": [
          124,
          1255
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "Pico Street",
      "name": "pico",
      "street": "Pico Boulevard",
      "from": {
        "px": [
          838,
          382
        ]
      },
      "to": {
        "px": [
          793,
          1362
        ]
      },
      "basis": "alignment",
      "note": "The road at the right of the lot rows is lettered Pico Street; a second short modern run by Main lies along the same margin."
    },
    {
      "kind": "state",
      "asWritten": "Santee Street",
      "name": "santee-street",
      "street": "Santee Street",
      "from": {
        "px": [
          894,
          1004
        ]
      },
      "to": {
        "px": [
          118,
          1010
        ]
      },
      "basis": "alignment"
    }
  ]
};
