module.exports = {
  id: "mr002-526-p1",
  title: "Plan of the Subdivision of the Alanis Vineyard Tract",
  shortTitle: "Alanis Vineyard Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR002/MR002-526.pdf",
  scan: "documents/mr002-526-p1/mr002-526-p1.pdf",
  transcription: null,

  date: { on: "1869-05-05" },   
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
    [335, 1758], [1058, 1640], [1084, 50], [295, 60]
  ],
  alignment: {
    image: "documents/mr002-526-p1/mr002-526-p1-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.054114, -118.232379], note: "map-tool corner (0,0)" },
      { px: [1111, 0], ll: [34.051071, -118.232996], note: "map-tool corner (1111,0)" },
      { px: [0, 1775], ll: [34.054936, -118.238205], note: "map-tool corner (0,1775)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["Alameda Street","Aliso Street","Commercial Street","Ducommun Street","Garey Street","Santa Ana Freeway","Vignes Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "Alameda Strt.",
      "street": "Alameda Street",
      "from": {
        "px": [
          332,
          1633
        ]
      },
      "to": {
        "px": [
          1060,
          1544
        ]
      },
      "basis": "alignment",
      "name": "alameda-st"
    },
    {
      "kind": "state",
      "asWritten": "Sainsevain Street",
      "street": "Commercial Street",
      "from": {
        "px": [
          465,
          58
        ]
      },
      "to": "Alameda Street",
      "basis": "alignment",
      "name": "sainsevain-street"
    },
    {
      "kind": "state",
      "asWritten": "Lazard Street",
      "street": "Ducommun Street",
      "from": {
        "px": [
          795,
          54
        ]
      },
      "to": "Garey Street",
      "basis": "alignment",
      "name": "lazard-street"
    },
    {
      "kind": "state",
      "asWritten": "Commercial Street",
      "street": "Ducommun Street",
      "from": "Garey Street",
      "to": {
        "px": [
          714,
          1465
        ]
      },
      "basis": "alignment",
      "name": "commercial-street"
    },
    {
      "kind": "state",
      "asWritten": "Amelia",
      "street": "Garey Street",
      "from": "Commercial Street",
      "to": {
        "px": [
          1078,
          425
        ]
      },
      "basis": "alignment",
      "name": "amelia"
    },
    {
      "kind": "absent",
      "street": "Santa Ana Freeway",
      "from": {
        "px": [
          315,
          917
        ]
      },
      "to": {
        "px": [
          328,
          1474
        ]
      },
      "note": "The freeway alignment crosses mapped lots and open ground."
    },
    {
      "kind": "state",
      "asWritten": "Vignes",
      "street": "Vignes Street",
      "from": "Commercial Street",
      "to": {
        "px": [
          1083,
          123
        ]
      },
      "basis": "alignment",
      "name": "vignes-street"
    },
    {
      "kind": "absent",
      "street": "Aliso Street",
      "from": null,
      "to": null,
      "note": "Added in review: the sheet covers this 43 m and draws no street along it."
    },
    {
      "kind": "vanished",
      "asWritten": "Labory Lane",
      "trace": [
        [
          925,
          780
        ],
        [
          874,
          858
        ],
        [
          716,
          1589
        ]
      ],
      "basis": "alignment",
      "name": "labory-lane"
    },
    {
      "kind": "vanished",
      "asWritten": "Lafayette Str.",
      "trace": [
        [
          926,
          779
        ],
        [
          1082,
          756
        ]
      ],
      "basis": "alignment",
      "name": "lafayette-french"
    }
  ]
};
