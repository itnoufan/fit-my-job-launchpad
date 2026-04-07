import { Target, Monitor, Globe } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const roles = [
  {
    icon: Target,
    title: "HR Professional",
    desc: "Master recruitment, compliance & payroll",
    color: "text-primary",
    bg: "bg-primary/8",
  },
  {
    icon: Monitor,
    title: "Office Admin Expert",
    desc: "Excel, AI tools & business operations",
    color: "text-accent",
    bg: "bg-accent/8",
  },
  {
    icon: Globe,
    title: "UAE Job Ready",
    desc: "Skills aligned with Gulf employer needs",
    color: "text-warm",
    bg: "bg-warm/8",
  },
];

const WhatYouBecome = () => (
  <section className="section-padding bg-surface">
    <div className="container space-y-12">
      <ScrollReveal>
        <div className="text-center space-y-3">
          <p className="eyebrow">Career Outcomes</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            What You Will Become
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-6">
        {roles.map(({ icon: Icon, title, desc, color, bg }, i) => (
          <ScrollReveal key={title} delay={i * 0.1}>
            <div className="bg-card rounded-2xl p-7 card-elevated card-hover h-full space-y-5">
              <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center`}>
                <Icon size={22} className={color} />
              </div>
              <h3 className="font-semibold text-lg text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhatYouBecome;
