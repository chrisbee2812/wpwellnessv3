export default function BodyContouringSchemas() {
  const emsSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://wpwellness.co.uk/body-contouring#ems',
    name: 'EMS Body Sculpting',
    serviceType: 'Electrical Muscle Stimulation Body Sculpting',
    description:
      'Non-surgical EMS body sculpting in Leeds to build muscle tone and contour the body. Safe, comfortable treatment with no downtime.',
    provider: {
      '@type': 'BeautySalon',
      '@id': 'https://wpwellness.co.uk/#business',
      name: 'West Park Wellness Studio',
    },
    areaServed: [
      { '@type': 'City', name: 'Leeds' },
      { '@type': 'AdministrativeArea', name: 'West Yorkshire' },
    ],
    url: 'https://wpwellness.co.uk/body-contouring#ems',
  };

  const fatFreezingSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://wpwellness.co.uk/body-contouring#fat-freezing',
    name: 'Fat Freezing (Cryolipolysis)',
    serviceType: 'Cryolipolysis',
    description:
      'Non-surgical fat freezing in Leeds. Cryolipolysis treatment to reduce stubborn fat pockets without surgery or downtime.',
    provider: {
      '@type': 'BeautySalon',
      '@id': 'https://wpwellness.co.uk/#business',
      name: 'West Park Wellness Studio',
    },
    areaServed: [
      { '@type': 'City', name: 'Leeds' },
      { '@type': 'AdministrativeArea', name: 'West Yorkshire' },
    ],
    url: 'https://wpwellness.co.uk/body-contouring#fat-freezing',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(emsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(fatFreezingSchema) }}
      />
    </>
  );
}