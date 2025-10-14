import { Suspense } from 'react';
import Image from 'next/image';
import ContactForm from "@/components/contact-form";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { Skeleton } from '@/components/ui/skeleton';

function ContactFormSkeleton() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-24 w-full" />
      </div>
      <Skeleton className="h-11 w-full" />
    </div>
  )
}

export default function ContactPage() {
  return (
    <div className="bg-background">
      <div className="relative w-full h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2354.761962947117!2d-1.592889684149255!3d53.84047698008514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879595a691e10c7%3A0x868a57e3c8371383!2s72%20Latchmere%20View%2C%20Leeds%20LS16%205DT%2C%20UK!5e0!3m2!1sen!2sus!4v1688580123456!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl text-primary font-headline font-bold">Get In Touch</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We're here to answer any questions you may have. Reach out to us and we'll respond as soon as we can.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
             <h2 className="text-2xl text-primary font-headline font-bold">Contact Information</h2>
             <div className="flex items-center gap-4">
                <div className="bg-primary/20 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                    <h3 className="font-semibold text-primary">Our Location</h3>
                    <p className="text-muted-foreground">72 Latchmere View, Leeds LS16 5DT</p>
                </div>
             </div>
             <div className="flex items-center gap-4">
                <div className="bg-primary/20 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                    <h3 className="font-semibold text-primary">Email Us</h3>
                    <p className="text-muted-foreground">info@westparkwellnessstudio.co.uk</p>
                </div>
             </div>
             <div className="flex items-center gap-4">
                <div className="bg-primary/20 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                    <h3 className="font-semibold text-primary">Call Us</h3>
                    <p className="text-muted-foreground">07706 424469</p>
                </div>
             </div>
             <h2 className="text-2xl text-primary font-headline font-bold">Social Media</h2>
             <a href="https://www.facebook.com/Westparkwellnessstudio" target='_blank' aria-label="Facebook">
              <div className="flex my-6 items-center gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                      <Facebook className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                      <h3 className="font-semibold text-primary">Facebook</h3>
                  </div>
              </div>
              </a>
             <a href="https://www.instagram.com/west_park_wellness_studio?igsh=MXdsNnNrY2gzZzdvcQ==" target='_blank' aria-label="Instagram">
                <div className="flex my-6 items-center gap-4">
                    <div className="bg-primary/20 p-3 rounded-full">
                        <Instagram className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-primary">Instagram</h3>
                    </div>
                </div>
              </a>
             <a href="https://www.tiktok.com/@westparkwellnesss" target='_blank' aria-label="TikTok">
                <div className="flex my-6 items-center gap-4">
                    <div className="bg-primary/20 p-3 rounded-full">
                        <Image
                          src="/tiktok-primary.png"
                          alt="TikTok Logo"
                          width={50}
                          height={50}
                          className="h-6 w-6 text-primary"
                        />
                    </div>
                    <div>
                        <h3 className="font-semibold text-primary">TikTok</h3>
                    </div>
                </div>
             </a>
          </div>
          <Suspense fallback={<ContactFormSkeleton />}>
            <ContactForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
