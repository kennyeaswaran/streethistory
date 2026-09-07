module.exports = {
  id: "tr0145-062",
  title: "Tract No. 9771 in the City of Los Angeles",
  shortTitle: "Tract No. 9771",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0145/TR0145-062.pdf",
  scan: "documents/tr0145-062/tr0145-062.pdf",
  transcription: null,

  date: { on: "1928-01-04" },   
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
    [56, 577], [80, 1445], [1497, 1544], [1591, 709]
  ],
  alignment: {
    image: "documents/tr0145-062/tr0145-062-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.053586, -118.238424], note: "map-tool corner (0,0)" },
      { px: [1746, 0], ll: [34.053402, -118.23241], note: "map-tool corner (1746,0)" },
      { px: [0, 2431], ll: [34.046599, -118.238731], note: "map-tool corner (0,2431)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["Alameda Street","Banning Street","Garey Street","Jackson Street","Temple Street","Vignes Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "ALAMEDA STREET",
      "street": "Alameda Street",
      "from": {
        "px": [
          133,
          584
        ]
      },
      "to": {
        "px": [
          139,
          1449
        ]
      },
      "basis": "alignment",
      "note": "The modern Alameda Street centerline follows the roadway lettered ALAMEDA STREET.",
      "name": "alameda-st"
    },
    {
      "kind": "state",
      "street": "Banning Street",
      "from": {
        "px": [
          1414,
          1431
        ]
      },
      "to": {
        "px": [
          1509,
          1442
        ]
      },
      "basis": "alignment",
      "note": "The short modern Banning Street segment follows an unlabeled roadway east of Vignes Street; the separately lettered BANNING STREET corridor lies substantially farther north on this map.",
      "asWritten": "Banning Street",
      "name": "banning-street"
    },
    {
      "kind": "absent",
      "street": "Garey Street",
      "from": {
        "px": [
          1210,
          676
        ]
      },
      "to": {
        "px": [
          1162,
          1080
        ]
      },
      "note": "The modern Garey Street trace crosses the unsubdivided parcel between the external street grid and Temple Street; no roadway is drawn there."
    },
    {
      "kind": "state",
      "street": "Jackson Street",
      "from": {
        "px": [
          1198,
          773
        ]
      },
      "to": {
        "px": [
          1578,
          820
        ]
      },
      "basis": "alignment",
      "note": "The modern Jackson Street centerline follows the short unlabeled roadway crossing Vignes Street east of the subdivision.",
      "asWritten": "Turner Street",
      "name": "turner-street"
    },
    {
      "kind": "absent",
      "street": "Temple Street",
      "from": {
        "px": [
          62,
          799
        ]
      },
      "to": {
        "px": [
          1543,
          1131
        ]
      },
      "note": "Modern Temple Street crosses Lot A and the area marked NOT A PART OF THIS SUBDIVISION; no two-edge roadway follows it."
    },
    {
      "kind": "state",
      "asWritten": "VIGNES STREET",
      "street": "Vignes Street",
      "from": {
        "px": [
          1500,
          701
        ]
      },
      "to": {
        "px": [
          1401,
          1537
        ]
      },
      "basis": "alignment",
      "note": "The modern Vignes Street centerline follows the roadway lettered VIGNES STREET.",
      "name": "vignes-street"
    },
    {
      "kind": "vanished",
      "asWritten": "Banning Street",
      "trace": [
        [
          134,
          1384
        ],
        [
          821,
          1366
        ],
        [
          1418,
          1433
        ]
      ],
      "basis": "alignment",
      "name": "banning-street"
    },
    {
      "kind": "vanished",
      "asWritten": "Turner Street",
      "trace": [
        [
          139,
          742
        ],
        [
          1036,
          725
        ],
        [
          1208,
          764
        ]
      ],
      "basis": "alignment",
      "name": "turner-street"
    },
    {
      "kind": "vanished",
      "asWritten": "Hewitt St",
      "trace": [
        [
          1041,
          720
        ],
        [
          1035,
          549
        ]
      ],
      "basis": "alignment",
      "name": "hewitt"
    }
  ]
};
