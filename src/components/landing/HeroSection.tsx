import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, ShieldCheck, Wrench, Award } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => (
  <section className="relative bg-hero text-hero-foreground overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-hero via-hero/95 to-hero/80" />
    <div className="container relative z-10 section-padding">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6 max-w-xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Build a High-Paying Career in HR & Office Management —{" "}
            <span className="text-gradient">Even If You're Starting From Zero</span>
          </h1>
          <p className="text-lg md:text-xl text-hero-foreground/80">
            Get job-ready with practical training, real tools, and placement support in India & UAE.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" className="text-base animate-pulse-glow">
              <Phone className="mr-2" size={20} /> Book Free Career Consultation
            </Button>
            <Button variant="whatsapp" size="lg" className="text-base">
              <MessageCircle className="mr-2" size={20} /> Chat on WhatsApp
            </Button>
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            {[
              { icon: ShieldCheck, text: "100% Job Support" },
              { icon: Wrench, text: "Practical Training" },
              { icon: Award, text: "Industry Certifications" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 bg-hero-foreground/10 rounded-full px-4 py-2 text-sm">
                <Icon size={16} className="text-secondary" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden lg:block">
          <img
            src={heroImage}
            alt="Young professionals learning at Fit My Job Academy"
            width={1024}
            height={768}
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
