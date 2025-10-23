import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState('hashnode');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.blog-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const hashnodeArticles = [
    {
      title: 'Building Modern Web Applications with React',
      excerpt: 'A comprehensive guide to creating performant and scalable React applications...',
      link: '#',
    },
    {
      title: 'Introduction to Data Engineering Pipelines',
      excerpt: 'Learn the fundamentals of building robust data pipelines for modern applications...',
      link: '#',
    },
    {
      title: 'TypeScript Best Practices for 2025',
      excerpt: 'Essential TypeScript patterns and practices every developer should know...',
      link: '#',
    },
  ];

  const mediumArticles = [
    {
      title: 'My Journey into Web Development',
      excerpt: 'How I transitioned from beginner to building production-ready applications...',
      link: '#',
    },
    {
      title: 'Understanding Cloud Architecture',
      excerpt: 'A deep dive into cloud services and how to leverage them effectively...',
      link: '#',
    },
  ];

  return (
    <section id="blog" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">My Tech Writings</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I write about web development, data, and my journey in tech — sharing everything I learn along the way.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-4xl mx-auto">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="hashnode">Hashnode</TabsTrigger>
            <TabsTrigger value="medium">Medium</TabsTrigger>
          </TabsList>

          <TabsContent value="hashnode" className="space-y-6">
            {hashnodeArticles.map((article, index) => (
              <Card
                key={index}
                className="blog-card bg-card/50 backdrop-blur-sm border-primary/30 p-6 card-glow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{article.title}</h3>
                    <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                  </div>
                  <Button
                    variant="outline"
                    className="border-primary/50 hover:border-primary hover:bg-primary/10 shrink-0"
                    asChild
                  >
                    <a href={article.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Read More
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="medium" className="space-y-6">
            {mediumArticles.map((article, index) => (
              <Card
                key={index}
                className="blog-card bg-card/50 backdrop-blur-sm border-primary/30 p-6 card-glow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{article.title}</h3>
                    <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                  </div>
                  <Button
                    variant="outline"
                    className="border-primary/50 hover:border-primary hover:bg-primary/10 shrink-0"
                    asChild
                  >
                    <a href={article.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Read More
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>

        <div className="text-center mt-10">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border"
            asChild
          >
            <a href="#" target="_blank" rel="noopener noreferrer">
              Read All Posts
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
