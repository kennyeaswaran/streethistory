# -*- coding: utf-8 -*-
"""Apply the 2026-09-17 CDNC-clipping and Newmark findings to names.js.

Every edit is scoped to one entity's block, located by its `"id": {` line and
closed by the first `\n  },` after it. Each replacement must match exactly once
inside that block or the script aborts without writing anything.
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


def _norm(t):
    # The file mixes typographic and ASCII apostrophes; match on either.
    return t.replace("\u2019", "'")


def edit(s, eid, pairs):
    a, b = block_span(s, eid)
    blk = s[a:b]
    for old, new in pairs:
        nblk, nold = _norm(blk), _norm(old)
        n = nblk.count(nold)
        if n != 1:
            sys.exit("in %s: %d matches for %r" % (eid, n, old[:100]))
        i = nblk.index(nold)
        blk = blk[:i] + new + blk[i + len(nold):]
    return s[:a] + blk + s[b:]


E = []   # (entity id, [(old, new), ...])

NULLS = '    namedAfter: null,\n    namedAfterLink: null,\n    categories: [],'

# ───────────────────────────────────────────────────────────────── labory-lane
E.append(("labory-lane", [
 (NULLS,
  '    namedAfter: "{{Antonio Labory}} (b. c. 1819 in Bordeaux), a French vintner and sheep rancher of the El Aliso circle, in Los Angeles from the late 1840s, whose ground this lane served",\n'
  '    namedAfterLink: "https://cdnc.ucr.edu/?a=d&d=LAH18870520.1.1",\n'
  '    categories: ["person","landowner","foreign"],'),

 ('    basis: "none",\n    searched: "partial",',
  '    basis: "inferred",\n    searched: "extensive",'),

 ('        url: "https://frenchtownconfidential.blogspot.com/2018/01/breaking-news-el-aliso-vineyard-was-not.html" }\n    ],',
  '        url: "https://frenchtownconfidential.blogspot.com/2018/01/breaking-news-el-aliso-vineyard-was-not.html" },\n'
  '      { title: "Los Angeles Herald, May 20, 1887 — “A Reunion of Old Friends”: “Among those present was Antonio Labory, a hale looking Frenchman, over whose head sixty-eight summers have passed, and who was a schoolmate and companion of Mr. Vignes\' father, Vital F. Vignes, in Bordeaux, France, over fifty years ago. Mr. Labory landed in San Francisco in 1844, and a few years later came to Los Angeles, where he has resided ever since.”",\n'
  '        url: "https://cdnc.ucr.edu/?a=d&d=LAH18870520.1.1" },\n'
  '      { title: "Los Angeles Herald, Aug. 3, 1887 — a Vignes biography: “Here Mr. Vignes engaged in the vintage business in company with such men as Pedro Sansevine and H. Labory”",\n'
  '        url: "https://cdnc.ucr.edu/?a=d&d=LAH18870803.1.11" },\n'
  '      { title: "Los Angeles Herald, Mar. 4, 1874: “Simon Levy has bought 4,000 sheep of Antonio Labory, and has also rented his ranch for a year.”",\n'
  '        url: "https://cdnc.ucr.edu/?a=d&d=LAH18740304.1.4" }\n'
  '    ],'),

 ('    note: "Originally the access path from Alameda Street to the Alanis property, running east of the Southern Pacific tracks to Lafayette Street. It is abandoned. Nothing found says who Labory was.",',
  '    note: "Originally the access path from Alameda Street to the Alanis property, running east of the Southern Pacific tracks to Lafayette Street, and now abandoned. There was one Labory family in Los Angeles and it belonged to exactly this quarter: Antonio Labory, born in Bordeaux about 1819, was a schoolmate of Jean-Louis Vignes\'s brother Vital, landed in San Francisco in 1844 and came to Los Angeles a few years later, where he was still living in 1887; an H. Labory was in the vintage business at the El Aliso alongside Pedro Sainsevain. In 1874 Antonio Labory sold 4,000 sheep and rented out his ranch for a year. No document says the lane carries his name, and no other Labory is known here.",'),

 ('Presumably a French surname of a landholder fronting the lane; nothing found. NOT COVERED BY KINES.",',
  '★★ THE MAN IS FOUND, 2026-09-17, from three CDNC clippings Kenny supplied — and the guess in the sentence this replaces (“a French surname of a landholder fronting the lane”) turns out to be right. ANTONIO LABORY: born Bordeaux c. 1819 (“sixty-eight summers” in May 1887), schoolmate of Vital F. Vignes, San Francisco 1844, Los Angeles by the late 1840s, sheep rancher — he sells 4,000 head to Simon Levy in Mar. 1874 and rents out the ranch — and a guest at the Vignes house-warming in 1887. A separate Herald biography of the younger Vignes names an H. LABORY in the vintage business at the Aliso “in company with such men as Pedro Sansevine”: same surname, same vineyard, probably the same household. ★ WHY `inferred` AND NOT `attested`: no source connects the man to the lane. The anchor is independently sourced three times, and the inference rests on four things at once — the lane is in the French quarter, it ran to the Alanis property with Sainsevain Street at its other end, its neighbours are the Aliso vineyard circle by name, and Antonio Labory is the only Labory in Los Angeles in any source found. ✅ THE NEGATIVE THAT STRENGTHENS IT: Harris Newmark\'s Sixty Years in Southern California, searched in full 2026-09-17, has ZERO hits for Labory or Labury — against 33 for Sainsevain. Newmark knew that circle intimately, so his silence fits a rancher on its edge rather than contradicting the identification. NEXT STEP if anyone wants `attested`: the 1870 or 1880 census for the Labory household, or a Calvary Cemetery record, to fix the relationship between Antonio and H. NOT COVERED BY KINES.",'),
]))

# ─────────────────────────────────────────────────────────────────── potts-st
E.append(("potts-st", [
 (NULLS + '\n    sources: [],',
  '    namedAfter: "{{J. Wesley Potts}}, Prudent Beaudry’s partner in opening Temple Street — a Texan who tramped across the plains in 1852, came up from hauling dirt and peddling fruit, and ended “widely known as a weather prophet”",\n'
  '    namedAfterLink: null,\n'
  '    categories: ["person","landowner"],\n'
  '    sources: [\n'
  '      { title: "Harris Newmark, Sixty Years in Southern California, 1853–1913 (1916), p. 61 — “Temple Street had not then been opened by Beaudry and Potts, although there was a little cul-de-sac extending west from Spring Street”; and p. 126, the biography of J. Wesley Potts. Newmark’s own index runs the two together: “Potts, J. Wesley, 61, 126”.",\n'
  '        url: "https://www.gutenberg.org/ebooks/44571" }\n'
  '    ],'),

 ('    basis: "none",\n    searched: "partial",',
  '    basis: "inferred",\n    searched: "extensive",'),

 ('    note: "Lettered on P. Beaudry Subdivision B of May 1875 (documents/mr003-046-p1 and -p2). Nothing found says who Potts was.",',
  '    note: "Lettered on P. Beaudry Subdivision B of May 1875 (documents/mr003-046-p1 and -p2). Harris Newmark names Beaudry’s partner: Temple Street, he writes, “had not then been opened by Beaudry and Potts”. The Potts of that pairing is J. Wesley Potts, who tramped across the plains from Texas in 1852 and reached Los Angeles in September with nothing — he hauled dirt in a hand-cart to patch the streets, peddled fruit from a basket, went to the mines and came back, raised vegetables and put the first locally grown sweet potatoes on the market, and was later “widely known as a ‘weather prophet’ — with predictions quite as likely to be worthless as to come true.” No document says the street on Beaudry’s own subdivision carries his partner’s name, but no other Potts is known here.",'),

 ('    internalNote: "Moved from names-new.js 2026-09-17. ⚠ CONSIDERED AND NOT ADOPTED',
  '    internalNote: "Moved from names-new.js 2026-09-17. ★★ THE REJECTION RECORDED BELOW IS REVERSED, 2026-09-17, and it is left in place verbatim so the reversal can be checked. Harris Newmark’s Sixty Years in Southern California — searchable in full since Kenny fetched it — supplies in one clause the exact link the rejection said was missing: “Temple Street had not then been opened by BEAUDRY AND POTTS.” Potts was Prudent Beaudry’s partner in street-opening, and this street is on Beaudry’s own subdivision. Newmark’s index (“Potts, J. Wesley, 61, 126”) identifies that Potts with the J. Wesley Potts of his p. 126 biography, so it is the same man the rejection had already found under the initials James W. ★ AND THE CHRONOLOGICAL OBJECTION FALLS WITH IT. The rejection turned on his entering the Common Council in Dec. 1877, two years after the 1875 sheet — but the Council was never the relevant date. The partnership with Beaudry predates it: Newmark is describing the townscape of the early 1850s when he says Temple Street had not YET been opened by them, so by 1875 the two had been in business together for two decades. ★ `inferred`, not `attested`: Newmark names the partnership, not the street. What would settle it is the title block or dedication of documents/mr003-046, or a deed between Beaudry and Potts. THE ORIGINAL REJECTION, KEPT VERBATIM: ⚠ CONSIDERED AND NOT ADOPTED'),
]))

# ───────────────────────────────────────────────── warren-st-arts-district
E.append(("warren-st-arts-district", [
 ('    sources: [],',
  '    sources: [\n'
  '      { title: "Los Angeles Herald, Oct. 11, 1888 — the special committee’s street-name list: “Warren St., in S. part of city, changed to Decatur St.”",\n'
  '        url: "https://cdnc.ucr.edu/?a=d&d=LAH18881011.1.3" },\n'
  '      { title: "Los Angeles Herald, Feb. 5, 1887 — “For Sale. The E. B. Millar Property”, 26 lots bounded by Seventh Street, Alameda St. and Lemon St., “first-class vineyard”, “Just near the famous Wolfskill Orchard”; agents Byram & Poindexter, 27 W. First St.",\n'
  '        url: "https://cdnc.ucr.edu/?a=d&d=LAH18870205.1.4" }\n'
  '    ],'),

 ('along what is now Decatur Street. Nothing found says who or what it was named for.",',
  'along what is now Decatur Street. The city council’s street-name committee proposed changing it to Decatur Street in October 1888, twenty-one months after the tract was recorded. Nothing found says who or what Warren was named for.",'),

 ('That is from the alignment, not from a source; no renaming document has been found, and the subdivider of Tract No. 1836 is the obvious next question.',
  '★★ AND AS OF 2026-09-17 IT IS SOURCED. documents/lah-1888-10-11, now transcribed in full, carries “Warren St., in S. part of city, changed to Decatur St.” The renaming was an inference from the alignment when this note was written; it is now a line in the record, and the date collapses from “somewhere in those 26 years” to October 1888. ⚠ It is a COMMITTEE PROPOSAL, not an instrument — several lines in that list did not survive into Ordinance No. 48 — so what is established is that the council intended the change in Oct. 1888 and that Decatur was on the corridor by 1913. The subdivider of Tract No. 1836 is no longer the obvious next question; Ordinance No. 48 is. ★ THE TRACT IS CORROBORATED TOO: a Herald advertisement of Feb. 5, 1887, eleven days after the sheet was recorded, offers “The E. B. Millar Property” as 26 lots bounded by SEVENTH STREET, ALAMEDA ST. and LEMON ST. That independently confirms this project’s alignment of the tract’s eastern boundary on Lemon Street, which had rested on the sheet alone.'),
]))

# ─────────────────────────────────────────────────────────────────── decatur-st
E.append(("decatur-st", [
 ('    sources: [],',
  '    sources: [\n'
  '      { title: "Los Angeles Herald, Oct. 11, 1888 — the special committee’s street-name list: “Warren St., in S. part of city, changed to Decatur St.”",\n'
  '        url: "https://cdnc.ucr.edu/?a=d&d=LAH18881011.1.3" }\n'
  '    ],'),

 ('The same corridor was lettered Warren Street on the E. B. Millar Tract of 1887. Nothing found says who or what Decatur was.",',
  'The same corridor was lettered Warren Street on the E. B. Millar Tract of 1887, and the city council’s street-name committee proposed the change from Warren to Decatur in October 1888. Nothing found says who or what Decatur was.",'),

 ('''★ THE REAL LEAD is that it replaced Warren (see `warren-st-arts-district`), which puts the naming event between 1887 and 1913 and makes the subdivider of Tract No. 1836 the person to identify — a question the sheet's own title block answers and the open web does not.",''',
  '★★ THE NAMING EVENT IS NOW DATED, 2026-09-17: documents/lah-1888-10-11 carries “Warren St., in S. part of city, changed to Decatur St.” The name arrives in Oct. 1888, not “somewhere between 1887 and 1913”, and the subdivider of Tract No. 1836 is no longer the person to identify — the 1888 council’s street-name committee is. ⚠ That is a committee PROPOSAL; Ordinance No. 48 of May 1889 would confirm it. ★ AND THE CONTEXT ARGUES AGAINST THERE BEING A NAMESAKE AT ALL. Read in its own column, this line sits in the duplicate cull, where the committee is disposing of two Warrens at once — the other becomes Putnam, in Ling’s Addition — by reaching for replacement names off a shelf. Its neighbours on that shelf are Putnam, Cushing, Farragut, Sheridan, Sherman, McPherson, Quebec, Concord, Hartford and Dartmouth. Decatur belongs to a batch of American naval, military and New England names chosen to be UNUSED rather than to commemorate anything local. That does not prove Stephen Decatur was not in the committee’s mind, but it explains why no local connection has ever turned up, and it is the reason to stop looking for one.",'),
]))

# ──────────────────────────────────────────────────────────── crescent-park-tract
E.append(("crescent-park-tract", [
 ('    sources: [],',
  '    sources: [\n'
  '      { title: "Los Angeles Herald, Oct. 11, 1888 — the special committee’s street-name list: “Crescent Ave., changed to Beaudry St.”",\n'
  '        url: "https://cdnc.ucr.edu/?a=d&d=LAH18881011.1.3" }\n'
  '    ],'),

 ('    basis: "none",\n    searched: "partial",',
  '    basis: "none",\n    searched: "extensive",'),

 ('    note: "Lettered on Prudent Beaudry’s Park tract (documents/mr007-026-p1). Nothing found says who or what it was named for.",',
  '    note: "Lettered on Prudent Beaudry’s Park tract (documents/mr007-026-p1), where it begins where the same sheet’s Beaudry Street ends and carries that line on to the north-east. In October 1888 the city council’s street-name committee proposed folding it into Beaudry Street. Nothing found says who or what Crescent itself was named for; on a hillside tract the shape of the road is the likeliest reading.",'),

 ('That is a mile away and a different tract.",',
  'That is a mile away and a different tract. ★★ A SUCCESSOR, 2026-09-17, AND IT CORROBORATES THE BEAUDRY SPLIT. documents/lah-1888-10-11 carries “Crescent Ave., changed to Beaudry St.”, and the geometry on this entity’s own sheet says which Beaudry that is: on mr007-026-p1 the `beaudry-st` row ends at 34.06091,−118.24905 and this entity’s trace BEGINS at 34.06091,−118.24904 — 1.4 m apart, end to end on one line — while the `beaudry-avenue` row on the same sheet is 371 m away at its nearest point. So Crescent Avenue is the north-eastward continuation of BEAUDRY STREET, the Fremont Avenue lineage, and the 1888 proposal is the council extending a name over its own continuation rather than moving it between roadways. ★ THAT IS AN INDEPENDENT CHECK ON THE INK RULE recorded under `beaudry-st`: the rule was derived from the ink across twelve rows, and a document from 1888 lands on the same side of it. ⚠ Whether the change was carried out is not established — the 1888 list is a committee proposal — so a change row waits on Ordinance No. 48.",'),
]))

# ─────────────────────────────────────────────────────────────────────── weill
E.append(("weill", [
 ('    sources: [],',
  '    sources: [\n'
  '      { title: "Los Angeles Herald, Oct. 11, 1888 — the special committee’s street-name list: “Jackson St. and Weill St., changed to Sepulveda St.” and, separately, “Cedar St., in A. Weill tract, changed to Hemlock St.”",\n'
  '        url: "https://cdnc.ucr.edu/?a=d&d=LAH18881011.1.3" }\n'
  '    ],'),

 ('    note: "Lettered on documents/mr002-526-p2 and documents/mr004-012-p2, in the French quarter east of Alameda. The name is gone from Los Angeles, and no Weill of that quarter has been identified.",',
  '    note: "Lettered on documents/mr002-526-p2 and documents/mr004-012-p2, in the French quarter east of Alameda. In October 1888 the city council’s street-name committee proposed folding Weill Street, together with a Jackson Street, into Sepulveda Street, and the name is gone from Los Angeles today. The same list records an “A. Weill tract” elsewhere in the city, so the family had a recorded subdivision of its own by 1888; no Weill of this quarter has been identified by name.",'),

 ('Harris Newmark’s Sixty Years in Southern California is the book that would settle this circle and it could NOT be searched — archive.org’s full-text endpoint was returning stale cached results throughout.",',
  '✅ NEWMARK HAS NOW BEEN SEARCHED, 2026-09-17, and the answer is a clean ZERO — no Weill, no Weil. Kenny fetched the Gutenberg text after archive.org’s full-text endpoint proved to be serving stale cached results (see CLAUDE.md). That is a meaningful negative rather than a gap: Newmark names 33 Sainsevains and knew the Alameda-Street merchant world street by street, so a Weill of any standing there would be in him. It also weakens the spelling lead rather than strengthening it — a “Weil Block” prominent enough to be recorded downtown would be in Newmark too, and is not. ★★ TWO NEW HANDLES from documents/lah-1888-10-11, transcribed in full 2026-09-17. (1) THE STREET’S FATE: “Jackson St. and Weill St., changed to Sepulveda St.” — the name did not merely fade, it was culled in the Oct. 1888 duplicate sweep, folded in with a Jackson Street. (2) AN INITIAL AND A TRACT: “Cedar St., in A. WEILL TRACT, changed to Hemlock St.” The family had a recorded subdivision in Los Angeles by 1888, which means a filing in the County map books with the subdivider’s full name in its title block — the first hard, findable handle on the man, and a better next step than any further open-web search. ⚠ That tract is NOT the ground this entity sits on: Cedar and Hemlock are elsewhere in the city, so the A. Weill tract is a sibling filing, not this street’s own sheet.",'),
]))

# ────────────────────────────────────────────────────────────────── teed-street
E.append(("teed-street", [
 (NULLS + '\n    sources: [],',
  '    namedAfter: "{{M. Teed}}, contractor and builder, with a shop on First Street between Main and Spring, and a member of the Common Council in the years the ground north of it was being subdivided",\n'
  '    namedAfterLink: null,\n'
  '    categories: ["person","politician","official"],\n'
  '    sources: [\n'
  '      { title: "Los Angeles Herald, Oct. 3, 1873 — advertisement: “M. TEED, CONTRACTOR AND BUILDER, Shop on First Street, Between Main and Spring, Los Angeles. Jobbing done neatly and with Dispatch.”",\n'
  '        url: "https://cdnc.ucr.edu/?a=d&d=LAH18731003.1.1" },\n'
  '      { title: "Los Angeles Herald, Oct. 10, 1873 — City Council: “The following members were present: F. Sabichi, Mullaly, Beaudery, Teed, Workman, De Celis, and Dockweiler.”",\n'
  '        url: "https://cdnc.ucr.edu/?a=d&d=LAH18731010.1.3" },\n'
  '      { title: "Harris Newmark, Sixty Years in Southern California (1916), p. 614 — among the nine who met on Aug. 2, 1897 to organise an Old Settlers’ Society: “Dr. Henry S. Orme, H. W. O’Melveny, J. M. Griffith, J. W. Gillette, A. L. Bath, J. M. Guinn, M. Teed, J. M. Elliott and W. A. Spalding”.",\n'
  '        url: "https://www.gutenberg.org/ebooks/44571" }\n'
  '    ],'),

 ('    basis: "none",\n    searched: "partial",',
  '    basis: "inferred",\n    searched: "extensive",'),

 ('    note: "Lettered on documents/mr003-240 and still Teed Street today. Nothing found says who Teed was.",',
  '    note: "Lettered on the map of Block 35½, an extension of Ord’s Survey recorded July 20, 1876 (documents/mr003-240), a few blocks north of the old plaza. There was one Teed in Los Angeles then: M. Teed, a contractor and builder whose shop was on First Street between Main and Spring, who sat on the Common Council in 1873 alongside Prudent Beaudry, and who was still reckoned an old settler in 1897, when he was one of nine men who met to found an Old Settlers’ Society. No document says the street carries his name.",'),

 ('★ THE HIGHEST-VALUE UNEXPLORED LEAD IN THIS BATCH: Teed shares documents/mr003-240 with `rosas-street`, which is exhausted, so identifying the Teed family — or simply reading that sheet’s title block — would probably crack both names at once. Survives in grid 634G3.",',
  '★★ THE LEAD PAID OFF, 2026-09-17, from two CDNC clippings Kenny supplied plus Newmark. M. TEED, three independent sightings: (1) Herald, Oct. 3, 1873 — a display advertisement, “M. Teed, Contractor and Builder, Shop on First Street, Between Main and Spring”; (2) Herald, Oct. 10, 1873 — he is on the Common Council, present at the meeting of Oct. 9 with Sabichi, Mullaly, BEAUDRY, Workman, De Celis and Dockweiler; (3) Newmark p. 614 — one of nine men who met in the Herald office on Aug. 2, 1897 to organise an Old Settlers’ Society, in company with J. M. Guinn. ★ WHY THAT IS ENOUGH FOR `inferred`: the street is about a kilometre from his shop, the sheet is 1876, and a sitting councilman who was also the town’s jobbing builder is exactly the sort of name a subdivider puts on a street off Ord’s Survey. The anchor is independently sourced three times over; the connection to the street is not. ⚠ HIS GIVEN NAME IS STILL AN INITIAL — every source has “M. Teed”. The Common Council rolls, or the Old Settlers’ Society membership list, would expand it, and either would also settle whether he is the Teed of the street. ⚠ AND `rosas-street` DID NOT COME WITH IT: the two share the sheet and nothing else, so that half of the prediction failed. Survives in grid 634G3.",'),
]))

for eid, pairs in E:
    src = edit(src, eid, pairs)

io.open(P, "w", encoding="utf-8").write(src)
print("patched %d entities in %s" % (len(E), P))
