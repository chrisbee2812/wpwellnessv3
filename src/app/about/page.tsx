import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getImageById } from '@/lib/data';

export default function AboutPage() {
  const missionImage = getImageById('about-mission');

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
              <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={missionImage.imageUrl}
                  alt={missionImage.description}
                  width={800}
                  height={600}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                  data-ai-hint={missionImage.imageHint}
                />
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
