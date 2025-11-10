import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import QuickLinks from "@/components/QuickLinks";
import ExpandableQA from "@/components/ExpandableQA";
import GEOSystemSection from "@/components/GEOSystemSection";
import RoadmapSection from "@/components/RoadmapSection";
import FeedbackForm from "@/components/FeedbackForm";
import Footer from "@/components/Footer";

const Index = () => {
  const questions = [
    {
      q: "Why does ThePromptSpace exist?",
      a: "To create infrastructure so prompts become verifiable digital assets — discoverable, attributable, and license-ready."
    },
    {
      q: "What is GEO (General Engine Optimization)?",
      a: "An AI engine that optimizes prompt discoverability, ranks prompts by performance signals, and improves relevance across searches and categories."
    },
    {
      q: "How will creators earn?",
      a: "Today: exposure and community. Soon: licensing, royalties, and direct sales through integrated payment flows."
    },
    {
      q: "When will payments & licensing launch?",
      a: "Planned Q1–Q2 2026. Early access members get priority on beta features and payouts."
    },
    {
      q: "How do I join a community?",
      a: "Click 'Join Communities' above to explore groups or create your own and invite collaborators."
    },
    {
      q: "Is my prompt ownership protected?",
      a: "We're building provenance & verification features into the roadmap. Sign up to help shape how this works."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <HeroSection />
        <QuickLinks />
        <ExpandableQA 
          labelCollapsed="Why we built ThePromptSpace ▽"
          labelExpanded="Why we built ThePromptSpace △"
          intro="Tap any question to reveal a short answer. Ask your own question at the bottom."
          questions={questions}
          initialVisible={3}
        />
        <GEOSystemSection />
        <RoadmapSection />
        <FeedbackForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
