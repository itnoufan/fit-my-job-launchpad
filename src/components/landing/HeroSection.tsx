import { MessageCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import ScrollReveal from "./ScrollReveal";
import WHATSAPP_URL from "./whatsapp";

const badges = [
  { emoji: "🔥", text: "Job Support" },
  { emoji: "💼", text: "Practical Training" },
  { emoji: "🌍", text: "UAE Opportunities" },
];

const HeroSection = () => (
  <section className="relative bg-gradient-hero overflow-hidden min-h-screen flex items-center">
    <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-primary glow-orb" />
    <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-accent glow-orb" />
    <div className="absolute top-0 right-1/3 w-[300px] h-[300px] rounded-full bg-warm glow-orb" />

    <div className="container relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-8 max-w-lg">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 glass-light rounded-full px-4 py-2 text-xs font-medium text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Now Enrolling — Limited Seats
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-foreground">
              Get Job-Ready Skills.{" "}
              <span className="text-gradient">Get Hired.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              HR & Office Management training with real tools, real practice, and job support in India & UAE.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" size="xl" className="w-full sm:w-auto">
                <MessageCircle size={22} /> Chat on WhatsApp
              </Button>
            </a>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="flex flex-wrap gap-3">
              {badges.map(({ emoji, text }) => (
                <div key={text} className="glass-light rounded-full px-4 py-2 text-sm text-muted-foreground flex items-center gap-2">
                  <span>{emoji}</span> {text}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3} className="hidden lg:block">
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-cta rounded-3xl opacity-[0.06] blur-3xl" />
            <img
              src={heroImage}
              alt="Young professionals learning and working"
              width={1200}
              height={800}
              className="relative rounded-3xl shadow-2xl border border-border/50"
            />
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default HeroSection;
