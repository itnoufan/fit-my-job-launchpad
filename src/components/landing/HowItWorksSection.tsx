import { UserPlus, BookOpen, Briefcase, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  { num: "01", title: "Join Course", desc: "Pick your path", icon: UserPlus, emoji: "🚀" },
  { num: "02", title: "Learn with Practice", desc: "Hands-on training", icon: BookOpen, emoji: "📚" },
  { num: "03", title: "Get Job Support", desc: "Resume + interview + job", icon: Briefcase, emoji: "💼" },
];

const HowItWorksSection = () => (
  <section className="section-padding bg-gradient-warm" id="how-it-works">
    <div className="container space-y-12">
      <ScrollReveal>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-foreground">
          Simple <span className="text-gradient">3-Step</span> Process
        </h2>
      </ScrollReveal>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2 max-w-4xl mx-auto">
        {steps.map(({ num, title, desc, icon: Icon, emoji }, i) => (
          <ScrollReveal key={num} delay={i * 0.15} className="w-full md:w-auto">
            <div className="flex items-center gap-2 md:gap-4">
              <div className="bg-card rounded-2xl p-6 text-center space-y-3 card-elevated card-hover flex-1 md:w-56">
                <div className="text-4xl">{emoji}</div>
                <div className="mx-auto w-12 h-12 rounded-2xl bg-gradient-cta flex items-center justify-center">
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="font-bold text-lg text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight size={24} className="text-primary/30 hidden md:block shrink-0" />
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
