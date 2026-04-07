import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import WHATSAPP_URL from "./whatsapp";

const FinalCTASection = () => (
  <section className="section-padding relative overflow-hidden">
    {/* Decorative orbs */}
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
          <Button variant="whatsapp" size="xl" className="w-full sm:w-auto">
            <MessageCircle size={22} /> Chat on WhatsApp
          </Button>
        </a>
      </ScrollReveal>
    </div>
  </section>
);

export default FinalCTASection;
