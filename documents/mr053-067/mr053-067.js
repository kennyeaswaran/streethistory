module.exports = {
  id: "mr053-067",
  title: "Plan de la Ciudad de Los Angeles",
  shortTitle: "Hutton / Ord Survey",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf",
  scan: "documents/mr053-067/mr053-067.pdf",
  transcription: null,

  date: { on: "1849-08-29" },   
  type: "tract-map",
  attests: "planned-by",
  completeness: "incidental",
  readBy: "human",

  // Coverage is the ground this document informs about — the tract boundary,
  // not the sheet edge (MODEL-SPEC §4.4). SCAN PIXELS against alignment.image,
  // so a better alignment carries it along (§4.6).
  coverage: [
    [468, 866], [483, 1519], [958, 1516], [941, 863]
  ],
  alignment: {
    image: "documents/mr053-067/mr053-067-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.044596, -118.284979], note: "document-tool corner (0,0)" },
      { px: [1123, 0], ll: [34.057926, -118.272227], note: "document-tool corner (1123,0)" },
      { px: [0, 1707], ll: [34.028422, -118.260698], note: "document-tool corner (0,1707)" }
    ]
  },

  // The polygon strays onto these; the document does not inform about them.
  // NOT the same as a absent row, which says the sheet covers the ground and
  // draws nothing there (MODEL-SPEC §4.4, §5.2).
  coverageExcept: ["Santee Street",{"street":"8th Place","from":null,"to":null},{"street":"James M Wood Boulevard","from":null,"to":null},{"street":"Chick Hearn Court","from":null,"to":null}],

  sweptFully: true,
  sweptFor: ["11th Street","12th Street","8th Place","9th Street","Broadway","Chick Hearn Court","Figueroa Street","Flower Street","Grand Avenue","Hill Street","Hope Street","James M Wood Boulevard","Los Angeles Street","Main Street","Olive Street","Olympic Boulevard","Spring Street"],

  rows: [
    {
      "kind": "unnamed",
      "street": "11th Street",
      "from": {
        "px": [
          630,
          885
        ]
      },
      "to": {
        "px": [
          638,
          1518
        ]
      },
      "basis": "alignment",
      "note": "The modern run follows a two-edge roadway on the survey, but no name is lettered along this stretch."
    },
    {
      "kind": "unnamed",
      "street": "12th Street",
      "from": {
        "px": [
          482,
          887
        ]
      },
      "to": {
        "px": [
          519,
          1519
        ]
      },
      "basis": "alignment",
      "note": "The modern run follows a two-edge roadway on the survey, but no name is lettered along this stretch."
    },
    {
      "kind": "state",
      "asWritten": "CALLE 9a",
      "street": "9th Street",
      "from": {
        "px": [
          843,
          885
        ]
      },
      "to": {
        "px": [
          855,
          1517
        ]
      },
      "basis": "alignment",
      "note": "This grid corridor continues the CALLE 9a roadway lettered on sheet 68.",
      "name": "ninth-street"
    },
    {
      "kind": "state",
      "asWritten": "CALLE FORTIN",
      "street": "Broadway",
      "from": {
        "px": [
          953,
          1334
        ]
      },
      "to": {
        "px": [
          479,
          1326
        ]
      },
      "basis": "alignment",
      "note": "This grid corridor is unlabeled locally, but its continuation on sheet 68 is lettered CALLE FORTIN.",
      "name": "fort-street"
    },
    {
      "kind": "state",
      "asWritten": "CALLE DE LAS FLORES",
      "street": "Flower Street",
      "from": {
        "px": [
          943,
          959
        ]
      },
      "to": {
        "px": [
          470,
          962
        ]
      },
      "basis": "alignment",
      "note": "The aligned modern run stays within the historic roadway lettered CALLE DE LAS FLORES.",
      "name": "flower"
    },
    {
      "kind": "state",
      "asWritten": "CHARITY ST.",
      "street": "Grand Avenue",
      "from": {
        "px": [
          947,
          1109
        ]
      },
      "to": {
        "px": [
          474,
          1115
        ]
      },
      "basis": "alignment",
      "note": "This grid corridor continues the bilingual CALLE DE CARIDAD / CHARITY ST. roadway lettered on sheet 68.",
      "name": "charity"
    },
    {
      "kind": "state",
      "asWritten": "HILL STREET",
      "street": "Hill Street",
      "from": {
        "px": [
          951,
          1259
        ]
      },
      "to": {
        "px": [
          477,
          1265
        ]
      },
      "basis": "alignment",
      "note": "This grid corridor continues the HILL STREET roadway lettered on sheet 68.",
      "name": "hill-street-downtown"
    },
    {
      "kind": "state",
      "asWritten": "HOPE ST.",
      "street": "Hope Street",
      "from": {
        "px": [
          945,
          1034
        ]
      },
      "to": {
        "px": [
          472,
          1039
        ]
      },
      "basis": "alignment",
      "note": "This grid corridor continues the HOPE ST. roadway lettered on sheet 68.",
      "name": "hope"
    },
    {
      "kind": "absent",
      "street": "Los Angeles Street",
      "from": {
        "px": [
          958,
          1507
        ]
      },
      "to": {
        "px": [
          482,
          1461
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "state",
      "asWritten": "OLIVE ST.",
      "street": "Olive Street",
      "from": {
        "px": [
          949,
          1184
        ]
      },
      "to": {
        "px": [
          475,
          1190
        ]
      },
      "basis": "alignment",
      "note": "This grid corridor continues the bilingual CALLE ACEYTUNA / OLIVE ST. roadway lettered on sheet 68.",
      "name": "olive"
    },
    {
      "kind": "unnamed",
      "street": "Olympic Boulevard",
      "from": {
        "px": [
          731,
          864
        ]
      },
      "to": {
        "px": [
          734,
          1517
        ]
      },
      "basis": "alignment",
      "note": "The modern run follows a two-edge roadway on the survey, but no name is lettered along this stretch."
    },
    {
      "kind": "state",
      "asWritten": "CALLE PRIMAVERA",
      "street": "Spring Street",
      "from": {
        "px": [
          955,
          1407
        ]
      },
      "to": {
        "px": [
          874,
          1410
        ]
      },
      "basis": "alignment",
      "note": "This short modern segment follows the continuation of CALLE PRIMAVERA from sheet 68.",
      "name": "spring"
    },
    {
      "kind": "state",
      "asWritten": "GRASSHOPPER ST.",
      "street": "Figueroa Street",
      "from": {
        "px": [
          942,
          883
        ]
      },
      "to": "Olympic Boulevard",
      "basis": "alignment",
      "note": "The northern portion of the aligned corridor is lettered GRASSHOPPER ST.; its Spanish companion appears farther south.",
      "name": "chapules"
    },
    {
      "kind": "state",
      "asWritten": [
        "CALLE DE LAS CHAPULES",
        "GRASSHOPPER ST"
      ],
      "street": "Figueroa Street",
      "from": "Olympic Boulevard",
      "to": {
        "px": [
          468,
          888
        ]
      },
      "basis": "alignment",
      "note": "The southern portion of the same aligned corridor is lettered CALLE DE LAS CHAPULAS.",
      "name": "chapules"
    },
    {
      "kind": "absent",
      "street": "Main Street",
      "from": {
        "px": [
          956,
          1431
        ]
      },
      "to": "Spring Street",
      "note": "North of Spring, the modern curve leaves the old rectangular roadway and crosses the adjoining block."
    },
    {
      "kind": "absent",
      "street": "Main Street",
      "from": "Spring Street",
      "to": {
        "px": [
          480,
          1391
        ]
      },
      "basis": "alignment",
      "note": "South of Spring, the modern centerline follows the continuation of CALLE PRIMAVERA from sheet 68."
    },
    {
      "kind": "vanished",
      "asWritten": "CALLE PRINCIPAL",
      "trace": [
        [
          483,
          1485
        ],
        [
          956,
          1485
        ]
      ],
      "basis": "alignment",
      "note": "The bottom grid corridor continues CALLE PRINCIPAL from sheet 68, but no supplied modern street follows it; modern Los Angeles Street crosses it obliquely.",
      "name": "main-street-dtla"
    },
    {
      "kind": "vanished",
      "asWritten": "CALLE PRIMAVERA",
      "trace": [
        [
          875,
          1407
        ],
        [
          479,
          1415
        ]
      ],
      "basis": "alignment",
      "name": "spring"
    }
  ]
};
