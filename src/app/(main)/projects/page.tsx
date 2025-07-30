import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from 'next/image';
import { CheckCircle } from "lucide-react";

const projects = [
  {
    title: "NILKAN 09 Sniper Rifle",
    category: "Advanced Weaponry",
    status: "In Development",
    description: "A next-generation sniper rifle designed for the modern warrior, integrating cutting-edge technology for superior performance.",
    image: "https://placehold.co/600x400.png",
    hint: "sniper rifle futuristic",
    features: [
        "AI-integrated auto-lock system",
        "Seamless TRIKAL drone integration",
        "Chambered in 7.62x51mm NATO caliber",
        "Modular folding stock & suppressor support"
    ]
  },
  {
    title: "TRIKAL Aerial Orb",
    category: "Surveillance & Support",
    status: "Prototype",
    description: "An autonomous aerial orb designed for tactical surveillance and providing crucial support to ground troops.",
    image: "https://placehold.co/600x400.png",
    hint: "surveillance drone",
    features: [
        "Advanced AI motion detection",
        "Real-time live enemy tracking",
        "Compact, rapid-deployment design",
        "Encrypted data-link to ground control"
    ]
  },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Projects & Innovations</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
            Forging the future of Indian defence with homegrown technology.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.title} className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 w-full">
                  <Image
                    src={project.image}
                    alt={`Image for ${project.title}`}
                    data-ai-hint={project.hint}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Badge variant="outline" className="border-accent text-accent">{project.category}</Badge>
                    <Badge variant='secondary'>
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="pt-2 font-headline">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <CardDescription>{project.description}</CardDescription>
                  <div className="mt-4 flex-grow">
                      <h4 className="font-semibold text-primary/90 mb-2">Key Features:</h4>
                      <ul className="space-y-2">
                          {project.features.map(feature => (
                               <li key={feature} className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 shrink-0" />
                                <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                      </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}