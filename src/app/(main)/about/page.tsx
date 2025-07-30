import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Rocket, Users } from "lucide-react";
import Image from 'next/image';

const teamMembers = [
  { name: 'Chandan Kumar', role: 'Founder & Defence Innovator', image: 'https://placehold.co/200x200.png', hint: 'indian innovator' },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">About Us</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
            Learn about our vision, mission, and the story behind NILKAN.
          </p>
        </div>
      </section>

      <section id="story" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://placehold.co/600x450.png"
                alt="Blueprint of an advanced weapon system"
                data-ai-hint="blueprint weapon"
                width={600}
                height={450}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="text-left">
              <h2 className="text-3xl font-bold text-primary font-headline">Our Story & History</h2>
              <p className="mt-4 text-muted-foreground">
                NILKAN Arms and Aerotech Pvt. Ltd. was conceptualized by young innovator Chandan Kumar, a B.Tech CSE student and NCC LCPL, with a dream to build India’s own line of future-ready weapons. 
              </p>
              <p className="mt-4 text-muted-foreground">
                The company name ‘NILKAN’ is a tribute to his mother Nilu and sister Kanika, while “09” in our projects signifies the elite 9 PARA SF, symbolizing courage and excellence. From a student-led vision to a startup poised for defense innovation, NILKAN represents the spirit of Aatmanirbhar Bharat and the determination to serve the nation by empowering our soldiers with the best Indian-made technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="vision-mission" className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="p-8 bg-card rounded-lg shadow-md text-center">
              <div className="flex justify-center items-center gap-4">
                <Eye className="w-10 h-10 text-accent" />
                <h3 className="text-2xl font-bold font-headline text-primary">Our Mission</h3>
              </div>
              <p className="mt-4 text-muted-foreground max-w-4xl mx-auto">
                To revolutionize India’s defense landscape by designing and developing next-generation indigenous weapon systems and aerospace technologies, empowering our armed forces with unmatched precision, innovation, and self-reliance.
              </p>
            </div>
        </div>
      </section>

      <section id="team" className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary font-headline">Meet Our Founder</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
           Our company was conceptualized by young innovator Chandan Kumar, a B.Tech CSE student and NCC LCPL.
          </p>
          <div className="flex justify-center mt-12">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center pt-6 max-w-sm">
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

      <section id="why-india" className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-primary font-headline">Why This is Required for India</h2>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                India, despite being a major military power, still imports a large portion of its advanced weapon systems. This dependence limits strategic independence and slows down innovation. NILKAN Arms and Aerotech aims to change that. By focusing on AI-powered sniper rifles, aerial reconnaissance orbs, smart scopes, and modular weaponry, NILKAN will provide India’s armed forces with state-of-the-art, homegrown solutions that match or surpass global benchmarks. Our objective is not just to make weapons—but to build an ecosystem of indigenous innovation that supports Make in India, strengthens defense exports, and uplifts the next generation of Indian defense technocrats.
            </p>
        </div>
      </section>
    </>
  );
}
