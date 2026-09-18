// ★★ THE INSTRUMENT FOR `regent-street`. "That all that portion of REGENT STREET,
// from Fifth street to the present southern terminus of said Regent street, is
// hereby changed, and the same shall hereafter be called MAPLE AVENUE."
//
// The `regent-street` entity was minted on 2026-09-06 from the Moreno Vineyard
// Tract sheet, recorded Mar. 1876 (documents/mr003-166-p1), which letters Regent
// between Los Angeles Street and Wall Street. Its note reads "The corridor is
// Maple Avenue today, between 5th and 6th" — an observation from the modern map
// with nothing behind it. This is the act, thirteen years later, and it runs from
// Fifth Street south, which fits.
//
// IT ALSO REVERSES THE 1888 COMMITTEE. That list had proposed the opposite —
// "Maple Ave. and Los Angeles St.: from Washington St. south, changed to Regent
// St." (documents/lah-1888-10-11). Fourteen months later the council makes Regent
// into Maple instead. A committee list is not an instrument.
//
// SECTION 1 ALSO RESTORES A NAME: the portion of Second Street between Lucas
// Avenue and Figueroa "(formerly Lakeshore avenue)" goes back to being Lakeshore
// Avenue — undoing part of what Ordinance No. 364 had done three months earlier
// (documents/lah-1889-09-19). A restoration inside three months, and a shape
// handbook/change-rows-amendment.md §10 lists as one the model cannot express.
//
// THE SECOND CLIP is the same ordinance printed again the following day. Kept
// because a duplicate publication is itself a fact about how these were
// advertised, and because the second setting is easier to read in places.
//
// PROVENANCE. Two clippings supplied by Kenny, 2026-09-06 (CDNC phrase search).

module.exports = {
  id: "lah-1889-12-14",
  title: "Ordinance No. 482 (New Series), changing Second Street to Lakeshore Avenue, Regent Street to Maple Avenue, and Downey Avenue west of the river to Olympia Street — adopted Dec. 9, 1889, approved Dec. 13, published Dec. 14 and again Dec. 15, 1889",
  shortTitle: "Ord. 482, Regent → Maple",
  url: "https://cdnc.ucr.edu/?a=d&d=LAH18891214.1.9",
  scan: "documents/lah-1889-12-14/lah-1889-12-14-clip.jpg",
  transcription: null,

  date: { on: "1889-12-09" },
  recorded: "1889-12-14",
  form: "textual",
  type: "ordinance",
  attests: "built-by",
  completeness: "exhaustive-in-scope",
  coverage: [[34.135, -118.325], [34.135, -118.155],
             [33.995, -118.155], [33.995, -118.325]],
  sweptFully: false,
  sweptFor: [],
  readBy: "human",

  excerpts: [
    { id: "title",
      text: "AN ORDINANCE CHANGING THE NAMES OF CERTAIN STREETS IN THE CITY OF LOS ANGELES." },

    { id: "sec-1-lakeshore",
      text: "SECTION 1. That the name of that portion of Second street (formerly Lakeshore avenue) " +
            "between Lucas avenue and Figueroa street, is hereby changed, and the same shall " +
            "hereafter be called Lakeshore avenue.",
      note: "A restoration: the parenthesis admits the street had been Lakeshore before, and " +
            "Ordinance No. 364 of Sept. 1889 is what had made it Second Street." },

    { id: "sec-1-regent-maple",
      text: "That all that portion of Regent street, from Fifth street to the present southern " +
            "terminus of said Regent street, is hereby changed, and the same shall hereafter be " +
            "called Maple avenue.",
      note: "★ The instrument behind `regent-street`'s disappearance into Maple Avenue." },

    { id: "sec-1-downey-olympia",
      text: "That all that portion of Downey avenue west of the Los Angeles river, is hereby changed, " +
            "and the same shall be called Olympia street.",
      note: "The change Mr. Summerland thought too classic for the Eighth ward " +
            "(documents/lah-1889-12-10)." },

    { id: "certification",
      text: "I hereby certify that the foregoing ordinance was adopted by the Council of the City of " +
            "Los Angeles, at its meeting of December 9, 1889. FREEMAN G. TEED, City Clerk. Approved " +
            "December 13, 1889. HENRY T. HAZARD, Mayor." }
  ],

  rows: [
    // Audit 2026-09-18 (handbook/change-rows-audit-2026-09-18.md), bin B.
    // QUALIFIED, UNRESOLVED — and a rule-2 catch. It was first written as resolved,
    // 2nd Street from Lucas Avenue to Figueroa Street (both 0 m), and the what-if
    // build painted Lake Shore Avenue over 2nd Street ground lettered “Second” since
    // 1869. The 1889 “Figueroa street” is NOT modern Figueroa: modern Figueroa north
    // of Pico was Pearl Street until Ord. 4093 (1897). The Figueroa of 1889 is
    // `figueroa-gov`, now Boylston Street — which does not meet modern 2nd Street at
    // all (nearest 203 m), so the east end is on vanished ground and has no crossing
    // to name. The west end resolves (2nd × Lucas, 0 m; `lake-shore-ave`'s own row on
    // mr010-081 starts there).
    // ⚠ READ DIFFERENTLY FROM THE HEADER: this is not §10's form 4, which
    // withdraws a change a DRAFT would have made; it is an enacted ordinance changing
    // the name on the ground back again, i.e. a genuine revival, and the model
    // expresses it as an ordinary change row. When Second Street took this ground is
    // not in the corpus — the Oct. 1888 committee proposed "Diamond St., Lake Shore
    // Ave. and Stevenson Ave., changed to Second St." and Ordinance No. 48 (body
    // untranscribed) presumably did it. `from` is `second-street` on that reading:
    // the downtown name extended west along the cable route.
    { kind: "change", from: "second-street", to: "lake-shore-ave",
      scope: "extent-unresolved",
      wording: "that portion of Second street (formerly Lakeshore avenue) between Lucas avenue and Figueroa street",
      says: ["sec-1-lakeshore", "certification"],
      mechanism: "renaming",
      confirmed: false,
      note: "Adopted Dec. 9, approved Dec. 13, 1889. The ordinance itself records that the stretch had been Lakeshore Avenue before." },
    // QUALIFIED, UNRESOLVED. The north end resolves (Maple Avenue × 5th Street,
    // 0 m). The south end is Regent's OWN 1889 terminus, which no document states;
    // the 1876 Moreno Vineyard sheet letters Regent only from 5th to 6th, and using
    // that as the end would be writing derived evidence in the ordinance's voice —
    // the failure change-rows-amendment.md §1 records three times.
    { kind: "change", from: "regent-street", to: "maple-dtla",
      scope: "extent-unresolved",
      wording: "all that portion of Regent street, from Fifth street to the present southern terminus of said Regent street",
      says: ["sec-1-regent-maple", "certification"],
      mechanism: "renaming",
      confirmed: false,
      note: "Adopted Dec. 9, approved Dec. 13, 1889." }
  ]
};
