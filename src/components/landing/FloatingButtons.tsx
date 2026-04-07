import { MessageCircle } from "lucide-react";
import WHATSAPP_URL from "./whatsapp";

const FloatingButtons = () => (
  <>
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 md:bottom-8 right-5 z-50 w-14 h-14 rounded-full bg-whatsapp text-whatsapp-foreground flex items-center justify-center shadow-lg shadow-whatsapp/20 animate-pulse-glow hover:scale-105 transition-transform duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>

    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden safe-area-bottom">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full h-14 bg-whatsapp text-whatsapp-foreground font-semibold text-base shadow-[0_-4px_20px_-4px_hsl(142_62%_38%/0.2)]"
      >
        <MessageCircle size={20} /> Chat on WhatsApp
      </a>
    </div>
  </>
);

export default FloatingButtons;
