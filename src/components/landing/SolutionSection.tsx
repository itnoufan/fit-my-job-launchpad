import ScrollReveal from "./ScrollReveal";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Learn what companies actually use",
  "Work on real tools (HRMS, Payroll, Excel, AI)",
  "UAE career exposure",
  "Guided until you get a job",
];

const SolutionSection = () => (
  <section className="section-padding">
    <div className="container max-w-2xl space-y-10">
      <ScrollReveal>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center">
          This Is Where <span className="text-gradient">Everything Changes</span>
        </h2>
      </ScrollReveal>
      <div className="grid sm:grid-cols-2 gap-4">
        {points.map((p, i) => (
          <ScrollReveal key={p} delay={i * 0.1}>
            <div className="bg-card rounded-2xl p-5 card-elevated card-hover flex items-start gap-4">
              <div className="w-8 h-8 rounded-xl bg-accent/15 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 size={18} className="text-accent" />
              </div>
              <span className="font-medium leading-snug">{p}</span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
