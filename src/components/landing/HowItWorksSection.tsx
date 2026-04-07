import ScrollReveal from "./ScrollReveal";

const steps = [
  { num: "01", title: "Join", desc: "Pick your course", emoji: "🚀" },
  { num: "02", title: "Learn", desc: "Hands-on training", emoji: "📚" },
  { num: "03", title: "Get Hired", desc: "Resume + interview + job", emoji: "💼" },
];

const HowItWorksSection = () => (
  <section className="section-padding bg-gradient-dark-section" id="how-it-works">
    <div className="container space-y-12">
      <ScrollReveal>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-white">
          How It Works
        </h2>
      </ScrollReveal>
      <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {steps.map(({ num, title, desc, emoji }, i) => (
          <ScrollReveal key={num} delay={i * 0.15}>
            <div className="glass-dark rounded-2xl p-6 text-center space-y-4 card-hover">
              <div className="text-4xl">{emoji}</div>
              <div className="mx-auto w-10 h-10 rounded-xl bg-gradient-cta flex items-center justify-center text-sm font-extrabold text-white">
                {num}
              </div>
              <h3 className="font-bold text-lg text-white">{title}</h3>
              <p className="text-sm" style={{ color: "hsl(220 15% 55%)" }}>{desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
