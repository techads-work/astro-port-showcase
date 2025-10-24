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
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 transition-all duration-300">
      <nav
        className={`bg-card/80 backdrop-blur-lg shadow-lg rounded-full border border-border transition-all duration-300 ${
          isScrolled ? 'max-w-4xl' : 'max-w-6xl'
        } w-full`}
      >
        <div className="px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection('home')}
              className="text-xl font-bold"
            >
              Aditya Jambhale
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
              <button
                onClick={() => scrollToSection('contact')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
