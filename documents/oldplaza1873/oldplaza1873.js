module.exports = {
  id: "oldplaza1873",
  title: "Map of the old portion of the city surrounding the Plaza, showing the Old Plaza Church, public square, the first gas plant and adobe buildings (from a survey of 1873)",
  shortTitle: "Old Plaza, 1873",
  // Huntington Digital Library record (Kenny, 2026-09-18). The JPG beside this
  // file is the download; the citation is the record page.
  url: "https://cdm16003.contentdm.oclc.org/digital/collection/p15150coll4/id/11821/rec/3",
  scan: "documents/oldplaza1873/oldplaza1873.jpg",
  transcription: null,

  date: { on: "1873" },   
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
    [1097, 21], [932, 272], [908, 385], [143, 562],
    [-18, 225], [31, 77]
  ],
  alignment: {
    image: "documents/oldplaza1873/oldplaza1873.jpg",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.055394, -118.24145], note: "map-tool corner (0,0)" },
      { px: [1141, 0], ll: [34.06182, -118.238196], note: "map-tool corner (1141,0)" },
      { px: [0, 796], ll: [34.0535, -118.236077], note: "map-tool corner (0,796)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["Alameda Street","Aliso Street","Arcadia Street","Bauchet Street","Cesar E Chavez Avenue","Los Angeles Street","Main Street","New High Street","Olvera Street","Ord Street","Sanchez Street","Santa Ana Freeway","Spring Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "ALAMEDA STREET",
      "name": "alameda-st",
      "street": "Alameda Street",
      "from": {
        "px": [
          923,
          314
        ]
      },
      "to": {
        "px": [
          112,
          497
        ]
      },
      "basis": "alignment",
      "confirmed": true
    },
    {
      "kind": "absent",
      "street": "Aliso Street",
      "from": {
        "px": [
          71,
          75
        ]
      },
      "to": {
        "px": [
          7,
          277
        ]
      },
      "confirmed": true,
      "note": "The modern line crosses the mapped blocks and older street network without following a two-edge roadway."
    },
    {
      "kind": "absent",
      "street": "Arcadia Street",
      "from": {
        "px": [
          155,
          70
        ]
      },
      "to": {
        "px": [
          74,
          417
        ]
      },
      "confirmed": true,
      "note": "The modern alignment cuts across buildings, parcels and several older cross streets rather than tracking one historical corridor."
    },
    {
      "kind": "absent",
      "street": "Bauchet Street",
      "from": {
        "px": [
          779,
          345
        ]
      },
      "to": {
        "px": [
          784,
          414
        ]
      },
      "confirmed": true,
      "note": "No north-south roadway is drawn along this short modern segment."
    },
    {
      "kind": "state",
      "street": "Cesar E Chavez Avenue",
      "from": {
        "px": [
          538,
          50
        ]
      },
      "to": {
        "px": [
          574,
          166
        ]
      },
      "note": "North-west of Main Street the later avenue crosses the 1873 blocks rather than following a drawn roadway.",
      "basis": "alignment",
      "name": "short-street-chavez",
      "asWritten": "Calle Corta"
    },
    {
      "kind": "absent",
      "street": "Cesar E Chavez Avenue",
      "from": {
        "px": [
          574,
          166
        ]
      },
      "to": "Main Street",
      "note": "North-west of Main Street the later avenue crosses the 1873 blocks rather than following a drawn roadway."
    },
    {
      "kind": "state",
      "asWritten": "MARCHESSAULT STREET",
      "name": "marchessault-street",
      "street": "Cesar E Chavez Avenue",
      "from": "Main Street",
      "to": "Alameda Street",
      "basis": "alignment",
      "confirmed": true
    },
    {
      "kind": "state",
      "asWritten": "MACY STREET",
      "name": "macy-street",
      "street": "Cesar E Chavez Avenue",
      "from": "Alameda Street",
      "to": {
        "px": [
          643,
          446
        ]
      },
      "basis": "alignment",
      "confirmed": true
    },
    {
      "kind": "state",
      "asWritten": "CALLE de los NEGROS",
      "name": "calle-de-los-negros",
      "street": "Los Angeles Street",
      "from": {
        "px": [
          0,
          262
        ]
      },
      "to": "Arcadia Street",
      "basis": "alignment",
      "confirmed": true
    },
    {
      "kind": "state",
      "street": "Los Angeles Street",
      "from": "Arcadia Street",
      "to": {
        "px": [
          319,
          449
        ]
      },
      "note": "South of the bend the later Los Angeles Street alignment crosses the 1873 parcels before reaching Alameda Street.",
      "basis": "alignment",
      "asWritten": "Calle de los Negros",
      "name": "calle-de-los-negros"
    },
    {
      "kind": "state",
      "asWritten": "LOS ANGELES STREET",
      "name": "los-angeles-street",
      "street": "Los Angeles Street",
      "from": {
        "px": [
          260,
          325
        ]
      },
      "to": {
        "px": [
          371,
          438
        ]
      },
      "basis": "alignment",
      "confirmed": true
    },
    {
      "kind": "state",
      "asWritten": "CALLE PRINCIPAL",
      "name": "main-street-dtla",
      "street": "Main Street",
      "from": {
        "px": [
          19,
          113
        ]
      },
      "to": "Arcadia Street",
      "basis": "alignment",
      "confirmed": true
    },
    {
      "kind": "state",
      "asWritten": "BATH STREET",
      "name": "bath-street-plaza",
      "street": "Main Street",
      "from": "Arcadia Street",
      "to": {
        "px": [
          779,
          345
        ]
      },
      "basis": "alignment",
      "confirmed": true
    },
    {
      "kind": "unnamed",
      "street": "Main Street",
      "from": {
        "px": [
          858,
          328
        ]
      },
      "to": {
        "px": [
          916,
          348
        ]
      },
      "basis": "alignment",
      "note": "The detached eastern modern run follows the continuation of the Bath Street corridor beyond Ord Street."
    },
    {
      "kind": "absent",
      "street": "New High Street",
      "from": {
        "px": [
          538,
          60
        ]
      },
      "to": {
        "px": [
          1076,
          52
        ]
      },
      "confirmed": true,
      "note": "The modern line runs across the fronts and interiors of the blocks north of Calle Principal."
    },
    {
      "kind": "state",
      "asWritten": "WINE STREET",
      "name": "wine-street-plaza",
      "street": "Olvera Street",
      "from": {
        "px": [
          384,
          279
        ]
      },
      "to": {
        "px": [
          617,
          340
        ]
      },
      "basis": "alignment",
      "confirmed": true
    },
    {
      "kind": "state",
      "asWritten": "CALLE ALTA",
      "name": "high-street-chinatown",
      "street": "Ord Street",
      "from": {
        "px": [
          858,
          34
        ]
      },
      "to": "Spring Street",
      "basis": "alignment",
      "confirmed": true
    },
    {
      "kind": "state",
      "street": "Ord Street",
      "from": "Spring Street",
      "to": {
        "px": [
          858,
          328
        ]
      },
      "note": "South of Calle Principal the modern Ord line crosses the adjoining block rather than following the older roadway.",
      "basis": "alignment",
      "asWritten": "Calle Alta",
      "name": "high-street-chinatown"
    },
    {
      "kind": "absent",
      "street": "Sanchez Street",
      "from": {
        "px": [
          131,
          227
        ]
      },
      "to": {
        "px": [
          246,
          245
        ]
      },
      "confirmed": true,
      "note": "The short modern segment crosses the Plaza-side parcels; no distinct roadway corridor follows it on the sheet."
    },
    {
      "kind": "absent",
      "street": "Santa Ana Freeway",
      "from": {
        "px": [
          126,
          72
        ]
      },
      "to": {
        "px": [
          52,
          372
        ]
      },
      "confirmed": true,
      "note": "The freeway carriageway cuts across the nineteenth-century blocks and streets."
    },
    {
      "kind": "absent",
      "street": "Santa Ana Freeway",
      "from": {
        "px": [
          98,
          73
        ]
      },
      "to": {
        "px": [
          34,
          334
        ]
      },
      "confirmed": true,
      "note": "The second carriageway likewise has no corresponding 1873 roadway."
    },
    {
      "kind": "state",
      "asWritten": "CALLE PRINCIPAL",
      "name": "main-street-dtla",
      "street": "Spring Street",
      "from": {
        "px": [
          574,
          165
        ]
      },
      "to": {
        "px": [
          1007,
          158
        ]
      },
      "basis": "alignment",
      "confirmed": true
    },
    {
      "kind": "absent",
      "street": "Spring Street",
      "from": {
        "px": [
          500,
          52
        ]
      },
      "to": {
        "px": [
          538,
          60
        ]
      },
      "confirmed": true,
      "note": "This detached modern branch crosses the end of the older grid rather than following the drawn Spring Street corridor."
    },
    {
      "kind": "vanished",
      "asWritten": "Calle Principal",
      "trace": [
        [
          578,
          161
        ],
        [
          342,
          164
        ]
      ],
      "basis": "alignment",
      "name": "main-street-dtla"
    }
  ]
};
