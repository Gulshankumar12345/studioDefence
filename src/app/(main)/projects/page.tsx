import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from 'next/image';

const projects = [
  {
    title: "Project 'Vigilant Eye'",
    category: "Surveillance",
    status: "Completed",
    description: "Development of a high-altitude, long-endurance UAV equipped with multi-spectral imaging for continuous border monitoring.",
    image: "https://placehold.co/600x400.png",
    hint: "drone surveillance"
  },
  {
    title: "Project 'Agni-P'",
    category: "Propulsion",
    status: "Ongoing",
    description: "Research and development of a next-generation solid rocket motor for tactical missiles, enhancing range and payload capacity.",
    image: "https://placehold.co/600x400.png",
    hint: "rocket engine"
  },
  {
    title: "Project 'Kavach'",
    category: "Cyber Security",
    status: "Completed",
    description: "A national-level encrypted communication network to secure critical defence communications against cyber threats.",
    image: "https://placehold.co/600x400.png",
    hint: "cyber security network"
  },
  {
    title: "Project 'Netra'",
    category: "AI & Robotics",
    status: "Ongoing",
    description: "An AI-driven target recognition system for autonomous weapon platforms, improving accuracy and reducing collateral damage.",
    image: "https://placehold.co/600x400.png",
    hint: "ai robotics"
  },
  {
    title: "Project 'Dhruva'",
    category: "Navigation",
    status: "Completed",
    description: "Indigenous development of a quantum-based inertial navigation system that is immune to GPS-jamming.",
    image: "https://placehold.co/600x400.png",
    hint: "satellite navigation"
  },
  {
    title: "Project 'Vajra'",
    category: "Materials Science",
    status: "Research",
    description: "Creation of a new lightweight composite armor with superior ballistic protection for personnel and vehicles.",
    image: "https://placehold.co/600x400.png",
    hint: "composite material"
  },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Our Projects</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
            Showcasing our dedication to innovation and excellence in defence technology.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.title} className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-56 w-full">
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
                    <Badge variant={project.status === 'Completed' ? 'default' : 'secondary'}
                      className={project.status === 'Completed' ? 'bg-green-700 text-white' : ''}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="pt-2 font-headline">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
