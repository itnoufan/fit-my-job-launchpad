import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X } from "lucide-react";
import WHATSAPP_URL from "./whatsapp";
import logo from "@/assets/logo.png";

const StickyHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-2xl shadow-sm border-b border-border/40"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-[4.5rem]">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Fit My Job Academy" className="h-10 md:h-12 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {["Courses", "Why Us", "How It Works"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/ /g, "-")}`}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {l}
            </a>
          ))}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="whatsapp" size="sm" className="relative">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <MessageCircle size={16} /> WhatsApp Us
            </Button>
          </a>
        </nav>

        <button
          className="md:hidden p-2 rounded-xl text-foreground transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-2xl border-t border-border/40">
          <div className="container py-6 space-y-4">
            {["Courses", "Why Us", "How It Works"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(/ /g, "-")}`}
                className="block text-base font-medium text-foreground py-2"
                onClick={() => setMobileOpen(false)}
              >
                {l}
              </a>
            ))}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block">
              <Button variant="whatsapp" className="w-full" size="lg">
                <MessageCircle size={18} /> Chat on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default StickyHeader;
