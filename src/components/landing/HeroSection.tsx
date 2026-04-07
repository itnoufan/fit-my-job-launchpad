import { MessageCircle, Award, Briefcase, Globe, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import ScrollReveal from "./ScrollReveal";
import WHATSAPP_URL from "./whatsapp";

const badges = [
  { icon: Briefcase, text: "Job Support" },
  { icon: Award, text: "UK Certified" },
  { icon: Globe, text: "UAE Opportunities" },
];

const stats = [
  { value: "500+", label: "Students", icon: Users },
  { value: "4.9", label: "Rating", icon: Star },
  { value: "12+", label: "Countries", icon: Globe },
];

const HeroSection = () => (
  <section className="relative bg-gradient-hero overflow-hidden min-h-screen flex items-center">
    {/* Decorative blobs */}
    <div className="blob w-[500px] h-[500px] bg-primary -top-40 -left-40 animate-blob" />
    <div className="blob w-[400px] h-[400px] bg-warm top-20 right-0 animate-blob" style={{ animationDelay: '4s' }} />
    <div className="blob w-[300px] h-[300px] bg-accent bottom-0 left-1/3 animate-blob" style={{ animationDelay: '8s' }} />

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

          <ScrollReveal delay={0.35}>
            <div className="flex flex-wrap gap-3">
              {badges.map(({ icon: Icon, text }) => (
                <div key={text} className="glass-light rounded-full px-4 py-2 text-sm text-muted-foreground flex items-center gap-2">
                  <Icon size={14} className="text-primary" /> {text}
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="flex items-center gap-6 pt-2">
              {stats.map(({ value, label, icon: Icon }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon size={14} className="text-primary/60" />
                  <div>
                    <p className="text-sm font-bold text-foreground">{value}</p>
                    <p className="text-[11px] text-muted-foreground">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3} className="hidden lg:block">
          <div className="relative animate-float">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-primary/[0.06] via-transparent to-accent/[0.04] blur-2xl" />
            <img
              src={heroImage}
              alt="Young professionals learning and working"
              width={1200}
              height={800}
              className="relative rounded-3xl shadow-xl border border-border/50"
            />
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default HeroSection;
