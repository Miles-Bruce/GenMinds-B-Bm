
import { useState } from "react";
import { Menu, X, Search, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-glass-medium backdrop-blur-xl border-b border-glass-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative group">
              <img 
                src="/lovable-uploads/ebf12e77-6e0a-4068-94be-f4339f1e3341.png" 
                alt="ThePromptSpace" 
                className="w-10 h-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                style={{ filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.3))' }}
              />
            </div>
            <span className="text-xl font-bold gradient-text hidden sm:block">
              ThePromptSpace
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Explore
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Community
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Create
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search className="w-5 h-5" />
            </Button>
            
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Bell className="w-5 h-5" />
            </Button>

            <Button variant="outline" className="hidden sm:flex">
              <User className="w-4 h-4 mr-2" />
              Sign In
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-glass-border bg-glass-strong backdrop-blur-xl">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Explore
              </a>
              <a href="#" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Community
              </a>
              <a href="#" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Create
              </a>
              <a href="#" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                About
              </a>
              <div className="pt-2 border-t border-glass-border">
                <Button variant="outline" className="w-full">
                  <User className="w-4 h-4 mr-2" />
                  Sign In
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
