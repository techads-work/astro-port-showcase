import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, FileText, Instagram } from 'lucide-react';
import adityaPortrait from '@/assets/aditya-portrait.jpg';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      tl.from('.hero-image', {
        scale: 0,
        opacity: 0,
        duration: 1,
      })
      .from('.hero-title', {
        y: 50,
        opacity: 0,
        duration: 0.8,
      }, '-=0.5')
      .from('.hero-subtitle', {
        y: 30,
        opacity: 0,
        duration: 0.6,
      }, '-=0.4')
      .from('.hero-badge', {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
      }, '-=0.3')
      .from('.hero-social', {
        y: 20,
        opacity: 0,
        duration: 0.5,
      }, '-=0.2');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32 pb-20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-card/40 backdrop-blur-sm border border-border rounded-3xl p-8 sm:p-12 lg:p-16">
            {/* Profile Image */}
            <div className="flex justify-center mb-8">
              <div className="hero-image relative">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-2 border-foreground/20 overflow-hidden">
                  <img
                    src={adityaPortrait}
                    alt="Aditya Jambhale - Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-foreground/10" />
              </div>
            </div>

            {/* Heading */}
            <h1 className="hero-title text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6">
              Hey 👋 I am Aditya Jambhale
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle text-base sm:text-lg lg:text-xl text-center mb-8 text-foreground/80">
              Final Year Engineering Student | Web Developer | Tech Explorer
            </p>

            {/* Badges */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10">
              <Badge variant="outline" className="hero-badge px-6 py-2 text-sm sm:text-base border-foreground/20 bg-background/50">
                Full Stack Developer
              </Badge>
              <Badge variant="outline" className="hero-badge px-6 py-2 text-sm sm:text-base border-foreground/20 bg-background/50">
                Freelancer
              </Badge>
              <Badge variant="outline" className="hero-badge px-6 py-2 text-sm sm:text-base border-foreground/20 bg-background/50">
                Tech Explorer
              </Badge>
            </div>

            {/* Social Links */}
            <div className="hero-social border-t border-border pt-8">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <span className="text-sm sm:text-base font-medium">Follow Me on</span>
                <div className="flex flex-wrap items-center justify-center gap-2 text-sm sm:text-base text-muted-foreground">
                  <a
                    href="https://hashnode.com/@adityajambhale"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors flex items-center gap-1"
                  >
                    <FileText className="h-4 w-4" />
                    Hashnode
                  </a>
                  <span>•</span>
                  <a
                    href="https://linkedin.com/in/adityajambhale"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors flex items-center gap-1"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                  <span>•</span>
                  <a
                    href="https://instagram.com/adityajambhale"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors flex items-center gap-1"
                  >
                    <Instagram className="h-4 w-4" />
                    Instagram
                  </a>
                  <span>•</span>
                  <a
                    href="https://github.com/adityajambhale"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors flex items-center gap-1"
                  >
                    <Github className="h-4 w-4" />
                    Github
                  </a>
                  <span>•</span>
                  <a
                    href="https://twitter.com/adityajambhale"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
