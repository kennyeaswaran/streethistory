// ★★★ ORDINANCE NO. 381 — "An Ordinance changing the name of a portion of New
// Cincinnati street." Adopted Mar. 12, 1888, approved by Mayor W. H. Workman
// Mar. 19, published in the Los Angeles Evening Express Mar. 21, 1888.
//
// A QUALIFIED RENAMING WHOSE EXTENT IS IN WORDS, WHICH IS RARE AND IS WHY THIS
// ROW DRAWS. "That the name of New Cincinnati street in the City of Los Angeles
// BETWEEN TEMPLE STREET AND BELLEVUE AVENUE be, and the same is, hereby changed
// to Edgeware road." Both cross streets survive under those names and both meet
// modern Edgeware Road at 0 m in the OSM extract, so the stretch resolves
// without any of the interpretation change-rows-amendment §5 warns about.
//
// ⚠⚠ THE SAME CHANGE IS ALSO IN THE CORPUS FOURTEEN MONTHS LATER, OVER A LONGER
// STRETCH, AND KENNY SHOULD LOOK AT THIS. Ordinance No. 48 (New Series) of
// Apr. 22, 1889 (documents/lah-1889-05-10) carries clause c041: "New Cincinnati
// street, extending FROM OR NEAR COURT STREET to Bellevue avenue … be changed to
// Edgeware road", entered there as an unqualified `whole-name` row. Court Street
// is SOUTH of Temple Street, so the two instruments are not duplicates — 1888
// took Temple-to-Bellevue and 1889 took Court-to-Bellevue, which is the same
// change carried a block or two further south. The corpus therefore now holds
// two change rows with the same `from` and `to` at two dates. Either
//
//   (a) the 1888 ordinance did the northern part and the 1889 omnibus finished
//       the job, in which case both rows are right and the 1889 one should
//       probably become `extent` rather than `whole-name`; or
//   (b) the 1889 omnibus simply re-legislated a corridor already renamed without
//       checking, exactly as it did to Elm → Olive at clause c058, in which case
//       this 1888 row is the real date and the 1889 row is a re-enactment.
//
// Nothing here decides between them and an instance should not. FINDINGS §5.
//
// THE PAPER IS THE EVENING EXPRESS. Not the Daily Tribune of Ords. 320 and 345,
// not the Herald of Ord. 1613. That is a third newspaper carrying a renaming
// instrument in this corpus, and it is the same house — Evening Express Company
// — that printed the volume this text is read from.
//
// THE GROUND. `new-cincinnati-st` is lettered on documents/mr012-025, the block
// bounded by Bellevue Avenue, Figueroa Street (modern Boylston), Temple Street
// and New Cincinnati Street — which is exactly the stretch this ordinance
// renames. `edgeware` is one of the two loop roads Hall and Stilson laid out
// across Angeleno Heights in 1886; its southern arm is this street.
//
// PROVENANCE. Read from a 300 dpi render of PDF page 172 of
// documents/teed-1889/teed-1889-vol4.pdf (printed p. 168); full text in
// ord-381-transcription.md beside this file. ⚠ Transcribed by an instance,
// 2026-09-19; the leaf is clean and no word is doubtful, but a second reader has
// not seen it.

module.exports = {
  id: "ord-381",
  title: "Ordinance No. 381, “An Ordinance changing the name of a portion of New Cincinnati street” — adopted by the Council of the City of Los Angeles Mar. 12, 1888, approved Mar. 19, published Mar. 21, 1888; printed in Freeman G. Teed, comp., Charter and Compiled Ordinances and Resolutions of the City of Los Angeles, Vol. IV (1889), p. 168",
  shortTitle: "Ord. 381, New Cincinnati becomes Edgeware Road (1888)",
  url: "https://link.gale.com/apps/doc/DT0106634468/MMLP?u=uclosangeles",
  scan: "documents/teed-1889/teed-1889-vol4.pdf",
  transcription: "documents/ord-381/ord-381-transcription.md",

  date: { on: "1888-03-12" },
  recorded: "1889",
  form: "textual",
  type: "ordinance",
  attests: "built-by",
  completeness: "exhaustive-in-scope",
  // The city limits of the day. The ordinance's own scope is one stretch of one
  // street, and that stretch is stated on the row, not here.
  coverage: [[34.135, -118.325], [34.135, -118.155],
             [33.995, -118.155], [33.995, -118.325]],
  sweptFully: true,
  sweptFor: [],
  readBy: "instance",

  excerpts: [
    { id: "title",
      text: "An Ordinance changing the name of a portion of New Cincinnati street.",
      note: "“A portion of” in the enacting title, and the LIST OF ORDINANCES keeps it — " +
            "“381.—Changing the name of a portion of New Cincinnati street”. The volume's " +
            "index drops it to “name of part of changed to Edgeware road”. Both preserve " +
            "that the change was partial, which is what makes this row `extent`." },

    { id: "sec-1",
      text: "Section 1. That the name of New Cincinnati street in the City of Los Angeles between " +
            "Temple street and Bellevue avenue be, and the same is, hereby changed to Edgeware road.",
      note: "The stretch, in cross streets rather than metes and bounds — and both of them are " +
            "still named that and still meet Edgeware Road. This is the qualified form " +
            "change-rows-amendment §2 describes, stated as plainly as the corpus ever gets it." },

    { id: "sec-2",
      text: "Sec. 2. The Clerk of the Council shall certify to the passage of this ordinance, and " +
            "shall cause the same to be published once in the Los Angeles Evening Express, and " +
            "thereupon and thereafter it shall take effect and be in force.",
      note: "Third paper, same condition: publication is what puts the ordinance in force. " +
            "handbook/RENAMING-SOURCES.md §2b." },

    { id: "certification",
      text: "I hereby certify that the foregoing ordinance was adopted by the Council of the City " +
            "of Los Angeles at its meeting of March 12, A. D. 1888. FREEMAN G. TEED, Clerk of the " +
            "Council of the City of Los Angeles. Approved this 19th day of March, A. D. 1888. " +
            "W. H. WORKMAN, Mayor. Published March 21, 1888." }
  ],

  rows: [
    { kind: "change", from: "new-cincinnati-st", to: "edgeware",
      scope: "extent",
      street: "Edgeware Road", fromCross: "Temple Street", toCross: "Bellevue Avenue",
      wording: "That the name of New Cincinnati street in the City of Los Angeles between Temple street and Bellevue avenue be, and the same is, hereby changed to Edgeware road.",
      says: ["sec-1", "title", "certification"],
      mechanism: "renaming",
      note: "Qualified and resolved. The document's own words are in `wording`; the modern extent " +
            "is Temple Street to Bellevue Avenue, both of which meet Edgeware Road at 0 m in the " +
            "OSM extract, so no interpretation was needed. ⚠ `edgeware` in the extract includes " +
            "the northern arm of the loop (the old Kern Street) as well as this southern one, " +
            "because the generator's normalisation folds East/West/North Edgeware Road together; " +
            "the two named crosses are what pins this row to the southern arm. " +
            "⚠ See the header: Ord. 48 (N.S.) of Apr. 1889 renames the same street again, from " +
            "Court street northward, and that row is on documents/lah-1889-05-10." }
  ]
};
