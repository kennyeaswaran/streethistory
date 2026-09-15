// legacy/accepted-differences.js — findings of `node check-legacy.js` that a
// PERSON has looked at and waived, each with the reason. An entry here is the
// only thing that turns a HARD finding green; the harness never decides for
// itself. Match on the legacy street key, the legacy segment label ("*" for
// a whole-street entry, or for every segment of that street), and the check
// (coverage / names / namesake / dates / sources / street).
//
// Seed (2026-09-15): the 3rd Street differences accounted on 2026-08-24 in
// MODEL-IMPLEMENTATION.md were about hedges, notes and `how` — things this
// harness does not check — so nothing is waived yet.
module.exports = [
  // { street: "3rd Street", label: "west of Bixel", check: "coverage",
  //   reason: "Crown Hill stretch: the only sheet is tr0015-166a, whose 3rd St is Miramar (rule 2); nothing letters 3rd here yet" },
];
