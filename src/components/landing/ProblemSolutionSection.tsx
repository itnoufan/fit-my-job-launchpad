import { XCircle, CheckCircle2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const problems = [
  "No practical skills",
  "No job callbacks",
  "No clear career direction",
];

const solutions = [
  "Hands-on practical training",
  "Real industry tools & software",
  "Job support until you're hired",
];

const ProblemSolutionSection = () => (
  <section className="section-padding" id="why-us">
    <div className="container max-w-4xl space-y-10">
      <ScrollReveal>
        <div className="text-center space-y-3">
          <p className="eyebrow">Why Students Choose Us</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            From <span className="text-destructive">Stuck</span> to{" "}
            <span className="text-accent">Skilled</span>
          </h2>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Problem */}
          <div className="rounded-2xl border border-destructive/10 bg-destructive/[0.03] p-6 md:p-8 space-y-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-destructive">The Problem</p>
            <ul className="space-y-4">
              {problems.map((text) => (
                <li key={text} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <XCircle size={18} className="text-destructive/60 mt-0.5 shrink-0" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div className="rounded-2xl border border-accent/10 bg-accent/[0.03] p-6 md:p-8 space-y-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Our Solution</p>
            <ul className="space-y-4">
              {solutions.map((text) => (
                <li key={text} className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 size={18} className="text-accent mt-0.5 shrink-0" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ProblemSolutionSection;
