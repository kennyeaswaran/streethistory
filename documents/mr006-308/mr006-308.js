module.exports = {
  id: "mr006-308",
  title: "Map of a Portion of Alvarado Tract",
  shortTitle: "Alvarado Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-308.pdf",
  scan: "documents/mr006-308/mr006-308.pdf",
  transcription: null,

  date: { on: "1888-07-12" },   
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
    [444, 438], [77, 966], [706, 1559], [1112, 952]
  ],
  alignment: {
    image: "documents/mr006-308/mr006-308-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.053741, -118.242872], note: "map-tool corner (0,0)" },
      { px: [1073, 0], ll: [34.053754, -118.239907], note: "map-tool corner (1073,0)" },
      { px: [0, 1696], ll: [34.04983, -118.242847], note: "map-tool corner (0,1696)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["1st Street","Judge John Aiso Street","Los Angeles Street","Toriumi Plaza"],

  rows: [
    {
      "kind": "state",
      "asWritten": "FIRST STREET",
      "street": "1st Street",
      "from": {
        "px": [
          111,
          917
        ]
      },
      "to": {
        "px": [
          749,
          1495
        ]
      },
      "basis": "alignment",
      "name": "first-street"
    },
    {
      "kind": "state",
      "asWritten": "WILMINGTON ST.",
      "street": "Judge John Aiso Street",
      "from": {
        "px": [
          1032,
          891
        ]
      },
      "to": "1st Street",
      "basis": "alignment",
      "name": "wilmington-street"
    },
    {
      "kind": "state",
      "asWritten": "LOS ANGELES ST.",
      "street": "Los Angeles Street",
      "from": {
        "px": [
          504,
          485
        ]
      },
      "to": "1st Street",
      "basis": "alignment",
      "name": "los-angeles-street"
    },
    {
      "kind": "absent",
      "street": "Toriumi Plaza",
      "from": {
        "px": [
          629,
          1282
        ]
      },
      "to": "Judge John Aiso Street",
      "note": "The plaza lies in the undivided tract interior."
    },
    {
      "kind": "absent",
      "street": "Toriumi Plaza",
      "from": "Judge John Aiso Street",
      "to": {
        "px": [
          629,
          1282
        ]
      },
      "note": "The plaza lies in the undivided tract interior."
    },
    {
      "kind": "vanished",
      "asWritten": "Jackson St",
      "trace": [
        [
          444,
          562
        ],
        [
          588,
          655
        ],
        [
          711,
          890
        ],
        [
          964,
          1054
        ]
      ],
      "basis": "alignment",
      "name": "jackson-st-little-tokyo"
    }
  ]
};
