// ★ ORDINANCE NO. 187 (OLD SERIES) — "An Ordinance changing the name of Kohler
// street to Eighth street." Adopted June 30, 1885, approved July 3, published in
// the Los Angeles Daily Herald August 30, 1885. Unqualified.
//
// ⚠⚠⚠ NO ROW, AND THE REASON IS THE ROW RULE DOING ITS JOB. `names.js` has a
// `kohler`, and it is the WRONG KOHLER. Its own internalNote says so:
//
//     "⚠ TWO KOHLER STREETS. Kines says the ORIGINAL Kohler Street ran where 9th
//      Street now runs between San Pedro and Alameda, and that the current one
//      was named in 1887. Our four sightings run 1887–1927 … and are all on the
//      current street."
//
// This ordinance renames the ORIGINAL Kohler Street, in 1885 — two years before
// the modern one was named. Writing `kohler → eighth-street` would take the
// entity for the street named after Charles Kohler in 1887, in the Arts
// District, and assert that it became Eighth Street in 1885. That is two
// lineages merged on a shared spelling, which is CLAUDE.md rule 2 in textual
// form. No row. See TASK.md.
//
// ⭐⭐ AND IT CONTRADICTS KINES ON A POINT OF FACT, WHICH IS WORTH MORE THAN A
// ROW WOULD HAVE BEEN. Kines has the original Kohler Street running "where 9th
// Street now runs between San Pedro and Alameda". The city's own ordinance makes
// it **EIGHTH** street, not Ninth. One of the two is wrong, and the city's
// printed ordinance is the better witness. `kohler`'s note carries Kines's claim
// and should be revisited. FINDINGS §6.
//
// ⚠ SERIES. Ordinance No. 187 of the OLD SERIES. documents/teed-1887/FINDINGS.md §9.
//
// PROVENANCE. Read from contrast-normalised 200 dpi renders of PDF pages 108–109
// of documents/teed-1887/teed-1887-vol3.pdf (printed pp. 102–103). Transcribed by
// eye; full text in ord-187-transcription.md. ⚠ One reader, not two.

module.exports = {
  id: "ord-187",
  title: "Ordinance No. 187 (Old Series), “An Ordinance changing the name of Kohler street to Eighth street” — adopted by the Council of the City of Los Angeles June 30, 1885, approved July 3, published August 30, 1885; printed in Freeman G. Teed, comp., Compiled Ordinances and Resolutions of the City of Los Angeles, Vol. III (1887), p. 102",
  shortTitle: "Ord. 187 (Old Series), the first Kohler Street becomes Eighth Street (1885)",
  url: "https://link.gale.com/apps/doc/DT0106633769/MMLP?u=uclosangeles",
  scan: "documents/teed-1887/teed-1887-vol3.pdf",
  transcription: "documents/ord-187/ord-187-transcription.md",

  date: { on: "1885-06-30" },
  recorded: "1887",
  form: "textual",
  type: "ordinance",
  attests: "built-by",
  completeness: "exhaustive-in-scope",
  coverage: [[34.135, -118.325], [34.135, -118.155],
             [33.995, -118.155], [33.995, -118.325]],
  sweptFully: true,
  sweptFor: [],
  readBy: "instance",

  excerpts: [
    { id: "title",
      text: "An Ordinance changing the name of Kohler street to Eighth street.",
      note: "⭐⭐ EIGHTH, not Ninth. `kohler`'s note has Kines placing the original Kohler Street " +
            "“where 9th Street now runs between San Pedro and Alameda”; the city says it became " +
            "Eighth. FINDINGS §6." },

    { id: "sec-1",
      text: "Section 1. That the name of that certain street in the City of Los Angeles, heretofore " +
            "known as Kohler street, be changed, and that hereupon and hereafter it shall be known " +
            "and designated as Eighth street.",
      note: "Unqualified — no stretch stated. The same formula as Ords. 275 and 286." },

    { id: "sec-2",
      text: "Sec. 2. All ordinances or parts of ordinances in conflict with this ordinance are hereby " +
            "repealed." },

    { id: "sec-3",
      text: "Sec. 3. The Clerk of the Council shall certify to the passage of this ordinance, and " +
            "cause the same to be published once in the Los Angeles Daily HERALD, and thereupon and " +
            "thereafter it shall take effect and be in force." },

    { id: "certification",
      text: "I hereby certify that the forgoing ordinance was adopted by the Council of the City of " +
            "Los Angeles, at its meeting of June 30, 1885. W. W. ROBINSON, Clerk of the Council of " +
            "the City of Los Angeles. Approved this 3d day of July, 1885. E. F. SPENCE, Mayor. " +
            "Published August 30, 1885.",
      note: "⚠ Published nearly two months after approval, where every neighbouring ordinance is " +
            "published within days. Either a real delay or a slip for July 30; recorded, not " +
            "resolved. Under Sec. 3 the ordinance took effect on publication, so the date matters." },

    { id: "index-kohler",
      text: "Kohler street, name of changed to Eighth street … 187 … 187",
      note: "⚠ The whole Kohler entry in the GENERAL INDEX, printed p. 674, PDF 675 — and the PAGE " +
            "column repeats the ordinance number. The page is 102." }
  ],

  // Deliberately empty. The `from` entity does not exist: `kohler` in names.js is
  // the 1887 Arts District street, not the street this 1885 ordinance renames.
  // See TASK.md.
  rows: []
};
