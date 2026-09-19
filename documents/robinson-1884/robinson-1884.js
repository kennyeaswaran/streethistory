// \u2605\u2605\u2605 ROBINSON 1884 \u2014 THE VOLUME THAT NUMBERED LOS ANGELES\u2019S ORDINANCES, and
// the single richest unread source this project has opened.
//
// W. W. Robinson was Clerk of the Council. He signs almost every instrument in
// this book, he compiled it, and then \u2014 ORDINANCE NO. 104, p. 318, Nov. 1883 \u2014
// the Council ordained that from then on all ordinances and resolutions "shall
// be numbered consecutively in accordance with the numbering of the ordinances
// and resolutions, in the compilation of the ordinances and resolutions compiled
// by W. W. Robinson".
//
// \u2605\u2605\u2605 READ THAT TWICE, BECAUSE IT CHANGES HOW EVERY 1878-83 CITATION IN THIS
// PROJECT WORKS. Before November 1883 the City of Los Angeles did not number its
// ordinances at all. The numbers 1 to 103 in this book are numbers the COMPILER
// assigned while compiling, which the Council then adopted as the official
// series. Three consequences:
//
//   1. "Ordinance No. 97" is a citation of THIS BOOK. No contemporary newspaper
//      could report the number, and documents/lah-1883-09-02 indeed reports
//      Ordinance 97\u2019s contents with no number at all.
//   2. The series is not tidy, and it is not meant to be: No. 30 is printed
//      TWICE (pp. 73 and 91, two unrelated ordinances), No. 35 does not exist,
//      Ord. 77 was adopted five days BEFORE Ord. 76, and the resolutions run out
//      of numeric order in several places (191 before 190, 194-196 before 193,
//      199 forty pages after 208). All of that is in the print, verified by eye.
//   3. Teed 1887, Vol. III begins at No. 114 \u2014 it continues Robinson\u2019s series.
//      The "New Series" of documents/ord-1613 and documents/ord-4093 is a later
//      restart.
//
// \u26a0 THIS DOCUMENT HAS NO ROWS AND SHOULD NOT ACQUIRE ANY. Like
// documents/newmark-1916 it is a BOOK, and its individual instruments are
// separate documents with their own dates: a compilation carries one date and
// one coverage, and the eight ordinances read off it so far span March to
// November 1883. Those are:
//
//   documents/ord-76   Upper Main street named                    p. 223
//   documents/ord-77   Bath street \u2192 Main street                   p. 223
//   documents/ord-81   Turner \u2192 Jackson, Wilmington to Alameda     p. 234
//   documents/ord-88   Polyxena street \u2192 Clay street               p. 255
//   documents/ord-92   Commercial street named Ducommun            p. 274
//   documents/ord-97   \u2605 Turner/Pacific/Pine/GEORGIA/Elm/Rose      p. 293
//   documents/ord-103  Mott Alley named                            p. 314
//   documents/ord-105  High street dedicated through Block 35\u00bd     p. 332
//
// The excerpts below are everything else worth quoting that does NOT have a
// folder of its own \u2014 street openings, extensions, line definitions and the
// grade resolutions whose cross streets place names this project cannot
// otherwise put on the ground.
//
// \u2605\u2605 THE THREE MOST VALUABLE THINGS IN THE EXCERPT LIST, in order:
//
//   \u2022 `res-56-buena-vista-order` fixes the ORDER AND SPACING of four streets
//     north of the plaza: going north along Buena Vista, SHORT \u2192 600 ft \u2192 HIGH
//     \u2192 726 ft \u2192 VIRGIN \u2192 600 ft \u2192 COLLEGE. handbook/WANTED.md P2 lists Short
//     as a street this project cannot place, and `virgin` has never had an
//     extent. This is a surveyed chain of four, with feet.
//   \u2022 `ord-40-negro-alley` has the Council writing, in 1881, "the east line of
//     Los Angeles street, FORMERLY KNOWN AS NEGRO ALLEY". That is the Calle de
//     los Negros absorption in the city\u2019s own words, in an instrument.
//   \u2022 `ord-107-block-35-half-lots` is a NEGATIVE, and it is the answer to a
//     question handbook/COMPILED-ORDINANCES.md asked with two stars. Ordinance
//     107 sells twenty lots in Block 35\u00bd of Ord\u2019s survey \u2014 Teed Street\u2019s own
//     block \u2014 and names no street whatever, only lot numbers and minimum bids.
//     `teed-street` gets nothing from it. Ordinance 105 two pages earlier does
//     name streets on that block, and has its own folder.
//
// \u26a0 `completeness: "incidental"` AND IT MATTERS. This is a compilation of
// ordinances, not a survey of streets: a street the Council never legislated
// about simply does not appear. handbook/COMPILED-ORDINANCES.md leans on the
// absence of Wilson Street from the 1878 and 1884 indexes, and rightly flags
// that as weak evidence. Nothing here licenses any stronger reading.
//
// \u2605 THE PDF-PAGE OFFSET, because it will be needed every time anyone opens
// this file:
//
//   PDF 1        title page (unnumbered)
//   PDF 2        blank
//   PDF 3-200    printed pp. 3-200        \u2014 offset 0
//   PDF 201      GALE\u2019S OWN CITATION PAGE, inserted; not part of the book
//   PDF 202-399  printed pp. 201-398      \u2014 offset +1 (printed = PDF \u2212 1)
//   PDF 400      blank
//
// The body runs pp. 3-362 (Resolution No. 1, Nov. 7, 1878, to Resolution
// No. 221, approved Jan. 9, 1884) and the subject index pp. 363-398. There is
// NO separate list of ordinances or list of resolutions in the volume; the one
// in robinson-1884-contents.md was reconstructed heading by heading from the
// body.
//
// \u2605 AND THE WHOLE BOOK IS NOW GREPPABLE. `robinson-1884-ocr.txt` beside this
// file is the raw tesseract OCR of all 397 text pages, with a marker on every
// page giving BOTH numbers ("===== PDF PAGE 294 = PRINTED PAGE 293 ====="). It
// is UNCORRECTED and must never be quoted: it is a finding aid, in the same
// spirit as documents/newmark-1916/newmark-1916.txt, and every quotation taken
// from it has to be checked against the page image. Render a page with
//   pdftoppm -f <PDF page> -l <PDF page> -r 200 -jpeg robinson-1884.pdf out
//
// PROVENANCE. Gale, The Making of Modern Law: Primary Sources, doc id
// DT0102876584, from UCLA (u=uclosangeles); downloaded by Kenny and dropped
// into this folder as a 353 MB, 400-page scan with no text layer. Rendered to
// 200 dpi JPEGs, OCR\u2019d with tesseract, and every quotation below checked by
// eye against the page image by Claude, 2026-09-19.

module.exports = {
  id: "robinson-1884",
  title: "W. W. Robinson (comp.), Compiled Ordinances and Resolutions of the City of Los Angeles (Los Angeles: Marley & Freeman, 1884), published by order of the Council of the City of Los Angeles",
  shortTitle: "Robinson\u2019s Compiled Ordinances, 1884",
  url: "https://link.gale.com/apps/doc/DT0102876584/MMLP?u=uclosangeles&sid=bookmark-MMLP",
  scan: "documents/robinson-1884/robinson-1884.pdf",
  transcription: "documents/robinson-1884/robinson-1884-contents.md",

  // \u00a74: `date` is when the CONTENT was made. For a compilation that is the
  // compiling; the instruments it prints run Nov. 7, 1878 to Jan. 9, 1884 and
  // each one read off it carries its own date (documents/ord-97 and the rest).
  date: { on: "1884" },
  recorded: null,
  form: "textual",
  type: "ordinance",
  attests: "built-by",
  // A compilation of ordinances is not a survey of streets: its silence about a
  // street means only that the Council never legislated about it.
  completeness: "incidental",
  // The city limits of the day, as a rough rectangle \u2014 the scope of the
  // Council\u2019s jurisdiction, exactly as ord-1613 and ord-4093 declare it.
  coverage: [[34.135, -118.325], [34.135, -118.155],
             [33.995, -118.155], [33.995, -118.325]],
  // The 113 ordinance and 220 resolution HEADINGS have all been read and are
  // listed in robinson-1884-contents.md; the bodies have not all been read, and
  // the subject index is only partly verified. Nothing here licenses silence.
  sweptFully: false,
  sweptFor: [],
  readBy: "human",

  excerpts: [
    { id: "title-page",
      text: "COMPILED ORDINANCES AND RESOLUTIONS OF THE CITY OF LOS ANGELES. COMPILED AND INDEXED " +
            "BY W. W. ROBINSON. PUBLISHED BY ORDER OF THE COUNCIL OF THE CITY OF LOS ANGELES.",
      note: "PDF p. 1. The imprint \u201CMarley & Freeman\u201D and the year 1884 are on the same page." },

    { id: "ord-104-numbering",
      text: "ORDINANCE No. 104. AN ORDINANCE of the City of Los Angeles requiring ordinances and " +
            "resolutions to be numbered. ... SECTION 1. Hereafter, all ordinances of the City of " +
            "Los Angeles, and all resolutions of the Mayor and Council of the City of Los Angeles, " +
            "shall be numbered consecutively in accordance with the numbering of the ordinances and " +
            "resolutions, in the compilation of the ordinances and resolutions compiled by W. W. " +
            "Robinson, and it shall be the duty of the Clerk of the Council to so number said " +
            "ordinances and resolutions hereafter adopted, after the same shall be adopted and " +
            "approved, and before the same are published.",
      note: "\u2605\u2605\u2605 p. 318. The most consequential sentence in the volume for anyone citing it. " +
            "Ordinance and resolution numbers 1-103 and 1-221 are Robinson\u2019s, assigned in " +
            "compiling and ratified here; the city had none before November 1883." },

    { id: "ord-24-macy-extension",
      text: "ORDINANCE No. 24. AN ORDINANCE extending the line of Macy street, and declaring said " +
            "extension open to the public. ... SECTION 1. That Macy street be and the same is " +
            "hereby extended so as to include a strip of land of the uniform width of sixty feet, " +
            "which is described as follows: Commencing at the northwest corner of the school house " +
            "lot belonging to the Sisters of Charity, a point in the east line of Alameda street, " +
            "and running thence north 10\u00bd\u00b0 east, 60\u00bc feet; thence south 70\u00bd\u00b0 east, 184\u00bd feet to the " +
            "western corner of the western post of the gate of J. D. Woodworth; ... to a stake \u2014 " +
            "from which bears a nail \u2014 in the middle line of the western end of the approach to the " +
            "covered bridge ...",
      note: "p. 59, adopted July 31, 1880, approved Aug. 2. \u2605 `macy-street` is a HARD names item on " +
            "the switchover list; this is the instrument that carried Macy east from Alameda to the " +
            "covered bridge over the river, sixty feet wide, and it locates the line by the Sisters " +
            "of Charity school house, Woodworth\u2019s gate and fences, Jeff. White\u2019s garden and F. W. " +
            "Peschke\u2019s fence at \u201Cthe junction of Old Aliso and Macy streets\u201D. Res. 19, 26 and 27 " +
            "(pp. 33, 42) grade Macy from Alameda to the covered bridge. Figures transcribed from " +
            "OCR against the image; the fractional degrees are hard to read at 200 dpi and should " +
            "be re-checked before any of them is used as geometry." },

    { id: "ord-26-vine-street",
      text: "ORDINANCE No. 26. AN ORDINANCE opening Vine street and declaring it to be a public " +
            "street. ... SECTION 1. All that certain strip or parcel of land, as surveyed by Moore " +
            "& Kelleher, and designated on a map thereof, prepared by them February 25th, 1875, and " +
            "being the same land delineated and marked Vine street on the map of the subdivision of " +
            "the \u201CPryor Tract,\u201D recorded in book 2 of Miscellaneous Records, on page 634, in Los " +
            "Angeles County Recorder\u2019s office, commencing at a point in the south line of Turner " +
            "street, 230 feet westerly of the west line of Alameda street, and running thence on the " +
            "east line of said Vine street, south 2\u00bc\u00b0 west, 676 feet to the north line of First " +
            "street; ... containing a strip of land 673 feet long and 50 feet wide, shall be and the " +
            "same is hereby declared to be a public street, to be called and known as Vine street.",
      note: "\u2605\u2605 p. 64, adopted Nov. 20, 1880. THE FIRST PLACEMENT OF VINE STREET IN THIS CORPUS. " +
            "`vine-central` has no `state` row anywhere \u2014 ord-4093\u2019s Vine\u2192Central row is one of the " +
            "two the change-rows audit calls a known defect for exactly that reason \u2014 and here is " +
            "Vine surveyed: 673 ft long, 50 ft wide, from Turner street (230 ft west of Alameda) " +
            "south to First street. \u26a0 THE TURNER HERE IS THE ONE ORDINANCE 81 RENAMED JACKSON two " +
            "and a half years later (documents/ord-81), which puts Vine\u2019s north end on that block. " +
            "\u2605 AND IT NAMES A SHEET TO PULL: M.R. 2-634, the Pryor Tract, and Moore & Kelleher\u2019s " +
            "survey of Feb. 25, 1875." },

    { id: "ord-40-negro-alley",
      text: "... thence south 34\u00bc\u00b0 west, 365 feet along the east line of Los Angeles street, formerly " +
            "known as Negro alley, to a point from which the south-east corner of an adobe building " +
            "owned by A. F. Coronel bears north 56\u00be\u00b0 west, 52 feet; thence across Los Angeles street, " +
            "and along the south wall of the building of said Coronel, north 56\u00be\u00b0 west, 168 feet to " +
            "the point of beginning. SEC. 2. That the assessment to be levied ... shall extend from " +
            "the west line of Alameda street to the north line of First street.",
      note: "\u2605\u2605 Ordinance No. 40, p. 108, adopted June 18, 1881 \u2014 \u201Cestablishing the lines of Los " +
            "Angeles street, from Arcadia street to Alameda street\u201D. The city\u2019s own instrument " +
            "saying that Los Angeles Street was FORMERLY NEGRO ALLEY. The same section fixes the " +
            "line by H. Newmark\u2019s adobe at the south-east corner of the plaza and by A. F. " +
            "Coronel\u2019s. No row: `los-angeles-street` is lettered in this corpus but there is no " +
            "`negro-alley` entity, and coining one is names.js work." },

    { id: "ord-107-block-35-half-lots",
      text: "ORDINANCE No. 107. AN ORDINANCE authorizing and directing the sale by the City of Los " +
            "Angeles, of its interest in certain real property situated in block 35\u00bd, Ord\u2019s survey, " +
            "in said city, and fixing the manner of said sale. ... SECTION 1. That the right, title " +
            "and interest of the City of Los Angeles in and to all that real property ... being " +
            "lots 1, 2, 3, 4, 8, 10, 12, 16, fractional lot 17, and lots 18, 19, 20, 21, 22, 23, " +
            "24, 25, 26, 27, 29, of block 35\u00bd Ord\u2019s survey, be sold at public auction ... For lot " +
            "1, $100 or more; For lot 2, $100 or more; ... For lot 29, $150 or more.",
      note: "\u26a0 A NEGATIVE, AND AN IMPORTANT ONE. p. 335, adopted Nov. 24, 1883. " +
            "handbook/COMPILED-ORDINANCES.md flagged this ordinance with two stars in the hope that " +
            "a city sale of lots on Block 35\u00bd \u2014 documents/mr003-240, the sheet that letters TEED " +
            "STREET \u2014 would name the streets and lift `teed-street` off `inferred`. It does not. " +
            "The whole ordinance is lot numbers and minimum bids; not one street is named in it. " +
            "The lead is closed. documents/ord-105, two pages earlier and on the same block, is " +
            "where the street names are." },

    { id: "res-95-downey-avenue-chain",
      text: "RESOLUTION No. 95. A RESOLUTION of the Mayor and Council of the City of Los Angeles, to " +
            "establish the grade of Downey avenue, from the eastern end of bridge to Thomas street. " +
            "... The grade at the eastern end of bridge to be 50.54 feet above datum plane; at the " +
            "crossing of Water street the grade shall be 59.75 ...; at the crossing of Hayes street " +
            "... 61.45 ...; at the crossing of Walnut street ... 68.82 ...; at the crossing of " +
            "Chestnut street ... 72.75 ...; at the crossing of Truman street ... 82.86 ...; at the " +
            "crossing of Hellman street ... 83.79 ...; at the crossing of Daly street ... 81.70 ...; " +
            "at the crossing of Workman street ... 79.64 ...; at the crossing of Sichel street ... " +
            "81.45 ...; at the crossing of Griffin avenue ... 83.67 ...; at the crossing of Johnston " +
            "street ... 88.42 ...; at the crossing of Hancock street ... 93.61 ...; at the crossing " +
            "of Hansen street ... 99.67 ...; at the crossing of Gates street ... 109.59 ...; at the " +
            "crossing of Thomas street the grade shall be 121 feet above datum plane.",
      note: "\u2605\u2605\u2605 pp. 168-169, adopted July 29, 1882. SIXTEEN CROSSINGS IN ORDER, EAST FROM THE " +
            "BRIDGE, with a height for each: bridge \u2192 Water \u2192 Hayes \u2192 Walnut \u2192 Chestnut \u2192 Truman \u2192 " +
            "Hellman \u2192 Daly \u2192 Workman \u2192 Sichel \u2192 Griffin avenue \u2192 Johnston \u2192 Hancock \u2192 Hansen \u2192 " +
            "Gates \u2192 Thomas. Downey Avenue is modern North Broadway and this is Lincoln Heights / " +
            "East Los Angeles, ground this corpus barely touches. Of the sixteen, only " +
            "`workman-street` has an entity here. Read by eye off the page images. \u26a0 The subject " +
            "index spells the twelfth \u201CJohnson street\u201D and the body \u201CJohnston street\u201D; the body is " +
            "what is quoted. Res. 103 (p. 174) orders the improvement of the same run." },

    { id: "res-137-bunker-hill-chain",
      text: "RESOLUTION No. 137. A RESOLUTION of the Mayor and Council of the City of Los Angeles, to " +
            "establish the grade of Bunker Hill avenue, between Temple and Sand streets; of Montreal " +
            "street, between Sand and Deep Water streets; of Deep Water street, between Montreal and " +
            "Reservoir streets; and of Reservoir street, between Deep Water and Reservoir No. 4.",
      note: "\u2605\u2605 p. 232, and a second ordered chain, this one on the hill behind the plaza: Temple " +
            "\u2014 (Bunker Hill avenue) \u2014 Sand \u2014 (Montreal street) \u2014 Deep Water \u2014 (Deep Water street) \u2014 " +
            "Reservoir \u2014 Reservoir No. 4. \u2605 DEEP WATER STREET is the street Teed 1887\u2019s Ordinance " +
            "No. 317 renames (handbook/COMPILED-ORDINANCES.md \u00a73); here it is, placed between " +
            "Montreal and Reservoir. `canal-and-reservoir-st`, `montreal-st` and `bunker-hill-ave` " +
            "are all entities this corpus holds. The index also has \u201CBoston street, grade at " +
            "Montreal street\u201D under the same resolution." },

    { id: "res-3-charity-grade",
      text: "RESOLUTION No. 3. A RESOLUTION of the Council of the City of Los Angeles, establishing " +
            "the grade of Charity street. ... SECTION 1. That the grade of Charity street shall be " +
            "and hereby is established as follows: At a point on said Charity street 300 feet " +
            "northerly from the intersection of Charity and Second streets, the grade to be 150 " +
            "feet above the datum plane; at the crossing of Charity and First streets, the grade to " +
            "be 143 feet above the datum plane; ... at the crossing of Charity and Court House " +
            "streets, the grade to be 135 feet above the datum plane; and at a point 300 feet north " +
            "of the intersection of Charity and Court House streets, the grade to be 148 feet above " +
            "the datum plane.",
      note: "pp. 5-6, adopted Jan. 2, 1879 \u2014 the third act in the volume. \u2605 Charity Street is the " +
            "street Teed 1887\u2019s Ordinance No. 286 turned into GRAND AVENUE, and " +
            "handbook/COMPILED-ORDINANCES.md records an over-claim about whether that change was " +
            "whole or partial. This resolution shows Charity crossing Court House, First and " +
            "Second \u2014 i.e. running well north of Second in 1879 \u2014 and the volume tracks it south " +
            "as far as Twelfth (Res. 165, p. 273). One street, Court House to Twelfth, in 1879-83. " +
            "Figures read from OCR against the image and not individually re-checked." },

    { id: "res-56-buena-vista-order",
      text: "Commencing at the south line of Short street; at the grade of 37.20 feet above datum " +
            "plane; thence on a level to the north line of Short street; thence ascending 2.60 feet " +
            "in 600 feet to the south line of High street, where the grade will be 39.80 feet above " +
            "datum plane; thence on a level to the north line of High street; thence ascending 5.60 " +
            "feet in 726 feet to the south line of Virgin street, where the grade shall be 40.45 " +
            "feet above datum plane; thence on a level to the north line of Virgin street; thence " +
            "ascending 3.80 feet in 600 to the south line of College street, where the grade shall " +
            "be 49.20 feet above datum plane; thence on a level 630 feet to the center of Buena " +
            "Vista and College streets.",
      note: "\u2605\u2605\u2605 Resolution No. 56, p. 88, \u201Cto establish the grade of Buena Vista street, between " +
            "Short and College streets\u201D, adopted Mar. 12, 1881. FOUR STREETS IN ORDER, WITH " +
            "DISTANCES, going north along Buena Vista: SHORT \u2014 600 ft \u2014 HIGH \u2014 726 ft \u2014 VIRGIN \u2014 " +
            "600 ft \u2014 COLLEGE. `short-street-chavez` and `virgin` are both streets this project " +
            "could not previously place against each other, and `high-street-chinatown` is the one " +
            "with a known modern corridor (Ord Street), so this chain measures the other three off " +
            "it. Read by eye off the page image." },

    { id: "res-58-buena-vista-virgin-college",
      text: "RESOLUTION No. 58. A RESOLUTION of the City of Los Angeles, providing for the " +
            "improvement of Buena Vista street, between Virgin and College streets. ... SECTION 1. " +
            "That the following improvements, at the expense of the property owners, shall be made " +
            "on Buena Vista street, between Virgin and College streets.",
      note: "p. 89, adopted Mar. 1881. With Res. 56 above, Res. 140 (p. 237, Buena Vista between " +
            "High and Virgin), Res. 185 (p. 314, between Virgin and High) and Res. 221 (p. 361, " +
            "from Short street to High street), the Council paves Buena Vista block by block and " +
            "names every cross street as it goes." },

    { id: "res-221-buena-vista-short-to-high",
      text: "RESOLUTION No. 221. RESOLUTION of intention to improve and grade Buena Vista street " +
            "from Short street to High street.",
      note: "p. 361, and the LAST resolution in the volume (approved Jan. 9, 1884). A second, " +
            "independent statement that Short street and High street are the two ends of one block " +
            "of Buena Vista." },

    { id: "res-157-163-turner-east-of-alameda",
      text: "RESOLUTION No. 157. Resolution of the Mayor and Council of the City of Los Angeles, to " +
            "establish the grade of Turner street, from Alameda street to Vignes street. ... At the " +
            "intersection of Alameda street and Turner street the grade shall be as now established, " +
            "5.40 feet above the datum plane; at a point on Turner street 600 feet easterly from the " +
            "east boundary of Alameda street the grade shall be 7.50 feet above the datum plane; at " +
            "the intersection of Lafayette street and Turner street ... \u2014 and RESOLUTION No. 163. " +
            "RESOLUTION of intention to improve and grade Turner street, between Alameda street and " +
            "Vignes street.",
      note: "\u2605\u2605 pp. 266 and 271, both LATER in the volume than Ordinance No. 81 (p. 234), which " +
            "renamed Turner street to Jackson street from Wilmington to Alameda. Turner therefore " +
            "survived east of Alameda, which is what documents/tr0145-062 still letters in 1928 and " +
            "what `turner-street`\u2019s internalNote could not explain. See documents/ord-81. Res. 157 " +
            "also puts a LAFAYETTE STREET crossing Turner east of Alameda." },

    { id: "res-139-jackson-in-use",
      text: "RESOLUTION No. 139. RESOLUTION of intention to improve and grade Jackson street.",
      note: "p. 235 \u2014 the page immediately after Ordinance No. 81. The new name in use the moment " +
            "it is made." },

    { id: "res-70-sand-street-abandoned",
      text: "RESOLUTION No. 70. A RESOLUTION of the Mayor and Council of the City of Los Angeles, to " +
            "abandon that part of Sand street west of Cemetery avenue, not included in the " +
            "description contained in a resolution entitled \u201CA resolution of the Council of the " +
            "City of Los Angeles, to lay out, widen and extend Sand street, in the City of Los " +
            "Angeles,\u201D approved February 24th, A. D. 1879. Whereas, the lines of Sand street, in " +
            "the City of Los Angeles, were changed by resolution of the Council of said city, on the " +
            "20th day of February, A. D. 1879 ...",
      note: "p. 110. A VACATION, which is the rarest of the four street acts in this volume. " +
            "`sand-st` is lettered in this corpus. Res. 7 (p. 9) is the Feb. 1879 resolution it " +
            "refers back to, \u201Cto lay out, widen and extend Sand street\u201D; Res. 196 (p. 324), 200 " +
            "(p. 327), 203 (p. 330) and 210 (p. 344) grade and improve it from Cemetery avenue to " +
            "Montreal street. Res. 6 (p. 8) sells lots in block \u201CG\u201D \u201Cbetween Temple and Sand " +
            "streets, west of Cemetery avenue\u201D." },

    { id: "res-88-main-street-lines",
      text: "RESOLUTION No. 88. A RESOLUTION of the City of Los Angeles, establishing the lines of " +
            "and the width of Main street, in said city, between Washington and Jefferson streets.",
      note: "p. 160. One of four acts on Main in this volume \u2014 with Ordinance No. 61 (p. 189, " +
            "condemnation to widen Main between Washington and Adams), Ordinance No. 96 (p. 289, " +
            "condemnation to widen and extend Main between Alameda and \u2026) and Res. 194/198/206 " +
            "(pp. 323, 326, 338, grade and improvement of Main from California street to Washington " +
            "street). Read together with documents/ord-77, which is what made the northern end " +
            "\u201CMain\u201D in the first place." },

    { id: "res-92-san-pedro-lines",
      text: "RESOLUTION No. 92. A RESOLUTION of the City of Los Angeles to change and establish the " +
            "lines and width of San Pedro street, between First and Fifth streets. ... San Pedro " +
            "street, between First and Fifth streets, shall be 60 feet wide ...",
      note: "p. 166. A width, which is geometry rather than naming, but it is the kind of fact the " +
            "map tool can use when an old plat and a modern way disagree by half a street." },

    { id: "res-132-seventh-street-extension",
      text: "RESOLUTION No. 132. A RESOLUTION providing for the extension of Seventh street, west of " +
            "Pearl street. ... SECTION 1. That that certain street in said city known as Seventh " +
            "street be laid out, established, extended and prolonged so as to embrace and include " +
            "therein ...",
      note: "p. 224. `pearl` is the Grasshopper/Pearl/Figueroa lineage \u2014 the one " +
            "handbook/change-rows-amendment.md \u00a71 is written around. Seventh Street reaching west " +
            "PAST Pearl in 1883 dates that junction." },

    { id: "res-180-garcia-street",
      text: "RESOLUTION No. 180. RESOLUTION of intention to improve and grade Garcia street, between " +
            "Sainsevain street and Aliso street.",
      note: "p. 296. A street name this corpus does not hold at all, placed between two it does " +
            "(`sainsevain-street` and Aliso). Worth an entity and a look at the sheets east of " +
            "Alameda." }
  ],

  rows: []
};
