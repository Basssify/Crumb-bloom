// Site Configuration & Central Settings
// All operational details, WhatsApp numbers, currency, and studio info are managed here.

export const SITE_CONFIG = {
  brandName: 'CRUMB & BLOOM',
  legalName: 'Crumb & Bloom Artisanal Patisserie Ltd.',
  tagline: 'Baked with Love, Made for Your Moments.',
  shortDescription: 'Lagos-based artisan bakery crafting bespoke celebration cakes, French viennoiserie, gourmet doughnuts, and rustic sourdough.',
  
  // WhatsApp Configuration:
  // IMPORTANT: Replace with your actual international phone number without '+' or spaces (e.g. '2348012345678')
  // For Nigerian numbers: 0803 123 4567 becomes 2348031234567
  whatsappNumber: '2348000000000', 
  isPlaceholderNumber: true, // Flagged for transparent UI feedback
  
  contact: {
    phone: '+234 (0) 800 000 0000',
    email: 'orders@crumbandbloom.ng',
    pressEmail: 'hello@crumbandbloom.ng',
    address: '14 Admiralty Way, Lekki Phase 1',
    city: 'Lagos, Nigeria',
    googleMapsEmbedUrl: 'https://maps.google.com/?q=Lekki+Phase+1+Lagos+Nigeria',
    displayLocation: 'Lekki Phase 1, Lagos'
  },

  openingHours: [
    { days: 'Monday – Friday', hours: '7:30 AM – 7:00 PM' },
    { days: 'Saturday', hours: '8:00 AM – 8:00 PM' },
    { days: 'Sunday', hours: '9:00 AM – 5:00 PM' }
  ],

  delivery: {
    standardFee: 2500, // Standard delivery within primary Lagos zones
    freeThreshold: 45000, // Free delivery for orders above ₦45,000
    pickupFee: 0,
    coverageZones: ['Lekki Phase 1 & 2', 'Ikoyi', 'Victoria Island', 'Oniru', 'Ikeja (Express)', 'Magodo'],
    leadTimeHours: {
      standardBakes: 'Same-day or next-day depending on cutoff (12:00 PM)',
      customCakes: 'Requires 48–72 hours advance notice'
    }
  },

  socials: {
    instagram: 'https://instagram.com',
    tiktok: 'https://tiktok.com',
    facebook: 'https://facebook.com'
  },

  sampleTestimonials: [
    {
      id: 1,
      quote: "The Chocolate Fudge Cake for my 30th birthday was pure perfection. Moist, rich, and not overly sweet. Every single guest asked where it came from!",
      author: "Amina Adeyemi",
      role: "Verified Celebration Order",
      rating: 5,
      date: "Last month"
    },
    {
      id: 2,
      quote: "Their butter croissants rival the best bakeries in Paris, genuinely. Crisp flaky layers outside and melt-in-your-mouth honeycomb crumb inside. Unmatched in Lagos.",
      author: "Dr. Tunde Bakare",
      role: "Weekly Viennoiserie Member",
      rating: 5,
      date: "2 weeks ago"
    },
    {
      id: 3,
      quote: "Crumb & Bloom created our two-tier wedding anniversary cake. The handcrafted sugar florals and salted caramel filling exceeded every expectation we had.",
      author: "Chidinma & Obi",
      role: "Custom Celebration Order",
      rating: 5,
      date: "1 month ago"
    }
  ]
};

