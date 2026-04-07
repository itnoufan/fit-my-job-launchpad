import { Target, Monitor, Globe } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const roles = [
  {
    icon: Target,
    emoji: "🎯",
    title: "HR Professional",
    desc: "Master recruitment, compliance & payroll",
    gradient: "from-primary/10 to-primary/5",
  },
  {
    icon: Monitor,
    emoji: "💻",
    title: "Office Admin Expert",
    desc: "Excel, AI tools & business operations",
    gradient: "from-accent/10 to-accent/5",
  },
  {
    icon: Globe,
    emoji: "🌍",
    title: "UAE Job Ready",
    desc: "Skills aligned with Gulf employer needs",
    gradient: "from-warm/10 to-warm/5",
  },
];

const WhatYouBecome = () => (
  <section className="section-padding bg-surface">
    <div className="container space-y-12">
      <ScrollReveal>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-foreground">
          What You Will <span className="text-gradient">Become</span>
        </h2>
      </ScrollReveal>
      <div className="grid md:grid-cols-3 gap-5">
        {roles.map(({ icon: Icon, emoji, title, desc, gradient }, i) => (
          <ScrollReveal key={title} delay={i * 0.12}>
            <div className={`relative bg-gradient-to-br ${gradient} rounded-3xl p-8 card-elevated card-hover text-center space-y-4 h-full`}>
              <div className="text-5xl">{emoji}</div>
              <div className="mx-auto w-14 h-14 rounded-2xl bg-card flex items-center justify-center shadow-sm">
                <Icon size={26} className="text-primary" />
              </div>
              <h3 className="font-bold text-lg text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhatYouBecome;
