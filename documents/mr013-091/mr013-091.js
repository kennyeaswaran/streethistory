module.exports = {
  id: "mr013-091",
  title: "E. B. Millar Tract",
  shortTitle: "E. B. Millar Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR013/MR013-091.pdf",
  scan: "documents/mr013-091/mr013-091.pdf",
  transcription: null,

  date: { on: "1887-01-25" },   
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
    [53, 168], [107, 890], [1708, 928], [1665, 181]
  ],
  alignment: {
    image: "documents/mr013-091/mr013-091-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.035936, -118.239183], note: "map-tool corner (0,0)" },
      { px: [1680, 0], ll: [34.035486, -118.233479], note: "map-tool corner (1680,0)" },
      { px: [0, 1089], ll: [34.032851, -118.239532], note: "map-tool corner (0,1089)" }
    ]
  },

  // The polygon strays onto these; the document does not inform about them.
  // NOT the same as a absent row, which says the sheet covers the ground and
  // draws nothing there (MODEL-SPEC §4.4, §5.2).
  coverageExcept: [{"street":"7th Place","from":null,"to":null}],

  sweptFully: true,
  sweptFor: ["7th Place","7th Street","Alameda Street","Channing Street","Decatur Street","Lawrence Street","Mill Street","Wilson Street"],

  rows: [
    {
      "kind": "absent",
      "street": "7th Street",
      "from": {
        "px": [
          58,
          231
        ]
      },
      "to": "Alameda Street",
      "note": "The modern approach from the west is diagonal through undrawn ground before reaching the plat's Seventh Street corridor."
    },
    {
      "kind": "state",
      "asWritten": "Seventh Street",
      "street": "7th Street",
      "from": "Alameda Street",
      "to": {
        "px": [
          1671,
          294
        ]
      },
      "basis": "alignment",
      "name": "seventh-street"
    },
    {
      "kind": "state",
      "asWritten": "Alameda St.",
      "street": "Alameda Street",
      "from": {
        "px": [
          190,
          190
        ]
      },
      "to": {
        "px": [
          218,
          893
        ]
      },
      "basis": "alignment",
      "name": "alameda-st"
    },
    {
      "kind": "state",
      "asWritten": "Channing St.",
      "street": "Channing Street",
      "from": {
        "px": [
          554,
          317
        ]
      },
      "to": {
        "px": [
          576,
          717
        ]
      },
      "basis": "alignment",
      "name": "channing-st"
    },
    {
      "kind": "state",
      "asWritten": "Warren St.",
      "street": "Decatur Street",
      "from": {
        "px": [
          1248,
          301
        ]
      },
      "to": {
        "px": [
          1271,
          729
        ]
      },
      "basis": "alignment",
      "note": "The modern Decatur line follows the roadway lettered Warren St.",
      "name": "warren-st-arts-district"
    },
    {
      "kind": "state",
      "asWritten": "Lawrence St.",
      "street": "Lawrence Street",
      "from": {
        "px": [
          902,
          306
        ]
      },
      "to": {
        "px": [
          914,
          717
        ]
      },
      "basis": "alignment",
      "name": "lawrence"
    },
    {
      "kind": "absent",
      "street": "Mill Street",
      "from": {
        "px": [
          1400,
          179
        ]
      },
      "to": {
        "px": [
          1405,
          300
        ]
      },
      "note": "No north-south road is drawn along this short modern run north of Seventh Street."
    },
    {
      "kind": "state",
      "asWritten": "Lemon St.",
      "street": "Wilson Street",
      "from": {
        "px": [
          1590,
          296
        ]
      },
      "to": {
        "px": [
          1608,
          926
        ]
      },
      "basis": "alignment",
      "note": "The modern Wilson corridor is lettered Lemon St. on this tract.",
      "name": "lemon-st-arts-district"
    },
    {
      "kind": "vanished",
      "asWritten": "Lemon St",
      "trace": [
        [
          1591,
          295
        ],
        [
          1594,
          170
        ]
      ],
      "basis": "alignment",
      "name": "lemon-st-arts-district"
    }
  ]
};
