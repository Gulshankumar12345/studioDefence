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
        // If the user is not authenticated, and they are not already on the login page, redirect them.
        if (pathname !== '/login') {
            router.push('/login');
        } else {
            // If they are on the login page, we can stop loading.
            setLoading(false);
        }
      } else {
        // If the user is authenticated, set the user and stop loading.
        setUser(user);
        setLoading(false);
        // If the user is logged in and tries to access the login page, redirect them to the dashboard.
        if (pathname === '/login') {
            router.push('/dashboard');
        }
      }
    });

    return () => unsubscribe();
  }, [router, pathname]);

  // While checking auth state, show a loading skeleton.
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

  // If there's no user and we are not on the login page, the redirect is happening.
  // Return null to avoid rendering children. The login page will be rendered on its own.
  if (!user && pathname !== '/login') {
    return null;
  }
  
  // For the login page, we don't want to render the main layout with headers/footers.
  if (pathname === '/login') {
      return <>{children}</>;
  }


  // If the user is authenticated, render the layout with the children.
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
