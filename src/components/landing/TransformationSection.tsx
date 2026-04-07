import { XCircle, CheckCircle2, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const before = ["No skills", "No clarity", "No job"];
const after = ["Industry-ready skills", "Career clarity", "Job opportunities"];

const TransformationSection = () => (
  <section className="section-padding">
    <div className="container max-w-3xl space-y-10 text-center">
      <ScrollReveal>
        <h2 className="text-2xl md:text-4xl font-extrabold">
          From Confused Graduate to <span className="text-gradient">Job-Ready Professional</span>
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.15}>
        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-center">
          <div className="bg-destructive/5 border border-destructive/10 rounded-2xl p-6 space-y-4">
            <p className="font-extrabold text-destructive text-lg">Before</p>
            {before.map((b) => (
              <div key={b} className="flex items-center gap-3 text-sm text-muted-foreground">
                <XCircle size={16} className="text-destructive shrink-0" /> {b}
              </div>
            ))}
          </div>
          <div className="hidden md:flex justify-center">
            <div className="w-12 h-12 rounded-full bg-gradient-vibrant flex items-center justify-center">
              <ArrowRight size={20} className="text-primary-foreground" />
            </div>
          </div>
          <div className="bg-success/5 border border-success/10 rounded-2xl p-6 space-y-4">
            <p className="font-extrabold text-success text-lg">After</p>
            {after.map((a) => (
              <div key={a} className="flex items-center gap-3 text-sm text-foreground">
                <CheckCircle2 size={16} className="text-success shrink-0" /> {a}
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default TransformationSection;
