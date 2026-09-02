# -*- coding: utf-8 -*-
import io, os, re
os.chdir(os.path.expanduser("~/mnt/Street name history"))

GOODWIN = ('{ title: "Recorded map: Plan of the Goodwin Tract, M.R. 11-42 (recorded Oct. 6, 1886)",\n'
           '        url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR011/MR011-042.pdf" }')
CAMERON_TRACT = ('{ title: "Recorded map: Cameron Tract, M.R. 7-21 (surveyed by H.J. Stevenson, Oct. 1885)",\n'
                 '        url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR007/MR007-021.pdf" }')
BLOG = ('{ title: "Los Angeles Revisited: The Antebellum Past at Cameron Lane in DTLA",\n'
        '        url: "https://losangelesrevisited.blogspot.com/2020/07/the-antebellum-past-at-cameron-lane-in.html" }')
THOM_WIKI = ('{ title: "Wikipedia: Cameron E. Thom",\n'
             '        url: "https://en.wikipedia.org/wiki/Cameron_E._Thom" }')
ARTS = ('{ title: "Wikipedia: Arts District, Los Angeles",\n'
        '        url: "https://en.wikipedia.org/wiki/Arts_District,_Los_Angeles" }')
ORDINAL = ('{ title: "L.A. Street Names: 1st Street (on the numbering system)",\n'
           '        url: "https://lastreetnames.com/street/0001st-street/" }')

def ent(id_, form, namedAfter, link, cats, sources, note, internal):
    return u'''  "%s": {
    spellings: [{ forms: ["%s"] }],
    namedAfter: %s,
    namedAfterLink: %s,
    categories: [%s],
    sources: [
      %s
    ],
    disputed: false,
    note: %s,
    internalNote: %s,
    possiblySameAs: null, aliases: []
  },

''' % (id_, form,
       ('"%s"' % namedAfter) if namedAfter else "null",
       ('"%s"' % link) if link else "null",
       ", ".join('"%s"' % c for c in cats),
       ",\n      ".join(sources),
       ('"%s"' % note) if note else "null",
       ('"%s"' % internal) if internal else "null")

TREE_RUN = ("One of a run of tree and plant names platted on the Goodwin Tract in October 1886 — "
            "Palm, Spruce, Tulip and Willow together. None of them is documented beyond the plat, "
            "and the theme is the whole of the argument.")
CARRIED = "Carried over from streets-data.js when the Goodwin Tract was encoded, 2026-09-01."

blocks = []

# ---- the Cameron Tract's family lanes --------------------------------------
blocks.append(ent(
    "cameron-lane", "Cameron Lane",
    "{{Cameron Erskine Thom}} (1825–1915), who owned and subdivided the tract — district attorney, state senator, Confederate captain, and mayor of Los Angeles 1882–1884",
    "https://en.wikipedia.org/wiki/Cameron_E._Thom", ["person", "alive"],
    [BLOG, THOM_WIKI, CAMERON_TRACT],
    "Thom bought the ground near today's Convention Center in 1855 for $153 and subdivided it as "
    "the land boom got going thirty years later, lettering his own family across it: Cameron for "
    "himself, Alexander for his grandfather, Catesby and Pembroke for names his brothers and "
    "children carried. He had left Los Angeles in 1862 to fight for the Confederacy, was wounded "
    "at Gettysburg, came back to serve as district attorney and then as mayor. His family had "
    "held slaves in Virginia.",
    "The naming is as well attested as these get: the tract is his and the lanes are his "
    "relatives. Pembroke Lane is on the same plat and survives; it has no entity yet because no "
    "row cites it."))

blocks.append(ent(
    "alexander-lane", "Alexander Lane",
    "{{Alexander Thom}} (c. 1698–1784), Cameron Thom's paternal grandfather, a Clan Cameron Highlander who fled to the American colonies in 1746",
    "https://losangelesrevisited.blogspot.com/2020/07/the-antebellum-past-at-cameron-lane-in.html",
    ["person"],
    [BLOG, CAMERON_TRACT],
    "The oldest name on the tract, and the one that explains the rest: it is Clan Cameron of "
    "Lochiel that Cameron Thom's own given name comes from. The lane was absorbed into the "
    "Lebanon Street continuation in 1917.",
    "Dates and the 1746 flight are the blog's; nothing else corroborates them here."))

blocks.append(ent(
    "catesby-lane", "Catesby Lane",
    "The Thom family name — Cameron Thom's son was Charles Catesby Thom, and a brother carried it too",
    "https://en.wikipedia.org/wiki/Cameron_E._Thom", ["person"],
    [BLOG, THOM_WIKI, CAMERON_TRACT],
    "Named from the family rather than for one person in particular. The lane no longer exists, "
    "though it was still on maps in 1955.",
    "THE PLAT LETTERS IT “CATSBY”, without the E, and the row keeps that spelling as its ink "
    "(§5.1). The identification rests on the family names around it. A second minted id, "
    "`gatsby-lane`, was the same label misread; it cited no rows and was dropped."))

blocks.append(ent(
    "centerbrook-lane", "Centerbrook Lane", None, None, ["unknown"],
    [CAMERON_TRACT, BLOG],
    "Lettered on the 1885 Cameron Tract among the Thom family lanes, but unlike Cameron, "
    "Alexander and Catesby it answers to no relative anyone has traced. A Virginia place name "
    "would fit the pattern — the family's estate in Culpeper County was Berry Hill, which is not "
    "this — but nothing supports it.",
    "NOT in the Los Angeles Revisited article, which names only Cameron, Alexander, Catesby and "
    "Pembroke; a web search turns up nothing (checked 2026-09-01). The company it keeps is the "
    "only evidence there is."))

# ---- the Goodwin Tract's trees ---------------------------------------------
for id_, form, street in [("palm-st-arts-district", "Palm Street", "modern Imperial Street"),
                          ("spruce", "Spruce Street", "modern Mateo Street"),
                          ("tulip", "Tulip Street", "modern Santa Fe Avenue"),
                          ("willow", "Willow Street", "Willow Street, which keeps the name")]:
    extra = ""
    if id_ == "tulip":
        extra = (" It lasted a matter of months: the Atchison, Topeka and Santa Fe reached Los "
                 "Angeles in May 1887 and the street took the railway's name.")
    if id_ == "palm-st-arts-district":
        extra = (" When it became Imperial Street, and why, is not researched — and it has nothing "
                 "to do with Imperial Highway, named far to the south in 1929–31.")
    blocks.append(ent(
        id_, form, None, None, ["nature", "unknown"],
        [GOODWIN, ARTS],
        TREE_RUN + " This one ran along " + street + "." + extra,
        CARRIED + (" Disambiguated at minting: Palm Street is a name that recurs."
                   if id_ == "palm-st-arts-district" else "")))

blocks.append(ent(
    "mesquit", "Mesquit Street", None, None, ["nature", "unknown"],
    [GOODWIN, ARTS],
    "Presumably the mesquite, alongside the Goodwin Tract's other plant names, but nothing "
    "documents it. The plat already spells it “Mesquit” without the terminal E, which is how the "
    "street signs still spell it.",
    CARRIED + " Kines has no page. The spelling is the interesting part: a modern oddity that "
    "turns out to be original, not a later error."))

# ---- names carried over whole ----------------------------------------------
blocks.append(ent(
    "santee-street", "Santee Street",
    "{{Milton Santee}} (1835–1901), city councilman 1884–1886, later a mining and railroad investor",
    "https://en.wikipedia.org/wiki/Milton_Santee", ["person", "alive"],
    ['{ title: "L.A. Street Names: Santee Street",\n        url: "https://lastreetnames.com/street/santee-street/" }',
     '{ title: "Wikipedia: Milton Santee",\n        url: "https://en.wikipedia.org/wiki/Milton_Santee" }'],
    "Santee later moved to San Diego County, where in 1893 his second wife had the town of "
    "Cowleston renamed Santee in his honour — a name it still keeps.",
    CARRIED))

blocks.append(ent(
    "los-angeles-street", "Los Angeles Street",
    "The city itself — ultimately {{Nuestra Señora de los Ángeles de Porciúncula}}, the 1769 Spanish naming of the river",
    "https://en.wikipedia.org/wiki/Los_Angeles_River", ["place"],
    ['{ title: "L.A. Street Names: Los Angeles Street",\n        url: "https://lastreetnames.com/street/los-angeles-street/" }',
     '{ title: "Wikipedia: Los Angeles Street",\n        url: "https://en.wikipedia.org/wiki/Los_Angeles_Street" }'],
    "In place by 1854 along its through stretch; the Plaza block to the north was a separate "
    "street, the Calle de los Negros, until this name was extended over it in 1910.",
    CARRIED + " The Calle de los Negros block is a DIFFERENT lineage and wants its own entity "
    "when a document attests it — do not fold it in here on the strength of the modern name."))

blocks.append(ent(
    "pico", "Pico Street",
    "{{Pío de Jesús Pico}} (1801–1894), the last Mexican governor of Alta California and a major landowner",
    "https://en.wikipedia.org/wiki/Pio_Pico", ["person", "governor"],
    ['{ title: "L.A. Street Names: Pico Boulevard",\n        url: "https://lastreetnames.com/street/pico-boulevard/" }',
     '{ title: "Wikipedia: Pío Pico",\n        url: "https://en.wikipedia.org/wiki/Pio_Pico" }',
     CAMERON_TRACT],
    "Los Angeles never had an official 13th Street downtown — Pico picked up straight after 12th.",
    CARRIED + " The entity is the PICO naming, which the Cameron Tract letters as “Pico "
    "Street”; the modern street is a boulevard, and the generic changed without the name doing so."))

for id_, form, word, extra in [
    ("tenth-street", "10th Street", "Tenth",
     "Renamed Olympic Boulevard in 1935, for the 1932 Games — the request went in in July 1929, "
     "and that they had been the tenth Olympiad seems to have gone unremarked."),
    ("eleventh-street", "11th Street", "Eleventh", "")]:
    blocks.append(ent(
        id_, form,
        "Its ordinal position in the downtown grid — the numbering system was in place by 1849",
        None, ["number"],
        [ORDINAL,
         '{ title: "Ord/Hutton survey, “Plan de la Ciudad de Los Angeles” (Aug. 29, 1849)",\n'
         '        url: "https://tessa2.lapl.org/digital/collection/maps/id/42/" }'],
        extra or None,
        "One entity per number across the downtown grid, as with 1st–9th. NB the 1849 survey's "
        "numbered streets ran only as far as 8th, so when %s was laid out is not researched — the "
        "numbering propagated south later." % word))

blocks.append(ent(
    "farmer", "Farmer Street", None, None, ["unknown"],
    ['{ title: "Recorded map: “Crownwood” (Witmer’s Subdivision), M.B. 15-166 (surveyed Nov. 1909)",\n'
     '        url: "https://pw.lacounty.gov/smpm/landrecords/pdf/TR0015-166a.pdf" }'],
    "Lettered on the 1909 Crownwood sheet along ground that is now Emerald Drive. Nothing found "
    "says who or what Farmer was.",
    "Searched without result (Kines has no page; no web result for a Farmer Street here) — "
    "checked 2026-08-31 and again 2026-09-01."))

# ---- splice ----------------------------------------------------------------
p = "names.js"
s = io.open(p, encoding="utf-8").read()
header = (u"\n  // ---- the Cameron Tract (1885), the Goodwin Tract (1886), and others -----\n"
          u"  //\n"
          u"  // Two boom-era subdivisions east and south of downtown: one lettered with\n"
          u"  // its owner's Virginia family, the other with trees. Most of this was\n"
          u"  // already worked out in streets-data.js.\n\n")
m = re.search(r"\n\};\n\nif \(typeof module", s)
assert m, "could not find the end of NAME_ENTITIES"
body = (header + "".join(blocks)).rstrip().rstrip(",") + "\n"
s = s[:m.start()] + ",\n" + body + s[m.start() + 1:]
io.open(p, "w", encoding="utf-8").write(s)
print("names.js: added", len(blocks))

done = [b.split('"')[1] for b in blocks] + ["gatsby-lane", "maple-street"]
p = "names-new.js"
s = io.open(p, encoding="utf-8").read()
for k in done:
    pat = re.compile(r'\n  "%s": \{.*?\n  \},\n' % re.escape(k), re.S)
    s2 = pat.sub("\n", s, count=1)
    if s2 == s:
        pat = re.compile(r',\n\n  "%s": \{.*?\n  \}\n' % re.escape(k), re.S)
        s2 = pat.sub("\n", s, count=1)
    assert s2 != s, k
    s = s2
io.open(p, "w", encoding="utf-8").write(s)
print("names-new.js: removed", len(done), "(including 2 orphans)")
