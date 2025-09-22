import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PrivacyPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl font-headline">Privacy Policy</CardTitle>
            <p className="text-muted-foreground pt-2">Last updated: {new Date().toLocaleDateString()}</p>
          </CardHeader>
          <CardContent className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              This privacy policy sets out how LumiSkin uses and protects any information that you give us when you use this website. We are committed to ensuring that your privacy is protected.
            </p>

            <h2 className="font-headline">1. Information We Collect</h2>
            <p>
              We may collect the following information:
            </p>
            <ul>
                <li>Name and contact information including email address.</li>
                <li>Demographic information such as postcode, preferences and interests.</li>
                <li>Other information relevant to customer surveys and/or offers.</li>
            </ul>
            <p>
              For the exhaustive list of cookies we collect see the "List of cookies we collect" section.
            </p>

            <h2 className="font-headline">2. How We Use Your Information</h2>
            <p>
              We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:
            </p>
            <ul>
                <li>Internal record keeping.</li>
                <li>We may use the information to improve our products and services.</li>
                <li>We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided.</li>
            </ul>

            <h2 className="font-headline">3. Security</h2>
            <p>
              We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.
            </p>

            <h2 className="font-headline">4. How We Use Cookies</h2>
            <p>
              A cookie is a small file which asks permission to be placed on your computer's hard drive. Once you agree, the file is added and the cookie helps analyse web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual.
            </p>

            <h2 className="font-headline">5. Your Rights (GDPR)</h2>
            <p>
              Under the General Data Protection Regulation (GDPR), you have a number of rights with regard to your personal data. You have the right to request from us access to and rectification or erasure of your personal data, the right to restrict processing, object to processing as well as in certain circumstances the right to data portability.
            </p>

            <h2 className="font-headline">6. Contacting Us</h2>
            <p>
              If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at hello@lumiskin.com.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
