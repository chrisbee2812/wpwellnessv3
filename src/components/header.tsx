"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, Sparkles, X, ChevronDown } from 'lucide-react';
import { Mail, Phone, MapPin, Clock } from "lucide-react";

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/staff', label: 'Staff' },
  { href: '/contact', label: 'Contact' },
];

const servicesLinks = [
    { href: '/services', label: 'View All Services' },
    { href: '/pricing', label: 'Pricing' },
]

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "transition-colors hover:text-primary",
        isActive ? "text-primary font-semibold" : "text-secondary"
      )}
    >
      {children}
    </Link>
  );
};

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 w-full z-50">
      <div className="gap-8 h-8 w-full bg-primary text-sm pl-8 text-secondary hidden lg:flex">
        <div className="flex items-center gap-2">
          <div className="bg-primary">
              <Phone className="h-6 w-6" />
          </div>
          <div>
              <p>+44 07706 424469</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-primary">
              <Mail className="h-6 w-6" />
          </div>
          <div>
              <p>info@westparkwellnessstudio.co.uk</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-primary">
              <MapPin className="h-6 w-6" />
          </div>
          <div>
              <p>72 Latchmere View, Leeds LS16 5DT</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-primary">
              <Clock className="h-6 w-6" />
          </div>
          <div>
              <p>Mon -Sun: 8am - 8pm</p>
          </div>
        </div>
      </div>
      
      <div className="h-24 w-full z-50">
        <div className="flex items-center justify-between bg-background w-full px-12">
            <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/logo.png"
                  alt="West Park Wellness Studio Logo"
                  width={100}
                  height={69}
                  className="h-22 w-32 pt-2"
                />
            </Link>
            <div className="hidden md:flex items-center space-x-6 text-xl font-bold">
                <NavLink key="/" href="/">
                  Home
                </NavLink>
                <NavLink key="/about" href="/about">
                  About Us
                </NavLink>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className={cn(
                        "flex items-center gap-1 p-0 h-auto text-xl font-bold transition-colors hover:text-primary hover:bg-transparent",
                        (pathname === '/services' || pathname === '/pricing') ? "text-primary font-semibold" : "text-secondary"
                    )}>
                        Services <ChevronDown className="h-4 w-4" />
                    </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                        <Link href="/services">View All Services</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href="/pricing">Pricing</Link>
                    </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <NavLink key="/staff" href="/staff">
                  Staff
                </NavLink>
                <NavLink key="/contact" href="/contact">
                  Contact Us
                </NavLink>
            </div>
        </div>

        <div className="flex flex-1 items-center justify-end md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px]">
              <div className="p-6">
                <Link
                  href="/"
                  className="mb-8 flex items-center space-x-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Sparkles className="h-6 w-6 text-primary" />
                  <span className="font-bold font-headline text-lg">LumiSkin</span>
                </Link>
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                   <p className="text-lg font-semibold pt-2">Services</p>
                   {servicesLinks.map((link) => (
                     <Link
                        key={link.href}
                        href={link.href}
                        className="text-lg pl-4"
                        onClick={() => setIsMobileMenuOpen(false)}
                     >
                        {link.label}
                     </Link>
                   ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
