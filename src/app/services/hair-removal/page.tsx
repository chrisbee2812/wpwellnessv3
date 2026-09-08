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
          <h1 className="text-4xl md:text-5xl font-headline text-primary font-bold">Laser Hair Removal<br></br>Smooth, Confident, and Hair-Free</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Expert laser hair removal with a gentle touch, supporting you on your journey to smooth, confident skin.
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
                We combine clinical expertise, advanced technology, and a personalised touch to deliver a comfortable experience tailored to your individual skin and hair type.
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
              <h2 className="text-3xl font-headline text-primary font-bold mb-4">How Laser Hair Removal Works</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Laser hair removal is the gold standard for permanent hair reduction. It uses a concentrated beam of light to target the pigment in the hair shaft, generating heat that damages the hair follicle and inhibits future growth.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The treatment is most effective on light skin with dark hair, but modern technology now allows us to successfully treat a wider range of skin and hair types. Multiple sessions are required for optimal results, typically 6–10 treatments, spaced 4–6 weeks apart, to target hairs in their active growth phase.
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

         {/* Why Us Section */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-headline text-primary font-bold mb-4">Benefits of Laser Hair Removal</h2>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed mb-4">
                <li><strong>Long-lasting results</strong> — significantly reduces hair regrowth over time</li>
                <li><strong>Precision</strong> — targets hair follicles without damaging surrounding skin</li>
                <li><strong>Speed</strong> — each pulse of the laser takes a fraction of a second, treating multiple hairs at once</li>
                <li><strong>Cost-effective</strong> — saves money and time compared to a lifetime of shaving, waxing, or threading</li>
                <li><strong>No more ingrown hairs</strong> — laser treatment reduces the occurrence of painful ingrown hairs</li>
              </ul>
            </div>
            {whyusImage && (
              <div className="order-1 md:order-2 rounded-lg overflow-hidden">
                <Image
                  src={whyusImage.imageUrl}
                  alt={whyusImage.description}
                  width={800}
                  height={600}
                  className="object-cover w-3/4 h-3/4 mx-auto"
                  data-ai-hint={whyusImage.imageHint}
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
              Our hair removal treatments are designed to be as comfortable as possible. Here's what you can expect during your session.
            </p>
            <h3 className="text-xl font-semibold mb-4">Before Your Session</h3>
            <ul className="text-muted-foreground leading-relaxed mb-8">
              <li>Shave the treatment area 24-48 hours before your appointment.</li>
              <li>Avoid sun exposure and tanning for at least 2 weeks prior.</li>
              <li>Do not wax, pluck, or use depilatory creams for at least 4 weeks before your session.</li>
              <li>Avoid retinoids, glycolic acid, and other skin irritants for a few days before your session.</li>
            </ul>
            <h3 className="text-xl font-semibold mb-4">During Your Session</h3>
            <ul className="text-muted-foreground leading-relaxed mb-8">
              <li>You'll be provided with and expected to wear protective eyewear.</li>
              <li>The laser handpiece will be pressed against your skin, and a cooling device or gel may be used to protect the outer layers of your skin and minimise discomfort.</li>
              <li>You may feel a mild snapping sensation, often described like a rubber band against the skin.</li>
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
              <li className="mb-4"><strong>Is laser hair removal painful?</strong><p>Most clients describe the sensation as a mild snapping feeling. We can apply numbing cream to minimise discomfort.</p></li>
              <li className="mb-4"><strong>How many sessions will I need?</strong><p> Typically, 6–10 sessions are recommended for optimal results, though this varies depending on your skin, hair, and the treatment area.</p></li>
              <li className="mb-4"><strong>Is it safe for all skin types?</strong><p> Yes, when performed by a qualified professional, modern laser technology allows us to treat a wide range of skin tones safely and effectively.</p></li>
              <li className="mb-4"><strong>What should I do after my session?</strong><p> Avoid sun exposure, hot baths, and strenuous exercise for 24–48 hours. Use SPF 50+ on treated areas for at least 4 weeks.</p></li>
              <li className="mb-4"><strong>Can I shave between sessions?</strong><p> Yes, shaving is allowed, but avoid waxing or plucking as it can interfere with the treatment.</p></li>
              <li className="mb-4"><strong>Are the results permanent?</strong><p> Laser hair removal provides permanent hair reduction, not necessarily 100% permanent removal. Some hairs may eventually regrow, but they will be finer and lighter.</p></li>
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
