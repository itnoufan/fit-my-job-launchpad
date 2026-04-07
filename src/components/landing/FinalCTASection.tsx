import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const FinalCTASection = () => (
  <section className="bg-gradient-hero section-padding">
    <div className="container max-w-2xl text-center space-y-8">
      <ScrollReveal>
        <h2 className="text-2xl md:text-4xl font-extrabold text-primary-foreground">
          Limited Seats. <span className="text-gradient">High Demand Courses.</span>
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.15}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="gradient" size="xl">
            <Phone size={20} /> Book Free Consultation
          </Button>
          <Button variant="whatsapp" size="lg">
            <MessageCircle size={20} /> WhatsApp Now
          </Button>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default FinalCTASection;
