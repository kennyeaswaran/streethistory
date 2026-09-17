module.exports = {
  id: "mr002-526-p2",
  title: "Plan of the Subdivision of the Alanis Vineyard Tract",
  shortTitle: "Alanis Vineyard Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR002/MR002-526.pdf",
  scan: "documents/mr002-526-p2/mr002-526-p2.pdf",
  transcription: null,

  date: { on: "1869-05-05" },   
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
    [108, 858], [84, 41], [903, 41], [930, 747]
  ],
  alignment: {
    image: "documents/mr002-526-p2/mr002-526-p2-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.051484, -118.232697], note: "map-tool corner (0,0)" },
      { px: [1105, 0], ll: [34.048384, -118.23344], note: "map-tool corner (1105,0)" },
      { px: [0, 1736], ll: [34.052458, -118.238536], note: "map-tool corner (0,1736)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["Banning Street","Garey Street","Jackson Street","Temple Street","Vignes Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "Banning",
      "street": "Banning Street",
      "from": {
        "px": [
          793,
          41
        ]
      },
      "to": "Vignes Street",
      "basis": "alignment",
      "name": "banning-street"
    },
    {
      "kind": "state",
      "asWritten": "Amelia Street",
      "street": "Garey Street",
      "from": {
        "px": [
          97,
          474
        ]
      },
      "to": "Temple Street",
      "basis": "alignment",
      "name": "amelia"
    },
    {
      "kind": "state",
      "asWritten": "Weill",
      "street": "Jackson Street",
      "from": {
        "px": [
          167,
          41
        ]
      },
      "to": "Garey Street",
      "basis": "alignment",
      "name": "weill"
    },
    {
      "kind": "state",
      "asWritten": "Turner",
      "street": "Temple Street",
      "from": {
        "px": [
          481,
          41
        ]
      },
      "to": {
        "px": [
          506,
          804
        ]
      },
      "basis": "alignment",
      "name": "turner-street"
    },
    {
      "kind": "state",
      "asWritten": "Vignes Street",
      "street": "Vignes Street",
      "from": {
        "px": [
          88,
          182
        ]
      },
      "to": {
        "px": [
          907,
          147
        ]
      },
      "basis": "alignment",
      "name": "vignes-street"
    },
    {
      "kind": "vanished",
      "asWritten": "Banning St",
      "trace": [
        [
          796,
          152
        ],
        [
          807,
          771
        ]
      ],
      "basis": "alignment",
      "name": "banning-street"
    },
    {
      "kind": "vanished",
      "asWritten": "Lafayette Str",
      "trace": [
        [
          498,
          744
        ],
        [
          89,
          803
        ]
      ],
      "basis": "alignment",
      "name": "lafayette-french"
    }
  ]
};
