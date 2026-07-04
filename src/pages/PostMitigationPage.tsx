import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/SEO';
import { StatCard } from '../components/ui/StatCard';
import { QABlock } from '../components/ui/QABlock';
import { DataTable } from '../components/ui/DataTable';
import { businessConfig, getPhoneLink } from '../config/business';
import { generateFAQSchema } from '../utils/schema';

const postMitFAQs = [
  { question: 'Do I need to retest after mitigation?', answer: 'Yes — a post-mitigation retest is considered a required part of the mitigation process, not an optional add-on. It\'s the only way to verify the system reduced radon levels as intended.' },
  { question: 'How often should radon be retested?', answer: 'Beyond that initial 30-day check, radon levels should be retested every 2 to 5 years going forward — even with a working mitigation system in place. This isn\'t about distrust of the equipment; it\'s about accounting for changes in the home over time, including foundation settling, renovations, new cracks, or changes in soil conditions around the property.' },
  { question: "What's the difference between a short-term and long-term radon test?", answer: 'For post-mitigation verification, a short-term test — typically using a continuous radon monitor over a 2-to-7-day window, most commonly 48 hours — is the standard approach. Long-term tests, which run for 90 days or more, are less commonly used for mitigation verification since homeowners usually want a faster answer on whether the system is working, but they can offer a more complete seasonal picture if levels seem borderline.' },
  { question: 'How long does a radon fan last?', answer: 'The fan is typically the first component to wear out, with an average lifespan of 5 to 10 years. Fans run continuously, 24 hours a day, which means normal mechanical wear eventually catches up with them. A fan nearing the end of its lifespan may run less efficiently, move less air, and gradually let radon levels creep back upward.' },
  { question: 'How long does a radon mitigation system last?', answer: 'The system as a whole — piping, sealing, and structural components — is built to last 20 or more years with proper maintenance, even though the fan itself will likely need replacement at least once, sometimes twice, over that span. This is an important distinction: a full system replacement is rarely necessary, but fan replacement should be budgeted for as routine maintenance.' },
  { question: 'Who installs radon mitigation systems?', answer: 'Mitigation systems — and any necessary repairs or fan replacements — should be handled by a professional licensed through the Illinois Emergency Management Agency (IEMA), Division of Nuclear Safety. Illinois\'s Radon Industry Licensing Act (32 Illinois Administrative Code 422) governs who is qualified to install and service these systems, which matters just as much for maintenance work as it did for the original installation.' },
  { question: "What if I don't know when my mitigation system was installed or last tested?", answer: 'If there\'s no record of a post-installation test or a recent retest, it\'s worth treating it as overdue and scheduling a short-term test to establish a current baseline.' },
  { question: 'Can I retest myself, or does it need to be professional?', answer: 'A short-term continuous monitor test is straightforward, but professional retesting ensures accurate placement and a result you can rely on — especially important if the reading will inform decisions about system repairs or an upcoming home sale.' },
  { question: 'Does a passing retest mean I never need to test again?', answer: 'No — even a strong result at the 30-day mark should be followed by retesting every 2 to 5 years, since system components age and home conditions change over time.' },
  { question: 'Is well water a factor after mitigation?', answer: 'Standard sub-slab depressurization addresses soil gas entering through the foundation, not radon dissolved in groundwater. Homes on private wells, more common in the outlying parts of Winnebago County, may need separate consideration for water-based radon if that hasn\'t already been addressed.' },
  { question: "What if I'm buying a home that already has a mitigation system installed?", answer: 'Don\'t assume an existing system is still performing well just because it\'s in place. Ask for documentation of the original post-installation test and any retests since, and if that history isn\'t available, treat a fresh retest as part of your due diligence before closing — the same way you would for a home that\'s never been mitigated at all.' },
];

export function PostMitigationPage() {
  const faqSchema = generateFAQSchema(postMitFAQs);

  const retestScheduleData = [
    { timeframe: '30 days post-installation', testType: 'Short-term verification', purpose: 'Confirm system effectiveness' },
    { timeframe: 'Every 2–5 years', testType: 'Short-term or long-term', purpose: 'Monitor ongoing performance' },
    { timeframe: 'After renovations', testType: 'Short-term', purpose: 'Check for new entry points' },
    { timeframe: 'If fan noise changes', testType: 'Short-term', purpose: 'Verify fan still functioning' },
    { timeframe: 'Before home sale', testType: 'Short-term', purpose: 'Provide current documentation' },
  ];

  return (
    <Layout>
      <SEO
        pageKey="postMitigation"
        breadcrumbs={[
          { name: 'Home', url: 'https://radon-guard-rockford.vercel.app/' },
          { name: 'Services', url: 'https://radon-guard-rockford.vercel.app/services/post-mitigation' },
          { name: 'Post-Mitigation Retesting', url: 'https://radon-guard-rockford.vercel.app/services/post-mitigation' },
        ]}
        additionalSchema={faqSchema}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white py-16 md:py-20">
        <div className="section-container">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Post-Mitigation Radon Retesting in Rockford, IL
          </h1>
          <p className="text-lg md:text-xl text-primary-100 max-w-3xl">
            Installing a radon mitigation system is a major step toward a safer home — but it's not the finish line. The only way to know a system is actually doing its job is to test again after it's installed. Post-mitigation radon retesting confirms that your sub-slab depressurization system has brought radon levels down to a safe range.
          </p>
        </div>
      </section>

      {/* Stat Callout */}
      <section className="py-8 bg-white">
        <div className="section-container">
          <StatCard
            value="Up to 99%"
            label="Radon Reduction Possible"
            subtext="But only if the system is working properly — verify with retesting"
            variant="success"
          />
        </div>
      </section>

      {/* Content */}
      <article>
        <section className="py-12 bg-white">
          <div className="section-container">
            <p className="text-lg text-neutral-700 leading-relaxed mb-8">
              Whether you just had a system installed, inherited one from a previous owner, or haven't checked your levels in a few years, this guide covers when to retest, what the results should look like, and how to spot the warning signs of a system that's no longer performing.
            </p>

            <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mt-12 mb-6">
              Why Post-Mitigation Testing Is Essential
            </h2>

          <p className="text-neutral-700 leading-relaxed mb-6">
            A mitigation system is a mechanical solution to a geological problem, and like any mechanical system, it can underperform or fail without obvious warning signs. Sub-slab depressurization — the most common mitigation method — works by drawing radon gas from beneath the foundation and venting it safely above the roofline before it can enter the home. When installed correctly, this typically brings radon levels down to around 2 pCi/L, well under the EPA's 4 pCi/L action level.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-6">
            But "typically" isn't "always." Soil conditions vary, foundation cracks can develop over time, and installation quality differs between contractors. Retesting after mitigation is the only objective way to confirm the system is actually reducing radon to a safe level rather than assuming it's working because a fan is running and a pipe is installed.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-6">
            This matters even more in Rockford specifically. Winnebago County's combination of glacial till deposits and limestone bedrock drives naturally elevated soil radon, and homes across the area — from Victorian-era construction in the city's historic districts to newer subdivisions near Belvidere and Machesney Park — sit on foundations that interact with that geology differently. A system that performs well in one home's crawlspace may need adjustment in another home's full basement.
            </p>
          </div>
        </section>

        <section className="py-12 bg-neutral-50">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mb-6">
              When to Retest
            </h2>

          <QABlock
            question="Do I need to retest after mitigation?"
            answer="Yes — a post-mitigation retest is considered a required part of the mitigation process, not an optional add-on. It's the only way to verify the system reduced radon levels as intended."
            bullets={[
              'Standard practice: retest within 30 days of installation',
              'Gives system time to establish stable operation',
              'Catches problems early before assumptions set in',
              'Required for warranty claims in many cases',
            ]}
          />

          <p className="text-neutral-700 leading-relaxed mb-6">
            The standard practice is to retest within 30 days of a mitigation system being installed. This window gives the system time to establish stable operation while still catching problems early, before you've settled into the assumption that everything is fine. If the 30-day retest comes back below the action level, that confirms the system is functioning as designed.
          </p>

          <QABlock
            question="How often should radon be retested?"
            answer="Beyond that initial 30-day check, radon levels should be retested every 2 to 5 years going forward — even with a working mitigation system in place. This isn't about distrust of the equipment; it's about accounting for changes in the home over time, including foundation settling, renovations, new cracks, or changes in soil conditions around the property."
          />

          <DataTable
            title="Recommended Retest Schedule"
            columns={[
              { header: 'Timeframe', accessor: 'timeframe' },
              { header: 'Test Type', accessor: 'testType' },
              { header: 'Purpose', accessor: 'purpose' },
            ]}
            data={retestScheduleData}
          />

          <QABlock
            question="What's the difference between a short-term and long-term radon test?"
            answer="For post-mitigation verification, a short-term test — typically using a continuous radon monitor over a 2-to-7-day window, most commonly 48 hours — is the standard approach. Long-term tests, which run for 90 days or more, are less commonly used for mitigation verification since homeowners usually want a faster answer on whether the system is working, but they can offer a more complete seasonal picture if levels seem borderline."
          />
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mb-6">
              What a Failing or Declining System Looks Like
            </h2>

          <p className="text-neutral-700 leading-relaxed mb-6">
            Radon mitigation systems don't always fail dramatically. More often, performance declines gradually, which is exactly why periodic retesting matters more than relying on visual inspection alone.
          </p>

          <QABlock
            question="How long does a radon fan last?"
            answer="The fan is typically the first component to wear out, with an average lifespan of 5 to 10 years. Fans run continuously, 24 hours a day, which means normal mechanical wear eventually catches up with them. A fan nearing the end of its lifespan may run less efficiently, move less air, and gradually let radon levels creep back upward — often well before it fails completely and stops running altogether."
          />

          <QABlock
            question="How long does a radon mitigation system last?"
            answer="The system as a whole — piping, sealing, and structural components — is built to last 20 or more years with proper maintenance, even though the fan itself will likely need replacement at least once, sometimes twice, over that span. This is an important distinction: a full system replacement is rarely necessary, but fan replacement should be budgeted for as routine maintenance."
          />

          <p className="text-neutral-700 leading-relaxed mb-6">
            A rising radon reading on a retest doesn't necessarily mean the whole system has failed. It's more often a signal that the fan needs replacing, a seal has degraded, or a new crack in the foundation has opened up a new entry point for soil gas. This is why retesting — rather than just listening for the fan or checking the manometer gauge — is the more reliable way to catch a decline before it becomes a real health risk.
            </p>
          </div>
        </section>

        <section className="py-12 bg-neutral-50">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mb-6">
              System Inspection & Maintenance Signs
            </h2>

          <p className="text-neutral-700 leading-relaxed mb-6">
            Between formal retests, there are a few things Rockford homeowners can keep an eye on:
          </p>

          <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
            <li><strong>The manometer gauge</strong> on the vent pipe should show a consistent reading. A sudden change often indicates a blockage, fan issue, or leak in the system.</li>
            <li><strong>Unusual fan noise</strong> — a fan that's grinding, humming louder than usual, or has gone silent is worth having inspected promptly.</li>
            <li><strong>New foundation cracks or settling</strong>, especially in older Rockford homes near the historic districts or in neighborhoods with heavier clay soil, can create new pathways for radon that the original system wasn't designed to address.</li>
          </ul>

          <QABlock
            question="Who installs radon mitigation systems?"
            answer="Mitigation systems — and any necessary repairs or fan replacements — should be handled by a professional licensed through the Illinois Emergency Management Agency (IEMA), Division of Nuclear Safety. Illinois's Radon Industry Licensing Act (32 Illinois Administrative Code 422) governs who is qualified to install and service these systems, which matters just as much for maintenance work as it did for the original installation."
          />

          {/* Stat Callout */}
          <div className="my-8">
            <StatCard
              value="5–10 years"
              label="Typical Radon Fan Lifespan"
              subtext="Plan on retesting whenever performance seems in question"
              variant="warning"
            />
          </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mb-6">
              Cost of Retesting vs. Cost of a Failed System
            </h2>

          <p className="text-neutral-700 leading-relaxed mb-6">
            A short-term radon retest is a small expense compared to the alternative of an underperforming system going unnoticed for years. When bundled into a broader inspection, radon testing typically runs <strong>$150 to $250</strong> — a modest cost set against the original mitigation investment, which for a standard Rockford-area basement system typically runs <strong>$1,000 to $1,500</strong>, with overall project costs (depending on foundation type and complexity) ranging from <strong>$800 to $2,000</strong>.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-6">
            Skipping retesting doesn't just risk continued radon exposure — it also means you could be living with a declining system for years without knowing it, only to discover the problem at the worst possible time, such as during a future home sale when a buyer's inspection turns up an elevated reading. Illinois law requires sellers to disclose known radon results, so an outdated assumption that "we already fixed this" can become a real complication at closing if retesting hasn't kept pace.
            </p>
          </div>
        </section>

        <section className="py-12 bg-neutral-50">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {postMitFAQs.slice(6).map((faq, index) => (
                <QABlock key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-white">
          <div className="section-container">
            <div className="bg-neutral-100 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                Schedule Your Post-Mitigation Radon Retest in Rockford
              </h3>
              <p className="text-neutral-700 mb-6 max-w-2xl mx-auto">
                If it's been more than 30 days since your system went in, or more than a few years since your last check, now is the time to confirm your home's radon levels are still where they should be. A quick retest gives you certainty — and peace of mind — about a system you've already invested in.
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
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
}
