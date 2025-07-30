import Link from 'next/link';
import { Shield, Twitter, Linkedin, Youtube } from 'lucide-react';

const SiteFooter = () => {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-accent" />
          <p className="text-sm font-semibold">
            &copy; {new Date().getFullYear()} NILKAN Arms and Aerotech
          </p>
        </div>
        <div className="flex items-center gap-4">
            <Link href="#" aria-label="Twitter" className="text-primary-foreground/70 hover:text-accent transition-colors">
                <Twitter size={20} />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="text-primary-foreground/70 hover:text-accent transition-colors">
                <Linkedin size={20} />
            </Link>
            <Link href="#" aria-label="YouTube" className="text-primary-foreground/70 hover:text-accent transition-colors">
                <Youtube size={20} />
            </Link>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
