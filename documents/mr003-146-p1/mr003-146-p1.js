module.exports = {
  id: "mr003-146-p1",
  title: "Subdivision of Property of Don Manuel Requena, Surveyed by Moore and Kelleher",
  shortTitle: "Requena Subdivision",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-146.pdf",
  scan: "documents/mr003-146-p1/mr003-146-p1.pdf",
  transcription: null,

  date: { on: "1876-02-11" },   
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
    [267, 678], [50, 1146], [571, 1339], [1023, 1316],
    [1029, 872]
  ],
  alignment: {
    image: "documents/mr003-146-p1/mr003-146-p1-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.050452, -118.243382], note: "map-tool corner (0,0)" },
      { px: [1123, 0], ll: [34.052843, -118.242593], note: "map-tool corner (1123,0)" },
      { px: [0, 1736], ll: [34.049434, -118.238952], note: "map-tool corner (0,1736)" }
    ]
  },

  sweptFully: false,
  sweptFor: [],

  rows: [
    {
      "kind": "state",
      "asWritten": "FIRST STREET.",
      "street": "1st Street",
      "from": {
        "px": [
          332,
          695
        ]
      },
      "to": {
        "px": [
          103,
          1166
        ]
      },
      "basis": "alignment",
      "note": "The aligned modern centerline follows the roadway whose separated FIRST and STREET. labels together identify the full corridor.",
      "name": "first-street"
    },
    {
      "kind": "state",
      "asWritten": "WILMINGTON",
      "street": "Judge John Aiso Street",
      "from": {
        "px": [
          1026,
          1088
        ]
      },
      "to": "1st Street",
      "basis": "alignment",
      "note": "Modern Judge John Aiso Street follows the roadway lettered WILMINGTON from the page edge south to FIRST STREET.",
      "name": "wilmington-street",
      "confirmed": false
    },
    {
      "kind": "absent",
      "street": "Toriumi Plaza",
      "from": "Judge John Aiso Street",
      "to": "1st Street",
      "note": "The modern plaza route crosses the interiors and boundaries of the surveyed parcels; the sheet draws no street corridor along it."
    },
    {
      "kind": "absent",
      "street": "Toriumi Plaza",
      "from": {
        "px": [
          568,
          979
        ]
      },
      "to": {
        "px": [
          334,
          889
        ]
      },
      "note": "Added in review: the sheet covers this 62 m and draws no street along it."
    },
    {
      "kind": "absent",
      "street": "Toriumi Plaza",
      "from": {
        "px": [
          440,
          722
        ]
      },
      "to": {
        "px": [
          568,
          979
        ]
      },
      "note": "Added in review: the sheet covers this 125 m and draws no street along it."
    },
    {
      "kind": "absent",
      "street": "Toriumi Plaza",
      "from": {
        "px": [
          334,
          889
        ]
      },
      "to": {
        "px": [
          411,
          715
        ]
      },
      "note": "Added in review: the sheet covers this 47 m and draws no street along it."
    },
    {
      "kind": "vanished-unnamed",
      "trace": [
        [
          711,
          1060
        ],
        [
          719,
          1344
        ]
      ],
      "basis": "alignment"
    }
  ]
};
