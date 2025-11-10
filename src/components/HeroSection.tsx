import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, Users } from "lucide-react";
import RotatingHeadline from "./RotatingHeadline";

const HeroSection = () => {
  const rotatingWords = [
    "Ideas",
    "Solutions",
    "Creativity",
    "Intelligence",
    "Innovation",
    "AI Prompts",
    "Workflows",
    "Discovery"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 px-6">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B1A] via-[#091025] to-[#0B0920] animate-gradient-shift" />
      
      {/* Animated orbs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/30 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-secondary/30 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-36 h-36 bg-accent/30 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <div className="fade-in-up">
          <RotatingHeadline 
            staticText="The Future of" 
            words={rotatingWords}
            intervalMs={1500}
          />
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            ThePromptSpace is building the backbone of the creator economy — powered by GEO (General Engine Optimization) for prompt discoverability and performance.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link to="/prompts">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary text-white text-lg px-8 py-6 hover:opacity-90 transition-all duration-300 shadow-glow hover:scale-105 font-semibold"
              >
                Explore Prompts →
              </Button>
            </Link>
            
            <Link to="/groups">
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-6 border-border/50 bg-card/50 hover:bg-card transition-all duration-300 hover:scale-105 font-semibold backdrop-blur-sm"
              >
                Join Communities →
              </Button>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground text-sm mb-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Browse curated & GEO-optimized prompts</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <span>Join creator-led communities and collabs</span>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground/80 italic">
            60 early creators shaping the product — join the early access list.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;