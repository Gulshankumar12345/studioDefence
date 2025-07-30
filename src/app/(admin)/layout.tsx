'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import SiteHeader from '@/components/site-header';
import SiteFooter from '@/components/site-footer';
import { Skeleton } from '@/components/ui/skeleton';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        if (pathname !== '/login') {
            router.push('/login');
        } else {
            setLoading(false);
        }
      } else {
        setUser(user);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [router, pathname]);

  if (loading) {
    return (
        <div className="flex flex-col min-h-screen">
            <SiteHeader />
            <main className="flex-1 container mx-auto px-4 py-8">
                 <div className="space-y-4">
                    <Skeleton className="h-8 w-1/4" />
                    <Skeleton className="h-32 w-full" />
                </div>
            </main>
            <SiteFooter />
        </div>
    );
  }

  if (!user) {
    return null; // The redirect is handled in the effect
  }

  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
