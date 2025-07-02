
import { Shield, Trophy, Globe } from "lucide-react";

const VisionCards = () => {
  const visionCards = [
    {
      title: "🛡️ Prompt Licensing & Originality Engine",
      description: "We're developing a powerful system where every prompt you create gets an official license. Using LLM-based scanning, no duplicate or stolen prompt makes it through. If someone tries to post a copied idea, the original creator gets full credit. This empowers ethical creativity and rewards authentic contributors.",
      badge: "🚧 Coming Soon",
      icon: Shield,
      delay: "0s"
    },
    {
      title: "🏆 AI Portfolio + Badge Workflow", 
      description: "We're building an intelligent profile system where your prompt engineering work turns into a personal AI portfolio. Earn badges, showcase use cases, and highlight the real impact of your prompts. Collaborate, get hired, or join AI teams — all from your profile.",
      badge: "🚧 Coming Soon",
      icon: Trophy,
      delay: "0.2s"
    },
    {
      title: "🌐 The GitHub for Prompts",
      description: "ThePromptSpace isn't just another prompt site — it's the infrastructure of prompt engineering. Like GitHub transformed code collaboration, we're building the go-to space for versioned, licensed, credited, and community-reviewed AI prompts. This is where the future of prompt engineering lives.",
      badge: "🚧 Coming Soon", 
      icon: Globe,
      delay: "0.4s"
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Building the Future</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just creating another platform — we're building the infrastructure for the next generation of AI collaboration.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {visionCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div 
                key={index}
                className="glass-card p-8 text-center interactive-card group"
                style={{ animationDelay: card.delay }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="inline-block px-3 py-1 bg-accent/20 rounded-full text-sm text-accent font-medium">
                    {card.badge}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {card.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VisionCards;
