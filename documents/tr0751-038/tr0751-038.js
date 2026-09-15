module.exports = {
  id: "tr0751-038",
  title: "Tract No. 29338",
  shortTitle: "Tract No. 29338",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0751/TR0751-038.pdf",
  scan: "documents/tr0751-038/tr0751-038.pdf",
  transcription: null,

  date: { on: "1966-01-04" },   
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
    [989, 936], [1048, 2378], [1675, 2362], [1667, 1251],
    [1212, 896]
  ],
  alignment: {
    image: "documents/tr0751-038/tr0751-038-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.04619, -118.239753], note: "map-tool corner (0,0)" },
      { px: [1730, 0], ll: [34.046694, -118.234013], note: "map-tool corner (1730,0)" },
      { px: [0, 2460], ll: [34.039379, -118.238895], note: "map-tool corner (0,2460)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["4th Place","4th Street","5th Street","Hewitt Street","Merrick Street","Molino Street","Palmetto Street"],

  rows: [
    {
      "kind": "unnamed",
      "street": "4th Place",
      "from": {
        "px": [
          1105,
          915
        ]
      },
      "to": "4th Street",
      "note": "This aligned diagonal lies on the outer edge of the plat's FOURTH STREET corridor; no separate 4th Place corridor is drawn."
    },
    {
      "kind": "unnamed",
      "street": "4th Place",
      "from": "Molino Street",
      "to": {
        "px": [
          1670,
          1675
        ]
      },
      "note": "The short modern continuation east of Molino crosses the un-subdivided parcel, with no paired street edges."
    },
    {
      "kind": "state",
      "asWritten": "FOURTH STREET",
      "street": "4th Street",
      "from": {
        "px": [
          995,
          1072
        ]
      },
      "to": {
        "px": [
          1668,
          1419
        ]
      },
      "basis": "alignment",
      "name": "fourth-street",
      "note": "The westward horizontal and southeast diagonal portions form one continuous lettered corridor."
    },
    {
      "kind": "state",
      "asWritten": "FIFTH STREET",
      "street": "5th Street",
      "from": {
        "px": [
          1021,
          1728
        ]
      },
      "to": "Hewitt Street",
      "basis": "alignment",
      "name": "fifth-street"
    },
    {
      "kind": "state",
      "asWritten": "HEWITT STREET",
      "street": "Hewitt Street",
      "from": "4th Street",
      "to": "Palmetto Street",
      "basis": "alignment",
      "name": "hewitt"
    },
    {
      "kind": "absent",
      "street": "Merrick Street",
      "from": "4th Street",
      "to": {
        "px": [
          1563,
          1170
        ]
      },
      "note": "The modern diagonal runs through open ground above the plat's FOURTH STREET; only Fourth's outer edge is drawn here."
    },
    {
      "kind": "state",
      "asWritten": "MOLINO STREET",
      "street": "Molino Street",
      "from": "4th Street",
      "to": "Palmetto Street",
      "basis": "alignment",
      "name": "molino-st"
    },
    {
      "kind": "state",
      "asWritten": "PALMETTO STREET",
      "street": "Palmetto Street",
      "from": {
        "px": [
          1044,
          2284
        ]
      },
      "to": {
        "px": [
          1674,
          2277
        ]
      },
      "basis": "alignment",
      "name": "palmetto"
    }
  ]
};
