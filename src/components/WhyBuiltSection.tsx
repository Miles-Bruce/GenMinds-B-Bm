import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const WhyBuiltSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const reasons = [
    "Prompt creators deserve real ownership and licensing control.",
    "Businesses need verified prompts with clear usage rights.",
    "Different regions require different access levels — that's where GEO comes in.",
    "We're designing the legal backbone of the prompt economy."
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm p-8 text-center transition-all duration-300 hover:border-primary/50 hover:bg-card/50"
        >
          <div className="flex items-center justify-center gap-3">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Why we built ThePromptSpace
            </h2>
            {isExpanded ? (
              <Minus className="w-6 h-6 text-primary" />
            ) : (
              <Plus className="w-6 h-6 text-primary" />
            )}
          </div>
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isExpanded ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="space-y-4">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="fade-in-up rounded-xl bg-card/50 backdrop-blur-sm border border-border/20 p-6 text-left"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <p className="text-lg text-foreground flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">•</span>
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBuiltSection;
