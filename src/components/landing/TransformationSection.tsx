import { XCircle, CheckCircle2, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const before = ["Confused", "No skills", "No job"];
const after = ["Skilled", "Confident", "Employed"];

const TransformationSection = () => (
  <section className="section-padding bg-surface">
    <div className="container max-w-2xl space-y-10 text-center">
      <ScrollReveal>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
          The <span className="text-gradient">Transformation</span>
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.15}>
        <div className="grid grid-cols-[1fr_auto_1fr] gap-3 md:gap-6 items-stretch">
          <div className="bg-destructive/5 border border-destructive/10 rounded-2xl p-5 md:p-6 space-y-4">
            <p className="font-extrabold text-destructive text-sm md:text-base">Before</p>
            {before.map((b) => (
              <div key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                <XCircle size={15} className="text-destructive shrink-0" /> {b}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-cta flex items-center justify-center">
              <ArrowRight size={18} className="text-white" />
            </div>
          </div>
          <div className="bg-accent/5 border border-accent/10 rounded-2xl p-5 md:p-6 space-y-4">
            <p className="font-extrabold text-accent text-sm md:text-base">After</p>
            {after.map((a) => (
              <div key={a} className="flex items-center gap-2 text-sm text-foreground">
                <CheckCircle2 size={15} className="text-accent shrink-0" /> {a}
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default TransformationSection;
