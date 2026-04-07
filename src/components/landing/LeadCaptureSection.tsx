import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from "./ScrollReveal";

const courseOptions = [
  "UAE HR Management (Offline)",
  "HR Management (Online)",
  "Office Administration (Offline)",
  "Office Administration (Online)",
  "UAE Payroll (Live / Recorded)",
];

const LeadCaptureSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Thank you! 🎉", description: "We'll send your free career roadmap shortly." });
    setName("");
    setPhone("");
    setCourse("");
  };

  return (
    <section className="section-padding bg-surface" id="lead-form">
      <div className="container max-w-lg space-y-8 text-center">
        <ScrollReveal>
          <div className="space-y-3">
            <h2 className="text-2xl md:text-4xl font-extrabold">
              Get Your <span className="text-gradient">Free Career Roadmap</span>
            </h2>
            <p className="text-muted-foreground">How to Get an HR Job in 90 Days</p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 card-elevated space-y-5 text-left">
            <Input
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="h-12 rounded-xl"
            />
            <Input
              placeholder="Phone Number"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="h-12 rounded-xl"
            />
            <select
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              required
              className="w-full h-12 px-4 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="">Select Course Interest</option>
              {courseOptions.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <Button variant="gradient" size="lg" className="w-full" type="submit">
              Get Free Plan
            </Button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default LeadCaptureSection;
