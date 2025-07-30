'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { LayoutDashboard, LogOut, Shield } from 'lucide-react';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';


export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { toast } = useToast();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        router.push('/login');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    try {
      await auth.signOut();
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

  if (loading) {
    return (
        <div className="flex min-h-screen items-center justify-center bg-secondary">
            <Skeleton className="h-32 w-full max-w-sm" />
        </div>
    );
  }
  
  if (!user) {
      return null;
  }

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-card border-r p-4 flex flex-col">
        <div className="flex items-center gap-2 mb-8">
             <Shield className="h-8 w-8 text-accent" />
            <h1 className="text-xl font-bold font-headline">NILKAN Admin</h1>
        </div>
        <nav className="flex flex-col gap-2 flex-grow">
            <Button asChild variant={pathname === '/dashboard' ? 'secondary' : 'ghost'} className="justify-start">
                <Link href="/dashboard">
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    Dashboard
                </Link>
            </Button>
        </nav>
        <Button variant="ghost" onClick={handleLogout} className="justify-start">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
        </Button>
      </aside>
      <main className="flex-1 bg-secondary p-8">
        {children}
      </main>
    </div>
  );
}
