import { MessageCircle, Phone } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20courses";

const FloatingButtons = () => (
  <>
    {/* WhatsApp floating */}
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-whatsapp text-whatsapp-foreground flex items-center justify-center shadow-xl hover:scale-110 transition-transform animate-pulse-glow"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
    {/* Mobile sticky CTA */}
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-background/90 backdrop-blur-xl border-t border-border/50 md:hidden">
      <div className="flex gap-2">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 h-12 rounded-xl bg-whatsapp text-whatsapp-foreground font-bold text-sm"
        >
          <MessageCircle size={18} /> Chat on WhatsApp
        </a>
        <a
          href="#lead-form"
          className="flex-1 flex items-center justify-center gap-2 h-12 rounded-xl bg-gradient-vibrant text-primary-foreground font-bold text-sm"
        >
          <Phone size={18} /> Book Now
        </a>
      </div>
    </div>
  </>
);

export default FloatingButtons;
