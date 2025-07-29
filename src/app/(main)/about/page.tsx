import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Rocket, Users } from "lucide-react";
import Image from 'next/image';

const teamMembers = [
  { name: 'Dr. A. P. J. Abdul Kalam', role: 'Chief Visionary Officer', image: 'https://placehold.co/100x100.png', hint: 'indian scientist' },
  { name: 'Homi J. Bhabha', role: 'Head of Research & Development', image: 'https://placehold.co/100x100.png', hint: 'indian scientist portrait' },
  { name: 'Vikram Sarabhai', role: 'Lead Aerospace Engineer', image: 'https://placehold.co/100x100.png', hint: 'indian space scientist' },
  { name: 'C. V. Raman', role: 'Chief Scientist, Materials', image: 'https://placehold.co/100x100.png', hint: 'indian physicist' },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">About Nilkanth Defence Systems</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
            Discover the story, values, and people behind our commitment to national security.
          </p>
        </div>
      </section>

      <section id="story" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://placehold.co/600x450.png"
                alt="Founding team blueprint discussion"
                data-ai-hint="blueprint discussion"
                width={600}
                height={450}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="text-left">
              <h2 className="text-3xl font-bold text-primary font-headline">Our Story</h2>
              <p className="mt-4 text-muted-foreground">
                Founded in 2020 by a group of veteran engineers and defence experts, Nilkanth Defence Systems was born from a shared desire to create a self-reliant and technologically advanced defence ecosystem in India.
              </p>
              <p className="mt-4 text-muted-foreground">
                Our journey began with a focus on unmanned aerial systems, and has since expanded to include advanced propulsion, surveillance, and cyber security. We are driven by a passion for solving complex challenges and a deep sense of duty to our nation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="vision-values" className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="p-8 bg-card rounded-lg shadow-md">
              <div className="flex items-center gap-4">
                <Eye className="w-10 h-10 text-accent" />
                <h3 className="text-2xl font-bold font-headline text-primary">Our Vision</h3>
              </div>
              <p className="mt-4 text-muted-foreground">
                To be a global leader in defence technology, recognized for our innovative spirit, unwavering integrity, and significant contributions to world peace and security.
              </p>
            </div>
            <div className="p-8 bg-card rounded-lg shadow-md">
              <div className="flex items-center gap-4">
                <Rocket className="w-10 h-10 text-accent" />
                 <h3 className="text-2xl font-bold font-headline text-primary">Our Values</h3>
              </div>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li><strong>Integrity:</strong> Upholding the highest ethical standards in all our actions.</li>
                <li><strong>Excellence:</strong> Striving for the pinnacle of quality and performance.</li>
                <li><strong>Innovation:</strong> Fostering a culture of creativity and continuous improvement.</li>
                <li><strong>Collaboration:</strong> Working as a unified team to achieve common goals.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary font-headline">Meet Our Leadership</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Our team consists of experienced professionals dedicated to advancing defence technology.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center pt-6">
                <CardContent className="flex flex-col items-center">
                  <Avatar className="w-24 h-24 mb-4">
                    <AvatarImage src={member.image} alt={member.name} data-ai-hint={member.hint} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h4 className="text-lg font-semibold font-headline text-primary">{member.name}</h4>
                  <p className="text-accent">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
