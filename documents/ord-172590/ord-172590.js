// ORDINANCE NO. 172590 — "An Ordinance of The City of Los Angeles changing the
// name of 9th Street between Figueroa Street and Western Avenue and establishing
// the same as James M. Wood Boulevard." Passed May 11, 1999, approved by the
// Acting Mayor May 14, 1999; effective on publication. Council File 97-1566.
//
// ★ THE DATE IS 1999, NOT 1997. 1997 is the MOTION: Hernandez (Alarcon for
// Hernandez) moved on Aug. 29, 1997 that the Engineer initiate the change. The
// Engineer reported Jan. 13, 1999; the Council adopted the ordinance May 11, 1999.
// The legacy map, Kines and the entity's note all carried 1997.
//
// ★ AN ATTEMPTED EXTENSION THAT FAILED, from the same council file. On Sept. 8,
// 1999 Walters and Hernandez moved to carry the name east from Figueroa to San
// Julian Street, and to rename 9th between San Julian and Gladys Avenue to
// Olympic Boulevard, because "Presently 9th St becomes Olympic Blvd at Gladys
// Ave approximately midway between San Pedro St and Central Ave." On Dec. 7,
// 1999 the Council RECEIVED AND FILED that motion — the extension "would create
// a hardship in the community". So nothing east of Figueroa changed, and no row
// is written for it. The motion's aside about Gladys is a 1999 statement of where
// 9th ended and Olympic began east of downtown: a lead for the ninth-street →
// olympic-boulevard absorption, not an instrument (handbook/research-leads.md).
//
// Western Avenue lies beyond the OSM extract's west edge, so the row's west end
// is `null`: the extract's own end of modern James M. Wood Boulevard, all of it
// inside the stated stretch — the same shape as documents/lae-1924-04-12.
//
// PROVENANCE. Read by an instance, 2026-09-18, from the City Clerk's PDF (two
// pages), rendered and read and checked against its OCR layer. The PDF is in this
// folder as ord-172590.pdf (downloaded by Kenny 2026-09-18; the Clerk's host
// refuses both shells), with 150 dpi page renders ord-172590-p1.png and -p2.png.
// Source:
// https://cityclerk.lacity.org/onlinedocs/1997/97-1566_ORD_172590_05-21-1999.pdf
// (41,446 bytes, sha256 f8d365d65860c339…). Index record:
// https://cityclerk.lacity.org/lacityclerkconnect/index.cfm?fa=ccfi.viewrecord&cfnumber=97-1566
// The complete council file (70 MB, with the Engineer's report) is
// https://cityclerk.lacity.org/onlinedocs/1997/97-1566.pdf

module.exports = {
  id: "ord-172590",
  title: "Ordinance No. 172590, “An Ordinance of The City of Los Angeles changing the name of 9th Street between Figueroa Street and Western Avenue and establishing the same as James M. Wood Boulevard” — passed May 11, 1999, approved May 14, 1999 (Council File 97-1566)",
  shortTitle: "Ord. 172590, 9th Street to James M. Wood Boulevard",
  url: "https://cityclerk.lacity.org/onlinedocs/1997/97-1566_ORD_172590_05-21-1999.pdf",
  scan: "documents/ord-172590/ord-172590.pdf",   // page renders beside it: ord-172590-p1.png, ord-172590-p2.png (150 dpi)
  transcription: null,

  date: { on: "1999-05-11" },
  recorded: "1999-05-14",
  form: "textual",
  type: "ordinance",
  attests: "built-by",
  completeness: "exhaustive-in-scope",
  // Figueroa to Western, with margin.
  coverage: [[34.0620, -118.3110], [34.0620, -118.2600],
             [34.0420, -118.2600], [34.0420, -118.3110]],
  sweptFully: false,                // read in full by an instance; the sweep is Kenny's (rule 5)
  sweptFor: [],
  readBy: "instance",

  excerpts: [
    { id: "title",
      text: "An Ordinance of The City of Los Angeles changing the name of 9th Street between " +
            "Figueroa Street and Western Avenue and establishing the same as James M. Wood " +
            "Boulevard." },
    { id: "sec-1",
      text: "Section 1. The City Council of The City of Los Angeles finds that the public " +
            "interest, convenience and necessity require that the name of that certain " +
            "public street, of variable width, lying between Figueroa Street and Western " +
            "Avenue which, or any portion of which, may be or may have been named or known " +
            "as or called 9th Street be and the same is hereby established as James M. Wood " +
            "Boulevard." },
    { id: "sec-2",
      text: "Sec. 2. Pursuant to the provisions of Section 281 of the Charter of The City of " +
            "Los Angeles, this ordinance shall become effective immediately upon publication." },
    { id: "certification",
      text: "I hereby certify that the foregoing ordinance was passed by the Council of the " +
            "City of Los Angeles, at its meeting of MAY 11 1999. J. MICHAEL CAREY, City Clerk, " +
            "… Approved MAY 14 1999 … Mayor. ACTING … File No. 97-1566",
      note: "Printed form with stamped dates; signatures elided. Description approved by the City Engineer Nov. 10, 1998; approved as to form Nov. 17, 1998." }
  ],

  rows: [
    // QUALIFIED AND RESOLVED. Figueroa is a 0 m crossing of modern James M. Wood
    // Boulevard; Western is beyond the extract (header).
    { kind: "change", from: "ninth-street", to: "james-m-wood-boulevard",
      scope: "extent",
      street: "James M Wood Boulevard", fromCross: null, toCross: "Figueroa Street",
      wording: "the name of 9th Street between Figueroa Street and Western Avenue",
      says: ["title", "sec-1", "certification"],
      mechanism: "renaming",
      confirmed: true,   // Kenny, 2026-09-18
      note: "Ordinance No. 172590, passed May 11, 1999 and approved May 14, 1999; in force on publication." }
  ]
};
