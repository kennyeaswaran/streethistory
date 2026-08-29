// ---------------------------------------------------------------------------
// mr066-035  "Map of the Compromise Subdivision ... known as the Washington
// Tract", surveyed Mar 1894 by E.D. Severance for O.T. Johnson.
// Rows for `rows: []`.  All confirmed:false.
//
// The sheet draws FOUR streets, all named: BIXEL ST, THIRD ST., ARNOLD ST.,
// FIGUEROA ST.  The plat's own scale check confirms the alignment: the "580"
// lettered along the block's Arnold frontage measures 701.6 scan px, and
// 701.6 px x 0.8258 ft/px (from mr066-035-alignment.json) = 579.4 ft.
//
// Street widths read off the plat (the figures lettered inside each corridor,
// and the measured perpendicular gap between the two drawn edge lines):
//   BIXEL ST     "80"  -> measured 97.3 px = 80.3 ft
//   ARNOLD ST.   "60"  -> measured 75.2 px = 62.1 ft
//   THIRD ST.    "50"  -> measured 62.4 px = 51.5 ft
//   FIGUEROA ST.  --   -> only its WEST edge (the block boundary) is drawn;
//                        the "FIGUEROA ST." lettering is centred 32 ft east of
//                        it on an axis parallel to it (dx/dy -0.489 vs -0.500),
//                        implying roughly a 60-80 ft corridor.
//
// The trap on this sheet: the plat's THIRD ST. is NOT modern 3rd Street.
// Modern 3rd Street runs down the plat's ARNOLD ST.; modern Miramar Street
// runs down the plat's THIRD ST., one block to the north-east.
// ---------------------------------------------------------------------------

// --- 3rd Street = the plat's ARNOLD ST. -------------------------------------
// Modern 3rd Street sits -14.7 .. -3.5 ft from the ARNOLD corridor centreline
// over its whole in-coverage run (half-width 31 ft), i.e. dead centre, while it
// is 254-277 ft away from the THIRD corridor.  Its own "ST." lettering falls on
// the modern 3rd Street line.
// name: no entity id known -- the label reads "ARNOLD ST."
{ kind: "state", asWritten: "ARNOLD ST.",
  street: "3rd Street", from: "Bixel Street", to: "Boylston Street",
  basis: "alignment", confirmed: false },

// --- Miramar Street = the plat's THIRD ST. ----------------------------------
// Modern Miramar runs +4.3 ft off the THIRD corridor centreline at Bixel and
// stays inside the 50 ft corridor as far as about px (764,829) -- roughly two
// thirds of the block.  East of there the modern street bends south (the bend
// node is px (724,781)) and by the Boylston junction it is 98 ft off the drawn
// centreline.  That is the block's cut-off north-east corner, the very wedge
// this "Compromise" subdivision was drawn to settle; the plat's Third x
// Figueroa corner projects to about px (913,918), 105 px (26 m) north of the
// modern Miramar/Boylston junction at (925,1023).  There is no cross street to
// split the row at, so it is given whole, with the eastern drift noted.
// name: no entity id known -- the label reads "THIRD ST."
{ kind: "state", asWritten: "THIRD ST.",
  street: "Miramar Street", from: "Bixel Street", to: "Boylston Street",
  basis: "alignment", confirmed: false },

// --- Bixel Street = the plat's BIXEL ST. (name survives) --------------------
// -9.3 .. +7.3 ft off the centreline of the 80 ft corridor across its whole run.
// name: no entity id known -- the label reads "BIXEL ST"
{ kind: "state", asWritten: "BIXEL ST",
  street: "Bixel Street", from: "Miramar Street", to: "3rd Street",
  basis: "alignment", confirmed: false },

// --- Boylston Street = the plat's FIGUEROA ST. ------------------------------
// Only the west edge of this corridor is drawn (it is the block boundary,
// bearing S27deg31'W per the plat).  Modern Boylston runs 34.7-47.6 ft east of
// that edge and parallel to it, which puts it inside the corridor for any
// plausible width: -5 .. +8 ft off centre if 80 ft, +5 .. +18 ft if 60 ft,
// +10 .. +23 ft if 50 ft.  It joins exactly the two streets FIGUEROA joins on
// the plat (ARNOLD/3rd at the south, THIRD/Miramar at the north).
// name: no entity id known -- the label reads "FIGUEROA ST."
{ kind: "state", asWritten: "FIGUEROA ST.",
  street: "Boylston Street", from: "3rd Street", to: "Miramar Street",
  basis: "alignment", confirmed: false },

// --- 4th Street: nothing drawn ----------------------------------------------
// Modern 4th Street forks off 3rd at px (496,1016) and leaves the tract at
// about px (580,1087); its whole in-coverage run is only ~172 px (43 m).  That
// stub still falls inside the ARNOLD corridor (-3.5 .. +16.3 ft off centre),
// but it is a divergence from Arnold, not Arnold: it opens at 8 deg to the
// corridor and is already 29 ft from the modern 3rd Street centreline where
// coverage ends.  The plat draws no corridor along it.  (Rule 3.)
// NOTE: `to` is the next crossing on 4th Street; coverage actually stops at the
// tract boundary near px (636,1119), well short of Boylston.
{ kind: "silent", street: "4th Street", from: "3rd Street", to: "Boylston Street",
  confirmed: false },

// --- Huntley Drive: UNRESOLVED, two readings --------------------------------
// The only Huntley geometry in mr066-035-streets.json's `runs` is a 26 px
// (~6.5 m) stub, px (925,1023) -> (938,1001), running north from the
// Miramar/Boylston junction and collinear with Boylston.  It sits 47.6-49.1 ft
// east of the drawn west line of the FIGUEROA corridor -- inside that corridor
// for any plausible width, and still south of where the plat's line stops.
// But the same file lists a Huntley x 3rd Street crossing at px (898,1110),
// which is ~60 ft east of that line, i.e. OUTSIDE the corridor.  Those two
// facts point opposite ways and 6.5 m is too little ink to settle it.
// DECIDER: the full modern Huntley Drive centreline south of Miramar Street.
// If it is collinear with the stub, reading A; if it runs where the (898,1110)
// crossing implies, Huntley is its own corridor and the plat is silent.
//
// A) name: no entity id known -- the label reads "FIGUEROA ST."
// { kind: "state", asWritten: "FIGUEROA ST.",
//   street: "Huntley Drive", from: "Miramar Street", to: "3rd Street",
//   basis: "alignment", confirmed: false },
//
// B)
// { kind: "silent", street: "Huntley Drive", from: "Miramar Street",
//   to: "3rd Street", confirmed: false },

// --- vanished: none ---------------------------------------------------------
// Every street drawn on this sheet has a modern counterpart inside the
// coverage polygon (Bixel->Bixel, Third->Miramar, Arnold->3rd,
// Figueroa->Boylston), so there are no `vanished` rows.
// The oblique lines outside the block's north-east corner (two families at
// image-bearings S40.7degE and S30.5degE fanning from single points on the
// Third St frontage) carry no street lettering, pass through the block's
// interior parcels, and are dimensioned as parcels ("74.17", "119.6", "88.00",
// "103", "42.25", "37.25", "54") -- they are the conflicting old survey lines
// this Compromise Subdivision was drawn to reconcile, not a street.

// --- for the `date` TODO in mr066-035.js ------------------------------------
// Title block:  "Surveyed in Mar 1894 ... by E.D. Severance"
// Surveyor's certificate: "E.D. Severance   Los Angeles Apr. 14th 1894"
// Owners' dedication: "this 23 day of Mar A.D. 1894"
// Recorder's note on this copy: "A full true and correct copy of the original
//   (Scale reduced to 80 feet to one inch.  Recorded may 1, 189[7?] at 29 min
//   past 9 a.m at request of H.C. Witmer.  E.C. Hodgman County Recorder."
//   -- the last digit of that year is smudged; it reads 1897 but 1894 is not
//   excluded.  Pick the one your model wants (survey date vs recording date).
