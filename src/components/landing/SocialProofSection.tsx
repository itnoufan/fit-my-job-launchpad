import { Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    name: "Priya S.",
    role: "HR Executive, Dubai",
    quote: "From zero HR knowledge to working in Dubai in 6 months. Best decision I ever made.",
    avatar: "PS",
  },
  {
    name: "Arjun K.",
    role: "Office Admin, Bangalore",
    quote: "The practical training was incredible. I got placed before the course even ended!",
    avatar: "AK",
  },
  {
    name: "Fatima R.",
    role: "Payroll Specialist, Abu Dhabi",
    quote: "The UAE payroll module gave me the exact skills employers wanted. Got hired in 2 weeks.",
    avatar: "FR",
  },
];

const SocialProofSection = () => (
  <section className="section-padding bg-surface">
    <div className="container space-y-12">
      <ScrollReveal>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-foreground">
          People Like You Are <span className="text-gradient">Already Winning</span>
        </h2>
      </ScrollReveal>
      <div className="grid md:grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.name} delay={i * 0.12}>
            <div className="bg-card rounded-2xl p-6 card-elevated card-hover h-full flex flex-col">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="text-warm fill-warm" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 mt-5 pt-5 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-gradient-cta flex items-center justify-center text-xs font-bold text-primary-foreground">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-bold text-sm text-foreground">{t.name}</p>
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
