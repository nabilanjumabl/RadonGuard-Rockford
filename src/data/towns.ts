// Town data for /locations/* pages.
// Every fact below was verified Oct 2026 (Census, EPA radon zone map, local reporting).
// Rule: a town page earns its existence with UNIQUE local facts — never name-swapped templates.

export interface TownFactor {
  title: string;
  body: string;
}

export interface TownFAQ {
  question: string;
  answer: string;
}

export interface Town {
  slug: string;
  name: string;
  county: string;
  zone: string;
  population: string;
  zips: string;
  medianYearBuilt: string;
  differentiator: string;
  intro: string[];
  factors: TownFactor[];
  faqs: TownFAQ[];
  statCallouts: { value: string; label: string; subtext: string }[];
}

export const towns: Town[] = [
  {
    slug: 'rockford',
    name: 'Rockford',
    county: 'Winnebago County',
    zone: 'EPA Radon Zone 1',
    population: '~149,000 (2020 Census)',
    zips: '61101–61109, 61114',
    medianYearBuilt: '1964',
    differentiator: 'Oldest housing stock in the county, full basements everywhere',
    intro: [
      'Rockford is the county seat and by far the largest city in Winnebago County — about 149,000 people across neighborhoods like Churchill Park, Edgebrook, Brown Hills, and Latham Park. It is also where the radon math gets most unforgiving: the median home here was built in 1964, making Rockford\'s housing stock the oldest of any community we serve.',
      'Older homes mean full basements, aging foundations, and decades of settling cracks — the three things radon loves most. Winnebago County carries an EPA Radon Zone 1 designation, the agency\'s highest risk tier, and Rockford\'s combination of glacial-till geology and 60-plus-year-old foundations is exactly why testing here is not optional.',
    ],
    factors: [
      {
        title: 'Pre-1970 foundations with decades of settling',
        body: 'With a median build year of 1964, most Rockford homes have had 60+ years for foundation walls to develop hairline cracks and for floor-wall joints to separate. Every crack is a radon entry point, and older concrete is more porous than modern pours.',
      },
      {
        title: 'Full basements as standard living space',
        body: 'Unlike newer suburbs where basements are sometimes unfinished storage, Rockford\'s older homes commonly have finished basements used as bedrooms and family rooms — the lowest livable level, where radon concentrates most.',
      },
      {
        title: 'Sump pits in the Rock River valley',
        body: 'Homes near the Rock River and in lower-lying neighborhoods commonly have sump pits for groundwater. An uncovered or poorly sealed sump pit is one of the largest single radon entry points in a house.',
      },
      {
        title: 'Victorian and early-1900s construction near historic districts',
        body: 'Churchill Park and the older near-downtown blocks hold Victorian-era and early-1900s homes with stone or block foundations. These foundations were never designed with soil-gas resistance in mind.',
      },
    ],
    faqs: [
      {
        question: 'Do you serve all Rockford neighborhoods?',
        answer: 'Yes — from Churchill Park and Edgebrook to the Auburn corridor and the neighborhoods off Riverside Boulevard, we test and mitigate across all Rockford ZIP codes (61101–61109, 61114). Older homes near the historic districts and homes with sump pits near the Rock River are our most common calls, but every home in EPA Zone 1 should be tested regardless of age or neighborhood.',
      },
      {
        question: 'What does radon testing cost in Rockford in 2026?',
        answer: 'A professional short-term test in Rockford typically runs $150–$250, depending on how many foundation areas need monitors. For real estate transactions, testing is usually bundled into the inspection process. If results come back at or above 4 pCi/L, mitigation for a standard basement home generally costs $1,000–$1,500 installed.',
      },
      {
        question: 'My Rockford home was built in the 1960s — does age really matter for radon?',
        answer: 'Yes, and Rockford\'s median build year of 1964 is exactly why. Sixty-plus years of freeze-thaw cycles, settling, and concrete aging create more entry points than a newer foundation has. Older homes also predate any radon-resistant construction practices. Age doesn\'t guarantee high radon, but in a Zone 1 county it meaningfully raises the odds — which is why testing older Rockford homes is one of the highest-value things a homeowner can do.',
      },
      {
        question: 'Should I test if my neighbor\'s Rockford home tested low?',
        answer: 'Absolutely — test anyway. Radon levels can vary dramatically between two houses on the same street because soil composition, foundation depth, cracks, and sump-pit sealing differ per home. The EPA is explicit on this: a neighbor\'s low result tells you nothing reliable about your house. In Winnebago County\'s Zone 1 geology, every home is a candidate until tested.',
      },
    ],
    statCallouts: [
      { value: 'Zone 1', label: 'EPA Radon Zone — Winnebago County', subtext: 'Highest risk tier; predicted avg above 4 pCi/L' },
      { value: '1964', label: 'Median year built — Rockford', subtext: 'Oldest housing stock in our service area' },
      { value: '41%+', label: 'IL homes above EPA action level', subtext: '118,447 homes tested statewide' },
    ],
  },
  {
    slug: 'loves-park',
    name: 'Loves Park',
    county: 'Winnebago County (small part in Boone County)',
    zone: 'EPA Radon Zone 1',
    population: '~23,400 (2020 Census)',
    zips: '61111, 61130, 61131, 61132',
    medianYearBuilt: '1981',
    differentiator: 'Rock River on the west, I-90 on the east — river-valley homes with basements',
    intro: [
      'Loves Park — "The City with a Heart" — sits on Rockford\'s northeast corner with about 23,400 residents. Malcolm Love bought 236 acres here in 1901 for a picnic grounds; the city incorporated in 1947 and grew into a classic post-war suburb. The median home was built in 1981, and the housing stock is dominated by mid-century ranches and split-levels — nearly all with full basements.',
      'Geography matters here: the Rock River forms the city\'s western edge and Interstate 90 its eastern one. River-valley lots tend toward higher water tables, which means more sump pits — and sump pits are among the largest radon entry points in any home. All of Loves Park sits in EPA Radon Zone 1.',
    ],
    factors: [
      {
        title: 'River-valley lots with higher water tables',
        body: 'Homes on the west side toward the Rock River sit lower with more groundwater pressure, so sump pits are common. An unsealed sump pit can single-handedly push an otherwise average home over the 4 pCi/L action level.',
      },
      {
        title: '1980s-era ranches with original foundations',
        body: 'With a median build year of 1981, most Loves Park foundations are now 40+ years old — past the point where original concrete and floor-wall joints start showing their age, opening new soil-gas pathways.',
      },
      {
        title: 'Finished basements as primary living space',
        body: 'Split-levels and ranches here commonly have finished lower levels used daily as family rooms or bedrooms. More hours spent at the lowest level means more exposure if radon is elevated.',
      },
    ],
    faqs: [
      {
        question: 'Do you serve Loves Park homes near the Rock River?',
        answer: 'Yes — we cover all of Loves Park including the river-adjacent neighborhoods on the west side and the subdivisions toward I-90 and Rock Cut State Park. River-valley homes with sump pits are some of our most important tests, since groundwater and sump systems interact directly with radon entry. Every Loves Park ZIP (61111, 61130, 61131, 61132) is in EPA Zone 1.',
      },
      {
        question: 'What does radon mitigation cost in Loves Park in 2026?',
        answer: 'For the typical Loves Park ranch or split-level with a full basement, a sub-slab depressurization system runs $1,000–$1,500 installed. Homes needing sump-pit sealing as part of the job fall in the same range in most cases. Testing first costs $150–$250, and Illinois requires mitigation work to be done by an IEMA-licensed professional.',
      },
      {
        question: 'My Loves Park home was built in the 1980s — isn\'t that new enough to be safe?',
        answer: 'Not necessarily. A 1980s foundation is now 40-plus years old, and radon-resistant construction was not standard practice then — Illinois had no such requirements for existing-style builds of that era. Forty years of settling still creates cracks and separations. In a Zone 1 county, the build decade matters far less than most homeowners assume; only a test gives you a real answer.',
      },
    ],
    statCallouts: [
      { value: 'Zone 1', label: 'EPA Radon Zone — Winnebago County', subtext: 'Highest risk tier; predicted avg above 4 pCi/L' },
      { value: '1981', label: 'Median year built — Loves Park', subtext: '40+ years of foundation aging' },
      { value: '4.4 pCi/L', label: 'Illinois average indoor level', subtext: 'vs. 1.3 pCi/L national average' },
    ],
  },
  {
    slug: 'machesney-park',
    name: 'Machesney Park',
    county: 'Winnebago County',
    zone: 'EPA Radon Zone 1',
    population: '~22,900 (2020 Census)',
    zips: 'Winnebago County ZIPs',
    medianYearBuilt: '1980',
    differentiator: 'Subdivision suburb — 1960s–2000s ranches and colonials, nearly all with basements',
    intro: [
      'Machesney Park is Rockford\'s northern neighbor — a village of about 22,900 people sitting between Rockford and Beloit, Wisconsin. It is pure subdivision suburbia: Dixon Pines, Wexford Place, and similar developments of ranch, colonial revival, and new-traditional homes built from the 1960s through the 2000s, with a median build year of 1980.',
      'That uniformity is exactly the radon story here. Subdivision after subdivision of full-basement homes, all sitting on the same glacial-till geology in EPA Zone 1. When one home on a street tests high, the neighbors share the same soil and the same era of construction — which is why street-by-street testing patterns show up so clearly in suburbs like this.',
    ],
    factors: [
      {
        title: 'Tract-built basements of the same era',
        body: 'Subdivisions built in the same decade share foundation designs, concrete mixes, and construction practices. If your neighbor\'s 1978 colonial tested at 6 pCi/L, your 1978 colonial on the same till deserves a test — same soil, same slab, same odds.',
      },
      {
        title: '45 years of settling on 1980-median stock',
        body: 'The median Machesney Park home is now 45+ years old. Original basement slabs develop shrinkage cracks, and the cove joint where wall meets floor — the single most common radon entry path — separates over decades.',
      },
      {
        title: 'Finished lower levels in family homes',
        body: 'These are family homes, and the basement is usually finished living space: playrooms, bedrooms, home offices. Daily hours at the lowest level is where radon exposure actually accumulates.',
      },
    ],
    faqs: [
      {
        question: 'Do you test homes in Machesney Park subdivisions?',
        answer: 'Yes — we serve all of Machesney Park, from the older subdivisions near the Rockford border to the newer developments toward the Wisconsin line. Because tract neighborhoods share geology and construction eras, we often find street-level patterns: if one home tests elevated, nearby homes of the same vintage are worth testing too. Every home here sits in EPA Zone 1.',
      },
      {
        question: 'How much does radon mitigation cost in Machesney Park?',
        answer: 'Most Machesney Park homes are standard ranches or colonials with full basements, so a sub-slab depressurization system typically costs $1,000–$1,500 installed. Testing runs $150–$250. Illinois law requires the work to be performed by an IEMA-licensed radon professional, which is exactly what we are.',
      },
      {
        question: 'Three homes on my street tested high — does that mean mine will too?',
        answer: 'Not necessarily, but your odds just went up meaningfully. Same subdivision usually means the same glacial-till soil, the same foundation era, and similar construction — the three variables that drive radon entry. That said, two identical-looking homes can still differ by a factor of three or more based on cracks, sump sealing, and ventilation. The street pattern is a reason to test promptly, not a diagnosis.',
      },
    ],
    statCallouts: [
      { value: 'Zone 1', label: 'EPA Radon Zone — Winnebago County', subtext: 'Highest risk tier; predicted avg above 4 pCi/L' },
      { value: '1980', label: 'Median year built — Machesney Park', subtext: 'Tract subdivisions, 1960s–2000s' },
      { value: '41%+', label: 'IL homes above EPA action level', subtext: '118,447 homes tested statewide' },
    ],
  },
  {
    slug: 'roscoe',
    name: 'Roscoe',
    county: 'Winnebago County',
    zone: 'EPA Radon Zone 1',
    population: '~11,000 (2020 Census)',
    zips: 'Winnebago County ZIPs',
    medianYearBuilt: '1994',
    differentiator: 'Stateline boomtown — explosive 1990s–2000s growth, newer homes, same Zone 1 soil',
    intro: [
      'Roscoe is the Stateline success story: a village that grew from about 2,400 people in 1990 to nearly 11,000 today, almost entirely through 1990s and 2000s subdivision growth. The median home here was built in 1994 — the newest housing stock of any community we serve.',
      'Newer does not mean safer. Roscoe\'s boom happened before radon-resistant new construction practices were common in Illinois, and every one of those subdivisions sits on the same glacial-till geology in EPA Zone 1. Many Roscoe homeowners assume a 2005-built home can\'t have a radon problem. Testing data says otherwise — in Zone 1, geology beats build year.',
    ],
    factors: [
      {
        title: 'Boom-era construction without radon-resistant codes',
        body: 'Roscoe\'s growth wave (1990–2010) predates widespread radon-resistant new construction in Illinois. Those homes were built to the codes of their day — which said nothing about sub-slab soil-gas barriers.',
      },
      {
        title: 'Same Zone 1 geology as everywhere else here',
        body: 'Newer subdivisions don\'t get newer geology. The till and limestone bedrock beneath Roscoe is identical in radon potential to the soil under Rockford\'s 1960s homes.',
      },
      {
        title: 'High real-estate turnover means more transactions',
        body: 'Fast-growing suburbs see constant buying and selling, and Illinois\' Radon Awareness Act puts radon disclosure squarely in every transaction. Pre-listing and pre-purchase testing is routine here — and frequently the moment a problem is found.',
      },
    ],
    faqs: [
      {
        question: 'My Roscoe home was built in 2005 — do I really need a radon test?',
        answer: 'Yes. This is the most common misconception we hear in Roscoe. A 2005 build predates radon-resistant construction requirements in Illinois, and the soil beneath it is the same Zone 1 glacial till as everywhere else in the county. We regularly see elevated readings in 1990s and 2000s homes. The build year gives comfort; only a test gives an answer.',
      },
      {
        question: 'I\'m selling my Roscoe home — what does Illinois require on radon?',
        answer: 'Under the Illinois Radon Awareness Act, sellers who know their home\'s radon test results must disclose them to buyers. In a high-turnover market like Roscoe, radon testing during the inspection period is standard practice. If levels come back elevated, mitigation becomes a negotiation point — and a $1,000–$1,500 system is a small line item compared to a stalled closing.',
      },
      {
        question: 'What does radon testing cost in Roscoe?',
        answer: 'Professional short-term testing in Roscoe runs $150–$250, with results typically in 48 hours — fast enough for inspection-period timelines. If mitigation is needed, most Roscoe homes with standard basements land in the $1,000–$1,500 range for a sub-slab depressurization system installed by an IEMA-licensed professional.',
      },
    ],
    statCallouts: [
      { value: 'Zone 1', label: 'EPA Radon Zone — Winnebago County', subtext: 'Highest risk tier; predicted avg above 4 pCi/L' },
      { value: '1994', label: 'Median year built — Roscoe', subtext: 'Newest stock we serve — still pre-radon-code' },
      { value: '4.4 pCi/L', label: 'Illinois average indoor level', subtext: 'vs. 1.3 pCi/L national average' },
    ],
  },
  {
    slug: 'rockton',
    name: 'Rockton',
    county: 'Winnebago County',
    zone: 'EPA Radon Zone 1',
    population: '~7,900 (2020 Census)',
    zips: 'Winnebago County ZIPs',
    medianYearBuilt: '1989',
    differentiator: 'Historic river village — 1800s downtown meets 1990s subdivisions',
    intro: [
      'Rockton is the river village with two personalities: a historic downtown along the Rock River with 1800s-era buildings, and 1980s–1990s subdivisions that doubled the village to about 7,900 residents. The median home was built in 1989, but that average hides the real story — a century-old farmhouse and a 1995 colonial can sit on the same street.',
      'For radon, that mix matters. The older homes have stone and block foundations with a century of settling; the newer ones have poured concrete but sit on identical Zone 1 glacial till. Hononegah-area families in particular tend to stay put for decades — long tenures in untested homes are how exposure quietly accumulates.',
    ],
    factors: [
      {
        title: 'Century-old foundations downtown',
        body: 'Rockton\'s historic core holds some of the oldest housing in the county — stone, block, and early concrete foundations that were built long before anyone knew what soil gas was. These are among the highest-probability structures we test.',
      },
      {
        title: 'River proximity and sump systems',
        body: 'The Rock River runs through village life here, and lower-lying properties commonly run sump pumps. Sump pits are a direct chimney for soil gas when left unsealed.',
      },
      {
        title: 'Long-tenure family homes, rarely tested',
        body: 'Stable, family-oriented villages like Rockton have many homes that haven\'t changed hands — or been tested — in 20+ years. Illinois\' disclosure law only triggers on sale, so long-tenure homes are the untested majority.',
      },
    ],
    faqs: [
      {
        question: 'Do you serve the historic downtown area of Rockton?',
        answer: 'Yes — including the older homes near downtown Rockton and along the river, which are actually our highest-priority tests. Century-old stone and block foundations have far more radon entry points than modern poured walls. We also serve all the newer subdivisions; every Rockton home sits in EPA Zone 1 regardless of age.',
      },
      {
        question: 'We\'ve lived in our Rockton home 25 years without testing — is it too late to matter?',
        answer: 'It\'s the perfect time. Radon risk is about cumulative exposure, and a test today tells you what the last 25 years looked like — plus what the next 25 will look like if you mitigate. There\'s no statute of limitations on finding out. If levels are elevated, a mitigation system fixes the future regardless of the past.',
      },
      {
        question: 'How much does radon mitigation cost in Rockton?',
        answer: 'Standard basement homes in Rockton typically mitigate for $1,000–$1,500. Older homes with stone foundations or complex layouts can run higher if they need multiple suction points or extra sealing — generally $1,500–$2,000. Testing first is $150–$250, and only an IEMA-licensed professional may legally do the work in Illinois.',
      },
    ],
    statCallouts: [
      { value: 'Zone 1', label: 'EPA Radon Zone — Winnebago County', subtext: 'Highest risk tier; predicted avg above 4 pCi/L' },
      { value: '1989', label: 'Median year built — Rockton', subtext: 'Hides 1800s downtown + 1990s subdivisions' },
      { value: '41%+', label: 'IL homes above EPA action level', subtext: '118,447 homes tested statewide' },
    ],
  },
  {
    slug: 'belvidere',
    name: 'Belvidere',
    county: 'Boone County',
    zone: 'EPA Radon Zone 1',
    population: '~25,000',
    zips: 'Boone County ZIPs',
    medianYearBuilt: '1979',
    differentiator: 'Boone County seat — Zone 1 geology east of the county line, auto-plant town',
    intro: [
      'Belvidere is the seat of Boone County and its largest city, home to about 25,000 people and the Stellantis assembly plant that has anchored the local economy for decades. The median home here was built in 1979, and the housing stock runs from a genuine historic downtown to post-war neighborhoods and newer edges.',
      'Here is the fact that matters: Boone County is mapped EPA Radon Zone 1 — the highest tier, same as Winnebago. The county line changes nothing about the geology. Belvidere homes sit on the same glacial deposits producing the same soil gas, which is why Boone County belongs in every bit of our Zone 1 service messaging.',
    ],
    factors: [
      {
        title: 'Boone County is Zone 1 too',
        body: 'This surprises Belvidere homeowners: the EPA\'s highest radon classification doesn\'t stop at the Winnebago County line. Boone County carries the identical Zone 1 designation, with predicted average indoor levels above 4 pCi/L.',
      },
      {
        title: '1979-median stock with aging basements',
        body: 'A 1979 median build year means most Belvidere foundations are approaching 50 years old — deep into the window where settling cracks, cove-joint separation, and sump-pit gaps develop.',
      },
      {
        title: 'Historic downtown and Kishwaukee River corridors',
        body: 'The older downtown blocks and homes near the Kishwaukee River include some of the county\'s oldest foundations — stone, block, and early concrete — plus river-valley water tables that make sump systems common.',
      },
    ],
    faqs: [
      {
        question: 'Is Belvidere really in a high-radon zone? I thought that was a Winnebago County thing.',
        answer: 'It\'s a common misconception, but no — Boone County is independently mapped as EPA Radon Zone 1, the highest classification, with predicted average indoor levels above 4 pCi/L. The geology doesn\'t respect county lines. Belvidere homes face the same glacial-till radon potential as Rockford homes, which is exactly why we serve Boone County with the same urgency.',
      },
      {
        question: 'What does radon testing and mitigation cost in Belvidere?',
        answer: 'Testing in Belvidere runs $150–$250 for a professional short-term test. Mitigation for a standard basement home is typically $1,000–$1,500; older downtown homes with stone foundations or complex layouts can reach $1,500–$2,000. Illinois requires all radon work to be performed by IEMA-licensed professionals.',
      },
      {
        question: 'Does the assembly plant area affect radon levels?',
        answer: 'No — radon comes from natural uranium decay in soil and bedrock, not from industry. The plant is a landmark and employer, not a radon factor. What drives Belvidere\'s radon risk is the same thing driving it everywhere here: Zone 1 glacial geology beneath aging foundations. Test the home, not the neighborhood\'s industry.',
      },
    ],
    statCallouts: [
      { value: 'Zone 1', label: 'EPA Radon Zone — Boone County', subtext: 'Highest risk tier, same as Winnebago' },
      { value: '1979', label: 'Median year built — Belvidere', subtext: 'Foundations nearing 50 years old' },
      { value: '4.4 pCi/L', label: 'Illinois average indoor level', subtext: 'vs. 1.3 pCi/L national average' },
    ],
  },
  {
    slug: 'cherry-valley',
    name: 'Cherry Valley',
    county: 'Winnebago County (partly Boone County)',
    zone: 'EPA Radon Zone 1',
    population: '~2,900 (2020 Census)',
    zips: 'Winnebago County ZIPs',
    medianYearBuilt: '1987',
    differentiator: 'I-90 corridor village — small town, fast growth, rural edges on well water',
    intro: [
      'Cherry Valley is the small village with outsized growth — about 2,900 people straddling the Winnebago/Boone line along the I-90 corridor, with a median home built in 1987. It reads as quiet suburbia, but its edges turn rural fast, and that transition is the radon story here.',
      'Village-core homes sit on Zone 1 glacial till like everywhere else in our service area. But the outlying properties — larger lots, some on private wells — add a second pathway most suburban homeowners never consider: radon dissolved in well water, released into indoor air during showering and laundry.',
    ],
    factors: [
      {
        title: 'Rural edges on private well water',
        body: 'Properties outside the village core on private wells face radon\'s second pathway: dissolved gas in groundwater released during showering, washing, and cooking. Well-water radon needs different handling than soil-gas radon — and most homeowners have never heard of it.',
      },
      {
        title: 'I-90 corridor growth on Zone 1 till',
        body: 'Cherry Valley\'s growth follows the interstate, but the subdivisions went up on the same high-potential glacial geology as the rest of Winnebago County. Corridor convenience doesn\'t change what\'s under the slab.',
      },
      {
        title: '1987-median homes hitting the cracking window',
        body: 'At nearly 40 years old, the median Cherry Valley foundation is entering the decades when shrinkage cracks and joint separation become common — new radon pathways in homes that may have tested fine years ago.',
      },
    ],
    faqs: [
      {
        question: 'Our Cherry Valley home is on a private well — does that change the radon picture?',
        answer: 'Yes, it adds a second pathway. Beyond soil gas seeping through the foundation, radon can dissolve into well water and release into indoor air when you shower, wash dishes, or do laundry. This matters most for outlying Cherry Valley properties off municipal water. A standard air test won\'t catch the water pathway — mention the well when you book so the right testing approach is used.',
      },
      {
        question: 'Do you serve Cherry Valley village and the surrounding township?',
        answer: 'Yes — the village core, the I-90 corridor subdivisions, and the outlying township properties, including well-water homes. The whole area sits in EPA Zone 1. For well-water properties, we\'ll discuss both air and water testing pathways during the initial call.',
      },
      {
        question: 'What does radon mitigation cost in Cherry Valley?',
        answer: 'For village homes with standard basements, $1,000–$1,500 covers most sub-slab depressurization systems. Properties with crawl spaces or well-water radon considerations can run $1,200–$2,000 depending on what the testing shows. Initial testing is $150–$250.',
      },
    ],
    statCallouts: [
      { value: 'Zone 1', label: 'EPA Radon Zone — Winnebago County', subtext: 'Highest risk tier; predicted avg above 4 pCi/L' },
      { value: '1987', label: 'Median year built — Cherry Valley', subtext: 'Entering the foundation-cracking window' },
      { value: '41%+', label: 'IL homes above EPA action level', subtext: '118,447 homes tested statewide' },
    ],
  },
  {
    slug: 'byron',
    name: 'Byron',
    county: 'Ogle County',
    zone: 'EPA Radon Zone 1',
    population: '~3,800 (2020 Census)',
    zips: '61010',
    medianYearBuilt: 'Pre-1950 downtown core',
    differentiator: 'Ogle County river town — 1835 roots, Victorian downtown, rural well-water outskirts',
    intro: [
      'Byron calls itself the "Gateway to the Rock River Valley" — a city of about 3,800 in Ogle County, founded in 1835, best known for the Byron nuclear generating station south of town. The downtown holds Victorian, American Foursquare, and early-1900s homes under mature trees; the outskirts turn to farmland fast.',
      'Two radon facts define Byron. First: Ogle County is EPA Radon Zone 1, the highest tier — county-level reporting has put Ogle\'s average notably above the state average. Second: the housing split. Century-old downtown foundations have a hundred-plus years of entry points; rural outskirts on private wells add radon\'s water pathway. (And to be clear: the nuclear station is a landmark and employer — radon comes from natural soil uranium, not from the plant.)',
    ],
    factors: [
      {
        title: 'Ogle County Zone 1 — with notably high county readings',
        body: 'Ogle County carries the EPA\'s highest radon classification, and county-level data has shown averages well above the already-high Illinois average. Byron sits squarely in that geology.',
      },
      {
        title: 'Victorian and Foursquare foundations downtown',
        body: 'Downtown Byron\'s late-1800s to mid-1900s homes — Victorians, American Foursquares, Nationals — sit on stone, block, and early concrete foundations with a century of settling. These are textbook high-probability radon structures.',
      },
      {
        title: 'Well water on the rural outskirts',
        body: 'Beyond the city water system, private wells serve the surrounding farmland properties. Well-water radon releases into indoor air during showering and laundry — a pathway a standard air test alone won\'t reveal.',
      },
      {
        title: 'Riverfront properties with water-table pressure',
        body: 'Byron\'s Rock River frontage is beautiful and geologically relevant: higher water tables near the river mean more sump activity, and sumps are premier radon entry points when unsealed.',
      },
    ],
    faqs: [
      {
        question: 'Does the Byron nuclear plant cause radon in homes?',
        answer: 'No — and this matters enough to say plainly. Radon comes from the natural decay of uranium in soil and bedrock; it has nothing to do with the nuclear generating station, which is a landmark and major employer, not a radon source. Byron\'s radon risk comes from Ogle County\'s Zone 1 glacial geology beneath aging foundations — the same natural mechanism affecting the whole region.',
      },
      {
        question: 'Our Byron farmhouse is from the 1890s — can it even be mitigated?',
        answer: 'Yes. Older stone and block foundations are actually routine work for licensed mitigators — they typically need more sealing work and sometimes multiple suction points, which is reflected in cost ($1,500–$2,000 rather than the standard $1,000–$1,500). Age makes the job more involved, never impossible. The first step is the same everywhere: a $150–$250 professional test.',
      },
      {
        question: 'We\'re on a private well outside Byron — what should we test?',
        answer: 'Both pathways. Start with a standard indoor-air radon test, and tell us about the well when you book — radon dissolved in well water releases into your air during showers and laundry, and it needs a water test plus different mitigation equipment than soil-gas systems. Many rural Ogle County homeowners have never tested either pathway.',
      },
      {
        question: 'Do you serve Byron and the surrounding Ogle County area?',
        answer: 'Yes — Byron (61010), the riverfront neighborhoods, downtown, and the surrounding township and farmland properties. All of Ogle County is EPA Zone 1. Whether it\'s a Victorian downtown, a 1980s subdivision home, or a farmhouse on a well, the geology underneath is the constant.',
      },
    ],
    statCallouts: [
      { value: 'Zone 1', label: 'EPA Radon Zone — Ogle County', subtext: 'Highest tier; county readings above state avg' },
      { value: '1835', label: 'Byron founded', subtext: 'Downtown foundations over a century old' },
      { value: '4.4 pCi/L', label: 'Illinois average indoor level', subtext: 'vs. 1.3 pCi/L national average' },
    ],
  },
];

export function getTown(slug: string): Town | undefined {
  return towns.find((t) => t.slug === slug);
}

export function getTownSlugs(): string[] {
  return towns.map((t) => t.slug);
}
