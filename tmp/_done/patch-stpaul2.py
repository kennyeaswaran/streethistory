# -*- coding: utf-8 -*-
"""Rewrite st-paul-avenue whole: the institution reading, and fix the two
missing spaces an earlier append left in the concatenated prose."""
import io, re, sys

P = "names.js"
s = io.open(P, encoding="utf-8").read()

m = re.search(r'^  "st-paul-avenue": \{$', s, re.M)
if not m:
    sys.exit("st-paul-avenue not found")
end = s.find("\n  },", m.end()) + len("\n  },")

NEW = '''  "st-paul-avenue": {
    spellings: [{ forms: ["St. Paul Avenue"] }],
    namedAfter: "{{St. Paul\\u2019s School}}, the Episcopal school whose lands this street was cut across \\u2014 its own 1900 replat is the first document to letter the name",
    namedAfterLink: null,
    categories: ["company"],
    sources: [
      { title: "Recorded map: \\u201cPlat of Subdivision of a portion of Lot 1 Block 37 Hancocks Surv. L.A. City, made at request of the Vestry of St. Paul\\u2019s P. E. Church\\u201d, recorded May 9, 1889 (M.R. 5-566) \\u2014 the sheet\\u2019s own title block",
        url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR005/MR005-566.pdf" },
      { title: "Recorded map: \\u201cMap of the Subdivision of the Lands of St. Paul\\u2019s School, Situated in Lot 1, Block 37, Hancock Survey, Lying to the North of Orange Street\\u201d, Jan. 1893 (M.R. 52-85)",
        url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR052/MR052-085.pdf" },
      { title: "Recorded map: \\u201cMap of a Replat of a Portion of the Subdivision of the Lands of St. Paul\\u2019s School\\u201d, Feb. 1900 (M.R. 78-55) \\u2014 the first sheet to letter ST. PAUL AVENUE",
        url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR078/MR078-055.pdf" }
    ],
    basis: "inferred",
    disputed: false,
    note: "Lettered on the 1900 replat of the lands of St. Paul\\u2019s School (documents/mr078-055), west of downtown, and it survives. One owner holds the ground through three sheets: the Vestry of St. Paul\\u2019s Protestant Episcopal Church had Lot 1 of Block 37, Hancock\\u2019s Survey subdivided in May 1889 (documents/mr005-566); the lands of St. Paul\\u2019s School in the same lot were subdivided in January 1893 (documents/mr052-085); and the street is first lettered on the school\\u2019s own replat of 1900. The sheets before that draw no street there at all.",
    internalNote: "\\u2605\\u2605\\u2605 REGRADED 2026-09-18 FROM `none` TO `inferred`, on Kenny\\u2019s reading and on three sheets this corpus already held. The entry until now said \\u201cthree live readings and nothing choosing between them\\u201d \\u2014 the apostle, the Minnesota city, a local church. The third wins, and it is not a church in the abstract: it is a specific institution holding this specific ground. THE SEQUENCE, all on Lot 1 of Block 37, Hancock\\u2019s Survey: (1) documents/mr003-569, the Nichols Addition of 1878, covers the ground and draws NO street where Saint Paul Avenue now runs (`absent`); (2) documents/mr005-566, May 1889, \\u201cPlat of Subdivision of a Portion of Lot 1, Block 37 \\u2026 MADE AT THE REQUEST OF THE VESTRY OF ST. PAUL\\u2019S P.E. CHURCH\\u201d \\u2014 and Saint Paul Avenue and Saint Paul Place are STILL `absent` on it; (3) documents/mr052-085, Jan. 1893, \\u201cMap of the Subdivision of the LANDS OF ST. PAUL\\u2019S SCHOOL, Situated in Lot 1, Block 37 \\u2026 Lying to the North of Orange Street\\u201d; (4) documents/mr078-055, Feb. 1900, \\u201cMap of a Replat of a Portion of the Subdivision of the Lands of St. Paul\\u2019s School\\u201d \\u2014 and THIS is the sheet that letters ST. PAUL AVENUE. A street cut across an institution\\u2019s land and first named on that institution\\u2019s own replat, twenty-two years after the first sheet over the same ground showed nothing there. \\u2605 WHY `inferred` AND NOT `eponymous`, which is the grade this shape usually earns: \\u00a73.1\\u2019s `eponymous` is PERSON-SHAPED \\u2014 it requires `landowner` or `family`, both of which sit under `person` in the category tree, and check-model.js errors without one. The landowner here is an institution, so the categories say `company` (\\u201cAn institution\\u201d) and the grade drops to `inferred`, whose anchor \\u2014 a documented landholding across four sheets and twenty-two years \\u2014 is amply met. \\u26a0 IF THE SPEC EVER GROWS AN INSTITUTIONAL `eponymous`, THIS ENTITY IS THE CASE TO TEST IT ON. \\u26a0 CHURCH OR SCHOOL IS NOT SETTLED. `namedAfter` leads with the school because the school\\u2019s sheet coins the name; that the school was the church\\u2019s is an inference from the shared name and the shared lot, and no source here states the relationship. \\u2b50 KENNY REPORTS MORE SHEETS IN THE COUNTY BOOKS than this corpus holds \\u2014 a TWO-PAGE \\u201cSt. Paul\\u2019s P.E. Church Subdivision\\u201d, and a \\u201cSt. Paul\\u2019s School Replat\\u201d distinct from M.R. 78-55. Only one page of the church sheet is here, and a second page may letter the street earlier than 1900, which would move the naming back from the school to the church. \\u26a0 A ST. PAUL PLACE also exists in the city registry, in the adjacent grid square, and is `absent` on documents/mr005-566 \\u2014 it is not in this corpus and now plainly wants an entity of its own, on the same warrant as this one. NOT COVERED BY KINES (404, and absent from his DTLA index); absent from Garrigues under both \\u201cSt. Paul\\u201d and \\u201cSaint Paul\\u201d.",
    possiblySameAs: null, aliases: []
  },'''

io.open(P, "w", encoding="utf-8").write(s[:m.start()] + NEW + s[end:])
print("rewrote st-paul-avenue")
