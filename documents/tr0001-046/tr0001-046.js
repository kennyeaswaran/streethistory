module.exports = {
  id: "tr0001-046",
  title: "Map of Subdivision of the Home Place of Mariana W. de Coronel",
  shortTitle: "Mariana W. de Coronel Home Place",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0001/TR0001-046.pdf",
  scan: "documents/tr0001-046/tr0001-046.pdf",
  transcription: null,

  date: { on: "1900-04-03" },   
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
    [315, 401], [290, 1353], [972, 1322], [962, 464]
  ],
  alignment: {
    image: "documents/tr0001-046/tr0001-046-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.038274, -118.241925], note: "map-tool corner (0,0)" },
      { px: [1163, 0], ll: [34.037185, -118.240032], note: "map-tool corner (1163,0)" },
      { px: [0, 1842], ll: [34.035773, -118.243992], note: "map-tool corner (0,1842)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["7th Street","Central Avenue","Merchant Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "SEVENTH STREET",
      "street": "7th Street",
      "from": {
        "px": [
          313,
          491
        ]
      },
      "to": {
        "px": [
          963,
          556
        ]
      },
      "basis": "alignment",
      "name": "seventh-street"
    },
    {
      "kind": "state",
      "asWritten": "CENTRAL AVENUE",
      "street": "Central Avenue",
      "from": {
        "px": [
          832,
          451
        ]
      },
      "to": {
        "px": [
          873,
          1326
        ]
      },
      "basis": "alignment",
      "name": "central-ave"
    },
    {
      "kind": "state",
      "asWritten": "MERCHANT STREET",
      "street": "Merchant Street",
      "from": {
        "px": [
          425,
          501
        ]
      },
      "to": {
        "px": [
          413,
          1347
        ]
      },
      "basis": "alignment",
      "name": "merchant-st"
    }
  ]
};
