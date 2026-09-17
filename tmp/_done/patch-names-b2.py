# -*- coding: utf-8 -*-
"""Second batch of 2026-09-17 clipping findings for names.js.

Lighter than batch 1: mostly appends to `note` and `internalNote`, plus a few
new `sources` entries. Operations are scoped to one entity's block and every one
must apply exactly once or the script aborts without writing.
"""
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


def _field_line(blk, field, eid):
    pat = '\n    %s: "' % field
    i = blk.find(pat)
    if i < 0 or blk.find(pat, i + 1) >= 0:
        sys.exit("%s: %s not found exactly once" % (eid, field))
    j = blk.find("\n", i + 1)
    line = blk[i + 1:j]
    if not line.endswith('",'):
        sys.exit("%s: %s is not a single-line string" % (eid, field))
    return i + 1, j, line


def append(blk, field, text, eid):
    """Append `text` to the end of a single-line string field."""
    a, b, line = _field_line(blk, field, eid)
    return blk[:a] + line[:-2] + " " + text + '",' + blk[b:]


def set_field(blk, field, text, eid):
    nul = "\n    %s: null," % field
    if nul in blk:
        if blk.count(nul) != 1:
            sys.exit("%s: %s null not unique" % (eid, field))
        return blk.replace(nul, '\n    %s: "%s",' % (field, text), 1)
    a, b, line = _field_line(blk, field, eid)
    return blk[:a] + '    %s: "%s",' % (field, text) + blk[b:]


def add_sources(blk, entries, eid):
    """Insert source objects at the head of the `sources` array."""
    body = "\n".join('      { title: "%s",\n        url: "%s" },' % e for e in entries)
    if "    sources: [],\n" in blk:
        return blk.replace("    sources: [],\n",
                           "    sources: [\n" + body.rstrip(",") + "\n    ],\n", 1)
    if "    sources: [\n" in blk:
        return blk.replace("    sources: [\n", "    sources: [\n" + body + "\n", 1)
    sys.exit(eid + ": no sources array")


LAH1888 = "https://cdnc.ucr.edu/?a=d&d=LAH18881011.1.3"
LAH1919 = "https://cdnc.ucr.edu/?a=d&d=LAH19191127.1.42"

OPS = []   # (entity, [(op, *args), ...])

OPS.append(("consuelo", [
 ("sources", [("Los Angeles Herald, Oct. 11, 1888 — the special committee’s street-name list: “Consuelo St. changed to California St.”", LAH1888)]),
 ("append", "note",
  "Thirteen months before that, in October 1888, the same council’s street-name "
  "committee had proposed changing Consuelo Street to California Street — so the "
  "four names the ordinance folded together were not four parallel streets but a "
  "sequence: Consuelo became California, and California became Fourteenth."),
 ("append", "internalNote",
  "★★ THE CHAIN IS CLOSED, 2026-09-17. documents/lah-1888-10-11, now transcribed in "
  "full, carries “Consuelo St. changed to California St.” That resolves what read "
  "as an oddity in the Nov. 1889 numbering ordinance — four names (“California, "
  "Consuelo, Greenwell and Vejar”) collapsing into one number — into a two-step "
  "history on this corridor: Consuelo → California (Oct. 1888) → Fourteenth "
  "(Nov. 1889). ⚠ It does not touch the namesake question, which stands exactly "
  "where it was. It does mean `california-street-14th` is this entity’s immediate "
  "successor and not merely a neighbour, and a change row between them waits only "
  "on Ordinance No. 48."),
]))

OPS.append(("california-street-14th", [
 ("sources", [("Los Angeles Herald, Oct. 11, 1888 — the special committee’s street-name list: “Consuelo St. changed to California St.”", LAH1888)]),
 ("append", "note",
  "Consuelo Street was itself proposed for change to California Street in October "
  "1888, so on this corridor the name arrived over Consuelo a year before it gave "
  "way to the number."),
 ("append", "internalNote",
  "★★ ONE OF THE FOUR NAMES IN THAT ORDINANCE WAS THIS STREET’S OWN PREDECESSOR. "
  "documents/lah-1888-10-11 carries “Consuelo St. changed to California St.”, so "
  "the Nov. 1889 list — “California, Consuelo, Greenwell and Vejar” — is not four "
  "parallel names but a sequence caught mid-transition, with Consuelo still in the "
  "clerk’s head thirteen months after the committee proposed replacing it. See "
  "`consuelo`."),
]))

OPS.append(("canal-street-beaudry", [
 ("sources", [("Los Angeles Herald, Oct. 11, 1888 — the special committee’s street-name list: “Beaudry Ave., from Third St. north, changed to Canal St.” and “Branch of Beaudry Ave., passing west of Sisters’ Hospital, changed to West Canal St.”", LAH1888)]),
 ("append", "note",
  "In October 1888 the city council’s street-name committee proposed the same "
  "change in so many words — “Beaudry Ave., from Third St. north, changed to Canal "
  "St.” — and a second one for the branch west of the Sisters’ Hospital, which was "
  "to become West Canal Street."),
 ("append", "internalNote",
  "★★ A SOURCE AT LAST, 2026-09-17, and it names the pair outright. The sentence "
  "above — “NO SOURCE NAMES THIS STREET” — was true of the namesake and is still "
  "true of it; what is no longer true is that nothing connects Canal to Beaudry. "
  "documents/lah-1888-10-11 has “Beaudry Ave., from Third St. north, changed to "
  "Canal St.” ⚠ BUT THE DIRECTION AND THE DATE BOTH NEED CARE. The Chadwick "
  "Subdivision of Dec. 1886 (documents/mr016-059) already letters Canal Street on "
  "this ground, two years BEFORE the proposal, and the 1917 tract letters Beaudry "
  "Avenue on the same block — so the corpus’s own sequence is Canal → Beaudry while "
  "the committee wanted Beaudry → Canal. Three readings fit: the committee was "
  "regularising a change the subdividers had already made; or Canal was on part of "
  "the line and Beaudry on the rest, with the committee tidying the join; or the "
  "1888 proposal failed and Beaudry simply reasserted itself, which is what the "
  "1917 sheet would then be showing. Ordinance No. 48 decides between them. ★ THE "
  "BRANCH IS TRACEABLE TOO: “Branch of Beaudry Ave., passing west of Sisters’ "
  "Hospital, changed to West Canal St.” is still called West Beaudry Avenue in "
  "Dec. 1897, when the city engineer proposes making it SUNSET BOULEVARD and notes "
  "that “this change has hitherto been overlooked” (documents/lah-1897-12-07). "
  "Sisters’ Hospital fixes the same ground in both. So West Canal was proposed, "
  "never took, and the branch went to Sunset instead."),
]))

OPS.append(("beaudry-st", [
 ("append", "internalNote",
  "★★ AND A DOCUMENT FROM 1888 LANDS ON THE SAME SIDE OF THE INK RULE, found "
  "2026-09-17. documents/lah-1888-10-11 carries “Crescent Ave., changed to Beaudry "
  "St.” Crescent Avenue is lettered on mr007-026-p1 — the Park Tract control sheet "
  "that letters both Beaudry names — and its trace BEGINS 1.4 m from where this "
  "entity’s row on that sheet ENDS (34.06091,−118.24904 against "
  "34.06091,−118.24905), while the `beaudry-avenue` row on the same sheet is 371 m "
  "away at its nearest point. So the committee was extending BEAUDRY STREET over "
  "its own continuation, on the Fremont line, and an independent 1888 source agrees "
  "with a rule derived from the ink. See `crescent-park-tract`."),
]))

OPS.append(("crescent-park-tract", [
 ("append", "internalNote",
  "⚠ THE SUCCESSOR IS NOT THE ONLY THING THE 1888 LIST SAYS ABOUT THIS TRACT: it "
  "also carries “Boston St., in Park tract, changed to Dalton St.” and “Reservoir "
  "St., Centennial Ave., Centennial St., Ocean View Ave., Ocean View St., in Park "
  "Tract, changed to Centennial St.”, so Beaudry’s Park Tract was being combed "
  "through street by street in Oct. 1888 and three more of its names are waiting in "
  "that document."),
]))

OPS.append(("sapphire", [
 ("sources", [("Los Angeles Herald, Nov. 27, 1919 — “the council ordered … the name of that part of Boyleston avenue and Sapphire street, from north of Third, changed to Huntley drive”", LAH1919)]),
 ("set", "note",
  "Lettered on the 1884 Crown Hill sheet (documents/mr006-115) and again on a 1903 "
  "tract. On November 26, 1919 the city council ordered Sapphire Street and the "
  "northern part of Boylston Avenue to become one street, Huntley Drive, which they "
  "remain."),
 ("append", "internalNote",
  "★★ NOW ATTESTED RATHER THAN CORROBORATED, 2026-09-17. The three confirmations "
  "above were all circumstantial — Garrigues’s table, a registry entry, a "
  "geocode — and documents/lah-1919-11-27 is the council doing it: “the name of "
  "that part of Boyleston avenue and Sapphire street, from north of Third, changed "
  "to Huntley drive.” The date moves from “sometime after 1903” to November 1919, "
  "and Garrigues’s phrase “between Boylston and Bixel” is explained — Huntley was "
  "made out of two streets, Boylston’s northern end and Sapphire. ⚠ The Herald "
  "spells it BOYLESTON with an e; `boylston` is right, since the 1897 council "
  "amendments that coined the name spell it so."),
]))

OPS.append(("rouland-street", [
 ("sources", [("Los Angeles Herald, Oct. 11, 1888 — the special committee’s street-name list: “Virginia St., in SW. part of city, changed to Rouland St.”", LAH1888)]),
 ("append", "note",
  "In October 1888 the city council’s street-name committee proposed extending the "
  "name over a neighbouring Virginia Street in the south-west of the city."),
 ("append", "internalNote",
  "★ THE NAME WAS SPREADING, 2026-09-17: documents/lah-1888-10-11 carries “Virginia "
  "St., in SW. part of city, changed to Rouland St.” ⚠ AND THAT IS ODD, because "
  "Rouland and Virginia are lettered as two DIFFERENT streets on the same two "
  "sheets this entity cites — mr005-431 and mr010-077. So in 1888 the committee is "
  "not coining a name but taking one already on the block and putting it on the "
  "street beside it, which would leave the two Roulands adjacent and parallel. "
  "Before any row is drawn, the geometry needs checking: if the Virginia on those "
  "sheets is `virginia-conv-center`, the two entities end up sharing a name and the "
  "question of whether they are one lineage reopens. ⚠ NOTE ALSO that this makes "
  "the spelling question sharper, not softer — a name being spread by a council "
  "committee in 1888 is exactly when a draftsman’s normalisation toward “Rowland” "
  "would take hold, which fits the 1889 ordinance using that form."),
]))

OPS.append(("virginia-conv-center", [
 ("sources", [("Los Angeles Herald, Oct. 11, 1888 — the special committee’s street-name list, which disposes of all four of the city’s Virginias at once: Boyle Heights keeps the name, the SE one becomes Lion Street, “Virginia St., in SW. part of city, changed to Rouland St.”, and the W one becomes Toluca Street", LAH1888)]),
 ("append", "note",
  "The October 1888 duplicate cull dealt with four Virginias at once: the Boyle "
  "Heights one kept the name, one became Lion Street, one Toluca Street, and the "
  "one in the south-west of the city was to become Rouland Street."),
 ("append", "internalNote",
  "★★ THE CULL ITSELF IS NOW IN THE CORPUS, 2026-09-17, and it names this one’s "
  "intended successor: documents/lah-1888-10-11 has “Virginia St., in SW. part of "
  "city, changed to Rouland St.” This street is in the south-west of the city, and "
  "ROULAND STREET IS LETTERED ON BOTH OF THIS ENTITY’S OWN SHEETS (mr005-431 and "
  "mr010-077) as a separate street — so the committee was extending the "
  "neighbouring name over this one. ⚠ THAT COMPLICATES THE DELONG STORY. This "
  "entity’s note says it became Delong Street and that “when this one became Delong "
  "is not sourced; the same 1888 cull is the obvious occasion”. The cull is now "
  "readable and it says ROULAND, not Delong — so either the Rouland proposal failed "
  "and Delong came later from somewhere else, or this Virginia is not the SW one "
  "the committee meant. The geometry of Rouland against Virginia on mr005-431 is "
  "what decides it, and it has not been run. See `rouland-street`."),
]))

OPS.append(("virginia-st-angeleno-hgts", [
 ("sources", [("Los Angeles Herald, Oct. 11, 1888 — the special committee’s street-name list: “Virginia St., in W. part of city, changed to Toluca St.”", LAH1888)]),
 ("append", "internalNote",
  "✅ AND THE COMMITTEE’S OWN LINE IS NOW IN THE CORPUS, 2026-09-17, where before "
  "there was only Kines’s account of it: documents/lah-1888-10-11 carries “Virginia "
  "St., in W. part of city, changed to Toluca St.” It also shows the whole cull in "
  "one place — four Virginias, of which Boyle Heights keeps the name while the "
  "others go to Lion, Rouland and Toluca — which is as good a demonstration of how "
  "the 1888 purge worked as the Kines page, and primary."),
]))

OPS.append(("lafayette-bixel", [
 ("sources", [("Los Angeles Herald, Oct. 11, 1888 — the special committee’s street-name list: “La Fayett Ave. in W part of city, changed to Contra Costa St.”", LAH1888)]),
 ("append", "note",
  "In October 1888 the city council’s street-name committee proposed renaming it "
  "Contra Costa Street; no Contra Costa Street was ever laid out here, and the "
  "corridor took Bixel instead the following year."),
 ("append", "internalNote",
  "★ A PROPOSAL THAT LOST, found 2026-09-17: documents/lah-1888-10-11 has “La "
  "Fayett Ave. in W part of city, changed to Contra Costa St.” (the spelling is the "
  "paper’s). There is no Contra Costa Street in Los Angeles, and Bixel took this "
  "corridor in 1889 — so this is a clean, dated instance of the committee choosing "
  "a name that simply did not stick, which is exactly the hazard "
  "handbook/change-rows-amendment.md §10 form 5 warns about. ★ IT ALSO SETTLES A "
  "SMALL THING: the committee locates it as “in W part of city”, and its Lafayette "
  "is a single street with one entry — no second Lafayette anywhere in the "
  "199-item list. For 1888 at least, the split from `lafayette-french` is invisible "
  "to the council, which fits `lafayette-french` having already vanished by then."),
]))

OPS.append(("cummings-ave", [
 ("sources", [("Los Angeles Herald, Oct. 11, 1888 — the special committee’s street-name list: “Cummings Ave., in Angeleño Heights, changed to Modoc St.”", LAH1888)]),
 ("append", "internalNote",
  "⚠⚠ A SECOND, CONFLICTING SUCCESSOR, found 2026-09-17: documents/lah-1888-10-11 "
  "carries “Cummings Ave., in Angeleño Heights, changed to Modoc St.” The "
  "Preservation Plan has Hall and Stilson renaming Cummings to IONIA; the council’s "
  "committee wanted MODOC. Both cannot describe one event. The likeliest reading is "
  "that they are two: a private renaming on the subdividers’ own tract in 1886, and "
  "a city proposal two years later which — since no Modoc Street exists in Angeleno "
  "Heights, and Garrigues has Ionia becoming Boston Street — did not hold. But the "
  "Preservation Plan gives no date for the Ionia change, so the order is not proven "
  "and the alternative is live: that Ionia came AFTER 1888 and the plan is "
  "compressing two renamings into one sentence. ★ EITHER WAY THE COMMITTEE "
  "CORROBORATES THE PLAN’S LOAD-BEARING PHRASE: in Oct. 1888 the council still "
  "knows the street as Cummings Avenue, which is only possible if Cummings was a "
  "name in public use and not an internal label on a subdivider’s plat."),
]))

OPS.append(("sainsevain-street", [
 ("sources", [("Los Angeles Herald, Oct. 11, 1888 — the special committee’s street-name list: “Sainsevain St., changed to Commercial St.”", LAH1888)]),
 ("append", "note",
  "The renaming is dated: in October 1888 the city council’s street-name committee "
  "listed “Sainsevain St., changed to Commercial St.”"),
 ("append", "internalNote",
  "★★ THE REALIGNMENT INTO COMMERCIAL STREET IS NOW DATED AND SOURCED, 2026-09-17. "
  "documents/lah-1888-10-11 carries “Sainsevain St., changed to Commercial St.” — a "
  "flat renaming with no qualifying extent, sitting in the consolidation half of "
  "the list rather than the duplicate cull, which is where the committee put "
  "streets it was joining end to end. ★ IT IS ALSO CONTEXT FOR `labory-lane`: the "
  "Huntington’s Solano-Reeve record for the Alanis Vineyard Tract runs “Sainsevain "
  "St. to Labory Lane”, so these two are the east and west bounds of the same "
  "ground, and both go in the same decade — one to a generic in 1888, the other to "
  "abandonment. The Frenchtown Confidential description of Labory Lane as "
  "corresponding to “Aliso Street’s transition into Commercial Street” is the same "
  "observation from the other side."),
]))

OPS.append(("belmont-kincaid", [
 ("sources", [("Los Angeles Herald, Oct. 11, 1888 — the special committee’s street-name list: “Belmont Ave., from Pico to Eleventh St., changed to Trenton St.”", LAH1888)]),
 ("append", "internalNote",
  "★ A NEW SIGHTING AND A POSSIBLE SUCCESSOR, 2026-09-17: documents/lah-1888-10-11 "
  "carries “Belmont Ave., from Pico to Eleventh St., changed to Trenton St.” ⚠ THE "
  "GROUND IS THE QUESTION. This entity sits on Kincaid’s Tract around 11th and 12th "
  "east of Figueroa, which is within a block of the stretch the committee names, "
  "and the 1888 line is the only qualified-by-extent Belmont in the list. If they "
  "are the same street, TRENTON is this entity’s successor and the corpus gains a "
  "date; if not, there was a third Belmont in 1888 besides this one and the Crown "
  "Hill one. Kincaid’s corridor runs north-south and the committee’s runs “from "
  "Pico to Eleventh”, which is also north-south, so they are at least compatible. "
  "Worth ten minutes with the sheet before anyone treats it as settled."),
]))

OPS.append(("jewel-st", [
 ("sources", [("Los Angeles Herald, Dec. 7, 1897 — the city engineer’s omnibus report: “Jewel street, Sapphire street to north termination, changed to Bixel street”", "https://cdnc.ucr.edu/?a=d&d=LAH18971207.1.11")]),
 ("set", "note",
  "Lettered on the 1884 Crown Hill sheet (documents/mr006-115). In December 1897 "
  "the city engineer proposed that Jewel Street, from Sapphire Street to its north "
  "end, become Bixel Street; the name was gone from Crown Hill before the city map "
  "of 1903."),
 ("append", "internalNote",
  "★★ WHERE IT WENT, 2026-09-17: documents/lah-1897-12-07 has “Jewel street, "
  "Sapphire street to north termination, changed to Bixel street.” That converts "
  "“gone before 1903” from an absence into an event, and gives the corridor its "
  "successor. ⚠ It is an engineer’s recommendation referred to the board of public "
  "works, not an adopted ordinance, so the date is a terminus a quo for the "
  "proposal rather than for the change. ★ NOTE THE SHAPE OF THE CROWN HILL "
  "GEM-SET’S END: Sapphire goes to Huntley in 1919 (documents/lah-1919-11-27), "
  "Jewel to Bixel in 1897, and the set this entity shares its warrant with comes "
  "apart one street at a time over twenty-two years rather than in a single sweep."),
]))

OPS.append(("bixel", [
 ("sources", [("Los Angeles Herald, Dec. 7, 1897 — the city engineer’s omnibus report: “Jewel street, Sapphire street to north termination, changed to Bixel street”", "https://cdnc.ucr.edu/?a=d&d=LAH18971207.1.11")]),
 ("set", "searched", "partial"),
 ("set", "note",
  "The name reached this ground in stages. Kines dates its arrival on the Lafayette "
  "Avenue corridor to 1889; in December 1897 the city engineer proposed carrying it "
  "north over Jewel Street, from Sapphire Street to that street’s north end. "
  "Nothing found here says who Bixel was."),
 ("set", "internalNote",
  "⚠ THIS ENTITY IS STILL UNRESEARCHED — the note records only where the NAME went, "
  "not who it commemorates, and `basis` stays `none` accordingly. ★ TWO DOCUMENTS "
  "NOW BEAR ON IT, both added 2026-09-17. (1) documents/lah-1897-12-07: “Jewel "
  "street, Sapphire street to north termination, changed to Bixel street” — the "
  "name spreading north over the Crown Hill gem set; see `jewel-st`. (2) "
  "documents/lah-1888-10-11: “La Fayett Ave. in W part of city, changed to Contra "
  "Costa St.”, a proposal that failed on the corridor Bixel took instead the "
  "following year; see `lafayette-bixel`. So the name arrives here by displacing "
  "Lafayette in 1889 and then extends over Jewel in 1897, and it beat a council "
  "committee’s own preferred name to the ground. ★ THE NAMESAKE LEAD IS KINES’S "
  "ANTON BIXEL PAGE, cited under `lafayette-bixel` and not yet read into this "
  "entity — that is the single next step, and it is a page fetch, not a search."),
]))

OPS.append(("channing-st", [
 ("sources", [("Los Angeles Herald, Feb. 5, 1887 — “For Sale. The E. B. Millar Property”, 26 lots bounded by Seventh Street, Alameda St. and Lemon St., “first-class vineyard”, “Just near the famous Wolfskill Orchard”; agents Byram & Poindexter, 27 W. First St.", "https://cdnc.ucr.edu/?a=d&d=LAH18870205.1.4")]),
 ("append", "internalNote",
  "★ THE TRACT IS INDEPENDENTLY CORROBORATED, 2026-09-17, though the name still is "
  "not. A Herald advertisement of Feb. 5, 1887 — eleven days after documents/"
  "mr013-091 was recorded — offers “The E. B. Millar Property” as 26 lots bounded "
  "by SEVENTH STREET, ALAMEDA ST. and LEMON ST., “first-class vineyard”, “Just near "
  "the famous Wolfskill Orchard”, through Byram & Poindexter of 27 W. First St. "
  "That confirms this project’s alignment of the tract, whose eastern boundary on "
  "Lemon Street had rested on the sheet alone. ⚠ It adds nothing about Channing "
  "himself: the advertisement names no streets inside the tract and no partner "
  "beyond Millar. What it does add is a local agent — Byram & Poindexter — whose "
  "own papers or advertisements might carry the lot plan with the street names on "
  "it."),
]))


def apply(s, eid, ops):
    a, b = block_span(s, eid)
    blk = s[a:b]
    for op in ops:
        if op[0] == "sources":
            blk = add_sources(blk, op[1], eid)
        elif op[0] == "append":
            blk = append(blk, op[1], op[2], eid)
        elif op[0] == "set":
            blk = set_field(blk, op[1], op[2], eid)
        else:
            sys.exit("unknown op " + op[0])
    return s[:a] + blk + s[b:]


for eid, ops in OPS:
    src = apply(src, eid, ops)

io.open(P, "w", encoding="utf-8").write(src)
print("patched %d entities in %s" % (len(OPS), P))
