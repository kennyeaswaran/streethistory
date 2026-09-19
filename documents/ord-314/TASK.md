# ord-314 — what is missing

**Six renamings, no rows.** Every one of them is blocked, and the block is
`names.js`, which an instance may not edit (CLAUDE.md, hard rule).

| clause | change | extent stated? | why no row |
|---|---|---|---|
| a | Aliso avenue + extension, between its intersection with First street and the eastern boundary of the city → **First street** | yes | no `aliso-avenue` entity |
| b | Pleasant street, between Aliso street and the First/Aliso junction → **Aliso street** | yes | no `pleasant-street`, no `aliso-street` |
| c | Boston street, in blocks 59 and 60 of Hancock survey → **Breed street** | by block | ⚠ `boston-street` is the **wrong Boston** (see below); no `breed-street` |
| d | Breed street → **Bird street** | no | no `breed-street`, no `bird-street` |
| e | Carlisle street, between Pine street and Walnut avenue → **Los Angeles street** | yes | no `carlisle-street` |
| f | Los Angeles street, between Washington street and its southern boundary → **Carlisle street** | yes | no `carlisle-street` |

## ⚠ The trap in clause (c)

`names.js` has a `boston-street`. It is **not this street**. It is Prudent
Beaudry's Park-tract Boston in Echo Park, one of the patriotic-American set with
Centennial, Custer and Philadelphia, and its own note records that modern Boston
Street there also absorbed Ionia Street. This ordinance's Boston street is "in
block 59 and block 60 of **Hancock survey**" — Boyle Heights, where modern Breed
Street runs. Writing `boston-street → breed-street` would merge two lineages
that share nothing but a spelling. That is CLAUDE.md rule 2 in its textual form.

## What would unblock it

1. **Entities**, six or seven of them, all east of the river or south of
   Washington: Aliso Avenue, Aliso Street, Pleasant Street, Boston Street
   (Hancock), Breed Street, Bird Street, Carlisle Street. Recommended in
   `documents/teed-1887/FINDINGS.md` §5, not minted here.
2. **Geometry.** Almost none of this ground is in the project's current `dtla`
   OSM extract. Boyle Heights would have to be a covered neighbourhood
   (handbook/ADDING-A-NEIGHBORHOOD.md) before an `extent` row on clause (a), (b)
   or (e) could resolve to anything.
3. **A decision on the two swaps.** Clauses (c)/(d) and (e)/(f) each rename A to
   B while renaming B to C. Read in sequence the results differ from reading them
   simultaneously, and the ordinance does not say which. Simultaneous is the
   normal legal reading and is almost certainly right — the council was plainly
   shuffling three names along one line in each case — but it should be decided
   explicitly before any row is written, not assumed row by row.

⭐ Even with no rows, clause (a) is a substantive finding for `first-street`:
**1st Street reached the eastern city boundary by absorbing Aliso Avenue on
May 25, 1887.** Nothing in the corpus said so before.
