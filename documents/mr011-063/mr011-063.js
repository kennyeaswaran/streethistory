module.exports = {
  id: "mr011-063",
  title: "Map of Maple Avenue Tract in City of Los Angeles",
  shortTitle: "Maple Avenue Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR011/MR011-063.pdf",
  scan: "documents/mr011-063/mr011-063.pdf",
  transcription: null,

  date: { on: "1886-10-21" },   
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
    [192, 786], [693, 1298], [1028, 917], [509, 479]
  ],
  alignment: {
    image: "documents/mr011-063/mr011-063-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.045649, -118.25294], note: "map-tool corner (0,0)" },
      { px: [1117, 0], ll: [34.045616, -118.247301], note: "map-tool corner (1117,0)" },
      { px: [0, 1660], ll: [34.038656, -118.252999], note: "map-tool corner (0,1660)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["7th Street","Los Angeles Street","Maple Avenue","Santee Court","Wall Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "Seventh Street",
      "street": "7th Street",
      "from": {
        "px": [
          458,
          528
        ]
      },
      "to": {
        "px": [
          985,
          966
        ]
      },
      "basis": "alignment",
      "note": "The modern 7th Street trace follows the complete roadway lettered Seventh Street.",
      "name": "seventh-street"
    },
    {
      "kind": "state",
      "asWritten": "Los Angeles Street",
      "street": "Los Angeles Street",
      "from": {
        "px": [
          547,
          511
        ]
      },
      "to": {
        "px": [
          217,
          811
        ]
      },
      "basis": "alignment",
      "note": "The modern Los Angeles Street trace follows the roadway lettered Los Angeles Street along the tract's northwestern side.",
      "name": "los-angeles-street"
    },
    {
      "kind": "state",
      "asWritten": "Maple Avenue",
      "street": "Maple Avenue",
      "from": {
        "px": [
          778,
          706
        ]
      },
      "to": {
        "px": [
          445,
          1045
        ]
      },
      "basis": "alignment",
      "note": "The modern Maple Avenue trace follows the complete roadway lettered Maple Avenue.",
      "name": "maple-dtla"
    },
    {
      "kind": "absent",
      "street": "Santee Court",
      "from": {
        "px": [
          423,
          663
        ]
      },
      "to": {
        "px": [
          333,
          904
        ]
      },
      "note": "The modern dogleg crosses blank parcel ground and then follows only a single Botiller property line. It crosses, rather than tracks, the separate dashed 60-foot street shown farther northwest."
    },
    {
      "kind": "state",
      "asWritten": "Myrtle Avenue",
      "street": "Wall Street",
      "from": {
        "px": [
          915,
          821
        ]
      },
      "to": {
        "px": [
          598,
          1201
        ]
      },
      "basis": "alignment",
      "note": "Modern Wall Street follows the complete roadway lettered Myrtle Avenue.",
      "name": "myrtle"
    }
  ]
};
