// Los Angeles Council minutes, Monday Apr. 10, 1893, ledger pp. 527-560 — one
// whole regular meeting, read end to end (2026-09-06).
//
// NO ROWS. The meeting names something like three dozen streets and every one
// of them appears in a grade, sewer, sidewalk, culvert or franchise item —
// business that assumes the names rather than settling them. Several of the
// items are extent-bearing and tempting, and each one has a soft end: "Upper
// Main street" may be historic Main or the modern one, "Centennial avenue" is
// a generic away from modern Centennial Street, and a street ORDERED OPENED is
// not the same claim as a street lettered on a plat. Kenny's call, 2026-09-06:
// the excerpts go in, the rows wait for a pass that settles the ends.
//
// SO WHAT IS IT FOR? Two things.
//
// 1. ★ PETITION No. 465, FRED L. ALLES. The same man whose petition of Feb. 3,
//    1890 asked that Fort Street be renamed Broadway (documents/min-1890-02-03)
//    is here three years later asking the city to spend $25,000 "to assist in
//    the Opening of Broadway North to Buena Vista street" — the street that
//    becomes North Broadway in Nov. 1909, the last renaming on WANTED.md's P2
//    list. The 1909 change has always read as an administrative tidy-up; this
//    says somebody was pushing Broadway toward that junction sixteen years
//    earlier, and names him.
//
// 2. IT DATES A MEETING WHOSE OWN MINUTES ARE GONE. "The minutes of the last
//    meeting of April 3rd 1893 were read and approved" — and Apr. 3, 1893 is
//    the day the Council adopted Ordinance No. 1613, the Scott Avenue merger
//    (documents/ord-1613), for which the City Clerk's holdings have no volume.
//    The two documents bracket the hole from either side.
//
// The other five excerpts are kept because they bear on entities the project
// already has: 16th and 15th Street, Alpine, Diamond, and the Ocean View
// Avenue corridor that Diamond Street's identity question turns on. Each is
// discussed in handbook/research-leads.md (2026-09-06).
//
// PROVENANCE. Scans supplied by Kenny, 2026-09-06, from
// https://clerkapps.lacity.org/oldcfidocs/ — the Apr. 10, 1893 volume, 34
// pages. All 34 were read by an instance at 70 dpi and the seven items below
// re-read at 200-400 dpi; the clips beside this file are those crops, made
// from the same PDF. NOT read by a human: `readBy: "instance"`. The hand is a
// clear round secretary hand and the street names are unambiguous, but the
// petitioners' surnames and one specification number are flagged where they
// are uncertain.

module.exports = {
  id: "min-1893-04-10",
  title: "Los Angeles Council minutes, Apr. 10, 1893 — regular meeting (ledger pp. 527-560), including petition No. 465 of Fred L. Alles et al. to open Broadway north to Buena Vista Street",
  shortTitle: "the Apr. 1893 council minutes (Broadway north)",
  url: "https://clerkapps.lacity.org/oldcfidocs/",
  scan: "documents/min-1893-04-10/min-1893-04-10-alles-broadway-north.jpg",
  transcription: null,

  date: { on: "1893-04-10" },
  form: "textual",
  // Council proceedings: the meeting adopts ordinances, but this document is
  // the record of the meeting, not an instrument.
  type: "minutes",
  attests: "built-by",
  completeness: "incidental",
  // The meeting's business is citywide, so the scope is the 1893 city limits
  // as a rough rectangle — the same box ord-4093 uses, and for the same reason.
  coverage: [[34.135, -118.325], [34.135, -118.155],
             [33.995, -118.155], [33.995, -118.325]],
  // All 34 pages were read, but nothing was entered as a row, so NO negative
  // inference is available from this document: `sweptFully: false` is the
  // honest setting even though the reading was complete. What was read and
  // rejected is in handbook/research-leads.md, so the pass is resumable.
  sweptFully: false,
  sweptFor: [],
  readBy: "instance",

  excerpts: [
    { id: "petition-465-broadway-north",
      text: "No. 465. From Fred L. Alles et al. asking Council to appropriate the sum of " +
            "$25,000. to assist in the Opening of Broadway North to Buena Vista street. " +
            "Which was referred to the Board of Public Works.",
      note: "Ledger p. 555. The Alles of documents/min-1890-02-03, three years on. Where " +
            "it leads: the Board of Public Works' report back, in the weeks after Apr. 10." },

    { id: "apr3-minutes-approved",
      text: "The minutes of the last meeting of April 3rd. 1893 were read and approved.",
      note: "Ledger p. 527. The meeting that adopted Ordinance No. 1613 " +
            "(documents/ord-1613) and whose own minutes are missing from the City Clerk's " +
            "holdings — this line is the proof it took place." },

    { id: "sixteenth-street-opened",
      text: "On motion of Mr. Pessell the Street Superintendent was ordered by the following " +
            "vote, to open 16th street between Maple avenue and San Pedro street. Ayes " +
            "Messrs. Campbell, Innes, Munson, Nickell, Pessell, Rhodes and Strohm, 7. " +
            "Nays none.",
      note: "Ledger p. 545, and three weeks after the Miguel Subdivision " +
            "(documents/mr053-016, Mar. 25, 1893) letters “16th ST. (formerly Pine St)” " +
            "one block west. NO ROW: an order to OPEN a street is a claim about pavement " +
            "being made, not about a name already lettered on ground, and the model has " +
            "no kind for it. Left here until that is settled." },

    { id: "alpine-sidewalk",
      text: "No. 473. From Poindexter and List asking permission to lay a cement sidewalk in " +
            "front of their property on Alpine street between Centennial avenue and Upper " +
            "Main street by private contract. Which was referred to the Board of Public " +
            "Works.",
      note: "Ledger p. 556. Six years after Virgin Street became Alpine " +
            "(documents/ord-1887-08-22), and east of the Yale-to-Beaudry stretch that " +
            "ordinance's grading resolution describes. NO ROW: “Upper Main street” may be " +
            "historic Main or the modern street, and “Centennial avenue” is a generic away " +
            "from the modern Centennial Street it probably is — neither end is safe to " +
            "resolve from this sentence alone (Kenny, 2026-09-06)." },

    { id: "ocean-view-grade",
      text: "7th. Final Ordinance establishing the grade of Ocean View Avenue from Alvarado " +
            "Street to Bonnie Brae Street. Which Ordinance was referred to the Councilman " +
            "from the Third Ward.",
      note: "Ledger p. 553. Ocean View Avenue is the corridor that became Beverly " +
            "Boulevard — which is also what the 1884 Glassell plat's Diamond Street became " +
            "through its own tract. Two names on one modern corridor, and where one " +
            "stopped and the other started is the question the `diamond-street` identity " +
            "decision turns on." },

    { id: "diamond-fremont-culvert",
      text: "Mr. Innes moved that the Street Superintendent be instructed to place a wooden " +
            "culvert at the intersection of Fremont avenue and Diamond Street. Which was " +
            "referred to the Board of Public Works.",
      note: "Ledger p. 539. Modern Diamond Street and Fremont Avenue meet at 0 m " +
            "(34.05890, -118.25260), so this is the SURVIVING Diamond Street rather than " +
            "the Glassell tract's stretch — the first evidence outside the 1884 plat that " +
            "the name was in live use, though it settles the merge neither way." },

    { id: "fifteenth-street-grade",
      text: "5th. Ordinance of intention to grade Fifteenth Street from the Westerly line of " +
            "Grand Avenue to the Easterly line of Hope street under Specifications No. 9 " +
            "and to construct a cement curb on said Street between said points as per " +
            "petition No. 460 from A. J. Bradish.",
      note: "Ledger p. 552. A west-side block of a street whose only other sighting is on " +
            "the far side of downtown. The specification number is an uncertain reading." },

    { id: "twentyfirst-abandoned",
      text: "The matter of the hearing of the protest of W. Cole Trustee, et al. No. 434 " +
            "against the contemplated opening of Twenty first street from Bonsallo avenue " +
            "to Balboa street coming on regularly as a special order at this hour the same " +
            "was taken up and the City Engineer reported that said protest does not " +
            "represent a majority of the frontage of property within the district of " +
            "assessment for opening said street. On motion of Mr. Teed the said protest " +
            "was sustained and all proceedings abandoned.",
      note: "Ledger p. 545. Two things worth keeping: a street opening that did NOT happen " +
            "— a shape the model has no row for — and “Balboa street”, a name that is in " +
            "no sheet of this corpus and outside the OSM extract. Note also that the " +
            "protest was sustained although the City Engineer had just reported it did not " +
            "represent a majority." }
  ],

  rows: []
};
