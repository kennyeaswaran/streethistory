module.exports = {
  id: "mr007-056",
  title: "Map of the Los Angeles Improvement Co.'s Subdivision of Part of Lot 2, Block 38, Hancock's Survey",
  shortTitle: "Los Angeles Improvement Co.'s Subdivision",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR007/MR007-056.pdf",
  scan: "documents/mr007-056/mr007-056.pdf",
  transcription: null,

  date: { on: "1886-01-26" },   
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
    [74, 444], [78, 1217], [900, 1255], [1143, 441]
  ],
  alignment: {
    image: "documents/mr007-056/mr007-056-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.064191, -118.261091], note: "map-tool corner (0,0)" },
      { px: [1109, 0], ll: [34.062754, -118.257782], note: "map-tool corner (1109,0)" },
      { px: [0, 1667], ll: [34.060042, -118.26368], note: "map-tool corner (0,1667)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["1st Street","2nd Street","Beverly Boulevard","Glendale Boulevard","Lucas Avenue","Toluca Street","Witmer Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "Diamond St",
      "name": "diamond-street",
      "street": "1st Street",
      "from": {
        "px": [
          503,
          532
        ]
      },
      "to": {
        "px": [
          1113,
          541
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "Silver St",
      "street": "2nd Street",
      "from": {
        "px": [
          78,
          1170
        ]
      },
      "to": {
        "px": [
          827,
          918
        ]
      },
      "basis": "alignment",
      "name": "silver-st"
    },
    {
      "kind": "state",
      "asWritten": "Second Street",
      "name": "second-street",
      "street": "2nd Street",
      "from": {
        "px": [
          796,
          541
        ]
      },
      "to": {
        "px": [
          817,
          523
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "Second Street",
      "name": "second-street",
      "street": "2nd Street",
      "from": {
        "px": [
          997,
          608
        ]
      },
      "to": {
        "px": [
          1081,
          650
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "Diamond St",
      "name": "diamond-street",
      "street": "Beverly Boulevard",
      "from": {
        "px": [
          74,
          525
        ]
      },
      "to": {
        "px": [
          503,
          532
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "absent",
      "street": "Glendale Boulevard",
      "from": {
        "px": [
          699,
          442
        ]
      },
      "to": {
        "px": [
          817,
          523
        ]
      },
      "basis": "alignment",
      "note": "This branch is also annotated as the Second Street cable railroad."
    },
    {
      "kind": "state",
      "asWritten": "Lucas Ave",
      "street": "Lucas Avenue",
      "from": {
        "px": [
          719,
          488
        ]
      },
      "to": {
        "px": [
          827,
          1252
        ]
      },
      "basis": "alignment",
      "name": "lucas-ave"
    },
    {
      "kind": "absent",
      "street": "Toluca Street",
      "from": {
        "px": [
          1084,
          441
        ]
      },
      "to": {
        "px": [
          1057,
          639
        ]
      },
      "note": "The modern line lies outside the drawn subdivision streets."
    },
    {
      "kind": "state",
      "asWritten": "Witmer St",
      "name": "witmer-street",
      "street": "Witmer Street",
      "from": {
        "px": [
          427,
          568
        ]
      },
      "to": {
        "px": [
          416,
          1233
        ]
      },
      "basis": "alignment"
    }
  ]
};
