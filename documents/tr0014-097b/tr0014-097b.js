module.exports = {
  id: "tr0014-097b",
  title: "Tract No. 365",
  shortTitle: "Tract No. 365",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0014/TR0014-097b.pdf",
  scan: "documents/tr0014-097b/tr0014-097b.pdf",
  transcription: null,

  date: { on: "1908-12" },   
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
    [187, 509], [164, 1271], [1040, 1288], [1043, 461]
  ],
  alignment: {
    image: "documents/tr0014-097b/tr0014-097b-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.064429, -118.255015], note: "map-tool corner (0,0)" },
      { px: [1152, 0], ll: [34.063553, -118.252953], note: "map-tool corner (1152,0)" },
      { px: [0, 1842], ll: [34.061679, -118.256695], note: "map-tool corner (0,1842)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["Bixel Street","Boylston Street","Colton Street","Court Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "OHIO ST.",
      "street": "Bixel Street",
      "from": {
        "px": [
          294,
          586
        ]
      },
      "to": {
        "px": [
          287,
          1163
        ]
      },
      "basis": "alignment",
      "name": "ohio-street"
    },
    {
      "kind": "state",
      "asWritten": "BOYLSTON ST.",
      "name": "boylston",
      "street": "Boylston Street",
      "from": {
        "px": [
          880,
          470
        ]
      },
      "to": {
        "px": [
          839,
          1162
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "COLTON ST.",
      "street": "Colton Street",
      "from": {
        "px": [
          167,
          1163
        ]
      },
      "to": {
        "px": [
          839,
          1162
        ]
      },
      "basis": "alignment",
      "name": "colton-st"
    },
    {
      "kind": "state",
      "asWritten": "COURT ST.",
      "name": "court-street",
      "street": "Court Street",
      "from": {
        "px": [
          185,
          585
        ]
      },
      "to": {
        "px": [
          877,
          592
        ]
      },
      "basis": "alignment"
    }
  ]
};
