// Los Angeles Council minutes, Monday Sept. 14, 1896, ledger p. 295 — two
// petitions, and one of them states the MOTIVE behind the whole 1896-97
// renaming campaign in a single sentence.
//
// ★ WHY THE NAMES WERE CHANGED. Petition No. 816 asks that the names of certain
// streets in the South Side Tract "be changed so as to make them compare with
// the names of the streets on the north side of Pico Street." That is the
// argument for everything the council did in these eighteen months: a street
// that runs on both sides of a line should carry one name, and where the north
// side had numbers the south side should have the same numbers.
//
// It explains the shape of the Sept. 8 ordinance six days earlier
// (documents/min-1896-09-08), where nine named streets in the southwest became
// six numbers and three of the numbers took two streets each. Read on its own
// that ordinance looks like the grid swallowing names for tidiness. Read with
// this petition it is residents asking to be renumbered so their addresses line
// up with the ones across Pico.
//
// It also reframes Ordinance No. 4093 of Feb. 1897 (documents/ord-4093). The
// 1897 omnibus has always looked like a single administrative act; this shows
// it as the end of a campaign with a stated purpose, driven at least partly
// from below by property owners rather than imposed from the City Engineer's
// office. handbook/research-leads.md carries the point.
//
// NO ROWS. A petition is a request (§5, and the Feb. 1874 petition that asked
// for Union Avenue and got Pearl is the standing proof —
// documents/lah-1874-02-13). Neither of these names a street, a stretch or an
// outcome: 816 says "certain streets in the South Side Tract" and 817 says
// "certain streets ... adjacent to the City of Los Angeles on the southwest ...
// as set forth in said petition", and the petitions themselves are not in the
// minute book. Both were referred to the City Engineer, so whatever came back
// from him is the thing to look for.
//
// PROVENANCE. Scanned minutes supplied by Kenny, 2026-09-06, from
// https://clerkapps.lacity.org/oldcfidocs/ — the Sept. 14, 1896 volume, PDF
// p. 26, ledger p. 295. Kenny found the page; the clip beside this file is its
// upper third and the transcription is Claude's. The hand is clear and the
// reading is not in doubt.

module.exports = {
  id: "min-1896-09-14",
  title: "Los Angeles Council minutes, Sept. 14, 1896 — petitions No. 816 and No. 817, asking that street names south and southwest of the city be brought into line with those north of Pico Street (ledger p. 295)",
  shortTitle: "the Sept. 1896 renaming petitions",
  url: "https://clerkapps.lacity.org/oldcfidocs/",
  scan: "documents/min-1896-09-14/min-1896-09-14-clip.jpg",
  transcription: null,

  date: { on: "1896-09-14" },
  form: "textual",
  type: "minutes",
  // It attests that streets existed to be petitioned about and no more; with no
  // street named and no extent, nothing here can be drawn.
  attests: "built-by",
  completeness: "incidental",
  coverage: [[34.135, -118.325], [34.135, -118.155],
             [33.995, -118.155], [33.995, -118.325]],
  sweptFully: false,
  sweptFor: [],
  readBy: "human",

  excerpts: [
    { id: "petition-816-compare-with-pico",
      text: "No. 816- From Geo Harlan et al, asking that the names of certain streets in the " +
            "South Side Tract be changed so as to make them compare with the names of the " +
            "streets on the north side of Pico Street. Referred to the City Engineer.",
      note: "The motive, stated by the people asking for it. Worth more than most of the " +
            "ordinances: it says what the campaign was FOR." },

    { id: "petition-817-southwest",
      text: "No. 817- From C. O. Morgan et al, asking that certain streets in that portion " +
            "of Los Angeles County lying adjacent to the City of Los Angeles on the " +
            "southwest be changed as set forth in said petition. Referred to the City " +
            "Engineer.",
      note: "The same ground the Sept. 8 ordinance had just renamed, but OUTSIDE the city " +
            "— county territory adjacent to it. Renaming there was not the council's to " +
            "do, which may be why this one goes to the City Engineer and vanishes. Note " +
            "the petitioner's surname: a C. O. Morgan, where the 1882 Orchard Tract was " +
            "G. W. Morgan's (documents/mr005-005). No connection established." },

    { id: "fire-district-requena",
      text: "No. 818- From John A. Bullard, asking that the limits of Fire District No 4 be " +
            "changed to make the northerly line of said district the center line of " +
            "Wilmington Street between First and Requena Streets. Referred to the Board of " +
            "Fire Commissioners.",
      note: "Kept only for the two names: Wilmington Street and REQUENA Street, both of " +
            "them downtown streets this project does not yet have. Requena is a lost street " +
            "and this dates it alive in Sept. 1896." },

    { id: "central-park-tract",
      text: "No. 821- From J. C. Kays et al, asking the Council to accept the proposition " +
            "submitted to the Park Commissioners by Mr. E. F. Kysor for the establishment " +
            "of a park in the Central Park Tract on Central Avenue, bounded north by Kysor " +
            "Street, east by Central Avenue, south by Perry Street and west by Park Avenue…",
      note: "Kept for the boundary, which is four street names at once on ground next to " +
            "Central Avenue — and for Kysor Street, named for the man making the offer, " +
            "which is the tract-owner pattern happening in real time." }
  ],

  rows: []
};
