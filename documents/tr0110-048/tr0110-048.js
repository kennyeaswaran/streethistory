module.exports = {
  id: "tr0110-048",
  title: "Tract No. 8701",
  shortTitle: "Tract No. 8701",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0110/TR0110-048.pdf",
  scan: "documents/tr0110-048/tr0110-048.pdf",
  transcription: null,

  date: { on: "1924-09" },   
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
    [318, 384], [217, 1162], [1221, 1192], [1298, 583]
  ],
  alignment: {
    image: "documents/tr0110-048/tr0110-048-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.054363, -118.239453], note: "map-tool corner (0,0)" },
      { px: [1746, 0], ll: [34.054319, -118.233407], note: "map-tool corner (1746,0)" },
      { px: [0, 2350], ll: [34.047574, -118.239524], note: "map-tool corner (0,2350)" }
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
          427,
          406
        ]
      },
      "to": {
        "px": [
          408,
          1168
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
          545,
          524
        ]
      },
      "to": {
        "px": [
          1289,
          656
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
          242,
          967
        ]
      },
      "to": {
        "px": [
          448,
          1169
        ]
      },
      "note": "The modern diagonal does not follow the mapped Jackson Street corridor."
    },
    {
      "kind": "vanished",
      "asWritten": "Jackson Street",
      "trace": [
        [
          409,
          1134
        ],
        [
          202,
          1108
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
          412,
          1079
        ],
        [
          1163,
          1098
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
          1205,
          643
        ],
        [
          1172,
          865
        ],
        [
          1164,
          1214
        ]
      ],
      "basis": "alignment",
      "name": "hewitt"
    }
  ]
};
