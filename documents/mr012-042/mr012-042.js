module.exports = {
  id: "mr012-042",
  title: "F. P. Howard & Co.'s Subdivision of the Bliss Tract",
  shortTitle: "Howard's Bliss Tract Subdivision",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR012/MR012-042.pdf",
  scan: "documents/mr012-042/mr012-042.pdf",
  transcription: null,

  date: { on: "1886-12-06" },   
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
    [365, 550], [213, 1289], [943, 1304], [898, 753],
    [823, 614]
  ],
  alignment: {
    image: "documents/mr012-042/mr012-042-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.046677, -118.241462], note: "map-tool corner (0,0)" },
      { px: [1117, 0], ll: [34.0475, -118.23387], note: "map-tool corner (1117,0)" },
      { px: [0, 1717], ll: [34.036939, -118.239946], note: "map-tool corner (0,1717)" }
    ]
  },

  // The polygon strays onto these; the document does not inform about them.
  // NOT the same as a absent row, which says the sheet covers the ground and
  // draws nothing there (MODEL-SPEC §4.4, §5.2).
  coverageExcept: [{"street":"4th Street","from":null,"to":"Alameda Street"}],

  sweptFully: true,
  sweptFor: ["4th Place","4th Street","5th Street","Alameda Street","Colyton Street","Hewitt Street","Palmetto Street","Seaton Street"],

  rows: [
    {
      "kind": "absent",
      "street": "4th Place",
      "from": {
        "px": [
          802,
          611
        ]
      },
      "to": {
        "px": [
          839,
          643
        ]
      },
      "note": "This short modern diagonal spur crosses the Huber Street corridor, but no roadway tracks the spur itself."
    },
    {
      "kind": "state",
      "asWritten": "Huber St.",
      "street": "4th Street",
      "from": "Alameda Street",
      "to": {
        "px": [
          853,
          669
        ]
      },
      "basis": "alignment",
      "name": "huber-st",
      "note": "The modern 4th Street line follows the road lettered Huber St., not the similarly numbered street name."
    },
    {
      "kind": "state",
      "asWritten": "Poplar St.",
      "street": "5th Street",
      "from": {
        "px": [
          349,
          973
        ]
      },
      "to": {
        "px": [
          812,
          969
        ]
      },
      "basis": "alignment",
      "name": "poplar-st",
      "note": "The middle modern east-west line follows Poplar St. on the plat."
    },
    {
      "kind": "state",
      "asWritten": "Alameda St.",
      "street": "Alameda Street",
      "from": {
        "px": [
          417,
          590
        ]
      },
      "to": {
        "px": [
          293,
          1291
        ]
      },
      "basis": "alignment",
      "name": "alameda-st"
    },
    {
      "kind": "state",
      "asWritten": "Colyton St.",
      "street": "Colyton Street",
      "from": {
        "px": [
          641,
          651
        ]
      },
      "to": {
        "px": [
          652,
          1241
        ]
      },
      "basis": "alignment",
      "name": "colyton"
    },
    {
      "kind": "state",
      "asWritten": "Carolina St.",
      "street": "Hewitt Street",
      "from": {
        "px": [
          811,
          656
        ]
      },
      "to": {
        "px": [
          813,
          1239
        ]
      },
      "basis": "alignment",
      "note": "The modern Hewitt line follows the old Carolina St. corridor.",
      "name": "carolina-arts-district"
    },
    {
      "kind": "state",
      "asWritten": "Palmetto St.",
      "street": "Palmetto Street",
      "from": {
        "px": [
          302,
          1238
        ]
      },
      "to": {
        "px": [
          910,
          1243
        ]
      },
      "basis": "alignment",
      "name": "palmetto"
    },
    {
      "kind": "state",
      "asWritten": "Seaton St.",
      "street": "Seaton Street",
      "from": {
        "px": [
          467,
          650
        ]
      },
      "to": {
        "px": [
          480,
          1239
        ]
      },
      "basis": "alignment",
      "name": "seaton"
    }
  ]
};
