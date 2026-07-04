import { Helmet } from 'react-helmet-async';
import { businessConfig } from '../config/business';
import { pageSEO, getFullUrl, getDefaultOGImage, generateBreadcrumbSchema } from '../utils/seo';

interface SEOProps {
  pageKey: keyof typeof pageSEO;
  breadcrumbs?: { name: string; url: string }[];
  additionalSchema?: object | object[];
}

export function SEO({ pageKey, breadcrumbs, additionalSchema }: SEOProps) {
  const seo = pageSEO[pageKey];
  if (!seo) return null;

  const fullUrl = getFullUrl(seo.canonicalPath);
  const ogImage = seo.ogImage || getDefaultOGImage();

  const schemas = [];

  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push(generateBreadcrumbSchema(breadcrumbs));
  }

  if (additionalSchema) {
    if (Array.isArray(additionalSchema)) {
      schemas.push(...additionalSchema);
    } else {
      schemas.push(additionalSchema);
    }
  }

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={businessConfig.name} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Schema.org JSON-LD */}
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
