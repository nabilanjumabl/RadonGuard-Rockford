import { ReactNode, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface PageWrapperProps {
  children: ReactNode;
  title: string;
  description: string;
  schemaData?: object | object[];
  heroTitle?: string;
  heroSubtitle?: string;
  showCTA?: boolean;
}

export function PageWrapper({
  children,
  title,
  description,
  schemaData,
  heroTitle,
  heroSubtitle,
  showCTA = true,
}: PageWrapperProps) {
  const schemas = Array.isArray(schemaData) ? schemaData : schemaData ? [schemaData] : [];

  return (
    <>
      <Helmet>
        <title>{title} | Radon Testing Rockford IL</title>
        <meta name="description" content={description} />
        {schemas.map((schema, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>

      {heroTitle && (
        <section className="bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white py-16 md:py-20">
          <div className="section-container">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
              {heroTitle}
            </h1>
            {heroSubtitle && (
              <p className="text-lg md:text-xl text-primary-100 max-w-3xl">
                {heroSubtitle}
              </p>
            )}
          </div>
        </section>
      )}

      <article className="py-12">
        <div className="section-container prose-content">
          {children}
        </div>
      </article>

      {showCTA && (
        <section className="bg-neutral-100 py-12">
          <div className="section-container text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mb-4">
              Ready to Test Your Home?
            </h2>
            <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
              Don't wait to find out what's in the air you breathe. Schedule your radon test today.
            </p>
            <Link to="/contact" className="btn-primary">
              Schedule a Radon Test
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
