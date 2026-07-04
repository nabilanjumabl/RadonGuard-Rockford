import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/SEO';
import { StatCard } from '../components/ui/StatCard';
import { QABlock } from '../components/ui/QABlock';
import { DataTable } from '../components/ui/DataTable';
import { businessConfig, getPhoneLink } from '../config/business';
import { generateFAQSchema, generateServiceSchema } from '../utils/schema';

const testingFAQs = [
  { question: 'What is radon gas and why is it dangerous?', answer: 'Radon is a naturally occurring radioactive gas produced by the decay of uranium in soil and rock. It\'s completely odorless, colorless, and tasteless, which is exactly why testing — not your senses — is the only way to detect it. Radon seeps up through the ground and can accumulate in enclosed spaces like basements and crawlspaces, where it gets trapped and concentrated.' },
  { question: "What's the difference between a short-term and long-term radon test?", answer: 'Short-term tests run anywhere from 2 to 90 days, though most fall in the 2-to-7-day range, with 48 hours being the most common window for a standard test. Long-term tests, by contrast, run for several months and are better suited to capturing how radon levels shift with the seasons. For most real estate transactions, home inspections, or a first-time check of a Rockford home, short-term testing is the practical choice because it delivers a trustworthy result quickly.' },
  { question: 'Can I test for radon myself, or do I need a professional?', answer: 'Homeowners can purchase DIY test kits, but professional short-term testing using a calibrated continuous monitor offers a level of accuracy and tamper-resistance that\'s especially important during real estate transactions, where results may need to hold up to scrutiny from buyers, sellers, or lenders. A licensed technician also knows how to properly account for Rockford\'s specific housing quirks — from Victorian-era homes in the city\'s historic districts to post-war ranches with shallow crawlspaces.' },
  { question: 'Where should radon detectors be placed in a home?', answer: 'The monitor is placed in the lowest livable level of the home — this usually means a basement that\'s used as living space, but it can also mean a ground-floor room if the home has no basement. Placement matters because radon concentrates near the ground, and a monitor placed in an upstairs bedroom simply won\'t reflect real exposure risk.' },
  { question: 'How long does a radon test take?', answer: 'For most Rockford homes, the full process from setup to result takes about 48 hours of active monitoring, plus the 12-hour closed-house prep period beforehand. Same-day setup and next-day retrieval is typical for a standard residential test.' },
  { question: 'What is a safe radon level in a home?', answer: 'The EPA has set 4 pCi/L as the action level — the point at which mitigation is recommended. However, the EPA also advises homeowners to consider fixing their home if levels fall between 2 and 4 pCi/L, since no level of radon exposure is considered completely risk-free.' },
  { question: 'Can well water contain radon?', answer: 'Yes. While most residential radon exposure comes from soil gas entering through the foundation, radon can also dissolve into groundwater. This is particularly relevant for homes on private wells in the more rural stretches of outlying Winnebago County.' },
  { question: 'How much does it cost to test for radon in Rockford?', answer: 'Standalone short-term radon testing is a modest investment relative to the health information it provides. When bundled as part of a broader home inspection — common during a real estate transaction — radon testing typically adds $150 to $250 to the inspection cost.' },
  { question: 'Should I skip testing if my neighbor\'s home tested low?', answer: 'No. Radon levels can vary significantly from one property to the next, even on the same block, due to differences in soil composition directly beneath a home, foundation cracks, sump pit conditions, and construction details. A low reading next door tells you nothing reliably about your own home.' },
  { question: 'Is radon dangerous — does it really cause cancer?', answer: 'Yes. Radon is the leading cause of lung cancer among non-smokers and the second-leading cause overall, responsible for an estimated 21,000 deaths nationally each year.' },
  { question: 'Do I need a professional, or can I just buy a kit from the hardware store?', answer: 'Either can technically detect radon, but professional testing with a continuous monitor provides more precise, defensible data — especially important if the results will factor into a real estate transaction.' },
  { question: 'What if my test comes back high?', answer: 'A reading at or above 4 pCi/L (or even in the 2–4 pCi/L range) means it\'s worth exploring a mitigation system, most commonly sub-slab depressurization, which is typically installed by a licensed radon mitigation professional.' },
];

export function ShortTermTestingPage() {
  const faqSchema = generateFAQSchema(testingFAQs);

  const timelineData = [
    { phase: 'Prep Period', duration: '12 hours', details: 'Closed-house conditions before test' },
    { phase: 'Active Monitoring', duration: '48 hours', details: 'Continuous radon monitor running' },
    { phase: 'Data Retrieval', duration: 'Same day', details: 'Monitor collected, data downloaded' },
    { phase: 'Results Report', duration: 'Within 24 hours', details: 'Detailed report with recommendations' },
  ];

  return (
    <Layout>
      <SEO
        pageKey="shortTermTesting"
        breadcrumbs={[
          { name: 'Home', url: 'https://radon-guard-rockford.vercel.app/' },
          { name: 'Services', url: 'https://radon-guard-rockford.vercel.app/services/short-term-testing' },
          { name: 'Short-Term Testing', url: 'https://radon-guard-rockford.vercel.app/services/short-term-testing' },
        ]}
        additionalSchema={generateFAQSchema(testingFAQs)}
      />

      {/* Hero Section with Gradient Background */}
      <section className="relative bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white py-16 md:py-24 overflow-hidden">
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-800/20 to-transparent opacity-50"></div>

        {/* Hero content and graphic */}
        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Content side */}
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
                Short-Term Radon Testing in Rockford, IL
              </h1>
              <p className="text-lg md:text-xl text-primary-100 max-w-3xl">
                Radon is the second-leading cause of lung cancer in the United States, and Winnebago County sits squarely inside the EPA's highest-risk category. If you own a home in Rockford, Loves Park, or anywhere along the Rock River corridor, a short-term radon test is the fastest, most affordable way to find out what's actually in the air you're breathing.
              </p>
            </div>

            {/* Visual placeholder - hero graphic/image */}
            <div className="flex justify-center items-center">
              <div className="w-full h-64 md:h-80 bg-gradient-to-br from-primary-500/30 to-primary-600/30 rounded-2xl border-2 border-primary-400/30 flex items-center justify-center backdrop-blur-sm">
                <div className="text-center">
                  <div className="inline-block p-4 bg-primary-500/20 rounded-full mb-4">
                    <svg className="w-16 h-16 text-primary-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <p className="text-primary-100 font-semibold">Professional Testing Equipment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stat Callout Section - White background */}
      <section className="py-8 bg-white">
        <div className="section-container">
          <StatCard
            value="Zone 1"
            label="Winnebago County EPA Radon Zone"
            subtext="The agency's highest risk classification"
            variant="accent"
          />
        </div>
      </section>

      {/* Content Section - Neutral 50 background */}
      <article className="py-12 bg-neutral-50">
        <div className="section-container">
          <p className="text-lg text-neutral-700 leading-relaxed mb-8">
            A short-term test typically takes just 2 to 7 days (most commonly 48 hours) and gives homeowners, buyers, and sellers a reliable snapshot of radon levels using a continuous radon monitor placed in the lowest livable level of the home. Below, we'll walk through exactly how the process works, what your results mean, and what it costs to get tested in the Rockford area.
          </p>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mt-12 mb-6">
            What Is Radon, and Why Does It Matter?
          </h2>

          <QABlock
            question="What is radon gas and why is it dangerous?"
            answer="Radon is a naturally occurring radioactive gas produced by the decay of uranium in soil and rock. It's completely odorless, colorless, and tasteless, which is exactly why testing — not your senses — is the only way to detect it. Radon seeps up through the ground and can accumulate in enclosed spaces like basements and crawlspaces, where it gets trapped and concentrated."
          />

          <p className="text-neutral-700 leading-relaxed mb-6">
            The health risk is not theoretical. At the EPA's action level of 4 pCi/L, the lung cancer risk from long-term radon exposure is comparable to the risk of dying in a car crash, and that risk climbs to roughly five times higher for smokers. Nationally, radon is linked to an estimated 21,000 lung cancer deaths per year, with Illinois accounting for an estimated 1,476 of those deaths annually. Nearly 1 in 15 homes across the country has elevated radon above the action level — and in Illinois, the average indoor reading is 4.4 pCi/L, more than three times the national average of about 1.3 pCi/L.
          </p>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mt-12 mb-6">
            What Short-Term Testing Is — and When It's Used
          </h2>

          <p className="text-neutral-700 leading-relaxed mb-6">
            Short-term radon testing is the standard first step for almost every homeowner, buyer, or seller trying to understand their radon exposure. Unlike long-term testing, which monitors a home for 90 days or more to capture seasonal variation, a short-term test is designed to give you a fast, actionable reading using a continuous radon monitor (CRM) — devices such as the Airthings Corentium Pro are common examples of the equipment used in professional testing.
          </p>

          <QABlock
            question="What's the difference between a short-term and long-term radon test?"
            answer="Short-term tests run anywhere from 2 to 90 days, though most fall in the 2-to-7-day range, with 48 hours being the most common window for a standard test. Long-term tests, by contrast, run for several months and are better suited to capturing how radon levels shift with the seasons. For most real estate transactions, home inspections, or a first-time check of a Rockford home, short-term testing is the practical choice because it delivers a trustworthy result quickly."
          />

          <QABlock
            question="Can I test for radon myself, or do I need a professional?"
            answer="Homeowners can purchase DIY test kits, but professional short-term testing using a calibrated continuous monitor offers a level of accuracy and tamper-resistance that's especially important during real estate transactions, where results may need to hold up to scrutiny from buyers, sellers, or lenders. A licensed technician also knows how to properly account for Rockford's specific housing quirks — from Victorian-era homes in the city's historic districts to post-war ranches with shallow crawlspaces."
          />

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mt-12 mb-6">
            The Testing Process, Step by Step
          </h2>

          <p className="text-neutral-700 leading-relaxed mb-6">
            Professional short-term radon testing follows a precise protocol to make sure results are accurate and defensible.
          </p>

          <QABlock
            question="Where should radon detectors be placed in a home?"
            answer="The monitor is placed in the lowest livable level of the home — this usually means a basement that's used as living space, but it can also mean a ground-floor room if the home has no basement. Placement matters because radon concentrates near the ground, and a monitor placed in an upstairs bedroom simply won't reflect real exposure risk."
            bullets={[
              'Lowest livable level of the home',
              'Each distinct foundation area tested separately',
              'Basement AND crawlspace if both exist',
              'The highest reading isn\'t always where you\'d assume',
            ]}
          />

          <p className="text-neutral-700 leading-relaxed mb-6">
            Importantly, every lowest structural area should be tested separately. A home with both a basement and a walk-out crawlspace, for example, may show meaningfully different readings in each — and the highest reading in a home isn't always found in the basement. This is a detail that's easy for DIY testers to miss but is standard practice for a professional test.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-6">
            Before testing begins, the home needs to be under closed-house conditions for at least 12 hours prior to the test and for the full duration of the short-term window. That means keeping windows and exterior doors closed except for normal entry and exit, and avoiding excessive use of exhaust fans, all to prevent outside air from artificially diluting the reading. Once conditions are set, the monitor runs continuously — most commonly for 48 hours — logging radon concentration at regular intervals.
          </p>

          <QABlock
            question="How long does a radon test take?"
            answer="For most Rockford homes, the full process from setup to result takes about 48 hours of active monitoring, plus the 12-hour closed-house prep period beforehand. Same-day setup and next-day retrieval is typical for a standard residential test."
          />

          <DataTable
            title="Short-Term Testing Timeline"
            columns={[
              { header: 'Phase', accessor: 'phase' },
              { header: 'Duration', accessor: 'duration' },
              { header: 'Details', accessor: 'details' },
            ]}
            data={timelineData}
          />
        </div>
      </article>

      {/* Understanding Results Section - White background */}
      <section className="py-12 bg-white">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mb-6">
            Understanding Your Results
          </h2>

          <p className="text-neutral-700 leading-relaxed mb-6">
            Once the monitor's data is downloaded, results are reported in picocuries per liter (pCi/L) — the standard unit for measuring radon concentration in air.
          </p>

          <QABlock
            question="What is a safe radon level in a home?"
            answer="The EPA has set 4 pCi/L as the action level — the point at which mitigation is recommended. However, the EPA also advises homeowners to consider fixing their home if levels fall between 2 and 4 pCi/L, since no level of radon exposure is considered completely risk-free."
            bullets={[
              'Below 2 pCi/L: Lower risk range, retest every 2–5 years',
              '2–4 pCi/L: Consider mitigation, especially for lower-level use',
              '4 pCi/L or higher: Mitigation strongly recommended',
            ]}
          />

          <p className="text-neutral-700 leading-relaxed mb-6">
            For context, the national average indoor level is about 1.3 pCi/L, while the Illinois average sits at 4.4 pCi/L — already above the action level before you even account for local geology.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-6">
            If your result comes back below 2 pCi/L, you're in a lower-risk range, though periodic retesting every 2 to 5 years is still recommended since radon levels can shift over time due to changes in soil, foundation settling, or renovations. If your result lands at or above 4 pCi/L, the next step is typically a radon mitigation system — most commonly sub-slab depressurization, which can reduce radon levels by up to 99%.
          </p>

          <QABlock
            question="Can well water contain radon?"
            answer="Yes. While most residential radon exposure comes from soil gas entering through the foundation, radon can also dissolve into groundwater. This is particularly relevant for homes on private wells in the more rural stretches of outlying Winnebago County, where air testing alone may not tell the full story."
          />
        </div>
      </section>

      {/* Cost Breakdown Section - Neutral 50 background */}
      <section className="py-12 bg-neutral-50">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mb-6">
            Cost Breakdown for Rockford Testing
          </h2>

          <QABlock
            question="How much does it cost to test for radon in Rockford?"
            answer="Standalone short-term radon testing is a modest investment relative to the health information it provides. When bundled as part of a broader home inspection — common during a real estate transaction — radon testing typically adds $150 to $250 to the inspection cost."
            bullets={[
              'Stand-alone testing: $150–$250 typical range',
              'Real estate bundle: Often discounted when added to inspection',
              'Multiple foundation areas: May require additional monitors',
            ]}
          />

          {/* Stat Callout */}
          <div className="my-8">
            <StatCard
              value="41%+"
              label="IL Homes Above EPA Action Level"
              subtext="118,447 homes tested statewide"
              variant="primary"
            />
          </div>
        </div>
      </section>

      {/* Why Rockford Needs This Section - White background */}
      <section className="py-12 bg-white">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mb-6">
            Why Rockford Homes Specifically Need This
          </h2>

          <p className="text-neutral-700 leading-relaxed mb-6">
            Winnebago County's elevated radon risk isn't random — it's geological. The region sits atop glacial till deposited during the Wisconsin glaciation, layered over limestone bedrock. This combination is a well-documented driver of elevated soil radon, and it's a big part of why Winnebago County falls into EPA Zone 1, the agency's highest-risk designation, alongside 55% of all Illinois counties.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-6">
            Rockford's varied housing stock adds another layer of complexity. Victorian-era homes in Rockford's historic districts, early 1900s construction near neighborhoods like Churchill Park and Edgebrook, post-war ranches, and modern subdivisions in areas like Brown Hills and Latham Park all handle soil gas intrusion differently depending on foundation type, age, and how much the home has settled. Full basements are standard across much of Rockford's housing stock, which means most homes have exactly the kind of enclosed, below-grade space where radon tends to accumulate.
          </p>

          <QABlock
            question="Should I skip testing if my neighbor's home tested low?"
            answer="No. Radon levels can vary significantly from one property to the next, even on the same block, due to differences in soil composition directly beneath a home, foundation cracks, sump pit conditions, and construction details. A low reading next door tells you nothing reliably about your own home."
          />

          {/* Stat Callout */}
          <div className="my-8">
            <StatCard
              value="4 pCi/L"
              label="EPA Action Level"
              subtext="Agency recommends considering mitigation starting at 2 pCi/L"
              variant="success"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section - Neutral 50 background */}
      <section className="py-12 bg-neutral-50">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {testingFAQs.slice(9).map((faq, index) => (
              <QABlock key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - White background */}
      <section className="py-12 bg-white">
        <div className="section-container">
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 md:p-12 text-center border border-primary-200">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mb-4">
              Schedule Your Short-Term Radon Test in Rockford
            </h3>
            <p className="text-neutral-700 mb-6 max-w-2xl mx-auto text-lg">
              Don't guess when it comes to a gas you can't see, smell, or taste. Whether you're a homeowner who's never tested, a buyer preparing for closing, or a seller getting ahead of disclosure requirements, a short-term radon test gives you clear answers in days, not months.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href={getPhoneLink()} className="btn-primary">
                <Phone className="w-5 h-5 mr-2" />
                Call {businessConfig.phone}
              </a>
              <Link to="/contact" className="btn-secondary">
                Contact Us Online
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <p className="text-sm text-neutral-600 mt-4">
              Serving {businessConfig.serviceAreas.join(', ')}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
