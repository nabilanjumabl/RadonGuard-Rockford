import { Phone, ArrowRight, Fan, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/SEO';
import { StatCard } from '../components/ui/StatCard';
import { QABlock } from '../components/ui/QABlock';
import { RetestTimingTool } from '../components/tools/RetestTimingTool';
import { businessConfig, getPhoneLink, getMapsLink } from '../config/business';
import { generateFAQSchema } from '../utils/schema';
import { getFullUrl } from '../utils/seo';

const retestFAQs = [
  { question: 'Do I need to retest after mitigation even if the system seems to be working fine?', answer: 'Yes - "seems to be working" based on the manometer gauge or a quiet-running fan is a good sign, but it isn\'t the same as a measured radon reading. The 30-day post-installation retest is the step that actually confirms the system reduced radon to a safe level, rather than just confirming the system is powered on.' },
  { question: 'How often should radon be retested if I\'ve never tested at all?', answer: 'If you\'ve never tested, the recommendation isn\'t a future retest window - it\'s to get your first test scheduled now. Once that baseline result is in hand, the standard 2-to-5-year cycle applies going forward (assuming no mitigation system is needed).' },
  { question: 'How long does a radon fan last, and does that affect when I should retest?', answer: 'Radon fans typically last 5 to 10 years. While fan wear doesn\'t put you on a strict retest calendar by itself, a fan nearing or past that age range is a good reason to combine a manometer check with a fresh test, since a fan that\'s degrading — even before fully failing — can gradually reduce system effectiveness.' },
  { question: 'How long does a full radon mitigation system last overall?', answer: 'The system structure itself — piping, suction points, sealing — is built for 20-plus years with basic maintenance, even though the fan component will likely need at least one replacement within that timeframe.' },
  { question: "What's the difference between a short-term and long-term radon test, and which should I use for a retest?", answer: 'Short-term tests (2-90 days, most commonly 2-7 days) are the standard choice for both post-mitigation confirmation and routine retesting because of their speed and practicality. A long-term test can be a reasonable choice if you want a more seasonally representative reading, but it isn\'t required for standard retest purposes.' },
  { question: 'Can I use a DIY test kit for my scheduled retest, or should it be a professional test?', answer: 'Either can technically satisfy your own personal retest schedule, but a professional test using a continuous radon monitor generally offers more reliable placement and closed-house condition monitoring. For post-mitigation retests specifically, many licensed installers include the retest as part of their service.' },
];

export function RetestTimingToolPage() {
  const faqSchema = generateFAQSchema(retestFAQs);

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Radon Retest Timing Tool',
    description: 'Find out when you should retest your Rockford, IL home for radon based on your mitigation system or last test date.',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
  };

  return (
    <Layout>
      <SEO
        pageKey="retestCalculator"
        breadcrumbs={[
          { name: 'Home', url: getFullUrl('/') },
          { name: 'Free Tools', url: getFullUrl('/tools') },
          { name: 'Retest Timing Tool', url: getFullUrl('/radon-retest-calculator') },
        ]}
        additionalSchema={[faqSchema, webAppSchema]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white py-16 md:py-20">
        <div className="section-container">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Radon Retest Timing Tool: When Should You Test Again?
          </h1>
          <p className="text-lg md:text-xl text-primary-100 max-w-3xl">
            A radon test isn't a one-and-done event — it's a snapshot of conditions at one specific point in time. Whether you've never had your Rockford home tested, tested it years ago, or recently had a mitigation system installed, the right next step depends entirely on where you are in that timeline.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="py-12">
        <div className="section-container">
          <QABlock
            question="Do I need to retest after mitigation?"
            answer="Yes. A mitigation system reduces radon by creating negative pressure beneath the foundation, but the only way to confirm it's actually working as designed is to measure the result. A confirmed drop below the action level after installation is what turns 'a system was installed' into 'the problem is actually fixed.'"
          />

          <p className="text-neutral-700 leading-relaxed mb-6">
            This page walks through the two timing rules that drive the tool's recommendations — the 30-day post-mitigation rule and the broader 2-to-5-year retest cycle — along with the warning signs that might mean your system needs attention sooner than its scheduled retest date.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-8">
            It's worth framing why this matters beyond simple compliance or peace of mind. Radon exposure is cumulative — the health risk tied to it comes from long-term average exposure, not a single day's reading. That means a home that tested clean five years ago but has quietly drifted upward since (due to foundation settling, a renovation, or a change in ventilation habits) could be exposing its occupants to years of elevated levels before anyone notices, simply because no one thought to test again.
          </p>

          {/* Stat Callout */}
          <div className="my-8">
            <StatCard
              value="Every 2-5 Years"
              label="Recommended Retest Interval"
              subtext="Within 30 days after mitigation installation"
              variant="primary"
            />
          </div>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mt-12 mb-6">
            Why Radon Retesting Schedules Matter
          </h2>

          <p className="text-neutral-700 leading-relaxed mb-6">
            Radon levels in a given home aren't fixed. They shift with seasonal pressure changes, foundation settling, renovations, changes to HVAC systems, and — most directly — the performance of any mitigation system installed to control them. A test result from five years ago tells you almost nothing reliably about your home's radon level today, especially if anything about the structure or its systems has changed in that time.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-6">
            This is exactly why a single clean test, no matter how carefully conducted, isn't treated as a permanent answer in the radon world. It's treated as a data point with an expiration date. For homes that have never had a mitigation system installed, that expiration is measured in years. For homes that just had a system installed, it's measured in days — because a newly installed system needs to prove it's actually achieving the pressure differential it was designed to create before anyone can call the problem solved.
          </p>

          <QABlock
            question="How often should radon be retested?"
            answer="As a general baseline, homes without an active mitigation system should retest every 2 to 5 years, even if a previous test came back clean. Homes with an active mitigation system follow a different logic entirely, built around confirming the system's performance rather than simply re-checking ambient levels on a fixed calendar."
          />

          {/* Tool Embed */}
          <RetestTimingTool />

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mt-12 mb-6">
            The 30-Day Post-Mitigation Rule, Explained
          </h2>

          <p className="text-neutral-700 leading-relaxed mb-6">
            <strong>Do I need to retest after mitigation?</strong> As covered above, yes — and specifically, that retest should happen within 30 days of installation. This window isn't arbitrary. It's long enough for the system to reach and stabilize at its normal operating pressure differential, but short enough that any installation problem — an inadequately sealed penetration, an undersized fan for the home's foundation, a suction point that isn't reaching all the soil gas pathways — gets caught quickly rather than months or years down the line.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-6">
            A sub-slab depressurization system, done correctly, can reduce indoor radon by up to 99%, typically bringing a home down to around 2 pCi/L. That's a strong outcome — but it's an expected outcome, not a guaranteed one, which is exactly why the post-installation retest exists as a standard step rather than an optional add-on.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-8">
            If your tool result above returned "Retest within 30 days," here's what that means practically: schedule a short-term test (standard duration is 48 hours) as soon as your installer confirms the system has been running continuously for at least 24 hours beforehand, to ensure a stable baseline.
          </p>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mt-12 mb-6">
            The 2-to-5-Year Retest Cycle for Homes Without Mitigation
          </h2>

          <p className="text-neutral-700 leading-relaxed mb-6">
            For homes that have tested clean and have no mitigation system in place, the recommended cycle is every 2 to 5 years. Several practical factors point toward retesting sooner within that window rather than later:
          </p>

          <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-8">
            <li><strong>Any renovation touching the foundation</strong> — new sump pit installation, foundation crack repair, or basement finishing work can all change how soil gas moves into the home, for better or worse.</li>
            <li><strong>HVAC system changes</strong> — a new furnace, added ductwork, or a change in how the home is ventilated can shift the pressure dynamics that influence radon entry.</li>
            <li><strong>A recent home purchase</strong> — even if the previous owner tested and shared results, a fresh test under your own household's occupancy patterns (which affect ventilation habits) is a reasonable precaution.</li>
            <li><strong>Extended time since the last test</strong> — approaching the 5-year mark without any changes is still a reasonable trigger on its own, since radon levels can drift gradually due to soil and structural aging.</li>
          </ul>

          <QABlock
            question="What's the difference between a short-term and long-term radon test?"
            answer="Short-term tests run from 2 to 90 days, most commonly 2 to 7 days, and are the standard choice for both initial testing and retesting cycles because they're fast and practical. Long-term tests run for a longer continuous period and capture seasonal variation more accurately, which is why some homeowners choose a long-term test specifically when establishing a new baseline."
          />

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mt-12 mb-6">
            Signs Your System May Need Attention Before Its Scheduled Retest
          </h2>

          <QABlock
            question="How long does a radon fan last?"
            answer="Radon fans run continuously, 24 hours a day, and typically last 5 to 10 years — a meaningfully shorter lifespan than the mitigation system as a whole. Because the fan is the single component actively maintaining the negative pressure that keeps radon out, a failing fan can quietly undo an otherwise sound mitigation system well before its next scheduled retest date."
          />

          <p className="text-neutral-700 leading-relaxed mb-6">
            A few signs are worth acting on immediately rather than waiting for a calendar-based retest:
          </p>

          <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-8">
            <li><strong>A manometer reading that's changed</strong> — Most systems include a simple pressure gauge (manometer) on the vent pipe. If the reading has dropped or shifted noticeably from where it normally sits, the fan may be losing effectiveness.</li>
            <li><strong>A change in fan sound</strong> — A fan that's grown noticeably louder, quieter, or has developed a new rattling or grinding noise is often signaling bearing wear, which typically precedes failure.</li>
            <li><strong>The fan has stopped entirely</strong> — This is the clearest signal of all. A stopped fan means the system is no longer creating the pressure differential it depends on, and the home is effectively unprotected until it's repaired or replaced.</li>
            <li><strong>New or worsening musty odors, moisture issues, or visible foundation cracks</strong> — None of these directly indicate radon, but they can signal changes to the foundation that may also be affecting how soil gas moves through the home.</li>
          </ul>

          <p className="text-neutral-700 leading-relaxed mb-8">
            Any of these signs justify an out-of-cycle retest, regardless of what our tool's calendar-based recommendation says. The 2-to-5-year cycle assumes a stable, functioning system in the background — it isn't a substitute for basic ongoing attention to whether the system is actually still doing its job.
          </p>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mt-12 mb-6">
            Fan Lifespan and System Aging, Factored Into Retest Timing
          </h2>

          <QABlock
            question="How long does a radon mitigation system last?"
            answer="The structural components of a mitigation system — the PVC piping, sealed suction points, and vent routing — are built to last 20 years or more with basic maintenance. The fan is the outlier, needing likely replacement at least once, and possibly twice, within that same 20-year structural lifespan given its 5-to-10-year service life."
          />

          <p className="text-neutral-700 leading-relaxed mb-6">
            This mismatch between fan lifespan and system lifespan is exactly why our tool asks for installation date rather than simply confirming "yes, a system exists." A system installed 8 years ago is statistically more likely to be nearing a fan replacement than one installed 2 years ago, even though both would currently show as "has an existing system" if the question stopped there.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-8">
            This is also a good moment to distinguish between two very different kinds of "failure" a homeowner might encounter down the road. A fan that simply wears out after 7 or 8 years of continuous operation is normal, expected, and typically an inexpensive fix — swapping the fan unit itself rather than touching the underlying piping or suction points. A system that never worked properly from the start (undersized for the home, missing a needed second suction point, or poorly sealed at key penetrations) is a different problem entirely, one that a post-installation retest is specifically designed to catch early.
          </p>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mt-12 mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {retestFAQs.map((faq, index) => (
              <QABlock key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          {/* CTA */}
          <section className="bg-gradient-to-br from-primary-700 to-primary-800 rounded-2xl p-8 mt-12 text-center text-white">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Schedule Your Next Radon Test
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Whatever window our tool recommends — 30 days, right now, or a few years out — our licensed technicians make scheduling straightforward, with fast turnaround and clear, easy-to-read results.
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
