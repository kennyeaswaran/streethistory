// ORDINANCE NO. 207, IN FULL — and it settles two of this project's names.
//
// ★ WILLIAM STREET IN THE CHILDS TRACT BECAME SANTEE STREET, on Jan. 6, 1886 —
// six months after the O. W. Childs Tract sheet drew it (documents/mr006-378).
// The `william` entity was minted on 2026-09-06 with "No William is documented"
// and "the stretch is now part of Santee Street"; this is the instrument, and it
// also dates `santee-street`'s arrival on that ground, where Kines had only 1886.
//
// ★ AND IT IS A DUPLICATE-NAME FIX. The same ordinance renames a SECOND William
// Street, in the Los Angeles Improvement Company's subdivision, to Goss Street.
// Two streets called William, one ordinance, two different new names — the same
// shape as Georgia/Georgia Bell three years earlier.
//
// Section 1 is a third change on ground this project has: Elm Street, from Pico
// to California, becomes OLIVE STREET — the `olive` name being extended south
// over a tree name, thirteen years before Ord. 4093 does the same thing to Pearl.
//
// NO ROWS. Nothing in the corpus letters William Street outside the Childs sheet,
// no geometry has Goss or Elm, and the Elm→Olive extent (Pico to California)
// cannot be resolved because no California Street is in the OSM extract.
//
// PROVENANCE. Clipping supplied by Kenny, 2026-09-06 (CDNC phrase search). The
// print is clean and the reading is not in doubt.

module.exports = {
  id: "lah-1886-01-15",
  title: "Ordinance No. 207, “An Ordinance changing the names of certain streets” — adopted Jan. 6, 1886, approved Jan. 14, published in the Los Angeles Herald Jan. 15, 1886",
  shortTitle: "Ord. 207, the 1886 William Street renamings",
  url: "https://cdnc.ucr.edu/?a=d&d=LAH18860115.1.1",
  scan: "documents/lah-1886-01-15/lah-1886-01-15-clip.jpg",
  transcription: null,

  date: { on: "1886-01-06" },
  recorded: "1886-01-15",
  form: "textual",
  type: "ordinance",
  attests: "built-by",
  completeness: "exhaustive-in-scope",
  coverage: [[34.135, -118.325], [34.135, -118.155],
             [33.995, -118.155], [33.995, -118.325]],
  sweptFully: false,
  sweptFor: [],
  readBy: "human",

  excerpts: [
    { id: "title",
      text: "An Ordinance changing the names of certain streets." },

    { id: "sec-1-elm-olive",
      text: "SECTION 1. That the name of that certain street known as Elm street, and extending from " +
            "Pico street to California street, be and the same is hereby changed to Olive street." },

    { id: "sec-2-william-santee",
      text: "SECTION 2. That the name of that certain street known as William street, situated in the " +
            "Childs Tract, be and the same is hereby changed to Santee street.",
      note: "★ The `william` of documents/mr006-378, six months after that sheet was recorded." },

    { id: "sec-3-william-goss",
      text: "SECTION 3. That the name of that certain street known as William street, and situated in " +
            "the Los Angeles Improvement Company's subdivision of lots be as the same is hereby " +
            "changed to Goss street.",
      note: "The second William Street. The ordinance exists to tell them apart." },

    { id: "sec-4-publication",
      text: "SECTION 4. The Clerk of the Council shall certify to the passage of this ordinance and " +
            "shall cause the same to be published once in the Los Angeles DAILY HERALD, and thereupon " +
            "and thereafter it shall take effect and be in force." },

    { id: "certification",
      text: "I hereby certify that the foregoing ordinance was adopted by the Council of the city of " +
            "Los Angeles at its meeting of January 6th, A. D. 1886. W. W. ROBINSON, Clerk of the " +
            "Council of the City of Los Angeles. Approved this 14th day of January, A. D. 1886. E. F. " +
            "SPENCE, Mayor." }
  ],

  rows: [
    // Audit 2026-09-18 (handbook/change-rows-audit-2026-09-18.md), bin B.
    // QUALIFIED AND RESOLVED. The header's "NO ROWS … no California Street is in the
    // OSM extract" predates `california-street-14th`, which is now aligned to modern
    // 14th Street (mr003-038-p1/-p2) and cites this very ordinance as its anchor.
    // Olive Street meets Pico Boulevard and 14th Street at 0 m. `elm-street`'s own
    // row on mr003-038-p1 ends at 14th Street, so the two agree.
    { kind: "change", from: "elm-street", to: "olive",
      scope: "extent",
      street: "Olive Street", fromCross: "Pico Boulevard", toCross: "14th Street",
      wording: "that certain street known as Elm street, and extending from Pico street to California street",
      says: ["sec-1-elm-olive", "certification"],
      mechanism: "renaming",
      confirmed: false,
      note: "Adopted Jan. 6 and approved Jan. 14, 1886. California Street is the street that became Fourteenth Street in 1889." },
    // QUALIFIED, UNRESOLVED. "Situated in the Childs Tract" bounds the change by a
    // tract, not by cross streets; the tract's extent on Santee Street is what would
    // resolve it (mr006-378's footprint), and reading that is research, not
    // transcription. ⚠ (Split 2026-09-18: the Bixel William is now `william-farragut`.) The entity used to carry 1888–89 sightings on BIXEL
    // Street (mr009-095, mr005-566) — whichever William those are, this row is not
    // about them. Section 3's other William (→ Goss) has no entity: audit bin C.
    { kind: "change", from: "william-santee", to: "santee-street",
      scope: "extent-unresolved",
      wording: "that certain street known as William street, situated in the Childs Tract",
      says: ["sec-2-william-santee", "certification"],
      mechanism: "renaming",
      confirmed: false,
      note: "Adopted Jan. 6 and approved Jan. 14, 1886." }
  ]
};
