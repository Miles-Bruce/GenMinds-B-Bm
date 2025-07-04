import { Shield, Award, GitBranch } from "lucide-react";

const BuildingFuture = () => {
  const features = [
    {
      icon: Shield,
      emoji: "🔐",
      title: "Prompt Licensing & Originality Engine",
      description: "We're developing a powerful system where every prompt you create gets an official license. Using LLM-based scanning, no duplicate or stolen prompt makes it through. If someone tries to post a copied idea, the original creator gets full credit. This empowers ethical creativity and rewards authentic contributors."
    },
    {
      icon: Award,
      emoji: "🏆", 
      title: "AI Portfolio + Badge Workflow",
      description: "We're building an intelligent profile system where prompt engineering work turns into a personal AI portfolio. Earn badges, showcase use cases, and highlight your impact. Collaborate, get hired, or join AI teams — all from your profile."
    },
    {
      icon: GitBranch,
      emoji: "🌐",
      title: "The GitHub for Prompts", 
      description: "ThePromptSpace isn't just another prompt site — it's the infrastructure of prompt engineering. Like GitHub transformed code collaboration, we're building the go-to space for versioned, licensed, credited AI prompts. This is where the future of prompt engineering lives."
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sora font-bold mb-6">
            <span className="gradient-text">🛠️ Building the Future</span>
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto">
            We're not just creating another prompt library — we're building the infrastructure that will power the future of AI collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="glass-card p-8 hover:scale-105 transition-all duration-300 fade-in-up interactive-card"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center justify-center w-16 h-16 gradient-primary rounded-full mb-6 mx-auto">
                  <span className="text-3xl">{feature.emoji}</span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-sora font-semibold mb-4 text-center text-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed font-inter text-center">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BuildingFuture;