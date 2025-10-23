import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-primary/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © 2025 Aditya Jambhale. All rights reserved.
            </p>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button
                size="icon"
                variant="outline"
                className="border-primary/50 hover:border-primary hover:bg-primary/10"
              >
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button
                size="icon"
                variant="outline"
                className="border-primary/50 hover:border-primary hover:bg-primary/10"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
            <a href="mailto:aditya@example.com">
              <Button
                size="icon"
                variant="outline"
                className="border-primary/50 hover:border-primary hover:bg-primary/10"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </a>
          </div>

          <Button
            onClick={scrollToTop}
            size="icon"
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
