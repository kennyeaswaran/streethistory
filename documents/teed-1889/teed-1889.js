// ★★★ THE OLD SERIES, TO ITS LAST ORDINANCE — and the volume that says, by
// arithmetic rather than by silence, where the October 1888 cull went.
//
// WHAT IT IS. Freeman G. Teed, Clerk of the Council, compiled and indexed this
// in 1889: the new city charter ratified Oct. 20, 1888 and approved by the
// Legislature, then **Ordinances Nos. 318–432** (June 20, 1887 – Dec. 7, 1888,
// the last approved Jan. 3, 1889) and **Resolutions Nos. 543–1303** (to January
// 1889), then a subject index to both. It picks up exactly where Teed 1887
// (Vol. III, Ords. 114–317) stops. 744 PDF pages, no text layer.
//
// ⚠⚠ THIS DOCUMENT HAS NO ROWS AND SHOULD NOT HAVE ANY. It is a container: a
// bound run of instruments, each of which is its own document. Three of them are
// renamings and each has a folder of its own — documents/ord-320,
// documents/ord-345, documents/ord-381. This file exists so that the volume has
// an id, so that its excerpts have a stable home, and so that the negative below
// can be cited rather than remembered.
//
// ⭐⭐⭐ THE OCTOBER 1888 CULL IS NOT HERE, AND NOW WE KNOW WHY, WHICH IS BETTER
// THAN KNOWING THAT. This volume was read looking for the ordinance that enacted
// the 199-item duplicate-name list of documents/lah-1888-10-11. It contains no
// such ordinance — every one of Nos. 318–432 is listed and titled in the LIST OF
// ORDINANCES (transcribed in teed-1889-contents.md §2), and the only three that
// touch a name are 320, 345 and 381, each renaming one street. The window is not
// the problem: Ords. 414–421 span Sept. 11 to Nov. 5, 1888, straight through the
// month the committee reported.
//
// The reason is the charter this volume prints. The 1889 charter restarted the
// ordinance numbering, and the cull was enacted under the NEW SERIES as
// **Ordinance No. 48 (New Series)**, adopted Apr. 22, 1889 and in force May 10 —
// which is documents/lah-1889-05-10, transcribed in full on 2026-09-18, 212
// changes and all. So the old series ends at 432 in this volume and the cull
// begins the new one. There was never an old-series ordinance to find.
//
// ★ WHAT IT DID YIELD, AND IT IS NOT NOTHING:
//   • **Ord. 320** — Ogier lane → Winston street, July 5, 1887. `winston-st`'s
//     internalNote said the act "has not been found (WANTED)". Found.
//   • **Ord. 345** — the NUMBER of the Aug. 22, 1887 Virgin Street ordinance,
//     which documents/ord-1887-08-22 records as "Ordinance No. —" from the
//     ledger. Plus its approval and publication dates, and a word-for-word
//     confirmation that the minutes copy was not an abridgement (§2c).
//   • **Ord. 381** — New Cincinnati street, Temple to Bellevue → Edgeware road,
//     Mar. 12, 1888: a qualified change with both crosses on the modern ground.
//   • **Extents**, from the index's grading entries, for three streets the
//     project has been short of: Winston (Main to San Pedro, Res. 624), Georgia
//     Bell (Rouland to Washington, Res. 850) and Hewitt (First to Georgia,
//     Res. 1086 — a Georgia Street still standing in the Arts District in 1888).
//   • **Lemon Street alive on Nov. 30, 1888**, in Ord. 428's index entry,
//     "Ninth street, lines of, west of Lemon street, changed and defined".
//
// ⚠ WHY `completeness` IS "incidental" AND `sweptFully` IS FALSE. The volume IS
// exhaustive over its own subject — it prints every ordinance and resolution of
// the period, and that is what licenses the cull negative above. But
// `completeness` in this model is about what a document's SILENCE proves about a
// STREET, and an ordinance book's silence about a street proves only that the
// council transacted no business on it. Setting `exhaustive-in-scope` with a
// citywide coverage ring would invite exactly the negative inference §4.3 and
// §5.2 exist to keep honest. The cull negative is argued in prose, here and in
// FINDINGS.md, because that is the kind of claim it is.
//
// WHERE THE TEXT IS. teed-1889-contents.md holds the PDF↔folio offset table
// (⚠ it is NOT constant — Gale inserted its own citation leaves at PDF 201, 402,
// 603 and 744, and each one shifts it), the complete LIST OF ORDINANCES and the
// complete INDEX, both checked line by line against 300 dpi renders.
// teed-1889-street-ordinances.md is the triage shortlist.
//
// PROVENANCE. Gale, The Making of Modern Law: Primary Sources, doc id
// DT0106634468, accessed 18 Sept. 2026, downloaded by Kenny. The scan is page
// images only. OCR by tesseract at 200 dpi; every line reproduced in
// teed-1889-contents.md was then read by eye at 300 dpi and corrected. Read by
// an instance, 2026-09-19.

module.exports = {
  id: "teed-1889",
  title: "Freeman G. Teed, comp., Charter and Compiled Ordinances and Resolutions of the City of Los Angeles, Vol. IV (Los Angeles: Evening Express Company, 1889) — the 1889 charter, Ordinances Nos. 318–432 (June 1887 – Jan. 1889), Resolutions Nos. 543–1303, and an index to both",
  shortTitle: "Teed 1889, Vol. IV — the compiled ordinances",
  url: "https://link.gale.com/apps/doc/DT0106634468/MMLP?u=uclosangeles",
  scan: "documents/teed-1889/teed-1889-vol4.pdf",
  transcription: "documents/teed-1889/teed-1889-contents.md",

  // §4.1: `date` is when the content was made. The content is a run of
  // legislative acts from June 20, 1887 (Ord. 318) to Jan. 7, 1889 (the last
  // certificate in the ordinance section), so the span is authored rather than
  // a single day. `recorded` is the compilation, published 1889.
  date: { after: "1887-06-20", before: "1889-01-07" },
  recorded: "1889",
  form: "textual",
  type: "ordinance",
  attests: "built-by",              // the streets it legislates about existed
  completeness: "incidental",       // see the header — deliberately not exhaustive-in-scope
  // The city limits the charter defines: a rectangle 421.36 chains east-west by
  // 441.36 chains north-south, ~18,597 acres. Given here as the same rough box
  // ord-1613 and ord-1887-08-22 use, for comparability rather than precision.
  coverage: [[34.135, -118.325], [34.135, -118.155],
             [33.995, -118.155], [33.995, -118.325]],
  // The finding aids are transcribed in full; the 700 pages of ordinance and
  // resolution text behind them are not, and nothing about a street should be
  // inferred from this volume's silence. Both flags say so.
  sweptFully: false,
  sweptFor: [],
  readBy: "instance",

  excerpts: [
    { id: "title-page",
      text: "CHARTER AND COMPILED Ordinances and Resolutions OF THE CITY OF LOS ANGELES. " +
            "COMPILED AND INDEXED BY FREEMAN G. TEED. Published by Order of the Council of the " +
            "City of Los Angeles. LOS ANGELES: EVENING EXPRESS COMPANY. 1889.",
      note: "PDF 1. Teed signs the certifications inside as Clerk of the Council; he compiled " +
            "Vol. III (1887) as well. ⚠ Not the Matthew Teed of `teed-street` — see " +
            "documents/ord-1887-08-22." },

    { id: "list-320",
      text: "320.—Changing name of Ogier lane to Winston street…83",
      note: "LIST OF ORDINANCES, PDF 81, printed list page [i]. The full instrument is " +
            "documents/ord-320. ★ The act `winston-st` called WANTED." },

    { id: "list-345",
      text: "345.—Changing the name of Virgin street…117",
      note: "LIST OF ORDINANCES, PDF 82, list page ii. ★ This is the number the council minutes " +
            "left blank at documents/ord-1887-08-22. The printed instrument is documents/ord-345." },

    { id: "list-381",
      text: "381.—Changing the name of a portion of New Cincinnati street…168",
      note: "LIST OF ORDINANCES, PDF 83, list page iii. “A portion of” is the whole point: the " +
            "instrument states a from–to. documents/ord-381." },

    { id: "list-ends-at-432",
      text: "432.—Granting franchise to the S. P. R. R. Co…227",
      note: "⭐⭐⭐ The last line of the LIST OF ORDINANCES, PDF 84. Ordinance No. 432 was adopted " +
            "Dec. 7, 1888 and approved Jan. 3, 1889. The old series ends here; the October 1888 " +
            "duplicate-name cull was enacted as Ordinance No. 48 of the NEW series in Apr. 1889 " +
            "(documents/lah-1889-05-10), which is why no ordinance in this volume carries it." },

    { id: "index-streets",
      text: "Streets, regulating the tearing up of…337…105 / grading of certain, accepted and " +
            "ordered paid for…1090…572",
      note: "⭐⭐ The entire “Streets” heading of the index, PDF 741, index page xv — two lines, " +
            "neither of them a renaming. In a volume indexed by a City Clerk who indexed three " +
            "single renamings under their own street names, an omnibus “names of certain streets " +
            "changed” would have had an entry. There is none." },

    { id: "index-ninth-lemon",
      text: "Ninth street, lines of, west of Lemon street, changed and defined…428…217",
      note: "⭐⭐ Index, PDF 737, page xi. Ordinance No. 428 was adopted Nov. 30, 1888, so a LEMON " +
            "STREET was still a working cross street of Ninth at the end of 1888. Bears directly " +
            "on `lemon-st-arts-district`, whose reading has Lemon becoming Wilson in 1887 — but " +
            "⚠ Ninth and Lemon is west-side ground, not the Arts District, so this may well be a " +
            "different Lemon. FINDINGS §3." },

    { id: "res-850-georgia-bell",
      text: "RESOLUTION NO. 850. A Resolution of the Mayor and Council of the City of Los Angeles " +
            "to establish the grade of Georgia Bell street, from Rouland street to Washington " +
            "street. … Section 1. That the grade of Georgia Bell street, from Rouland street to " +
            "Washington street, be and the same is hereby established as follows: At the " +
            "intersection with Rouland street … at the intersection with Montgomery street … at " +
            "the intersection with Ocean street … at the intersection with Washington street … " +
            "I hereby certify that the foregoing resolution was adopted by the Council of the City " +
            "of Los Angeles at its meeting of April 16, A. D. 1888. FREEMAN G. TEED, Clerk of the " +
            "Council of the City of Los Angeles. Approved this 21st day of April, 1888. " +
            "W. H. WORKMAN, Mayor. Published April 24, 1888.",
      note: "⭐⭐⭐ PDF 449, printed p. 431; indexed at “Georgia Bell street, grade of, from Rouland " +
            "street to Washington street…850…431”. Read by eye at 300 dpi. " +
            "**THIS IS A GEORGIA BELL STREET THIRTEEN MONTHS BEFORE THE ORDINANCE THAT IS " +
            "SUPPOSED TO HAVE COINED IT**, with four cross streets — Rouland, Montgomery, Ocean, " +
            "Washington. `georgia-bell`'s internalNote ends on exactly this puzzle: the Herald of " +
            "Sept. 2, 1883 reports “Georgia to Georgia Bell street” adopted, the entity dates the " +
            "name from May 10, 1889 on Gen. Forman's recollection and Ord. 48, and the note says " +
            "“what is now unexplained is the 1883 item … either it did not take effect, or it was " +
            "later undone, or it is a different Georgia.” Here is the city, in its own printed " +
            "record, grading a Georgia Bell street in April 1888. The 1883 act took effect. " +
            "Ord. 48 of 1889 did what the entity's own comment guessed it did — it FOLDED IN the " +
            "Nevada stretches to the north, which this same index has running “between Pico and " +
            "Rowland streets” (Res. 874). See FINDINGS §6; a `state` row is drafted there and " +
            "deliberately not written here." },

    { id: "res-624-winston",
      text: "RESOLUTION NO. 624. A Resolution of the Mayor and Council of the City Los Angeles to " +
            "establish the grade of Winston street from Main street to San Pedro street. … " +
            "Section 1. That the grade of Winston street from Main street to San Pedro street be " +
            "and the same is hereby established as follows: At the intersection of Main street … " +
            "at the intersection of Los Angeles street … at a point 600 feet east of the east line " +
            "of Main street … at the intersection of Wall street … at a point 200 feet west of the " +
            "west line of San Pedro street … at the northwest corner of San Pedro street …",
      note: "⭐⭐⭐ PDF 307, printed p. 290. Read by eye at 300 dpi. An EXTENT for Winston Street " +
            "within weeks of Ordinance No. 320 renaming it — Main to San Pedro, crossing Los " +
            "Angeles and Wall. The resolution immediately before it, No. 623, was adopted " +
            "Sept. 26, 1887. ⚠⚠ Note what this does to Ord. 48's clause c081 " +
            "(documents/lah-1889-05-10): that clause says Shaw street ran “from Wall street to " +
            "San Pedro, between Fourth and Fifth streets” until Apr. 1889, but the city was " +
            "already grading that very block as WINSTON STREET in the autumn of 1887. Another " +
            "name in use before it was official, like Winston itself on Mills' Tract in 1886. " +
            "FINDINGS §6." },

    { id: "index-hewitt-georgia",
      text: "Hewitt street, resolution of intention to grade, between First and Georgia streets…1086…569",
      note: "⭐⭐ Index, PDF 734, page viii. A GEORGIA STREET as a cross street of Hewitt between " +
            "First and itself — that is the Arts District `georgia-east`, the name modern 3rd " +
            "Street east of Alameda carried. Still in force in 1888." },

    { id: "index-winston-entry",
      text: "Winston street, name changed from Ogier lane…320…83 / ordered improved and graded " +
            "(charter)…604…278 / grade of, from Main street to San Pedro street…624…290",
      note: "⭐⭐ Index, PDF 743, page xvii — the whole Winston entry, three lines. The first is " +
            "documents/ord-320; the third is the grading resolution excerpted above." },

    { id: "index-belmont-misfiled",
      text: "McFarland, A., deed to, for that part of Beaudry avenue vacated…368…148",
      note: "⚠ Index, PDF 737, page xi — and it is WRONG. Ordinance No. 368 vacates part of " +
            "BELMONT avenue, says so in its title and three times in its text, and the same index " +
            "files it correctly under Belmont on page ii. Recorded here so that nobody chases a " +
            "Beaudry Avenue vacation that does not exist." },

    { id: "gale-citation",
      text: "Teed, Freeman G., and Charters Los Angeles. Ordinances, Etc. California. Laws, Etc. " +
            "Charter and Compiled Ordinances and Resolutions of the City of Los Angeles. Vol. 4, " +
            "Evening Express Company, 1889. The Making of Modern Law: Primary Sources, " +
            "link.gale.com/apps/doc/DT0106634468/MMLP?u=uclosangeles&sid=bookmark-MMLP. " +
            "Accessed 18 Sept. 2026.",
      note: "Gale's own citation leaf. ⚠ There are FOUR of them in the file — PDF 201, 402, 603 " +
            "and 744 — they are not part of the book, and every shift in the PDF↔folio offset " +
            "happens at one of them. teed-1889-contents.md §1." }
  ],

  rows: []
};
