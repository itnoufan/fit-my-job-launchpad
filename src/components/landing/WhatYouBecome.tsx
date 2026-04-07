import { Target, Monitor, Globe } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const roles = [
  {
    icon: Target,
    title: "HR Professional",
    desc: "Master recruitment, compliance & payroll",
    gradient: "icon-gradient-primary",
    color: "text-primary",
    num: "01",
  },
  {
    icon: Monitor,
    title: "Office Admin Expert",
    desc: "Excel, AI tools & business operations",
    gradient: "icon-gradient-accent",
    color: "text-accent",
    num: "02",
  },
  {
    icon: Globe,
    title: "UAE Job Ready",
    desc: "Skills aligned with Gulf employer needs",
    gradient: "icon-gradient-warm",
    color: "text-warm",
    num: "03",
  },
];

const WhatYouBecome = () => (
  <section className="section-padding bg-surface relative overflow-hidden">
    <div className="blob w-[400px] h-[400px] bg-primary -top-32 right-0 animate-blob" />

    <div className="container relative z-10 space-y-12">
      <ScrollReveal>
        <div className="text-center space-y-3">
          <p className="eyebrow">Career Outcomes</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            What You Will Become
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-6">
        {roles.map(({ icon: Icon, title, desc, gradient, color, num }, i) => (
          <ScrollReveal key={title} delay={i * 0.1}>
            <div className="relative bg-card rounded-2xl p-7 card-elevated card-hover h-full space-y-5 overflow-hidden card-gradient-border">
              <span className="watermark-number -top-2 right-4">{num}</span>
              <div className={`relative z-10 w-12 h-12 rounded-xl ${gradient} flex items-center justify-center`}>
                <Icon size={22} className={color} />
              </div>
              <h3 className="relative z-10 font-semibold text-lg text-foreground">{title}</h3>
              <p className="relative z-10 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhatYouBecome;
