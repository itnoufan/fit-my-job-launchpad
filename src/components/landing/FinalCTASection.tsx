import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const FinalCTASection = () => (
  <section className="bg-hero text-hero-foreground section-padding">
    <div className="container max-w-2xl text-center space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold">
        Limited Seats. <span className="text-gradient">High Demand Courses.</span>
      </h2>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="hero" size="lg" className="text-base">
          <Phone className="mr-2" size={20} /> Book Free Consultation
        </Button>
        <Button variant="whatsapp" size="lg" className="text-base">
          <MessageCircle className="mr-2" size={20} /> WhatsApp Now
        </Button>
      </div>
    </div>
  </section>
);

export default FinalCTASection;
