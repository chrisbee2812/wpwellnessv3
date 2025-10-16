"use client";

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { getAllSubServices, SubServiceWithParent } from '@/lib/data';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactForm() {
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const subjectParam = searchParams.get('subject');

  const allSubServices = getAllSubServices();
  const [selectedService, setSelectedService] = useState<SubServiceWithParent | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: subjectParam || "",
      message: "",
    },
  });

  useEffect(() => {
    if (subjectParam) {
      form.setValue('subject', subjectParam);
    }
  }, [subjectParam, form]);

  const handleAddServiceToMessage = () => {
    if (selectedService) {
      
      const currentMessage = form.getValues('message');
      const serviceText = `I'm interested in booking the ${selectedService.parentTitle}: ${selectedService.name} treatment.`;
      
      if (!currentMessage.includes(serviceText)) {
        const newMessage = currentMessage ? `${currentMessage}\n\n${serviceText}` : serviceText;
        form.setValue('message', newMessage);
      }
    }
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We will get back to you shortly.",
    });
    form.reset();
    setSelectedService(null);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-primary text-2xl">Send us a Message</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary font-bold">Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Jane Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary font-bold">Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="jane.doe@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary font-bold">Subject</FormLabel>
                  <FormControl>
                    <Input placeholder="Question about a service" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormItem>
              <FormLabel>Service of Interest</FormLabel>
                <div className="flex gap-2">
                    <Select onValueChange={(value) => {
                        const service = allSubServices.find(s => s.name === value);
                        setSelectedService(service || null);
                    }}>
                        <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a service (optional)" />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                        {allSubServices.map((sub, index) => (
                            <SelectItem key={index} value={sub.name}>
                            {sub.parentTitle}: {sub.name}
                            </SelectItem>
                        ))}
                        </SelectContent>
                    </Select>
                    <Button type="button" variant="outline" onClick={handleAddServiceToMessage} disabled={!selectedService}>
                        Add
                    </Button>
                </div>
              <FormDescription>
                Select a service and click 'Add' to include it in your message.
              </FormDescription>
            </FormItem>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary font-bold">Message</FormLabel>
                  <FormControl>
                    <textarea
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your message here..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" size="lg">Send Message</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
