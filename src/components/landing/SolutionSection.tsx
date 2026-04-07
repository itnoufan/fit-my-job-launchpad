import { CheckCircle2 } from "lucide-react";

const points = [
  "Real-time practical training",
  "Industry tools (HRMS, Payroll, Excel, AI)",
  "UAE exposure opportunities",
  "Direct job support",
];

const SolutionSection = () => (
  <section className="section-padding">
    <div className="container max-w-3xl text-center space-y-8">
      <h2 className="text-2xl md:text-3xl font-bold">
        We Make You <span className="text-gradient">Job-Ready</span> — Not Just Certified
      </h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {points.map((p) => (
          <div key={p} className="flex items-center gap-3 bg-card rounded-lg p-4 card-shadow card-hover">
            <CheckCircle2 size={20} className="text-highlight shrink-0" />
            <span className="font-medium">{p}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
