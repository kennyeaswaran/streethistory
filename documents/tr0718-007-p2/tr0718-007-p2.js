module.exports = {
  id: "tr0718-007-p2",
  title: "Tract No. 25510 in the City of Los Angeles",
  shortTitle: "Tract No. 25510",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0718/TR0718-007.pdf",
  scan: "documents/tr0718-007-p2/tr0718-007-p2.pdf",
  transcription: null,

  date: { on: "1964-02-26" },   
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
    [190, 43], [-44, 2171], [1229, 2200], [1577, 425]
  ],
  alignment: {
    image: "documents/tr0718-007-p2/tr0718-007-p2-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.051799, -118.261697], note: "map-tool corner (0,0)" },
      { px: [1691, 0], ll: [34.051305, -118.26007], note: "map-tool corner (1691,0)" },
      { px: [0, 2372], ll: [34.049895, -118.262527], note: "map-tool corner (0,2372)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["7th Street","Beaudry Avenue","Francisco Street","Harbor Freeway","Wilshire Boulevard"],

  rows: [
    {
      "kind": "state",
      "asWritten": "SEVENTH STREET",
      "street": "7th Street",
      "from": {
        "px": [
          -27,
          2012
        ]
      },
      "to": {
        "px": [
          1260,
          2044
        ]
      },
      "basis": "alignment",
      "name": "seventh-street"
    },
    {
      "kind": "absent",
      "street": "Beaudry Avenue",
      "from": {
        "px": [
          423,
          107
        ]
      },
      "to": {
        "px": [
          140,
          500
        ]
      },
      "note": "The short modern Beaudry segment crosses property and dedication lines; no roadway is drawn along it."
    },
    {
      "kind": "state",
      "asWritten": "FRANCISCO STREET",
      "street": "Francisco Street",
      "from": {
        "px": [
          1450,
          639
        ]
      },
      "to": {
        "px": [
          1005,
          2048
        ]
      },
      "basis": "alignment",
      "name": "francisco"
    },
    {
      "kind": "absent",
      "street": "Harbor Freeway",
      "from": {
        "px": [
          787,
          207
        ]
      },
      "to": {
        "px": [
          51,
          1310
        ]
      },
      "note": "The modern freeway cuts diagonally across the tract; the sheet does not draw a matching roadway."
    },
    {
      "kind": "absent",
      "street": "Harbor Freeway",
      "from": {
        "px": [
          965,
          256
        ]
      },
      "to": {
        "px": [
          5,
          1726
        ]
      },
      "note": "The second freeway carriageway likewise crosses tract parcels rather than a period street."
    },
    {
      "kind": "state",
      "asWritten": "WILSHIRE BOULEVARD",
      "street": "Wilshire Boulevard",
      "from": {
        "px": [
          167,
          251
        ]
      },
      "to": {
        "px": [
          1530,
          662
        ]
      },
      "basis": "alignment",
      "name": "wilshire"
    },
    {
      "kind": "vanished",
      "asWritten": "KIP STREET",
      "trace": [
        [
          295,
          380
        ],
        [
          170,
          1900
        ]
      ],
      "basis": "alignment",
      "note": "The mapped Kip Street corridor has no supplied modern counterpart.",
      "name": "kip-street"
    },
    {
      "kind": "vanished",
      "asWritten": "INGRAHAM STREET",
      "trace": [
        [
          215,
          1271
        ],
        [
          685,
          1320
        ]
      ],
      "basis": "alignment",
      "note": "Ingraham Street is drawn from Kip Street into the subdivision but is not followed by a supplied modern street.",
      "name": "ingraham"
    }
  ]
};
