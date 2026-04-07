import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import WHATSAPP_URL from "./whatsapp";

const FinalCTASection = () => (
  <section className="section-padding relative overflow-hidden bg-gradient-hero">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary glow-orb" />
    <div className="container max-w-xl text-center space-y-8 relative z-10">
      <ScrollReveal>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
          Your Career Won't Change<br />
          <span className="text-gradient">Unless You Do.</span>
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <p className="text-lg text-muted-foreground">
          Start now. Message us.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          <Button variant="whatsapp" size="xl" className="w-full sm:w-auto">
            <MessageCircle size={22} /> Chat on WhatsApp
          </Button>
        </a>
      </ScrollReveal>
    </div>
  </section>
);

export default FinalCTASection;
