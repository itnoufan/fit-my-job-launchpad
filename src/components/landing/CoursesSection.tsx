import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface Course {
  title: string;
  mode: string;
  features: string[];
  tag?: string;
}

const courses: Course[] = [
  {
    title: "UAE HR Management",
    mode: "Offline",
    features: ["UK Certification", "UAE Internship (Optional)", "HRMS + Compliance", "Industrial Visit", "100% Job Support"],
    tag: "Most Popular",
  },
  {
    title: "HR Management",
    mode: "Online",
    features: ["Live Classes", "HRMS + Case Studies", "Certification + Job Support"],
  },
  {
    title: "Office Administration",
    mode: "Offline",
    features: ["Excel, Word, PPT & AI Tools", "Basic Accounting", "Job Assurance"],
  },
  {
    title: "Office Administration",
    mode: "Online",
    features: ["Office Tools Training", "Flexible Learning"],
  },
  {
    title: "UAE Payroll",
    mode: "Live / Recorded",
    features: ["Salary Structure", "PF, ESI, TDS", "UAE Payroll Basics"],
  },
];

const CoursesSection = () => (
  <section className="section-padding bg-surface" id="courses">
    <div className="container space-y-12">
      <ScrollReveal>
        <div className="text-center space-y-3">
          <h2 className="text-2xl md:text-4xl font-extrabold">
            Our <span className="text-gradient">Courses</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Career-focused programs designed for real-world employability
          </p>
        </div>
      </ScrollReveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((c, i) => (
          <ScrollReveal key={c.title + c.mode} delay={i * 0.08}>
            <div className="relative bg-card rounded-2xl p-6 card-elevated card-hover flex flex-col h-full">
              {c.tag && (
                <span className="absolute -top-3 right-4 bg-gradient-vibrant text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                  {c.tag}
                </span>
              )}
              <h3 className="font-bold text-lg text-foreground">{c.title}</h3>
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">{c.mode}</span>
              <ul className="space-y-2.5 flex-1 mb-6">
                {c.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="text-success mt-0.5 font-bold">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Button variant="gradient" className="w-full">
                <MessageCircle size={16} /> Enquire Now
              </Button>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default CoursesSection;
