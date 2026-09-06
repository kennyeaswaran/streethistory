module.exports = {
  id: "mr005-005",
  title: "Map of the Orchard Tract in the City of Los Angeles",
  shortTitle: "Orchard Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-005.pdf",
  scan: "documents/mr005-005/mr005-005.pdf",
  transcription: null,

  date: { on: "1882-08-02" },   
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
    [1144, 690], [735, 602], [420, 1122], [234, 1144],
    [289, 1687], [884, 1578]
  ],
  alignment: {
    image: "documents/mr005-005/mr005-005-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.046726, -118.248449], note: "map-tool corner (0,0)" },
      { px: [1157, 0], ll: [34.049614, -118.246842], note: "map-tool corner (1157,0)" },
      { px: [0, 1757], ll: [34.04469, -118.243192], note: "map-tool corner (0,1757)" }
    ]
  },

  // The polygon strays onto these; the document does not inform about them.
  // NOT the same as a absent row, which says the sheet covers the ground and
  // draws nothing there (MODEL-SPEC §4.4, §5.2).
  coverageExcept: [{"street":"3rd Street","from":"Wall Street","to":null}],

  sweptFully: true,
  sweptFor: ["3rd Street","4th Street","Boyd Street","Los Angeles Street","San Pedro Street","Wall Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "Morgan Lane",
      "street": "3rd Street",
      "from": "Los Angeles Street",
      "to": "Wall Street",
      "basis": "alignment",
      "note": "Between Los Angeles and Wall, modern 3rd Street follows the roadway lettered Morgan Lane.",
      "name": "morgan-lane"
    },
    {
      "kind": "state",
      "asWritten": "Fourth Street",
      "street": "4th Street",
      "from": {
        "px": [
          385,
          1126
        ]
      },
      "to": {
        "px": [
          392,
          1668
        ]
      },
      "basis": "alignment",
      "note": "The modern 4th Street trace follows the complete roadway lettered Fourth Street through the covered part of the tract.",
      "name": "fourth-street"
    },
    {
      "kind": "state",
      "asWritten": "Boyd Street",
      "street": "Boyd Street",
      "from": {
        "px": [
          767,
          674
        ]
      },
      "to": {
        "px": [
          693,
          1613
        ]
      },
      "basis": "alignment",
      "note": "The full label is divided by Wall Street—Street is lettered on the northern stretch and Boyd on the southern stretch—but identifies one continuous roadway.",
      "name": "boyd-street"
    },
    {
      "kind": "state",
      "asWritten": "Los Angeles Street",
      "street": "Los Angeles Street",
      "from": {
        "px": [
          1124,
          759
        ]
      },
      "to": {
        "px": [
          704,
          654
        ]
      },
      "basis": "alignment",
      "note": "The modern Los Angeles Street trace follows the roadway lettered Los Angeles Street along the tract boundary.",
      "name": "los-angeles-street"
    },
    {
      "kind": "state",
      "asWritten": "San Pedro Street",
      "street": "San Pedro Street",
      "from": {
        "px": [
          894,
          1545
        ]
      },
      "to": {
        "px": [
          283,
          1632
        ]
      },
      "basis": "alignment",
      "note": "The modern San Pedro Street trace follows the roadway lettered San Pedro Street along the southern boundary.",
      "name": "san-pedro"
    },
    {
      "kind": "state",
      "asWritten": "Wall Street",
      "street": "Wall Street",
      "from": {
        "px": [
          1000,
          1089
        ]
      },
      "to": {
        "px": [
          448,
          1075
        ]
      },
      "basis": "alignment",
      "note": "The modern Wall Street trace follows the complete roadway lettered Wall Street across the tract.",
      "name": "wall-street"
    }
  ]
};
