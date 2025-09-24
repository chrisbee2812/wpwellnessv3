
import React, { Suspense } from 'react';
import ServicesPageContent from './services-page-content';
import { Skeleton } from '@/components/ui/skeleton';

export default function ServicesPage() {
  return (
    <Suspense fallback={<ServicesPageSkeleton />}>
      <ServicesPageContent />
    </Suspense>
  );
}

function ServicesPageSkeleton() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <Skeleton className="h-12 w-1/2 mx-auto" />
          <Skeleton className="h-6 w-3/4 mx-auto mt-4" />
        </div>
        <Skeleton className="h-10 md:w-[800px] mx-auto mb-10" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex flex-col gap-4">
              <Skeleton className="h-48 w-full" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-10 w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
