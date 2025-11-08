import { Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const links = [
    { label: "Founder Story", url: "/founder" },
    { label: "Contact", url: "/contact" },
    { label: "Privacy", url: "/privacy" },
    { label: "Terms", url: "/terms" }
  ];

  const social = [
    { 
      icon: Linkedin, 
      url: "https://linkedin.com/company/thepromptspace",
      label: "LinkedIn"
    },
    { 
      icon: Twitter, 
      url: "https://x.com/thepromptspace",
      label: "Twitter"
    },
    { 
      icon: Instagram, 
      url: "https://instagram.com/thepromptspace",
      label: "Instagram"
    }
  ];

  return (
    <footer className="bg-background/95 backdrop-blur-sm border-t border-border/20 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Lines */}
        <div className="mb-6 space-y-2">
          <p className="text-sm text-muted-foreground">
            Built by a solo founder — backed by community.
          </p>
          <p className="text-sm text-muted-foreground">
            Powered by ChatGPT, Supabase, and Vercel.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4">
          {social.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="p-3 rounded-full bg-card/50 border border-border/20 hover:border-primary/50 hover:bg-card transition-all duration-300 hover:scale-110"
              >
                <Icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            );
          })}
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-border/20">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} ThePromptSpace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
