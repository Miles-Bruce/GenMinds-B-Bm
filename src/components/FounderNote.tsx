
import { Mail, Heart } from "lucide-react";

const FounderNote = () => {
  return (
    <section className="py-16 px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        <div className="glass-card p-8 md:p-12 fade-in-up hover:scale-105 transition-all duration-300">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-primary animate-pulse" />
            </div>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-sora font-semibold mb-6 text-foreground">
            🙋‍♂️ A Note from the Founder
          </h3>
          
          <div className="text-muted-foreground leading-relaxed space-y-4 font-inter">
            <p className="text-lg">
              I'm a solo founder of ThePromptSpace with no prior tech background, 
              building this entire platform alone.
            </p>
            
            <p className="text-lg text-primary font-medium">
              I'm actively looking for co-founders, mentors, and investors to build 
              something impactful for the future of AI creation.
            </p>
          </div>
          
          <div className="mt-8 pt-6 border-t border-glass-border">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground font-inter">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>📬 Contact:</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <span>contact@thepromptspace.com</span>
                <span className="hidden sm:inline">/</span>
                <span>thepromptspace@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderNote;
