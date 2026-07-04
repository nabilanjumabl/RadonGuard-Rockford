import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { StatCard } from '../components/ui/StatCard';
import { QABlock } from '../components/ui/QABlock';
import { DataTable } from '../components/ui/DataTable';
import { ServiceCard } from '../components/ui/ServiceCard';
import { SEO } from '../components/SEO';
import { businessConfig, getPhoneLink } from '../config/business';
import { generateFAQSchema, generateLocalBusinessSchema, generateServiceSchema } from '../utils/schema';

const homeFAQs = [
  { question: 'Why is radon higher in Rockford and Winnebago County homes specifically?', answer: 'It comes down to geology more than anything else. Winnebago County carries an EPA-assigned Radon Zone of 1, which is the agency\'s highest risk classification. A Zone 1 designation means the predicted average indoor radon screening level for homes in the county exceeds 4 picocuries per liter (pCi/L) — which is also the EPA\'s official action level for mitigation.' },
  { question: 'What is radon gas, and why is it dangerous?', answer: 'Radon is a naturally occurring radioactive gas produced by the decay of uranium in soil and rock. It\'s completely colorless, odorless, and tasteless, which is exactly what makes it dangerous — there\'s no sensory warning sign.' },
  { question: 'Is radon dangerous — does it really cause cancer?', answer: 'Yes. Radon is the second leading cause of lung cancer in the United States, and the leading cause among non-smokers. When radon and its decay particles are inhaled, they release small bursts of radiation directly into lung tissue, and over years of exposure that damage can lead to cancer.' },
  { question: 'What is a safe radon level in a home?', answer: 'According to the EPA, there is technically no fully "safe" level of radon — any exposure carries some degree of risk. That said, the EPA\'s official action level, the point at which mitigation is strongly recommended, is 4 picocuries per liter (pCi/L).' },
  { question: "What's the difference between a short-term and long-term radon test?", answer: 'A short-term test is the most common option and typically runs anywhere from 2 to 90 days, though the large majority of tests — including nearly all real estate transaction tests — run just 2 to 7 days, most often using a 48-hour continuous monitor. Long-term tests, which run for 90 days or more, give a more accurate annual average since radon levels naturally fluctuate with the seasons.' },
  { question: "Where should radon detectors be placed in a home?", answer: 'This is one of the most commonly misunderstood parts of DIY testing. Because every home has a different foundation and layout, professional protocol calls for testing in each distinct lowest-level structural area separately — for example, a home with both a basement and a section built over a crawl space should be tested in both areas, not just the basement.' },
  { question: 'Can I test for radon myself, or do I need a professional?', answer: 'You technically can buy an at-home test kit from most hardware stores, and for personal curiosity, that\'s a reasonable starting point. However, for real estate transactions, and generally for the most reliable results, Illinois strongly recommends using a state-licensed measurement professional.' },
  { question: 'What is a sub-slab depressurization system?', answer: 'This is the most common and most effective radon mitigation method used in homes today, and it\'s what the vast majority of Rockford-area mitigation systems rely on. In simple terms, a small pipe is installed through the foundation slab or basement floor, connected to a continuously running fan that draws radon-laden soil gas from beneath the home and vents it safely above the roofline.' },
  { question: 'How much does radon mitigation cost in Rockford?', answer: 'For most homes with a standard basement, a sub-slab depressurization system typically costs between $1,000 and $1,500 installed. Across the wider range of foundation types and complexities found in the Rockford area, mitigation systems generally run between $800 and $2,000.', bullets: ['Standard basement: $1,000–$1,500', 'Crawl space or complex foundation: up to $2,000', 'Additional cost drivers: multiple foundation types, very high initial radon readings'] },
  { question: 'How long does a radon mitigation system last?', answer: 'A properly installed system, with basic maintenance, can last 20 years or more. The fan itself — the one continuously running component — typically has a shorter lifespan of 5 to 10 years depending on usage and quality, and is the part most likely to need replacement over the system\'s lifetime.' },
  { question: 'Do I need to retest after mitigation?', answer: 'Yes, and this step is not optional if you actually want to confirm the system worked. A post-mitigation test should be performed within 30 days of installation.' },
  { question: 'Does Illinois law require radon disclosure when selling a home?', answer: 'Yes. Under the Illinois Radon Awareness Act (420 ILCS 46/10) and the Illinois Real Property Disclosure Act (765 ILCS 77/), any home seller who has knowledge of radon test results for their property is legally required to disclose that information to a buyer.' },
  { question: 'Who pays for radon mitigation in a home sale — buyer or seller?', answer: 'There\'s no single rule; it\'s a negotiated point in the transaction, similar to other inspection findings. In many Rockford-area sales, the buyer requests a radon test as part of the standard home inspection process, and if the results come back elevated, mitigation costs become a negotiation point between buyer and seller.' },
  { question: 'Who is licensed to do radon testing and mitigation in Illinois?', answer: 'Both radon measurement professionals and radon mitigation contractors are required to hold a license through the Illinois Emergency Management Agency, Division of Nuclear Safety, under the Illinois Radon Industry Licensing Act. This licensing requirement exists specifically so homeowners and buyers can trust that testing and mitigation work meets a consistent, regulated standard.' },
  { question: 'Do daycares have special radon testing requirements in Illinois?', answer: 'Yes. Under an addition to the Child Care Act of 1969 (225 ILCS 10, Section 5.8), licensed daycare centers, daycare homes, and group daycare homes in Illinois are required to test for radon at least once every three years. New license applications and renewals must include proof of radon testing completed within the prior three years.' },
  { question: 'How often should a home be retested for radon?', answer: 'Even without a mitigation system, homes should generally be retested every 2 to 5 years, since radon levels can shift over time due to changes in soil conditions, foundation settling, or renovations. Homes with an installed mitigation system should be retested periodically as well, in addition to the required post-installation test.' },
  { question: 'How much does it cost to test for radon in Rockford?', answer: 'As a standalone service, a short-term radon test typically runs in a similar range to what\'s charged when it\'s bundled into a home inspection — commonly $150 to $250 depending on the number of testing locations required for a given home\'s foundation layout.' },
  { question: 'Should I still test if a neighbor\'s home tested low?', answer: 'Yes. Radon levels can vary significantly from house to house even on the same street, because soil conditions, foundation cracks, and each home\'s specific entry points for gas migration are unique. A neighbor\'s low result tells you nothing reliable about your own home.' },
];

export function HomePage() {
  const faqSchema = generateFAQSchema(homeFAQs);
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <Layout>
      <SEO
        pageKey="home"
        additionalSchema={[generateFAQSchema(homeFAQs), generateLocalBusinessSchema()]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm mb-6">
                <Shield className="w-4 h-4" />
                Illinois Licensed & EPA Certified
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                Radon Testing & Mitigation in Rockford, IL
              </h1>
              <p className="text-lg md:text-xl text-primary-100 mb-8 leading-relaxed">
                If you own a home in Rockford, Illinois, there's a good chance you've never once thought about radon. Most homeowners haven't. It doesn't smell like anything. It doesn't look like anything. And yet, radon is quietly one of the most serious health risks sitting inside homes across Winnebago County right now.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={getPhoneLink()} className="btn-accent">
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule a Radon Test
                </a>
                <Link to="/services/mitigation" className="btn-secondary bg-white/10 border-white/30 hover:bg-white/20">
                  Get a Free Mitigation Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-center mb-6">
                  <span className="text-5xl font-heading font-bold">4.4 pCi/L</span>
                  <span className="block text-primary-200 mt-2">Illinois Average Indoor Radon Level</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <span className="text-2xl font-bold">41%+</span>
                    <span className="block text-primary-200">of IL homes above action level</span>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <span className="text-2xl font-bold">Zone 1</span>
                    <span className="block text-primary-200">EPA Highest Risk</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NAP Bar */}
      <section className="bg-neutral-100 border-b border-neutral-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm text-neutral-600">
            <span className="font-semibold">{businessConfig.name}</span>
            <span className="hidden sm:inline">|</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {businessConfig.address}
            </span>
            <span className="hidden sm:inline">|</span>
            <a href={getPhoneLink()} className="flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium">
              <Phone className="w-4 h-4" />
              {businessConfig.phone}
            </a>
            <span className="hidden md:inline">— Serving {businessConfig.serviceAreas.join(', ')}</span>
          </div>
        </div>
      </section>

      {/* Why Radon Matters */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-8">
            Why Radon Matters in Rockford
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed mb-8">
            Rockford sits in an area with a genuinely higher radon risk than most of the country, and it isn't a coincidence — it comes down to what's literally under the ground here. The Rockford area, including the wider Rock River Valley, sits on glacial till deposits left behind by the Wisconsin glaciation, along with limestone bedrock in parts of the region. Both of these geological features are known to produce and channel higher-than-average radon gas from the soil into the air above it, which includes the crawl spaces, basements, and slab foundations of homes throughout the city.
          </p>

          <QABlock
            question="Why is radon higher in Rockford and Winnebago County homes specifically?"
            answer="It comes down to geology more than anything else. Winnebago County carries an EPA-assigned Radon Zone of 1, which is the agency's highest risk classification. A Zone 1 designation means the predicted average indoor radon screening level for homes in the county exceeds 4 picocuries per liter (pCi/L) — which is also the EPA's official action level for mitigation."
            bullets={[
              'Glacial till deposits from Wisconsin glacitation',
              'Limestone bedrock throughout the region',
              'Older foundations with more entry points for soil gas',
              'Energy-efficient newer homes trap radon more effectively',
            ]}
          />

          <p className="text-lg text-neutral-700 leading-relaxed">
            None of this means every home in Rockford has a radon problem. It means every home in Rockford is a candidate for having one, and the only way to know is to test.
          </p>
        </div>
      </section>

      {/* Understanding Radon */}
      <section className="py-16 bg-neutral-50" id="understanding-radon">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-8">
            Understanding Radon: What It Is and Why It's Dangerous
          </h2>

          <QABlock
            question="What is radon gas, and why is it dangerous?"
            answer="Radon is a naturally occurring radioactive gas produced by the decay of uranium in soil and rock. It's completely colorless, odorless, and tasteless, which is exactly what makes it dangerous — there's no sensory warning sign. Radon gas moves up through the ground and, outdoors, it disperses harmlessly into the atmosphere. The problem starts when it seeps into an enclosed space like a home, where it has nowhere to go and can build up to levels far higher than what you'd ever encounter outside."
          />

          <QABlock
            question="Is radon dangerous — does it really cause cancer?"
            answer="Yes. Radon is the second leading cause of lung cancer in the United States, and the leading cause among non-smokers. When radon and its decay particles are inhaled, they release small bursts of radiation directly into lung tissue, and over years of exposure that damage can lead to cancer."
            bullets={[
              'EPA estimates: ~21,000 lung cancer deaths nationally per year',
              'Illinois estimate: ~1,476 radon-related lung cancer deaths annually',
              'At 4 pCi/L, lung cancer risk comparable to dying in a car crash',
              'Risk increases ~5x for smokers due to compounding effects',
            ]}
          />

          <p className="text-lg text-neutral-700 leading-relaxed mt-6">
            It's also worth noting that radon isn't only an airborne concern. In homes that rely on well water, radon can dissolve into groundwater and be released into the air during showering, washing, or cooking, which is a relevant consideration for some of the more rural properties on the outskirts of Winnebago County.
          </p>
        </div>
      </section>

      {/* Radon Levels Stats */}
      <section className="py-16 bg-primary-50">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-8">
            Radon Levels in Winnebago County and Illinois
          </h2>

          <QABlock
            question="What is a safe radon level in a home?"
            answer={"According to the EPA, there is technically no fully \"safe\" level of radon - any exposure carries some degree of risk. That said, the EPA's official action level, the point at which mitigation is strongly recommended, is 4 picocuries per liter (pCi/L)."}
            bullets={[
              'Below 2 pCi/L: Lower risk range, but still retest every 2-5 years',
              '2-4 pCi/L: Gray area - EPA suggests considering mitigation',
              'At or above 4 pCi/L: Mitigation strongly recommended',
            ]}
          />

          {/* Stat Callout */}
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <StatCard
              value="4.4 pCi/L"
              label="Illinois Average Indoor Radon Level"
              subtext="vs. National Average: 1.3 pCi/L"
              variant="primary"
            />
            <StatCard
              value="41%+"
              label="IL Homes Above EPA Action Level"
              subtext="118,447 homes tested statewide"
              variant="accent"
            />
          </div>

          <p className="text-lg text-neutral-700 leading-relaxed mt-6">
            This isn't a small or isolated statistic. Across the state, 118,447 homes have been tested through Illinois's radon program, and more than 41 percent came back above the 4.0 pCi/L action level. Statewide, 55 percent of Illinois's 102 counties — including Winnebago — are classified as EPA Zone 1, the highest risk tier. Put another way: nationally, roughly 1 in every 15 homes has an elevated radon reading. In Illinois, and particularly in Zone 1 counties like Winnebago, the odds are meaningfully worse than that.
          </p>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-gradient-to-b from-primary-50 to-white">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-neutral-700 mb-8">
            We offer a full range of radon services for homeowners, home buyers and sellers, and commercial property owners throughout the Rockford area:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              title="Short-Term Testing"
              description="48-hour continuous monitor test for quick, reliable results"
              path="/services/short-term-testing"
              icon="clock"
            />
            <ServiceCard
              title="Mitigation Installation"
              description="Full sub-slab depressurization system design and installation"
              path="/services/mitigation"
              icon="fan"
            />
            <ServiceCard
              title="Real Estate Testing"
              description="Testing timed and documented for real estate closing timelines"
              path="/services/real-estate"
              icon="check"
            />
            <ServiceCard
              title="Post-Mitigation Retesting"
              description="Verification testing after mitigation system installation"
              path="/services/post-mitigation"
              icon="shield"
            />
            <ServiceCard
              title="Commercial Testing"
              description="Testing for schools, daycares, healthcare facilities, and offices"
              path="/services/commercial"
              icon="building"
            />
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>

      {/* Testing Process */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-8">
            The Radon Testing Process
          </h2>

          <QABlock
            question="What's the difference between a short-term and long-term radon test?"
            answer="A short-term test is the most common option and typically runs anywhere from 2 to 90 days, though the large majority of tests — including nearly all real estate transaction tests — run just 2 to 7 days, most often using a 48-hour continuous monitor. Long-term tests, which run for 90 days or more, give a more accurate annual average since radon levels naturally fluctuate with the seasons, but they're rarely practical when a home sale or fast decision is involved."
          />

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            For a standard test, we place a calibrated continuous radon monitor in the lowest livable level of the home — the same equipment standard used by licensed radon professionals across Illinois. The monitor sits undisturbed, out of the way, for a minimum of 48 hours under "closed-house" conditions, meaning windows and exterior doors stay closed and mechanical systems that bring in outside air are not run during the test window.
          </p>

          <QABlock
            question="Where should radon detectors be placed in a home?"
            answer="This is one of the most commonly misunderstood parts of DIY testing. Because every home has a different foundation and layout, professional protocol calls for testing in each distinct lowest-level structural area separately — for example, a home with both a basement and a section built over a crawl space should be tested in both areas, not just the basement."
            bullets={[
              'Lowest livable level of the home',
              'Each distinct foundation area tested separately',
              'Basement AND crawl space if both exist',
              'Highest reading isn\'t always in the basement',
            ]}
          />

          <QABlock
            question="Can I test for radon myself, or do I need a professional?"
            answer="You technically can buy an at-home test kit from most hardware stores, and for personal curiosity, that's a reasonable starting point. However, for real estate transactions, and generally for the most reliable results, Illinois strongly recommends using a state-licensed measurement professional. DIY kits are more prone to placement errors, and results from anyone other than a licensed technician typically aren't accepted in a real estate transaction context."
          />
        </div>
      </section>

      {/* Mitigation Process */}
      <section className="py-16 bg-neutral-50">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-8">
            The Radon Mitigation Process
          </h2>

          <QABlock
            question="What is a sub-slab depressurization system?"
            answer="This is the most common and most effective radon mitigation method used in homes today, and it's what the vast majority of Rockford-area mitigation systems rely on. In simple terms, a small pipe is installed through the foundation slab or basement floor, connected to a continuously running fan that draws radon-laden soil gas from beneath the home and vents it safely above the roofline, before it has a chance to seep into living spaces."
            bullets={[
              'Pipe installed through foundation slab',
              'Continuously running fan draws soil gas',
              'Gas vented safely above roofline',
              'Reduces radon levels by up to 99%',
            ]}
          />

          <QABlock
            question="How much does radon mitigation cost in Rockford?"
            answer="For most homes with a standard basement, a sub-slab depressurization system typically costs between $1,000 and $1,500 installed. Across the wider range of foundation types and complexities found in the Rockford area, mitigation systems generally run between $800 and $2,000."
            bullets={[
              'Standard basement: $1,000–$1,500',
              'Overall range: $800–$2,000',
              'Crawl space or complex foundation: up to $2,000',
              'Multiple foundation types increase cost',
            ]}
          />

          <DataTable
            title="Mitigation Cost by Foundation Type"
            columns={[
              { header: 'Foundation Type', accessor: 'type' },
              { header: 'Typical Cost Range', accessor: 'cost' },
              { header: 'Notes', accessor: 'notes' },
            ]}
            data={[
              { type: 'Standard Basement', cost: '$1,000–$1,500', notes: 'Most common; uses existing sump pit if available' },
              { type: 'Crawl Space', cost: '$1,200–$2,000', notes: 'Requires vapor barrier installation' },
              { type: 'Slab-on-Grade', cost: '$1,000–$1,800', notes: 'Core through concrete; may need additional suction points' },
            ]}
          />

          <QABlock
            question="How long does a radon mitigation system last?"
            answer="A properly installed system, with basic maintenance, can last 20 years or more. The fan itself — the one continuously running component — typically has a shorter lifespan of 5 to 10 years depending on usage and quality, and is the part most likely to need replacement over the system's lifetime."
            bullets={[
              'Full system lifespan: 20+ years',
              'Fan lifespan: 5–10 years',
              'Fan runs 24/7 — normal wear expected',
              'Manometer gauge confirms system operation',
            ]}
          />

          <QABlock
            question="Do I need to retest after mitigation?"
            answer="Yes, and this step is not optional if you actually want to confirm the system worked. A post-mitigation test should be performed within 30 days of installation. Relying only on the installer's own diagnostic readings, without an independent post-mitigation test performed according to state protocol, means you have no verified confirmation that the system achieved the reduction it was designed for."
          />
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>

      {/* Real Estate Section */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-8">
            Radon and Real Estate in Illinois
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed mb-8">
            Radon comes up more often during home sales than at almost any other time, and Illinois has specific legal requirements around it that both buyers and sellers should understand.
          </p>

          <QABlock
            question="Does Illinois law require radon disclosure when selling a home?"
            answer="Yes. Under the Illinois Radon Awareness Act (420 ILCS 46/10) and the Illinois Real Property Disclosure Act (765 ILCS 77/), any home seller who has knowledge of radon test results for their property is legally required to disclose that information to a buyer. Importantly, this legislation does not require a home to actually be tested before sale, and it doesn't require mitigation even if elevated levels are known — but if a test has been done and results exist, hiding them is not legally an option."
          />

          <QABlock
            question="Who pays for radon mitigation in a home sale — buyer or seller?"
            answer="There's no single rule; it's a negotiated point in the transaction, similar to other inspection findings. In many Rockford-area sales, the buyer requests a radon test as part of the standard home inspection process, and if the results come back elevated, mitigation costs become a negotiation point between buyer and seller."
            bullets={[
              'Seller may install system before closing',
              'Seller may offer credit at closing',
              'Parties may escrow funds for mitigation',
              'Buyer may accept as-is with price concession',
            ]}
          />
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-primary-50">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-8">
            Areas We Serve
          </h2>
          <p className="text-lg text-neutral-700 mb-8">
            We provide radon testing and mitigation services throughout Rockford and the surrounding Winnebago County area. Whether you're in a century-old home near a historic district or a newer build on the north side toward Roscoe, radon risk isn't determined by neighborhood reputation or home price — it's determined by what's in the soil beneath the foundation.
          </p>
          <div className="flex flex-wrap gap-3">
            {businessConfig.serviceAreas.map((area) => (
              <span key={area} className="bg-white px-4 py-2 rounded-full text-sm font-medium text-neutral-700 shadow-sm border border-neutral-200">
                {area}, IL
              </span>
            ))}
          </div>
          <p className="text-neutral-600 mt-4 text-sm">
            Zip codes: {businessConfig.zipCodes.join(', ')}
          </p>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-8">
            Why Choose Us
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed mb-8">
            Radon work in Illinois isn't something just anyone can legally perform. Measurement and mitigation professionals are required to be licensed through the Illinois Emergency Management Agency's Division of Nuclear Safety, under the Illinois Radon Industry Licensing Act (32 Illinois Administrative Code 422). That licensing exists specifically to make sure testing is performed correctly and mitigation systems are designed and installed to actually work — not just to check a box.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <Shield className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="font-heading font-bold text-lg mb-2">Illinois Licensed</h3>
              <p className="text-neutral-600 text-sm">Fully licensed through IEMA Division of Nuclear Safety</p>
            </div>
            <div className="text-center p-6">
              <Award className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="font-heading font-bold text-lg mb-2">EPA Protocol</h3>
              <p className="text-neutral-600 text-sm">Industry-standard continuous monitoring equipment</p>
            </div>
            <div className="text-center p-6">
              <CheckCircle2 className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="font-heading font-bold text-lg mb-2">Documented Results</h3>
              <p className="text-neutral-600 text-sm">Clear, defensible documentation for all transactions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>

      {/* FAQ Section */}
      <section className="py-16 bg-neutral-50">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {homeFAQs.slice(13).map((faq, index) => (
              <QABlock key={index} question={faq.question} answer={faq.answer} bullets={faq.bullets} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-primary-700 to-primary-800 text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Get Your Home Tested
          </h2>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto mb-8">
            Radon is one of the few home health risks that's completely invisible until you test for it — and one of the most fixable once you know what you're dealing with. Whether you're buying a home, selling one, or simply want to know what's in the air you and your family breathe every day in Rockford, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={getPhoneLink()} className="btn-accent">
              <Phone className="w-5 h-5 mr-2" />
              Call {businessConfig.phone}
            </a>
            <Link to="/contact" className="btn-secondary bg-white/10 border-white/30 hover:bg-white/20">
              Contact Us Online
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
