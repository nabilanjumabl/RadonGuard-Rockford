import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/SEO';
import { StatCard } from '../components/ui/StatCard';
import { QABlock } from '../components/ui/QABlock';
import { DataTable } from '../components/ui/DataTable';
import { MitigationDiagram } from '../components/ui/MitigationDiagram';
import { businessConfig, getPhoneLink } from '../config/business';
import { generateFAQSchema } from '../utils/schema';

const mitigationFAQs = [
  { question: 'What is a sub-slab depressurization system?', answer: 'It\'s the most common and most effective radon mitigation method used in Rockford homes, and it works on a simple principle: radon gas seeps up from the soil beneath your foundation, so if you can pull air from underneath the slab and vent it above the roofline before it enters the living space, the gas never gets the chance to build up indoors.' },
  { question: 'How much does radon mitigation cost in Rockford?', answer: 'For most homes with a standard basement, a sub-slab depressurization system typically costs between $1,000 and $1,500 installed. Across the wider range of foundation types and complexities found in the Rockford area, mitigation systems generally run between $800 and $2,000.' },
  { question: 'How long does a radon mitigation system last?', answer: 'The physical system — the PVC piping, sealed penetrations, and structural components — is built to last 20 years or more with basic maintenance. The one component that will need periodic attention is the fan.' },
  { question: 'How long does a radon fan last?', answer: 'Radon fans typically run continuously, 24 hours a day, and have a service life of 5 to 10 years. Because the system relies entirely on the fan to maintain negative pressure beneath the slab, a failed fan means the mitigation system is no longer protecting the home.' },
  { question: 'Do I need to retest after mitigation?', answer: 'Yes — a post-mitigation retest is considered a required part of the mitigation process, not an optional add-on. It\'s the only way to verify the system reduced radon levels as intended.' },
  { question: 'Who installs radon mitigation systems?', answer: 'In Illinois, radon mitigation work must be performed by a professional licensed under the Illinois Radon Industry Licensing Act (32 Illinois Administrative Code 422), with licensing administered through the Illinois Emergency Management Agency (IEMA), Division of Nuclear Safety.' },
  { question: 'What is a safe radon level in a home?', answer: 'The EPA action level is 4 pCi/L, though the agency recommends considering mitigation for anything in the 2–4 pCi/L range, since no level of radon exposure is entirely risk-free.' },
  { question: 'Why is radon higher in Rockford and Winnebago County homes?', answer: 'The region\'s geology — glacial till deposits left behind by the Wisconsin glaciation, sitting atop limestone bedrock — creates natural pathways for uranium decay products to migrate upward into the soil gas beneath area homes, which is why Winnebago County falls into EPA Zone 1.' },
  { question: 'Do I need a permit for mitigation installation?', answer: 'Licensed installers handle any required documentation as part of the installation process; homeowners generally don\'t need to pull separate permits themselves, though this can vary by municipality.' },
  { question: 'Can well water contain radon?', answer: 'Yes — radon can dissolve into groundwater and enter a home through well water, which is a separate consideration from soil gas migration and particularly relevant for homes in outlying parts of Winnebago County on private wells. Water-based radon mitigation uses different equipment than the sub-slab systems.' },
];

export function MitigationPage() {
  const faqSchema = generateFAQSchema(mitigationFAQs);

  const foundationData = [
    { type: 'Standard Basement', approach: 'Single suction point through floor', typical: '$1,000–$1,500' },
    { type: 'Crawl Space', approach: 'Vapor barrier + suction system', typical: '$1,200–$2,000' },
    { type: 'Slab-on-Grade', approach: 'Core through concrete, one or more suction points', typical: '$1,000–$1,800' },
    { type: 'Multiple Foundations', approach: 'Multiple suction points tied together', typical: '$1,500–$2,000+' },
  ];

  return (
    <Layout>
      <SEO
        pageKey="mitigation"
        breadcrumbs={[
          { name: 'Home', url: 'https://radonguardrockford.com/' },
          { name: 'Services', url: 'https://radonguardrockford.com/services/mitigation' },
          { name: 'Mitigation Installation', url: 'https://radonguardrockford.com/services/mitigation' },
        ]}
        additionalSchema={generateFAQSchema(mitigationFAQs)}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white py-16 md:py-20">
        <div className="section-container">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Radon Mitigation Installation in Rockford, IL
          </h1>
          <p className="text-lg md:text-xl text-primary-100 max-w-3xl">
            If a test has come back at or above 4 pCi/L, the next step isn't guesswork — it's a properly engineered radon mitigation system, installed by a licensed professional and built for your home's specific foundation.
          </p>
        </div>
      </section>

      {/* Stat Callout */}
      <section className="py-8 bg-neutral-100">
        <div className="section-container">
          <StatCard
            value="Up to 99%"
            label="Radon Reduction with Sub-Slab Depressurization"
            subtext="Typically brings homes down to ~2 pCi/L or lower"
            variant="success"
          />
        </div>
      </section>

      {/* Content */}
      <article>
        <section className="py-12 bg-white">
          <div className="section-container">
            <p className="text-lg text-neutral-700 leading-relaxed mb-8">
              Rockford sits in EPA Radon Zone 1, the agency's highest risk category, and homes throughout Winnebago County — from the Victorian-era houses in Churchill Park to the post-war ranches near Auburn and the newer subdivisions off Riverside Boulevard — routinely test above the action level. The good news: mitigation is one of the most effective home safety upgrades you can make. A correctly installed system can reduce indoor radon by up to 99%, typically bringing a home down to around 2 pCi/L or lower.
            </p>

            <p className="text-neutral-700 leading-relaxed mb-8">
              This page walks through how mitigation actually works, what installation looks like in Rockford's mix of basements, crawlspaces, and slab foundations, what it costs, and who's qualified to do the work.
            </p>
          </div>
        </section>

        <section className="py-12 bg-neutral-50">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mb-6">
              How Sub-Slab Depressurization Works
            </h2>

            <QABlock
              question="What is a sub-slab depressurization system?"
              answer="It's the most common and most effective radon mitigation method used in Rockford homes, and it works on a simple principle: radon gas seeps up from the soil beneath your foundation, so if you can pull air from underneath the slab and vent it above the roofline before it enters the living space, the gas never gets the chance to build up indoors."
            />

            <p className="text-neutral-700 leading-relaxed mb-6">
              In practice, a licensed technician drills a suction point through the basement or slab floor — usually in a low-traffic area like a utility room or corner of the basement — and creates a small void beneath it. A PVC pipe runs from that point up through the house (typically through a closet, garage, or exterior wall) and terminates above the roofline, well away from windows and eaves. An in-line radon fan, mounted in the attic, garage, or exterior of the home, continuously pulls soil gas through the pipe and exhausts it safely outdoors, where it disperses harmlessly.
            </p>

            <div className="my-8 flex justify-center">
              <MitigationDiagram />
            </div>

            <p className="text-neutral-700 leading-relaxed mb-6">
              Because Rockford's housing stock is genuinely mixed — full basements are standard in most neighborhoods, but you'll also find crawlspaces in older construction near the Belt Line area and slab-on-grade additions in newer builds — the mitigation approach has to be matched to the structure. A home with multiple foundation types (say, a basement under the main house and a crawlspace under an addition) may need more than one suction point to properly depressurize the entire structure.
            </p>

            <DataTable
              title="Mitigation Approach by Foundation Type"
              columns={[
                { header: 'Foundation Type', accessor: 'type' },
                { header: 'Approach', accessor: 'approach' },
                { header: 'Typical Cost', accessor: 'typical' },
              ]}
              data={foundationData}
            />
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mb-6">
              Installation Process and Timeline
            </h2>

            <p className="text-neutral-700 leading-relaxed mb-6">
              For most single-family homes in Rockford, installation is a one-day job. A technician will first walk the foundation to identify the best suction point locations, checking for the most efficient pipe routing and confirming there are no plumbing, electrical, or structural obstructions. Sump pits, when present, are frequently used as the suction point since they already offer a path to the soil beneath the slab — the pit is sealed with an airtight cover and fitted with the vent pipe.
            </p>

            <p className="text-neutral-700 leading-relaxed mb-6">
              Once the suction point is drilled and the void created, the pipe run is installed, sealed at every penetration, and connected to the exterior-mounted fan. The technician will also seal any other visible cracks, gaps around pipes, or openings in the foundation that could otherwise let untreated air bypass the system. After power is connected to the fan, a manometer (a simple pressure gauge) is installed on the pipe so homeowners can visually confirm the system is running at a glance.
            </p>

            <p className="text-neutral-700 leading-relaxed mb-6">
              Multi-suction-point systems, or homes with unusually large or compartmented foundations, may take longer — sometimes spanning two days — but this is uncommon for typical Rockford housing.
            </p>

            <QABlock
              question="Do I need to retest after mitigation?"
              answer="Yes — a post-mitigation retest is considered a required part of the mitigation process, not an optional add-on. It's the only way to verify the system reduced radon levels as intended."
              bullets={[
                'Retest within 30 days of installation',
                'Essential for confirming system effectiveness',
                'Required for warranty claims in many cases',
                'Independent test preferred over installer diagnostics',
              ]}
            />
          </div>
        </section>

        <section className="py-12 bg-neutral-50">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mb-6">
              Cost Factors Specific to Rockford Homes
            </h2>

            <p className="text-neutral-700 leading-relaxed mb-6">
              Radon mitigation in Rockford typically runs <strong>$800 to $2,000</strong>, with a standard single-suction-point system in a basement home landing in the <strong>$1,000–$1,500</strong> range for most properties. Several factors move the price within that range:
            </p>

            <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
              <li><strong>Foundation type</strong> — A straightforward basement with an existing sump pit is usually the least expensive scenario. Crawlspaces often require a vapor barrier installation alongside the suction system, adding cost. Slab-on-grade homes may need additional labor to core through concrete.</li>
              <li><strong>Number of suction points needed</strong> — Larger footprints, additions built at different times, or homes with more than one distinct foundation type may require multiple systems tied together, increasing both material and labor costs.</li>
              <li><strong>Pipe routing complexity</strong> — A system that can run straight up through a garage or closet to the roofline is simpler (and cheaper) than one that has to be routed around finished living space or exterior architectural features.</li>
              <li><strong>Fan placement and accessibility</strong> — Attic-mounted fans versus exterior-mounted fans can affect labor time depending on the home's layout.</li>
            </ul>

            <QABlock
              question="How much does radon mitigation cost in Rockford?"
              answer="For the vast majority of single-family homes in zip codes like 61107, 61108, and 61109, expect a quote in the $1,000–$1,500 range for a standard system, with more complex homes — particularly older Victorian-era properties in historic districts with irregular foundations — trending toward the higher end of the $800–$2,000 spectrum."
              bullets={[
                'Standard basement: $1,000–$1,500',
                'Overall range: $800–$2,000',
                'Complex foundations: higher end of range',
                'Multiple suction points add to cost',
              ]}
            />
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mb-6">
              System Lifespan and Maintenance
            </h2>

            <QABlock
              question="How long does a radon mitigation system last?"
              answer="The physical system — the PVC piping, sealed penetrations, and structural components — is built to last 20 years or more with basic maintenance. The one component that will need periodic attention is the fan."
            />

            <QABlock
              question="How long does a radon fan last?"
              answer="Radon fans typically run continuously, 24 hours a day, and have a service life of 5 to 10 years. Because the system relies entirely on the fan to maintain negative pressure beneath the slab, a failed fan means the mitigation system is no longer protecting the home — even though the piping and suction points are still intact."
            />

            <p className="text-neutral-700 leading-relaxed mb-6">
              This is why the manometer gauge matters: a quick visual check tells you whether the system is still under pressure. If the gauge reading changes, the fan sounds different (a change in pitch or volume often signals bearing wear), or it stops running altogether, it's time for a fan replacement — a far smaller job than the original installation.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <StatCard
                value="5–10 years"
                label="Typical Fan Lifespan"
                subtext="Runs 24/7 — normal wear expected"
                variant="primary"
              />
              <StatCard
                value="20+ years"
                label="Full System Lifespan"
                subtext="Piping and structural components"
                variant="success"
              />
            </div>
          </div>
        </section>

        <section className="py-12 bg-neutral-50">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mb-6">
              Licensing: Who Should Install Your System
            </h2>

            <QABlock
              question="Who installs radon mitigation systems?"
              answer="In Illinois, radon mitigation work must be performed by a professional licensed under the Illinois Radon Industry Licensing Act (32 Illinois Administrative Code 422), with licensing administered through the Illinois Emergency Management Agency (IEMA), Division of Nuclear Safety. This isn't a general contractor task — it requires specific training in radon physics, soil gas dynamics, and system design."
            />

            <p className="text-neutral-700 leading-relaxed mb-6">
              <strong>Can the same person both test and mitigate a home?</strong> Illinois permits the same licensed individual or firm to perform both testing and mitigation, but it's worth understanding the potential conflict: a company that profits from mitigation has some incentive around how it reports test results. Many homeowners choose to have an independent party conduct the initial test and a separate licensed mitigator handle installation, particularly in real estate transactions where an unbiased result matters to both buyer and seller. Either approach is legal in Illinois — the key is confirming IEMA licensing for whoever performs the work.
            </p>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {mitigationFAQs.slice(6).map((faq, index) => (
                <QABlock key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary-700 to-primary-800 text-white">
          <div className="section-container py-12 text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Ready to Protect Your Home?
            </h2>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto text-lg">
              If your test results came back elevated, don't wait — every day without mitigation is another day of exposure. Our licensed radon professionals design and install systems matched to your home's exact foundation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href={getPhoneLink()} className="btn-accent">
                <Phone className="w-5 h-5 mr-2" />
                Call for Free Quote
              </a>
              <Link to="/contact" className="btn-secondary bg-white/10 border-white/30 hover:bg-white/20">
                Request Callback
              </Link>
            </div>
            <p className="text-sm text-primary-200 mt-4">
              {businessConfig.name} | {businessConfig.address}, Rockford, IL | {businessConfig.phone}
            </p>
          </div>
        </section>
      </article>
    </Layout>
  );
}
