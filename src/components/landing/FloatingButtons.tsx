import { MessageCircle, Phone } from "lucide-react";

const FloatingButtons = () => (
  <>
    {/* Sticky WhatsApp */}
    <a
      href="https://wa.me/91XXXXXXXXXX"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-whatsapp text-whatsapp-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-pulse-glow"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
    {/* Floating Book Now - mobile */}
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-hero/95 backdrop-blur-sm md:hidden">
      <a
        href="#lead-form"
        className="flex items-center justify-center gap-2 w-full h-12 rounded-lg bg-secondary text-secondary-foreground font-semibold text-base"
      >
        <Phone size={18} /> Book Free Consultation
      </a>
    </div>
  </>
);

export default FloatingButtons;
