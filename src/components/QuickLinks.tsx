import { Link } from "react-router-dom";
import { Pencil, Search, Users, TrendingUp } from "lucide-react";

const quickLinks = [
  { label: "Create Prompt", url: "/create", icon: Pencil },
  { label: "Explore Prompts", url: "/prompts", icon: Search },
  { label: "Communities", url: "/groups", icon: Users },
  { label: "GEO Overview", url: "#geo", icon: TrendingUp },
];

const QuickLinks = () => {
  return (
    <section className="py-8 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {quickLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.url}
                to={link.url}
                className="flex items-center gap-2 px-6 py-3 bg-card/50 backdrop-blur-sm border border-border/20 rounded-xl hover:bg-card hover:border-primary/50 hover:scale-105 transition-all duration-300 text-foreground font-medium"
              >
                <Icon className="w-5 h-5" />
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
