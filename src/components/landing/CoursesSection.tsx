import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

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
    features: ["UK Certification", "UAE Internship (Optional)", "HRMS + Compliance Training", "Industrial Visit", "100% Job Support"],
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
    features: ["Office tools training", "Flexible learning"],
  },
  {
    title: "UAE Payroll",
    mode: "Live / Recorded",
    features: ["Salary & CTC Structure", "PF, ESI, TDS", "UAE Payroll Basics"],
  },
];

const CoursesSection = () => (
  <section className="section-padding bg-section-alt">
    <div className="container space-y-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center">
        Our <span className="text-gradient">Courses</span>
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((c) => (
          <div key={c.title + c.mode} className="relative bg-card rounded-xl p-6 card-shadow card-hover flex flex-col">
            {c.tag && (
              <span className="absolute -top-3 right-4 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">
                {c.tag}
              </span>
            )}
            <h3 className="font-bold text-lg text-foreground">{c.title}</h3>
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">{c.mode}</span>
            <ul className="space-y-2 flex-1 mb-6">
              {c.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-highlight mt-0.5">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <Button variant="hero" className="w-full">
              <MessageCircle size={16} className="mr-1" /> Enquire Now
            </Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CoursesSection;
