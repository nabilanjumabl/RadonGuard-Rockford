import { Link } from 'react-router-dom';
import { Phone, FileText, Clock, Users } from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/SEO';
import { StatCard } from '../components/ui/StatCard';
import { QABlock } from '../components/ui/QABlock';
import { DataTable } from '../components/ui/DataTable';
import { businessConfig, getPhoneLink } from '../config/business';
import { generateFAQSchema } from '../utils/schema';

const realEstateFAQs = [
  { question: 'Does Illinois law require radon disclosure when selling a home?', answer: 'Yes. Under the Illinois Radon Awareness Act (420 ILCS 46/10) and the Illinois Real Property Disclosure Act (765 ILCS 77/), any home seller who has knowledge of radon test results for their property is legally required to disclose that information to a buyer. Importantly, this legislation does not require a home to actually be tested before sale, and it doesn\'t require mitigation even if elevated levels are known — but if a test has been done and results exist, hiding them is not legally an option.' },
  { question: 'Who pays for radon mitigation in a home sale — buyer or seller?', answer: 'There\'s no single rule; it\'s a negotiated point in the transaction, similar to other inspection findings. In many Rockford-area sales, the buyer requests a radon test as part of the standard home inspection process, and if the results come back elevated, mitigation costs become a negotiation point between buyer and seller.' },
  { question: "What's the difference between a short-term and long-term radon test?", answer: 'Short-term tests run anywhere from 2 to 90 days, most commonly 2–7 days, and are the standard choice for real estate transactions because they fit within a closing timeline. Long-term tests run longer and give a more representative annual average, but they\'re impractical for most home sales.' },
  { question: 'Who is licensed to do radon testing/mitigation in Illinois?', answer: 'Any testing conducted as part of a real estate transaction should be performed by a professional licensed under the Illinois Radon Industry Licensing Act (32 Illinois Administrative Code 422), overseen by the Illinois Emergency Management Agency\'s Division of Nuclear Safety. Some lenders and title companies specifically require licensed testing for the results to be considered valid in a transaction.' },
  { question: 'Should I test again if my neighbor\'s home tested low?', answer: 'No — radon levels can vary significantly between two homes on the same street, even next-door neighbors, because of differences in foundation type, cracks and gaps in the slab, soil composition immediately beneath each structure, and ventilation. A low reading next door tells you nothing reliable about your own property, and buyers should never skip testing based on a neighbor\'s results.' },
  { question: "What happens if a home sale falls through over high radon levels?", answer: 'An elevated result doesn\'t have to kill a deal — most Rockford transactions with high radon readings still close, just with an added negotiation step. But deals can and do fall through when buyer and seller can\'t agree on who handles mitigation, when a seller refuses to acknowledge a licensed test result, or when the timeline for fixing the issue doesn\'t align with a hard closing date.' },
  { question: 'Can the same person both test and mitigate a home (conflict of interest)?', answer: 'Illinois allows the same licensed individual or company to perform both, but many real estate transactions specifically use an independent tester to avoid any appearance of conflict — particularly when the seller is paying for the test but the buyer needs to trust the result.' },
  { question: 'Is radon dangerous — does it really cause cancer?', answer: 'Yes. Radon is a radioactive gas produced by the natural decay of uranium in soil and rock, and it\'s the second leading cause of lung cancer in the U.S. At the EPA\'s 4 pCi/L action level, the associated lung cancer risk is comparable to the risk of dying in a car accident — and roughly five times higher for smokers.' },
  { question: 'Should I get a long-term test after closing even if the short-term test looked fine?', answer: 'Many Rockford homeowners choose to do exactly that once they\'ve moved in, since a longer monitoring period captures seasonal variation a quick pre-closing test can miss. It\'s a reasonable follow-up step even after a clean transaction.' },
];

export function RealEstatePage() {
  const obligationsData = [
    { party: 'Seller', obligation: 'Disclose known radon test results', details: 'Required under Illinois Radon Awareness Act' },
    { party: 'Seller', obligation: 'Provide radon disclosure pamphlet', details: 'Given to buyer before contract' },
    { party: 'Buyer', obligation: 'Right to request testing', details: 'Typically during inspection contingency' },
    { party: 'Buyer', obligation: 'Negotiate mitigation if elevated', details: 'Costs split or escrowed per agreement' },
  ];

  const negotiationData = [
    { option: 'Seller installs system pre-closing', pros: 'Buyer gets verified fix', cons: 'Timeline pressure on installation' },
    { option: 'Seller provides credit at closing', pros: 'Flexibility for buyer', cons: 'No guarantee of quality work' },
    { option: 'Escrow funds for mitigation', pros: 'Ensures funds available', cons: 'Requires coordination' },
    { option: 'Buyer handles post-close', pros: 'No delay to closing', cons: 'Buyer bears full cost' },
  ];

  return (
    <Layout>
      <SEO
        pageKey="realEstate"
        breadcrumbs={[
          { name: 'Home', url: 'https://radon-guard-rockford.vercel.app/' },
          { name: 'Services', url: 'https://radon-guard-rockford.vercel.app/services/real-estate' },
          { name: 'Real Estate Testing', url: 'https://radon-guard-rockford.vercel.app/services/real-estate' },
        ]}
        additionalSchema={generateFAQSchema(realEstateFAQs)}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white py-16 md:py-20">
        <div className="section-container">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Radon Testing for Home Sales in Rockford, IL
          </h1>
          <p className="text-lg md:text-xl text-primary-100 max-w-3xl">
            Buying or selling a home in Rockford almost always means dealing with radon at some point in the transaction. Winnebago County sits in EPA Radon Zone 1 — the agency's highest risk classification — and with roughly 41% of tested Illinois homes coming back above the action level, a radon test is one of the most common contingencies to affect a Rockford closing.
          </p>
        </div>
      </section>

      {/* Stat Callout */}
      <section className="py-8 bg-neutral-50">
        <div className="section-container">
          <StatCard
            value="41%+"
            label="Tested IL Homes Above EPA Action Level"
            subtext="Common contingency in Rockford real estate transactions"
            variant="accent"
          />
        </div>
      </section>

      {/* Content */}
      <article className="py-12 bg-white">
        <div className="section-container">
          <p className="text-lg text-neutral-700 leading-relaxed mb-8">
            Whether you're a buyer trying to protect yourself before signing, a seller wondering what the law actually requires, or a realtor trying to keep a deal on schedule, understanding how radon fits into an Illinois real estate transaction can save a lot of last-minute stress.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-8">
            This page covers Illinois disclosure law, who's responsible for what, how testing fits into a typical closing timeline, and what happens when results come back high.
          </p>
        </div>
      </article>

      {/* Section 1: Why Radon Matters */}
      <section className="py-12 bg-neutral-50">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mb-6">
            Why Radon Matters in Real Estate Transactions
          </h2>

          <p className="text-neutral-700 leading-relaxed mb-6">
            A home sale is often the only point in a property's life when radon testing happens at all. Many long-time Rockford homeowners have never tested, and given the area's geology — glacial till left behind by the Wisconsin glaciation, sitting over limestone bedrock — that's a real gap. Neighborhoods across the city, from older housing stock in Edgebrook and Latham Park to newer construction further out toward Roscoe and Machesney Park, can all produce elevated readings regardless of when the home was built.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-6">
            For buyers, a radon test is a relatively small expense that reveals a health and financial factor the home's appearance won't tell you. For sellers, getting ahead of the issue — testing before listing, or being prepared for a buyer's test — can prevent radon from becoming a surprise renegotiation point during an already stressful closing window. For agents, radon has become close to standard due diligence in this market, similar to a general home inspection.
          </p>

          <QABlock
            question="Does Illinois law require radon disclosure when selling a home?"
            answer="Yes. Under the Illinois Radon Awareness Act (420 ILCS 46/10) and the Illinois Real Property Disclosure Act (765 ILCS 77/), any home seller who has knowledge of radon test results for their property is legally required to disclose that information to a buyer. Importantly, this legislation does not require a home to actually be tested before sale, and it doesn't require mitigation even if elevated levels are known — but if a test has been done and results exist, hiding them is not legally an option."
          />
        </div>
      </section>

      {/* Section 2: Illinois Disclosure Law */}
      <section className="py-12 bg-white">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mb-6">
            Illinois Disclosure Law Explained
          </h2>

          <p className="text-neutral-700 leading-relaxed mb-6">
            This distinction trips up a lot of first-time sellers, so it's worth spelling out clearly. The Illinois Radon Awareness Act requires that sellers provide buyers with the state's radon disclosure pamphlet and disclose any known radon test results for the property. The Illinois Real Property Disclosure Act works alongside this, requiring sellers to complete a broader disclosure report that includes a section on known material defects — radon results that show elevated levels can fall under this reporting requirement if the seller is aware of them.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-6">
            Critically, neither law creates an obligation to test in the first place. A seller who has never tested their home has no radon results to disclose, and is not violating Illinois law by staying silent on the subject. This is different from some other states, and it's a common point of confusion for buyers who assume a "clean" disclosure form means the home has been tested and passed.
          </p>

          <QABlock
            question="Who is licensed to do radon testing/mitigation in Illinois?"
            answer="Any testing conducted as part of a real estate transaction should be performed by a professional licensed under the Illinois Radon Industry Licensing Act (32 Illinois Administrative Code 422), overseen by the Illinois Emergency Management Agency's Division of Nuclear Safety. Some lenders and title companies specifically require licensed testing for the results to be considered valid in a transaction, so this isn't just a formality — it can affect whether your test even counts toward the deal."
          />

          <DataTable
            title="Seller Disclosure vs. Buyer Testing Rights Under Illinois Law"
            columns={[
              { header: 'Party', accessor: 'party' },
              { header: 'Obligation/Right', accessor: 'obligation' },
              { header: 'Details', accessor: 'details' },
            ]}
            data={obligationsData}
          />

        </div>
      </section>

      {/* Section 3: Buyer vs. Seller Responsibilities */}
      <section className="py-12 bg-neutral-50">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mb-6">
            Buyer vs. Seller Responsibilities and Negotiation
          </h2>

          <p className="text-neutral-700 leading-relaxed mb-6">
            Once a test does happen — usually initiated by the buyer as part of the home inspection contingency period — and comes back elevated, Illinois law doesn't dictate who pays for mitigation. That's a negotiation between buyer and seller, just like any other inspection finding.
          </p>

          <QABlock
            question="Who pays for radon mitigation in a home sale — buyer or seller?"
            answer="There's no single rule; it's a negotiated point in the transaction, similar to other inspection findings. In many Rockford-area sales, the buyer requests a radon test as part of the standard home inspection process, and if the results come back elevated, mitigation costs become a negotiation point between buyer and seller."
            bullets={[
              'Seller installs system before closing',
              'Seller offers credit at closing',
              'Parties escrow funds for mitigation',
              'Buyer accepts as-is with price concession',
            ]}
          />

          <p className="text-neutral-700 leading-relaxed mb-6">
            Escrowing funds tends to be a popular middle ground in Rockford deals because it lets the closing proceed on schedule without forcing a full mitigation install into an already tight timeline.
          </p>

          <DataTable
            title="Common Negotiation Options for Elevated Radon"
            columns={[
              { header: 'Option', accessor: 'option' },
              { header: 'Pros', accessor: 'pros' },
              { header: 'Cons', accessor: 'cons' },
            ]}
            data={negotiationData}
          />

          <QABlock
            question="Should I test again if my neighbor's home tested low?"
            answer="No — radon levels can vary significantly between two homes on the same street, even next-door neighbors, because of differences in foundation type, cracks and gaps in the slab, soil composition immediately beneath each structure, and ventilation. A low reading next door tells you nothing reliable about your own property, and buyers should never skip testing based on a neighbor's results."
          />

        </div>
      </section>

      {/* Section 4: Timeline */}
      <section className="py-12 bg-white">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mb-6">
            Timeline: Fitting Testing Into a Closing Schedule
          </h2>

          <p className="text-neutral-700 leading-relaxed mb-6">
            Radon testing needs lead time, which is why it should be arranged early in the inspection period rather than treated as an afterthought. A standard short-term test requires 48 hours of continuous monitoring, and closed-house conditions — meaning windows and doors closed, with normal entry and exit only — for 12 hours before the test begins and throughout its duration. That's a minimum three-day window from setup to retrieval, not counting time to receive and review results.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-6">
            Rockford buyers often bundle radon testing with the general home inspection, since many inspectors offer it as an add-on for roughly <strong>$150–$250</strong>. This keeps the process efficient and ensures the radon monitor is placed correctly — in the lowest livable level of the home, and separately in each distinct foundation area (basement, crawlspace, or slab) if the property has more than one.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-6">
            Given typical Illinois inspection contingency periods (often 5–10 business days), scheduling the radon test in the first day or two of that window leaves enough buffer to receive results, negotiate if needed, and still meet contract deadlines.
          </p>
        </div>
      </section>

      {/* Section 5: What Happens If Levels Come Back High */}
      <section className="py-12 bg-neutral-50">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mb-6">
            What Happens If Levels Come Back High
          </h2>

          <QABlock
            question="What happens if a home sale falls through over high radon levels?"
            answer="An elevated result doesn't have to kill a deal — most Rockford transactions with high radon readings still close, just with an added negotiation step. But deals can and do fall through when buyer and seller can't agree on who handles mitigation, when a seller refuses to acknowledge a licensed test result, or when the timeline for fixing the issue doesn't align with a hard closing date."
          />

          <p className="text-neutral-700 leading-relaxed mb-6">
            One point worth stressing: rushing a mitigation installation just to hit a closing date, without proper diagnostic testing beforehand and a post-installation retest afterward, is a mistake. A system installed under time pressure without matching it to the home's specific foundation and entry points may not actually bring radon down to a safe level — leaving the buyer with a false sense of security. If mitigation is happening pre-closing, it's worth insisting on the standard 30-day post-installation retest even if it means a short delay.
          </p>
        </div>
      </section>

      {/* Section 6: FAQ */}
      <section className="py-12 bg-white">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {realEstateFAQs.slice(2).map((faq, index) => (
              <QABlock key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: CTA */}
      <section className="py-12 bg-neutral-50">
        <div className="section-container">
          <div className="bg-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
              Get a Licensed Radon Test for Your Transaction
            </h3>
            <p className="text-neutral-700 mb-6 max-w-2xl mx-auto">
              Whether you're under contract as a buyer, preparing to list as a seller, or coordinating inspections as an agent, our licensed radon testing team works around real closing deadlines — with fast scheduling, accurate results, and documentation accepted by lenders and title companies throughout Winnebago County.
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
    </Layout>
  );
}
