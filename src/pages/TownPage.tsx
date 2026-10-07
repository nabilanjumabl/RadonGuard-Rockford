import { Link, useParams } from 'react-router-dom';
import { Phone, MapPin, ShieldCheck, Clock } from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/SEO';
import { StatCard } from '../components/ui/StatCard';
import { QABlock } from '../components/ui/QABlock';
import { businessConfig, getPhoneLink } from '../config/business';
import { generateFAQSchema } from '../utils/schema';
import { getTown, towns } from '../data/towns';
import { NotFoundPage } from './NotFoundPage';

export function TownPage() {
  const { slug } = useParams<{ slug: string }>();
  const town = slug ? getTown(slug) : undefined;

  if (!town) {
    return <NotFoundPage />;
  }

  const pageKey = `town-${town.slug}`;
  const siblings = towns.filter((t) => t.slug !== town.slug);

  return (
    <Layout>
      <SEO
        pageKey={pageKey}
        breadcrumbs={[
          { name: 'Home', url: `${businessConfig.websiteUrl}/` },
          { name: 'Locations', url: `${businessConfig.websiteUrl}/locations/${town.slug}` },
          { name: town.name, url: `${businessConfig.websiteUrl}/locations/${town.slug}` },
        ]}
        additionalSchema={generateFAQSchema(town.faqs)}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white py-16 md:py-20">
        <div className="section-container">
          <p className="text-primary-200 font-medium mb-3 flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            {town.name} · {town.county} · Northern Illinois
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Radon Testing &amp; Mitigation in {town.name}, IL
          </h1>
          <p className="text-lg md:text-xl text-primary-100 max-w-3xl mb-6">
            {town.differentiator}
          </p>
          <a
            href={getPhoneLink()}
            className="inline-flex items-center gap-2 bg-white text-primary-800 font-semibold px-6 py-3 rounded-lg hover:bg-primary-50 transition-colors"
          >
            <Phone className="w-5 h-5" />
            Call {businessConfig.phoneFormatted} — {town.name} Service
          </a>
        </div>
      </section>

      {/* Trust badges */}
      <section className="py-6 bg-white border-b border-neutral-200">
        <div className="section-container flex flex-wrap gap-x-8 gap-y-3 text-sm text-neutral-700">
          <span className="inline-flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-primary-600" /> Illinois IEMA Licensed
          </span>
          <span className="inline-flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-primary-600" /> EPA Testing Protocols
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary-600" /> Results in 48 Hours
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary-600" /> {town.zone}
          </span>
        </div>
      </section>

      {/* Intro */}
      <article>
        <section className="py-12 bg-white">
          <div className="section-container max-w-4xl">
            {town.intro.map((para, i) => (
              <p key={i} className="text-lg text-neutral-700 leading-relaxed mb-6">
                {para}
              </p>
            ))}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {town.statCallouts.map((stat) => (
                <StatCard
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  subtext={stat.subtext}
                  variant="default"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Local factors */}
        <section className="py-12 bg-neutral-50">
          <div className="section-container max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mb-6">
              Why {town.name} Homes Test High for Radon
            </h2>
            <div className="space-y-6">
              {town.factors.map((factor, i) => (
                <div key={factor.title} className="bg-white rounded-lg p-6 shadow-sm border border-neutral-200">
                  <h3 className="text-lg font-heading font-semibold text-neutral-900 mb-2">
                    <span className="text-primary-600 font-bold mr-2">{i + 1}.</span>
                    {factor.title}
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">{factor.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-primary-50 rounded-lg border border-primary-200">
              <p className="text-neutral-800 leading-relaxed">
                <strong className="font-semibold">The bottom line for {town.name}:</strong> {town.zone} geology
                plus {town.medianYearBuilt === 'Pre-1950 downtown core' ? 'century-old downtown foundations' : `a median build year of ${town.medianYearBuilt}`} means
                most homes here have both the soil gas and the entry points. Testing is $150–$250; not knowing costs more.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  to="/services/short-term-testing"
                  className="inline-flex items-center gap-2 bg-primary-600 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Schedule a Test
                </Link>
                <Link
                  to="/services/mitigation"
                  className="inline-flex items-center gap-2 bg-white text-primary-700 font-semibold px-5 py-2.5 rounded-lg border border-primary-300 hover:bg-primary-50 transition-colors"
                >
                  Mitigation Options
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-12 bg-white">
          <div className="section-container max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mb-6">
              {town.name} Radon Questions, Answered
            </h2>
            {town.faqs.map((faq) => (
              <QABlock key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>

        {/* Sibling towns */}
        <section className="py-12 bg-neutral-50">
          <div className="section-container">
            <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-6">
              Also Serving Nearby Communities
            </h2>
            <div className="flex flex-wrap gap-3">
              {siblings.map((s) => (
                <Link
                  key={s.slug}
                  to={`/locations/${s.slug}`}
                  className="bg-white px-4 py-2 rounded-full text-sm font-medium text-neutral-700 shadow-sm border border-neutral-200 hover:border-primary-400 hover:text-primary-700 transition-colors"
                >
                  {s.name}, IL
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-12 bg-primary-800 text-white">
          <div className="section-container max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Get Your {town.name} Home Tested
            </h2>
            <p className="text-primary-100 mb-6">
              {town.population} people live in {town.name}. Every one of their homes sits in {town.zone}.
              A 48-hour test is the only way to know where yours stands.
            </p>
            <a
              href={getPhoneLink()}
              className="inline-flex items-center gap-2 bg-white text-primary-800 font-semibold px-8 py-3 rounded-lg hover:bg-primary-50 transition-colors text-lg"
            >
              <Phone className="w-5 h-5" />
              Call {businessConfig.phoneFormatted}
            </a>
          </div>
        </section>
      </article>
    </Layout>
  );
}
