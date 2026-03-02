// app/cookie-policy/page.tsx (or pages/cookie-policy.js if using Pages Router)
import type { Metadata } from 'next';
import ResetConsentButton from '@/components/reset-consent';
import ConsentStatus from '@/components/consent-status'; // client component
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Learn how we use cookies on our website, including Google Analytics, and how you can control your consent.',
};

export default function CookiePolicyPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl text-primary font-headline">Cookie Policy</CardTitle>
            <p className="text-muted-foreground pt-2">Last updated: 2 March 2026</p>
          </CardHeader>
          <CardContent className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="font-headline mt-2">1. Introduction</h2>
            <p>
              This Cookie Policy explains how wpwellness.co.uk (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) uses cookies and similar technologies on our website. 
              We are committed to protecting your privacy and ensuring you have an informed choice about your cookie preferences. 
              This policy complies with the UK General Data Protection Regulation (UK GDPR) and the Privacy and Electronic Communications Regulations (PECR).
            </p>
            <h2 className="font-headline mt-2">2. What are cookies?</h2>
            <p>
              Cookies are small text files stored on your device (computer, tablet, or mobile) when you visit a website. 
              They are widely used to make websites work more efficiently, enhance user experience, and provide information to site owners.
            </p>
            <h2 className="font-headline mt-2">3. How we use cookies</h2>
            <p className="mb-2">
              We use only one category of cookies: <strong>analytics cookies</strong> via Google Analytics. These help us understand how visitors interact with our website, 
              allowing us to improve content and user experience. We do not use any marketing, advertising, or social media cookies.
            </p>
            <p className="mb-2">
              Google Analytics uses cookies to collect information such as:
            </p>
            <ul className="list-disc list-inside mb-2">
              <li>Pages you visit and time spent on each page</li>
              <li>How you arrived at our site (referral source)</li>
              <li>Technical information about your device and browser (e.g., operating system, screen resolution)</li>
              <li>General geographic location (country or city level, based on IP address – but IP addresses are anonymised)</li>
            </ul>
            <p>
              This data is aggregated and anonymised; it does not identify you personally. We use it solely for statistical analysis.
            </p>
            <h2 className="font-headline mt-2">4. Cookies we use</h2>
            <p className="mb-2">The following Google Analytics cookies may be set if you consent:</p>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Cookie name</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Purpose</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2"><code>_ga</code></td>
                    <td className="border border-gray-300 px-4 py-2">Used to distinguish users.</td>
                    <td className="border border-gray-300 px-4 py-2">2 years</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2"><code>_gid</code></td>
                    <td className="border border-gray-300 px-4 py-2">Used to distinguish users.</td>
                    <td className="border border-gray-300 px-4 py-2">24 hours</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2"><code>_gat</code></td>
                    <td className="border border-gray-300 px-4 py-2">Used to throttle request rate (limits data collection on high‑traffic sites).</td>
                    <td className="border border-gray-300 px-4 py-2">1 minute</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2"><code>_ga_&lt;container-id&gt;</code></td>
                    <td className="border border-gray-300 px-4 py-2">Used to persist session state.</td>
                    <td className="border border-gray-300 px-4 py-2">2 years</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-sm">
              For more information on Google Analytics cookies, visit{' '}
              <a
                href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Google&apos;s official documentation
              </a>.
            </p>
            <h2 className="font-headline mt-2">5. Your consent</h2>
            <p className="mb-2">
              Under UK law, we must obtain your consent before setting any non‑essential cookies. When you first visit our website, a banner appears asking you to accept or decline analytics cookies. 
              Your choice is stored and respected for future visits.
            </p>
            <ul className="list-disc list-inside mb-2">
              <li>If you <strong>accept</strong>, we enable Google Analytics cookies as described above.</li>
              <li>If you <strong>decline</strong> or close the banner without choosing, no analytics cookies will be set.</li>
            </ul>
            <p className="mb-2">
              You can change your preference at any time by clicking the &quot;Change cookie settings&quot; link in the footer of our website (or by clearing your cookies and reloading the site).
            </p>
            <p>
              Our consent mechanism uses Google Consent Mode, which signals your choice to Google and ensures that no tracking occurs until you have consented.
            </p>
            <h2 className="font-headline mt-2">6. Managing cookies in your browser</h2>
            <p className="mb-2">
              You can also control cookies through your browser settings. Most browsers allow you to:
            </p>
            <ul className="list-disc list-inside mb-2">
              <li>View what cookies are stored and delete them individually</li>
              <li>Block third‑party cookies</li>
              <li>Block all cookies</li>
              <li>Clear all cookies when you close the browser</li>
            </ul>
            <p className="mb-2">
              Please note that if you disable all cookies, parts of our website may not function properly. However, you will still be able to access core content.
            </p>
            <p>
              For detailed instructions, refer to your browser’s help section:
            </p>
            <ul className="list-disc list-inside mb-2">
              <li>
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Chrome</a>
              </li>
              <li>
                <a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Firefox</a>
              </li>
              <li>
                <a href="https://support.apple.com/en-gb/guide/safari/manage-cookies-and-website-data-sfri11471" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Safari</a>
              </li>
              <li>
                <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Edge</a>
              </li>
            </ul>
            <h2 className="font-headline mt-2">7. Data transfers</h2>
            <p>
              Google Analytics is operated by Google LLC, which may process your personal data (e.g., anonymised IP address) in the United States. 
              The UK has adequacy regulations for certain countries; however, the US is not currently covered. Google relies on 
              <a href="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_en" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline"> Standard Contractual Clauses (SCCs)</a> 
              approved by the European Commission and adopted for the UK to ensure an adequate level of data protection. 
              By consenting to analytics cookies, you acknowledge that your data may be transferred to and processed in the US under these safeguards.
            </p>
            <h2 className="font-headline mt-2">8. Your rights</h2>
            <p className="mb-2">
              Under UK GDPR, you have the right to:
            </p>
            <ul className="list-disc list-inside mb-2">
              <li>Withdraw your consent at any time (as described in section 5).</li>
              <li>Request access to the personal data we hold about you.</li>
              <li>Request erasure of your personal data (where applicable).</li>
              <li>Lodge a complaint with the Information Commissioner&apos;s Office (ICO) if you believe we have not complied with data protection law.</li>
            </ul>
            <p>
              Since we only collect anonymised data through Google Analytics, it is not possible to identify you or fulfil individual rights requests based on that data. 
              However, if you have any concerns, please contact us using the details below.
            </p>
            <h2 className="font-headline mt-2">9. Contact us</h2>
            <p>
              If you have any questions about this Cookie Policy or our data practices, please contact us at:
            </p>
            <address className="not-italic mt-2">
              West Park Wellness Studio<br />
              Email: <a href="mailto:info@wpwellness.co.uk" className="text-blue-600 underline">info@wpwellness.co.uk</a><br />
            </address>
            <h2 className="font-headline mt-2">10. Changes to this policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in our practices or legal requirements. 
              The &quot;Last updated&quot; date at the top of this page will indicate when it was last revised. 
              We encourage you to review this page periodically.
            </p>
            <section className="mt-8">
              <h2 className="font-headline mt-2">Your current consent</h2>
              <ConsentStatus />
              <p className="text-sm text-gray-600 mt-1">
                You can change your consent at any time by clicking the “Change cookie settings” button below.
              </p>
            <ResetConsentButton />
            </section>
            
          </CardContent>
        
          </Card>
      </div>
      
    </div>
  );
}