# -*- coding: utf-8 -*-
"""Apply the 2026-09-17 title-block reading, the Guinn 1895 paper, the Crown Hill
Chronicles posts and the Diamond Street thread to names.js."""
import io, re, sys

P = "names.js"
src = io.open(P, encoding="utf-8").read()


def block_span(s, eid):
    m = re.search(r'^  "%s": \{$' % re.escape(eid), s, re.M)
    if not m:
        sys.exit("entity not found: " + eid)
    end = s.find("\n  },", m.end())
    if end < 0:
        sys.exit("block end not found: " + eid)
    return m.start(), end + len("\n  },")


def _norm(t):
    return t.replace("’", "'")


import re as _re


def append(blk, field, text, eid):
    """Append to a string field, whether it is one line or a `"a" + "b"` chain."""
    pat = '\n    %s: "' % field
    i = blk.find(pat)
    if i < 0 or blk.find(pat, i + 1) >= 0:
        sys.exit("%s: %s not found exactly once" % (eid, field))
    # The field's value ends at the first `",` whose next line opens a new key
    # or closes the entity. Anything before that is a continued concatenation.
    k = i + 1
    while True:
        k = blk.find('",\n', k)
        if k < 0:
            sys.exit("%s: %s has no terminator" % (eid, field))
        rest = blk[k + 3:]
        if _re.match(r'    [A-Za-z_][A-Za-z0-9_]*:|  \},', rest):
            break
        k += 1
    if blk.count("\n", i, k) == 0:          # single line: extend it in place
        return blk[:k] + " " + text + blk[k:]
    return blk[:k + 1] + ' +\n      "' + text + blk[k:]


def add_sources(blk, entries, eid):
    body = "\n".join('      { title: "%s",\n        url: "%s" },' % e for e in entries)
    if "    sources: [],\n" in blk:
        return blk.replace("    sources: [],\n",
                           "    sources: [\n" + body.rstrip(",") + "\n    ],\n", 1)
    if "    sources: [\n" in blk:
        return blk.replace("    sources: [\n", "    sources: [\n" + body + "\n", 1)
    sys.exit(eid + ": no sources array")


OPS = []

# ══════════════════════════════════════════ THE BIGELOW TRACT title block
OPS.append(("atchison-st", [
 ("append", "note",
  "The same sheet letters Santa Fe Street along its southern edge, so the railway's whole name — "
  "Atchison, Topeka and Santa Fe — stands on one plat, with Freight Street between them."),
 ("append", "internalNote",
  "★★★ THE SET IS COMPLETE ON THE SHEET, and this was in the corpus all along: mr024-081 already "
  "carries a row inked “SANTA FE ST.” pointed at `santa-fe-ave`. So the plat letters "
  "ATCHISON, TOPEKA, SANTA FE and FREIGHT together, adjoining a depot its own title names. That "
  "moves this from a good `pattern` to about as strong a one as the grade allows, and it means "
  "nobody needs Kines's Pasadena tract to make the argument. ⚠ It also sharpens what Santa Fe "
  "Street is doing here: `santa-fe-ave` is dated to May 1887 by Kines, five months before this "
  "sheet, so Santa Fe was the EXISTING name the tract was laid against and Atchison, Topeka and "
  "Freight are the coinages. ★ THE TITLE BLOCK WAS READ 2026-09-17, from the PDF already in "
  "documents/mr024-081/: recorded Oct. 14, 1887 at 36 min past 3 P.M. “at request of A. W. "
  "FRANCISCO”, Frank A. Gibson County Recorder, by George Bugbee Deputy. See `francisco` — "
  "that is Andrew Wiggins Francisco, already in this file. ⚠ BIGELOW IS STILL UNIDENTIFIED: the "
  "title block names the tract and the requester, not the man it is named for."),
]))

OPS.append(("topeka-st", [
 ("append", "internalNote",
  "★ AND DAVIES STREET IS ON THIS VERY SHEET, read from the plat 2026-09-17 — it is lettered at "
  "the tract's eastern end, beside George Street. So when documents/lah-1888-10-11 proposes "
  "“Topeka St., near river, changed to Davies St.”, the committee is extending a name "
  "already on the block over its neighbour, not coining one. That is the same move it made with "
  "Rouland over Virginia and with Beaudry over Crescent, and it is worth noticing as a habit. "
  "⚠ Neither Davies Street nor George Street is an entity here yet; both are lettered on "
  "documents/mr024-081 and neither carries a row."),
]))

OPS.append(("freight-st", [
 ("append", "internalNote",
  "✔ The title block, read 2026-09-17: “Subdivision of the BIGELOW TRACT adjoining the "
  "California Central Depot Grounds, Los Angeles, Calif. Scale 100=1 inch”, recorded Oct. 14, "
  "1887 at request of A. W. Francisco. The depot is not inferred from the street names; it is in "
  "the tract's own title."),
]))

OPS.append(("francisco", [
 ("append", "internalNote",
  "★★ A DOCUMENTED ACT, found 2026-09-17 in this corpus rather than on the web: the Subdivision of "
  "the Bigelow Tract (documents/mr024-081) was recorded on Oct. 14, 1887 “at request of A. W. "
  "FRANCISCO” — Andrew Wiggins Francisco, four years after he reached Los Angeles and while he "
  "was working in real estate, exactly as Kines describes him. ⚠ THIS DOES NOT MOVE THE NAMESAKE, "
  "which is already `attested`; what it adds is a primary record of the man acting in the city, and "
  "a link between two documents in this corpus that looked unrelated. ⚠ It does NOT make Francisco "
  "the Bigelow Tract's owner — recording a plat at one's request is an agent's act as often as an "
  "owner's, and the tract is named Bigelow, not Francisco."),
]))

# ══════════════════════════════════════════ COLINA PARK title block
OPS.append(("colina-ave", [
 ("append", "internalNote",
  "★★★ THE SUBDIVIDERS ARE NAMED AFTER ALL, AND THEY WERE ON DISK THE WHOLE TIME. The title block "
  "of documents/mr007-036-p2 was read on 2026-09-17 from the PDF already in that folder — which is "
  "a correction to this note's own “NOBODY NAMES THE SUBDIVIDER” above, and a reminder of "
  "CLAUDE.md's downloads-first rule. It reads: “MAP OF COLINA PARK, LOS ANGELES CITY, CAL. "
  "Survey completed in November 1884 by E. T. WRIGHT. Scale 100 feet to one inch”, and "
  "“recorded November 28th 1885 at 45 min past 3 P.M. at request of W. J. BRADSHAW, MRS M. A. "
  "HOADLEY, J. W. ELLIS, W. A. BORING, N. W. STOWELL and H. C. WITMER.” Frank A. Gibson County "
  "Surveyor, by W. B. Prichard Deputy. ★ SIX OWNERS, AND THREE OF THEM ARE ALREADY IN THIS CORPUS: "
  "J. W. ELLIS is the Ellis of the two 1886 “J. W. Ellis' Subdivision” sheets "
  "(documents/mr010-062 and mr010-088) that letter Collado, Silver, Western and Northern; H. C. "
  "WITMER is `witmer-street`, Henry Clayton Witmer, three months before Witmer Street was named in "
  "Jan. 1886; and W. J. BRADSHAW is presumably the Bradshaw of “Kurts & Bradshaw's sub” in "
  "documents/lah-1897-12-07. ⭐ W. A. BORING is worth one search by somebody: William A. Boring "
  "later became a nationally known architect (Boring & Tilton, the Ellis Island immigration "
  "station), and if it is the same man this is him at twenty-six. N. W. STOWELL and MRS M. A. "
  "HOADLEY are untried. ⚠ NONE OF THE SIX EXPLAINS THE SPANISH NAMES, so `pattern` stands unchanged "
  "— what the title block gives is people to chase, not an etymology. ⚠ E. T. WRIGHT surveyed this "
  "AND the Kennedy Tract (documents/mr006-193) — see `bryan-st`."),
]))

OPS.append(("silver-st", [
 ("append", "internalNote",
  "✔ The Colina Park title block, read 2026-09-17, names six owners — Bradshaw, Hoadley, Ellis, "
  "Boring, Stowell and Witmer — and J. W. Ellis is the subdivider of the two 1886 sheets that "
  "re-letter this street. See `colina-ave`. None of them explains the name."),
]))

OPS.append(("gravilla-st", [
 ("append", "internalNote",
  "✔ The tract's title block, read 2026-09-17: surveyed November 1884 by E. T. Wright, recorded "
  "Nov. 28, 1885 at the request of six owners. See `colina-ave`. It says nothing about the street "
  "names, so the Spanish-ground-word reading remains the sheet's own internal evidence."),
]))

# ══════════════════════════════════════════ WITMER
OPS.append(("witmer-street", [
 ("append", "internalNote",
  "★★ HE IS ON THE COLINA PARK TITLE BLOCK, three months before this street was named. "
  "documents/mr007-036-p2 was recorded Nov. 28, 1885 at the request of six owners including "
  "“H. C. WITMER”, and Witmer Street was named in Jan. 1886 — so the family was "
  "subdividing on Crown Hill in company with Bradshaw, Hoadley, Ellis, Boring and Stowell before "
  "it put its own name on a street there. ★★ AND THAT IS WHY WITMER BEAT NICHOLS. "
  "documents/lah-1888-10-11 has the council's committee proposing “Witmer St., Nichols St. and "
  "Logan Ave., changed to NICHOLS St.”; the ground kept Witmer. A family that owned the hill, "
  "ran the cable railway up it and had built its houses on the street was not going to lose the "
  "name to a committee. See `nichols-ave`. ⚠⚠ CROWN HILL CHRONICLES IS A SOURCE TO HANDLE WITH "
  "TONGS. The blog (crownhillchronicles.blogspot.com, 2009) says the Witmers “arrived in "
  "California in 1850 and purchased 900 acres atop a hill near downtown and named it Crown "
  "Hill” and that “Henry and his two siblings constructed large Victorian estates next "
  "door to one another on a dirt road and named it Witmer Street” — the second claim is "
  "consistent with everything here and is the only part worth keeping; the first contradicts "
  "Kines's November 1884 arrival and is not usable. Its own commenters correct the dating of its "
  "photographs by a decade, and Kenny flagged it as unreliable when supplying it. ✔ THE 900 vs 650 "
  "ACRES APPARENT CONFLICT IS NOT ONE: the same blog's oil-boom post says the Witmers owned "
  "“650 of Crown Hill's 900 acres”, which reconciles with Kines."),
]))

# ══════════════════════════════════════════ THE KENNEDY TRACT title block
OPS.append(("bryan-st", [
 ("append", "internalNote",
  "✔ THE TITLE BLOCK WAS READ 2026-09-17 — from the PDF already in documents/mr006-193/, which is "
  "where this note should have looked first — AND IT DOES NOT NAME A KENNEDY. It reads: “MAP "
  "of the KENNEDY TRACT, Los Angeles, Cal. SURVEYED MAY 1884 by E. T. WRIGHT. SCALE 60 FT PER "
  "INCH”, and “recorded Jany 14th 1885 at 59 min past 2 P.M. at request of E. W. "
  "JONES”, Chas E. Miles Co Recorder. So the lead was half right: the sheet gives a surveyor "
  "and a requester, not the man the tract is named for. ★ TWO THINGS TO TAKE FROM IT. (1) E. W. "
  "JONES is a name to chase, and a JONES is also lettered as an adjoining owner on the Truman Tract "
  "sheet a few blocks away (documents/mr005-405) — possibly the same man, possibly a coincidence "
  "of a very common surname. (2) E. T. WRIGHT surveyed this AND Colina Park (`colina-ave`), so one "
  "surveyor's hand is behind two of this batch's tracts; he is not the F. H. Wright of M.R. 5-431 "
  "and not E. T. Wright the county surveyor's office in every year. ⚠ The sheet letters only Bryan, "
  "Lincoln Place, Holmes and Ninth Street, and shows a ZANJA crossing it — no other names to work "
  "with."),
]))

OPS.append(("holmes-st", [
 ("append", "internalNote",
  "✔ The Kennedy Tract title block, read 2026-09-17: surveyed May 1884 by E. T. Wright, recorded "
  "Jan. 14, 1885 at request of E. W. Jones. It names no Kennedy and no Holmes. See `bryan-st`."),
]))

OPS.append(("lincoln-place", [
 ("append", "internalNote",
  "✔ The Kennedy Tract title block, read 2026-09-17, names a surveyor (E. T. Wright) and a "
  "requester (E. W. Jones) and no Kennedy. See `bryan-st`. Nothing on it bears on Lincoln."),
]))

# ══════════════════════════════════════════ THE CLEMENT TRACT title block
OPS.append(("clementina-street", [
 ("append", "internalNote",
  "✔ THE TITLE BLOCK WAS READ 2026-09-17 — from the PDF already in documents/mr017-041/, so the "
  "“NEXT STEP is the sheet itself” above was answerable without leaving the folder — AND "
  "IT DOES NOT NAME A CLEMENT. It reads: “Map of the CLEMENT TRACT situated on First Street in "
  "the City and Co. of Los Angeles, Cal., as surveyed May 1st to 6th 1887 by JOHN GOLDSWORTHY Co. "
  "Sur. VAR 14°30' EAST. Scale 50 feet to an inch”, and “recorded May 25th 1887 at 11:35 "
  "A.M. at request of B. E. DAY” (the initials are cramped; R. E. or P. E. are possible), "
  "Frank A. Gibson County Recorder, by George Bugbee Deputy. ★ SO THE LEAD IS NOW A PERSON, NOT A "
  "SHEET: B. E. Day, and John Goldsworthy the county surveyor. ⚠ A requester is not necessarily an "
  "owner, and the tract is named Clement, not Day — so this neither identifies nor excludes "
  "anybody. ⭐ The sheet also settles the block lettering (A–I) and confirms the six street names "
  "exactly as this corpus has them, which is worth knowing given how much of the batch rests on "
  "them."),
]))

OPS.append(("myers", [
 ("append", "internalNote",
  "✔ The Clement Tract title block, read 2026-09-17: surveyed May 1–6, 1887 by John Goldsworthy, "
  "recorded May 25 at request of B. E. Day. No Clement, no Myers. See `clementina-street`."),
]))

OPS.append(("anderson", [
 ("append", "internalNote",
  "✔ The Clement Tract title block, read 2026-09-17, names a surveyor and a requester and no "
  "Anderson. See `clementina-street`."),
]))

# ══════════════════════════════════════════ THE TRUMAN TRACT title block
OPS.append(("willow-golden", [
 ("append", "internalNote",
  "★ THE TITLE BLOCK WAS READ 2026-09-17, from the PDF in documents/mr005-405/: “Plan of the "
  "TRUMAN TRACT of Los Angeles City. Surveyed 18 June 1883 by Geo. Butler Griffin C.E. Re-arranged "
  "11th January 1884 by W. R. Blackman. Scale 1/600 Mag. Courses”, and “Recorded 12 "
  "January 1884 at request of E. BOUTON.” ⭐ E. Bouton is a findable man — Edward Bouton was a "
  "Los Angeles developer of the period — and he is the nearest thing to a Truman Tract principal "
  "this project has. ★ THE SHEET ALSO LETTERS ITS NEIGHBOURS BY NAME, which is unusual and useful: "
  "H. C. SIGLER along the north boundary, and NICHOLS, JONES and MALLARD around the edges. NICHOLS "
  "adjoining here is a third placement of that family on this ground — see `nichols-ave`, where the "
  "argument rests on Kines putting John G. Nichols in possession of the adjoining Crown Hill land. "
  "⚠ Still nothing on Willow itself; the tract's only other street is Ninth."),
]))

OPS.append(("nichols-ave", [
 ("append", "internalNote",
  "★ A THIRD PLACEMENT OF THE FAMILY ON THIS GROUND, found 2026-09-17 on a sheet already in the "
  "corpus: the Truman Tract plan of Jan. 1884 (documents/mr005-405) letters “Nichols” as "
  "an adjoining owner along its western edge, a few blocks south of this street. With Kines naming "
  "John G. Nichols as a prior owner of the adjoining Crown Hill land, and the 1887 sheet titled "
  "“Nichols' Addition to West Los Angeles”, that is three independent placements and "
  "still no statement that the street carries his name — which is exactly what `inferred` is for. "
  "★★ AND THE COMMITTEE'S PROPOSAL IS NOW EXPLICABLE: documents/lah-1888-10-11 wanted Witmer, "
  "Nichols and Logan all called NICHOLS, and the ground kept WITMER. The Witmers owned the hill, "
  "ran the cable railway up it and had built their own houses on their own street by 1886 — see "
  "`witmer-street`. The committee was choosing the older landowner's name and the newer one won."),
]))

# ══════════════════════════════════════════ DIAMOND, and the lead closed
OPS.append(("diamond-street", [
 ("sources", [("Electric Railway Historical Association of Southern California, quoting the Second Street Cable Railroad franchise — “Commencing at the intersection of Second Street with the westerly line of Spring Street, and running thence westerly along said Second Street… to Lake Shore Avenue; thence westerly along said Lake Shore Avenue… to Diamond Street; thence westerly along said Diamond Street… to the west boundary of said city”, with the note that “Diamond Street and what is now (1921) known as West First Street are the same street.”",
                "https://www.facebook.com/groups/echoparkhistory/posts/1741372899282840/")]),
 ("append", "internalNote",
  "★★ THE ECHO PARK HISTORY THREAD IS CLOSED, 2026-09-17: Kenny supplied it in full and it adds no "
  "namesake — but it does something better, and the corpus arbitrates it. THE POST CONTRADICTS "
  "ITSELF. Its author writes that the Second Street Cable Railroad ran “along Lake Shore Ave "
  "(now called Glendale Blvd), then Diamond Street (NOW CALLED BEVERLY BLVD.), then to Texas Ave "
  "(now called Belmont Ave)” — and then quotes the Electric Railway Historical Association "
  "saying “Diamond Street and what is now (1921) known as WEST FIRST STREET are the same "
  "street.” ✔ BOTH ARE TRUE OF DIFFERENT STRETCHES, AND THIS ENTITY'S OWN ROWS SHOW IT: five "
  "rows land on modern 1st Street (mr005-069, mr006-115, mr007-026-p2, mr007-056) and five on "
  "modern BEVERLY BOULEVARD (mr006-138, mr007-036-p2, mr007-056, mr010-062, mr010-088). Diamond "
  "Street ran across both, which is precisely why Kenny's 2026-08-30 identity decision — one entity "
  "spanning ground the modern map splits — was right, and it is now corroborated by a source that "
  "did not know it was doing so. ★ THE POST ALSO CORROBORATES `texas-st` INDEPENDENTLY: “Texas "
  "Ave (now called Belmont Ave)” is the renaming documents/lah-1887-01-04 records and this "
  "corpus's geometry places end-to-end with `belmont-ave`. ⚠ THE SOURCE IS A FACEBOOK POST quoting "
  "a railway history society; it is cited for the franchise text it reproduces, not for its "
  "author's gloss, and the gloss is the half that is wrong."),
]))

OPS.append(("lake-shore-ave", [
 ("append", "internalNote",
  "★★ THE 1888 COMMITTEE WAS FOLDING UP THE WHOLE CABLE ROUTE, which is only visible once the "
  "franchise text and the committee list are read together. documents/lah-1888-10-11 has "
  "“Diamond St., Lake Shore Ave. and Stevenson Ave., changed to SECOND ST.”; the Second "
  "Street Cable Railroad's franchise runs “along said Second Street… to Lake Shore Avenue; "
  "thence westerly along said Lake Shore Avenue… to Diamond Street; thence westerly along said "
  "Diamond Street… to the west boundary of said city.” Three street names on one continuous "
  "line of rail, and the council proposing to give the line one name. That is the clearest instance "
  "in the corpus of the committee's stated second purpose — “each street shall have a "
  "continuous name throughout” — being applied to a transit route rather than a tract. "
  "⚠ Whether Second Street ever took over this stretch is not established; this street kept its "
  "name and Diamond kept part of its."),
]))

OPS.append(("stevenson-ave", [
 ("append", "internalNote",
  "⚠ AND A THIRD STEVENSON IS NOW IN VIEW, which makes the no-rows problem worse rather than "
  "better. Read against the Second Street Cable Railroad's franchise, "
  "documents/lah-1888-10-11's “Diamond St., Lake Shore Ave. and Stevenson Ave., changed to "
  "Second St.” is plainly a street on the CABLE ROUTE — Crown Hill and Echo Park, west of "
  "downtown — and this entity was minted from a Boyle Heights sheet on the other side of the river "
  "(documents/tr0013-168-p2, which is currently parked in inbox/out of neighborhood as beyond the "
  "extract). So the 1888 list's two Stevensons are probably BOTH other streets. Until this entity "
  "has a row, no Stevenson found anywhere can be attached to it."),
]))

# ══════════════════════════════════════════ Guinn 1895
OPS.append(("first-street", [
 ("append", "internalNote",
  "★ ORD'S SURVEY IS NOW BOUNDED IN A SOURCE, 2026-09-17: Guinn's 1895 paper "
  "(documents/guinn-1895) states that it “embraces all that portion of the city bounded north "
  "by FIRST STREET and the base of the first line of hills, east by Main street, south by Twelfth "
  "street and west by Pearl street” — so this street is the survey's northern edge, and that "
  "is a usable test for whether any given downtown street was inside the original American survey "
  "or added against it."),
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
            sys.exit("unknown op " + op[0])
    return s[:a] + blk + s[b:]


for eid, ops in OPS:
    src = apply(src, eid, ops)

io.open(P, "w", encoding="utf-8").write(src)
print("patched %d entities" % len(OPS))
