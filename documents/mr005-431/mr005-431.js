module.exports = {
  id: "mr005-431",
  title: "Wright's Subdivision of the Sisters of Charity Tract",
  shortTitle: "Wright's Subdivision",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-431.pdf",
  scan: "documents/mr005-431/mr005-431.pdf",
  transcription: null,

  date: { on: "1884-01" },   
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
    [1052, 301], [306, 305], [259, 1618], [978, 1563]
  ],
  alignment: {
    image: "documents/mr005-431/mr005-431-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.036524, -118.271542], note: "map-tool corner (0,0)" },
      { px: [1113, 0], ll: [34.038282, -118.27547], note: "map-tool corner (1113,0)" },
      { px: [0, 1684], ll: [34.041483, -118.268355], note: "map-tool corner (0,1684)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["Convention Center Drive","Delong Street","L. A. Live Way","Pico Boulevard","Venice Boulevard"],

  rows: [
    {
      "kind": "absent",
      "street": "15th Drive",
      "from": {
        "px": [
          295,
          601
        ]
      },
      "to": {
        "px": [
          526,
          593
        ]
      },
      "note": "The line crosses the northern tier of lots."
    },
    {
      "kind": "absent",
      "street": "Georgia Street",
      "from": {
        "px": [
          507,
          402
        ]
      },
      "to": {
        "px": [
          526,
          593
        ]
      }
    },
    {
      "kind": "state",
      "asWritten": "PICO STREET",
      "street": "Pico Boulevard",
      "from": {
        "px": [
          263,
          1514
        ]
      },
      "to": {
        "px": [
          981,
          1513
        ]
      },
      "basis": "alignment",
      "name": "pico"
    },
    {
      "kind": "state",
      "asWritten": "ROULAND STREET",
      "street": "Venice Boulevard",
      "from": {
        "px": [
          302,
          404
        ]
      },
      "to": {
        "px": [
          671,
          402
        ]
      },
      "basis": "alignment",
      "name": "rouland-street"
    },
    {
      "kind": "vanished",
      "asWritten": "VIRGINIA STREET",
      "trace": [
        [
          401,
          660
        ],
        [
          401,
          1479
        ]
      ],
      "basis": "alignment",
      "name": "virginia-conv-center"
    },
    {
      "kind": "vanished",
      "asWritten": "WRIGHT STREET",
      "trace": [
        [
          633,
          430
        ],
        [
          633,
          1464
        ]
      ],
      "basis": "alignment",
      "name": "wright-street"
    },
    {
      "kind": "absent",
      "street": "Convention Center Drive",
      "from": null,
      "to": null,
      "note": "Added in review: the sheet covers this 241 m and draws no street along it."
    },
    {
      "kind": "state",
      "asWritten": "Virginia Street",
      "street": "Delong Street",
      "from": null,
      "to": null,
      "basis": "alignment",
      "note": "Added in review: the sheet draws and letters this stretch and the AI pass had no row for it.",
      "name": "virginia-conv-center"
    },
    {
      "kind": "state",
      "asWritten": "Cherry Street",
      "street": "L. A. Live Way",
      "from": null,
      "to": null,
      "basis": "alignment",
      "note": "Added in review: the sheet draws and letters this stretch and the AI pass had no row for it.",
      "name": "cherry-street"
    }
  ]
};
