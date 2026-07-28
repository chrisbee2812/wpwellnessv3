import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from 'next/script';
import { ConsentProvider } from '@/components/consent-context';
import ConsentBanner from '@/components/consent-banner';


export const metadata: Metadata = {
  title: 'West Park Wellness Studio',
  description: 'Aesthetic & holistic beauty studio in Leeds offering fillers, facials, EMS body sculpting, fat freezing, laser hair removal, tattoo removal, and skin boosters. Book your consultation today.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="root">
      <head>
        {/* Set default consent to denied */}
        <Script id="gtm-default-consent" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'functionality_storage': 'granted', // necessary cookies always granted
              'security_storage': 'granted',
              'personalization_storage': 'denied',
            });
          `}
        </Script>

        {/* Load Google Analytics (gtag.js) – it will wait for consent updates) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-REKBN1915D`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-REKBN1915D');
          `}
        </Script>
        {/* Google tag (gtag.js) */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-REKBN1915D"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-REKBN1915D');
          `}
        </script> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased min-h-screen flex flex-col bg-background">
        <ConsentProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Toaster />
          <Analytics />
          <SpeedInsights />
          <ConsentBanner />
        </ConsentProvider>
      </body>
    </html>
  );
}
