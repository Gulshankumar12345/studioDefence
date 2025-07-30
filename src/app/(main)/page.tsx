
'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Crosshair, Target, ShieldCheck } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';

export default function Home() {
  const router = useRouter();
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

  if (loading) {
    return (
       <div className="flex flex-col min-h-screen">
            <main className="flex-1 container mx-auto px-4 py-8">
                 <div className="space-y-4">
                    <Skeleton className="h-8 w-1/4" />
                    <Skeleton className="h-32 w-full" />
                     <Skeleton className="h-32 w-full" />
                </div>
            </main>
        </div>
    )
  }

  if (!user) {
      return null;
  }
  
  return (
    <div className="relative">
      <div 
        className="absolute inset-0 z-[-1] opacity-5"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, hsla(var(--primary) / 0.1), transparent 60%),
            url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
          `
        }}
      ></div>
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-center text-white">
        <Image 
          src="https://placehold.co/1920x1080.png" 
          alt="Indian soldier on a battlefield"
          data-ai-hint="indian soldier battlefield"
          fill
          objectFit="cover"
          className="absolute inset-0 z-0 opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-primary/80 to-primary/60 z-10"></div>
        <div className="relative z-20 px-4">
          <h1 className="text-4xl md:text-6xl font-bold font-headline drop-shadow-lg">
            Innovating India&apos;s Defence Future — From Bharat to the Battlefield.
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/90 drop-shadow-md">
            Born in Bharat, Built for Warriors.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/projects">Explore Our Innovations</Link>
          </Button>
        </div>
      </section>

      <section id="mission" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-primary font-headline">Our Mission</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                To revolutionize India’s defense landscape by designing and developing next-generation indigenous weapon systems and aerospace technologies, empowering our armed forces with unmatched precision, innovation, and self-reliance.
              </p>
               <p className="mt-6 text-xl font-semibold font-headline text-primary/90">
                “Shastra se Suraksha, Soch se Sankalp”
              </p>
               <p className="text-muted-foreground italic">(Defense through Arms, Determination through Vision)</p>
            </div>
            <div>
              <Image 
                src="https://placehold.co/600x400.png"
                alt="Engineers working on a defence project"
                data-ai-hint="engineers defence"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="why-india" className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-primary font-headline">Why NILKAN is Required for India</h2>
            <p className="mt-4 max-w-4xl mx-auto text-muted-foreground">
                India, despite being a major military power, still imports a large portion of its advanced weapon systems. This dependence limits strategic independence and slows down innovation. NILKAN Arms and Aerotech aims to change that.
                By focusing on AI-powered sniper rifles, aerial reconnaissance orbs, and modular weaponry, NILKAN will provide India’s armed forces with state-of-the-art, homegrown solutions that match or surpass global benchmarks.
                Our objective is not just to make weapons—but to build an ecosystem of indigenous innovation that supports Make in India, strengthens defense exports, and uplifts the next generation of Indian defense technocrats.
            </p>
        </div>
      </section>

      <section id="offerings" className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary font-headline">Key Innovations</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            We specialize in advanced, indigenous systems for modern warfare.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="text-center shadow-md hover:shadow-xl transition-shadow bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader className="items-center">
                <div className="p-4 bg-accent/20 rounded-full">
                  <Crosshair className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="font-headline pt-2">AI-Powered Rifles</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Next-gen sniper systems with integrated AI for auto-locking and enhanced precision, giving our soldiers a decisive edge.</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-md hover:shadow-xl transition-shadow bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader className="items-center">
                 <div className="p-4 bg-accent/20 rounded-full">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="font-headline pt-2">Aerial Reconnaissance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Autonomous surveillance and support drones like the TRIKAL Aerial Orb, featuring AI motion detection and live tracking.</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-md hover:shadow-xl transition-shadow bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader className="items-center">
                 <div className="p-4 bg-accent/20 rounded-full">
                  <ShieldCheck className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="font-headline pt-2">Modular Weaponry</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Developing adaptable weapon platforms with modular components like folding stocks and suppressors for mission-specific versatility.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
