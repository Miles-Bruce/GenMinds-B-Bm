import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Construction, Clock } from "lucide-react";

const RoadmapSection = () => {
  const columns = [
    {
      title: "Live Now",
      icon: CheckCircle,
      items: [
        "Prompt creation & sharing",
        "Profile setup",
        "Community access"
      ],
      color: "text-green-500"
    },
    {
      title: "In Progress",
      icon: Construction,
      items: [
        "GEO engine rollout",
        "Prompt analytics dashboard",
        "Creator verification"
      ],
      color: "text-yellow-500"
    },
    {
      title: "Coming Soon",
      icon: Clock,
      items: [
        "Licensing & payments",
        "Team collaboration tools",
        "Marketplace insights"
      ],
      color: "text-blue-500"
    }
  ];

  return (
    <section id="roadmap" className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Roadmap — What's live and coming
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

        <Link to="/signup">
          <Button 
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 hover:scale-105 transition-all duration-300 font-semibold"
          >
            Join Early Access
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default RoadmapSection;
