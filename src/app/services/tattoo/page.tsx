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
          <h1 className="text-4xl md:text-5xl font-headline text-primary font-bold">Tattoo Removal<br></br>Reclaim Your Skin</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Professional, safe, and effective tattoo removal tailored to you.
          </p>
        </div>

        {/* Our Mission Section */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-headline text-primary font-bold mb-4">Your Fresh Start</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At West Park Wellness Studio, we believe in second chances. Our tattoo removal service offers you the opportunity to move forward with confidence, leaving behind what no longer serves you. Using professional laser technology, we gently and effectively fade unwanted tattoo pigment.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Your journey is unique, and so is your treatment. We'll guide you through the process, explaining everything from how the laser works to what to expect during recovery. Our goal is simple: to help you feel comfortable, informed, and empowered as you take this step towards a fresh start.
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
              <h2 className="text-3xl font-headline text-primary font-bold mb-4">Advanced Technology, Personalised Care</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use professional Q-Switched Nd:YAG laser technology, featuring 1064 nm and 532 nm wavelengths to target a range of tattoo pigments. This advanced system delivers precise pulses of energy that break down ink particles beneath the skin, allowing your body's natural immune system to gradually flush them away.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The process begins with a thorough consultation, where we assess your tattoo's size, colour, age, and your skin type to create a bespoke treatment plan tailored to you.
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
              <h2 className="text-3xl font-headline text-primary font-bold mb-4">Your Comfort, Our Priority</h2>
              <p className="text-muted-foreground leading-relaxed">
                We know that the thought of laser tattoo removal can feel daunting, but we're here to make every step as comfortable and straightforward as possible. From your initial consultation through to aftercare, we prioritise your wellbeing and peace of mind.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                During your session, we'll guide you through the process and ensure you feel at ease throughout the procedure. We'll also provide clear, detailed aftercare guidance to support your skin's healing — and we'll be here to answer any questions along the way.
              </p>
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
              What to Expect During Your Treatment
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Our tattoo removal treatments are designed to be as comfortable and effective as possible. Here's what you can expect before, during, and after your session.
            </p>
            <h3 className="text-xl font-semibold mb-4">Before Your Session</h3>
            <ul className="text-lg text-muted-foreground leading-relaxed mb-8">
              <li>Avoid sun exposure and tanning for at least 4 weeks before treatment.</li>
              <li>Keep the area clean and moisturised in the days leading up to your appointment. A cream like E45* is a good option for this.</li>
              <li>Avoid aspirin, ibuprofen, or blood-thinning medications for 48 hours prior (unless prescribed).</li>
              <li>Shave the treatment area 24 hours before your session (if applicable).</li>
            </ul>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              *Please note that E45 is a brand of emollient cream commonly used to moisturise and protect the skin. It is widely available in pharmacies and supermarkets. It does however contain lanolin, which some people may be allergic to. If you have sensitive skin or a known allergy to lanolin, please consult with your healthcare provider for an alternative moisturiser.
            </p>
            <h3 className="text-xl font-semibold mb-4">During Your Session</h3>
            <ul className="text-lg text-muted-foreground leading-relaxed mb-8">
              <li>You'll be provided with and expected to wear protective eyewear throughout the treatment.</li>
              <li>The laser handpiece will be passed over the tattooed area, delivering precise pulses of energy.</li>
              <li>Treatment times vary depending on the size and complexity of the design — most sessions last between 10 to 30 minutes.</li>
              <li>You'll feel a sensation often described as a rubber band snapping against the skin.</li>
            </ul>
            <h3 className="text-xl font-semibold mb-4">After Your Session</h3>
            <ul className="text-lg text-muted-foreground leading-relaxed mb-8">
              <li>Temporary redness and swelling can occur following treatment, and some clients may experience blistering — these are normal signs that your body is responding to the treatment.</li>
              <li>We'll provide detailed aftercare instructions, including:</li>
                <ul className="list-disc list-inside text-lg text-muted-foreground max-w-xl mx-auto mb-8 text-left">
                  <li>How to keep the area clean</li>
                  <li>When to apply soothing creams</li>
                  <li>What to avoid (sun exposure, intense exercise, swimming, and hot baths)</li>
                </ul>
              <li>We'll schedule a follow-up check-in to ensure your skin is healing beautifully.</li>
              <li>Treatments are spaced a minimum of 6 weeks apart, depending on healing and individual response.</li>
            </ul>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl text-primary font-headline font-bold mb-4">
              Why Choose West Park Wellness Studio?
            </h2>
            <ul className="list-disc list-inside text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-left">
              <li><strong>Qualified & Experienced Practitioners — </strong>we are fully trained and certified in laser tattoo removal.</li>
              <li><strong>Advanced Technology — </strong>we use professional Q-switched Nd:YAG laser equipment for safe and effective results.</li>
              <li><strong>Personalised Treatment Plans — </strong>every tattoo is unique, and we tailor every session to your specific ink, skin type, and goals.</li>
              <li><strong>Hygiene & Safety — </strong>we maintain the highest standards of cleanliness and safety in all our treatment rooms.</li>
              <li><strong>Proven Results — </strong>our clients trust us, and we're proud of the positive feedback and referrals we receive.</li>
              <li><strong>Ongoing Support — </strong>from your initial consultation to aftercare, we're with you every step of the way.</li>
            </ul>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl text-primary font-headline font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              We understand you may have questions about laser tattoo removal. Here are some of the most common queries we receive:
            </p>
            <ul className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-left">
              <li className="mb-4"><strong>Is laser tattoo removal painful?</strong><p>Most clients describe the sensation as a rubber band snapping against the skin.</p></li>
              <li className="mb-4"><strong>How many sessions will I need?</strong><p>The number of sessions required varies depending on factors including the size, colour, age and depth of the tattoo, as well as skin type and individual response. This will be discussed during your consultation.</p></li>
              <li className="mb-4"><strong>Does it work on all colours?</strong><p>The Q-switched Nd:YAG laser is effective on most tattoo pigments, including black, dark blue, green, red, and orange. Some lighter or more stubborn colours (like yellow or pastel shades) may be more challenging. We'll assess your tattoo during your consultation.</p></li>
              <li className="mb-4"><strong>Will it leave a scar?</strong><p>When performed by trained professionals, laser tattoo removal is safe and carries a low risk of scarring. Following our aftercare instructions carefully will help minimise any risk and ensure your skin heals beautifully.</p></li>
              <li className="mb-4"><strong>How long does each session take?</strong><p>Treatment times vary depending on the size and complexity of the design. Most sessions last between 10 to 30 minutes.</p></li>
              <li className="mb-4"><strong>Can I have a new tattoo in the same area?</strong><p>Yes, but we recommend waiting until the skin has fully healed after your final session — typically 6–8 weeks — before getting a new tattoo in the same area.</p></li>
              <li className="mb-4"><strong>Is it safe on all skin types?</strong><p>Suitability is assessed individually during consultation, taking into account your skin type, tattoo characteristics and treatment area.</p></li>
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
              Whether you're ready to say goodbye to an old tattoo or curious about the process, we're here to help. Get in touch today to arrange a consultation and discover how we can support you on your journey.
            </p>
            <Button asChild size="lg" className="transition-transform hover:scale-105">
              <Link href={`/contact?subject=Booking enquiry: Tattoo Removal`}>Book An Appointment</Link>
            </Button>
          </div>
        </section>
    </div>
  );
}
