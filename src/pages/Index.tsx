
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import BuildingFuture from "@/components/BuildingFuture";
import FounderNote from "@/components/FounderNote";
import FeedFilters from "@/components/FeedFilters";
import PromptCard from "@/components/PromptCard";
import { Button } from "@/components/ui/button";

const Index = () => {
  // Sample prompt data with enhanced props
  const samplePrompts = [
    {
      id: 1,
      title: "AI-Powered Creative Writing Assistant",
      content: "Act as a creative writing assistant specialized in character development and narrative structure. Help me develop compelling characters with three-dimensional personalities, clear motivations, internal conflicts, and realistic growth arcs. Provide detailed guidance on plot pacing, conflict resolution, narrative voice, and story structure. Focus on creating emotionally resonant stories that connect with readers...",
      author: "sarah_chen",
      tags: ["Creative Writing", "Fiction", "Character Development", "Storytelling"],
      category: "Writing",
      likes: 342,
      copies: 127,
      comments: 18,
      remixes: 23,
      timeAgo: "2 hours ago"
    },
    {
      id: 2,
      title: "Senior Code Review Expert",
      content: "You are an expert code reviewer with 15+ years of software engineering experience. Analyze the following code and provide comprehensive feedback on performance optimization, security vulnerabilities, maintainability best practices, and architectural decisions. Focus on identifying potential bugs, suggesting performance improvements, ensuring code follows SOLID principles and industry standards...",
      author: "alex_kumar", 
      tags: ["Programming", "Code Review", "Best Practices", "Architecture"],
      category: "Development",
      likes: 289,
      copies: 94,
      comments: 12,
      remixes: 31,
      timeAgo: "4 hours ago"
    },
    {
      id: 3,
      title: "Strategic Business Consultant",
      content: "Act as a seasoned business strategy consultant with MBA-level expertise and 20+ years of experience. Help me analyze market opportunities, competitive landscapes, and develop comprehensive business strategies. Focus on revenue model optimization, growth planning, market penetration strategies, and risk assessment. Provide actionable insights based on current market trends and data-driven analysis...",
      author: "maria_rodriguez",
      tags: ["Business", "Strategy", "Market Analysis", "Growth"],
      category: "Business", 
      likes: 256,
      copies: 67,
      comments: 21,
      remixes: 15,
      timeAgo: "6 hours ago",
      remixedFrom: {
        author: "business_guru",
        title: "Market Strategy Framework"
      }
    },
    {
      id: 4,
      title: "Advanced SEO Content Optimizer",
      content: "You are an SEO expert specializing in content optimization and search engine algorithms. Help me create high-ranking content that balances search engine requirements with user engagement. Focus on semantic keyword integration, content structure optimization, meta descriptions, header hierarchies, and user intent matching. Ensure content satisfies both search algorithms and provides genuine value to readers...",
      author: "david_park",
      tags: ["SEO", "Content Marketing", "Digital Strategy", "Analytics"],
      category: "Marketing",
      likes: 198,
      copies: 52,
      comments: 14,
      remixes: 8,
      timeAgo: "8 hours ago"
    },
    {
      id: 5,
      title: "UX Design System Architect",
      content: "Act as a senior UX designer and design system architect. Help me create cohesive, scalable design systems that improve user experience and development efficiency. Focus on component libraries, design tokens, accessibility standards, and cross-platform consistency. Provide guidance on user research methods, usability testing, and design pattern implementation...",
      author: "emma_design",
      tags: ["UX Design", "Design Systems", "Accessibility", "User Research"],
      category: "Design",
      likes: 167,
      copies: 43,
      comments: 9,
      remixes: 12,
      timeAgo: "12 hours ago"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <HeroSection />
        <BuildingFuture />
        <FounderNote />
        
        {/* Prompt Feed Section - Twitter/Reddit Style */}
        <section className="py-16 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 fade-in-up">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-sora font-bold mb-6">
                <span className="gradient-text">🧵 Trending Prompts</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground font-inter">
                Discover the most popular and effective prompts from our community
              </p>
            </div>

            <FeedFilters />
            
            {/* Vertical Feed Layout */}
            <div className="space-y-4 mt-6">
              {samplePrompts.map((prompt, index) => (
                <div 
                  key={prompt.id}
                  className="fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <PromptCard {...prompt} />
                </div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12 fade-in-up">
              <Button 
                className="glass-card px-8 py-4 text-foreground hover:bg-glass-medium transition-all duration-300 hover:shadow-glow hover:scale-105 font-inter font-medium"
                variant="outline"
              >
                Load More Prompts
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
