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
          <h1 className="text-4xl md:text-5xl font-headline text-primary font-bold">Tattoo Removal at<br></br> West Park Wellness Studio</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Expert tattoo removal with a gentle touch, supporting you on your journey to a fresh start.
          </p>
        </div>

        {/* Our Mission Section */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-headline text-primary font-bold mb-4">Your Fresh Start</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At West Park Wellness Studio, we believe in second chances. Our tattoo removal service offers you the opportunity to move forward with confidence, leaving behind what no longer serves you. Using state-of-the-art laser technology, we gently and effectively fade unwanted tattoos, restoring your skin and your peace of mind.
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
                We use a state-of-the-art professional Q-switched Nd:YAG laser technology, using 1064 nm and 532 nm wavelengths to target a range of tattoo pigments, designed specifically for safe and effective tattoo removal. This advanced system delivers precise pulses of energy that target and break down ink particles beneath the skin, allowing your body's natural immune system to gradually flush them away.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The process begins with a thorough consultation, where we assess your tattoo's size, colour, age, and your skin type to create a bespoke treatment plan. During the procedure, the laser is carefully passed over the tattooed area, with treatment times varying depending on the size and complexity of the design. Most sessions last between 10 to 30 minutes, and we'll recommend a series of sessions spaced 6 weeks apart to allow for adequate healing between treatments.
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
                At West Park Wellness Studio, we know that the thought of laser tattoo removal can feel daunting, but we're here to make every step as comfortable and straightforward as possible. Before your treatment, we'll advise you on how to prepare – including avoiding sun exposure and keeping the area clean and moisturised.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                During the session, you'll feel a sensation often described as a rubber band snapping against the skin. We can apply a topical numbing cream to minimise any discomfort, and the laser itself features a built-in cooling system to soothe the skin throughout the procedure.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Aftercare is just as important as the treatment itself. You may experience some redness, swelling, or mild blistering – all normal signs that your body is responding to the treatment. We'll provide you with detailed aftercare instructions, including how to keep the area clean, when to apply soothing creams, and what to avoid (like sun exposure and intense exercise) in the days following your session. We'll also schedule a follow-up check-in to ensure your skin is healing beautifully.
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
