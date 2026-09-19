// ★★ ORDINANCE NO. 207 (OLD SERIES) — "An Ordinance changing the names of
// certain streets." Adopted January 6, 1886, approved January 14, published in
// the Los Angeles Daily Herald January 15, 1886. Three renamings in four
// sections.
//
// THE NUMBER IS THE NEW FACT. The corpus already holds this ordinance's text —
// documents/lah-1886-01-15 transcribes the Herald's printing of it, with rows
// for `elm-street → olive` and `william-santee → santee-street` — but the Herald
// item gives no ordinance number, and neither did we. It is No. 207 of the old
// series, on printed page 135 of Teed's Vol. III.
//
// ⚠⚠ THIS DOCUMENT CARRIES NO ROWS ON PURPOSE. The two rows that belong to this
// act already exist on lah-1886-01-15, audited on 2026-09-18 and correctly
// scoped (`extent` on Olive Street from Pico to 14th; `extent-unresolved` for the
// Childs-tract William). Writing them again here would put the same claim in the
// corpus twice and pin the same transition from two documents. This folder exists
// to give the act its number, its official wording and its certification, and to
// record the third change, which still has nowhere to go. Same shape as
// documents/ord-345 in the sibling volume.
//
// ★ THE OFFICIAL TEXT DIFFERS FROM THE NEWSPAPER'S IN TWO PLACES, both trivial
// and both worth having on record: "Child's tract" here against the Herald's
// "Childs Tract", and Section 1's "the name AS that certain street", which is a
// compositor's slip for "of" that the Herald does not share.
//
// ⚠ SERIES. Ordinance No. 207 of the OLD SERIES. documents/teed-1887/FINDINGS.md §9.
//
// PROVENANCE. Read from contrast-normalised 200 dpi renders of PDF pages 141–142
// of documents/teed-1887/teed-1887-vol3.pdf (printed pp. 135–136). Transcribed by
// eye; full text in ord-207-transcription.md. ⚠ One reader, not two.

module.exports = {
  id: "ord-207",
  title: "Ordinance No. 207 (Old Series), “An Ordinance changing the names of certain streets” (Elm to Olive; two William streets to Santee and Goss) — adopted by the Council of the City of Los Angeles January 6, 1886, approved January 14, published January 15, 1886; printed in Freeman G. Teed, comp., Compiled Ordinances and Resolutions of the City of Los Angeles, Vol. III (1887), p. 135",
  shortTitle: "Ord. 207 (Old Series), Elm → Olive and the two William streets (1886)",
  url: "https://link.gale.com/apps/doc/DT0106633769/MMLP?u=uclosangeles",
  scan: "documents/teed-1887/teed-1887-vol3.pdf",
  transcription: "documents/ord-207/ord-207-transcription.md",

  date: { on: "1886-01-06" },
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
      text: "An Ordinance changing the names of certain streets.",
      note: "The same title as Ords. 242 and 314 of this volume; the LIST OF ORDINANCES repeats it " +
            "verbatim, which is why the contents of all three were unknown until the pages were read." },

    { id: "sec-1-elm-olive",
      text: "Section 1. That the name as that certain street known as Elm street, and extending from " +
            "Pico street to California street, be and the same is hereby changed to Olive street.",
      note: "⚠ “the name AS that certain street” is the book's slip for “of”; the Herald's copy " +
            "(lah-1886-01-15) reads “of”. QUALIFIED by a stated from–to: Pico street to California " +
            "street, and California Street is the street that became Fourteenth Street. The row is on " +
            "lah-1886-01-15, resolved to Olive Street from Pico Boulevard to 14th Street." },

    { id: "sec-2-william-santee",
      text: "Sec. 2. That the name of that certain street known as William street, situated in the " +
            "Child's tract, be and the same is hereby changed to Santee street.",
      note: "Qualified by a TRACT rather than by cross streets, which is why the row on " +
            "lah-1886-01-15 is `extent-unresolved`. The official spelling here is “Child's tract”; " +
            "the Herald printed “Childs Tract”." },

    { id: "sec-3-william-goss",
      text: "Sec. 3. That the name of that certain street known as William street, and situated in " +
            "the Los Angeles Improvement Company's subdivision of lots, be and the same is hereby " +
            "changed to Goss street.",
      note: "⚠ THE THIRD CHANGE, AND IT HAS NO ROW ANYWHERE. There is no `goss` entity and no entity " +
            "for this second William street (`william-farragut` is the Bixel one, split off in " +
            "September 2026, and nothing ties it to the Los Angeles Improvement Company). The whole " +
            "point of the section is that there were two William streets and the city had to tell " +
            "them apart. See TASK.md." },

    { id: "sec-4-publication",
      text: "Sec. 4. The Clerk of the Council shall certify to the passage of this ordinance, and " +
            "cause the same to be published once in the Los Angeles Daily HERALD, and thereupon and " +
            "thereafter it shall take effect and be in force." },

    { id: "certification",
      text: "I hereby certify that the foregoing ordinance was adopted by the Council of the City of " +
            "Los Angeles, at its meeting of January 6, 1886. W. W. ROBINSON, Clerk of the Council of " +
            "the City of Los Angeles. Approved this 14th day of January, 1886. E. F. SPENCE, Mayor. " +
            "Published January 15, 1886.",
      note: "Matches lah-1886-01-15's certification word for word, which is how the Herald item and " +
            "this printing are known to be the same instrument." }
  ],

  // Deliberately empty: both writable rows already exist on
  // documents/lah-1886-01-15, and the third change has no entities. See TASK.md.
  rows: []
};
