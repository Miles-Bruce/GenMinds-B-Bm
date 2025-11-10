import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Users } from "lucide-react";

const Groups = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <Users className="w-16 h-16 text-primary mx-auto mb-6 animate-float" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Join Communities
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Connect with creator-led groups to collaborate and learn together.
          </p>
          <div className="bg-card/30 backdrop-blur-sm border border-border/20 rounded-2xl p-12">
            <p className="text-muted-foreground text-lg">
              Coming soon — join early access to be notified when we launch.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Groups;
