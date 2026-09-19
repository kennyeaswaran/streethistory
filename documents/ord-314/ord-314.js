// ★★ ORDINANCE NO. 314 (OLD SERIES) — "An Ordinance changing the names of
// certain streets." Adopted May 16, 1887, approved May 19, published in the Los
// Angeles Daily Tribune May 25, 1887. **SIX renamings**, all in Section 1, and
// none of them previously known to this project.
//
//   a. ALISO AVENUE and its extension, between its intersection with First street
//      and the eastern boundary of the city  →  FIRST STREET
//   b. PLEASANT STREET, between Aliso street and the intersection of First street
//      and Aliso avenue  →  ALISO STREET
//   c. BOSTON STREET, in block 59 and block 60 of Hancock survey  →  BREED STREET
//   d. BREED STREET  →  BIRD STREET
//   e. CARLISLE STREET, between Pine street and Walnut avenue  →  LOS ANGELES STREET
//   f. LOS ANGELES STREET, between Washington street and its southern boundary
//      →  CARLISLE STREET
//
// ⭐⭐ THIS IS WHERE FIRST STREET GOT ITS EAST SIDE. Clause (a) is the act that
// carried the downtown numbered grid across the river: Aliso Avenue, the old road
// out to the Aliso, became First Street from its junction with First all the way
// to the city's eastern boundary. `first-street`'s prose says only that "since
// 1883 1st Street has divided north from south in Los Angeles addresses"; this is
// the day the name reached Boyle Heights.
//
// ⚠⚠ AND IT CONTAINS TWO SWAPS, WHICH IS WHY IT IS DANGEROUS TO READ QUICKLY.
// (c) makes Boston into Breed while (d) makes Breed into Bird; (e) makes part of
// Carlisle into Los Angeles Street while (f) makes part of Los Angeles Street into
// Carlisle. Applied in sequence the results differ from applying them at once, and
// the ordinance does not say which it means. Anyone writing rows from this must
// decide that first.
//
// ⚠⚠⚠ NO ROWS, AND THE ROW RULE IS THE REASON. Of the twelve names in the six
// clauses, `names.js` has entities for exactly three — `first-street`,
// `los-angeles-street` and `boston-street` — and the third is the WRONG BOSTON:
// `boston-street` is Prudent Beaudry's Park-tract Boston in Echo Park, one of his
// patriotic-American set with Centennial, Custer and Philadelphia. This
// ordinance's Boston street is "in block 59 and block 60 of Hancock survey",
// which is Boyle Heights. Merging them would be exactly the error CLAUDE.md
// rule 2 exists to prevent. Aliso avenue, Aliso street, Pleasant street, Breed,
// Bird, Carlisle, Pine street and Walnut avenue have no entities at all, and
// almost none of this ground is in the project's `dtla` OSM extract. See TASK.md.
//
// ⚠ SERIES. Ordinance No. 314 of the OLD SERIES. documents/teed-1887/FINDINGS.md §9.
//
// PROVENANCE. Read from a contrast-normalised 200 dpi render of PDF page 297 of
// documents/teed-1887/teed-1887-vol3.pdf (printed p. 290). Transcribed by eye;
// full text in ord-314-transcription.md. ⚠ One reader, not two.

module.exports = {
  id: "ord-314",
  title: "Ordinance No. 314 (Old Series), “An Ordinance changing the names of certain streets” (Aliso avenue to First street; Pleasant to Aliso; Boston to Breed; Breed to Bird; Carlisle to Los Angeles; Los Angeles to Carlisle) — adopted by the Council of the City of Los Angeles May 16, 1887, approved May 19, published May 25, 1887; printed in Freeman G. Teed, comp., Compiled Ordinances and Resolutions of the City of Los Angeles, Vol. III (1887), p. 290",
  shortTitle: "Ord. 314 (Old Series), six renamings east of the river (1887)",
  url: "https://link.gale.com/apps/doc/DT0106633769/MMLP?u=uclosangeles",
  scan: "documents/teed-1887/teed-1887-vol3.pdf",
  transcription: "documents/ord-314/ord-314-transcription.md",

  date: { on: "1887-05-16" },
  recorded: "1887",
  form: "textual",
  type: "ordinance",
  attests: "built-by",
  completeness: "exhaustive-in-scope",
  coverage: [[34.135, -118.325], [34.135, -118.155],
             [33.995, -118.155], [33.995, -118.325]],
  sweptFully: true,
  sweptFor: [],
  readBy: "instance",

  excerpts: [
    { id: "title",
      text: "An Ordinance changing the names of certain streets.",
      note: "The third ordinance in this volume with this title, after Nos. 207 and 242." },

    { id: "sec-1-a-aliso-first",
      text: "Section 1. That that portion of that certain street known as Aliso avenue, together with " +
            "its extension between its intersection with First street and the eastern boundary of the " +
            "city, shall be hereafter known as First street.",
      note: "⭐⭐ The numbered grid crosses the river. Aliso Avenue — the old road to the Aliso, and " +
            "the street half a dozen resolutions in this volume grade as “Aliso avenue and extension” " +
            "— becomes First Street from its own junction with First all the way to the eastern city " +
            "line. A qualified change with both ends stated, and the ground is Boyle Heights." },

    { id: "sec-1-b-pleasant-aliso",
      text: "That that portion of Pleasant street between Aliso street and the intersection of First " +
            "street and Aliso avenue shall hereafter be known as Aliso street.",
      note: "The counterpart of (a): with Aliso Avenue gone, the Aliso name is moved onto the " +
            "stretch of Pleasant Street that connects the old Aliso street to the new First street " +
            "junction. Res. 341, 406 and 428 of this volume grade “Pleasant street, from Aliso " +
            "avenue”, and Res. 492 “from Kearney street”." },

    { id: "sec-1-c-boston-breed",
      text: "That that certain street known as Boston street, in block 59 and block 60 of Hancock " +
            "survey, shall hereafter be known as Breed street.",
      note: "⚠ NOT `boston-street`, which is Beaudry's Park-tract Boston in Echo Park. This one is in " +
            "blocks 59 and 60 of Hancock's survey — Boyle Heights, where modern Breed Street runs. A " +
            "second Boston Street, and a second entity if anyone ever needs it." },

    { id: "sec-1-d-breed-bird",
      text: "That that certain street known of Breed street shall hereafter be known as Bird street.",
      note: "⚠⚠ THE SWAP. The Breed Street that existed before this ordinance becomes Bird Street in " +
            "the same section that makes Boston into Breed. “known of” is the book's slip for " +
            "“known as”. Unqualified — no stretch at all." },

    { id: "sec-1-e-carlisle-los-angeles",
      text: "That that portion of the certain street known as Carlisle street, between Pine street " +
            "and Walnut avenue, shall hereafter be known as Los Angeles street.",
      note: "⭐ A southward extension of the Los Angeles Street name, by a qualified change with two " +
            "named ends. The volume is full of Los Angeles Street work — Ords. 124, 234, 245, 246, " +
            "280 and Res. 316 — and this is the one that moves the NAME." },

    { id: "sec-1-f-los-angeles-carlisle",
      text: "That that portion of Los Angeles street, between Washington street and its sounthern " +
            "boundary, be hereafter known as Carlisle street.",
      note: "⚠⚠ THE SECOND SWAP, and the mirror of (e): the Carlisle name moves onto the stretch of " +
            "Los Angeles Street south of Washington. “sounthern” is the book's. “its southern " +
            "boundary” is ambiguous between the street's and the city's; the city's southern boundary " +
            "is the likelier reading and neither is stated." },

    { id: "sec-2-publication",
      text: "Sec. 2. The Clerk of the Council shall certify to the passage of this ordinance, and " +
            "shall cause the same to be published once in the Los Angeles Daily TRIBUNE, and " +
            "thereupon and thereafter it shall take effect and be in force." },

    { id: "certification",
      text: "I hereby certify that the forgoing ordinance was adopted by the Council of the City of " +
            "Los Angeles, at its meeting of May 16, 1887. FREEMAN G. TEED, Clerk of the Council of " +
            "the City of Los Angeles. Approved this 19th day of May, 1887. W. H. WORKMAN, Mayor. " +
            "Published May 25, 1887.",
      note: "Teed signs as Clerk; he compiled this volume in the same year. Ordinances 313 and 315, " +
            "on the leaves either side, were adopted at the same May 1887 meetings." }
  ],

  // Deliberately empty: of the twelve names in the six clauses, only three have
  // entities and one of those three is a different street that spells alike.
  // See TASK.md.
  rows: []
};
