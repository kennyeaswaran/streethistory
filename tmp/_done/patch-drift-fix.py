# -*- coding: utf-8 -*-
"""Fix the append bias in the Drift measure, and say why in both files."""
import io, sys


def sub(path, old, new):
    s = io.open(path, encoding="utf-8").read()
    if s.count(old) != 1:
        sys.exit("%s: %d matches for %r" % (path, s.count(old), old[:110]))
    io.open(path, "w", encoding="utf-8").write(s.replace(old, new, 1))
    print("patched", path)


# ── the measure ─────────────────────────────────────────────────────────────
sub("names-tool.html",
'''// The unit is WORDS CHANGED — deleted plus inserted — over both fields, reusing
// the same tokenisation and the same LCS the diff panel draws, so the number
// always agrees with what the panel shows. A pure replacement of n words by n
// words therefore scores 2n, which is right: a reviewer reads both halves.
//''',
'''// The unit is WORDS CHANGED — deleted plus inserted — over both fields, using
// the same LCS the diff panel draws. A pure replacement of n words by n words
// therefore scores 2n, which is right: a reviewer reads both halves.
//
// ⚠ ONE DELIBERATE DEPARTURE FROM THE PANEL, and it is not cosmetic. The diff
// tokenises a word TOGETHER WITH its trailing whitespace, which is what stops
// the display stuttering (see the note above wordDiff). The side effect is that
// the LAST word of a text has no trailing space, so it never matches the same
// word once something follows it: appending "c d" to "a b" diffs as del "b" /
// ins "b c d" and would score 4 for a two-word addition. That is a constant +2
// on every append, and on a column people sort by it is a lie. So the measure —
// and ONLY the measure — normalises whitespace and adds a terminal space first,
// which makes every token uniform and the boundary artefact disappear. The
// panel keeps the raw text, because there the artefact costs nothing and the
// cure would cost readability. The two can therefore differ by up to one token
// each way; the measure is the truthful one.
//''')

sub("names-tool.html",
'''function driftOf(e) {
  const tok = t => String(t || "").match(/\\S+\\s*/g) || [];
  let words = 0, never = false, changed = false, any = false;
  for (const field of ["namedAfter", "note"]) {
    const cur = e[field] ?? "";
    const ap = e[field + "Approved"];
    if (!cur && ap === undefined) continue;          // no prose in this field
    any = true;
    if (ap === undefined) { never = true; words += tok(cur).length; continue; }
    if (ap === cur) continue;
    changed = true;
    const parts = wordDiff(ap, cur);
    if (!parts) { words += tok(ap).length + tok(cur).length; continue; }
    for (const p of parts) if (p.kind !== "same") words += tok(p.text).length;
  }
  return { words, never, changed, any };
}''',
'''function driftOf(e) {
  const tok = t => String(t || "").match(/\\S+\\s*/g) || [];
  // Uniform tokens: collapse runs of whitespace, then give the last word a
  // trailing space like every other word has. See the note above.
  const flat = t => { const s = String(t || "").replace(/\\s+/g, " ").trim(); return s ? s + " " : ""; };
  let words = 0, never = false, changed = false, any = false;
  for (const field of ["namedAfter", "note"]) {
    const cur = e[field] ?? "";
    const ap = e[field + "Approved"];
    if (!cur && ap === undefined) continue;          // no prose in this field
    any = true;
    if (ap === undefined) { never = true; words += tok(flat(cur)).length; continue; }
    if (ap === cur) continue;                        // compare RAW: whitespace-only
    changed = true;                                  // edits are still edits
    const parts = wordDiff(flat(ap), flat(cur));
    if (!parts) { words += tok(flat(ap)).length + tok(flat(cur)).length; continue; }
    for (const p of parts) if (p.kind !== "same") words += tok(p.text).length;
  }
  return { words, never, changed, any };
}''')

# ── the test that assumed exact agreement ───────────────────────────────────
sub("test-names-tool.js",
'''  // The measure must agree with the panel the reviewer is looking at, because
  // the column is a promise about what that panel will show.
  ok("the count matches the diff the approval panel draws",
     (() => {
       const ap = "Named for a man who was never here", cur = "Named for a woman who lived here";
       const parts = wordDiff(ap, cur);
       const shown = parts.filter(p => p.kind !== "same")
         .reduce((n, p) => n + (p.text.match(/\\\\S+\\\\s*/g) || []).length, 0);
       return D({ note: cur, noteApproved: ap }).words === shown;
     })());''',
'''  // ★ THE REGRESSION THESE TWO CAUGHT. The diff tokenises a word together with
  // its trailing whitespace, so the last word of a text never matches itself
  // once something follows it — an append of n words scored n+2. The measure
  // normalises whitespace to kill that; the panel does not, because there it
  // costs nothing. The two may now differ by up to one token each way, so the
  // promise the column makes about the panel is "no worse than", not "equal to".
  ok("an append scores exactly the words appended, with no boundary tax",
     (() => { const d = D({ note: "Named for a man. He was a merchant.",
                            noteApproved: "Named for a man." });
              return d.words === 5; })());

  ok("the count never exceeds what the approval panel draws",
     (() => {
       const cases = [["a b", "a b c d"], ["a b c d", "a b"],
                      ["Named for a man who was never here", "Named for a woman who lived here"],
                      ["one", "one two three four five"]];
       return cases.every(([ap, cur]) => {
         const shown = wordDiff(ap, cur).filter(p => p.kind !== "same")
           .reduce((n, p) => n + (p.text.match(/\\\\S+\\\\s*/g) || []).length, 0);
         return D({ note: cur, noteApproved: ap }).words <= shown;
       });
     })());

  // Whitespace-only edits are still edits — the raw comparison decides
  // `changed`, and only the measurement is normalised.
  ok("a whitespace-only rewrite counts as changed but scores zero",
     (() => { const d = D({ note: "a  b", noteApproved: "a b" });
              return d.changed && d.words === 0; })());''')

