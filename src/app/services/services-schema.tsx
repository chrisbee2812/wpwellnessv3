export default function ServicesListSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Aesthetic & Holistic Treatments at West Park Wellness Studio',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Dermal Fillers',
        url: 'https://wpwellness.co.uk/services#dermal-fillers',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Facial & Skin Treatments',
        url: 'https://wpwellness.co.uk/services#facial-and-skin-treatments',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'EMS Body Sculpting',
        url: 'https://wpwellness.co.uk/services/body-contouring#ems',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Fat Freezing',
        url: 'https://wpwellness.co.uk/services/body-contouring#fat-freezing',
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Laser Hair Removal',
        url: 'https://wpwellness.co.uk/services/hair-removal',
      },
      {
        '@type': 'ListItem',
        position: 6,
        name: 'Laser Tattoo Removal',
        url: 'https://wpwellness.co.uk/services/tattoo',
      },
      {
        '@type': 'ListItem',
        position: 7,
        name: 'Skin Boosters & Eye Boosters',
        url: 'https://wpwellness.co.uk/services#skin-boosters-and-eye-boosters',
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