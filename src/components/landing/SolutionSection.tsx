import { CheckCircle2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const points = [
  "Real-time practical training",
  "Industry tools (HRMS, Payroll, Excel, AI)",
  "UAE exposure opportunities",
  "Direct job support",
];

const SolutionSection = () => (
  <section className="section-padding">
    <div className="container max-w-3xl text-center space-y-10">
      <ScrollReveal>
        <h2 className="text-2xl md:text-4xl font-extrabold">
          We Make You <span className="text-gradient">Job-Ready</span> — Not Just Certified
        </h2>
      </ScrollReveal>
      <div className="grid sm:grid-cols-2 gap-4">
        {points.map((p, i) => (
          <ScrollReveal key={p} delay={i * 0.1}>
            <div className="flex items-center gap-4 bg-card rounded-2xl p-5 card-elevated card-hover">
              <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center shrink-0">
                <CheckCircle2 size={20} className="text-success" />
              </div>
              <span className="font-semibold text-left">{p}</span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
