
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import VisionCards from "@/components/VisionCards";
import FounderNote from "@/components/FounderNote";
import FeedFilters from "@/components/FeedFilters";
import PromptCard from "@/components/PromptCard";

const Index = () => {
  // Sample prompt data
  const samplePrompts = [
    {
      id: 1,
      title: "Creative Writing Assistant",
      content: "Act as a creative writing assistant. Help me develop compelling characters and plot structures for my novel...",
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
      content: "You are an expert code reviewer. Analyze the following code and provide detailed feedback on...",
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
      content: "Act as a seasoned business strategy consultant. Help me analyze market opportunities and develop...",
      author: "Maria Rodriguez",
      tags: ["Business", "Strategy", "Market Analysis"],
      category: "Business",
      likes: 189,
      copies: 45,
      comments: 15,
      timeAgo: "6 hours ago"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <HeroSection />
        <VisionCards />
        
        {/* Prompt Feed Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Trending Prompts</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Discover the most popular and effective prompts from our community
              </p>
            </div>

            <FeedFilters />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
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
          </div>
        </section>
        
        <FounderNote />
      </main>
    </div>
  );
};

export default Index;
