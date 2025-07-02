
import { Mail, Heart } from "lucide-react";

const FounderNote = () => {
  return (
    <section className="py-16 px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        <div className="glass-card p-8 md:p-12 fade-in-up">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-primary" />
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mb-6 text-foreground">
            A Note from the Founder
          </h3>
          
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>
              I'm a solo founder building ThePromptSpace without prior tech experience. 
              I'm currently seeking co-founders, mentors, and backers who believe in building 
              the foundation of future AI collaboration.
            </p>
            
            <p className="text-primary font-medium">
              Let's build something valuable — together. Thank you.
            </p>
          </div>
          
          <div className="mt-8 pt-6 border-t border-glass-border">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span>contact@thepromptspace.com | thepromptspace@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderNote;
