// ★★★ ORDINANCE NO. 320 — "An Ordinance changing the name and establishing the
// lines of Ogier lane." Adopted by the Council July 5, 1887, approved by Mayor
// W. H. Workman July 7, published in the Los Angeles Daily Tribune July 8, 1887.
//
// THIS IS THE ACT names.js SAID WAS MISSING. `winston-st`'s internalNote reads,
// in full: "No change row written: the June ordinance was postponed and the act
// that carried it has not been found (WANTED)." Here it is, two pages into the
// ordinance section of Teed's Vol. IV, six months after the postponement the
// Herald reported (documents/lah-1887-06-14, "An ordinance changing the name of
// Ozier Lane to Winston street. Action postponed.").
//
// THE SPELLING IS THE CITY'S OWN AND IT IS "OGIER". The ordinance sets it twice,
// the volume's LIST OF ORDINANCES once ("320.—Changing name of Ogier lane to
// Winston street") and the index twice. The corpus's ink says "Ozier" — the 1881
// Rivara and Vignolo plat (documents/mr005-110) and the Herald. ⚠ That is a
// question for names.js and is NOT decided here; see
// documents/teed-1889/FINDINGS.md §4. Both readings are attested; neither is a
// transcription slip.
//
// ⚠ IT IS ALSO A RE-LOCATION, WHICH THE TITLE SAYS AND THE ROW CANNOT. Sec. 1
// defines the street's lines by reference to a map — "Plat showing proposed
// re-location of Ogier lane, said lane to be called and designated in the future
// Winston street", filed with the Clerk June 13, 1887 — and Sec. 2 vacates
// whatever of the old lane falls outside those lines. So the pavement moved as
// well as the name. That map is not in this corpus and would be worth asking the
// City Archivist for; until it turns up, how far the corridor shifted is unknown.
// The change row below is about the NAME, which is all the model claims.
//
// WHY THE ROW DRAWS. An unqualified change lands wherever its `from` is
// independently attested (change-rows-amendment §4), and `ozier-lane` is
// attested: mr005-110 letters "Ozier Lane" along modern Winston Street from Main
// to Los Angeles and on east. So this row puts a dated 1887 renaming on real
// pavement — the first thing in this volume that does.
//
// ★ AND IT IS THE FIRST HALF OF A TWO-STEP ASSEMBLY. Winston Street as it stands
// is Ogier Lane (this ordinance, 1887) PLUS Shaw Street from Wall to San Pedro,
// which Ordinance No. 48 (New Series) took in on Apr. 22, 1889
// (documents/lah-1889-05-10, clause c081). Two instruments, two lineages, one
// modern street — and now both are documented.
//
// PROVENANCE. Read from a 300 dpi render of PDF page 87 of
// documents/teed-1889/teed-1889-vol4.pdf (printed p. 83). The volume has no text
// layer; the page was OCR'd first and then transcribed by eye, and the full text
// is in ord-320-transcription.md beside this file. ⚠ Transcribed by an instance,
// 2026-09-19; not yet checked by a second reader. The type is clean 1889 roman
// and no word of it is doubtful, but rule 5 has not been satisfied.

module.exports = {
  id: "ord-320",
  title: "Ordinance No. 320, “An Ordinance changing the name and establishing the lines of Ogier lane” — adopted by the Council of the City of Los Angeles July 5, 1887, approved July 7, published July 8, 1887; printed in Freeman G. Teed, comp., Charter and Compiled Ordinances and Resolutions of the City of Los Angeles, Vol. IV (1889), p. 83",
  shortTitle: "Ord. 320, Ogier lane becomes Winston Street (1887)",
  url: "https://link.gale.com/apps/doc/DT0106634468/MMLP?u=uclosangeles",
  scan: "documents/teed-1889/teed-1889-vol4.pdf",
  transcription: "documents/ord-320/ord-320-transcription.md",

  // §4.1: `date` is when the content was made — the council adopted it July 5,
  // 1887. `recorded` is the artifact in hand, Teed's 1889 compilation. The
  // ordinance took effect on publication, July 8, 1887, under its own Sec. 3.
  date: { on: "1887-07-05" },
  recorded: "1889",
  form: "textual",
  type: "ordinance",
  attests: "built-by",              // a lane existed to be renamed and re-located
  // It names every street it touches — one — and claims nothing outside it.
  completeness: "exhaustive-in-scope",
  // The city limits of the day, as the rough rectangle ord-1613 and
  // ord-1887-08-22 both use. NOT a claim about where Ogier lane ran: the
  // ordinance states no extent, and where the lane ran is known from
  // mr005-110, not from here.
  coverage: [[34.135, -118.325], [34.135, -118.155],
             [33.995, -118.155], [33.995, -118.325]],
  sweptFully: true,                 // the whole ordinance is read and excerpted
  sweptFor: [],
  readBy: "instance",

  excerpts: [
    { id: "title",
      text: "An Ordinance changing the name and establishing the lines of Ogier lane.",
      note: "⚠ The volume's LIST OF ORDINANCES abbreviates this as “Changing name of Ogier lane " +
            "to Winston street”, which drops the lines clause. The enacting title is the one quoted here." },

    { id: "sec-1",
      text: "Section 1. That the lines of that certain street in the City of Los Angeles heretofore " +
            "known as Ogier lane are hereby declared to be laid down and defined in a map entitled " +
            "“Plat showing proposed re-location of Ogier lane, said lane to be called and designated " +
            "in the future Winston street,” and filed with the Clerk of the Council June 13, 1887; " +
            "and further, that the name of said street shall be changed to Winston street.",
      note: "The operative clause. “The name of SAID STREET shall be changed” — the subject is the " +
            "street as named, not a stretch of it, so the change is unqualified (amendment §2). The " +
            "map it cites is not in this corpus." },

    { id: "sec-2",
      text: "Sec. 2. That that portion of said Ogier lane not included in the lines designated and " +
            "laid down in said map is hereby vacated and abandoned.",
      note: "The re-location. Some part of the old lane was thrown out of the street; how much is " +
            "on the June 13, 1887 plat and nowhere else we hold." },

    { id: "sec-3",
      text: "Sec. 3. The Clerk of the Council shall certify to the passage of this ordinance, and " +
            "shall cause the same to be published once in the Los Angeles Daily Tribune, and " +
            "thereupon and thereafter it shall take effect and be in force.",
      note: "The publication condition, in the same words as the Aug. 1887 Virgin Street ordinance " +
            "(ord-1887-08-22 / Ord. 345) — and naming the same paper, the Tribune rather than the " +
            "Herald. handbook/RENAMING-SOURCES.md §2b." },

    { id: "certification",
      text: "I hereby certify that the foregoing ordinance was adopted by the Council of the City of " +
            "Los Angeles at its meeting of July 5, 1887. FREEMAN G. TEED, Clerk of the Council of " +
            "the City of Los Angeles. Approved this 7th day of July, 1887. W. H. WORKMAN, Mayor. " +
            "Published July 8, 1887.",
      note: "Teed signs as Clerk of the Council — the same Freeman G. Teed who compiled this volume " +
            "two years later. ⚠ Not the Matthew Teed of `teed-street`; see ord-1887-08-22." }
  ],

  rows: [
    { kind: "change", from: "ozier-lane", to: "winston-st",
      scope: "whole-name",
      says: ["sec-1", "title", "certification"],
      mechanism: "renaming",
      note: "Unqualified: Sec. 1 changes the name of the street, and states no stretch. The extent " +
            "is therefore derived from where `ozier-lane` is independently attested — mr005-110, " +
            "which letters “Ozier Lane” along modern Winston Street from Main Street eastward. " +
            "⚠ Sec. 2 vacates part of the old lane at the same moment, so the corridor moved as " +
            "well as the name; the plat that would say how far is not in the corpus." }
  ]
};
