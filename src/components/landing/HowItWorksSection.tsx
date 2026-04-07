const steps = [
  { num: "1", title: "Enroll", desc: "Choose your course and get started" },
  { num: "2", title: "Learn Practically", desc: "Hands-on training with real tools" },
  { num: "3", title: "Get Placed", desc: "Resume + interview + job support" },
];

const HowItWorksSection = () => (
  <section className="bg-hero text-hero-foreground section-padding">
    <div className="container space-y-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
        {steps.map(({ num, title, desc }) => (
          <div key={num} className="text-center space-y-3">
            <div className="mx-auto w-14 h-14 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-xl font-bold">
              {num}
            </div>
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-hero-foreground/70 text-sm">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
