import { XCircle, CheckCircle2, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const problems = [
  { emoji: "😕", text: "No practical skills" },
  { emoji: "😐", text: "No job calls" },
  { emoji: "😔", text: "No clear direction" },
];

const solutions = [
  { emoji: "🔧", text: "Practical training" },
  { emoji: "💻", text: "Real industry tools" },
  { emoji: "🤝", text: "Job support until hired" },
];

const ProblemSolutionSection = () => (
  <section className="section-padding" id="why-us">
    <div className="container max-w-4xl space-y-10">
      <ScrollReveal>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-foreground">
          From <span className="text-destructive">Stuck</span> to{" "}
          <span className="text-gradient">Skilled</span>
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <div className="grid grid-cols-[1fr_auto_1fr] gap-3 md:gap-6 items-stretch">
          {/* Problem side */}
          <div className="bg-destructive/[0.04] border border-destructive/10 rounded-3xl p-5 md:p-8 space-y-5">
            <p className="font-extrabold text-destructive text-sm md:text-base uppercase tracking-wider">The Problem</p>
            {problems.map(({ emoji, text }) => (
              <div key={text} className="flex items-center gap-3 text-sm md:text-base text-muted-foreground">
                <span className="text-xl">{emoji}</span>
                <span>{text}</span>
              </div>
            ))}
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-cta flex items-center justify-center shadow-lg">
              <ArrowRight size={22} className="text-white" />
            </div>
          </div>

          {/* Solution side */}
          <div className="bg-accent/[0.04] border border-accent/10 rounded-3xl p-5 md:p-8 space-y-5">
            <p className="font-extrabold text-accent text-sm md:text-base uppercase tracking-wider">Our Solution</p>
            {solutions.map(({ emoji, text }) => (
              <div key={text} className="flex items-center gap-3 text-sm md:text-base text-foreground">
                <span className="text-xl">{emoji}</span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ProblemSolutionSection;
