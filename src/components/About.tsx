import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card } from '@/components/ui/card';
import { Brain, GraduationCap, Gamepad2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-card', {
        scrollTrigger: {
          trigger: '.about-card',
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

  const facts = [
    {
      icon: Brain,
      title: 'What I Do',
      items: ['Web Developer', 'Data Engineering Aspirant', 'Technical Blogger'],
    },
    {
      icon: GraduationCap,
      title: 'Education',
      items: [
        'Engineering - Datta Meghe College of Engineering',
        'Diploma - [Your Diploma College Name]',
        'School - [Your School Name]'
      ],
    },
    {
      icon: Gamepad2,
      title: 'Interests',
      items: ['Building Interactive Dashboards', 'Writing Tech Blogs', 'Learning Cloud & Data Technologies'],
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate developer on a journey to explore the intersection of code, creativity, and innovation.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-16 space-y-6">
          <p className="text-lg leading-relaxed">
            As a final-year engineering student at Datta Meghe College of Engineering, I've immersed myself in the world of web development and data engineering. My journey in tech has been driven by curiosity and a desire to build solutions that make a difference.
          </p>
          <p className="text-lg leading-relaxed">
            Beyond coding, I'm passionate about sharing knowledge through technical writing on platforms like Hashnode and Medium, where I document my learning experiences and help others navigate their tech journeys.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {facts.map((fact, index) => {
            const Icon = fact.icon;
            return (
              <Card
                key={index}
                className="about-card bg-card/50 backdrop-blur-sm border-primary/30 p-6 card-glow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">{fact.title}</h3>
                    <ul className="space-y-2">
                      {fact.items.map((item, i) => (
                        <li key={i} className="text-muted-foreground">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
