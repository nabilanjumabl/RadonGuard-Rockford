import { businessConfig } from '../config/business';

interface SEOData {
  title: string;
  description: string;
  canonicalPath: string;
  ogImage?: string;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

// Generate page-specific SEO data
export const pageSEO: Record<string, SEOData> = {
  home: {
    title: 'Radon Testing & Mitigation in Rockford, IL | RadonGuard Rockford',
    description: 'Licensed radon testing and mitigation serving Rockford, IL & Winnebago County. Fast 48-hour testing, EPA-compliant systems. Call (815) 555-0142 today.',
    canonicalPath: '/',
  },
  shortTermTesting: {
    title: 'Short-Term Radon Testing Rockford, IL | RadonGuard Rockford',
    description: 'Professional 48-hour radon testing in Rockford, IL. Licensed Illinois radon measurement professional. Fast results for homeowners and real estate. Call (815) 555-0142.',
    canonicalPath: '/services/short-term-testing',
  },
  mitigation: {
    title: 'Radon Mitigation Installation Rockford, IL | RadonGuard Rockford',
    description: 'Professional radon mitigation system installation in Rockford, IL. Sub-slab depressurization systems reduce radon by up to 99%. Free quotes. Call (815) 555-0142.',
    canonicalPath: '/services/mitigation',
  },
  realEstate: {
    title: 'Real Estate Radon Testing Rockford, IL | RadonGuard Rockford',
    description: 'Radon testing for home sales in Rockford, IL. Illinois disclosure compliance, fast 48-hour testing for closings. Licensed testing for buyers and sellers.',
    canonicalPath: '/services/real-estate',
  },
  postMitigation: {
    title: 'Post-Mitigation Radon Retesting Rockford, IL | RadonGuard Rockford',
    description: 'Verification radon testing after mitigation system installation. Confirm your system works with professional 48-hour testing. Call (815) 555-0142.',
    canonicalPath: '/services/post-mitigation',
  },
  commercial: {
    title: 'Commercial Radon Testing Rockford, IL | RadonGuard Rockford',
    description: 'Commercial radon testing for schools, daycares, healthcare facilities in Rockford, IL. Illinois compliance testing. Licensed professionals. Call (815) 555-0142.',
    canonicalPath: '/services/commercial',
  },
  about: {
    title: 'About RadonGuard Rockford | Licensed Radon Professionals',
    description: 'Licensed radon testing and mitigation professionals serving Rockford, IL. Illinois IEMA licensed, EPA certified protocols. Serving Winnebago County.',
    canonicalPath: '/about',
  },
  contact: {
    title: 'Contact RadonGuard Rockford | Schedule Your Radon Test',
    description: 'Contact RadonGuard Rockford for professional radon testing and mitigation. Call (815) 555-0142 or fill out our form. Serving Rockford and Winnebago County.',
    canonicalPath: '/contact',
  },
  riskCalculator: {
    title: 'Radon Risk Calculator — Rockford, IL | RadonGuard Rockford',
    description: 'Free radon risk calculator for Rockford, IL homes. Estimate your radon risk based on zip code, home age, and foundation. Winnebago County EPA Zone 1.',
    canonicalPath: '/radon-risk-calculator',
  },
  testingCostCalculator: {
    title: 'Radon Testing Cost Calculator — Rockford, IL | RadonGuard Rockford',
    description: 'Free radon testing cost calculator for Rockford, IL. Estimate testing costs by property type and foundation areas. $150-$250 typical range.',
    canonicalPath: '/radon-testing-cost-calculator',
  },
  mitigationCostCalculator: {
    title: 'Radon Mitigation Cost Calculator — Rockford, IL | RadonGuard Rockford',
    description: 'Free radon mitigation cost calculator for Rockford, IL homes. Estimate mitigation system cost by foundation type and radon level.',
    canonicalPath: '/radon-mitigation-cost-calculator',
  },
  retestCalculator: {
    title: 'Radon Retest Timing Tool — Rockford, IL | RadonGuard Rockford',
    description: 'Free radon retest timing tool for Rockford, IL. Find out when to test again based on mitigation system or last test date.',
    canonicalPath: '/radon-retest-calculator',
  },
  tools: {
    title: 'Free Radon Tools & Calculators | RadonGuard Rockford',
    description: 'Free interactive radon tools for Rockford, IL. Estimate testing costs, mitigation costs, radon risk, and retest timing.',
    canonicalPath: '/tools',
  },
};

// Generate BreadcrumbList schema
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Get full URL for canonical/OG
export function getFullUrl(path: string) {
  const baseUrl = businessConfig.websiteUrl;
  return `${baseUrl}${path}`;
}

// Default OG image
export function getDefaultOGImage() {
  return `${businessConfig.websiteUrl}/og-image.png`;
}
