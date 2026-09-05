// AN ORDINANCE CHANGING THE NAME OF VIRGIN STREET — adopted by the Los Angeles
// Council, Monday Aug. 22, 1887, council minutes ledger pp. 700-701.
//
// The second renaming instrument found by the method in
// handbook/RENAMING-SOURCES.md, and the first to confirm that the method
// generalises: a month from a `note` sentence, the City Clerk's date-filtered
// browser, and the ordinance is on the page.
//
// UNQUALIFIED (amendment §2), and the wording is almost exactly the 1897
// formula: "that certain street in the City of Los Angeles known as Virgin".
// The subject is the street-as-named; no stretch is mentioned. Three
// instruments now share this construction — 1874, 1887, 1897 — which is good
// evidence that the unqualified form is the city's default and the qualified
// one the exception.
//
// ⚠ THE ORDINANCE NUMBER IS BLANK. The clerk wrote the heading "Ordinance No."
// and left the number off, exactly as in Feb. 1874. So the ledger page is the
// citation, and a project instinct formed on Ordinance No. 4093 — that a
// renaming has a number to hunt for — does not hold before the 1890s.
//
// THE SAME MEETING GIVES THE STREET AN EXTENT, and it is worth more than the
// ordinance. A grading resolution earlier in the session (ledger p. 700)
// describes "said Virgin street, from its intersection with Yale street to the
// intersection with Beaudry street" — the only extent-bearing attestation of
// this name anywhere in the corpus outside the 1849 survey. Modern Alpine
// Street meets both Yale Street and Beaudry Avenue (0 m in the OSM extract), so
// the two ends resolve without any interpretation. "Beaudry street" for modern
// Beaudry Avenue is ordinary generic drift (§5.1), not a different street.
//
// It also quietly corroborates the Feb. 1874 ordinance: a street called YALE
// exists here in 1887, thirteen years after Wasp Street was renamed to it.
//
// PROVENANCE. Scanned council minutes obtained by Kenny, 2026-09-04, from
// https://clerkapps.lacity.org/oldcfidocs/ — the Aug. 22, 1887 volume, PDF
// pages 31-32. Both clips beside this file. Transcribed by Claude from the
// clips, 2026-09-04, not yet checked by a second reader: the hand is a clear
// round secretary and the street names are unambiguous, but three of the eight
// councillors' surnames are uncertain readings and are flagged in the excerpt.

module.exports = {
  id: "ord-1887-08-22",
  title: "“An Ordinance changing the name of Virgin Street” — Los Angeles Council, adopted Aug. 22, 1887 (council minutes, ledger pp. 700-701; ordinance number left blank in the ledger)",
  shortTitle: "the Aug. 1887 Virgin Street ordinance",
  url: "https://clerkapps.lacity.org/oldcfidocs/",
  scan: "documents/ord-1887-08-22/ord-1887-08-22-clip.jpg",
  transcription: null,

  date: { on: "1887-08-22" },
  form: "textual",
  type: "ordinance",
  attests: "built-by",
  // It claims to list every street it renames — one — and the grading
  // resolution beside it speaks only about that same street. Nothing here
  // claims to be a survey of anything wider.
  completeness: "exhaustive-in-scope",
  coverage: [[34.075, -118.265], [34.075, -118.235],
             [34.050, -118.235], [34.050, -118.265]],
  // CONFIRMED by Kenny, 2026-09-04. He located the volume, identified the
  // relevant page(s) and read them independently (Gemini in a browser, page by
  // page) before handing them over — so the CONTENT of these rows has had a
  // second reader, which is what rule 5 asks for. What has had one pass only is
  // the verbatim wording of the excerpts, transcribed here from the clips that
  // sit beside this file; anyone doubting a quote can check it without leaving
  // the repo. Confirmed by hand for want of a review tool for textual documents
  // (handbook/MAP-TOOL-SPEC.md §9).
  sweptFully: true,
  sweptFor: ["Alpine Street"],
  readBy: "human",

  excerpts: [
    { id: "adoption",
      text: "The said ordinance was then on motion of Mr. Lovell adopted by Council by " +
            "the following vote: Ayes, Councilmen, Collins, Frankenfield, Sibbs, Heyans, " +
            "Kuhrts, Lovell, Teed, and President Breed (8); Noes, none.",
      note: "Frankenfield and Kuhrts are corroborated as Los Angeles councilmen of this " +
            "period; “Sibbs”, “Heyans” and “Teed” are uncertain readings and want a " +
            "second pass. None of them bears on the renaming." },
    { id: "ordinance",
      text: "Ordinance No. — An Ordinance changing the name of Virgin Street. " +
            "The Mayor and Council of the city of Los Angeles do ordain as follows: " +
            "Section 1. That the name of that certain street in the City of Los Angeles " +
            "known as Virgin shall be and is hereby declared to be changed to Alpine " +
            "Street. " +
            "Section 2. The Clerk of the Council shall certify to the passage of this " +
            "ordinance and shall cause the same to be published once in the Los Angeles " +
            "Daily Tribune and thereupon and thereafter it shall take effect and be in force.",
      note: "The ledger heading reads “Ordinance No.” with the number left blank." },
    { id: "grading-extent",
      text: "…the assessment to be levied for the collection of the amount necessary to " +
            "pay the cost and expense of improving and grading said street shall be made " +
            "upon property on both sides of said Virgin street, from its intersection " +
            "with Yale street to the intersection with Beaudry street…",
      note: "Sec. 3 of a separate grading resolution earlier in the same session (ledger " +
            "p. 700). Not part of the renaming; quoted because it is the only statement " +
            "of where Virgin Street ran." }
  ],

  rows: [
    // The name on the ground, with the extent the grading resolution states.
    // A `state` row on a textual document: no ink to quote, so no asWritten —
    // the words are in the excerpt instead (§12).
    //
    // `basis` is left unset. The vocabulary (lot-level / label / alignment /
    // position) describes how a claim was matched to a DRAWING, and this extent
    // was read off a sentence naming two intersections that both still exist.
    // handbook/change-rows-amendment.md §5 flags the gap; this is the first row
    // that actually sits in it.
    { kind: "state", name: "virgin", asWritten: "Virgin street",
      street: "Alpine Street", from: "Yale Street", to: "Beaudry Avenue",
      says: ["grading-extent"],
      note: "The resolution says the street runs at least from Yale to Beaudry; it " +
            "does not say Virgin ran ONLY there, so this row claims that stretch and " +
            "no more. “Beaudry street” is modern Beaudry Avenue — generic drift." },

    { kind: "change", from: "virgin", to: "alpine",
      scope: "whole-name",
      says: ["ordinance", "adoption"],
      mechanism: "renaming" }
  ]
};
