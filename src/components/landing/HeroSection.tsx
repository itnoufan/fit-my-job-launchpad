import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, ShieldCheck, Wrench, Award } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import ScrollReveal from "./ScrollReveal";

const badges = [
  { icon: ShieldCheck, text: "100% Job Support" },
  { icon: Wrench, text: "Practical Training" },
  { icon: Award, text: "Industry Certifications" },
];

const HeroSection = () => (
  <section className="relative bg-gradient-hero overflow-hidden min-h-[90vh] flex items-center">
    {/* Decorative orbs */}
    <div className="absolute top-20 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-vibrant opacity-10 blur-3xl" />
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl" />

    <div className="container relative z-10 section-padding pt-28">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 max-w-xl">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs font-medium text-primary-foreground/80">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              Now Enrolling — Limited Seats
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.1] tracking-tight text-primary-foreground">
              Build a High-Paying Career in HR & Office Management —{" "}
              <span className="text-gradient">Even If You're Starting From Zero</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-lg md:text-xl text-primary-foreground/65 leading-relaxed">
              Get job-ready with practical training, real tools, and placement support in India & UAE.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gradient" size="xl">
                <Phone size={20} /> Book Free Career Consultation
              </Button>
              <Button variant="whatsapp" size="lg">
                <MessageCircle size={20} /> Chat on WhatsApp
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="flex flex-wrap gap-3 pt-2">
              {badges.map(({ icon: Icon, text }) => (
                <div key={text} className="glass rounded-full px-4 py-2 flex items-center gap-2 text-sm text-primary-foreground/80">
                  <Icon size={15} className="text-accent" />
                  {text}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2} className="hidden lg:block">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-vibrant rounded-3xl opacity-20 blur-2xl" />
            <img
              src={heroImage}
              alt="Young professionals learning at the academy"
              width={1152}
              height={768}
              className="relative rounded-2xl shadow-2xl"
            />
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default HeroSection;
