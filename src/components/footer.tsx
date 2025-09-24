import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Twitter, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/logo.png"
                  alt="West Park Wellness Studio Logo"
                  width={100}
                  height={69}
                  className="h-22 w-32 pt-2"
                />
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">Your journey to radiant beauty.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <nav className="flex space-x-6 text-sm text-muted-foreground">
              <Link href="/terms" className="hover:text-primary transition-colors">Terms of Use</Link>
              <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
            </nav>
            <div className="flex space-x-4">
              <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} West Park Wellness Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
