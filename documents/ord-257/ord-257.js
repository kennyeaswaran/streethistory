// ★★ ORDINANCE NO. 257 (OLD SERIES) — "An Ordinance changing the name of High
// street." Adopted September 20, 1886, approved September 25, published in the
// Los Angeles Daily Herald September 29, 1886. High street → Walters street,
// unqualified.
//
// THE NUMBER AND THE COUNCIL DAY, WHICH THE HERALD ITEM DID NOT GIVE.
// documents/lah-1886-09-21 carries the change row `high-street-chinatown →
// walters-street`, confirmed by Kenny on 2026-09-18, and its note says: "The
// Herald reports the ordinance presented and adopted in one item; the ordinance
// number and the council day are not in the excerpt." Both are here: **No. 257**,
// adopted **September 20, 1886**, approved the 25th, published the 29th.
// handbook/SWITCHOVER.md §3 wanted this row confirmed; it is now backed by the
// city's own printing as well as the newspaper's report.
//
// ⚠⚠ NO ROW HERE, ON PURPOSE. The row exists and is confirmed on
// lah-1886-09-21; writing it again would pin one transition from two documents.
// Same shape as documents/ord-345 in the sibling volume.
//
// ⭐⭐ WHAT IS NEW IS THE GROUND. The corpus has never had a cross street for
// High/Walters. This volume gives two independent placements and they agree:
//   • **Resolution No. 471** (p. 563) grades New High street from Virgin street
//     to Temple street and lists its intersections in order — Virgin, a point
//     177 ft south of Virgin, **WALTERS**, **BELLEVUE AVENUE**, Marchessault.
//   • **Resolutions 232, 246, 278, 279, 309, 310** grade Buena Vista street
//     "between High and Short", "from Short street to High" and "between High
//     and Virgin streets" — so on Buena Vista the order ran Short, High, Virgin.
// Short street became Bellevue avenue in January 1885 (documents/ord-152). Both
// readings therefore put High/Walters one block from Bellevue on the Virgin side,
// in the Sonoratown grid north of the Plaza — which is where
// `high-street-chinatown` is lettered "Calle Alta" on the 1849 Ord survey, and
// where Ord Street is today.
//
// ⚠ HIGH STREET IS NOT NEW HIGH STREET. Both are live in this volume, indexed
// separately, and Res. 471 grades one past the other.
//
// ⚠ SERIES. Ordinance No. 257 of the OLD SERIES. documents/teed-1887/FINDINGS.md §9.
//
// PROVENANCE. Read from a contrast-normalised 200 dpi render of PDF page 204 of
// documents/teed-1887/teed-1887-vol3.pdf (printed p. 197). Transcribed by eye;
// full text in ord-257-transcription.md. ⚠ One reader, not two.

module.exports = {
  id: "ord-257",
  title: "Ordinance No. 257 (Old Series), “An Ordinance changing the name of High street” (to Walters street) — adopted by the Council of the City of Los Angeles September 20, 1886, approved September 25, published September 29, 1886; printed in Freeman G. Teed, comp., Compiled Ordinances and Resolutions of the City of Los Angeles, Vol. III (1887), p. 197",
  shortTitle: "Ord. 257 (Old Series), High Street becomes Walters Street (1886)",
  url: "https://link.gale.com/apps/doc/DT0106633769/MMLP?u=uclosangeles",
  scan: "documents/teed-1887/teed-1887-vol3.pdf",
  transcription: "documents/ord-257/ord-257-transcription.md",

  date: { on: "1886-09-20" },
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
      text: "An Ordinance changing the name of High street.",
      note: "The title names only the old street, which is why the LIST OF ORDINANCES entry left the " +
            "contents unknown. The new name is in Section 1." },

    { id: "sec-1",
      text: "Section 1. That the name of that certain street in the City of Los Angeles, known as " +
            "High street, be and the same is hereby changed to Walters street.",
      note: "The whole operative text, and unqualified: no stretch, no tract, no cross street. Matches " +
            "the Herald's report at documents/lah-1886-09-21, which carries the row." },

    { id: "sec-2",
      text: "Sec. 2. The Clerk of the Council shall certify to the passage of this ordinance, and " +
            "cause the same to be published once in the Los Angeles Daily HERALD, and thereupon and " +
            "thereafter it shall take effect and be in force." },

    { id: "certification",
      text: "I hereby certify that the foregoing ordinance was adopted by the Council of the City of " +
            "Los Angeles, at its meeting of September 20, 1886. W. W. ROBINSON, Clerk of the Council " +
            "of the City of Los Angeles. Approved this 25th day of September, 1886. E. F. SPENCE, " +
            "Mayor. Published September 29, 1886.",
      note: "⭐ The number, the council day and the approval that lah-1886-09-21's row note records as " +
            "missing. The Herald item is dated Sept. 21, the day after adoption." },

    { id: "res-471-new-high",
      text: "RESOLUTION No. 471. Resolution of the Mayor and Council of the City of Los Angeles to " +
            "establish the grade of New High street, from Virgin street to Temple street. … At the " +
            "intersection of Virgin street, the grade shall be on the southeast corner 39.25 feet " +
            "above the datum plane … At a point 177 feet south of south line of Virgin street … At " +
            "the intersection of Walters street, the grade shall be 39.20 feet above the datum " +
            "plane. At the intersection of Bellevue avenue, the grade shall be 36.25 feet above the " +
            "datum plane. At the intersection of Marchessault street …",
      note: "⭐⭐ Printed p. 563, PDF 581. The best placement of Walters/High in the corpus: it " +
            "crosses New High Street between Virgin Street and Bellevue Avenue. `walters-street`'s " +
            "sources have only an 1890 Herald notice that a map of Walters Street was declared " +
            "official; this is four years earlier and names two neighbours." },

    { id: "res-buena-vista-high-short",
      text: "232 Ordering grading of Buena Vista street, between High and Short … 305 / 246 Ordering " +
            "grading of Buena Vista street, from Short street to High … 323 / 278 Accepting grading " +
            "of Buena Vista street, between High and Virgin streets … 357 / 279 Ordering payment for " +
            "grading Buena Vista street, between High and Virgin streets … 358",
      note: "⭐ The LIST OF RESOLUTIONS, pages i–ii. Four entries putting High Street between Short " +
            "Street and Virgin Street on Buena Vista. Short became Bellevue avenue by Ord. 152, " +
            "which is the same pair Res. 471 gives on New High — two independent sources, one " +
            "answer." },

    { id: "index-walters",
      text: "Walters street, grade of at New High street … 471 … 563 / name of High street changed " +
            "to … 257 … 197",
      note: "The whole Walters entry in the GENERAL INDEX, printed p. 681, PDF 700. Two lines, and " +
            "no other. There is no separate “High street” heading with grade entries — the index " +
            "files everything under the new name." }
  ],

  // Deliberately empty: the row is on documents/lah-1886-09-21, confirmed by
  // Kenny 2026-09-18. This folder supplies the number, the dates and the ground.
  rows: []
};
