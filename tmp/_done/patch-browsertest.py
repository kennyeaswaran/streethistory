# -*- coding: utf-8 -*-
"""names-browser-test.js: stop addressing columns by position, and cover Drift."""
import io, sys

P = "names-browser-test.js"
s = io.open(P, encoding="utf-8").read()


def sub(old, new):
    global s
    if s.count(old) != 1:
        sys.exit("%d matches for %r" % (s.count(old), old[:110]))
    s = s.replace(old, new, 1)


# ── a column is found by its header key, never by counting ──────────────────
sub('''  const rows = () => page.$$eval("#rows tr.ent", ts => ts.map(t => t.dataset.id));''',
    '''  const rows = () => page.$$eval("#rows tr.ent", ts => ts.map(t => t.dataset.id));
  // ★ ADDRESS A COLUMN BY ITS HEADER, NEVER BY COUNTING. This file used to read
  // the Docs column as `td:nth-child(6)`, so inserting a column to its left made
  // a passing assertion silently start measuring a different column — it failed
  // loudly here, but the same shape of mistake is exactly how a test quietly
  // stops testing what it names. (Caught adding Drift, 2026-09-17.)
  const colIndex = k => page.$$eval("#list th", (ths, key) =>
    ths.findIndex(t => t.dataset.k === key) + 1, k);
  const column = async k => {
    const n = await colIndex(k);
    if (!n) throw new Error(`no column with data-k="${k}"`);
    return page.$$eval(`#rows tr.ent td:nth-child(${n})`, ts => ts.map(t => t.innerText.trim()));
  };''')

sub('''  const docs = await page.$$eval("#rows tr.ent td:nth-child(6)", ts => ts.map(t => +t.innerText.trim() || 0));''',
    '''  const docs = (await column("docs")).map(t => +t || 0);''')

# ── new assertions ─────────────────────────────────────────────────────────
sub('''    ok("sorting by docs puts the most-attested first", docs[0] === Math.max(...docs));
  }
''',
    '''    ok("sorting by docs puts the most-attested first", docs[0] === Math.max(...docs));
  }

  // ── Drift: how far the published prose has moved since a person approved it.
  // The column's whole job is to be sorted, and it is the one column that sorts
  // biggest-first on the first click, so both halves of that are asserted here.
  console.log("\\ndrift");
  ok("the list has a Drift column", (await colIndex("drift")) > 0);
  await page.click('#list th[data-k="drift"]');
  const drift = await column("drift");
  const num = t => { const m = String(t).match(/\\d+/); return m ? +m[0] : -1; };
  ok("one click sorts it biggest-first, without needing a second",
     num(drift[0]) === Math.max(...drift.map(num)),
     `top cell was ${JSON.stringify(drift[0])}`);
  ok("entities with no public prose sink to the bottom",
     drift.filter(t => t === "\\u00b7").every((_, i, a) =>
       drift.slice(drift.length - a.length).every(t => t === "\\u00b7")));
  ok("a cell nobody has approved says so rather than showing a bare number",
     drift.some(t => /new/.test(t)));

  // The two filters exist because "approved once and since rewritten" is a
  // handful of entities and "never approved" is most of the file; one buries
  // the other unless they can be asked for separately.
  await page.click('#stateChips button[data-s="drifted"]');
  const drifted = await rows();
  const reallyDrifted = Object.entries(live).filter(([, e]) =>
    ["namedAfter", "note"].some(f =>
      e[f + "Approved"] !== undefined && e[f + "Approved"] !== (e[f] ?? ""))).map(([id]) => id);
  ok("the drifted filter shows exactly the entities whose approved text moved",
     drifted.slice().sort().join() === reallyDrifted.slice().sort().join(),
     `tool: ${drifted.join()} — file: ${reallyDrifted.join()}`);
  await page.click('#stateChips button[data-s="unapproved"]');
  const unapproved = await rows();
  ok("the unapproved filter is a different, much larger set",
     unapproved.length > drifted.length);
  ok("…and it excludes anything fully approved",
     !unapproved.some(id => {
       const e = live[id]; if (!e) return false;
       return ["namedAfter", "note"].every(f =>
         !(e[f] ?? "") || e[f + "Approved"] !== undefined);
     }));
  await page.click('#stateChips button[data-s="any"]');
  await page.click('#list th[data-k="id"]');
''')

io.open(P, "w", encoding="utf-8").write(s)
print("patched", P)
