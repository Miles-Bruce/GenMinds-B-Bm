import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeedFilters from "@/components/FeedFilters";
import PromptCard from "@/components/PromptCard";
import { useState, useEffect } from "react";

const Index = () => {
  const [prompts] = useState([
    {
      id: "1",
      title: "Advanced Creative Writing Assistant",
      prompt: "You are a world-class creative writing assistant. Help me develop compelling characters, intricate plots, and vivid descriptions. Focus on creating emotionally resonant stories that captivate readers from the first sentence. Consider pacing, dialogue, and narrative structure.",
      author: "CreativeWriter",
      tags: ["creative-writing", "storytelling", "fiction", "characters"],
      category: "Creative Writing",
      likes: 284,
      comments: 47,
      copies: 156,
      isBookmarked: false,
      isLiked: false
    },
    {
      id: "2", 
      title: "Code Review & Optimization Expert",
      prompt: "Act as a senior software engineer specializing in code review and optimization. Analyze the provided code for performance bottlenecks, security vulnerabilities, and best practices. Provide specific recommendations with examples and explain the reasoning behind each suggestion.",
      author: "CodeMaster",
      tags: ["programming", "code-review", "optimization", "security"],
      category: "Development",
      likes: 392,
      comments: 73,
      copies: 201,
      isBookmarked: true,
      isLiked: true
    },
    {
      id: "3",
      title: "Strategic Marketing Campaign Planner",
      prompt: "You are a strategic marketing expert with 15+ years of experience. Help me create a comprehensive marketing campaign that includes target audience analysis, channel selection, content strategy, budget allocation, and KPI measurement frameworks.",
      author: "MarketingPro",
      tags: ["marketing", "strategy", "campaigns", "analytics"],
      category: "Marketing",
      likes: 187,
      comments: 29,
      copies: 94,
      isBookmarked: false,
      isLiked: false
    },
    {
      id: "4",
      title: "AI Research Assistant & Data Analyst",
      prompt: "Function as an advanced research assistant specializing in data analysis and scientific research methodology. Help synthesize complex information, identify patterns, suggest research approaches, and present findings in clear, actionable formats.",
      author: "DataScientist",
      tags: ["research", "data-analysis", "methodology", "insights"],
      category: "Research",
      likes: 445,
      comments: 68,
      copies: 278,
      isBookmarked: true,
      isLiked: false
    },
    {
      id: "5",
      title: "Product Strategy & UX Consultant",
      prompt: "You are a product strategy consultant with expertise in user experience design. Help me develop user-centered product strategies, create intuitive user flows, and design solutions that balance business objectives with user needs.",
      author: "UXStrategist",
      tags: ["product", "ux-design", "strategy", "user-research"],
      category: "Product Design",
      likes: 321,
      comments: 52,
      copies: 143,
      isBookmarked: false,
      isLiked: true
    },
    {
      id: "6",
      title: "Financial Planning & Investment Advisor",
      prompt: "Act as a certified financial planner with expertise in investment strategies and wealth management. Provide personalized financial advice, portfolio recommendations, and risk assessment strategies based on individual goals and market conditions.",
      author: "FinanceExpert",
      tags: ["finance", "investment", "planning", "wealth-management"],
      category: "Finance",
      likes: 203,
      comments: 34,
      copies: 87,
      isBookmarked: false,
      isLiked: false
    }
  ]);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <div className="relative">
        <FeedFilters />
        
        {/* Prompt Feed */}
        <div className="container mx-auto px-6 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {prompts.map((prompt, index) => (
              <div 
                key={prompt.id} 
                className="fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <PromptCard {...prompt} />
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="glass-card-hover px-8 py-4 text-foreground font-medium transition-all">
              Load More Prompts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
