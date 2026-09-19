// ★★★ ORDINANCE NO. 286 (OLD SERIES) — "An Ordinance changing the name of
// Charity street to Grand avenue." Adopted by the Council February 15, 1887,
// approved by Mayor pro tem L. N. Breed February 21, published in the Los
// Angeles Daily Tribune February 22, 1887.
//
// THIS IS THE INSTRUMENT names.js SAID WAS MISSING. `grand-ave`'s internalNote
// reads, in full: "A change row charity → grand-ave is warranted but NOT written
// here: no document in this corpus attests the 1886–87 act, and the dates are
// Kines's and Wikipedia's. That instrument is worth finding (WANTED)." Here it
// is, on printed page 248 of Teed's Vol. III, with its number, its council day,
// its mayor and its paper.
//
// ⭐⭐⭐ AND THE EXTENT QUESTION IS ANSWERED: THERE IS NO EXTENT.
// handbook/COMPILED-ORDINANCES.md set out two readings and said "only Ord. 286's
// text decides" — (1) the whole length was renamed, or (2) only the downtown
// stretch was, leaving Violé's 1904 CHARITY ST in the southern virtue cluster as
// the surviving tail of one street. Section 1 is four lines long and states no
// stretch: it changes "the name of that certain street … heretofore known as
// Charity street". That is reading (1). The row below is therefore `whole-name`,
// and its ground is derived from wherever the corpus independently attests
// `charity` — eight documents do.
//
// ★ HOW FAR THAT REACHED, FROM THIS VOLUME'S OWN PAGES. Ords. 156 and 188
// establish Charity street's lines "from a point 84 feet north of Pico street to
// Jefferson street", 7,590 feet of it; the index carries Charity grade entries at
// Court House street, from Seventh to Ninth, at Pico and at Washington. So on
// Feb. 22, 1887 the name ran from the Court House block to Jefferson, which is
// the whole of modern Grand Avenue downtown. ⚠ It does NOT follow that Violé's
// 1904 Charity Street is the same street — only that this ordinance left no part
// of THIS one behind. FINDINGS §2.
//
// ⚠⚠ AND A DATE THAT DOES NOT FIT. Resolution No. 488 (printed p. 579), adopted
// February 1, 1887 — a fortnight BEFORE this ordinance — already writes "At the
// intersection of Grand avenue (Charity street)". Either the council was using
// the new name before it enacted it (the change had been voted in principle on
// May 10, 1886, per `charity`'s own note), or Teed's compositor modernised the
// resolution when he set the volume in 1887. Both are worth knowing and neither
// is settled here. FINDINGS §2.
//
// ⚠ SERIES. This is Ordinance No. 286 of the OLD SERIES, the run the city
// numbered retrospectively from November 1883 and closed at No. 432 in December
// 1888. The 1889 charter restarted at 1, so a New Series No. 286 exists and is a
// different instrument entirely. documents/teed-1887/FINDINGS.md §9.
//
// PROVENANCE. Read from a contrast-normalised 200 dpi render of PDF pages
// 255–256 of documents/teed-1887/teed-1887-vol3.pdf (printed pp. 248–249). The
// volume has no text layer; the pages were OCR'd first and then transcribed by
// eye, and the full text is in ord-286-transcription.md beside this file.
// ⚠ Transcribed by an instance, 2026-09-19; not yet checked by a second reader.

module.exports = {
  id: "ord-286",
  title: "Ordinance No. 286 (Old Series), “An Ordinance changing the name of Charity street to Grand avenue” — adopted by the Council of the City of Los Angeles February 15, 1887, approved February 21, published February 22, 1887; printed in Freeman G. Teed, comp., Compiled Ordinances and Resolutions of the City of Los Angeles, Vol. III (1887), p. 248",
  shortTitle: "Ord. 286 (Old Series), Charity Street becomes Grand Avenue (1887)",
  url: "https://link.gale.com/apps/doc/DT0106633769/MMLP?u=uclosangeles",
  scan: "documents/teed-1887/teed-1887-vol3.pdf",
  transcription: "documents/ord-286/ord-286-transcription.md",

  // §4.1: `date` is when the content was made — the council adopted it
  // February 15, 1887. `recorded` is the artifact in hand, Teed's 1887
  // compilation. It took effect on publication, February 22, 1887, under Sec. 3.
  date: { on: "1887-02-15" },
  recorded: "1887",
  form: "textual",
  type: "ordinance",
  attests: "built-by",              // a street existed to be renamed
  // It names every street it touches — one — and claims nothing outside it.
  completeness: "exhaustive-in-scope",
  // The city limits of the day, as the rough rectangle ord-1613 and
  // ord-1887-08-22 both use. NOT a claim about where Charity street ran: the
  // ordinance states no extent, and where it ran is known from the tract maps
  // and from Ords. 156/188, not from here.
  coverage: [[34.135, -118.325], [34.135, -118.155],
             [33.995, -118.155], [33.995, -118.325]],
  sweptFully: true,                 // the whole ordinance is read and excerpted
  sweptFor: [],
  readBy: "instance",

  excerpts: [
    { id: "title",
      text: "An Ordinance changing the name of Charity street to Grand avenue.",
      note: "The enacting title, identical to the volume's LIST OF ORDINANCES entry for No. 286." },

    { id: "sec-1",
      text: "Section 1. That the name of that certain street in the City of Los Angeles, heretofore " +
            "known as Charity street, be changed, and that hereupon and hereafter the same be known " +
            "and designated as Grand avenue.",
      note: "⭐⭐⭐ The whole of the operative text, and the answer to the extent question. It " +
            "quantifies over the NAME — “the name of that certain street … heretofore known as " +
            "Charity street” — and states no stretch, no portion, no tract and no cross street. " +
            "Unqualified in the sense of handbook/change-rows-amendment.md §2." },

    { id: "sec-2",
      text: "Sec. 2. All ordinances or parts of ordinances in conflict with this ordinance are hereby " +
            "repealed.",
      note: "Boilerplate, but worth having: Ords. 156 and 188 had established Charity street's lines " +
            "from 84 feet north of Pico to Jefferson, and this does not disturb them — it changes " +
            "what the street is called, not where it runs." },

    { id: "sec-3",
      text: "Sec. 3. The Clerk of the Council shall certify to the passage of this ordinance, and " +
            "shall cause the same to be published once in the Los Angeles Daily Tribune, and " +
            "thereupon and thereafter it shall take effect and be in force.",
      note: "The publication condition. The paper is the Tribune, not the Herald — the city changed " +
            "papers partway through this volume." },

    { id: "certification",
      text: "I hereby certify that the foregoing ordinance was adopted by the Council of the City of " +
            "Los Angeles, at its meeting of February 15, 1887. FREEMAN G. TEED, Clerk of the Council " +
            "of the City of Los Angeles. Approved this 21st day of February, 1887. L. N. BREED, " +
            "Mayor pro tem. Published February 22, 1887.",
      note: "⭐ February 15, 1887 is exactly the date `charity` and `grand-ave` both already carry " +
            "from Kines and Wikipedia — “the change to Grand Avenue was official on Feb. 15, 1887”. " +
            "The city's own record confirms it and adds the number, the approval and the paper. " +
            "⚠ The printed publication line reads “February 22, 1837”, a slip for 1887." },

    { id: "ord-306-lines-of-grand",
      text: "ORDINANCE No. 306. An Ordinance defining the lines of Grand avenue. … Section 1. That " +
            "the lines of that certain street in the City of Los Angeles known as Grand avenue are " +
            "hereby defined and declared to be as laid out and drawn upon a map filed in the office " +
            "of the Clerk of the Council April 18th, 1887, and entitled “a plat showing extension and " +
            "opening of Charity street.” … adopted … at its meeting of April 25, 1887 … Approved this " +
            "3d day of May, 1887. W. H. WORKMAN, Mayor. Published May 4, 1887.",
      note: "⭐⭐ Printed p. 280 of the same volume, PDF 287. Two months after the renaming the city " +
            "defined Grand Avenue's lines by pointing at a plat still titled “extension and opening " +
            "of CHARITY street” — the two names on one document, and the plainest statement in the " +
            "record that they are one street. ⚠ That plat is not in this corpus and would give Grand " +
            "Avenue's 1887 extent outright; worth asking the City Archivist for. WANTED." },

    { id: "res-488-grand-charity",
      text: "RESOLUTION No. 488. Resolution of the Mayor and Council of the City of Los Angeles to " +
            "establish the grade of Washington street, from Main street to Figueroa street. … At the " +
            "intersection of Main street, the grade shall be 39.00 feet below the datum plane. At the " +
            "intersection of Grand avenue (Charity street), the grade shall be 42.00 feet below the " +
            "datum plane. At the intersection of Hope street … At the intersection of Flower street … " +
            "adopted by the Council of the City of Los Angeles, at its meeting of February 1, 1887.",
      note: "⭐⭐⭐ Printed p. 579, PDF 597. The city's own gloss, “Grand avenue (Charity street)”, at " +
            "WASHINGTON STREET — which is a mile south of the Court House block and well south of " +
            "Pico. Whatever else is true, the two names denote one street that reached Washington. " +
            "⚠⚠ AND IT IS DATED FEBRUARY 1, 1887, two weeks before Ord. 286. See the header and " +
            "FINDINGS §2." },

    { id: "ord-156-charity-lines",
      text: "ORDINANCE No. 156. An Ordinance of the Council of the City of Los Angeles establishing " +
            "the lines of Charity street from a point 84 feet north of Pico street to Jefferson " +
            "street, and defining the limits within which the assessment for the extension, widening " +
            "and improvement of said street shall extend. … Commencing at the S. W. corner of lot 18, " +
            "Feldhauser's subdivision of block 86, Ord's survey, in said city, and running from said " +
            "initial point southerly 147 feet to the N. W. corner of lot 1, block G, of Morris " +
            "Vineyard tract of said city; thence southerly on a straight line 7,590 feet to a point " +
            "on the northerly boundary of Jefferson street … adopted … at its meeting of February 3, " +
            "1885.",
      note: "⭐⭐ Printed p. 63, PDF 69. Charity street's southern half, described end to end: 7,590 " +
            "feet from block 86 of Ord's survey to Jefferson Street. Sec. 2 assesses “both sides of " +
            "said Charity street, from Twelfth street to Jefferson street”. Ordinance No. 188 " +
            "(p. 103) re-enacts the same description with the initial point at the N. W. rather than " +
            "the S. W. corner of lot 18 and the offsets 40 rather than 30 feet. This is the extent " +
            "`charity` has never carried." }
  ],

  rows: [
    // ⭐⭐⭐ THE ROW `grand-ave` HAS BEEN WAITING FOR.
    //
    // UNQUALIFIED, and declared so because the document says so rather than
    // because the fields are empty (change-rows-amendment §2): Sec. 1 changes
    // "the name of that certain street … heretofore known as Charity street"
    // and states no stretch at all. So the extent is derived, never authored —
    // the change lands wherever the corpus independently says `charity` held
    // immediately before February 1887, which is eight documents' worth of
    // ground along modern Grand Avenue (12685, mr001-462, mr001-489,
    // mr003-038-p1, mr005-573, mr007-021, mr053-067 and others).
    //
    // ⚠ WHAT THIS ROW DOES NOT SETTLE: whether the CHARITY ST lettered in the
    // virtue cluster on the Violé map of 1904 is the same lineage. This
    // ordinance leaves no part of the street it renames behind, so if a Charity
    // Street was still standing in 1904 it is either a second entity or a
    // revival. FINDINGS §2 puts the question to Kenny; nothing is decided here.
    { kind: "change", from: "charity", to: "grand-ave",
      scope: "whole-name",
      says: ["sec-1", "title", "certification"],
      mechanism: "renaming",
      note: "Adopted February 15, 1887, effective on publication February 22. Unqualified: Sec. 1 " +
            "changes the name of the street and names no stretch of it. The same date is already on " +
            "`charity` and `grand-ave` from Kines and Wikipedia; this is the instrument behind it. " +
            "⚠ Authored directly from the ordinance's own words rather than proposed from a sheet, " +
            "so it carries no `confirmed: false`; the transcription behind it has had one reader " +
            "(an instance, 2026-09-19) and not two." }
  ]
};
