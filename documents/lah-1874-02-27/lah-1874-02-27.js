// Herald report of the Feb. 26, 1874 council action renaming Calle de los
// Chapules ("Grasshopper Street") to Pearl Street — property owners'
// petition, over a rival "Union Avenue" proposal. A dated newspaper report
// of the transition itself, so it may carry a change row (§5).
//
// FIRST DOCUMENT TO CARRY `excerpts` (handbook/change-rows-amendment.md §12).
// The evidence in a textual document is a sentence, the way the evidence on a
// plat is ink, so the sentences are here beside the row they license and the
// row points at them by id. Two passages license this one row and they say
// different things — the first records the decision, the second the enacting
// act — which is why `says` is a list.
//
// Text supplied by Kenny, 2026-09-04, read off the CDNC scan; the clipping he
// cut is beside this file, so the excerpts can be checked without going back to
// CDNC — which now answers automated requests with a bot-verification wall.
// `…` between the excerpts marks intervening matter that says nothing about
// this renaming (a request from Mr. Potts about a stray-catching officer, and
// an order to the City Marshal about horses and cattle running at large).
//
// The clipping came from CDNC's own page-image cropper, whose parameters are
// in the filename it downloads as — LAH18740227.1.3, crop 1190,7154,778,709 at
// 195w. Kept here rather than in inbox/ and COMMITTED, small as it is: the rule
// is that what cannot be re-derived is carved back into git, and a CDNC crop
// behind a bot wall is exactly that.
//
// One correction already: the second excerpt first read "A ordinance", which
// was a typing slip in transit and not the paper. The sheet says "An".
//
// TWO THINGS DELIBERATELY NOT ROWS HERE:
//
//   "Union Avenue" — the losing proposal. It never named this street, so it is
//   not an entity and gets no row, for the same reason "De La Guerra Street"
//   is not a phase of Boylston: a name that was proposed and not adopted never
//   existed on the ground.
//
//   Bunker Hill Avenue — elsewhere in the same column the council deals with
//   "the grade of Fort street from Temple street to Second street", "the grade
//   of Temple from Fort to Bunker Hill Avenue", and an item "defining the
//   lines of Bunker Hill Avenue and declaring it a public avenue". That is
//   suggestive about the modern Hill/Grand/Hope block, and it is NOT
//   attestable from here: which modern street the 1874 "Bunker Hill Avenue"
//   became cannot be settled from these sentences, and guessing it is exactly
//   the failure rule 2 exists to stop. Parked in handbook/research-leads.md
//   (2026-09-04) instead.

module.exports = {
  id: "lah-1874-02-27",
  title: "Los Angeles Herald, “City and Suburbs,” Feb. 27, 1874 (council renames Grasshopper St → Pearl St)",
  shortTitle: "the Feb. 1874 council action (Herald report)",
  url: "https://cdnc.ucr.edu/?a=d&d=LAH18740227.2.10",
  transcription: null,

  date: { on: "1874-02-26" },
  form: "textual",
  type: "news-report",
  attests: "built-by",
  completeness: "incidental",
  coverage: [[34.065, -118.275], [34.065, -118.255],
             [34.035, -118.255], [34.035, -118.275]],
  scan: "documents/lah-1874-02-27/lah-1874-02-27-clip.jpg",
  // Swept because the whole council column was read through, not merely the
  // renaming paragraph — which is how the Bunker Hill Avenue items surfaced
  // (parked in handbook/research-leads.md, since the text does not say which
  // modern street it is).
  sweptFully: true,
  sweptFor: null,
  readBy: "human",

  // Verbatim, in document order. A row quotes one or more of these by id;
  // anything not quoted is here because it bears on reading the ones that are.
  excerpts: [
    { id: "petition",
      text: "The owners of property on Grasshopper street petition for the name " +
            "Pearl street; others for Union Avenue. A heavy discussion ensued when " +
            "the first named petitioners won, and Pearl street is to be the new name." },
    { id: "ordinance-carried",
      text: "An ordinance changing Grasshopper street to Pearl street was carried." }
  ],

  rows: [
    // UNQUALIFIED (amendment §2): the report names no extent, and neither
    // passage limits the change to a stretch.
    //
    // The `toCross: "Pico Boulevard"` and `street` this row used to carry are
    // gone (2026-09-04). Neither was in the document: Pearl's south end at Pico
    // was derived from MR 3-32 (1875) and MR 7-21 (1885), and a modern street
    // name on an unqualified change silently defines the claim. The extent now
    // comes from wherever `chapules` is attested (amendment §4).
    { kind: "change", from: "chapules", to: "pearl",
      scope: "whole-name",
      says: ["petition", "ordinance-carried"],
      mechanism: "renaming",
      note: "Two acts in one meeting: the petitioners' name is settled in the first " +
            "passage, and the second carries the ordinance that makes it so. The " +
            "document's date is the council day (Feb. 26), not the paper's (Feb. 27)." }
  ]
};
