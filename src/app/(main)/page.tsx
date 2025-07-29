import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Rocket, ShieldCheck, Telescope } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-center text-white">
        <Image 
          src="https://placehold.co/1920x1080.png" 
          alt="Advanced radar system"
          data-ai-hint="radar system"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0 opacity-30"
        />
        <div className="absolute inset-0 bg-primary/70 z-10"></div>
        <div className="relative z-20 px-4">
          <h1 className="text-4xl md:text-6xl font-bold font-headline drop-shadow-lg">
            Engineering the Future of Defence
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/90 drop-shadow-md">
            Nilkanth Defence Systems delivers innovative solutions and cutting-edge technology for national security.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/projects">Explore Our Work</Link>
          </Button>
        </div>
      </section>

      <section id="mission" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-primary font-headline">Our Mission</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                To empower our nation&apos;s defence capabilities through relentless innovation, technological superiority, and unwavering commitment to quality. We strive to develop and deliver state-of-the-art systems that provide a decisive advantage and ensure mission success.
              </p>
              <ul className="mt-6 space-y-3 text-left">
                  <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                      <span><strong>Innovation:</strong> Pushing the boundaries of what's possible in defence technology.</span>
                  </li>
                  <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                      <span><strong>Reliability:</strong> Building robust systems that perform under the most demanding conditions.</span>
                  </li>
                  <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                      <span><strong>Security:</strong> Upholding the highest standards of security to protect national interests.</span>
                  </li>
              </ul>
            </div>
            <div>
              <Image 
                src="https://placehold.co/600x400.png"
                alt="Engineers collaborating"
                data-ai-hint="engineers collaborating"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="offerings" className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary font-headline">Key Offerings</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            We specialize in a range of advanced defence systems designed for modern security challenges.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <Card className="text-left shadow-md hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Telescope className="w-10 h-10 text-accent" />
                  <CardTitle className="font-headline">Surveillance Systems</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Advanced optical and radar surveillance technologies for comprehensive situational awareness on land, at sea, and in the air.</p>
              </CardContent>
            </Card>
            <Card className="text-left shadow-md hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Rocket className="w-10 h-10 text-accent" />
                  <CardTitle className="font-headline">Propulsion Technology</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Next-generation propulsion systems for missiles and aerospace vehicles, offering enhanced range, speed, and efficiency.</p>
              </CardContent>
            </Card>
            <Card className="text-left shadow-md hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <ShieldCheck className="w-10 h-10 text-accent" />
                  <CardTitle className="font-headline">Cyber Security</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Comprehensive cyber defence solutions to protect critical infrastructure and sensitive data from emerging digital threats.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
