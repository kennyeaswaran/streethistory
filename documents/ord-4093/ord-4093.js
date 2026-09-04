// Ordinance No. 4093 (New Series) — the Feb. 1897 citywide renaming (326
// changes). Adopted Feb. 23, 1897; signed Feb. 26; recorded in Ordinance
// Book IV p. 337 (the vetoed Feb. 2 version at p. 331).
//
// ⚠ THE FULL TEXT IS NOT YET IN HAND (scan request with the City Archivist,
// 2026-08). What is transcribed: the council minutes (including the joint
// committee's manuscript report) and the Herald's session coverage. So:
// completeness stays "exhaustive-in-scope" — a fact about the DOCUMENT, which
// claims to list every renaming it enacted — while sweptFully stays FALSE — a
// fact about OUR WORK — which gates all negative inference until the full
// list is entered (MODEL-SPEC.md §4.5). Rows below are the enacted changes
// whose extents are known and in coverage; changes with unknown extents
// (Lugo→5th, Short→4th) stay banked in the omnibus files.

module.exports = {
  id: "ord-4093",
  title: "Ordinance No. 4093 (N.S.), the Feb. 1897 citywide street renaming (adopted Feb. 23, signed Feb. 26, 1897; Ordinance Book IV p. 337 — full text pending; changes as reported in the Los Angeles Herald and the council minutes)",
  shortTitle: "Ord. 4093, the Feb. 1897 citywide renaming",
  url: "https://cdnc.ucr.edu/?a=d&d=LAH18970224.2.20",
  transcription: "omnibus-1897-renaming-council-minutes.md",

  date: { on: "1897-02-23" },
  form: "textual",
  type: "ordinance",
  attests: "built-by",              // a renamed street existed to be renamed
  completeness: "exhaustive-in-scope",
  // Scope = the 1897 city limits (rough rectangle; also the honest scope
  // limit on its completeness — §4.4).
  coverage: [[34.135, -118.325], [34.135, -118.155],
             [33.995, -118.155], [33.995, -118.325]],
  sweptFully: false,                // full 326-item list not yet in hand
  sweptFor: ["Figueroa Street", "Boylston Street", "Georgia Street", "Central Avenue"],
  readBy: "human",

  rows: [
    // Pearl → Figueroa, "being a continuation of that thoroughfare" — the
    // mechanism is stated in the document's own words, so it goes here (§3).
    { kind: "change", from: "pearl", to: "figueroa-gov",
      street: "Figueroa Street", fromCross: null, toCross: "Pico Boulevard",
      mechanism: "transfer" },

    // The original Figueroa (c. 1853–57, a few blocks west) simultaneously
    // renamed: the Feb. 2 draft said "De La Guerra"; the Feb. 23 amendments
    // made it Boylston. De La Guerra was only ever draft text.
    { kind: "change", from: "figueroa-gov", to: "boylston",
      street: "Boylston Street", fromCross: null, toCross: null },

    // Georgia Bell → Georgia: a documented RESPELLING within one entity (the
    // council compromise revived the street's own pre-1889 name; Major Bell
    // accepted and dropped his court threat). from === to marks it as a
    // spelling transition, pinning the boundary between spelling periods 2
    // and 3; toForm says which form took effect.
    { kind: "change", from: "georgia-bell", to: "georgia-bell",
      toForm: "Georgia Street",
      street: "Georgia Street", fromCross: null, toCross: null },

    // Vine (1st–2nd) and Wolfskill (south of 2nd) → Central Avenue.
    { kind: "change", from: "vine-central", to: "central-ave",
      street: "Central Avenue", fromCross: "1st Street", toCross: "2nd Street" },

    { kind: "change", from: "wolfskill-ave", to: "central-ave",
      street: "Central Avenue", fromCross: "2nd Street", toCross: null }
  ]
};
