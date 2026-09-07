// Los Angeles Herald, Sept. 2, 1883, p. 3 — the ordinance list WITH the new
// names, and the document that dates one of this project's oldest open
// questions.
//
// ★★ "GEORGIA TO GEORGIA BELL STREET." ADOPTED, SEPTEMBER 1883 — SIX YEARS
// BEFORE THE DATE THIS PROJECT CARRIES.
//
// ⚠ AND THE OLDER DATE IS SOURCED, SO NOTHING IS OVERWRITTEN HERE. The
// `georgia-bell` entity dates the Georgia Bell period from 1889 on the strength
// of Gen. Forman's dated history in the Herald of Feb. 19, 1897, which says the
// street was renamed Georgia Bell on May 10, 1889. This document is a
// contemporary report of an ordinance adopted in Sept. 1883 doing what looks
// like the same thing. Both cannot be the coining of the name.
//
// THE READING THAT FITS BOTH — offered as a reading, not a finding: names.js
// describes the 1889 act as folding the stretches platted NEVADA in 1886 into
// Georgia Bell, and Forman was testifying in 1897 about a street whose name had
// been argued over for years. If the name was coined here in 1883 and the
// Nevada stretches were folded into it in 1889, both dates are right about
// different events and Forman is recalling the later one. That is tidy, which
// is a reason to distrust it. What would settle it: the ordinance book for
// Sept. 1883, or the council minutes for Sept. 1, 1883 and May 10, 1889.
//
// The entity is left as it stands, with the conflict recorded in its
// internalNote. Changing a sourced spelling period on the strength of one
// clipping is exactly the move that put "Tulip lasted a matter of months" into
// public prose this morning.
//
// What the surrounding documents add to it:
//
//   • Aug. 19: the Board recommends Georgia → ALABAMA, "in same addition" —
//     Bell's addition (documents/lah-1883-08-19).
//   • Aug. 26: an ordinance renaming six streets including Georgia is adopted,
//     with no new names printed (documents/lah-1883-08-26).
//   • Sept. 2: the list appears again, five streets this time, and Georgia's
//     new name is GEORGIA BELL.
//
// So the name that was adopted keeps Georgia and appends the ADDITION'S name.
// That is what a disambiguation looks like — and `georgia-east`'s note already
// says the west-downtown Georgia was renamed because another Georgia Street
// existed. names.js reads Georgia Bell as honouring Georgia Herrick Bell, wife
// of Major Horace Bell, on whose land the street lay. Nothing here refutes
// that, and the two readings are not exclusive: on Bell's land, a Georgia
// Street becoming Georgia Bell Street is at once a disambiguation and a
// compliment. What this document adds is that the alternative on the table was
// ALABAMA — which would have been neither.
//
// ⚠ ONE THING NOT ESTABLISHED: that the Georgia Street in Bell's addition is
// the west-downtown Georgia of `georgia-bell`. It is the obvious reading, since
// that entity says the street was laid out on Bell land — but "Bell's addition"
// is not located in this corpus, and matching a tract to an entity by the
// owner's surname is the kind of step rule 2 exists to slow down.
//
// ⚠ AND THE LISTS DO NOT MATCH. Pacific is on the Aug. 26 list and not on this
// one; Georgia's new name is not the one recommended a fortnight earlier. Two
// adoptions of overlapping lists a week apart. This corpus cannot tell from the
// newspaper whether the second amended the first, replaced it, or is the same
// ordinance reported twice with a correction. The ordinance book would.
//
// NO ROWS. No extent is stated for any of the five, so each would be an
// unqualified whole-name change — and of the five old names only Georgia has an
// entity here, whose ground (west downtown) no sheet in the corpus letters at
// all (WANTED.md P1). A change row for it would land nowhere, exactly as
// ord-4093's does. And with the 1883/1889 conflict unresolved, a row would have
// to pick a date; the excerpt does not.
//
// PROVENANCE. Clipping supplied by Kenny, 2026-09-06, found by searching CDNC
// for "ordinance changing" — crop 2417,3152,525,306 of LAH18830902.1.3, beside
// this file. The print is clean; "Kuhrts" is the least certain word and is
// corroborated by the Apr. 1893 minutes.

module.exports = {
  id: "lah-1883-09-02",
  title: "Los Angeles Herald, Sept. 2, 1883, p. 3 — ordinance adopted changing Turner to Sonora, Pine to Cherry, Georgia to Georgia Bell, Elm to Bush, and Rose (East Los Angeles) to Kuhrts",
  shortTitle: "the 1883 Georgia Bell renaming",
  url: "https://cdnc.ucr.edu/?a=d&d=LAH18830902.1.3",
  scan: "documents/lah-1883-09-02/lah-1883-09-02-clip.jpg",
  transcription: null,

  date: { before: "1883-09-02" },
  recorded: "1883-09-02",
  form: "textual",
  type: "news-report",
  attests: "built-by",
  completeness: "incidental",
  coverage: [[34.135, -118.325], [34.135, -118.155],
             [33.995, -118.155], [33.995, -118.325]],
  sweptFully: false,
  sweptFor: [],
  readBy: "human",

  excerpts: [
    { id: "ordinance-five-streets",
      text: "Ordinance changing the names of certain streets: Turner street to Sonora " +
            "street; Pine to Cherry street; Georgia to Georgia Bell street; Elm to Bush " +
            "street; Rose street, East Los Angeles, to Kuhrts street. Adopted.",
      note: "★ The instrument for Georgia → Georgia Bell, six years earlier than the date " +
            "this project had been carrying. Five streets; the Aug. 26 report of the same " +
            "or a related ordinance listed six, including Pacific." },

    { id: "western-boundary",
      text: "Recommend that the City Surveyor be instructed to mark the western boundary of " +
            "the city.",
      note: "The line immediately above, transcribed so the clip is complete. Incidentally " +
            "useful: the city's western boundary was still an unmarked line in 1883, which " +
            "is the same boundary the 1896 southwest ordinances measure from as the “West " +
            "Charter boundary”." }
  ],

  rows: []
};
