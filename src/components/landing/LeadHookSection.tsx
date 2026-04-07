import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import WHATSAPP_URL from "./whatsapp";

const LeadHookSection = () => (
  <section className="section-padding">
    <div className="container max-w-lg text-center space-y-6">
      <ScrollReveal>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
          Not Sure Which Course <span className="text-gradient">Is Right?</span>
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Chat with us on WhatsApp and get a free career direction instantly.
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

export default LeadHookSection;
