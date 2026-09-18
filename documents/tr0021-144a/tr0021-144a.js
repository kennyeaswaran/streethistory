module.exports = {
  id: "tr0021-144a",
  title: "Tract No. 2097, being a portion of Lots 7, 9, 10, 11, 12, 13, 14 and 15 and all of Lot 16, Block B, Johnston Tract",
  shortTitle: "Tract No. 2097",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0021/TR0021-144A.pdf",
  scan: "documents/tr0021-144a/tr0021-144a.pdf",
  transcription: null,

  date: { on: "1912-12" },   
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
    [123, 1779], [1147, 1657], [1081, 774], [323, 462],
    [195, 552]
  ],
  alignment: {
    image: "documents/tr0021-144a/tr0021-144a-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.047743, -118.238735], note: "map-tool corner (0,0)" },
      { px: [1164, 0], ll: [34.047789, -118.23679], note: "map-tool corner (1164,0)" },
      { px: [0, 1842], ll: [34.045176, -118.238649], note: "map-tool corner (0,1842)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["3rd Street","Alameda Street","Rose Street","Traction Avenue"],

  rows: [
    {
      "kind": "state",
      "asWritten": "THIRD ST.",
      "name": "third-street",
      "street": "3rd Street",
      "from": {
        "px": [
          140,
          1486
        ]
      },
      "to": {
        "px": [
          1135,
          1500
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "ALAMEDA ST.",
      "name": "alameda-st",
      "street": "Alameda Street",
      "from": {
        "px": [
          362,
          478
        ]
      },
      "to": {
        "px": [
          349,
          1752
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "ROSE ST.",
      "name": "rose-street",
      "street": "Rose Street",
      "from": {
        "px": [
          961,
          725
        ]
      },
      "to": "3rd Street",
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "STEPHENSON AVE.",
      "street": "Traction Avenue",
      "from": "Alameda Street",
      "to": {
        "px": [
          1119,
          1279
        ]
      },
      "basis": "alignment",
      "note": "A marginal annotation states that Stephenson Avenue was changed to Traction Avenue by Ordinance 31,899.",
      "name": "stephenson-avenue"
    }
  ]
};
