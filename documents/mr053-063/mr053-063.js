module.exports = {
  id: "mr053-063",
  title: "Map of Hammel and Denker Tract, Los Angeles City, California",
  shortTitle: "Hammel and Denker Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-063.pdf",
  scan: "documents/mr053-063/mr053-063.pdf",
  transcription: null,

  date: { on: "1893-10" },   
  type: "tract-map",
  attests: "planned-by",
  completeness: "incidental",
  readBy: "human",

  // Coverage is the ground this document informs about — the tract boundary,
  // not the sheet edge (MODEL-SPEC §4.4). SCAN PIXELS against alignment.image,
  // so a better alignment carries it along (§4.6).
  coverage: [
    [5, 286], [1038, 282], [1092, 1285], [-13, 1398]
  ],
  alignment: {
    image: "documents/mr053-063/mr053-063-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.042655, -118.254204], note: "document-tool corner (0,0)" },
      { px: [1084, 0], ll: [34.040344, -118.25178], note: "document-tool corner (1084,0)" },
      { px: [0, 1705], ll: [34.039473, -118.258561], note: "document-tool corner (0,1705)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["9th Street","Los Angeles Street","Main Street","Olympic Boulevard","Santee Alley","Santee Street","Spring Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "NINTH STREET",
      "street": "9th Street",
      "from": {
        "px": [
          3,
          438
        ]
      },
      "to": {
        "px": [
          1045,
          412
        ]
      },
      "basis": "alignment",
      "note": "The modern 9th Street trace follows the full east-west roadway lettered NINTH STREET.",
      "name": "ninth-street"
    },
    {
      "kind": "state",
      "asWritten": "LOS ANGELES STREET",
      "street": "Los Angeles Street",
      "from": {
        "px": [
          536,
          284
        ]
      },
      "to": {
        "px": [
          487,
          1347
        ]
      },
      "basis": "alignment",
      "note": "The modern centerline remains within the complete roadway lettered LOS ANGELES STREET.",
      "name": "los-angeles-street"
    },
    {
      "kind": "unnamed",
      "street": "Main Street",
      "from": {
        "px": [
          134,
          286
        ]
      },
      "to": "9th Street",
      "basis": "alignment",
      "note": "North of Ninth, this modern branch lies within the converging roadway wedge shown by the plat, but that portion carries no street name."
    },
    {
      "kind": "state",
      "asWritten": "MAIN STREET",
      "street": "Main Street",
      "from": "9th Street",
      "to": {
        "px": [
          100,
          1386
        ]
      },
      "basis": "alignment",
      "note": "South of Ninth, the modern Main Street trace follows the roadway explicitly lettered MAIN STREET.",
      "name": "main-street-dtla"
    },
    {
      "kind": "state",
      "asWritten": "TENTH STREET",
      "street": "Olympic Boulevard",
      "from": {
        "px": [
          -8,
          1088
        ]
      },
      "to": {
        "px": [
          1077,
          997
        ]
      },
      "basis": "alignment",
      "note": "The modern Olympic Boulevard alignment follows the full roadway lettered TENTH STREET.",
      "name": "tenth-street"
    },
    {
      "kind": "unnamed",
      "street": "Santee Alley",
      "from": "Olympic Boulevard",
      "to": {
        "px": [
          1039,
          1290
        ]
      },
      "basis": "alignment",
      "note": "South of Tenth/Olympic, the modern Santee Alley trace follows the eastern roadway lettered MAPLE STREET."
    },
    {
      "kind": "state",
      "asWritten": "SANTEE STREET",
      "street": "Santee Street",
      "from": {
        "px": [
          850,
          283
        ]
      },
      "to": {
        "px": [
          850,
          1310
        ]
      },
      "basis": "alignment",
      "note": "The modern Santee Street line remains within the complete roadway lettered SANTEE STREET.",
      "name": "santee-street"
    },
    {
      "kind": "unnamed",
      "street": "Spring Street",
      "from": {
        "px": [
          95,
          286
        ]
      },
      "to": "9th Street",
      "basis": "alignment",
      "note": "The short modern Spring approach lies within the broad converging roadway drawn north of Ninth, but no name is lettered on that branch."
    },
    {
      "kind": "vanished-unnamed",
      "trace": [
        [
          1009,
          1009
        ],
        [
          981,
          586
        ]
      ],
      "basis": "alignment"
    },
    {
      "kind": "vanished-unnamed",
      "trace": [
        [
          853,
          586
        ],
        [
          1070,
          579
        ]
      ],
      "basis": "alignment"
    }
  ]
};
