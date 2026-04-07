import { Wrench, Monitor, Globe, Users } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const values = [
  { icon: Wrench, title: "Practical Training", desc: "Not theory. Real work.", emoji: "🔧" },
  { icon: Monitor, title: "Real Software", desc: "HRMS, Payroll, Excel, AI", emoji: "💻" },
  { icon: Globe, title: "Industry Exposure", desc: "India + UAE pathways", emoji: "🌍" },
  { icon: Users, title: "Job Support", desc: "We help you get hired", emoji: "🤝" },
];

const ValueSection = () => (
  <section className="section-padding bg-surface">
    <div className="container space-y-12">
      <ScrollReveal>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center">
          What Makes This <span className="text-gradient">Different</span>
        </h2>
      </ScrollReveal>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {values.map(({ icon: Icon, title, desc, emoji }, i) => (
          <ScrollReveal key={title} delay={i * 0.1}>
            <div className="bg-card rounded-2xl p-5 md:p-6 card-elevated card-hover text-center space-y-3 h-full">
              <div className="text-3xl">{emoji}</div>
              <div className="mx-auto w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Icon size={22} className="text-primary" />
              </div>
              <h3 className="font-bold text-sm md:text-base">{title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground">{desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ValueSection;
