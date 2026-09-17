// ★★ THE MERCHANT'S MEMOIR, AND THE ONE BOOK IN THIS CORPUS YOU CAN GREP.
// Harris Newmark arrived in Los Angeles in 1853 aged nineteen, went into trade,
// and stayed sixty years. His memoir names the shopkeepers, vintners, ranchers
// and councilmen of exactly the circle that put its surnames on the streets east
// and north of the old plaza — which is why an ABSENCE from Newmark is nearly as
// useful here as a presence.
//
// ⚠ THIS DOCUMENT HAS NO ROWS AND NEVER WILL. Like documents/guinn-1912 it is
// SECONDARY SCHOLARSHIP — `type: "history"` — a man writing about the people, not
// a record of the ground. It carries no geometry, dates no renaming, and names no
// cross streets. It is here so that the excerpts a name rests on have a stable
// home and an id, and so that a primary-anchor count can exclude it.
//
// ★ THE FILE BESIDE THIS ONE IS THE POINT. `newmark-1916.txt` is the whole book,
// index included, as plain text (1.5 MB). GREP IT. Do not search for Newmark
// remotely.
//
// ⚠⚠ AND HERE IS WHY, because it cost this project weeks. archive.org's full-text
// endpoint was returning ZERO for names that are plainly in this book — "Potts"
// appears three times and the endpoint said nothing — so `potts-st` and `weill`
// both carried "searched, nothing found" verdicts that were tooling failures
// dressed as negatives. CLAUDE.md's "three sources LIE rather than fail" warning
// was written from other evidence; this is the first time it was caught against a
// ground truth. Every Newmark negative recorded before 2026-09-17 is worthless.
//
// WHAT IT HAS ALREADY SETTLED (2026-09-17, first pass):
//   • `potts-st`  — ★★ p. 61, "Temple Street had not then been opened by BEAUDRY
//     AND POTTS", the Beaudry link an earlier pass had explicitly looked for and
//     concluded did not exist. Plus the p. 126 biography. Reversed a rejection.
//   • `teed-street` — ★ p. 614, M. Teed among the nine founders of an Old
//     Settlers' Society in 1897, alongside J. M. Guinn. Third sighting of the man.
//   • REAL NEGATIVES, now trustworthy: Weill 0, Weil 0, Labory 0, Labury 0,
//     Alanis 0, Kiefer 0, Bliss 0, Millar 0, Chadwick 0, Wingerter 0, Reeve 0,
//     Kincaid 0, Boteller 0, Glowner 0. Against Sainsevain 33 — so the silence is
//     informative, not a gap in his knowledge.
//
// ⭐ WHAT IS STILL UNREAD, and it is a lot: 61 Wolfskill passages, 59 Lazard,
// 51 Beaudry, 30 Requena, 15 Ducommun, 15 Vignes, 8 Sabichi, 8 Harvey, 7 Solano.
// The Potts find came out of exactly ONE of the fifty-one Beaudry passages. This
// is a session's work with `grep -n` and no network at all, and it is the cheapest
// unexploited seam in the project. See handbook/CDNC-QUERIES.md.
//
// PROVENANCE. Fetched by Kenny from Project Gutenberg, 2026-09-17, after
// archive.org's search proved unreliable. The .txt beside this file is a
// tag-stripped conversion of the Gutenberg HTML made the same day; it preserves
// the printed page numbers inline (they appear as bare numerals in the running
// text, e.g. "126 J. Wesley Potts was an early arrival"), which is how the page
// citations above were fixed.

module.exports = {
  id: "newmark-1916",
  title: "Harris Newmark, Sixty Years in Southern California, 1853–1913, Containing the Reminiscences of Harris Newmark (2nd ed., New York: Knickerbocker Press, 1916)",
  shortTitle: "Newmark's Sixty Years in Southern California",
  url: "https://www.gutenberg.org/ebooks/44571",
  scan: null,
  transcription: "documents/newmark-1916/newmark-1916.txt",

  // The memoir covers 1853–1913 and was published in 1916; `date` is the edition
  // in hand, and the span it describes is in the title (§4).
  date: { on: "1916-01-01" },
  recorded: "1916",
  form: "textual",
  type: "history",
  attests: "built-by",
  completeness: "incidental",
  coverage: [[34.135, -118.325], [34.135, -118.155],
             [33.995, -118.155], [33.995, -118.325]],
  // Whole-word searches over the full text are recorded in the header and in
  // handbook/CDNC-QUERIES.md, but a memoir is not a survey: a surname's absence
  // is evidence about the man's standing in Newmark's circle, never about whether
  // a street existed. `sweptFor` stays empty and must stay empty.
  sweptFully: false,
  sweptFor: [],
  readBy: "instance",

  excerpts: [
    { id: "beaudry-and-potts",
      text: "Temple Street had not then been opened by Beaudry and Potts, although there was a little " +
            "cul-de-sac extending west from Spring Street; and at the junction of what is now Spring " +
            "and Temple streets, there was a two-story adobe building in which D. W. Alexander and " +
            "Francis Mellus conducted a general merchandise business.",
      note: "★★ p. 61. The clause that cracked `potts-st`. Newmark is describing the town as he found " +
            "it in 1853, so “had not THEN been opened” dates the Beaudry–Potts partnership to after " +
            "that and before Temple Street existed — comfortably before the 1875 sheet that letters " +
            "Potts Street on Beaudry's own subdivision. The earlier rejection of J. W. Potts turned on " +
            "his joining the Common Council only in Dec. 1877; this shows the Council was never the " +
            "relevant date." },

    { id: "potts-biography",
      text: "J. Wesley Potts was an early arrival, having tramped across the Plains all the way from " +
            "Texas, in 1852, reaching Los Angeles in September. At first, he could obtain nothing to " +
            "do but haul dirt in a hand-cart for the spasmodic patching-up of the streets; but when he " +
            "had earned five or six dollars in that way, he took to peddling fruit, first carrying it " +
            "around in a basket. Then he had a fruit stand. Getting the gold-fever, however, Potts " +
            "went to the mines; but despairing at last of realizing anything there, he returned to Los " +
            "Angeles and raised vegetables, introducing, among other things, the first locally-grown " +
            "sweet potatoes put on the market. Later he was widely known as a “weather prophet” — with " +
            "predictions quite as likely to be worthless as to come true.",
      note: "★ p. 126. Newmark's own index runs the two passages together — “Potts, J. Wesley, 61, " +
            "126” — which is what identifies the Temple Street partner with this man, rather than " +
            "leaving two Pottses in play. ⚠ Note the man Newmark draws: a street-patcher turned fruit " +
            "peddler turned market gardener. Nothing here says landowner or subdivider; the standing " +
            "that would put his name on a street comes from the partnership with Beaudry, not from " +
            "this biography." },

    { id: "old-settlers-society",
      text: "Dr. Henry S. Orme, H. W. O'Melveny, J. M. Griffith, J. W. Gillette, A. L. Bath, J. M. " +
            "Guinn, M. Teed, J. M. Elliott and W. A. Spalding on August 2d met in the office of the " +
            "Daily Herald, in the Bradbury Block on Third Street, to consider the organization of an " +
            "Old Settlers' Society.",
      note: "★ p. 614, 1897. The third sighting of M. Teed, and the one that establishes his standing: " +
            "nine men are picked to found a society of old settlers and he is among them, in company " +
            "with J. M. Guinn — the same Guinn who wrote documents/guinn-1912 and sat on the street- " +
            "naming commission. See `teed-street`, and the two 1873 clippings in clippings/." }
  ],

  rows: []
};
