import { Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/SEO';
import { StatCard } from '../components/ui/StatCard';
import { QABlock } from '../components/ui/QABlock';
import { DataTable } from '../components/ui/DataTable';
import { MitigationDiagram } from '../components/ui/MitigationDiagram';
import { MitigationCostCalculator } from '../components/tools/MitigationCostCalculator';
import { businessConfig, getPhoneLink, getMapsLink } from '../config/business';
import { generateFAQSchema } from '../utils/schema';
import { getFullUrl } from '../utils/seo';

const mitigationFAQs = [
  { question: 'Who is licensed to do radon mitigation in Illinois?', answer: 'Radon mitigation professionals in Illinois are licensed through the Illinois Emergency Management Agency (IEMA), Division of Nuclear Safety, under the state\'s Radon Industry Licensing Act (32 Illinois Administrative Code 422).' },
  { question: 'Can the same person both test and mitigate a home?', answer: 'This can raise a conflict-of-interest question, since the same party diagnosing a problem and then being paid to fix it isn\'t always viewed as fully independent - some homeowners prefer using separate providers for testing and mitigation, particularly in a real estate context, though Illinois licensing doesn\'t prohibit the same licensed professional from doing both.' },
  { question: 'Is a more expensive mitigation system automatically a better one?', answer: 'Not necessarily - cost differences typically reflect the complexity of what your specific home actually needs (foundation type, suction points, fan power), not necessarily a difference in overall system quality between providers doing comparable work.' },
  { question: 'Do I need to budget for anything after installation?', answer: 'Yes - beyond the upfront installation cost, plan for a post-mitigation retest within 30 days to confirm the system is working, and periodic fan replacement roughly every 5 to 10 years as routine maintenance.' },
  { question: 'What happens if the estimate from the calculator doesn\'t match what I\'m quoted?', answer: 'The calculator provides an estimate based on general Rockford-area pricing patterns; an exact quote requires an in-person diagnostic assessment, since factors like sub-slab soil conditions aren\'t something that can be fully determined from a homeowner\'s self-reported inputs alone.' },
  { question: 'Is it worth getting more than one mitigation quote?', answer: 'Comparing quotes can be useful, particularly for a combination foundation or a home needing multiple suction points, but make sure any quote you\'re comparing is based on an actual diagnostic visit rather than a phone estimate, since the details that drive cost aren\'t always visible without seeing the foundation directly.' },
];

const foundationCostData = [
  { type: 'Basement', range: '$1,000-$1,500', notes: 'Most common; single suction point typically sufficient' },
  { type: 'Crawl Space', range: '$1,200-$1,800', notes: 'Requires vapor barrier installation' },
  { type: 'Slab-on-Grade', range: '$1,000-$1,800', notes: 'Routing may be more limited by layout' },
  { type: 'Combination', range: '$1,500-$2,000+', notes: 'Multiple foundation types require multiple strategies' },
];

export function MitigationCostCalculatorPage() {
  const faqSchema = generateFAQSchema(mitigationFAQs);

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Radon Mitigation Cost Calculator',
    description: 'Estimate radon mitigation costs for your Rockford, IL home based on foundation type, radon levels, and system complexity.',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Any',
  };

  return (
    <Layout>
      <SEO
        pageKey="mitigationCostCalculator"
        breadcrumbs={[
          { name: 'Home', url: getFullUrl('/') },
          { name: 'Free Tools', url: getFullUrl('/tools') },
          { name: 'Mitigation Cost Calculator', url: getFullUrl('/radon-mitigation-cost-calculator') },
        ]}
        additionalSchema={[faqSchema, webAppSchema]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white py-16 md:py-20">
        <div className="section-container">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Radon Mitigation Cost Calculator — Rockford, IL
          </h1>
          <p className="text-lg md:text-xl text-primary-100 max-w-3xl">
            How much does radon mitigation cost in Rockford? A typical radon mitigation system in the Rockford area runs $800 to $2,000, with a standard basement installation usually landing between $1,000 and $1,500. Where your home falls in that range depends on your foundation type, how many suction points your home needs, and how elevated your radon levels are.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="py-12">
        <div className="section-container">
          <p className="text-neutral-700 leading-relaxed mb-6">
            If your radon test came back at or above the EPA's action level of 4 pCi/L, mitigation is the recommended next step — and understandably, cost is one of the first questions homeowners ask. Unlike a lot of home improvement projects, radon mitigation pricing follows a fairly predictable structure once you understand the handful of factors that actually drive it.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-8">
            It's also worth understanding upfront why mitigation cost varies as much as it does. Two homes on the same Rockford block, both with basements, can still end up with meaningfully different mitigation quotes depending on the age of the foundation, how the home was built, and what's happening beneath the slab that isn't visible from the surface.
          </p>

          {/* Stat Callout */}
          <div className="my-8">
            <StatCard
              value="$800-$2,000"
              label="Rockford Mitigation Cost Range"
              subtext="Standard basement systems average $1,000-$1,500"
              variant="success"
            />
          </div>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mt-12 mb-6">
            How Sub-Slab Depressurization Systems Are Priced
          </h2>

          <QABlock
            question="What is a sub-slab depressurization system?"
            answer="It's the most common method of radon mitigation, working by drawing radon gas from beneath a home's foundation through a pipe system and venting it safely above the roofline, before it has a chance to enter living spaces. When properly installed, this method can reduce indoor radon levels by up to 99%, typically bringing a home down to around 2 pCi/L - comfortably under the EPA's 4 pCi/L action level."
          />

          <p className="text-neutral-700 leading-relaxed mb-6">
            Pricing for a system like this comes down to a few core components, each of which adds labor, materials, or both:
          </p>

          <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-8">
            <li><strong>The suction point (or points).</strong> This is where a hole is cut into the slab or a similar point of entry is created beneath a crawlspace vapor barrier, and where the vent pipe begins its path up through the home.</li>
            <li><strong>The pipe run.</strong> PVC piping runs from the suction point up through the house — often through a closet, garage, or utility space — and out through the roof or an exterior wall, depending on the home's layout.</li>
            <li><strong>The fan.</strong> A specialized radon vent fan creates continuous negative pressure beneath the slab, pulling soil gas into the pipe system rather than letting it seep into the living space. Fan lifespan typically runs 5 to 10 years.</li>
            <li><strong>Sealing work.</strong> Cracks, sump openings, and other potential entry points in the foundation are sealed as part of a complete installation, since an effective system depends on directing soil gas through the pipe rather than leaving alternate paths into the home.</li>
            <li><strong>Labor and diagnostics.</strong> Before installation, a technician typically performs a diagnostic assessment of the foundation to determine the most effective suction point placement — this isn't guesswork, and it directly affects how well the finished system performs.</li>
            <li><strong>Post-installation testing.</strong> A responsible mitigation process includes a post-installation retest, typically recommended within 30 days, to confirm the system is actually bringing radon down to a safe level.</li>
          </ul>

          {/* Diagram */}
          <MitigationDiagram />

          {/* Tool Embed */}
          <MitigationCostCalculator />

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mt-12 mb-6">
            Cost by Foundation Type in Detail
          </h2>

          <p className="text-neutral-700 leading-relaxed mb-6">
            Foundation type is one of the biggest cost swing factors in radon mitigation, because it changes how a system needs to be installed.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-4">
            <strong>Basements.</strong> A full basement is the most common foundation type across much of Rockford's housing stock, and it's generally the most straightforward and cost-predictable scenario for mitigation — a single suction point through the slab is often sufficient, which is why standard basement systems tend to fall in the $1,000–$1,500 range.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-4">
            <strong>Crawl spaces.</strong> Homes with crawl spaces require a somewhat different approach, often involving a vapor barrier sealed across the crawlspace floor with a suction point drawing air from beneath that barrier rather than through a poured slab. This method, sometimes called sub-membrane depressurization, can add cost depending on the size and accessibility of the crawlspace.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-4">
            <strong>Slab-on-grade.</strong> Homes built directly on a concrete slab with no basement or crawlspace still typically use sub-slab depressurization, but suction point placement and pipe routing may be more limited by the home's layout, since there's no basement space to route piping through discreetly.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-6">
            <strong>Combination foundations.</strong> Many older Rockford homes — including Victorian-era properties in the city's historic districts and homes that have seen additions over the decades — have combination foundations, where part of the home sits on a basement and another part sits on a crawlspace or slab addition. These homes typically cost more to mitigate because they may need multiple suction points and separate sealing work to address each distinct foundation type under one roof.
          </p>

          <DataTable
            title="Cost by Foundation Type"
            columns={[
              { header: 'Foundation Type', accessor: 'type' },
              { header: 'Cost Range', accessor: 'range' },
              { header: 'Notes', accessor: 'notes' },
            ]}
            data={foundationCostData}
          />

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mt-12 mb-6">
            Fan Lifespan and Long-Term Cost of Ownership
          </h2>

          <QABlock
            question="How long does a radon fan last?"
            answer="A radon vent fan typically lasts 5 to 10 years, since it runs continuously around the clock to maintain steady negative pressure beneath the foundation. Because it's constantly operating, it's the component most likely to need replacement before anything else in the system."
          />

          <QABlock
            question="How long does a radon mitigation system last?"
            answer="The system as a whole — the piping, seals, and suction point structure — is designed to last 20 or more years with proper maintenance, even though the fan itself will likely be replaced at least once, sometimes twice, over that span. This distinction matters for budgeting: the upfront mitigation cost of $800-$2,000 isn't necessarily a one-time expense for the life of the home, but a full system overhaul is rarely needed if the underlying piping and sealing were installed correctly."
          />

          <p className="text-neutral-700 leading-relaxed mb-8">
            Thinking about mitigation in terms of long-term cost of ownership rather than a single upfront number gives a more realistic picture. A homeowner who installs a system today should reasonably expect a fan replacement sometime in the next 5 to 10 years, factored in as routine maintenance rather than an unexpected repair.
          </p>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mt-12 mb-6">
            When Multiple Suction Points Are Needed
          </h2>

          <p className="text-neutral-700 leading-relaxed mb-6">
            Not every home can be effectively mitigated with a single suction point, and this is one of the more significant variables behind why mitigation quotes vary from home to home.
          </p>

          <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-8">
            <li><strong>Larger foundations</strong> with more square footage under the slab may not achieve even suction across the entire area from a single point, requiring a second (or third) suction point to ensure consistent depressurization throughout.</li>
            <li><strong>Higher initial radon readings</strong> — particularly in the 8–15 pCi/L or 15+ pCi/L range — sometimes indicate more significant soil gas intrusion that a single suction point and standard fan may not fully address.</li>
            <li><strong>Foundations with multiple distinct sections</strong>, such as combination foundations with a basement and a separate crawlspace or slab addition, generally need at least one suction point per section.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mt-12 mb-6">
            Financing and Negotiating Mitigation Cost in a Real Estate Sale
          </h2>

          <p className="text-neutral-700 leading-relaxed mb-6">
            Mitigation costs come up often in the middle of home sales, and Illinois law gives buyers and sellers some flexibility in how that gets handled.
          </p>

          <QABlock
            question="Does Illinois law require radon disclosure when selling a home?"
            answer="Yes - Illinois law requires sellers to disclose known radon test results, though it does not mandate that a home actually be tested or mitigated before a sale."
          />

          <QABlock
            question="Who pays for radon mitigation in a home sale — buyer or seller?"
            answer="There's no fixed rule; buyer and seller can negotiate who covers mitigation costs as part of the overall transaction, similar to how other inspection-related repairs are often negotiated."
            bullets={[
              'Escrowing funds is a common approach when a mitigation system can\'t be installed before closing.',
              'Price adjustments are another option, reflecting estimated mitigation cost in the sale price.',
              'Seller-completed installation before closing is also common when timeline allows.',
              'Avoiding a rushed installation is worth emphasizing - proper diagnostics and retesting matter.',
            ]}
          />

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mt-12 mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {mitigationFAQs.map((faq, index) => (
              <QABlock key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          {/* CTA */}
          <section className="bg-gradient-to-br from-success-600 to-success-700 rounded-2xl p-8 mt-12 text-center text-white">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Get an Accurate Mitigation Quote for Your Rockford Home
            </h3>
            <p className="text-success-100 mb-6 max-w-2xl mx-auto">
              The calculator above gives you a solid starting estimate, but every foundation is a little different once you get beneath the surface. For a precise quote, schedule a diagnostic assessment.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href={getPhoneLink()} className="btn-accent">
                <Phone className="w-5 h-5 mr-2" />
                Call {businessConfig.phone}
              </a>
              <Link to="/contact" className="btn-secondary bg-white/10 border-white/30 hover:bg-white/20">
                Request a Free Quote
              </Link>
            </div>
            <p className="text-sm text-success-200 mt-4">
              {businessConfig.name} | {businessConfig.address}
            </p>
          </section>
        </div>
      </article>
    </Layout>
  );
}
