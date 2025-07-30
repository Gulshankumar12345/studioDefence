import { Linkedin, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';
import { Shield } from 'lucide-react';

const SiteFooter = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold font-headline flex items-center gap-2">
              <Shield className="h-7 w-7 text-accent" />
              NILKAN Arms and Aerotech
            </h2>
            <p className="mt-2 text-primary-foreground/80 max-w-md">
              Born in Bharat, Built for Warriors.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold font-headline">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/projects" className="hover:text-accent transition-colors">Projects</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold font-headline">Connect With Us</h3>
            <div className="flex mt-4 space-x-4">
              <Link href="#" aria-label="Twitter" className="hover:text-accent transition-colors"><Twitter /></Link>
              <Link href="#" aria-label="LinkedIn" className="hover:text-accent transition-colors"><Linkedin /></Link>
              <Link href="#" aria-label="YouTube" className="hover:text-accent transition-colors"><Youtube /></Link>
            </div>
             <div className="mt-4 text-sm text-primary-foreground/60">
                <p>Domain Suggestions:</p>
                <p>nilkanarms.in</p>
                <p>nilkanaerotech.com</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} NILKAN Arms and Aerotech Pvt. Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;