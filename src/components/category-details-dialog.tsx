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
import { ArrowRight } from 'lucide-react';
import type { FeaturedCategory } from '@/lib/data';
import { getImageById } from '@/lib/data';

interface CategoryDetailsDialogProps {
  category: FeaturedCategory;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function CategoryDetailsDialog({ category, open, onOpenChange }: CategoryDetailsDialogProps) {
  const categoryImage = getImageById(category.imageId);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[625px]">
        {categoryImage && (
          <div className="relative w-full h-64 rounded-t-lg overflow-hidden">
            <Image
              src={categoryImage.imageUrl}
              alt={categoryImage.description}
              layout="fill"
              objectFit="cover"
              data-ai-hint={categoryImage.imageHint}
            />
          </div>
        )}
        <DialogHeader className="p-6 text-left">
          <DialogTitle className="font-headline text-3xl">{category.title}</DialogTitle>
          <DialogDescription asChild className="text-muted-foreground text-base pt-4 space-y-4">
            <div>
              {category.detailedDescription && category.detailedDescription.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className='p-6 pt-0'>
            <Button asChild>
                <Link href={category.link}>
                    View Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
