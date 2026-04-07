import { Wrench, Monitor, Globe, Users } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const values = [
  { icon: Wrench, title: "Practical Training", desc: "Real work, not theory", gradient: "icon-gradient-primary", color: "text-primary", num: "01" },
  { icon: Monitor, title: "Real Software", desc: "HRMS, Payroll, Excel, AI", gradient: "icon-gradient-accent", color: "text-accent", num: "02" },
  { icon: Globe, title: "Industry Exposure", desc: "India + UAE pathways", gradient: "icon-gradient-warm", color: "text-warm", num: "03" },
  { icon: Users, title: "Job Support", desc: "We help you get hired", gradient: "icon-gradient-primary", color: "text-primary", num: "04" },
];

const ValueSection = () => (
  <section className="section-padding bg-surface relative overflow-hidden">
    <div className="blob w-[350px] h-[350px] bg-accent -top-20 left-0 animate-blob" />

    <div className="container relative z-10 space-y-12">
      <ScrollReveal>
        <div className="text-center space-y-3">
          <p className="eyebrow">Why We're Different</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            What Sets Us Apart
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {values.map(({ icon: Icon, title, desc, gradient, color, num }, i) => (
          <ScrollReveal key={title} delay={i * 0.08}>
            <div className="relative bg-card rounded-2xl p-6 card-elevated card-hover text-center space-y-4 h-full overflow-hidden card-gradient-border">
              <span className="watermark-number top-1 right-3 text-4xl md:text-5xl">{num}</span>
              <div className={`relative z-10 mx-auto w-12 h-12 rounded-xl ${gradient} flex items-center justify-center`}>
                <Icon size={20} className={color} />
              </div>
              <h3 className="relative z-10 font-semibold text-sm md:text-base text-foreground">{title}</h3>
              <p className="relative z-10 text-xs md:text-sm text-muted-foreground">{desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ValueSection;
