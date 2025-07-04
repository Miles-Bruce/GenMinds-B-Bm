
import { Filter, TrendingUp, Clock, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const FeedFilters = () => {
  const [activeFilter, setActiveFilter] = useState("trending");
  const [activeCategory, setActiveCategory] = useState("all");

  const filters = [
    { id: "trending", label: "🔥 Trending", icon: TrendingUp },
    { id: "recent", label: "🕒 Recent", icon: Clock },
    { id: "top", label: "⭐ Top Rated", icon: Star },
    { id: "featured", label: "⚡ Featured", icon: Zap },
  ];

  const categories = [
    "all", "creative-writing", "coding", "marketing", "productivity", 
    "analysis", "education", "research", "business", "art", "design"
  ];

  return (
    <div className="sticky top-20 z-40 glass-card border-b border-glass-border/20 mb-6 backdrop-blur-xl">
      <div className="container mx-auto px-4 md:px-6 py-4">
        {/* Main Filters */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((filter) => {
              const Icon = filter.icon;
              return (
                <Button
                  key={filter.id}
                  variant={activeFilter === filter.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveFilter(filter.id)}
                  className={`font-inter font-medium transition-all duration-200 ${
                    activeFilter === filter.id
                      ? "gradient-primary text-primary-foreground scale-105"
                      : "text-foreground hover:bg-glass-medium hover:scale-105"
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {filter.label}
                </Button>
              );
            })}
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="text-foreground hover:bg-glass-medium hover:scale-105 transition-all duration-200 font-inter"
          >
            <Filter className="w-4 h-4 mr-2" />
            More Filters
          </Button>
        </div>

        {/* Category Tags */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={`cursor-pointer transition-all duration-200 hover:scale-105 font-inter ${
                activeCategory === category
                  ? "bg-accent text-accent-foreground scale-105"
                  : "bg-glass-subtle border-glass-border text-muted-foreground hover:bg-glass-medium hover:text-accent"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              #{category.replace("-", "")}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedFilters;
