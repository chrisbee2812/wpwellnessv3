export default function PricingSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'Treatment Pricing at West Park Wellness Studio',
    url: 'https://wpwellness.co.uk/pricing',
    provider: {
      '@type': 'BeautySalon',
      '@id': 'https://wpwellness.co.uk/#business',
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
        name: 'Signature Hydro Facial',
        priceCurrency: 'GBP',
        price: '120.00',
      },
      {
        '@type': 'Offer',
        name: 'EMS Body Sculpting Session',
        priceCurrency: 'GBP',
        price: '70.00',
      },
      {
        '@type': 'Offer',
        name: 'Fat Freezing (per area)',
        priceCurrency: 'GBP',
        price: '120.00',
      },
      {
        '@type': 'Offer',
        name: 'Laser Hair Removal',
        priceCurrency: 'GBP',
        price: '20.00',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'GBP',
          minPrice: '20.00',
          description: 'From',
        },
      },
      {
        '@type': 'Offer',
        name: 'Laser Tattoo Removal (per session)',
        priceCurrency: 'GBP',
        price: '30.00',
      },
      {
        '@type': 'Offer',
        name: 'Skin Boosters',
        priceCurrency: 'GBP',
        price: '70.00',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'GBP',
          minPrice: '70.00',
          description: 'From',
        },
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