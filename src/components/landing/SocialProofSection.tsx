import { Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    name: "Priya S.",
    role: "HR Executive, Dubai",
    quote: "From zero HR knowledge to working in Dubai in 6 months. Best decision I ever made.",
    featured: true,
  },
  {
    name: "Arjun K.",
    role: "Office Admin, Bangalore",
    quote: "The practical training was incredible. I got placed before the course even ended!",
  },
  {
    name: "Fatima R.",
    role: "Payroll Specialist, Abu Dhabi",
    quote: "The UAE payroll module gave me the exact skills employers wanted. Got hired in 2 weeks.",
  },
];

const SocialProofSection = () => (
  <section className="section-padding">
    <div className="container space-y-12">
      <ScrollReveal>
        <div className="text-center space-y-3">
          <p className="eyebrow">Student Stories</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Real Results From Real Students
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.name} delay={i * 0.1}>
            <div className={`bg-card rounded-2xl p-6 md:p-7 card-elevated card-hover h-full flex flex-col ${t.featured ? 'ring-1 ring-primary/10 md:scale-[1.02]' : ''}`}>
              <Quote size={24} className="text-primary/15 mb-4" />
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {t.quote}
              </p>
              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-border">
                <div className="w-9 h-9 rounded-full bg-primary/8 flex items-center justify-center text-xs font-semibold text-primary">
                  {t.name.charAt(0)}{t.name.split(" ")[1]?.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProofSection;
