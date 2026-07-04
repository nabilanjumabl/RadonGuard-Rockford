// Centralized business configuration
// Update these values to customize the website for a specific client

export const businessConfig = {
  // Business Information
  name: 'RadonGuard Rockford',
  address: '4215 Charles Street, Rockford, IL 61108',
  phone: '(815) 555-0142',
  phoneFormatted: '(815) 555-0142',
  email: 'info@radonguardrockford.com',

  // Service Area
  primaryArea: 'Rockford, IL',
  county: 'Winnebago County',
  state: 'Illinois',

  // Service Areas List
  serviceAreas: [
    'Rockford',
    'Loves Park',
    'Machesney Park',
    'Roscoe',
    'Rockton',
    'Belvidere',
    'Cherry Valley',
    'Byron',
  ],

  // Zip Codes Served
  zipCodes: [
    '61101', '61102', '61103', '61104', '61105', '61106',
    '61107', '61108', '61109', '61110', '61114', '61125', '61126',
  ],

  // Neighborhoods (for local referencing)
  neighborhoods: [
    'Brown Hills',
    'Churchill Park',
    'Edgebrook',
    'Latham Park',
  ],

  // SEO/Branding
  tagline: 'Professional Radon Testing & Mitigation',

  // Social/Links
  social: {
    facebook: '',
    instagram: '',
    linkedin: '',
  },

  // Hours of Operation
  hours: {
    weekdays: '8:00 AM - 6:00 PM',
    saturday: '9:00 AM - 2:00 PM',
    sunday: 'Closed',
  },

  // Website URL (for canonical tags and OG)
  websiteUrl: 'https://radonguardrockford.com',
};

// Format phone for tel: links
export const getPhoneLink = () => `tel:${businessConfig.phone.replace(/[^0-9]/g, '')}`;

// Format address for Google Maps link
export const getMapsLink = () =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(businessConfig.address)}`;
