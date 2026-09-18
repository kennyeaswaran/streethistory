# -*- coding: utf-8 -*-
"""M. Teed gets a first name, a birthplace and three council terms."""
import io, re, sys

P = "names.js"
s = io.open(P, encoding="utf-8").read()
m = re.search(r'^  "teed-street": \{$', s, re.M)
if not m:
    sys.exit("teed-street not found")
end = s.find("\n  },", m.end()) + len("\n  },")
blk = s[m.start():end]

pairs = [
 # ── namedAfter: give him his name, and the term that matters ──────────────
 ('    namedAfter: "{{M. Teed}}, contractor and builder, with a shop on First Street between Main and Spring, and a member of the Common Council in the years the ground north of it was being subdivided",',
  '    namedAfter: "{{Matthew Teed}} (1828\\u20131904), an English-born carpenter and builder with a shop on First Street between Main and Spring, who sat on the Common Council through the years the ground north of it was being subdivided",'),

 # ── one more source ───────────────────────────────────────────────────────
 ('''      { title: "Harris Newmark, Sixty Years in Southern California (1916), p. 614''',
  '''      { title: "Chronological Record of Los Angeles City Officials, 1850\\u20131938 (Los Angeles, 1938), and the Los Angeles Times obituary of Apr. 1, 1904, as digested in the Wikipedia article \\u201cMatthew Teed\\u201d \\u2014 Matthew Teed, b. Budleigh, Devonshire, Apr. 17, 1828, d. Los Angeles, Mar. 31, 1904; carpenter; Common Council Dec. 1870\\u2013Dec. 1873, Dec. 1874\\u2013Dec. 1876 and Dec. 1880\\u2013Dec. 1888; first Park Commission from 1895; charter member of the Los Angeles Pioneers Association",
        url: "https://en.wikipedia.org/wiki/Matthew_Teed" },
      { title: "Harris Newmark, Sixty Years in Southern California (1916), p. 614'''),

 # ── public note ───────────────────────────────────────────────────────────
 ('    note: "Lettered on the map of Block 35\\u00bd, an extension of Ord\\u2019s Survey recorded July 20, 1876 (documents/mr003-240), a few blocks north of the old plaza. There was one Teed in Los Angeles then: M. Teed, a contractor and builder whose shop was on First Street between Main and Spring, who sat on the Common Council in 1873 alongside Prudent Beaudry, and who was still reckoned an old settler in 1897, when he was one of nine men who met to found an Old Settlers\\u2019 Society. No document says the street carries his name.",',
  '    note: "Lettered on the map of Block 35\\u00bd, an extension of Ord\\u2019s Survey recorded July 20, 1876 (documents/mr003-240), a few blocks north of the old plaza. There was one Teed in Los Angeles then: Matthew Teed, born in Devonshire in 1828, a carpenter who learned the trade in San Francisco and kept a shop on First Street between Main and Spring. He sat on the Common Council for three terms between 1870 and 1888 \\u2014 including the term that was running when this sheet was recorded \\u2014 served on the city\\u2019s first Park Commission from 1895, and was still reckoned an old settler in 1897, when he was one of nine men who met to found an Old Settlers\\u2019 Society. He died in 1904. No document says the street carries his name.",'),

 # ── internalNote: lead with the identification ────────────────────────────
 ('    internalNote: "Moved from names-new.js 2026-09-17.',
  '    internalNote: "\\u2605\\u2605\\u2605 M. TEED IS MATTHEW TEED, 2026-09-18, and it took one web search after this had been written down as an in-person errand for the Common Council rolls and the Old Settlers\\u2019 Society list. Matthew Teed (Budleigh, Devonshire, Apr. 17, 1828 \\u2013 Los Angeles, Mar. 31, 1904): carpenter, trained in San Francisco, burnt out of a Stockton shop in 1857; Common Council Dec. 1870\\u2013Dec. 1873, Dec. 1874\\u2013Dec. 1876 and Dec. 1880\\u2013Dec. 1888; a house on Fort Hill at 513 California Street; first Park Commission from 1895; charter member of the Los Angeles Pioneers Association. \\u2b50 THE 1874\\u201376 TERM IS THE POINT \\u2014 documents/mr003-240 was recorded July 20, 1876, so he was sitting when the ground was platted, which is what the `inferred` anchor was always missing. \\u26a0 A SECOND TEED IN CITY GOVERNMENT, and he must not be confused with this one: FREEMAN G. TEED (Wilkes-Barre PA, 1851 \\u2013 Los Angeles, 1916), city auditor 1886\\u201388, councilman for the 5th Ward 1892\\u201396 and council president, and the compiler of the city\\u2019s 1887 and 1889 compiled-ordinance volumes. He was twenty-five and in Pennsylvania when this sheet was recorded, so he is not the namesake \\u2014 but any later \\u201cTeed\\u201d in a city record needs sorting between the two, and whether they were related is unknown. \\u26a0 STILL UNSHOWN: that Matthew Teed had any interest in the ground itself. The identification is of the man, not of the naming, so `inferred` stands rather than rising to `eponymous`. \\u2b50 NEXT: he is now a findable person \\u2014 an 1876-ish city directory or the county deeds would say whether he owned anything on Block 35\\u00bd. Moved from names-new.js 2026-09-17.'),
]

for old, new in pairs:
    if blk.count(old) != 1:
        sys.exit("%d matches for %r" % (blk.count(old), old[:120]))
    blk = blk.replace(old, new, 1)

blk = re.sub(r'\\u([0-9a-fA-F]{4})', lambda g: chr(int(g.group(1), 16)), blk)
io.open(P, "w", encoding="utf-8").write(s[:m.start()] + blk + s[end:])
print("patched teed-street")
