import ContactForm from "@/components/contact-form";
import { Mail, Phone, MapPin } from "lucide-react";

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
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Get In Touch</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We're here to answer any questions you may have. Reach out to us and we'll respond as soon as we can.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
             <h2 className="text-2xl font-headline font-bold">Contact Information</h2>
             <div className="flex items-center gap-4">
                <div className="bg-primary/20 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                    <h3 className="font-semibold">Our Location</h3>
                    <p className="text-muted-foreground">72 Latchmere View, Leeds LS16 5DT</p>
                </div>
             </div>
             <div className="flex items-center gap-4">
                <div className="bg-primary/20 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                    <h3 className="font-semibold">Email Us</h3>
                    <p className="text-muted-foreground">hello@lumiskin.com</p>
                </div>
             </div>
             <div className="flex items-center gap-4">
                <div className="bg-primary/20 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                    <h3 className="font-semibold">Call Us</h3>
                    <p className="text-muted-foreground">(123) 456-7890</p>
                </div>
             </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
