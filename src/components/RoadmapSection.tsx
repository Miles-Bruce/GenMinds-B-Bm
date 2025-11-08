import { Button } from "@/components/ui/button";
import { CheckCircle, Wrench, Globe } from "lucide-react";

const RoadmapSection = () => {
  const columns = [
    {
      title: "✅ Live Now",
      icon: CheckCircle,
      items: [
        "Browse & save prompts",
        "Build your profile",
        "Join community"
      ],
      color: "text-green-500"
    },
    {
      title: "🚧 Coming Q1 2026",
      icon: Wrench,
      items: [
        "Licensing system",
        "Payment integration",
        "Creator verification"
      ],
      color: "text-yellow-500"
    },
    {
      title: "🌍 Coming Q2 2026",
      icon: Globe,
      items: [
        "GEO licensing",
        "Ownership verification",
        "Business API"
      ],
      color: "text-primary"
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="roadmap" className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            What's Live, What's Coming
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {columns.map((column, index) => {
            const Icon = column.icon;
            return (
              <div
                key={index}
                className="fade-in-up rounded-2xl bg-card/50 backdrop-blur-sm border border-border/20 p-8 hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 flex justify-center">
                  <Icon className={`w-12 h-12 ${column.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-6 text-foreground">{column.title}</h3>
                <ul className="space-y-3 text-left">
                  {column.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-primary font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <Button 
          size="lg"
          onClick={() => scrollToSection('early-access')}
          className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-6 text-lg hover:opacity-90 transition-all duration-300 shadow-glow hover:scale-105 font-semibold"
        >
          Join the Early Access Program
        </Button>
      </div>
    </section>
  );
};

export default RoadmapSection;
