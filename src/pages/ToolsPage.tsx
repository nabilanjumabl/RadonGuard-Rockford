import { Link } from 'react-router-dom';
import { Calculator, DollarSign, HelpCircle, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/SEO';
import { businessConfig, getPhoneLink, getMapsLink } from '../config/business';
import { getFullUrl } from '../utils/seo';

const tools = [
  {
    name: 'Radon Risk Calculator',
    description: "Estimate your home's radon risk based on location, foundation type, and home age. Winnebago County Zone 1 baseline.",
    icon: Calculator,
    path: '/radon-risk-calculator',
    cta: 'Calculate My Risk',
    highlights: ['Zip code specific', 'Foundation type weighting', 'Home age factors'],
  },
  {
    name: 'Testing Cost Estimator',
    description: 'Get an estimate for radon testing costs based on your property type, reason for testing, and number of foundation areas.',
    icon: DollarSign,
    path: '/radon-testing-cost-calculator',
    cta: 'Estimate Testing Cost',
    highlights: ['Real estate vs. standalone', 'Multiple area pricing', 'Short vs. long-term'],
  },
  {
    name: 'Mitigation Cost Calculator',
    description: 'Calculate expected mitigation costs based on foundation type, radon level, and system complexity.',
    icon: Calculator,
    path: '/radon-mitigation-cost-calculator',
    cta: 'Estimate Mitigation Cost',
    highlights: ['Foundation type scaling', 'Suction point factors', 'Long-term cost notes'],
  },
  {
    name: 'Retest Timing Tool',
    description: 'Answer a few questions to find out when your home should be retested for radon based on your mitigation or testing history.',
    icon: HelpCircle,
    path: '/radon-retest-calculator',
    cta: 'Get Retest Recommendation',
    highlights: ['30-day post-mitigation', '2-5 year cycle', 'Fan lifespan tracking'],
  },
];

export function ToolsPage() {
  return (
    <Layout>
      <SEO
        pageKey="tools"
        breadcrumbs={[
          { name: 'Home', url: getFullUrl('/') },
          { name: 'Free Tools', url: getFullUrl('/tools') },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white py-16 md:py-20">
        <div className="section-container">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Free Radon Tools & Calculators
          </h1>
          <p className="text-lg md:text-xl text-primary-100 max-w-3xl">
            Interactive tools to help Rockford and Winnebago County homeowners estimate radon risk, testing costs, mitigation costs, and retest timing. Educational estimates to help you plan your next step.
          </p>
        </div>
      </section>

      <article className="py-12">
        <div className="section-container">
          <p className="text-lg text-neutral-700 mb-8">
            Our calculators are built specifically for the Rockford area, accounting for Winnebago County's Zone 1 geology, local pricing benchmarks, and Illinois-specific testing and mitigation requirements. Each tool provides an educational estimate — not a substitute for professional testing or quotes — to help you understand what to expect.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {tools.map((tool) => {
              const IconComponent = tool.icon;
              return (
                <div
                  key={tool.name}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200 hover:shadow-md hover:border-primary-300 transition-all duration-200"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-primary-100 rounded-xl p-3 flex-shrink-0">
                      <IconComponent className="w-7 h-7 text-primary-600" />
                    </div>
                    <div>
                      <h2 className="font-heading font-bold text-xl text-neutral-900 mb-2">
                        {tool.name}
                      </h2>
                      <p className="text-neutral-600">{tool.description}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {tool.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="bg-neutral-100 text-neutral-600 text-xs px-2 py-1 rounded-full flex items-center gap-1"
                      >
                        <CheckCircle2 className="w-3 h-3 text-success-600" />
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={tool.path}
                    className="btn-primary w-full text-center"
                  >
                    {tool.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Disclaimer */}
          <div className="mt-12 bg-neutral-50 rounded-xl p-6 border border-neutral-200">
            <h3 className="font-heading font-bold text-lg text-neutral-900 mb-3">
              Important Disclaimer
            </h3>
            <p className="text-neutral-700 text-sm leading-relaxed">
              All tools on this page provide educational estimates based on general industry data and regional averages for the Rockford, IL and Winnebago County area. These are not substitutes for professional radon testing, an in-person mitigation quote, or licensed professional guidance. Actual results, costs, and recommendations may vary based on your specific property conditions.
            </p>
          </div>

          {/* Cross-links to services */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-primary-50 rounded-xl p-6">
              <h3 className="font-heading font-bold text-lg text-neutral-900 mb-2">
                Need Testing Services?
              </h3>
              <p className="text-neutral-600 text-sm mb-4">
                Professional short-term testing with 48-hour continuous monitoring.
              </p>
              <Link to="/services/short-term-testing" className="text-primary-600 font-medium text-sm hover:text-primary-700 flex items-center gap-1">
                Short-Term Testing <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-accent-50 rounded-xl p-6">
              <h3 className="font-heading font-bold text-lg text-neutral-900 mb-2">
                Need Mitigation?
              </h3>
              <p className="text-neutral-600 text-sm mb-4">
                Licensed mitigation system installation for elevated radon levels.
              </p>
              <Link to="/services/mitigation" className="text-accent-600 font-medium text-sm hover:text-accent-700 flex items-center gap-1">
                Mitigation Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-success-50 rounded-xl p-6">
              <h3 className="font-heading font-bold text-lg text-neutral-900 mb-2">
                Ready to Schedule?
              </h3>
              <p className="text-neutral-600 text-sm mb-4">
                Contact us for a personalized quote or to book a test.
              </p>
              <Link to="/contact" className="text-success-600 font-medium text-sm hover:text-success-700 flex items-center gap-1">
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
