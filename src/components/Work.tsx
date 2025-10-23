import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.work-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
        },
        x: -100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const experiences = [
    {
      company: 'Freelance Web Developer',
      role: 'Full Stack Developer',
      duration: '2024 - Present',
      description: 'Building custom web solutions for clients, focusing on modern React applications with seamless user experiences.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    },
    {
      company: 'Data Engineering Intern',
      role: 'Data Engineer',
      duration: '2025',
      description: 'Working with data pipelines, ETL processes, and building scalable data solutions for analytics.',
      tech: ['Python', 'SQL', 'Apache Spark', 'Cloud Services'],
    },
    {
      company: 'Tech Blogger',
      role: 'Content Creator',
      duration: '2023 - Present',
      description: 'Sharing technical knowledge through articles on Hashnode and Medium, covering web development and data engineering topics.',
      tech: ['Technical Writing', 'Developer Advocacy'],
    },
  ];

  return (
    <section id="work" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">My Journey So Far</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From freelancing to writing, here's a glimpse into my professional experiences.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="work-card bg-card/50 backdrop-blur-sm border-primary/30 p-6 md:p-8 card-glow relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-neon-cyan" />
              
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                  <p className="text-lg text-primary">{exp.company}</p>
                </div>
                <Badge variant="outline" className="border-primary/50 text-primary w-fit">
                  {exp.duration}
                </Badge>
              </div>

              <p className="text-muted-foreground mb-6">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="bg-secondary/50 hover:bg-secondary/70"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
