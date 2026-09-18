# -*- coding: utf-8 -*-
"""M. Teed gets a first name, a birthplace and three council terms.

NB, THE THIRD TIME THIS HAS BITTEN: match strings must contain NO non-ASCII.
The editor pipeline that writes these scripts turns real unicode into literal
backslash-u, which then matches nothing in names.js (which stores real
characters). So: locate fields by their ASCII names and replace whole spans,
and build replacement text with single-backslash \\uXXXX escapes in the PYTHON
source, which Python turns into real characters at runtime.
"""
import io, re, sys

P = "names.js"
s = io.open(P, encoding="utf-8").read()
m = re.search(r'^  "teed-street": \{$', s, re.M)
if not m:
    sys.exit("teed-street not found")
end = s.find("\n  },", m.end()) + len("\n  },")
blk = s[m.start():end]


def field_span(b, field):
    """Span of one `    field: "...",` entry, tolerating multi-line values."""
    i = b.find('\n    %s: "' % field)
    if i < 0 or b.find('\n    %s: "' % field, i + 1) >= 0:
        sys.exit("%s: not found exactly once" % field)
    k = i + 1
    while True:
        k = b.find('",\n', k)
        if k < 0:
            sys.exit("%s: no terminator" % field)
        if re.match(r'    [A-Za-z_][A-Za-z0-9_]*:|  \},', b[k + 3:]):
            break
        k += 1
    return i + 1, k + 2          # start of "    field", end after the comma


def set_field(b, field, value):
    a, z = field_span(b, field)
    return b[:a] + '    %s: "%s",' % (field, value) + b[z:]


NAMED = ("{{Matthew Teed}} (1828–1904), an English-born carpenter and builder "
         "with a shop on First Street between Main and Spring, who sat on the Common "
         "Council through the years the ground north of it was being subdivided")

NOTE = ("Lettered on the map of Block 35½, an extension of Ord’s Survey "
        "recorded July 20, 1876 (documents/mr003-240), a few blocks north of the old "
        "plaza. There was one Teed in Los Angeles then: Matthew Teed, born in "
        "Devonshire in 1828, a carpenter who learned his trade in San Francisco and "
        "kept a shop on First Street between Main and Spring. He sat on the Common "
        "Council for three terms between 1870 and 1888 — including the one that "
        "was running when this sheet was recorded — served alongside Prudent "
        "Beaudry, joined the city’s first Park Commission in 1895, and was still "
        "reckoned an old settler in 1897, when he was one of nine men who met to found "
        "an Old Settlers’ Society. He died in 1904. No document says the street "
        "carries his name.")

LEAD = ("★★★ M. TEED IS MATTHEW TEED, 2026-09-18 — and it took one "
        "web search, after this had been written down in handbook/IN-PERSON.md as an "
        "errand for the Common Council rolls and the Old Settlers’ Society "
        "membership list. Matthew Teed (Budleigh, Devonshire, Apr. 17, 1828 – Los "
        "Angeles, Mar. 31, 1904): carpenter, trained in San Francisco, burnt out of a "
        "Stockton shop in 1857; Common Council Dec. 1870–Dec. 1873, Dec. "
        "1874–Dec. 1876 and Dec. 1880–Dec. 1888; a house on Fort Hill at 513 "
        "California Street; the city’s first Park Commission from 1895; charter "
        "member of the Los Angeles Pioneers Association. ⭐ THE 1874–76 TERM IS "
        "THE POINT: documents/mr003-240 was recorded July 20, 1876, so he was sitting on "
        "the Council at the moment the ground was platted — which is the "
        "coincidence the `inferred` anchor was leaning on without being able to state "
        "it. ⚠ A SECOND TEED IN CITY GOVERNMENT, not to be confused with this one: "
        "FREEMAN G. TEED (Wilkes-Barre, Pa., 1851 – Los Angeles, 1916), city "
        "auditor 1886–88, councilman for the 5th Ward 1892–96 and council "
        "president, and the compiler of the city’s 1887 and 1889 compiled-ordinance "
        "volumes (handbook/IN-PERSON.md §1b). He was twenty-five and in Pennsylvania "
        "when this sheet was recorded, so he is not the namesake — but any later "
        "“Teed” in a city record needs sorting between the two, and whether "
        "they were related is unknown. ⚠ STILL UNSHOWN: that Matthew Teed had any "
        "interest in this ground. The identification is of the man, not of the naming, "
        "so `inferred` stands and does not rise. ⭐ NEXT, and now cheap because he is "
        "a findable person: an 1876-ish city directory or the county deeds would say "
        "whether he owned anything on Block 35½. ")

SOURCE = (
 '      { title: "Chronological Record of Los Angeles City Officials, 1850–1938 '
 '(Los Angeles, 1938), and the Los Angeles Times obituary of Apr. 1, 1904, as digested '
 'in the Wikipedia article “Matthew Teed” — Matthew Teed, b. Budleigh, '
 'Devonshire, Apr. 17, 1828, d. Los Angeles, Mar. 31, 1904; carpenter; Common Council '
 'Dec. 1870–Dec. 1873, Dec. 1874–Dec. 1876 and Dec. 1880–Dec. 1888; the '
 'city’s first Park Commission from 1895; charter member of the Los Angeles '
 'Pioneers Association",\n'
 '        url: "https://en.wikipedia.org/wiki/Matthew_Teed" },\n')

blk = set_field(blk, "namedAfter", NAMED)
blk = set_field(blk, "note", NOTE)

anchor = '    internalNote: "'
if blk.count(anchor) != 1:
    sys.exit("internalNote anchor not unique")
blk = blk.replace(anchor, anchor + LEAD, 1)

anchor = "    sources: [\n"
if blk.count(anchor) != 1:
    sys.exit("sources anchor not unique")
blk = blk.replace(anchor, anchor + SOURCE, 1)

io.open(P, "w", encoding="utf-8").write(s[:m.start()] + blk + s[end:])
print("patched teed-street")
