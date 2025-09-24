"use client";

import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import type { Service } from '@/lib/data';
import { getImageById } from '@/lib/data';

interface ServiceDetailsDialogProps {
  service: Service;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ServiceDetailsDialog({ service, open, onOpenChange }: ServiceDetailsDialogProps) {
  const serviceImage = getImageById(service.imageId);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[625px]">
        {serviceImage && (
          <div className="relative w-full h-64 rounded-t-lg overflow-hidden">
            <Image
              src={serviceImage.imageUrl}
              alt={serviceImage.description}
              layout="fill"
              objectFit="cover"
              data-ai-hint={serviceImage.imageHint}
            />
          </div>
        )}
        <DialogHeader className="p-6 text-left">
          <DialogTitle className="font-headline text-3xl">{service.title}</DialogTitle>
          <p className="text-primary text-xl font-semibold pt-2">{service.price}</p>
          <DialogDescription asChild className="text-muted-foreground text-base pt-4 space-y-4">
            <div>
              <p className="font-semibold text-foreground">{service.description}</p>
              {service.detailedDescription.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
