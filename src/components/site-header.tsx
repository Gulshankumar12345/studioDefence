'use client';

import { Menu, Shield, X, LayoutDashboard } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { cn } from '@/lib/utils';
import { onAuthStateChanged, User, signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';


const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

const SiteHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const pathname = usePathname();
  const { toast } = useToast();
  const router = useRouter();


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast({
        title: "Logged Out",
        description: "You have been successfully logged out.",
      });
      router.push('/login');
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Logout Failed",
        description: "There was an error logging you out.",
      });
    }
  };

  const NavLink = ({ href, label, className, onClick }: { href: string; label: string; className?: string; onClick?: () => void }) => (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-accent",
        pathname === href ? "text-accent font-bold" : "text-primary-foreground",
        className
      )}
      onClick={() => {
        setIsMobileMenuOpen(false)
        if (onClick) onClick();
      }}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/60">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Shield className="h-7 w-7 text-accent" />
          <span className="text-lg font-bold text-primary-foreground font-headline">NILKAN</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
          {user && <NavLink href="/dashboard" label="Dashboard" />}
        </nav>

        <div className="flex items-center gap-2">
           {user ? (
             <Button variant="ghost" onClick={handleLogout} className="hidden md:inline-flex text-primary-foreground hover:bg-primary-foreground/10 hover:text-accent">
               Logout
             </Button>
           ) : (
            <Button asChild variant="ghost" className="hidden md:inline-flex text-primary-foreground hover:bg-primary-foreground/10 hover:text-accent">
              <Link href="/login">Admin Login</Link>
            </Button>
           )}

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-primary text-primary-foreground border-l-primary-foreground/20">
              <div className="p-4">
                <div className="flex justify-between items-center mb-8">
                    <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                        <Shield className="h-7 w-7 text-accent" />
                        <span className="text-lg font-bold text-primary-foreground font-headline">NILKAN</span>
                    </Link>
                    <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)} className="text-primary-foreground hover:bg-primary-foreground/10">
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                    </Button>
                </div>
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <NavLink key={link.href} {...link} className="text-lg" />
                  ))}
                  {user && <NavLink href="/dashboard" label="Dashboard" className="text-lg" />}
                   
                   {user ? (
                      <Button variant="outline" className="bg-transparent border-accent text-accent hover:bg-accent hover:text-accent-foreground" onClick={handleLogout}>
                        Logout
                      </Button>
                   ) : (
                    <Button asChild variant="outline" className="bg-transparent border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                      <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>Admin Login</Link>
                    </Button>
                   )}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
