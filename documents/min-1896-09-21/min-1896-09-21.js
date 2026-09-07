// Los Angeles Council minutes, Monday Sept. 21, 1896, ledger p. 334 — a
// renaming petition of a kind the corpus has not seen before, plus two names
// worth dating.
//
// ★ PETITION No. 829 IS A SWAP, NOT A RENAMING. S. Regelein et al ask "that the
// name of Stearns Avenue be changed to Albion Street, and Albion Street from
// Stearns Avenue to east Main Street be changed to West Albion Street." One
// street takes its neighbour's name; the neighbour keeps the name with a
// direction word bolted on. Both halves are needed to make sense of either, and
// the second half is qualified by an extent while the first is not.
//
// This is a shape handbook/change-rows-amendment.md does not cover. §10 lists
// the forms a change row cannot express — restoration, draft amendment, a
// request — and this is another: a name moving from one street to an adjacent
// one while the source street stays in existence under a modified form of it.
// If it was enacted, the rows would be `stearns-ave → albion` (unqualified) and
// `albion → west-albion` (extent, Stearns Avenue to East Main Street), and the
// second would have to happen first or the first would collide with it.
//
// NO ROWS, because a petition is a request and this one has not been traced to
// an ordinance. It was referred to the Board of Public Works — the same route
// the Fort Street petition took in Feb. 1890 (documents/min-1890-02-03), and
// that one did become an ordinance within seventeen days. So the next council
// meetings are where to look; the volumes for Sept. 23, 24 and 25, 1896 are
// already in the inbox.
//
// Neither Albion Street nor Stearns Avenue is in this project's OSM extract, so
// even an enacted version would draw nothing today.
//
// The other two items are kept for dating rather than for naming: Towne Avenue
// between Eighth and Twelfth (this project has `towne-ave`), and Second Street
// between Soto and Mott, which is the Mott of the 1869 Mott Tract
// (documents/mr001-489) surviving as a street name in 1896.
//
// PROVENANCE. Scanned minutes supplied by Kenny, 2026-09-06, from
// https://clerkapps.lacity.org/oldcfidocs/ — the Sept. 21, 1896 volume, PDF
// p. 28, ledger p. 334. Kenny found the page; the clip beside this file is its
// upper third and the transcription is Claude's. "Regelein" and "Soto" are the
// two least certain readings and both are flagged.

module.exports = {
  id: "min-1896-09-21",
  title: "Los Angeles Council minutes, Sept. 21, 1896 — petition No. 829 to move the name Albion Street onto Stearns Avenue and rename the old Albion Street West Albion Street (ledger p. 334)",
  shortTitle: "the 1896 Albion / Stearns petition",
  url: "https://clerkapps.lacity.org/oldcfidocs/",
  scan: "documents/min-1896-09-21/min-1896-09-21-clip.jpg",
  transcription: null,

  date: { on: "1896-09-21" },
  form: "textual",
  type: "minutes",
  attests: "built-by",
  completeness: "incidental",
  coverage: [[34.135, -118.325], [34.135, -118.155],
             [33.995, -118.155], [33.995, -118.325]],
  sweptFully: false,
  sweptFor: [],
  readBy: "human",

  excerpts: [
    { id: "petition-829-albion-stearns",
      text: "No. 829- From S. Regelein et al, asking that the name of Stearns Avenue be " +
            "changed to Albion Street, and Albion Street from Stearns Avenue to east Main " +
            "Street be changed to West Albion Street. Referred to the Board of Public Works.",
      note: "A name moving sideways between two streets, with the loser keeping a modified " +
            "form of it. Note that only the second half carries an extent. “Regelein” is an " +
            "uncertain reading." },

    { id: "towne-avenue-work",
      text: "No. 828- From J. C. Kolf et al, asking that Towne Avenue between Eighth and " +
            "Twelfth Streets, be graded, graveled, curbed, sidewalked with cement five feet " +
            "wide and sewered. Referred to the Board of Public Works.",
      note: "Kept as a dated attestation of Towne Avenue between Eighth and Twelfth — the " +
            "entity is `towne-ave`, named in the Southern Pacific run on the Wolfskill " +
            "orchard. No row: the request is about paving, not about the name, and the " +
            "extent it gives is the work's, not the street's." },

    { id: "second-street-soto-mott",
      text: "No. 831- From S. C. Garner, stating that in the fall of 1894 he worked as a " +
            "laborer on the grading of Second Street from Soto Street to Mott Street for " +
            "T. A. Grant, Street Contractor, for which labor he has not been paid…",
      note: "Kept for Mott Street, which is the Mott of the 1869 Mott Tract " +
            "(documents/mr001-489) alive as a street name a generation later, and for the " +
            "fact that Second Street was being graded that far east in 1894. “Soto” is an " +
            "uncertain reading." },

    { id: "wilshire-sixth-street",
      text: "No. 827- From H. G. Wilshire et al, asking that Sixth Street west of " +
            "Carondelet Street be graded and graveled. Referred to the Board of Public Works.",
      note: "H. Gaylord Wilshire, thirteen years before the boulevard carried his name, " +
            "petitioning about the street west of Carondelet. Kept because the man is a " +
            "street name in waiting, not because the item says anything about one." }
  ],

  rows: []
};
