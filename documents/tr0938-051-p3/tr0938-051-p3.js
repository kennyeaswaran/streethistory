module.exports = {
  id: "tr0938-051-p3",
  title: "Tract No. 36511 in the City of Los Angeles for Redevelopment Purposes",
  shortTitle: "Tract No. 36511",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0938/TR0938-051.pdf",
  scan: "documents/tr0938-051-p3/tr0938-051-p3.pdf",
  transcription: null,

  date: { on: "1980-02-07" },   
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
    [159, 1897], [1057, 2435], [1799, 1340], [970, 381],
    [85, 1028]
  ],
  alignment: {
    image: "documents/tr0938-051-p3/tr0938-051-p3-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.049407, -118.240272], note: "map-tool corner (0,0)" },
      { px: [1746, 0], ll: [34.047965, -118.239818], note: "map-tool corner (1746,0)" },
      { px: [0, 2492], ll: [34.048867, -118.24274], note: "map-tool corner (0,2492)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["2nd Street","Frances K. Hashimoto Plaza","San Pedro Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "2ND STREET",
      "street": "2nd Street",
      "from": {
        "px": [
          96,
          1162
        ]
      },
      "to": {
        "px": [
          1032,
          452
        ]
      },
      "basis": "alignment",
      "name": "second-street"
    },
    {
      "kind": "absent",
      "street": "Frances K. Hashimoto Plaza",
      "from": {
        "px": [
          1579,
          1665
        ]
      },
      "to": {
        "px": [
          1553,
          1702
        ]
      },
      "basis": "alignment",
      "note": "The modern plaza path occupies the sheet's pedestrian-walk and open-space system; no street name is lettered for it."
    },
    {
      "kind": "state",
      "asWritten": "SAN PEDRO STREET",
      "street": "San Pedro Street",
      "from": {
        "px": [
          142,
          1694
        ]
      },
      "to": {
        "px": [
          1131,
          2325
        ]
      },
      "basis": "alignment",
      "name": "san-pedro"
    },
    {
      "kind": "vanished",
      "asWritten": "WOODWORTH COURT",
      "trace": [
        [
          230,
          1066
        ],
        [
          64,
          854
        ]
      ],
      "basis": "alignment",
      "note": "A short street is lettered at the western edge without a supplied modern counterpart.",
      "name": "woodworth-court"
    }
  ]
};
