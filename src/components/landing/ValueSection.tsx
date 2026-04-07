import { Wrench, Monitor, Globe, Users } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const values = [
  { icon: Wrench, title: "Practical Training", desc: "Real work, not theory", color: "text-primary", bg: "bg-primary/8" },
  { icon: Monitor, title: "Real Software", desc: "HRMS, Payroll, Excel, AI", color: "text-accent", bg: "bg-accent/8" },
  { icon: Globe, title: "Industry Exposure", desc: "India + UAE pathways", color: "text-warm", bg: "bg-warm/8" },
  { icon: Users, title: "Job Support", desc: "We help you get hired", color: "text-primary", bg: "bg-primary/8" },
];

const ValueSection = () => (
  <section className="section-padding bg-surface">
    <div className="container space-y-12">
      <ScrollReveal>
        <div className="text-center space-y-3">
          <p className="eyebrow">Why We're Different</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            What Sets Us Apart
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {values.map(({ icon: Icon, title, desc, color, bg }, i) => (
          <ScrollReveal key={title} delay={i * 0.08}>
            <div className="bg-card rounded-2xl p-6 card-elevated card-hover text-center space-y-4 h-full">
              <div className={`mx-auto w-12 h-12 rounded-xl ${bg} flex items-center justify-center`}>
                <Icon size={20} className={color} />
              </div>
              <h3 className="font-semibold text-sm md:text-base text-foreground">{title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground">{desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ValueSection;
