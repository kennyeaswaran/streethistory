module.exports = {
  id: "mr070-051",
  title: "Map of the J. B. Parker Subdivision, Being a Portion of the Reyes Tract",
  shortTitle: "J. B. Parker Subdivision",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR070/MR070-051.pdf",
  scan: "documents/mr070-051/mr070-051.pdf",
  transcription: null,

  date: { on: "1898-04" },   
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
    [51, 381], [178, 1084], [988, 908], [750, 320]
  ],
  alignment: {
    image: "documents/mr070-051/mr070-051-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.034914, -118.243474], note: "map-tool corner (0,0)" },
      { px: [1044, 0], ll: [34.033636, -118.24209], note: "map-tool corner (1044,0)" },
      { px: [0, 1749], ll: [34.032979, -118.246039], note: "map-tool corner (0,1749)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["8th Street","Central Avenue"],

  rows: [
    {
      "kind": "state",
      "asWritten": "EAST EIGHTH STREET",
      "street": "8th Street",
      "from": {
        "px": [
          72,
          499
        ]
      },
      "to": {
        "px": [
          806,
          459
        ]
      },
      "basis": "alignment",
      "name": "eighth-street"
    },
    {
      "kind": "state",
      "asWritten": "CENTRAL AVENUE",
      "street": "Central Avenue",
      "from": {
        "px": [
          602,
          333
        ]
      },
      "to": {
        "px": [
          857,
          937
        ]
      },
      "basis": "alignment",
      "name": "central-ave"
    },
    {
      "kind": "vanished",
      "asWritten": "PARKER DRIVE",
      "trace": [
        [
          247,
          492
        ],
        [
          457,
          1035
        ]
      ],
      "basis": "alignment",
      "note": "An internal street is drawn through the tract without a supplied modern counterpart.",
      "name": "parker-drive"
    }
  ]
};
