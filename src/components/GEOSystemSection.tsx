import { Button } from "@/components/ui/button";
import { Globe, Compass, FileText } from "lucide-react";

const GEOSystemSection = () => {
  const features = [
    {
      icon: Globe,
      title: "Regional Access",
      description: "Set where your prompts can be sold or accessed — instantly."
    },
    {
      icon: Compass,
      title: "Compliance Ready",
      description: "Support legal & content standards across regions."
    },
    {
      icon: FileText,
      title: "Usage Transparency",
      description: "See how and where your prompts are being used."
    }
  ];

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Radial Gradient Background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at top, hsl(var(--primary) / 0.15), transparent)'
        }}
      />
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="mb-12 fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Next milestone: <span className="gradient-text">GEO Licensing System</span> 🌍
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Regional prompt control — allowing creators and businesses to manage where and how prompts can be used worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="fade-in-up rounded-2xl bg-card/50 backdrop-blur-sm border border-border/20 p-8 hover:border-primary/50 hover:bg-card/70 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 flex justify-center">
                  <div className="p-4 rounded-full bg-primary/10">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <Button 
          size="lg"
          className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-6 text-lg hover:opacity-90 transition-all duration-300 shadow-glow hover:scale-105 font-semibold"
        >
          Join GEO Beta Waitlist →
        </Button>
      </div>
    </section>
  );
};

export default GEOSystemSection;
