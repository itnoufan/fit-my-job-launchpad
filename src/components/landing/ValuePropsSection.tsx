import { Briefcase, Globe, BookOpen, Users } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const cards = [
  { icon: Briefcase, title: "Job-Ready Skills", desc: "Learn exactly what companies need", color: "from-primary/10 to-accent/10" },
  { icon: Globe, title: "Global Opportunities", desc: "India + UAE career pathways", color: "from-warm/10 to-destructive/5" },
  { icon: BookOpen, title: "Practical Learning", desc: "Live projects and real case studies", color: "from-success/10 to-primary/5" },
  { icon: Users, title: "Placement Support", desc: "We help you get hired", color: "from-accent/10 to-primary/10" },
];

const ValuePropsSection = () => (
  <section className="section-padding bg-gradient-hero" id="why-us">
    <div className="container space-y-12">
      <ScrollReveal>
        <h2 className="text-2xl md:text-4xl font-extrabold text-center text-primary-foreground">
          What You Get at <span className="text-gradient">The Academy</span>
        </h2>
      </ScrollReveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map(({ icon: Icon, title, desc, color }, i) => (
          <ScrollReveal key={title} delay={i * 0.1}>
            <div className="glass rounded-2xl p-6 text-center space-y-4 card-hover h-full">
              <div className={`mx-auto w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center`}>
                <Icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="font-bold text-lg text-primary-foreground">{title}</h3>
              <p className="text-primary-foreground/60 text-sm">{desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ValuePropsSection;
