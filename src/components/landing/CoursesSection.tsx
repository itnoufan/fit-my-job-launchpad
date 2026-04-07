import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import WHATSAPP_URL from "./whatsapp";

interface Course {
  title: string;
  mode: string;
  emoji: string;
  features: string[];
  tag?: string;
}

const courses: Course[] = [
  {
    title: "UAE HR Management",
    mode: "Offline",
    emoji: "🔥",
    features: ["UK Certification", "UAE Internship (Optional)", "HRMS + Compliance", "Industrial Visit", "Job Support"],
    tag: "Most Popular",
  },
  {
    title: "HR Management",
    mode: "Online",
    emoji: "💻",
    features: ["Live Classes", "Case Studies", "Job Support"],
  },
  {
    title: "Office Administration",
    mode: "Offline",
    emoji: "🧾",
    features: ["Excel + AI Tools", "Basic Accounting", "Job Assurance"],
  },
  {
    title: "Office Administration",
    mode: "Online",
    emoji: "🌐",
    features: ["Office Tools", "Flexible Learning"],
  },
  {
    title: "UAE Payroll",
    mode: "Live / Recorded",
    emoji: "💰",
    features: ["Salary Structure", "PF, ESI, TDS", "UAE Payroll"],
  },
];

const CoursesSection = () => (
  <section className="section-padding bg-gradient-dark-section" id="courses">
    <div className="container space-y-12">
      <ScrollReveal>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-white">
          Our <span className="text-gradient">Courses</span>
        </h2>
      </ScrollReveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {courses.map((c, i) => (
          <ScrollReveal key={c.title + c.mode} delay={i * 0.08}>
            <div className="relative glass-dark rounded-2xl p-6 card-hover flex flex-col h-full group">
              {c.tag && (
                <span className="absolute -top-3 right-4 bg-gradient-cta text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                  {c.tag}
                </span>
              )}
              <div className="text-3xl mb-3">{c.emoji}</div>
              <h3 className="font-bold text-lg text-white">{c.title}</h3>
              <span className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "hsl(220 15% 50%)" }}>{c.mode}</span>
              <ul className="space-y-2.5 flex-1 mb-6">
                {c.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm" style={{ color: "hsl(220 15% 60%)" }}>
                    <span className="text-accent font-bold mt-px">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" className="w-full">
                  <MessageCircle size={16} /> Chat on WhatsApp
                </Button>
              </a>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default CoursesSection;
