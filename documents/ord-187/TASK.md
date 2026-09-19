# ord-187 — what is missing

**No row, and it is not an oversight.**

## The block

The ordinance renames **Kohler street → Eighth street**, unqualified, in June
1885. `names.js` has an entity called `kohler`, and it is a different street:

> `kohler`.internalNote — "⚠ TWO KOHLER STREETS. Kines says the ORIGINAL Kohler
> Street ran where 9th Street now runs between San Pedro and Alameda, and that
> the current one was named in 1887. Our four sightings run 1887–1927
> (documents/mr021-046, mr054-051, tr0105-001-p2, tr0141-011) and are all on the
> current street."

So `kohler` is the street named for the wine merchant Charles Kohler in 1887, in
the Arts District. This ordinance renames the street that carried the name
*before* that — and renames it out of existence two years earlier. A row
`kohler → eighth-street` would assert that the 1887 street became Eighth Street
in 1885, merging two lineages on a shared spelling (CLAUDE.md rule 2).

**What is needed:** a separate entity for the first Kohler Street. Recommended
in `documents/teed-1887/FINDINGS.md` §5; `names.js` is the user's to edit.

## ⭐⭐ And a factual conflict worth resolving first

Kines places the original Kohler Street "where **9th** Street now runs between
San Pedro and Alameda". **The city's own ordinance makes it EIGHTH street.**

They cannot both be right. The ordinance is a primary record of the act itself,
printed by the City Clerk two years later, and its title, its Section 1 and the
volume's LIST OF ORDINANCES and GENERAL INDEX all say Eighth. The weight is
heavily on Eighth.

⚠ Before minting the entity, note what that does to `eighth-street`: if this row
were ever written it would be an unqualified change landing wherever the first
Kohler Street is independently attested — and nothing in the corpus letters it
yet. So the entity alone would not produce a drawing row. **A sheet lettering
Kohler Street before 1885 is what this actually needs** (handbook/WANTED.md).
Candidates: any Ord's-survey-derived sheet of the ground between San Pedro and
Alameda at Eighth, and the city directories of 1883–85
(handbook/SERIAL-SOURCES.md).
