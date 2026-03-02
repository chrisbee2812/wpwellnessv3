'use client';

import { useConsent } from '@/components/consent-context';

export default function ResetConsentButton() {
  const { resetConsent } = useConsent();  // ✅ use the context function

  return (
    <button
      onClick={resetConsent}  // now calls the context's resetConsent
      className="text-sm text-gray-400 hover:text-white underline"
    >
      Change cookie settings
    </button>
  );
}