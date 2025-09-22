"use client";

import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import type { ServiceOverview } from '@/lib/data';
import { getImageById } from '@/lib/data';

interface ServiceDetailsDialogProps {
  service: ServiceOverview;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ServiceDetailsDialog({ service, open, onOpenChange }: ServiceDetailsDialogProps) {
  const serviceImage = getImageById(service.imageId);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[625px] md:max-w-[800px]">
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
        <DialogHeader className="p-6">
          <DialogTitle className="font-headline text-primary text-3xl">{service.title}</DialogTitle>
          <DialogDescription className="text-muted-foreground text-base pt-4">
            {service.detailedDescription.map((para, idx) => (
              <p key={idx} className="mb-4">
                {typeof para === "string" ? para : para.description}
              </p>
            ))}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}