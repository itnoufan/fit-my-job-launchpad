import { Briefcase, Globe, BookOpen, Users } from "lucide-react";

const cards = [
  { icon: Briefcase, title: "Job-Ready Skills", desc: "Learn exactly what companies need" },
  { icon: Globe, title: "Global Opportunities", desc: "India + UAE career pathways" },
  { icon: BookOpen, title: "Practical Learning", desc: "Live projects, real case studies" },
  { icon: Users, title: "Placement Support", desc: "We help you get hired" },
];

const ValuePropsSection = () => (
  <section className="bg-hero text-hero-foreground section-padding">
    <div className="container space-y-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center">
        What You Get at <span className="text-gradient">Fit My Job Academy</span>
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="bg-hero-foreground/10 rounded-xl p-6 text-center space-y-3 card-hover">
            <div className="mx-auto w-14 h-14 rounded-full bg-secondary flex items-center justify-center">
              <Icon size={24} className="text-secondary-foreground" />
            </div>
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-hero-foreground/70 text-sm">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ValuePropsSection;
