import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Mail, MapPin, Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-form', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
        },
        x: -100,
        opacity: 0,
        duration: 0.8,
      });

      gsap.from('.contact-info', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
        },
        x: 100,
        opacity: 0,
        duration: 0.8,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="contact-form bg-card/50 backdrop-blur-sm border-primary/30 p-8 card-glow">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-secondary/50 border-primary/30 focus:border-primary"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-secondary/50 border-primary/30 focus:border-primary"
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-secondary/50 border-primary/30 focus:border-primary min-h-[150px]"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-border"
                size="lg"
              >
                Send Message
              </Button>
            </form>
          </Card>

          <div className="contact-info space-y-8">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/30 p-6 card-glow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Email</h3>
                  <p className="text-muted-foreground">aditya.jambhale@example.com</p>
                </div>
              </div>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-primary/30 p-6 card-glow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Location</h3>
                  <p className="text-muted-foreground">Maharashtra, India</p>
                </div>
              </div>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-primary/30 p-6 card-glow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Availability</h3>
                  <p className="text-muted-foreground">Open for freelance opportunities</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
