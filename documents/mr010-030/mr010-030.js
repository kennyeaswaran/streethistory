module.exports = {
  id: "mr010-030",
  title: "Map of Kincaid's Tract, Los Angeles Cal.",
  shortTitle: "Kincaid's Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR010/MR010-030.pdf",
  scan: "documents/mr010-030/mr010-030.pdf",
  transcription: null,

  date: { on: "1886-07-24" },   
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
    [165, 261], [179, 1556], [987, 1604], [1170, 112]
  ],
  alignment: {
    image: "documents/mr010-030/mr010-030-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.045928, -118.26811], note: "map-tool corner (0,0)" },
      { px: [1100, 0], ll: [34.044289, -118.264416], note: "map-tool corner (1100,0)" },
      { px: [0, 1649], ll: [34.041308, -118.271054], note: "map-tool corner (0,1649)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["11th Street","12th Street","Chick Hearn Court","Figueroa Street","Georgia Street","Peacock Place","Pico Boulevard"],

  rows: [
    {
      "kind": "absent",
      "street": "11th Street",
      "from": {
        "px": [
          996,
          268
        ]
      },
      "to": {
        "px": [
          1148,
          290
        ]
      },
      "note": "This short modern segment lies east of Pearl and north of the plat's Eleventh Street corridor; the sheet does not continue that roadway here."
    },
    {
      "kind": "absent",
      "street": "12th Street",
      "from": {
        "px": [
          880,
          965
        ]
      },
      "to": {
        "px": [
          1070,
          924
        ]
      },
      "note": "The modern 12th line cuts the Pearl corridor and blank ground east of it well south of the separately drawn Twelfth Street."
    },
    {
      "kind": "absent",
      "street": "Chick Hearn Court",
      "from": {
        "px": [
          167,
          486
        ]
      },
      "to": {
        "px": [
          996,
          268
        ]
      },
      "note": "This diagonal modern 11th continuation crosses numbered lot interiors and only intersects, rather than follows, the plat's straight Eleventh Street."
    },
    {
      "kind": "state",
      "asWritten": "Pearl",
      "name": "pearl",
      "street": "Figueroa Street",
      "from": {
        "px": [
          1025,
          134
        ]
      },
      "to": {
        "px": [
          794,
          1593
        ]
      },
      "basis": "alignment",
      "note": "The modern Figueroa corridor is the road lettered Pearl on the eastern side of the tract."
    },
    {
      "kind": "state",
      "street": "Georgia Street",
      "from": {
        "px": [
          271,
          245
        ]
      },
      "to": {
        "px": [
          265,
          360
        ]
      },
      "note": "North of the Eleventh crossing the short modern Georgia run is on a northward extension of Nevada Street.",
      "basis": "alignment",
      "name": "nevada-1886",
      "asWritten": "Nevada St"
    },
    {
      "kind": "state",
      "asWritten": "Nevada",
      "street": "Georgia Street",
      "from": {
        "px": [
          265,
          360
        ]
      },
      "to": {
        "px": [
          265,
          489
        ]
      },
      "basis": "alignment",
      "note": "South of Eleventh, this run lies near the eastern half of the two-edged Nevada corridor; the sheet letters Nevada farther south.",
      "name": "nevada-1886"
    },
    {
      "kind": "absent",
      "street": "Peacock Place",
      "from": {
        "px": [
          678,
          185
        ]
      },
      "to": {
        "px": [
          815,
          165
        ]
      },
      "note": "The short modern place is in blank title-block ground north of the tract's Eleventh Street frontage."
    },
    {
      "kind": "state",
      "asWritten": "Pico St.",
      "name": "pico",
      "street": "Pico Boulevard",
      "from": {
        "px": [
          178,
          1434
        ]
      },
      "to": {
        "px": [
          178,
          1478
        ]
      },
      "basis": "alignment",
      "note": "Only a tiny western portion of the modern Pico run enters the plat's Pico corridor here."
    },
    {
      "kind": "state",
      "asWritten": "Pico St.",
      "name": "pico",
      "street": "Pico Boulevard",
      "from": {
        "px": [
          796,
          1467
        ]
      },
      "to": {
        "px": [
          1003,
          1476
        ]
      },
      "basis": "alignment",
      "note": "The separate eastern modern Pico run lies inside the corridor lettered Pico St."
    },
    {
      "kind": "vanished",
      "asWritten": "Eleventh St.",
      "trace": [
        [
          220,
          332
        ],
        [
          933,
          331
        ]
      ],
      "basis": "alignment",
      "note": "Straight roadway across the northern frontage; the supplied modern Chick Hearn geometry crosses it diagonally rather than following it.",
      "name": "eleventh-street"
    },
    {
      "kind": "vanished",
      "asWritten": "Nevada",
      "trace": [
        [
          235,
          526
        ],
        [
          237,
          1393
        ]
      ],
      "basis": "alignment",
      "note": "The lower part of Nevada Street extends far beyond the short modern Georgia segment supplied for this coverage.",
      "name": "nevada-1886"
    },
    {
      "kind": "vanished",
      "asWritten": "Belmont Avenue",
      "trace": [
        [
          596,
          478
        ],
        [
          598,
          1400
        ]
      ],
      "basis": "alignment",
      "note": "North-south corridor between the two blocks of numbered lots, without a modern match in the supplied street list.",
      "name": "belmont-kincaid"
    },
    {
      "kind": "vanished",
      "asWritten": "Twelfth St.",
      "trace": [
        [
          1010,
          748
        ],
        [
          1085,
          754
        ]
      ],
      "basis": "alignment",
      "note": "Short two-edged roadway shown east of Pearl, well north of the modern 12th Street line.",
      "name": "twelfth-street"
    }
  ]
};
