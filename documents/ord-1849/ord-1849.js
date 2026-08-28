// The Ord/Hutton survey — the city's first street plan, and the planning act
// for the downtown numbered grid. Ink on paper proves intent, not pavement
// (Hope Street waited two decades), hence planned-on, never built-*.

module.exports = {
  id: "ord-1849",
  title: "Ord/Hutton survey, “Plan de la Ciudad de Los Angeles” (Aug. 29, 1849)",
  shortTitle: "Ord/Hutton survey",
  url: "https://tessa2.lapl.org/digital/collection/maps/id/42/",
  transcription: null,              // no Part A file yet; rows seeded from the
                                    // prior hand-authored entries

  date: { on: "1849-08-29" },
  type: "survey",
  attests: "planned-on",            // the survey IS the planning act for the
                                    // grid it lays out (row-level default here;
                                    // §4.2's planned-by default is for maps
                                    // that merely show existing streets)
  completeness: "incidental",
  // Rough footprint of the surveyed grid (replace via georef when aligned).
  coverage: [[34.060, -118.260], [34.060, -118.235],
             [34.040, -118.235], [34.040, -118.260]],
  sweptFully: false,                // only the streets below are entered so far
  sweptFor: ["2nd Street", "3rd Street", "Figueroa Street"],
  readBy: "human",

  // The county recorder's certified copy (recorded Dec. 2, 1893) — a
  // recorded-map primary anchor for the same content, carried through to
  // generated sources wherever this document is cited.
  copies: [
    { title: "Recorded map: Ord's Survey, county-recorder's certified copy, M.R. 53-66/73 (“A full true and correct copy of original,” recorded Dec. 2, 1893) — sheets 68–69 draw the original downtown grid, including the numbered cross streets (Calle 1ª–8ª)",
      url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR053/MR053-068.pdf" }
  ],

  rows: [
    { kind: "state", name: "third-street", asWritten: "Calle 3ª",
      street: "3rd Street", from: "Figueroa Street", to: "Main Street",
      basis: "label" },             // the grid ran west from Main; Figueroa was
                                    // then the survey's "Calle de los Chapules"

    { kind: "state", name: "second-street", asWritten: "Calle 2ª",
      street: "2nd Street", from: "Hill Street", to: "Alameda Street",
      basis: "label" },

    // "Calle de los Chapules" on the roadway that became Pearl, then (1897)
    // today's Figueroa north of Pico. NOT the same street as the original
    // Figueroa a few blocks west (today's Boylston).
    { kind: "state", name: "chapules", asWritten: "Calle de los Chapules",
      street: "Figueroa Street", from: null, to: "Pico Boulevard",
      basis: "label" }

    // Remaining grid streets (1st, 4th–8th, the north–south streets, Calle de
    // los Chapules on today's Boylston alignment …) not yet entered — extend
    // sweptFor as they land.
  ]
};
