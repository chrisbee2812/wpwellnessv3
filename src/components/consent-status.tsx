'use client';

import { useConsent } from '@/components/consent-context';

export default function ConsentStatus() {
  const { consent } = useConsent();

  // Determine the status message
  const status = consent.analytics
    ? 'Google Analytics cookies are currently **active** because you have given consent.'
    : 'Google Analytics cookies are currently **inactive** because you have not given consent (or have withdrawn it).';

  return (
    <p className="mt-2 p-3 bg-gray-100 border border-gray-300 rounded">
      <span className="font-semibold">Current consent status:</span>{' '}
      {status}
    </p>
  );
}