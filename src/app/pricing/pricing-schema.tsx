export default function PricingSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'Treatment Pricing at West Park Wellness Studio',
    url: 'https://westparkwellness.co.uk/pricing',
    provider: {
      '@type': 'BeautySalon',
      '@id': 'https://westparkwellness.co.uk/#business',
      name: 'West Park Wellness Studio',
    },
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Dermal Fillers',
        priceCurrency: 'GBP',
        price: '150.00', // Replace with real starting price
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'GBP',
          minPrice: '150.00',
          description: 'From',
        },
      },
      {
        '@type': 'Offer',
        name: 'Signature Facial',
        priceCurrency: 'GBP',
        price: '60.00',
      },
      {
        '@type': 'Offer',
        name: 'EMS Body Sculpting Session',
        priceCurrency: 'GBP',
        price: '80.00',
      },
      {
        '@type': 'Offer',
        name: 'Fat Freezing (per area)',
        priceCurrency: 'GBP',
        price: '200.00',
      },
      {
        '@type': 'Offer',
        name: 'Laser Hair Removal (small area)',
        priceCurrency: 'GBP',
        price: '40.00',
      },
      {
        '@type': 'Offer',
        name: 'Laser Tattoo Removal (per session)',
        priceCurrency: 'GBP',
        price: '70.00',
      },
      {
        '@type': 'Offer',
        name: 'Skin Boosters',
        priceCurrency: 'GBP',
        price: '180.00',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}