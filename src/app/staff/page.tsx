import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { teamMembers, getImageById } from '@/lib/data';

export default function StaffPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-headline font-bold">Meet Our Experts</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Our skilled and passionate team is the heart of LumiSkin.
            </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => {
              const memberImage = getImageById(member.imageId);
              return (
                <Card key={member.id} className="text-center border-0 bg-card shadow-sm hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    {memberImage && (
                      <div className="mb-4 rounded-full overflow-hidden w-32 h-32 mx-auto shadow-md">
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
                    <h3 className="text-xl font-headline font-semibold">{member.name}</h3>
                    <p className="text-primary">{member.role}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
      </div>
    </div>
  );
}
