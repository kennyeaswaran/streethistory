module.exports = {
  id: "tr0201-001-p2",
  title: "Tract No. 11189",
  shortTitle: "Tract No. 11189",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0201/TR0201-001-p2.pdf",
  scan: "documents/tr0201-001-p2/tr0201-001-p2.pdf",
  transcription: null,

  date: { on: "1936-05" },   
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
    [424, 781], [440, 1885], [1451, 1894], [1505, 762]
  ],
  alignment: {
    image: "documents/tr0201-001-p2/tr0201-001-p2-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.055459, -118.234329], note: "map-tool corner (0,0)" },
      { px: [1759, 0], ll: [34.05467, -118.228553], note: "map-tool corner (1759,0)" },
      { px: [0, 2432], ll: [34.048796, -118.235637], note: "map-tool corner (0,2432)" }
    ]
  },

  // The polygon strays onto these; the document does not inform about them.
  // NOT the same as a absent row, which says the sheet covers the ground and
  // draws nothing there (MODEL-SPEC §4.4, §5.2).
  coverageExcept: [{"street":"Keller Street","from":null,"to":null}],

  sweptFully: true,
  sweptFor: ["Center Street","Commercial Street","Ducommun Street","Jackson Street","Keller Street","Temple Street","Vignes Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "CENTER ST.",
      "street": "Center Street",
      "from": {
        "px": [
          1070,
          770
        ]
      },
      "to": {
        "px": [
          1071,
          1891
        ]
      },
      "basis": "alignment",
      "name": "center-street"
    },
    {
      "kind": "state",
      "asWritten": "COMMERCIAL STREET",
      "name": "commercial-street",
      "street": "Commercial Street",
      "from": {
        "px": [
          425,
          844
        ]
      },
      "to": {
        "px": [
          1501,
          850
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
          430,
          1178
        ]
      },
      "to": {
        "px": [
          1097,
          1175
        ]
      },
      "basis": "alignment",
      "name": "ducommun"
    },
    {
      "kind": "state",
      "asWritten": "JACKSON ST.",
      "street": "Jackson Street",
      "from": {
        "px": [
          434,
          1504
        ]
      },
      "to": {
        "px": [
          1073,
          1500
        ]
      },
      "basis": "alignment",
      "name": "jackson-st"
    },
    {
      "kind": "state",
      "asWritten": "TURNER ST.",
      "street": "Temple Street",
      "from": {
        "px": [
          439,
          1826
        ]
      },
      "to": {
        "px": [
          1074,
          1822
        ]
      },
      "basis": "alignment",
      "name": "turner-street"
    },
    {
      "kind": "state",
      "asWritten": "VIGNES ST.",
      "name": "vignes-street",
      "street": "Vignes Street",
      "from": {
        "px": [
          532,
          846
        ]
      },
      "to": {
        "px": [
          527,
          1886
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "vanished",
      "asWritten": "Turner Street",
      "trace": [
        [
          1071,
          1819
        ],
        [
          1465,
          1811
        ]
      ],
      "basis": "alignment",
      "name": "turner-street"
    },
    {
      "kind": "vanished",
      "asWritten": "Jackson Street",
      "trace": [
        [
          1071,
          1496
        ],
        [
          1442,
          1494
        ]
      ],
      "basis": "alignment",
      "name": "jackson-st"
    },
    {
      "kind": "vanished",
      "asWritten": "Ducommun Street",
      "trace": [
        [
          1093,
          1171
        ],
        [
          1466,
          1169
        ]
      ],
      "basis": "alignment",
      "name": "ducommun"
    }
  ]
};
