import { XCircle } from "lucide-react";

const problems = [
  "No practical skills",
  "No job opportunities",
  "Low salary or no growth",
  "Confusion about career path",
];

const ProblemSection = () => (
  <section className="bg-section-alt section-padding">
    <div className="container max-w-3xl text-center space-y-8">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground">
        Why Most Graduates <span className="text-gradient">Struggle</span> to Get Jobs
      </h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {problems.map((p) => (
          <div key={p} className="flex items-center gap-3 bg-card rounded-lg p-4 card-shadow">
            <XCircle size={20} className="text-destructive shrink-0" />
            <span className="text-foreground font-medium">{p}</span>
          </div>
        ))}
      </div>
      <p className="text-lg font-semibold text-muted-foreground">
        Degrees alone don't get jobs anymore. <span className="text-foreground">Skills do.</span>
      </p>
    </div>
  </section>
);

export default ProblemSection;
