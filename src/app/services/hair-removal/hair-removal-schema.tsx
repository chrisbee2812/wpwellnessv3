export default function HairRemovalSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://wpwellness.co.uk/hair-removal#service',
    name: 'Laser Hair Removal',
    serviceType: 'Laser Hair Removal',
    description:
      'Professional laser hair removal in Leeds for smooth, lasting results. Safe and effective treatment suitable for most skin types.',
    provider: {
      '@type': 'BeautySalon',
      '@id': 'https://wpwellness.co.uk/#business',
      name: 'West Park Wellness Studio',
    },
    areaServed: [
      { '@type': 'City', name: 'Leeds' },
      { '@type': 'AdministrativeArea', name: 'West Yorkshire' },
    ],
    url: 'https://wpwellness.co.uk/hair-removal',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'GBP',
      price: '40.00', // Replace
      availability: 'https://schema.org/InStock',
      url: 'https://wpwellness.co.uk/pricing',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}