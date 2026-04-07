import { XCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const problems = [
  "No practical skills",
  "No real-world experience",
  "Low salary or no growth",
  "Confusion about career path",
];

const ProblemSection = () => (
  <section className="section-padding bg-surface">
    <div className="container max-w-3xl text-center space-y-10">
      <ScrollReveal>
        <h2 className="text-2xl md:text-4xl font-extrabold text-foreground">
          Why Most Graduates <span className="text-gradient">Struggle</span> to Get Jobs
        </h2>
      </ScrollReveal>
      <div className="grid sm:grid-cols-2 gap-4">
        {problems.map((p, i) => (
          <ScrollReveal key={p} delay={i * 0.1}>
            <div className="flex items-center gap-4 bg-card rounded-2xl p-5 card-elevated card-hover">
              <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center shrink-0">
                <XCircle size={20} className="text-destructive" />
              </div>
              <span className="font-semibold text-foreground text-left">{p}</span>
            </div>
          </ScrollReveal>
        ))}
      </div>
      <ScrollReveal delay={0.4}>
        <p className="text-lg text-muted-foreground">
          Degrees alone don't get jobs anymore. <span className="font-bold text-foreground">Skills do.</span>
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default ProblemSection;
