"use client";

import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { services, serviceCategories, getImageById, Service } from '@/lib/data';
import ServiceDetailsDialog from '@/components/service-details-dialog';
import { ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  const heroImage = getImageById('services-hero');
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(categoryParam || 'All');

  useEffect(() => {
    if (categoryParam) {
      setActiveTab(categoryParam);
    }
  }, [categoryParam]);

  const handleCardClick = (service: Service) => {
    setSelectedService(service);
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setSelectedService(null);
  };
  
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    // Update URL without reloading page
    const newUrl = `${window.location.pathname}?category=${value}`;
    window.history.pushState({ path: newUrl }, '', newUrl);
  };

  const allCategories = ['All', ...serviceCategories];
  const gridColsClass = allCategories.length > 5 ? 'grid-cols-6' : `grid-cols-${allCategories.length}`;

  return (
    <Suspense fallback={<div>loading...</div>}>
    <div className="bg-background">
      <section className="relative h-[40vh] md:h-[60vh] w-full flex items-center justify-start text-foreground">
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
            <h1 className="text-4xl md:text-6xl text-primary font-headline font-bold tracking-tight max-w-xl">
              Our Services
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-xl">
              Indulge in our curated selection of treatments designed to rejuvenate, refresh, and relax.
               From precise ear care to aesthetic mastery, our offerings cater to every facet of your personal journey.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" className="transition-transform hover:scale-105">
              <Link href="/pricing">
                Price List <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            </div>
          </div>          
        </section>
      <div className="container mx-auto px-4 py-16 md:py-24">
        

        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className={`grid w-full ${gridColsClass} md:w-[800px] mx-auto mb-10`}>
            {allCategories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value="All">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => {
                    const serviceImage = getImageById(service.imageId);
                    return (
                      <Card key={service.id} onClick={() => handleCardClick(service)} className="overflow-hidden flex flex-col transition-shadow duration-300 hover:shadow-xl cursor-pointer">
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
                          <CardTitle className="font-headline">{service.title}</CardTitle>
                          <CardDescription className="text-primary font-semibold">{service.price}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <p className="text-muted-foreground">{service.description}</p>
                        </CardContent>
                      </Card>
                    );
                  })}
              </div>
            </TabsContent>

          {serviceCategories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services
                  .filter((service) => category === 'Mobile' ? service.isMobile : service.category === category)
                  .map((service) => {
                    const serviceImage = getImageById(service.imageId);
                    return (
                      <Card key={service.id} onClick={() => handleCardClick(service)} className="overflow-hidden flex flex-col transition-shadow duration-300 hover:shadow-xl cursor-pointer">
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
                          <CardTitle className="font-headline">{service.title}</CardTitle>
                          <CardDescription className="text-primary font-semibold">{service.price}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <p className="text-muted-foreground">{service.description}</p>
                        </CardContent>
                      </Card>
                    );
                  })}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {selectedService && (
          <ServiceDetailsDialog
            service={selectedService}
            open={isDialogOpen}
            onOpenChange={handleDialogClose}
          />
        )}
      </div>
    </div>
    </Suspense>
  );
}
