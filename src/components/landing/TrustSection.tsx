import { GraduationCap, Wrench, Award, Target, Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const points = [
  { icon: GraduationCap, text: "Industry-experienced trainers" },
  { icon: Wrench, text: "Practical, skill-based learning approach" },
  { icon: Award, text: "Certifications aligned with recognized bodies" },
  { icon: Target, text: "Career-focused programs designed for employability" },
];

const stats = [
  { value: "500+", label: "Students Trained" },
  { value: "85%", label: "Placement Rate" },
  { value: "50+", label: "Hiring Partners" },
];

const TrustSection = () => (
  <section className="section-padding">
    <div className="container space-y-14">
      <ScrollReveal>
        <h2 className="text-2xl md:text-4xl font-extrabold text-center">
          Why Choose <span className="text-gradient">This Academy</span>
        </h2>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
        {points.map(({ icon: Icon, text }, i) => (
          <ScrollReveal key={text} delay={i * 0.1}>
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-surface card-hover">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Icon size={20} className="text-primary" />
              </div>
              <span className="font-semibold text-sm">{text}</span>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.2}>
        <div className="grid grid-cols-3 gap-8 max-w-md mx-auto text-center">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <p className="text-3xl md:text-4xl font-extrabold text-gradient">{value}</p>
              <p className="text-xs text-muted-foreground mt-1">{label}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <div className="glass-card rounded-2xl p-8 max-w-xl mx-auto text-center space-y-4 card-elevated">
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="text-warm fill-warm" />
            ))}
          </div>
          <p className="italic text-muted-foreground leading-relaxed">
            "This academy completely changed my career trajectory. I went from having zero HR knowledge to landing my dream job in Dubai within 6 months!"
          </p>
          <p className="font-bold text-sm text-foreground">— Priya S., HR Executive, UAE</p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default TrustSection;
