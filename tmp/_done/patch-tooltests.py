# -*- coding: utf-8 -*-
"""test-names-tool.js: cover the Drift measure."""
import io, sys

P = "test-names-tool.js"
s = io.open(P, encoding="utf-8").read()


def sub(old, new):
    global s
    if s.count(old) != 1:
        sys.exit("%d matches for %r" % (s.count(old), old[:110]))
    s = s.replace(old, new, 1)


sub('''               slice("const FILE_PATH = {", "async function save()");  // what lands on disk
const { SRC, renderEntity, renderSpelling, validateAll, composeFiles } = vm.runInNewContext(
  "(function(){\\n" + source +
  "\\nreturn { SRC, renderEntity, renderSpelling, validateAll, composeFiles };\\n})()",
  { console });''',
    '''               slice("const FILE_PATH = {", "async function save()") +   // what lands on disk
               slice("function wordDiff(", "function diffHtml(");       // the drift measure
const { SRC, renderEntity, renderSpelling, validateAll, composeFiles, wordDiff, driftOf } =
  vm.runInNewContext(
  "(function(){\\n" + source +
  "\\nreturn { SRC, renderEntity, renderSpelling, validateAll, composeFiles, wordDiff, driftOf };\\n})()",
  { console });''')

sub('''console.log(`\\n${pass} passed, ${fail} failed\\n`);''',
    '''// ===========================================================================
// DRIFT — how far the public prose has moved since a person approved it
// ===========================================================================
// The number rides in a sortable column, so it has to mean one thing. The trap
// it exists to avoid is conflating "approved, then rewritten" with "nobody ever
// approved this": the second is 200-odd entities and would bury the first.
{
  const D = e => driftOf(e);

  ok("no public prose at all is not a drift",
     (() => { const d = D({}); return !d.any && d.words === 0; })());

  ok("approved and unchanged scores zero",
     (() => { const d = D({ note: "a b c", noteApproved: "a b c" });
              return d.any && d.words === 0 && !d.changed && !d.never; })());

  ok("never approved counts every word, and says so",
     (() => { const d = D({ note: "one two three" });
              return d.never && !d.changed && d.words === 3; })());

  ok("an approved absence of text is not the same as never approved",
     (() => { const d = D({ note: "", noteApproved: "" });
              return d.any && !d.never && !d.changed && d.words === 0; })());

  ok("one word replaced by one word scores two — a reviewer reads both halves",
     (() => { const d = D({ note: "the quick fox", noteApproved: "the slow fox" });
              return d.changed && d.words === 2; })());

  ok("a pure insertion scores only what was inserted",
     (() => { const d = D({ note: "a b c d", noteApproved: "a b" });
              return d.changed && d.words === 2; })());

  ok("a pure deletion scores only what was removed",
     (() => { const d = D({ note: "a b", noteApproved: "a b c d" });
              return d.changed && d.words === 2; })());

  ok("both public fields are counted, not just note",
     (() => { const d = D({ note: "a b", noteApproved: "a X",
                            namedAfter: "p q", namedAfterApproved: "p Y" });
              return d.words === 4; })());

  ok("internalNote is NOT counted — it is not published and needs no approval",
     (() => { const d = D({ note: "a", noteApproved: "a",
                            internalNote: "a whole paragraph of working notes" });
              return d.words === 0 && !d.changed; })());

  // The mixed state: one field drifted, the other never approved. It must read
  // as `changed` so the "drifted" filter catches it, and still carry `never` so
  // the cell can say the rest is unreviewed.
  ok("drifted in one field and unapproved in the other is both",
     (() => { const d = D({ note: "a b", noteApproved: "a X", namedAfter: "p q r" });
              return d.changed && d.never && d.words === 5; })());

  // The measure must agree with the panel the reviewer is looking at, because
  // the column is a promise about what that panel will show.
  ok("the count matches the diff the approval panel draws",
     (() => {
       const ap = "Named for a man who was never here", cur = "Named for a woman who lived here";
       const parts = wordDiff(ap, cur);
       const shown = parts.filter(p => p.kind !== "same")
         .reduce((n, p) => n + (p.text.match(/\\S+\\s*/g) || []).length, 0);
       return D({ note: cur, noteApproved: ap }).words === shown;
     })());
}

// The column, the filters and the inverted sort all have to exist in the page.
{
  ok("the list has a sortable Drift column",
     /<th data-k="drift"/.test(html));
  ok("there is a filter for prose that drifted after approval",
     /data-s="drifted"/.test(html) && /filterState === "drifted"/.test(html));
  ok("…and a separate one for prose nobody has ever approved",
     /data-s="unapproved"/.test(html) && /filterState === "unapproved"/.test(html));
  // Every other column sorts ascending on the first click. This one must not:
  // a Drift column that opens on a screen of zeroes answers nothing.
  ok("Drift sorts biggest-first rather than following sortDir like the rest",
     /sortKey === "drift"/.test(html) && /B\\.words - A\\.words/.test(html));
  ok("entities with no public prose still sort last, as blanks do elsewhere",
     /A\\.any !== B\\.any/.test(html));
}

console.log(`\\n${pass} passed, ${fail} failed\\n`);''')

io.open(P, "w", encoding="utf-8").write(s)
print("patched", P)
