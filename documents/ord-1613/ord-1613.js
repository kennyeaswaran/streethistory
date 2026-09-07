// ORDINANCE NO. 1613 (NEW SERIES) — "An Ordinance changing the names of
// Wyoming avenue and Cooper street, in the city of Los Angeles". Adopted by
// the Council Apr. 3, 1893, approved by Mayor T. E. Rowan Apr. 6, and printed
// in the Los Angeles Herald of Apr. 9, 1893, which is the copy we have.
//
// THE FOURTH RENAMING INSTRUMENT IN THE CORPUS, and the first that is a
// MERGER: two streets are not renamed side by side, they are abolished and
// replaced by one. "…said streets shall hereafter be known as one street, the
// name of which shall be Scott avenue." Two lineages end; one begins. That is
// two change rows into the same `to`, which the model handles without any new
// machinery.
//
// ⚠ THE MINUTES FOR THIS MEETING ARE MISSING. The ordinance was adopted on
// Apr. 3, 1893 and the City Clerk's online holdings have no volume for that
// date — the same hole that swallowed the Fort Street ordinance in Feb. 1890
// (documents/lah-1890-02-20, handbook/RENAMING-SOURCES.md §2a). This is the
// second case, and the second time a newspaper is the only surviving record of
// the act. What makes it recoverable is Sec. 2: the clerk is REQUIRED to
// publish the ordinance in a newspaper before it takes effect, so a renaming
// whose minutes are lost is still in print somewhere. See the handbook.
//
// The next meeting's minutes corroborate that the Apr. 3 meeting happened:
// documents/min-1893-04-10 opens "The minutes of the last meeting of April 3rd
// 1893 were read and approved."
//
// NOTHING HERE DRAWS, and that is expected. Scott Avenue is in Echo Park and
// Silver Lake, north of the ground the project's OSM extract covers, and
// neither Wyoming Avenue nor Cooper Street is lettered on any sheet in the
// corpus. An unqualified change lands only where its `from` holds (amendment
// §6), so these two rows record the act and put nothing on the map — the same
// honest emptiness as ord-4093's georgia-bell row.
//
// PROVENANCE. Clipping supplied by Kenny, 2026-09-06, from CDNC —
// LAH18930409.1.15. The first crop was rendered at 209 px wide and was at the
// edge of legibility; Kenny re-cropped it the same evening at 319 px
// (2065,4700,637,708) and that is the file beside this one. Transcribed by
// Claude; the type is clean and the reading is not in doubt.
//
// THE ADOPTION IS SEPARATELY REPORTED. documents/lah-1893-04-04 has the
// council report of the same meeting — "An ordinance changing the names of
// Wyoming avenue and Cooper street to Scott avenue. Passed." — which is a
// second contemporary witness to a session whose minute book is missing.
//
// The namesake is Kines's: Parmer Milton Scott and his wife Elizabeth, who
// lived on the street. His page dates the change to 1893 without naming an
// instrument — this is that instrument, with a number and a day.

module.exports = {
  id: "ord-1613",
  title: "Ordinance No. 1613 (New Series), “An Ordinance changing the names of Wyoming avenue and Cooper street, in the city of Los Angeles” — adopted Apr. 3, 1893, approved Apr. 6, published in the Los Angeles Herald Apr. 9, 1893",
  shortTitle: "Ord. 1613, the 1893 Scott Avenue merger",
  url: "https://cdnc.ucr.edu/?a=d&d=LAH18930409.1.15",
  scan: "documents/ord-1613/ord-1613-clip.jpg",
  transcription: null,

  // §4: `date` is when the content was made — the council adopted it on Apr. 3.
  // `recorded` is the artifact in hand, the Herald's printing of Apr. 9, which
  // is also the day the ordinance took effect under its own Sec. 2.
  date: { on: "1893-04-03" },
  recorded: "1893-04-09",
  form: "textual",
  type: "ordinance",
  attests: "built-by",              // streets existed to be renamed
  // It names every street it touches — two — and claims nothing outside them.
  completeness: "exhaustive-in-scope",
  // The 1893 city limits, as a rough rectangle, exactly as ord-4093 does: the
  // ordinance says "in the city of Los Angeles" and states no extent, so this
  // is the scope of the instrument and NOT a claim about where the two streets
  // ran. Where they ran is unknown to this project; modern Scott Avenue is
  // outside the OSM extract.
  coverage: [[34.135, -118.325], [34.135, -118.155],
             [33.995, -118.155], [33.995, -118.325]],
  sweptFully: true,                 // the whole notice is read and excerpted
  sweptFor: [],
  readBy: "human",

  excerpts: [
    { id: "title",
      text: "AN ORDINANCE CHANGING THE NAMES of Wyoming avenue and Cooper street, in the " +
            "city of Los Angeles." },
    { id: "sec-1",
      text: "SECTION 1. That the names of Wyoming avenue and Cooper street, in the city of " +
            "Los Angeles, are hereby abolished, and that said streets shall hereafter be " +
            "known as one street, the name of which shall be Scott avenue.",
      note: "Two streets abolished and replaced by one. No extent is stated for either, " +
            "which makes both changes unqualified (amendment §2)." },
    { id: "sec-2",
      text: "SEC. 2. The city clerk shall certify to the passage of this ordinance and shall " +
            "cause the same to be published once in the Los Angeles Daily HERALD, and " +
            "thereupon and thereafter the same shall take effect and be in force.",
      note: "The publication requirement, and the reason this ordinance survives at all: " +
            "the minutes for Apr. 3, 1893 are missing, but the law made printing it a " +
            "condition of its taking effect. handbook/RENAMING-SOURCES.md §2b." },
    { id: "certification",
      text: "I hereby certify that the above ordinance was adopted by the council of the City " +
            "of Los Angeles, at its meeting of the 3d day of April 1893. C. A. LUCKENBACH, " +
            "City Clerk. Approved by me this 6th day of April, 1893. T. E. ROWAN, Mayor of " +
            "the city of Los Angeles.",
      note: "Luckenbach is the same City Clerk who signs the Apr. 10, 1893 minutes " +
            "(documents/min-1893-04-10)." }
  ],

  rows: [
    { kind: "change", from: "wyoming-avenue", to: "scott-avenue",
      scope: "whole-name",
      says: ["sec-1", "title"],
      mechanism: "renaming",
      note: "Half of a merger: this ordinance abolishes two names at once and puts one " +
            "in their place. Nothing in the corpus letters Wyoming Avenue, so the row " +
            "records the act and lands on no ground." },

    { kind: "change", from: "cooper-street", to: "scott-avenue",
      scope: "whole-name",
      says: ["sec-1", "title"],
      mechanism: "renaming",
      note: "The other half. Same instrument, same day, same new name." }
  ]
};
