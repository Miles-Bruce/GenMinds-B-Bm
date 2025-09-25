import { Button } from "@/components/ui/button";
import { Search, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Explore Prompts CTA */}
          <div className="rounded-2xl shadow-md p-6 text-center bg-card hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-foreground mb-2 font-sora">
                🔍 Explore Prompts
              </h3>
              <Button 
                size="lg"
                className="text-xl font-bold text-white bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg shadow hover:opacity-90 transition-all duration-300"
              >
                <Search className="w-5 h-5 mr-2" />
                🔍 Explore Prompts
              </Button>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Browse AI prompts across categories like art, writing, coding, and more. Save, remix, and share with the community.
            </p>
          </div>

          {/* Join Communities CTA */}
          <div className="rounded-2xl shadow-md p-6 text-center bg-card hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-foreground mb-2 font-sora">
                💬 Join Communities
              </h3>
              <Button 
                size="lg"
                className="text-xl font-bold text-white bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg shadow hover:opacity-90 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                💬 Join Communities
              </Button>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Enter group discussions to chat, learn, and collaborate with others on prompt design and AI workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;