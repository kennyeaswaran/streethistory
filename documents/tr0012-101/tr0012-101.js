module.exports = {
  id: "tr0012-101",
  title: "Industrial Center Tract",
  shortTitle: "Industrial Center Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0012/TR0012-101.pdf",
  scan: "documents/tr0012-101/tr0012-101.pdf",
  transcription: null,

  date: { on: "1907-04-11" },   
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
    [185, 717], [134, 1170], [1178, 1202], [1160, 630]
  ],
  alignment: {
    image: "documents/tr0012-101/tr0012-101-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.04424, -118.239987], note: "map-tool corner (0,0)" },
      { px: [1306, 0], ll: [34.044366, -118.231352], note: "map-tool corner (1306,0)" },
      { px: [0, 1842], ll: [34.034077, -118.239774], note: "map-tool corner (0,1842)" }
    ]
  },

  // The polygon strays onto these; the document does not inform about them.
  // NOT the same as a absent row, which says the sheet covers the ground and
  // draws nothing there (MODEL-SPEC §4.4, §5.2).
  coverageExcept: [{"street":"Willow Street","from":null,"to":null}],

  sweptFully: true,
  sweptFor: ["6th Street","Alameda Street","Colyton Street","Factory Place","Hewitt Street","Mateo Street","Mill Street","Molino Street","Palmetto Street","Seaton Street","Willow Street"],

  rows: [
    {
      "kind": "state",
      "street": "6th Street",
      "from": {
        "px": [
          146,
          1061
        ]
      },
      "to": "Alameda Street",
      "note": "The western modern approach enters the sheet obliquely before reaching the drawn Sixth Street road at Alameda.",
      "basis": "alignment",
      "asWritten": "6th St",
      "name": "sixth-street"
    },
    {
      "kind": "state",
      "asWritten": "6TH ST.",
      "street": "6th Street",
      "from": "Alameda Street",
      "to": {
        "px": [
          1175,
          1095
        ]
      },
      "basis": "alignment",
      "name": "sixth-street"
    },
    {
      "kind": "state",
      "asWritten": "ALAMEDA ST.",
      "street": "Alameda Street",
      "from": {
        "px": [
          244,
          712
        ]
      },
      "to": {
        "px": [
          212,
          1172
        ]
      },
      "basis": "alignment",
      "name": "alameda-st"
    },
    {
      "kind": "state",
      "asWritten": "COLYTON ST.",
      "street": "Colyton Street",
      "from": {
        "px": [
          590,
          681
        ]
      },
      "to": {
        "px": [
          600,
          758
        ]
      },
      "basis": "alignment",
      "name": "colyton"
    },
    {
      "kind": "state",
      "asWritten": "FACTORY PLACE",
      "street": "Factory Place",
      "from": {
        "px": [
          230,
          930
        ]
      },
      "to": {
        "px": [
          854,
          925
        ]
      },
      "basis": "alignment",
      "note": "'LOT A' beside the printed road name is the tract lot description, not part of the street label.",
      "name": "factory-place"
    },
    {
      "kind": "state",
      "asWritten": "CAROLINA ST.",
      "street": "Hewitt Street",
      "from": {
        "px": [
          757,
          666
        ]
      },
      "to": {
        "px": [
          765,
          737
        ]
      },
      "basis": "alignment",
      "note": "The short modern Hewitt run follows the old Carolina Street corridor north of Palmetto.",
      "name": "carolina-arts-district"
    },
    {
      "kind": "state",
      "asWritten": "MATEO ST.",
      "street": "Mateo Street",
      "from": {
        "px": [
          1041,
          641
        ]
      },
      "to": {
        "px": [
          1090,
          1199
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
          807,
          1106
        ]
      },
      "to": {
        "px": [
          815,
          1191
        ]
      },
      "basis": "alignment",
      "name": "mill-st-arts-district"
    },
    {
      "kind": "state",
      "asWritten": "MOLINO ST.",
      "street": "Molino Street",
      "from": {
        "px": [
          930,
          650
        ]
      },
      "to": {
        "px": [
          940,
          723
        ]
      },
      "basis": "alignment",
      "name": "molino-st"
    },
    {
      "kind": "state",
      "asWritten": "PALMETTO ST.",
      "street": "Palmetto Street",
      "from": {
        "px": [
          239,
          795
        ]
      },
      "to": {
        "px": [
          1049,
          711
        ]
      },
      "basis": "alignment",
      "note": "The sloping main Palmetto corridor is lettered across the tract's upper frontage.",
      "name": "palmetto"
    },
    {
      "kind": "state",
      "asWritten": "PALMETTO ST.",
      "street": "Palmetto Street",
      "from": {
        "px": [
          1054,
          759
        ]
      },
      "to": {
        "px": [
          1164,
          751
        ]
      },
      "basis": "alignment",
      "note": "The short eastern Palmetto run is separately drawn and lettered east of Mateo.",
      "name": "palmetto"
    },
    {
      "kind": "state",
      "asWritten": "SEATON ST.",
      "street": "Seaton Street",
      "from": {
        "px": [
          412,
          697
        ]
      },
      "to": {
        "px": [
          422,
          775
        ]
      },
      "basis": "alignment",
      "name": "seaton"
    }
  ]
};
