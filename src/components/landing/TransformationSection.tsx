import { XCircle, CheckCircle2, ArrowRight } from "lucide-react";

const before = ["No skills", "No clarity", "No job"];
const after = ["Industry-ready skills", "Career clarity", "Job opportunities"];

const TransformationSection = () => (
  <section className="section-padding">
    <div className="container max-w-3xl space-y-8 text-center">
      <h2 className="text-2xl md:text-3xl font-bold">
        From Confused Graduate to <span className="text-gradient">Job-Ready Professional</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-4 items-center">
        <div className="bg-destructive/5 rounded-xl p-6 space-y-3">
          <p className="font-bold text-destructive">Before</p>
          {before.map((b) => (
            <div key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
              <XCircle size={16} className="text-destructive shrink-0" /> {b}
            </div>
          ))}
        </div>
        <div className="hidden md:flex justify-center">
          <ArrowRight size={32} className="text-highlight" />
        </div>
        <div className="bg-highlight/5 rounded-xl p-6 space-y-3">
          <p className="font-bold text-highlight">After</p>
          {after.map((a) => (
            <div key={a} className="flex items-center gap-2 text-sm text-foreground">
              <CheckCircle2 size={16} className="text-highlight shrink-0" /> {a}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TransformationSection;
