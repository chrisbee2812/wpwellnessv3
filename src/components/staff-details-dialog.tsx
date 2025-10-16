"use client";

import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import type { TeamMember } from '@/lib/data';
import { getImageById, getServiceById } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from './ui/scroll-area';

interface StaffDetailsDialogProps {
  member: TeamMember;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function StaffDetailsDialog({ member, open, onOpenChange }: StaffDetailsDialogProps) {
  const memberImage = getImageById(member.imageId);
  const memberTreatments = member.treatments.map(getServiceById).filter(Boolean);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[625px] p-0">
        <ScrollArea className="max-h-[90vh]">
          {memberImage && (
            <div className="relative w-full h-64">
              <Image
                src={memberImage.imageUrl}
                alt={memberImage.description}
                fill
                objectFit="cover"
                data-ai-hint={memberImage.imageHint}
              />
            </div>
          )}
          <div className="p-6">
            <DialogHeader className="text-left">
              <DialogTitle className="font-headline text-primary text-3xl">{member.name}</DialogTitle>
              <p className="text-primary text-xl font-semibold pt-1">{member.role}</p>
              <DialogDescription asChild className="text-muted-foreground text-base pt-4 space-y-6">
                <div>
                  <div className="space-y-2">
                    {member.bio.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                  {member.qualifications.length > 0 && (
                    <>
                      <div className="mt-6">
                        <h3 className="font-headline text-lg font-semibold text-primary mb-2">Qualifications</h3>
                        <ul className="list-disc list-inside space-y-1">
                          {member.qualifications.map((qual, index) => (
                            <li key={index}>{qual}</li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                  <div className="mt-6">
                    <h3 className="font-headline text-lg font-semibold text-primary mb-3">Specializes In</h3>
                    <div className="flex flex-wrap gap-2">
                      {memberTreatments.map(treatment => (
                        treatment && <Badge key={treatment.id} variant="secondary">{treatment.title}</Badge>
                      ))}
                    </div>
                  </div>

                </div>
              </DialogDescription>
            </DialogHeader>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
