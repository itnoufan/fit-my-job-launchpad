import { UserPlus, BookOpen, Briefcase } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  { num: "01", title: "Join a Course", desc: "Pick the path that fits your career goals", icon: UserPlus },
  { num: "02", title: "Learn by Doing", desc: "Hands-on training with real software & tools", icon: BookOpen },
  { num: "03", title: "Get Hired", desc: "Resume prep, interview coaching & job placement", icon: Briefcase },
];

const HowItWorksSection = () => (
  <section className="section-padding bg-gradient-warm relative overflow-hidden" id="how-it-works">
    <div className="blob w-[400px] h-[400px] bg-warm -bottom-32 right-0 animate-blob" />

    <div className="container relative z-10 max-w-3xl space-y-12">
      <ScrollReveal>
        <div className="text-center space-y-3">
          <p className="eyebrow">How It Works</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Three Steps to Your New Career
          </h2>
        </div>
      </ScrollReveal>

      <div className="relative">
        {/* Gradient timeline line */}
        <div className="hidden md:block absolute left-[27px] top-8 bottom-8 w-px bg-gradient-to-b from-primary/30 via-accent/20 to-warm/30" />

        <div className="space-y-6">
          {steps.map(({ num, title, desc, icon: Icon }, i) => (
            <ScrollReveal key={num} delay={i * 0.12}>
              <div className="flex gap-5 md:gap-7 items-start">
                {/* Number circle with gradient */}
                <div className="relative z-10 shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/15 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">{num}</span>
                </div>
                {/* Content card */}
                <div className="flex-1 bg-card rounded-2xl p-6 card-elevated card-hover card-gradient-border">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg icon-gradient-primary flex items-center justify-center">
                      <Icon size={16} className="text-primary" />
                    </div>
                    <h3 className="font-semibold text-base text-foreground">{title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed ml-11">{desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
