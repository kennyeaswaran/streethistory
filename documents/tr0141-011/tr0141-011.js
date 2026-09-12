module.exports = {
  id: "tr0141-011",
  title: "Tract No. 9918 in the City of Los Angeles",
  shortTitle: "Tract No. 9918",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0141/TR0141-011.pdf",
  scan: "documents/tr0141-011/tr0141-011.pdf",
  transcription: null,

  date: { on: "1927-07-29" },   
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
    [681, 432], [618, 1654], [1584, 1804], [1545, 560]
  ],
  alignment: {
    image: "documents/tr0141-011/tr0141-011-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.036429, -118.245526], note: "map-tool corner (0,0)" },
      { px: [1675, 0], ll: [34.034909, -118.242677], note: "map-tool corner (1675,0)" },
      { px: [0, 2447], ll: [34.032956, -118.248187], note: "map-tool corner (0,2447)" }
    ]
  },

  // The polygon strays onto these; the document does not inform about them.
  // NOT the same as a absent row, which says the sheet covers the ground and
  // draws nothing there (MODEL-SPEC §4.4, §5.2).
  coverageExcept: [{"street":"Merchant Street","from":null,"to":null}],

  sweptFully: true,
  sweptFor: ["8th Street","Kohler Street","Merchant Street","Olympic Boulevard","Produce Court"],

  rows: [
    {
      "kind": "state",
      "asWritten": "EIGHTH STREET",
      "street": "8th Street",
      "from": {
        "px": [
          675,
          557
        ]
      },
      "to": {
        "px": [
          1551,
          757
        ]
      },
      "basis": "alignment",
      "name": "eighth-street"
    },
    {
      "kind": "state",
      "asWritten": "KOHLER STREET",
      "street": "Kohler Street",
      "from": {
        "px": [
          790,
          448
        ]
      },
      "to": {
        "px": [
          743,
          1561
        ]
      },
      "basis": "alignment",
      "name": "kohler"
    },
    {
      "kind": "state",
      "asWritten": "NINTH STREET",
      "street": "Olympic Boulevard",
      "from": {
        "px": [
          624,
          1539
        ]
      },
      "to": {
        "px": [
          1582,
          1748
        ]
      },
      "basis": "alignment",
      "note": "Modern Olympic Boulevard follows NINTH STREET on this sheet.",
      "name": "ninth-street"
    },
    {
      "kind": "absent",
      "street": "Produce Court",
      "from": {
        "px": [
          1137,
          669
        ]
      },
      "to": {
        "px": [
          1127,
          1048
        ]
      },
      "note": "This modern court crosses Lot 1 without a two-edged street corridor on the plat."
    },
    {
      "kind": "vanished",
      "asWritten": "MERCHANT STREET",
      "trace": [
        [
          1441,
          1256
        ],
        [
          1378,
          722
        ]
      ],
      "basis": "alignment",
      "note": "The mapped Merchant Street corridor lies east of the supplied modern Merchant trace.",
      "name": "merchant-st"
    }
  ]
};
