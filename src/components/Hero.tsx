import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';
import adityaPortrait from '@/assets/aditya-portrait.jpg';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      tl.from('.hero-title', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      })
      .from('.hero-subtitle', {
        y: 50,
        opacity: 0,
        duration: 0.8,
      }, '-=0.5')
      .from('.hero-buttons', {
        y: 30,
        opacity: 0,
        duration: 0.8,
      }, '-=0.5')
      .from('.hero-social', {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
      }, '-=0.3');

      // Floating animation for image
      gsap.to(imageRef.current, {
        y: -20,
        duration: 3,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="hero-title text-5xl md:text-7xl font-bold leading-tight">
              Crafting Code,
              <br />
              <span className="glow-text">Creating Impact</span>
            </h1>
            
            <p className="hero-subtitle text-xl md:text-2xl text-muted-foreground">
              Final Year Engineering Student | Web Developer | Tech Explorer
            </p>
            
            <p className="hero-subtitle text-lg text-muted-foreground max-w-lg">
              Passionate about building elegant web solutions and exploring the vast universe of technology.
              Currently pursuing my engineering degree while freelancing and sharing my journey through technical writing.
            </p>

            <div className="hero-buttons flex flex-wrap gap-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border"
              >
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/50 hover:border-primary hover:bg-primary/10"
              >
                View My Work
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social"
              >
                <Button
                  size="icon"
                  variant="outline"
                  className="border-primary/50 hover:border-primary hover:bg-primary/10"
                >
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social"
              >
                <Button
                  size="icon"
                  variant="outline"
                  className="border-primary/50 hover:border-primary hover:bg-primary/10"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a
                href="mailto:aditya@example.com"
                className="hero-social"
              >
                <Button
                  size="icon"
                  variant="outline"
                  className="border-primary/50 hover:border-primary hover:bg-primary/10"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          <div ref={imageRef} className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-neon-cyan/20 rounded-full blur-2xl" />
              <img
                src={adityaPortrait}
                alt="Aditya Jambhale"
                className="relative rounded-full w-full h-full object-cover border-4 border-primary/30 glow-border"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
