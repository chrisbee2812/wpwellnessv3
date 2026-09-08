import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { getImageById } from '@/lib/data';

export default function AboutPage() {
  const missionImage = getImageById('about-mission');
  const promiseImage = getImageById('about-promise');
  const whyusImage = getImageById('about-whyus');

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-headline text-primary font-bold">Body Contouring<br></br>EMS & Fat Freezing</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Shape, sculpt, and define — non-surgical body contouring tailored to you.
          </p>
        </div>

        {/* Our Mission Section */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-headline text-primary font-bold mb-4">Transform Your Body Without Surgery</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At West Park Wellness Studio, we offer two powerful, non-invasive treatments to help you achieve the body you've been working towards: EMS (Electrical Muscle Stimulation) for muscle definition and toning, and Fat Freezing (Cryolipolysis) for permanent fat reduction.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you want to eliminate stubborn pockets of fat, build and define muscle, or do both, we create a personalised treatment plan tailored to your goals.
              </p>
            </div>
            {missionImage && (
              <div className="order-1 md:order-2 rounded-lg overflow-hidden">
                <Image
                  src={missionImage.imageUrl}
                  alt={missionImage.description}
                  width={800}
                  height={600}
                  className="object-cover w-3/4 h-3/4 mx-auto"
                  data-ai-hint={missionImage.imageHint}
                />
              </div>
            )}
          </div>
        </section>

        {/* Our Promises Section */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-2">
              <h2 className="text-3xl font-headline text-primary font-bold mb-4">Fat Freezing — Freeze Away Stubborn Fat</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Fat Freezing, also known as cryolipolysis, is a clinically proven, non-surgical treatment that permanently reduces fat cells in targeted areas. The treatment uses controlled cooling to crystallise and destroy fat cells beneath the skin, without damaging surrounding tissue.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Once destroyed, your body naturally eliminates these fat cells through your lymphatic system over the following weeks and months. The results are permanent — those fat cells are gone for good.
              </p>
            </div>
            {promiseImage && (
              <div className="order-1 md:order-1 rounded-lg overflow-hidden">
                <Image
                  src={promiseImage.imageUrl}
                  alt={promiseImage.description}
                  width={800}
                  height={600}
                  className="object-cover w-3/4 h-3/4 mx-auto"
                  data-ai-hint={promiseImage.imageHint}
                />
              </div>
            )}
          </div>
        </section>

         

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-xl font-semibold mb-4">How It Works</h3>
            <ul className="text-lg text-muted-foreground leading-relaxed mb-8">
              <li>A specialised applicator is placed on the targeted area.</li>
              <li>Controlled cooling is delivered to the fat layer beneath the skin.</li>
              <li>Fat cells are crystallised and destroyed (apoptosis — natural cell death).</li>
              <li>Your body gradually flushes out the dead fat cells over 8–12 weeks.</li>
            </ul>
            <h3 className="text-xl font-semibold mb-4">Benefits of Fat Freezing</h3>
            <ul className="text-lg text-muted-foreground leading-relaxed mb-8">
              <li><strong>Permanent fat reduction — </strong>destroyed fat cells cannot return.</li>
              <li><strong>Non-invasive — </strong>no needles, no surgery, no downtime.</li>
              <li><strong>Targeted — </strong>treats specific stubborn areas.</li>
              <li><strong>Natural-looking results — </strong>gradual fat reduction over time.</li>
              <li><strong>Up to 35% fat reduction — </strong>in treated areas per session.</li>
            </ul>
            <h3 className="text-xl font-semibold mb-4">Treatment Areas</h3>
            <ul className="text-lg text-muted-foreground leading-relaxed mb-8">
              <li>Abdomen / tummy</li>
              <li>Flanks / love handles</li>
              <li>Thighs</li>
              <li>Arms</li>
              <li>Buttocks</li>
              <li>Double chin</li>
              <li>Back / bra fat</li>
            </ul>
          </div>
        </section>

        {/* Our Promises Section */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-2">
              <h2 className="text-3xl font-headline text-primary font-bold mb-4">EMS — Build and Define Muscle</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                EMS (Electrical Muscle Stimulation) uses high-intensity electromagnetic energy to trigger involuntary muscle contractions far beyond what you can achieve through exercise alone. Each 30-minute session can deliver the equivalent of 20,000 to 30,000 contractions — imagine doing 30,000 crunches or squats in half an hour.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This technology is particularly effective for clients who are already relatively lean but struggle to achieve visible muscle definition.
              </p>
            </div>
            {promiseImage && (
              <div className="order-1 md:order-1 rounded-lg overflow-hidden">
                <Image
                  src={promiseImage.imageUrl}
                  alt={promiseImage.description}
                  width={800}
                  height={600}
                  className="object-cover w-3/4 h-3/4 mx-auto"
                  data-ai-hint={promiseImage.imageHint}
                />
              </div>
            )}
          </div>
        </section>
        
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-xl font-semibold mb-4">How It Works</h3>
            <ul className="text-lg text-muted-foreground leading-relaxed mb-8">
              <li>EMS applicators are placed on the targeted muscle group.</li>
              <li>High-intensity electromagnetic energy penetrates deep into muscle tissue.</li>
              <li>Supramaximal contractions are triggered — contractions your body cannot achieve naturally.</li>
              <li>Muscle fibres adapt and grow, increasing density and volume.</li>
              <li>Fat is also reduced as a secondary benefit.</li>
            </ul>
            <h3 className="text-xl font-semibold mb-4">Benefits of EMS</h3>
            <ul className="text-lg text-muted-foreground leading-relaxed mb-8">
              <li><strong>Builds muscle mass — </strong>up to 16% muscle increase after a full course.</li>
              <li><strong>Reduces fat — </strong>around 19% fat reduction in treated areas.</li>
              <li><strong>Non-invasive — </strong>no downtime, no recovery period.</li>
              <li><strong>Time-efficient — </strong>30-minute sessions.</li>
              <li><strong>Improves definition — </strong>reveals toned, sculpted muscle.</li>
            </ul>
            <h3 className="text-xl font-semibold mb-4">Treatment Areas</h3>
            <ul className="text-lg text-muted-foreground leading-relaxed mb-8">
              <li>Abdomen / core</li>
              <li>Buttocks (lifting and toning)</li>
              <li>Thighs</li>
              <li>Arms</li>
              <li>Calves</li>
            </ul>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl text-primary font-headline font-bold mb-4">
              Why Combine EMS and Fat Freezing?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              For many clients, the most dramatic results come from combining both treatments in a structured programme.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Think of it like this: Fat Freezing clears the canvas by removing unwanted fat, while EMS paints the masterpiece by defining the muscle underneath.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              A typical combined programme might look like:
            </p>
            <ul className="list-disc list-inside text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-left">
              <li><strong>Fat Freezing first — </strong>reduces the fat layer so muscle definition can be seen.</li>
              <li><strong>EMS sessions — </strong>builds and defines the muscle in the now-leaner area.</li>
              <li><strong>Results are revealed — </strong>the combination of reduced fat and increased muscle creates a more contoured, sculpted appearance.</li>
            </ul>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              <i>"Building muscle under a thick fat layer is like polishing a lamp under a blanket. You won't see the shine until you remove what's covering it."</i>
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl text-primary font-headline font-bold mb-4">
              What to Expect During Your Treatment
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Our body contouring treatments are designed to be comfortable, effective, and tailored to you. Here's what you can expect before, during, and after your session.
            </p>
            <h3 className="text-xl font-semibold mb-4">Before Your Session</h3>
            <ul className="text-lg text-muted-foreground leading-relaxed mb-8">
              <li><strong>Stay hydrated — </strong>drink plenty of water in the days leading up to your treatment.</li>
              <li><strong>Avoid blood-thinning medications — </strong>for 48 hours prior (unless prescribed).</li>
              <li><strong>Maintain a stable weight — </strong>these treatments are for contouring, not weight loss.</li>
              <li><strong>Avoid caffeine — </strong>on the day of your EMS session if you are sensitive to stimulation.</li>
            </ul>
            <h3 className="text-xl font-semibold mb-4">During Your Session — Fat Freezing</h3>
            <ul className="text-lg text-muted-foreground leading-relaxed mb-8">
              <li>A gel pad is applied to protect your skin.</li>
              <li>The applicator is placed on the targeted area.</li>
              <li>You'll feel a strong cooling sensation, followed by numbness.</li>
              <li>The area may feel cold and you may experience some tugging or pulling.</li>
              <li>Sessions last 35–60 minutes per area.</li>
            </ul>
            <h3 className="text-xl font-semibold mb-4">During Your Session — EMS</h3>
            <ul className="text-lg text-muted-foreground leading-relaxed mb-8">
              <li>Applicators are placed on the targeted muscle group.</li>
              <li>You'll feel intense muscle contractions — a strong but tolerable sensation.</li>
              <li>Some clients describe it as a deep, vigorous workout.</li>
              <li>Sessions last 30 minutes per area.</li>
            </ul>
            <h3 className="text-xl font-semibold mb-4">After Your Session — Fat Freezing</h3>
            <ul className="text-lg text-muted-foreground leading-relaxed mb-8">
              <li>Temporary redness, swelling, bruising, or numbness may occur — this is normal.</li>
              <li>These effects usually resolve within a few days.</li>
              <li>You may notice a slight tingling sensation as the area warms up.</li>
              <li>No downtime — you can return to normal activities immediately.</li>
            </ul>
            <h3 className="text-xl font-semibold mb-4">After Your Session — EMS</h3>
            <ul className="text-lg text-muted-foreground leading-relaxed mb-8">
              <li>Mild muscle soreness is common — like a post-workout feeling.</li>
              <li>Some clients feel a sense of fatigue in the treated muscles.</li>
              <li>No downtime — you can resume normal activities straight away.</li>
            </ul>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl text-primary font-headline font-bold mb-4">
              Why Choose West Park Wellness Studio?
            </h2>
            <ul className="list-disc list-inside text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-left">
              <li><strong>Qualified & Experienced Practitioners — </strong>we are fully trained in body contouring treatments.</li>
              <li><strong>Advanced Technology — </strong>we use professional-grade EMS and Fat Freezing equipment for safe, effective results.</li>
              <li><strong>Personalised Treatment Plans — </strong>every body is unique, and we tailor every programme to your individual goals.</li>
              <li><strong>Hygiene & Safety — </strong>we maintain the highest standards of cleanliness and safety.</li>
              <li><strong>Proven Results — </strong>our clients trust us, and we're proud of the positive feedback and referrals we receive.</li>
              <li><strong>Combined Approach — </strong>we can recommend the best combination of treatments for your specific goals.</li>
            </ul>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl text-primary font-headline font-bold mb-4">
              Is EMS and Fat Freezing Right for You?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              These treatments are suitable for:
            </p>
            <h3 className="text-xl font-semibold mb-4">Fat Freezing</h3>
            <ul className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-left">
              <li>You have small, localised, pinchable areas of stubborn fat.</li>
              <li>You have a stable weight and are close to your ideal body.</li>
              <li>You want to permanently remove fat from specific areas.</li>
              <li>You are not pregnant or breastfeeding.</li>
              <li>You do not have cryoglobulinemia or cold-related conditions.</li>
            </ul>
            <h3 className="text-xl font-semibold mb-4">EMS</h3>
            <ul className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-left">
              <li>You are already relatively lean but want to improve muscle definition.</li>
              <li>You want to build muscle without spending hours in the gym.</li>
              <li>You want to lift and tone specific areas.</li>
              <li>You want to strengthen your core or pelvic floor.</li>
              <li>You have no metal implants or electronic devices in the treatment area.</li>
            </ul>
            <h3 className="text-xl font-semibold mb-4">What It's Not For</h3>
            <ul className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-left">
              <li>Obesity or significant weight loss — these treatments are for contouring, not weight management.</li>
              <li>Substantial loose skin — a surgical opinion may be more appropriate.</li>
              <li>The desired effect cannot be guaranteed — results vary by individual.</li>
            </ul>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl text-primary font-headline font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <ul className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-left">
              <li className="mb-4"><strong>Is Fat Freezing permanent?</strong><p>Yes. The fat cells that are destroyed during treatment are permanently eliminated and cannot return. However, maintaining a stable weight is important to prevent the remaining fat cells from expanding.</p></li>
              <li className="mb-4"><strong>Is there any downtime?</strong><p>No. Both EMS and Fat Freezing are completely non-invasive with zero downtime. You can return to work, drive, or even exercise immediately after your session.</p></li>
              <li className="mb-4"><strong>How soon will I see results?</strong>
                <ul className="list-disc list-inside text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-left">
                  <li><strong>Fat Freezing:</strong> Results become noticeable around week 3, with the most dramatic changes appearing between 8–12 weeks as your body flushes out the destroyed fat cells.</li>
                  <li><strong>EMS:</strong> Some clients feel "tighter" after their first session. Visible results typically appear within 2–4 weeks after completing a full course.</li>
                </ul>
              </li>
              <li className="mb-4"><strong>How many sessions will I need?</strong>
                <ul className="list-disc list-inside text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-left">
                  <li><strong>Fat Freezing:</strong> Typically 1–3 sessions per area, depending on the amount of fat and the desired outcome.</li>
                  <li><strong>EMS:</strong> A course of 4–6 sessions over 2–3 weeks is recommended for optimal results.</li>
                </ul>
              </li>
              <li className="mb-4"><strong>Is it painful?</strong>
                <ul className="list-disc list-inside text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-left">
                  <li><strong>Fat Freezing:</strong> You'll feel an intense cold sensation and some tugging, but this subsides as the area becomes numb.</li>
                  <li><strong>EMS:</strong> You'll feel strong muscle contractions, which can be intense but are not painful. Most clients find it entirely tolerable.</li>
                </ul>
              </li>
              <li className="mb-4"><strong>Can I combine both treatments?</strong><p>Absolutely — and for many clients, this is the most effective approach. We can create a structured programme that combines Fat Freezing and EMS for comprehensive body contouring results.</p></li>
            </ul>
          </div>
        </section>
        
      </div>
      {/* Call to Action Section */}
        <section className="py-12 md:py-16 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl text-primary font-headline font-bold mb-4">
              Ready for a Fresh Start?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Ready to start your body contouring journey? Contact us today for a free, no-obligation consultation, and let's create a personalised treatment plan that works for you.
            </p>
            <Button asChild size="lg" className="transition-transform hover:scale-105">
              <Link href={`/contact?subject=Booking enquiry: Body Contouring`}>Book An Appointment</Link>
            </Button>
          </div>
        </section>
    </div>
  );
}
