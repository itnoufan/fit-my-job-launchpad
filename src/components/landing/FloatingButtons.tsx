import { MessageCircle } from "lucide-react";
import WHATSAPP_URL from "./whatsapp";

const FloatingButtons = () => (
  <>
    {/* Floating WhatsApp with radar-ping rings */}
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 md:bottom-8 right-5 z-50 w-14 h-14 rounded-full bg-whatsapp text-whatsapp-foreground flex items-center justify-center shadow-lg shadow-whatsapp/30 hover:scale-110 transition-transform duration-300 animate-bounce-in"
      aria-label="Chat on WhatsApp"
    >
      {/* Radar ring 1 */}
      <span
        className="absolute inset-0 rounded-full bg-whatsapp/30"
        style={{ animation: "radarPing 2s cubic-bezier(0,0,0.2,1) infinite" }}
      />
      {/* Radar ring 2 */}
      <span
        className="absolute inset-0 rounded-full bg-whatsapp/20"
        style={{ animation: "radarPing2 2s cubic-bezier(0,0,0.2,1) infinite 0.6s" }}
      />
      <MessageCircle size={28} className="relative z-10" />
    </a>

    {/* Mobile bottom bar with shimmer */}
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden safe-area-bottom">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center gap-2 w-full h-14 bg-whatsapp text-whatsapp-foreground font-bold text-base shadow-[0_-4px_20px_-4px_hsl(142_62%_38%/0.3)] overflow-hidden"
      >
        {/* Shimmer overlay */}
        <span
          className="absolute top-0 h-full w-[30%] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none"
          style={{ animation: "barShimmer 2.5s ease-in-out infinite" }}
        />
        <MessageCircle size={20} className="relative z-10" />
        <span className="relative z-10">Chat on WhatsApp</span>
      </a>
    </div>
  </>
);

export default FloatingButtons;
