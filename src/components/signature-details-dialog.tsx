"use client";

import Image from 'next/image';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowRight } from 'lucide-react';
import type { SignatureTreatment } from '@/lib/data';
import { getImageById } from '@/lib/data';

interface SignatureDetailsDialogProps {
  treatment: SignatureTreatment;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function SignatureDetailsDialog({ treatment, open, onOpenChange }: SignatureDetailsDialogProps) {
  const signatureImage = getImageById(treatment.imageId);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <ScrollArea className="max-h-[90vh]">          
        <DialogContent className="sm:max-w-[625px]">
          {signatureImage && (
            <div className="relative w-full h-64 rounded-t-lg overflow-hidden">
              <Image
                src={signatureImage.imageUrl}
                alt={signatureImage.description}
                layout="fill"
                objectFit="cover"
                data-ai-hint={signatureImage.imageHint}
              />
            </div>
          )}
          <DialogHeader className="p-6 text-left">
            <DialogTitle className="font-headline text-primary text-3xl">{treatment.title}</DialogTitle>
            <p className="text-primary text-xl font-semibold pt-2">{treatment.price}</p>
            <DialogDescription asChild className="text-muted-foreground text-base pt-4 space-y-4">
              <div>
                {treatment.detailedDescription && treatment.detailedDescription.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className='p-6 pt-0'>
            <Button variant="outline" size="sm" asChild>
              <Link href={`/contact?subject=Booking enquiry: ${treatment.title}`}>Book Now</Link>
            </Button>
          </DialogFooter>
        </DialogContent>
      </ScrollArea>
    </Dialog>
  );
}
