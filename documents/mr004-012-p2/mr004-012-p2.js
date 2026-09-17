module.exports = {
  id: "mr004-012-p2",
  title: "Plan of the Subdivision of the Aliso Tract",
  shortTitle: "Aliso Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR004/MR004-012.pdf",
  scan: "documents/mr004-012-p2/mr004-012-p2.pdf",
  transcription: null,

  date: { on: "1869-01" },   
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
    [330, 1185], [186, 678], [115, 261], [166, 196],
    [937, 472], [988, 1051]
  ],
  alignment: {
    image: "documents/mr004-012-p2/mr004-012-p2-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.055613, -118.224513], note: "map-tool corner (0,0)" },
      { px: [1100, 0], ll: [34.044942, -118.226745], note: "map-tool corner (1100,0)" },
      { px: [0, 1661], ll: [34.058426, -118.243826], note: "map-tool corner (0,1661)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["1st Street","Alameda Street","Aliso Street","Arcadia Street","Banning Street","Center Street","Commercial Street","Ducommun Street","Garey Street","Hewitt Street","I-10 Metro ExpressLanes","Jackson Street","Keller Street","Ramirez Street","Rose Street","Santa Ana Freeway","Santa Fe Avenue","Temple Street","Vignes Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "FIRST STREET",
      "street": "1st Street",
      "from": {
        "px": [
          841,
          438
        ]
      },
      "to": {
        "px": [
          857,
          1078
        ]
      },
      "basis": "alignment",
      "name": "first-street"
    },
    {
      "kind": "state",
      "asWritten": "ALAMEDA STREET",
      "street": "Alameda Street",
      "from": {
        "px": [
          304,
          1094
        ]
      },
      "to": {
        "px": [
          983,
          998
        ]
      },
      "basis": "alignment",
      "name": "alameda-st"
    },
    {
      "kind": "absent",
      "street": "Aliso Street",
      "from": {
        "px": [
          305,
          934
        ]
      },
      "to": {
        "px": [
          334,
          1184
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "absent",
      "street": "Arcadia Street",
      "from": "Aliso Street",
      "to": {
        "px": [
          303,
          1091
        ]
      },
      "note": "The short modern ramp trace does not follow a separate historic street corridor."
    },
    {
      "kind": "absent",
      "street": "Banning Street",
      "from": "Center Street",
      "to": "Vignes Street",
      "basis": "alignment"
    },
    {
      "kind": "absent",
      "street": "Center Street",
      "from": {
        "px": [
          253,
          535
        ]
      },
      "to": "Santa Ana Freeway",
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "CENTER STREET",
      "street": "Center Street",
      "from": "Santa Ana Freeway",
      "to": "Commercial Street",
      "basis": "alignment",
      "name": "center-street"
    },
    {
      "kind": "state",
      "asWritten": "CENTER STREET",
      "street": "Center Street",
      "from": "Commercial Street",
      "to": "Banning Street",
      "basis": "alignment",
      "name": "center-street"
    },
    {
      "kind": "state",
      "asWritten": "SAINSEVAIN STREET",
      "street": "Commercial Street",
      "from": {
        "px": [
          394,
          383
        ]
      },
      "to": "Alameda Street",
      "basis": "alignment",
      "name": "sainsevain-street"
    },
    {
      "kind": "state",
      "asWritten": "Sainsevain Street",
      "street": "Ducommun Street",
      "from": {
        "px": [
          486,
          504
        ]
      },
      "to": {
        "px": [
          468,
          1042
        ]
      },
      "basis": "alignment",
      "name": "sainsevain-street"
    },
    {
      "kind": "absent",
      "street": "Garey Street",
      "from": "Commercial Street",
      "to": "Temple Street",
      "note": "The modern line crosses the lower lots and the Teresa Barclay parcel; no east-west street is drawn here."
    },
    {
      "kind": "absent",
      "street": "Hewitt Street",
      "from": "1st Street",
      "to": {
        "px": [
          969,
          830
        ]
      }
    },
    {
      "kind": "absent",
      "street": "I-10 Metro ExpressLanes",
      "from": {
        "px": [
          275,
          235
        ]
      },
      "to": "Aliso Street",
      "note": "The express lanes cross the subdivision and do not follow an 1869 roadway."
    },
    {
      "kind": "state",
      "asWritten": "LAZARD STREET",
      "street": "Jackson Street",
      "from": "Center Street",
      "to": "Garey Street",
      "basis": "alignment",
      "name": "lazard-street"
    },
    {
      "kind": "absent",
      "street": "Keller Street",
      "from": {
        "px": [
          123,
          307
        ]
      },
      "to": "Commercial Street"
    },
    {
      "kind": "absent",
      "street": "Ramirez Street",
      "from": {
        "px": [
          174,
          610
        ]
      },
      "to": {
        "px": [
          290,
          424
        ]
      }
    },
    {
      "kind": "absent",
      "street": "Rose Street",
      "from": "1st Street",
      "to": {
        "px": [
          976,
          911
        ]
      }
    },
    {
      "kind": "absent",
      "street": "Santa Ana Freeway",
      "from": {
        "px": [
          308,
          247
        ]
      },
      "to": {
        "px": [
          320,
          1152
        ]
      }
    },
    {
      "kind": "absent",
      "street": "Santa Fe Avenue",
      "from": "Center Street",
      "to": {
        "px": [
          943,
          537
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "absent",
      "street": "Temple Street",
      "from": "Center Street",
      "to": "Vignes Street",
      "basis": "alignment"
    },
    {
      "kind": "absent",
      "street": "Temple Street",
      "from": "Vignes Street",
      "to": {
        "px": [
          595,
          1131
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "VIGNES STREET",
      "street": "Vignes Street",
      "from": "Commercial Street",
      "to": {
        "px": [
          952,
          642
        ]
      },
      "basis": "alignment",
      "name": "vignes-street"
    },
    {
      "kind": "vanished",
      "asWritten": "Sainsevain Street",
      "trace": [
        [
          471,
          513
        ],
        [
          469,
          331
        ]
      ],
      "basis": "alignment",
      "name": "sainsevain-street"
    },
    {
      "kind": "vanished",
      "asWritten": "Front St",
      "trace": [
        [
          391,
          354
        ],
        [
          541,
          352
        ]
      ],
      "basis": "alignment",
      "name": "front-st"
    },
    {
      "kind": "vanished",
      "asWritten": "Lazard Street",
      "trace": [
        [
          558,
          510
        ],
        [
          555,
          356
        ]
      ],
      "basis": "alignment",
      "name": "lazard-street"
    },
    {
      "kind": "vanished",
      "asWritten": "Weill Street",
      "trace": [
        [
          647,
          710
        ],
        [
          646,
          390
        ]
      ],
      "basis": "alignment",
      "name": "weill"
    },
    {
      "kind": "vanished",
      "asWritten": "Turner Street",
      "trace": [
        [
          733,
          726
        ],
        [
          731,
          419
        ]
      ],
      "basis": "alignment",
      "name": "turner-street"
    },
    {
      "kind": "vanished",
      "asWritten": "Banning Street",
      "trace": [
        [
          812,
          846
        ],
        [
          814,
          449
        ]
      ],
      "basis": "alignment",
      "name": "banning-street"
    },
    {
      "kind": "state",
      "asWritten": "First Street",
      "street": "1st Street",
      "from": "Alameda Street",
      "to": {
        "px": [
          854,
          442
        ]
      },
      "basis": "alignment",
      "note": "Added in review: the sheet draws and letters this stretch and the AI pass had no row for it.",
      "name": "first-street"
    },
    {
      "kind": "absent",
      "street": "I-10 Metro ExpressLanes",
      "from": null,
      "to": "Aliso Street",
      "note": "Added in review: the sheet covers this 26 m and draws no street along it."
    },
    {
      "kind": "vanished",
      "asWritten": "Keller Street",
      "trace": [
        [
          391,
          419
        ],
        [
          161,
          269
        ]
      ],
      "basis": "alignment",
      "name": "keller"
    },
    {
      "kind": "vanished",
      "asWritten": "Center Street",
      "trace": [
        [
          759,
          508
        ],
        [
          922,
          498
        ]
      ],
      "basis": "alignment",
      "name": "center-street"
    }
  ]
};
