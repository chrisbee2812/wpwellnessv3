export default function TattooRemovalSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://wpwellness.co.uk/tattoo-removal#service',
    name: 'Laser Tattoo Removal',
    serviceType: 'Laser Tattoo Removal',
    description:
      'Safe, effective laser tattoo removal in Leeds using Q-switched laser technology. Suitable for most tattoo colours and skin types.',
    provider: {
      '@type': 'BeautySalon',
      '@id': 'https://wpwellness.co.uk/#business',
      name: 'West Park Wellness Studio',
    },
    areaServed: [
      { '@type': 'City', name: 'Leeds' },
      { '@type': 'AdministrativeArea', name: 'West Yorkshire' },
    ],
    url: 'https://wpwellness.co.uk/tattoo-removal',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'GBP',
      price: '70.00', // Replace
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