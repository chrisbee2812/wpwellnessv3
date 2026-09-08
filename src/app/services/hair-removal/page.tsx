import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { getImageById } from '@/lib/data';

export default function AboutPage() {
  const missionImage = getImageById('about-mission');
  const promiseImage = getImageById('eos-ice-max');
  const beforeAfterImage = getImageById('hair-before-after');

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-headline text-primary font-bold">Laser Hair Removal<br></br>Smooth, Confident, and Hair-Free</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Advanced laser technology for lasting results — tailored to you, every step of the way.
          </p>
        </div>

        {/* Our Mission Section */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-headline text-primary font-bold mb-4">Professional Laser Hair Removal for Every Skin Type</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Unwanted hair can be a source of self-consciousness and daily frustration. At West Park Wellness Studio, we offer professional laser hair removal designed to provide smooth, long-lasting results for both men and women.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We combine professional care, advanced technology, and a personalised touch to deliver a comfortable experience tailored to your individual skin and hair type.
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

        <section className="mb-12">
          <h2 className="text-3xl font-headline text-primary font-bold mb-4 text-center">Our Advanced Technology — Eos Ice Max</h2>
          <p className="text-muted-foreground leading-relaxed text-center mb-8">
            At West Park Wellness Studio, we use the state-of-the-art Eos Ice Max laser system — a professional-grade device designed for safe, effective, and comfortable hair removal across all skin types.
          </p>
          
              <h3 className="text-2xl font-headline text-primary font-bold mb-2">Multi-Wavelength Technology</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Eos Ice Max features four highly effective wavelengths — 755nm, 808nm, 940nm, and 1064nm — allowing us to treat a wide range of skin tones and hair types with precision and safety.
              </p>
              <h3 className="text-2xl font-headline text-primary font-bold mb-2">Ice Cooling Comfort</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The handpiece is equipped with a built-in contact cooling system that cools the skin during treatment. This helps to:
                <ul className="list-disc list-inside text-muted-foreground leading-relaxed mt-2">
                  <li>Improve comfort throughout your session</li>
                  <li>Protect the skin from overheating</li>
                  <li>Reduce the risk of irritation or side effects</li>
                </ul>
              </p>
                <h3 className="text-2xl font-headline text-primary font-bold mb-2">Flexible Spot Sizes</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  With multiple spot size options (8mm, 15x15mm, 15x20mm, and 15x30mm), we can tailor the treatment to suit different body areas — from smaller, delicate areas to larger treatment zones.
                </p>
                <h3 className="text-2xl font-headline text-primary font-bold mb-2">Suitable for All Skin Types</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Thanks to its advanced technology and adjustable settings, the Eos Ice Max is safe and effective for all skin types, with treatments described as comfortable and virtually painless.
                </p>
          
        </section>

        {/* Our Promises Section */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-headline text-primary font-bold mb-4">How Laser Hair Removal Works</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Laser hair removal uses a concentrated beam of light to target the pigment in the hair shaft, generating heat that damages the hair follicle and inhibits future growth. This leads to long-term hair reduction over time.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The treatment is most effective on light skin with dark hair, but the Eos Ice Max's multi-wavelength technology allows us to successfully treat a wider range of skin and hair types. Multiple sessions are required for optimal results, with treatment intervals varying depending on the area being treated and individual hair-growth cycles.
              </p>
            </div>
            {promiseImage && (
              <div className="rounded-lg overflow-hidden">
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

         {/* Why Us Section */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-2">
              <h2 className="text-3xl font-headline text-primary font-bold mb-4">Benefits of Laser Hair Removal</h2>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed mb-4">
                <li><strong>Long-term hair reduction — </strong>significantly reduces hair regrowth over time</li>
                <li><strong>Precision — </strong>targets hair follicles without damaging surrounding skin</li>
                <li><strong>Speed — </strong>each pulse of the laser takes a fraction of a second, treating multiple hairs at once</li>
                <li><strong>Cost-effective — </strong>saves money and time compared to a lifetime of shaving, waxing, or threading</li>
                <li><strong>Can help reduce ingrown hairs — </strong>laser treatment can reduce the occurrence of painful ingrown hairs</li>
              </ul>
            </div>
            {beforeAfterImage && (
              <div className="order-1 md:order-1 rounded-lg overflow-hidden">
                <Image
                  src={beforeAfterImage.imageUrl}
                  alt={beforeAfterImage.description}
                  width={800}
                  height={600}
                  className="object-cover w-3/4 h-3/4 mx-auto"
                  data-ai-hint={beforeAfterImage.imageHint}
                />
              </div>
            )}
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl text-primary font-headline font-bold mb-4">
              Treatment Areas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              We offer laser hair removal for all areas of the face and body for both men and women:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              <div className="text-muted-foreground leading-relaxed">
                <h4 className="text-xl font-semibold mb-2 text-left">Women</h4>
                <ul className="list-disc list-inside text-left">
                  <li>Face: Upper lip, chin, cheeks</li>
                  <li>Underarms</li>
                  <li>Legs: Full or half</li>
                  <li>Arms: Full or half</li>
                  <li>Bikini line</li>
                  <li>Back</li>
                </ul>
              </div>
              <div className="text-muted-foreground leading-relaxed">
                <h4 className="text-xl font-semibold mb-2 text-left">Men</h4>
                <ul className="list-disc list-inside text-left">
                  <li>Face: Beard, neck, cheeks</li>
                  <li>Underarms</li>
                  <li>Chest</li>
                  <li>Back and shoulders</li>
                  <li>Arms</li>
                  <li>Abdomen</li>
                </ul>
              </div>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-8">
              If you're unsure whether your specific area is suitable, simply get in touch — we're happy to advise.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl text-primary font-headline font-bold mb-4">
              What to Expect During Your Treatment
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Our laser hair removal treatments are designed to be as comfortable and effective as possible. Here's what you can expect before, during, and after your session.
            </p>
            <h3 className="text-xl font-semibold mb-4">Before Your Session</h3>
            <ul className="text-muted-foreground leading-relaxed mb-8">
              <li>Avoid sun exposure and tanning for at least 4 weeks prior.</li>
              <li>Shave the treatment area 24-48 hours before your appointment.</li>
              <li>Avoid waxing, plucking, or threading for at least 4 weeks prior — the hair root must be intact for the laser to work.</li>
              <li>Avoid retinoids, glycolic acid, and other skin irritants in the treatment area for a few days before.</li>
            </ul>
            <h3 className="text-xl font-semibold mb-4">During Your Session</h3>
            <ul className="text-muted-foreground leading-relaxed mb-8">
              <li>You'll be provided with and expected to wear protective eyewear.</li>
              <li>The laser handpiece will be pressed against your skin. The built-in ice cooling system works continuously to cool and protect the skin, making the treatment more comfortable.</li>
              <li>You may feel a mild snapping sensation, often described like a rubber band against the skin — but the cooling technology helps to minimise any discomfort.</li>
              <li>Treatment times vary depending on the size and complexity of the area being treated. You will be advised during your consultation as to the expected duration.</li>
            </ul>
            <h3 className="text-xl font-semibold mb-4">After Your Session</h3>
            <ul className="text-muted-foreground leading-relaxed mb-8">
              <li>Expect some redness and mild swelling, which typically subsides within a few hours.</li>
              <li>You may see shedding of treated hairs over the following 1–3 weeks as they are pushed out of the follicle.</li>
              <li>Avoid sun exposure, hot baths, saunas, and strenuous exercise for 24–48 hours.</li>
              <li>If exposing the treated areas to sun, use SPF 50+ on treated areas for at least 4 weeks after each session.</li>
            </ul>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-8">
              We will schedule follow-up sessions based on your treatment plan to ensure optimal results.
            </p>
          </div>
        </section>
          
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl text-primary font-headline font-bold mb-4">
              Is Laser Hair Removal Right for You?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Laser hair removal is suitable for most people, but individual results may vary based on skin type, hair colour, and other factors. During your consultation, we'll assess your suitability for treatment and create a personalised plan to achieve the best results.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              If you have any questions or concerns about the procedure, our experienced team is here to provide guidance and support every step of the way.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl text-primary font-headline font-bold mb-4">
              Why Choose West Park Wellness Studio?
            </h2>
            <ul className="list-disc list-inside text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-left">
              <li><strong>Qualified & Experienced Practitioners — </strong>we are fully trained and certified in laser hair removal.</li>
              <li><strong>Advanced Technology — </strong>we use modern, medical-grade laser equipment for effective and safe treatments.</li>
              <li><strong>Hygiene & Safety — </strong>we maintain the highest standards of cleanliness and safety in all our treatment rooms.</li>
              <li><strong>Personalised Care — </strong>every client is unique, and we tailor every treatment to suit your individual skin, hair, and goals.</li>
              <li><strong>Proven Results — </strong>our clients trust us, and we're proud of the positive feedback and referrals we receive.</li>
            </ul>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl text-primary font-headline font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              We understand you may have questions about laser hair removal. Here are some of the most common queries we receive:
            </p>
            <ul className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-left">
              <li className="mb-4"><strong>Is laser hair removal painful? </strong><p>Most clients describe the sensation as a mild snap of a rubber band against the skin. The Eos Ice Max features a built-in ice cooling system that helps keep you comfortable throughout the treatment.</p></li>
              <li className="mb-4"><strong>How many sessions will I need? </strong><p>Most clients require a course of sessions for optimal results, though this varies depending on your skin, hair, and the treatment area. Treatment intervals also vary depending on the area being treated and individual hair-growth cycles.</p></li>
              <li className="mb-4"><strong>Is it safe? </strong><p>Yes. When performed by trained professionals using the correct equipment, laser hair removal is a safe and effective treatment.</p></li>
              <li className="mb-4"><strong>Can I shave between sessions? </strong><p>Yes. Shaving is encouraged between sessions, but you must avoid waxing, plucking, or threading as these remove the hair root that the laser needs to target.</p></li>
              <li className="mb-4"><strong>Are the results permanent? </strong><p>Laser hair removal provides long-term hair reduction, not necessarily 100% permanent removal. Some hairs may eventually regrow, but they will be finer and lighter.</p></li>
              <li className="mb-4"><strong>Is it suitable for my skin type? </strong><p>Yes. The Eos Ice Max features four wavelengths, making it suitable for all skin types. We'll assess your skin during your consultation to ensure the safest, most effective treatment.</p></li>
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
              Ready to say goodbye to unwanted hair? Contact us today for a free, no-obligation consultation, and let's create a personalised plan that works for you.
            </p>
            <Button asChild size="lg" className="transition-transform hover:scale-105">
              <Link href={`/contact?subject=Booking enquiry: Laser Hair Removal`}>Book An Appointment</Link>
            </Button>
          </div>
        </section>
    </div>
  );
}
