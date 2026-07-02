import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const WHATSAPP_LINK = "https://wa.link/reddyanna_";

const navItems = [
  { label: "Home", href: "/", isRoute: true },
  { label: "Games", href: "/games", isRoute: true },
  { label: "Features", href: "/features", isRoute: true },
  { label: "About", href: "/about", isRoute: true },
  { label: "Blog", href: "/blog", isRoute: true },
  { label: "FAQ", href: "/faq", isRoute: true },
  { label: "Contact", href: "/contact", isRoute: true },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-heading font-bold text-gold-gradient tracking-wider">
            👑 mahadev777
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="border-primary/50 text-primary hover:bg-primary/10">
              Login
            </Button>
          </a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="bg-gold-gradient text-primary-foreground font-semibold hover:opacity-90">
              Registration
            </Button>
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-card border-t border-border px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="block text-sm font-medium text-foreground/70 hover:text-primary py-2"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="block">
            <Button className="w-full bg-gold-gradient text-primary-foreground font-semibold">
              Get Your ID Now
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
