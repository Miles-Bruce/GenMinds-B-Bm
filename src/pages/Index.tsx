import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhyBuiltSection from "@/components/WhyBuiltSection";
import GEOSystemSection from "@/components/GEOSystemSection";
import RoadmapSection from "@/components/RoadmapSection";
import VisionSection from "@/components/VisionSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <HeroSection />
        <WhyBuiltSection />
        <GEOSystemSection />
        <RoadmapSection />
        <VisionSection />
        
        {/* Early Access Section */}
        <section id="early-access" className="py-20 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="rounded-2xl bg-card/50 backdrop-blur-sm border border-border/20 p-8 shadow-xl">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Join Early Access
              </h2>
              <p className="text-muted-foreground mb-6">
                Be among the first 1,000 creators to shape the future of prompt licensing.
              </p>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-6 text-lg hover:opacity-90 transition-all duration-300 shadow-glow hover:scale-105 font-semibold"
              >
                Get Early Access →
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
