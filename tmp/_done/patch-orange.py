# -*- coding: utf-8 -*-
"""Orange / Wilshire: assign the dual-labelled sheets by what was in force at
the sheet's date, and fix one mislabelled row. 2026-09-18."""
import io, re, sys


def sub(path, pairs):
    s = io.open(path, encoding="utf-8").read()
    for old, new in pairs:
        if s.count(old) != 1:
            sys.exit("%s: %d matches for %r" % (path, s.count(old), old[:110]))
        s = s.replace(old, new, 1)
    io.open(path, "w", encoding="utf-8").write(s)
    print("patched", path)


# ══════════════════════════════════════════════════════════════════ mr060-088
# Not an Orange Street at all — the sheet letters SEVENTH STREET there.
sub("documents/mr060-088/mr060-088.js", [
 ('''      "kind": "state",
      "asWritten": "ORANGE STREET",''',
  '''      "kind": "state",
      "asWritten": "SEVENTH STREET",'''),
 ('''      "name": "orange-st-wilshire"''',
  '''      "note": "Corrected 2026-09-18: this row was entered as ORANGE STREET and pointed at `orange-st-wilshire`. The sheet letters SEVENTH STREET here, in capitals, along the tract's northern boundary \\u2014 there is no Orange Street anywhere on it. The GEOMETRY was right (the row sits on modern 7th Street); only the ink and the entity were wrong.",
      "name": "seventh-street"'''),
])

# ══════════════════════════════════════════════════════════════════ mr005-566
sub("documents/mr005-566/mr005-566.js", [
 ('''      "note": "The original Orange Street label and a later Wilshire Boulevard annotation both appear on the same corridor.",
      "name": "wilshire"''',
  '''      "note": "\\u2605\\u2605 THIS SHEET RECORDS THE WHOLE ORANGE/WILSHIRE FIGHT IN ONE LABEL, and the Wilshire half of it is STRUCK OUT. Three layers: (1) the plat's own 1889 lettering, \\u201cORANGE \\u2026 ST.\\u201d in capitals, which stands; (2) a later cursive overwrite reading \\u201cWilshire \\u2026 Blvd.\\u201d with \\u201cORD 16790\\u201d, EVERY WORD OF IT STRUCK THROUGH, alongside an unstruck \\u201cord.16915\\u201d beside the surviving ORANGE; (3) a clean marginal note in the draughtsman's later hand, \\u201cOrange St. changed to Wilshire Blvd. Ord. 48435\\u201d, beside \\u201cPor. of Kip St. vacated Ord. 46278\\u201d. So the sheet shows the June 1908 change annotated and then cancelled after the December 1908 repeal, and the 1924 change recorded separately as a marginal note. The row is assigned to `orange-st-wilshire`, the name in force on 9 May 1889 when this copy was recorded \\u2014 and the only name on the sheet that was never struck out.",
      "name": "orange-st-wilshire"'''),
])

# ══════════════════════════════════════════════════════════════════ mr055-014
sub("documents/mr055-014/mr055-014.js", [
 ('''      "note": "The original Orange Street label and later Wilshire Boulevard annotation share this corridor.",
      "name": "wilshire"''',
  '''      "note": "\\u2605\\u2605 THE SAME STRUCK-OUT ANNOTATION AS documents/mr005-566, and between them the two sheets give the ordinance numbers. This label reads, in layers: the plat's own \\u201cORANGE\\u2026STREET\\u201d in capitals (struck); a cursive \\u201cWilshire \\u2026 Blvd.\\u201d with \\u201cord 16790\\u201d (struck); and then, live and unstruck, \\u201cOrange \\u2026 St.\\u201d with \\u201cord 16916\\u201d. So Wilshire was written on, cancelled, and Orange re-lettered under a second ordinance number. Assigned to `orange-st-wilshire`, the name in force in June 1893 when the tract was surveyed, and the name the sheet itself ends on.",
      "name": "orange-st-wilshire"'''),
])
