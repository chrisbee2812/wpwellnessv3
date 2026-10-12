import type { Metadata } from 'next';
import StaffContent from './staff-content';
import PersonSchema from './person-schema';

export const metadata: Metadata = {
  title: 'Meet Our Team',
  description:
    'Meet Becky, the qualified aesthetician and therapist behind West Park Wellness Studio in Leeds. Experienced, insured, and passionate about your results.',
  alternates: { canonical: '/staff' },
};

export default function StaffPage() {
  return (
    <>
      <PersonSchema />
      <StaffContent />
    </>
  );
}