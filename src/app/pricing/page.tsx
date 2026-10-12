import type { Metadata } from 'next';
import PricingContent from './pricing-content';
import PricingSchema from './pricing-schema';

export const metadata = {
  title: 'Pricing & Packages',
  description:
    'Transparent pricing for fillers, facials, EMS body sculpting, fat freezing, laser hair removal, and tattoo removal in Leeds. View our treatment menu and book online.',
  alternates: { canonical: '/pricing' },
};

export default function PricingPage() {
  
  return (
    <>
      <PricingSchema />
      <PricingContent />
    </>
  );
}