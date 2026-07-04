import { Link } from 'react-router-dom';
import { Phone, Building2, Users, Shield } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Layout } from '../components/layout/Layout';
import { StatCard } from '../components/ui/StatCard';
import { QABlock } from '../components/ui/QABlock';
import { DataTable } from '../components/ui/DataTable';
import { businessConfig, getPhoneLink } from '../config/business';
import { generateFAQSchema, generateServiceSchema } from '../utils/schema';

const commercialFAQs = [
  { question: 'Are commercial buildings/schools required to test for radon in Illinois?', answer: 'For certain categories, yes. Illinois law mandates radon testing for schools, daycare centers, and healthcare facilities — these aren\'t discretionary best practices, they\'re legal obligations tied to occupant safety, particularly because these buildings often house children and medically vulnerable populations for extended periods each day.' },
  { question: 'Do daycares have special radon testing requirements in Illinois?', answer: 'Daycares fall under a specific and well-defined rule: the Child Care Act of 1969 (225 ILCS 10, Sec. 5.8) requires licensed daycare facilities to test for radon and retest every three years. This retesting cycle exists because radon levels in a building can shift over time — due to foundation settling, HVAC changes, renovations, or even seasonal pressure differences — so a single clean test at licensing isn\'t considered sufficient for the life of the facility.' },
  { question: 'What is radon gas and why is it dangerous?', answer: 'Radon is an odorless, colorless, tasteless radioactive gas produced by the natural decay of uranium in soil and rock. It enters buildings from the ground up, through foundation cracks, utility penetrations, and gaps around pipes — which means the fundamental exposure pathway is the same in a school as it is in a house. What changes at commercial scale is the complexity of testing for it accurately.' },
  { question: 'Who is licensed to perform commercial radon testing in Illinois?', answer: 'The same licensing structure applies as in residential work — testing must be performed by a professional licensed under the Illinois Radon Industry Licensing Act, with oversight from the Illinois Emergency Management Agency\'s Division of Nuclear Safety.' },
  { question: 'Can well water contain radon?', answer: 'Yes — radon can dissolve into groundwater, which is a relevant consideration for commercial properties outside Rockford\'s municipal water service area, particularly facilities in more rural parts of Winnebago County that rely on private or shared wells. Water-based radon testing and treatment is a separate process from the soil-gas air testing.' },
  { question: 'How often should a commercial building retest?', answer: 'Outside of the daycare-specific three-year rule, a general best-practice interval mirrors residential guidance: every 2 to 5 years, or sooner following any renovation, foundation work, or HVAC system change that could alter how soil gas moves through the building.' },
  { question: 'What happens if a commercial test comes back elevated?', answer: 'The building would need a mitigation plan, typically a commercial-scale adaptation of sub-slab depressurization, designed around the number and location of ground-contact zones. Facilities under state testing mandates should also plan for a post-mitigation retest to confirm the fix is effective, consistent with standard practice across the industry.' },
  { question: 'Is radon dangerous — does it really cause cancer?', answer: 'Yes, and this is the core of why commercial non-compliance carries real risk, not just a paperwork problem. Radon is a leading cause of lung cancer, with an estimated 1,476 radon-related lung cancer deaths per year in Illinois alone. At the EPA\'s action level of 4 pCi/L, the associated lung cancer risk is comparable to the risk of dying in a car accident — a risk that climbs substantially higher for smokers.' },
];

export function CommercialPage() {
  const faqSchema = generateFAQSchema(commercialFAQs);

  const facilityRequirements = [
    { facility: 'Schools', requirement: 'Mandated testing', frequency: 'Required by Illinois law' },
    { facility: 'Daycare Centers', requirement: '3-year cycle', frequency: 'Child Care Act of 1969' },
    { facility: 'Healthcare Facilities', requirement: 'Mandated testing', frequency: 'State requirements' },
    { facility: 'Offices', requirement: 'Best practice', frequency: 'Liability consideration' },
    { facility: 'Multi-unit Residential', requirement: 'Best practice', frequency: 'Every 2–5 years' },
  ];

  return (
    <Layout>
      <SEO
        pageKey="commercial"
        breadcrumbs={[
          { name: 'Home', url: 'https://radon-guard-rockford.vercel.app/' },
          { name: 'Services', url: 'https://radon-guard-rockford.vercel.app/services/commercial' },
          { name: 'Commercial Testing', url: 'https://radon-guard-rockford.vercel.app/services/commercial' },
        ]}
        additionalSchema={faqSchema}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white py-16 md:py-20">
        <div className="section-container">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Commercial Radon Testing in Rockford, IL
          </h1>
          <p className="text-lg md:text-xl text-primary-100 max-w-3xl">
            Radon isn't just a residential concern in Winnebago County. Schools, daycare centers, healthcare facilities, offices, and multi-unit buildings throughout Rockford sit on the same glacial till and limestone bedrock that drives elevated soil radon in area homes — and for several categories of commercial property, testing isn't optional.
          </p>
        </div>
      </section>

      {/* Stat Callout */}
      <section className="py-8 bg-neutral-100">
        <div className="section-container">
          <StatCard
            value="Zone 1"
            label="Winnebago County EPA Classification"
            subtext="The agency's highest risk classification"
            variant="accent"
          />
        </div>
      </section>

      {/* Content */}
      <article>
        {/* Section 1: Introduction - White Background */}
        <section className="py-12 bg-white">
          <div className="section-container">
            <p className="text-lg text-neutral-700 leading-relaxed mb-8">
              Illinois law specifically mandates radon testing for schools, daycare centers, and healthcare facilities, and property owners and facility managers who skip it are exposed to both regulatory risk and liability if occupants are later found to have been exposed to elevated levels.
            </p>

            <p className="text-neutral-700 leading-relaxed mb-8">
              This page covers what Illinois law requires for different commercial property types, how testing a commercial building differs from testing a house, which industries should be paying attention, and what it costs at commercial scale.
            </p>
          </div>
        </section>

        {/* Section 2: Legal Requirements - Neutral 50 Background */}
        <section className="py-12 bg-neutral-50">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mt-0 mb-6">
              Illinois Legal Requirements for Schools, Daycares, and Healthcare Facilities
            </h2>

            <QABlock
              question="Are commercial buildings/schools required to test for radon in Illinois?"
              answer="For certain categories, yes. Illinois law mandates radon testing for schools, daycare centers, and healthcare facilities — these aren't discretionary best practices, they're legal obligations tied to occupant safety, particularly because these buildings often house children and medically vulnerable populations for extended periods each day."
            />

            <QABlock
              question="Do daycares have special radon testing requirements in Illinois?"
              answer="Daycares fall under a specific and well-defined rule: the Child Care Act of 1969 (225 ILCS 10, Sec. 5.8) requires licensed daycare facilities to test for radon and retest every three years. This retesting cycle exists because radon levels in a building can shift over time — due to foundation settling, HVAC changes, renovations, or even seasonal pressure differences — so a single clean test at licensing isn't considered sufficient for the life of the facility."
              bullets={[
                'Required for all licensed daycare facilities',
                'Initial test for new license applications',
                'Retest every 3 years for renewals',
                'Documentation required for licensing',
              ]}
            />

            <p className="text-neutral-700 leading-relaxed mb-6">
              Schools and healthcare facilities are subject to their own testing mandates under Illinois law as well, reflecting the same underlying logic: buildings that serve children, patients, or other occupants who spend many consecutive hours indoors carry a higher public health stake than a typical office building with lower average occupancy hours.
            </p>

            <p className="text-neutral-700 leading-relaxed mb-6">
              Any testing performed to satisfy these mandates should be conducted by a professional licensed under the Illinois Radon Industry Licensing Act (32 Illinois Administrative Code 422), with licensing overseen by the Illinois Emergency Management Agency's Division of Nuclear Safety. Documentation from an unlicensed tester may not satisfy state requirements, which can create compliance problems during a licensing review or inspection.
            </p>

            <DataTable
              title="Illinois Radon Testing Requirements by Facility Type"
              columns={[
                { header: 'Facility Type', accessor: 'facility' },
                { header: 'Requirement', accessor: 'requirement' },
                { header: 'Frequency/Source', accessor: 'frequency' },
              ]}
              data={facilityRequirements}
            />
          </div>
        </section>

        {/* Section 3: Testing Process - White Background */}
        <section className="py-12 bg-white">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mt-0 mb-6">
              Commercial Testing Process: How It Differs From Residential
            </h2>

            <QABlock
              question="What is radon gas and why is it dangerous?"
              answer="Before getting into the process differences, it's worth restating the basics for facility managers who may be newer to this: radon is an odorless, colorless, tasteless radioactive gas produced by the natural decay of uranium in soil and rock. It enters buildings from the ground up, through foundation cracks, utility penetrations, and gaps around pipes — which means the fundamental exposure pathway is the same in a school as it is in a house. What changes at commercial scale is the complexity of testing for it accurately."
            />

            <p className="text-neutral-700 leading-relaxed mb-6">
              A single-family home typically needs a monitor in the lowest livable level and, when relevant, a separate reading in each distinct foundation area — basement, crawlspace, or slab. A commercial building multiplies that logic across a much larger footprint. Larger schools, office buildings, and healthcare facilities often have multiple wings, several distinct foundation sections poured at different times, varied HVAC zoning, and multiple ground-contact areas that each need independent monitoring rather than a single building-wide average.
            </p>

            <p className="text-neutral-700 leading-relaxed mb-6">
              This means commercial radon testing typically involves placing <strong>multiple continuous radon monitors</strong> (the same class of equipment used residentially, such as an Airthings Corentium Pro) across different zones of the building simultaneously, rather than a single unit in one room. Standard test duration still follows the same short-term window — commonly 48 hours, with the broader short-term range running 2 to 90 days depending on the situation — but closed-building conditions are harder to guarantee in an occupied commercial space than in a vacant home, so testing is often scheduled around off-hours, weekends, or planned closures to get a clean, representative reading.
            </p>

            <p className="text-neutral-700 leading-relaxed mb-6">
              Ground-floor classrooms, basement-level daycare rooms, and lower-level patient care areas typically get priority placement for monitors, since these are the zones with the most direct soil gas exposure.
            </p>
          </div>
        </section>

        {/* Section 4: Industries - Neutral 50 Background */}
        <section className="py-12 bg-neutral-50">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mt-0 mb-6">
              Industries and Property Types That Need This
            </h2>

            <p className="text-neutral-700 leading-relaxed mb-6">
              Beyond the legally mandated categories, several other commercial property types in the Rockford area have strong practical reasons to test even without a specific state mandate:
            </p>

            <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
              <li><strong>Office buildings</strong> — Particularly those with occupied basement or ground-floor space, where employees spend full workdays in the building.</li>
              <li><strong>Multi-unit residential buildings</strong> — Apartment complexes and condo buildings sit on the same soil radon exposure as single-family homes, but with many more occupants per structure and more ground-contact units at risk.</li>
              <li><strong>Healthcare facilities</strong> — Clinics, urgent care centers, and extended-care facilities fall directly under the state's healthcare facility testing mandate.</li>
              <li><strong>Daycare and early-childhood centers</strong> — Covered by the Child Care Act's three-year retest requirement, discussed above.</li>
              <li><strong>Schools</strong> — Public and private schools throughout Rockford School District 205 and neighboring districts in Loves Park, Belvidere, and Machesney Park are subject to state testing requirements.</li>
            </ul>

            <p className="text-neutral-700 leading-relaxed mb-6">
              For property owners managing several of these building types across a portfolio — say, a management company overseeing both an office building and an apartment complex — bundling testing across properties can be more efficient than handling each one separately.
            </p>
          </div>
        </section>

        {/* Section 5: Compliance & Liability - White Background */}
        <section className="py-12 bg-white">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mt-0 mb-6">
              Compliance and Liability Risks of Not Testing
            </h2>

            <QABlock
              question="Is radon dangerous — does it really cause cancer?"
              answer="Yes, and this is the core of why commercial non-compliance carries real risk, not just a paperwork problem. Radon is a leading cause of lung cancer, with an estimated 1,476 radon-related lung cancer deaths per year in Illinois alone. At the EPA's action level of 4 pCi/L, the associated lung cancer risk is comparable to the risk of dying in a car accident — a risk that climbs substantially higher for smokers."
            />

            <p className="text-neutral-700 leading-relaxed mb-6">
              For a school, daycare, or healthcare facility, failing to test isn't just a missed regulatory box. If elevated radon exposure is later discovered — through a parent-requested test, an inspection, or a licensing review — a facility that skipped its legally required testing faces exposure on multiple fronts:
            </p>

            <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
              <li>Licensing sanctions</li>
              <li>Potential liability if occupants can demonstrate harm</li>
              <li>Significant reputational damage in a community where trust matters enormously for schools and childcare providers</li>
            </ul>

            <p className="text-neutral-700 leading-relaxed mb-6">
              For non-mandated commercial properties like office buildings, the liability picture is less about specific statutes and more about general premises liability and duty-of-care exposure — a property owner who becomes aware of an elevated radon reading and takes no action has a harder time defending that decision than one who tested proactively and addressed any issues found.
            </p>
          </div>
        </section>

        {/* Section 6: Cost Considerations - Neutral 50 Background */}
        <section className="py-12 bg-neutral-50">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mt-0 mb-6">
              Cost Considerations for Commercial Scope
            </h2>

            <p className="text-neutral-700 leading-relaxed mb-6">
              Commercial radon testing costs scale primarily with building size and the number of distinct zones or foundation sections requiring separate monitoring, rather than following a flat per-building rate. A small daycare center or single-story office with one foundation area will cost closer to what a large residential test runs, while a multi-wing school building or a healthcare facility with several ground-contact sections will require more monitors and more technician time to place and retrieve them properly.
            </p>

            <p className="text-neutral-700 leading-relaxed mb-6">
              Facility managers should request a site-specific quote based on square footage, number of ground-contact zones, and occupancy schedule (since after-hours or weekend testing may affect scheduling but not necessarily cost). Recurring compliance needs — like a daycare's three-year retest cycle — are worth setting up as a standing reminder or service agreement so the requirement doesn't lapse unnoticed between licensing periods.
            </p>
          </div>
        </section>

        {/* Section 7: FAQs - White Background */}
        <section className="py-12 bg-white">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mt-0 mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {commercialFAQs.slice(4).map((faq, index) => (
                <QABlock key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>

        {/* Section 8: CTA - Neutral 50 Background */}
        <section className="py-12 bg-neutral-50">
          <div className="section-container">
            <div className="bg-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                Schedule Commercial Radon Testing
              </h3>
              <p className="text-neutral-700 mb-6 max-w-2xl mx-auto">
                Whether you're meeting a state licensing requirement for a daycare or school, managing liability exposure for an office or apartment building, or simply doing right by the people who spend their days in your facility, our licensed team handles multi-zone commercial radon testing throughout Rockford and Winnebago County — scheduled around your building's hours, not the other way around.
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
                {businessConfig.name} | {businessConfig.address}, Rockford, IL
              </p>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
}
