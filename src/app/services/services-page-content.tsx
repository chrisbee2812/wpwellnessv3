
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { services, serviceCategories, getImageById, Service } from '@/lib/data';
import ServiceDetailsDialog from '@/components/service-details-dialog';

export default function ServicesPageContent() {
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
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline text-primary font-bold">Our Services</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Indulge in our curated selection of treatments designed to rejuvenate, refresh, and relax.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className={`grid w-full ${gridColsClass} md:w-[800px] mx-auto mb-10`}>
            {allCategories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value="All">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                          <CardTitle className="font-headline text-primary">{service.title}</CardTitle>
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
                          <CardTitle className="font-headline text-primary">{service.title}</CardTitle>
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
  );
}
