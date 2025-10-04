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
          <h1 className="text-4xl md:text-5xl font-headline text-primary font-bold">About West Park Wellness Studio</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Dedicated to revealing your inner glow through expert care and a holistic approach to beauty.
          </p>
        </div>

        {/* Our Mission Section */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-headline text-primary font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At West Park Wellness Studio, our mission is to provide a safe, welcoming space where clients can relax, heal, and restore balance. We combine advanced wellness technologies with compassionate care to support the body, mind, and spirit.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every treatment is guided by our values of integrity, professionalism, privacy, and kindness — ensuring our clients feel respected, renewed, and empowered with confidence in their own skin.
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
              <h2 className="text-3xl font-headline text-primary font-bold mb-4">Our Promise to You</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you choose West Park Wellness Studio, you can expect:
              </p>
              <ul className="text-muted-foreground leading-relaxed">
                <li className="mb-4"><strong>Your Safety is Our Priority</strong><p>A commitment to the highest standards of hygiene and practice, with qualified practitioners who put your well-being first.</p></li>
                <li className="mb-4"><strong>Results That Look Like You</strong><p>Expert artistry focused on enhancing your natural beauty for a refreshed, never artificial, outcome.</p></li>
                <li className="mb-4"><strong>A Plan Made Just For You</strong><p>A personalized consultation and treatment plan built around your individual goals, not a one-size-fits-all menu.</p></li>
                <li className="mb-4"><strong>No Surprises, Just Honest Advice</strong><p>Clear communication, transparent pricing, and the truth about what to expect from your treatment.</p></li>
              </ul>
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
              <h2 className="text-3xl font-headline text-primary font-bold mb-4">The Unforgettable Experience at<br></br> West Park Wellness Studio</h2>
              <ul className="text-muted-foreground leading-relaxed">
                <li className="mb-4"><strong>Your One-Stop Beauty & Wellness Destination</strong><p>We uniquely bridge the gap between clinical aesthetics and holistic well-being. Enjoy the convenience and synergy of addressing all your needs—from wrinkle-smoothing injections and fat dissolving to relaxing therapies and practical care—under one roof, with a team that understands the complete picture.</p></li>
                <li className="mb-4"><strong>Medical Expertise You Can Trust</strong><p>Our clinical treatments are grounded in a deep understanding of anatomy and safety protocols. Your results are not only beautiful but achieved with the highest standards of care.</p></li>
                <li className="mb-4"><strong>Technology Designed for Precision</strong><p>We invest in the best. From the scar-free precision of the Cryopen to medical-grade needling devices, we use cutting-edge technology to ensure you receive more effective, comfortable, and superior results.</p></li>
                <li className="mb-4"><strong>A Truly Personalised Pathway</strong><p>Forget one-size-fits-all solutions. Your treatment plan is crafted uniquely for you during a thorough consultation, often combining services for enhanced, multi-faceted results.</p></li>
                <li className="mb-4"><strong>A Sanctuary for Your Senses</strong><p>Our clinic is designed as a tranquil escape. Experience ultimate discretion, comfort, and care in a calming environment, making your visit a rejuvenating experience for both body and mind.</p></li>
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

        
      </div>
      {/* Call to Action Section */}
        <section className="py-12 md:py-16 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl text-primary font-headline font-bold mb-4">
              Ready to Glow?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Your journey to radiant skin starts here. Contact us today to schedule your consultation and discover the perfect treatment for you.
            </p>
            <Button asChild size="lg" className="transition-transform hover:scale-105">
              <Link href="/contact">
                Book an Appointment
              </Link>
            </Button>
          </div>
        </section>
    </div>
  );
}
