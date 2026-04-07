import { Button } from "@/components/ui/button";
import { MessageCircle, Shield, Clock, Ban, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import WHATSAPP_URL from "./whatsapp";

const trustItems = [
  { icon: Shield, text: "100% Free Consultation" },
  { icon: Ban, text: "No Spam" },
  { icon: Clock, text: "Reply in 5 min" },
];

const FinalCTASection = () => (
  <section className="section-padding relative overflow-hidden">
    <div className="blob w-[500px] h-[500px] bg-primary top-0 left-1/4 animate-blob opacity-[0.08]" />
    <div className="blob w-[300px] h-[300px] bg-warm -bottom-20 right-0 animate-blob opacity-[0.06]" style={{ animationDelay: '5s' }} />

    <div className="container relative z-10 max-w-xl text-center space-y-8">
      <ScrollReveal>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
          Your Career Won't Change Unless{" "}
          <span className="text-gradient">You Do</span>
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <p className="text-muted-foreground text-lg">
          Get instant guidance — message us now.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.15}>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          <Button variant="whatsapp" size="xl" className="group relative w-full sm:w-auto overflow-hidden shadow-[0_4px_24px_-4px_hsl(142_62%_38%/0.4)]">
            <span
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.3) 50%, transparent 60%)",
                animation: "shimmer 3s ease-in-out infinite",
              }}
            />
            <MessageCircle size={22} className="relative z-10" />
            <span className="relative z-10">Chat on WhatsApp</span>
            <ArrowRight size={18} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </a>
      </ScrollReveal>

      {/* Trust bar */}
      <ScrollReveal delay={0.2}>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          {trustItems.map(({ icon: Icon, text }, i) => (
            <span key={text} className="trust-badge">
              <Icon size={14} className="text-primary/60" />
              <span>{text}</span>
              {i < trustItems.length - 1 && <span className="hidden sm:inline ml-3 text-border">|</span>}
            </span>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default FinalCTASection;
