module.exports = {
  id: "mr053-016",
  title: "Miguel Subdivision, part of the Celis Vineyard Tract in Los Angeles City, Cal.",
  shortTitle: "Miguel Subdivision",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-016.pdf",
  scan: "documents/mr053-016/mr053-016.pdf",
  transcription: null,

  date: { on: "1893-03-25" },   
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
    [212, 736], [212, 1012], [905, 986], [890, 700]
  ],
  alignment: {
    image: "documents/mr053-016/mr053-016-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.038987, -118.26028], note: "map-tool corner (0,0)" },
      { px: [1065, 0], ll: [34.035351, -118.254392], note: "map-tool corner (1065,0)" },
      { px: [0, 1700], ll: [34.031142, -118.267236], note: "map-tool corner (0,1700)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["15th Street","16th Street","Los Angeles Street","Main Street","Maple Avenue","Santee Street","Venice Boulevard"],

  rows: [
    {
      "kind": "state",
      "asWritten": [
        "15th ST.",
        "(formerly Laura St)"
      ],
      "street": "15th Street",
      "from": {
        "px": [
          212,
          812
        ]
      },
      "to": {
        "px": [
          894,
          781
        ]
      },
      "basis": "alignment",
      "note": "The modern 15th Street trace follows the full corridor carrying both the current-on-sheet and parenthetical former labels.",
      "name": "fifteenth-street"
    },
    {
      "kind": "state",
      "asWritten": [
        "16th ST.",
        "(formerly Pine St)"
      ],
      "street": "16th Street",
      "from": "Main Street",
      "to": "Maple Avenue",
      "basis": "alignment",
      "note": "East of Main, modern 16th Street follows the roadway jointly labeled 16th ST. and formerly Pine St.",
      "name": "sixteenth-street"
    },
    {
      "kind": "state",
      "asWritten": "LOS ANGELES ST.",
      "street": "Los Angeles Street",
      "from": {
        "px": [
          461,
          723
        ]
      },
      "to": {
        "px": [
          473,
          1002
        ]
      },
      "basis": "alignment",
      "note": "The modern centerline follows the complete roadway lettered LOS ANGELES ST.",
      "name": "los-angeles-street"
    },
    {
      "kind": "state",
      "asWritten": "MAIN ST.",
      "street": "Main Street",
      "from": {
        "px": [
          279,
          732
        ]
      },
      "to": {
        "px": [
          291,
          1009
        ]
      },
      "basis": "alignment",
      "note": "The modern Main Street line follows the complete roadway lettered MAIN ST.",
      "name": "main-street-dtla"
    },
    {
      "kind": "state",
      "asWritten": "MAPLE AVE.",
      "street": "Maple Avenue",
      "from": {
        "px": [
          830,
          703
        ]
      },
      "to": "16th Street",
      "basis": "alignment",
      "note": "The supplied modern Maple Avenue segment follows the roadway lettered MAPLE AVE. through the subdivision.",
      "name": "maple-dtla"
    },
    {
      "kind": "state",
      "asWritten": "SANTEE ST.",
      "street": "Santee Street",
      "from": {
        "px": [
          647,
          713
        ]
      },
      "to": "16th Street",
      "basis": "alignment",
      "note": "The supplied modern Santee Street segment follows the roadway lettered SANTEE ST.",
      "name": "santee-street"
    },
    {
      "kind": "state",
      "asWritten": [
        "16th ST.",
        "(formerly Pine St)"
      ],
      "street": "Venice Boulevard",
      "from": {
        "px": [
          212,
          958
        ]
      },
      "to": "Main Street",
      "basis": "alignment",
      "note": "West of Main, modern Venice Boulevard continues along the same roadway labeled 16th ST. and formerly Pine St.",
      "name": "sixteenth-street"
    },
    {
      "kind": "vanished",
      "asWritten": "Santee St",
      "trace": [
        [
          655,
          937
        ],
        [
          655,
          1010
        ]
      ],
      "basis": "alignment",
      "name": "santee-street"
    },
    {
      "kind": "vanished",
      "asWritten": "Maple Ave",
      "trace": [
        [
          834,
          930
        ],
        [
          834,
          1003
        ]
      ],
      "basis": "alignment",
      "name": "maple-dtla"
    }
  ]
};
