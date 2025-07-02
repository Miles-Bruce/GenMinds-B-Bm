import { Filter, TrendingUp, Clock, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const FeedFilters = () => {
  const [activeFilter, setActiveFilter] = useState("trending");
  const [activeCategory, setActiveCategory] = useState("all");

  const filters = [
    { id: "trending", label: "Trending", icon: TrendingUp },
    { id: "recent", label: "Recent", icon: Clock },
    { id: "top", label: "Top Rated", icon: Star },
    { id: "featured", label: "Featured", icon: Zap },
  ];

  const categories = [
    "all", "creative-writing", "coding", "marketing", "productivity", 
    "analysis", "education", "research", "business", "art"
  ];

  return (
    <div className="sticky top-24 z-40 glass-card border-b border-glass-border/20 mb-8">
      <div className="container mx-auto px-6 py-4">
        {/* Main Filters */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            {filters.map((filter) => {
              const Icon = filter.icon;
              return (
                <Button
                  key={filter.id}
                  variant={activeFilter === filter.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveFilter(filter.id)}
                  className={
                    activeFilter === filter.id
                      ? "gradient-primary text-primary-foreground"
                      : "text-foreground hover:bg-glass-medium"
                  }
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
            className="text-foreground hover:bg-glass-medium"
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
              className={`cursor-pointer transition-all duration-200 ${
                activeCategory === category
                  ? "bg-accent text-accent-foreground"
                  : "bg-glass-subtle border-glass-border text-muted-foreground hover:bg-glass-medium"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category.replace("-", " ")}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedFilters;