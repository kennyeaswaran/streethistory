# ord-207 — what is missing

**No rows are written on this document, and that is deliberate.**

## 1. Two of the three changes already have rows elsewhere

`documents/lah-1886-01-15/` transcribes the Herald's printing of this same
ordinance and carries both writable rows:

- `elm-street → olive`, `scope: "extent"`, Olive Street from Pico Boulevard to
  14th Street (audited 2026-09-18)
- `william-santee → santee-street`, `scope: "extent-unresolved"`

Duplicating them here would pin one transition from two documents. What this
folder adds is the **ordinance number (207)**, the official wording, and the
certification.

⭐ **A small apply job:** both of those rows' notes could now name the
instrument — "Ordinance No. 207, adopted Jan. 6 and approved Jan. 14, 1886" —
the way `lah-1886-07-23`'s row already names Ord. 242. That is a one-line edit
to another agent's document, so it is recorded here rather than made.

## 2. Section 3 has no row and cannot have one

> "That the name of that certain street known as William street, and situated in
> the Los Angeles Improvement Company's subdivision of lots, be and the same is
> hereby changed to **Goss street**."

Blocked on **two missing name entities**:

- the **second William Street**, the one in the Los Angeles Improvement
  Company's subdivision of lots. `william-santee` is the Childs-tract William
  (Section 2) and `william-farragut` is the Bixel one; nothing in `names.js`
  ties either to this subdivision. Section 3 exists precisely because there were
  two, so merging them would destroy the distinction the city drew.
- **Goss Street**. No entity, and no document in the corpus letters the name.

⚠ `names.js` is the user's to edit (CLAUDE.md, hard rule). The recommendation is
in `documents/teed-1887/FINDINGS.md` §5.

**What would unblock it:** a sheet or directory that letters either William
Street or Goss Street on identifiable ground. The Los Angeles Improvement
Company's subdivision of lots is the thing to look for — a recorded map under
that name would settle which corridor Section 3 is about.
