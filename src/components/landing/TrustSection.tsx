import { GraduationCap, Wrench, Award, Target, Star } from "lucide-react";

const points = [
  { icon: GraduationCap, text: "Industry-experienced trainers" },
  { icon: Wrench, text: "Practical skill-based training approach" },
  { icon: Award, text: "Certifications aligned with recognized bodies" },
  { icon: Target, text: "Career-focused programs designed for employability" },
];

const stats = [
  { value: "500+", label: "Students Trained" },
  { value: "85%", label: "Placement Rate" },
  { value: "50+", label: "Hiring Partners" },
];

const TrustSection = () => (
  <section className="section-padding">
    <div className="container space-y-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center">
        Why Choose <span className="text-gradient">Fit My Job Academy</span>
      </h2>
      <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
        {points.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center gap-3 p-4 rounded-lg bg-muted">
            <Icon size={20} className="text-highlight shrink-0" />
            <span className="font-medium text-sm">{text}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto text-center">
        {stats.map(({ value, label }) => (
          <div key={label}>
            <p className="text-3xl font-bold text-gradient">{value}</p>
            <p className="text-sm text-muted-foreground">{label}</p>
          </div>
        ))}
      </div>
      {/* Testimonial placeholder */}
      <div className="bg-muted rounded-xl p-6 max-w-xl mx-auto text-center space-y-3">
        <div className="flex justify-center gap-1">
          {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-highlight fill-highlight" />)}
        </div>
        <p className="italic text-muted-foreground">
          "Fit My Job Academy completely changed my career trajectory. I went from having zero HR knowledge to landing my dream job in Dubai within 6 months!"
        </p>
        <p className="font-semibold text-sm">— Priya S., HR Executive, UAE</p>
      </div>
    </div>
  </section>
);

export default TrustSection;
