import { Button } from "@/components/ui/button";
import { MessageCircle, Award, Building2, FileSpreadsheet, Globe, DollarSign, Download } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import WHATSAPP_URL from "./whatsapp";

interface Course {
  title: string;
  mode: string;
  badge?: string;
  icon: typeof Award;
  features: string[];
  tag?: string;
  featured?: boolean;
}

const courses: Course[] = [
  {
    title: "UAE HR Management",
    mode: "Offline",
    badge: "Classroom Training",
    icon: Award,
    features: ["UK Certification", "UAE Internship (Optional)", "HRMS + Compliance", "UAE Exposure", "Industrial Visit", "Job Support"],
    tag: "Most Popular",
    featured: true,
  },
  {
    title: "UAE HR Management",
    mode: "Online",
    badge: "Live Online Training",
    icon: Globe,
    features: ["UK Certification", "UAE Internship (Optional)", "HRMS + Compliance", "UAE Exposure", "Job Support"],
  },
  {
    title: "Office Administration",
    mode: "Offline",
    badge: "Classroom Training",
    icon: Building2,
    features: ["Excel, Word, PPT", "AI Tools", "Basic Accounting", "Job Assurance"],
  },
  {
    title: "Office Administration",
    mode: "Online",
    badge: "Online Training",
    icon: FileSpreadsheet,
    features: ["Excel, Word, PPT", "AI Tools", "Basic Accounting", "Job Assurance"],
  },
  {
    title: "UAE Payroll",
    mode: "Live / Recorded",
    badge: "Live + Self-Paced",
    icon: DollarSign,
    features: ["Salary Structure", "PF, ESI, TDS", "UAE Payroll", "Indian Labour Law", "UAE Labour Law"],
  },
];

const CoursesSection = () => (
  <section className="section-padding bg-gradient-soft relative overflow-hidden" id="courses">
    <div className="blob w-[500px] h-[500px] bg-primary -bottom-40 -left-40 animate-blob" />

    <div className="container relative z-10 space-y-12">
      <ScrollReveal>
        <div className="text-center space-y-3">
          <p className="eyebrow">Programs</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Choose Your Path
          </h2>
          <p className="text-muted-foreground mt-2 max-w-md mx-auto text-sm">
            Industry-aligned courses designed for real career outcomes
          </p>
        </div>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {courses.map((c, i) => (
          <ScrollReveal key={c.title + c.mode} delay={i * 0.06}>
            <div className={`relative bg-card rounded-2xl p-6 card-hover flex flex-col h-full overflow-hidden ${c.featured ? 'card-featured-glow card-gradient-border' : 'card-elevated'}`}>
              {c.tag && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-bl-xl rounded-tr-2xl">
                    {c.tag}
                  </div>
                </div>
              )}
              <div className={`w-10 h-10 rounded-lg ${c.featured ? 'icon-gradient-primary' : 'icon-gradient-accent'} flex items-center justify-center mb-4`}>
                <c.icon size={20} className={c.featured ? 'text-primary' : 'text-accent'} />
              </div>
              <h3 className="font-semibold text-lg text-foreground">{c.title}</h3>
              <div className="flex items-center gap-2 mb-4 mt-1">
                <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">{c.mode}</span>
                {c.badge && (
                  <span className="text-[10px] font-medium bg-muted text-muted-foreground px-2 py-0.5 rounded-full">{c.badge}</span>
                )}
              </div>
              <ul className="space-y-2.5 flex-1 mb-6">
                {c.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="text-accent mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" className="w-full">
                  <MessageCircle size={16} /> Enquire Now
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
