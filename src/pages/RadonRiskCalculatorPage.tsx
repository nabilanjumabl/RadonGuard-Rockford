import { Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/SEO';
import { StatCard } from '../components/ui/StatCard';
import { QABlock } from '../components/ui/QABlock';
import { DataTable } from '../components/ui/DataTable';
import { RadonRiskCalculator } from '../components/tools/RadonRiskCalculator';
import { businessConfig, getPhoneLink, getMapsLink } from '../config/business';
import { generateFAQSchema } from '../utils/schema';
import { getFullUrl } from '../utils/seo';

const riskFAQs = [
  { question: 'Can I test for radon myself or do I need a professional?', answer: 'Both options exist. DIY test kits are available and can give homeowners a general sense of their levels, but professional testing using a continuous radon monitor offers more reliable placement, proper closed-house condition monitoring, and documentation that\'s typically required for real estate transactions or licensing compliance (for facilities like daycares). If your calculator result falls in the High or Very High tier, professional testing is the more reliable choice.' },
  { question: 'Why does home age affect radon risk if radon comes from the ground, not the building?', answer: 'Home age is a proxy for foundation condition and construction era, not a direct radon source. Older foundations tend to have more settling cracks and less consistent sealing around utility penetrations - both are pathways, not causes. The uranium decay producing the radon itself doesn\'t care how old the house above it is; it\'s entirely a soil and bedrock phenomenon.' },
  { question: 'Does a Low risk tier mean I don\'t need to test?', answer: 'No. Every risk tier still carries a testing recommendation, because the calculator estimates statistical likelihood, not your home\'s actual reading. A Low tier simply means fewer known risk factors are present - it\'s not a substitute for measurement.' },
  { question: 'Should I test again if my neighbor\'s home tested low?', answer: 'No - even homes with similar age and foundation type on the same block can have meaningfully different readings, because soil gas concentration and pathways vary at a very local, even sub-lot, scale. Your neighbor\'s result tells you nothing reliable about your own home\'s radon level.' },
  { question: 'How is this calculator different from an official EPA zone map?', answer: 'EPA Zone maps operate at the county level and reflect broad averages. Our calculator layers your specific home\'s age and foundation type on top of Winnebago County\'s known Zone 1 baseline to give a more individualized (though still statistical, not measured) estimate.' },
];

const foundationTableData = [
  { type: 'Basement', risk: 'Higher', reason: 'Largest ground contact area - walls and floor' },
  { type: 'Crawl Space', risk: 'Moderate-High', reason: 'Exposed soil under vapor barrier' },
  { type: 'Slab-on-Grade', risk: 'Lower', reason: 'Single concrete floor contact point' },
  { type: 'Combination', risk: 'Higher', reason: 'Multiple foundation types = more entry pathways' },
];

export function RadonRiskCalculatorPage() {
  const faqSchema = generateFAQSchema(riskFAQs);

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Radon Risk Calculator',
    description: 'Estimate your Rockford, IL home\'s radon risk based on zip code, home age, and foundation type.',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
  };

  return (
    <Layout>
      <SEO
        pageKey="riskCalculator"
        breadcrumbs={[
          { name: 'Home', url: getFullUrl('/') },
          { name: 'Free Tools', url: getFullUrl('/tools') },
          { name: 'Radon Risk Calculator', url: getFullUrl('/radon-risk-calculator') },
        ]}
        additionalSchema={[faqSchema, webAppSchema]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white py-16 md:py-20">
        <div className="section-container">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Radon Risk Calculator: Estimate Your Rockford Home's Radon Risk
          </h1>
          <p className="text-lg md:text-xl text-primary-100 max-w-3xl">
            Two houses on the same street in Rockford can produce wildly different radon readings - one testing well under the EPA's action level, the other testing several times over it. Our radon risk calculator below gives you a quick, educational estimate of where your home likely falls.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="py-12">
        <div className="section-container">
          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            <strong>What is a safe radon level in a home?</strong> The EPA sets its action level at 4 pCi/L, and recommends considering mitigation for anything between 2 and 4 pCi/L, since there's no fully "safe" threshold - risk scales with exposure, and lower is always better. Keep that benchmark in mind as you use the tool below: a "Low" risk tier doesn't mean zero radon, it means a lower statistical likelihood of testing above that action level based on known risk factors.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-6">
            This isn't a replacement for an actual test - only a continuous radon monitor placed in your home can tell you your real number. But it's a useful starting point for understanding why radon testing matters more for some homes than others, and it can help you prioritize testing if you own or manage more than one property in the area.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-8">
            Think of the calculator as similar in spirit to a home value estimator: it's built from known statistical patterns and gives you a directionally useful answer, but it isn't the underlying measurement itself. Just as a home value estimator doesn't replace a formal appraisal, this tool doesn't replace a properly conducted radon test using calibrated equipment.
          </p>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mt-12 mb-6">
            How Radon Risk Factors Actually Work
          </h2>

          <p className="text-neutral-700 leading-relaxed mb-6">
            Radon risk comes down to three interacting variables: how much radon-producing material sits in the soil beneath a structure, how easily that soil gas can move into the building, and how much of the building's lowest level is in direct contact with the ground. Our calculator's three inputs map directly onto these variables.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-6">
            <strong>Why is radon higher in Rockford and Winnebago County homes?</strong> The short answer is geology. Winnebago County sits atop glacial till deposited by the Wisconsin glaciation, layered over limestone bedrock. Glacial till is a geologically "young," loosely packed mix of soil, gravel, and rock fragments - a structure that both traps uranium-bearing minerals and allows soil gas to move through it more freely than through dense, undisturbed bedrock.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-6">
            Home age matters because it's a rough proxy for foundation condition and construction methods. Older homes - particularly Victorian-era construction and early-1900s housing common in Rockford's historic districts - often have foundations with more settling cracks, less consistent waterproofing, and construction techniques that predate any radon-specific building practices. Newer homes built after 2000 sometimes (though not always) incorporate passive radon-resistant construction techniques, which can lower - but does not eliminate - risk.
          </p>

          <QABlock
            question="Where should radon detectors be placed in a home?"
            answer="Regardless of what the risk calculator estimates, any actual test should place a monitor in the lowest livable level of the home, and separately in each distinct foundation area if a home has more than one - for example, a basement under the main structure and a crawlspace under an addition. The highest reading in a home isn't always in the basement, which is why single-point testing can miss elevated levels in another part of the structure."
          />

          {/* Stat Callout */}
          <div className="my-8">
            <StatCard
              value="Zone 1"
              label="Winnebago County EPA Classification"
              subtext="The agency's highest risk classification"
              variant="accent"
            />
          </div>

          {/* Tool Embed */}
          <RadonRiskCalculator />

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mt-12 mb-6">
            Understanding Your Result: What Each Risk Tier Means
          </h2>

          <p className="text-neutral-700 leading-relaxed mb-6">
            The calculator above sorts results into three tiers - Moderate, High, and Very High - based on your zip code's Zone 1 baseline combined with the weighting from your home's age and foundation type. Here's what each tier is communicating:
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <span className="bg-primary-100 text-primary-700 font-bold px-2 py-1 rounded text-sm mt-0.5">Moderate</span>
              <span className="text-neutral-700">Some risk factors are present (for example, an older home on a slab, or a newer home with a basement). Testing is still recommended, particularly given that the entire service area sits in Zone 1.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-warning-100 text-warning-700 font-bold px-2 py-1 rounded text-sm mt-0.5">High</span>
              <span className="text-neutral-700">Multiple risk factors compound (for example, a pre-1980 home with a basement or crawlspace). Testing should be treated as a near-term priority.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-error-100 text-error-700 font-bold px-2 py-1 rounded text-sm mt-0.5">Very High</span>
              <span className="text-neutral-700">The combination of home age, foundation type, and location reflects the highest-risk profile this tool tracks (typically pre-1950 construction with a basement or combination foundation). Testing should happen as soon as possible.</span>
            </li>
          </ul>

          <p className="text-neutral-700 leading-relaxed mb-6">
            Every tier - including Moderate - comes with the same underlying recommendation: get an actual test. The calculator is built entirely from statistical risk factors, not your home's real radon reading, and the only way to know that number is to measure it directly with a continuous radon monitor over a standard testing window.
          </p>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mt-12 mb-6">
            Winnebago County's Zone 1 Status, Explained in Depth
          </h2>

          <p className="text-neutral-700 leading-relaxed mb-6">
            EPA Radon Zones are a national classification system ranking counties by predicted average indoor radon levels, based on geology, foundation types, and historical testing data. Zone 1 is the highest of three tiers, reserved for counties where the predicted average indoor radon level exceeds 4 pCi/L - the same number as the EPA's individual-home action level.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-6">
            Winnebago County's Zone 1 designation isn't an isolated case in Illinois - roughly 55% of Illinois counties carry the same Zone 1 classification, reflecting a broader pattern across the glacial till regions of the upper Midwest. But Zone 1 status is a county-level average, not a home-level guarantee - it tells you the odds are stacked toward elevated readings across the area, not that every individual home will test high.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-8">
            That statistical reality shows up clearly in Illinois testing data: of 118,447 Illinois homes tested statewide, more than 41% came back elevated above the action level. That means well over half tested below it - proof that Zone 1 status raises the baseline risk without making elevated radon a certainty for any specific address.
          </p>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mt-12 mb-6">
            Foundation Type Deep Dive: Why Basements, Crawlspaces, and Slabs Behave Differently
          </h2>

          <p className="text-neutral-700 leading-relaxed mb-6">
            <strong>Can well water contain radon?</strong> Before diving into foundation types, it's worth noting a separate radon pathway: radon can dissolve into groundwater and enter a home through well water, independent of the soil-gas mechanism this calculator focuses on. This is mainly relevant for homes in outlying parts of Winnebago County on private wells rather than municipal water, and it requires different testing than the air-based methods discussed here.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-6">
            Back to foundations - the calculator weights basements more heavily than slab-on-grade homes, and here's the mechanical reason why:
          </p>

          <DataTable
            title="Foundation Types and Risk Factors"
            columns={[
              { header: 'Foundation Type', accessor: 'type' },
              { header: 'Risk Level', accessor: 'risk' },
              { header: 'Reason', accessor: 'reason' },
            ]}
            data={foundationTableData}
          />

          <p className="text-neutral-700 leading-relaxed mb-6">
            It's worth being direct about what this calculator does not account for. It has no way to know whether a specific home has visible foundation cracks, an open sump pit, a finished versus unfinished basement, or prior renovation work that might have sealed off (or newly created) soil gas entry points. It also can't account for hyperlocal soil variation - two adjacent lots can sit over slightly different pockets of glacial till with meaningfully different uranium content, something no zip-code-level tool can capture.
          </p>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mt-12 mb-6">
            What to Do Next Based on Your Risk Tier
          </h2>

          <p className="text-neutral-700 leading-relaxed mb-6">
            Regardless of which tier the calculator returns, the next step is the same: schedule an actual test. What changes by tier is urgency and preparation:
          </p>

          <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-8">
            <li><strong>Moderate tier</strong> - Schedule a standard test on a normal timeline; there's no need to treat it as an emergency, but it shouldn't be indefinitely postponed given the county's overall Zone 1 status.</li>
            <li><strong>High tier</strong> - Prioritize testing soon, and consider testing each distinct foundation area separately if your home has more than one.</li>
            <li><strong>Very High tier</strong> - Test as soon as scheduling allows, and go in mentally prepared for the possibility of mitigation. Understanding the typical Rockford mitigation cost range ahead of time ($800-$2,000, with standard basement systems commonly landing in the $1,000-$1,500 range) can make a follow-up decision easier if your result comes back elevated.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mt-12 mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {riskFAQs.map((faq, index) => (
              <QABlock key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          {/* CTA */}
          <section className="bg-gradient-to-br from-primary-700 to-primary-800 rounded-2xl p-8 mt-12 text-center text-white">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Get an Actual Radon Test for Your Home
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              The calculator above is a starting point - a real, professionally administered radon test is the only way to know your home's actual level. Our licensed technicians serve homeowners throughout Rockford and Winnebago County.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href={getPhoneLink()} className="btn-accent">
                <Phone className="w-5 h-5 mr-2" />
                Call {businessConfig.phone}
              </a>
              <Link to="/contact" className="btn-secondary bg-white/10 border-white/30 hover:bg-white/20">
                Schedule a Test Online
              </Link>
            </div>
            <p className="text-sm text-primary-200 mt-4">
              {businessConfig.name} | {businessConfig.address}, Rockford, IL
            </p>
          </section>
        </div>
      </article>
    </Layout>
  );
}
