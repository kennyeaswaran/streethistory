# -*- coding: utf-8 -*-
"""Gravitta -> Gravilla. Kenny read the ink on M.R. 7-36 on 2026-09-17: it says
"Gravilla St". The dashed centreline is what made it look like a double letter."""
import io, re, sys


def sub(path, pairs):
    s = io.open(path, encoding="utf-8").read()
    for old, new in pairs:
        if s.count(old) != 1:
            sys.exit("%s: %d matches for %r" % (path, s.count(old), old[:110]))
        s = s.replace(old, new, 1)
    io.open(path, "w", encoding="utf-8").write(s)
    print("patched", path)


# ── the row: the ink, and the entity it points at ───────────────────────────
sub("documents/mr007-036-p2/mr007-036-p2.js", [
 ('"asWritten": "Gravitta St"', '"asWritten": "Gravilla St"'),
 ('"name": "gravitta-st"', '"name": "gravilla-st"'),
])

# ── the entity ──────────────────────────────────────────────────────────────
sub("names.js", [
 ('  "gravitta-st": {\n    spellings: [{ forms: ["Gravitta Street", "Gravilla Street"] }],',
  '  "gravilla-st": {\n    spellings: [{ forms: ["Gravilla Street"] }],'),

 ('    basis: "pattern",\n    sharesWarrantWith: ["colina-ave", "loma-drive", "collado-st"],\n    disputed: true,',
  '    basis: "pattern",\n    sharesWarrantWith: ["colina-ave", "loma-drive", "collado-st"],\n    disputed: false,'),

 ('    note: "Lettered on Colina Park in Nov. 1885 (documents/mr007-036-p2), running down the Crown Hill slope between Columbia and Union; it became part of West 4th Street and is gone. The spelling is unsettled: this project reads the ink as Gravitta, Garrigues prints Gravilla, and gravilla is the Spanish word.",',
  '    note: "Lettered on Colina Park in Nov. 1885 (documents/mr007-036-p2), running down the Crown Hill slope between Columbia and Union; it became part of West 4th Street and is gone. Gravilla is Spanish for fine gravel or grit, and it is one of four Spanish words for ground on the one tract.",'),

 ('    internalNote: "⚠⚠ THE SPELLING NEEDS KENNY\'S EYES ON THE SHEET,',
  '    internalNote: "✔ THE SPELLING IS SETTLED. Kenny read the ink on M.R. 7-36 on 2026-09-17 and it says GRAVILLA — the street\'s dashed centreline runs through the word, which is what made a doubled letter look plausible to whoever first transcribed it. The entity id, the single spelling form and the row\'s `asWritten` were all corrected together, `disputed` dropped, and Garrigues is corroborated rather than contradicted. THE ORIGINAL FLAG, kept because the reasoning is worth reusing: ⚠⚠ THE SPELLING NEEDED KENNY\'S EYES ON THE SHEET,'),

 ('`disputed: true` until the sheet is re-read. Researched and moved from names-new.js 2026-09-17; prose drafted by Claude, unreviewed. Both forms are carried in one spelling period on purpose — they are one lineage, not two.",',
  '★ AND THE SET SETTLED THE SENSE EITHER WAY, which is why the entity could be graded before the string was fixed. ★★ THE GENERAL LESSON, third instance now after Labury/Labory and this one: WHEN A NAME IS ATTESTED NOWHERE AT ALL — not as a surname, not as a place, not as a word, in any source — SUSPECT THE TRANSCRIPTION BEFORE CONCLUDING THE NAME IS OBSCURE. A real but rare name leaves some trace; a misread letter leaves none. Both times the tell was the same: a confident search that came back completely empty. Researched and moved from names-new.js 2026-09-17; prose drafted by Claude, unreviewed.",'),

 # the three siblings point at it by id
 ('    sharesWarrantWith: ["loma-drive", "collado-st", "gravitta-st"],',
  '    sharesWarrantWith: ["loma-drive", "collado-st", "gravilla-st"],'),
 ('    sharesWarrantWith: ["colina-ave", "collado-st", "gravitta-st"],',
  '    sharesWarrantWith: ["colina-ave", "collado-st", "gravilla-st"],'),
 ('    sharesWarrantWith: ["colina-ave", "loma-drive", "gravitta-st"],',
  '    sharesWarrantWith: ["colina-ave", "loma-drive", "gravilla-st"],'),
])

# ── the handbook references ─────────────────────────────────────────────────
sub("handbook/IN-PERSON.md", [
 ('''### And one sheet to re-read that is already on the shelf ⚠⚠

**M.R. 7-36 (Colina Park), the street this project has as GRAVITTA.** Garrigues
prints **GRAVILLA**, with an extent that matches our row exactly, and *gravilla*
is an ordinary Spanish word (fine gravel) that fits the tract's other three
Spanish ground-words. **"Gravitta" is attested nowhere** — not as a surname, a
place or a word, in any source. This is the Labury/Labory shape of error again:
a tt/ll confusion in a plat hand. `gravitta-st` is marked `disputed: true` and
carries both forms until someone looks at the ink.''',
  '''### ✔ CLOSED 2026-09-17: the sheet that needed re-reading

**M.R. 7-36 (Colina Park)** — the street this project had as *Gravitta*. Kenny
read the ink and it says **GRAVILLA**; the street's dashed centreline runs
through the word, which is what made the doubled letter look plausible.
Corrected throughout, `disputed` dropped, Garrigues corroborated.

★ **The rule this leaves behind, now on its third instance** (Labury/Labory,
Gravitta/Gravilla): *when a name is attested **nowhere at all** — not as a
surname, not as a place, not as a word, in any source — suspect the
transcription before concluding the name is obscure.* A real but rare name
leaves some trace; a misread letter leaves none.'''),
])

sub("handbook/CDNC-QUERIES.md", [
 ('''**Gone from the city registry** (so: retired names, not surviving streets):
Clementina, Shenandoah *(east side)*, Strelitz, Collado, Gravitta/Gravilla,
Atchison, Freight, Topeka *(the city's one Topeka is a Valley drive)*.''',
  '''**Gone from the city registry** (so: retired names, not surviving streets):
Clementina, Shenandoah *(east side)*, Strelitz, Collado, Gravilla, Atchison,
Freight, Topeka *(the city's one Topeka is a Valley drive)*.'''),
])
