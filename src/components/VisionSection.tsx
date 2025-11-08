import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const VisionSection = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          background: 'linear-gradient(180deg, hsl(var(--primary) / 0.05), transparent)'
        }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
            We're not another marketplace — we're building the{" "}
            <span className="gradient-text">backbone of the creator economy</span>.
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            Prompts are the new digital assets. ThePromptSpace is creating the global infrastructure to trade, license, and protect them — just like music or code. Every creator, every business, every region — connected through trust.
          </p>

          <Button 
            size="lg"
            className="bg-card/80 backdrop-blur-sm border border-border/50 text-foreground px-8 py-6 text-lg hover:bg-card hover:border-primary/50 transition-all duration-300 hover:scale-105 font-semibold"
          >
            <FileText className="w-5 h-5 mr-2" />
            Read the Vision Paper →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
