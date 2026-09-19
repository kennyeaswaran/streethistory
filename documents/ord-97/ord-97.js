// ★★★ ORDINANCE NO. 97 — THE INSTRUMENT THAT COINED "GEORGIA BELL STREET",
// and the answer to the oldest dated conflict in this corpus.
//
// "SEC. 4. That the name of that street in said City of Los Angeles, in Bell's
// Addition, heretofore known as Georgia street, is hereby changed, and the same
// shall be hereafter known and designated as Georgia Bell street."
//
// Adopted by the Council Sept. 1, 1883, approved by Mayor C. E. Thom Sept. 3,
// published in the Los Angeles Daily Herald Sept. 11, 1883. Printed in full at
// pp. 293-294 of Robinson's 1884 compilation (documents/robinson-1884), which
// is the copy in hand; the two page images are beside this file and the whole
// text is in ord-97-text.md, transcribed by eye.
//
// ⚠⚠ THIS CONTRADICTS A SOURCED SPELLING PERIOD IN names.js, AND NOTHING THERE
// HAS BEEN TOUCHED. `georgia-bell` dates the Georgia Bell period from 1889 on
// Gen. Forman's Feb. 1897 recollection, corroborated by Ordinance No. 48 (New
// Series) of May 10, 1889 (documents/lah-1889-05-10). This ordinance coins the
// same name six years earlier, with a number, a date and a locative. The
// reading the corpus already offers still fits and is now much better founded:
// the name was COINED here in Sept. 1883 for the Georgia Street in Bell's
// Addition, and the 1889 act FOLDED IN the stretches platted Nevada in 1886
// (the Oct. 1888 committee list has "Nevada St., Nevada St. and Nevada St.,
// between Ninth and Tenth Sts., changed to Georgia Bell St."). Both dates are
// then right about different events. Deciding that is Kenny's, not mine — see
// documents/robinson-1884/FINDINGS.md.
//
// ⭐ WHAT THIS SETTLES WITHOUT ANY JUDGEMENT AT ALL. documents/lah-1883-09-02 is
// the Herald's report of this very meeting, and its own header says the thing
// it could not establish was "that the Georgia Street in Bell's addition is the
// west-downtown Georgia of `georgia-bell`", and that what was missing was "the
// ordinance book for Sept. 1883, or the council minutes for Sept. 1, 1883".
// handbook/MINUTES-TO-CHECK.md lists that meeting. This IS the ordinance book
// for that meeting. It does not by itself locate Bell's Addition — but see the
// note on the Pine row below, which does more than anything else here to.
//
// ⭐⭐ THE OTHER FIVE SECTIONS ARE WORTH AS MUCH AS THE GEORGIA ONE, AND FOUR OF
// THEM CANNOT BE WRITTEN AS ROWS because the corpus has no entity for the name
// they start from. Recorded here as excerpts so the next pass does not have to
// re-read the book:
//
//   • Sec. 1, Turner -> SONORA, "in front of the Pico House, extending from Main
//     street to New High street". `turner-street`'s internalNote already warns
//     that this is NOT the Turner it holds; the ordinance gives the other one an
//     extent for the first time. No `sonora` entity exists and no entity exists
//     for the plaza Turner, so there is nothing to write a row between.
//   • Sec. 2, Pacific -> MONTGOMERY, "in Bell's Addition and the Los Angeles
//     Homestead Tract". `pacific-st-dtla` is the Kiefer Tract Pacific of 1887
//     and its own note refuses this identification; no `montgomery` entity.
//   • Sec. 3, Pine -> CHERRY, "between Bell's Addition and the Los Angeles
//     Homestead Tract". ⭐ `cherry-street`'s internalNote says the Pine-became-
//     Cherry lead "IS NOT CONFIRMED AND THE DATE ARGUES AGAINST IT", because
//     the Cherry it holds is already lettered on a sheet of January 1884 while
//     the ordinance it knew of was an 1890s one. Ordinance 97 is Sept. 1883 —
//     FOUR MONTHS BEFORE that sheet — so the date now argues FOR it. And the
//     sheet is documents/mr005-431, Wright's Subdivision of the Sisters of
//     Charity Tract, whose Cherry Street is modern L. A. Live Way, a block from
//     modern Georgia Street. That is a location for Bell's Addition, arrived at
//     from the other end. Still no `pine` entity for this Pine, so no row.
//   • Sec. 5, Elm -> BUSH, "in the Los Angeles Homestead Tract". `elm-street`'s
//     internalNote already says the 1897 omnibus's "Elm to Bush street" is a
//     THIRD Elm, distinct from the Morris Plan one that became Olive in 1886.
//     Here is that third Elm, fourteen years earlier, with a tract.
//   • Sec. 6, Rose -> KUHRTS, "in East Los Angeles". `rose-street`'s
//     internalNote already rules itself out of this one by name. No `kuhrts`.
//
// ⚠ THE NUMBER IS ROBINSON'S. Ordinance No. 104, three months later at p. 318,
// ordains that ordinances and resolutions "shall be numbered consecutively in
// accordance with the numbering of the ordinances and resolutions in the
// compilation ... compiled by W. W. Robinson". So the city had no ordinance
// numbers at all before Nov. 1883: 1 to 103 are numbers the compiler assigned
// and the Council then adopted. That is why the Herald of Sept. 2, 1883 reports
// this act without a number, and it is why documents/robinson-1884 is the only
// place the number "97" can come from. See that document.
//
// PROVENANCE. Gale, The Making of Modern Law: Primary Sources, doc id
// DT0102876584, downloaded by Kenny; the volume PDF is in
// documents/robinson-1884/. Rendered at 200 dpi, OCR'd with tesseract, then
// read line by line off the image by Claude, 2026-09-19.

module.exports = {
  id: "ord-97",
  title: "Ordinance No. 97 (Robinson series), \u201CAn Ordinance changing the names of Turner, Pine, Georgia, Elm, Pacific and Rose streets\u201D \u2014 adopted Sept. 1, 1883, approved Sept. 3, published Sept. 11, 1883",
  shortTitle: "Ord. 97, the 1883 Georgia Bell renaming",
  url: "https://link.gale.com/apps/doc/DT0102876584/MMLP?u=uclosangeles&sid=bookmark-MMLP",
  scan: "documents/ord-97/ord-97-p293.jpg",
  transcription: "documents/ord-97/ord-97-text.md",

  // \u00a74: `date` is when the content was made \u2014 the day the Council adopted it.
  // `recorded` is the artifact in hand: the 1884 compilation that prints it.
  date: { on: "1883-09-01" },
  recorded: "1884",
  form: "textual",
  type: "ordinance",
  attests: "built-by",              // six streets existed to be renamed
  // It names every street it touches and claims nothing outside them.
  completeness: "exhaustive-in-scope",
  // The city limits of 1883 as a rough rectangle, exactly as ord-1613 and
  // ord-4093 do. This is the scope of the INSTRUMENT, not a claim about where
  // any of the six streets ran.
  coverage: [[34.135, -118.325], [34.135, -118.155],
             [33.995, -118.155], [33.995, -118.325]],
  sweptFully: true,                 // the whole ordinance is read and excerpted
  sweptFor: [],
  readBy: "human",

  excerpts: [
    { id: "title",
      text: "AN ORDINANCE changing the names of Turner, Pine, Georgia, Elm, Pacific and Rose streets." },

    { id: "sec-1-turner-sonora",
      text: "SECTION 1. That the name of that street in said City of Los Angeles, in front of the " +
            "Pico House, extending from Main street to New High street, and heretofore known as " +
            "Turner street, is hereby changed, and the same shall be hereafter designated and known " +
            "as Sonora street.",
      note: "The only section with a from-to extent. This is NOT `turner-street`, which is the " +
            "Turner of the Arts District / Little Tokyo that Ordinance No. 81 renamed Jackson four " +
            "months earlier (documents/ord-81); that entity's own note keeps the two apart. No " +
            "entity exists for this plaza Turner and none for Sonora, so no row can be written." },

    { id: "sec-2-pacific-montgomery",
      text: "SEC. 2. That the name of that street in said City of Los Angeles, in Bell\u2019s Addition " +
            "and the Los Angeles Homestead Tract, heretofore known as Pacific street, is hereby " +
            "changed, and the same shall be hereafter designated and known as Montgomery street.",
      note: "Pacific runs THROUGH both tracts; Pine (Sec. 3) runs BETWEEN them. `pacific-st-dtla` " +
            "is the 1887 Kiefer Tract Pacific and its note explicitly declines this identification." },

    { id: "sec-3-pine-cherry",
      text: "SEC. 3. That the name of that street in said City of Los Angeles, between Bell\u2019s " +
            "Addition and the Los Angeles Homestead Tract, heretofore known as Pine street, is " +
            "hereby changed, and the same shall be hereafter known and designated as Cherry street.",
      note: "\u2605 Dates Pine \u2192 Cherry to Sept. 1883, which is four months BEFORE Wright\u2019s " +
            "Subdivision of the Sisters of Charity Tract (documents/mr005-431, Jan. 1884) letters " +
            "Cherry Street on ground that is modern L. A. Live Way. `cherry-street` rejected the " +
            "Pine lead because the only ordinance it knew of was an 1890s one and the sheet was " +
            "older; this ordinance is older than the sheet." },

    { id: "sec-4-georgia-georgia-bell",
      text: "SEC. 4. That the name of that street in said City of Los Angeles, in Bell\u2019s Addition, " +
            "heretofore known as Georgia street, is hereby changed, and the same shall be hereafter " +
            "known and designated as Georgia Bell street.",
      note: "\u2605\u2605\u2605 The warrant for the change row below, and the instrument documents/lah-1883-09-02 " +
            "reports at second hand. The locative \u201Cin Bell\u2019s Addition\u201D is the ordinance\u2019s own; it " +
            "does not by itself establish that this is the west-downtown Georgia of `georgia-bell`, " +
            "but that entity already reads the street as laid out on Bell land." },

    { id: "sec-5-elm-bush",
      text: "SEC. 5. That the name of that street in said City of Los Angeles, in the Los Angeles " +
            "Homestead Tract, heretofore known as Elm street, is hereby changed, and the same shall " +
            "be hereafter known and designated as Bush street.",
      note: "The \u201CElm to Bush street\u201D of the 1897 omnibus, fourteen years early and with a tract " +
            "attached. `elm-street` (the Morris Plan Elm that became Olive in 1886) already flags " +
            "this as a third, separate Elm." },

    { id: "sec-6-rose-kuhrts",
      text: "SEC. 6. That the name of that street in East Los Angeles, in said city, heretofore known " +
            "as Rose street, is hereby changed, and the same shall be hereafter known and designated " +
            "as Kuhrts street.",
      note: "`rose-street` is the Johnston Tract Rose that survives in the Arts District and its " +
            "note already excludes it from this change. \u201CEast Los Angeles\u201D in 1883 is the district " +
            "across the river, not the modern city of that name." },

    { id: "certification",
      text: "I hereby certify that the foregoing ordinance was adopted by the Council of the City of " +
            "Los Angeles, at its meeting of September 1st. A. D. 1883. W. W. ROBINSON, Clerk of the " +
            "Council of the City of Los Angeles. Approved this 3d day of September, A. D. 1883. " +
            "C. E. THOM, Mayor. Published September 11th, 1883.",
      note: "The full stop after \u201CSeptember 1st\u201D is the volume\u2019s. Robinson signs as Clerk of the " +
            "Council and is also the compiler of the volume this is printed in." }
  ],

  rows: [
    // A RESPELLING WITHIN ONE ENTITY (\u00a75, and the same shape as ord-4093\u2019s
    // Georgia row read the other way): `georgia-bell` takes up the form
    // "Georgia Bell Street" on this date. from === to, so `toForm` says which
    // form took effect.
    //
    // SCOPE IS whole-name AND THAT IS DELIBERATE. "in Bell\u2019s Addition" reads
    // as a disambiguator \u2014 which of the city\u2019s Georgia Streets is meant \u2014 not
    // as a stretch carved out of one street, and the entity this lands on is
    // precisely the Georgia of Bell\u2019s land. So the change applies wherever
    // `georgia-bell` is attested, which today is documents/tr0030-086 (the
    // Whiffen Tract, on modern Georgia Street) and documents/lah-1897-02-24.
    { kind: "change", from: "georgia-bell", to: "georgia-bell",
      scope: "whole-name",
      says: ["sec-4-georgia-georgia-bell", "title"],
      toForm: "Georgia Bell Street",
      mechanism: "renaming",
      note: "\u26a0 CONFLICTS WITH THE ENTITY\u2019S OWN SPELLING PERIODS, WHICH ARE LEFT ALONE. " +
            "`georgia-bell` dates the Georgia Bell form from 1889 on Forman\u2019s recollection and " +
            "on Ordinance No. 48 (New Series) of May 10, 1889. This row is a dated instrument " +
            "putting the same form in force on Sept. 1, 1883. Either the 1889 act re-enacted a " +
            "name already coined here (the reading `georgia-bell` and documents/lah-1883-09-02 " +
            "both already offer, with the 1886 Nevada stretches folded in), or the 1883 change " +
            "did not hold. Nothing in names.js has been changed on the strength of this row." }
  ]
};
