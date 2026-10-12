export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    '@id': 'https://wpwellness.co.uk/#business',
    name: 'West Park Wellness Studio',
    description:
      'Aesthetic & holistic beauty studio in Leeds offering fillers, facials, EMS body sculpting, fat freezing, laser hair removal, tattoo removal, and skin boosters.',
    url: 'https://wpwellness.co.uk',
    telephone: '07348 812217', // Replace
    email: 'hello@wpwellness.co.uk', // Replace
    image: 'https://wpwellness.co.uk/og-image.jpg',
    logo: 'https://wpwellness.co.uk/logo.png',
    priceRange: '££',
    currenciesAccepted: 'GBP',
    paymentAccepted: 'Cash, Credit Card, Debit Card',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '72 Latchmere View', // Replace
      addressLocality: 'Leeds',
      addressRegion: 'West Yorkshire',
      postalCode: 'LS16 5DT', // Replace
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 53.8378, // Replace with exact coords
      longitude: -1.6080, // Replace with exact coords
    },
    areaServed: [
      { '@type': 'City', name: 'Leeds' },
      { '@type': 'AdministrativeArea', name: 'West Yorkshire' },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '09:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday'],
        opens: '10:00',
        closes: '16:00',
      },
    ],
    sameAs: [
      'https://www.instagram.com/west_park_wellness_studio',
      'https://www.facebook.com/Westparkwellnessstudio/',
      'https://www.tiktok.com/@westparkwellnesss',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Aesthetic & Holistic Treatments',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Dermal Fillers' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Facials' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'EMS Body Sculpting' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Fat Freezing' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Laser Hair Removal' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Laser Tattoo Removal' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Skin Boosters' },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}