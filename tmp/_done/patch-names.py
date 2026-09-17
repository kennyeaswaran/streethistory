# -*- coding: utf-8 -*-
"""Apply the 2026-09-17 CDNC-clipping and Newmark findings to names.js.

Every edit is scoped to one entity's block, located by its `"id": {` line and
closed by the first `  },` at the same indent. Each replacement must match
exactly once inside that block or the script aborts without writing.
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

def edit(s, eid, pairs):
    a, b = block_span(s, eid)
    blk = s[a:b]
    for old, new in pairs:
        n = blk.count(old)
        if n != 1:
            sys.exit("in %s: %d matches for %r" % (eid, n, old[:90]))
        blk = blk.replace(old, new, 1)
    return s[:a] + blk + s[b:]

E = []   # (entity, [(old, new), ...])

# ————————————————————————————————————————————————————————————————— labory-lane
E.append(("labory-lane", [
 ('    namedAfter: null,\n    namedAfterLink: null,\n    categories: [],',
  '    namedAfter: "{{Antonio Labory}} (b. c. 1819 in Bordeaux), a French vintner and sheep rancher of the El Aliso circle, in Los Angeles from the late 1840s, whose ground this lane served",\n'
  '    namedAfterLink: "https://cdnc.ucr.edu/?a=d&d=LAH18870520.1.1",\n'
  '    categories: ["person","landowner","foreign"],'),
 ('    basis: "none",\n    searched: "partial",',
  '    basis: "inferred",\n    searched: "extensive",'),
 ('''        url: "https://frenchtownconfidential.blogspot.com/2018/01/breaking-news-el-aliso-vineyard-was-not.html" }
    ],''',
  '''        url: "https://frenchtownconfidential.blogspot.com/2018/01/breaking-news-el-aliso-vineyard-was-not.html" },
      { title: "Los Angeles Herald, May 20, 1887 — “A Reunion of Old Friends”: “Among those present was Antonio Labory, a hale looking Frenchman, over whose head sixty-eight summers have passed, and who was a schoolmate and companion of Mr. Vignes' father, Vital F. Vignes, in Bordeaux, France, over fifty years ago. Mr. Labory landed in San Francisco in 1844, and a few years later came to Los Angeles, where he has resided ever since.”",
        url: "https://cdnc.ucr.edu/?a=d&d=LAH18870520.1.1" },
      { title: "Los Angeles Herald, Aug. 3, 1887 — a Vignes biography: “Here Mr. Vignes engaged in the vintage business in company with such men as Pedro Sansevine and H. Labory”",
        url: "https://cdnc.ucr.edu/?a=d&d=LAH18870803.1.11" },
      { title: "Los Angeles Herald, Mar. 4, 1874 — “Simon Levy has bought 4,000 sheep of Antonio Labory, and has also rented his ranch for a year.”",
        url: "https://cdnc.ucr.edu/?a=d&d=LAH18740304.1.4" }
    ],'''),
 ('    note: "Originally the access path from Alameda Street to the Alanis property, running east of the Southern Pacific tracks to Lafayette Street. It is abandoned. Nothing found says who Labory was.",',
  '    note: "Originally the access path from Alameda Street to the Alanis property, running east of the Southern Pacific tracks to Lafayette Street, and now abandoned. There was one Labory family in Los Angeles, and it belonged to exactly this quarter: Antonio Labory, born in Bordeaux about 1819, was a schoolmate of Jean-Louis Vignes\\u2019s brother Vital, landed in San Francisco in 1844 and came to Los Angeles a few years later, and was still there in 1887; an H. Labory was in the vintage business at the El Aliso alongside Pedro Sainsevain. In 1874 Antonio Labory sold 4,000 sheep and rented out his ranch. No document says the lane carries his name, but no other Labory is known here.",'),
 ('Presumably a French surname of a landholder fronting the lane; nothing found. NOT COVERED BY KINES.",',
  '''\\u2605\\u2605 THE MAN IS FOUND, 2026-09-17, from three CDNC clippings Kenny supplied \\u2014 and the guess in the previous note (\\u201ca French surname of a landholder fronting the lane\\u201d) turns out to be exactly right. ANTONIO LABORY: born Bordeaux c. 1819 (\\u201csixty-eight summers\\u201d in May 1887), schoolmate of Vital F. Vignes, San Francisco 1844, Los Angeles by the late 1840s, sheep rancher (he sells 4,000 head to Simon Levy in Mar. 1874 and rents out the ranch), and a guest at the Vignes house-warming in 1887. A separate Herald biography of the younger Vignes names an H. LABORY in the vintage business at the Aliso \\u201cin company with such men as Pedro Sansevine\\u201d \\u2014 same surname, same vineyard, probably the same household. \\u2605 WHY `inferred` AND NOT `attested`: no source connects the man to the lane. The anchor is independently sourced (three Herald items), and the inference rests on four things at once \\u2014 the lane is in the French quarter, it ran to the Alanis property between Sainsevain Street and Alameda, its neighbours are the Aliso vineyard circle by name, and Antonio Labory is the only Labory in Los Angeles in any source found. \\u2605 THE NEGATIVE THAT MAKES IT STRONGER: Harris Newmark\\u2019s Sixty Years in Southern California, searched in full 2026-09-17, has ZERO hits for Labory or Labury \\u2014 but 33 for Sainsevain. Newmark knew that circle intimately and still did not mention him, which fits a rancher on its edge rather than contradicting the identification. NEXT STEP if anyone wants `attested`: the 1870 or 1880 census for the Labory household, or a Calvary Cemetery record, to fix the relationship between Antonio and H. NOT COVERED BY KINES.",'''),
]))

# ——————————————————————————————————————————————————————————————————— potts-st
E.append(("potts-st", [
 ('    namedAfter: null,\n    namedAfterLink: null,\n    categories: [],\n    sources: [],',
  '    namedAfter: "{{J. Wesley Potts}} (b. Texas, in Los Angeles from 1852), Prudent Beaudry\\u2019s partner in opening Temple Street, who came up from hauling dirt and peddling fruit and ended \\u201cwidely known as a weather prophet\\u201d",\n'
  '    namedAfterLink: null,\n'
  '    categories: ["person","landowner"],\n'
  '    sources: [\n'
  '      { title: "Harris Newmark, Sixty Years in Southern California, 1853\\u20131913 (1916), p. 61 \\u2014 \\u201cTemple Street had not then been opened by Beaudry and Potts, although there was a little cul-de-sac extending west from Spring Street\\u201d; and p. 126, the biography of J. Wesley Potts. Newmark\\u2019s own index runs the two together: \\u201cPotts, J. Wesley, 61, 126\\u201d.",\n'
  '        url: "https://www.gutenberg.org/ebooks/44571" }\n'
  '    ],'),
 ('    basis: "none",\n    searched: "partial",',
  '    basis: "inferred",\n    searched: "extensive",'),
 ('    note: "Lettered on P. Beaudry Subdivision B of May 1875 (documents/mr003-046-p1 and -p2). Nothing found says who Potts was.",',
  '    note: "Lettered on P. Beaudry Subdivision B of May 1875 (documents/mr003-046-p1 and -p2). Harris Newmark names Beaudry\\u2019s partner: Temple Street, he writes, \\u201chad not then been opened by Beaudry and Potts\\u201d. The Potts of that pairing is J. Wesley Potts, who tramped across the plains from Texas in 1852, reached Los Angeles in September with nothing, hauled dirt in a hand-cart to patch the streets, peddled fruit from a basket, went to the mines and came back, raised vegetables and put the first locally grown sweet potatoes on the market, and was later \\u201cwidely known as a \\u2018weather prophet\\u2019 \\u2014 with predictions quite as likely to be worthless as to come true.\\u201d No document says the street on Beaudry\\u2019s own subdivision carries his partner\\u2019s name, but nothing else in Los Angeles is called Potts.",'),
 ('    internalNote: "Moved from names-new.js 2026-09-17. \\u26a0 CONSIDERED AND NOT ADOPTED',
  '    internalNote: "Moved from names-new.js 2026-09-17. \\u2605\\u2605 THE 2026-09-17 REJECTION IS REVERSED, and the reasoning that produced it is left below so the reversal can be checked. Harris Newmark\\u2019s Sixty Years in Southern California \\u2014 searchable in full since Kenny fetched it on 2026-09-17 \\u2014 supplies in one clause the exact link the rejection said was missing: \\u201cTemple Street had not then been opened by BEAUDRY AND POTTS.\\u201d Potts was Prudent Beaudry\\u2019s partner in street-opening, and this street is on Beaudry\\u2019s own subdivision. Newmark\\u2019s index (\\u201cPotts, J. Wesley, 61, 126\\u201d) identifies that Potts with the J. Wesley Potts of his p. 126 biography, so the man is the same one the rejection had already found under the initials James W. \\u2605 AND THE CHRONOLOGICAL OBJECTION FALLS WITH IT: the rejection turned on his entering the Common Council in Dec. 1877, two years after the 1875 sheet. That was never the relevant date. The partnership with Beaudry predates the Council \\u2014 Newmark is describing the early 1850s townscape when he says Temple Street had not YET been opened by them \\u2014 so by 1875 the two had been in business together for years. \\u2605 `inferred`, not `attested`: Newmark names the partnership, not the street. What would settle it is the title block or dedication of documents/mr003-046, or a deed between Beaudry and Potts. THE ORIGINAL REJECTION, kept verbatim: \\u26a0 CONSIDERED AND NOT ADOPTED'),
]))

# ——————————————————————————————————————————————————— warren / decatur (sourced)
E.append(("warren-st-arts-district", [
 ('    sources: [],',
  '    sources: [\n'
  '      { title: "Los Angeles Herald, Oct. 11, 1888 \\u2014 the special committee\\u2019s street-name list: \\u201cWarren St., in S. part of city, changed to Decatur St.\\u201d",\n'
  '        url: "https://cdnc.ucr.edu/?a=d&d=LAH18881011.1.3" },\n'
  '      { title: "Los Angeles Herald, Feb. 5, 1887 \\u2014 \\u201cFor Sale. The E. B. Millar Property\\u201d, the tract advertised bounded by Seventh Street, Alameda Street and Lemon Street, \\u201cJust near the famous Wolfskill Orchard\\u201d, agents Byram & Poindexter, 27 W. First St.",\n'
  '        url: "https://cdnc.ucr.edu/?a=d&d=LAH18870205.1.4" }\n'
  '    ],'),
 ('along what is now Decatur Street. Nothing found says who or what it was named for.",',
  'along what is now Decatur Street. The city council\\u2019s street-name committee proposed changing it to Decatur Street in October 1888, twenty-one months after the tract was recorded. Nothing found says who or what Warren was named for.",'),
 ('That is from the alignment, not from a source; no renaming document has been found, and the subdivider of Tract No. 1836 is the obvious next question.',
  '\\u2605\\u2605 AND AS OF 2026-09-17 IT IS SOURCED. documents/lah-1888-10-11, now transcribed in full, carries \\u201cWarren St., in S. part of city, changed to Decatur St.\\u201d The renaming was an inference from the alignment when this note was written; it is now a line in the record, and the date collapses from \\u201csomewhere in those 26 years\\u201d to October 1888. \\u26a0 It is a COMMITTEE PROPOSAL, not an instrument \\u2014 several lines in that list did not survive into Ordinance No. 48 \\u2014 so what is established is that the council intended the change in Oct. 1888 and that Decatur was on the corridor by 1913. The subdivider of Tract No. 1836 is no longer the obvious next question; Ordinance No. 48 is. \\u2605 THE TRACT IS ALSO CORROBORATED: a Herald advertisement of Feb. 5, 1887 \\u2014 eleven days after the sheet was recorded \\u2014 offers \\u201cThe E. B. Millar Property\\u201d as 26 lots bounded by SEVENTH STREET, ALAMEDA ST. and LEMON ST., \\u201cfirst-class vineyard\\u201d, \\u201cJust near the famous Wolfskill Orchard\\u201d, through Byram & Poindexter of 27 W. First St. That independently confirms this project\\u2019s alignment of the tract\\u2019s eastern boundary on Lemon Street.'),
]))

E.append(("decatur-st", [
 ('    sources: [],',
  '    sources: [\n'
  '      { title: "Los Angeles Herald, Oct. 11, 1888 \\u2014 the special committee\\u2019s street-name list: \\u201cWarren St., in S. part of city, changed to Decatur St.\\u201d",\n'
  '        url: "https://cdnc.ucr.edu/?a=d&d=LAH18881011.1.3" }\n'
  '    ],'),
 ('The same corridor was lettered Warren Street on the E. B. Millar Tract of 1887. Nothing found says who or what Decatur was.",',
  'The same corridor was lettered Warren Street on the E. B. Millar Tract of 1887, and the city council\\u2019s street-name committee proposed the change from Warren to Decatur in October 1888. Nothing found says who or what Decatur was.",'),
 ('\\u2605 THE REAL LEAD is that it replaced Warren (see `warren-st-arts-district`), which puts the naming event between 1887 and 1913 and makes the subdivider of Tract No. 1836 the person to identify \\u2014 a question the sheet\\u2019s own title block answers and the open web does not.",',
  '\\u2605\\u2605 THE NAMING EVENT IS NOW DATED, 2026-09-17: documents/lah-1888-10-11 carries \\u201cWarren St., in S. part of city, changed to Decatur St.\\u201d So the name arrives in Oct. 1888, not \\u201csomewhere between 1887 and 1913\\u201d, and the subdivider of Tract No. 1836 is no longer the person to identify \\u2014 whoever sat on the 1888 council\\u2019s street-name committee is. \\u26a0 That is a committee PROPOSAL; Ordinance No. 48 of May 1889 is what would confirm it. \\u2605 AND THE CONTEXT ARGUES AGAINST A NAMESAKE AT ALL. Read in its own column, this line sits in the duplicate cull, where the committee is disposing of two Warrens at once \\u2014 the other becomes Putnam, in Ling\\u2019s Addition \\u2014 by reaching for replacement names off a shelf. Its neighbours in that shelf are Putnam, Cushing, Farragut, Sheridan, Sherman, McPherson, Quebec, Concord, Hartford and Dartmouth. Decatur belongs to a batch of American military and New England names chosen to be UNUSED, not to commemorate. That does not prove Stephen Decatur was not in the committee\\u2019s mind, but it explains why no local connection has ever turned up, and it is the reason to stop looking for one.",'),
]))

# ——————————————————————————————————————————————————————————— crescent-park-tract
E.append(("crescent-park-tract", [
 ('    sources: [],',
  '    sources: [\n'
  '      { title: "Los Angeles Herald, Oct. 11, 1888 \\u2014 the special committee\\u2019s street-name list: \\u201cCrescent Ave., changed to Beaudry St.\\u201d",\n'
  '        url: "https://cdnc.ucr.edu/?a=d&d=LAH18881011.1.3" }\n'
  '    ],'),
 ('    note: "Lettered on Prudent Beaudry\\u2019s Park tract (documents/mr007-026-p1). Nothing found says who or what it was named for.",',
  '    note: "Lettered on Prudent Beaudry\\u2019s Park tract (documents/mr007-026-p1), where it begins where the sheet\\u2019s Beaudry Street ends and carries that line on to the north-east. In October 1888 the city council\\u2019s street-name committee proposed folding it into Beaudry Street, which is the same thing said in an ordinance. Nothing found says who or what Crescent itself was named for; on a hillside tract it is likely the shape of the road.",'),
 ('That is a mile away and a different tract.",',
  '''That is a mile away and a different tract. \\u2605\\u2605 A SUCCESSOR, 2026-09-17, and it corroborates the Beaudry split. documents/lah-1888-10-11 carries \\u201cCrescent Ave., changed to Beaudry St.\\u201d, and the geometry on this entity\\u2019s own sheet says exactly which Beaudry that is: on mr007-026-p1 the `beaudry-st` row ends at 34.06091,\\u2212118.24905 and this entity\\u2019s trace BEGINS at 34.06091,\\u2212118.24904 \\u2014 1.4 m away, end to end on one line \\u2014 while the `beaudry-avenue` row on the same sheet is 371 m off at its nearest point. So Crescent Avenue is the north-eastward continuation of BEAUDRY STREET, the Fremont Avenue lineage, and the 1888 proposal is the council extending a name over its own continuation, not moving it between roadways. \\u2605 THAT IS AN INDEPENDENT CHECK ON THE INK RULE recorded under `beaudry-st`: the rule was derived from the ink across twelve rows, and here a document from 1888 lands on the same side of it. \\u26a0 Whether the change was carried out is not established \\u2014 the 1888 list is a committee proposal \\u2014 and a change row waits on Ordinance No. 48.",'''),
 ('    basis: "none",\n    searched: "partial",',
  '    basis: "none",\n    searched: "extensive",'),
]))

# ———————————————————————————————————————————————————————————————————————— weill
E.append(("weill", [
 ('    sources: [],',
  '    sources: [\n'
  '      { title: "Los Angeles Herald, Oct. 11, 1888 \\u2014 the special committee\\u2019s street-name list: \\u201cJackson St. and Weill St., changed to Sepulveda St.\\u201d and, separately, \\u201cCedar St., in A. Weill tract, changed to Hemlock St.\\u201d",\n'
  '        url: "https://cdnc.ucr.edu/?a=d&d=LAH18881011.1.3" }\n'
  '    ],'),
 ('    note: "Lettered on documents/mr002-526-p2 and documents/mr004-012-p2, in the French quarter east of Alameda. The name is gone from Los Angeles, and no Weill of that quarter has been identified.",',
  '    note: "Lettered on documents/mr002-526-p2 and documents/mr004-012-p2, in the French quarter east of Alameda. In October 1888 the city council\\u2019s street-name committee proposed folding Weill Street, together with a Jackson Street, into Sepulveda Street, and the name is gone from Los Angeles today. The same list records an \\u201cA. Weill tract\\u201d elsewhere in the city, so the family had a recorded subdivision of its own by 1888; no Weill of this quarter has been identified by name.",'),
 ('Harris Newmark\\u2019s Sixty Years in Southern California is the book that would settle this circle and it could NOT be searched \\u2014 archive.org\\u2019s full-text endpoint was returning stale cached results throughout.",',
  '''\\u2705 NEWMARK HAS NOW BEEN SEARCHED, 2026-09-17, and the answer is a clean ZERO \\u2014 no Weill, no Weil. Kenny fetched the Gutenberg text after archive.org\\u2019s full-text endpoint proved to be serving stale cached results (see CLAUDE.md). That is a meaningful negative rather than a gap: Newmark names 33 Sainsevains and knew the Alameda-Street merchant world street by street, so a Weill of any standing there would be in him. The spelling lead is therefore weaker, not stronger \\u2014 a \\u201cWeil Block\\u201d prominent enough to be recorded downtown would also be in Newmark, and is not. \\u2605\\u2605 TWO NEW HANDLES from documents/lah-1888-10-11, transcribed in full 2026-09-17. (1) THE STREET\\u2019S FATE: \\u201cJackson St. and Weill St., changed to Sepulveda St.\\u201d \\u2014 so the name did not merely fade, it was culled in the Oct. 1888 duplicate sweep, folded in with a Jackson Street. (2) AN INITIAL AND A TRACT: \\u201cCedar St., in A. WEILL TRACT, changed to Hemlock St.\\u201d The family had a recorded subdivision in Los Angeles by 1888, which means a filing in the County map books with the subdivider\\u2019s full name in its title block \\u2014 the first hard, findable handle on the man, and a better next step than any further open-web search. \\u26a0 The tract is not the ground this entity sits on; Cedar and Hemlock are a different part of the city, so the A. Weill tract is a sibling filing, not this street\\u2019s own sheet.",'''),
]))

# ——————————————————————————————————————————————————————————————————— teed-street
E.append(("teed-street", [
 ('    namedAfter: null,\n    namedAfterLink: null,\n    categories: [],\n    sources: [],',
  '    namedAfter: "{{M. Teed}}, contractor and builder, with a shop on First Street between Main and Spring, and a member of the Common Council when the ground north of it was being subdivided",\n'
  '    namedAfterLink: null,\n'
  '    categories: ["person","politician","official"],\n'
  '    sources: [\n'
  '      { title: "Los Angeles Herald, Oct. 3, 1873 \\u2014 advertisement: \\u201cM. TEED, CONTRACTOR AND BUILDER, Shop on First Street, Between Main and Spring, Los Angeles. Jobbing done neatly and with Dispatch.\\u201d",\n'
  '        url: "https://cdnc.ucr.edu/?a=d&d=LAH18731003.1.1" },\n'
  '      { title: "Los Angeles Herald, Oct. 10, 1873 \\u2014 City Council: \\u201cThe following members were present: F. Sabichi, Mullaly, Beaudery, TEED, Workman, De Celis, and Dockweiler.\\u201d",\n'
  '        url: "https://cdnc.ucr.edu/?a=d&d=LAH18731010.1.3" },\n'
  '      { title: "Harris Newmark, Sixty Years in Southern California (1916), p. 614 \\u2014 among the nine men who met on Aug. 2, 1897 to organise an Old Settlers\\u2019 Society: \\u201cDr. Henry S. Orme, H. W. O\\u2019Melveny, J. M. Griffith, J. W. Gillette, A. L. Bath, J. M. Guinn, M. TEED, J. M. Elliott and W. A. Spalding\\u201d.",\n'
  '        url: "https://www.gutenberg.org/ebooks/44571" }\n'
  '    ],'),
 ('    basis: "none",\n    searched: "partial",',
  '    basis: "inferred",\n    searched: "extensive",'),
 ('    note: "Lettered on documents/mr003-240 and still Teed Street today. Nothing found says who Teed was.",',
  '    note: "Lettered on the map of Block 35\\u00bd, an extension of Ord\\u2019s Survey recorded July 20, 1876 (documents/mr003-240), a few blocks north of the old plaza. There was one Teed in Los Angeles then: M. Teed, a contractor and builder whose shop was on First Street between Main and Spring, who sat on the Common Council in 1873 alongside Prudent Beaudry, and who was still reckoned an old settler in 1897, when he was one of nine men who met to found an Old Settlers\\u2019 Society. No document says the street carries his name.",'),
 ('\\u2605 THE HIGHEST-VALUE UNEXPLORED LEAD IN THIS BATCH: Teed shares documents/mr003-240 with `rosas-street`, which is exhausted, so identifying the Teed family \\u2014 or simply reading that sheet\\u2019s title block \\u2014 would probably crack both names at once. Survives in grid 634G3.",',
  '''\\u2605\\u2605 THE LEAD PAID OFF, 2026-09-17, from two CDNC clippings Kenny supplied plus Newmark. M. TEED, three independent sightings: (1) Herald, Oct. 3, 1873 \\u2014 a display advertisement, \\u201cM. Teed, Contractor and Builder, Shop on First Street, Between Main and Spring\\u201d; (2) Herald, Oct. 10, 1873 \\u2014 he is on the Common Council, present at the meeting of Oct. 9 with Sabichi, Mullaly, BEAUDRY, Workman, De Celis and Dockweiler; (3) Newmark p. 614 \\u2014 one of nine men who met in the Herald office on Aug. 2, 1897 to organise an Old Settlers\\u2019 Society, in company with J. M. Guinn. \\u2605 WHY THAT IS ENOUGH FOR `inferred`: the street is 1 km from his shop, the sheet is 1876, and a sitting councilman who was also the town\\u2019s jobbing builder is precisely the sort of name a subdivider puts on a street off Ord\\u2019s Survey. The anchor is independently sourced three times over; the connection to the street is not. \\u26a0 HIS GIVEN NAME IS STILL AN INITIAL. Every source has \\u201cM. Teed\\u201d. The Common Council rolls, or the Old Settlers\\u2019 Society membership list, would expand it. \\u26a0 AND `rosas-street` DID NOT COME WITH IT \\u2014 the two share the sheet but nothing else; that half of the prediction failed. Survives in grid 634G3.",'''),
]))

for eid, pairs in E:
    src = edit(src, eid, pairs)

io.open(P, "w", encoding="utf-8").write(src)
print("patched %d entities in %s" % (len(E), P))
