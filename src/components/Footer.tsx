import { Link } from "react-router-dom";
import { Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card/80 backdrop-blur-sm border-t border-border/20 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-6">
          <p className="text-sm text-muted-foreground mb-2">
            Built by Navakishor Sarma — powered by community.
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ThePromptSpace. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
          <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/vision" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Vision Paper
          </Link>
          <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Privacy
          </Link>
          <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Terms
          </Link>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a 
            href="https://linkedin.com/company/thepromptspace" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="https://x.com/thepromptspace" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a 
            href="https://instagram.com/thepromptspace" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
