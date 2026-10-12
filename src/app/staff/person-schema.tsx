export default function PersonSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://wpwellness.co.uk/staff#becky',
    name: 'Rebecca Snook', // Replace with full name, e.g. "Becky Smith"
    jobTitle: 'Aesthetician & Holistic Therapist',
    worksFor: {
      '@type': 'BeautySalon',
      '@id': 'https://wpwellness.co.uk/#business',
    },
    image: 'https://wpwellness.co.uk/staff/becky.jpg',
    description:
      'Qualified aesthetician and holistic therapist at West Park Wellness Studio in Leeds, specialising in fillers, facials, body contouring, laser hair removal, and tattoo removal.',
    knowsAbout: [
      'Dermal Fillers',
      'Facials',
      'EMS Body Sculpting',
      'Fat Freezing',
      'Laser Hair Removal',
      'Laser Tattoo Removal',
      'Skin Boosters',
    ],
    // hasCredential: [
    //   // Add real qualifications only — remove if not applicable
    //   {
    //     '@type': 'EducationalOccupationalCredential',
    //     credentialCategory: 'certification',
    //     name: 'Level 4 Aesthetic Practitioner', // Replace
    //   },
    // ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}