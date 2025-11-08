import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import EarlyAdopterBanner from "./EarlyAdopterBanner";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 px-6">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A1A] via-primary/5 to-background animate-gradient-shift" />
      
      {/* Animated World Map Visualization */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/30 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-secondary/30 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-36 h-36 bg-accent/30 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-28 h-28 bg-primary-glow/30 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <div className="fade-in-up">
          <div className="mb-8 flex justify-center">
            <Globe className="w-16 h-16 text-primary animate-float" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
            Building the world's first trusted prompt marketplace — powered by{" "}
            <span className="gradient-text">verified licensing and GEO systems</span>.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Join early creators shaping how prompts are owned, licensed, and protected across regions.
          </p>
          
          <EarlyAdopterBanner />
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('early-access')}
              className="bg-gradient-to-r from-primary to-secondary text-white text-lg px-8 py-6 hover:opacity-90 transition-all duration-300 shadow-glow hover:scale-105 font-semibold"
            >
              Join Early Access
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('roadmap')}
              className="text-lg px-8 py-6 border-border/50 bg-card/50 hover:bg-card transition-all duration-300 hover:scale-105 font-semibold backdrop-blur-sm"
            >
              See how it works →
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground/80 italic">
            60 early creators already exploring ThePromptSpace — be part of the next 1,000.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;