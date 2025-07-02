import { Search, Plus, User, MessageCircle, Bookmark, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-glass-border/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center float-animation">
              <span className="text-xl font-bold text-primary-foreground">T</span>
            </div>
            <h1 className="text-2xl font-bold gradient-text">ThePromptSpace</h1>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search prompts, creators, or topics..."
                className="w-full bg-glass-medium backdrop-blur-md border border-glass-border rounded-full py-3 pl-12 pr-4 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              />
            </div>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-foreground hover:bg-glass-medium">
              <Home className="w-5 h-5 mr-2" />
              Feed
            </Button>
            
            <Button variant="ghost" size="sm" className="text-foreground hover:bg-glass-medium">
              <MessageCircle className="w-5 h-5 mr-2" />
              Groups
            </Button>

            {isLoggedIn ? (
              <>
                <Button variant="ghost" size="sm" className="text-foreground hover:bg-glass-medium">
                  <Bookmark className="w-5 h-5 mr-2" />
                  Saved
                </Button>
                
                <Button 
                  variant="default" 
                  size="sm" 
                  className="gradient-primary text-primary-foreground hover:opacity-90 transition-opacity"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  Create Prompt
                </Button>
                
                <Button variant="ghost" size="sm" className="text-foreground hover:bg-glass-medium">
                  <User className="w-5 h-5" />
                </Button>
              </>
            ) : (
              <div className="flex space-x-2">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-foreground hover:bg-glass-medium"
                  onClick={() => setIsLoggedIn(true)}
                >
                  Sign In
                </Button>
                <Button 
                  variant="default" 
                  size="sm" 
                  className="gradient-primary text-primary-foreground hover:opacity-90"
                  onClick={() => setIsLoggedIn(true)}
                >
                  Join ThePromptSpace
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;