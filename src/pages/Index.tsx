
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import VisionCards from "@/components/VisionCards";
import FounderNote from "@/components/FounderNote";
import FeedFilters from "@/components/FeedFilters";
import PromptCard from "@/components/PromptCard";

const Index = () => {
  // Sample prompt data with correct props
  const samplePrompts = [
    {
      id: 1,
      title: "Creative Writing Assistant",
      content: "Act as a creative writing assistant. Help me develop compelling characters and plot structures for my novel. Focus on creating three-dimensional characters with clear motivations, flaws, and growth arcs. Provide detailed guidance on plot pacing, conflict resolution, and narrative voice...",
      author: "Sarah Chen",
      tags: ["Creative Writing", "Fiction", "Character Development"],
      category: "Writing",
      likes: 234,
      copies: 89,
      comments: 12,
      timeAgo: "2 hours ago"
    },
    {
      id: 2,
      title: "Code Review Expert",
      content: "You are an expert code reviewer with 10+ years of experience. Analyze the following code and provide detailed feedback on performance, security, maintainability, and best practices. Focus on identifying potential bugs, suggesting optimizations, and ensuring the code follows industry standards...",
      author: "Alex Kumar",
      tags: ["Programming", "Code Review", "Best Practices"],
      category: "Development",
      likes: 156,
      copies: 67,
      comments: 8,
      timeAgo: "4 hours ago"
    },
    {
      id: 3,
      title: "Business Strategy Consultant",
      content: "Act as a seasoned business strategy consultant with MBA-level expertise. Help me analyze market opportunities and develop comprehensive business strategies. Focus on competitive analysis, revenue model optimization, and growth planning. Provide actionable insights based on current market trends...",
      author: "Maria Rodriguez",
      tags: ["Business", "Strategy", "Market Analysis"],
      category: "Business",
      likes: 189,
      copies: 45,
      comments: 15,
      timeAgo: "6 hours ago"
    },
    {
      id: 4,
      title: "SEO Content Optimizer",
      content: "You are an SEO expert specializing in content optimization. Help me create content that ranks well in search engines while remaining engaging for readers. Focus on keyword integration, meta descriptions, header structure, and content flow that satisfies both search algorithms and user intent...",
      author: "David Park",
      tags: ["SEO", "Content Marketing", "Digital Strategy"],
      category: "Marketing",
      likes: 127,
      copies: 34,
      comments: 9,
      timeAgo: "8 hours ago"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <HeroSection />
        <VisionCards />
        <FounderNote />
        
        {/* Prompt Feed Section - Twitter/Reddit Style */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Trending Prompts</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Discover the most popular and effective prompts from our community
              </p>
            </div>

            <FeedFilters />
            
            {/* Vertical Feed Layout */}
            <div className="space-y-6 mt-8">
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
              <button className="glass-card px-8 py-3 text-foreground hover:bg-glass-medium transition-all duration-300 hover:shadow-glow">
                Load More Prompts
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
