module.exports = {
  id: "tr0100-025",
  title: "Tract No. 8011",
  shortTitle: "Tract No. 8011",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0100/TR0100-025.pdf",
  scan: "documents/tr0100-025/tr0100-025.pdf",
  transcription: null,

  date: { on: "1923-11" },   
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
    [370, 438], [1372, 612], [1247, 1259], [189, 1245]
  ],
  alignment: {
    image: "documents/tr0100-025/tr0100-025-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.054443, -118.239541], note: "map-tool corner (0,0)" },
      { px: [1746, 0], ll: [34.054479, -118.233435], note: "map-tool corner (1746,0)" },
      { px: [0, 2441], ll: [34.047321, -118.239482], note: "map-tool corner (0,2441)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["Alameda Street","Ducommun Street","Temple Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "ALAMEDA STREET",
      "name": "alameda-st",
      "street": "Alameda Street",
      "from": {
        "px": [
          440,
          450
        ]
      },
      "to": {
        "px": [
          409,
          1248
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "DUCOMMUN STREET",
      "street": "Ducommun Street",
      "from": {
        "px": [
          556,
          555
        ]
      },
      "to": {
        "px": [
          1353,
          708
        ]
      },
      "basis": "alignment",
      "name": "ducommun"
    },
    {
      "kind": "absent",
      "street": "Temple Street",
      "from": {
        "px": [
          247,
          986
        ]
      },
      "to": {
        "px": [
          524,
          1249
        ]
      },
      "note": "The modern diagonal does not follow the mapped Jackson Street corridor."
    },
    {
      "kind": "vanished",
      "asWritten": "Jackson Street",
      "trace": [
        [
          403,
          1175
        ],
        [
          192,
          1143
        ]
      ],
      "basis": "alignment",
      "name": "jackson-st"
    },
    {
      "kind": "vanished",
      "asWritten": "Jackson Street",
      "trace": [
        [
          405,
          1126
        ],
        [
          1181,
          1150
        ]
      ],
      "basis": "alignment",
      "name": "jackson-st"
    },
    {
      "kind": "vanished",
      "asWritten": "Hewitt Street",
      "trace": [
        [
          1219,
          685
        ],
        [
          1186,
          914
        ],
        [
          1175,
          1269
        ]
      ],
      "basis": "alignment",
      "name": "hewitt"
    }
  ]
};
