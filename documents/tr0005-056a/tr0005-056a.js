module.exports = {
  id: "tr0005-056a",
  title: "Industrial Tract",
  shortTitle: "Industrial Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0005/TR0005-056a.pdf",
  scan: "documents/tr0005-056a/tr0005-056a.pdf",
  transcription: null,

  date: { on: "1904-03-15" },   
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
    [4, 778], [-15, 1267], [1190, 1269], [1074, 467],
    [659, 621]
  ],
  alignment: {
    image: "documents/tr0005-056a/tr0005-056a-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.041606, -118.239276], note: "map-tool corner (0,0)" },
      { px: [1173, 0], ll: [34.041342, -118.231402], note: "map-tool corner (1173,0)" },
      { px: [0, 1842], ll: [34.031288, -118.239772], note: "map-tool corner (0,1842)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["6th Street","7th Street","Alameda Street","Channing Street","Conway Place","Decatur Street","Industrial Street","Jesse Street","Lawrence Street","Mateo Street","Mill Street","Wilson Street"],

  rows: [
    {
      "kind": "absent",
      "street": "6th Street",
      "from": {
        "px": [
          791,
          572
        ]
      },
      "to": "Mateo Street",
      "note": "The line north of the tract is a parcel and survey boundary by the Pacific Tank Company land, not a two-edged 6th Street."
    },
    {
      "kind": "unnamed",
      "street": "6th Street",
      "from": "Mateo Street",
      "to": {
        "px": [
          1085,
          545
        ]
      },
      "note": "The line north of the tract is a parcel and survey boundary by the Pacific Tank Company land, not a two-edged 6th Street."
    },
    {
      "kind": "unnamed",
      "street": "7th Street",
      "from": {
        "px": [
          0,
          1070
        ]
      },
      "to": "Alameda Street",
      "note": "The modern western approach crosses blank land before entering the drawn Seventh Street road at Alameda."
    },
    {
      "kind": "state",
      "asWritten": "SEVENTH ST.",
      "street": "7th Street",
      "from": "Alameda Street",
      "to": "Mateo Street",
      "basis": "alignment",
      "name": "seventh-street"
    },
    {
      "kind": "state",
      "street": "7th Street",
      "from": "Mateo Street",
      "to": {
        "px": [
          1172,
          1205
        ]
      },
      "note": "East of Mateo the modern street continues beyond the tract's drawn Seventh Street edge.",
      "basis": "alignment",
      "name": "seventh-street",
      "asWritten": "Seventh St"
    },
    {
      "kind": "state",
      "asWritten": "ALAMEDA ST.",
      "street": "Alameda Street",
      "from": {
        "px": [
          150,
          743
        ]
      },
      "to": {
        "px": [
          143,
          1267
        ]
      },
      "basis": "alignment",
      "name": "alameda-st"
    },
    {
      "kind": "absent",
      "street": "Channing Street",
      "from": {
        "px": [
          326,
          1186
        ]
      },
      "to": {
        "px": [
          325,
          1268
        ]
      },
      "note": "The sheet has no north-south street south of the Seventh frontage here."
    },
    {
      "kind": "absent",
      "street": "Conway Place",
      "from": {
        "px": [
          762,
          842
        ]
      },
      "to": {
        "px": [
          1040,
          855
        ]
      },
      "note": "This run passes parcel interiors and a curving railway right-of-way, without an east-west road corridor."
    },
    {
      "kind": "absent",
      "street": "Decatur Street",
      "from": {
        "px": [
          679,
          1197
        ]
      },
      "to": {
        "px": [
          678,
          1268
        ]
      },
      "note": "No north-south roadway is laid out below Seventh Street here."
    },
    {
      "kind": "state",
      "asWritten": "EASTON ST.",
      "street": "Industrial Street",
      "from": {
        "px": [
          0,
          883
        ]
      },
      "to": "Alameda Street",
      "basis": "alignment",
      "note": "The western diagonal approach follows the separate roadway lettered Easton St.",
      "name": "easton"
    },
    {
      "kind": "state",
      "asWritten": "INDUSTRIAL ST.",
      "street": "Industrial Street",
      "from": "Alameda Street",
      "to": {
        "px": [
          1062,
          1009
        ]
      },
      "basis": "alignment",
      "note": "The road changes from the Easton approach to Industrial St. east of Alameda.",
      "name": "industrial-st"
    },
    {
      "kind": "unnamed",
      "street": "Jesse Street",
      "from": {
        "px": [
          1050,
          925
        ]
      },
      "to": {
        "px": [
          1139,
          913
        ]
      },
      "basis": "alignment",
      "note": "A short two-edged road projects east from Mateo, but no name is lettered on the stub."
    },
    {
      "kind": "absent",
      "street": "Lawrence Street",
      "from": {
        "px": [
          503,
          1190
        ]
      },
      "to": {
        "px": [
          502,
          1268
        ]
      },
      "note": "No north-south road is drawn south of Seventh Street."
    },
    {
      "kind": "state",
      "asWritten": "MATEO ST.",
      "street": "Mateo Street",
      "from": {
        "px": [
          994,
          497
        ]
      },
      "to": {
        "px": [
          1093,
          1269
        ]
      },
      "basis": "alignment",
      "name": "mateo"
    },
    {
      "kind": "state",
      "asWritten": "MILL ST.",
      "street": "Mill Street",
      "from": {
        "px": [
          734,
          593
        ]
      },
      "to": {
        "px": [
          758,
          1200
        ]
      },
      "basis": "alignment",
      "name": "mill-st-arts-district"
    },
    {
      "kind": "absent",
      "street": "Wilson Street",
      "from": {
        "px": [
          852,
          1204
        ]
      },
      "to": {
        "px": [
          850,
          1268
        ]
      },
      "note": "No southward street from Seventh is drawn at this line."
    }
  ]
};
