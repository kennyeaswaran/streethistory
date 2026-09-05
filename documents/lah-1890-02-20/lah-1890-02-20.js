// Los Angeles Herald, Feb. 20, 1890, p. 1: "BROADWAY. / Fort Street Is No
// Longer in Existence." — the paper reporting that the ordinance renaming Fort
// Street to Broadway has been signed by Mayor Hazard and taken effect.
//
// STAGE 3, REPORTED. Unlike the Feb. 1874 petition (documents/lah-1874-02-13/),
// this is not an item about somebody asking: the ordinance exists, is signed,
// and is in force. So the document attests the transition and may carry a
// change row (§5).
//
// ⚠ THE INSTRUMENT ITSELF IS NOT IN THE CORPUS AND MAY NOT SURVIVE. Kenny went
// looking for it in the council minutes and found that **the minutes for the
// relevant dates are missing** from the City Clerk's series — the route that
// produced the 1874 and 1887 ordinances has a hole here. That is why a
// newspaper carries this change and an ordinance carries the others, and it is
// the first case in this project where the press is not merely corroboration
// but the only surviving record. handbook/RENAMING-SOURCES.md records the gap.
//
// UNQUALIFIED, and the headline is the argument: "There is no longer a Fort
// street in Los Angeles." The claim is about the name everywhere, not about a
// stretch — the same shape as 1874, 1887 and 1897.
//
// DATE. The article reports a state of affairs, not a meeting: the ordinance
// "has gone into effect, having been signed … and published as required by
// law", so the change is some days older than the paper. `date` is therefore
// `{ before: "1890-02-20" }` rather than `{ on: … }` — §4's undated-artifact
// form, used here for an undated EVENT. It brackets the renaming at no later
// than Feb. 20 and claims no more, which is all the document supports.
// Independently corroborated: on Mar. 10, 1890 the council clerk writes "Fort
// street (now Broadway)" in passing (inbox/1890-03-10-fort-now-broadway.jpg).
//
// THE SECOND HALF IS A PREDICTION, NOT AN ENACTMENT, and gets no row. The item
// goes on to say that part of Main Street south of Tenth "will be called
// Broadway … as soon as Broadway is extended", explaining the geometry: Main
// bends at Seventh, and a Broadway cut through south of Tenth would run nearly
// straight with it. That is the origin story of modern Broadway south of
// downtown and it is worth having — but "it is hinted" and "it is said" are not
// an instrument, and the model has no kind for a change somebody expects.
// Parked in handbook/research-leads.md (2026-09-04).
//
// PROVENANCE. Clip supplied by Kenny, 2026-09-04, from CDNC's page-image
// cropper — LAH18900220.1.2, crop 1167,6153,723,932 at 362w. Committed beside
// this file: CDNC answers automated requests with a bot wall, so the crop is
// not re-derivable from inside the repo. Transcribed by Claude from the clip;
// the print is clean and the reading is not in doubt.

module.exports = {
  id: "lah-1890-02-20",
  title: "Los Angeles Herald, “Broadway — Fort Street Is No Longer in Existence,” Feb. 20, 1890 (the renaming ordinance signed by Mayor Hazard and in effect)",
  shortTitle: "the 1890 Fort Street renaming (Herald report)",
  url: "https://cdnc.ucr.edu/?a=d&d=LAH18900220.1.2",
  scan: "documents/lah-1890-02-20/lah-1890-02-20-clip.jpg",
  transcription: null,

  date: { before: "1890-02-20" },   // the ordinance was already in force
  form: "textual",
  type: "news-report",
  attests: "built-by",
  completeness: "incidental",
  coverage: [[34.075, -118.275], [34.075, -118.235],
             [34.020, -118.235], [34.020, -118.275]],
  sweptFully: true,                 // the whole item is read and excerpted
  sweptFor: ["Broadway"],
  readBy: "human",

  excerpts: [
    { id: "headline",
      text: "BROADWAY. Fort Street Is No Longer in Existence." },
    { id: "in-effect",
      text: "There is no longer a Fort street in Los Angeles. The ordinance changing " +
            "its name to Broadway has gone into effect, having been signed by Mayor " +
            "Hazard and published as required by law." },
    { id: "main-street-prediction",
      text: "It is hinted that in a short time a part of Main street, from Tenth street " +
            "south, will be called Broadway. This it is said will be done as soon as " +
            "Broadway is extended. An examination of the city map will show that Main " +
            "street makes a bend at Seventh street, and that when Broadway is cut " +
            "through that portion south of Tenth street will be nearly in a straight " +
            "line with Broadway. Parties now living on the lower part of Main street " +
            "may make up their minds to announce that they will reside on Broadway.",
      note: "A prediction, and it gets no row: “it is hinted” and “it is said” are not " +
            "an instrument. Kept because it is the earliest account of why Broadway " +
            "runs where it does south of downtown, and because whatever later act " +
            "carried it out is now a thing to look for." }
  ],

  rows: [
    { kind: "change", from: "fort-street", to: "broadway",
      scope: "whole-name",
      says: ["in-effect", "headline"],
      mechanism: "renaming",
      note: "Dated by the document as no later than Feb. 20, 1890; the ordinance " +
            "itself has not been found and the council minutes for the period are " +
            "missing." }
  ]
};
