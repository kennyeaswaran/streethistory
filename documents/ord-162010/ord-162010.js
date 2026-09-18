// ORDINANCE NO. 162010 — "An Ordinance of the City of Los Angeles changing the
// name of Weller Street between 1st Street and 2nd Street and establishing the
// same as Astronaut Ellison S. Onizuka Street." Introduced Feb. 3, 1987, passed
// Feb. 10, 1987, approved by Mayor Tom Bradley Feb. 12, 1987. Council File
// 86-0259.
//
// ★ THE DATE IS 1987, NOT 1988. The legacy map and LAPL said 1988; Kines's
// "a year after the tragedy" was right. The Clerk's index for CF 86-0259 has the
// whole path: Mayor Bradley's request Feb. 7, 1986 (a week after Challenger);
// the Engineer asked for a public hearing because objections to the change had
// been received (Jul. 7, 1986); the Public Works Committee report adopted after
// that hearing Oct. 15, 1986; the ordinance adopted Feb. 10, 1987.
//
// ⚠ "THE FIRST STREET WEST OF LOS ANGELES STREET". That is what Sec. 1 says, and
// on the modern extract the street is EAST of Los Angeles Street (Onizuka × 1st
// is at lng -118.2419; Los Angeles × 1st at -118.2424). The title and the named
// cross streets are unambiguous, so the row rests on those; the directional
// phrase is transcribed as printed and not relied on. Kenny: worth a look at the
// Engineer's report in the full council file, which would show the exhibit map.
//
// ⚠ PUBLICATION DATE NOT READ. Sec. 2 makes it effective thirty days after
// publication. The certification page carries a handwritten "D 354462 2/20"
// beside the mayor's signature, which looks like a publication reference of
// Feb. 20, 1987 but is not labelled as one. Not used.
//
// PROVENANCE. Read by an instance, 2026-09-18, from the City Clerk's PDF (two
// pages: a JBIG2 scan with a hidden OCR layer), rendered and read page by page
// and checked against the OCR. The PDF is in this folder as
// ord-162010.pdf (downloaded by Kenny 2026-09-18; the Clerk's host refuses both
// shells), with 150 dpi page renders ord-162010-p1.png and -p2.png. Source:
// https://cityclerk.lacity.org/onlinedocs/1986/86-0259_ORD_162010_02-10-1987.pdf
// (44,217 bytes, sha256 4684e2eb8140f6f0…). Council file index record:
// https://cityclerk.lacity.org/lacityclerkconnect/index.cfm?fa=ccfi.viewrecord&cfnumber=86-0259

module.exports = {
  id: "ord-162010",
  title: "Ordinance No. 162010, “An Ordinance of the City of Los Angeles changing the name of Weller Street between 1st Street and 2nd Street and establishing the same as Astronaut Ellison S. Onizuka Street” — passed Feb. 10, 1987, approved Feb. 12, 1987 (Council File 86-0259)",
  shortTitle: "Ord. 162010, Weller Street to Onizuka Street",
  url: "https://cityclerk.lacity.org/onlinedocs/1986/86-0259_ORD_162010_02-10-1987.pdf",
  scan: "documents/ord-162010/ord-162010.pdf",   // page renders beside it: ord-162010-p1.png, ord-162010-p2.png (150 dpi)
  transcription: null,

  // §4: `date` is the council's passage. Approval Feb. 12, 1987; publication
  // not read (see header).
  date: { on: "1987-02-10" },
  recorded: "1987-02-12",
  form: "textual",
  type: "ordinance",
  attests: "built-by",
  completeness: "exhaustive-in-scope",
  // A box around the one block the ordinance names, 1st to 2nd, with margin.
  // The scope of the instrument, not a claim about anything outside it.
  coverage: [[34.0525, -118.2440], [34.0525, -118.2395],
             [34.0480, -118.2395], [34.0480, -118.2440]],
  sweptFully: false,                // read in full by an instance; the sweep is Kenny's (rule 5)
  sweptFor: [],
  readBy: "instance",

  excerpts: [
    { id: "title",
      text: "An Ordinance of the City of Los Angeles changing the name of Weller Street " +
            "between 1st Street and 2nd Street and establishing the same as Astronaut " +
            "Ellison S. Onizuka Street." },
    { id: "sec-1",
      text: "Section 1. The City Council of the City of Los Angeles finds that the public " +
            "interest, convenience and necessity require that the name of that certain " +
            "public street, 60 feet wide, being the first street west of Los Angeles Street " +
            "lying between 1st Street and 2nd Street which, or any portion of which, may be " +
            "or may have been named or known as or called Weller Street be and the same is " +
            "hereby changed to and established as Astronaut Ellison S. Onizuka Street.",
      note: "\"west of Los Angeles Street\" as printed; the modern street lies east of it. See the header." },
    { id: "sec-2",
      text: "Sec. 2. This Ordinance shall become effective thirty days after publication." },
    { id: "certification",
      text: "I hereby certify that the foregoing ordinance was introduced at the meeting of " +
            "the Council of the City of Los Angeles of FEB 3 1987 and was passed at its " +
            "meeting of FEB 10 1987. ELIAS MARTINEZ, City Clerk … Approved FEB 12 1987 " +
            "… Mayor. File No. 86-0259",
      note: "Printed form with stamped dates; the deputy's and Mayor Bradley's signatures are elided." }
  ],

  rows: [
    // QUALIFIED AND RESOLVED. The ordinance names a stretch (1st to 2nd), so
    // `extent`, not `whole-name`, even though that stretch is probably all of
    // Weller Street: RENAMING-SOURCES §2c — never read "unqualified" into an
    // instrument that states an extent. Both anchors are 0-12 m crossings of the
    // modern street (node intersect.js).
    { kind: "change", from: "weller-street", to: "astronaut-ellison-s-onizuka-street",
      scope: "extent",
      street: "Astronaut Ellison S Onizuka Street", fromCross: "1st Street", toCross: "2nd Street",
      wording: "the name of Weller Street between 1st Street and 2nd Street",
      says: ["title", "sec-1", "certification"],
      mechanism: "renaming",
      confirmed: true,   // Kenny, 2026-09-18
      note: "Ordinance No. 162010, passed Feb. 10, 1987 and approved Feb. 12, 1987; in force thirty days after publication." }
  ]
};
