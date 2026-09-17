import io, sys, re

P = "documents/lah-1897-12-07/lah-1897-12-07.js"
s = io.open(P, encoding="utf-8").read()
orig = s

# 1. The "partially transcribed" warning is no longer true of the tail.
old_warn = """// ⚠ PARTIALLY TRANSCRIBED. The two long lists below are quoted; the tail of the
// column (further changes, and a Naud Street referral on the second clip) is not.
//
// PROVENANCE. Two clippings supplied by Kenny, 2026-09-06 (CDNC phrase search)."""
new_warn = """// ✔ NOW TRANSCRIBED END TO END. The tail of the column — ten further changes, from
// Castello Street to Basil Street — was missing until Kenny supplied the full
// column on 2026-09-17; it is the `tail-list` excerpt below. Only the last line
// ("Basil street should be changed to ——") runs off the bottom of the crop, and the
// Naud Street referral on the second clip is a fragment whose item is off-crop.
//
// ★ THE TAIL ADDS A TRACT THIS CORPUS IS ABOUT TO NEED: "Castello street, in the
// ANDERSON TRACT". `anderson` is sitting in names-new.js awaiting research as this
// is written, and documents/lah-1888-10-11 has "Anderson St. and Anderson Ave.
// changed to Anderson St." — so there are three independent sightings of an
// Anderson holding in the city, nine years apart, before anyone has identified him.
//
// PROVENANCE. Two clippings supplied by Kenny, 2026-09-06 (CDNC phrase search);
// the full column 2026-09-17, crop 2128,1496,743,3573 beside this file."""
assert old_warn in s, "warn block not found"
s = s.replace(old_warn, new_warn, 1)

# 2. Add the tail-list excerpt after the reasons-list excerpt.
anchor = """      note: "Every entry carries its diagnosis. Note the Sunset Boulevard gap-filling four years " +
            "after documents/lah-1893-10-29 assembled it." },
"""
assert anchor in s, "reasons-list note not found"
tail = anchor + """
    { id: "tail-list",
      text: "Castello street, in the Anderson tract, should be changed to Zamora street. Herbert " +
            "street, in the Lienaus Cottage Home tract, should be changed to Thirty-sixth street. " +
            "Harwood street, in the Harwood tract, should be changed to Fifty-seventh street. San " +
            "Diego street, from Santa Monica avenue to Figueroa street, should be changed; I would " +
            "suggest to Rosecrans way. Park street, in Lambies subdivision, should be changed to San " +
            "Pablo street. Alturas street, formerly Prospect street, in the Norton tract, should be " +
            "changed; I would suggest Walker street. That portion of San Fernando street which was " +
            "formerly Olympia street, should be changed to Downey avenue, as there are now two " +
            "branches of San Fernando. Juanita street in Maltman's first addition should be changed " +
            "to Juanita avenue. Rocksbury street in Kurts & Bradshaw's sub should be changed to " +
            "Roxbury avenue. Basil street should be changed to \\u2014\\u2014",
      note: "The tail of the column, supplied 2026-09-17. ★ THREE THINGS IN IT are worth more than " +
            "the renamings. (1) The engineer twice writes \\u201cI WOULD SUGGEST\\u201d \\u2014 Rosecrans way, " +
            "Walker street \\u2014 which is him coining a name at his desk rather than reporting one in " +
            "use, exactly the hazard handbook/change-rows-amendment.md \\u00a710 form 5 was written " +
            "about, and here the document itself marks which lines those are. (2) \\u201cAlturas street, " +
            "FORMERLY PROSPECT STREET, in the Norton tract\\u201d closes a loop with " +
            "documents/lah-1888-10-11, which proposed \\u201cProspect St., in Norton tract, changed to " +
            "Altemas St.\\u201d nine years earlier \\u2014 so the 1888 committee's ALTEMAS was carried out and " +
            "then drifted, in print at least, to ALTURAS. (3) \\u201cCastello street, in the ANDERSON " +
            "tract\\u201d is a third sighting of an Anderson holding; see the header. \\u26a0 The last line is " +
            "cut off by the bottom of the crop: what Basil Street was to become is not known from " +
            "this clip." },
"""
s = s.replace(anchor, tail, 1)

# 3. The Naud fragment note can now say where it sits.
s = s.replace(
    '      note: "The second clip: a fragment, the rest of the item off the crop." }',
    '      note: "The second clip: a fragment from further down the same column, after the '
    'engineer\'s report. The rest of the item is off the crop, so what was being referred about '
    'Naud Street is not known." }',
    1)

assert s != orig
io.open(P, "w", encoding="utf-8").write(s)
print("patched", P)
