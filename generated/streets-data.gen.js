// GENERATED FILE — DO NOT EDIT (built by generate.js from names.js and
// documents/; see MODEL-SPEC.md). Regenerate with: node generate.js
// Built: 2026-09-06
const NEIGHBORHOODS = [
  {
    "id": "dtla",
    "name": "Downtown",
    "bbox": {
      "s": 34.033,
      "w": -118.272,
      "n": 34.068,
      "e": -118.225
    }
  }
];

const CATEGORIES = [
  {
    "id": "person",
    "label": "Named after a person"
  },
  {
    "id": "alive",
    "label": "Namesake alive when named"
  },
  {
    "id": "governor",
    "label": "Governors & politicians"
  },
  {
    "id": "destination",
    "label": "Named for where it goes"
  },
  {
    "id": "aspiration",
    "label": "Virtues & aspirations"
  },
  {
    "id": "renamed",
    "label": "Has former names"
  },
  {
    "id": "borrowed",
    "label": "Borrowed from another city"
  },
  {
    "id": "disputed",
    "label": "Origin disputed"
  },
  {
    "id": "nature",
    "label": "Named for a plant, tree, or landform"
  },
  {
    "id": "descriptive",
    "label": "Descriptive of role or position"
  },
  {
    "id": "place",
    "label": "Named for a place"
  },
  {
    "id": "number",
    "label": "Numbered streets"
  },
  {
    "id": "event",
    "label": "Named for an event"
  },
  {
    "id": "system",
    "label": "Freeways & route systems"
  },
  {
    "id": "unknown",
    "label": "Researched — origin not yet found"
  },
  {
    "id": "unresearched",
    "label": "Not yet researched"
  }
];

const SIMILAR_PROJECTS = [
  {
    "title": "L.A. Street Names (Mark Tapio Kines)",
    "url": "https://lastreetnames.com/",
    "desc": "Researched prose histories of 2,200+ L.A. County street names — the primary narrative complement to this map."
  },
  {
    "title": "History of San Francisco Place Names (Noah Veltman)",
    "url": "http://sfstreets.noahveltman.com/",
    "desc": "Clickable SF street-etymology map with theme filters; the closest predecessor to this project.",
    "sub": [
      {
        "title": "“Mapping the History of Street Names” (Veltman's write-up)",
        "url": "https://source.opennews.org/articles/mapping-history-street-names/",
        "desc": "How the SF map was built, and pitfalls for anyone building one."
      }
    ]
  },
  {
    "title": "Open Etymology Map",
    "url": "https://etymology.dsantini.it/",
    "desc": "Worldwide map generated from OpenStreetMap's name:etymology:wikidata tags."
  },
  {
    "title": "EqualStreetNames",
    "url": "https://equalstreetnames.eu/",
    "desc": "Open-source maps of street names by gender, 60+ cities — mostly in Belgium and Germany — built on OSM + Wikidata."
  },
  {
    "title": "Paristique",
    "url": "https://www.paristique.fr/",
    "desc": "Interactive map of the history of Paris street names."
  },
  {
    "title": "NYC honorary street names map",
    "url": "https://streetnamesmap-nyc.hub.arcgis.com/",
    "desc": "NYC Dept. of Records map of ~2,500 honorary street co-namings."
  },
  {
    "title": "STNAMES LAB",
    "url": "https://en.stnameslab.com/the-project/",
    "desc": "Academic research project analyzing street names as cultural markers; focuses on Spain but has searchable maps of North America."
  },
  {
    "title": "Streetpédia",
    "url": "https://streetpedia.fr/",
    "desc": "French mobile app with audio street-name histories."
  }
];

const STREET_DATA = {
  "10th Street": {
    "name": "10th Street",
    "orientation": "EW",
    "segments": [
      {
        "label": "San Pedro to Crocker (11th St)",
        "name": "10th Street",
        "entityId": "tenth-street",
        "namedAfter": "Its ordinal position in the downtown grid, once this stretch was folded into 10th Street",
        "namedAfterLink": null,
        "planned": {
          "text": "by 1893",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-065.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1893",
            "until": "?",
            "name": "11th Street",
            "entityId": "eleventh-street",
            "formInForce": "11th Street",
            "origin": "labeled “11th St.” on the 1893 Clark and Bryan Tract {{(source)}} — Its ordinal position in the downtown grid — the numbering system was in place by 1849",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-065.pdf"
          },
          {
            "from": "?",
            "until": null,
            "name": "10th Street",
            "entityId": "tenth-street",
            "formInForce": "10th Street",
            "how": "renaming",
            "origin": "arrival on this stretch not directly documented",
            "originLink": null
          }
        ],
        "note": "Renamed Olympic Boulevard in 1935, for the 1932 Games — the request went in in July 1929, and that they had been the tenth Olympiad seems to have gone unremarked.",
        "attested": true,
        "knownFraction": 0,
        "categories": [
          "number",
          "renamed"
        ],
        "formerCategories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Ord/Hutton survey, “Plan de la Ciudad de Los Angeles” (Aug. 29, 1849)",
            "url": "https://tessa2.lapl.org/digital/collection/maps/id/42/"
          },
          {
            "title": "Map of the Clark and Bryan Tract, Los Angeles City, Calif. (M.R. 53-65, Nov. 1893; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-065.pdf"
          },
          {
            "title": "Blocks 73 & 72 of Ord's Survey belonging to W. M. Williams (M.R. 3-32, Apr. 29, 1875)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-032.pdf"
          }
        ],
        "maxLng": -118.2505,
        "from": null,
        "to": "Crocker Street"
      },
      {
        "label": "east of Crocker",
        "name": "10th Street",
        "entityId": "tenth-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 10th Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "Renamed Olympic Boulevard in 1935, for the 1932 Games — the request went in in July 1929, and that they had been the tenth Olympiad seems to have gone unremarked.",
        "attested": false,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Ord/Hutton survey, “Plan de la Ciudad de Los Angeles” (Aug. 29, 1849)",
            "url": "https://tessa2.lapl.org/digital/collection/maps/id/42/"
          },
          {
            "title": "Blocks 73 & 72 of Ord's Survey belonging to W. M. Williams (M.R. 3-32, Apr. 29, 1875)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-032.pdf"
          }
        ],
        "minLng": -118.2505,
        "from": "Crocker Street",
        "to": null
      }
    ]
  },
  "11th Place": {
    "name": "11th Place",
    "entityId": "11th-place",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "11th Street": {
    "name": "11th Street",
    "orientation": "EW",
    "segments": [
      {
        "label": "west of L. A. Live Way",
        "name": "11th Street",
        "entityId": "eleventh-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 11th Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Ord/Hutton survey, “Plan de la Ciudad de Los Angeles” (Aug. 29, 1849)",
            "url": "https://tessa2.lapl.org/digital/collection/maps/id/42/"
          },
          {
            "title": "Blocks 73 & 72 of Ord's Survey belonging to W. M. Williams (M.R. 3-32, Apr. 29, 1875)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-032.pdf"
          }
        ],
        "maxLng": -118.27,
        "from": null,
        "to": "L. A. Live Way",
        "gapAfter": true
      },
      {
        "label": "beyond Figueroa (original 11th St) (discontinuous)",
        "name": "11th Street",
        "entityId": "eleventh-street",
        "namedAfter": "Its ordinal position in the downtown grid — the numbering system was in place by 1849",
        "namedAfterLink": null,
        "planned": {
          "text": "1849",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1875",
            "until": null,
            "name": "11th Street",
            "entityId": "eleventh-street",
            "formInForce": "11th Street",
            "how": "origin",
            "origin": "labeled “ELEVENTH STREET” on the 1875 Blocks 73 & 72 of Ord's Survey {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-032.pdf"
          }
        ],
        "note": null,
        "attested": true,
        "knownFraction": 0.86,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Ord/Hutton survey, “Plan de la Ciudad de Los Angeles” (Aug. 29, 1849)",
            "url": "https://tessa2.lapl.org/digital/collection/maps/id/42/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          },
          {
            "title": "Blocks 73 & 72 of Ord's Survey belonging to W. M. Williams (M.R. 3-32, Apr. 29, 1875; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-032.pdf"
          },
          {
            "title": "Blocks 73 & 72 of Ord's Survey belonging to W. M. Williams (M.R. 3-33, Apr. 29, 1875; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-033.pdf"
          }
        ],
        "minLng": -118.27,
        "maxLng": -118.263,
        "from": "Figueroa Street",
        "to": {
          "px": [
            1006,
            1254
          ]
        }
      },
      {
        "label": "part of",
        "name": "11th Street",
        "entityId": "eleventh-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 11th Street is not yet researched",
        "namedAfterLink": null,
        "planned": {
          "text": "1849",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
        },
        "built": "not yet researched",
        "note": null,
        "attested": true,
        "knownFraction": 0,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Ord/Hutton survey, “Plan de la Ciudad de Los Angeles” (Aug. 29, 1849)",
            "url": "https://tessa2.lapl.org/digital/collection/maps/id/42/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          },
          {
            "title": "Blocks 73 & 72 of Ord's Survey belonging to W. M. Williams (M.R. 3-32, Apr. 29, 1875)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-032.pdf"
          }
        ],
        "minLng": -118.263,
        "maxLng": -118.2585,
        "from": {
          "px": [
            1006,
            1254
          ]
        },
        "to": {
          "px": [
            251,
            412
          ]
        }
      },
      {
        "label": "beyond Santee Alley",
        "name": "11th Street",
        "entityId": "eleventh-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 11th Street is not yet researched",
        "namedAfterLink": null,
        "planned": {
          "text": "1849",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
        },
        "built": "not yet researched",
        "note": null,
        "attested": true,
        "knownFraction": 0.8,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Ord/Hutton survey, “Plan de la Ciudad de Los Angeles” (Aug. 29, 1849)",
            "url": "https://tessa2.lapl.org/digital/collection/maps/id/42/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          },
          {
            "title": "Map of the O. W. Childs Tract, 200 Lots in the City of Los Angeles, Cal. (M.R. 6-378, July 11, 1885; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-378.pdf"
          },
          {
            "title": "Blocks 73 & 72 of Ord's Survey belonging to W. M. Williams (M.R. 3-32, Apr. 29, 1875)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-032.pdf"
          }
        ],
        "minLng": -118.2585,
        "maxLng": -118.2558,
        "from": {
          "px": [
            251,
            412
          ]
        },
        "to": "Santee Alley"
      },
      {
        "label": "beyond Santee Alley",
        "name": "11th Street",
        "entityId": "eleventh-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 11th Street is not yet researched",
        "namedAfterLink": null,
        "planned": {
          "text": "by 1885",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-378.pdf"
        },
        "built": "not yet researched",
        "note": null,
        "attested": true,
        "knownFraction": 0.8,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Ord/Hutton survey, “Plan de la Ciudad de Los Angeles” (Aug. 29, 1849)",
            "url": "https://tessa2.lapl.org/digital/collection/maps/id/42/"
          },
          {
            "title": "Map of the O. W. Childs Tract, 200 Lots in the City of Los Angeles, Cal. (M.R. 6-378, July 11, 1885; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-378.pdf"
          },
          {
            "title": "Blocks 73 & 72 of Ord's Survey belonging to W. M. Williams (M.R. 3-32, Apr. 29, 1875)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-032.pdf"
          }
        ],
        "minLng": -118.2558,
        "from": "Santee Alley",
        "to": null
      }
    ]
  },
  "12th Street": {
    "name": "12th Street",
    "orientation": "EW",
    "segments": [
      {
        "label": "west of L. A. Live Way",
        "name": "12th Street",
        "entityId": "twelfth-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 12th Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Ord/Hutton survey, “Plan de la Ciudad de Los Angeles” (Aug. 29, 1849)",
            "url": "https://tessa2.lapl.org/digital/collection/maps/id/42/"
          },
          {
            "title": "Map of the O. W. Childs Tract, 200 Lots in the City of Los Angeles, Cal. (M.R. 6-378, July 11, 1885)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-378.pdf"
          }
        ],
        "maxLng": -118.2709,
        "from": null,
        "to": "L. A. Live Way",
        "gapAfter": true
      },
      {
        "label": "part of (discontinuous)",
        "name": "12th Street",
        "entityId": "twelfth-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 12th Street is not yet researched",
        "namedAfterLink": null,
        "planned": {
          "text": "1849",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
        },
        "built": "not yet researched",
        "note": null,
        "attested": true,
        "knownFraction": 0,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Ord/Hutton survey, “Plan de la Ciudad de Los Angeles” (Aug. 29, 1849)",
            "url": "https://tessa2.lapl.org/digital/collection/maps/id/42/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          },
          {
            "title": "Map of the O. W. Childs Tract, 200 Lots in the City of Los Angeles, Cal. (M.R. 6-378, July 11, 1885)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-378.pdf"
          }
        ],
        "minLng": -118.2709,
        "maxLng": -118.2596,
        "from": {
          "px": [
            482,
            887
          ]
        },
        "to": {
          "px": [
            284,
            733
          ]
        }
      },
      {
        "label": "beyond Santee (original 12th St)",
        "name": "12th Street",
        "entityId": "twelfth-street",
        "namedAfter": "Its ordinal position in the downtown grid — the numbering system was in place by 1849",
        "namedAfterLink": null,
        "planned": {
          "text": "1849",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1885",
            "until": null,
            "name": "12th Street",
            "entityId": "twelfth-street",
            "formInForce": "12th Street",
            "how": "origin",
            "origin": "labeled “Twelfth Street” on the 1885 O. W. Childs Tract {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-378.pdf"
          }
        ],
        "note": null,
        "attested": true,
        "knownFraction": 0.8,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Ord/Hutton survey, “Plan de la Ciudad de Los Angeles” (Aug. 29, 1849)",
            "url": "https://tessa2.lapl.org/digital/collection/maps/id/42/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          },
          {
            "title": "Map of the O. W. Childs Tract, 200 Lots in the City of Los Angeles, Cal. (M.R. 6-378, July 11, 1885; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-378.pdf"
          }
        ],
        "minLng": -118.2596,
        "maxLng": -118.2572,
        "from": {
          "px": [
            284,
            733
          ]
        },
        "to": "Santee Street"
      },
      {
        "label": "beyond Santee (original 12th St)",
        "name": "12th Street",
        "entityId": "twelfth-street",
        "namedAfter": "Its ordinal position in the downtown grid — the numbering system was in place by 1849",
        "namedAfterLink": null,
        "planned": {
          "text": "by 1885",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-378.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1885",
            "until": null,
            "name": "12th Street",
            "entityId": "twelfth-street",
            "formInForce": "12th Street",
            "how": "origin",
            "origin": "labeled “Twelfth Street” on the 1885 O. W. Childs Tract {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-378.pdf"
          }
        ],
        "note": null,
        "attested": true,
        "knownFraction": 0.8,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Ord/Hutton survey, “Plan de la Ciudad de Los Angeles” (Aug. 29, 1849)",
            "url": "https://tessa2.lapl.org/digital/collection/maps/id/42/"
          },
          {
            "title": "Map of the O. W. Childs Tract, 200 Lots in the City of Los Angeles, Cal. (M.R. 6-378, July 11, 1885; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-378.pdf"
          }
        ],
        "minLng": -118.2572,
        "maxLng": -118.253,
        "from": "Santee Street",
        "to": {
          "px": [
            1525,
            708
          ]
        }
      },
      {
        "label": "part of",
        "name": "12th Street",
        "entityId": "twelfth-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 12th Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Ord/Hutton survey, “Plan de la Ciudad de Los Angeles” (Aug. 29, 1849)",
            "url": "https://tessa2.lapl.org/digital/collection/maps/id/42/"
          },
          {
            "title": "Map of the O. W. Childs Tract, 200 Lots in the City of Los Angeles, Cal. (M.R. 6-378, July 11, 1885)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-378.pdf"
          }
        ],
        "minLng": -118.253,
        "from": {
          "px": [
            1525,
            708
          ]
        },
        "to": null
      }
    ]
  },
  "14th Place": {
    "name": "14th Place",
    "entityId": "14th-place",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "14th Street": {
    "name": "14th Street",
    "entityId": "14th-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "15th Drive": {
    "name": "15th Drive",
    "entityId": "15th-drive",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "15th Street": {
    "name": "15th Street",
    "orientation": "EW",
    "segments": [
      {
        "label": "part of",
        "name": "15th Street",
        "entityId": "fifteenth-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 15th Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Miguel Subdivision, part of the Celis Vineyard Tract in Los Angeles City, Cal. (M.R. 53-16, Mar. 25, 1893)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-016.pdf"
          }
        ],
        "maxLng": -118.2624,
        "from": null,
        "to": {
          "px": [
            212,
            812
          ]
        }
      },
      {
        "label": "part of (original 15th St)",
        "name": "15th Street",
        "entityId": "fifteenth-street",
        "namedAfter": "Its ordinal position in the downtown grid — the numbering system was in place by 1849",
        "namedAfterLink": null,
        "planned": {
          "text": "by 1893",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-016.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1893",
            "until": null,
            "name": "15th Street",
            "entityId": "fifteenth-street",
            "formInForce": "15th Street",
            "how": "origin",
            "origin": "labeled “15th ST.” and “(formerly Laura St)” on the 1893 Miguel Subdivision {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-016.pdf"
          }
        ],
        "note": null,
        "attested": true,
        "knownFraction": 0.76,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Miguel Subdivision, part of the Celis Vineyard Tract in Los Angeles City, Cal. (M.R. 53-16, Mar. 25, 1893; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-016.pdf"
          }
        ],
        "minLng": -118.2624,
        "maxLng": -118.2585,
        "from": {
          "px": [
            212,
            812
          ]
        },
        "to": {
          "px": [
            894,
            781
          ]
        }
      },
      {
        "label": "part of",
        "name": "15th Street",
        "entityId": "fifteenth-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 15th Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Miguel Subdivision, part of the Celis Vineyard Tract in Los Angeles City, Cal. (M.R. 53-16, Mar. 25, 1893)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-016.pdf"
          }
        ],
        "minLng": -118.2585,
        "from": {
          "px": [
            894,
            781
          ]
        },
        "to": null
      }
    ]
  },
  "16th Street": {
    "name": "16th Street",
    "entityId": "sixteenth-street",
    "namedAfter": "Its ordinal position in the downtown grid — the numbering system was in place by 1849",
    "namedAfterLink": null,
    "planned": {
      "text": "by 1893",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-016.pdf"
    },
    "built": "not yet researched",
    "nameHistory": [
      {
        "from": "by 1893",
        "until": null,
        "name": "16th Street",
        "entityId": "sixteenth-street",
        "formInForce": "16th Street",
        "how": "origin",
        "origin": "labeled “16th ST.” and “(formerly Pine St)” on the 1893 Miguel Subdivision {{(source)}}",
        "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-016.pdf"
      }
    ],
    "note": null,
    "attested": true,
    "knownFraction": 0.76,
    "categories": [
      "number"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "L.A. Street Names: 1st Street (on the numbering system)",
        "url": "https://lastreetnames.com/street/0001st-street/"
      },
      {
        "title": "Miguel Subdivision, part of the Celis Vineyard Tract in Los Angeles City, Cal. (M.R. 53-16, Mar. 25, 1893; identified by map alignment, not a lot-level record)",
        "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-016.pdf"
      }
    ]
  },
  "17th Street": {
    "name": "17th Street",
    "orientation": "EW",
    "segments": [
      {
        "label": "west of Figueroa",
        "name": "17th Street",
        "entityId": "17th-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "maxLng": -118.2708,
        "from": null,
        "to": "Figueroa Street",
        "gapAfter": true
      },
      {
        "label": "east of Hope (discontinuous)",
        "name": "17th Street",
        "entityId": "17th-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLng": -118.2708,
        "from": "Hope Street",
        "to": null
      }
    ]
  },
  "18th Street": {
    "name": "18th Street",
    "entityId": "18th-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "1st Street": {
    "name": "1st Street",
    "orientation": "EW",
    "segments": [
      {
        "label": "part of",
        "name": "1st Street",
        "entityId": "first-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 1st Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "Since 1883 1st Street has divided north from south in Los Angeles addresses, as Main Street divides east from west. Claims dating the numbering to 1846 are doubtful.",
        "attested": false,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          }
        ],
        "maxLng": -118.2521,
        "from": null,
        "to": {
          "px": [
            231,
            814
          ]
        }
      },
      {
        "label": "part of",
        "name": "1st Street",
        "entityId": "first-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 1st Street is not yet researched",
        "namedAfterLink": null,
        "planned": {
          "text": "by 1883",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-307.pdf"
        },
        "built": "not yet researched",
        "note": "Since 1883 1st Street has divided north from south in Los Angeles addresses, as Main Street divides east from west. Claims dating the numbering to 1846 are doubtful.",
        "attested": true,
        "knownFraction": 0.81,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Map of Block W Mott Tract as subdivided by E. T. Wright at request of M. L. Wicks in Los Angeles City (M.R. 5-307, June 25, 1883; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-307.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          }
        ],
        "minLng": -118.2521,
        "maxLng": -118.2508,
        "from": {
          "px": [
            231,
            814
          ]
        },
        "to": {
          "px": [
            246,
            69
          ]
        }
      },
      {
        "label": "part of",
        "name": "1st Street",
        "entityId": "first-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 1st Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "Since 1883 1st Street has divided north from south in Los Angeles addresses, as Main Street divides east from west. Claims dating the numbering to 1846 are doubtful.",
        "attested": false,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          }
        ],
        "minLng": -118.2508,
        "maxLng": -118.2502,
        "from": {
          "px": [
            246,
            69
          ]
        },
        "to": {
          "px": [
            1239,
            389
          ]
        }
      },
      {
        "label": "beyond Broadway",
        "name": "1st Street",
        "entityId": "first-street",
        "namedAfter": "Its ordinal position in the downtown grid, extended onto this stretch",
        "namedAfterLink": null,
        "planned": {
          "text": "by 1869",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1869",
            "until": null,
            "name": "1st Street",
            "entityId": "first-street",
            "formInForce": "1st Street",
            "how": "extension",
            "origin": "labeled “First Street” on the 1869 Mott Tract building lots {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf"
          }
        ],
        "note": "Since 1883 1st Street has divided north from south in Los Angeles addresses, as Main Street divides east from west. Claims dating the numbering to 1846 are doubtful.",
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
        },
        "knownFraction": 0.89,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Map of a part of Building Lots of the Mott Tract in the City & County of Los Angeles, California (M.R. 1-489, Mar. 2, 1869; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          }
        ],
        "minLng": -118.2502,
        "maxLng": -118.2455,
        "from": {
          "px": [
            1239,
            389
          ]
        },
        "to": "Broadway"
      },
      {
        "label": "beyond Broadway (original 1st St)",
        "name": "1st Street",
        "entityId": "first-street",
        "namedAfter": "Its ordinal position in the downtown grid — the numbering system was in place by 1849",
        "namedAfterLink": null,
        "planned": {
          "text": "1849",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "1849",
            "until": null,
            "name": "1st Street",
            "entityId": "first-street",
            "formInForce": "1st Street",
            "how": "origin",
            "origin": "labeled “CALLE 1a”, “1ST ST”, “1st ST” and “First Street” on the 1849 Hutton / Ord Survey and the 1869 Mott Tract building lots {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          }
        ],
        "note": "Since 1883 1st Street has divided north from south in Los Angeles addresses, as Main Street divides east from west. Claims dating the numbering to 1846 are doubtful.",
        "attested": true,
        "knownFraction": 1,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-71, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
          },
          {
            "title": "Map of a part of Building Lots of the Mott Tract in the City & County of Los Angeles, California (M.R. 1-489, Mar. 2, 1869; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf"
          }
        ],
        "minLng": -118.2455,
        "maxLng": -118.2419,
        "from": "Broadway",
        "to": {
          "px": [
            455,
            1519
          ]
        }
      },
      {
        "label": "beyond Alameda",
        "name": "1st Street",
        "entityId": "first-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 1st Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "Since 1883 1st Street has divided north from south in Los Angeles addresses, as Main Street divides east from west. Claims dating the numbering to 1846 are doubtful.",
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          }
        ],
        "minLng": -118.2419,
        "maxLng": -118.2381,
        "from": {
          "px": [
            455,
            1519
          ]
        },
        "to": "Alameda Street"
      },
      {
        "label": "beyond Alameda",
        "name": "1st Street",
        "entityId": "first-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 1st Street is not yet researched",
        "namedAfterLink": null,
        "planned": {
          "text": "by 1875",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-060.pdf"
        },
        "built": "not yet researched",
        "note": "Since 1883 1st Street has divided north from south in Los Angeles addresses, as Main Street divides east from west. Claims dating the numbering to 1846 are doubtful.",
        "attested": true,
        "knownFraction": 0.86,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Map of the Thomas Tract, being a portion of the Johnson and Mott Tract (M.R. 3-60, May 19, 1875; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-060.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          }
        ],
        "minLng": -118.2381,
        "maxLng": -118.2345,
        "from": "Alameda Street",
        "to": {
          "px": [
            349,
            100
          ]
        }
      },
      {
        "label": "part of",
        "name": "1st Street",
        "entityId": "first-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 1st Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "Since 1883 1st Street has divided north from south in Los Angeles addresses, as Main Street divides east from west. Claims dating the numbering to 1846 are doubtful.",
        "attested": false,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          }
        ],
        "minLng": -118.2345,
        "from": {
          "px": [
            349,
            100
          ]
        },
        "to": null
      }
    ]
  },
  "2nd Place": {
    "name": "2nd Place",
    "entityId": "2nd-place",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "absentAsOf": {
      "text": "1869 (Mott Tract building lots)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf"
    },
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "2nd Street": {
    "name": "2nd Street",
    "orientation": "EW",
    "segments": [
      {
        "label": "west of Lake",
        "name": "2nd Street",
        "entityId": "second-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 2nd Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          }
        ],
        "maxLng": -118.2719,
        "from": null,
        "to": "Lake Street",
        "gapAfter": true
      },
      {
        "label": "Westlake to Bonnie Brae (discontinuous)",
        "name": "2nd Street",
        "entityId": "second-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 2nd Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          }
        ],
        "minLng": -118.2719,
        "maxLng": -118.2686,
        "from": "Westlake Avenue",
        "to": "Bonnie Brae Street",
        "gapAfter": true
      },
      {
        "label": "Union to Union Pl (discontinuous)",
        "name": "2nd Street",
        "entityId": "second-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 2nd Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          }
        ],
        "minLng": -118.2686,
        "maxLng": -118.2651,
        "from": "Union Avenue",
        "to": "Union Place",
        "gapAfter": true
      },
      {
        "label": "beyond Loma Drive (discontinuous)",
        "name": "2nd Street",
        "entityId": "second-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 2nd Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          }
        ],
        "minLng": -118.2651,
        "maxLng": -118.2632,
        "from": "Loma Drive",
        "to": {
          "px": [
            232,
            738
          ]
        }
      },
      {
        "label": "beyond Lucas",
        "name": "2nd Street",
        "entityId": "second-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 2nd Street is not yet researched",
        "namedAfterLink": null,
        "planned": {
          "text": "by 1909",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0015/TR0015-166a.pdf"
        },
        "built": "not yet researched",
        "note": null,
        "attested": true,
        "knownFraction": 0.66,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plat of \"Crownwood\" (Dec. 10, 1909; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0015/TR0015-166a.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          }
        ],
        "minLng": -118.2632,
        "maxLng": -118.26,
        "from": {
          "px": [
            232,
            738
          ]
        },
        "to": "Lucas Avenue"
      },
      {
        "label": "beyond Lucas",
        "name": "2nd Street",
        "entityId": "second-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 2nd Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          }
        ],
        "minLng": -118.26,
        "maxLng": -118.2533,
        "from": "Lucas Avenue",
        "to": {
          "px": [
            1082,
            851
          ]
        }
      },
      {
        "label": "part of",
        "name": "2nd Street",
        "entityId": "second-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 2nd Street is not yet researched",
        "namedAfterLink": null,
        "planned": {
          "text": "by 1883",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-307.pdf"
        },
        "built": "not yet researched",
        "note": null,
        "attested": true,
        "knownFraction": 0.81,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Map of Block W Mott Tract as subdivided by E. T. Wright at request of M. L. Wicks in Los Angeles City (M.R. 5-307, June 25, 1883; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-307.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          }
        ],
        "minLng": -118.2533,
        "maxLng": -118.2528,
        "from": {
          "px": [
            1082,
            851
          ]
        },
        "to": {
          "px": [
            1089,
            579
          ]
        },
        "gapAfter": true
      },
      {
        "label": "Hope to Broadway (discontinuous)",
        "name": "2nd Street",
        "entityId": "second-street",
        "namedAfter": "Its ordinal position in the downtown grid, extended onto this stretch",
        "namedAfterLink": null,
        "planned": {
          "text": "by 1869",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1869",
            "until": null,
            "name": "2nd Street",
            "entityId": "second-street",
            "formInForce": "2nd Street",
            "how": "extension",
            "origin": "labeled “Second Street” on the 1869 Mott Tract building lots {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf"
          }
        ],
        "note": null,
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
        },
        "knownFraction": 0.89,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Map of a part of Building Lots of the Mott Tract in the City & County of Los Angeles, California (M.R. 1-489, Mar. 2, 1869; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          }
        ],
        "minLng": -118.2528,
        "maxLng": -118.2467,
        "from": "Hope Street",
        "to": "Broadway"
      },
      {
        "label": "beyond Broadway (original 2nd St)",
        "name": "2nd Street",
        "entityId": "second-street",
        "namedAfter": "Its ordinal position in the downtown grid — the numbering system was in place by 1849",
        "namedAfterLink": null,
        "planned": {
          "text": "1849",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "1849",
            "until": null,
            "name": "2nd Street",
            "entityId": "second-street",
            "formInForce": "2nd Street",
            "how": "origin",
            "origin": "labeled “CALLE 2a”, “2D ST”, “2ND ST.” and “Second Street” on the 1849 Hutton / Ord Survey and the 1869 Mott Tract building lots {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          }
        ],
        "note": null,
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "knownFraction": 1,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-71, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
          },
          {
            "title": "Map of a part of Building Lots of the Mott Tract in the City & County of Los Angeles, California (M.R. 1-489, Mar. 2, 1869; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf"
          }
        ],
        "minLng": -118.2467,
        "maxLng": -118.2442,
        "from": "Broadway",
        "to": {
          "px": [
            362,
            1434
          ]
        }
      },
      {
        "label": "part of",
        "name": "2nd Street",
        "entityId": "second-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 2nd Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          }
        ],
        "minLng": -118.2442,
        "maxLng": -118.2382,
        "from": {
          "px": [
            362,
            1434
          ]
        },
        "to": {
          "px": [
            987,
            1521
          ]
        }
      },
      {
        "label": "part of (Guadalupe St)",
        "name": "2nd Street",
        "entityId": "second-street",
        "namedAfter": "Its ordinal position in the downtown grid, once this stretch was folded into 2nd Street",
        "namedAfterLink": null,
        "planned": {
          "text": "by 1875",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-060.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1875",
            "until": "?",
            "name": "Guadalupe Street",
            "entityId": "guadalupe",
            "formInForce": "Guadalupe Street",
            "how": "origin",
            "origin": "labeled “GUADALUPE ST” on the 1875 Thomas Tract (sheets 1, 2) {{(source)}} — known only from the 1875 Thomas Tract map, in 2nd Street's position east of Alameda",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-060.pdf"
          },
          {
            "from": "?",
            "until": null,
            "name": "2nd Street",
            "entityId": "second-street",
            "formInForce": "2nd Street",
            "how": "renaming",
            "origin": "arrival on this stretch not directly documented",
            "originLink": null
          }
        ],
        "note": null,
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "knownFraction": 0,
        "categories": [
          "number",
          "renamed"
        ],
        "formerCategories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Map of the Thomas Tract, being a portion of the Johnson and Mott Tract (M.R. 3-60, May 19, 1875; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-060.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          }
        ],
        "minLng": -118.2382,
        "maxLng": -118.2344,
        "from": {
          "px": [
            987,
            1521
          ]
        },
        "to": {
          "px": [
            997,
            67
          ]
        }
      },
      {
        "label": "part of",
        "name": "2nd Street",
        "entityId": "second-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 2nd Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          }
        ],
        "minLng": -118.2344,
        "maxLng": -118.2327,
        "from": {
          "px": [
            997,
            67
          ]
        },
        "to": {
          "px": [
            928,
            856
          ]
        },
        "gapAfter": true
      },
      {
        "label": "east of Anderson (discontinuous)",
        "name": "2nd Street",
        "entityId": "second-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 2nd Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          }
        ],
        "minLng": -118.2327,
        "from": "Anderson Street",
        "to": null
      }
    ]
  },
  "2nd Street Tunnel": {
    "name": "2nd Street Tunnel",
    "orientation": "EW",
    "segments": [
      {
        "label": "part of (2nd St)",
        "name": "2nd Street Tunnel",
        "entityId": "2nd-street-tunnel",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "by 1883",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-307.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1883",
            "until": "?",
            "name": "2nd Street",
            "entityId": "second-street",
            "formInForce": "2nd Street",
            "origin": "labeled “SECOND STREET” on the 1883 Block W, Mott Tract {{(source)}} — Its ordinal position in the downtown grid — the numbering system was in place by 1849",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-307.pdf"
          },
          {
            "from": "?",
            "until": null,
            "name": "2nd Street Tunnel",
            "entityId": "2nd-street-tunnel",
            "formInForce": "2nd Street Tunnel",
            "how": "renaming",
            "origin": "arrival on this stretch not directly documented",
            "originLink": null
          }
        ],
        "note": null,
        "attested": true,
        "knownFraction": 0,
        "categories": [
          "unresearched",
          "renamed"
        ],
        "formerCategories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Map of Block W Mott Tract as subdivided by E. T. Wright at request of M. L. Wicks in Los Angeles City (M.R. 5-307, June 25, 1883; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-307.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          },
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          }
        ],
        "maxLng": -118.2519,
        "from": null,
        "to": {
          "px": [
            1097,
            63
          ]
        }
      },
      {
        "label": "part of",
        "name": "2nd Street Tunnel",
        "entityId": "2nd-street-tunnel",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLng": -118.2519,
        "maxLng": -118.2513,
        "from": {
          "px": [
            1097,
            63
          ]
        },
        "to": {
          "px": [
            1033,
            394
          ]
        }
      },
      {
        "label": "part of (2nd St)",
        "name": "2nd Street Tunnel",
        "entityId": "2nd-street-tunnel",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "by 1869",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1869",
            "until": "?",
            "name": "2nd Street",
            "entityId": "second-street",
            "formInForce": "2nd Street",
            "origin": "labeled “Second Street” on the 1869 Mott Tract building lots {{(source)}} — Its ordinal position in the downtown grid — the numbering system was in place by 1849",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf"
          },
          {
            "from": "?",
            "until": null,
            "name": "2nd Street Tunnel",
            "entityId": "2nd-street-tunnel",
            "formInForce": "2nd Street Tunnel",
            "how": "renaming",
            "origin": "arrival on this stretch not directly documented",
            "originLink": null
          }
        ],
        "note": null,
        "attested": true,
        "knownFraction": 0,
        "categories": [
          "unresearched",
          "renamed"
        ],
        "formerCategories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Map of a part of Building Lots of the Mott Tract in the City & County of Los Angeles, California (M.R. 1-489, Mar. 2, 1869; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          },
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          }
        ],
        "minLng": -118.2513,
        "from": {
          "px": [
            1033,
            394
          ]
        },
        "to": null
      }
    ]
  },
  "3rd Street": {
    "name": "3rd Street",
    "orientation": "EW",
    "segments": [
      {
        "label": "part of",
        "name": "3rd Street",
        "entityId": "third-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 3rd Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          }
        ],
        "maxLng": -118.2647,
        "from": null,
        "to": {
          "px": [
            61,
            1679
          ]
        }
      },
      {
        "label": "part of (Crown Hill Ave)",
        "name": "3rd Street",
        "entityId": "third-street",
        "namedAfter": "Its ordinal position in the downtown grid, once this stretch was folded into 3rd Street",
        "namedAfterLink": null,
        "planned": {
          "text": "by 1909",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0015/TR0015-166a.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1909",
            "until": "?",
            "name": "Crown Hill Avenue",
            "entityId": "crown-hill-ave",
            "formInForce": "Crown Hill Avenue",
            "how": "origin",
            "origin": "labeled “CROWN HILL AVE.” on the 1909 Crownwood (sheets 1, 2) {{(source)}} — Not documented, but plainly Crown Hill itself — the rise the street climbs, and the Witmer family's 650 acres",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0015/TR0015-166a.pdf"
          },
          {
            "from": "?",
            "until": null,
            "name": "3rd Street",
            "entityId": "third-street",
            "formInForce": "3rd Street",
            "how": "renaming",
            "origin": "arrival on this stretch not directly documented",
            "originLink": null
          }
        ],
        "note": null,
        "attested": true,
        "absentAsOf": {
          "text": "1909 (Crownwood)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0015/TR0015-166a.pdf"
        },
        "knownFraction": 0.34,
        "categories": [
          "number",
          "renamed"
        ],
        "formerCategories": [
          "place"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plat of \"Crownwood\" (Dec. 10, 1909; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0015/TR0015-166a.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          },
          {
            "title": "Recorded map: “Crownwood” (Witmer’s Subdivision of parts of Lots 2 and 7, Block 38, Hancock Survey; surveyed Nov. 1909 by Chas. Forman Jr.), M.B. 15-166",
            "url": "https://pw.lacounty.gov/smpm/landrecords/pdf/TR0015-166a.pdf"
          }
        ],
        "minLng": -118.2647,
        "maxLng": -118.2613,
        "from": {
          "px": [
            61,
            1679
          ]
        },
        "to": {
          "px": [
            1152,
            1521
          ]
        }
      },
      {
        "label": "beyond Bixel",
        "name": "3rd Street",
        "entityId": "third-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 3rd Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          }
        ],
        "minLng": -118.2613,
        "maxLng": -118.2598,
        "from": {
          "px": [
            1152,
            1521
          ]
        },
        "to": "Bixel Street"
      },
      {
        "label": "Bixel to Boylston (Arnold St)",
        "name": "3rd Street",
        "entityId": "third-street",
        "namedAfter": "Its ordinal position in the downtown grid, once this stretch was folded into 3rd Street",
        "namedAfterLink": null,
        "planned": {
          "text": "by 1894",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR066/MR066-035.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1894",
            "until": "?",
            "name": "Arnold Street",
            "entityId": "arnold",
            "formInForce": "Arnold Street",
            "how": "origin",
            "origin": "labeled “ARNOLD ST.” on the 1894 Washington Tract map {{(source)}} — namesake untraced",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR066/MR066-035.pdf"
          },
          {
            "from": "?",
            "until": null,
            "name": "3rd Street",
            "entityId": "third-street",
            "formInForce": "3rd Street",
            "how": "renaming",
            "origin": "arrival on this stretch not directly documented",
            "originLink": null
          }
        ],
        "note": null,
        "attested": true,
        "knownFraction": 0,
        "categories": [
          "number",
          "renamed"
        ],
        "formerCategories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Recorded map: Compromise Subdivision of a portion of the O.T. Johnson tract, known as the Washington Tract, M.R. 66-35 (surveyed Mar. 1894 by E.D. Severance) (identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR066/MR066-035.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          }
        ],
        "minLng": -118.2598,
        "maxLng": -118.2578,
        "from": "Bixel Street",
        "to": "Boylston Street"
      },
      {
        "label": "beyond Boylston",
        "name": "3rd Street",
        "entityId": "third-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 3rd Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          }
        ],
        "minLng": -118.2578,
        "maxLng": -118.2526,
        "from": "Boylston Street",
        "to": {
          "px": [
            796,
            400
          ]
        }
      },
      {
        "label": "beyond Hill",
        "name": "3rd Street",
        "entityId": "third-street",
        "namedAfter": "Its ordinal position in the downtown grid, extended onto this stretch",
        "namedAfterLink": null,
        "planned": {
          "text": "by 1869",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1869",
            "until": null,
            "name": "3rd Street",
            "entityId": "third-street",
            "formInForce": "3rd Street",
            "how": "extension",
            "origin": "labeled “Third Street” on the 1869 Mott Tract building lots {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf"
          }
        ],
        "note": null,
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
        },
        "knownFraction": 0.89,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Map of a part of Building Lots of the Mott Tract in the City & County of Los Angeles, California (M.R. 1-489, Mar. 2, 1869; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          }
        ],
        "minLng": -118.2526,
        "maxLng": -118.2491,
        "from": {
          "px": [
            796,
            400
          ]
        },
        "to": "Hill Street"
      },
      {
        "label": "beyond Hill (original 3rd St)",
        "name": "3rd Street",
        "entityId": "third-street",
        "namedAfter": "Its ordinal position in the downtown grid — the numbering system was in place by 1849",
        "namedAfterLink": null,
        "planned": {
          "text": "1849",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "1849",
            "until": null,
            "name": "3rd Street",
            "entityId": "third-street",
            "formInForce": "3rd Street",
            "how": "origin",
            "origin": "labeled “CALLE 3a”, “3RD ST”, “3RD ST.” and “Third Street” on the 1849 Hutton / Ord Survey and the 1869 Mott Tract building lots {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          }
        ],
        "note": null,
        "attested": true,
        "knownFraction": 1,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-71, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
          },
          {
            "title": "Map of a part of Building Lots of the Mott Tract in the City & County of Los Angeles, California (M.R. 1-489, Mar. 2, 1869; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf"
          }
        ],
        "minLng": -118.2491,
        "maxLng": -118.2456,
        "from": "Hill Street",
        "to": {
          "px": [
            229,
            1435
          ]
        }
      },
      {
        "label": "beyond Los Angeles",
        "name": "3rd Street",
        "entityId": "third-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 3rd Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          }
        ],
        "minLng": -118.2456,
        "maxLng": -118.2447,
        "from": {
          "px": [
            229,
            1435
          ]
        },
        "to": "Los Angeles Street"
      },
      {
        "label": "Los Angeles to Wall (Morgan Lane)",
        "name": "3rd Street",
        "entityId": "third-street",
        "namedAfter": "Its ordinal position in the downtown grid, once this stretch was folded into 3rd Street",
        "namedAfterLink": null,
        "planned": {
          "text": "by 1882",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-005.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1882",
            "until": "?",
            "name": "Morgan Lane",
            "entityId": "morgan-lane",
            "formInForce": "Morgan Lane",
            "how": "origin",
            "origin": "labeled “Morgan Lane” on the 1882 Orchard Tract {{(source)}} — George W. Morgan, one of the three men the tract was subdivided for and, with A. H. Judson, one of the two at whose request it was recorded",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-005.pdf"
          },
          {
            "from": "?",
            "until": null,
            "name": "3rd Street",
            "entityId": "third-street",
            "formInForce": "3rd Street",
            "how": "renaming",
            "origin": "arrival on this stretch not directly documented",
            "originLink": null
          }
        ],
        "note": null,
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "knownFraction": 0,
        "categories": [
          "number",
          "renamed"
        ],
        "formerCategories": [
          "person"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Map of the Orchard Tract in the City of Los Angeles (M.R. 5-5, Aug. 2, 1882; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-005.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          },
          {
            "title": "Wikipedia: Highland Park, Los Angeles (George Morgan and Albert Judson created the Highland Park tract in 1886)",
            "url": "https://en.wikipedia.org/wiki/Highland_Park,_Los_Angeles"
          }
        ],
        "minLng": -118.2447,
        "maxLng": -118.2438,
        "from": "Los Angeles Street",
        "to": "Wall Street"
      },
      {
        "label": "beyond Wall",
        "name": "3rd Street",
        "entityId": "third-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 3rd Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          }
        ],
        "minLng": -118.2438,
        "maxLng": -118.2427,
        "from": "Wall Street",
        "to": {
          "px": [
            954,
            467
          ]
        }
      },
      {
        "label": "part of",
        "name": "3rd Street",
        "entityId": "third-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 3rd Street is not yet researched",
        "namedAfterLink": null,
        "planned": {
          "text": "by 1888",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
        },
        "built": "not yet researched",
        "note": null,
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "knownFraction": 0.78,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Map of the Wolfskill Orchard Tract situated in the City of Los Angeles Cal. (sheet 5, M.R. 30-13, Jan. 11, 1888; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          }
        ],
        "minLng": -118.2427,
        "maxLng": -118.2382,
        "from": {
          "px": [
            954,
            467
          ]
        },
        "to": {
          "px": [
            898,
            1509
          ]
        }
      },
      {
        "label": "part of (Georgia St)",
        "name": "3rd Street",
        "entityId": "third-street",
        "namedAfter": "Its ordinal position in the downtown grid, once this stretch was folded into 3rd Street",
        "namedAfterLink": null,
        "planned": {
          "text": "by 1875",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-060.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1875",
            "until": "?",
            "name": "Georgia Street",
            "entityId": "georgia-east",
            "formInForce": "Georgia Street",
            "how": "origin",
            "origin": "labeled “GEORGIA ST” and “Georgia St” on the 1875 Thomas Tract, the 1887 Mills and Wicks Extension map, sheet 1 and the 1888 Wolfskill Orchard Tract, sheet 5 (M.R. 30-13) {{(source)}} — Likely the state",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-060.pdf"
          },
          {
            "from": "?",
            "until": null,
            "name": "3rd Street",
            "entityId": "third-street",
            "formInForce": "3rd Street",
            "how": "renaming",
            "origin": "arrival on this stretch not directly documented",
            "originLink": null
          }
        ],
        "note": null,
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "knownFraction": 0.07,
        "categories": [
          "number",
          "renamed"
        ],
        "formerCategories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Map of the Thomas Tract, being a portion of the Johnson and Mott Tract (M.R. 3-60, May 19, 1875; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-060.pdf"
          },
          {
            "title": "Recorded map: Mills and Wicks' Extension of Second St. and adjoining subdivision, City of Los Angeles, M.R. 13-87 — lots 1–144 and 160–236 subdivided at the request of M. L. Wicks and Howard W. Mills, April–May 1886, under the direction of Geo. C. Knox; further lots added Jan. 1887 (sheet 1 of 2) (identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR013/MR013-087.pdf"
          },
          {
            "title": "Map of the Wolfskill Orchard Tract situated in the City of Los Angeles Cal. (sheet 5, M.R. 30-13, Jan. 11, 1888; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          }
        ],
        "minLng": -118.2382,
        "maxLng": -118.2344,
        "from": {
          "px": [
            898,
            1509
          ]
        },
        "to": {
          "px": [
            737,
            61
          ]
        }
      },
      {
        "label": "part of",
        "name": "3rd Street",
        "entityId": "third-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 3rd Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          }
        ],
        "minLng": -118.2344,
        "maxLng": -118.2326,
        "from": {
          "px": [
            737,
            61
          ]
        },
        "to": {
          "px": [
            869,
            907
          ]
        },
        "gapAfter": true
      },
      {
        "label": "east of Mission Rd (discontinuous)",
        "name": "3rd Street",
        "entityId": "third-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 3rd Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          }
        ],
        "minLng": -118.2326,
        "from": "Mission Road",
        "to": null
      }
    ]
  },
  "4th Place": {
    "name": "4th Place",
    "orientation": "EW",
    "segments": [
      {
        "label": "3rd to Hewitt",
        "name": "4th Place",
        "entityId": "4th-place",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1887 (Mills and Wicks Extension map, sheet 1)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR013/MR013-087.pdf"
        },
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "maxLng": -118.2367,
        "from": null,
        "to": "Hewitt Street"
      },
      {
        "label": "beyond Hewitt (3rd St)",
        "name": "4th Place",
        "entityId": "4th-place",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "by 1887",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR013/MR013-087.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1887",
            "until": "?",
            "name": "3rd Street",
            "entityId": "third-street",
            "formInForce": "3rd Street",
            "origin": "labeled “THIRD” on the 1887 Mills and Wicks Extension map, sheet 1 {{(source)}} — Its ordinal position in the downtown grid — the numbering system was in place by 1849",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR013/MR013-087.pdf"
          },
          {
            "from": "?",
            "until": null,
            "name": "4th Place",
            "entityId": "4th-place",
            "formInForce": "4th Place",
            "how": "renaming",
            "origin": "arrival on this stretch not directly documented",
            "originLink": null
          }
        ],
        "note": null,
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "knownFraction": 0,
        "categories": [
          "unresearched",
          "renamed"
        ],
        "formerCategories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Recorded map: Mills and Wicks' Extension of Second St. and adjoining subdivision, City of Los Angeles, M.R. 13-87 — lots 1–144 and 160–236 subdivided at the request of M. L. Wicks and Howard W. Mills, April–May 1886, under the direction of Geo. C. Knox; further lots added Jan. 1887 (sheet 1 of 2) (identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR013/MR013-087.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          },
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          }
        ],
        "minLng": -118.2367,
        "maxLng": -118.2346,
        "from": "Hewitt Street",
        "to": {
          "px": [
            661,
            915
          ]
        }
      },
      {
        "label": "part of",
        "name": "4th Place",
        "entityId": null,
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLng": -118.2346,
        "maxLng": -118.234,
        "from": {
          "px": [
            661,
            915
          ]
        },
        "to": {
          "px": [
            623,
            1014
          ]
        }
      },
      {
        "label": "part of",
        "name": "4th Place",
        "entityId": "4th-place",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLng": -118.234,
        "from": {
          "px": [
            623,
            1014
          ]
        },
        "to": null
      }
    ]
  },
  "4th Street": {
    "name": "4th Street",
    "orientation": "EW",
    "segments": [
      {
        "label": "west of Columbia",
        "name": "4th Street",
        "entityId": "fourth-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 4th Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          }
        ],
        "maxLng": -118.2658,
        "from": null,
        "to": "Columbia Avenue",
        "gapAfter": true
      },
      {
        "label": "beyond Lucas (discontinuous)",
        "name": "4th Street",
        "entityId": "fourth-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 4th Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          }
        ],
        "minLng": -118.2658,
        "maxLng": -118.2563,
        "from": "Lucas Avenue",
        "to": {
          "px": [
            835,
            818
          ]
        }
      },
      {
        "label": "beyond Flower",
        "name": "4th Street",
        "entityId": "fourth-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 4th Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
        },
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          }
        ],
        "minLng": -118.2563,
        "maxLng": -118.2543,
        "from": {
          "px": [
            835,
            818
          ]
        },
        "to": "Flower Street"
      },
      {
        "label": "Flower to Olive",
        "name": "4th Street",
        "entityId": "fourth-street",
        "namedAfter": "Its ordinal position in the downtown grid, extended onto this stretch",
        "namedAfterLink": null,
        "planned": {
          "text": "by 1869",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1869",
            "until": null,
            "name": "4th Street",
            "entityId": "fourth-street",
            "formInForce": "4th Street",
            "how": "extension",
            "origin": "labeled “Fourth Street” on the 1869 Mott Tract building lots {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf"
          }
        ],
        "note": null,
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
        },
        "knownFraction": 0.89,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Map of a part of Building Lots of the Mott Tract in the City & County of Los Angeles, California (M.R. 1-489, Mar. 2, 1869; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          }
        ],
        "minLng": -118.2543,
        "maxLng": -118.2515,
        "from": "Flower Street",
        "to": "Olive Street"
      },
      {
        "label": "beyond Olive (original 4th St)",
        "name": "4th Street",
        "entityId": "fourth-street",
        "namedAfter": "Its ordinal position in the downtown grid — the numbering system was in place by 1849",
        "namedAfterLink": null,
        "planned": {
          "text": "1849",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "1849",
            "until": null,
            "name": "4th Street",
            "entityId": "fourth-street",
            "formInForce": "4th Street",
            "how": "origin",
            "origin": "labeled “CALLE 4a”, “4TH ST”, “4TH ST.” and “Fourth Street” on the 1849 Hutton / Ord Survey and the 1869 Mott Tract building lots {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          }
        ],
        "note": null,
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "knownFraction": 1,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-71, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
          },
          {
            "title": "Map of a part of Building Lots of the Mott Tract in the City & County of Los Angeles, California (M.R. 1-489, Mar. 2, 1869; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf"
          }
        ],
        "minLng": -118.2515,
        "maxLng": -118.2468,
        "from": "Olive Street",
        "to": {
          "px": [
            850,
            1475
          ]
        }
      },
      {
        "label": "part of",
        "name": "4th Street",
        "entityId": "fourth-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 4th Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          }
        ],
        "minLng": -118.2468,
        "maxLng": -118.2445,
        "from": {
          "px": [
            850,
            1475
          ]
        },
        "to": {
          "px": [
            385,
            1126
          ]
        }
      },
      {
        "label": "part of",
        "name": "4th Street",
        "entityId": "fourth-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 4th Street is not yet researched",
        "namedAfterLink": null,
        "planned": {
          "text": "by 1882",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-005.pdf"
        },
        "built": "not yet researched",
        "note": null,
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "knownFraction": 0.82,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Map of the Orchard Tract in the City of Los Angeles (M.R. 5-5, Aug. 2, 1882; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-005.pdf"
          },
          {
            "title": "Map of the Wolfskill Orchard Tract situated in the City of Los Angeles Cal. (sheet 4, M.R. 30-12, Jan. 11, 1888; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          }
        ],
        "minLng": -118.2445,
        "maxLng": -118.2429,
        "from": {
          "px": [
            385,
            1126
          ]
        },
        "to": {
          "px": [
            392,
            1668
          ]
        }
      },
      {
        "label": "part of",
        "name": "4th Street",
        "entityId": "fourth-street",
        "namedAfter": "Its ordinal position in the downtown grid, extended onto this stretch",
        "namedAfterLink": null,
        "planned": {
          "text": "by 1888",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1888",
            "until": null,
            "name": "4th Street",
            "entityId": "fourth-street",
            "formInForce": "4th Street",
            "how": "extension",
            "origin": "labeled “Fourth St” on the 1888 Wolfskill Orchard Tract (sheets 4, 5) {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
          }
        ],
        "note": null,
        "attested": true,
        "absentAsOf": {
          "text": "1888 (Wolfskill Orchard Tract, sheet 4 (M.R. 30-12))",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
        },
        "knownFraction": 1,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Map of the Wolfskill Orchard Tract situated in the City of Los Angeles Cal. (sheet 4, M.R. 30-12, Jan. 11, 1888; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          }
        ],
        "minLng": -118.2429,
        "maxLng": -118.2391,
        "from": {
          "px": [
            392,
            1668
          ]
        },
        "to": {
          "px": [
            230,
            1088
          ]
        }
      },
      {
        "label": "beyond Alameda",
        "name": "4th Street",
        "entityId": "fourth-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 4th Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1888 (Wolfskill Orchard Tract, sheet 4 (M.R. 30-12))",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
        },
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          }
        ],
        "minLng": -118.2391,
        "maxLng": -118.2381,
        "from": {
          "px": [
            230,
            1088
          ]
        },
        "to": "Alameda Street"
      },
      {
        "label": "beyond Alameda (Huber St)",
        "name": "4th Street",
        "entityId": "fourth-street",
        "namedAfter": "Its ordinal position in the downtown grid, once this stretch was folded into 4th Street",
        "namedAfterLink": null,
        "planned": {
          "text": "by 1887",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR013/MR013-087.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1887",
            "until": "?",
            "name": "Huber Street",
            "entityId": "huber-st",
            "formInForce": "Huber Street",
            "how": "origin",
            "origin": "labeled “HUBER ST.” and “Huber St” on the 1887 Mills and Wicks Extension map, sheet 1 and the 1888 Wolfskill Orchard Tract, sheet 4 (M.R. 30-12) {{(source)}} — Not documented; most likely Caroline Howard (née Huber), wife of the tract developer Dr. Frederick Preston Howard — the same inference that explains Carolina Street, one block east, now Hewitt Street",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR013/MR013-087.pdf"
          },
          {
            "from": "?",
            "until": null,
            "name": "4th Street",
            "entityId": "fourth-street",
            "formInForce": "4th Street",
            "how": "renaming",
            "origin": "arrival on this stretch not directly documented",
            "originLink": null
          }
        ],
        "note": null,
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "knownFraction": 0.01,
        "categories": [
          "number",
          "renamed"
        ],
        "formerCategories": [
          "person",
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Recorded map: Mills and Wicks' Extension of Second St. and adjoining subdivision, City of Los Angeles, M.R. 13-87 — lots 1–144 and 160–236 subdivided at the request of M. L. Wicks and Howard W. Mills, April–May 1886, under the direction of Geo. C. Knox; further lots added Jan. 1887 (sheet 1 of 2) (identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR013/MR013-087.pdf"
          },
          {
            "title": "Map of the Wolfskill Orchard Tract situated in the City of Los Angeles Cal. (sheet 4, M.R. 30-12, Jan. 11, 1888; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          },
          {
            "title": "Recorded map: F.P. Howard & Co.’s Subdivision of the Bliss Tract, M.R. 12-42 (Aug. 1886) — shows “Huber Street” at 828 E 4th St’s location",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR012/MR012-042.pdf"
          }
        ],
        "minLng": -118.2381,
        "maxLng": -118.2349,
        "from": "Alameda Street",
        "to": {
          "px": [
            747,
            686
          ]
        }
      },
      {
        "label": "part of (3rd St)",
        "name": "4th Street",
        "entityId": "fourth-street",
        "namedAfter": "Its ordinal position in the downtown grid, once this stretch was folded into 4th Street",
        "namedAfterLink": null,
        "planned": {
          "text": "by 1887",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR013/MR013-087.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1887",
            "until": "?",
            "name": "3rd Street",
            "entityId": "third-street",
            "formInForce": "3rd Street",
            "origin": "labeled “THIRD” on the 1887 Mills and Wicks Extension map, sheet 1 {{(source)}} — Its ordinal position in the downtown grid — the numbering system was in place by 1849",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR013/MR013-087.pdf"
          },
          {
            "from": "?",
            "until": null,
            "name": "4th Street",
            "entityId": "fourth-street",
            "formInForce": "4th Street",
            "how": "renaming",
            "origin": "arrival on this stretch not directly documented",
            "originLink": null
          }
        ],
        "note": null,
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "knownFraction": 0,
        "categories": [
          "number",
          "renamed"
        ],
        "formerCategories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Recorded map: Mills and Wicks' Extension of Second St. and adjoining subdivision, City of Los Angeles, M.R. 13-87 — lots 1–144 and 160–236 subdivided at the request of M. L. Wicks and Howard W. Mills, April–May 1886, under the direction of Geo. C. Knox; further lots added Jan. 1887 (sheet 1 of 2) (identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR013/MR013-087.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          }
        ],
        "minLng": -118.2349,
        "maxLng": -118.2342,
        "from": {
          "px": [
            747,
            686
          ]
        },
        "to": {
          "px": [
            883,
            800
          ]
        }
      },
      {
        "label": "part of",
        "name": "4th Street",
        "entityId": "fourth-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 4th Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          }
        ],
        "minLng": -118.2342,
        "maxLng": -118.2287,
        "from": {
          "px": [
            883,
            800
          ]
        },
        "to": {
          "px": [
            782,
            1260
          ]
        }
      },
      {
        "label": "part of",
        "name": "4th Street",
        "entityId": "fourth-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 4th Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          }
        ],
        "minLng": -118.2287,
        "from": {
          "px": [
            782,
            1260
          ]
        },
        "to": null
      }
    ]
  },
  "5th Street": {
    "name": "5th Street",
    "orientation": "EW",
    "segments": [
      {
        "label": "west of Burlington",
        "name": "5th Street",
        "entityId": "fifth-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 5th Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          }
        ],
        "maxLng": -118.2706,
        "from": null,
        "to": "Burlington Avenue",
        "gapAfter": true
      },
      {
        "label": "beyond Witmer (discontinuous)",
        "name": "5th Street",
        "entityId": "fifth-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 5th Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          }
        ],
        "minLng": -118.2706,
        "maxLng": -118.2576,
        "from": "Witmer Street",
        "to": {
          "px": [
            726,
            816
          ]
        }
      },
      {
        "label": "part of",
        "name": "5th Street",
        "entityId": "fifth-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 5th Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
        },
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          }
        ],
        "minLng": -118.2576,
        "maxLng": -118.2531,
        "from": {
          "px": [
            726,
            816
          ]
        },
        "to": {
          "px": [
            319,
            709
          ]
        }
      },
      {
        "label": "part of (original 5th St)",
        "name": "5th Street",
        "entityId": "fifth-street",
        "namedAfter": "Its ordinal position in the downtown grid — the numbering system was in place by 1849",
        "namedAfterLink": null,
        "planned": {
          "text": "1849",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "1849",
            "until": null,
            "name": "5th Street",
            "entityId": "fifth-street",
            "formInForce": "5th Street",
            "how": "origin",
            "origin": "labeled “CALLE 5a”, “5TH ST” and “5TH ST.” on the 1849 Hutton / Ord Survey {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          }
        ],
        "note": null,
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "knownFraction": 1,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-71, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
          },
          {
            "title": "Map of a part of Building Lots of the Mott Tract in the City & County of Los Angeles, California (M.R. 1-489, Mar. 2, 1869; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf"
          }
        ],
        "minLng": -118.2531,
        "maxLng": -118.2481,
        "from": {
          "px": [
            319,
            709
          ]
        },
        "to": {
          "px": [
            734,
            1477
          ]
        }
      },
      {
        "label": "part of",
        "name": "5th Street",
        "entityId": "fifth-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 5th Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          }
        ],
        "minLng": -118.2481,
        "maxLng": -118.2469,
        "from": {
          "px": [
            734,
            1477
          ]
        },
        "to": {
          "px": [
            393,
            609
          ]
        }
      },
      {
        "label": "part of",
        "name": "5th Street",
        "entityId": "fifth-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 5th Street is not yet researched",
        "namedAfterLink": null,
        "planned": {
          "text": "by 1876",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-166.pdf"
        },
        "built": "not yet researched",
        "note": null,
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "knownFraction": 0.85,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Map showing Building Lots near L.A. & I. RR. Depot on San Pedro Street known as the Moreno Vineyard Tract (M.R. 3-166, Mar. 1, 1876; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-166.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          }
        ],
        "minLng": -118.2469,
        "maxLng": -118.2455,
        "from": {
          "px": [
            393,
            609
          ]
        },
        "to": {
          "px": [
            1397,
            584
          ]
        }
      },
      {
        "label": "part of",
        "name": "5th Street",
        "entityId": "fifth-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 5th Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          }
        ],
        "minLng": -118.2455,
        "maxLng": -118.2451,
        "from": {
          "px": [
            1397,
            584
          ]
        },
        "to": {
          "px": [
            442,
            480
          ]
        }
      },
      {
        "label": "beyond San Pedro",
        "name": "5th Street",
        "entityId": "fifth-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 5th Street is not yet researched",
        "namedAfterLink": null,
        "planned": {
          "text": "by 1883",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-307.pdf"
        },
        "built": "not yet researched",
        "note": null,
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "knownFraction": 0.81,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Map of Hamilton's Subdivision of Part of the Urquidez Garden, Los Angeles City, Cal. (M.R. 5-307, Sept. 12, 1883; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-307.pdf"
          },
          {
            "title": "Map of the Wolfskill Orchard Tract situated in the City of Los Angeles Cal. (sheet 3, M.R. 30-11, Jan. 11, 1888; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          }
        ],
        "minLng": -118.2451,
        "maxLng": -118.2439,
        "from": {
          "px": [
            442,
            480
          ]
        },
        "to": "San Pedro Street"
      },
      {
        "label": "beyond San Pedro",
        "name": "5th Street",
        "entityId": "fifth-street",
        "namedAfter": "Its ordinal position in the downtown grid, extended onto this stretch",
        "namedAfterLink": null,
        "planned": {
          "text": "by 1888",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1888",
            "until": null,
            "name": "5th Street",
            "entityId": "fifth-street",
            "formInForce": "5th Street",
            "how": "extension",
            "origin": "labeled “Fifth St” on the 1888 Wolfskill Orchard Tract (sheets 3, 4) {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
          }
        ],
        "note": null,
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "knownFraction": 0.78,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Map of the Wolfskill Orchard Tract situated in the City of Los Angeles Cal. (sheet 3, M.R. 30-11, Jan. 11, 1888; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          }
        ],
        "minLng": -118.2439,
        "maxLng": -118.2398,
        "from": "San Pedro Street",
        "to": {
          "px": [
            913,
            1302
          ]
        },
        "gapAfter": true
      },
      {
        "label": "beyond Alameda (Poplar St) (discontinuous)",
        "name": "5th Street",
        "entityId": "fifth-street",
        "namedAfter": "Its ordinal position in the downtown grid, once this stretch was folded into 5th Street",
        "namedAfterLink": null,
        "planned": {
          "text": "by 1888",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1888",
            "until": "?",
            "name": "Poplar Street",
            "entityId": "poplar-st",
            "formInForce": "Poplar Street",
            "how": "origin",
            "origin": "labeled “Poplar St” on the 1888 Wolfskill Orchard Tract, sheet 2 (M.R. 30-10) {{(source)}} — named on Dr. Frederick Preston Howard's Bliss Tract in 1886, one block south of the Huber Street that runs through the same subdivision. No namesake is documented; a poplar would be in keeping with the orchard ground it was cut through, but nothing says so",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
          },
          {
            "from": "?",
            "until": null,
            "name": "5th Street",
            "entityId": "fifth-street",
            "formInForce": "5th Street",
            "how": "renaming",
            "origin": "arrival on this stretch not directly documented",
            "originLink": null
          }
        ],
        "note": null,
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "knownFraction": 0,
        "categories": [
          "number",
          "renamed"
        ],
        "formerCategories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Map of the Wolfskill Orchard Tract situated in the City of Los Angeles Cal. (sheet 2, M.R. 30-10, Jan. 11, 1888; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          },
          {
            "title": "Recorded map: F.P. Howard & Co.'s Subdivision of the Bliss Tract, M.R. 12-42 (subdivided Aug. 1886 by Geo. E. Knox) — shows “Poplar Street” at 1100 E 5th St's location",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR012/MR012-042.pdf"
          }
        ],
        "minLng": -118.2398,
        "maxLng": -118.2377,
        "from": "Alameda Street",
        "to": {
          "px": [
            880,
            1668
          ]
        }
      },
      {
        "label": "part of",
        "name": "5th Street",
        "entityId": "fifth-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 5th Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          }
        ],
        "minLng": -118.2377,
        "from": {
          "px": [
            880,
            1668
          ]
        },
        "to": null
      }
    ]
  },
  "6th Street": {
    "name": "6th Street",
    "orientation": "EW",
    "segments": [
      {
        "label": "part of",
        "name": "6th Street",
        "entityId": "sixth-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 6th Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          }
        ],
        "maxLng": -118.2589,
        "from": null,
        "to": {
          "px": [
            611,
            815
          ]
        }
      },
      {
        "label": "beyond Flower",
        "name": "6th Street",
        "entityId": "sixth-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 6th Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
        },
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          }
        ],
        "minLng": -118.2589,
        "maxLng": -118.2574,
        "from": {
          "px": [
            611,
            815
          ]
        },
        "to": "Flower Street"
      },
      {
        "label": "beyond Flower (original 6th St)",
        "name": "6th Street",
        "entityId": "sixth-street",
        "namedAfter": "Its ordinal position in the downtown grid — the numbering system was in place by 1849",
        "namedAfterLink": null,
        "planned": {
          "text": "1849",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "1849",
            "until": null,
            "name": "6th Street",
            "entityId": "sixth-street",
            "formInForce": "6th Street",
            "how": "origin",
            "origin": "labeled “CALLE 6a”, “6TH ST” and “6TH ST.” on the 1849 Hutton / Ord Survey {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          }
        ],
        "note": null,
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "knownFraction": 1,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-71, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
          }
        ],
        "minLng": -118.2574,
        "maxLng": -118.2494,
        "from": "Flower Street",
        "to": {
          "px": [
            612,
            1478
          ]
        }
      },
      {
        "label": "part of",
        "name": "6th Street",
        "entityId": "sixth-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 6th Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          }
        ],
        "minLng": -118.2494,
        "maxLng": -118.2486,
        "from": {
          "px": [
            612,
            1478
          ]
        },
        "to": {
          "px": [
            143,
            1064
          ]
        }
      },
      {
        "label": "part of",
        "name": "6th Street",
        "entityId": "sixth-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 6th Street is not yet researched",
        "namedAfterLink": null,
        "planned": {
          "text": "by 1876",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-166.pdf"
        },
        "built": "not yet researched",
        "note": null,
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "knownFraction": 0.85,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Map showing Building Lots near L.A. & I. RR. Depot on San Pedro Street known as the Moreno Vineyard Tract (M.R. 3-166, Mar. 1, 1876; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-166.pdf"
          },
          {
            "title": "Map of the Nordholdt Tract (M.R. 6-33, Aug. 19, 1884; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-033.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          }
        ],
        "minLng": -118.2486,
        "maxLng": -118.2466,
        "from": {
          "px": [
            143,
            1064
          ]
        },
        "to": {
          "px": [
            1679,
            1037
          ]
        }
      },
      {
        "label": "part of",
        "name": "6th Street",
        "entityId": "sixth-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 6th Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          }
        ],
        "minLng": -118.2466,
        "maxLng": -118.2454,
        "from": {
          "px": [
            1679,
            1037
          ]
        },
        "to": {
          "px": [
            998,
            342
          ]
        }
      },
      {
        "label": "beyond Alameda",
        "name": "6th Street",
        "entityId": "sixth-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 6th Street is not yet researched",
        "namedAfterLink": null,
        "planned": {
          "text": "by 1888",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
        },
        "built": "not yet researched",
        "note": null,
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "knownFraction": 0.78,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Map of the Wolfskill Orchard Tract situated in the City of Los Angeles Cal. (sheet 2, M.R. 30-10, Jan. 11, 1888; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          }
        ],
        "minLng": -118.2454,
        "maxLng": -118.2384,
        "from": {
          "px": [
            998,
            342
          ]
        },
        "to": "Alameda Street"
      },
      {
        "label": "beyond Alameda",
        "name": "6th Street",
        "entityId": "sixth-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 6th Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          }
        ],
        "minLng": -118.2384,
        "maxLng": -118.2328,
        "from": "Alameda Street",
        "to": {
          "px": [
            156,
            877
          ]
        }
      },
      {
        "label": "part of",
        "name": "6th Street",
        "entityId": "sixth-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 6th Street is not yet researched",
        "namedAfterLink": null,
        "planned": {
          "text": "by 1886",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR011/MR011-042.pdf"
        },
        "built": "not yet researched",
        "note": null,
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "knownFraction": 0.8,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan of the Goodwin Tract (M.R. 11-42, Oct. 6, 1886; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR011/MR011-042.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          }
        ],
        "minLng": -118.2328,
        "maxLng": -118.2288,
        "from": {
          "px": [
            156,
            877
          ]
        },
        "to": {
          "px": [
            929,
            921
          ]
        }
      },
      {
        "label": "part of",
        "name": "6th Street",
        "entityId": "sixth-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 6th Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          }
        ],
        "minLng": -118.2288,
        "maxLng": -118.2281,
        "from": {
          "px": [
            929,
            921
          ]
        },
        "to": null,
        "gapAfter": true
      },
      {
        "label": "east of Mission Rd (discontinuous)",
        "name": "6th Street",
        "entityId": "sixth-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 6th Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          }
        ],
        "minLng": -118.2281,
        "from": "Mission Road",
        "to": null
      }
    ]
  },
  "7th Place": {
    "name": "7th Place",
    "orientation": "EW",
    "segments": [
      {
        "label": "part of",
        "name": "7th Place",
        "entityId": "7th-place",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "maxLng": -118.2285,
        "from": null,
        "to": null,
        "gapAfter": true
      },
      {
        "label": "east of Mission Rd (discontinuous)",
        "name": "7th Place",
        "entityId": "7th-place",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLng": -118.2285,
        "from": "Mission Road",
        "to": null
      }
    ]
  },
  "7th Street": {
    "name": "7th Street",
    "orientation": "EW",
    "segments": [
      {
        "label": "part of",
        "name": "7th Street",
        "entityId": "seventh-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 7th Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          }
        ],
        "maxLng": -118.2604,
        "from": null,
        "to": {
          "px": [
            477,
            814
          ]
        }
      },
      {
        "label": "part of",
        "name": "7th Street",
        "entityId": "seventh-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 7th Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
        },
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          }
        ],
        "minLng": -118.2604,
        "maxLng": -118.2593,
        "from": {
          "px": [
            477,
            814
          ]
        },
        "to": {
          "px": [
            487,
            884
          ]
        }
      },
      {
        "label": "part of (original 7th St)",
        "name": "7th Street",
        "entityId": "seventh-street",
        "namedAfter": "Its ordinal position in the downtown grid — the numbering system was in place by 1849",
        "namedAfterLink": null,
        "planned": {
          "text": "1849",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "1849",
            "until": null,
            "name": "7th Street",
            "entityId": "seventh-street",
            "formInForce": "7th Street",
            "how": "origin",
            "origin": "labeled “CALLE 7a”, “7th ST” and “7TH ST.” on the 1849 Hutton / Ord Survey {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          }
        ],
        "note": null,
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "knownFraction": 1,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-71, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
          }
        ],
        "minLng": -118.2593,
        "maxLng": -118.2506,
        "from": {
          "px": [
            487,
            884
          ]
        },
        "to": {
          "px": [
            458,
            528
          ]
        }
      },
      {
        "label": "part of",
        "name": "7th Street",
        "entityId": "seventh-street",
        "namedAfter": "Its ordinal position in the downtown grid, extended onto this stretch",
        "namedAfterLink": null,
        "planned": {
          "text": "by 1886",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR011/MR011-063.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1886",
            "until": null,
            "name": "7th Street",
            "entityId": "seventh-street",
            "formInForce": "7th Street",
            "how": "extension",
            "origin": "labeled “Seventh Street” on the 1886 Maple Avenue Tract {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR011/MR011-063.pdf"
          }
        ],
        "note": null,
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "knownFraction": 0.8,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Map of Maple Avenue Tract in City of Los Angeles (M.R. 11-63, Oct. 21, 1886; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR011/MR011-063.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          }
        ],
        "minLng": -118.2506,
        "maxLng": -118.2487,
        "from": {
          "px": [
            458,
            528
          ]
        },
        "to": {
          "px": [
            471,
            1207
          ]
        }
      },
      {
        "label": "part of",
        "name": "7th Street",
        "entityId": "seventh-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 7th Street is not yet researched",
        "namedAfterLink": null,
        "planned": {
          "text": "by 1884",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-033.pdf"
        },
        "built": "not yet researched",
        "note": null,
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "knownFraction": 0.81,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Map of the Nordholdt Tract (M.R. 6-33, Aug. 19, 1884; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-033.pdf"
          },
          {
            "title": "Map of Maple Avenue Tract in City of Los Angeles (M.R. 11-63, Oct. 21, 1886; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR011/MR011-063.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          }
        ],
        "minLng": -118.2487,
        "maxLng": -118.2477,
        "from": {
          "px": [
            471,
            1207
          ]
        },
        "to": {
          "px": [
            866,
            1209
          ]
        }
      },
      {
        "label": "part of",
        "name": "7th Street",
        "entityId": "seventh-street",
        "namedAfter": "Its ordinal position in the downtown grid, extended onto this stretch",
        "namedAfterLink": null,
        "planned": {
          "text": "by 1884",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-039.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1884",
            "until": null,
            "name": "7th Street",
            "entityId": "seventh-street",
            "formInForce": "7th Street",
            "how": "extension",
            "origin": "labeled “Seventh St.” and “Seventh Street” on the 1884 Rowan Tract and the 1886 Beck Tract {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-039.pdf"
          }
        ],
        "note": null,
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "knownFraction": 0.81,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Map of the Rowan Tract, Los Angeles City, Cal. (M.R. 6-39, Sept. 15, 1884; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-039.pdf"
          },
          {
            "title": "Beck Tract (M.R. 14-34, Dec. 23, 1886; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR014/MR014-034.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          }
        ],
        "minLng": -118.2477,
        "maxLng": -118.2466,
        "from": {
          "px": [
            866,
            1209
          ]
        },
        "to": {
          "px": [
            1085,
            388
          ]
        }
      },
      {
        "label": "beyond Alameda",
        "name": "7th Street",
        "entityId": "seventh-street",
        "namedAfter": "Its ordinal position in the downtown grid, extended onto this stretch",
        "namedAfterLink": null,
        "planned": {
          "text": "by 1888",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1888",
            "until": null,
            "name": "7th Street",
            "entityId": "seventh-street",
            "formInForce": "7th Street",
            "how": "extension",
            "origin": "labeled “Seventh St” on the 1888 Wolfskill Orchard Tract (sheets 1, 2) {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
          }
        ],
        "note": null,
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "knownFraction": 0.78,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Map of the Wolfskill Orchard Tract situated in the City of Los Angeles Cal. (sheet 2, M.R. 30-10, Jan. 11, 1888; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          }
        ],
        "minLng": -118.2466,
        "maxLng": -118.2386,
        "from": {
          "px": [
            1085,
            388
          ]
        },
        "to": "Alameda Street"
      },
      {
        "label": "beyond Alameda",
        "name": "7th Street",
        "entityId": "seventh-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 7th Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          }
        ],
        "minLng": -118.2386,
        "maxLng": -118.2357,
        "from": "Alameda Street",
        "to": {
          "px": [
            193,
            1245
          ]
        }
      },
      {
        "label": "part of",
        "name": "7th Street",
        "entityId": "seventh-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 7th Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          }
        ],
        "minLng": -118.2357,
        "from": {
          "px": [
            193,
            1245
          ]
        },
        "to": null
      }
    ]
  },
  "8th Place": {
    "name": "8th Place",
    "orientation": "EW",
    "segments": [
      {
        "label": "west of Georgia",
        "name": "8th Place",
        "entityId": "8th-place",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "maxLng": -118.2658,
        "from": null,
        "to": "Georgia Street",
        "gapAfter": true
      },
      {
        "label": "east of Francisco (discontinuous)",
        "name": "8th Place",
        "entityId": "8th-place",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLng": -118.2658,
        "from": "Francisco Street",
        "to": null
      }
    ]
  },
  "8th Street": {
    "name": "8th Street",
    "orientation": "EW",
    "segments": [
      {
        "label": "west of Figueroa",
        "name": "8th Street",
        "entityId": "eighth-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 8th Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          }
        ],
        "maxLng": -118.2612,
        "from": null,
        "to": "Figueroa Street"
      },
      {
        "label": "beyond Figueroa (original 8th St)",
        "name": "8th Street",
        "entityId": "eighth-street",
        "namedAfter": "Its ordinal position in the downtown grid — the numbering system was in place by 1849",
        "namedAfterLink": null,
        "planned": {
          "text": "1849",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "1849",
            "until": null,
            "name": "8th Street",
            "entityId": "eighth-street",
            "formInForce": "8th Street",
            "how": "origin",
            "origin": "labeled “CALLE 8a”, “8TH ST” and “8th Street” on the 1849 Hutton / Ord Survey and the 1888 Widow Botiller Tract resubdivision {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          }
        ],
        "note": null,
        "attested": true,
        "knownFraction": 1,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          },
          {
            "title": "Map of the Resubdivision of the Widow Botiller Tract (M.R. 29-26, Mar. 15, 1888; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR029/MR029-026.pdf"
          }
        ],
        "minLng": -118.2612,
        "maxLng": -118.2523,
        "from": "Figueroa Street",
        "to": {
          "px": [
            358,
            1482
          ]
        }
      },
      {
        "label": "part of",
        "name": "8th Street",
        "entityId": "eighth-street",
        "namedAfter": "Its ordinal position in the downtown grid, extended onto this stretch",
        "namedAfterLink": null,
        "planned": {
          "text": "by 1888",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR029/MR029-026.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1888",
            "until": null,
            "name": "8th Street",
            "entityId": "eighth-street",
            "formInForce": "8th Street",
            "how": "extension",
            "origin": "labeled “8th Street” on the 1888 Widow Botiller Tract resubdivision {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR029/MR029-026.pdf"
          }
        ],
        "note": null,
        "attested": true,
        "knownFraction": 0.78,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Map of the Resubdivision of the Widow Botiller Tract (M.R. 29-26, Mar. 15, 1888; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR029/MR029-026.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          }
        ],
        "minLng": -118.2523,
        "maxLng": -118.25,
        "from": {
          "px": [
            358,
            1482
          ]
        },
        "to": {
          "px": [
            993,
            439
          ]
        }
      },
      {
        "label": "beyond San Pedro",
        "name": "8th Street",
        "entityId": "eighth-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 8th Street is not yet researched",
        "namedAfterLink": null,
        "planned": {
          "text": "by 1886",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR011/MR011-008.pdf"
        },
        "built": "not yet researched",
        "note": null,
        "attested": true,
        "knownFraction": 0.8,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Map of the Goldsworthy 8th St. Tract in the City of Los Angeles, Cal. (M.R. 11-8, Sept. 4, 1886; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR011/MR011-008.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          }
        ],
        "minLng": -118.25,
        "maxLng": -118.2491,
        "from": {
          "px": [
            993,
            439
          ]
        },
        "to": "San Pedro Street"
      },
      {
        "label": "beyond San Pedro",
        "name": "8th Street",
        "entityId": "eighth-street",
        "namedAfter": "Its ordinal position in the downtown grid, extended onto this stretch",
        "namedAfterLink": null,
        "planned": {
          "text": "by 1893",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-065.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1893",
            "until": null,
            "name": "8th Street",
            "entityId": "eighth-street",
            "formInForce": "8th Street",
            "how": "extension",
            "origin": "labeled “8th St.” on the 1893 Clark and Bryan Tract {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-065.pdf"
          }
        ],
        "note": null,
        "attested": true,
        "knownFraction": 0.76,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Map of the Clark and Bryan Tract, Los Angeles City, Calif. (M.R. 53-65, Nov. 1893; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-065.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          }
        ],
        "minLng": -118.2491,
        "maxLng": -118.2479,
        "from": "San Pedro Street",
        "to": {
          "px": [
            914,
            254
          ]
        }
      },
      {
        "label": "part of",
        "name": "8th Street",
        "entityId": "eighth-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 8th Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          }
        ],
        "minLng": -118.2479,
        "from": {
          "px": [
            914,
            254
          ]
        },
        "to": null
      }
    ]
  },
  "9th Place": {
    "name": "9th Place",
    "entityId": "9th-place",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": {
      "text": "by 1893",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-065.pdf"
    },
    "built": "not yet researched",
    "nameHistory": [
      {
        "from": "by 1893",
        "until": "?",
        "name": "10th Street",
        "entityId": "tenth-street",
        "formInForce": "10th Street",
        "origin": "labeled “10th St.” on the 1893 Clark and Bryan Tract {{(source)}} — Its ordinal position in the downtown grid — the numbering system was in place by 1849",
        "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-065.pdf"
      },
      {
        "from": "?",
        "until": null,
        "name": "9th Place",
        "entityId": "9th-place",
        "formInForce": "9th Place",
        "how": "renaming",
        "origin": "arrival on this stretch not directly documented",
        "originLink": null
      }
    ],
    "note": null,
    "attested": true,
    "knownFraction": 0,
    "categories": [
      "unresearched",
      "renamed"
    ],
    "formerCategories": [
      "number"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "Map of the Clark and Bryan Tract, Los Angeles City, Calif. (M.R. 53-65, Nov. 1893; identified by map alignment, not a lot-level record)",
        "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-065.pdf"
      },
      {
        "title": "Blocks 73 & 72 of Ord's Survey belonging to W. M. Williams (M.R. 3-32, Apr. 29, 1875)",
        "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-032.pdf"
      },
      {
        "title": "L.A. Street Names: 1st Street (on the numbering system)",
        "url": "https://lastreetnames.com/street/0001st-street/"
      },
      {
        "title": "Ord/Hutton survey, “Plan de la Ciudad de Los Angeles” (Aug. 29, 1849)",
        "url": "https://tessa2.lapl.org/digital/collection/maps/id/42/"
      }
    ]
  },
  "9th Street": {
    "name": "9th Street",
    "orientation": "EW",
    "segments": [
      {
        "label": "part of (original 9th St)",
        "name": "9th Street",
        "entityId": "ninth-street",
        "namedAfter": "Its ordinal position in the downtown grid — the numbering system was in place by 1849",
        "namedAfterLink": null,
        "planned": {
          "text": "1849",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "1849",
            "until": null,
            "name": "9th Street",
            "entityId": "ninth-street",
            "formInForce": "9th Street",
            "how": "origin",
            "origin": "labeled “CALLE 9a” and “NINTH STREET” on the 1849 Hutton / Ord Survey and the 1893 Hammel and Denker Tract {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          }
        ],
        "note": null,
        "attested": true,
        "knownFraction": 1,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          },
          {
            "title": "Map of Hammel and Denker Tract, Los Angeles City, California (M.R. 53-63, Oct. 1893; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-063.pdf"
          }
        ],
        "maxLng": -118.2537,
        "from": null,
        "to": {
          "px": [
            855,
            1517
          ]
        }
      },
      {
        "label": "part of",
        "name": "9th Street",
        "entityId": "ninth-street",
        "namedAfter": "Its ordinal position in the downtown grid, extended onto this stretch",
        "namedAfterLink": null,
        "planned": {
          "text": "by 1893",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-063.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1893",
            "until": null,
            "name": "9th Street",
            "entityId": "ninth-street",
            "formInForce": "9th Street",
            "how": "extension",
            "origin": "labeled “NINTH STREET” on the 1893 Hammel and Denker Tract {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-063.pdf"
          }
        ],
        "note": null,
        "attested": true,
        "knownFraction": 0.76,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Map of Hammel and Denker Tract, Los Angeles City, California (M.R. 53-63, Oct. 1893; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-063.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          }
        ],
        "minLng": -118.2537,
        "maxLng": -118.2531,
        "from": {
          "px": [
            855,
            1517
          ]
        },
        "to": {
          "px": [
            119,
            599
          ]
        }
      },
      {
        "label": "part of",
        "name": "9th Street",
        "entityId": "ninth-street",
        "namedAfter": "Its ordinal position in the downtown grid, extended onto this stretch",
        "namedAfterLink": null,
        "planned": {
          "text": "by 1887",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR016/MR016-027.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1887",
            "until": null,
            "name": "9th Street",
            "entityId": "ninth-street",
            "formInForce": "9th Street",
            "how": "extension",
            "origin": "labeled “Ninth Street Extension” on the 1887 Moran Tract {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR016/MR016-027.pdf"
          }
        ],
        "note": null,
        "attested": true,
        "knownFraction": 0.79,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Map of the Moran Tract (M.R. 16-27, Apr. 22, 1887; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR016/MR016-027.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          }
        ],
        "minLng": -118.2531,
        "maxLng": -118.2516,
        "from": {
          "px": [
            119,
            599
          ]
        },
        "to": {
          "px": [
            303,
            380
          ]
        }
      },
      {
        "label": "beyond San Pedro",
        "name": "9th Street",
        "entityId": "ninth-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 9th Street is not yet researched",
        "namedAfterLink": null,
        "planned": {
          "text": "by 1886",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR011/MR011-008.pdf"
        },
        "built": "not yet researched",
        "note": null,
        "attested": true,
        "knownFraction": 0.8,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Map of the Goldsworthy 8th St. Tract in the City of Los Angeles, Cal. (M.R. 11-8, Sept. 4, 1886; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR011/MR011-008.pdf"
          },
          {
            "title": "Map of the Moran Tract (M.R. 16-27, Apr. 22, 1887; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR016/MR016-027.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          }
        ],
        "minLng": -118.2516,
        "maxLng": -118.2504,
        "from": {
          "px": [
            303,
            380
          ]
        },
        "to": "San Pedro Street"
      },
      {
        "label": "beyond San Pedro",
        "name": "9th Street",
        "entityId": "ninth-street",
        "namedAfter": "Its ordinal position in the downtown grid, extended onto this stretch",
        "namedAfterLink": null,
        "planned": {
          "text": "by 1893",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-065.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1893",
            "until": null,
            "name": "9th Street",
            "entityId": "ninth-street",
            "formInForce": "9th Street",
            "how": "extension",
            "origin": "labeled “9th St.” on the 1893 Clark and Bryan Tract {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-065.pdf"
          }
        ],
        "note": null,
        "attested": true,
        "knownFraction": 0.76,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Map of the Clark and Bryan Tract, Los Angeles City, Calif. (M.R. 53-65, Nov. 1893; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-065.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          }
        ],
        "minLng": -118.2504,
        "maxLng": -118.2489,
        "from": "San Pedro Street",
        "to": {
          "px": [
            917,
            750
          ]
        }
      },
      {
        "label": "part of",
        "name": "9th Street",
        "entityId": "ninth-street",
        "namedAfter": "Its ordinal position in the downtown grid — how and when this stretch joined 9th Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          }
        ],
        "minLng": -118.2489,
        "from": {
          "px": [
            917,
            750
          ]
        },
        "to": null
      }
    ]
  },
  "Adobe Street": {
    "name": "Adobe Street",
    "entityId": "adobe",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": {
      "text": "1849",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
    },
    "built": "not yet researched",
    "nameHistory": [
      {
        "from": "1849",
        "until": null,
        "name": "Adobe Street",
        "entityId": "adobe",
        "formInForce": "Adobe Street",
        "how": "origin",
        "origin": "labeled “CALLE DE LAS ADOBES” on the 1849 Hutton / Ord Survey {{(source)}}",
        "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
      }
    ],
    "note": "Lettered “Calle de las Adobes” on the 1849 survey and still Adobe Street today. The obvious reading is the adobe houses along it, but no source says so.",
    "attested": true,
    "knownFraction": 1,
    "categories": [
      "unknown"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "Plan de la Ciudad de Los Angeles (M.R. 53-73, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
        "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
      }
    ]
  },
  "Agatha Street": {
    "name": "Agatha Street",
    "entityId": "agatha-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Alameda Street": {
    "name": "Alameda Street",
    "orientation": "NS",
    "segments": [
      {
        "label": "part of",
        "name": "Alameda Street",
        "entityId": "alameda-st",
        "namedAfter": "Spanish for a tree-lined avenue, from {{álamo}} (“cottonwood tree”) — how and when this stretch joined Alameda Street is not yet researched",
        "namedAfterLink": "https://en.wiktionary.org/wiki/alameda",
        "planned": null,
        "built": {
          "text": "drawn, unlabelled, by Aug. 29, 1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
        },
        "note": "Officially named Feb. 2, 1855, though the road — or an earlier one nearby — may already have been informally called an alameda.",
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
        },
        "knownFraction": 0,
        "categories": [
          "nature",
          "descriptive"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Alameda Street (“officially named on February 2nd, 1855”)",
            "url": "https://lastreetnames.com/street/alameda-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-73, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
          },
          {
            "title": "Map of the Thomas Tract, being a portion of the Johnson and Mott Tract (M.R. 3-60, May 19, 1875)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-060.pdf"
          }
        ],
        "minLat": 34.0533,
        "from": null,
        "to": {
          "px": [
            46,
            1034
          ]
        }
      },
      {
        "label": "part of",
        "name": "Alameda Street",
        "entityId": "alameda-st",
        "namedAfter": "Spanish for a tree-lined avenue, from {{álamo}} (“cottonwood tree”) — how and when this stretch joined Alameda Street is not yet researched",
        "namedAfterLink": "https://en.wiktionary.org/wiki/alameda",
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "Officially named Feb. 2, 1855, though the road — or an earlier one nearby — may already have been informally called an alameda.",
        "attested": false,
        "categories": [
          "nature",
          "descriptive"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Alameda Street (“officially named on February 2nd, 1855”)",
            "url": "https://lastreetnames.com/street/alameda-street/"
          },
          {
            "title": "Map of the Thomas Tract, being a portion of the Johnson and Mott Tract (M.R. 3-60, May 19, 1875)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-060.pdf"
          }
        ],
        "minLat": 34.0499,
        "maxLat": 34.0533,
        "from": {
          "px": [
            46,
            1034
          ]
        },
        "to": {
          "px": [
            878,
            511
          ]
        }
      },
      {
        "label": "part of",
        "name": "Alameda Street",
        "entityId": "alameda-st",
        "namedAfter": "Spanish for a tree-lined avenue, from {{álamo}} (“cottonwood tree”) — how and when this stretch joined Alameda Street is not yet researched",
        "namedAfterLink": "https://en.wiktionary.org/wiki/alameda",
        "planned": null,
        "built": {
          "text": "drawn, unlabelled, by Aug. 29, 1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "note": "Officially named Feb. 2, 1855, though the road — or an earlier one nearby — may already have been informally called an alameda.",
        "attested": true,
        "knownFraction": 0,
        "categories": [
          "nature",
          "descriptive"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Alameda Street (“officially named on February 2nd, 1855”)",
            "url": "https://lastreetnames.com/street/alameda-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-71, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
          },
          {
            "title": "Map of the Thomas Tract, being a portion of the Johnson and Mott Tract (M.R. 3-60, May 19, 1875)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-060.pdf"
          }
        ],
        "minLat": 34.0491,
        "maxLat": 34.0499,
        "from": {
          "px": [
            878,
            511
          ]
        },
        "to": {
          "px": [
            97,
            1472
          ]
        }
      },
      {
        "label": "part of (original Alameda St)",
        "name": "Alameda Street",
        "entityId": "alameda-st",
        "namedAfter": "Spanish for a tree-lined avenue, from {{álamo}} (“cottonwood tree”)",
        "namedAfterLink": "https://en.wiktionary.org/wiki/alameda",
        "planned": {
          "text": "by 1875",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-060.pdf"
        },
        "built": {
          "text": "drawn, unlabelled, by Aug. 29, 1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "nameHistory": [
          {
            "from": "by 1875",
            "until": null,
            "name": "Alameda Street",
            "entityId": "alameda-st",
            "formInForce": "Alameda Street",
            "how": "origin",
            "origin": "labeled “ALAMEDA STREET”, “ALAMEDA ST” and “Alameda St” on the 1875 Thomas Tract (sheets 1, 2), the 1887 Mills and Wicks Extension map, sheet 1 and the 1888 Wolfskill Orchard Tract, sheet 5 (M.R. 30-13) {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-060.pdf"
          }
        ],
        "note": "Officially named Feb. 2, 1855, though the road — or an earlier one nearby — may already have been informally called an alameda.",
        "attested": true,
        "knownFraction": 0.86,
        "categories": [
          "nature",
          "descriptive"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Alameda Street (“officially named on February 2nd, 1855”)",
            "url": "https://lastreetnames.com/street/alameda-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-71, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
          },
          {
            "title": "Map of the Thomas Tract, being a portion of the Johnson and Mott Tract (M.R. 3-60, May 19, 1875; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-060.pdf"
          },
          {
            "title": "Recorded map: Mills and Wicks' Extension of Second St. and adjoining subdivision, City of Los Angeles, M.R. 13-87 — lots 1–144 and 160–236 subdivided at the request of M. L. Wicks and Howard W. Mills, April–May 1886, under the direction of Geo. C. Knox; further lots added Jan. 1887 (sheet 1 of 2) (identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR013/MR013-087.pdf"
          },
          {
            "title": "Map of the Wolfskill Orchard Tract situated in the City of Los Angeles Cal. (sheet 5, M.R. 30-13, Jan. 11, 1888; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
          }
        ],
        "minLat": 34.0452,
        "maxLat": 34.0491,
        "from": {
          "px": [
            97,
            1472
          ]
        },
        "to": {
          "px": [
            1072,
            1443
          ]
        }
      },
      {
        "label": "part of",
        "name": "Alameda Street",
        "entityId": "alameda-st",
        "namedAfter": "Spanish for a tree-lined avenue, from {{álamo}} (“cottonwood tree”), extended onto this stretch",
        "namedAfterLink": "https://en.wiktionary.org/wiki/alameda",
        "planned": {
          "text": "by 1887",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR013/MR013-087.pdf"
        },
        "built": {
          "text": "drawn, unlabelled, by Aug. 29, 1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "nameHistory": [
          {
            "from": "by 1887",
            "until": null,
            "name": "Alameda Street",
            "entityId": "alameda-st",
            "formInForce": "Alameda Street",
            "how": "extension",
            "origin": "labeled “ALAMEDA ST” and “Alameda St” on the 1887 Mills and Wicks Extension map, sheet 1 and the 1888 Wolfskill Orchard Tract (sheets 4, 5) {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR013/MR013-087.pdf"
          }
        ],
        "note": "Officially named Feb. 2, 1855, though the road — or an earlier one nearby — may already have been informally called an alameda.",
        "attested": true,
        "knownFraction": 0.79,
        "categories": [
          "nature",
          "descriptive"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Alameda Street (“officially named on February 2nd, 1855”)",
            "url": "https://lastreetnames.com/street/alameda-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-71, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
          },
          {
            "title": "Recorded map: Mills and Wicks' Extension of Second St. and adjoining subdivision, City of Los Angeles, M.R. 13-87 — lots 1–144 and 160–236 subdivided at the request of M. L. Wicks and Howard W. Mills, April–May 1886, under the direction of Geo. C. Knox; further lots added Jan. 1887 (sheet 1 of 2) (identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR013/MR013-087.pdf"
          },
          {
            "title": "Map of the Wolfskill Orchard Tract situated in the City of Los Angeles Cal. (sheet 4, M.R. 30-12, Jan. 11, 1888; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
          },
          {
            "title": "Map of the Thomas Tract, being a portion of the Johnson and Mott Tract (M.R. 3-60, May 19, 1875)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-060.pdf"
          }
        ],
        "minLat": 34.0432,
        "maxLat": 34.0452,
        "from": {
          "px": [
            1072,
            1443
          ]
        },
        "to": {
          "px": [
            133,
            709
          ]
        }
      },
      {
        "label": "part of",
        "name": "Alameda Street",
        "entityId": "alameda-st",
        "namedAfter": "Spanish for a tree-lined avenue, from {{álamo}} (“cottonwood tree”), extended onto this stretch",
        "namedAfterLink": "https://en.wiktionary.org/wiki/alameda",
        "planned": {
          "text": "by 1888",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
        },
        "built": {
          "text": "drawn, unlabelled, by Aug. 29, 1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "nameHistory": [
          {
            "from": "by 1888",
            "until": null,
            "name": "Alameda Street",
            "entityId": "alameda-st",
            "formInForce": "Alameda Street",
            "how": "extension",
            "origin": "labeled “Alameda St” on the 1888 Wolfskill Orchard Tract (sheets 1, 2, 4) {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
          }
        ],
        "note": "Officially named Feb. 2, 1855, though the road — or an earlier one nearby — may already have been informally called an alameda.",
        "attested": true,
        "knownFraction": 0.78,
        "categories": [
          "nature",
          "descriptive"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Alameda Street (“officially named on February 2nd, 1855”)",
            "url": "https://lastreetnames.com/street/alameda-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-71, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
          },
          {
            "title": "Map of the Wolfskill Orchard Tract situated in the City of Los Angeles Cal. (sheet 1, M.R. 30-9, Jan. 11, 1888; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
          },
          {
            "title": "Map of the Thomas Tract, being a portion of the Johnson and Mott Tract (M.R. 3-60, May 19, 1875)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-060.pdf"
          }
        ],
        "minLat": 34.0348,
        "maxLat": 34.0432,
        "from": {
          "px": [
            133,
            709
          ]
        },
        "to": {
          "px": [
            94,
            1402
          ]
        }
      },
      {
        "label": "part of",
        "name": "Alameda Street",
        "entityId": "alameda-st",
        "namedAfter": "Spanish for a tree-lined avenue, from {{álamo}} (“cottonwood tree”) — how and when this stretch joined Alameda Street is not yet researched",
        "namedAfterLink": "https://en.wiktionary.org/wiki/alameda",
        "planned": null,
        "built": {
          "text": "drawn, unlabelled, by Aug. 29, 1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "note": "Officially named Feb. 2, 1855, though the road — or an earlier one nearby — may already have been informally called an alameda.",
        "attested": true,
        "knownFraction": 0,
        "categories": [
          "nature",
          "descriptive"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Alameda Street (“officially named on February 2nd, 1855”)",
            "url": "https://lastreetnames.com/street/alameda-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-71, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
          },
          {
            "title": "Map of the Thomas Tract, being a portion of the Johnson and Mott Tract (M.R. 3-60, May 19, 1875)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-060.pdf"
          }
        ],
        "minLat": 34.0332,
        "maxLat": 34.0348,
        "from": {
          "px": [
            94,
            1402
          ]
        },
        "to": {
          "px": [
            8,
            1181
          ]
        }
      },
      {
        "label": "part of",
        "name": "Alameda Street",
        "entityId": "alameda-st",
        "namedAfter": "Spanish for a tree-lined avenue, from {{álamo}} (“cottonwood tree”) — how and when this stretch joined Alameda Street is not yet researched",
        "namedAfterLink": "https://en.wiktionary.org/wiki/alameda",
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "Officially named Feb. 2, 1855, though the road — or an earlier one nearby — may already have been informally called an alameda.",
        "attested": false,
        "categories": [
          "nature",
          "descriptive"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Alameda Street (“officially named on February 2nd, 1855”)",
            "url": "https://lastreetnames.com/street/alameda-street/"
          },
          {
            "title": "Map of the Thomas Tract, being a portion of the Johnson and Mott Tract (M.R. 3-60, May 19, 1875)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-060.pdf"
          }
        ],
        "maxLat": 34.0332,
        "from": {
          "px": [
            8,
            1181
          ]
        },
        "to": null
      }
    ]
  },
  "Albany Street": {
    "name": "Albany Street",
    "entityId": "albany-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Alhambra Avenue": {
    "name": "Alhambra Avenue",
    "entityId": "alhambra-avenue",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "absentAsOf": {
      "text": "1849 (Hutton / Ord Survey)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
    },
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Aliso Street": {
    "name": "Aliso Street",
    "orientation": "EW",
    "segments": [
      {
        "label": "part of",
        "name": "Aliso Street",
        "entityId": "aliso-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
        },
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "maxLng": -118.236,
        "from": null,
        "to": {
          "px": [
            160,
            1083
          ]
        },
        "gapAfter": true
      },
      {
        "label": "east of Myers (discontinuous)",
        "name": "Aliso Street",
        "entityId": "aliso-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLng": -118.236,
        "from": "Myers Street",
        "to": null
      }
    ]
  },
  "Alpine Street": {
    "name": "Alpine Street",
    "orientation": "EW",
    "segments": [
      {
        "label": "west of Beaudry",
        "name": "Alpine Street",
        "entityId": "alpine",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "“An Ordinance changing the name of Virgin Street” — Los Angeles Council, adopted Aug. 22, 1887 (council minutes, ledger pp. 700-701; ordinance number left blank in the ledger)",
            "url": "https://clerkapps.lacity.org/oldcfidocs/"
          }
        ],
        "maxLng": -118.2476,
        "from": null,
        "to": "Beaudry Avenue"
      },
      {
        "label": "Beaudry to Cleveland (Virgin St)",
        "name": "Alpine Street",
        "entityId": "alpine",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": null,
        "built": {
          "text": "already “Virgin street” by Aug. 22, 1887 (the Aug. 1887 Virgin Street ordinance)",
          "url": "https://clerkapps.lacity.org/oldcfidocs/"
        },
        "nameHistory": [
          {
            "from": "by 1887",
            "until": "Aug. 1887",
            "name": "Virgin Street",
            "entityId": "virgin",
            "formInForce": "Virgin Street",
            "how": "extension",
            "origin": "labeled “Virgin street” on the 1887 the Aug. 1887 Virgin Street ordinance {{(source)}} — lettered “Calle de las Vírgenes” on the 1849 survey, which gives no explanation — bachelorettes, nuns and the Virgin Mary have all been suggested and none is documented",
            "originLink": "https://clerkapps.lacity.org/oldcfidocs/"
          },
          {
            "from": "Aug. 1887",
            "until": null,
            "name": "Alpine Street",
            "entityId": "alpine",
            "formInForce": "Alpine Street",
            "how": "renaming",
            "origin": "renamed per the Aug. 1887 Virgin Street ordinance {{(source)}}",
            "originLink": "https://clerkapps.lacity.org/oldcfidocs/"
          }
        ],
        "note": null,
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
        },
        "knownFraction": 0.79,
        "categories": [
          "unresearched",
          "renamed"
        ],
        "formerCategories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "“An Ordinance changing the name of Virgin Street” — Los Angeles Council, adopted Aug. 22, 1887 (council minutes, ledger pp. 700-701; ordinance number left blank in the ledger)",
            "url": "https://clerkapps.lacity.org/oldcfidocs/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-73, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
          },
          {
            "title": "L.A. Street Names: Alpine Street",
            "url": "https://lastreetnames.com/street/alpine-street/"
          }
        ],
        "minLng": -118.2476,
        "maxLng": -118.2416,
        "from": "Beaudry Avenue",
        "to": "Cleveland Street"
      },
      {
        "label": "Cleveland to Yale (Virgin St)",
        "name": "Alpine Street",
        "entityId": "alpine",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "1849",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
        },
        "built": {
          "text": "already “Virgin street” by Aug. 22, 1887 (the Aug. 1887 Virgin Street ordinance)",
          "url": "https://clerkapps.lacity.org/oldcfidocs/"
        },
        "nameHistory": [
          {
            "from": "1849",
            "until": "Aug. 1887",
            "name": "Virgin Street",
            "entityId": "virgin",
            "formInForce": "Virgin Street",
            "how": "origin",
            "origin": "labeled “CALLE DE LAS VIRGENES”, “VIRGIN ST” and “Virgin street” on the 1849 Hutton / Ord Survey and the 1887 the Aug. 1887 Virgin Street ordinance {{(source)}} — lettered “Calle de las Vírgenes” on the 1849 survey, which gives no explanation — bachelorettes, nuns and the Virgin Mary have all been suggested and none is documented",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
          },
          {
            "from": "Aug. 1887",
            "until": null,
            "name": "Alpine Street",
            "entityId": "alpine",
            "formInForce": "Alpine Street",
            "how": "renaming",
            "origin": "renamed per the Aug. 1887 Virgin Street ordinance {{(source)}}",
            "originLink": "https://clerkapps.lacity.org/oldcfidocs/"
          }
        ],
        "note": null,
        "attested": true,
        "knownFraction": 1,
        "categories": [
          "unresearched",
          "renamed"
        ],
        "formerCategories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-73, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
          },
          {
            "title": "“An Ordinance changing the name of Virgin Street” — Los Angeles Council, adopted Aug. 22, 1887 (council minutes, ledger pp. 700-701; ordinance number left blank in the ledger)",
            "url": "https://clerkapps.lacity.org/oldcfidocs/"
          },
          {
            "title": "L.A. Street Names: Alpine Street",
            "url": "https://lastreetnames.com/street/alpine-street/"
          }
        ],
        "minLng": -118.2416,
        "maxLng": -118.2408,
        "from": "Cleveland Street",
        "to": "Yale Street"
      },
      {
        "label": "Yale to Spring (Virgin St)",
        "name": "Alpine Street",
        "entityId": "alpine",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "1849",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "1849",
            "until": "Aug. 1887",
            "name": "Virgin Street",
            "entityId": "virgin",
            "formInForce": "Virgin Street",
            "how": "origin",
            "origin": "labeled “CALLE DE LAS VIRGENES” and “VIRGIN ST” on the 1849 Hutton / Ord Survey {{(source)}} — lettered “Calle de las Vírgenes” on the 1849 survey, which gives no explanation — bachelorettes, nuns and the Virgin Mary have all been suggested and none is documented",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
          },
          {
            "from": "Aug. 1887",
            "until": null,
            "name": "Alpine Street",
            "entityId": "alpine",
            "formInForce": "Alpine Street",
            "how": "renaming",
            "origin": "renamed per the Aug. 1887 Virgin Street ordinance {{(source)}}",
            "originLink": "https://clerkapps.lacity.org/oldcfidocs/"
          }
        ],
        "note": null,
        "attested": true,
        "knownFraction": 1,
        "categories": [
          "unresearched",
          "renamed"
        ],
        "formerCategories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-73, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
          },
          {
            "title": "“An Ordinance changing the name of Virgin Street” — Los Angeles Council, adopted Aug. 22, 1887 (council minutes, ledger pp. 700-701; ordinance number left blank in the ledger)",
            "url": "https://clerkapps.lacity.org/oldcfidocs/"
          },
          {
            "title": "L.A. Street Names: Alpine Street",
            "url": "https://lastreetnames.com/street/alpine-street/"
          }
        ],
        "minLng": -118.2408,
        "maxLng": -118.2369,
        "from": "Yale Street",
        "to": "Spring Street"
      },
      {
        "label": "beyond Spring",
        "name": "Alpine Street",
        "entityId": "alpine",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
        },
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "“An Ordinance changing the name of Virgin Street” — Los Angeles Council, adopted Aug. 22, 1887 (council minutes, ledger pp. 700-701; ordinance number left blank in the ledger)",
            "url": "https://clerkapps.lacity.org/oldcfidocs/"
          }
        ],
        "minLng": -118.2369,
        "from": "Spring Street",
        "to": null
      }
    ]
  },
  "Alvarado Street": {
    "name": "Alvarado Street",
    "entityId": "alvarado-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Anderson Street": {
    "name": "Anderson Street",
    "entityId": "anderson-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Angelina Street": {
    "name": "Angelina Street",
    "orientation": "EW",
    "segments": [
      {
        "label": "west of Edgeware Rd",
        "name": "Angelina Street",
        "entityId": "angelina-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "maxLng": -118.2558,
        "from": null,
        "to": "Edgeware Road",
        "gapAfter": true
      },
      {
        "label": "east of Beaudry (discontinuous)",
        "name": "Angelina Street",
        "entityId": "angelina-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLng": -118.2558,
        "from": "Beaudry Avenue",
        "to": null
      }
    ]
  },
  "Ann Street": {
    "name": "Ann Street",
    "entityId": "ann-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "absentAsOf": {
      "text": "1849 (Hutton / Ord Survey)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
    },
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Arcadia Street": {
    "name": "Arcadia Street",
    "entityId": "arcadia-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "absentAsOf": {
      "text": "1849 (Hutton / Ord Survey)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
    },
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Arroyo Seco Parkway": {
    "name": "Arroyo Seco Parkway",
    "orientation": "EW",
    "segments": [
      {
        "label": "part of",
        "name": "Arroyo Seco Parkway",
        "entityId": "arroyo-seco-parkway",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "maxLng": -118.2426,
        "from": null,
        "to": {
          "px": [
            534,
            341
          ]
        }
      },
      {
        "label": "part of",
        "name": "Arroyo Seco Parkway",
        "entityId": "arroyo-seco-parkway",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
        },
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLng": -118.2426,
        "maxLng": -118.2374,
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
        }
      },
      {
        "label": "part of",
        "name": "Arroyo Seco Parkway",
        "entityId": "arroyo-seco-parkway",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLng": -118.2374,
        "from": {
          "px": [
            847,
            460
          ]
        },
        "to": null
      }
    ]
  },
  "Artemus Street": {
    "name": "Artemus Street",
    "entityId": "artemus-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Astronaut Ellison S Onizuka Street": {
    "name": "Astronaut Ellison S Onizuka Street",
    "entityId": "astronaut-ellison-s-onizuka-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": null,
    "built": {
      "text": "drawn, unlabelled, by Aug. 29, 1849 (Hutton / Ord Survey)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
    },
    "note": null,
    "attested": true,
    "knownFraction": 0,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "Plan de la Ciudad de Los Angeles (M.R. 53-71, Aug. 29, 1849)",
        "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
      }
    ]
  },
  "Avery Street": {
    "name": "Avery Street",
    "entityId": "avery-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": {
      "text": "by 1887",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR013/MR013-087.pdf"
    },
    "built": "not yet researched",
    "note": null,
    "attested": true,
    "absentAsOf": {
      "text": "1849 (Hutton / Ord Survey)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
    },
    "knownFraction": 0,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "Recorded map: Mills and Wicks' Extension of Second St. and adjoining subdivision, City of Los Angeles, M.R. 13-87 — lots 1–144 and 160–236 subdivided at the request of M. L. Wicks and Howard W. Mills, April–May 1886, under the direction of Geo. C. Knox; further lots added Jan. 1887 (sheet 1 of 2) (identified by map alignment, not a lot-level record)",
        "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR013/MR013-087.pdf"
      }
    ]
  },
  "Avila Street": {
    "name": "Avila Street",
    "entityId": "avila-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "absentAsOf": {
      "text": "1849 (Hutton / Ord Survey)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
    },
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Azusa Street": {
    "name": "Azusa Street",
    "entityId": "azusa-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Bamboo Lane": {
    "name": "Bamboo Lane",
    "entityId": "bamboo-lane",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": {
      "text": "1849",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
    },
    "built": "not yet researched",
    "note": null,
    "attested": true,
    "knownFraction": 0,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "Plan de la Ciudad de Los Angeles (M.R. 53-73, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
        "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
      }
    ]
  },
  "Banning Street": {
    "name": "Banning Street",
    "entityId": "banning-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Bartlett Street": {
    "name": "Bartlett Street",
    "orientation": "EW",
    "segments": [
      {
        "label": "west of Figueroa Terrace",
        "name": "Bartlett Street",
        "entityId": "bartlett-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "maxLng": -118.2473,
        "from": null,
        "to": "Figueroa Terrace",
        "gapAfter": true
      },
      {
        "label": "east of Figueroa (discontinuous)",
        "name": "Bartlett Street",
        "entityId": "bartlett-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLng": -118.2473,
        "from": "Figueroa Street",
        "to": null
      }
    ]
  },
  "Bauchet Street": {
    "name": "Bauchet Street",
    "orientation": "EW",
    "segments": [
      {
        "label": "part of",
        "name": "Bauchet Street",
        "entityId": "bauchet-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
        },
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "maxLng": -118.2352,
        "from": null,
        "to": {
          "px": [
            467,
            902
          ]
        },
        "gapAfter": true
      },
      {
        "label": "part of (discontinuous)",
        "name": "Bauchet Street",
        "entityId": "bauchet-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
        },
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLng": -118.2352,
        "from": {
          "px": [
            488,
            1034
          ]
        },
        "to": null
      }
    ]
  },
  "Beaudry Avenue": {
    "name": "Beaudry Avenue",
    "entityId": "beaudry-avenue",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Bellevue Avenue": {
    "name": "Bellevue Avenue",
    "entityId": "bellevue-avenue",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Belmont Avenue": {
    "name": "Belmont Avenue",
    "orientation": "NS",
    "segments": [
      {
        "label": "north of Court",
        "name": "Belmont Avenue",
        "entityId": "belmont-avenue",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLat": 34.0669,
        "from": null,
        "to": "Court Street"
      },
      {
        "label": "Court to Beverly (Aztec Ave)",
        "name": "Belmont Avenue",
        "entityId": "belmont-avenue",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "by 1884",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-138.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1884",
            "until": "?",
            "name": "Aztec Avenue",
            "entityId": "aztec-avenue",
            "formInForce": "Aztec Avenue",
            "how": "origin",
            "origin": "labeled “Aztec Avenue” on the 1884 Glassell's Subdivision map {{(source)}} — The Aztec empire — one of a conquest theme Andrew Glassell ran through his 1884 subdivision, alongside Cortez Street for Hernán Cortés and Montezuma Avenue (now Dawson Street) for Moctezuma II",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-138.pdf"
          },
          {
            "from": "?",
            "until": null,
            "name": "Belmont Avenue",
            "entityId": "belmont-avenue",
            "formInForce": "Belmont Avenue",
            "how": "renaming",
            "origin": "arrival on this stretch not directly documented",
            "originLink": null
          }
        ],
        "note": null,
        "attested": true,
        "knownFraction": 0,
        "categories": [
          "unresearched",
          "renamed"
        ],
        "formerCategories": [
          "place",
          "history"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Recorded map: Glassell's Subdivision of Lot No. 7 etc., Block 39, Hancock Survey No. 1, M.R. 6-138 (recorded Dec. 27, 1884 at request of A. Glassell) (identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-138.pdf"
          },
          {
            "title": "L.A. Street Names: Cortez Street (“what is now Belmont Avenue was called Aztec Avenue and what is now Dawson Street was called Montezuma Avenue… Glassell was clearly going for a theme here”)",
            "url": "https://lastreetnames.com/street/cortez-street/"
          }
        ],
        "maxLat": 34.0669,
        "from": "Court Street",
        "to": null
      }
    ]
  },
  "Bernard Street": {
    "name": "Bernard Street",
    "orientation": "EW",
    "segments": [
      {
        "label": "part of",
        "name": "Bernard Street",
        "entityId": "bernard-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "maxLng": -118.2404,
        "from": null,
        "to": {
          "px": [
            726,
            344
          ]
        }
      },
      {
        "label": "part of",
        "name": "Bernard Street",
        "entityId": "bernard-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
        },
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLng": -118.2404,
        "maxLng": -118.2398,
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
        "gapAfter": true
      },
      {
        "label": "part of (discontinuous)",
        "name": "Bernard Street",
        "entityId": "bernard-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
        },
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLng": -118.2398,
        "from": {
          "px": [
            795,
            506
          ]
        },
        "to": null
      }
    ]
  },
  "Beverly Boulevard": {
    "name": "Beverly Boulevard",
    "orientation": "EW",
    "segments": [
      {
        "label": "west of Belmont",
        "name": "Beverly Boulevard",
        "entityId": "beverly-boulevard",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "maxLng": -118.2631,
        "from": null,
        "to": "Belmont Avenue"
      },
      {
        "label": "beyond Belmont (Diamond St)",
        "name": "Beverly Boulevard",
        "entityId": "beverly-boulevard",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "by 1884",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-138.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1884",
            "until": "?",
            "name": "Diamond Street",
            "entityId": "diamond-street",
            "formInForce": "Diamond Street",
            "how": "origin",
            "origin": "labeled “Diamond Street” on the 1884 Glassell's Subdivision map {{(source)}} — no namesake documented",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-138.pdf"
          },
          {
            "from": "?",
            "until": null,
            "name": "Beverly Boulevard",
            "entityId": "beverly-boulevard",
            "formInForce": "Beverly Boulevard",
            "how": "renaming",
            "origin": "arrival on this stretch not directly documented",
            "originLink": null
          }
        ],
        "note": null,
        "attested": true,
        "knownFraction": 0,
        "categories": [
          "unresearched",
          "renamed"
        ],
        "formerCategories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Recorded map: Glassell's Subdivision of Lot No. 7 etc., Block 39, Hancock Survey No. 1, M.R. 6-138 (recorded Dec. 27, 1884 at request of A. Glassell) (identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-138.pdf"
          }
        ],
        "minLng": -118.2631,
        "from": "Belmont Avenue",
        "to": null
      }
    ]
  },
  "Bixel Street": {
    "name": "Bixel Street",
    "orientation": "NS",
    "segments": [
      {
        "label": "north of Colton (discontinuous)",
        "name": "Bixel Street",
        "entityId": "bixel",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Recorded map: Compromise Subdivision of a portion of the O.T. Johnson tract, known as the Washington Tract, M.R. 66-35 (surveyed Mar. 1894 by E.D. Severance)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR066/MR066-035.pdf"
          }
        ],
        "minLat": 34.0606,
        "from": null,
        "to": "Colton Street",
        "gapAfter": true
      },
      {
        "label": "1st to 2nd (discontinuous)",
        "name": "Bixel Street",
        "entityId": "bixel",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Recorded map: Compromise Subdivision of a portion of the O.T. Johnson tract, known as the Washington Tract, M.R. 66-35 (surveyed Mar. 1894 by E.D. Severance)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR066/MR066-035.pdf"
          }
        ],
        "minLat": 34.0582,
        "maxLat": 34.0606,
        "from": "1st Street",
        "to": "2nd Street",
        "gapAfter": true
      },
      {
        "label": "Miramar to 3rd (original Bixel St)",
        "name": "Bixel Street",
        "entityId": "bixel",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "by 1894",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR066/MR066-035.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1894",
            "until": null,
            "name": "Bixel Street",
            "entityId": "bixel",
            "formInForce": "Bixel Street",
            "how": "origin",
            "origin": "labeled “BIXEL ST” on the 1894 Washington Tract map {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR066/MR066-035.pdf"
          }
        ],
        "note": null,
        "attested": true,
        "knownFraction": 0.75,
        "categories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Recorded map: Compromise Subdivision of a portion of the O.T. Johnson tract, known as the Washington Tract, M.R. 66-35 (surveyed Mar. 1894 by E.D. Severance) (identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR066/MR066-035.pdf"
          }
        ],
        "minLat": 34.0575,
        "maxLat": 34.0582,
        "from": "Miramar Street",
        "to": "3rd Street"
      },
      {
        "label": "3rd to 8th (discontinuous)",
        "name": "Bixel Street",
        "entityId": "bixel",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Recorded map: Compromise Subdivision of a portion of the O.T. Johnson tract, known as the Washington Tract, M.R. 66-35 (surveyed Mar. 1894 by E.D. Severance)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR066/MR066-035.pdf"
          }
        ],
        "minLat": 34.0469,
        "maxLat": 34.0575,
        "from": "3rd Street",
        "to": "8th Street",
        "gapAfter": true
      },
      {
        "label": "south of Olympic",
        "name": "Bixel Street",
        "entityId": "bixel",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Recorded map: Compromise Subdivision of a portion of the O.T. Johnson tract, known as the Washington Tract, M.R. 66-35 (surveyed Mar. 1894 by E.D. Severance)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR066/MR066-035.pdf"
          }
        ],
        "maxLat": 34.0469,
        "from": "Olympic Boulevard",
        "to": null
      }
    ]
  },
  "Blaine Street": {
    "name": "Blaine Street",
    "entityId": "blaine-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Bloom Street": {
    "name": "Bloom Street",
    "entityId": "bloom-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "absentAsOf": {
      "text": "1849 (Hutton / Ord Survey)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
    },
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Blossom Plaza": {
    "name": "Blossom Plaza",
    "entityId": "blossom-plaza",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "absentAsOf": {
      "text": "1849 (Hutton / Ord Survey)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
    },
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Bolero Lane": {
    "name": "Bolero Lane",
    "entityId": "bolero-lane",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Bonnie Brae Street": {
    "name": "Bonnie Brae Street",
    "entityId": "bonnie-brae-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Boston Street": {
    "name": "Boston Street",
    "entityId": "boston-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Boyd Street": {
    "name": "Boyd Street",
    "orientation": "EW",
    "segments": [
      {
        "label": "part of (original Boyd St)",
        "name": "Boyd Street",
        "entityId": "boyd-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "by 1882",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-005.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1882",
            "until": null,
            "name": "Boyd Street",
            "entityId": "boyd-street",
            "formInForce": "Boyd Street",
            "how": "origin",
            "origin": "labeled “Boyd Street” on the 1882 Orchard Tract {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-005.pdf"
          }
        ],
        "note": "Lettered on the Orchard Tract of July 1882 between Wall Street and San Pedro Street, and still Boyd Street today. No Boyd is documented: the sheet names its three owners, its surveyor and the three earlier tracts it absorbed, and there is no Boyd among them.",
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "knownFraction": 0.82,
        "categories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Map of the Orchard Tract in the City of Los Angeles (M.R. 5-5, Aug. 2, 1882; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-005.pdf"
          }
        ],
        "maxLng": -118.2427,
        "from": null,
        "to": {
          "px": [
            693,
            1613
          ]
        }
      },
      {
        "label": "part of",
        "name": "Boyd Street",
        "entityId": "boyd-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "Lettered on the Orchard Tract of July 1882 between Wall Street and San Pedro Street, and still Boyd Street today. No Boyd is documented: the sheet names its three owners, its surveyor and the three earlier tracts it absorbed, and there is no Boyd among them.",
        "attested": false,
        "absentAsOf": {
          "text": "1888 (Wolfskill Orchard Tract, sheet 5 (M.R. 30-13))",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
        },
        "categories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Map of the Orchard Tract in the City of Los Angeles (M.R. 5-5, Aug. 2, 1882)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-005.pdf"
          }
        ],
        "minLng": -118.2427,
        "maxLng": -118.2417,
        "from": {
          "px": [
            693,
            1613
          ]
        },
        "to": {
          "px": [
            686,
            646
          ]
        },
        "gapAfter": true
      },
      {
        "label": "east of Mission Rd (discontinuous)",
        "name": "Boyd Street",
        "entityId": "boyd-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "Lettered on the Orchard Tract of July 1882 between Wall Street and San Pedro Street, and still Boyd Street today. No Boyd is documented: the sheet names its three owners, its surveyor and the three earlier tracts it absorbed, and there is no Boyd among them.",
        "attested": false,
        "categories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Map of the Orchard Tract in the City of Los Angeles (M.R. 5-5, Aug. 2, 1882)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-005.pdf"
          }
        ],
        "minLng": -118.2417,
        "from": "Mission Road",
        "to": null
      }
    ]
  },
  "Boylston Street": {
    "name": "Boylston Street",
    "orientation": "NS",
    "segments": [
      {
        "label": "north of Colton (discontinuous)",
        "name": "Boylston Street",
        "entityId": "boylston",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "The Feb. 2, 1897 draft ordinance would have made this street “De La Guerra”; the council's Feb. 23 amendments made it Boylston instead — De La Guerra was only ever draft text.",
        "attested": false,
        "categories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Ordinance No. 4093 (N.S.), the Feb. 1897 citywide street renaming (adopted Feb. 23, signed Feb. 26, 1897; Ordinance Book IV p. 337 — full text pending; changes as reported in the Los Angeles Herald and the council minutes)",
            "url": "https://cdnc.ucr.edu/?a=d&d=LAH18970224.2.20"
          }
        ],
        "minLat": 34.0568,
        "from": null,
        "to": "Colton Street",
        "gapAfter": true
      },
      {
        "label": "south of 3rd",
        "name": "Boylston Street",
        "entityId": "boylston",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "The Feb. 2, 1897 draft ordinance would have made this street “De La Guerra”; the council's Feb. 23 amendments made it Boylston instead — De La Guerra was only ever draft text.",
        "attested": false,
        "categories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Ordinance No. 4093 (N.S.), the Feb. 1897 citywide street renaming (adopted Feb. 23, signed Feb. 26, 1897; Ordinance Book IV p. 337 — full text pending; changes as reported in the Los Angeles Herald and the council minutes)",
            "url": "https://cdnc.ucr.edu/?a=d&d=LAH18970224.2.20"
          }
        ],
        "maxLat": 34.0568,
        "from": "3rd Street",
        "to": null
      }
    ]
  },
  "Broad Plaza": {
    "name": "Broad Plaza",
    "entityId": "broad-plaza",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "absentAsOf": {
      "text": "1849 (Hutton / Ord Survey)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
    },
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Broadway": {
    "name": "Broadway",
    "orientation": "NS",
    "segments": [
      {
        "label": "beyond Cottage Home",
        "name": "Broadway",
        "entityId": "broadway",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "The name has no “Street”: the 1890 papers and the street signs both say simply Broadway.",
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
        },
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Los Angeles Herald, “Broadway — Fort Street Is No Longer in Existence,” Feb. 20, 1890 (the renaming ordinance signed by Mayor Hazard and in effect)",
            "url": "https://cdnc.ucr.edu/?a=d&d=LAH18900220.1.2"
          }
        ],
        "minLat": 34.0673,
        "from": null,
        "to": "Cottage Home Street"
      },
      {
        "label": "Cottage Home to Cesar E Chavez (Eternity St)",
        "name": "Broadway",
        "entityId": "broadway",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "1849",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "1849",
            "until": "?",
            "name": "Eternity Street",
            "entityId": "eternity",
            "formInForce": "Eternity Street",
            "how": "origin",
            "origin": "labeled “ETERNITY ST.” and “CALLE DE LA ETERNIDAD” on the 1849 Hutton / Ord Survey {{(source)}} — The concept of the eternity after death — it led to Calvary Cemetery, established in 1844. Though an 1895 account claims instead that it was so named because it had neither beginning nor end.",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
          },
          {
            "from": "?",
            "until": null,
            "name": "Broadway",
            "entityId": "broadway",
            "formInForce": "Broadway",
            "how": "renaming",
            "origin": "arrival on this stretch not directly documented",
            "originLink": null
          }
        ],
        "note": "The name has no “Street”: the 1890 papers and the street signs both say simply Broadway.",
        "attested": true,
        "knownFraction": 0,
        "categories": [
          "unresearched",
          "renamed"
        ],
        "formerCategories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-73, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
          },
          {
            "title": "Los Angeles Herald, “Broadway — Fort Street Is No Longer in Existence,” Feb. 20, 1890 (the renaming ordinance signed by Mayor Hazard and in effect)",
            "url": "https://cdnc.ucr.edu/?a=d&d=LAH18900220.1.2"
          },
          {
            "title": "L.A. Street Names: Broadway (on Calle Eternidad)",
            "url": "https://lastreetnames.com/street/broadway/"
          },
          {
            "title": "Homestead Museum: Calle Eternidad in the 1880s",
            "url": "https://homesteadmuseum.blog/2016/07/18/museum-director-musings-through-the-viewfinder-on-calle-eternidad-1880s/"
          }
        ],
        "minLat": 34.0586,
        "maxLat": 34.0673,
        "from": "Cottage Home Street",
        "to": "Cesar E Chavez Avenue"
      },
      {
        "label": "beyond Cesar E Chavez",
        "name": "Broadway",
        "entityId": "broadway",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "The name has no “Street”: the 1890 papers and the street signs both say simply Broadway.",
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
        },
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Los Angeles Herald, “Broadway — Fort Street Is No Longer in Existence,” Feb. 20, 1890 (the renaming ordinance signed by Mayor Hazard and in effect)",
            "url": "https://cdnc.ucr.edu/?a=d&d=LAH18900220.1.2"
          }
        ],
        "minLat": 34.0561,
        "maxLat": 34.0586,
        "from": "Cesar E Chavez Avenue",
        "to": {
          "px": [
            1660,
            1025
          ]
        }
      },
      {
        "label": "beyond 1st (Fort St)",
        "name": "Broadway",
        "entityId": "broadway",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "by 1869",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1869",
            "until": "Feb. 1890",
            "name": "Fort Street",
            "entityId": "fort-street",
            "formInForce": "Fort Street",
            "how": "extension",
            "origin": "labeled “Fort Street” on the 1869 Mott Tract building lots {{(source)}} — Fort Moore, built on the hill above it after the Mexican–American War",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf"
          },
          {
            "from": "Feb. 1890",
            "until": null,
            "name": "Broadway",
            "entityId": "broadway",
            "formInForce": "Broadway",
            "how": "renaming",
            "origin": "renamed per the 1890 Fort Street renaming (Herald report) {{(source)}}",
            "originLink": "https://cdnc.ucr.edu/?a=d&d=LAH18900220.1.2"
          }
        ],
        "note": "The name has no “Street”: the 1890 papers and the street signs both say simply Broadway.",
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
        },
        "knownFraction": 0.89,
        "categories": [
          "unresearched",
          "renamed"
        ],
        "formerCategories": [
          "place"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Map of a part of Building Lots of the Mott Tract in the City & County of Los Angeles, California (M.R. 1-489, Mar. 2, 1869; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf"
          },
          {
            "title": "Los Angeles Herald, “Broadway — Fort Street Is No Longer in Existence,” Feb. 20, 1890 (the renaming ordinance signed by Mayor Hazard and in effect)",
            "url": "https://cdnc.ucr.edu/?a=d&d=LAH18900220.1.2"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          },
          {
            "title": "L.A. Street Names: Broadway (on Fort Street)",
            "url": "https://lastreetnames.com/street/broadway/"
          }
        ],
        "minLat": 34.0536,
        "maxLat": 34.0561,
        "from": {
          "px": [
            1660,
            1025
          ]
        },
        "to": "1st Street"
      },
      {
        "label": "beyond 1st (Fort St)",
        "name": "Broadway",
        "entityId": "broadway",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "1849",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "1849",
            "until": "Feb. 1890",
            "name": "Fort Street",
            "entityId": "fort-street",
            "formInForce": "Fort Street",
            "how": "origin",
            "origin": "labeled “CALLE FORTIN”, “FORT STREET” and “Fort Street” on the 1849 Hutton / Ord Survey and the 1869 Mott Tract building lots {{(source)}} — Fort Moore, built on the hill above it after the Mexican–American War",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          },
          {
            "from": "Feb. 1890",
            "until": null,
            "name": "Broadway",
            "entityId": "broadway",
            "formInForce": "Broadway",
            "how": "renaming",
            "origin": "renamed per the 1890 Fort Street renaming (Herald report) {{(source)}}",
            "originLink": "https://cdnc.ucr.edu/?a=d&d=LAH18900220.1.2"
          }
        ],
        "note": "The name has no “Street”: the 1890 papers and the street signs both say simply Broadway.",
        "attested": true,
        "knownFraction": 1,
        "categories": [
          "unresearched",
          "renamed"
        ],
        "formerCategories": [
          "place"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          },
          {
            "title": "Map of a part of Building Lots of the Mott Tract in the City & County of Los Angeles, California (M.R. 1-489, Mar. 2, 1869; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf"
          },
          {
            "title": "Los Angeles Herald, “Broadway — Fort Street Is No Longer in Existence,” Feb. 20, 1890 (the renaming ordinance signed by Mayor Hazard and in effect)",
            "url": "https://cdnc.ucr.edu/?a=d&d=LAH18900220.1.2"
          },
          {
            "title": "L.A. Street Names: Broadway (on Fort Street)",
            "url": "https://lastreetnames.com/street/broadway/"
          }
        ],
        "minLat": 34.0377,
        "maxLat": 34.0536,
        "from": "1st Street",
        "to": {
          "px": [
            479,
            1326
          ]
        }
      },
      {
        "label": "part of",
        "name": "Broadway",
        "entityId": "broadway",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "The name has no “Street”: the 1890 papers and the street signs both say simply Broadway.",
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Los Angeles Herald, “Broadway — Fort Street Is No Longer in Existence,” Feb. 20, 1890 (the renaming ordinance signed by Mayor Hazard and in effect)",
            "url": "https://cdnc.ucr.edu/?a=d&d=LAH18900220.1.2"
          }
        ],
        "maxLat": 34.0377,
        "from": {
          "px": [
            479,
            1326
          ]
        },
        "to": null
      }
    ]
  },
  "Bruno Street": {
    "name": "Bruno Street",
    "entityId": "bruno-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "absentAsOf": {
      "text": "1849 (Hutton / Ord Survey)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
    },
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Bunker Hill Avenue": {
    "name": "Bunker Hill Avenue",
    "orientation": "NS",
    "segments": [
      {
        "label": "part of",
        "name": "Bunker Hill Avenue",
        "entityId": "bunker-hill-avenue",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
        },
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLat": 34.0643,
        "from": null,
        "to": {
          "px": [
            463,
            389
          ]
        }
      },
      {
        "label": "part of",
        "name": "Bunker Hill Avenue",
        "entityId": "bunker-hill-avenue",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "maxLat": 34.0643,
        "from": {
          "px": [
            463,
            389
          ]
        },
        "to": null
      }
    ]
  },
  "Burlington Avenue": {
    "name": "Burlington Avenue",
    "entityId": "burlington-avenue",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Cambria Street": {
    "name": "Cambria Street",
    "entityId": "cambria-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Cardinal Street": {
    "name": "Cardinal Street",
    "orientation": "EW",
    "segments": [
      {
        "label": "part of",
        "name": "Cardinal Street",
        "entityId": "cardinal-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
        },
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "maxLng": -118.2286,
        "from": null,
        "to": {
          "px": [
            886,
            1039
          ]
        }
      },
      {
        "label": "part of",
        "name": "Cardinal Street",
        "entityId": "cardinal-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLng": -118.2286,
        "from": {
          "px": [
            886,
            1039
          ]
        },
        "to": null
      }
    ]
  },
  "Castelar Street": {
    "name": "Castelar Street",
    "entityId": "castelar",
    "namedAfter": "{{Emilio Castelar}} (1832–1899), president of the First Spanish Republic in 1873–74 — how and when this stretch joined Castelar Street is not yet researched",
    "namedAfterLink": "https://en.wikipedia.org/wiki/Emilio_Castelar",
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": "Castelar had left office a few weeks before the Los Angeles council renamed the street in February 1874 — the First Republic fell that January.",
    "attested": false,
    "absentAsOf": {
      "text": "1849 (Hutton / Ord Survey)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
    },
    "categories": [
      "person"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "L.A. Street Names: Hill Street (on Calle del Toro / Castelar / N. Hill)",
        "url": "https://lastreetnames.com/street/hill-street/"
      },
      {
        "title": "“An Ordinance Changing the names of Certain Streets in the City of Los Angeles” — Los Angeles Common Council, adopted Feb. 26, 1874 (council minutes, ledger p. 621)",
        "url": "https://clerkapps.lacity.org/oldcfidocs/"
      }
    ]
  },
  "Cecelia Street": {
    "name": "Cecelia Street",
    "orientation": "EW",
    "segments": [
      {
        "label": "part of",
        "name": "Cecelia Street",
        "entityId": "cecelia-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "maxLng": -118.2514,
        "from": null,
        "to": {
          "px": [
            1091,
            888
          ]
        }
      },
      {
        "label": "beyond 8th (Ida St)",
        "name": "Cecelia Street",
        "entityId": "cecelia-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "by 1888",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR029/MR029-026.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1888",
            "until": "?",
            "name": "Ida Street",
            "entityId": "ida-street",
            "formInForce": "Ida Street",
            "how": "origin",
            "origin": "labeled “Ida Street” on the 1888 Widow Botiller Tract resubdivision {{(source)}} — A given name on the Widow Botiller Tract resubdivision of March 1888 — presumably someone in the family, though the sheet does not say so. It is now Cecelia Street",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR029/MR029-026.pdf"
          },
          {
            "from": "?",
            "until": null,
            "name": "Cecelia Street",
            "entityId": "cecelia-street",
            "formInForce": "Cecelia Street",
            "how": "renaming",
            "origin": "arrival on this stretch not directly documented",
            "originLink": null
          }
        ],
        "note": null,
        "attested": true,
        "knownFraction": 0,
        "categories": [
          "unresearched",
          "renamed"
        ],
        "formerCategories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Map of the Resubdivision of the Widow Botiller Tract (M.R. 29-26, Mar. 15, 1888; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR029/MR029-026.pdf"
          }
        ],
        "minLng": -118.2514,
        "from": {
          "px": [
            1091,
            888
          ]
        },
        "to": null
      }
    ]
  },
  "Centennial Street": {
    "name": "Centennial Street",
    "entityId": "centennial-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Center Street": {
    "name": "Center Street",
    "entityId": "center-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Central Avenue": {
    "name": "Central Avenue",
    "orientation": "NS",
    "segments": [
      {
        "label": "part of",
        "name": "Central Avenue",
        "entityId": "central-ave",
        "namedAfter": "Central not to Los Angeles but to {{Vernon}}, just south of the city limits when it was platted — how and when this stretch joined Central Avenue is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Vernon,_California",
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "descriptive"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Central Avenue",
            "url": "https://lastreetnames.com/street/central-avenue/"
          },
          {
            "title": "Ordinance No. 4093 (N.S.), the Feb. 1897 citywide street renaming (adopted Feb. 23, signed Feb. 26, 1897; Ordinance Book IV p. 337 — full text pending; changes as reported in the Los Angeles Herald and the council minutes)",
            "url": "https://cdnc.ucr.edu/?a=d&d=LAH18970224.2.20"
          }
        ],
        "minLat": 34.0504,
        "from": null,
        "to": {
          "px": [
            869,
            450
          ]
        }
      },
      {
        "label": "part of",
        "name": "Central Avenue",
        "entityId": "central-ave",
        "namedAfter": "Central not to Los Angeles but to {{Vernon}}, just south of the city limits when it was platted — how and when this stretch joined Central Avenue is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Vernon,_California",
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "categories": [
          "descriptive"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Central Avenue",
            "url": "https://lastreetnames.com/street/central-avenue/"
          },
          {
            "title": "Ordinance No. 4093 (N.S.), the Feb. 1897 citywide street renaming (adopted Feb. 23, signed Feb. 26, 1897; Ordinance Book IV p. 337 — full text pending; changes as reported in the Los Angeles Herald and the council minutes)",
            "url": "https://cdnc.ucr.edu/?a=d&d=LAH18970224.2.20"
          }
        ],
        "minLat": 34.0493,
        "maxLat": 34.0504,
        "from": {
          "px": [
            869,
            450
          ]
        },
        "to": {
          "px": [
            813,
            495
          ]
        }
      },
      {
        "label": "beyond 2nd (Vine St)",
        "name": "Central Avenue",
        "entityId": "central-ave",
        "namedAfter": "Central not to Los Angeles but to {{Vernon}}, just south of the city limits when it was platted, once this stretch was folded into Central Avenue",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Vernon,_California",
        "planned": "not yet researched",
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "?",
            "until": "Feb. 1897",
            "name": "Vine Street",
            "entityId": "vine-central",
            "formInForce": "Vine Street",
            "origin": "arrival on this stretch not directly documented — vine north of 1st kept its name in 1897; that stretch no longer exists",
            "originLink": null
          },
          {
            "from": "Feb. 1897",
            "until": null,
            "name": "Central Avenue",
            "entityId": "central-ave",
            "formInForce": "Central Avenue",
            "how": "renaming",
            "origin": "renamed per Ord. 4093, the Feb. 1897 citywide renaming {{(source)}}",
            "originLink": "https://cdnc.ucr.edu/?a=d&d=LAH18970224.2.20"
          }
        ],
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "categories": [
          "descriptive",
          "renamed"
        ],
        "formerCategories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Central Avenue",
            "url": "https://lastreetnames.com/street/central-avenue/"
          },
          {
            "title": "Ordinance No. 4093 (N.S.), the Feb. 1897 citywide street renaming (adopted Feb. 23, signed Feb. 26, 1897; Ordinance Book IV p. 337 — full text pending; changes as reported in the Los Angeles Herald and the council minutes)",
            "url": "https://cdnc.ucr.edu/?a=d&d=LAH18970224.2.20"
          }
        ],
        "minLat": 34.0477,
        "maxLat": 34.0493,
        "from": {
          "px": [
            813,
            495
          ]
        },
        "to": "2nd Street"
      },
      {
        "label": "2nd to 3rd",
        "name": "Central Avenue",
        "entityId": "central-ave",
        "namedAfter": "Central not to Los Angeles but to {{Vernon}}, just south of the city limits when it was platted — how and when this stretch joined Central Avenue is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Vernon,_California",
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1888 (Wolfskill Orchard Tract, sheet 5 (M.R. 30-13))",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
        },
        "categories": [
          "descriptive"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Central Avenue",
            "url": "https://lastreetnames.com/street/central-avenue/"
          },
          {
            "title": "Ordinance No. 4093 (N.S.), the Feb. 1897 citywide street renaming (adopted Feb. 23, signed Feb. 26, 1897; Ordinance Book IV p. 337 — full text pending; changes as reported in the Los Angeles Herald and the council minutes)",
            "url": "https://cdnc.ucr.edu/?a=d&d=LAH18970224.2.20"
          }
        ],
        "minLat": 34.0461,
        "maxLat": 34.0477,
        "from": "2nd Street",
        "to": "3rd Street"
      },
      {
        "label": "3rd to 6th (Wolfskill Ave)",
        "name": "Central Avenue",
        "entityId": "central-ave",
        "namedAfter": "Central not to Los Angeles but to {{Vernon}}, just south of the city limits when it was platted, once this stretch was folded into Central Avenue",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Vernon,_California",
        "planned": {
          "text": "by 1888",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1888",
            "until": "Feb. 1897",
            "name": "Wolfskill Avenue",
            "entityId": "wolfskill-ave",
            "formInForce": "Wolfskill Avenue",
            "how": "origin",
            "origin": "labeled “Wolfskill Ave” on the 1888 Wolfskill Orchard Tract (sheets 2–5) {{(source)}} — William Wolfskill's old citrus ranch, which the street ran through",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
          },
          {
            "from": "Feb. 1897",
            "until": null,
            "name": "Central Avenue",
            "entityId": "central-ave",
            "formInForce": "Central Avenue",
            "how": "renaming",
            "origin": "renamed per Ord. 4093, the Feb. 1897 citywide renaming {{(source)}}",
            "originLink": "https://cdnc.ucr.edu/?a=d&d=LAH18970224.2.20"
          }
        ],
        "note": null,
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "knownFraction": 0.78,
        "categories": [
          "descriptive",
          "renamed"
        ],
        "formerCategories": [
          "person"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Central Avenue",
            "url": "https://lastreetnames.com/street/central-avenue/"
          },
          {
            "title": "Map of the Wolfskill Orchard Tract situated in the City of Los Angeles Cal. (sheet 2, M.R. 30-10, Jan. 11, 1888; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
          },
          {
            "title": "Ordinance No. 4093 (N.S.), the Feb. 1897 citywide street renaming (adopted Feb. 23, signed Feb. 26, 1897; Ordinance Book IV p. 337 — full text pending; changes as reported in the Los Angeles Herald and the council minutes)",
            "url": "https://cdnc.ucr.edu/?a=d&d=LAH18970224.2.20"
          }
        ],
        "minLat": 34.039,
        "maxLat": 34.0461,
        "from": "3rd Street",
        "to": "6th Street"
      },
      {
        "label": "beyond 6th",
        "name": "Central Avenue",
        "entityId": "central-ave",
        "namedAfter": "Central not to Los Angeles but to {{Vernon}}, just south of the city limits when it was platted — how and when this stretch joined Central Avenue is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Vernon,_California",
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1888 (Wolfskill Orchard Tract, sheet 1 (M.R. 30-9))",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
        },
        "categories": [
          "descriptive"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Central Avenue",
            "url": "https://lastreetnames.com/street/central-avenue/"
          },
          {
            "title": "Ordinance No. 4093 (N.S.), the Feb. 1897 citywide street renaming (adopted Feb. 23, signed Feb. 26, 1897; Ordinance Book IV p. 337 — full text pending; changes as reported in the Los Angeles Herald and the council minutes)",
            "url": "https://cdnc.ucr.edu/?a=d&d=LAH18970224.2.20"
          }
        ],
        "minLat": 34.0356,
        "maxLat": 34.039,
        "from": "6th Street",
        "to": {
          "px": [
            11,
            943
          ]
        }
      },
      {
        "label": "part of",
        "name": "Central Avenue",
        "entityId": "central-ave",
        "namedAfter": "Central not to Los Angeles but to {{Vernon}}, just south of the city limits when it was platted — how and when this stretch joined Central Avenue is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Vernon,_California",
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "descriptive"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Central Avenue",
            "url": "https://lastreetnames.com/street/central-avenue/"
          },
          {
            "title": "Ordinance No. 4093 (N.S.), the Feb. 1897 citywide street renaming (adopted Feb. 23, signed Feb. 26, 1897; Ordinance Book IV p. 337 — full text pending; changes as reported in the Los Angeles Herald and the council minutes)",
            "url": "https://cdnc.ucr.edu/?a=d&d=LAH18970224.2.20"
          }
        ],
        "maxLat": 34.0356,
        "from": {
          "px": [
            11,
            943
          ]
        },
        "to": null
      }
    ]
  },
  "Ceres Avenue": {
    "name": "Ceres Avenue",
    "orientation": "NS",
    "segments": [
      {
        "label": "part of",
        "name": "Ceres Avenue",
        "entityId": "ceres-ave",
        "namedAfter": "{{Ceres}}, the Roman goddess of agriculture and the harvest — how and when this stretch joined Ceres Avenue is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Ceres_(mythology)",
        "planned": {
          "text": "1888",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
        },
        "built": "not yet researched",
        "note": "This street was laid through Joseph Wolfskill's orchard as it was being cut into building lots in 1887. No source names the goddess or anyone called Ceres — but a harvest goddess on a subdivided orchard reads as a choice rather than a coincidence.",
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "knownFraction": 1,
        "categories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Map of the Wolfskill Orchard Tract situated in the City of Los Angeles Cal. (sheet 2, M.R. 30-10, Jan. 11, 1888; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
          }
        ],
        "minLat": 34.04,
        "from": null,
        "to": {
          "px": [
            1077,
            907
          ]
        }
      },
      {
        "label": "part of (original Ceres Ave)",
        "name": "Ceres Avenue",
        "entityId": "ceres-ave",
        "namedAfter": "{{Ceres}}, the Roman goddess of agriculture and the harvest",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Ceres_(mythology)",
        "planned": {
          "text": "1888",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1888",
            "until": null,
            "name": "Ceres Avenue",
            "entityId": "ceres-ave",
            "formInForce": "Ceres Avenue",
            "how": "origin",
            "origin": "labeled “Ceres Ave” on the 1888 Wolfskill Orchard Tract (sheets 1, 2) {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
          }
        ],
        "note": "This street was laid through Joseph Wolfskill's orchard as it was being cut into building lots in 1887. No source names the goddess or anyone called Ceres — but a harvest goddess on a subdivided orchard reads as a choice rather than a coincidence.",
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "knownFraction": 0.78,
        "categories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Map of the Wolfskill Orchard Tract situated in the City of Los Angeles Cal. (sheet 1, M.R. 30-9, Jan. 11, 1888; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
          }
        ],
        "minLat": 34.038,
        "maxLat": 34.04,
        "from": {
          "px": [
            1077,
            907
          ]
        },
        "to": {
          "px": [
            668,
            647
          ]
        }
      },
      {
        "label": "part of",
        "name": "Ceres Avenue",
        "entityId": "ceres-ave",
        "namedAfter": "{{Ceres}}, the Roman goddess of agriculture and the harvest — how and when this stretch joined Ceres Avenue is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Ceres_(mythology)",
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "This street was laid through Joseph Wolfskill's orchard as it was being cut into building lots in 1887. No source names the goddess or anyone called Ceres — but a harvest goddess on a subdivided orchard reads as a choice rather than a coincidence.",
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "categories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Map of the Wolfskill Orchard Tract situated in the City of Los Angeles Cal. (sheet 1, M.R. 30-9, Jan. 11, 1888)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
          }
        ],
        "minLat": 34.0373,
        "maxLat": 34.038,
        "from": {
          "px": [
            668,
            647
          ]
        },
        "to": {
          "px": [
            33,
            791
          ]
        }
      },
      {
        "label": "part of",
        "name": "Ceres Avenue",
        "entityId": "ceres-ave",
        "namedAfter": "{{Ceres}}, the Roman goddess of agriculture and the harvest — how and when this stretch joined Ceres Avenue is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Ceres_(mythology)",
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "This street was laid through Joseph Wolfskill's orchard as it was being cut into building lots in 1887. No source names the goddess or anyone called Ceres — but a harvest goddess on a subdivided orchard reads as a choice rather than a coincidence.",
        "attested": false,
        "categories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Map of the Wolfskill Orchard Tract situated in the City of Los Angeles Cal. (sheet 1, M.R. 30-9, Jan. 11, 1888)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
          }
        ],
        "maxLat": 34.0373,
        "from": {
          "px": [
            33,
            791
          ]
        },
        "to": null
      }
    ]
  },
  "Cesar E Chavez Avenue": {
    "name": "Cesar E Chavez Avenue",
    "orientation": "EW",
    "segments": [
      {
        "label": "part of",
        "name": "Cesar E Chavez Avenue",
        "entityId": "cesar-e-chavez-avenue",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "maxLng": -118.2429,
        "from": null,
        "to": {
          "px": [
            231,
            548
          ]
        }
      },
      {
        "label": "beyond Broadway",
        "name": "Cesar E Chavez Avenue",
        "entityId": "cesar-e-chavez-avenue",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
        },
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLng": -118.2429,
        "maxLng": -118.2402,
        "from": {
          "px": [
            231,
            548
          ]
        },
        "to": "Broadway"
      },
      {
        "label": "beyond Broadway (Short St)",
        "name": "Cesar E Chavez Avenue",
        "entityId": "cesar-e-chavez-avenue",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "1849",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "1849",
            "until": "?",
            "name": "Short Street",
            "entityId": "short-street-chavez",
            "formInForce": "Short Street",
            "how": "origin",
            "origin": "labeled “C CORTA” and “SHORT ST” on the 1849 Hutton / Ord Survey {{(source)}} — lettered on the 1849 survey along ground that roughly follows one block of what is now Cesar E. Chavez Avenue. Descriptive, presumably, but nothing documents it",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
          },
          {
            "from": "?",
            "until": null,
            "name": "Cesar E Chavez Avenue",
            "entityId": "cesar-e-chavez-avenue",
            "formInForce": "Cesar E Chavez Avenue",
            "how": "renaming",
            "origin": "arrival on this stretch not directly documented",
            "originLink": null
          }
        ],
        "note": null,
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
        },
        "knownFraction": 0,
        "categories": [
          "unresearched",
          "renamed"
        ],
        "formerCategories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-73, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
          }
        ],
        "minLng": -118.2402,
        "maxLng": -118.239,
        "from": "Broadway",
        "to": {
          "px": [
            270,
            794
          ]
        }
      },
      {
        "label": "beyond Lyon",
        "name": "Cesar E Chavez Avenue",
        "entityId": "cesar-e-chavez-avenue",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
        },
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLng": -118.239,
        "maxLng": -118.2309,
        "from": {
          "px": [
            270,
            794
          ]
        },
        "to": "Lyon Street"
      },
      {
        "label": "beyond Lyon",
        "name": "Cesar E Chavez Avenue",
        "entityId": "cesar-e-chavez-avenue",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": null,
        "built": {
          "text": "drawn, unlabelled, by Aug. 29, 1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
        },
        "note": null,
        "attested": true,
        "knownFraction": 0,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-73, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
          }
        ],
        "minLng": -118.2309,
        "maxLng": -118.2305,
        "from": "Lyon Street",
        "to": {
          "px": [
            447,
            1247
          ]
        }
      },
      {
        "label": "part of",
        "name": "Cesar E Chavez Avenue",
        "entityId": "cesar-e-chavez-avenue",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLng": -118.2305,
        "from": {
          "px": [
            447,
            1247
          ]
        },
        "to": null
      }
    ]
  },
  "Channing Street": {
    "name": "Channing Street",
    "entityId": "channing-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "absentAsOf": {
      "text": "1849 (Hutton / Ord Survey)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
    },
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Chavez Ravine Place": {
    "name": "Chavez Ravine Place",
    "entityId": "chavez-ravine-place",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "absentAsOf": {
      "text": "1849 (Hutton / Ord Survey)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
    },
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Chick Hearn Court": {
    "name": "Chick Hearn Court",
    "entityId": "chick-hearn-court",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Chung King Road": {
    "name": "Chung King Road",
    "entityId": "chung-king-road",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "absentAsOf": {
      "text": "1849 (Hutton / Ord Survey)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
    },
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Clara Street": {
    "name": "Clara Street",
    "entityId": "clara-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "absentAsOf": {
      "text": "1849 (Hutton / Ord Survey)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
    },
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Cleveland Street": {
    "name": "Cleveland Street",
    "entityId": "cleveland-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "absentAsOf": {
      "text": "1849 (Hutton / Ord Survey)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
    },
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "College Street": {
    "name": "College Street",
    "orientation": "EW",
    "segments": [
      {
        "label": "part of",
        "name": "College Street",
        "entityId": "college",
        "namedAfter": "Descriptive — how and when this stretch joined College Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "A church request in June 1849 for a colegio — a secondary school — on this ground prompted Ord and Hutton to letter it “Calle del Colegio” a month later. The school was never built; the street kept the name.",
        "attested": false,
        "categories": [
          "descriptive"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: College Street",
            "url": "https://lastreetnames.com/street/college-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-73, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
          }
        ],
        "maxLng": -118.2425,
        "from": null,
        "to": {
          "px": [
            543,
            335
          ]
        }
      },
      {
        "label": "beyond Bunker Hill",
        "name": "College Street",
        "entityId": "college",
        "namedAfter": "Descriptive — how and when this stretch joined College Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "A church request in June 1849 for a colegio — a secondary school — on this ground prompted Ord and Hutton to letter it “Calle del Colegio” a month later. The school was never built; the street kept the name.",
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
        },
        "categories": [
          "descriptive"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: College Street",
            "url": "https://lastreetnames.com/street/college-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-73, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
          }
        ],
        "minLng": -118.2425,
        "maxLng": -118.2417,
        "from": {
          "px": [
            543,
            335
          ]
        },
        "to": "Bunker Hill Avenue"
      },
      {
        "label": "beyond Bunker Hill (original College St)",
        "name": "College Street",
        "entityId": "college",
        "namedAfter": "Descriptive — a colegio was to be built here",
        "namedAfterLink": null,
        "planned": {
          "text": "1849",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "1849",
            "until": null,
            "name": "College Street",
            "entityId": "college",
            "formInForce": "College Street",
            "how": "origin",
            "origin": "labeled “CALLE DEL COLEGIO” and “COLLEGE ST” on the 1849 Hutton / Ord Survey {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
          }
        ],
        "note": "A church request in June 1849 for a colegio — a secondary school — on this ground prompted Ord and Hutton to letter it “Calle del Colegio” a month later. The school was never built; the street kept the name.",
        "attested": true,
        "knownFraction": 1,
        "categories": [
          "descriptive"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: College Street",
            "url": "https://lastreetnames.com/street/college-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-73, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
          }
        ],
        "minLng": -118.2417,
        "maxLng": -118.2367,
        "from": "Bunker Hill Avenue",
        "to": {
          "px": [
            637,
            668
          ]
        }
      },
      {
        "label": "beyond Main",
        "name": "College Street",
        "entityId": "college",
        "namedAfter": "Descriptive — how and when this stretch joined College Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "A church request in June 1849 for a colegio — a secondary school — on this ground prompted Ord and Hutton to letter it “Calle del Colegio” a month later. The school was never built; the street kept the name.",
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
        },
        "categories": [
          "descriptive"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: College Street",
            "url": "https://lastreetnames.com/street/college-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-73, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
          }
        ],
        "minLng": -118.2367,
        "maxLng": -118.2341,
        "from": {
          "px": [
            637,
            668
          ]
        },
        "to": "Main Street"
      },
      {
        "label": "beyond Main",
        "name": "College Street",
        "entityId": "college",
        "namedAfter": "Descriptive — how and when this stretch joined College Street is not yet researched",
        "namedAfterLink": null,
        "planned": null,
        "built": {
          "text": "drawn, unlabelled, by Aug. 29, 1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
        },
        "note": "A church request in June 1849 for a colegio — a secondary school — on this ground prompted Ord and Hutton to letter it “Calle del Colegio” a month later. The school was never built; the street kept the name.",
        "attested": true,
        "knownFraction": 0,
        "categories": [
          "descriptive"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: College Street",
            "url": "https://lastreetnames.com/street/college-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-73, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
          }
        ],
        "minLng": -118.2341,
        "from": "Main Street",
        "to": null
      }
    ]
  },
  "Colton Street": {
    "name": "Colton Street",
    "orientation": "EW",
    "segments": [
      {
        "label": "Belmont to Toluca (State St)",
        "name": "Colton Street",
        "entityId": "colton-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "by 1884",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-138.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1884",
            "until": "?",
            "name": "State Street",
            "entityId": "state-colton",
            "formInForce": "State Street",
            "how": "origin",
            "origin": "labeled “State Street” on the 1884 Glassell's Subdivision map {{(source)}} — no namesake documented",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-138.pdf"
          },
          {
            "from": "?",
            "until": null,
            "name": "Colton Street",
            "entityId": "colton-street",
            "formInForce": "Colton Street",
            "how": "renaming",
            "origin": "arrival on this stretch not directly documented",
            "originLink": null
          }
        ],
        "note": null,
        "attested": true,
        "knownFraction": 0,
        "categories": [
          "unresearched",
          "renamed"
        ],
        "formerCategories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Recorded map: Glassell's Subdivision of Lot No. 7 etc., Block 39, Hancock Survey No. 1, M.R. 6-138 (recorded Dec. 27, 1884 at request of A. Glassell) (identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-138.pdf"
          }
        ],
        "maxLng": -118.2577,
        "from": null,
        "to": "Toluca Street"
      },
      {
        "label": "east of Toluca",
        "name": "Colton Street",
        "entityId": "colton-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLng": -118.2577,
        "from": "Toluca Street",
        "to": null
      }
    ]
  },
  "Columbia Avenue": {
    "name": "Columbia Avenue",
    "orientation": "NS",
    "segments": [
      {
        "label": "beyond 2nd (original Columbia Ave)",
        "name": "Columbia Avenue",
        "entityId": "columbia-avenue",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "by 1909",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0015/TR0015-166a.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1909",
            "until": null,
            "name": "Columbia Avenue",
            "entityId": "columbia-avenue",
            "formInForce": "Columbia Avenue",
            "how": "origin",
            "origin": "labeled “COLUMBIA AVENUE” on the 1909 Crownwood {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0015/TR0015-166a.pdf"
          }
        ],
        "note": "Namesake untraced. The 1909 Crownwood sheet letters it, which is the earliest evidence the project holds for the street, but nothing found says who or what Columbia was meant to be.",
        "attested": true,
        "knownFraction": 0.66,
        "categories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Recorded map: “Crownwood” (Witmer’s Subdivision of parts of Lots 2 and 7, Block 38, Hancock Survey; surveyed Nov. 1909 by Chas. Forman Jr.), M.B. 15-166",
            "url": "https://pw.lacounty.gov/smpm/landrecords/pdf/TR0015-166a.pdf"
          },
          {
            "title": "Plat of \"Crownwood\" (Dec. 10, 1909; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0015/TR0015-166a.pdf"
          }
        ],
        "minLat": 34.0592,
        "from": null,
        "to": {
          "px": [
            213,
            1798
          ]
        }
      },
      {
        "label": "beyond 6th (discontinuous)",
        "name": "Columbia Avenue",
        "entityId": "columbia-avenue",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "Namesake untraced. The 1909 Crownwood sheet letters it, which is the earliest evidence the project holds for the street, but nothing found says who or what Columbia was meant to be.",
        "attested": false,
        "categories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Recorded map: “Crownwood” (Witmer’s Subdivision of parts of Lots 2 and 7, Block 38, Hancock Survey; surveyed Nov. 1909 by Chas. Forman Jr.), M.B. 15-166",
            "url": "https://pw.lacounty.gov/smpm/landrecords/pdf/TR0015-166a.pdf"
          },
          {
            "title": "Plat of \"Crownwood\" (Dec. 10, 1909)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0015/TR0015-166a.pdf"
          }
        ],
        "minLat": 34.0527,
        "maxLat": 34.0592,
        "from": {
          "px": [
            213,
            1798
          ]
        },
        "to": "6th Street",
        "gapAfter": true
      },
      {
        "label": "south of 7th",
        "name": "Columbia Avenue",
        "entityId": "columbia-avenue",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "Namesake untraced. The 1909 Crownwood sheet letters it, which is the earliest evidence the project holds for the street, but nothing found says who or what Columbia was meant to be.",
        "attested": false,
        "categories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Recorded map: “Crownwood” (Witmer’s Subdivision of parts of Lots 2 and 7, Block 38, Hancock Survey; surveyed Nov. 1909 by Chas. Forman Jr.), M.B. 15-166",
            "url": "https://pw.lacounty.gov/smpm/landrecords/pdf/TR0015-166a.pdf"
          },
          {
            "title": "Plat of \"Crownwood\" (Dec. 10, 1909)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0015/TR0015-166a.pdf"
          }
        ],
        "maxLat": 34.0527,
        "from": "7th Street",
        "to": null
      }
    ]
  },
  "Colyton Street": {
    "name": "Colyton Street",
    "entityId": "colyton-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "absentAsOf": {
      "text": "1849 (Hutton / Ord Survey)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
    },
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Commercial Street": {
    "name": "Commercial Street",
    "orientation": "EW",
    "segments": [
      {
        "label": "part of",
        "name": "Commercial Street",
        "entityId": "commercial-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
        },
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "maxLng": -118.2364,
        "from": null,
        "to": {
          "px": [
            101,
            1101
          ]
        }
      },
      {
        "label": "part of",
        "name": "Commercial Street",
        "entityId": "commercial-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLng": -118.2364,
        "from": {
          "px": [
            101,
            1101
          ]
        },
        "to": null
      }
    ]
  },
  "Community Terrace": {
    "name": "Community Terrace",
    "entityId": "community-terrace",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": {
      "text": "by 1869",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf"
    },
    "built": "not yet researched",
    "nameHistory": [
      {
        "from": "by 1869",
        "until": "?",
        "name": "Court House Street",
        "entityId": "court-house-street",
        "formInForce": "Court House Street",
        "how": "origin",
        "origin": "labeled “Court House Street” on the 1869 Mott Tract building lots {{(source)}} — lettered on the Mott Tract sheet of March 1869, running the block between First and Temple. The name plainly points at a court house, and nothing found says which one or who chose it. The stretch survives as Community Terrace",
        "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf"
      },
      {
        "from": "?",
        "until": null,
        "name": "Community Terrace",
        "entityId": "community-terrace",
        "formInForce": "Community Terrace",
        "how": "renaming",
        "origin": "arrival on this stretch not directly documented",
        "originLink": null
      }
    ],
    "note": null,
    "attested": true,
    "absentAsOf": {
      "text": "1849 (Hutton / Ord Survey)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
    },
    "knownFraction": 0,
    "categories": [
      "unresearched",
      "renamed"
    ],
    "formerCategories": [
      "descriptive",
      "unknown"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "Map of a part of Building Lots of the Mott Tract in the City & County of Los Angeles, California (M.R. 1-489, Mar. 2, 1869; identified by map alignment, not a lot-level record)",
        "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf"
      }
    ]
  },
  "Connecticut Street": {
    "name": "Connecticut Street",
    "entityId": "connecticut-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Convention Center Drive": {
    "name": "Convention Center Drive",
    "entityId": "convention-center-drive",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Conway Place": {
    "name": "Conway Place",
    "entityId": "conway-place",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "absentAsOf": {
      "text": "1849 (Hutton / Ord Survey)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
    },
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Coronel Street": {
    "name": "Coronel Street",
    "entityId": "coronel-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "absentAsOf": {
      "text": "1849 (Hutton / Ord Survey)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
    },
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Cortez Street": {
    "name": "Cortez Street",
    "orientation": "EW",
    "segments": [
      {
        "label": "west of Laveta Terrace",
        "name": "Cortez Street",
        "entityId": "cortez-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "maxLng": -118.2595,
        "from": null,
        "to": "Laveta Terrace",
        "gapAfter": true
      },
      {
        "label": "east of Douglas (discontinuous)",
        "name": "Cortez Street",
        "entityId": "cortez-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLng": -118.2595,
        "from": "Douglas Street",
        "to": null
      }
    ]
  },
  "Cottage Home Street": {
    "name": "Cottage Home Street",
    "orientation": "NS",
    "segments": [
      {
        "label": "part of",
        "name": "Cottage Home Street",
        "entityId": "cottage-home-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLat": 34.0684,
        "from": null,
        "to": {
          "px": [
            893,
            503
          ]
        }
      },
      {
        "label": "part of",
        "name": "Cottage Home Street",
        "entityId": "cottage-home-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
        },
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "maxLat": 34.0684,
        "from": {
          "px": [
            893,
            503
          ]
        },
        "to": null
      }
    ]
  },
  "Council Street": {
    "name": "Council Street",
    "orientation": "EW",
    "segments": [
      {
        "label": "west of Belmont",
        "name": "Council Street",
        "entityId": "council-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Recorded map: Glassell's Subdivision of Lot No. 7 etc., Block 39, Hancock Survey No. 1, M.R. 6-138 (recorded Dec. 27, 1884 at request of A. Glassell)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-138.pdf"
          }
        ],
        "maxLng": -118.2631,
        "from": null,
        "to": "Belmont Avenue"
      },
      {
        "label": "Belmont to Lake Shore Terrace (original Council St)",
        "name": "Council Street",
        "entityId": "council-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "by 1884",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-138.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1884",
            "until": null,
            "name": "Council Street",
            "entityId": "council-street",
            "formInForce": "Council Street",
            "how": "origin",
            "origin": "labeled “Council Street” on the 1884 Glassell's Subdivision map {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-138.pdf"
          }
        ],
        "note": null,
        "attested": true,
        "knownFraction": 0.81,
        "categories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Recorded map: Glassell's Subdivision of Lot No. 7 etc., Block 39, Hancock Survey No. 1, M.R. 6-138 (recorded Dec. 27, 1884 at request of A. Glassell) (identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-138.pdf"
          }
        ],
        "minLng": -118.2631,
        "from": "Belmont Avenue",
        "to": null
      }
    ]
  },
  "Court Street": {
    "name": "Court Street",
    "orientation": "EW",
    "segments": [
      {
        "label": "west of Union",
        "name": "Court Street",
        "entityId": "court-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Recorded map: Glassell's Subdivision of Lot No. 7 etc., Block 39, Hancock Survey No. 1, M.R. 6-138 (recorded Dec. 27, 1884 at request of A. Glassell)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-138.pdf"
          }
        ],
        "maxLng": -118.2638,
        "from": null,
        "to": "Union Avenue"
      },
      {
        "label": "Union to Toluca (original Court St)",
        "name": "Court Street",
        "entityId": "court-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "by 1884",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-138.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1884",
            "until": null,
            "name": "Court Street",
            "entityId": "court-street",
            "formInForce": "Court Street",
            "how": "origin",
            "origin": "labeled “Court Street” on the 1884 Glassell's Subdivision map {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-138.pdf"
          }
        ],
        "note": null,
        "attested": true,
        "knownFraction": 0.81,
        "categories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Recorded map: Glassell's Subdivision of Lot No. 7 etc., Block 39, Hancock Survey No. 1, M.R. 6-138 (recorded Dec. 27, 1884 at request of A. Glassell) (identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-138.pdf"
          }
        ],
        "minLng": -118.2638,
        "maxLng": -118.2571,
        "from": "Union Avenue",
        "to": "Toluca Street"
      },
      {
        "label": "east of Toluca",
        "name": "Court Street",
        "entityId": "court-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Recorded map: Glassell's Subdivision of Lot No. 7 etc., Block 39, Hancock Survey No. 1, M.R. 6-138 (recorded Dec. 27, 1884 at request of A. Glassell)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-138.pdf"
          }
        ],
        "minLng": -118.2571,
        "from": "Toluca Street",
        "to": null
      }
    ]
  },
  "Crocker Street": {
    "name": "Crocker Street",
    "orientation": "NS",
    "segments": [
      {
        "label": "part of (Stanford Ave)",
        "name": "Crocker Street",
        "entityId": "crocker-street",
        "namedAfter": "{{Charles Crocker}} (1822–1888), Southern Pacific executive and one of the “Big Four” financiers of the Central Pacific, once this stretch was folded into Crocker Street",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Charles_Crocker",
        "planned": {
          "text": "by 1888",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1888",
            "until": "?",
            "name": "Stanford Avenue",
            "entityId": "stanford-ave",
            "formInForce": "Stanford Avenue",
            "origin": "labeled “Stanford Ave” on the 1888 Wolfskill Orchard Tract, sheet 5 (M.R. 30-13) {{(source)}} — Leland Stanford (1824–1893), president of the Southern Pacific Railroad and governor of California 1862–1863",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
          },
          {
            "from": "?",
            "until": null,
            "name": "Crocker Street",
            "entityId": "crocker-street",
            "formInForce": "Crocker Street",
            "how": "renaming",
            "origin": "arrival on this stretch not directly documented",
            "originLink": null
          }
        ],
        "note": "The third of the Southern Pacific names on Joseph Wolfskill's subdivided orchard, after Towne and Stanford — though this one arrived later than the other two, when the street platted “Stanford Avenue” in 1887 gave that name up and took Crocker's instead.",
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "knownFraction": 0,
        "categories": [
          "person",
          "renamed"
        ],
        "formerCategories": [
          "person",
          "governor"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Towne Avenue (recounts the Crocker/Stanford street swap)",
            "url": "https://lastreetnames.com/street/towne-avenue-dtla/"
          },
          {
            "title": "Map of the Wolfskill Orchard Tract situated in the City of Los Angeles Cal. (sheet 5, M.R. 30-13, Jan. 11, 1888; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
          }
        ],
        "minLat": 34.0454,
        "from": null,
        "to": {
          "px": [
            863,
            947
          ]
        }
      },
      {
        "label": "part of (Stanford Ave)",
        "name": "Crocker Street",
        "entityId": "crocker-street",
        "namedAfter": "{{Charles Crocker}} (1822–1888), Southern Pacific executive and one of the “Big Four” financiers of the Central Pacific, once this stretch was folded into Crocker Street",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Charles_Crocker",
        "planned": {
          "text": "1888",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "1888",
            "until": "?",
            "name": "Stanford Avenue",
            "entityId": "stanford-ave",
            "formInForce": "Stanford Avenue",
            "how": "origin",
            "origin": "labeled “Stanford Ave” on the 1888 Wolfskill Orchard Tract (sheets 2–5) {{(source)}} — Leland Stanford (1824–1893), president of the Southern Pacific Railroad and governor of California 1862–1863",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
          },
          {
            "from": "?",
            "until": null,
            "name": "Crocker Street",
            "entityId": "crocker-street",
            "formInForce": "Crocker Street",
            "how": "renaming",
            "origin": "arrival on this stretch not directly documented",
            "originLink": null
          }
        ],
        "note": "The third of the Southern Pacific names on Joseph Wolfskill's subdivided orchard, after Towne and Stanford — though this one arrived later than the other two, when the street platted “Stanford Avenue” in 1887 gave that name up and took Crocker's instead.",
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "knownFraction": 0.22,
        "categories": [
          "person",
          "renamed"
        ],
        "formerCategories": [
          "person",
          "governor"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Towne Avenue (recounts the Crocker/Stanford street swap)",
            "url": "https://lastreetnames.com/street/towne-avenue-dtla/"
          },
          {
            "title": "Map of the Wolfskill Orchard Tract situated in the City of Los Angeles Cal. (sheet 2, M.R. 30-10, Jan. 11, 1888; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
          }
        ],
        "minLat": 34.0401,
        "maxLat": 34.0454,
        "from": {
          "px": [
            863,
            947
          ]
        },
        "to": {
          "px": [
            527,
            293
          ]
        }
      },
      {
        "label": "part of",
        "name": "Crocker Street",
        "entityId": "crocker-street",
        "namedAfter": "{{Charles Crocker}} (1822–1888), Southern Pacific executive and one of the “Big Four” financiers of the Central Pacific — how and when this stretch joined Crocker Street is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Charles_Crocker",
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "The third of the Southern Pacific names on Joseph Wolfskill's subdivided orchard, after Towne and Stanford — though this one arrived later than the other two, when the street platted “Stanford Avenue” in 1887 gave that name up and took Crocker's instead.",
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "categories": [
          "person"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Towne Avenue (recounts the Crocker/Stanford street swap)",
            "url": "https://lastreetnames.com/street/towne-avenue-dtla/"
          }
        ],
        "minLat": 34.0396,
        "maxLat": 34.0401,
        "from": {
          "px": [
            527,
            293
          ]
        },
        "to": {
          "px": [
            62,
            587
          ]
        }
      },
      {
        "label": "beyond 8th",
        "name": "Crocker Street",
        "entityId": "crocker-street",
        "namedAfter": "{{Charles Crocker}} (1822–1888), Southern Pacific executive and one of the “Big Four” financiers of the Central Pacific — how and when this stretch joined Crocker Street is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Charles_Crocker",
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "The third of the Southern Pacific names on Joseph Wolfskill's subdivided orchard, after Towne and Stanford — though this one arrived later than the other two, when the street platted “Stanford Avenue” in 1887 gave that name up and took Crocker's instead.",
        "attested": false,
        "categories": [
          "person"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Towne Avenue (recounts the Crocker/Stanford street swap)",
            "url": "https://lastreetnames.com/street/towne-avenue-dtla/"
          }
        ],
        "minLat": 34.0378,
        "maxLat": 34.0396,
        "from": {
          "px": [
            62,
            587
          ]
        },
        "to": "8th Street"
      },
      {
        "label": "beyond 8th (Clark Ave)",
        "name": "Crocker Street",
        "entityId": "crocker-street",
        "namedAfter": "{{Charles Crocker}} (1822–1888), Southern Pacific executive and one of the “Big Four” financiers of the Central Pacific, once this stretch was folded into Crocker Street",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Charles_Crocker",
        "planned": {
          "text": "by 1893",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-065.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1893",
            "until": "?",
            "name": "Clark Avenue",
            "entityId": "clark-ave",
            "formInForce": "Clark Avenue",
            "how": "origin",
            "origin": "labeled “Clark Ave.” on the 1893 Clark and Bryan Tract {{(source)}} — Wesley Clark, senior partner in the Los Angeles real-estate firm of Clark & Bryan, who owned this tract with Elden P. Bryan",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-065.pdf"
          },
          {
            "from": "?",
            "until": null,
            "name": "Crocker Street",
            "entityId": "crocker-street",
            "formInForce": "Crocker Street",
            "how": "renaming",
            "origin": "arrival on this stretch not directly documented",
            "originLink": null
          }
        ],
        "note": "The third of the Southern Pacific names on Joseph Wolfskill's subdivided orchard, after Towne and Stanford — though this one arrived later than the other two, when the street platted “Stanford Avenue” in 1887 gave that name up and took Crocker's instead.",
        "attested": true,
        "knownFraction": 0,
        "categories": [
          "person",
          "renamed"
        ],
        "formerCategories": [
          "person"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Towne Avenue (recounts the Crocker/Stanford street swap)",
            "url": "https://lastreetnames.com/street/towne-avenue-dtla/"
          },
          {
            "title": "Map of the Clark and Bryan Tract, Los Angeles City, Calif. (M.R. 53-65, Nov. 1893; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-065.pdf"
          },
          {
            "title": "Homestead Museum: “No Place Like Home: The Elden P. Bryan Residence” (on the firm of Clark & Bryan)",
            "url": "https://homesteadmuseum.blog/2016/12/06/no-place-like-home-the-elden-p-bryan-residence-los-angeles-ca-1907/"
          }
        ],
        "minLat": 34.0345,
        "maxLat": 34.0378,
        "from": "8th Street",
        "to": {
          "px": [
            778,
            1341
          ]
        }
      },
      {
        "label": "part of",
        "name": "Crocker Street",
        "entityId": "crocker-street",
        "namedAfter": "{{Charles Crocker}} (1822–1888), Southern Pacific executive and one of the “Big Four” financiers of the Central Pacific — how and when this stretch joined Crocker Street is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Charles_Crocker",
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "The third of the Southern Pacific names on Joseph Wolfskill's subdivided orchard, after Towne and Stanford — though this one arrived later than the other two, when the street platted “Stanford Avenue” in 1887 gave that name up and took Crocker's instead.",
        "attested": false,
        "categories": [
          "person"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Towne Avenue (recounts the Crocker/Stanford street swap)",
            "url": "https://lastreetnames.com/street/towne-avenue-dtla/"
          }
        ],
        "maxLat": 34.0345,
        "from": {
          "px": [
            778,
            1341
          ]
        },
        "to": null
      }
    ]
  },
  "Crown Hill Avenue": {
    "name": "Crown Hill Avenue",
    "orientation": "NS",
    "segments": [
      {
        "label": "part of",
        "name": "Crown Hill Avenue",
        "entityId": "crown-hill-ave",
        "namedAfter": "Not documented, but plainly {{Crown Hill}} itself — how and when this stretch joined Crown Hill Avenue is not yet researched",
        "namedAfterLink": "https://lastreetnames.com/street/witmer-street/",
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "place"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Recorded map: “Crownwood” (Witmer’s Subdivision of parts of Lots 2 and 7, Block 38, Hancock Survey; surveyed Nov. 1909 by Chas. Forman Jr.), M.B. 15-166",
            "url": "https://pw.lacounty.gov/smpm/landrecords/pdf/TR0015-166a.pdf"
          },
          {
            "title": "Plat of \"Crownwood\" (Dec. 10, 1909)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0015/TR0015-166a.pdf"
          }
        ],
        "minLat": 34.0599,
        "from": null,
        "to": {
          "px": [
            91,
            1516
          ]
        }
      },
      {
        "label": "beyond 3rd",
        "name": "Crown Hill Avenue",
        "entityId": "crown-hill-ave",
        "namedAfter": "Not documented, but plainly {{Crown Hill}} itself — how and when this stretch joined Crown Hill Avenue is not yet researched",
        "namedAfterLink": "https://lastreetnames.com/street/witmer-street/",
        "planned": {
          "text": "by 1909",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0015/TR0015-166a.pdf"
        },
        "built": "not yet researched",
        "note": null,
        "attested": true,
        "knownFraction": 0.66,
        "categories": [
          "place"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Recorded map: “Crownwood” (Witmer’s Subdivision of parts of Lots 2 and 7, Block 38, Hancock Survey; surveyed Nov. 1909 by Chas. Forman Jr.), M.B. 15-166",
            "url": "https://pw.lacounty.gov/smpm/landrecords/pdf/TR0015-166a.pdf"
          },
          {
            "title": "Plat of \"Crownwood\" (Dec. 10, 1909; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0015/TR0015-166a.pdf"
          }
        ],
        "maxLat": 34.0599,
        "from": {
          "px": [
            91,
            1516
          ]
        },
        "to": null
      }
    ]
  },
  "Custer Avenue": {
    "name": "Custer Avenue",
    "entityId": "custer-avenue",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Dawson Street": {
    "name": "Dawson Street",
    "entityId": "dawson-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Decatur Street": {
    "name": "Decatur Street",
    "entityId": "decatur-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Delong Street": {
    "name": "Delong Street",
    "entityId": "delong-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Dewap Road": {
    "name": "Dewap Road",
    "entityId": "dewap-road",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Diamond Street": {
    "name": "Diamond Street",
    "entityId": "diamond-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unknown"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "Recorded map: Glassell's Subdivision of Lot No. 7 etc., Block 39, Hancock Survey No. 1, M.R. 6-138 (recorded Dec. 27, 1884 at request of A. Glassell)",
        "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-138.pdf"
      }
    ]
  },
  "Douglas Street": {
    "name": "Douglas Street",
    "orientation": "NS",
    "segments": [
      {
        "label": "part of",
        "name": "Douglas Street",
        "entityId": "douglas-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLat": 34.0651,
        "from": null,
        "to": {
          "px": [
            1389,
            83
          ]
        }
      },
      {
        "label": "beyond Colton (Waters St)",
        "name": "Douglas Street",
        "entityId": "douglas-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "by 1884",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-138.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1884",
            "until": "?",
            "name": "Waters Street",
            "entityId": "waters-street",
            "formInForce": "Waters Street",
            "how": "origin",
            "origin": "labeled “Waters Street” on the 1884 Glassell's Subdivision map {{(source)}} — no namesake documented",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-138.pdf"
          },
          {
            "from": "?",
            "until": null,
            "name": "Douglas Street",
            "entityId": "douglas-street",
            "formInForce": "Douglas Street",
            "how": "renaming",
            "origin": "arrival on this stretch not directly documented",
            "originLink": null
          }
        ],
        "note": null,
        "attested": true,
        "absentAsOf": {
          "text": "1884 (Glassell's Subdivision map)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-138.pdf"
        },
        "knownFraction": 0.19,
        "categories": [
          "unresearched",
          "renamed"
        ],
        "formerCategories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Recorded map: Glassell's Subdivision of Lot No. 7 etc., Block 39, Hancock Survey No. 1, M.R. 6-138 (recorded Dec. 27, 1884 at request of A. Glassell) (identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-138.pdf"
          }
        ],
        "minLat": 34.0639,
        "maxLat": 34.0651,
        "from": {
          "px": [
            1389,
            83
          ]
        },
        "to": "Colton Street"
      },
      {
        "label": "south of Colton",
        "name": "Douglas Street",
        "entityId": "douglas-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "maxLat": 34.0639,
        "from": "Colton Street",
        "to": null
      }
    ]
  },
  "Doyle Place": {
    "name": "Doyle Place",
    "entityId": "doyle-place",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "absentAsOf": {
      "text": "1849 (Hutton / Ord Survey)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
    },
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Ducommun Street": {
    "name": "Ducommun Street",
    "entityId": "ducommun-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Edgeware Road": {
    "name": "Edgeware Road",
    "orientation": "NS",
    "segments": [
      {
        "label": "north of Colton (discontinuous)",
        "name": "Edgeware Road",
        "entityId": "edgeware-road",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLat": 34.0609,
        "from": null,
        "to": "Colton Street",
        "gapAfter": true
      },
      {
        "label": "south of 1st",
        "name": "Edgeware Road",
        "entityId": "edgeware-road",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "maxLat": 34.0609,
        "from": "1st Street",
        "to": null
      }
    ]
  },
  "Elmyra Street": {
    "name": "Elmyra Street",
    "entityId": "elmyra-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "absentAsOf": {
      "text": "1849 (Hutton / Ord Survey)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
    },
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Emerald Drive": {
    "name": "Emerald Drive",
    "entityId": "emerald-drive",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": {
      "text": "by 1909",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0015/TR0015-166a.pdf"
    },
    "built": "not yet researched",
    "nameHistory": [
      {
        "from": "by 1909",
        "until": "?",
        "name": "Farmer Street",
        "entityId": "farmer",
        "formInForce": "Farmer Street",
        "how": "origin",
        "origin": "labeled “FARMER ST.” on the 1909 Crownwood {{(source)}} — lettered on the 1909 Crownwood sheet along ground that is now Emerald Drive. Nothing found says who or what Farmer was",
        "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0015/TR0015-166a.pdf"
      },
      {
        "from": "?",
        "until": null,
        "name": "Emerald Drive",
        "entityId": "emerald-drive",
        "formInForce": "Emerald Drive",
        "how": "renaming",
        "origin": "arrival on this stretch not directly documented",
        "originLink": null
      }
    ],
    "note": null,
    "attested": true,
    "knownFraction": 0,
    "categories": [
      "unresearched",
      "renamed"
    ],
    "formerCategories": [
      "unknown"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "Plat of \"Crownwood\" (Dec. 10, 1909; identified by map alignment, not a lot-level record)",
        "url": "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0015/TR0015-166a.pdf"
      },
      {
        "title": "Recorded map: “Crownwood” (Witmer’s Subdivision), M.B. 15-166 (surveyed Nov. 1909)",
        "url": "https://pw.lacounty.gov/smpm/landrecords/pdf/TR0015-166a.pdf"
      }
    ]
  },
  "Emerald Street": {
    "name": "Emerald Street",
    "entityId": "emerald-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Everett Street": {
    "name": "Everett Street",
    "entityId": "everett-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Factory Place": {
    "name": "Factory Place",
    "entityId": "factory-place",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "absentAsOf": {
      "text": "1849 (Hutton / Ord Survey)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
    },
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Figueroa Street": {
    "name": "Figueroa Street",
    "orientation": "NS",
    "segments": [
      {
        "label": "part of",
        "name": "Figueroa Street",
        "entityId": "figueroa-gov",
        "namedAfter": "{{José Figueroa (1792–1835)}}, governor of Alta California 1833–1835 — how and when this stretch joined Figueroa Street is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Jos%C3%A9_Figueroa",
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "person",
          "governor"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Figueroa Street",
            "url": "https://lastreetnames.com/street/figueroa-street/"
          },
          {
            "title": "Map of the Cameron Tract, Los Angeles, Los Angeles Co., Cal. (M.R. 7-21, Oct. 1885)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR007/MR007-021.pdf"
          }
        ],
        "minLat": 34.0578,
        "from": null,
        "to": {
          "px": [
            185,
            745
          ]
        }
      },
      {
        "label": "part of (Pearl St)",
        "name": "Figueroa Street",
        "entityId": "figueroa-gov",
        "namedAfter": "{{José Figueroa (1792–1835)}}, governor of Alta California 1833–1835, once this stretch was folded into Figueroa Street",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Jos%C3%A9_Figueroa",
        "planned": {
          "text": "by 1883",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-307.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1883",
            "until": "Feb. 1897",
            "name": "Pearl Street",
            "entityId": "pearl",
            "formInForce": "Pearl Street",
            "origin": "labeled “PEARL STREET” on the 1883 Block W, Mott Tract {{(source)}} — No namesake documented in the 1874 council report; in 1897 ex-Mayor J. R. Toberman claimed the naming as his own",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-307.pdf"
          },
          {
            "from": "Feb. 1897",
            "until": null,
            "name": "Figueroa Street",
            "entityId": "figueroa-gov",
            "formInForce": "Figueroa Street",
            "how": "transfer",
            "origin": "the name arrived from another roadway, renamed per Ord. 4093, the Feb. 1897 citywide renaming {{(source)}}",
            "originLink": "https://cdnc.ucr.edu/?a=d&d=LAH18970224.2.20"
          }
        ],
        "note": null,
        "attested": true,
        "knownFraction": 0.81,
        "categories": [
          "person",
          "governor",
          "renamed"
        ],
        "formerCategories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Figueroa Street",
            "url": "https://lastreetnames.com/street/figueroa-street/"
          },
          {
            "title": "Map of Block W Mott Tract as subdivided by E. T. Wright at request of M. L. Wicks in Los Angeles City (M.R. 5-307, June 25, 1883; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-307.pdf"
          },
          {
            "title": "Ordinance No. 4093 (N.S.), the Feb. 1897 citywide street renaming (adopted Feb. 23, signed Feb. 26, 1897; Ordinance Book IV p. 337 — full text pending; changes as reported in the Los Angeles Herald and the council minutes)",
            "url": "https://cdnc.ucr.edu/?a=d&d=LAH18970224.2.20"
          },
          {
            "title": "Los Angeles Herald, “City and Suburbs,” Feb. 27, 1874 (council renames Grasshopper St → Pearl St)",
            "url": "https://cdnc.ucr.edu/?a=d&d=LAH18740227.2.10"
          },
          {
            "title": "Map of the Cameron Tract, Los Angeles, Los Angeles Co., Cal. (M.R. 7-21, Oct. 1885)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR007/MR007-021.pdf"
          },
          {
            "title": "Los Angeles Herald, “A Storm of Words” (Toberman's claim), Feb. 19, 1897",
            "url": "https://cdnc.ucr.edu/?a=d&d=LAH18970219.2.24"
          }
        ],
        "minLat": 34.0564,
        "maxLat": 34.0578,
        "from": {
          "px": [
            185,
            745
          ]
        },
        "to": {
          "px": [
            1158,
            777
          ]
        }
      },
      {
        "label": "part of",
        "name": "Figueroa Street",
        "entityId": "figueroa-gov",
        "namedAfter": "{{José Figueroa (1792–1835)}}, governor of Alta California 1833–1835 — how and when this stretch joined Figueroa Street is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Jos%C3%A9_Figueroa",
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "person",
          "governor"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Figueroa Street",
            "url": "https://lastreetnames.com/street/figueroa-street/"
          },
          {
            "title": "Map of the Cameron Tract, Los Angeles, Los Angeles Co., Cal. (M.R. 7-21, Oct. 1885)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR007/MR007-021.pdf"
          }
        ],
        "minLat": 34.054,
        "maxLat": 34.0564,
        "from": {
          "px": [
            1158,
            777
          ]
        },
        "to": {
          "px": [
            869,
            843
          ]
        }
      },
      {
        "label": "part of",
        "name": "Figueroa Street",
        "entityId": "figueroa-gov",
        "namedAfter": "{{José Figueroa (1792–1835)}}, governor of Alta California 1833–1835 — how and when this stretch joined Figueroa Street is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Jos%C3%A9_Figueroa",
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
        },
        "categories": [
          "person",
          "governor"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Figueroa Street",
            "url": "https://lastreetnames.com/street/figueroa-street/"
          },
          {
            "title": "Map of the Cameron Tract, Los Angeles, Los Angeles Co., Cal. (M.R. 7-21, Oct. 1885)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR007/MR007-021.pdf"
          }
        ],
        "minLat": 34.049,
        "maxLat": 34.054,
        "from": {
          "px": [
            869,
            843
          ]
        },
        "to": {
          "px": [
            455,
            845
          ]
        }
      },
      {
        "label": "part of (Pearl St)",
        "name": "Figueroa Street",
        "entityId": "figueroa-gov",
        "namedAfter": "{{José Figueroa (1792–1835)}}, governor of Alta California 1833–1835, once this stretch was folded into Figueroa Street",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Jos%C3%A9_Figueroa",
        "planned": {
          "text": "1849",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "1849",
            "until": "Feb. 1874",
            "name": "Grasshopper Street",
            "entityId": "chapules",
            "formInForce": "Grasshopper Street",
            "how": "origin",
            "origin": "labeled “CALLE DE LAS CHAPULES”, “GRASSHOPPER ST”, “GRASSHOPPER ST.” and “CALLE DE LAS CHAPULAS” on the 1849 Hutton / Ord Survey {{(source)}} — The insect: grasshoppers crossing this line from the western plains doomed the grape harvest",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          },
          {
            "from": "Feb. 1874",
            "until": "Feb. 1897",
            "name": "Pearl Street",
            "entityId": "pearl",
            "formInForce": "Pearl Street",
            "how": "origin",
            "origin": "renamed per the Feb. 1874 council action (Herald report) {{(source)}} — No namesake documented in the 1874 council report; in 1897 ex-Mayor J. R. Toberman claimed the naming as his own",
            "originLink": "https://cdnc.ucr.edu/?a=d&d=LAH18740227.2.10"
          },
          {
            "from": "Feb. 1897",
            "until": null,
            "name": "Figueroa Street",
            "entityId": "figueroa-gov",
            "formInForce": "Figueroa Street",
            "how": "transfer",
            "origin": "the name arrived from another roadway, renamed per Ord. 4093, the Feb. 1897 citywide renaming {{(source)}}",
            "originLink": "https://cdnc.ucr.edu/?a=d&d=LAH18970224.2.20"
          }
        ],
        "note": null,
        "attested": true,
        "knownFraction": 1,
        "categories": [
          "person",
          "governor",
          "renamed"
        ],
        "formerCategories": [
          "nature",
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Figueroa Street",
            "url": "https://lastreetnames.com/street/figueroa-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          },
          {
            "title": "Los Angeles Herald, “City and Suburbs,” Feb. 27, 1874 (council renames Grasshopper St → Pearl St)",
            "url": "https://cdnc.ucr.edu/?a=d&d=LAH18740227.2.10"
          },
          {
            "title": "“An Ordinance Changing the names of Certain Streets in the City of Los Angeles” — Los Angeles Common Council, adopted Feb. 26, 1874 (council minutes, ledger p. 621)",
            "url": "https://clerkapps.lacity.org/oldcfidocs/"
          },
          {
            "title": "Blocks 73 & 72 of Ord's Survey belonging to W. M. Williams (M.R. 3-32, Apr. 29, 1875; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-032.pdf"
          },
          {
            "title": "Ordinance No. 4093 (N.S.), the Feb. 1897 citywide street renaming (adopted Feb. 23, signed Feb. 26, 1897; Ordinance Book IV p. 337 — full text pending; changes as reported in the Los Angeles Herald and the council minutes)",
            "url": "https://cdnc.ucr.edu/?a=d&d=LAH18970224.2.20"
          },
          {
            "title": "Map of the Cameron Tract, Los Angeles, Los Angeles Co., Cal. (M.R. 7-21, Oct. 1885)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR007/MR007-021.pdf"
          },
          {
            "title": "Los Angeles Herald, “A Storm of Words” (Toberman's claim), Feb. 19, 1897",
            "url": "https://cdnc.ucr.edu/?a=d&d=LAH18970219.2.24"
          }
        ],
        "minLat": 34.0417,
        "maxLat": 34.049,
        "from": {
          "px": [
            455,
            845
          ]
        },
        "to": {
          "px": [
            468,
            888
          ]
        }
      },
      {
        "label": "beyond Pico",
        "name": "Figueroa Street",
        "entityId": "figueroa-gov",
        "namedAfter": "{{José Figueroa (1792–1835)}}, governor of Alta California 1833–1835 — how and when this stretch joined Figueroa Street is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Jos%C3%A9_Figueroa",
        "planned": {
          "text": "by 1885",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR007/MR007-021.pdf"
        },
        "built": "not yet researched",
        "note": null,
        "attested": true,
        "knownFraction": 0.98,
        "categories": [
          "person",
          "governor"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Figueroa Street",
            "url": "https://lastreetnames.com/street/figueroa-street/"
          },
          {
            "title": "Map of the Cameron Tract, Los Angeles, Los Angeles Co., Cal. (M.R. 7-21, Oct. 1885; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR007/MR007-021.pdf"
          }
        ],
        "minLat": 34.0406,
        "maxLat": 34.0417,
        "from": {
          "px": [
            468,
            888
          ]
        },
        "to": "Pico Boulevard"
      },
      {
        "label": "beyond Pico (original Figueroa St)",
        "name": "Figueroa Street",
        "entityId": "figueroa-gov",
        "namedAfter": "{{José Figueroa (1792–1835)}}, governor of Alta California 1833–1835",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Jos%C3%A9_Figueroa",
        "planned": {
          "text": "by 1885",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR007/MR007-021.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1885",
            "until": null,
            "name": "Figueroa Street",
            "entityId": "figueroa-gov",
            "formInForce": "Figueroa Street",
            "how": "origin",
            "origin": "labeled “Figueroa St” on the 1885 Cameron Tract {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR007/MR007-021.pdf"
          }
        ],
        "note": null,
        "attested": true,
        "knownFraction": 0.8,
        "categories": [
          "person",
          "governor"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Figueroa Street",
            "url": "https://lastreetnames.com/street/figueroa-street/"
          },
          {
            "title": "Map of the Cameron Tract, Los Angeles, Los Angeles Co., Cal. (M.R. 7-21, Oct. 1885; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR007/MR007-021.pdf"
          }
        ],
        "minLat": 34.0393,
        "maxLat": 34.0406,
        "from": "Pico Boulevard",
        "to": {
          "px": [
            311,
            850
          ]
        }
      },
      {
        "label": "part of",
        "name": "Figueroa Street",
        "entityId": "figueroa-gov",
        "namedAfter": "{{José Figueroa (1792–1835)}}, governor of Alta California 1833–1835 — how and when this stretch joined Figueroa Street is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Jos%C3%A9_Figueroa",
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "person",
          "governor"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Figueroa Street",
            "url": "https://lastreetnames.com/street/figueroa-street/"
          },
          {
            "title": "Map of the Cameron Tract, Los Angeles, Los Angeles Co., Cal. (M.R. 7-21, Oct. 1885)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR007/MR007-021.pdf"
          }
        ],
        "maxLat": 34.0393,
        "from": {
          "px": [
            311,
            850
          ]
        },
        "to": null
      }
    ]
  },
  "Figueroa Terrace": {
    "name": "Figueroa Terrace",
    "entityId": "figueroa-terrace",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Firmin Street": {
    "name": "Firmin Street",
    "entityId": "firmin-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Flower Street": {
    "name": "Flower Street",
    "orientation": "NS",
    "segments": [
      {
        "label": "part of",
        "name": "Flower Street",
        "entityId": "flower",
        "namedAfter": "Supposedly the blossom-covered hills behind it — how and when this stretch joined Flower Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1869 (Mott Tract building lots)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf"
        },
        "categories": [
          "nature"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Flower Street",
            "url": "https://lastreetnames.com/street/flower-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          }
        ],
        "minLat": 34.0549,
        "from": null,
        "to": {
          "px": [
            1000,
            395
          ]
        }
      },
      {
        "label": "part of",
        "name": "Flower Street",
        "entityId": "flower",
        "namedAfter": "Supposedly the blossom-covered hills behind it — how and when this stretch joined Flower Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "nature"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Flower Street",
            "url": "https://lastreetnames.com/street/flower-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          }
        ],
        "minLat": 34.0533,
        "maxLat": 34.0549,
        "from": {
          "px": [
            1000,
            395
          ]
        },
        "to": {
          "px": [
            873,
            918
          ]
        }
      },
      {
        "label": "beyond 6th",
        "name": "Flower Street",
        "entityId": "flower",
        "namedAfter": "Supposedly the blossom-covered hills behind it — how and when this stretch joined Flower Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
        },
        "categories": [
          "nature"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Flower Street",
            "url": "https://lastreetnames.com/street/flower-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          }
        ],
        "minLat": 34.0501,
        "maxLat": 34.0533,
        "from": {
          "px": [
            873,
            918
          ]
        },
        "to": "6th Street"
      },
      {
        "label": "beyond 6th (original Flower St)",
        "name": "Flower Street",
        "entityId": "flower",
        "namedAfter": "Supposedly the blossom-covered hills behind it",
        "namedAfterLink": null,
        "planned": {
          "text": "1849",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "1849",
            "until": null,
            "name": "Flower Street",
            "entityId": "flower",
            "formInForce": "Flower Street",
            "how": "origin",
            "origin": "labeled “CALLE DE LAS FLORES”, “FLOWER” and “FLOWER STREET” on the 1849 Hutton / Ord Survey and the 1875 Blocks 73 & 72 of Ord's Survey {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          }
        ],
        "note": null,
        "attested": true,
        "knownFraction": 1,
        "categories": [
          "nature"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Flower Street",
            "url": "https://lastreetnames.com/street/flower-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          },
          {
            "title": "Blocks 73 & 72 of Ord's Survey belonging to W. M. Williams (M.R. 3-32, Apr. 29, 1875; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-032.pdf"
          },
          {
            "title": "Blocks 73 & 72 of Ord's Survey belonging to W. M. Williams (M.R. 3-33, Apr. 29, 1875; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-033.pdf"
          }
        ],
        "minLat": 34.0411,
        "maxLat": 34.0501,
        "from": "6th Street",
        "to": {
          "px": [
            470,
            962
          ]
        }
      },
      {
        "label": "part of",
        "name": "Flower Street",
        "entityId": "flower",
        "namedAfter": "Supposedly the blossom-covered hills behind it — how and when this stretch joined Flower Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "nature"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Flower Street",
            "url": "https://lastreetnames.com/street/flower-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          }
        ],
        "minLat": 34.0405,
        "maxLat": 34.0411,
        "from": {
          "px": [
            470,
            962
          ]
        },
        "to": {
          "px": [
            591,
            373
          ]
        }
      },
      {
        "label": "part of",
        "name": "Flower Street",
        "entityId": "flower",
        "namedAfter": "Supposedly the blossom-covered hills behind it — how and when this stretch joined Flower Street is not yet researched",
        "namedAfterLink": null,
        "planned": {
          "text": "by 1885",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR007/MR007-021.pdf"
        },
        "built": "not yet researched",
        "note": null,
        "attested": true,
        "knownFraction": 0.8,
        "categories": [
          "nature"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Flower Street",
            "url": "https://lastreetnames.com/street/flower-street/"
          },
          {
            "title": "Map of the Cameron Tract, Los Angeles, Los Angeles Co., Cal. (M.R. 7-21, Oct. 1885; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR007/MR007-021.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          }
        ],
        "minLat": 34.0387,
        "maxLat": 34.0405,
        "from": {
          "px": [
            591,
            373
          ]
        },
        "to": {
          "px": [
            576,
            845
          ]
        }
      },
      {
        "label": "part of",
        "name": "Flower Street",
        "entityId": "flower",
        "namedAfter": "Supposedly the blossom-covered hills behind it — how and when this stretch joined Flower Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "nature"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Flower Street",
            "url": "https://lastreetnames.com/street/flower-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          }
        ],
        "maxLat": 34.0387,
        "from": {
          "px": [
            576,
            845
          ]
        },
        "to": null
      }
    ]
  },
  "Fort Moore Place": {
    "name": "Fort Moore Place",
    "orientation": "EW",
    "segments": [
      {
        "label": "part of",
        "name": "Fort Moore Place",
        "entityId": "fort-moore-place",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "maxLng": -118.2431,
        "from": null,
        "to": {
          "px": [
            770,
            1189
          ]
        }
      },
      {
        "label": "part of",
        "name": "Fort Moore Place",
        "entityId": "fort-moore-place",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
        },
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLng": -118.2431,
        "from": {
          "px": [
            770,
            1189
          ]
        },
        "to": null
      }
    ]
  },
  "Frances K. Hashimoto Plaza": {
    "name": "Frances K. Hashimoto Plaza",
    "entityId": "frances-k-hashimoto-plaza",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "absentAsOf": {
      "text": "1849 (Hutton / Ord Survey)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
    },
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Francisco Street": {
    "name": "Francisco Street",
    "entityId": "francisco-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Fremont Avenue": {
    "name": "Fremont Avenue",
    "orientation": "NS",
    "segments": [
      {
        "label": "north of 1st (discontinuous)",
        "name": "Fremont Avenue",
        "entityId": "fremont-avenue",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLat": 34.0527,
        "from": null,
        "to": "1st Street",
        "gapAfter": true
      },
      {
        "label": "south of 5th",
        "name": "Fremont Avenue",
        "entityId": "fremont-avenue",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "maxLat": 34.0527,
        "from": "5th Street",
        "to": null
      }
    ]
  },
  "Gabriel Garcia Marquez Street": {
    "name": "Gabriel Garcia Marquez Street",
    "entityId": "gabriel-garcia-marquez-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Garey Street": {
    "name": "Garey Street",
    "orientation": "NS",
    "segments": [
      {
        "label": "north of Temple (discontinuous)",
        "name": "Garey Street",
        "entityId": "garey",
        "namedAfter": "Almost certainly {{Thomas Andrew Garey (1830–1909)}}, citrus nurseryman and co-founder of Pomona — how and when this stretch joined Garey Street is not yet researched",
        "namedAfterLink": "https://www.findagrave.com/memorial/87759308/thomas-andrew-garey",
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "person",
          "alive"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Garey Street",
            "url": "https://lastreetnames.com/street/garey-street/"
          },
          {
            "title": "Map of the Thomas Tract, being a portion of the Johnson and Mott Tract (M.R. 3-60, May 19, 1875)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-060.pdf"
          }
        ],
        "minLat": 34.0472,
        "from": null,
        "to": "Temple Street",
        "gapAfter": true
      },
      {
        "label": "2nd to 3rd (original Garey St)",
        "name": "Garey Street",
        "entityId": "garey",
        "namedAfter": "Almost certainly {{Thomas Andrew Garey (1830–1909)}}, citrus nurseryman and co-founder of Pomona — his was the only Garey family in town when the street was named",
        "namedAfterLink": "https://www.findagrave.com/memorial/87759308/thomas-andrew-garey",
        "planned": {
          "text": "by 1875",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-060.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1875",
            "until": null,
            "name": "Garey Street",
            "entityId": "garey",
            "formInForce": "Garey Street",
            "how": "origin",
            "origin": "labeled “GAREY STREET” on the 1875 Thomas Tract {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-060.pdf"
          }
        ],
        "note": null,
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "knownFraction": 0.86,
        "categories": [
          "person",
          "alive"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Garey Street",
            "url": "https://lastreetnames.com/street/garey-street/"
          },
          {
            "title": "Map of the Thomas Tract, being a portion of the Johnson and Mott Tract (M.R. 3-60, May 19, 1875; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-060.pdf"
          }
        ],
        "maxLat": 34.0472,
        "from": "2nd Street",
        "to": null
      }
    ]
  },
  "Garland Avenue": {
    "name": "Garland Avenue",
    "entityId": "garland-avenue",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "General Thaddeus Kosciuszko Way": {
    "name": "General Thaddeus Kosciuszko Way",
    "entityId": "general-thaddeus-kosciuszko-way",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "absentAsOf": {
      "text": "1869 (Mott Tract building lots)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf"
    },
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Georgia Street": {
    "name": "Georgia Street",
    "orientation": "NS",
    "segments": [
      {
        "label": "north of Chick Hearn Court (discontinuous)",
        "name": "Georgia Street",
        "entityId": null,
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLat": 34.0388,
        "from": null,
        "to": "Chick Hearn Court",
        "gapAfter": true
      },
      {
        "label": "south of 15th Drive",
        "name": "Georgia Street",
        "entityId": null,
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "maxLat": 34.0388,
        "from": "15th Drive",
        "to": null
      }
    ]
  },
  "Gin Ling Way": {
    "name": "Gin Ling Way",
    "entityId": "gin-ling-way",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "absentAsOf": {
      "text": "1849 (Hutton / Ord Survey)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
    },
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Gladys Avenue": {
    "name": "Gladys Avenue",
    "orientation": "NS",
    "segments": [
      {
        "label": "part of (original Gladys Ave)",
        "name": "Gladys Avenue",
        "entityId": "gladys-ave",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "1888",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "1888",
            "until": null,
            "name": "Gladys Avenue",
            "entityId": "gladys-ave",
            "formInForce": "Gladys Avenue",
            "how": "origin",
            "origin": "labeled “Gladys Ave” on the 1888 Wolfskill Orchard Tract (sheets 2–4) {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
          }
        ],
        "note": "The next street over from Ruth Avenue, and part of the same run of women's names that continues south across the Sabichi family's land as Agatha Street — Agatha Sabichi's mother was a daughter of the pioneer settler William Wolfskill. No source names a Gladys in the family or among the subdividers. The street runs through the heart of Skid Row today; Gladys Park sits at 6th and Gladys.",
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "knownFraction": 1,
        "categories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Recorded map: H.C. Halfpenny's Resubdivision of a part of Block 24 of the Wolfskill Orchard Tract, M.R. 54-84 (recorded Feb. 28, 1895) — Gladys and Ruth named as the block's bounding streets",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR054/MR054-084.pdf"
          },
          {
            "title": "Recorded map: Wilde and Strong's Subdivision of the Frank Sabichi Tract, M.R. 66-64 (recorded Sept. 21, 1897) — Gladys continuing south alongside Ruth, Towne and Crocker",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR066/MR066-064.pdf"
          },
          {
            "title": "LA Parks: Gladys Park (6th and Gladys)",
            "url": "https://recreation.parks.lacity.gov/park/6th-gladys-street"
          },
          {
            "title": "Map of the Wolfskill Orchard Tract situated in the City of Los Angeles Cal. (sheet 2, M.R. 30-10, Jan. 11, 1888; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
          }
        ],
        "minLat": 34.0385,
        "from": null,
        "to": {
          "px": [
            230,
            674
          ]
        }
      },
      {
        "label": "part of",
        "name": "Gladys Avenue",
        "entityId": "gladys-ave",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "The next street over from Ruth Avenue, and part of the same run of women's names that continues south across the Sabichi family's land as Agatha Street — Agatha Sabichi's mother was a daughter of the pioneer settler William Wolfskill. No source names a Gladys in the family or among the subdividers. The street runs through the heart of Skid Row today; Gladys Park sits at 6th and Gladys.",
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "categories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Recorded map: H.C. Halfpenny's Resubdivision of a part of Block 24 of the Wolfskill Orchard Tract, M.R. 54-84 (recorded Feb. 28, 1895) — Gladys and Ruth named as the block's bounding streets",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR054/MR054-084.pdf"
          },
          {
            "title": "Recorded map: Wilde and Strong's Subdivision of the Frank Sabichi Tract, M.R. 66-64 (recorded Sept. 21, 1897) — Gladys continuing south alongside Ruth, Towne and Crocker",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR066/MR066-064.pdf"
          },
          {
            "title": "LA Parks: Gladys Park (6th and Gladys)",
            "url": "https://recreation.parks.lacity.gov/park/6th-gladys-street"
          },
          {
            "title": "Map of the Wolfskill Orchard Tract situated in the City of Los Angeles Cal. (sheet 2, M.R. 30-10, Jan. 11, 1888)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
          }
        ],
        "minLat": 34.0379,
        "maxLat": 34.0385,
        "from": {
          "px": [
            230,
            674
          ]
        },
        "to": {
          "px": [
            40,
            740
          ]
        }
      },
      {
        "label": "part of",
        "name": "Gladys Avenue",
        "entityId": "gladys-ave",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "The next street over from Ruth Avenue, and part of the same run of women's names that continues south across the Sabichi family's land as Agatha Street — Agatha Sabichi's mother was a daughter of the pioneer settler William Wolfskill. No source names a Gladys in the family or among the subdividers. The street runs through the heart of Skid Row today; Gladys Park sits at 6th and Gladys.",
        "attested": false,
        "categories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Recorded map: H.C. Halfpenny's Resubdivision of a part of Block 24 of the Wolfskill Orchard Tract, M.R. 54-84 (recorded Feb. 28, 1895) — Gladys and Ruth named as the block's bounding streets",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR054/MR054-084.pdf"
          },
          {
            "title": "Recorded map: Wilde and Strong's Subdivision of the Frank Sabichi Tract, M.R. 66-64 (recorded Sept. 21, 1897) — Gladys continuing south alongside Ruth, Towne and Crocker",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR066/MR066-064.pdf"
          },
          {
            "title": "LA Parks: Gladys Park (6th and Gladys)",
            "url": "https://recreation.parks.lacity.gov/park/6th-gladys-street"
          },
          {
            "title": "Map of the Wolfskill Orchard Tract situated in the City of Los Angeles Cal. (sheet 2, M.R. 30-10, Jan. 11, 1888)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
          }
        ],
        "maxLat": 34.0379,
        "from": {
          "px": [
            40,
            740
          ]
        },
        "to": null
      }
    ]
  },
  "Glendale Boulevard": {
    "name": "Glendale Boulevard",
    "orientation": "NS",
    "segments": [
      {
        "label": "north of Court",
        "name": "Glendale Boulevard",
        "entityId": "glendale-boulevard",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLat": 34.0656,
        "from": null,
        "to": "Court Street"
      },
      {
        "label": "beyond Court (Lake Ave)",
        "name": "Glendale Boulevard",
        "entityId": "glendale-boulevard",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "by 1884",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-138.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1884",
            "until": "?",
            "name": "Lake Avenue",
            "entityId": "lake-avenue",
            "formInForce": "Lake Avenue",
            "how": "origin",
            "origin": "labeled “Lake Avenue” on the 1884 Glassell's Subdivision map {{(source)}} — namesake untraced. Two candidates: Echo Park Lake, the city reservoir this street runs toward, which was already there in 1884; or Lake Vineyard, the ranch of Benjamin D. Wilson, whose daughter Ruth married George S. Patton — whose own street is on this same plat — in the year it was recorded",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-138.pdf"
          },
          {
            "from": "?",
            "until": null,
            "name": "Glendale Boulevard",
            "entityId": "glendale-boulevard",
            "formInForce": "Glendale Boulevard",
            "how": "renaming",
            "origin": "arrival on this stretch not directly documented",
            "originLink": null
          }
        ],
        "note": null,
        "attested": true,
        "absentAsOf": {
          "text": "1884 (Glassell's Subdivision map)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-138.pdf"
        },
        "knownFraction": 0.19,
        "categories": [
          "unresearched",
          "renamed"
        ],
        "formerCategories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Recorded map: Glassell's Subdivision of Lot No. 7 etc., Block 39, Hancock Survey No. 1, M.R. 6-138 (recorded Dec. 27, 1884 at request of A. Glassell) (identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-138.pdf"
          }
        ],
        "maxLat": 34.0656,
        "from": "Court Street",
        "to": null
      }
    ]
  },
  "Golden Avenue": {
    "name": "Golden Avenue",
    "entityId": "golden-avenue",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Grand Avenue": {
    "name": "Grand Avenue",
    "orientation": "NS",
    "segments": [
      {
        "label": "part of",
        "name": "Grand Avenue",
        "entityId": "grand-avenue",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLat": 34.0584,
        "from": null,
        "to": {
          "px": [
            1704,
            579
          ]
        }
      },
      {
        "label": "part of (Charity St)",
        "name": "Grand Avenue",
        "entityId": "grand-avenue",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "by 1869",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1869",
            "until": "?",
            "name": "Charity Street",
            "entityId": "charity",
            "formInForce": "Charity Street",
            "origin": "labeled “Charity Street” on the 1869 Mott Tract building lots {{(source)}} — The virtue",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf"
          },
          {
            "from": "?",
            "until": null,
            "name": "Grand Avenue",
            "entityId": "grand-avenue",
            "formInForce": "Grand Avenue",
            "how": "renaming",
            "origin": "arrival on this stretch not directly documented",
            "originLink": null
          }
        ],
        "note": null,
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
        },
        "knownFraction": 0,
        "categories": [
          "unresearched",
          "renamed"
        ],
        "formerCategories": [
          "aspiration"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Map of a part of Building Lots of the Mott Tract in the City & County of Los Angeles, California (M.R. 1-489, Mar. 2, 1869; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          },
          {
            "title": "L.A. Street Names: Grand Avenue",
            "url": "https://lastreetnames.com/street/grand-avenue/"
          },
          {
            "title": "Wikipedia: Grand Avenue (Los Angeles)",
            "url": "https://en.wikipedia.org/wiki/Grand_Avenue_(Los_Angeles)"
          }
        ],
        "minLat": 34.0507,
        "maxLat": 34.0584,
        "from": {
          "px": [
            1704,
            579
          ]
        },
        "to": {
          "px": [
            410,
            595
          ]
        }
      },
      {
        "label": "beyond 6th",
        "name": "Grand Avenue",
        "entityId": "grand-avenue",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
        },
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLat": 34.0487,
        "maxLat": 34.0507,
        "from": {
          "px": [
            410,
            595
          ]
        },
        "to": "6th Street"
      },
      {
        "label": "beyond 6th (Charity St)",
        "name": "Grand Avenue",
        "entityId": "grand-avenue",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "1849",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "1849",
            "until": "?",
            "name": "Charity Street",
            "entityId": "charity",
            "formInForce": "Charity Street",
            "how": "origin",
            "origin": "labeled “CHARITY ST.” and “CALLE DE CARIDAD” on the 1849 Hutton / Ord Survey {{(source)}} — The virtue",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          },
          {
            "from": "?",
            "until": null,
            "name": "Grand Avenue",
            "entityId": "grand-avenue",
            "formInForce": "Grand Avenue",
            "how": "renaming",
            "origin": "arrival on this stretch not directly documented",
            "originLink": null
          }
        ],
        "note": null,
        "attested": true,
        "knownFraction": 0,
        "categories": [
          "unresearched",
          "renamed"
        ],
        "formerCategories": [
          "aspiration"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          },
          {
            "title": "L.A. Street Names: Grand Avenue",
            "url": "https://lastreetnames.com/street/grand-avenue/"
          },
          {
            "title": "Wikipedia: Grand Avenue (Los Angeles)",
            "url": "https://en.wikipedia.org/wiki/Grand_Avenue_(Los_Angeles)"
          }
        ],
        "minLat": 34.0394,
        "maxLat": 34.0487,
        "from": "6th Street",
        "to": {
          "px": [
            1141,
            369
          ]
        }
      },
      {
        "label": "part of (Charity St)",
        "name": "Grand Avenue",
        "entityId": "grand-avenue",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "by 1885",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR007/MR007-021.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1885",
            "until": "?",
            "name": "Charity Street",
            "entityId": "charity",
            "formInForce": "Charity Street",
            "how": "extension",
            "origin": "labeled “Charity St” on the 1885 Cameron Tract {{(source)}} — The virtue",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR007/MR007-021.pdf"
          },
          {
            "from": "?",
            "until": null,
            "name": "Grand Avenue",
            "entityId": "grand-avenue",
            "formInForce": "Grand Avenue",
            "how": "renaming",
            "origin": "arrival on this stretch not directly documented",
            "originLink": null
          }
        ],
        "note": null,
        "attested": true,
        "knownFraction": 0,
        "categories": [
          "unresearched",
          "renamed"
        ],
        "formerCategories": [
          "aspiration"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Map of the Cameron Tract, Los Angeles, Los Angeles Co., Cal. (M.R. 7-21, Oct. 1885; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR007/MR007-021.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          },
          {
            "title": "L.A. Street Names: Grand Avenue",
            "url": "https://lastreetnames.com/street/grand-avenue/"
          },
          {
            "title": "Wikipedia: Grand Avenue (Los Angeles)",
            "url": "https://en.wikipedia.org/wiki/Grand_Avenue_(Los_Angeles)"
          }
        ],
        "minLat": 34.0376,
        "maxLat": 34.0394,
        "from": {
          "px": [
            1141,
            369
          ]
        },
        "to": {
          "px": [
            1150,
            836
          ]
        }
      },
      {
        "label": "part of",
        "name": "Grand Avenue",
        "entityId": "grand-avenue",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "maxLat": 34.0376,
        "from": {
          "px": [
            1150,
            836
          ]
        },
        "to": null
      }
    ]
  },
  "Grand Avenue Lower Level": {
    "name": "Grand Avenue Lower Level",
    "entityId": "grand-avenue-lower-level",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": {
      "text": "by 1869",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf"
    },
    "built": "not yet researched",
    "nameHistory": [
      {
        "from": "by 1869",
        "until": "?",
        "name": "Charity Street",
        "entityId": "charity",
        "formInForce": "Charity Street",
        "origin": "labeled “Charity Street” on the 1869 Mott Tract building lots {{(source)}} — The virtue",
        "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf"
      },
      {
        "from": "?",
        "until": null,
        "name": "Grand Avenue Lower Level",
        "entityId": "grand-avenue-lower-level",
        "formInForce": "Grand Avenue Lower Level",
        "how": "renaming",
        "origin": "arrival on this stretch not directly documented",
        "originLink": null
      }
    ],
    "note": null,
    "attested": true,
    "knownFraction": 0,
    "categories": [
      "unresearched",
      "renamed"
    ],
    "formerCategories": [
      "aspiration"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "Map of a part of Building Lots of the Mott Tract in the City & County of Los Angeles, California (M.R. 1-489, Mar. 2, 1869; identified by map alignment, not a lot-level record)",
        "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf"
      },
      {
        "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849)",
        "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
      },
      {
        "title": "L.A. Street Names: Grand Avenue",
        "url": "https://lastreetnames.com/street/grand-avenue/"
      },
      {
        "title": "Wikipedia: Grand Avenue (Los Angeles)",
        "url": "https://en.wikipedia.org/wiki/Grand_Avenue_(Los_Angeles)"
      }
    ]
  },
  "Green Avenue": {
    "name": "Green Avenue",
    "entityId": "green-avenue",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Harbor Freeway": {
    "name": "Harbor Freeway",
    "entityId": "harbor-freeway",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Hartford Avenue": {
    "name": "Hartford Avenue",
    "orientation": "NS",
    "segments": [
      {
        "label": "north of 6th (discontinuous)",
        "name": "Hartford Avenue",
        "entityId": "hartford-avenue",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLat": 34.0521,
        "from": null,
        "to": "6th Street",
        "gapAfter": true
      },
      {
        "label": "south of 7th",
        "name": "Hartford Avenue",
        "entityId": "hartford-avenue",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "maxLat": 34.0521,
        "from": "7th Street",
        "to": null
      }
    ]
  },
  "Hewitt Street": {
    "name": "Hewitt Street",
    "orientation": "NS",
    "segments": [
      {
        "label": "beyond 3rd (original Hewitt St)",
        "name": "Hewitt Street",
        "entityId": "hewitt",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "by 1875",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-060.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1875",
            "until": null,
            "name": "Hewitt Street",
            "entityId": "hewitt",
            "formInForce": "Hewitt Street",
            "how": "origin",
            "origin": "labeled “HEWITT STREET” on the 1875 Thomas Tract (sheets 1, 2) {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-060.pdf"
          }
        ],
        "note": null,
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "knownFraction": 0.86,
        "categories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Map of the Thomas Tract, being a portion of the Johnson and Mott Tract (M.R. 3-60, May 19, 1875; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-060.pdf"
          },
          {
            "title": "Recorded map: Mills and Wicks' Extension of Second St. and adjoining subdivision, City of Los Angeles, M.R. 13-87 — lots 1–144 and 160–236 subdivided at the request of M. L. Wicks and Howard W. Mills, April–May 1886, under the direction of Geo. C. Knox; further lots added Jan. 1887 (sheet 1 of 2) (identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR013/MR013-087.pdf"
          }
        ],
        "minLat": 34.0458,
        "from": null,
        "to": "3rd Street"
      },
      {
        "label": "3rd to Traction",
        "name": "Hewitt Street",
        "entityId": null,
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLat": 34.0453,
        "maxLat": 34.0458,
        "from": "3rd Street",
        "to": "Traction Avenue"
      },
      {
        "label": "Traction to 4th Pl",
        "name": "Hewitt Street",
        "entityId": "hewitt",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "by 1887",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR013/MR013-087.pdf"
        },
        "built": "not yet researched",
        "note": null,
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "knownFraction": 0.79,
        "categories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Recorded map: Mills and Wicks' Extension of Second St. and adjoining subdivision, City of Los Angeles, M.R. 13-87 — lots 1–144 and 160–236 subdivided at the request of M. L. Wicks and Howard W. Mills, April–May 1886, under the direction of Geo. C. Knox; further lots added Jan. 1887 (sheet 1 of 2) (identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR013/MR013-087.pdf"
          },
          {
            "title": "Map of the Thomas Tract, being a portion of the Johnson and Mott Tract (M.R. 3-60, May 19, 1875)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-060.pdf"
          }
        ],
        "minLat": 34.0445,
        "maxLat": 34.0453,
        "from": "Traction Avenue",
        "to": "4th Place"
      },
      {
        "label": "4th Pl to 4th",
        "name": "Hewitt Street",
        "entityId": null,
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLat": 34.0436,
        "maxLat": 34.0445,
        "from": "4th Place",
        "to": "4th Street"
      },
      {
        "label": "beyond 4th",
        "name": "Hewitt Street",
        "entityId": "hewitt",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "by 1887",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR013/MR013-087.pdf"
        },
        "built": "not yet researched",
        "note": null,
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "knownFraction": 0,
        "categories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Recorded map: Mills and Wicks' Extension of Second St. and adjoining subdivision, City of Los Angeles, M.R. 13-87 — lots 1–144 and 160–236 subdivided at the request of M. L. Wicks and Howard W. Mills, April–May 1886, under the direction of Geo. C. Knox; further lots added Jan. 1887 (sheet 1 of 2)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR013/MR013-087.pdf"
          },
          {
            "title": "Map of the Thomas Tract, being a portion of the Johnson and Mott Tract (M.R. 3-60, May 19, 1875)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-060.pdf"
          }
        ],
        "minLat": 34.0431,
        "maxLat": 34.0436,
        "from": "4th Street",
        "to": {
          "px": [
            671,
            766
          ]
        }
      },
      {
        "label": "part of",
        "name": "Hewitt Street",
        "entityId": "hewitt",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "categories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Map of the Thomas Tract, being a portion of the Johnson and Mott Tract (M.R. 3-60, May 19, 1875)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-060.pdf"
          }
        ],
        "maxLat": 34.0431,
        "from": {
          "px": [
            671,
            766
          ]
        },
        "to": null
      }
    ]
  },
  "Hill Place": {
    "name": "Hill Place",
    "entityId": "hill-place",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "absentAsOf": {
      "text": "1849 (Hutton / Ord Survey)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
    },
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Hill Street": {
    "name": "Hill Street",
    "orientation": "NS",
    "segments": [
      {
        "label": "beyond Bamboo Lane",
        "name": "Hill Street",
        "entityId": "hill-street-downtown",
        "namedAfter": "{{Bunker Hill}} — how and when this stretch joined Hill Street is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Bunker_Hill_(Los_Angeles)",
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
        },
        "categories": [
          "place"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Hill Street",
            "url": "https://lastreetnames.com/street/hill-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          }
        ],
        "minLat": 34.0663,
        "from": null,
        "to": "Bamboo Lane"
      },
      {
        "label": "beyond Bamboo Lane (Castelar St)",
        "name": "Hill Street",
        "entityId": "hill-street-downtown",
        "namedAfter": "{{Bunker Hill}}, once this stretch was folded into Hill Street",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Bunker_Hill_(Los_Angeles)",
        "planned": {
          "text": "1849",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "1849",
            "until": "Feb. 1874",
            "name": "Bull Street",
            "entityId": "bull",
            "formInForce": "Bull Street",
            "how": "origin",
            "origin": "labeled “BULL ST.” and “CALLE DEL TORO” on the 1849 Hutton / Ord Survey {{(source)}} — no namesake is documented; bullfights were reportedly held in the area until 1872",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
          },
          {
            "from": "Feb. 1874",
            "until": "?",
            "name": "Castelar Street",
            "entityId": "castelar",
            "formInForce": "Castelar Street",
            "how": "renaming",
            "origin": "renamed per the Feb. 1874 renaming ordinance {{(source)}} — Emilio Castelar (1832–1899), president of the First Spanish Republic in 1873–74",
            "originLink": "https://clerkapps.lacity.org/oldcfidocs/"
          },
          {
            "from": "?",
            "until": null,
            "name": "Hill Street",
            "entityId": "hill-street-downtown",
            "formInForce": "Hill Street",
            "how": "renaming",
            "origin": "arrival on this stretch not directly documented",
            "originLink": null
          }
        ],
        "note": null,
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
        },
        "knownFraction": 0.14,
        "categories": [
          "place",
          "renamed"
        ],
        "formerCategories": [
          "unknown",
          "person"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Hill Street",
            "url": "https://lastreetnames.com/street/hill-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-73, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
          },
          {
            "title": "“An Ordinance Changing the names of Certain Streets in the City of Los Angeles” — Los Angeles Common Council, adopted Feb. 26, 1874 (council minutes, ledger p. 621)",
            "url": "https://clerkapps.lacity.org/oldcfidocs/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          },
          {
            "title": "Los Angeles Herald, “Common Council”, Feb. 14, 1874 (the petition renaming Bull St. to Castelar)",
            "url": "http://cdnc.ucr.edu/cgi-bin/cdnc?a=d&d=LAH18740214.2.12"
          }
        ],
        "minLat": 34.0588,
        "maxLat": 34.0663,
        "from": "Bamboo Lane",
        "to": {
          "px": [
            216,
            667
          ]
        }
      },
      {
        "label": "part of",
        "name": "Hill Street",
        "entityId": "hill-street-downtown",
        "namedAfter": "{{Bunker Hill}} — how and when this stretch joined Hill Street is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Bunker_Hill_(Los_Angeles)",
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
        },
        "categories": [
          "place"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Hill Street",
            "url": "https://lastreetnames.com/street/hill-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          }
        ],
        "minLat": 34.0567,
        "maxLat": 34.0588,
        "from": {
          "px": [
            216,
            667
          ]
        },
        "to": {
          "px": [
            1673,
            895
          ]
        }
      },
      {
        "label": "part of",
        "name": "Hill Street",
        "entityId": "hill-street-downtown",
        "namedAfter": "{{Bunker Hill}}, extended onto this stretch",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Bunker_Hill_(Los_Angeles)",
        "planned": {
          "text": "by 1869",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1869",
            "until": null,
            "name": "Hill Street",
            "entityId": "hill-street-downtown",
            "formInForce": "Hill Street",
            "how": "extension",
            "origin": "labeled “Hill Street” on the 1869 Mott Tract building lots {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf"
          }
        ],
        "note": null,
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
        },
        "knownFraction": 0.89,
        "categories": [
          "place"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Hill Street",
            "url": "https://lastreetnames.com/street/hill-street/"
          },
          {
            "title": "Map of a part of Building Lots of the Mott Tract in the City & County of Los Angeles, California (M.R. 1-489, Mar. 2, 1869; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          }
        ],
        "minLat": 34.0525,
        "maxLat": 34.0567,
        "from": {
          "px": [
            1673,
            895
          ]
        },
        "to": {
          "px": [
            310,
            1187
          ]
        }
      },
      {
        "label": "part of (original Hill St)",
        "name": "Hill Street",
        "entityId": "hill-street-downtown",
        "namedAfter": "{{Bunker Hill}} — the knoll the street runs along, though the hill was not formally named until 1873, later than the street",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Bunker_Hill_(Los_Angeles)",
        "planned": {
          "text": "1849",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "1849",
            "until": null,
            "name": "Hill Street",
            "entityId": "hill-street-downtown",
            "formInForce": "Hill Street",
            "how": "origin",
            "origin": "labeled “HILL STREET”, “CALLE LOMA”, “HILL ST” and “Hill Street” on the 1849 Hutton / Ord Survey and the 1869 Mott Tract building lots {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          }
        ],
        "note": null,
        "attested": true,
        "knownFraction": 1,
        "categories": [
          "place"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Hill Street",
            "url": "https://lastreetnames.com/street/hill-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          },
          {
            "title": "Map of a part of Building Lots of the Mott Tract in the City & County of Los Angeles, California (M.R. 1-489, Mar. 2, 1869; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf"
          }
        ],
        "minLat": 34.0383,
        "maxLat": 34.0525,
        "from": {
          "px": [
            310,
            1187
          ]
        },
        "to": {
          "px": [
            477,
            1265
          ]
        }
      },
      {
        "label": "part of",
        "name": "Hill Street",
        "entityId": "hill-street-downtown",
        "namedAfter": "{{Bunker Hill}} — how and when this stretch joined Hill Street is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Bunker_Hill_(Los_Angeles)",
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "place"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Hill Street",
            "url": "https://lastreetnames.com/street/hill-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          }
        ],
        "maxLat": 34.0383,
        "from": {
          "px": [
            477,
            1265
          ]
        },
        "to": null
      }
    ]
  },
  "Hollywood Freeway": {
    "name": "Hollywood Freeway",
    "entityId": "hollywood-freeway",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Hope Place": {
    "name": "Hope Place",
    "entityId": "hope-place",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "absentAsOf": {
      "text": "1869 (Mott Tract building lots)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf"
    },
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Hope Street": {
    "name": "Hope Street",
    "orientation": "NS",
    "segments": [
      {
        "label": "part of (discontinuous)",
        "name": "Hope Street",
        "entityId": "hope",
        "namedAfter": "The virtue — how and when this stretch joined Hope Street is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Alexander_W._Hope",
        "planned": {
          "text": "by 1869",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf"
        },
        "built": "not yet researched",
        "note": "Named either for the virtue, alongside Charity one block over, or for Dr. Alexander W. Hope. The virtue reading is supported by the company it keeps on the survey; nothing settles it.",
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
        },
        "knownFraction": 0.89,
        "categories": [
          "aspiration",
          "person",
          "unknown"
        ],
        "disputed": true,
        "sources": [
          {
            "title": "L.A. Street Names: Hope Street",
            "url": "https://lastreetnames.com/street/hope-street/"
          },
          {
            "title": "Map of a part of Building Lots of the Mott Tract in the City & County of Los Angeles, California (M.R. 1-489, Mar. 2, 1869; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          }
        ],
        "minLat": 34.0501,
        "from": null,
        "to": {
          "px": [
            435,
            444
          ]
        },
        "gapAfter": true
      },
      {
        "label": "beyond 6th",
        "name": "Hope Street",
        "entityId": "hope",
        "namedAfter": "The virtue — how and when this stretch joined Hope Street is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Alexander_W._Hope",
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "Named either for the virtue, alongside Charity one block over, or for Dr. Alexander W. Hope. The virtue reading is supported by the company it keeps on the survey; nothing settles it.",
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
        },
        "categories": [
          "aspiration",
          "person",
          "unknown"
        ],
        "disputed": true,
        "sources": [
          {
            "title": "L.A. Street Names: Hope Street",
            "url": "https://lastreetnames.com/street/hope-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          }
        ],
        "minLat": 34.0494,
        "maxLat": 34.0501,
        "from": {
          "px": [
            663,
            995
          ]
        },
        "to": "6th Street"
      },
      {
        "label": "beyond 6th (original Hope St)",
        "name": "Hope Street",
        "entityId": "hope",
        "namedAfter": "The virtue — or possibly sheriff and state senator {{Dr. Alexander W. Hope}} (c. 1820–1856), which the sources do not settle",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Alexander_W._Hope",
        "planned": {
          "text": "1849",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "1849",
            "until": null,
            "name": "Hope Street",
            "entityId": "hope",
            "formInForce": "Hope Street",
            "how": "origin",
            "origin": "labeled “HOPE ST.”, “CALLE DE LAS ESPERANZAS” and “HOPE STREET” on the 1849 Hutton / Ord Survey and the 1875 Blocks 73 & 72 of Ord's Survey {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          }
        ],
        "note": "Named either for the virtue, alongside Charity one block over, or for Dr. Alexander W. Hope. The virtue reading is supported by the company it keeps on the survey; nothing settles it.",
        "attested": true,
        "knownFraction": 1,
        "categories": [
          "aspiration",
          "person",
          "unknown"
        ],
        "disputed": true,
        "sources": [
          {
            "title": "L.A. Street Names: Hope Street",
            "url": "https://lastreetnames.com/street/hope-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          },
          {
            "title": "Blocks 73 & 72 of Ord's Survey belonging to W. M. Williams (M.R. 3-33, Apr. 29, 1875; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-033.pdf"
          }
        ],
        "minLat": 34.0404,
        "maxLat": 34.0494,
        "from": "6th Street",
        "to": {
          "px": [
            472,
            1039
          ]
        }
      },
      {
        "label": "part of",
        "name": "Hope Street",
        "entityId": "hope",
        "namedAfter": "The virtue — how and when this stretch joined Hope Street is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Alexander_W._Hope",
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "Named either for the virtue, alongside Charity one block over, or for Dr. Alexander W. Hope. The virtue reading is supported by the company it keeps on the survey; nothing settles it.",
        "attested": false,
        "categories": [
          "aspiration",
          "person",
          "unknown"
        ],
        "disputed": true,
        "sources": [
          {
            "title": "L.A. Street Names: Hope Street",
            "url": "https://lastreetnames.com/street/hope-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          }
        ],
        "minLat": 34.0399,
        "maxLat": 34.0404,
        "from": {
          "px": [
            472,
            1039
          ]
        },
        "to": {
          "px": [
            872,
            371
          ]
        }
      },
      {
        "label": "part of",
        "name": "Hope Street",
        "entityId": "hope",
        "namedAfter": "The virtue — how and when this stretch joined Hope Street is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Alexander_W._Hope",
        "planned": {
          "text": "by 1885",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR007/MR007-021.pdf"
        },
        "built": "not yet researched",
        "note": "Named either for the virtue, alongside Charity one block over, or for Dr. Alexander W. Hope. The virtue reading is supported by the company it keeps on the survey; nothing settles it.",
        "attested": true,
        "knownFraction": 0.8,
        "categories": [
          "aspiration",
          "person",
          "unknown"
        ],
        "disputed": true,
        "sources": [
          {
            "title": "L.A. Street Names: Hope Street",
            "url": "https://lastreetnames.com/street/hope-street/"
          },
          {
            "title": "Map of the Cameron Tract, Los Angeles, Los Angeles Co., Cal. (M.R. 7-21, Oct. 1885; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR007/MR007-021.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          }
        ],
        "minLat": 34.0382,
        "maxLat": 34.0399,
        "from": {
          "px": [
            872,
            371
          ]
        },
        "to": {
          "px": [
            848,
            841
          ]
        }
      },
      {
        "label": "part of",
        "name": "Hope Street",
        "entityId": "hope",
        "namedAfter": "The virtue — how and when this stretch joined Hope Street is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Alexander_W._Hope",
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "Named either for the virtue, alongside Charity one block over, or for Dr. Alexander W. Hope. The virtue reading is supported by the company it keeps on the survey; nothing settles it.",
        "attested": false,
        "categories": [
          "aspiration",
          "person",
          "unknown"
        ],
        "disputed": true,
        "sources": [
          {
            "title": "L.A. Street Names: Hope Street",
            "url": "https://lastreetnames.com/street/hope-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          }
        ],
        "maxLat": 34.0382,
        "from": {
          "px": [
            848,
            841
          ]
        },
        "to": null
      }
    ]
  },
  "Huntley Drive": {
    "name": "Huntley Drive",
    "entityId": "huntley-drive",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "I-10 Metro ExpressLanes": {
    "name": "I-10 Metro ExpressLanes",
    "orientation": "EW",
    "segments": [
      {
        "label": "part of",
        "name": "I-10 Metro ExpressLanes",
        "entityId": "i-10-metro-expresslanes",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
        },
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "maxLng": -118.2348,
        "from": null,
        "to": {
          "px": [
            193,
            1140
          ]
        }
      },
      {
        "label": "part of",
        "name": "I-10 Metro ExpressLanes",
        "entityId": "i-10-metro-expresslanes",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLng": -118.2348,
        "from": {
          "px": [
            193,
            1140
          ]
        },
        "to": null
      }
    ]
  },
  "Imperial Street": {
    "name": "Imperial Street",
    "orientation": "NS",
    "segments": [
      {
        "label": "part of (Palm St)",
        "name": "Imperial Street",
        "entityId": "imperial-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "by 1886",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR011/MR011-042.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1886",
            "until": "?",
            "name": "Palm Street",
            "entityId": "palm-st-arts-district",
            "formInForce": "Palm Street",
            "how": "origin",
            "origin": "labeled “Palm St” on the 1886 Goodwin Tract {{(source)}} — one of a run of tree and plant names platted on the Goodwin Tract in October 1886 — Palm, Spruce, Tulip and Willow together. None of them is documented beyond the plat, and the theme is the whole of the argument. This one ran along modern Imperial Street. When it became Imperial Street, and why, is not researched",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR011/MR011-042.pdf"
          },
          {
            "from": "?",
            "until": null,
            "name": "Imperial Street",
            "entityId": "imperial-street",
            "formInForce": "Imperial Street",
            "how": "renaming",
            "origin": "arrival on this stretch not directly documented",
            "originLink": null
          }
        ],
        "note": null,
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "knownFraction": 0,
        "categories": [
          "unresearched",
          "renamed"
        ],
        "formerCategories": [
          "nature",
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Plan of the Goodwin Tract (M.R. 11-42, Oct. 6, 1886; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR011/MR011-042.pdf"
          },
          {
            "title": "Wikipedia: Arts District, Los Angeles",
            "url": "https://en.wikipedia.org/wiki/Arts_District,_Los_Angeles"
          }
        ],
        "minLat": 34.0368,
        "from": null,
        "to": {
          "px": [
            378,
            1248
          ]
        }
      },
      {
        "label": "part of",
        "name": "Imperial Street",
        "entityId": "imperial-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "maxLat": 34.0368,
        "from": {
          "px": [
            378,
            1248
          ]
        },
        "to": null
      }
    ]
  },
  "Industrial Street": {
    "name": "Industrial Street",
    "orientation": "EW",
    "segments": [
      {
        "label": "part of",
        "name": "Industrial Street",
        "entityId": "industrial-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1888 (Wolfskill Orchard Tract, sheet 1 (M.R. 30-9))",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
        },
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "maxLng": -118.2337,
        "from": null,
        "to": {
          "px": [
            312,
            1287
          ]
        }
      },
      {
        "label": "part of",
        "name": "Industrial Street",
        "entityId": "industrial-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLng": -118.2337,
        "from": {
          "px": [
            312,
            1287
          ]
        },
        "to": null
      }
    ]
  },
  "Ingraham Street": {
    "name": "Ingraham Street",
    "orientation": "EW",
    "segments": [
      {
        "label": "west of Union",
        "name": "Ingraham Street",
        "entityId": "ingraham-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "maxLng": -118.2707,
        "from": null,
        "to": "Union Avenue",
        "gapAfter": true
      },
      {
        "label": "east of Valencia (discontinuous)",
        "name": "Ingraham Street",
        "entityId": "ingraham-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLng": -118.2707,
        "from": "Valencia Street",
        "to": null
      }
    ]
  },
  "Jackson Street": {
    "name": "Jackson Street",
    "entityId": "jackson-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "James M Wood Boulevard": {
    "name": "James M Wood Boulevard",
    "entityId": "james-m-wood-boulevard",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Japanese Village Plaza Mall": {
    "name": "Japanese Village Plaza Mall",
    "entityId": "japanese-village-plaza-mall",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "absentAsOf": {
      "text": "1849 (Hutton / Ord Survey)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
    },
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Jerry Moss Plaza": {
    "name": "Jerry Moss Plaza",
    "entityId": "jerry-moss-plaza",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "absentAsOf": {
      "text": "1869 (Mott Tract building lots)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf"
    },
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Jesse Street": {
    "name": "Jesse Street",
    "orientation": "EW",
    "segments": [
      {
        "label": "west of Mesquit",
        "name": "Jesse Street",
        "entityId": "jesse",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "Arrived on Aug. 31, 1896, when Ordinance No. 3829 changed Cincinnati Street, between Mateo and Mesquit, to this name. The ordinance spells it “Jessie”; the modern street is Jesse.",
        "attested": false,
        "categories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Los Angeles Herald, “Street Names Changed — The Last Lot Rechristened by the City Council,” Sept. 3, 1896 (the fourteen changes made by Ordinance No. 3829, adopted Aug. 31)",
            "url": "https://cdnc.ucr.edu/?a=d&d=LAH18960903.1.3"
          }
        ],
        "maxLng": -118.2292,
        "from": null,
        "to": "Mesquit Street",
        "gapAfter": true
      },
      {
        "label": "east of Mission Rd (discontinuous)",
        "name": "Jesse Street",
        "entityId": "jesse",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "Arrived on Aug. 31, 1896, when Ordinance No. 3829 changed Cincinnati Street, between Mateo and Mesquit, to this name. The ordinance spells it “Jessie”; the modern street is Jesse.",
        "attested": false,
        "categories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Los Angeles Herald, “Street Names Changed — The Last Lot Rechristened by the City Council,” Sept. 3, 1896 (the fourteen changes made by Ordinance No. 3829, adopted Aug. 31)",
            "url": "https://cdnc.ucr.edu/?a=d&d=LAH18960903.1.3"
          }
        ],
        "minLng": -118.2292,
        "from": "Mission Road",
        "to": null
      }
    ]
  },
  "Judge John Aiso Street": {
    "name": "Judge John Aiso Street",
    "orientation": "NS",
    "segments": [
      {
        "label": "part of",
        "name": "Judge John Aiso Street",
        "entityId": "judge-john-aiso-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLat": 34.0511,
        "from": null,
        "to": {
          "px": [
            864,
            367
          ]
        }
      },
      {
        "label": "part of",
        "name": "Judge John Aiso Street",
        "entityId": "judge-john-aiso-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "maxLat": 34.0511,
        "from": {
          "px": [
            864,
            367
          ]
        },
        "to": null
      }
    ]
  },
  "Jung Jing Road": {
    "name": "Jung Jing Road",
    "entityId": "jung-jing-road",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "absentAsOf": {
      "text": "1849 (Hutton / Ord Survey)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
    },
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Kearney Street": {
    "name": "Kearney Street",
    "entityId": "kearney-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Keller Street": {
    "name": "Keller Street",
    "entityId": "keller-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Kensington Road": {
    "name": "Kensington Road",
    "entityId": "kensington-road",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Kohler Street": {
    "name": "Kohler Street",
    "orientation": "NS",
    "segments": [
      {
        "label": "part of",
        "name": "Kohler Street",
        "entityId": "kohler-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1888 (Wolfskill Orchard Tract, sheet 1 (M.R. 30-9))",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
        },
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLat": 34.0367,
        "from": null,
        "to": {
          "px": [
            26,
            842
          ]
        }
      },
      {
        "label": "part of",
        "name": "Kohler Street",
        "entityId": "kohler-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "maxLat": 34.0367,
        "from": {
          "px": [
            26,
            842
          ]
        },
        "to": null
      }
    ]
  },
  "L. A. Live Way": {
    "name": "L. A. Live Way",
    "entityId": "l-a-live-way",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Lake Shore Terrace": {
    "name": "Lake Shore Terrace",
    "entityId": "lake-shore-terrace",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": {
      "text": "by 1884",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-138.pdf"
    },
    "built": "not yet researched",
    "nameHistory": [
      {
        "from": "by 1884",
        "until": "?",
        "name": "Hobart Street",
        "entityId": "hobart-street",
        "formInForce": "Hobart Street",
        "how": "origin",
        "origin": "labeled “Hobart Street” on the 1884 Glassell's Subdivision map {{(source)}} — no namesake documented",
        "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-138.pdf"
      },
      {
        "from": "?",
        "until": null,
        "name": "Lake Shore Terrace",
        "entityId": "lake-shore-terrace",
        "formInForce": "Lake Shore Terrace",
        "how": "renaming",
        "origin": "arrival on this stretch not directly documented",
        "originLink": null
      }
    ],
    "note": null,
    "attested": true,
    "knownFraction": 0,
    "categories": [
      "unresearched",
      "renamed"
    ],
    "formerCategories": [
      "unknown"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "Recorded map: Glassell's Subdivision of Lot No. 7 etc., Block 39, Hancock Survey No. 1, M.R. 6-138 (recorded Dec. 27, 1884 at request of A. Glassell) (identified by map alignment, not a lot-level record)",
        "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-138.pdf"
      }
    ]
  },
  "Lake Street": {
    "name": "Lake Street",
    "entityId": "lake-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Lamar Street": {
    "name": "Lamar Street",
    "entityId": "lamar-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Laveta Terrace": {
    "name": "Laveta Terrace",
    "entityId": "laveta-terrace",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Lawrence Street": {
    "name": "Lawrence Street",
    "entityId": "lawrence-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Lei Min Way": {
    "name": "Lei Min Way",
    "entityId": "lei-min-way",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "absentAsOf": {
      "text": "1849 (Hutton / Ord Survey)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
    },
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Leroy Street": {
    "name": "Leroy Street",
    "orientation": "NS",
    "segments": [
      {
        "label": "part of",
        "name": "Leroy Street",
        "entityId": "leroy-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
        },
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLat": 34.0642,
        "from": null,
        "to": {
          "px": [
            932,
            1007
          ]
        }
      },
      {
        "label": "part of",
        "name": "Leroy Street",
        "entityId": "leroy-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "maxLat": 34.0642,
        "from": {
          "px": [
            932,
            1007
          ]
        },
        "to": null
      }
    ]
  },
  "Linwood Avenue": {
    "name": "Linwood Avenue",
    "entityId": "linwood-avenue",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Little Street": {
    "name": "Little Street",
    "entityId": "little-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Llewellyn Street": {
    "name": "Llewellyn Street",
    "entityId": "llewellyn-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "absentAsOf": {
      "text": "1849 (Hutton / Ord Survey)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
    },
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Loma Drive": {
    "name": "Loma Drive",
    "entityId": "loma-drive",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Loma Place": {
    "name": "Loma Place",
    "entityId": "loma-place",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Los Angeles Street": {
    "name": "Los Angeles Street",
    "orientation": "NS",
    "segments": [
      {
        "label": "part of",
        "name": "Los Angeles Street",
        "entityId": "los-angeles-street",
        "namedAfter": "The city itself — how and when this stretch joined Los Angeles Street is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Los_Angeles_River",
        "planned": null,
        "built": {
          "text": "drawn, unlabelled, by Aug. 29, 1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
        },
        "note": "In place by 1854 along its through stretch; the Plaza block to the north was a separate street, the Calle de los Negros, until this name was extended over it in 1910.",
        "attested": true,
        "knownFraction": 0,
        "categories": [
          "place"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Los Angeles Street",
            "url": "https://lastreetnames.com/street/los-angeles-street/"
          },
          {
            "title": "Wikipedia: Los Angeles Street",
            "url": "https://en.wikipedia.org/wiki/Los_Angeles_Street"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-73, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
          },
          {
            "title": "Map of the Orchard Tract in the City of Los Angeles (M.R. 5-5, Aug. 2, 1882)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-005.pdf"
          }
        ],
        "minLat": 34.0548,
        "from": null,
        "to": {
          "px": [
            719,
            1469
          ]
        }
      },
      {
        "label": "part of",
        "name": "Los Angeles Street",
        "entityId": "los-angeles-street",
        "namedAfter": "The city itself — how and when this stretch joined Los Angeles Street is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Los_Angeles_River",
        "planned": {
          "text": "1849",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
        },
        "built": {
          "text": "Aug. 29, 1849",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
        },
        "note": "In place by 1854 along its through stretch; the Plaza block to the north was a separate street, the Calle de los Negros, until this name was extended over it in 1910.",
        "attested": true,
        "knownFraction": 0,
        "categories": [
          "place"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Los Angeles Street",
            "url": "https://lastreetnames.com/street/los-angeles-street/"
          },
          {
            "title": "Wikipedia: Los Angeles Street",
            "url": "https://en.wikipedia.org/wiki/Los_Angeles_Street"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-73, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
          },
          {
            "title": "Map of the Orchard Tract in the City of Los Angeles (M.R. 5-5, Aug. 2, 1882)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-005.pdf"
          }
        ],
        "minLat": 34.0541,
        "maxLat": 34.0548,
        "from": {
          "px": [
            719,
            1469
          ]
        },
        "to": {
          "px": [
            656,
            1469
          ]
        }
      },
      {
        "label": "part of",
        "name": "Los Angeles Street",
        "entityId": "los-angeles-street",
        "namedAfter": "The city itself — how and when this stretch joined Los Angeles Street is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Los_Angeles_River",
        "planned": null,
        "built": {
          "text": "drawn, unlabelled, by Aug. 29, 1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
        },
        "note": "In place by 1854 along its through stretch; the Plaza block to the north was a separate street, the Calle de los Negros, until this name was extended over it in 1910.",
        "attested": true,
        "knownFraction": 0,
        "categories": [
          "place"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Los Angeles Street",
            "url": "https://lastreetnames.com/street/los-angeles-street/"
          },
          {
            "title": "Wikipedia: Los Angeles Street",
            "url": "https://en.wikipedia.org/wiki/Los_Angeles_Street"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          },
          {
            "title": "Map of the Orchard Tract in the City of Los Angeles (M.R. 5-5, Aug. 2, 1882)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-005.pdf"
          }
        ],
        "minLat": 34.0531,
        "maxLat": 34.0541,
        "from": {
          "px": [
            656,
            1469
          ]
        },
        "to": {
          "px": [
            575,
            1470
          ]
        }
      },
      {
        "label": "part of",
        "name": "Los Angeles Street",
        "entityId": "los-angeles-street",
        "namedAfter": "The city itself — how and when this stretch joined Los Angeles Street is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Los_Angeles_River",
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "In place by 1854 along its through stretch; the Plaza block to the north was a separate street, the Calle de los Negros, until this name was extended over it in 1910.",
        "attested": false,
        "categories": [
          "place"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Los Angeles Street",
            "url": "https://lastreetnames.com/street/los-angeles-street/"
          },
          {
            "title": "Wikipedia: Los Angeles Street",
            "url": "https://en.wikipedia.org/wiki/Los_Angeles_Street"
          },
          {
            "title": "Map of the Orchard Tract in the City of Los Angeles (M.R. 5-5, Aug. 2, 1882)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-005.pdf"
          }
        ],
        "minLat": 34.0521,
        "maxLat": 34.0531,
        "from": {
          "px": [
            575,
            1470
          ]
        },
        "to": {
          "px": [
            503,
            1477
          ]
        }
      },
      {
        "label": "part of",
        "name": "Los Angeles Street",
        "entityId": "los-angeles-street",
        "namedAfter": "The city itself — how and when this stretch joined Los Angeles Street is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Los_Angeles_River",
        "planned": null,
        "built": {
          "text": "drawn, unlabelled, by Aug. 29, 1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
        },
        "note": "In place by 1854 along its through stretch; the Plaza block to the north was a separate street, the Calle de los Negros, until this name was extended over it in 1910.",
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "knownFraction": 0,
        "categories": [
          "place"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Los Angeles Street",
            "url": "https://lastreetnames.com/street/los-angeles-street/"
          },
          {
            "title": "Wikipedia: Los Angeles Street",
            "url": "https://en.wikipedia.org/wiki/Los_Angeles_Street"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          },
          {
            "title": "Map of the Orchard Tract in the City of Los Angeles (M.R. 5-5, Aug. 2, 1882)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-005.pdf"
          }
        ],
        "minLat": 34.0512,
        "maxLat": 34.0521,
        "from": {
          "px": [
            503,
            1477
          ]
        },
        "to": {
          "px": [
            435,
            1481
          ]
        }
      },
      {
        "label": "part of",
        "name": "Los Angeles Street",
        "entityId": "los-angeles-street",
        "namedAfter": "The city itself — how and when this stretch joined Los Angeles Street is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Los_Angeles_River",
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "In place by 1854 along its through stretch; the Plaza block to the north was a separate street, the Calle de los Negros, until this name was extended over it in 1910.",
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "categories": [
          "place"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Los Angeles Street",
            "url": "https://lastreetnames.com/street/los-angeles-street/"
          },
          {
            "title": "Wikipedia: Los Angeles Street",
            "url": "https://en.wikipedia.org/wiki/Los_Angeles_Street"
          },
          {
            "title": "Map of the Orchard Tract in the City of Los Angeles (M.R. 5-5, Aug. 2, 1882)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-005.pdf"
          }
        ],
        "minLat": 34.0487,
        "maxLat": 34.0512,
        "from": {
          "px": [
            435,
            1481
          ]
        },
        "to": {
          "px": [
            1124,
            759
          ]
        }
      },
      {
        "label": "part of (original Los Angeles St)",
        "name": "Los Angeles Street",
        "entityId": "los-angeles-street",
        "namedAfter": "The city itself — ultimately Nuestra Señora de los Ángeles de Porciúncula, the 1769 Spanish naming of {{the river}}",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Los_Angeles_River",
        "planned": {
          "text": "by 1882",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-005.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1882",
            "until": null,
            "name": "Los Angeles Street",
            "entityId": "los-angeles-street",
            "formInForce": "Los Angeles Street",
            "how": "origin",
            "origin": "labeled “Los Angeles Street” on the 1882 Orchard Tract {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-005.pdf"
          }
        ],
        "note": "In place by 1854 along its through stretch; the Plaza block to the north was a separate street, the Calle de los Negros, until this name was extended over it in 1910.",
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "knownFraction": 0.82,
        "categories": [
          "place"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Los Angeles Street",
            "url": "https://lastreetnames.com/street/los-angeles-street/"
          },
          {
            "title": "Wikipedia: Los Angeles Street",
            "url": "https://en.wikipedia.org/wiki/Los_Angeles_Street"
          },
          {
            "title": "Map of the Orchard Tract in the City of Los Angeles (M.R. 5-5, Aug. 2, 1882; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-005.pdf"
          }
        ],
        "minLat": 34.0477,
        "maxLat": 34.0487,
        "from": {
          "px": [
            1124,
            759
          ]
        },
        "to": {
          "px": [
            704,
            654
          ]
        }
      },
      {
        "label": "part of",
        "name": "Los Angeles Street",
        "entityId": "los-angeles-street",
        "namedAfter": "The city itself — how and when this stretch joined Los Angeles Street is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Los_Angeles_River",
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "In place by 1854 along its through stretch; the Plaza block to the north was a separate street, the Calle de los Negros, until this name was extended over it in 1910.",
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "categories": [
          "place"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Los Angeles Street",
            "url": "https://lastreetnames.com/street/los-angeles-street/"
          },
          {
            "title": "Wikipedia: Los Angeles Street",
            "url": "https://en.wikipedia.org/wiki/Los_Angeles_Street"
          },
          {
            "title": "Map of the Orchard Tract in the City of Los Angeles (M.R. 5-5, Aug. 2, 1882)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-005.pdf"
          }
        ],
        "minLat": 34.0435,
        "maxLat": 34.0477,
        "from": {
          "px": [
            704,
            654
          ]
        },
        "to": {
          "px": [
            547,
            511
          ]
        }
      },
      {
        "label": "part of",
        "name": "Los Angeles Street",
        "entityId": "los-angeles-street",
        "namedAfter": "The city itself — how and when this stretch joined Los Angeles Street is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Los_Angeles_River",
        "planned": {
          "text": "by 1886",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR011/MR011-063.pdf"
        },
        "built": "not yet researched",
        "note": "In place by 1854 along its through stretch; the Plaza block to the north was a separate street, the Calle de los Negros, until this name was extended over it in 1910.",
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "knownFraction": 0.8,
        "categories": [
          "place"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Los Angeles Street",
            "url": "https://lastreetnames.com/street/los-angeles-street/"
          },
          {
            "title": "Wikipedia: Los Angeles Street",
            "url": "https://en.wikipedia.org/wiki/Los_Angeles_Street"
          },
          {
            "title": "Map of Maple Avenue Tract in City of Los Angeles (M.R. 11-63, Oct. 21, 1886; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR011/MR011-063.pdf"
          },
          {
            "title": "Map of the Orchard Tract in the City of Los Angeles (M.R. 5-5, Aug. 2, 1882)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-005.pdf"
          }
        ],
        "minLat": 34.0422,
        "maxLat": 34.0435,
        "from": {
          "px": [
            547,
            511
          ]
        },
        "to": {
          "px": [
            217,
            811
          ]
        }
      },
      {
        "label": "part of",
        "name": "Los Angeles Street",
        "entityId": "los-angeles-street",
        "namedAfter": "The city itself, extended onto this stretch",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Los_Angeles_River",
        "planned": {
          "text": "by 1888",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR029/MR029-026.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1888",
            "until": null,
            "name": "Los Angeles Street",
            "entityId": "los-angeles-street",
            "formInForce": "Los Angeles Street",
            "how": "extension",
            "origin": "labeled “Los Angeles Street” on the 1888 Widow Botiller Tract resubdivision {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR029/MR029-026.pdf"
          }
        ],
        "note": "In place by 1854 along its through stretch; the Plaza block to the north was a separate street, the Calle de los Negros, until this name was extended over it in 1910.",
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
        },
        "knownFraction": 0.78,
        "categories": [
          "place"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Los Angeles Street",
            "url": "https://lastreetnames.com/street/los-angeles-street/"
          },
          {
            "title": "Wikipedia: Los Angeles Street",
            "url": "https://en.wikipedia.org/wiki/Los_Angeles_Street"
          },
          {
            "title": "Map of the Resubdivision of the Widow Botiller Tract (M.R. 29-26, Mar. 15, 1888; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR029/MR029-026.pdf"
          },
          {
            "title": "Map of the Orchard Tract in the City of Los Angeles (M.R. 5-5, Aug. 2, 1882)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-005.pdf"
          }
        ],
        "minLat": 34.0415,
        "maxLat": 34.0422,
        "from": {
          "px": [
            217,
            811
          ]
        },
        "to": {
          "px": [
            524,
            873
          ]
        }
      },
      {
        "label": "part of",
        "name": "Los Angeles Street",
        "entityId": "los-angeles-street",
        "namedAfter": "The city itself — how and when this stretch joined Los Angeles Street is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Los_Angeles_River",
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "In place by 1854 along its through stretch; the Plaza block to the north was a separate street, the Calle de los Negros, until this name was extended over it in 1910.",
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
        },
        "categories": [
          "place"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Los Angeles Street",
            "url": "https://lastreetnames.com/street/los-angeles-street/"
          },
          {
            "title": "Wikipedia: Los Angeles Street",
            "url": "https://en.wikipedia.org/wiki/Los_Angeles_Street"
          },
          {
            "title": "Map of the Orchard Tract in the City of Los Angeles (M.R. 5-5, Aug. 2, 1882)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-005.pdf"
          }
        ],
        "minLat": 34.041,
        "maxLat": 34.0415,
        "from": {
          "px": [
            524,
            873
          ]
        },
        "to": {
          "px": [
            536,
            284
          ]
        }
      },
      {
        "label": "part of",
        "name": "Los Angeles Street",
        "entityId": "los-angeles-street",
        "namedAfter": "The city itself, extended onto this stretch",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Los_Angeles_River",
        "planned": {
          "text": "by 1893",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-063.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1893",
            "until": null,
            "name": "Los Angeles Street",
            "entityId": "los-angeles-street",
            "formInForce": "Los Angeles Street",
            "how": "extension",
            "origin": "labeled “LOS ANGELES STREET” on the 1893 Hammel and Denker Tract {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-063.pdf"
          }
        ],
        "note": "In place by 1854 along its through stretch; the Plaza block to the north was a separate street, the Calle de los Negros, until this name was extended over it in 1910.",
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
        },
        "knownFraction": 0.76,
        "categories": [
          "place"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Los Angeles Street",
            "url": "https://lastreetnames.com/street/los-angeles-street/"
          },
          {
            "title": "Wikipedia: Los Angeles Street",
            "url": "https://en.wikipedia.org/wiki/Los_Angeles_Street"
          },
          {
            "title": "Map of Hammel and Denker Tract, Los Angeles City, California (M.R. 53-63, Oct. 1893; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-063.pdf"
          },
          {
            "title": "Map of the Orchard Tract in the City of Los Angeles (M.R. 5-5, Aug. 2, 1882)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-005.pdf"
          }
        ],
        "minLat": 34.0389,
        "maxLat": 34.041,
        "from": {
          "px": [
            536,
            284
          ]
        },
        "to": {
          "px": [
            497,
            307
          ]
        }
      },
      {
        "label": "part of",
        "name": "Los Angeles Street",
        "entityId": "los-angeles-street",
        "namedAfter": "The city itself — how and when this stretch joined Los Angeles Street is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Los_Angeles_River",
        "planned": {
          "text": "by 1885",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-378.pdf"
        },
        "built": "not yet researched",
        "note": "In place by 1854 along its through stretch; the Plaza block to the north was a separate street, the Calle de los Negros, until this name was extended over it in 1910.",
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
        },
        "knownFraction": 0.8,
        "categories": [
          "place"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Los Angeles Street",
            "url": "https://lastreetnames.com/street/los-angeles-street/"
          },
          {
            "title": "Wikipedia: Los Angeles Street",
            "url": "https://en.wikipedia.org/wiki/Los_Angeles_Street"
          },
          {
            "title": "Map of the O. W. Childs Tract, 200 Lots in the City of Los Angeles, Cal. (M.R. 6-378, July 11, 1885; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-378.pdf"
          },
          {
            "title": "Map of the Orchard Tract in the City of Los Angeles (M.R. 5-5, Aug. 2, 1882)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-005.pdf"
          }
        ],
        "minLat": 34.0362,
        "maxLat": 34.0389,
        "from": {
          "px": [
            497,
            307
          ]
        },
        "to": {
          "px": [
            538,
            887
          ]
        }
      },
      {
        "label": "part of",
        "name": "Los Angeles Street",
        "entityId": "los-angeles-street",
        "namedAfter": "The city itself — how and when this stretch joined Los Angeles Street is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Los_Angeles_River",
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "In place by 1854 along its through stretch; the Plaza block to the north was a separate street, the Calle de los Negros, until this name was extended over it in 1910.",
        "attested": false,
        "categories": [
          "place"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Los Angeles Street",
            "url": "https://lastreetnames.com/street/los-angeles-street/"
          },
          {
            "title": "Wikipedia: Los Angeles Street",
            "url": "https://en.wikipedia.org/wiki/Los_Angeles_Street"
          },
          {
            "title": "Map of the Orchard Tract in the City of Los Angeles (M.R. 5-5, Aug. 2, 1882)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-005.pdf"
          }
        ],
        "minLat": 34.0341,
        "maxLat": 34.0362,
        "from": {
          "px": [
            538,
            887
          ]
        },
        "to": {
          "px": [
            461,
            723
          ]
        }
      },
      {
        "label": "part of",
        "name": "Los Angeles Street",
        "entityId": "los-angeles-street",
        "namedAfter": "The city itself — how and when this stretch joined Los Angeles Street is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Los_Angeles_River",
        "planned": {
          "text": "by 1893",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-016.pdf"
        },
        "built": "not yet researched",
        "note": "In place by 1854 along its through stretch; the Plaza block to the north was a separate street, the Calle de los Negros, until this name was extended over it in 1910.",
        "attested": true,
        "knownFraction": 0.76,
        "categories": [
          "place"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Los Angeles Street",
            "url": "https://lastreetnames.com/street/los-angeles-street/"
          },
          {
            "title": "Wikipedia: Los Angeles Street",
            "url": "https://en.wikipedia.org/wiki/Los_Angeles_Street"
          },
          {
            "title": "Miguel Subdivision, part of the Celis Vineyard Tract in Los Angeles City, Cal. (M.R. 53-16, Mar. 25, 1893; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-016.pdf"
          },
          {
            "title": "Map of the Orchard Tract in the City of Los Angeles (M.R. 5-5, Aug. 2, 1882)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-005.pdf"
          }
        ],
        "minLat": 34.0327,
        "maxLat": 34.0341,
        "from": {
          "px": [
            461,
            723
          ]
        },
        "to": {
          "px": [
            473,
            1002
          ]
        }
      },
      {
        "label": "part of",
        "name": "Los Angeles Street",
        "entityId": "los-angeles-street",
        "namedAfter": "The city itself — how and when this stretch joined Los Angeles Street is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Los_Angeles_River",
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "In place by 1854 along its through stretch; the Plaza block to the north was a separate street, the Calle de los Negros, until this name was extended over it in 1910.",
        "attested": false,
        "categories": [
          "place"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Los Angeles Street",
            "url": "https://lastreetnames.com/street/los-angeles-street/"
          },
          {
            "title": "Wikipedia: Los Angeles Street",
            "url": "https://en.wikipedia.org/wiki/Los_Angeles_Street"
          },
          {
            "title": "Map of the Orchard Tract in the City of Los Angeles (M.R. 5-5, Aug. 2, 1882)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-005.pdf"
          }
        ],
        "maxLat": 34.0327,
        "from": {
          "px": [
            473,
            1002
          ]
        },
        "to": null
      }
    ]
  },
  "Lucas Avenue": {
    "name": "Lucas Avenue",
    "orientation": "NS",
    "segments": [
      {
        "label": "part of",
        "name": "Lucas Avenue",
        "entityId": "lucas-avenue",
        "namedAfter": "{{John Henry “J.H.” Lucas}} (1836–1924), attorney, who was selling the tract it was named on — how and when this stretch joined Lucas Avenue is not yet researched",
        "namedAfterLink": "https://lastreetnames.com/street/lucas-avenue/",
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "Named in 1884, on a tract Lucas was selling with Edward Bentley and Moye Wicks. Lucas had been in Tombstone three years earlier and served as both judge and witness at the hearings after the gunfight at the O.K. Corral.",
        "attested": false,
        "categories": [
          "person",
          "alive"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Recorded map: “Crownwood” (Witmer’s Subdivision of parts of Lots 2 and 7, Block 38, Hancock Survey; surveyed Nov. 1909 by Chas. Forman Jr.), M.B. 15-166",
            "url": "https://pw.lacounty.gov/smpm/landrecords/pdf/TR0015-166a.pdf"
          },
          {
            "title": "Plat of \"Crownwood\" (Dec. 10, 1909)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0015/TR0015-166a.pdf"
          }
        ],
        "minLat": 34.0612,
        "from": null,
        "to": {
          "px": [
            967,
            66
          ]
        }
      },
      {
        "label": "part of (original Lucas Ave)",
        "name": "Lucas Avenue",
        "entityId": "lucas-avenue",
        "namedAfter": "{{John Henry “J.H.” Lucas}} (1836–1924), attorney, who was selling the tract it was named on",
        "namedAfterLink": "https://lastreetnames.com/street/lucas-avenue/",
        "planned": {
          "text": "by 1909",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0015/TR0015-166a.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1909",
            "until": null,
            "name": "Lucas Avenue",
            "entityId": "lucas-avenue",
            "formInForce": "Lucas Avenue",
            "how": "origin",
            "origin": "labeled “LUCAS AVENUE” on the 1909 Crownwood {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0015/TR0015-166a.pdf"
          }
        ],
        "note": "Named in 1884, on a tract Lucas was selling with Edward Bentley and Moye Wicks. Lucas had been in Tombstone three years earlier and served as both judge and witness at the hearings after the gunfight at the O.K. Corral.",
        "attested": true,
        "knownFraction": 0.66,
        "categories": [
          "person",
          "alive"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Recorded map: “Crownwood” (Witmer’s Subdivision of parts of Lots 2 and 7, Block 38, Hancock Survey; surveyed Nov. 1909 by Chas. Forman Jr.), M.B. 15-166",
            "url": "https://pw.lacounty.gov/smpm/landrecords/pdf/TR0015-166a.pdf"
          },
          {
            "title": "Plat of \"Crownwood\" (Dec. 10, 1909; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0015/TR0015-166a.pdf"
          }
        ],
        "minLat": 34.0581,
        "maxLat": 34.0612,
        "from": {
          "px": [
            967,
            66
          ]
        },
        "to": {
          "px": [
            1017,
            1644
          ]
        }
      },
      {
        "label": "part of",
        "name": "Lucas Avenue",
        "entityId": "lucas-avenue",
        "namedAfter": "{{John Henry “J.H.” Lucas}} (1836–1924), attorney, who was selling the tract it was named on — how and when this stretch joined Lucas Avenue is not yet researched",
        "namedAfterLink": "https://lastreetnames.com/street/lucas-avenue/",
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "Named in 1884, on a tract Lucas was selling with Edward Bentley and Moye Wicks. Lucas had been in Tombstone three years earlier and served as both judge and witness at the hearings after the gunfight at the O.K. Corral.",
        "attested": false,
        "categories": [
          "person",
          "alive"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Recorded map: “Crownwood” (Witmer’s Subdivision of parts of Lots 2 and 7, Block 38, Hancock Survey; surveyed Nov. 1909 by Chas. Forman Jr.), M.B. 15-166",
            "url": "https://pw.lacounty.gov/smpm/landrecords/pdf/TR0015-166a.pdf"
          },
          {
            "title": "Plat of \"Crownwood\" (Dec. 10, 1909)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0015/TR0015-166a.pdf"
          }
        ],
        "maxLat": 34.0581,
        "from": {
          "px": [
            1017,
            1644
          ]
        },
        "to": null
      }
    ]
  },
  "Lyon Street": {
    "name": "Lyon Street",
    "entityId": "lyon-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": null,
    "built": {
      "text": "drawn, unlabelled, by Aug. 29, 1849 (Hutton / Ord Survey)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
    },
    "note": null,
    "attested": true,
    "knownFraction": 0,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "Plan de la Ciudad de Los Angeles (M.R. 53-73, Aug. 29, 1849)",
        "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
      }
    ]
  },
  "Magdalena Street": {
    "name": "Magdalena Street",
    "entityId": "magdalena-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "absentAsOf": {
      "text": "1849 (Hutton / Ord Survey)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
    },
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Main Street": {
    "name": "Main Street",
    "orientation": "NS",
    "segments": [
      {
        "label": "part of",
        "name": "Main Street",
        "entityId": "main-street-dtla",
        "namedAfter": "Its standing as the pueblo’s principal street — how and when this stretch joined Main Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "Older than the survey: the road was the Calle Real, the standard Spanish colonial name for a settlement’s principal road, before it was the Calle Principal. The Ord/Hutton survey fixed the anglicization, which is first found in print in May 1851.",
        "attested": false,
        "categories": [
          "descriptive"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Main Street",
            "url": "https://lastreetnames.com/street/main-street/"
          },
          {
            "title": "Wikipedia: Main Street (Los Angeles)",
            "url": "https://en.wikipedia.org/wiki/Main_Street_(Los_Angeles)"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          }
        ],
        "minLat": 34.0663,
        "from": null,
        "to": {
          "px": [
            1037,
            920
          ]
        }
      },
      {
        "label": "part of",
        "name": "Main Street",
        "entityId": "main-street-dtla",
        "namedAfter": "Its standing as the pueblo’s principal street — how and when this stretch joined Main Street is not yet researched",
        "namedAfterLink": null,
        "planned": null,
        "built": {
          "text": "drawn, unlabelled, by Aug. 29, 1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
        },
        "note": "Older than the survey: the road was the Calle Real, the standard Spanish colonial name for a settlement’s principal road, before it was the Calle Principal. The Ord/Hutton survey fixed the anglicization, which is first found in print in May 1851.",
        "attested": true,
        "knownFraction": 0,
        "categories": [
          "descriptive"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Main Street",
            "url": "https://lastreetnames.com/street/main-street/"
          },
          {
            "title": "Wikipedia: Main Street (Los Angeles)",
            "url": "https://en.wikipedia.org/wiki/Main_Street_(Los_Angeles)"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-73, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          }
        ],
        "minLat": 34.0633,
        "maxLat": 34.0663,
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
        }
      },
      {
        "label": "part of",
        "name": "Main Street",
        "entityId": "main-street-dtla",
        "namedAfter": "Its standing as the pueblo’s principal street — how and when this stretch joined Main Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "Older than the survey: the road was the Calle Real, the standard Spanish colonial name for a settlement’s principal road, before it was the Calle Principal. The Ord/Hutton survey fixed the anglicization, which is first found in print in May 1851.",
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
        },
        "categories": [
          "descriptive"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Main Street",
            "url": "https://lastreetnames.com/street/main-street/"
          },
          {
            "title": "Wikipedia: Main Street (Los Angeles)",
            "url": "https://en.wikipedia.org/wiki/Main_Street_(Los_Angeles)"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          }
        ],
        "minLat": 34.0612,
        "maxLat": 34.0633,
        "from": {
          "px": [
            716,
            824
          ]
        },
        "to": {
          "px": [
            549,
            832
          ]
        }
      },
      {
        "label": "part of",
        "name": "Main Street",
        "entityId": "main-street-dtla",
        "namedAfter": "Its standing as the pueblo’s principal street — how and when this stretch joined Main Street is not yet researched",
        "namedAfterLink": null,
        "planned": {
          "text": "1849",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
        },
        "built": "not yet researched",
        "note": "Older than the survey: the road was the Calle Real, the standard Spanish colonial name for a settlement’s principal road, before it was the Calle Principal. The Ord/Hutton survey fixed the anglicization, which is first found in print in May 1851.",
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
        },
        "knownFraction": 0,
        "categories": [
          "descriptive"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Main Street",
            "url": "https://lastreetnames.com/street/main-street/"
          },
          {
            "title": "Wikipedia: Main Street (Los Angeles)",
            "url": "https://en.wikipedia.org/wiki/Main_Street_(Los_Angeles)"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-73, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          }
        ],
        "minLat": 34.0607,
        "maxLat": 34.0612,
        "from": {
          "px": [
            549,
            832
          ]
        },
        "to": {
          "px": [
            503,
            832
          ]
        }
      },
      {
        "label": "part of",
        "name": "Main Street",
        "entityId": "main-street-dtla",
        "namedAfter": "Its standing as the pueblo’s principal street — how and when this stretch joined Main Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "Older than the survey: the road was the Calle Real, the standard Spanish colonial name for a settlement’s principal road, before it was the Calle Principal. The Ord/Hutton survey fixed the anglicization, which is first found in print in May 1851.",
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
        },
        "categories": [
          "descriptive"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Main Street",
            "url": "https://lastreetnames.com/street/main-street/"
          },
          {
            "title": "Wikipedia: Main Street (Los Angeles)",
            "url": "https://en.wikipedia.org/wiki/Main_Street_(Los_Angeles)"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          }
        ],
        "minLat": 34.0595,
        "maxLat": 34.0607,
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
        }
      },
      {
        "label": "part of",
        "name": "Main Street",
        "entityId": null,
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLat": 34.059,
        "maxLat": 34.0595,
        "from": {
          "px": [
            406,
            839
          ]
        },
        "to": {
          "px": [
            377,
            854
          ]
        }
      },
      {
        "label": "part of",
        "name": "Main Street",
        "entityId": "main-street-dtla",
        "namedAfter": "Its standing as the pueblo’s principal street — how and when this stretch joined Main Street is not yet researched",
        "namedAfterLink": null,
        "planned": null,
        "built": {
          "text": "drawn, unlabelled, by Aug. 29, 1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
        },
        "note": "Older than the survey: the road was the Calle Real, the standard Spanish colonial name for a settlement’s principal road, before it was the Calle Principal. The Ord/Hutton survey fixed the anglicization, which is first found in print in May 1851.",
        "attested": true,
        "knownFraction": 0,
        "categories": [
          "descriptive"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Main Street",
            "url": "https://lastreetnames.com/street/main-street/"
          },
          {
            "title": "Wikipedia: Main Street (Los Angeles)",
            "url": "https://en.wikipedia.org/wiki/Main_Street_(Los_Angeles)"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-73, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          }
        ],
        "minLat": 34.0582,
        "maxLat": 34.059,
        "from": {
          "px": [
            377,
            854
          ]
        },
        "to": {
          "px": [
            950,
            1408
          ]
        }
      },
      {
        "label": "part of",
        "name": "Main Street",
        "entityId": "main-street-dtla",
        "namedAfter": "Its standing as the pueblo’s principal street — how and when this stretch joined Main Street is not yet researched",
        "namedAfterLink": null,
        "planned": {
          "text": "1849",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
        },
        "built": {
          "text": "Aug. 29, 1849",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
        },
        "note": "Older than the survey: the road was the Calle Real, the standard Spanish colonial name for a settlement’s principal road, before it was the Calle Principal. The Ord/Hutton survey fixed the anglicization, which is first found in print in May 1851.",
        "attested": true,
        "knownFraction": 1,
        "categories": [
          "descriptive"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Main Street",
            "url": "https://lastreetnames.com/street/main-street/"
          },
          {
            "title": "Wikipedia: Main Street (Los Angeles)",
            "url": "https://en.wikipedia.org/wiki/Main_Street_(Los_Angeles)"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-73, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          }
        ],
        "minLat": 34.0548,
        "maxLat": 34.0582,
        "from": {
          "px": [
            950,
            1408
          ]
        },
        "to": {
          "px": [
            22,
            842
          ]
        }
      },
      {
        "label": "part of (original Main St)",
        "name": "Main Street",
        "entityId": "main-street-dtla",
        "namedAfter": "Its standing as the pueblo’s principal street",
        "namedAfterLink": null,
        "planned": {
          "text": "1849",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "1849",
            "until": null,
            "name": "Main Street",
            "entityId": "main-street-dtla",
            "formInForce": "Main Street",
            "how": "origin",
            "origin": "labeled “MAIN STREET” and “CALLE PRINCIPAL” on the 1849 Hutton / Ord Survey {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
          }
        ],
        "note": "Older than the survey: the road was the Calle Real, the standard Spanish colonial name for a settlement’s principal road, before it was the Calle Principal. The Ord/Hutton survey fixed the anglicization, which is first found in print in May 1851.",
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
        },
        "knownFraction": 1,
        "categories": [
          "descriptive"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Main Street",
            "url": "https://lastreetnames.com/street/main-street/"
          },
          {
            "title": "Wikipedia: Main Street (Los Angeles)",
            "url": "https://en.wikipedia.org/wiki/Main_Street_(Los_Angeles)"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-71, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          }
        ],
        "minLat": 34.0431,
        "maxLat": 34.0548,
        "from": {
          "px": [
            22,
            842
          ]
        },
        "to": {
          "px": [
            217,
            552
          ]
        }
      },
      {
        "label": "part of",
        "name": "Main Street",
        "entityId": "main-street-dtla",
        "namedAfter": "Its standing as the pueblo’s principal street, extended onto this stretch",
        "namedAfterLink": null,
        "planned": {
          "text": "by 1888",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR029/MR029-026.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1888",
            "until": null,
            "name": "Main Street",
            "entityId": "main-street-dtla",
            "formInForce": "Main Street",
            "how": "extension",
            "origin": "labeled “Main Street” on the 1888 Widow Botiller Tract resubdivision {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR029/MR029-026.pdf"
          }
        ],
        "note": "Older than the survey: the road was the Calle Real, the standard Spanish colonial name for a settlement’s principal road, before it was the Calle Principal. The Ord/Hutton survey fixed the anglicization, which is first found in print in May 1851.",
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
        },
        "knownFraction": 0.78,
        "categories": [
          "descriptive"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Main Street",
            "url": "https://lastreetnames.com/street/main-street/"
          },
          {
            "title": "Wikipedia: Main Street (Los Angeles)",
            "url": "https://en.wikipedia.org/wiki/Main_Street_(Los_Angeles)"
          },
          {
            "title": "Map of the Resubdivision of the Widow Botiller Tract (M.R. 29-26, Mar. 15, 1888; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR029/MR029-026.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          }
        ],
        "minLat": 34.0424,
        "maxLat": 34.0431,
        "from": {
          "px": [
            217,
            552
          ]
        },
        "to": {
          "px": [
            194,
            865
          ]
        }
      },
      {
        "label": "beyond 9th",
        "name": "Main Street",
        "entityId": "main-street-dtla",
        "namedAfter": "Its standing as the pueblo’s principal street — how and when this stretch joined Main Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "Older than the survey: the road was the Calle Real, the standard Spanish colonial name for a settlement’s principal road, before it was the Calle Principal. The Ord/Hutton survey fixed the anglicization, which is first found in print in May 1851.",
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
        },
        "categories": [
          "descriptive"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Main Street",
            "url": "https://lastreetnames.com/street/main-street/"
          },
          {
            "title": "Wikipedia: Main Street (Los Angeles)",
            "url": "https://en.wikipedia.org/wiki/Main_Street_(Los_Angeles)"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          }
        ],
        "minLat": 34.0416,
        "maxLat": 34.0424,
        "from": {
          "px": [
            194,
            865
          ]
        },
        "to": "9th Street"
      },
      {
        "label": "beyond 9th",
        "name": "Main Street",
        "entityId": "main-street-dtla",
        "namedAfter": "Its standing as the pueblo’s principal street, extended onto this stretch",
        "namedAfterLink": null,
        "planned": {
          "text": "by 1893",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-063.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1893",
            "until": null,
            "name": "Main Street",
            "entityId": "main-street-dtla",
            "formInForce": "Main Street",
            "how": "extension",
            "origin": "labeled “MAIN STREET” on the 1893 Hammel and Denker Tract {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-063.pdf"
          }
        ],
        "note": "Older than the survey: the road was the Calle Real, the standard Spanish colonial name for a settlement’s principal road, before it was the Calle Principal. The Ord/Hutton survey fixed the anglicization, which is first found in print in May 1851.",
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
        },
        "knownFraction": 0.76,
        "categories": [
          "descriptive"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Main Street",
            "url": "https://lastreetnames.com/street/main-street/"
          },
          {
            "title": "Wikipedia: Main Street (Los Angeles)",
            "url": "https://en.wikipedia.org/wiki/Main_Street_(Los_Angeles)"
          },
          {
            "title": "Map of Hammel and Denker Tract, Los Angeles City, California (M.R. 53-63, Oct. 1893; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-063.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          }
        ],
        "minLat": 34.0396,
        "maxLat": 34.0416,
        "from": "9th Street",
        "to": {
          "px": [
            304,
            307
          ]
        }
      },
      {
        "label": "part of",
        "name": "Main Street",
        "entityId": "main-street-dtla",
        "namedAfter": "Its standing as the pueblo’s principal street — how and when this stretch joined Main Street is not yet researched",
        "namedAfterLink": null,
        "planned": {
          "text": "by 1885",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-378.pdf"
        },
        "built": "not yet researched",
        "note": "Older than the survey: the road was the Calle Real, the standard Spanish colonial name for a settlement’s principal road, before it was the Calle Principal. The Ord/Hutton survey fixed the anglicization, which is first found in print in May 1851.",
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
        },
        "knownFraction": 0.8,
        "categories": [
          "descriptive"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Main Street",
            "url": "https://lastreetnames.com/street/main-street/"
          },
          {
            "title": "Wikipedia: Main Street (Los Angeles)",
            "url": "https://en.wikipedia.org/wiki/Main_Street_(Los_Angeles)"
          },
          {
            "title": "Map of the O. W. Childs Tract, 200 Lots in the City of Los Angeles, Cal. (M.R. 6-378, July 11, 1885; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-378.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          }
        ],
        "minLat": 34.0368,
        "maxLat": 34.0396,
        "from": {
          "px": [
            304,
            307
          ]
        },
        "to": {
          "px": [
            351,
            896
          ]
        }
      },
      {
        "label": "part of",
        "name": "Main Street",
        "entityId": "main-street-dtla",
        "namedAfter": "Its standing as the pueblo’s principal street — how and when this stretch joined Main Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "Older than the survey: the road was the Calle Real, the standard Spanish colonial name for a settlement’s principal road, before it was the Calle Principal. The Ord/Hutton survey fixed the anglicization, which is first found in print in May 1851.",
        "attested": false,
        "categories": [
          "descriptive"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Main Street",
            "url": "https://lastreetnames.com/street/main-street/"
          },
          {
            "title": "Wikipedia: Main Street (Los Angeles)",
            "url": "https://en.wikipedia.org/wiki/Main_Street_(Los_Angeles)"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          }
        ],
        "minLat": 34.0347,
        "maxLat": 34.0368,
        "from": {
          "px": [
            351,
            896
          ]
        },
        "to": {
          "px": [
            279,
            732
          ]
        }
      },
      {
        "label": "part of",
        "name": "Main Street",
        "entityId": "main-street-dtla",
        "namedAfter": "Its standing as the pueblo’s principal street — how and when this stretch joined Main Street is not yet researched",
        "namedAfterLink": null,
        "planned": {
          "text": "by 1893",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-016.pdf"
        },
        "built": "not yet researched",
        "note": "Older than the survey: the road was the Calle Real, the standard Spanish colonial name for a settlement’s principal road, before it was the Calle Principal. The Ord/Hutton survey fixed the anglicization, which is first found in print in May 1851.",
        "attested": true,
        "knownFraction": 0.76,
        "categories": [
          "descriptive"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Main Street",
            "url": "https://lastreetnames.com/street/main-street/"
          },
          {
            "title": "Wikipedia: Main Street (Los Angeles)",
            "url": "https://en.wikipedia.org/wiki/Main_Street_(Los_Angeles)"
          },
          {
            "title": "Miguel Subdivision, part of the Celis Vineyard Tract in Los Angeles City, Cal. (M.R. 53-16, Mar. 25, 1893; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-016.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          }
        ],
        "minLat": 34.0333,
        "maxLat": 34.0347,
        "from": {
          "px": [
            279,
            732
          ]
        },
        "to": {
          "px": [
            291,
            1009
          ]
        }
      },
      {
        "label": "part of",
        "name": "Main Street",
        "entityId": "main-street-dtla",
        "namedAfter": "Its standing as the pueblo’s principal street — how and when this stretch joined Main Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "Older than the survey: the road was the Calle Real, the standard Spanish colonial name for a settlement’s principal road, before it was the Calle Principal. The Ord/Hutton survey fixed the anglicization, which is first found in print in May 1851.",
        "attested": false,
        "categories": [
          "descriptive"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Main Street",
            "url": "https://lastreetnames.com/street/main-street/"
          },
          {
            "title": "Wikipedia: Main Street (Los Angeles)",
            "url": "https://en.wikipedia.org/wiki/Main_Street_(Los_Angeles)"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          }
        ],
        "maxLat": 34.0333,
        "from": {
          "px": [
            291,
            1009
          ]
        },
        "to": null
      }
    ]
  },
  "Maple Avenue": {
    "name": "Maple Avenue",
    "orientation": "NS",
    "segments": [
      {
        "label": "part of (Regent St)",
        "name": "Maple Avenue",
        "entityId": "maple-dtla",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "by 1876",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-166.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1876",
            "until": "?",
            "name": "Regent Street",
            "entityId": "regent-street",
            "formInForce": "Regent Street",
            "how": "origin",
            "origin": "labeled “Regent Street” on the 1876 Moreno Vineyard Tract {{(source)}} — lettered between Los Angeles Street and Wall Street on the Moreno Vineyard Tract, the building lots laid out beside the new railroad depot and recorded in March 1876. Nothing says what it was named for; London's Regent Street, two blocks from a Wall Street, is the obvious guess and no source supports it. The corridor is Maple Avenue today, between 5th and 6th",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-166.pdf"
          },
          {
            "from": "?",
            "until": null,
            "name": "Maple Avenue",
            "entityId": "maple-dtla",
            "formInForce": "Maple Avenue",
            "how": "renaming",
            "origin": "arrival on this stretch not directly documented",
            "originLink": null
          }
        ],
        "note": "A tree name, undocumented. The earliest sheet here that letters it is the O. W. Childs Tract of July 1885, at Eleventh and Twelfth; the corridor further north was NOT Maple in 1876, when the Moreno Vineyard sheet letters it Regent Street between 5th and 6th. So the name spread along this corridor at some undated point, and where it started is an open question rather than a settled one.",
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "knownFraction": 0,
        "categories": [
          "nature",
          "unknown",
          "renamed"
        ],
        "formerCategories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Map showing Building Lots near L.A. & I. RR. Depot on San Pedro Street known as the Moreno Vineyard Tract (M.R. 3-166, Mar. 1, 1876; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-166.pdf"
          },
          {
            "title": "Map of the O. W. Childs Tract, 200 Lots in the City of Los Angeles, Cal. (M.R. 6-378, July 11, 1885)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-378.pdf"
          }
        ],
        "minLat": 34.0439,
        "from": null,
        "to": {
          "px": [
            633,
            1117
          ]
        }
      },
      {
        "label": "part of",
        "name": "Maple Avenue",
        "entityId": "maple-dtla",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "A tree name, undocumented. The earliest sheet here that letters it is the O. W. Childs Tract of July 1885, at Eleventh and Twelfth; the corridor further north was NOT Maple in 1876, when the Moreno Vineyard sheet letters it Regent Street between 5th and 6th. So the name spread along this corridor at some undated point, and where it started is an open question rather than a settled one.",
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "categories": [
          "nature",
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Map of the O. W. Childs Tract, 200 Lots in the City of Los Angeles, Cal. (M.R. 6-378, July 11, 1885)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-378.pdf"
          }
        ],
        "minLat": 34.0427,
        "maxLat": 34.0439,
        "from": {
          "px": [
            633,
            1117
          ]
        },
        "to": {
          "px": [
            778,
            706
          ]
        }
      },
      {
        "label": "part of",
        "name": "Maple Avenue",
        "entityId": "maple-dtla",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "by 1886",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR011/MR011-063.pdf"
        },
        "built": "not yet researched",
        "note": "A tree name, undocumented. The earliest sheet here that letters it is the O. W. Childs Tract of July 1885, at Eleventh and Twelfth; the corridor further north was NOT Maple in 1876, when the Moreno Vineyard sheet letters it Regent Street between 5th and 6th. So the name spread along this corridor at some undated point, and where it started is an open question rather than a settled one.",
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "knownFraction": 0.8,
        "categories": [
          "nature",
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Map of Maple Avenue Tract in City of Los Angeles (M.R. 11-63, Oct. 21, 1886; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR011/MR011-063.pdf"
          },
          {
            "title": "Map of the O. W. Childs Tract, 200 Lots in the City of Los Angeles, Cal. (M.R. 6-378, July 11, 1885)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-378.pdf"
          }
        ],
        "minLat": 34.0412,
        "maxLat": 34.0427,
        "from": {
          "px": [
            778,
            706
          ]
        },
        "to": {
          "px": [
            445,
            1045
          ]
        }
      },
      {
        "label": "part of",
        "name": "Maple Avenue",
        "entityId": "maple-dtla",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "by 1888",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR029/MR029-026.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1888",
            "until": null,
            "name": "Maple Avenue",
            "entityId": "maple-dtla",
            "formInForce": "Maple Avenue",
            "how": "extension",
            "origin": "labeled “Maple Avenue” on the 1888 Widow Botiller Tract resubdivision {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR029/MR029-026.pdf"
          }
        ],
        "note": "A tree name, undocumented. The earliest sheet here that letters it is the O. W. Childs Tract of July 1885, at Eleventh and Twelfth; the corridor further north was NOT Maple in 1876, when the Moreno Vineyard sheet letters it Regent Street between 5th and 6th. So the name spread along this corridor at some undated point, and where it started is an open question rather than a settled one.",
        "attested": true,
        "knownFraction": 0.78,
        "categories": [
          "nature",
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Map of the Resubdivision of the Widow Botiller Tract (M.R. 29-26, Mar. 15, 1888; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR029/MR029-026.pdf"
          },
          {
            "title": "Map of the O. W. Childs Tract, 200 Lots in the City of Los Angeles, Cal. (M.R. 6-378, July 11, 1885)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-378.pdf"
          }
        ],
        "minLat": 34.0404,
        "maxLat": 34.0412,
        "from": {
          "px": [
            445,
            1045
          ]
        },
        "to": {
          "px": [
            968,
            885
          ]
        }
      },
      {
        "label": "part of",
        "name": "Maple Avenue",
        "entityId": "maple-dtla",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "A tree name, undocumented. The earliest sheet here that letters it is the O. W. Childs Tract of July 1885, at Eleventh and Twelfth; the corridor further north was NOT Maple in 1876, when the Moreno Vineyard sheet letters it Regent Street between 5th and 6th. So the name spread along this corridor at some undated point, and where it started is an open question rather than a settled one.",
        "attested": false,
        "categories": [
          "nature",
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Map of the O. W. Childs Tract, 200 Lots in the City of Los Angeles, Cal. (M.R. 6-378, July 11, 1885)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-378.pdf"
          }
        ],
        "minLat": 34.0397,
        "maxLat": 34.0404,
        "from": {
          "px": [
            968,
            885
          ]
        },
        "to": {
          "px": [
            258,
            527
          ]
        }
      },
      {
        "label": "part of",
        "name": "Maple Avenue",
        "entityId": "maple-dtla",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "by 1887",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR016/MR016-027.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1887",
            "until": null,
            "name": "Maple Avenue",
            "entityId": "maple-dtla",
            "formInForce": "Maple Avenue",
            "how": "extension",
            "origin": "labeled “Maple Avenue” on the 1887 Moran Tract {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR016/MR016-027.pdf"
          }
        ],
        "note": "A tree name, undocumented. The earliest sheet here that letters it is the O. W. Childs Tract of July 1885, at Eleventh and Twelfth; the corridor further north was NOT Maple in 1876, when the Moreno Vineyard sheet letters it Regent Street between 5th and 6th. So the name spread along this corridor at some undated point, and where it started is an open question rather than a settled one.",
        "attested": true,
        "knownFraction": 0.79,
        "categories": [
          "nature",
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Map of the Moran Tract (M.R. 16-27, Apr. 22, 1887; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR016/MR016-027.pdf"
          },
          {
            "title": "Map of the O. W. Childs Tract, 200 Lots in the City of Los Angeles, Cal. (M.R. 6-378, July 11, 1885)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-378.pdf"
          }
        ],
        "minLat": 34.0376,
        "maxLat": 34.0397,
        "from": {
          "px": [
            258,
            527
          ]
        },
        "to": {
          "px": [
            868,
            306
          ]
        }
      },
      {
        "label": "part of (original Maple Ave)",
        "name": "Maple Avenue",
        "entityId": "maple-dtla",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "by 1885",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-378.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1885",
            "until": null,
            "name": "Maple Avenue",
            "entityId": "maple-dtla",
            "formInForce": "Maple Avenue",
            "how": "origin",
            "origin": "labeled “Maple Ave.” on the 1885 O. W. Childs Tract {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-378.pdf"
          }
        ],
        "note": "A tree name, undocumented. The earliest sheet here that letters it is the O. W. Childs Tract of July 1885, at Eleventh and Twelfth; the corridor further north was NOT Maple in 1876, when the Moreno Vineyard sheet letters it Regent Street between 5th and 6th. So the name spread along this corridor at some undated point, and where it started is an open question rather than a settled one.",
        "attested": true,
        "knownFraction": 0.8,
        "categories": [
          "nature",
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Map of the O. W. Childs Tract, 200 Lots in the City of Los Angeles, Cal. (M.R. 6-378, July 11, 1885; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-378.pdf"
          }
        ],
        "minLat": 34.035,
        "maxLat": 34.0376,
        "from": {
          "px": [
            868,
            306
          ]
        },
        "to": {
          "px": [
            913,
            868
          ]
        }
      },
      {
        "label": "part of",
        "name": "Maple Avenue",
        "entityId": "maple-dtla",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "A tree name, undocumented. The earliest sheet here that letters it is the O. W. Childs Tract of July 1885, at Eleventh and Twelfth; the corridor further north was NOT Maple in 1876, when the Moreno Vineyard sheet letters it Regent Street between 5th and 6th. So the name spread along this corridor at some undated point, and where it started is an open question rather than a settled one.",
        "attested": false,
        "categories": [
          "nature",
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Map of the O. W. Childs Tract, 200 Lots in the City of Los Angeles, Cal. (M.R. 6-378, July 11, 1885)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-378.pdf"
          }
        ],
        "minLat": 34.0329,
        "maxLat": 34.035,
        "from": {
          "px": [
            913,
            868
          ]
        },
        "to": {
          "px": [
            830,
            703
          ]
        }
      },
      {
        "label": "beyond 16th",
        "name": "Maple Avenue",
        "entityId": "maple-dtla",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "by 1893",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-016.pdf"
        },
        "built": "not yet researched",
        "note": "A tree name, undocumented. The earliest sheet here that letters it is the O. W. Childs Tract of July 1885, at Eleventh and Twelfth; the corridor further north was NOT Maple in 1876, when the Moreno Vineyard sheet letters it Regent Street between 5th and 6th. So the name spread along this corridor at some undated point, and where it started is an open question rather than a settled one.",
        "attested": true,
        "knownFraction": 0.76,
        "categories": [
          "nature",
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Miguel Subdivision, part of the Celis Vineyard Tract in Los Angeles City, Cal. (M.R. 53-16, Mar. 25, 1893; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-016.pdf"
          },
          {
            "title": "Map of the O. W. Childs Tract, 200 Lots in the City of Los Angeles, Cal. (M.R. 6-378, July 11, 1885)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-378.pdf"
          }
        ],
        "maxLat": 34.0329,
        "from": {
          "px": [
            830,
            703
          ]
        },
        "to": null
      }
    ]
  },
  "Margo Street": {
    "name": "Margo Street",
    "entityId": "margo-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Marion Avenue": {
    "name": "Marion Avenue",
    "entityId": "marion-avenue",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Marketplace": {
    "name": "Marketplace",
    "entityId": "marketplace",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "absentAsOf": {
      "text": "1869 (Mott Tract building lots)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf"
    },
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Marview Avenue": {
    "name": "Marview Avenue",
    "entityId": "marview-avenue",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Maryland Street": {
    "name": "Maryland Street",
    "orientation": "EW",
    "segments": [
      {
        "label": "west of Burlington",
        "name": "Maryland Street",
        "entityId": "maryland-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "maxLng": -118.27,
        "from": null,
        "to": "Burlington Avenue",
        "gapAfter": true
      },
      {
        "label": "east of Lucas (discontinuous)",
        "name": "Maryland Street",
        "entityId": "maryland-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLng": -118.27,
        "from": "Lucas Avenue",
        "to": null
      }
    ]
  },
  "Mateo Street": {
    "name": "Mateo Street",
    "orientation": "NS",
    "segments": [
      {
        "label": "part of",
        "name": "Mateo Street",
        "entityId": "mateo-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLat": 34.0393,
        "from": null,
        "to": {
          "px": [
            188,
            648
          ]
        }
      },
      {
        "label": "part of (Spruce St)",
        "name": "Mateo Street",
        "entityId": "mateo-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "by 1886",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR011/MR011-042.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1886",
            "until": "?",
            "name": "Spruce Street",
            "entityId": "spruce",
            "formInForce": "Spruce Street",
            "how": "origin",
            "origin": "labeled “Spruce St” on the 1886 Goodwin Tract {{(source)}} — one of a run of tree and plant names platted on the Goodwin Tract in October 1886 — Palm, Spruce, Tulip and Willow together. None of them is documented beyond the plat, and the theme is the whole of the argument. This one ran along modern Mateo Street",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR011/MR011-042.pdf"
          },
          {
            "from": "?",
            "until": null,
            "name": "Mateo Street",
            "entityId": "mateo-street",
            "formInForce": "Mateo Street",
            "how": "renaming",
            "origin": "arrival on this stretch not directly documented",
            "originLink": null
          }
        ],
        "note": null,
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "knownFraction": 0,
        "categories": [
          "unresearched",
          "renamed"
        ],
        "formerCategories": [
          "nature",
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Plan of the Goodwin Tract (M.R. 11-42, Oct. 6, 1886; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR011/MR011-042.pdf"
          },
          {
            "title": "Wikipedia: Arts District, Los Angeles",
            "url": "https://en.wikipedia.org/wiki/Arts_District,_Los_Angeles"
          }
        ],
        "minLat": 34.0369,
        "maxLat": 34.0393,
        "from": {
          "px": [
            188,
            648
          ]
        },
        "to": {
          "px": [
            168,
            1199
          ]
        }
      },
      {
        "label": "part of",
        "name": "Mateo Street",
        "entityId": "mateo-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLat": 34.0364,
        "maxLat": 34.0369,
        "from": {
          "px": [
            168,
            1199
          ]
        },
        "to": {
          "px": [
            387,
            1313
          ]
        }
      },
      {
        "label": "part of",
        "name": "Mateo Street",
        "entityId": "mateo-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "maxLat": 34.0364,
        "from": {
          "px": [
            387,
            1313
          ]
        },
        "to": null
      }
    ]
  },
  "Mei Ling Way": {
    "name": "Mei Ling Way",
    "entityId": "mei-ling-way",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "absentAsOf": {
      "text": "1849 (Hutton / Ord Survey)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
    },
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Merchant Street": {
    "name": "Merchant Street",
    "orientation": "NS",
    "segments": [
      {
        "label": "part of",
        "name": "Merchant Street",
        "entityId": "merchant-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLat": 34.0362,
        "from": null,
        "to": {
          "px": [
            19,
            892
          ]
        }
      },
      {
        "label": "part of",
        "name": "Merchant Street",
        "entityId": "merchant-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "maxLat": 34.0362,
        "from": {
          "px": [
            19,
            892
          ]
        },
        "to": null
      }
    ]
  },
  "Merrick Street": {
    "name": "Merrick Street",
    "entityId": "merrick-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": {
      "text": "by 1887",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR013/MR013-087.pdf"
    },
    "built": "not yet researched",
    "note": null,
    "attested": true,
    "absentAsOf": {
      "text": "1849 (Hutton / Ord Survey)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
    },
    "knownFraction": 0,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "Recorded map: Mills and Wicks' Extension of Second St. and adjoining subdivision, City of Los Angeles, M.R. 13-87 — lots 1–144 and 160–236 subdivided at the request of M. L. Wicks and Howard W. Mills, April–May 1886, under the direction of Geo. C. Knox; further lots added Jan. 1887 (sheet 1 of 2)",
        "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR013/MR013-087.pdf"
      }
    ]
  },
  "Mesnager Street": {
    "name": "Mesnager Street",
    "entityId": "mesnager-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Mesquit Street": {
    "name": "Mesquit Street",
    "orientation": "NS",
    "segments": [
      {
        "label": "beyond Santa Fe (original Mesquit St)",
        "name": "Mesquit Street",
        "entityId": "mesquit",
        "namedAfter": "Presumably the mesquite, alongside the Goodwin Tract's other plant names, but nothing documents it.",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Mesquite",
        "planned": {
          "text": "by 1886",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR011/MR011-042.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1886",
            "until": null,
            "name": "Mesquit Street",
            "entityId": "mesquit",
            "formInForce": "Mesquit Street",
            "how": "origin",
            "origin": "labeled “Mesquit St” on the 1886 Goodwin Tract {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR011/MR011-042.pdf"
          }
        ],
        "note": "The plat already spells it “Mesquit” without the terminal E, which is how the street signs still spell it.",
        "attested": true,
        "knownFraction": 0.8,
        "categories": [
          "nature"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Wikipedia: Arts District, Los Angeles",
            "url": "https://en.wikipedia.org/wiki/Arts_District,_Los_Angeles"
          },
          {
            "title": "Plan of the Goodwin Tract (M.R. 11-42, Oct. 6, 1886; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR011/MR011-042.pdf"
          }
        ],
        "minLat": 34.0366,
        "from": null,
        "to": {
          "px": [
            789,
            1344
          ]
        }
      },
      {
        "label": "part of",
        "name": "Mesquit Street",
        "entityId": "mesquit",
        "namedAfter": "Presumably the mesquite, alongside the Goodwin Tract's other plant names, but nothing documents it. — how and when this stretch joined Mesquit Street is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Mesquite",
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "The plat already spells it “Mesquit” without the terminal E, which is how the street signs still spell it.",
        "attested": false,
        "categories": [
          "nature"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Wikipedia: Arts District, Los Angeles",
            "url": "https://en.wikipedia.org/wiki/Arts_District,_Los_Angeles"
          },
          {
            "title": "Plan of the Goodwin Tract (M.R. 11-42, Oct. 6, 1886)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR011/MR011-042.pdf"
          }
        ],
        "maxLat": 34.0366,
        "from": {
          "px": [
            789,
            1344
          ]
        },
        "to": null
      }
    ]
  },
  "Metro Driveway": {
    "name": "Metro Driveway",
    "entityId": "metro-driveway",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "absentAsOf": {
      "text": "1849 (Hutton / Ord Survey)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
    },
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Mignonette Street": {
    "name": "Mignonette Street",
    "entityId": "mignonette-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Mill Street": {
    "name": "Mill Street",
    "orientation": "NS",
    "segments": [
      {
        "label": "part of",
        "name": "Mill Street",
        "entityId": "mill-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLat": 34.0354,
        "from": null,
        "to": {
          "px": [
            268,
            1271
          ]
        }
      },
      {
        "label": "part of",
        "name": "Mill Street",
        "entityId": "mill-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "maxLat": 34.0354,
        "from": {
          "px": [
            268,
            1271
          ]
        },
        "to": null
      }
    ]
  },
  "Miramar Street": {
    "name": "Miramar Street",
    "orientation": "EW",
    "segments": [
      {
        "label": "west of Union",
        "name": "Miramar Street",
        "entityId": "miramar-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "maxLng": -118.2675,
        "from": null,
        "to": "Union Avenue",
        "gapAfter": true
      },
      {
        "label": "Columbia to Lucas (3rd St) (discontinuous)",
        "name": "Miramar Street",
        "entityId": "miramar-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "by 1909",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0015/TR0015-166a.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1909",
            "until": "?",
            "name": "3rd Street",
            "entityId": "third-street",
            "formInForce": "3rd Street",
            "origin": "labeled “W. 3RD STREET” on the 1909 Crownwood (sheets 1, 2) {{(source)}} — Its ordinal position in the downtown grid — the numbering system was in place by 1849",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0015/TR0015-166a.pdf"
          },
          {
            "from": "?",
            "until": null,
            "name": "Miramar Street",
            "entityId": "miramar-street",
            "formInForce": "Miramar Street",
            "how": "renaming",
            "origin": "arrival on this stretch not directly documented",
            "originLink": null
          }
        ],
        "note": null,
        "attested": true,
        "knownFraction": 0,
        "categories": [
          "unresearched",
          "renamed"
        ],
        "formerCategories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Plat of \"Crownwood\" (Dec. 10, 1909; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0015/TR0015-166a.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          },
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          }
        ],
        "minLng": -118.2675,
        "maxLng": -118.261,
        "from": "Columbia Avenue",
        "to": "Lucas Avenue",
        "gapAfter": true
      },
      {
        "label": "Bixel to Boylston (3rd St) (discontinuous)",
        "name": "Miramar Street",
        "entityId": "miramar-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "by 1894",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR066/MR066-035.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1894",
            "until": "?",
            "name": "3rd Street",
            "entityId": "third-street",
            "formInForce": "3rd Street",
            "origin": "labeled “THIRD ST.” on the 1894 Washington Tract map {{(source)}} — Its ordinal position in the downtown grid — the numbering system was in place by 1849",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR066/MR066-035.pdf"
          },
          {
            "from": "?",
            "until": null,
            "name": "Miramar Street",
            "entityId": "miramar-street",
            "formInForce": "Miramar Street",
            "how": "renaming",
            "origin": "arrival on this stretch not directly documented",
            "originLink": null
          }
        ],
        "note": null,
        "attested": true,
        "knownFraction": 0,
        "categories": [
          "unresearched",
          "renamed"
        ],
        "formerCategories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Recorded map: Compromise Subdivision of a portion of the O.T. Johnson tract, known as the Washington Tract, M.R. 66-35 (surveyed Mar. 1894 by E.D. Severance) (identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR066/MR066-035.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          },
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          }
        ],
        "minLng": -118.261,
        "maxLng": -118.2576,
        "from": "Bixel Street",
        "to": "Boylston Street"
      },
      {
        "label": "east of Boylston",
        "name": "Miramar Street",
        "entityId": "miramar-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLng": -118.2576,
        "from": "Boylston Street",
        "to": null
      }
    ]
  },
  "Mission Road": {
    "name": "Mission Road",
    "orientation": "NS",
    "segments": [
      {
        "label": "north of Jesse (discontinuous)",
        "name": "Mission Road",
        "entityId": "mission-road",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLat": 34.0347,
        "from": null,
        "to": "Jesse Street",
        "gapAfter": true
      },
      {
        "label": "south of 7th",
        "name": "Mission Road",
        "entityId": "mission-road",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "maxLat": 34.0347,
        "from": "7th Street",
        "to": null
      }
    ]
  },
  "Molino Street": {
    "name": "Molino Street",
    "entityId": "molino-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "absentAsOf": {
      "text": "1849 (Hutton / Ord Survey)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
    },
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Mountain View Avenue": {
    "name": "Mountain View Avenue",
    "entityId": "mountain-view-avenue",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Myers Street": {
    "name": "Myers Street",
    "orientation": "NS",
    "segments": [
      {
        "label": "part of (discontinuous)",
        "name": "Myers Street",
        "entityId": "myers-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLat": 34.0363,
        "from": null,
        "to": null,
        "gapAfter": true
      },
      {
        "label": "south of Jesse",
        "name": "Myers Street",
        "entityId": "myers-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "maxLat": 34.0363,
        "from": "Jesse Street",
        "to": null
      }
    ]
  },
  "Myrtle Street": {
    "name": "Myrtle Street",
    "entityId": "myrtle-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Naud Street": {
    "name": "Naud Street",
    "orientation": "EW",
    "segments": [
      {
        "label": "part of",
        "name": "Naud Street",
        "entityId": "naud-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
        },
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "maxLng": -118.2301,
        "from": null,
        "to": {
          "px": [
            1012,
            835
          ]
        },
        "gapAfter": true
      },
      {
        "label": "east of Mesnager (discontinuous)",
        "name": "Naud Street",
        "entityId": "naud-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLng": -118.2301,
        "from": "Mesnager Street",
        "to": null
      }
    ]
  },
  "New Depot Street": {
    "name": "New Depot Street",
    "orientation": "EW",
    "segments": [
      {
        "label": "part of",
        "name": "New Depot Street",
        "entityId": "new-depot-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "maxLng": -118.2426,
        "from": null,
        "to": {
          "px": [
            510,
            357
          ]
        }
      },
      {
        "label": "part of",
        "name": "New Depot Street",
        "entityId": "new-depot-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
        },
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLng": -118.2426,
        "from": {
          "px": [
            510,
            357
          ]
        },
        "to": null
      }
    ]
  },
  "New High Street": {
    "name": "New High Street",
    "orientation": "NS",
    "segments": [
      {
        "label": "part of",
        "name": "New High Street",
        "entityId": "new-high-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
        },
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLat": 34.0583,
        "from": null,
        "to": {
          "px": [
            898,
            1337
          ]
        }
      },
      {
        "label": "part of",
        "name": "New High Street",
        "entityId": null,
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLat": 34.0576,
        "maxLat": 34.0583,
        "from": {
          "px": [
            898,
            1337
          ]
        },
        "to": {
          "px": [
            847,
            1337
          ]
        }
      },
      {
        "label": "part of",
        "name": "New High Street",
        "entityId": "new-high-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
        },
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "maxLat": 34.0576,
        "from": {
          "px": [
            847,
            1337
          ]
        },
        "to": null
      }
    ]
  },
  "Olive Street": {
    "name": "Olive Street",
    "orientation": "NS",
    "segments": [
      {
        "label": "beyond 1st",
        "name": "Olive Street",
        "entityId": "olive",
        "namedAfter": "{{The olive}}, extended onto this stretch",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Olive",
        "planned": {
          "text": "by 1869",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1869",
            "until": null,
            "name": "Olive Street",
            "entityId": "olive",
            "formInForce": "Olive Street",
            "how": "extension",
            "origin": "labeled “Olive Street” on the 1869 Mott Tract building lots {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf"
          }
        ],
        "note": null,
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
        },
        "knownFraction": 0.89,
        "categories": [
          "nature"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Olive Street",
            "url": "https://lastreetnames.com/street/olive-street/"
          },
          {
            "title": "Map of a part of Building Lots of the Mott Tract in the City & County of Los Angeles, California (M.R. 1-489, Mar. 2, 1869; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          }
        ],
        "minLat": 34.0493,
        "from": null,
        "to": {
          "px": [
            285,
            746
          ]
        }
      },
      {
        "label": "part of (original Olive St)",
        "name": "Olive Street",
        "entityId": "olive",
        "namedAfter": "{{The olive}} — though no particular tree or grove here is documented",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Olive",
        "planned": {
          "text": "1849",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "1849",
            "until": null,
            "name": "Olive Street",
            "entityId": "olive",
            "formInForce": "Olive Street",
            "how": "origin",
            "origin": "labeled “OLIVE ST.” and “CALLE ACEYTUNA” on the 1849 Hutton / Ord Survey {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          }
        ],
        "note": null,
        "attested": true,
        "knownFraction": 1,
        "categories": [
          "nature"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Olive Street",
            "url": "https://lastreetnames.com/street/olive-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          }
        ],
        "minLat": 34.039,
        "maxLat": 34.0493,
        "from": {
          "px": [
            285,
            746
          ]
        },
        "to": {
          "px": [
            475,
            1190
          ]
        }
      },
      {
        "label": "part of",
        "name": "Olive Street",
        "entityId": "olive",
        "namedAfter": "{{The olive}} — how and when this stretch joined Olive Street is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Olive",
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "nature"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Olive Street",
            "url": "https://lastreetnames.com/street/olive-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          }
        ],
        "maxLat": 34.039,
        "from": {
          "px": [
            475,
            1190
          ]
        },
        "to": null
      }
    ]
  },
  "Olvera Street": {
    "name": "Olvera Street",
    "entityId": "olvera-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": null,
    "built": {
      "text": "drawn, unlabelled, by Aug. 29, 1849 (Hutton / Ord Survey)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
    },
    "note": null,
    "attested": true,
    "knownFraction": 0,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849)",
        "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
      },
      {
        "title": "Plan de la Ciudad de Los Angeles (M.R. 53-73, Aug. 29, 1849)",
        "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
      }
    ]
  },
  "Olympic Boulevard": {
    "name": "Olympic Boulevard",
    "orientation": "EW",
    "segments": [
      {
        "label": "part of",
        "name": "Olympic Boulevard",
        "entityId": "olympic-boulevard",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "maxLng": -118.2643,
        "from": null,
        "to": {
          "px": [
            -25,
            316
          ]
        }
      },
      {
        "label": "part of (10th St)",
        "name": "Olympic Boulevard",
        "entityId": "olympic-boulevard",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "1849",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1875",
            "until": "?",
            "name": "10th Street",
            "entityId": "tenth-street",
            "formInForce": "10th Street",
            "how": "origin",
            "origin": "labeled “TENTH STREET” on the 1875 Blocks 73 & 72 of Ord's Survey {{(source)}} — Its ordinal position in the downtown grid — the numbering system was in place by 1849",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-032.pdf"
          },
          {
            "from": "?",
            "until": null,
            "name": "Olympic Boulevard",
            "entityId": "olympic-boulevard",
            "formInForce": "Olympic Boulevard",
            "how": "renaming",
            "origin": "arrival on this stretch not directly documented",
            "originLink": null
          }
        ],
        "note": null,
        "attested": true,
        "knownFraction": 0,
        "categories": [
          "unresearched",
          "renamed"
        ],
        "formerCategories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          },
          {
            "title": "Blocks 73 & 72 of Ord's Survey belonging to W. M. Williams (M.R. 3-32, Apr. 29, 1875; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-032.pdf"
          },
          {
            "title": "Blocks 73 & 72 of Ord's Survey belonging to W. M. Williams (M.R. 3-33, Apr. 29, 1875; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-033.pdf"
          },
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Ord/Hutton survey, “Plan de la Ciudad de Los Angeles” (Aug. 29, 1849)",
            "url": "https://tessa2.lapl.org/digital/collection/maps/id/42/"
          }
        ],
        "minLng": -118.2643,
        "maxLng": -118.2616,
        "from": {
          "px": [
            -25,
            316
          ]
        },
        "to": {
          "px": [
            1020,
            151
          ]
        }
      },
      {
        "label": "part of",
        "name": "Olympic Boulevard",
        "entityId": "olympic-boulevard",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "1849",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
        },
        "built": "not yet researched",
        "note": null,
        "attested": true,
        "knownFraction": 0,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          }
        ],
        "minLng": -118.2616,
        "maxLng": -118.257,
        "from": {
          "px": [
            1020,
            151
          ]
        },
        "to": {
          "px": [
            -8,
            1088
          ]
        }
      },
      {
        "label": "part of (10th St)",
        "name": "Olympic Boulevard",
        "entityId": "olympic-boulevard",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "1849",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1893",
            "until": "?",
            "name": "10th Street",
            "entityId": "tenth-street",
            "formInForce": "10th Street",
            "how": "extension",
            "origin": "labeled “TENTH STREET” on the 1893 Hammel and Denker Tract {{(source)}} — Its ordinal position in the downtown grid — the numbering system was in place by 1849",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-063.pdf"
          },
          {
            "from": "?",
            "until": null,
            "name": "Olympic Boulevard",
            "entityId": "olympic-boulevard",
            "formInForce": "Olympic Boulevard",
            "how": "renaming",
            "origin": "arrival on this stretch not directly documented",
            "originLink": null
          }
        ],
        "note": null,
        "attested": true,
        "knownFraction": 0,
        "categories": [
          "unresearched",
          "renamed"
        ],
        "formerCategories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          },
          {
            "title": "Map of Hammel and Denker Tract, Los Angeles City, California (M.R. 53-63, Oct. 1893; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-063.pdf"
          },
          {
            "title": "Blocks 73 & 72 of Ord's Survey belonging to W. M. Williams (M.R. 3-32, Apr. 29, 1875)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-032.pdf"
          },
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Ord/Hutton survey, “Plan de la Ciudad de Los Angeles” (Aug. 29, 1849)",
            "url": "https://tessa2.lapl.org/digital/collection/maps/id/42/"
          }
        ],
        "minLng": -118.257,
        "maxLng": -118.2547,
        "from": {
          "px": [
            -8,
            1088
          ]
        },
        "to": {
          "px": [
            107,
            1118
          ]
        }
      },
      {
        "label": "part of (10th St)",
        "name": "Olympic Boulevard",
        "entityId": "olympic-boulevard",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "by 1887",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR016/MR016-027.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1887",
            "until": "?",
            "name": "10th Street",
            "entityId": "tenth-street",
            "formInForce": "10th Street",
            "origin": "labeled “Tenth Street” on the 1887 Moran Tract {{(source)}} — Its ordinal position in the downtown grid — the numbering system was in place by 1849",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR016/MR016-027.pdf"
          },
          {
            "from": "?",
            "until": null,
            "name": "Olympic Boulevard",
            "entityId": "olympic-boulevard",
            "formInForce": "Olympic Boulevard",
            "how": "renaming",
            "origin": "arrival on this stretch not directly documented",
            "originLink": null
          }
        ],
        "note": null,
        "attested": true,
        "knownFraction": 0,
        "categories": [
          "unresearched",
          "renamed"
        ],
        "formerCategories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Map of the Moran Tract (M.R. 16-27, Apr. 22, 1887; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR016/MR016-027.pdf"
          },
          {
            "title": "Blocks 73 & 72 of Ord's Survey belonging to W. M. Williams (M.R. 3-32, Apr. 29, 1875)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-032.pdf"
          },
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          },
          {
            "title": "Ord/Hutton survey, “Plan de la Ciudad de Los Angeles” (Aug. 29, 1849)",
            "url": "https://tessa2.lapl.org/digital/collection/maps/id/42/"
          }
        ],
        "minLng": -118.2547,
        "maxLng": -118.2522,
        "from": {
          "px": [
            107,
            1118
          ]
        },
        "to": {
          "px": [
            922,
            1022
          ]
        },
        "gapAfter": true
      },
      {
        "label": "east of Gladys (discontinuous)",
        "name": "Olympic Boulevard",
        "entityId": "olympic-boulevard",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLng": -118.2522,
        "from": "Gladys Avenue",
        "to": null
      }
    ]
  },
  "Omar Street": {
    "name": "Omar Street",
    "entityId": "omar-ave",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": {
      "text": "by 1888",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
    },
    "built": "not yet researched",
    "nameHistory": [
      {
        "from": "by 1888",
        "until": null,
        "name": "Omar Street",
        "entityId": "omar-ave",
        "formInForce": "Omar Street",
        "how": "origin",
        "origin": "labeled “Omar Ave” on the 1888 Wolfskill Orchard Tract, sheet 5 (M.R. 30-13) {{(source)}}",
        "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
      }
    ],
    "note": "Platted with the rest of the Wolfskill Orchard Tract in 1887 and apparently never renamed — only the generic drifted, from the plat's “Omar Ave” to today's Omar Street. No source names an Omar.",
    "attested": true,
    "absentAsOf": {
      "text": "1849 (Hutton / Ord Survey)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
    },
    "knownFraction": 0.78,
    "categories": [
      "unknown"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "Map of the Wolfskill Orchard Tract situated in the City of Los Angeles Cal. (sheet 5, M.R. 30-13, Jan. 11, 1888; identified by map alignment, not a lot-level record)",
        "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
      }
    ]
  },
  "Ord Street": {
    "name": "Ord Street",
    "orientation": "EW",
    "segments": [
      {
        "label": "part of",
        "name": "Ord Street",
        "entityId": "ord-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
        },
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "maxLng": -118.2412,
        "from": null,
        "to": {
          "px": [
            339,
            582
          ]
        }
      },
      {
        "label": "beyond Spring (High St)",
        "name": "Ord Street",
        "entityId": "ord-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "1849",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "1849",
            "until": "?",
            "name": "High Street",
            "entityId": "high-street-chinatown",
            "formInForce": "High Street",
            "how": "origin",
            "origin": "labeled “CALLE ALTA” and “HIGH ST” on the 1849 Hutton / Ord Survey {{(source)}} — it became Walters Street in 1886, for a resident named George Walters, and Ord Street in 1890 — for the surveyor who had declined to name anything after himself in 1849",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
          },
          {
            "from": "?",
            "until": null,
            "name": "Ord Street",
            "entityId": "ord-street",
            "formInForce": "Ord Street",
            "how": "renaming",
            "origin": "arrival on this stretch not directly documented",
            "originLink": null
          }
        ],
        "note": null,
        "attested": true,
        "knownFraction": 0,
        "categories": [
          "unresearched",
          "renamed"
        ],
        "formerCategories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-73, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
          },
          {
            "title": "L.A. Street Names: Ord Street (on Calle Alta / Walters / Ord)",
            "url": "https://lastreetnames.com/street/ord-street/"
          }
        ],
        "minLng": -118.2412,
        "maxLng": -118.2379,
        "from": {
          "px": [
            339,
            582
          ]
        },
        "to": "Spring Street"
      },
      {
        "label": "beyond Spring",
        "name": "Ord Street",
        "entityId": "ord-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
        },
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLng": -118.2379,
        "from": "Spring Street",
        "to": null
      }
    ]
  },
  "Palmetto Street": {
    "name": "Palmetto Street",
    "entityId": "palmetto-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "absentAsOf": {
      "text": "1849 (Hutton / Ord Survey)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
    },
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Park Paseo": {
    "name": "Park Paseo",
    "entityId": "park-paseo",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Paseo": {
    "name": "Paseo",
    "entityId": "paseo",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Patsaouras Transit Plaza": {
    "name": "Patsaouras Transit Plaza",
    "entityId": "patsaouras-transit-plaza",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Patton Street": {
    "name": "Patton Street",
    "orientation": "NS",
    "segments": [
      {
        "label": "part of",
        "name": "Patton Street",
        "entityId": "patton-street",
        "namedAfter": "{{George Smith Patton (1856–1927)}}, the attorney who developed the street — how and when this stretch joined Patton Street is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/George_S._Patton_(attorney)",
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "person"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Patton Street (“This 1883 street was named for its developer, attorney George Smith Patton (1856-1927)”)",
            "url": "https://lastreetnames.com/street/patton-street/"
          },
          {
            "title": "L.A. Street Names: Glassell Street (Glassell’s firm; “his nephew George S. Patton replaced Smith”)",
            "url": "https://lastreetnames.com/street/glassell-street/"
          },
          {
            "title": "Recorded map: Glassell's Subdivision of Lot No. 7 etc., Block 39, Hancock Survey No. 1, M.R. 6-138 (recorded Dec. 27, 1884 at request of A. Glassell)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-138.pdf"
          }
        ],
        "minLat": 34.0656,
        "from": null,
        "to": {
          "px": [
            1159,
            83
          ]
        }
      },
      {
        "label": "beyond Colton (original Patton St)",
        "name": "Patton Street",
        "entityId": "patton-street",
        "namedAfter": "{{George Smith Patton (1856–1927)}}, the attorney who developed the street — nephew and law partner of Andrew Glassell, who subdivided the adjoining tract the following year, and father of the WWII general",
        "namedAfterLink": "https://en.wikipedia.org/wiki/George_S._Patton_(attorney)",
        "planned": {
          "text": "by 1884",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-138.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1884",
            "until": null,
            "name": "Patton Street",
            "entityId": "patton-street",
            "formInForce": "Patton Street",
            "how": "origin",
            "origin": "labeled “Patton Street” on the 1884 Glassell's Subdivision map {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-138.pdf"
          }
        ],
        "note": null,
        "attested": true,
        "knownFraction": 0.81,
        "categories": [
          "person"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Patton Street (“This 1883 street was named for its developer, attorney George Smith Patton (1856-1927)”)",
            "url": "https://lastreetnames.com/street/patton-street/"
          },
          {
            "title": "L.A. Street Names: Glassell Street (Glassell’s firm; “his nephew George S. Patton replaced Smith”)",
            "url": "https://lastreetnames.com/street/glassell-street/"
          },
          {
            "title": "Recorded map: Glassell's Subdivision of Lot No. 7 etc., Block 39, Hancock Survey No. 1, M.R. 6-138 (recorded Dec. 27, 1884 at request of A. Glassell) (identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-138.pdf"
          }
        ],
        "maxLat": 34.0656,
        "from": {
          "px": [
            1159,
            83
          ]
        },
        "to": null
      }
    ]
  },
  "Peacock Place": {
    "name": "Peacock Place",
    "entityId": "peacock-place",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Pico Boulevard": {
    "name": "Pico Boulevard",
    "orientation": "EW",
    "segments": [
      {
        "label": "part of",
        "name": "Pico Boulevard",
        "entityId": "pico-boulevard",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "maxLng": -118.2685,
        "from": null,
        "to": {
          "px": [
            211,
            498
          ]
        }
      },
      {
        "label": "part of (Pico St)",
        "name": "Pico Boulevard",
        "entityId": "pico-boulevard",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "by 1885",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR007/MR007-021.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1885",
            "until": "?",
            "name": "Pico Street",
            "entityId": "pico",
            "formInForce": "Pico Street",
            "how": "origin",
            "origin": "labeled “Pico Street” on the 1885 Cameron Tract {{(source)}} — Pío de Jesús Pico (1801–1894), the last Mexican governor of Alta California and a major landowner",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR007/MR007-021.pdf"
          },
          {
            "from": "?",
            "until": null,
            "name": "Pico Boulevard",
            "entityId": "pico-boulevard",
            "formInForce": "Pico Boulevard",
            "how": "renaming",
            "origin": "arrival on this stretch not directly documented",
            "originLink": null
          }
        ],
        "note": null,
        "attested": true,
        "knownFraction": 0,
        "categories": [
          "unresearched",
          "renamed"
        ],
        "formerCategories": [
          "person",
          "governor"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Map of the Cameron Tract, Los Angeles, Los Angeles Co., Cal. (M.R. 7-21, Oct. 1885; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR007/MR007-021.pdf"
          },
          {
            "title": "L.A. Street Names: Pico Boulevard",
            "url": "https://lastreetnames.com/street/pico-boulevard/"
          }
        ],
        "minLng": -118.2685,
        "maxLng": -118.2641,
        "from": {
          "px": [
            211,
            498
          ]
        },
        "to": {
          "px": [
            1198,
            497
          ]
        }
      },
      {
        "label": "part of",
        "name": "Pico Boulevard",
        "entityId": "pico-boulevard",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLng": -118.2641,
        "from": {
          "px": [
            1198,
            497
          ]
        },
        "to": null
      }
    ]
  },
  "Pizarro Street": {
    "name": "Pizarro Street",
    "entityId": "pizarro-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Plaza Del Sol": {
    "name": "Plaza Del Sol",
    "entityId": "plaza-del-sol",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Produce Court": {
    "name": "Produce Court",
    "entityId": "produce-court",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Ramirez Street": {
    "name": "Ramirez Street",
    "entityId": "ramirez-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Road": {
    "name": "Road",
    "entityId": "road",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Rockwood Street": {
    "name": "Rockwood Street",
    "orientation": "EW",
    "segments": [
      {
        "label": "west of Belmont",
        "name": "Rockwood Street",
        "entityId": "rockwood-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "maxLng": -118.263,
        "from": null,
        "to": "Belmont Avenue"
      },
      {
        "label": "Belmont to Glendale (Home St)",
        "name": "Rockwood Street",
        "entityId": "rockwood-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "by 1884",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-138.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1884",
            "until": "?",
            "name": "Home Street",
            "entityId": "home-street",
            "formInForce": "Home Street",
            "how": "origin",
            "origin": "labeled “Home Street” on the 1884 Glassell's Subdivision map {{(source)}} — no namesake documented",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-138.pdf"
          },
          {
            "from": "?",
            "until": null,
            "name": "Rockwood Street",
            "entityId": "rockwood-street",
            "formInForce": "Rockwood Street",
            "how": "renaming",
            "origin": "arrival on this stretch not directly documented",
            "originLink": null
          }
        ],
        "note": null,
        "attested": true,
        "knownFraction": 0,
        "categories": [
          "unresearched",
          "renamed"
        ],
        "formerCategories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Recorded map: Glassell's Subdivision of Lot No. 7 etc., Block 39, Hancock Survey No. 1, M.R. 6-138 (recorded Dec. 27, 1884 at request of A. Glassell) (identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-138.pdf"
          }
        ],
        "minLng": -118.263,
        "from": "Belmont Avenue",
        "to": null
      }
    ]
  },
  "Rondout Street": {
    "name": "Rondout Street",
    "entityId": "rondout-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "absentAsOf": {
      "text": "1849 (Hutton / Ord Survey)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
    },
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Rosabell Street": {
    "name": "Rosabell Street",
    "entityId": "rosabell-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "absentAsOf": {
      "text": "1849 (Hutton / Ord Survey)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
    },
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Rose Street": {
    "name": "Rose Street",
    "entityId": "rose-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": {
      "text": "by 1875",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-060.pdf"
    },
    "built": "not yet researched",
    "note": null,
    "attested": true,
    "absentAsOf": {
      "text": "1849 (Hutton / Ord Survey)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
    },
    "knownFraction": 0,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "Map of the Thomas Tract, being a portion of the Johnson and Mott Tract (M.R. 3-60, May 19, 1875; identified by map alignment, not a lot-level record)",
        "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-060.pdf"
      },
      {
        "title": "Recorded map: Mills and Wicks' Extension of Second St. and adjoining subdivision, City of Los Angeles, M.R. 13-87 — lots 1–144 and 160–236 subdivided at the request of M. L. Wicks and Howard W. Mills, April–May 1886, under the direction of Geo. C. Knox; further lots added Jan. 1887 (sheet 1 of 2) (identified by map alignment, not a lot-level record)",
        "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR013/MR013-087.pdf"
      }
    ]
  },
  "Roselake Avenue": {
    "name": "Roselake Avenue",
    "entityId": "roselake-avenue",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Saint Paul Avenue": {
    "name": "Saint Paul Avenue",
    "entityId": "saint-paul-avenue",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Saint Paul Place": {
    "name": "Saint Paul Place",
    "entityId": "saint-paul-place",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "San Bernardino Freeway": {
    "name": "San Bernardino Freeway",
    "entityId": "san-bernardino-freeway",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "San Julian Street": {
    "name": "San Julian Street",
    "orientation": "NS",
    "segments": [
      {
        "label": "part of",
        "name": "San Julian Street",
        "entityId": "san-julian-st",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "by 1883",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-307.pdf"
        },
        "built": "not yet researched",
        "note": "One of the saints' names in the streets east of Main, with San Pedro two blocks over. Who or what it was named for is not documented. The Moran Tract of April 1887 shows the corridor with a seam in it: San Julian Street south of Ninth, Earl Street north of it, both lettered on the same sheet.",
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "knownFraction": 0,
        "categories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Map of Hamilton's Subdivision of Part of the Urquidez Garden, Los Angeles City, Cal. (M.R. 5-307, Sept. 12, 1883)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-307.pdf"
          },
          {
            "title": "Map of the O. W. Childs Tract, 200 Lots in the City of Los Angeles, Cal. (M.R. 6-378, July 11, 1885)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-378.pdf"
          }
        ],
        "minLat": 34.0442,
        "from": null,
        "to": {
          "px": [
            487,
            722
          ]
        }
      },
      {
        "label": "part of (Whisler St)",
        "name": "San Julian Street",
        "entityId": "san-julian-st",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "by 1886",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR012/MR012-064.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1886",
            "until": "?",
            "name": "Whisler Street",
            "entityId": "whisler-st",
            "formInForce": "Whisler Street",
            "how": "origin",
            "origin": "labeled “Whisler St.” on the 1886 Whisler Subdivision {{(source)}} — Mrs. Lourena Whisler, the owner at whose request the subdivision was made and recorded",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR012/MR012-064.pdf"
          },
          {
            "from": "?",
            "until": null,
            "name": "San Julian Street",
            "entityId": "san-julian-st",
            "formInForce": "San Julian Street",
            "how": "renaming",
            "origin": "arrival on this stretch not directly documented",
            "originLink": null
          }
        ],
        "note": "One of the saints' names in the streets east of Main, with San Pedro two blocks over. Who or what it was named for is not documented. The Moran Tract of April 1887 shows the corridor with a seam in it: San Julian Street south of Ninth, Earl Street north of it, both lettered on the same sheet.",
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "knownFraction": 0,
        "categories": [
          "unknown",
          "renamed"
        ],
        "formerCategories": [
          "person"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Map of the Whisler Subdivision on the West Side of San Pedro Street on Part of the Urquidez Vineyard in the City of Los Angeles, Cal. (M.R. 12-64, Dec. 14, 1886; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR012/MR012-064.pdf"
          },
          {
            "title": "Map of the O. W. Childs Tract, 200 Lots in the City of Los Angeles, Cal. (M.R. 6-378, July 11, 1885)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-378.pdf"
          }
        ],
        "minLat": 34.0434,
        "maxLat": 34.0442,
        "from": {
          "px": [
            487,
            722
          ]
        },
        "to": {
          "px": [
            452,
            1305
          ]
        }
      },
      {
        "label": "part of",
        "name": "San Julian Street",
        "entityId": "san-julian-st",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "One of the saints' names in the streets east of Main, with San Pedro two blocks over. Who or what it was named for is not documented. The Moran Tract of April 1887 shows the corridor with a seam in it: San Julian Street south of Ninth, Earl Street north of it, both lettered on the same sheet.",
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "categories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Map of the O. W. Childs Tract, 200 Lots in the City of Los Angeles, Cal. (M.R. 6-378, July 11, 1885)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-378.pdf"
          }
        ],
        "minLat": 34.0426,
        "maxLat": 34.0434,
        "from": {
          "px": [
            452,
            1305
          ]
        },
        "to": {
          "px": [
            1008,
            366
          ]
        }
      },
      {
        "label": "part of (Earl St)",
        "name": "San Julian Street",
        "entityId": "san-julian-st",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "by 1886",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR014/MR014-034.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1886",
            "until": "?",
            "name": "Earl Street",
            "entityId": "earl-st",
            "formInForce": "Earl Street",
            "how": "extension",
            "origin": "labeled “Earl Street” on the 1886 Beck Tract {{(source)}} — lettered on four sheets between 1884 and 1887 — the Rowan, Goldsworthy 8th Street, Beck and Moran tracts — along the corridor that is San Julian Street today. The Moran sheet letters Earl north of Ninth Street and San Julian south of it, so for a while the corridor carried both names at once. No Earl is documented",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR014/MR014-034.pdf"
          },
          {
            "from": "?",
            "until": null,
            "name": "San Julian Street",
            "entityId": "san-julian-st",
            "formInForce": "San Julian Street",
            "how": "renaming",
            "origin": "arrival on this stretch not directly documented",
            "originLink": null
          }
        ],
        "note": "One of the saints' names in the streets east of Main, with San Pedro two blocks over. Who or what it was named for is not documented. The Moran Tract of April 1887 shows the corridor with a seam in it: San Julian Street south of Ninth, Earl Street north of it, both lettered on the same sheet.",
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "knownFraction": 0,
        "categories": [
          "unknown",
          "renamed"
        ],
        "formerCategories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Beck Tract (M.R. 14-34, Dec. 23, 1886; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR014/MR014-034.pdf"
          },
          {
            "title": "Map of the Rowan Tract, Los Angeles City, Cal. (M.R. 6-39, Sept. 15, 1884)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-039.pdf"
          },
          {
            "title": "Map of the O. W. Childs Tract, 200 Lots in the City of Los Angeles, Cal. (M.R. 6-378, July 11, 1885)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-378.pdf"
          }
        ],
        "minLat": 34.0414,
        "maxLat": 34.0426,
        "from": {
          "px": [
            1008,
            366
          ]
        },
        "to": {
          "px": [
            425,
            230
          ]
        }
      },
      {
        "label": "part of (Earl St)",
        "name": "San Julian Street",
        "entityId": "san-julian-st",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "by 1884",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-039.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1884",
            "until": "?",
            "name": "Earl Street",
            "entityId": "earl-st",
            "formInForce": "Earl Street",
            "how": "origin",
            "origin": "labeled “Earl St.” and “Earl Street” on the 1884 Rowan Tract and the 1886 Beck Tract {{(source)}} — lettered on four sheets between 1884 and 1887 — the Rowan, Goldsworthy 8th Street, Beck and Moran tracts — along the corridor that is San Julian Street today. The Moran sheet letters Earl north of Ninth Street and San Julian south of it, so for a while the corridor carried both names at once. No Earl is documented",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-039.pdf"
          },
          {
            "from": "?",
            "until": null,
            "name": "San Julian Street",
            "entityId": "san-julian-st",
            "formInForce": "San Julian Street",
            "how": "renaming",
            "origin": "arrival on this stretch not directly documented",
            "originLink": null
          }
        ],
        "note": "One of the saints' names in the streets east of Main, with San Pedro two blocks over. Who or what it was named for is not documented. The Moran Tract of April 1887 shows the corridor with a seam in it: San Julian Street south of Ninth, Earl Street north of it, both lettered on the same sheet.",
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "knownFraction": 0.01,
        "categories": [
          "unknown",
          "renamed"
        ],
        "formerCategories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Map of the Rowan Tract, Los Angeles City, Cal. (M.R. 6-39, Sept. 15, 1884; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-039.pdf"
          },
          {
            "title": "Beck Tract (M.R. 14-34, Dec. 23, 1886; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR014/MR014-034.pdf"
          },
          {
            "title": "Map of the O. W. Childs Tract, 200 Lots in the City of Los Angeles, Cal. (M.R. 6-378, July 11, 1885)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-378.pdf"
          }
        ],
        "minLat": 34.0406,
        "maxLat": 34.0414,
        "from": {
          "px": [
            425,
            230
          ]
        },
        "to": {
          "px": [
            374,
            983
          ]
        }
      },
      {
        "label": "part of (Earl St)",
        "name": "San Julian Street",
        "entityId": "san-julian-st",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "by 1886",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR011/MR011-008.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1886",
            "until": "?",
            "name": "Earl Street",
            "entityId": "earl-st",
            "formInForce": "Earl Street",
            "how": "extension",
            "origin": "labeled “Earl Street” on the 1886 Goldsworthy 8th St. Tract {{(source)}} — lettered on four sheets between 1884 and 1887 — the Rowan, Goldsworthy 8th Street, Beck and Moran tracts — along the corridor that is San Julian Street today. The Moran sheet letters Earl north of Ninth Street and San Julian south of it, so for a while the corridor carried both names at once. No Earl is documented",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR011/MR011-008.pdf"
          },
          {
            "from": "?",
            "until": null,
            "name": "San Julian Street",
            "entityId": "san-julian-st",
            "formInForce": "San Julian Street",
            "how": "renaming",
            "origin": "arrival on this stretch not directly documented",
            "originLink": null
          }
        ],
        "note": "One of the saints' names in the streets east of Main, with San Pedro two blocks over. Who or what it was named for is not documented. The Moran Tract of April 1887 shows the corridor with a seam in it: San Julian Street south of Ninth, Earl Street north of it, both lettered on the same sheet.",
        "attested": true,
        "knownFraction": 0,
        "categories": [
          "unknown",
          "renamed"
        ],
        "formerCategories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Map of the Goldsworthy 8th St. Tract in the City of Los Angeles, Cal. (M.R. 11-8, Sept. 4, 1886; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR011/MR011-008.pdf"
          },
          {
            "title": "Map of the Rowan Tract, Los Angeles City, Cal. (M.R. 6-39, Sept. 15, 1884)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-039.pdf"
          },
          {
            "title": "Map of the O. W. Childs Tract, 200 Lots in the City of Los Angeles, Cal. (M.R. 6-378, July 11, 1885)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-378.pdf"
          }
        ],
        "minLat": 34.038,
        "maxLat": 34.0406,
        "from": {
          "px": [
            374,
            983
          ]
        },
        "to": {
          "px": [
            234,
            580
          ]
        }
      },
      {
        "label": "part of",
        "name": "San Julian Street",
        "entityId": "san-julian-st",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "by 1887",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR016/MR016-027.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1887",
            "until": null,
            "name": "San Julian Street",
            "entityId": "san-julian-st",
            "formInForce": "San Julian Street",
            "how": "extension",
            "origin": "labeled “San Julian Street” on the 1887 Moran Tract {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR016/MR016-027.pdf"
          }
        ],
        "note": "One of the saints' names in the streets east of Main, with San Pedro two blocks over. Who or what it was named for is not documented. The Moran Tract of April 1887 shows the corridor with a seam in it: San Julian Street south of Ninth, Earl Street north of it, both lettered on the same sheet.",
        "attested": true,
        "knownFraction": 0.79,
        "categories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Map of the Moran Tract (M.R. 16-27, Apr. 22, 1887; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR016/MR016-027.pdf"
          },
          {
            "title": "Map of the O. W. Childs Tract, 200 Lots in the City of Los Angeles, Cal. (M.R. 6-378, July 11, 1885)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-378.pdf"
          }
        ],
        "minLat": 34.0363,
        "maxLat": 34.038,
        "from": {
          "px": [
            234,
            580
          ]
        },
        "to": {
          "px": [
            1242,
            305
          ]
        }
      },
      {
        "label": "part of (original San Julian St)",
        "name": "San Julian Street",
        "entityId": "san-julian-st",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "by 1885",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-378.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1885",
            "until": null,
            "name": "San Julian Street",
            "entityId": "san-julian-st",
            "formInForce": "San Julian Street",
            "how": "origin",
            "origin": "labeled “San Julian St.” on the 1885 O. W. Childs Tract {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-378.pdf"
          }
        ],
        "note": "One of the saints' names in the streets east of Main, with San Pedro two blocks over. Who or what it was named for is not documented. The Moran Tract of April 1887 shows the corridor with a seam in it: San Julian Street south of Ninth, Earl Street north of it, both lettered on the same sheet.",
        "attested": true,
        "knownFraction": 0.8,
        "categories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Map of the O. W. Childs Tract, 200 Lots in the City of Los Angeles, Cal. (M.R. 6-378, July 11, 1885; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-378.pdf"
          }
        ],
        "minLat": 34.0337,
        "maxLat": 34.0363,
        "from": {
          "px": [
            1242,
            305
          ]
        },
        "to": {
          "px": [
            1285,
            850
          ]
        }
      },
      {
        "label": "part of",
        "name": "San Julian Street",
        "entityId": "san-julian-st",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "One of the saints' names in the streets east of Main, with San Pedro two blocks over. Who or what it was named for is not documented. The Moran Tract of April 1887 shows the corridor with a seam in it: San Julian Street south of Ninth, Earl Street north of it, both lettered on the same sheet.",
        "attested": false,
        "categories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Map of the O. W. Childs Tract, 200 Lots in the City of Los Angeles, Cal. (M.R. 6-378, July 11, 1885)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-378.pdf"
          }
        ],
        "maxLat": 34.0337,
        "from": {
          "px": [
            1285,
            850
          ]
        },
        "to": null
      }
    ]
  },
  "San Pedro Street": {
    "name": "San Pedro Street",
    "orientation": "NS",
    "segments": [
      {
        "label": "beyond Astronaut Ellison S Onizuka",
        "name": "San Pedro Street",
        "entityId": "san-pedro",
        "namedAfter": "The port town of {{San Pedro}}, which the street ran toward — how and when this stretch joined San Pedro Street is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/San_Pedro,_Los_Angeles",
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "Much older than the tract that letters it here; it no longer reaches San Pedro, merging into Avalon Boulevard, and its northernmost block became Judge John Aiso Street in 1997.",
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "categories": [
          "place",
          "destination"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: San Pedro Street",
            "url": "https://lastreetnames.com/street/san-pedro-street/"
          },
          {
            "title": "Wikipedia: San Pedro Street",
            "url": "https://en.wikipedia.org/wiki/San_Pedro_Street"
          },
          {
            "title": "Map of the Orchard Tract in the City of Los Angeles (M.R. 5-5, Aug. 2, 1882)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-005.pdf"
          }
        ],
        "minLat": 34.0494,
        "from": null,
        "to": "Astronaut Ellison S Onizuka Street"
      },
      {
        "label": "beyond Astronaut Ellison S Onizuka",
        "name": "San Pedro Street",
        "entityId": "san-pedro",
        "namedAfter": "The port town of {{San Pedro}}, which the street ran toward — how and when this stretch joined San Pedro Street is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/San_Pedro,_Los_Angeles",
        "planned": null,
        "built": {
          "text": "drawn, unlabelled, by Aug. 29, 1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "note": "Much older than the tract that letters it here; it no longer reaches San Pedro, merging into Avalon Boulevard, and its northernmost block became Judge John Aiso Street in 1997.",
        "attested": true,
        "knownFraction": 0,
        "categories": [
          "place",
          "destination"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: San Pedro Street",
            "url": "https://lastreetnames.com/street/san-pedro-street/"
          },
          {
            "title": "Wikipedia: San Pedro Street",
            "url": "https://en.wikipedia.org/wiki/San_Pedro_Street"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-71, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
          },
          {
            "title": "Map of the Orchard Tract in the City of Los Angeles (M.R. 5-5, Aug. 2, 1882)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-005.pdf"
          }
        ],
        "minLat": 34.0472,
        "maxLat": 34.0494,
        "from": "Astronaut Ellison S Onizuka Street",
        "to": {
          "px": [
            894,
            1545
          ]
        }
      },
      {
        "label": "part of (original San Pedro St)",
        "name": "San Pedro Street",
        "entityId": "san-pedro",
        "namedAfter": "The port town of {{San Pedro}}, which the street ran toward",
        "namedAfterLink": "https://en.wikipedia.org/wiki/San_Pedro,_Los_Angeles",
        "planned": {
          "text": "by 1882",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-005.pdf"
        },
        "built": {
          "text": "drawn, unlabelled, by Aug. 29, 1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "nameHistory": [
          {
            "from": "by 1882",
            "until": null,
            "name": "San Pedro Street",
            "entityId": "san-pedro",
            "formInForce": "San Pedro Street",
            "how": "origin",
            "origin": "labeled “San Pedro Street” and “San Pedro Ave” on the 1882 Orchard Tract and the 1888 Wolfskill Orchard Tract (sheets 4, 5) {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-005.pdf"
          }
        ],
        "note": "Much older than the tract that letters it here; it no longer reaches San Pedro, merging into Avalon Boulevard, and its northernmost block became Judge John Aiso Street in 1997.",
        "attested": true,
        "knownFraction": 0.82,
        "categories": [
          "place",
          "destination"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: San Pedro Street",
            "url": "https://lastreetnames.com/street/san-pedro-street/"
          },
          {
            "title": "Wikipedia: San Pedro Street",
            "url": "https://en.wikipedia.org/wiki/San_Pedro_Street"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-71, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
          },
          {
            "title": "Map of the Orchard Tract in the City of Los Angeles (M.R. 5-5, Aug. 2, 1882; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-005.pdf"
          },
          {
            "title": "Map of the Wolfskill Orchard Tract situated in the City of Los Angeles Cal. (sheet 4, M.R. 30-12, Jan. 11, 1888; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
          }
        ],
        "minLat": 34.0455,
        "maxLat": 34.0472,
        "from": {
          "px": [
            894,
            1545
          ]
        },
        "to": {
          "px": [
            283,
            1632
          ]
        }
      },
      {
        "label": "part of",
        "name": "San Pedro Street",
        "entityId": "san-pedro",
        "namedAfter": "The port town of {{San Pedro}}, which the street ran toward, extended onto this stretch",
        "namedAfterLink": "https://en.wikipedia.org/wiki/San_Pedro,_Los_Angeles",
        "planned": {
          "text": "by 1888",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
        },
        "built": {
          "text": "drawn, unlabelled, by Aug. 29, 1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "nameHistory": [
          {
            "from": "by 1888",
            "until": null,
            "name": "San Pedro Street",
            "entityId": "san-pedro",
            "formInForce": "San Pedro Street",
            "how": "extension",
            "origin": "labeled “San Pedro Ave” on the 1888 Wolfskill Orchard Tract, sheet 4 (M.R. 30-12) {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
          }
        ],
        "note": "Much older than the tract that letters it here; it no longer reaches San Pedro, merging into Avalon Boulevard, and its northernmost block became Judge John Aiso Street in 1997.",
        "attested": true,
        "knownFraction": 0.78,
        "categories": [
          "place",
          "destination"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: San Pedro Street",
            "url": "https://lastreetnames.com/street/san-pedro-street/"
          },
          {
            "title": "Wikipedia: San Pedro Street",
            "url": "https://en.wikipedia.org/wiki/San_Pedro_Street"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-71, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
          },
          {
            "title": "Map of the Wolfskill Orchard Tract situated in the City of Los Angeles Cal. (sheet 4, M.R. 30-12, Jan. 11, 1888; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
          },
          {
            "title": "Map of the Orchard Tract in the City of Los Angeles (M.R. 5-5, Aug. 2, 1882)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-005.pdf"
          }
        ],
        "minLat": 34.0443,
        "maxLat": 34.0455,
        "from": {
          "px": [
            283,
            1632
          ]
        },
        "to": {
          "px": [
            1032,
            372
          ]
        }
      },
      {
        "label": "part of",
        "name": "San Pedro Street",
        "entityId": "san-pedro",
        "namedAfter": "The port town of {{San Pedro}}, which the street ran toward — how and when this stretch joined San Pedro Street is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/San_Pedro,_Los_Angeles",
        "planned": {
          "text": "by 1883",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-307.pdf"
        },
        "built": {
          "text": "drawn, unlabelled, by Aug. 29, 1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "note": "Much older than the tract that letters it here; it no longer reaches San Pedro, merging into Avalon Boulevard, and its northernmost block became Judge John Aiso Street in 1997.",
        "attested": true,
        "knownFraction": 0.81,
        "categories": [
          "place",
          "destination"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: San Pedro Street",
            "url": "https://lastreetnames.com/street/san-pedro-street/"
          },
          {
            "title": "Wikipedia: San Pedro Street",
            "url": "https://en.wikipedia.org/wiki/San_Pedro_Street"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-71, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
          },
          {
            "title": "Map of Hamilton's Subdivision of Part of the Urquidez Garden, Los Angeles City, Cal. (M.R. 5-307, Sept. 12, 1883; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-307.pdf"
          },
          {
            "title": "Map of the Wolfskill Orchard Tract situated in the City of Los Angeles Cal. (sheet 3, M.R. 30-11, Jan. 11, 1888; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
          },
          {
            "title": "Map of the Orchard Tract in the City of Los Angeles (M.R. 5-5, Aug. 2, 1882)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-005.pdf"
          }
        ],
        "minLat": 34.0438,
        "maxLat": 34.0443,
        "from": {
          "px": [
            1032,
            372
          ]
        },
        "to": {
          "px": [
            1019,
            717
          ]
        }
      },
      {
        "label": "part of",
        "name": "San Pedro Street",
        "entityId": "san-pedro",
        "namedAfter": "The port town of {{San Pedro}}, which the street ran toward, extended onto this stretch",
        "namedAfterLink": "https://en.wikipedia.org/wiki/San_Pedro,_Los_Angeles",
        "planned": {
          "text": "by 1886",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR012/MR012-064.pdf"
        },
        "built": {
          "text": "drawn, unlabelled, by Aug. 29, 1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "nameHistory": [
          {
            "from": "by 1886",
            "until": null,
            "name": "San Pedro Street",
            "entityId": "san-pedro",
            "formInForce": "San Pedro Street",
            "how": "extension",
            "origin": "labeled “San Pedro Street” and “San Pedro Ave” on the 1886 Whisler Subdivision and the 1888 Wolfskill Orchard Tract, sheet 3 (M.R. 30-11) {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR012/MR012-064.pdf"
          }
        ],
        "note": "Much older than the tract that letters it here; it no longer reaches San Pedro, merging into Avalon Boulevard, and its northernmost block became Judge John Aiso Street in 1997.",
        "attested": true,
        "knownFraction": 0.8,
        "categories": [
          "place",
          "destination"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: San Pedro Street",
            "url": "https://lastreetnames.com/street/san-pedro-street/"
          },
          {
            "title": "Wikipedia: San Pedro Street",
            "url": "https://en.wikipedia.org/wiki/San_Pedro_Street"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-71, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
          },
          {
            "title": "Map of the Whisler Subdivision on the West Side of San Pedro Street on Part of the Urquidez Vineyard in the City of Los Angeles, Cal. (M.R. 12-64, Dec. 14, 1886; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR012/MR012-064.pdf"
          },
          {
            "title": "Map of the Wolfskill Orchard Tract situated in the City of Los Angeles Cal. (sheet 3, M.R. 30-11, Jan. 11, 1888; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
          },
          {
            "title": "Map of the Orchard Tract in the City of Los Angeles (M.R. 5-5, Aug. 2, 1882)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-005.pdf"
          }
        ],
        "minLat": 34.043,
        "maxLat": 34.0438,
        "from": {
          "px": [
            1019,
            717
          ]
        },
        "to": {
          "px": [
            996,
            1283
          ]
        }
      },
      {
        "label": "part of",
        "name": "San Pedro Street",
        "entityId": "san-pedro",
        "namedAfter": "The port town of {{San Pedro}}, which the street ran toward, extended onto this stretch",
        "namedAfterLink": "https://en.wikipedia.org/wiki/San_Pedro,_Los_Angeles",
        "planned": {
          "text": "by 1888",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
        },
        "built": {
          "text": "drawn, unlabelled, by Aug. 29, 1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "nameHistory": [
          {
            "from": "by 1888",
            "until": null,
            "name": "San Pedro Street",
            "entityId": "san-pedro",
            "formInForce": "San Pedro Street",
            "how": "extension",
            "origin": "labeled “San Pedro Ave” on the 1888 Wolfskill Orchard Tract (sheets 2, 3) {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
          }
        ],
        "note": "Much older than the tract that letters it here; it no longer reaches San Pedro, merging into Avalon Boulevard, and its northernmost block became Judge John Aiso Street in 1997.",
        "attested": true,
        "knownFraction": 0.78,
        "categories": [
          "place",
          "destination"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: San Pedro Street",
            "url": "https://lastreetnames.com/street/san-pedro-street/"
          },
          {
            "title": "Wikipedia: San Pedro Street",
            "url": "https://en.wikipedia.org/wiki/San_Pedro_Street"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-71, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
          },
          {
            "title": "Map of the Wolfskill Orchard Tract situated in the City of Los Angeles Cal. (sheet 2, M.R. 30-10, Jan. 11, 1888; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
          },
          {
            "title": "Map of the Orchard Tract in the City of Los Angeles (M.R. 5-5, Aug. 2, 1882)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-005.pdf"
          }
        ],
        "minLat": 34.0419,
        "maxLat": 34.043,
        "from": {
          "px": [
            996,
            1283
          ]
        },
        "to": {
          "px": [
            975,
            945
          ]
        }
      },
      {
        "label": "part of",
        "name": "San Pedro Street",
        "entityId": "san-pedro",
        "namedAfter": "The port town of {{San Pedro}}, which the street ran toward, extended onto this stretch",
        "namedAfterLink": "https://en.wikipedia.org/wiki/San_Pedro,_Los_Angeles",
        "planned": {
          "text": "by 1886",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR014/MR014-034.pdf"
        },
        "built": {
          "text": "drawn, unlabelled, by Aug. 29, 1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "nameHistory": [
          {
            "from": "by 1886",
            "until": null,
            "name": "San Pedro Street",
            "entityId": "san-pedro",
            "formInForce": "San Pedro Street",
            "how": "extension",
            "origin": "labeled “San Pedro Street” and “San Pedro Ave” on the 1886 Beck Tract and the 1888 Wolfskill Orchard Tract, sheet 2 (M.R. 30-10) {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR014/MR014-034.pdf"
          }
        ],
        "note": "Much older than the tract that letters it here; it no longer reaches San Pedro, merging into Avalon Boulevard, and its northernmost block became Judge John Aiso Street in 1997.",
        "attested": true,
        "knownFraction": 0.8,
        "categories": [
          "place",
          "destination"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: San Pedro Street",
            "url": "https://lastreetnames.com/street/san-pedro-street/"
          },
          {
            "title": "Wikipedia: San Pedro Street",
            "url": "https://en.wikipedia.org/wiki/San_Pedro_Street"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-71, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
          },
          {
            "title": "Beck Tract (M.R. 14-34, Dec. 23, 1886; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR014/MR014-034.pdf"
          },
          {
            "title": "Map of the Wolfskill Orchard Tract situated in the City of Los Angeles Cal. (sheet 2, M.R. 30-10, Jan. 11, 1888; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
          },
          {
            "title": "Map of the Orchard Tract in the City of Los Angeles (M.R. 5-5, Aug. 2, 1882)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-005.pdf"
          }
        ],
        "minLat": 34.041,
        "maxLat": 34.0419,
        "from": {
          "px": [
            975,
            945
          ]
        },
        "to": {
          "px": [
            942,
            151
          ]
        }
      },
      {
        "label": "part of",
        "name": "San Pedro Street",
        "entityId": "san-pedro",
        "namedAfter": "The port town of {{San Pedro}}, which the street ran toward — how and when this stretch joined San Pedro Street is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/San_Pedro,_Los_Angeles",
        "planned": {
          "text": "by 1884",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-039.pdf"
        },
        "built": {
          "text": "drawn, unlabelled, by Aug. 29, 1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "note": "Much older than the tract that letters it here; it no longer reaches San Pedro, merging into Avalon Boulevard, and its northernmost block became Judge John Aiso Street in 1997.",
        "attested": true,
        "knownFraction": 0.81,
        "categories": [
          "place",
          "destination"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: San Pedro Street",
            "url": "https://lastreetnames.com/street/san-pedro-street/"
          },
          {
            "title": "Wikipedia: San Pedro Street",
            "url": "https://en.wikipedia.org/wiki/San_Pedro_Street"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-71, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
          },
          {
            "title": "Map of the Rowan Tract, Los Angeles City, Cal. (M.R. 6-39, Sept. 15, 1884; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-039.pdf"
          },
          {
            "title": "Map of the Wolfskill Orchard Tract situated in the City of Los Angeles Cal. (sheet 2, M.R. 30-10, Jan. 11, 1888; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
          },
          {
            "title": "Map of the Orchard Tract in the City of Los Angeles (M.R. 5-5, Aug. 2, 1882)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-005.pdf"
          }
        ],
        "minLat": 34.0401,
        "maxLat": 34.041,
        "from": {
          "px": [
            942,
            151
          ]
        },
        "to": {
          "px": [
            963,
            996
          ]
        }
      },
      {
        "label": "part of",
        "name": "San Pedro Street",
        "entityId": "san-pedro",
        "namedAfter": "The port town of {{San Pedro}}, which the street ran toward, extended onto this stretch",
        "namedAfterLink": "https://en.wikipedia.org/wiki/San_Pedro,_Los_Angeles",
        "planned": {
          "text": "by 1886",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR011/MR011-008.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1886",
            "until": null,
            "name": "San Pedro Street",
            "entityId": "san-pedro",
            "formInForce": "San Pedro Street",
            "how": "extension",
            "origin": "labeled “San Pedro Street” and “San Pedro St.” on the 1886 Goldsworthy 8th St. Tract and the 1893 Clark and Bryan Tract {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR011/MR011-008.pdf"
          }
        ],
        "note": "Much older than the tract that letters it here; it no longer reaches San Pedro, merging into Avalon Boulevard, and its northernmost block became Judge John Aiso Street in 1997.",
        "attested": true,
        "knownFraction": 0.8,
        "categories": [
          "place",
          "destination"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: San Pedro Street",
            "url": "https://lastreetnames.com/street/san-pedro-street/"
          },
          {
            "title": "Wikipedia: San Pedro Street",
            "url": "https://en.wikipedia.org/wiki/San_Pedro_Street"
          },
          {
            "title": "Map of the Goldsworthy 8th St. Tract in the City of Los Angeles, Cal. (M.R. 11-8, Sept. 4, 1886; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR011/MR011-008.pdf"
          },
          {
            "title": "Map of the Clark and Bryan Tract, Los Angeles City, Calif. (M.R. 53-65, Nov. 1893; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-065.pdf"
          },
          {
            "title": "Map of the Orchard Tract in the City of Los Angeles (M.R. 5-5, Aug. 2, 1882)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-005.pdf"
          }
        ],
        "minLat": 34.0372,
        "maxLat": 34.0401,
        "from": {
          "px": [
            963,
            996
          ]
        },
        "to": {
          "px": [
            191,
            953
          ]
        }
      },
      {
        "label": "part of",
        "name": "San Pedro Street",
        "entityId": "san-pedro",
        "namedAfter": "The port town of {{San Pedro}}, which the street ran toward, extended onto this stretch",
        "namedAfterLink": "https://en.wikipedia.org/wiki/San_Pedro,_Los_Angeles",
        "planned": {
          "text": "by 1893",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-065.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1893",
            "until": null,
            "name": "San Pedro Street",
            "entityId": "san-pedro",
            "formInForce": "San Pedro Street",
            "how": "extension",
            "origin": "labeled “San Pedro St.” on the 1893 Clark and Bryan Tract {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-065.pdf"
          }
        ],
        "note": "Much older than the tract that letters it here; it no longer reaches San Pedro, merging into Avalon Boulevard, and its northernmost block became Judge John Aiso Street in 1997.",
        "attested": true,
        "knownFraction": 0.76,
        "categories": [
          "place",
          "destination"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: San Pedro Street",
            "url": "https://lastreetnames.com/street/san-pedro-street/"
          },
          {
            "title": "Wikipedia: San Pedro Street",
            "url": "https://en.wikipedia.org/wiki/San_Pedro_Street"
          },
          {
            "title": "Map of the Clark and Bryan Tract, Los Angeles City, Calif. (M.R. 53-65, Nov. 1893; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-065.pdf"
          },
          {
            "title": "Map of the Orchard Tract in the City of Los Angeles (M.R. 5-5, Aug. 2, 1882)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-005.pdf"
          }
        ],
        "minLat": 34.0357,
        "maxLat": 34.0372,
        "from": {
          "px": [
            191,
            953
          ]
        },
        "to": {
          "px": [
            1417,
            305
          ]
        }
      },
      {
        "label": "part of",
        "name": "San Pedro Street",
        "entityId": "san-pedro",
        "namedAfter": "The port town of {{San Pedro}}, which the street ran toward — how and when this stretch joined San Pedro Street is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/San_Pedro,_Los_Angeles",
        "planned": {
          "text": "by 1885",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-378.pdf"
        },
        "built": "not yet researched",
        "note": "Much older than the tract that letters it here; it no longer reaches San Pedro, merging into Avalon Boulevard, and its northernmost block became Judge John Aiso Street in 1997.",
        "attested": true,
        "knownFraction": 0.8,
        "categories": [
          "place",
          "destination"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: San Pedro Street",
            "url": "https://lastreetnames.com/street/san-pedro-street/"
          },
          {
            "title": "Wikipedia: San Pedro Street",
            "url": "https://en.wikipedia.org/wiki/San_Pedro_Street"
          },
          {
            "title": "Map of the O. W. Childs Tract, 200 Lots in the City of Los Angeles, Cal. (M.R. 6-378, July 11, 1885; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-378.pdf"
          },
          {
            "title": "Map of the Orchard Tract in the City of Los Angeles (M.R. 5-5, Aug. 2, 1882)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-005.pdf"
          }
        ],
        "maxLat": 34.0357,
        "from": {
          "px": [
            1417,
            305
          ]
        },
        "to": null
      }
    ]
  },
  "Sanchez Street": {
    "name": "Sanchez Street",
    "entityId": "sanchez-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": null,
    "built": {
      "text": "drawn, unlabelled, by Aug. 29, 1849 (Hutton / Ord Survey)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
    },
    "note": null,
    "attested": true,
    "absentAsOf": {
      "text": "1849 (Hutton / Ord Survey)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
    },
    "knownFraction": 0,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849)",
        "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
      }
    ]
  },
  "Santa Ana Freeway": {
    "name": "Santa Ana Freeway",
    "orientation": "EW",
    "segments": [
      {
        "label": "part of",
        "name": "Santa Ana Freeway",
        "entityId": "santa-ana-freeway",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "maxLng": -118.2436,
        "from": null,
        "to": {
          "px": [
            739,
            1184
          ]
        }
      },
      {
        "label": "part of",
        "name": "Santa Ana Freeway",
        "entityId": "santa-ana-freeway",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
        },
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLng": -118.2436,
        "maxLng": -118.2352,
        "from": {
          "px": [
            739,
            1184
          ]
        },
        "to": {
          "px": [
            171,
            1130
          ]
        }
      },
      {
        "label": "part of",
        "name": "Santa Ana Freeway",
        "entityId": "santa-ana-freeway",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLng": -118.2352,
        "from": {
          "px": [
            171,
            1130
          ]
        },
        "to": null
      }
    ]
  },
  "Santa Fe Avenue": {
    "name": "Santa Fe Avenue",
    "orientation": "NS",
    "segments": [
      {
        "label": "part of",
        "name": "Santa Fe Avenue",
        "entityId": "santa-fe-ave",
        "namedAfter": "The {{Atchison, Topeka and Santa Fe Railway}}, whose passenger depot opened by the street's junction with 1st Street in May 1887 — how and when this stretch joined Santa Fe Avenue is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Atchison,_Topeka_and_Santa_Fe_Railway",
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "Named for the railway in May 1887, when its passenger depot opened near 1st Street. The name spread south later: on Aug. 31, 1896 Ordinance No. 3829 changed Tulip Street, from Willow to Seventh, to Santa Fe Avenue (documents/lah-1896-09-03).",
        "attested": false,
        "categories": [
          "company"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Santa Fe Avenue (“Named for the Atchison, Topeka & Santa Fe Railway”; May 1887, at the depot by 1st Street)",
            "url": "https://lastreetnames.com/street/santa-fe-avenue/"
          },
          {
            "title": "Los Angeles Herald, “Street Names Changed — The Last Lot Rechristened by the City Council,” Sept. 3, 1896 (the fourteen changes made by Ordinance No. 3829, adopted Aug. 31)",
            "url": "https://cdnc.ucr.edu/?a=d&d=LAH18960903.1.3"
          }
        ],
        "minLat": 34.0489,
        "from": null,
        "to": {
          "px": [
            1021,
            790
          ]
        }
      },
      {
        "label": "part of",
        "name": "Santa Fe Avenue",
        "entityId": "santa-fe-ave",
        "namedAfter": "The {{Atchison, Topeka and Santa Fe Railway}}, whose passenger depot opened by the street's junction with 1st Street in May 1887 — how and when this stretch joined Santa Fe Avenue is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Atchison,_Topeka_and_Santa_Fe_Railway",
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "Named for the railway in May 1887, when its passenger depot opened near 1st Street. The name spread south later: on Aug. 31, 1896 Ordinance No. 3829 changed Tulip Street, from Willow to Seventh, to Santa Fe Avenue (documents/lah-1896-09-03).",
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "categories": [
          "company"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Santa Fe Avenue (“Named for the Atchison, Topeka & Santa Fe Railway”; May 1887, at the depot by 1st Street)",
            "url": "https://lastreetnames.com/street/santa-fe-avenue/"
          },
          {
            "title": "Los Angeles Herald, “Street Names Changed — The Last Lot Rechristened by the City Council,” Sept. 3, 1896 (the fourteen changes made by Ordinance No. 3829, adopted Aug. 31)",
            "url": "https://cdnc.ucr.edu/?a=d&d=LAH18960903.1.3"
          }
        ],
        "minLat": 34.0395,
        "maxLat": 34.0489,
        "from": {
          "px": [
            1021,
            790
          ]
        },
        "to": {
          "px": [
            607,
            652
          ]
        }
      },
      {
        "label": "part of (Tulip St)",
        "name": "Santa Fe Avenue",
        "entityId": "santa-fe-ave",
        "namedAfter": "The {{Atchison, Topeka and Santa Fe Railway}}, whose passenger depot opened by the street's junction with 1st Street in May 1887, once this stretch was folded into Santa Fe Avenue",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Atchison,_Topeka_and_Santa_Fe_Railway",
        "planned": {
          "text": "by 1886",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR011/MR011-042.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1886",
            "until": "?",
            "name": "Tulip Street",
            "entityId": "tulip",
            "formInForce": "Tulip Street",
            "how": "origin",
            "origin": "labeled “Tulip St” on the 1886 Goodwin Tract {{(source)}} — one of a run of tree and plant names platted on the Goodwin Tract in October 1886 — Palm, Spruce, Tulip and Willow together. None of them is documented beyond the plat, and the theme is the whole of the argument. This one ran along modern Santa Fe Avenue, and it lasted ten years: on Aug. 31, 1896 Ordinance No. 3829 changed “Tulip street, from Willow to Seventh” to Santa Fe avenue, extending south over it a name the railway had already given the street further north",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR011/MR011-042.pdf"
          },
          {
            "from": "?",
            "until": null,
            "name": "Santa Fe Avenue",
            "entityId": "santa-fe-ave",
            "formInForce": "Santa Fe Avenue",
            "how": "renaming",
            "origin": "arrival on this stretch not directly documented",
            "originLink": null
          }
        ],
        "note": "Named for the railway in May 1887, when its passenger depot opened near 1st Street. The name spread south later: on Aug. 31, 1896 Ordinance No. 3829 changed Tulip Street, from Willow to Seventh, to Santa Fe Avenue (documents/lah-1896-09-03).",
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "knownFraction": 0,
        "categories": [
          "company",
          "renamed"
        ],
        "formerCategories": [
          "nature",
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Santa Fe Avenue (“Named for the Atchison, Topeka & Santa Fe Railway”; May 1887, at the depot by 1st Street)",
            "url": "https://lastreetnames.com/street/santa-fe-avenue/"
          },
          {
            "title": "Plan of the Goodwin Tract (M.R. 11-42, Oct. 6, 1886; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR011/MR011-042.pdf"
          },
          {
            "title": "Los Angeles Herald, “Street Names Changed — The Last Lot Rechristened by the City Council,” Sept. 3, 1896 (the fourteen changes made by Ordinance No. 3829, adopted Aug. 31)",
            "url": "https://cdnc.ucr.edu/?a=d&d=LAH18960903.1.3"
          },
          {
            "title": "Wikipedia: Arts District, Los Angeles",
            "url": "https://en.wikipedia.org/wiki/Arts_District,_Los_Angeles"
          }
        ],
        "minLat": 34.0367,
        "maxLat": 34.0395,
        "from": {
          "px": [
            607,
            652
          ]
        },
        "to": {
          "px": [
            584,
            1296
          ]
        }
      },
      {
        "label": "part of",
        "name": "Santa Fe Avenue",
        "entityId": "santa-fe-ave",
        "namedAfter": "The {{Atchison, Topeka and Santa Fe Railway}}, whose passenger depot opened by the street's junction with 1st Street in May 1887 — how and when this stretch joined Santa Fe Avenue is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Atchison,_Topeka_and_Santa_Fe_Railway",
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "Named for the railway in May 1887, when its passenger depot opened near 1st Street. The name spread south later: on Aug. 31, 1896 Ordinance No. 3829 changed Tulip Street, from Willow to Seventh, to Santa Fe Avenue (documents/lah-1896-09-03).",
        "attested": false,
        "categories": [
          "company"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Santa Fe Avenue (“Named for the Atchison, Topeka & Santa Fe Railway”; May 1887, at the depot by 1st Street)",
            "url": "https://lastreetnames.com/street/santa-fe-avenue/"
          },
          {
            "title": "Los Angeles Herald, “Street Names Changed — The Last Lot Rechristened by the City Council,” Sept. 3, 1896 (the fourteen changes made by Ordinance No. 3829, adopted Aug. 31)",
            "url": "https://cdnc.ucr.edu/?a=d&d=LAH18960903.1.3"
          }
        ],
        "maxLat": 34.0367,
        "from": {
          "px": [
            584,
            1296
          ]
        },
        "to": null
      }
    ]
  },
  "Santa Monica Freeway": {
    "name": "Santa Monica Freeway",
    "entityId": "santa-monica-freeway",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Santee Alley": {
    "name": "Santee Alley",
    "orientation": "NS",
    "segments": [
      {
        "label": "part of",
        "name": "Santee Alley",
        "entityId": "santee-alley",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "by 1887",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR016/MR016-027.pdf"
        },
        "built": "not yet researched",
        "note": null,
        "attested": true,
        "knownFraction": 0,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Map of the Moran Tract (M.R. 16-27, Apr. 22, 1887; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR016/MR016-027.pdf"
          },
          {
            "title": "Map of Hammel and Denker Tract, Los Angeles City, California (M.R. 53-63, Oct. 1893; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-063.pdf"
          }
        ],
        "minLat": 34.0379,
        "from": null,
        "to": {
          "px": [
            775,
            306
          ]
        }
      },
      {
        "label": "part of",
        "name": "Santee Alley",
        "entityId": "santee-alley",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "by 1885",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-378.pdf"
        },
        "built": "not yet researched",
        "note": null,
        "attested": true,
        "knownFraction": 0,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Map of the O. W. Childs Tract, 200 Lots in the City of Los Angeles, Cal. (M.R. 6-378, July 11, 1885)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-378.pdf"
          }
        ],
        "maxLat": 34.0379,
        "from": {
          "px": [
            775,
            306
          ]
        },
        "to": null
      }
    ]
  },
  "Santee Court": {
    "name": "Santee Court",
    "entityId": "santee-court",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "absentAsOf": {
      "text": "1886 (Maple Avenue Tract)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR011/MR011-063.pdf"
    },
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Santee Street": {
    "name": "Santee Street",
    "orientation": "NS",
    "segments": [
      {
        "label": "part of (Botiller St)",
        "name": "Santee Street",
        "entityId": "santee-street",
        "namedAfter": "{{Milton Santee}} (1835–1901), city councilman 1884–1886, later a mining and railroad investor, once this stretch was folded into Santee Street",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Milton_Santee",
        "planned": {
          "text": "by 1888",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR029/MR029-026.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1888",
            "until": "?",
            "name": "Botiller Street",
            "entityId": "botiller-street",
            "formInForce": "Botiller Street",
            "how": "origin",
            "origin": "labeled “Botiller Street” on the 1888 Widow Botiller Tract resubdivision {{(source)}} — The Botiller family, whose ground it crossed: the sheet subdivides the estate of Juana María Reyes de Botiller, distributed to Tadeo Felipe Botiller and Vicenta B. de Ybarrondo by a decree entered Feb. 27, 1888",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR029/MR029-026.pdf"
          },
          {
            "from": "?",
            "until": null,
            "name": "Santee Street",
            "entityId": "santee-street",
            "formInForce": "Santee Street",
            "how": "renaming",
            "origin": "arrival on this stretch not directly documented",
            "originLink": null
          }
        ],
        "note": "Santee later moved to San Diego County, where in 1893 his second wife had the town of Cowleston renamed Santee in his honour — a name it still keeps.",
        "attested": true,
        "knownFraction": 0,
        "categories": [
          "person",
          "alive",
          "renamed"
        ],
        "formerCategories": [
          "person"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Santee Street",
            "url": "https://lastreetnames.com/street/santee-street/"
          },
          {
            "title": "Map of the Resubdivision of the Widow Botiller Tract (M.R. 29-26, Mar. 15, 1888; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR029/MR029-026.pdf"
          },
          {
            "title": "Miguel Subdivision, part of the Celis Vineyard Tract in Los Angeles City, Cal. (M.R. 53-16, Mar. 25, 1893)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-016.pdf"
          },
          {
            "title": "Wikipedia: Dionisio Botiller (1842–1915), councilman and city auditor, whose land adjoins this tract on the sheet",
            "url": "https://en.wikipedia.org/wiki/Dionisio_Botiller"
          }
        ],
        "minLat": 34.0409,
        "from": null,
        "to": {
          "px": [
            763,
            880
          ]
        }
      },
      {
        "label": "part of",
        "name": "Santee Street",
        "entityId": "santee-street",
        "namedAfter": "{{Milton Santee}} (1835–1901), city councilman 1884–1886, later a mining and railroad investor — how and when this stretch joined Santee Street is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Milton_Santee",
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "Santee later moved to San Diego County, where in 1893 his second wife had the town of Cowleston renamed Santee in his honour — a name it still keeps.",
        "attested": false,
        "categories": [
          "person",
          "alive"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Santee Street",
            "url": "https://lastreetnames.com/street/santee-street/"
          },
          {
            "title": "Miguel Subdivision, part of the Celis Vineyard Tract in Los Angeles City, Cal. (M.R. 53-16, Mar. 25, 1893)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-016.pdf"
          }
        ],
        "minLat": 34.0403,
        "maxLat": 34.0409,
        "from": {
          "px": [
            763,
            880
          ]
        },
        "to": {
          "px": [
            850,
            283
          ]
        }
      },
      {
        "label": "part of",
        "name": "Santee Street",
        "entityId": "santee-street",
        "namedAfter": "{{Milton Santee}} (1835–1901), city councilman 1884–1886, later a mining and railroad investor — how and when this stretch joined Santee Street is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Milton_Santee",
        "planned": {
          "text": "by 1893",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-063.pdf"
        },
        "built": "not yet researched",
        "note": "Santee later moved to San Diego County, where in 1893 his second wife had the town of Cowleston renamed Santee in his honour — a name it still keeps.",
        "attested": true,
        "knownFraction": 0.76,
        "categories": [
          "person",
          "alive"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Santee Street",
            "url": "https://lastreetnames.com/street/santee-street/"
          },
          {
            "title": "Map of Hammel and Denker Tract, Los Angeles City, California (M.R. 53-63, Oct. 1893; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-063.pdf"
          },
          {
            "title": "Miguel Subdivision, part of the Celis Vineyard Tract in Los Angeles City, Cal. (M.R. 53-16, Mar. 25, 1893)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-016.pdf"
          }
        ],
        "minLat": 34.0383,
        "maxLat": 34.0403,
        "from": {
          "px": [
            850,
            283
          ]
        },
        "to": {
          "px": [
            681,
            306
          ]
        }
      },
      {
        "label": "part of (William St)",
        "name": "Santee Street",
        "entityId": "santee-street",
        "namedAfter": "{{Milton Santee}} (1835–1901), city councilman 1884–1886, later a mining and railroad investor, once this stretch was folded into Santee Street",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Milton_Santee",
        "planned": {
          "text": "by 1885",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-378.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1885",
            "until": "?",
            "name": "William Street",
            "entityId": "william",
            "formInForce": "William Street",
            "how": "origin",
            "origin": "labeled “William St.” on the 1885 O. W. Childs Tract {{(source)}} — A given name, lettered on the O. W. Childs Tract of July 1885 between Los Angeles Street and Maple Avenue. No William is documented. The stretch is now part of Santee Street",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-378.pdf"
          },
          {
            "from": "?",
            "until": null,
            "name": "Santee Street",
            "entityId": "santee-street",
            "formInForce": "Santee Street",
            "how": "renaming",
            "origin": "arrival on this stretch not directly documented",
            "originLink": null
          }
        ],
        "note": "Santee later moved to San Diego County, where in 1893 his second wife had the town of Cowleston renamed Santee in his honour — a name it still keeps.",
        "attested": true,
        "knownFraction": 0,
        "categories": [
          "person",
          "alive",
          "renamed"
        ],
        "formerCategories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Santee Street",
            "url": "https://lastreetnames.com/street/santee-street/"
          },
          {
            "title": "Map of the O. W. Childs Tract, 200 Lots in the City of Los Angeles, Cal. (M.R. 6-378, July 11, 1885; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-378.pdf"
          },
          {
            "title": "Miguel Subdivision, part of the Celis Vineyard Tract in Los Angeles City, Cal. (M.R. 53-16, Mar. 25, 1893)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-016.pdf"
          }
        ],
        "minLat": 34.0356,
        "maxLat": 34.0383,
        "from": {
          "px": [
            681,
            306
          ]
        },
        "to": {
          "px": [
            727,
            878
          ]
        }
      },
      {
        "label": "part of",
        "name": "Santee Street",
        "entityId": "santee-street",
        "namedAfter": "{{Milton Santee}} (1835–1901), city councilman 1884–1886, later a mining and railroad investor — how and when this stretch joined Santee Street is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Milton_Santee",
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "Santee later moved to San Diego County, where in 1893 his second wife had the town of Cowleston renamed Santee in his honour — a name it still keeps.",
        "attested": false,
        "categories": [
          "person",
          "alive"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Santee Street",
            "url": "https://lastreetnames.com/street/santee-street/"
          },
          {
            "title": "Miguel Subdivision, part of the Celis Vineyard Tract in Los Angeles City, Cal. (M.R. 53-16, Mar. 25, 1893)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-016.pdf"
          }
        ],
        "minLat": 34.0335,
        "maxLat": 34.0356,
        "from": {
          "px": [
            727,
            878
          ]
        },
        "to": {
          "px": [
            647,
            713
          ]
        }
      },
      {
        "label": "beyond 16th (original Santee St)",
        "name": "Santee Street",
        "entityId": "santee-street",
        "namedAfter": "{{Milton Santee}} (1835–1901), city councilman 1884–1886, later a mining and railroad investor",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Milton_Santee",
        "planned": {
          "text": "by 1893",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-016.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1893",
            "until": null,
            "name": "Santee Street",
            "entityId": "santee-street",
            "formInForce": "Santee Street",
            "how": "origin",
            "origin": "labeled “SANTEE ST.” on the 1893 Miguel Subdivision {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-016.pdf"
          }
        ],
        "note": "Santee later moved to San Diego County, where in 1893 his second wife had the town of Cowleston renamed Santee in his honour — a name it still keeps.",
        "attested": true,
        "knownFraction": 0.76,
        "categories": [
          "person",
          "alive"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Santee Street",
            "url": "https://lastreetnames.com/street/santee-street/"
          },
          {
            "title": "Miguel Subdivision, part of the Celis Vineyard Tract in Los Angeles City, Cal. (M.R. 53-16, Mar. 25, 1893; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-016.pdf"
          }
        ],
        "maxLat": 34.0335,
        "from": {
          "px": [
            647,
            713
          ]
        },
        "to": null
      }
    ]
  },
  "Seaton Street": {
    "name": "Seaton Street",
    "entityId": "seaton-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "absentAsOf": {
      "text": "1849 (Hutton / Ord Survey)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
    },
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Shatto Street": {
    "name": "Shatto Street",
    "entityId": "shatto-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Sotello Street": {
    "name": "Sotello Street",
    "orientation": "NS",
    "segments": [
      {
        "label": "part of",
        "name": "Sotello Street",
        "entityId": "sotello-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLat": 34.0669,
        "from": null,
        "to": {
          "px": [
            1014,
            830
          ]
        }
      },
      {
        "label": "part of",
        "name": "Sotello Street",
        "entityId": "sotello-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
        },
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "maxLat": 34.0669,
        "from": {
          "px": [
            1014,
            830
          ]
        },
        "to": null
      }
    ]
  },
  "Spring Street": {
    "name": "Spring Street",
    "orientation": "NS",
    "segments": [
      {
        "label": "part of",
        "name": "Spring Street",
        "entityId": "spring",
        "namedAfter": "Possibly {{Trinidad Ortega}} (1832–1903), who was nicknamed “Primavera” — how and when this stretch joined Spring Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "Lettered “Calle Primavera” on the 1849 survey. The nickname story is the usual explanation and is not documented; the season is the plainer reading. Two earlier names are reported for this street — Calle Cuidado (“Caution”) and Calle de Caridad (“Charity”) — but neither is verified.",
        "attested": false,
        "categories": [
          "person",
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Spring Street",
            "url": "https://lastreetnames.com/street/spring-street/"
          },
          {
            "title": "Wikipedia: Spring Street (Los Angeles)",
            "url": "https://en.wikipedia.org/wiki/Spring_Street_(Los_Angeles)"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          }
        ],
        "minLat": 34.0673,
        "from": null,
        "to": {
          "px": [
            992,
            750
          ]
        }
      },
      {
        "label": "part of",
        "name": "Spring Street",
        "entityId": "spring",
        "namedAfter": "Possibly {{Trinidad Ortega}} (1832–1903), who was nicknamed “Primavera” — how and when this stretch joined Spring Street is not yet researched",
        "namedAfterLink": null,
        "planned": {
          "text": "1849",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
        },
        "built": "not yet researched",
        "note": "Lettered “Calle Primavera” on the 1849 survey. The nickname story is the usual explanation and is not documented; the season is the plainer reading. Two earlier names are reported for this street — Calle Cuidado (“Caution”) and Calle de Caridad (“Charity”) — but neither is verified.",
        "attested": true,
        "knownFraction": 0,
        "categories": [
          "person",
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Spring Street",
            "url": "https://lastreetnames.com/street/spring-street/"
          },
          {
            "title": "Wikipedia: Spring Street (Los Angeles)",
            "url": "https://en.wikipedia.org/wiki/Spring_Street_(Los_Angeles)"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-73, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          }
        ],
        "minLat": 34.0635,
        "maxLat": 34.0673,
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
        }
      },
      {
        "label": "beyond Alpine",
        "name": "Spring Street",
        "entityId": "spring",
        "namedAfter": "Possibly {{Trinidad Ortega}} (1832–1903), who was nicknamed “Primavera” — how and when this stretch joined Spring Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "Lettered “Calle Primavera” on the 1849 survey. The nickname story is the usual explanation and is not documented; the season is the plainer reading. Two earlier names are reported for this street — Calle Cuidado (“Caution”) and Calle de Caridad (“Charity”) — but neither is verified.",
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
        },
        "categories": [
          "person",
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Spring Street",
            "url": "https://lastreetnames.com/street/spring-street/"
          },
          {
            "title": "Wikipedia: Spring Street (Los Angeles)",
            "url": "https://en.wikipedia.org/wiki/Spring_Street_(Los_Angeles)"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          }
        ],
        "minLat": 34.0619,
        "maxLat": 34.0635,
        "from": {
          "px": [
            653,
            724
          ]
        },
        "to": "Alpine Street"
      },
      {
        "label": "Alpine to Cesar E Chavez (Main St)",
        "name": "Spring Street",
        "entityId": "spring",
        "namedAfter": "Possibly {{Trinidad Ortega}} (1832–1903), who was nicknamed “Primavera”, once this stretch was folded into Spring Street",
        "namedAfterLink": null,
        "planned": {
          "text": "1849",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "1849",
            "until": "?",
            "name": "Main Street",
            "entityId": "main-street-dtla",
            "formInForce": "Main Street",
            "origin": "labeled “MAIN STREET” on the 1849 Hutton / Ord Survey {{(source)}} — Its standing as the pueblo’s principal street",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
          },
          {
            "from": "?",
            "until": null,
            "name": "Spring Street",
            "entityId": "spring",
            "formInForce": "Spring Street",
            "how": "renaming",
            "origin": "arrival on this stretch not directly documented",
            "originLink": null
          }
        ],
        "note": "Lettered “Calle Primavera” on the 1849 survey. The nickname story is the usual explanation and is not documented; the season is the plainer reading. Two earlier names are reported for this street — Calle Cuidado (“Caution”) and Calle de Caridad (“Charity”) — but neither is verified.",
        "attested": true,
        "knownFraction": 0,
        "categories": [
          "person",
          "unknown",
          "renamed"
        ],
        "formerCategories": [
          "descriptive"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Spring Street",
            "url": "https://lastreetnames.com/street/spring-street/"
          },
          {
            "title": "Wikipedia: Spring Street (Los Angeles)",
            "url": "https://en.wikipedia.org/wiki/Spring_Street_(Los_Angeles)"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-73, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          },
          {
            "title": "L.A. Street Names: Main Street",
            "url": "https://lastreetnames.com/street/main-street/"
          },
          {
            "title": "Wikipedia: Main Street (Los Angeles)",
            "url": "https://en.wikipedia.org/wiki/Main_Street_(Los_Angeles)"
          }
        ],
        "minLat": 34.0583,
        "maxLat": 34.0619,
        "from": "Alpine Street",
        "to": "Cesar E Chavez Avenue"
      },
      {
        "label": "Cesar E Chavez to 1st",
        "name": "Spring Street",
        "entityId": "spring",
        "namedAfter": "Possibly {{Trinidad Ortega}} (1832–1903), who was nicknamed “Primavera” — how and when this stretch joined Spring Street is not yet researched",
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "Lettered “Calle Primavera” on the 1849 survey. The nickname story is the usual explanation and is not documented; the season is the plainer reading. Two earlier names are reported for this street — Calle Cuidado (“Caution”) and Calle de Caridad (“Charity”) — but neither is verified.",
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
        },
        "categories": [
          "person",
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Spring Street",
            "url": "https://lastreetnames.com/street/spring-street/"
          },
          {
            "title": "Wikipedia: Spring Street (Los Angeles)",
            "url": "https://en.wikipedia.org/wiki/Spring_Street_(Los_Angeles)"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          }
        ],
        "minLat": 34.053,
        "maxLat": 34.0583,
        "from": "Cesar E Chavez Avenue",
        "to": "1st Street"
      },
      {
        "label": "1st to 9th (original Spring St)",
        "name": "Spring Street",
        "entityId": "spring",
        "namedAfter": "Possibly {{Trinidad Ortega}} (1832–1903), who was nicknamed “Primavera”",
        "namedAfterLink": null,
        "planned": {
          "text": "1849",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "1849",
            "until": null,
            "name": "Spring Street",
            "entityId": "spring",
            "formInForce": "Spring Street",
            "how": "origin",
            "origin": "labeled “CALLE PRIMAVERA” and “SPRING STREET” on the 1849 Hutton / Ord Survey {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          }
        ],
        "note": "Lettered “Calle Primavera” on the 1849 survey. The nickname story is the usual explanation and is not documented; the season is the plainer reading. Two earlier names are reported for this street — Calle Cuidado (“Caution”) and Calle de Caridad (“Charity”) — but neither is verified.",
        "attested": true,
        "knownFraction": 1,
        "categories": [
          "person",
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Spring Street",
            "url": "https://lastreetnames.com/street/spring-street/"
          },
          {
            "title": "Wikipedia: Spring Street (Los Angeles)",
            "url": "https://en.wikipedia.org/wiki/Spring_Street_(Los_Angeles)"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-67, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-067.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-68, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          }
        ],
        "maxLat": 34.053,
        "from": "1st Street",
        "to": null
      }
    ]
  },
  "Stadium Way": {
    "name": "Stadium Way",
    "orientation": "EW",
    "segments": [
      {
        "label": "part of",
        "name": "Stadium Way",
        "entityId": "stadium-way",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "maxLng": -118.2419,
        "from": null,
        "to": {
          "px": [
            663,
            284
          ]
        }
      },
      {
        "label": "part of",
        "name": "Stadium Way",
        "entityId": "stadium-way",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
        },
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLng": -118.2419,
        "from": {
          "px": [
            663,
            284
          ]
        },
        "to": null
      }
    ]
  },
  "Stanford Avenue": {
    "name": "Stanford Avenue",
    "orientation": "NS",
    "segments": [
      {
        "label": "part of (Ruth Ave)",
        "name": "Stanford Avenue",
        "entityId": "stanford-ave",
        "namedAfter": "{{Leland Stanford}} (1824–1893), president of the Southern Pacific Railroad and governor of California 1862–1863, once this stretch was folded into Stanford Avenue",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Leland_Stanford",
        "planned": {
          "text": "1888",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "1888",
            "until": "?",
            "name": "Ruth Avenue",
            "entityId": "ruth-ave",
            "formInForce": "Ruth Avenue",
            "how": "origin",
            "origin": "labeled “Ruth Ave” on the 1888 Wolfskill Orchard Tract (sheets 2–5) {{(source)}} — presumably a daughter of the landowner Joseph Wolfskill, whose orchard was being subdivided — the plat sets Ruth beside Gladys, and the Sabichi tract to the south continues the run of women's names with Agatha. No source names her. The street was still Ruth Avenue in Feb. 1897, when the citywide renaming commission proposed changing it and the council committee put the name back; it took the Stanford name later",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
          },
          {
            "from": "?",
            "until": null,
            "name": "Stanford Avenue",
            "entityId": "stanford-ave",
            "formInForce": "Stanford Avenue",
            "how": "renaming",
            "origin": "arrival on this stretch not directly documented",
            "originLink": null
          }
        ],
        "note": "Part of the same 1887 Southern Pacific package as Towne Avenue. The name did not stay put: the street platted “Stanford” in 1887 is modern Crocker Street, and the Stanford name moved a block east onto the former Ruth Avenue — modern Stanford Avenue — some time after Feb. 1897.",
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "knownFraction": 0.22,
        "categories": [
          "person",
          "governor",
          "renamed"
        ],
        "formerCategories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Towne Avenue (recounts the Crocker/Stanford street swap)",
            "url": "https://lastreetnames.com/street/towne-avenue-dtla/"
          },
          {
            "title": "Map of the Wolfskill Orchard Tract situated in the City of Los Angeles Cal. (sheet 2, M.R. 30-10, Jan. 11, 1888; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
          },
          {
            "title": "Los Angeles Herald, “Talking Retrenchment” (the renaming committee restores Ruth Avenue), Feb. 21, 1897",
            "url": "https://cdnc.ucr.edu/?a=d&d=LAH18970221.2.28"
          },
          {
            "title": "Recorded map: H.C. Halfpenny's Resubdivision of a part of Block 24 of the Wolfskill Orchard Tract, M.R. 54-84 (recorded Feb. 28, 1895) — names Ruth as one of the block's bounding streets",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR054/MR054-084.pdf"
          }
        ],
        "minLat": 34.0389,
        "from": null,
        "to": {
          "px": [
            308,
            534
          ]
        }
      },
      {
        "label": "part of",
        "name": "Stanford Avenue",
        "entityId": "stanford-ave",
        "namedAfter": "{{Leland Stanford}} (1824–1893), president of the Southern Pacific Railroad and governor of California 1862–1863 — how and when this stretch joined Stanford Avenue is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Leland_Stanford",
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "Part of the same 1887 Southern Pacific package as Towne Avenue. The name did not stay put: the street platted “Stanford” in 1887 is modern Crocker Street, and the Stanford name moved a block east onto the former Ruth Avenue — modern Stanford Avenue — some time after Feb. 1897.",
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "categories": [
          "person",
          "governor"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Towne Avenue (recounts the Crocker/Stanford street swap)",
            "url": "https://lastreetnames.com/street/towne-avenue-dtla/"
          },
          {
            "title": "Map of the Wolfskill Orchard Tract situated in the City of Los Angeles Cal. (sheet 2, M.R. 30-10, Jan. 11, 1888)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
          }
        ],
        "minLat": 34.0384,
        "maxLat": 34.0389,
        "from": {
          "px": [
            308,
            534
          ]
        },
        "to": {
          "px": [
            46,
            696
          ]
        }
      },
      {
        "label": "part of",
        "name": "Stanford Avenue",
        "entityId": "stanford-ave",
        "namedAfter": "{{Leland Stanford}} (1824–1893), president of the Southern Pacific Railroad and governor of California 1862–1863 — how and when this stretch joined Stanford Avenue is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Leland_Stanford",
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "Part of the same 1887 Southern Pacific package as Towne Avenue. The name did not stay put: the street platted “Stanford” in 1887 is modern Crocker Street, and the Stanford name moved a block east onto the former Ruth Avenue — modern Stanford Avenue — some time after Feb. 1897.",
        "attested": false,
        "categories": [
          "person",
          "governor"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Towne Avenue (recounts the Crocker/Stanford street swap)",
            "url": "https://lastreetnames.com/street/towne-avenue-dtla/"
          },
          {
            "title": "Map of the Wolfskill Orchard Tract situated in the City of Los Angeles Cal. (sheet 2, M.R. 30-10, Jan. 11, 1888)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
          }
        ],
        "maxLat": 34.0384,
        "from": {
          "px": [
            46,
            696
          ]
        },
        "to": null
      }
    ]
  },
  "Sun Mun Way": {
    "name": "Sun Mun Way",
    "entityId": "sun-mun-way",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "absentAsOf": {
      "text": "1849 (Hutton / Ord Survey)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
    },
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Sunbury Street": {
    "name": "Sunbury Street",
    "entityId": "sunbury-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Sunset Boulevard": {
    "name": "Sunset Boulevard",
    "entityId": "sunset-boulevard",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Sunvue Place": {
    "name": "Sunvue Place",
    "entityId": "sunvue-place",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Temple Street": {
    "name": "Temple Street",
    "orientation": "EW",
    "segments": [
      {
        "label": "part of",
        "name": "Temple Street",
        "entityId": "temple",
        "namedAfter": "{{Jonathan Temple}} (1796–1866), the Massachusetts trader who reached the pueblo about 1828, opened its first general store and took Mexican citizenship as Juan Temple — how and when this stretch joined Temple Street is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Jonathan_Temple",
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "Christened in 1859, along the one-block lane Temple had laid out himself beside his own downtown property.",
        "attested": false,
        "categories": [
          "person"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Temple Street (“christened in 1859”)",
            "url": "https://lastreetnames.com/street/temple-street/"
          },
          {
            "title": "Wikipedia: Temple Street (Los Angeles)",
            "url": "https://en.wikipedia.org/wiki/Temple_Street_(Los_Angeles)"
          },
          {
            "title": "Map of a part of Building Lots of the Mott Tract in the City & County of Los Angeles, California (M.R. 1-489, Mar. 2, 1869)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf"
          }
        ],
        "maxLng": -118.2477,
        "from": null,
        "to": {
          "px": [
            1677,
            379
          ]
        }
      },
      {
        "label": "part of (original Temple St)",
        "name": "Temple Street",
        "entityId": "temple",
        "namedAfter": "{{Jonathan Temple}} (1796–1866), the Massachusetts trader who reached the pueblo about 1828, opened its first general store and took Mexican citizenship as Juan Temple",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Jonathan_Temple",
        "planned": {
          "text": "by 1869",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1869",
            "until": null,
            "name": "Temple Street",
            "entityId": "temple",
            "formInForce": "Temple Street",
            "how": "origin",
            "origin": "labeled “Temple Street” on the 1869 Mott Tract building lots {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf"
          }
        ],
        "note": "Christened in 1859, along the one-block lane Temple had laid out himself beside his own downtown property.",
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
        },
        "knownFraction": 0.89,
        "categories": [
          "person"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Temple Street (“christened in 1859”)",
            "url": "https://lastreetnames.com/street/temple-street/"
          },
          {
            "title": "Wikipedia: Temple Street (Los Angeles)",
            "url": "https://en.wikipedia.org/wiki/Temple_Street_(Los_Angeles)"
          },
          {
            "title": "Map of a part of Building Lots of the Mott Tract in the City & County of Los Angeles, California (M.R. 1-489, Mar. 2, 1869; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf"
          }
        ],
        "minLng": -118.2477,
        "maxLng": -118.2431,
        "from": {
          "px": [
            1677,
            379
          ]
        },
        "to": {
          "px": [
            1593,
            1101
          ]
        }
      },
      {
        "label": "part of",
        "name": "Temple Street",
        "entityId": "temple",
        "namedAfter": "{{Jonathan Temple}} (1796–1866), the Massachusetts trader who reached the pueblo about 1828, opened its first general store and took Mexican citizenship as Juan Temple — how and when this stretch joined Temple Street is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Jonathan_Temple",
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "Christened in 1859, along the one-block lane Temple had laid out himself beside his own downtown property.",
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
        },
        "categories": [
          "person"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Temple Street (“christened in 1859”)",
            "url": "https://lastreetnames.com/street/temple-street/"
          },
          {
            "title": "Wikipedia: Temple Street (Los Angeles)",
            "url": "https://en.wikipedia.org/wiki/Temple_Street_(Los_Angeles)"
          },
          {
            "title": "Map of a part of Building Lots of the Mott Tract in the City & County of Los Angeles, California (M.R. 1-489, Mar. 2, 1869)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf"
          }
        ],
        "minLng": -118.2431,
        "maxLng": -118.2402,
        "from": {
          "px": [
            1593,
            1101
          ]
        },
        "to": {
          "px": [
            598,
            1521
          ]
        }
      },
      {
        "label": "part of",
        "name": "Temple Street",
        "entityId": "temple",
        "namedAfter": "{{Jonathan Temple}} (1796–1866), the Massachusetts trader who reached the pueblo about 1828, opened its first general store and took Mexican citizenship as Juan Temple — how and when this stretch joined Temple Street is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Jonathan_Temple",
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "Christened in 1859, along the one-block lane Temple had laid out himself beside his own downtown property.",
        "attested": false,
        "categories": [
          "person"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Temple Street (“christened in 1859”)",
            "url": "https://lastreetnames.com/street/temple-street/"
          },
          {
            "title": "Wikipedia: Temple Street (Los Angeles)",
            "url": "https://en.wikipedia.org/wiki/Temple_Street_(Los_Angeles)"
          },
          {
            "title": "Map of a part of Building Lots of the Mott Tract in the City & County of Los Angeles, California (M.R. 1-489, Mar. 2, 1869)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf"
          }
        ],
        "minLng": -118.2402,
        "from": {
          "px": [
            598,
            1521
          ]
        },
        "to": null
      }
    ]
  },
  "Toluca Street": {
    "name": "Toluca Street",
    "entityId": "toluca-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Toriumi Plaza": {
    "name": "Toriumi Plaza",
    "entityId": "toriumi-plaza",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "absentAsOf": {
      "text": "1849 (Hutton / Ord Survey)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
    },
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Towne Avenue": {
    "name": "Towne Avenue",
    "orientation": "NS",
    "segments": [
      {
        "label": "part of",
        "name": "Towne Avenue",
        "entityId": "towne-ave",
        "namedAfter": "{{Alban Nelson Towne}} (1829–1895), general manager of the Southern Pacific Railroad — how and when this stretch joined Towne Avenue is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Alban_N._Towne",
        "planned": {
          "text": "by 1888",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
        },
        "built": "not yet researched",
        "note": "Named when the subdividers of Joseph Wolfskill's downtown orchard gave 13 acres at 4th and Alameda for a new Southern Pacific station — the Arcade Depot, opened 1888 — and lettered the railroad's officers onto the surrounding streets. Stanford Avenue and Crocker Street come from the same deal.",
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "knownFraction": 0.78,
        "categories": [
          "person",
          "alive"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Towne Avenue",
            "url": "https://lastreetnames.com/street/towne-avenue-dtla/"
          },
          {
            "title": "Map of the Wolfskill Orchard Tract situated in the City of Los Angeles Cal. (sheet 5, M.R. 30-13, Jan. 11, 1888; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
          }
        ],
        "minLat": 34.045,
        "from": null,
        "to": {
          "px": [
            796,
            1091
          ]
        }
      },
      {
        "label": "part of (original Towne Ave)",
        "name": "Towne Avenue",
        "entityId": "towne-ave",
        "namedAfter": "{{Alban Nelson Towne}} (1829–1895), general manager of the Southern Pacific Railroad",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Alban_N._Towne",
        "planned": {
          "text": "1888",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "1888",
            "until": null,
            "name": "Towne Avenue",
            "entityId": "towne-ave",
            "formInForce": "Towne Avenue",
            "how": "origin",
            "origin": "labeled “Towne Ave” on the 1888 Wolfskill Orchard Tract (sheets 2–5) {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
          }
        ],
        "note": "Named when the subdividers of Joseph Wolfskill's downtown orchard gave 13 acres at 4th and Alameda for a new Southern Pacific station — the Arcade Depot, opened 1888 — and lettered the railroad's officers onto the surrounding streets. Stanford Avenue and Crocker Street come from the same deal.",
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "knownFraction": 1,
        "categories": [
          "person",
          "alive"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Towne Avenue",
            "url": "https://lastreetnames.com/street/towne-avenue-dtla/"
          },
          {
            "title": "Map of the Wolfskill Orchard Tract situated in the City of Los Angeles Cal. (sheet 2, M.R. 30-10, Jan. 11, 1888; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
          }
        ],
        "minLat": 34.0395,
        "maxLat": 34.045,
        "from": {
          "px": [
            796,
            1091
          ]
        },
        "to": {
          "px": [
            411,
            401
          ]
        }
      },
      {
        "label": "part of",
        "name": "Towne Avenue",
        "entityId": "towne-ave",
        "namedAfter": "{{Alban Nelson Towne}} (1829–1895), general manager of the Southern Pacific Railroad — how and when this stretch joined Towne Avenue is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Alban_N._Towne",
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "Named when the subdividers of Joseph Wolfskill's downtown orchard gave 13 acres at 4th and Alameda for a new Southern Pacific station — the Arcade Depot, opened 1888 — and lettered the railroad's officers onto the surrounding streets. Stanford Avenue and Crocker Street come from the same deal.",
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "categories": [
          "person",
          "alive"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Towne Avenue",
            "url": "https://lastreetnames.com/street/towne-avenue-dtla/"
          },
          {
            "title": "Map of the Wolfskill Orchard Tract situated in the City of Los Angeles Cal. (sheet 2, M.R. 30-10, Jan. 11, 1888)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
          }
        ],
        "minLat": 34.039,
        "maxLat": 34.0395,
        "from": {
          "px": [
            411,
            401
          ]
        },
        "to": {
          "px": [
            54,
            641
          ]
        }
      },
      {
        "label": "part of",
        "name": "Towne Avenue",
        "entityId": "towne-ave",
        "namedAfter": "{{Alban Nelson Towne}} (1829–1895), general manager of the Southern Pacific Railroad — how and when this stretch joined Towne Avenue is not yet researched",
        "namedAfterLink": "https://en.wikipedia.org/wiki/Alban_N._Towne",
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "Named when the subdividers of Joseph Wolfskill's downtown orchard gave 13 acres at 4th and Alameda for a new Southern Pacific station — the Arcade Depot, opened 1888 — and lettered the railroad's officers onto the surrounding streets. Stanford Avenue and Crocker Street come from the same deal.",
        "attested": false,
        "categories": [
          "person",
          "alive"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Towne Avenue",
            "url": "https://lastreetnames.com/street/towne-avenue-dtla/"
          },
          {
            "title": "Map of the Wolfskill Orchard Tract situated in the City of Los Angeles Cal. (sheet 2, M.R. 30-10, Jan. 11, 1888)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
          }
        ],
        "maxLat": 34.039,
        "from": {
          "px": [
            54,
            641
          ]
        },
        "to": null
      }
    ]
  },
  "Traction Avenue": {
    "name": "Traction Avenue",
    "orientation": "EW",
    "segments": [
      {
        "label": "beyond Alameda",
        "name": "Traction Avenue",
        "entityId": "traction-avenue",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1875 (Thomas Tract)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-060.pdf"
        },
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "maxLng": -118.2371,
        "from": null,
        "to": {
          "px": [
            390,
            29
          ]
        }
      },
      {
        "label": "beyond Merrick (2nd St)",
        "name": "Traction Avenue",
        "entityId": "traction-avenue",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "by 1887",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR013/MR013-087.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1887",
            "until": "?",
            "name": "2nd Street",
            "entityId": "second-street",
            "formInForce": "2nd Street",
            "origin": "labeled “SECOND” on the 1887 Mills and Wicks Extension map, sheet 1 {{(source)}} — Its ordinal position in the downtown grid — the numbering system was in place by 1849",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR013/MR013-087.pdf"
          },
          {
            "from": "?",
            "until": null,
            "name": "Traction Avenue",
            "entityId": "traction-avenue",
            "formInForce": "Traction Avenue",
            "how": "renaming",
            "origin": "arrival on this stretch not directly documented",
            "originLink": null
          }
        ],
        "note": null,
        "attested": true,
        "absentAsOf": {
          "text": "1875 (Thomas Tract)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-060.pdf"
        },
        "knownFraction": 0.14,
        "categories": [
          "unresearched",
          "renamed"
        ],
        "formerCategories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Recorded map: Mills and Wicks' Extension of Second St. and adjoining subdivision, City of Los Angeles, M.R. 13-87 — lots 1–144 and 160–236 subdivided at the request of M. L. Wicks and Howard W. Mills, April–May 1886, under the direction of Geo. C. Knox; further lots added Jan. 1887 (sheet 1 of 2) (identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR013/MR013-087.pdf"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-69, Aug. 29, 1849)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-069.pdf"
          },
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          }
        ],
        "minLng": -118.2371,
        "from": {
          "px": [
            390,
            29
          ]
        },
        "to": null
      }
    ]
  },
  "Union Avenue": {
    "name": "Union Avenue",
    "entityId": "union-avenue",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Union Drive": {
    "name": "Union Drive",
    "entityId": "union-drive",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Union Place": {
    "name": "Union Place",
    "entityId": "union-place",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Utah Street": {
    "name": "Utah Street",
    "entityId": "utah-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Valencia Street": {
    "name": "Valencia Street",
    "entityId": "valencia-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Valley Street": {
    "name": "Valley Street",
    "entityId": "valley-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Venice Boulevard": {
    "name": "Venice Boulevard",
    "orientation": "EW",
    "segments": [
      {
        "label": "part of",
        "name": "Venice Boulevard",
        "entityId": "venice-boulevard",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "maxLng": -118.263,
        "from": null,
        "to": {
          "px": [
            212,
            958
          ]
        }
      },
      {
        "label": "beyond Main (16th St)",
        "name": "Venice Boulevard",
        "entityId": "venice-boulevard",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "by 1893",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-016.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1893",
            "until": "?",
            "name": "16th Street",
            "entityId": "sixteenth-street",
            "formInForce": "16th Street",
            "origin": "labeled “16th ST.” and “(formerly Pine St)” on the 1893 Miguel Subdivision {{(source)}} — Its ordinal position in the downtown grid — the numbering system was in place by 1849",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-016.pdf"
          },
          {
            "from": "?",
            "until": null,
            "name": "Venice Boulevard",
            "entityId": "venice-boulevard",
            "formInForce": "Venice Boulevard",
            "how": "renaming",
            "origin": "arrival on this stretch not directly documented",
            "originLink": null
          }
        ],
        "note": null,
        "attested": true,
        "knownFraction": 0,
        "categories": [
          "unresearched",
          "renamed"
        ],
        "formerCategories": [
          "number"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Miguel Subdivision, part of the Celis Vineyard Tract in Los Angeles City, Cal. (M.R. 53-16, Mar. 25, 1893; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-016.pdf"
          },
          {
            "title": "L.A. Street Names: 1st Street (on the numbering system)",
            "url": "https://lastreetnames.com/street/0001st-street/"
          }
        ],
        "minLng": -118.263,
        "from": {
          "px": [
            212,
            958
          ]
        },
        "to": null
      }
    ]
  },
  "Victor Street": {
    "name": "Victor Street",
    "entityId": "victor-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Vignes Street": {
    "name": "Vignes Street",
    "orientation": "NS",
    "segments": [
      {
        "label": "part of (discontinuous)",
        "name": "Vignes Street",
        "entityId": "vignes-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
        },
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLat": 34.0529,
        "from": null,
        "to": {
          "px": [
            347,
            1205
          ]
        },
        "gapAfter": true
      },
      {
        "label": "beyond Commercial",
        "name": "Vignes Street",
        "entityId": "vignes-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLat": 34.0491,
        "maxLat": 34.0529,
        "from": "Commercial Street",
        "to": {
          "px": [
            989,
            728
          ]
        }
      },
      {
        "label": "part of",
        "name": "Vignes Street",
        "entityId": "vignes-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "maxLat": 34.0491,
        "from": {
          "px": [
            989,
            728
          ]
        },
        "to": null
      }
    ]
  },
  "Wall Street": {
    "name": "Wall Street",
    "orientation": "NS",
    "segments": [
      {
        "label": "part of",
        "name": "Wall Street",
        "entityId": "wall-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "by 1882",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-005.pdf"
        },
        "built": "not yet researched",
        "note": "Nothing found says what it was named for. New York's financial street is the obvious guess, and the only thing supporting it is company: the 1876 Moreno Vineyard sheet letters Wall Street and Regent Street two blocks apart, which is New York's and London's most famous commercial streets on one page of building lots.",
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "knownFraction": 0.82,
        "categories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Map of the Orchard Tract in the City of Los Angeles (M.R. 5-5, Aug. 2, 1882; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-005.pdf"
          },
          {
            "title": "Map showing Building Lots near L.A. & I. RR. Depot on San Pedro Street known as the Moreno Vineyard Tract (M.R. 3-166, Mar. 1, 1876)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-166.pdf"
          }
        ],
        "minLat": 34.0466,
        "from": null,
        "to": {
          "px": [
            448,
            1075
          ]
        }
      },
      {
        "label": "part of",
        "name": "Wall Street",
        "entityId": "wall-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "Nothing found says what it was named for. New York's financial street is the obvious guess, and the only thing supporting it is company: the 1876 Moreno Vineyard sheet letters Wall Street and Regent Street two blocks apart, which is New York's and London's most famous commercial streets on one page of building lots.",
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "categories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Map showing Building Lots near L.A. & I. RR. Depot on San Pedro Street known as the Moreno Vineyard Tract (M.R. 3-166, Mar. 1, 1876)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-166.pdf"
          }
        ],
        "minLat": 34.0454,
        "maxLat": 34.0466,
        "from": {
          "px": [
            448,
            1075
          ]
        },
        "to": {
          "px": [
            1203,
            156
          ]
        }
      },
      {
        "label": "part of (original Wall St)",
        "name": "Wall Street",
        "entityId": "wall-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "by 1876",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-166.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1876",
            "until": null,
            "name": "Wall Street",
            "entityId": "wall-street",
            "formInForce": "Wall Street",
            "how": "origin",
            "origin": "labeled “Wall Street” on the 1876 Moreno Vineyard Tract (sheets 1, 2) {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-166.pdf"
          }
        ],
        "note": "Nothing found says what it was named for. New York's financial street is the obvious guess, and the only thing supporting it is company: the 1876 Moreno Vineyard sheet letters Wall Street and Regent Street two blocks apart, which is New York's and London's most famous commercial streets on one page of building lots.",
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "knownFraction": 0.85,
        "categories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Map showing Building Lots near L.A. & I. RR. Depot on San Pedro Street known as the Moreno Vineyard Tract (M.R. 3-166, Mar. 1, 1876; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-166.pdf"
          }
        ],
        "minLat": 34.0434,
        "maxLat": 34.0454,
        "from": {
          "px": [
            1203,
            156
          ]
        },
        "to": {
          "px": [
            1218,
            1103
          ]
        }
      },
      {
        "label": "part of",
        "name": "Wall Street",
        "entityId": "wall-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "by 1884",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-033.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1884",
            "until": null,
            "name": "Wall Street",
            "entityId": "wall-street",
            "formInForce": "Wall Street",
            "how": "extension",
            "origin": "labeled “WALL STREET” on the 1884 Nordholdt Tract {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-033.pdf"
          }
        ],
        "note": "Nothing found says what it was named for. New York's financial street is the obvious guess, and the only thing supporting it is company: the 1876 Moreno Vineyard sheet letters Wall Street and Regent Street two blocks apart, which is New York's and London's most famous commercial streets on one page of building lots.",
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "knownFraction": 0.81,
        "categories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Map of the Nordholdt Tract (M.R. 6-33, Aug. 19, 1884; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-033.pdf"
          },
          {
            "title": "Map showing Building Lots near L.A. & I. RR. Depot on San Pedro Street known as the Moreno Vineyard Tract (M.R. 3-166, Mar. 1, 1876)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-166.pdf"
          }
        ],
        "minLat": 34.0418,
        "maxLat": 34.0434,
        "from": {
          "px": [
            1218,
            1103
          ]
        },
        "to": {
          "px": [
            533,
            1265
          ]
        }
      },
      {
        "label": "part of (Myrtle Ave)",
        "name": "Wall Street",
        "entityId": "wall-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "by 1886",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR011/MR011-063.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1886",
            "until": "?",
            "name": "Myrtle Avenue",
            "entityId": "myrtle",
            "formInForce": "Myrtle Avenue",
            "origin": "labeled “Myrtle Avenue” on the 1886 Maple Avenue Tract {{(source)}} — A plant name, and the company it keeps is the whole of the argument: the O. W. Childs Tract lays Myrtle one block from Maple, and Childs was the city's leading nurseryman. Nothing documents it. This one ran along modern Wall Street",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR011/MR011-063.pdf"
          },
          {
            "from": "?",
            "until": null,
            "name": "Wall Street",
            "entityId": "wall-street",
            "formInForce": "Wall Street",
            "how": "renaming",
            "origin": "arrival on this stretch not directly documented",
            "originLink": null
          }
        ],
        "note": "Nothing found says what it was named for. New York's financial street is the obvious guess, and the only thing supporting it is company: the 1876 Moreno Vineyard sheet letters Wall Street and Regent Street two blocks apart, which is New York's and London's most famous commercial streets on one page of building lots.",
        "attested": true,
        "knownFraction": 0,
        "categories": [
          "unknown",
          "renamed"
        ],
        "formerCategories": [
          "nature",
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Map of Maple Avenue Tract in City of Los Angeles (M.R. 11-63, Oct. 21, 1886; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR011/MR011-063.pdf"
          },
          {
            "title": "Map of the O. W. Childs Tract, 200 Lots in the City of Los Angeles, Cal. (M.R. 6-378, July 11, 1885)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-378.pdf"
          },
          {
            "title": "Map showing Building Lots near L.A. & I. RR. Depot on San Pedro Street known as the Moreno Vineyard Tract (M.R. 3-166, Mar. 1, 1876)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-166.pdf"
          }
        ],
        "minLat": 34.0406,
        "maxLat": 34.0418,
        "from": {
          "px": [
            533,
            1265
          ]
        },
        "to": {
          "px": [
            598,
            1201
          ]
        }
      },
      {
        "label": "beyond 8th",
        "name": "Wall Street",
        "entityId": "wall-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "by 1888",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR029/MR029-026.pdf"
        },
        "built": "not yet researched",
        "note": "Nothing found says what it was named for. New York's financial street is the obvious guess, and the only thing supporting it is company: the 1876 Moreno Vineyard sheet letters Wall Street and Regent Street two blocks apart, which is New York's and London's most famous commercial streets on one page of building lots.",
        "attested": true,
        "knownFraction": 0.78,
        "categories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Map of the Resubdivision of the Widow Botiller Tract (M.R. 29-26, Mar. 15, 1888; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR029/MR029-026.pdf"
          },
          {
            "title": "Map showing Building Lots near L.A. & I. RR. Depot on San Pedro Street known as the Moreno Vineyard Tract (M.R. 3-166, Mar. 1, 1876)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-166.pdf"
          }
        ],
        "minLat": 34.0401,
        "maxLat": 34.0406,
        "from": {
          "px": [
            598,
            1201
          ]
        },
        "to": "8th Street"
      },
      {
        "label": "beyond 8th",
        "name": "Wall Street",
        "entityId": "wall-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "Nothing found says what it was named for. New York's financial street is the obvious guess, and the only thing supporting it is company: the 1876 Moreno Vineyard sheet letters Wall Street and Regent Street two blocks apart, which is New York's and London's most famous commercial streets on one page of building lots.",
        "attested": false,
        "absentAsOf": {
          "text": "1888 (Widow Botiller Tract resubdivision)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR029/MR029-026.pdf"
        },
        "categories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Map showing Building Lots near L.A. & I. RR. Depot on San Pedro Street known as the Moreno Vineyard Tract (M.R. 3-166, Mar. 1, 1876)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-166.pdf"
          }
        ],
        "minLat": 34.0396,
        "maxLat": 34.0401,
        "from": "8th Street",
        "to": {
          "px": [
            1254,
            893
          ]
        }
      },
      {
        "label": "part of",
        "name": "Wall Street",
        "entityId": "wall-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "Nothing found says what it was named for. New York's financial street is the obvious guess, and the only thing supporting it is company: the 1876 Moreno Vineyard sheet letters Wall Street and Regent Street two blocks apart, which is New York's and London's most famous commercial streets on one page of building lots.",
        "attested": false,
        "categories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Map showing Building Lots near L.A. & I. RR. Depot on San Pedro Street known as the Moreno Vineyard Tract (M.R. 3-166, Mar. 1, 1876)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-166.pdf"
          }
        ],
        "minLat": 34.039,
        "maxLat": 34.0396,
        "from": {
          "px": [
            1254,
            893
          ]
        },
        "to": {
          "px": [
            557,
            505
          ]
        }
      },
      {
        "label": "part of (Myrtle Ave)",
        "name": "Wall Street",
        "entityId": "wall-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "by 1887",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR016/MR016-027.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1887",
            "until": "?",
            "name": "Myrtle Avenue",
            "entityId": "myrtle",
            "formInForce": "Myrtle Avenue",
            "how": "extension",
            "origin": "labeled “Myrtle Avenue” on the 1887 Moran Tract {{(source)}} — A plant name, and the company it keeps is the whole of the argument: the O. W. Childs Tract lays Myrtle one block from Maple, and Childs was the city's leading nurseryman. Nothing documents it. This one ran along modern Wall Street",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR016/MR016-027.pdf"
          },
          {
            "from": "?",
            "until": null,
            "name": "Wall Street",
            "entityId": "wall-street",
            "formInForce": "Wall Street",
            "how": "renaming",
            "origin": "arrival on this stretch not directly documented",
            "originLink": null
          }
        ],
        "note": "Nothing found says what it was named for. New York's financial street is the obvious guess, and the only thing supporting it is company: the 1876 Moreno Vineyard sheet letters Wall Street and Regent Street two blocks apart, which is New York's and London's most famous commercial streets on one page of building lots.",
        "attested": true,
        "knownFraction": 0,
        "categories": [
          "unknown",
          "renamed"
        ],
        "formerCategories": [
          "nature",
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Map of the Moran Tract (M.R. 16-27, Apr. 22, 1887; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR016/MR016-027.pdf"
          },
          {
            "title": "Map of the O. W. Childs Tract, 200 Lots in the City of Los Angeles, Cal. (M.R. 6-378, July 11, 1885)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-378.pdf"
          },
          {
            "title": "Map showing Building Lots near L.A. & I. RR. Depot on San Pedro Street known as the Moreno Vineyard Tract (M.R. 3-166, Mar. 1, 1876)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-166.pdf"
          }
        ],
        "minLat": 34.0369,
        "maxLat": 34.039,
        "from": {
          "px": [
            557,
            505
          ]
        },
        "to": {
          "px": [
            1058,
            306
          ]
        }
      },
      {
        "label": "part of (Myrtle Ave)",
        "name": "Wall Street",
        "entityId": "wall-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "by 1885",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-378.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1885",
            "until": "?",
            "name": "Myrtle Avenue",
            "entityId": "myrtle",
            "formInForce": "Myrtle Avenue",
            "how": "origin",
            "origin": "labeled “Myrtle Ave.” on the 1885 O. W. Childs Tract {{(source)}} — A plant name, and the company it keeps is the whole of the argument: the O. W. Childs Tract lays Myrtle one block from Maple, and Childs was the city's leading nurseryman. Nothing documents it. This one ran along modern Wall Street",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-378.pdf"
          },
          {
            "from": "?",
            "until": null,
            "name": "Wall Street",
            "entityId": "wall-street",
            "formInForce": "Wall Street",
            "how": "renaming",
            "origin": "arrival on this stretch not directly documented",
            "originLink": null
          }
        ],
        "note": "Nothing found says what it was named for. New York's financial street is the obvious guess, and the only thing supporting it is company: the 1876 Moreno Vineyard sheet letters Wall Street and Regent Street two blocks apart, which is New York's and London's most famous commercial streets on one page of building lots.",
        "attested": true,
        "knownFraction": 0,
        "categories": [
          "unknown",
          "renamed"
        ],
        "formerCategories": [
          "nature",
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Map of the O. W. Childs Tract, 200 Lots in the City of Los Angeles, Cal. (M.R. 6-378, July 11, 1885; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-378.pdf"
          },
          {
            "title": "Map showing Building Lots near L.A. & I. RR. Depot on San Pedro Street known as the Moreno Vineyard Tract (M.R. 3-166, Mar. 1, 1876)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-166.pdf"
          }
        ],
        "minLat": 34.0344,
        "maxLat": 34.0369,
        "from": {
          "px": [
            1058,
            306
          ]
        },
        "to": {
          "px": [
            1097,
            859
          ]
        }
      },
      {
        "label": "part of",
        "name": "Wall Street",
        "entityId": "wall-street",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "Nothing found says what it was named for. New York's financial street is the obvious guess, and the only thing supporting it is company: the 1876 Moreno Vineyard sheet letters Wall Street and Regent Street two blocks apart, which is New York's and London's most famous commercial streets on one page of building lots.",
        "attested": false,
        "categories": [
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Map showing Building Lots near L.A. & I. RR. Depot on San Pedro Street known as the Moreno Vineyard Tract (M.R. 3-166, Mar. 1, 1876)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-166.pdf"
          }
        ],
        "maxLat": 34.0344,
        "from": {
          "px": [
            1097,
            859
          ]
        },
        "to": null
      }
    ]
  },
  "Washington Boulevard": {
    "name": "Washington Boulevard",
    "entityId": "washington-boulevard",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Welcome Street": {
    "name": "Welcome Street",
    "entityId": "welcome-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": {
      "text": "by 1884",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-138.pdf"
    },
    "built": "not yet researched",
    "nameHistory": [
      {
        "from": "by 1884",
        "until": null,
        "name": "Welcome Street",
        "entityId": "welcome-street",
        "formInForce": "Welcome Street",
        "how": "origin",
        "origin": "labeled “Welcome Street” on the 1884 Glassell's Subdivision map {{(source)}}",
        "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-138.pdf"
      }
    ],
    "note": null,
    "attested": true,
    "knownFraction": 0.81,
    "categories": [
      "unknown"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "Recorded map: Glassell's Subdivision of Lot No. 7 etc., Block 39, Hancock Survey No. 1, M.R. 6-138 (recorded Dec. 27, 1884 at request of A. Glassell) (identified by map alignment, not a lot-level record)",
        "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-138.pdf"
      }
    ]
  },
  "Westlake Avenue": {
    "name": "Westlake Avenue",
    "entityId": "westlake-avenue",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Weyse Street": {
    "name": "Weyse Street",
    "entityId": "weyse-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "absentAsOf": {
      "text": "1849 (Hutton / Ord Survey)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
    },
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "White Knoll Drive": {
    "name": "White Knoll Drive",
    "entityId": "white-knoll-drive",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Whittier Boulevard": {
    "name": "Whittier Boulevard",
    "entityId": "whittier-boulevard",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Wilde Street": {
    "name": "Wilde Street",
    "entityId": "wilde-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "absentAsOf": {
      "text": "1888 (Wolfskill Orchard Tract, sheet 1 (M.R. 30-9))",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf"
    },
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Wilhardt Street": {
    "name": "Wilhardt Street",
    "entityId": "wilhardt-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Willow Street": {
    "name": "Willow Street",
    "orientation": "EW",
    "segments": [
      {
        "label": "Mateo to Santa Fe (original Willow St)",
        "name": "Willow Street",
        "entityId": "willow",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "by 1886",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR011/MR011-042.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1886",
            "until": null,
            "name": "Willow Street",
            "entityId": "willow",
            "formInForce": "Willow Street",
            "how": "origin",
            "origin": "labeled “Willow St” on the 1886 Goodwin Tract {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR011/MR011-042.pdf"
          }
        ],
        "note": "One of a run of tree and plant names platted on the Goodwin Tract in October 1886 — Palm, Spruce, Tulip and Willow together. None of them is documented beyond the plat, and the theme is the whole of the argument. This one ran along Willow Street, which keeps the name.",
        "attested": true,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
        },
        "knownFraction": 0.8,
        "categories": [
          "nature",
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Wikipedia: Arts District, Los Angeles",
            "url": "https://en.wikipedia.org/wiki/Arts_District,_Los_Angeles"
          },
          {
            "title": "Plan of the Goodwin Tract (M.R. 11-42, Oct. 6, 1886; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR011/MR011-042.pdf"
          }
        ],
        "maxLng": -118.2306,
        "from": null,
        "to": "Santa Fe Avenue",
        "gapAfter": true
      },
      {
        "label": "east of Mission Rd (discontinuous)",
        "name": "Willow Street",
        "entityId": "willow",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "One of a run of tree and plant names platted on the Goodwin Tract in October 1886 — Palm, Spruce, Tulip and Willow together. None of them is documented beyond the plat, and the theme is the whole of the argument. This one ran along Willow Street, which keeps the name.",
        "attested": false,
        "categories": [
          "nature",
          "unknown"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Wikipedia: Arts District, Los Angeles",
            "url": "https://en.wikipedia.org/wiki/Arts_District,_Los_Angeles"
          },
          {
            "title": "Plan of the Goodwin Tract (M.R. 11-42, Oct. 6, 1886)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR011/MR011-042.pdf"
          }
        ],
        "minLng": -118.2306,
        "from": "Mission Road",
        "to": null
      }
    ]
  },
  "Wilshire Boulevard": {
    "name": "Wilshire Boulevard",
    "orientation": "EW",
    "segments": [
      {
        "label": "part of",
        "name": "Wilshire Boulevard",
        "entityId": "wilshire-boulevard",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "maxLng": -118.2597,
        "from": null,
        "to": {
          "px": [
            542,
            814
          ]
        }
      },
      {
        "label": "part of",
        "name": "Wilshire Boulevard",
        "entityId": "wilshire-boulevard",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf"
        },
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
            "url": "https://www.openstreetmap.org/"
          }
        ],
        "minLng": -118.2597,
        "from": {
          "px": [
            542,
            814
          ]
        },
        "to": null
      }
    ]
  },
  "Wilson Street": {
    "name": "Wilson Street",
    "entityId": "wilson-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Winston Street": {
    "name": "Winston Street",
    "entityId": "winston-street",
    "namedAfter": null,
    "namedAfterLink": null,
    "planned": "not yet researched",
    "built": "not yet researched",
    "note": null,
    "attested": false,
    "absentAsOf": {
      "text": "1849 (Hutton / Ord Survey)",
      "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-071.pdf"
    },
    "categories": [
      "unresearched"
    ],
    "disputed": false,
    "sources": [
      {
        "title": "OpenStreetMap (current extract — this street has no research behind it yet)",
        "url": "https://www.openstreetmap.org/"
      }
    ]
  },
  "Witmer Street": {
    "name": "Witmer Street",
    "orientation": "NS",
    "segments": [
      {
        "label": "part of",
        "name": "Witmer Street",
        "entityId": "witmer-street",
        "namedAfter": "{{Henry Clayton Witmer}} (1856–1909), banker and real-estate developer, whose family's land was Crown Hill — how and when this stretch joined Witmer Street is not yet researched",
        "namedAfterLink": "https://lastreetnames.com/street/witmer-street/",
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "Witmer reached Los Angeles in November 1884 and had founded the Los Angeles Improvement Company two months later; the California Bank followed in 1887, with Moses L. Wicks and a son of Henry Mayo Newhall among his partners. Of everything the Witmers owned they were most associated with their 650 acres on Crown Hill, which this street climbs. Named January 1886.",
        "attested": false,
        "categories": [
          "person",
          "alive"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Recorded map: “Crownwood” (Witmer’s Subdivision of parts of Lots 2 and 7, Block 38, Hancock Survey; surveyed Nov. 1909 by Chas. Forman Jr.), M.B. 15-166",
            "url": "https://pw.lacounty.gov/smpm/landrecords/pdf/TR0015-166a.pdf"
          },
          {
            "title": "Plat of \"Crownwood\" (Dec. 10, 1909)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0015/TR0015-166a.pdf"
          }
        ],
        "minLat": 34.0612,
        "from": null,
        "to": {
          "px": [
            851,
            421
          ]
        }
      },
      {
        "label": "part of (original Witmer St)",
        "name": "Witmer Street",
        "entityId": "witmer-street",
        "namedAfter": "{{Henry Clayton Witmer}} (1856–1909), banker and real-estate developer, whose family's land was Crown Hill",
        "namedAfterLink": "https://lastreetnames.com/street/witmer-street/",
        "planned": {
          "text": "by 1909",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0015/TR0015-166a.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "by 1909",
            "until": null,
            "name": "Witmer Street",
            "entityId": "witmer-street",
            "formInForce": "Witmer Street",
            "how": "origin",
            "origin": "labeled “WITMER” and “WITMER STREET” on the 1909 Crownwood (sheets 1, 2) {{(source)}}",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0015/TR0015-166a.pdf"
          }
        ],
        "note": "Witmer reached Los Angeles in November 1884 and had founded the Los Angeles Improvement Company two months later; the California Bank followed in 1887, with Moses L. Wicks and a son of Henry Mayo Newhall among his partners. Of everything the Witmers owned they were most associated with their 650 acres on Crown Hill, which this street climbs. Named January 1886.",
        "attested": true,
        "knownFraction": 0.66,
        "categories": [
          "person",
          "alive"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Recorded map: “Crownwood” (Witmer’s Subdivision of parts of Lots 2 and 7, Block 38, Hancock Survey; surveyed Nov. 1909 by Chas. Forman Jr.), M.B. 15-166",
            "url": "https://pw.lacounty.gov/smpm/landrecords/pdf/TR0015-166a.pdf"
          },
          {
            "title": "Plat of \"Crownwood\" (Dec. 10, 1909; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0015/TR0015-166a.pdf"
          }
        ],
        "minLat": 34.0588,
        "maxLat": 34.0612,
        "from": {
          "px": [
            851,
            421
          ]
        },
        "to": {
          "px": [
            594,
            1793
          ]
        }
      },
      {
        "label": "part of",
        "name": "Witmer Street",
        "entityId": "witmer-street",
        "namedAfter": "{{Henry Clayton Witmer}} (1856–1909), banker and real-estate developer, whose family's land was Crown Hill — how and when this stretch joined Witmer Street is not yet researched",
        "namedAfterLink": "https://lastreetnames.com/street/witmer-street/",
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": "Witmer reached Los Angeles in November 1884 and had founded the Los Angeles Improvement Company two months later; the California Bank followed in 1887, with Moses L. Wicks and a son of Henry Mayo Newhall among his partners. Of everything the Witmers owned they were most associated with their 650 acres on Crown Hill, which this street climbs. Named January 1886.",
        "attested": false,
        "categories": [
          "person",
          "alive"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "Recorded map: “Crownwood” (Witmer’s Subdivision of parts of Lots 2 and 7, Block 38, Hancock Survey; surveyed Nov. 1909 by Chas. Forman Jr.), M.B. 15-166",
            "url": "https://pw.lacounty.gov/smpm/landrecords/pdf/TR0015-166a.pdf"
          },
          {
            "title": "Plat of \"Crownwood\" (Dec. 10, 1909)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0015/TR0015-166a.pdf"
          }
        ],
        "maxLat": 34.0588,
        "from": {
          "px": [
            594,
            1793
          ]
        },
        "to": null
      }
    ]
  },
  "Yale Street": {
    "name": "Yale Street",
    "orientation": "NS",
    "segments": [
      {
        "label": "part of (Hornet St)",
        "name": "Yale Street",
        "entityId": "yale",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": {
          "text": "1849",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
        },
        "built": "not yet researched",
        "nameHistory": [
          {
            "from": "1849",
            "until": "Feb. 1874",
            "name": "Hornet Street",
            "entityId": "hornet",
            "formInForce": "Hornet Street",
            "how": "origin",
            "origin": "labeled “HORNET ST.” and “CALLE DE LAS AVISPAS” on the 1849 Hutton / Ord Survey {{(source)}} — The insect — insects were a common naming source in the young pueblo, as with the Calle de los Chapules that became Figueroa",
            "originLink": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
          },
          {
            "from": "Feb. 1874",
            "until": null,
            "name": "Yale Street",
            "entityId": "yale",
            "formInForce": "Yale Street",
            "how": "renaming",
            "origin": "renamed per the Feb. 1874 renaming ordinance {{(source)}}",
            "originLink": "https://clerkapps.lacity.org/oldcfidocs/"
          }
        ],
        "note": null,
        "attested": true,
        "knownFraction": 1,
        "categories": [
          "unresearched",
          "renamed"
        ],
        "formerCategories": [
          "nature"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Yale Street",
            "url": "https://lastreetnames.com/street/yale-street/"
          },
          {
            "title": "Plan de la Ciudad de Los Angeles (M.R. 53-73, Aug. 29, 1849; identified by map alignment, not a lot-level record)",
            "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
          },
          {
            "title": "“An Ordinance Changing the names of Certain Streets in the City of Los Angeles” — Los Angeles Common Council, adopted Feb. 26, 1874 (council minutes, ledger p. 621)",
            "url": "https://clerkapps.lacity.org/oldcfidocs/"
          }
        ],
        "minLat": 34.0625,
        "from": null,
        "to": {
          "px": [
            421,
            526
          ]
        }
      },
      {
        "label": "part of",
        "name": "Yale Street",
        "entityId": "yale",
        "namedAfter": null,
        "namedAfterLink": null,
        "planned": "not yet researched",
        "built": "not yet researched",
        "note": null,
        "attested": false,
        "absentAsOf": {
          "text": "1849 (Hutton / Ord Survey)",
          "url": "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-073.pdf"
        },
        "categories": [
          "unresearched"
        ],
        "disputed": false,
        "sources": [
          {
            "title": "L.A. Street Names: Yale Street",
            "url": "https://lastreetnames.com/street/yale-street/"
          },
          {
            "title": "“An Ordinance Changing the names of Certain Streets in the City of Los Angeles” — Los Angeles Common Council, adopted Feb. 26, 1874 (council minutes, ledger p. 621)",
            "url": "https://clerkapps.lacity.org/oldcfidocs/"
          }
        ],
        "maxLat": 34.0625,
        "from": {
          "px": [
            421,
            526
          ]
        },
        "to": null
      }
    ]
  }
};

const VANISHED_STREETS = [
  {
    "entity": "garey",
    "asWritten": "GAREY STREET",
    "doc": "mr003-060-p1",
    "basis": "alignment",
    "note": "The plat draws and labels this segment west of Guadalupe, but none of the supplied modern street traces follows it on page 1.",
    "path": [
      [
        34.048589,
        -118.235132
      ],
      [
        34.047166,
        -118.235156
      ]
    ]
  },
  {
    "entity": "flower",
    "asWritten": "FLOWER STREET",
    "doc": "mr005-307-a",
    "basis": "alignment",
    "note": "The northern boundary roadway is drawn and lettered FLOWER STREET, but none of the supplied modern streets follows it.",
    "path": [
      [
        34.057063,
        -118.251017
      ],
      [
        34.055937,
        -118.252053
      ]
    ]
  },
  {
    "entity": "council-street",
    "asWritten": "Council Street",
    "doc": "mr006-138",
    "basis": "alignment",
    "note": null,
    "path": [
      [
        34.065606,
        -118.261066
      ],
      [
        34.065601,
        -118.260292
      ]
    ]
  },
  {
    "entity": "waters-street",
    "asWritten": "Waters Street",
    "doc": "mr006-138",
    "basis": "alignment",
    "note": null,
    "path": [
      [
        34.06389,
        -118.258809
      ],
      [
        34.062612,
        -118.259736
      ]
    ]
  },
  {
    "entity": "cameron-lane",
    "asWritten": "CAMERON LANE",
    "doc": "mr007-021",
    "basis": "alignment",
    "note": "The plat draws this east-west lane through Blocks A, B, and C, but none of the supplied modern street traces follows it.",
    "path": [
      [
        34.040143,
        -118.26836
      ],
      [
        34.038423,
        -118.264611
      ]
    ]
  },
  {
    "entity": "alexander-lane",
    "asWritten": "ALEXANDER LANE",
    "doc": "mr007-021",
    "basis": "alignment",
    "note": "This named north-south lane is drawn through Block A with no supplied modern counterpart.",
    "path": [
      [
        34.039875,
        -118.267775
      ],
      [
        34.039007,
        -118.268346
      ]
    ]
  },
  {
    "entity": "centerbrook-lane",
    "asWritten": "CENTERBROOK LANE",
    "doc": "mr007-021",
    "basis": "alignment",
    "note": "This named north-south lane is drawn through Block B with no supplied modern counterpart.",
    "path": [
      [
        34.039322,
        -118.266569
      ],
      [
        34.038454,
        -118.26714
      ]
    ]
  },
  {
    "entity": "catesby-lane",
    "asWritten": "CATSBY LANE",
    "doc": "mr007-021",
    "basis": "alignment",
    "note": "This named north-south lane is drawn through Block C with no supplied modern counterpart.",
    "path": [
      [
        34.038729,
        -118.265277
      ],
      [
        34.037869,
        -118.265844
      ]
    ]
  },
  {
    "entity": "willow",
    "asWritten": "Willow St",
    "doc": "mr011-042",
    "basis": "alignment",
    "note": "The labeled Willow St roadway continues east of modern Willow Street's end at Santa Fe Avenue, with no supplied modern counterpart.",
    "path": [
      [
        34.039359,
        -118.230626
      ],
      [
        34.039485,
        -118.228944
      ]
    ]
  },
  {
    "entity": "mesquit",
    "asWritten": "Mesquit St",
    "doc": "mr011-042",
    "basis": "alignment",
    "note": null,
    "path": [
      [
        34.038201,
        -118.229437
      ],
      [
        34.038494,
        -118.229456
      ]
    ]
  },
  {
    "entity": "fourth-street",
    "asWritten": "Fourth St",
    "doc": "mr030-009-p4",
    "basis": "alignment",
    "note": null,
    "path": [
      [
        34.043785,
        -118.239741
      ],
      [
        34.043696,
        -118.238109
      ]
    ]
  },
  {
    "entity": "santee-street",
    "asWritten": "Santee St",
    "doc": "mr053-016",
    "basis": "alignment",
    "note": null,
    "path": [
      [
        34.032427,
        -118.260493
      ],
      [
        34.03209,
        -118.260791
      ]
    ]
  },
  {
    "entity": "maple-dtla",
    "asWritten": "Maple Ave",
    "doc": "mr053-016",
    "basis": "alignment",
    "note": null,
    "path": [
      [
        34.031848,
        -118.259474
      ],
      [
        34.031511,
        -118.259773
      ]
    ]
  },
  {
    "entity": null,
    "asWritten": null,
    "doc": "mr053-063",
    "basis": "alignment",
    "note": null,
    "path": [
      [
        34.038621,
        -118.254526
      ],
      [
        34.03947,
        -118.253508
      ]
    ]
  },
  {
    "entity": null,
    "asWritten": null,
    "doc": "mr053-063",
    "basis": "alignment",
    "note": null,
    "path": [
      [
        34.039743,
        -118.253794
      ],
      [
        34.039293,
        -118.253291
      ]
    ]
  },
  {
    "entity": "main-street-dtla",
    "asWritten": "CALLE PRINCIPAL",
    "doc": "mr053-067",
    "basis": "alignment",
    "note": "The bottom grid corridor continues CALLE PRINCIPAL from sheet 68, but no supplied modern street follows it; modern Los Angeles Street crosses it obliquely.",
    "path": [
      [
        34.036259,
        -118.258371
      ],
      [
        34.041873,
        -118.253
      ]
    ]
  },
  {
    "entity": "spring",
    "asWritten": "CALLE PRIMAVERA",
    "doc": "mr053-067",
    "basis": "alignment",
    "note": null,
    "path": [
      [
        34.041651,
        -118.255029
      ],
      [
        34.036874,
        -118.259412
      ]
    ]
  },
  {
    "entity": "main-street-dtla",
    "asWritten": "CALLE PRINCIPAL",
    "doc": "mr053-068",
    "basis": "alignment",
    "note": null,
    "path": [
      [
        34.043843,
        -118.251305
      ],
      [
        34.040963,
        -118.253925
      ]
    ]
  },
  {
    "entity": null,
    "asWritten": null,
    "doc": "mr053-068",
    "basis": "alignment",
    "note": null,
    "path": [
      [
        34.050396,
        -118.24961
      ],
      [
        34.049553,
        -118.252849
      ],
      [
        34.048504,
        -118.25554
      ],
      [
        34.048329,
        -118.25926
      ],
      [
        34.04852,
        -118.261425
      ]
    ]
  },
  {
    "entity": null,
    "asWritten": null,
    "doc": "mr053-069",
    "basis": "alignment",
    "note": null,
    "path": [
      [
        34.054533,
        -118.241417
      ],
      [
        34.053014,
        -118.24453
      ],
      [
        34.051454,
        -118.247611
      ],
      [
        34.050172,
        -118.250881
      ]
    ]
  },
  {
    "entity": null,
    "asWritten": null,
    "doc": "mr053-071",
    "basis": "alignment",
    "note": null,
    "path": [
      [
        34.039098,
        -118.238413
      ],
      [
        34.034348,
        -118.240687
      ]
    ]
  },
  {
    "entity": null,
    "asWritten": null,
    "doc": "mr053-073",
    "basis": "alignment",
    "note": null,
    "path": [
      [
        34.063324,
        -118.233539
      ],
      [
        34.062449,
        -118.233818
      ],
      [
        34.060725,
        -118.235043
      ],
      [
        34.06062,
        -118.235805
      ]
    ]
  },
  {
    "entity": "eternity",
    "asWritten": "CALLE DE LA ETERNIDAD",
    "doc": "mr053-073",
    "basis": "alignment",
    "note": null,
    "path": [
      [
        34.067388,
        -118.235509
      ],
      [
        34.068915,
        -118.234513
      ]
    ]
  },
  {
    "entity": null,
    "asWritten": null,
    "doc": "mr053-073",
    "basis": "alignment",
    "note": null,
    "path": [
      [
        34.064156,
        -118.232358
      ],
      [
        34.065019,
        -118.22839
      ]
    ]
  },
  {
    "entity": null,
    "asWritten": null,
    "doc": "mr053-073",
    "basis": "alignment",
    "note": null,
    "path": [
      [
        34.064138,
        -118.23242
      ],
      [
        34.062552,
        -118.228668
      ]
    ]
  },
  {
    "entity": null,
    "asWritten": null,
    "doc": "mr053-073",
    "basis": "alignment",
    "note": null,
    "path": [
      [
        34.060996,
        -118.232541
      ],
      [
        34.057493,
        -118.236486
      ]
    ]
  },
  {
    "entity": "third-street",
    "asWritten": "W. 3RD ST.",
    "doc": "tr0015-166a-p2",
    "basis": "alignment",
    "note": "A separate W. 3RD ST. stub is drawn east of Lucas, but none of the supplied modern street traces follows it.",
    "path": [
      [
        34.059009,
        -118.261165
      ],
      [
        34.058878,
        -118.260883
      ]
    ]
  }
];
