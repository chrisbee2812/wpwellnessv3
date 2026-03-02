// components/ConsentBanner.tsx
'use client';

import { useConsent } from '@/components/consent-context';

export default function ConsentBanner() {
  const { showBanner, acceptAll, rejectAll, updateConsent } = useConsent();

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm mb-4 md:mb-0">
          We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
        </p>
        <div className="flex gap-2">
          <button
            onClick={rejectAll}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded"
          >
            Reject All
          </button>
          <button
            onClick={acceptAll}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}