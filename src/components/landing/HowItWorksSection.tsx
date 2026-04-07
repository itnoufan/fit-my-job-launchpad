import ScrollReveal from "./ScrollReveal";

const steps = [
  { num: "01", title: "Enroll", desc: "Choose your course and get started" },
  { num: "02", title: "Learn Practically", desc: "Hands-on training with real tools" },
  { num: "03", title: "Get Placed", desc: "Resume building + interview + job support" },
];

const HowItWorksSection = () => (
  <section className="bg-gradient-hero section-padding" id="how-it-works">
    <div className="container space-y-12">
      <ScrollReveal>
        <h2 className="text-2xl md:text-4xl font-extrabold text-center text-primary-foreground">
          How It Works
        </h2>
      </ScrollReveal>
      <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
        {steps.map(({ num, title, desc }, i) => (
          <ScrollReveal key={num} delay={i * 0.15}>
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-vibrant flex items-center justify-center text-xl font-extrabold text-primary-foreground shadow-lg">
                {num}
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

export default HowItWorksSection;
