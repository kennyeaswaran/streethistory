// ★★★ THE VOLUME THAT CONTAINS THE CHARITY-STREET ORDINANCE — and, with it, ten
// renamings the project had either dated from a newspaper or not known about.
//
// WHAT IT IS. Freeman G. Teed, Clerk of the Council, compiled and indexed this in
// 1887: **Ordinances Nos. 114–317** (Dec. 24, 1883 – June 13, 1887), then
// **Resolutions Nos. 222–542** (Jan. 1884 – 1887), then a GENERAL INDEX to both.
// It picks up where Robinson 1884 stops and is picked up in turn by Teed 1889,
// Vol. IV, whose Ordinance No. 318 was adopted a week after this volume's last.
// 703 PDF pages, no text layer.
//
// ⚠⚠ THIS DOCUMENT HAS NO ROWS AND SHOULD NOT HAVE ANY. It is a container: a
// bound run of instruments, each of which is its own document. Ten of them are
// renamings and each has a folder of its own — documents/ord-152, -187, -200,
// -207, -242, -257, -275, -286, -314, -317. This file exists so that the volume
// has an id, so that its excerpts have a stable home, and so that the negatives
// below can be cited rather than remembered.
//
// ⭐⭐⭐ THE ANSWER TO THE CHARITY QUESTION. handbook/COMPILED-ORDINANCES.md ends on
// it: the Violé map of 1904 still letters a CHARITY ST, so either Ord. 286 renamed
// only the downtown stretch (a qualified change) or it renamed the lot and Violé's
// is a different street — "Pull p. 248 and read the extent clause." Page 248 was
// pulled. **There is no extent clause.** Section 1 is four lines long, quantifies
// over the name, and states no stretch. documents/ord-286 carries the row.
//
// ⭐⭐⭐ AND A LEMON STREET, ALIVE AND PLACED, IN MARCH 1884. Resolution No. 240
// grades Seventh street from San Pedro to the river and gives its intersections in
// order: San Pedro — Alameda — **Lemon street** — 368 feet east of Lemon — 1,687
// feet east of Lemon. That is the Arts District corridor `lemon-st-arts-district`
// sits on, four years before the sightings the entity rests on. ⚠ And **there is
// no Wilson Street anywhere in this volume's index**, which runs Whittier →
// Wilhart → William → Willow → Wilmington → Winston. Taken with the 1903 street
// index just transcribed — which shows Lemon and Wilson as two SEPARATE streets
// both present — the Lemon→Wilson inference is looking worse, not better.
// FINDINGS §3.
//
// ★ WHAT ELSE IT YIELDED:
//   • **Ord. 286** — Charity street → Grand avenue, Feb. 15, 1887, unqualified.
//     The act `grand-ave`'s internalNote calls WANTED. Row written.
//   • **Ord. 152** — Short street AND Canal and Reservoir street consolidated into
//     Bellevue avenue, Jan. 13, 1885. Two rows written; `bellevue-ave` gains a
//     birthday and Short Street gains a place.
//   • **Ord. 314** — six renamings east of the river, including **Aliso avenue →
//     First street**, which is how the numbered grid crossed the river in 1887.
//   • **Numbers and council days** for three acts the corpus had only from the
//     Herald: Ord. 207 (Elm→Olive etc.), Ord. 257 (High→Walters), Ord. 275
//     (Texas→Belmont).
//   • **An extent for Texas Street** — Court House street to Temple street to
//     Diamond street — recovered from two grading resolutions whose index entries
//     are filed under the wrong heading.
//   • **A Winston Street in use six months before Ordinance No. 320 created it**
//     (Res. 478, Jan. 3, 1887, grading Wall street past Winston between Fourth and
//     Fifth). The sibling volume found the same pattern on Mills' Tract in 1886.
//   • **An extent for Walters Street**, which the corpus has never had: Res. 471
//     grades New High street past Walters between Virgin street and Bellevue
//     avenue.
//   • **Grasshopper Street placed** before it was vacated (Ord. 232): 884 feet
//     north-east from Bellevue avenue to present Pearl street, over lots 510–511
//     of the Canal and Reservoir Company's land.
//
// ⚠ WHY `completeness` IS "incidental" AND `sweptFully` IS FALSE. The volume IS
// exhaustive over its own subject — it prints every ordinance and resolution of
// the period — but `completeness` in this model is about what a document's
// SILENCE proves about a STREET, and an ordinance book's silence about a street
// proves only that the council transacted no business on it. The Lemon/Wilson
// negative above is argued in prose, here and in FINDINGS.md, because that is the
// kind of claim it is. `sweptFully: false` because the finding aids are
// transcribed and the ten renaming ordinances are read, but the other ~690 pages
// of ordinance and resolution text are OCR'd and spot-read, not swept.
//
// ⚠⚠ SERIES. Nos. 114–317 are OLD SERIES numbers. Before November 1883 the city
// did not number its ordinances at all; the numbers in Robinson 1884 are the
// compiler's, ratified retrospectively, and this volume continues that run. The
// 1889 charter restarted the numbering at 1 (New Series), so an `ord-<n>` folder
// name can collide. Every folder made from this volume says "(Old Series)" in its
// title. FINDINGS §9 lists the collisions checked.
//
// WHERE THE TEXT IS. teed-1887-contents.md holds the PDF↔folio offset table
// (⚠ it is NOT constant — Gale inserted citation leaves at PDF 201, 402, 603 and
// 703, and the book's own finding-aid leaves shift it twice more), the complete
// LIST OF ORDINANCES, the complete LIST OF RESOLUTIONS and the GENERAL INDEX's
// street entries, all checked line by line against contrast-normalised renders.
// teed-1887-street-ordinances.md is the triage shortlist. teed-1887-ocr.txt is an
// UNVERIFIED machine transcription of all 703 pages, for grepping only.
//
// PROVENANCE. Gale, The Making of Modern Law: Primary Sources, doc id
// DT0106633769, accessed 18 Sept. 2026, downloaded by Kenny. The scan is page
// images only. OCR by tesseract at 200 dpi; every line reproduced in
// teed-1887-contents.md was then read by eye and corrected. Read by an instance,
// 2026-09-19.

module.exports = {
  id: "teed-1887",
  title: "Freeman G. Teed, comp., Compiled Ordinances and Resolutions of the City of Los Angeles, Vol. III (Los Angeles: E. H. Freeman, Book and Job Printer, 1887) — Ordinances Nos. 114–317 (December 1883 – June 1887), Resolutions Nos. 222–542, and a general index to both",
  shortTitle: "Teed 1887, Vol. III — the compiled ordinances",
  url: "https://link.gale.com/apps/doc/DT0106633769/MMLP?u=uclosangeles",
  scan: "documents/teed-1887/teed-1887-vol3.pdf",
  transcription: "documents/teed-1887/teed-1887-contents.md",

  // §4.1: `date` is when the content was made. The content is a run of
  // legislative acts from Dec. 24, 1883 (Ord. 114) to June 13, 1887 (Ord. 317),
  // so the span is authored rather than a single day. `recorded` is the
  // compilation, published 1887.
  date: { after: "1883-12-24", before: "1887-06-13" },
  recorded: "1887",
  form: "textual",
  type: "ordinance",
  attests: "built-by",              // the streets it legislates about existed
  completeness: "incidental",       // see the header — deliberately not exhaustive-in-scope
  // The same rough city-limits box ord-1613, ord-1887-08-22 and teed-1889 use,
  // for comparability rather than precision.
  coverage: [[34.135, -118.325], [34.135, -118.155],
             [33.995, -118.155], [33.995, -118.325]],
  sweptFully: false,
  sweptFor: [],
  readBy: "instance",

  excerpts: [
    { id: "title-page",
      text: "COMPILED Ordinances and Resolutions OF THE CITY OF LOS ANGELES. VOL. III. COMPILED AND " +
            "INDEXED BY FREEMAN G. TEED, CLERK OF THE COUNCIL. Published by Order of the Council of " +
            "the City of Los Angeles. LOS ANGELES: E. H. FREEMAN, BOOK AND JOB PRINTER. 1887.",
      note: "PDF 1. ⚠ Not the Matthew Teed of `teed-street` — see documents/ord-1887-08-22. Teed " +
            "compiled Vol. IV (1889) as well, and signs the certifications in the later half of this " +
            "volume as Clerk; W. W. Robinson signs the earlier half." },

    { id: "list-286",
      text: "286 Changing the name of Charity street to Grand avenue … 248",
      note: "⭐⭐⭐ LIST OF ORDINANCES, PDF 8, list page vi. The full instrument is documents/ord-286. " +
            "The act `grand-ave`'s internalNote called WANTED." },

    { id: "list-152",
      text: "152 Consolidating Short street and Canal and Reservoir street, and changing name to " +
            "Bellevue avenue … 58",
      note: "⭐⭐ LIST OF ORDINANCES, PDF 4, list page ii. documents/ord-152. Two entities die and " +
            "`bellevue-ave` is made, on January 24, 1885." },

    { id: "list-314",
      text: "314 Changing names of certain streets … 290",
      note: "⭐⭐ LIST OF ORDINANCES, PDF 8, list page vi. Six renamings — documents/ord-314. The " +
            "title is identical to Nos. 207 and 242, which is why none of the three could be " +
            "triaged from the list alone." },

    { id: "res-240-lemon",
      text: "RESOLUTION No. 240. Resolution of the Mayor and Council of the City of Los Angeles to " +
            "establish the grade of Seventh street from San Pedro street to the Los Angeles river. … " +
            "At the intersection of Seventh street and San Pedro street the grade shall be 11 feet " +
            "below the datum plane. At a point in the center line of Seventh street 1800 feet " +
            "easterly from the east boundary of San Pedro street … At the intersection of Alameda " +
            "street and Seventh street the grade shall be 15 feet below the datum plane. At the " +
            "intersection of Lemon street and Seventh street the grade shall be 17 feet below the " +
            "datum plane. At a point in the center line of Seventh street 368 feet easterly from the " +
            "east boundary of Lemon street … And at a point in the center line of Seventh street " +
            "1687 feet easterly from the east boundary of Lemon street … adopted by the Council of " +
            "the City of Los Angeles, at its meeting of March 10, 1884.",
      note: "⭐⭐⭐ Printed p. 315, PDF 332–333. **A LEMON STREET, THE FIRST CROSS STREET EAST OF " +
            "ALAMEDA ON SEVENTH, IN MARCH 1884** — three years before the two 1887 sheets " +
            "`lemon-st-arts-district` rests on, and on the same corridor. It also gives the street a " +
            "measured position: 368 ft and 1,687 ft east of it are the next two grade points. " +
            "FINDINGS §3." },

    { id: "index-no-wilson",
      text: "Whittier street, grade of … / Wilhart street, name of changed to Hayes street … 200 … " +
            "124 / William street, name of changed to Santee street … 207 … 135 / William street, " +
            "name of changed to Goss street … 207 … 135 / Willow street, grade of … / Wilmington " +
            "street … / Winston street, grade of at Wall street … 478 … 569",
      note: "⭐⭐⭐ The GENERAL INDEX's W run, printed p. 682, PDF 701. **THERE IS NO WILSON STREET** " +
            "— the index goes Wilhart, William, Willow, Wilmington, Winston. ⚠ Absence from a " +
            "subject index is weak evidence on its own: a street with no council business simply " +
            "does not appear. But taken with the 1903 street index, which shows Lemon and Wilson as " +
            "two separate streets both present, and with Res. 240 above, the reading that Lemon " +
            "BECAME Wilson in 1887 is now carrying more weight than its evidence. FINDINGS §3." },

    { id: "res-478-winston",
      text: "RESOLUTION No. 478. Resolution of the Mayor and Council of the City of Los Angeles to " +
            "establish the grade of Wall street, from Mayo street to Fifth street. … At the " +
            "intersection of Mayo street … At the intersection of Boyd street … At the intersection " +
            "of Fourth street … At the intersection of Winston street, the grade shall be 5.25 feet " +
            "below the datum plane. At the intersection of Fifth street … adopted by the Council of " +
            "the City of Los Angeles at its meeting of January 3, 1887.",
      note: "⭐⭐ Printed pp. 569–570, PDF 587–588. **A WINSTON STREET CROSSING WALL BETWEEN FOURTH " +
            "AND FIFTH ON JANUARY 3, 1887** — six months before Ordinance No. 320 (July 5, 1887) " +
            "renamed Ogier lane to Winston street, and on the very block Ordinance No. 48 of 1889 " +
            "would later describe as Shaw street. The sibling volume found the same thing at " +
            "documents/teed-1889 (“another name in use before it was official, like Winston itself " +
            "on Mills' Tract in 1886”). Three sightings now. FINDINGS §7." },

    { id: "res-488-grand-charity",
      text: "At the intersection of Grand avenue (Charity street), the grade shall be 42.00 feet " +
            "below the datum plane.",
      note: "⭐⭐⭐ Resolution No. 488, printed p. 579, PDF 597 — the grade of Washington street from " +
            "Main to Figueroa. The city glossing the new name with the old, at Washington Street, " +
            "which puts Grand Avenue well south of Pico. ⚠⚠ Res. 488 was adopted **February 1, " +
            "1887**, a fortnight BEFORE Ordinance No. 286. FINDINGS §2." },

    { id: "ord-306-grand-lines",
      text: "ORDINANCE No. 306. An Ordinance defining the lines of Grand avenue. … the lines of that " +
            "certain street in the City of Los Angeles known as Grand avenue are hereby defined and " +
            "declared to be as laid out and drawn upon a map filed in the office of the Clerk of the " +
            "Council April 18th, 1887, and entitled “a plat showing extension and opening of Charity " +
            "street.”",
      note: "⭐⭐ Printed p. 280, PDF 287. Two months after the renaming, the plat that defines Grand " +
            "Avenue's lines is still titled “extension and opening of CHARITY street”. That map " +
            "would give Grand Avenue's 1887 extent outright and is not in this corpus — WANTED." },

    { id: "res-491-509-texas",
      text: "RESOLUTION No. 491 … to establish the grade of Texas street, from Temple street to " +
            "Diamond street. … RESOLUTION No. 509 … to change and establish the grade of Texas " +
            "street, from Temple street to Court House street.",
      note: "⭐⭐ Printed pp. 582 and 599, PDF 600 and 618. **AN EXTENT FOR TEXAS STREET**: Court " +
            "House street — Temple street — Diamond street, on Crown Hill. `texas-st` has had this " +
            "only by inference from where `belmont-ave`'s 1886 row begins. ⚠ The GENERAL INDEX files " +
            "both resolutions under “Tenth street” and files Tenth Street's grade entries under " +
            "“Texas street” — the two headings are swapped. FINDINGS §4." },

    { id: "res-471-walters",
      text: "RESOLUTION No. 471 … to establish the grade of New High street, from Virgin street to " +
            "Temple street. … At the intersection of Virgin street … At a point 177 feet south of " +
            "south line of Virgin street … At the intersection of Walters street … At the " +
            "intersection of Bellevue avenue … At the intersection of Marchessault street …",
      note: "⭐⭐ Printed p. 563, PDF 581. **AN EXTENT FOR WALTERS STREET**, which the corpus has " +
            "never had: it crosses New High Street between Virgin Street and Bellevue Avenue. " +
            "Corroborated from the other side by Res. 232/246/278/279, which grade Buena Vista " +
            "street “between High and Short” and “between High and Virgin streets” — and Short " +
            "became Bellevue by Ord. 152. documents/ord-257." },

    { id: "ord-232-grasshopper",
      text: "ORDINANCE No. 232. An Ordinance vacating and abandoning Grasshopper street. … " +
            "Commencing at intersection of the east line of Grasshopper street and the northeast " +
            "line of Bellevue avenue, thence following the easterly line of Grasshopper street N. 38 " +
            "deg. and 31 min. E., 884 feet to westerly line of present Pearl street … to the north " +
            "line of lot 510, as per map of Canal and Reservoir Company's land, recorded in Book 2, " +
            "page 210, Miscellaneous Records, Los Angeles County, California; thence … to the " +
            "northeast corner of lot 511 … Approved this 25th day of May, 1886.",
      note: "⭐ Printed p. 169, PDF 175 (a grey leaf, read by eye after contrast normalisation). A " +
            "VANISHED STREET WITH A PLACE — 884 feet north-east from Bellevue avenue to “present " +
            "Pearl street”, on the Canal and Reservoir Company's lots 510–511. No entity and no row; " +
            "a vacation is not a naming." },

    { id: "ord-248-figueroa",
      text: "ORDINANCE No. 248. An Ordinance vacating that portion of Figueroa street from Bellevue " +
            "avenue to Reservoir street. … Section 1. That that portion of the public street known " +
            "as Figueroa street, which extends from Bellevue avenue to Reservoir street, in the City " +
            "of Los Angeles, be, and the same is hereby vacated and abandoned. … adopted … at its " +
            "meeting of August 23, 1886.",
      note: "⭐ Printed p. 185, PDF 191. A FIGUEROA STREET REACHING BELLEVUE AVENUE AND RESERVOIR " +
            "STREET in 1886, and losing that stretch. `figueroa-gov`'s northern end is one of the " +
            "corpus's soft edges; this is a dated statement about it. No row — a vacation is not a " +
            "naming — but the GENERAL INDEX files it as “Figueroa street, from Bellevue avenue to " +
            "Reservoir street vacated and abandoned … 248 … 185”." },

    { id: "ord-247-buena-vista",
      text: "ORDINANCE No. 247. An Ordinance of the Council of the City of Los Angeles providing for " +
            "the widening of Buena Vista street, and defining the limits within which the assessment " +
            "for the widening and improvement of said street shall extend. … Commencing at the " +
            "southwest corner of lot 15, Arcadia tract, City of Los Angeles, and running thence " +
            "northerly along the present east line of Buena Vista street 261.96 feet …",
      note: "Printed p. 184, PDF 190. Metes and bounds off lot 15 of the Arcadia tract, not cross " +
            "streets, so it fixes nothing the index does not. Listed because " +
            "handbook/COMPILED-ORDINANCES.md flagged it: Buena Vista is a HARD `names` item on the " +
            "switchover list, and this volume grades it at Short, High, Virgin, Rock, Bellevue and " +
            "Bernard and runs it from the Catholic Cemetery to the river (Res. 291)." },

    { id: "ord-155-moran",
      text: "155 Establishing lines of Moran lane, from Main to San Pedro street … 61",
      note: "⭐ LIST OF ORDINANCES, PDF 4, list page ii; the GENERAL INDEX repeats it as “Moran lane, " +
            "lines of from Main street to San Pedro street … 155 … 61”. An EXTENT for `moran-s-lane`, " +
            "Main to San Pedro — the same two ends Ordinance No. 320 of 1887 gives Ogier lane / " +
            "Winston street one block away. Not read in full; the page is PDF 67." },

    { id: "index-streets-heading",
      text: "Streets, blockading of during fires…211…141 / only 20 feet from sidewalk to be used " +
            "for building material…158…66 / provisions for the protection of…176…89 / ordinance " +
            "regulating the use of, amended…288…251 / Spring, from Main street to Main street, " +
            "ordered paved…511…601 / Main, from Alameda street to Ninth street, ordered " +
            "paved…512…602 / obstruction of prohibited…279…238 / to conform with grade furnished by " +
            "City Surveyor…285…248",
      note: "⚠ The “Streets” heading of the GENERAL INDEX, printed pp. 677–678, PDF 696–697 — " +
            "seventeen sub-entries, all of them general police or paving ordinances, and not one " +
            "renaming. As in Teed 1889, an omnibus “names of certain " +
            "streets changed” has no entry under Streets; the renamings are filed under the " +
            "individual street names instead. So a search of this index under Streets finds nothing, " +
            "and that is a property of the index, not of the volume." },

    { id: "gale-citation",
      text: "Teed, Freeman G., and Ordinances, Etc. Compiled Ordinances and Resolutions of the City " +
            "of Los Angeles. Vol. 3, E. H. Freeman, 1887. The Making of Modern Law: Primary Sources, " +
            "link.gale.com/apps/doc/DT0106633769/MMLP?u=uclosangeles&sid=bookmark-MMLP. Accessed 18 " +
            "Sept. 2026.",
      note: "Gale's own citation leaf. ⚠ There are FOUR of them in the file — PDF 201, 402, 603 and " +
            "703 — they are not part of the book, and three of the five shifts in the PDF↔folio " +
            "offset happen at one. teed-1887-contents.md §1." }
  ],

  rows: []
};
