"use client";

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { services } from '@/lib/data';
import { HelpCircle } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from '@/components/ui/button';

export default function PricingPage() {
  
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline text-primary font-bold">Price List</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Transparent pricing for our premium cosmetic services.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6 md:p-8">
            <div className="space-y-4">
              {services.map((service, serviceIndex) => (
                  <div key={service.id}>
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h3 className="font-semibold text-primary text-lg">{service.title}</h3>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                      {!service.subServices && <p className="text-lg font-semibold text-primary whitespace-nowrap">{service.price}</p>}
                    </div>
                    
                    {service.subServices && (
                      <div className="mt-4 pl-4 border-l-2 border-border space-y-3">
                         {service.subServices.map((sub, subIndex) => (
                            <div key={subIndex} className="flex justify-between items-center">
                                <div className='flex items-center gap-2'>
                                    <p className="font-medium text-primary">{sub.name}</p>
                                    <p className="text-sm text-muted-foreground">{sub.duration}</p>
                                    {sub.details && (
                                      <Popover>
                                        <PopoverTrigger>
                                          <HelpCircle className="h-4 w-4 text-muted-foreground cursor-pointer" />
                                        </PopoverTrigger>
                                        <PopoverContent className='text-sm'>{sub.details}</PopoverContent>
                                      </Popover>
                                    )}
                                </div>
                                <div className="flex items-center gap-4">
                                  <p className="font-semibold text-primary">{sub.price}</p>
                                  <Button variant="outline" size="sm" asChild>
                                    <Link href={`/contact?subject=Booking enquiry: ${sub.name}`}>Book Now</Link>
                                  </Button>
                                </div>
                            </div>
                         ))}
                      </div>
                    )}
                        {serviceIndex < services.length - 1 && <Separator className="mt-4" />}
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
