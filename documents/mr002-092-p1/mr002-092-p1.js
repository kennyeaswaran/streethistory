module.exports = {
  id: "mr002-092-p1",
  title: "Plan of the Johnston Tract at the corner of First and Alameda Sts., Los Angeles City",
  shortTitle: "Johnston Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR002/MR002-092.pdf",
  scan: "documents/mr002-092-p1/mr002-092-p1.pdf",
  transcription: null,

  date: { on: "1871-03" },   
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
    [108, 1589], [938, 1575], [941, 366], [313, 402]
  ],
  alignment: {
    image: "documents/mr002-092-p1/mr002-092-p1-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.049687, -118.233108], note: "map-tool corner (0,0)" },
      { px: [1123, 0], ll: [34.046418, -118.233115], note: "map-tool corner (1123,0)" },
      { px: [0, 1687], ll: [34.049696, -118.238993], note: "map-tool corner (0,1687)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["1st Street","2nd Street","Alameda Street","Hewitt Street","Rose Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "First Street",
      "street": "1st Street",
      "from": {
        "px": [
          207,
          1587
        ]
      },
      "to": {
        "px": [
          376,
          398
        ]
      },
      "basis": "alignment",
      "note": "The supplied modern 1st Street route follows the curving roadway whose label is divided into First and Street on this sheet.",
      "name": "first-street"
    },
    {
      "kind": "state",
      "asWritten": "Guadalupe Street",
      "street": "2nd Street",
      "from": {
        "px": [
          840,
          1577
        ]
      },
      "to": {
        "px": [
          866,
          370
        ]
      },
      "basis": "alignment",
      "note": "The modern 2nd Street centerline follows the roadway lettered Guadalupe Street along the sheet's eastern side.",
      "name": "guadalupe"
    },
    {
      "kind": "state",
      "asWritten": "Alameda STREET.",
      "street": "Alameda Street",
      "from": {
        "px": [
          134,
          1439
        ]
      },
      "to": {
        "px": [
          938,
          1431
        ]
      },
      "basis": "alignment",
      "note": "The complete street label is split between the filing sheets: Alameda appears here and STREET. on page 2; the separate upper wording identifies the Los Angeles and San Pedro Railroad.",
      "name": "alameda-st"
    },
    {
      "kind": "state",
      "asWritten": "Hewitt STREET.",
      "street": "Hewitt Street",
      "from": {
        "px": [
          349,
          864
        ]
      },
      "to": {
        "px": [
          940,
          867
        ]
      },
      "basis": "alignment",
      "note": "The complete label is split between the filing sheets: Hewitt appears here and STREET. on page 2.",
      "name": "hewitt"
    },
    {
      "kind": "state",
      "asWritten": "Rose STREET.",
      "street": "Rose Street",
      "from": {
        "px": [
          304,
          1143
        ]
      },
      "to": {
        "px": [
          939,
          1141
        ]
      },
      "basis": "alignment",
      "note": "The complete label is split between the filing sheets: Rose appears here and STREET. on page 2.",
      "name": "rose-street"
    },
    {
      "kind": "vanished",
      "asWritten": "Messer STREET.",
      "trace": [
        [
          948,
          586
        ],
        [
          386,
          584
        ]
      ],
      "basis": "alignment",
      "note": "Messer appears on this sheet and STREET. on page 2; this western continuation lies beyond the modern Garey Street endpoint and has no supplied modern counterpart.",
      "name": "messer-street"
    },
    {
      "kind": "state",
      "asWritten": "First Street",
      "street": "1st Street",
      "from": "Alameda Street",
      "to": null,
      "basis": "alignment",
      "note": "Added in review: the sheet draws and letters this stretch and the AI pass had no row for it.",
      "name": "first-street"
    }
  ]
};
