import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { UserPlus } from "lucide-react";

const SignUp = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <UserPlus className="w-16 h-16 text-primary mx-auto mb-6 animate-float" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Join ThePromptSpace
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Be part of the first 1,000 creators shaping the future of prompts.
          </p>
          <div className="bg-card/30 backdrop-blur-sm border border-border/20 rounded-2xl p-12">
            <p className="text-muted-foreground text-lg">
              Sign up coming soon — we'll notify early access members when ready.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SignUp;
