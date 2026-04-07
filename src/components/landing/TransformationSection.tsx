import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const before = [
  { emoji: "😕", text: "No Skills" },
  { emoji: "😕", text: "No Job" },
  { emoji: "😕", text: "Confusion" },
];
const after = [
  { emoji: "🔥", text: "Skilled" },
  { emoji: "🔥", text: "Confident" },
  { emoji: "🔥", text: "Working" },
];

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
            {before.map(({ emoji, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="text-lg">{emoji}</span> {text}
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
            {after.map(({ emoji, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm text-foreground">
                <span className="text-lg">{emoji}</span> {text}
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default TransformationSection;
