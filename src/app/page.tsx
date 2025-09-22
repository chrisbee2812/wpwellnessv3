"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Gem, Leaf, ShieldCheck, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { serviceOverviews, getImageById, ServiceOverview } from '@/lib/data';
import ServiceDetailsDialog from '@/components/service-details-dialog';

export default function Home() {
  const featuredServices = serviceOverviews;
  const heroImage = getImageById('hero');

  const [selectedService, setSelectedService] = useState<ServiceOverview | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCardClick = (service: ServiceOverview) => {
    setSelectedService(service);
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setSelectedService(null);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-start text-foreground">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0" />
          <div className="relative z-10 p-4 container mx-auto text-left animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl text-background font-headline font-bold tracking-tight max-w-xl">
              Precision Wellness, 
              Aesthetic Bliss
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-xl">
              From pristine hearing to aesthetic transformations, discover a
              sanctuary where precision meets beauty. Elevate your senses and redefine your
              radiance with our specialized services.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="transition-transform hover:scale-105">
                <Link href="/services">
                  Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="transition-transform hover:scale-105">
                <Link href="/contact">
                  Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Welcome section */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl text-primary font-headline font-bold mb-4">
              Welcome to West Park Wellness Studio
            </h2>
            <h3 className="text-xl md:text-2xl font-medium mb-8 text-secondary">
              A safe space for healing, beauty, and deep inner calm
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              At West Park Wellbeing Studio, I’ve created something deeply personal—a calming sanctuary in my own garden, inspired by a journey of healing, growth, and self-discovery. This studio was born from a desire to help others reconnect with their bodies, release emotional tension, and experience a deeper sense of peace and wellbeing.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              I know what it means to live in survival mode, to carry emotional noise, and to slowly find my way back to peace. That’s why I’ve poured love into every part of this studio—to offer more than services… but real care and grounded restoration.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Whether you’re here for clarity, relaxation, or transformation—this space welcomes all of you.
            </p>
            <Button asChild size="lg" className="transition-transform hover:scale-105">
              <Link href="/contact">
                Book an Appointment
              </Link>
            </Button>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-12 md:py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-center text-primary mb-12">
              The West Park Wellness Studio Difference
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-primary/20 p-4 rounded-full mb-4">
                  <Gem className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl text-primary font-headline font-semibold mb-2">Expert Care</h3>
                <p className="text-muted-foreground">
                  Our team of licensed professionals is dedicated to providing personalized treatments with the utmost precision.
                </p>
                <Button asChild variant="link" className="p-0 h-auto justify-start mt-4 text-primary">
                  <Link href="/staff">Meet the Staff <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
              <div className="flex flex-col items-center">
                 <div className="bg-primary/20 p-4 rounded-full mb-4">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl text-primary font-headline font-semibold mb-2">Premium Products</h3>
                <p className="text-muted-foreground">
                  We use only high-quality, clinically-proven products to ensure safe and effective results.
                </p>
              </div>
              <div className="flex flex-col items-center">
                 <div className="bg-primary/20 p-4 rounded-full mb-4">
                  <Car className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl text-primary font-headline font-semibold mb-2">Mobile Services</h3>
                <p className="text-muted-foreground">
                  As well as relaxing in our calming and luxurious space, our mobile service for some of our treatments means we come to you.
                </p>
                <Button asChild variant="link" className="p-0 h-auto justify-start mt-4 text-primary">
                  <Link href="/services">At Home Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary text-center mb-12">
              Our Signature Treatments
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredServices.map((service) => {
                 const serviceImage = getImageById(service.imageId);
                 return (
                  <Card key={service.id} onClick={() => handleCardClick(service)} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-2 flex flex-col cursor-pointer">
                    {serviceImage && (
                       <div className="aspect-w-16 aspect-h-9">
                        <Image
                          src={serviceImage.imageUrl}
                          alt={serviceImage.description}
                          width={600}
                          height={400}
                          className="object-cover w-full h-full"
                          data-ai-hint={serviceImage.imageHint}
                        />
                       </div>
                    )}
                    <CardHeader>
                      <CardTitle className="font-headline text-primary">{service.shortTitle}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col">
                      <p className="text-muted-foreground flex-grow">{service.shortDescription}</p>
                      <Button asChild variant="link" className="p-0 h-auto justify-start mt-4 text-primary">
                        <Link href="/services">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                      </Button>
                    </CardContent>
                  </Card>
                 );
              })}
            </div>
          </div>
        </section>

        

        {/* Call to Action Section */}
        <section className="py-12 md:py-16 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
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
      </main>

      {selectedService && (
        <ServiceDetailsDialog
          service={selectedService}
          open={isDialogOpen}
          onOpenChange={handleDialogClose}
        />
      )}
    </div>
  );
}