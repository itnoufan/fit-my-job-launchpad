import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

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
    toast({ title: "Thank you!", description: "We'll send your free career roadmap shortly." });
    setName("");
    setPhone("");
    setCourse("");
  };

  return (
    <section className="bg-section-alt section-padding" id="lead-form">
      <div className="container max-w-lg space-y-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          Get Your <span className="text-gradient">Free Career Roadmap</span>
        </h2>
        <p className="text-muted-foreground">How to Get an HR Job in 90 Days</p>
        <form onSubmit={handleSubmit} className="bg-card rounded-xl p-6 card-shadow space-y-4 text-left">
          <Input placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <Input placeholder="Phone Number" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
            className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground text-sm"
          >
            <option value="">Select Course Interest</option>
            {courseOptions.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <Button variant="hero" size="lg" className="w-full text-base" type="submit">
            Get Free Plan
          </Button>
        </form>
      </div>
    </section>
  );
};

export default LeadCaptureSection;
