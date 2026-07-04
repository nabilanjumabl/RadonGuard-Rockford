import { Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/SEO';
import { StatCard } from '../components/ui/StatCard';
import { QABlock } from '../components/ui/QABlock';
import { TestingCostEstimator } from '../components/tools/TestingCostEstimator';
import { businessConfig, getPhoneLink, getMapsLink } from '../config/business';
import { generateFAQSchema } from '../utils/schema';
import { getFullUrl } from '../utils/seo';

const testingFAQs = [
  { question: 'Is radon testing expensive compared to other home inspection services?', answer: 'No - radon testing is one of the more affordable add-ons available during a home inspection, typically falling in the $150-$250 range, especially when weighed against the potential cost of undiagnosed elevated radon.' },
  { question: 'Does testing cost more for a bigger house?', answer: 'Cost is driven more by the number of distinct lowest-level areas needing separate monitors than by square footage alone - a large single-story home on a slab may need just one test area, while a smaller home with a basement and a separate crawlspace addition may need two.' },
  { question: 'Is a long-term test ever worth the extra cost?', answer: 'It can be, particularly if a short-term result comes back borderline (in the 2-4 pCi/L range) and you want a fuller seasonal picture before deciding on mitigation, though most homeowners find a short-term test sufficient for making a decision.' },
  { question: 'Do I need to pay for testing again after I\'ve already tested once?', answer: 'Periodic retesting every 2 to 5 years is recommended even without a mitigation system in place, since radon levels can change over time due to foundation settling, renovations, or shifting soil conditions.' },
  { question: 'Will testing cost more if I need a commercial building tested?', answer: 'Commercial radon testing typically involves a larger footprint and multiple testing zones compared to a single-family home, which generally means a broader scope and cost structure than standard residential testing.' },
  { question: 'Does the cost change if my home already has a radon mitigation system?', answer: 'Post-mitigation retesting is generally a narrower, more defined service than an initial diagnostic test, since it\'s focused on verifying one specific system rather than assessing an entire home from scratch, though it should still follow the same short-term testing protocol.' },
  { question: 'Can I split the cost of testing with the other party in a home sale?', answer: 'Buyer and seller can negotiate who covers testing costs just as they can with mitigation costs, though this is a matter of negotiation between the parties rather than something set by law.' },
];

export function TestingCostEstimatorPage() {
  const faqSchema = generateFAQSchema(testingFAQs);

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Radon Testing Cost Estimator',
    description: 'Estimate radon testing costs for your Rockford, IL property based on testing reason, foundation areas, and test type.',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Any',
  };

  return (
    <Layout>
      <SEO
        pageKey="testingCostCalculator"
        breadcrumbs={[
          { name: 'Home', url: getFullUrl('/') },
          { name: 'Free Tools', url: getFullUrl('/tools') },
          { name: 'Testing Cost Estimator', url: getFullUrl('/radon-testing-cost-calculator') },
        ]}
        additionalSchema={[faqSchema, webAppSchema]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white py-16 md:py-20">
        <div className="section-container">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Radon Testing Cost Calculator — Rockford, IL
          </h1>
          <p className="text-lg md:text-xl text-primary-100 max-w-3xl">
            How much does it cost to test for radon in Rockford? Radon testing bundled into a home inspection typically runs $150 to $250, though your actual cost depends on why you're testing, how many areas of the home need separate monitors, and whether you choose a standard short-term test or a longer monitoring period.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="py-12">
        <div className="section-container">
          <p className="text-neutral-700 leading-relaxed mb-6">
            Radon testing isn't a one-size-fits-all service, and pricing questions are some of the most common we hear from Rockford homeowners, buyers, and sellers. Rather than guessing, this tool walks through the actual variables that move the price up or down — so you know what to expect before you schedule anything.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-8">
            Part of the confusion around radon testing cost comes from the fact that "radon testing" isn't really one single service — it's a category that covers several distinct scenarios with different requirements. A homeowner in the 61107 zip code doing a routine check has a different set of needs than a buyer under contract on a Victorian-era home near downtown Rockford with a closing date two weeks out, and a commercial property manager scheduling testing across a multi-tenant building has different needs still.
          </p>

          {/* Stat Callout */}
          <div className="my-8">
            <StatCard
              value="$150-$250"
              label="Typical Radon Testing Cost"
              subtext="When bundled with a home inspection in the Rockford area"
              variant="accent"
            />
          </div>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mt-12 mb-6">
            What Actually Determines Radon Testing Cost
          </h2>

          <p className="text-neutral-700 leading-relaxed mb-6">
            Three factors do most of the work in determining what you'll pay for radon testing: why you're testing, how many areas of the home need monitoring, and how long the test runs.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-4">
            <strong>Reason for testing.</strong> A routine homeowner check, a real estate transaction, a post-mitigation retest, and a commercial building test are all different services with different scopes. Real estate testing often needs to meet a closing timeline and produce documentation that satisfies buyers, sellers, and lenders. Post-mitigation retesting is narrower in scope — confirming a specific system is working — while commercial testing usually spans a larger footprint and multiple zones.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-4">
            <strong>Number of foundation areas.</strong> This is one of the most overlooked cost drivers. Every lowest structural area in a home needs to be tested separately, because radon concentration can vary significantly between, say, a finished basement and an adjacent crawlspace under a different part of the house. A home with just one lowest-level area (a single basement, for example) needs one monitor. A home with a basement plus a separate crawlspace, or a split-level with multiple ground-contact areas, needs two or more — and that directly affects the price.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-4">
            <strong>Test type.</strong> Standard short-term testing, using a continuous radon monitor over a defined window (most commonly 48 hours, with short-term tests generally ranging from 2 to 90 days), is the most common and cost-effective option. Long-term testing, which runs for several months to capture seasonal variation, is a different service with different equipment and monitoring requirements.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-4">
            <strong>Who's doing the testing.</strong> Professional testing with a calibrated continuous radon monitor — such as an Airthings Corentium Pro, a common example of the equipment used in the field — costs more than a basic DIY kit, but it also delivers more reliable, defensible results, which matters most in real estate and legal contexts.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-8">
            <strong>Local geology and housing stock.</strong> While geology itself doesn't change the price of a test, it does affect how many areas typically need testing in Rockford specifically. Winnebago County's Zone 1 designation, driven by glacial till deposits over limestone bedrock, means elevated soil radon is common across the area — and the region's mix of Victorian-era homes, early 1900s construction, post-war ranches, and modern subdivisions each tend to have different foundation configurations that can affect how many distinct areas need monitoring.
          </p>

          {/* Tool Embed */}
          <TestingCostEstimator />

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mt-12 mb-6">
            Standalone Test vs. Bundled with a Home Inspection
          </h2>

          <QABlock
            question="Does it cost less to bundle radon testing with a home inspection?"
            answer="Yes, in most cases - when radon testing is added on as part of a broader home inspection, the incremental cost tends to fall within the standard $150-$250 range, since the inspector is often already on-site and coordinating the visit."
            bullets={[
              'Bundled testing makes sense for most real estate transactions, since a home inspection is typically happening anyway and radon can be added to the same visit with less scheduling overhead.',
              'Standalone testing is the right choice for homeowners who aren\'t in the middle of a transaction - for example, someone who\'s owned their home for years and simply wants a routine check.',
              'Either way, the core testing process is identical: a monitor is placed in the lowest livable level (or levels) of the home, closed-house conditions are maintained, and the device runs for the test duration.',
            ]}
          />

          <p className="text-neutral-700 leading-relaxed mb-6">
            The main cost difference between the two isn't the testing itself — it's whether you're also paying for a broader inspection at the same time. If you only need the radon piece, a standalone test avoids paying for inspection services you don't need.
          </p>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mt-12 mb-6">
            Short-Term vs. Long-Term Test Cost and Tradeoffs
          </h2>

          <QABlock
            question="What's the difference between a short-term and long-term radon test?"
            answer="A short-term test runs for a matter of days (most commonly 48 hours, with a range of 2 to 90 days), while a long-term test runs for 90 days or more to capture how radon levels shift across seasons - and the two come with different cost and timeline tradeoffs."
            bullets={[
              'Short-term testing is faster and generally more affordable, since it requires less equipment time and produces a quicker turnaround - usually the right fit for real estate deadlines, post-mitigation checks, or a homeowner who wants an answer soon.',
              'Long-term testing takes more time to complete since the monitor needs to remain in place for months, which can mean higher costs tied to extended equipment placement and monitoring.',
              'For most Rockford homeowners and buyers, a short-term test provides sufficient, reliable data without the extended timeline - which is why it\'s the default recommendation.',
            ]}
          />

          <QABlock
            question="How long does a radon test take?"
            answer="A standard short-term test takes about 48 hours of active monitoring, following a required 12-hour period of closed-house conditions beforehand. From scheduling to receiving your results, most Rockford homeowners can expect the full process to wrap up within about a week."
          />

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mt-12 mb-6">
            Real Estate Transaction Testing Costs Specifically
          </h2>

          <p className="text-neutral-700 leading-relaxed mb-6">
            Radon testing tied to a home sale comes with its own considerations that can affect both cost and timing:
          </p>

          <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-8">
            <li><strong>Timing pressure.</strong> Real estate transactions run on closing deadlines, and radon testing needs to fit within that window — including the 12-hour closed-house prep period and the 48-hour test itself — which sometimes means paying for expedited scheduling.</li>
            <li><strong>Multiple testing areas.</strong> Older Rockford homes, including Victorian-era properties in the city's historic districts, sometimes have more complex foundation layouts — a full basement plus a separate crawlspace addition, for example — which can mean testing more than one area and a corresponding cost increase.</li>
            <li><strong>Documentation requirements.</strong> Results from a real estate-related test often need to be shared with buyers, sellers, agents, and sometimes lenders, so professional testing with proper documentation is typically preferred over a DIY approach in this context.</li>
            <li><strong>Negotiation implications.</strong> Illinois law requires sellers to disclose known radon results, though it doesn't mandate testing or mitigation outright. If a test comes back elevated, the cost of mitigation (typically $800-$2,000 for a Rockford-area system) often becomes part of the negotiation between buyer and seller.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mt-12 mb-6">
            DIY Test Kits vs. Professional Testing Cost Comparison
          </h2>

          <QABlock
            question="Can I test for radon myself, or do I need a professional?"
            answer="You can test radon yourself using a retail kit, but professional testing with a continuous radon monitor is generally the better choice when the results need to hold up for a real estate transaction, a legal disclosure, or peace of mind about accuracy."
            bullets={[
              'DIY kits are typically the lower-cost upfront option and can be a reasonable choice for a homeowner doing a casual, informal check with no transaction or documentation requirements attached.',
              'Professional testing costs more but includes proper placement across every lowest structural area, adherence to closed-house testing protocols, and use of a calibrated continuous monitor.',
              'For post-mitigation retesting specifically, professional testing is usually the more reliable choice, since confirming a system\'s performance accurately matters more than saving a modest amount on the test itself.',
            ]}
          />

          {/* Stat Callout */}
          <div className="my-8">
            <StatCard
              value="$150-$250"
              label="Professional Test Bundled with Inspection"
              subtext="Typical Rockford area cost"
              variant="primary"
            />
          </div>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mt-12 mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {testingFAQs.map((faq, index) => (
              <QABlock key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          {/* CTA */}
          <section className="bg-neutral-100 rounded-2xl p-8 mt-12 text-center">
            <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
              Get an Accurate Radon Testing Quote for Your Rockford Home
            </h3>
            <p className="text-neutral-700 mb-6 max-w-2xl mx-auto">
              Every home is a little different, and the calculator above is designed to give you a realistic starting point. For an exact quote tailored to your property, reach out directly.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href={getPhoneLink()} className="btn-primary">
                <Phone className="w-5 h-5 mr-2" />
                Call {businessConfig.phone}
              </a>
              <Link to="/contact" className="btn-secondary">
                Contact Us Online
              </Link>
            </div>
            <p className="text-sm text-neutral-500 mt-4">
              Serving {businessConfig.serviceAreas.join(', ')}
            </p>
          </section>
        </div>
      </article>
    </Layout>
  );
}
