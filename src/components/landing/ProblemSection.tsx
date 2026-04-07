import ScrollReveal from "./ScrollReveal";

const problems = [
  "You studied… but don't feel job-ready",
  "You apply… but don't get calls",
  "You want growth… but don't know how",
  "You feel stuck",
];

const ProblemSection = () => (
  <section className="section-padding bg-surface">
    <div className="container max-w-2xl space-y-10">
      <ScrollReveal>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center">
          Let's Be Honest…
        </h2>
      </ScrollReveal>
      <div className="grid sm:grid-cols-2 gap-4">
        {problems.map((p, i) => (
          <ScrollReveal key={p} delay={i * 0.1}>
            <div className="bg-card rounded-2xl p-5 card-elevated card-hover flex items-start gap-4">
              <span className="text-2xl mt-0.5">😐</span>
              <span className="font-medium text-foreground leading-snug">{p}</span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
