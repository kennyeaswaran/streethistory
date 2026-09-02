module.exports = {
  id: "mr053-073",
  title: "Plan de la Ciudad de Los Angeles",
  shortTitle: "Hutton / Ord Survey",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf",
  scan: "documents/mr053-073/mr053-073.pdf",
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
    [52, 1080], [18, 810], [227, 798], [208, 563],
    [644, 266], [937, 545], [1041, 933], [529, 1282]
  ],
  alignment: {
    image: "documents/mr053-073/mr053-073-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.062342, -118.253402], note: "document-tool corner (0,0)" },
      { px: [1109, 0], ll: [34.075686, -118.241084], note: "document-tool corner (1109,0)" },
      { px: [0, 1761], ll: [34.046023, -118.228003], note: "document-tool corner (0,1761)" }
    ]
  },

  // The polygon strays onto these; the document does not inform about them.
  // NOT the same as a absent row, which says the sheet covers the ground and
  // draws nothing there (MODEL-SPEC §4.4, §5.2).
  coverageExcept: [{"street":"Fort Moore Place","from":null,"to":null}],

  sweptFully: true,
  sweptFor: ["Adobe Street","Alameda Street","Alhambra Avenue","Aliso Street","Alpine Street","Ann Street","Arcadia Street","Arroyo Seco Parkway","Avila Street","Bamboo Lane","Bauchet Street","Bernard Street","Bloom Street","Blossom Plaza","Broadway","Bruno Street","Bunker Hill Avenue","Cardinal Street","Castelar Street","Cesar E Chavez Avenue","Chavez Ravine Place","Chung King Court","Chung King Road","Clara Street","Cleveland Street","College Street","Commercial Street","Coronel Street","Cottage Home Street","Doyle Place","Elmyra Street","Fort Moore Place","Gin Ling Way","Hill Place","Hill Street","I-10 Metro ExpressLanes","Jung Jing Road","Lei Min Way","Leroy Street","Llewellyn Street","Los Angeles Street","Lyon Street","Magdalena Street","Main Street","Mei Ling Way","Metro Driveway","Naud Street","New Depot Street","New High Street","Olvera Street","Ord Street","Patsaouras Transit Plaza","Rondout Street","Rosabell Street","Sanchez Street","Santa Ana Freeway","Sotello Street","Spring Street","Stadium Way","Sun Mun Way","Vignes Street","Weyse Street","Yale Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "CALLE DE LAS ADOBES",
      "street": "Adobe Street",
      "from": {
        "px": [
          621,
          398
        ]
      },
      "to": {
        "px": [
          565,
          413
        ]
      },
      "basis": "alignment",
      "note": "The aligned modern run stays within the historic roadway lettered CALLE DE LAS FLORES.",
      "name": "adobe"
    },
    {
      "kind": "unnamed",
      "street": "Alameda Street",
      "from": {
        "px": [
          653,
          724
        ]
      },
      "to": {
        "px": [
          46,
          1034
        ]
      },
      "basis": "alignment",
      "note": "The modern Alameda alignment follows a broad two-edge road running from the Plaza area through the fields.",
      "attests": "built-by"
    },
    {
      "kind": "absent",
      "street": "Alhambra Avenue",
      "from": {
        "px": [
          560,
          863
        ]
      },
      "to": {
        "px": [
          639,
          920
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Alhambra Avenue",
      "from": {
        "px": [
          568,
          831
        ]
      },
      "to": {
        "px": [
          687,
          951
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Aliso Street",
      "from": {
        "px": [
          133,
          981
        ]
      },
      "to": {
        "px": [
          160,
          1083
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Aliso Street",
      "from": {
        "px": [
          73,
          807
        ]
      },
      "to": {
        "px": [
          72,
          1016
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Alpine Street",
      "from": {
        "px": [
          420,
          418
        ]
      },
      "to": "Cleveland Street",
      "basis": "alignment",
      "note": "The aligned modern run stays within the historic roadway lettered CALLE 3a."
    },
    {
      "kind": "state",
      "asWritten": [
        "CALLE DE LAS VIRGENES",
        "VIRGIN ST"
      ],
      "street": "Alpine Street",
      "from": "Cleveland Street",
      "to": "Spring Street",
      "basis": "alignment",
      "note": "The aligned modern run stays within the historic roadway lettered CALLE 3a.",
      "name": "virgin"
    },
    {
      "kind": "absent",
      "street": "Alpine Street",
      "from": "Spring Street",
      "to": {
        "px": [
          557,
          831
        ]
      },
      "basis": "alignment",
      "note": "The aligned modern run stays within the historic roadway lettered CALLE 3a."
    },
    {
      "kind": "absent",
      "street": "Alpine Street",
      "from": {
        "px": [
          546,
          806
        ]
      },
      "to": {
        "px": [
          549,
          832
        ]
      },
      "basis": "alignment",
      "note": "The aligned modern run stays within the historic roadway lettered CALLE 3a."
    },
    {
      "kind": "absent",
      "street": "Ann Street",
      "from": {
        "px": [
          910,
          727
        ]
      },
      "to": {
        "px": [
          846,
          931
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Arcadia Street",
      "from": {
        "px": [
          105,
          805
        ]
      },
      "to": {
        "px": [
          145,
          1077
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Arroyo Seco Parkway",
      "from": {
        "px": [
          534,
          341
        ]
      },
      "to": {
        "px": [
          847,
          460
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Arroyo Seco Parkway",
      "from": {
        "px": [
          541,
          336
        ]
      },
      "to": {
        "px": [
          836,
          449
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Avila Street",
      "from": {
        "px": [
          488,
          1034
        ]
      },
      "to": {
        "px": [
          411,
          1112
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "unnamed",
      "street": "Bamboo Lane",
      "from": {
        "px": [
          727,
          521
        ]
      },
      "to": {
        "px": [
          742,
          595
        ]
      },
      "basis": "alignment",
      "note": "The aligned modern run stays within the historic roadway lettered CALLE 1a."
    },
    {
      "kind": "absent",
      "street": "Bauchet Street",
      "from": {
        "px": [
          488,
          1034
        ]
      },
      "to": {
        "px": [
          695,
          1126
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Bauchet Street",
      "from": {
        "px": [
          377,
          854
        ]
      },
      "to": {
        "px": [
          467,
          902
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Bernard Street",
      "from": {
        "px": [
          726,
          344
        ]
      },
      "to": {
        "px": [
          732,
          379
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Bernard Street",
      "from": {
        "px": [
          795,
          506
        ]
      },
      "to": {
        "px": [
          807,
          503
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Bernard Street",
      "from": {
        "px": [
          801,
          520
        ]
      },
      "to": {
        "px": [
          818,
          585
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Bloom Street",
      "from": {
        "px": [
          912,
          874
        ]
      },
      "to": {
        "px": [
          854,
          1060
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Blossom Plaza",
      "from": {
        "px": [
          645,
          627
        ]
      },
      "to": {
        "px": [
          665,
          681
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Broadway",
      "from": {
        "px": [
          951,
          599
        ]
      },
      "to": "Cottage Home Street",
      "basis": "alignment",
      "note": "The modern line follows the bilingual corridor lettered CALLE DE ETERNIDAD and ETERNITY ST."
    },
    {
      "kind": "state",
      "asWritten": [
        "ETERNITY ST.",
        "CALLE DE LA ETERNIDAD"
      ],
      "street": "Broadway",
      "from": "Cottage Home Street",
      "to": {
        "px": [
          221,
          726
        ]
      },
      "basis": "alignment",
      "note": "The modern line follows the bilingual corridor lettered CALLE DE ETERNIDAD and ETERNITY ST.",
      "name": "eternity"
    },
    {
      "kind": "absent",
      "street": "Bruno Street",
      "from": {
        "px": [
          601,
          745
        ]
      },
      "to": {
        "px": [
          615,
          828
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Bruno Street",
      "from": {
        "px": [
          613,
          711
        ]
      },
      "to": {
        "px": [
          621,
          736
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Bunker Hill Avenue",
      "from": {
        "px": [
          527,
          398
        ]
      },
      "to": {
        "px": [
          463,
          389
        ]
      },
      "basis": "alignment",
      "note": "The aligned modern run stays within the historic roadway lettered CALLE DE LAS FLORES."
    },
    {
      "kind": "absent",
      "street": "Cardinal Street",
      "from": {
        "px": [
          795,
          950
        ]
      },
      "to": {
        "px": [
          886,
          1039
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Castelar Street",
      "from": {
        "px": [
          875,
          486
        ]
      },
      "to": {
        "px": [
          807,
          503
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Chavez Ravine Place",
      "from": {
        "px": [
          565,
          320
        ]
      },
      "to": {
        "px": [
          668,
          363
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Chung King Court",
      "from": {
        "px": [
          696,
          499
        ]
      },
      "to": {
        "px": [
          698,
          507
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Chung King Road",
      "from": {
        "px": [
          740,
          490
        ]
      },
      "to": {
        "px": [
          652,
          513
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Clara Street",
      "from": {
        "px": [
          411,
          1112
        ]
      },
      "to": {
        "px": [
          452,
          1153
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Cleveland Street",
      "from": {
        "px": [
          571,
          439
        ]
      },
      "to": {
        "px": [
          413,
          478
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Commercial Street",
      "from": {
        "px": [
          72,
          1016
        ]
      },
      "to": {
        "px": [
          101,
          1101
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Coronel Street",
      "from": {
        "px": [
          678,
          303
        ]
      },
      "to": {
        "px": [
          667,
          337
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Coronel Street",
      "from": {
        "px": [
          686,
          333
        ]
      },
      "to": {
        "px": [
          699,
          377
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Cottage Home Street",
      "from": {
        "px": [
          893,
          503
        ]
      },
      "to": {
        "px": [
          862,
          585
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Doyle Place",
      "from": {
        "px": [
          831,
          515
        ]
      },
      "to": {
        "px": [
          881,
          534
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Elmyra Street",
      "from": {
        "px": [
          864,
          717
        ]
      },
      "to": {
        "px": [
          795,
          950
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Gin Ling Way",
      "from": {
        "px": [
          700,
          534
        ]
      },
      "to": {
        "px": [
          708,
          578
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Hill Place",
      "from": {
        "px": [
          424,
          421
        ]
      },
      "to": {
        "px": [
          232,
          567
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Hill Street",
      "from": {
        "px": [
          807,
          503
        ]
      },
      "to": "Bamboo Lane",
      "basis": "alignment",
      "note": "The modern line follows the bilingual corridor lettered CALLE DEL TORO and BULL ST."
    },
    {
      "kind": "state",
      "asWritten": [
        "BULL ST.",
        "CALLE DEL TORO"
      ],
      "street": "Hill Street",
      "from": "Bamboo Lane",
      "to": {
        "px": [
          216,
          667
        ]
      },
      "basis": "alignment",
      "note": "The modern line follows the bilingual corridor lettered CALLE DEL TORO and BULL ST.",
      "name": "bull"
    },
    {
      "kind": "absent",
      "street": "Hill Street",
      "from": {
        "px": [
          770,
          508
        ]
      },
      "to": {
        "px": [
          751,
          515
        ]
      },
      "basis": "alignment",
      "note": "The modern line follows the bilingual corridor lettered CALLE DEL TORO and BULL ST."
    },
    {
      "kind": "absent",
      "street": "I-10 Metro ExpressLanes",
      "from": {
        "px": [
          145,
          1077
        ]
      },
      "to": {
        "px": [
          193,
          1140
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "I-10 Metro ExpressLanes",
      "from": {
        "px": [
          160,
          1083
        ]
      },
      "to": {
        "px": [
          201,
          1143
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Jung Jing Road",
      "from": {
        "px": [
          673,
          557
        ]
      },
      "to": {
        "px": [
          680,
          586
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Lei Min Way",
      "from": {
        "px": [
          646,
          549
        ]
      },
      "to": {
        "px": [
          662,
          608
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Leroy Street",
      "from": {
        "px": [
          977,
          898
        ]
      },
      "to": {
        "px": [
          932,
          1007
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Llewellyn Street",
      "from": {
        "px": [
          810,
          729
        ]
      },
      "to": {
        "px": [
          779,
          835
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "unnamed",
      "street": "Los Angeles Street",
      "from": {
        "px": [
          29,
          901
        ]
      },
      "to": {
        "px": [
          208,
          941
        ]
      },
      "attests": "built-by"
    },
    {
      "kind": "absent",
      "street": "Los Angeles Street",
      "from": {
        "px": [
          173,
          899
        ]
      },
      "to": {
        "px": [
          227,
          932
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "unnamed",
      "street": "Los Angeles Street",
      "from": {
        "px": [
          30,
          906
        ]
      },
      "to": {
        "px": [
          71,
          903
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "unnamed",
      "street": "Lyon Street",
      "from": {
        "px": [
          375,
          1211
        ]
      },
      "to": {
        "px": [
          439,
          1220
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment.",
      "attests": "built-by"
    },
    {
      "kind": "absent",
      "street": "Magdalena Street",
      "from": {
        "px": [
          801,
          917
        ]
      },
      "to": {
        "px": [
          950,
          963
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "unnamed",
      "street": "Main Street",
      "from": {
        "px": [
          377,
          854
        ]
      },
      "to": {
        "px": [
          22,
          842
        ]
      },
      "basis": "alignment",
      "note": "The modern Main Street runs follow a separate two-edge road through the field and river-edge area, but the survey letters no name on it.",
      "attests": "built-by"
    },
    {
      "kind": "unnamed",
      "street": "Main Street",
      "from": {
        "px": [
          1037,
          920
        ]
      },
      "to": {
        "px": [
          716,
          824
        ]
      },
      "basis": "alignment",
      "note": "The modern Main Street runs follow a separate two-edge road through the field and river-edge area, but the survey letters no name on it.",
      "attests": "built-by"
    },
    {
      "kind": "absent",
      "street": "Main Street",
      "from": {
        "px": [
          716,
          824
        ]
      },
      "to": {
        "px": [
          503,
          832
        ]
      },
      "basis": "alignment",
      "note": "The modern Main Street runs follow a separate two-edge road through the field and river-edge area, but the survey letters no name on it."
    },
    {
      "kind": "absent",
      "street": "Main Street",
      "from": {
        "px": [
          503,
          832
        ]
      },
      "to": {
        "px": [
          406,
          839
        ]
      },
      "basis": "alignment",
      "note": "The modern Main Street runs follow a separate two-edge road through the field and river-edge area, but the survey letters no name on it."
    },
    {
      "kind": "unnamed",
      "street": "Main Street",
      "from": {
        "px": [
          549,
          832
        ]
      },
      "to": {
        "px": [
          472,
          805
        ]
      },
      "basis": "alignment",
      "note": "The modern Main Street runs follow a separate two-edge road through the field and river-edge area, but the survey letters no name on it."
    },
    {
      "kind": "absent",
      "street": "Mei Ling Way",
      "from": {
        "px": [
          704,
          549
        ]
      },
      "to": {
        "px": [
          650,
          563
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Metro Driveway",
      "from": {
        "px": [
          486,
          1121
        ]
      },
      "to": {
        "px": [
          525,
          1211
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Naud Street",
      "from": {
        "px": [
          889,
          799
        ]
      },
      "to": {
        "px": [
          1012,
          835
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "New Depot Street",
      "from": {
        "px": [
          510,
          357
        ]
      },
      "to": {
        "px": [
          565,
          413
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "New High Street",
      "from": {
        "px": [
          516,
          695
        ]
      },
      "to": {
        "px": [
          254,
          768
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "unnamed",
      "street": "Olvera Street",
      "from": {
        "px": [
          313,
          869
        ]
      },
      "to": {
        "px": [
          216,
          869
        ]
      },
      "note": "historic street in plaza",
      "attests": "built-by"
    },
    {
      "kind": "absent",
      "street": "Ord Street",
      "from": {
        "px": [
          319,
          516
        ]
      },
      "to": {
        "px": [
          329,
          532
        ]
      },
      "basis": "alignment",
      "note": "The aligned modern run stays within the historic roadway lettered CALLE 4a."
    },
    {
      "kind": "absent",
      "street": "Ord Street",
      "from": {
        "px": [
          336,
          551
        ]
      },
      "to": {
        "px": [
          339,
          582
        ]
      },
      "basis": "alignment",
      "note": "The aligned modern run stays within the historic roadway lettered CALLE 4a."
    },
    {
      "kind": "state",
      "asWritten": [
        "CALLE ALTA",
        "HIGH ST"
      ],
      "street": "Ord Street",
      "from": {
        "px": [
          339,
          582
        ]
      },
      "to": "Spring Street",
      "basis": "alignment",
      "note": "The aligned modern run stays within the historic roadway lettered CALLE 4a.",
      "name": "high-street-chinatown"
    },
    {
      "kind": "absent",
      "street": "Ord Street",
      "from": "Spring Street",
      "to": {
        "px": [
          406,
          839
        ]
      },
      "basis": "alignment",
      "note": "The aligned modern run stays within the historic roadway lettered CALLE 4a."
    },
    {
      "kind": "absent",
      "street": "Patsaouras Transit Plaza",
      "from": {
        "px": [
          300,
          1149
        ]
      },
      "to": {
        "px": [
          308,
          1149
        ]
      },
      "note": "The supplied plaza feature collapses to a single scan point; its small local footprint lies in cultivated ground with no two-edge roadway shown."
    },
    {
      "kind": "absent",
      "street": "Rondout Street",
      "from": {
        "px": [
          864,
          717
        ]
      },
      "to": {
        "px": [
          810,
          729
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Rosabell Street",
      "from": {
        "px": [
          560,
          908
        ]
      },
      "to": {
        "px": [
          507,
          908
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Sanchez Street",
      "from": {
        "px": [
          159,
          870
        ]
      },
      "to": {
        "px": [
          112,
          874
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Santa Ana Freeway",
      "from": {
        "px": [
          94,
          806
        ]
      },
      "to": {
        "px": [
          171,
          1130
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Santa Ana Freeway",
      "from": {
        "px": [
          84,
          806
        ]
      },
      "to": {
        "px": [
          140,
          1117
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Sotello Street",
      "from": {
        "px": [
          1014,
          830
        ]
      },
      "to": {
        "px": [
          993,
          903
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "unnamed",
      "street": "Spring Street",
      "from": {
        "px": [
          992,
          750
        ]
      },
      "to": {
        "px": [
          653,
          724
        ]
      },
      "basis": "alignment",
      "note": "North of the Plaza, the supplied modern Spring Street runs follow the survey corridor lettered MAIN STREET."
    },
    {
      "kind": "absent",
      "street": "Spring Street",
      "from": {
        "px": [
          649,
          701
        ]
      },
      "to": "Alpine Street",
      "basis": "alignment",
      "note": "North of the Plaza, the supplied modern Spring Street runs follow the survey corridor lettered MAIN STREET."
    },
    {
      "kind": "state",
      "asWritten": "MAIN STREET",
      "street": "Spring Street",
      "from": "Alpine Street",
      "to": {
        "px": [
          279,
          805
        ]
      },
      "basis": "alignment",
      "note": "North of the Plaza, the supplied modern Spring Street runs follow the survey corridor lettered MAIN STREET.",
      "name": "main-street-dtla"
    },
    {
      "kind": "absent",
      "street": "Spring Street",
      "from": {
        "px": [
          254,
          768
        ]
      },
      "to": {
        "px": [
          225,
          769
        ]
      },
      "basis": "alignment",
      "note": "North of the Plaza, the supplied modern Spring Street runs follow the survey corridor lettered MAIN STREET."
    },
    {
      "kind": "absent",
      "street": "Stadium Way",
      "from": {
        "px": [
          663,
          284
        ]
      },
      "to": {
        "px": [
          804,
          418
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Sun Mun Way",
      "from": {
        "px": [
          708,
          578
        ]
      },
      "to": {
        "px": [
          658,
          592
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Vignes Street",
      "from": {
        "px": [
          557,
          831
        ]
      },
      "to": {
        "px": [
          347,
          1205
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Vignes Street",
      "from": {
        "px": [
          549,
          832
        ]
      },
      "to": {
        "px": [
          541,
          981
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Weyse Street",
      "from": {
        "px": [
          900,
          762
        ]
      },
      "to": {
        "px": [
          958,
          780
        ]
      },
      "note": "The modern run crosses mapped lots, cultivated ground, hillside, or structures; no two-edge roadway is shown on this alignment."
    },
    {
      "kind": "absent",
      "street": "Yale Street",
      "from": {
        "px": [
          793,
          483
        ]
      },
      "to": {
        "px": [
          742,
          445
        ]
      },
      "basis": "alignment",
      "note": "The modern line follows the bilingual corridor lettered CALLE DE LAS AVISPAS and HORNET ST."
    },
    {
      "kind": "state",
      "asWritten": [
        "HORNET ST.",
        "CALLE DE LAS AVISPAS"
      ],
      "street": "Yale Street",
      "from": {
        "px": [
          742,
          445
        ]
      },
      "to": {
        "px": [
          421,
          526
        ]
      },
      "basis": "alignment",
      "note": "The modern line follows the bilingual corridor lettered CALLE DE LAS AVISPAS and HORNET ST.",
      "name": "hornet"
    },
    {
      "kind": "absent",
      "street": "Yale Street",
      "from": {
        "px": [
          421,
          526
        ]
      },
      "to": {
        "px": [
          336,
          551
        ]
      },
      "basis": "alignment",
      "note": "The modern line follows the bilingual corridor lettered CALLE DE LAS AVISPAS and HORNET ST."
    },
    {
      "kind": "state",
      "asWritten": "HORNET ST.",
      "street": "Yale Street",
      "from": {
        "px": [
          577,
          484
        ]
      },
      "to": {
        "px": [
          517,
          499
        ]
      },
      "basis": "alignment",
      "note": "The modern line follows the bilingual corridor lettered CALLE DE LAS AVISPAS and HORNET ST.",
      "name": "hornet"
    },
    {
      "kind": "absent",
      "street": "Cesar E Chavez Avenue",
      "from": {
        "px": [
          231,
          548
        ]
      },
      "to": "Broadway",
      "basis": "alignment",
      "note": "Within the old grid, the modern trace follows the corridor lettered CALLE 5a."
    },
    {
      "kind": "state",
      "asWritten": [
        "C CORTA",
        "SHORT ST"
      ],
      "street": "Cesar E Chavez Avenue",
      "from": "Broadway",
      "to": {
        "px": [
          270,
          794
        ]
      },
      "basis": "alignment",
      "note": "Within the old grid, the modern trace follows the corridor lettered CALLE 5a.",
      "name": "short-street-chavez"
    },
    {
      "kind": "absent",
      "street": "Cesar E Chavez Avenue",
      "from": {
        "px": [
          270,
          794
        ]
      },
      "to": "Main Street",
      "basis": "alignment",
      "note": "Within the old grid, the modern trace follows the corridor lettered CALLE 5a."
    },
    {
      "kind": "absent",
      "street": "Cesar E Chavez Avenue",
      "from": "Main Street",
      "to": "Lyon Street",
      "note": "Beyond the old grid, the later avenue crosses cultivated parcels without a two-edge roadway on this survey."
    },
    {
      "kind": "unnamed",
      "street": "Cesar E Chavez Avenue",
      "from": "Lyon Street",
      "to": {
        "px": [
          447,
          1247
        ]
      },
      "attests": "built-by"
    },
    {
      "kind": "absent",
      "street": "College Street",
      "from": {
        "px": [
          543,
          335
        ]
      },
      "to": "Bunker Hill Avenue",
      "basis": "alignment",
      "note": "Through the old grid, modern College Street follows the corridor lettered CALLE 2a."
    },
    {
      "kind": "state",
      "asWritten": [
        "CALLE DEL COLEGIO",
        "COLLEGE ST"
      ],
      "street": "College Street",
      "from": "Bunker Hill Avenue",
      "to": {
        "px": [
          637,
          668
        ]
      },
      "basis": "alignment",
      "note": "Through the old grid, modern College Street follows the corridor lettered CALLE 2a.",
      "name": "college"
    },
    {
      "kind": "absent",
      "street": "College Street",
      "from": {
        "px": [
          637,
          668
        ]
      },
      "to": "Main Street",
      "basis": "alignment",
      "note": "Through the old grid, modern College Street follows the corridor lettered CALLE 2a."
    },
    {
      "kind": "unnamed",
      "street": "College Street",
      "from": "Main Street",
      "to": {
        "px": [
          624,
          956
        ]
      },
      "attests": "built-by"
    },
    {
      "kind": "vanished-unnamed",
      "trace": [
        [
          717,
          825
        ],
        [
          662,
          848
        ],
        [
          531,
          864
        ],
        [
          500,
          835
        ]
      ],
      "basis": "alignment"
    },
    {
      "kind": "vanished",
      "asWritten": "CALLE DE LA ETERNIDAD",
      "trace": [
        [
          863,
          576
        ],
        [
          976,
          558
        ]
      ],
      "basis": "alignment",
      "name": "eternity"
    },
    {
      "kind": "vanished-unnamed",
      "trace": [
        [
          800,
          843
        ],
        [
          978,
          981
        ]
      ],
      "basis": "alignment"
    },
    {
      "kind": "vanished-unnamed",
      "trace": [
        [
          797,
          841
        ],
        [
          840,
          1068
        ]
      ],
      "basis": "alignment"
    },
    {
      "kind": "vanished-unnamed",
      "trace": [
        [
          629,
          962
        ],
        [
          314,
          931
        ]
      ],
      "basis": "alignment"
    }
  ]
};
