import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Work from '@/components/Work';
import Projects from '@/components/Projects';
import Blog from '@/components/Blog';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import StarBackground from '@/components/StarBackground';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <StarBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Work />
        <Projects />
        <Blog />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
