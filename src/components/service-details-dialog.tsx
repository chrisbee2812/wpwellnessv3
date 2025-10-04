"use client";

import Image from 'next/image';
import Link from 'next/link';
import { HelpCircle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area";
import type { Service } from '@/lib/data';
import { getImageById } from '@/lib/data';
import { Button } from './ui/button';

interface ServiceDetailsDialogProps {
  service: Service;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ServiceDetailsDialog({ service, open, onOpenChange }: ServiceDetailsDialogProps) {
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[625px] p-0">
        <ScrollArea className="max-h-[90vh]">
          <DialogHeader className="p-6 text-left">
            <DialogTitle className="font-headline text-primary text-3xl">{service.title}</DialogTitle>
            <p className="text-primary text-xl font-semibold pt-2">{service.price}</p>
            <DialogDescription asChild className="text-muted-foreground text-base pt-4 space-y-4">
              <div>
                <p className="font-semibold text-primary">{service.description}</p>
                {service.detailedDescription.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              {service.subServices && service.subServices.length > 0 && (
                  <div className="pt-4">
                    <h3 className="font-headline text-lg text-primary font-semibold text-foreground mb-2">Treatment Options</h3>
                    <div className="space-y-3">
                      {service.subServices.map((sub, index) => (
                        <div key={index} className="flex justify-between items-center text-sm">
                          <div className='flex items-center gap-2'>
                            <p className="font-medium text-primary">{sub.name}</p>
                            <p className="text-muted-foreground">{sub.duration}</p>
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
                  </div>
                )}
              </div>
            </DialogDescription>
          </DialogHeader>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
