import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TermsPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl font-headline">Terms of Website Use</CardTitle>
            <p className="text-muted-foreground pt-2">Last updated: {new Date().toLocaleDateString()}</p>
          </CardHeader>
          <CardContent className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              Welcome to LumiSkin. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern LumiSkin's relationship with you in relation to this website.
            </p>

            <h2 className="font-headline">1. Introduction</h2>
            <p>
              The term 'LumiSkin' or 'us' or 'we' refers to the owner of the website. The term 'you' refers to the user or viewer of our website. The use of this website is subject to the following terms of use.
            </p>

            <h2 className="font-headline">2. Intellectual Property</h2>
            <p>
              This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
            </p>

            <h2 className="font-headline">3. Use of Website</h2>
            <ul>
              <li>The content of the pages of this website is for your general information and use only. It is subject to change without notice.</li>
              <li>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose.</li>
              <li>Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable.</li>
            </ul>

            <h2 className="font-headline">4. User Conduct</h2>
            <p>
              You must not use our website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of LumiSkin or in any way which is unlawful, illegal, fraudulent or harmful.
            </p>

            <h2 className="font-headline">5. Limitation of Liability</h2>
            <p>
              The information on this website is provided "as is". We will not be liable for any consequential, incidental, indirect, exemplary, punitive or special damages of any kind, however caused, including loss of profits, revenue, data or use, incurred by you, whether under theory of contract, tort (including negligence), warranty or otherwise, even if the other party has been advised of the possibility of such damages.
            </p>

            <h2 className="font-headline">6. Governing Law</h2>
            <p>
              Your use of this website and any dispute arising out of such use of the website is subject to the laws of our country.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
