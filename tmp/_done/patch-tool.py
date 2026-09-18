# -*- coding: utf-8 -*-
"""names-tool.html: a Drift column — how far the public prose has moved since
a person last approved it — sortable, with a filter for the case that matters."""
import io, sys

P = "names-tool.html"
s = io.open(P, encoding="utf-8").read()


def sub(old, new, n=1):
    global s
    c = s.count(old)
    if c != n:
        sys.exit("%d matches (wanted %d) for %r" % (c, n, old[:110]))
    s = s.replace(old, new, n)


# ── 1. the column header ────────────────────────────────────────────────────
sub('''          <th data-k="named">Namesake</th>
          <th data-k="docs" class="docs">Docs</th>''',
    '''          <th data-k="named">Namesake</th>
          <th data-k="drift" class="docs" title="Words changed in note and namedAfter since a person last approved them">Drift</th>
          <th data-k="docs" class="docs">Docs</th>''')

# ── 2. the filter chip ──────────────────────────────────────────────────────
sub('''        <button data-s="problems">problems</button>
        <button data-s="edited">edited</button>''',
    '''        <button data-s="problems">problems</button>
        <button data-s="drifted" title="Approved once, and the text has moved since">drifted</button>
        <button data-s="unapproved" title="Public prose nobody has ever approved">unapproved</button>
        <button data-s="edited">edited</button>''')

# ── 3. CSS for the cell ─────────────────────────────────────────────────────
sub('''  td.docs, th.docs { text-align:right; }''',
    '''  td.docs, th.docs { text-align:right; }
  td.drift b { font-weight:600; }
  td.drift .never { color:#8a6d1f; }
  td.drift .clean { color:#1f5c3c; }''')

# ── 4. the measure ──────────────────────────────────────────────────────────
sub('''function diffHtml(oldText, newText) {''',
    '''// HOW FAR HAS THE PROSE MOVED SINCE A PERSON LAST READ IT?
//
// `note` and `namedAfter` are published — the map prints namedAfter as a
// street's origin line — and an agent may rewrite either at will, so the file
// accumulates sentences that were approved once and have since been redrafted.
// Counting the words a reviewer would have to re-read is the only ordering
// that puts the worst of that first; sorting by date approved does not, because
// a field approved long ago and never touched needs nothing.
//
// The unit is WORDS CHANGED — deleted plus inserted — over both fields, reusing
// the same tokenisation and the same LCS the diff panel draws, so the number
// always agrees with what the panel shows. A pure replacement of n words by n
// words therefore scores 2n, which is right: a reviewer reads both halves.
//
// THREE STATES, AND THEY ARE NOT THE SAME QUESTION.
//   approved and unchanged  -> 0.  Nothing to do.
//   approved and changed    -> the count. THIS is the reason the column exists.
//   never approved          -> the current word count, flagged `never`.
// The third is not a drift at all, and it is given a number anyway because the
// honest reading of "nobody has approved this" is that every word of it is
// unreviewed. It is marked in the cell and separated by its own filter, so the
// 200-odd entities in that state cannot be mistaken for prose that moved.
function driftOf(e) {
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
}

function diffHtml(oldText, newText) {''')

# ── 5. carry it on the row ──────────────────────────────────────────────────
sub('''      docs: (docCounts[id] || []).length,
      err: p.some(x => x.kind === "err"),''',
    '''      docs: (docCounts[id] || []).length,
      drift: driftOf(e),
      err: p.some(x => x.kind === "err"),''')

# ── 6. the filters ──────────────────────────────────────────────────────────
sub('''    if (filterState === "problems" && !r.err && !r.wrn) return false;
    if (filterState === "edited" && !r.dirty) return false;''',
    '''    if (filterState === "problems" && !r.err && !r.wrn) return false;
    if (filterState === "drifted" && !r.drift.changed) return false;
    if (filterState === "unapproved" && !r.drift.never) return false;
    if (filterState === "edited" && !r.dirty) return false;''')

# ── 7. sorting ──────────────────────────────────────────────────────────────
sub('''  const cmp = (a, b) => {
    if (sortKey === "docs") return (a.docs - b.docs) || a.id.localeCompare(b.id);''',
    '''  const cmp = (a, b) => {
    if (sortKey === "docs") return (a.docs - b.docs) || a.id.localeCompare(b.id);
    // Drift sorts BIGGEST FIRST on the first click, unlike every other column.
    // The question this column answers is "what has moved furthest since I read
    // it", and answering it with a screen of zeroes would be a joke; so the
    // comparator is inverted here and the arrow still points the way the data
    // runs. Within a tie, prose that was approved and then changed outranks
    // prose nobody ever approved — a broken promise before an unmade one — and
    // entities with no public prose at all sort last whichever way it points,
    // the same rule the blank-namesake case already follows.
    if (sortKey === "drift") {
      const A = a.drift, B = b.drift;
      if (A.any !== B.any) return sortDir * (A.any ? -1 : 1);
      return (B.words - A.words)
          || ((B.changed ? 1 : 0) - (A.changed ? 1 : 0))
          || a.id.localeCompare(b.id);
    }''')

# ── 8. the cell ─────────────────────────────────────────────────────────────
sub('''      <td class="docs">${r.docs || '<span class="na">·</span>'}</td>''',
    '''      <td class="docs drift">${
        !r.drift.any ? '<span class="na">·</span>'
        : r.drift.changed ? `<b>${r.drift.words}</b>` +
            (r.drift.never ? '<span class="never" title="the other field has never been approved"> +new</span>' : "")
        : r.drift.never ? `<span class="never" title="never approved: the whole of it is unreviewed">${r.drift.words} new</span>`
        : '<span class="clean" title="matches the approved version">0</span>'}</td>
      <td class="docs">${r.docs || '<span class="na">·</span>'}</td>''')

io.open(P, "w", encoding="utf-8").write(s)
print("patched", P)
