
import { ArrowDown, Zap, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const animatedWords = [
    "AI Prompts",
    "Innovation", 
    "Creativity",
    "Intelligence",
    "Solutions",
    "Ideas"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % animatedWords.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(1px)',
        }}
      />
      <div className="absolute inset-0 bg-background/80 z-10" />
      
      {/* Logo Watermark - Bottom Right */}
      <div className="absolute bottom-8 right-8 z-15 opacity-10">
        <img 
          src="/lovable-uploads/ebf12e77-6e0a-4068-94be-f4339f1e3341.png" 
          alt="ThePromptSpace Logo" 
          className="w-24 h-24 animate-spin-slow"
          style={{ animation: 'float 8s ease-in-out infinite' }}
        />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-primary/20 rounded-full blur-xl float-animation" />
      <div className="absolute top-40 right-32 w-32 h-32 bg-accent/20 rounded-full blur-xl float-animation" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-primary-glow/30 rounded-full blur-xl float-animation" style={{ animationDelay: '4s' }} />
      
      {/* Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
        <div className="fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="gradient-text">The Future of</span>
            <br />
            <span 
              className="text-accent transition-all duration-500 ease-in-out inline-block transform"
              key={currentWordIndex}
              style={{
                animation: 'fade-in-up 0.5s ease-out forwards'
              }}
            >
              {animatedWords[currentWordIndex]}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover, share, and remix the world's best AI prompts. 
            Join the community that's pushing the boundaries of AI creativity.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="gradient-primary text-primary-foreground text-lg px-8 py-4 hover:opacity-90 transition-opacity pulse-glow"
            >
              <Zap className="w-5 h-5 mr-2" />
              Explore Prompts
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 border-glass-border bg-glass-medium hover:bg-glass-strong transition-all"
            >
              Join Community
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
