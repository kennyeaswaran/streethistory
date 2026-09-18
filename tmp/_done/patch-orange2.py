# -*- coding: utf-8 -*-
"""The entity side of the Orange/Wilshire pass, plus two findings that fell out
of reading the same two sheets."""
import io, re, sys

P = "names.js"
src = io.open(P, encoding="utf-8").read()


def block_span(s, eid):
    m = re.search(r'^  "%s": \{$' % re.escape(eid), s, re.M)
    if not m:
        sys.exit("entity not found: " + eid)
    end = s.find("\n  },", m.end())
    return m.start(), end + len("\n  },")


def append(blk, field, text, eid):
    pat = '\n    %s: "' % field
    i = blk.find(pat)
    if i < 0 or blk.find(pat, i + 1) >= 0:
        sys.exit("%s: %s not found exactly once" % (eid, field))
    k = i + 1
    while True:
        k = blk.find('",\n', k)
        if k < 0:
            sys.exit("%s: %s has no terminator" % (eid, field))
        if re.match(r'    [A-Za-z_][A-Za-z0-9_]*:|  \},', blk[k + 3:]):
            break
        k += 1
    if blk.count("\n", i, k) == 0:
        return blk[:k] + " " + text + blk[k:]
    return blk[:k + 1] + ' +\n      "' + text + blk[k:]


def add_sources(blk, entries, eid):
    body = "\n".join('      { title: "%s",\n        url: "%s" },' % e for e in entries)
    if "    sources: [],\n" in blk:
        return blk.replace("    sources: [],\n", "    sources: [\n" + body.rstrip(",") + "\n    ],\n", 1)
    if "    sources: [\n" in blk:
        return blk.replace("    sources: [\n", "    sources: [\n" + body + "\n", 1)
    sys.exit(eid + ": no sources array")


OPS = []

OPS.append(("orange-st-wilshire", [
 ("append", "internalNote",
  "★★★ THE ORDINANCE NUMBERS ARE ON THE PLATS, found 2026-09-18 when Kenny asked about the "
  "dual-labelled sheets. Two county copies carry the whole 1908 episode written on and then struck "
  "off, and between them they number it: documents/mr005-566 (recorded 1889) and "
  "documents/mr055-014 (surveyed 1893) both show a cursive “Wilshire … Blvd.” overwrite "
  "tagged “ORD 16790”, STRUCK THROUGH, with an unstruck “ord.16915” / “ord 16916” "
  "beside the surviving Orange. mr005-566 then carries a clean marginal note in a later hand: "
  "“Orange St. changed to Wilshire Blvd. ORD. 48435”. ★ THE READING, which fits the "
  "newspapers exactly: ORD. 16790 is the ordinance of about June 1908 that made this street "
  "Wilshire Boulevard and put the sign posts up; ORD. 16915 and 16916 are the December 1908 repeal "
  "that restored Orange, which is why they are unstruck and the Wilshire ink is not; and ORD. 48435 "
  "is the April 1924 change that stuck. The numbers are consecutive-looking in the right places and "
  "the annotations behave exactly as a recorder would make them behave. ⚠ BUT THE NUMBERS ARE "
  "NOT YET DATED FROM A SOURCE — which ordinance is which is inferred from where the pen struck, "
  "not from the ordinance index. The City Clerk's index would settle all four in one lookup and it "
  "is a far better lead than any of the newspaper searches on this street. ⚠ TWO NUMBERS FOR ONE "
  "REPEAL is the loose end: 16915 and 16916 are on different sheets covering different stretches, "
  "so they may be consecutive ordinances for adjacent segments rather than one act. "
  "✔ ROW ASSIGNMENT SETTLED, on Kenny's rule — a sheet showing both names goes to the entity in "
  "force at the SHEET'S date. mr005-566 (1889) and mr055-014 (1893) were repointed from `wilshire` "
  "to this entity on 2026-09-18. Both are doubly clear: not only was Orange the name at the time, "
  "the Wilshire annotation is the half that was cancelled."),
]))

OPS.append(("wilshire", [
 ("append", "internalNote",
  "★ THE 1908 AND 1924 ORDINANCE NUMBERS ARE NOW IN HAND, from plat annotations rather than from "
  "the newspapers: ORD. 16790 for the June 1908 change to Wilshire Boulevard, ORD. 16915/16916 for "
  "the December 1908 repeal, and ORD. 48435 for the April 1924 change that held. See "
  "`orange-st-wilshire`, which carries the evidence and the caveats. ⚠ NONE OF THESE APPLIES TO "
  "THE ORIGINAL NAMING, which is the Dec. 1897 change of Sixth Street west of Hoover "
  "(documents/lah-1897-12-07) and belongs to different ground — the numbers above are all about "
  "the downtown extension over Orange Street. ✔ AND TWO SHEETS WERE REPOINTED AWAY FROM THIS "
  "ENTITY on 2026-09-18: documents/mr005-566 and documents/mr055-014 letter Orange with a STRUCK-OUT "
  "Wilshire overwrite, and belong to `orange-st-wilshire` by the name in force at the sheet's date."),
]))

OPS.append(("st-paul-avenue", [
 ("sources", [("Recorded map: “Plat of Subdivision of a portion of Lot 1 Block 37 Hancocks Surv. L.A. City, made at request of the Vestry of St. Paul's P. E. Church”, recorded May 9, 1889 (M.R. 5-566) — the sheet's own title block",
               "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-566.pdf")]),
 ("append", "note",
  "A subdivision of the ground this street later crossed was made in May 1889 at the request of the "
  "Vestry of St. Paul's Protestant Episcopal Church (documents/mr005-566), which is the only one of "
  "the three readings with a documented presence on the spot."),
 ("append", "internalNote",
  "★★ THE CHURCH READING IS NO LONGER ONE OF THREE EQUALS, found 2026-09-18 on a sheet already "
  "in the corpus. documents/mr005-566's title block reads “Plat of Subdivision of a portion of "
  "Lot 1 Block 37 Hancocks Surv. L.A. City, MADE AT REQUEST OF THE VESTRY OF ST. PAUL'S P. E. "
  "CHURCH” — and that sheet covers this exact ground: its rows carry Saint Paul Avenue and Saint "
  "Paul Place as `absent`, meaning the plat covers the ground and draws no roadway there yet. So the "
  "church subdivided the land in 1889 and the streets were laid across it afterwards, which is the "
  "ordinary shape of a landowner-named street. ⚠ THE ENTITY IS LEFT AT `none` DELIBERATELY, for "
  "Kenny to grade: the sheet attests the church's ROLE on the ground, not the naming, and promoting "
  "this to `inferred` (or `eponymous` on the parker-drive precedent, since the plat names the "
  "requesting body) is a judgement about how much a commissioning vestry counts as the namesake. "
  "What is now certain is that the apostle and the Minnesota city are no longer equal candidates. "
  "⭐ NEXT: whether the church stood on this ground or merely owned it, and when the streets were "
  "cut — documents/mr078-055 letters the name and is the place to look."),
]))

OPS.append(("nichols-ave", [
 ("append", "internalNote",
  "★★ A FOURTH PLACEMENT, AND THE FIRST ONE IN A DEED. documents/mr055-014's title block "
  "reads “Reference to a deed from JOHN G. NICHOLS to Charles M. Wright, recorded in Book 34 page "
  "455 of Deeds, the Records of Los Angeles County” — so the mayor is not merely described as a "
  "prior owner by Kines, he is the grantor of record for part of this ground, with a book and page. "
  "⭐ THAT DEED IS A FINDABLE OBJECT (Deeds 34/455) and would give the date and extent of his "
  "holding. With Kines on the adjoining Crown Hill land, the 1887 “Nichols' Addition to West Los "
  "Angeles”, and “Nichols” lettered as an adjoining owner on documents/mr005-405, that is "
  "four placements. Still nothing states the naming, so `inferred` stands — but the anchor is now "
  "about as well founded as an unstated one gets."),
]))


def apply(s, eid, ops):
    a, b = block_span(s, eid)
    blk = s[a:b]
    for op in ops:
        if op[0] == "sources":
            blk = add_sources(blk, op[1], eid)
        elif op[0] == "append":
            blk = append(blk, op[1], op[2], eid)
        else:
            sys.exit("unknown op")
    return s[:a] + blk + s[b:]


for eid, ops in OPS:
    src = apply(src, eid, ops)

io.open(P, "w", encoding="utf-8").write(src)
print("patched %d entities" % len(OPS))
