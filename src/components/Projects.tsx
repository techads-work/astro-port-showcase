import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-card', {
        scrollTrigger: {
          trigger: '.project-card',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: 'Interactive Dashboard',
      description: 'A real-time analytics dashboard built with React and data visualization libraries.',
      tech: ['React', 'TypeScript', 'Chart.js', 'Tailwind'],
      github: '#',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    },
    {
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration and admin panel.',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=500&fit=crop',
    },
    {
      title: 'Blog CMS',
      description: 'Custom content management system for technical blogs with markdown support.',
      tech: ['React', 'Express', 'PostgreSQL', 'AWS'],
      github: '#',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop',
    },
    {
      title: 'Data Pipeline Tool',
      description: 'ETL pipeline for processing and transforming large datasets efficiently.',
      tech: ['Python', 'Apache Spark', 'Docker', 'Airflow'],
      github: '#',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=500&fit=crop',
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of my recent work showcasing various technologies and problem-solving approaches.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="project-card bg-card/50 backdrop-blur-sm border-primary/30 overflow-hidden card-glow"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="bg-secondary/50"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/50 hover:border-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
