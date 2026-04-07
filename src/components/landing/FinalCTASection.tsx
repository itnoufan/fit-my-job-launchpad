import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import WHATSAPP_URL from "./whatsapp";

const FinalCTASection = () => (
  <section className="section-padding bg-surface">
    <div className="container max-w-xl text-center space-y-8">
      <ScrollReveal>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
          Your Career Won't Change Unless You Do
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
