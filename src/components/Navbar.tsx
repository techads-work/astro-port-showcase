import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-card/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold glow-text"
          >
            AJ
          </button>
          
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Blog
            </button>
            <button
              onClick={() => scrollToSection('achievements')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Achievements
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
