"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { teamMembers, getImageById, TeamMember } from '@/lib/data';
import StaffDetailsDialog from '@/components/staff-details-dialog';

export default function StaffPage() {
  const heroImage = getImageById('staff-hero');
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCardClick = (member: TeamMember) => {
    setSelectedMember(member);
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setSelectedMember(null);
  };

  return (
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
            Meet Our Experts
          </h1>
          <p className="mt-4 text-lg md:text-xl text-secondary max-w-xl">
            Our skilled and passionate team is the heart of West Park Wellness Studio.
          </p>
        </div>          
      </section>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl text-primary font-headline font-bold">Meet Our Experts</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Our skilled and passionate team is the heart of West Park Wellness Studio.
            </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {teamMembers.map((member) => {
              const memberImage = getImageById(member.imageId);
              return (
                <Card 
                  key={member.id} 
                  onClick={() => handleCardClick(member)}
                  className="text-center bg-card shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                >
                  <CardContent className="p-6">
                    {memberImage && (
                      <div className="mb-4 rounded-full overflow-hidden w-64 h-64 mx-auto shadow-md">
                        <Image
                          src={memberImage.imageUrl}
                          alt={memberImage.description}
                          width={400}
                          height={400}
                          className="object-cover w-full h-full"
                          data-ai-hint={memberImage.imageHint}
                        />
                      </div>
                    )}
                    <h3 className="text-xl font-headline text-primary font-semibold">{member.name}</h3>
                    <p className="text-primary">{member.role}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
      </div>
      {selectedMember && (
        <StaffDetailsDialog
          member={selectedMember}
          open={isDialogOpen}
          onOpenChange={handleDialogClose}
        />
      )}

    </div>
  );
}
