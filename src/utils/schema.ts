import { businessConfig } from '../config/business';

// FAQ Schema for Q&A blocks
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// LocalBusiness Schema for homepage
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: businessConfig.name,
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessConfig.address,
      addressLocality: businessConfig.primaryArea.split(',')[0],
      addressRegion: 'IL',
      addressCountry: 'US',
    },
    telephone: businessConfig.phone,
    areaServed: businessConfig.serviceAreas.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    priceRange: '$$',
    description: businessConfig.tagline,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '14:00',
      },
    ],
  };
}

// Service Schema for service pages
export function generateServiceSchema(serviceData: {
  name: string;
  description: string;
  areaServed?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceData.name,
    description: serviceData.description,
    provider: {
      '@type': 'LocalBusiness',
      name: businessConfig.name,
      telephone: businessConfig.phone,
    },
    areaServed: serviceData.areaServed || businessConfig.serviceAreas.map((a) => ({
      '@type': 'City',
      name: a,
    })),
    serviceType: serviceData.name,
  };
}

// Generate combined schema for pages
export function generateCombinedSchema(schemas: object[]) {
  return schemas.map((schema) => JSON.stringify(schema)).join('\n');
}
