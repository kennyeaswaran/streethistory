module.exports = {
  id: "pm017-045",
  title: "Parcel Map - L.A. No. 1136",
  shortTitle: "Parcel Map 1136",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/parcel/PM017/PM017-045.pdf",
  scan: "documents/pm017-045/pm017-045.pdf",
  transcription: null,

  date: { on: "1969-02-18" },   
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
    [175, 576], [252, 2136], [1232, 2166], [967, 510]
  ],
  alignment: {
    image: "documents/pm017-045/pm017-045-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.038824, -118.245275], note: "map-tool corner (0,0)" },
      { px: [1722, 0], ll: [34.037269, -118.243124], note: "map-tool corner (1722,0)" },
      { px: [0, 2459], ll: [34.036261, -118.247935], note: "map-tool corner (0,2459)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["8th Street","Agatha Street","Gladys Avenue","Stanford Avenue"],

  rows: [
    {
      "kind": "state",
      "asWritten": "EIGHTH STREET",
      "street": "8th Street",
      "from": {
        "px": [
          238,
          1857
        ]
      },
      "to": {
        "px": [
          1192,
          1918
        ]
      },
      "basis": "alignment",
      "name": "eighth-street"
    },
    {
      "kind": "state",
      "asWritten": "AGATHA STREET",
      "street": "Agatha Street",
      "from": {
        "px": [
          180,
          676
        ]
      },
      "to": {
        "px": [
          825,
          667
        ]
      },
      "basis": "alignment",
      "name": "agatha"
    },
    {
      "kind": "state",
      "asWritten": "GLADYS AVENUE",
      "street": "Gladys Avenue",
      "from": {
        "px": [
          809,
          523
        ]
      },
      "to": {
        "px": [
          959,
          1902
        ]
      },
      "basis": "alignment",
      "name": "gladys-ave"
    },
    {
      "kind": "state",
      "asWritten": "GLADYS AVENUE",
      "street": "Gladys Avenue",
      "from": {
        "px": [
          1063,
          1910
        ]
      },
      "to": {
        "px": [
          1112,
          2162
        ]
      },
      "basis": "alignment",
      "name": "gladys-ave"
    },
    {
      "kind": "state",
      "asWritten": "STANFORD AVENUE",
      "street": "Stanford Avenue",
      "from": {
        "px": [
          295,
          566
        ]
      },
      "to": {
        "px": [
          296,
          1860
        ]
      },
      "basis": "alignment",
      "name": "stanford-ave"
    },
    {
      "kind": "state",
      "asWritten": "STANFORD AVENUE",
      "street": "Stanford Avenue",
      "from": {
        "px": [
          406,
          1870
        ]
      },
      "to": {
        "px": [
          457,
          2142
        ]
      },
      "basis": "alignment",
      "name": "stanford-ave"
    }
  ]
};
