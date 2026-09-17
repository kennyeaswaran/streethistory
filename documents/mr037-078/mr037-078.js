module.exports = {
  id: "mr037-078",
  title: "Map of Day, Hinton and Mathes Resubdivision of Lots 1, 2, 3, 4, 5 and 6 and Included Alley of Block N, Colina Park",
  shortTitle: "Day, Hinton and Mathes Resubdivision",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR037/MR037-078.pdf",
  scan: "documents/mr037-078/mr037-078.pdf",
  transcription: null,

  date: { on: "1889-10-18" },   
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
    [241, 691], [514, 563], [797, 648], [803, 1245],
    [286, 1247]
  ],
  alignment: {
    image: "documents/mr037-078/mr037-078-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.062083, -118.26442], note: "map-tool corner (0,0)" },
      { px: [1128, 0], ll: [34.060647, -118.260938], note: "map-tool corner (1128,0)" },
      { px: [0, 1713], ll: [34.05767, -118.267034], note: "map-tool corner (0,1713)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["3rd Street","Columbia Avenue","Crown Hill Avenue","Witmer Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "Arnold St",
      "street": "3rd Street",
      "from": {
        "px": [
          252,
          825
        ]
      },
      "to": {
        "px": [
          799,
          825
        ]
      },
      "basis": "alignment",
      "name": "arnold"
    },
    {
      "kind": "state",
      "asWritten": "Columbia Avenue",
      "street": "Columbia Avenue",
      "from": {
        "px": [
          481,
          579
        ]
      },
      "to": {
        "px": [
          411,
          1247
        ]
      },
      "basis": "alignment",
      "name": "columbia-avenue"
    },
    {
      "kind": "unnamed",
      "street": "Crown Hill Avenue",
      "from": {
        "px": [
          294,
          666
        ]
      },
      "to": {
        "px": [
          419,
          823
        ]
      },
      "basis": "alignment",
      "note": "The diagonal roadway is drawn, but no name is legible on this short covered stretch."
    },
    {
      "kind": "state",
      "asWritten": "Nichols Ave",
      "street": "Witmer Street",
      "from": {
        "px": [
          715,
          623
        ]
      },
      "to": {
        "px": [
          709,
          1245
        ]
      },
      "basis": "alignment",
      "name": "nichols-ave"
    }
  ]
};
