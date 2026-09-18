# -*- coding: utf-8 -*-
"""St. Paul Avenue is named for the institution, not the saint or the city.
Kenny's reading, 2026-09-18, and the corpus already holds the three sheets."""
import io, re, sys

P = "names.js"
s = io.open(P, encoding="utf-8").read()

m = re.search(r'^  "st-paul-avenue": \{$', s, re.M)
if not m:
    sys.exit("st-paul-avenue not found")
end = s.find("\n  },", m.end()) + len("\n  },")
blk = s[m.start():end]

pairs = [
 ('    namedAfter: null,\n    namedAfterLink: null,\n    categories: [],',
  '    namedAfter: "{{St. Paul\'s School}}, the Episcopal school whose land this street was cut across — its own 1900 replat is the first document to letter the name",\n'
  '    namedAfterLink: null,\n'
  '    categories: ["company"],'),

 ('    basis: "none",\n    searched: "partial",',
  '    basis: "inferred",'),

 ('    note: "Lettered on documents/mr078-055, west of downtown. It survives. Whether the name is the apostle, the city in Minnesota or a local church is not documented.",',
  '    note: "Lettered on the 1900 replat of the lands of St. Paul\'s School (documents/mr078-055), '
  'west of downtown, and it survives. The ground has one owner through three sheets: the Vestry of '
  'St. Paul\'s Protestant Episcopal Church had Lot 1 of Block 37, Hancock\'s Survey subdivided in May '
  '1889 (documents/mr005-566), the lands of St. Paul\'s School in the same lot were subdivided in '
  'Jan. 1893 (documents/mr052-085), and the street is first lettered on the school\'s own replat of '
  '1900. Earlier sheets over the same ground draw no street there at all.",'),

 ('    internalNote: "Moved from names-new.js 2026-09-17. Three live readings and nothing choosing between them, which is the `florida-st` shape and why this stays `none` rather than being graded `lexical`. NOT COVERED BY KINES (404, and absent from his DTLA index); absent from Garrigues under both “St. Paul” and “Saint Paul”. ⚠ A ST. PAUL PLACE also exists in the city registry, in the adjacent grid square — it is not in this corpus and may want an entity of its own.",',
  '    internalNote: "★★★ REGRADED 2026-09-18 FROM `none` TO `inferred`, on Kenny\'s reading and on '
  'three sheets this corpus already held. The old note said “three live readings and nothing choosing '
  'between them” — the apostle, the Minnesota city, a local church. The third wins, and it is not a '
  'church in the abstract but a specific institution holding this specific ground. THE SEQUENCE, all '
  'on Lot 1 of Block 37, Hancock\'s Survey: (1) documents/mr003-569, the Nichols Addition of 1878, '
  'covers the ground and draws NO street where Saint Paul Avenue now runs (`absent`); (2) '
  'documents/mr005-566, May 1889, “Plat of Subdivision of a Portion of Lot 1, Block 37 … MADE AT THE '
  'REQUEST OF THE VESTRY OF ST. PAUL\'S P.E. CHURCH”, and Saint Paul Avenue and Saint Paul Place are '
  'still `absent` on it; (3) documents/mr052-085, Jan. 1893, “Map of the Subdivision of the LANDS OF '
  'ST. PAUL\'S SCHOOL, Situated in Lot 1, Block 37 … Lying to the North of Orange Street”; (4) '
  'documents/mr078-055, Feb. 1900, “Map of a Replat of a Portion of the Subdivision of the Lands of '
  'St. Paul\'s School” — and THIS is the sheet that letters ST. PAUL AVENUE. A street cut across an '
  'institution\'s land and first named on that institution\'s own replat. ★ WHY `inferred` AND NOT '
  '`eponymous`, which is the grade this shape usually earns: §3.1\'s `eponymous` is person-shaped — '
  'it requires `landowner` or `family`, both of which sit under `person` in the category tree, and '
  'check-model.js errors without one. The landowner here is an institution, so the categories say '
  '`company` (“An institution”) and the grade drops to `inferred`, whose anchor — a documented '
  'landholding over four sheets and twenty-two years — is amply met. ⚠ IF THE SPEC EVER GROWS AN '
  'INSTITUTIONAL `eponymous`, this entity is the case to test it on. ⚠ CHURCH OR SCHOOL is not '
  'settled and `namedAfter` leads with the school because the school\'s sheet coins the name; that '
  'the school was the church\'s is Kenny\'s inference from the shared name and the shared lot, and no '
  'source here states the relationship. ⭐ KENNY ALSO REPORTS A TWO-PAGE “St. Paul\'s P.E. Church '
  'Subdivision” and a “St. Paul\'s School Replat” in the county books; only one page of the church '
  'sheet is in this corpus, and the second may letter the street earlier than 1900. ⚠ A ST. PAUL '
  'PLACE also exists in the city registry, in the adjacent grid square, and is `absent` on '
  'documents/mr005-566 — it is not in this corpus and now plainly wants an entity of its own, on the '
  'same warrant as this one. NOT COVERED BY KINES (404, and absent from his DTLA index); absent from '
  'Garrigues under both “St. Paul” and “Saint Paul”.",'),
]

for old, new in pairs:
    if blk.count(old) != 1:
        sys.exit("%d matches for %r" % (blk.count(old), old[:110]))
    blk = blk.replace(old, new, 1)

io.open(P, "w", encoding="utf-8").write(s[:m.start()] + blk + s[end:])
print("patched st-paul-avenue")
