import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TrendingUp, Sparkles, Globe } from "lucide-react";

const GEOSystemSection = () => {
  return (
    <section id="geo" className="relative py-20 px-6 overflow-hidden">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          background: 'radial-gradient(circle at top, rgba(147,51,234,0.06), transparent)'
        }}
      />
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Introducing GEO — General Engine Optimization
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            GEO boosts prompt visibility, ranks results by relevance and performance, and helps creators get discovered.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-2xl p-6 hover:bg-card hover:border-primary/30 transition-all duration-300 hover:scale-105">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Dynamic Ranking</h3>
              <p className="text-muted-foreground">
                Prompts are ranked using relevance and engagement signals.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-2xl p-6 hover:bg-card hover:border-primary/30 transition-all duration-300 hover:scale-105">
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Auto-Optimization</h3>
              <p className="text-muted-foreground">
                GEO suggests improvements & tags to maximize discoverability.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-2xl p-6 hover:bg-card hover:border-primary/30 transition-all duration-300 hover:scale-105">
              <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Global Discovery</h3>
              <p className="text-muted-foreground">
                Fair visibility for creators worldwide via normalized signals.
              </p>
            </div>
          </div>

          <Link to="/signup#geo">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-6 text-lg hover:opacity-90 transition-all duration-300 shadow-glow hover:scale-105 font-semibold"
            >
              Join the GEO Early Preview
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GEOSystemSection;
