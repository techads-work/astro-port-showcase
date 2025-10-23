import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card } from '@/components/ui/card';
import { Trophy, Award, Star, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Achievements = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.achievement-card', {
        scrollTrigger: {
          trigger: '.achievement-card',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        scale: 0,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const achievements = [
    {
      icon: Trophy,
      title: 'Hackathon Participant',
      description: 'Participated in multiple national-level hackathons',
    },
    {
      icon: Award,
      title: 'Technical Writer',
      description: 'Published 20+ technical articles across platforms',
    },
    {
      icon: Star,
      title: 'Open Source Contributor',
      description: 'Active contributor to various open-source projects',
    },
    {
      icon: Zap,
      title: 'Academic Excellence',
      description: 'Maintained strong academic performance throughout',
    },
  ];

  return (
    <section id="achievements" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Milestones and recognitions along my journey in tech.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card
                key={index}
                className="achievement-card bg-card/50 backdrop-blur-sm border-primary/30 p-6 card-glow text-center"
              >
                <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-muted-foreground text-sm">{achievement.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
