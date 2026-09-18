// ORDINANCE NO. 171586 — "An Ordinance of The City of Los Angeles changing the
// name of San Pedro Street between Temple Street and 1st Street and establishing
// the same as Judge John Aiso Street." Passed Apr. 23, 1997, approved by Mayor
// Richard Riordan Apr. 25, 1997; effective on publication. Council File 97-0429.
//
// The Clerk's index: initiated by the Bureau of Engineering, referred Mar. 13,
// 1997; on Apr. 23, 1997 the Council adopted the Public Works Committee report
// "to CHANGE the name of San Pedro Street between Temple Street and 1st Street,
// shown colored red on Exhibit "A", and that it be ESTABLISHED as Judge John
// Aiso Street" and presented and adopted the ordinance. The Clerk's own record
// of the ordinance PDF is dated May 6, 1997, which may be the publication; not
// verified, so not used.
//
// The legal description is the Engineer's: "the first northeast/ southwest
// trending public street southerly of Los Angeles Street between Temple Street
// and 1st Street", description approved Nov. 21, 1996. EXHIBIT "A" — the map with
// the stretch coloured red — is in the complete council file (18 MB), not in the
// ordinance PDF: https://cityclerk.lacity.org/onlinedocs/1997/97-0429.pdf
//
// PROVENANCE. Read by an instance, 2026-09-18, from the City Clerk's PDF (two
// pages), rendered and read and checked against its OCR layer. The PDF is in this
// folder as ord-171586.pdf (downloaded by Kenny 2026-09-18; the Clerk's host
// refuses both shells), with 150 dpi page renders ord-171586-p1.png and -p2.png.
// Source:
// https://cityclerk.lacity.org/onlinedocs/1997/97-0429_ORD_171586_05-06-1997.pdf
// (51,928 bytes, sha256 581c3503d047109a…). Index record:
// https://cityclerk.lacity.org/lacityclerkconnect/index.cfm?fa=ccfi.viewrecord&cfnumber=97-0429

module.exports = {
  id: "ord-171586",
  title: "Ordinance No. 171586, “An Ordinance of The City of Los Angeles changing the name of San Pedro Street between Temple Street and 1st Street and establishing the same as Judge John Aiso Street” — passed Apr. 23, 1997, approved Apr. 25, 1997 (Council File 97-0429)",
  shortTitle: "Ord. 171586, San Pedro Street to Judge John Aiso Street",
  url: "https://cityclerk.lacity.org/onlinedocs/1997/97-0429_ORD_171586_05-06-1997.pdf",
  scan: "documents/ord-171586/ord-171586.pdf",   // page renders beside it: ord-171586-p1.png, ord-171586-p2.png (150 dpi)
  transcription: null,

  date: { on: "1997-04-23" },
  recorded: "1997-04-25",
  form: "textual",
  type: "ordinance",
  attests: "built-by",
  completeness: "exhaustive-in-scope",
  // A box around the one block named, Temple to 1st, with margin.
  coverage: [[34.0540, -118.2420], [34.0540, -118.2380],
             [34.0495, -118.2380], [34.0495, -118.2420]],
  sweptFully: false,                // read in full by an instance; the sweep is Kenny's (rule 5)
  sweptFor: [],
  readBy: "instance",

  excerpts: [
    { id: "title",
      text: "An Ordinance of The City of Los Angeles changing the name of San Pedro Street " +
            "between Temple Street and 1st Street and establishing the same as Judge John " +
            "Aiso Street" },
    { id: "sec-1",
      text: "Section 1. The City Council of The City of Los Angeles finds that the public " +
            "interest, convenience and necessity require that the name of that certain " +
            "public street 80 feet and variable in width, being the first northeast/ " +
            "southwest trending public street southerly of Los Angeles Street between " +
            "Temple Street and 1st Street which , or any portion of which, may be or may " +
            "have been named or known as or called San Pedro Street be and the same is " +
            "hereby changed to and established as Judge John Aiso Street." },
    { id: "sec-2",
      text: "Section 2. Pursuant to the provisions of Section 281 of the Charter of The City " +
            "of Los Angeles, this ordinance shall become effective immediately upon publication." },
    { id: "certification",
      text: "I hereby certify that the foregoing ordinance was passed by the Council of the " +
            "City of Los Angeles, at its meeting of APR 23 1997. J. MICHAEL CAREY, City Clerk, " +
            "… Approved APR 25 1997 … Mayor. … File No. 97-0429",
      note: "Printed form with stamped dates; signatures elided. Approved as to form Dec. 3, 1996." }
  ],

  rows: [
    // QUALIFIED AND RESOLVED — the northernmost block of San Pedro. Both anchors
    // are 0 m crossings of modern Judge John Aiso Street (node intersect.js).
    { kind: "change", from: "san-pedro", to: "judge-john-aiso-street",
      scope: "extent",
      street: "Judge John Aiso Street", fromCross: "Temple Street", toCross: "1st Street",
      wording: "the name of San Pedro Street between Temple Street and 1st Street",
      says: ["title", "sec-1", "certification"],
      mechanism: "renaming",
      confirmed: true,   // Kenny, 2026-09-18
      note: "Ordinance No. 171586, passed Apr. 23, 1997 and approved Apr. 25, 1997; in force on publication." }
  ]
};
