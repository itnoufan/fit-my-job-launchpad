import ScrollReveal from "./ScrollReveal";

const HookSection = () => (
  <section className="bg-dark section-padding">
    <div className="container max-w-2xl text-center">
      <ScrollReveal>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white">
          You're Not Jobless.
          <br />
          <span className="text-gradient">You're Just Not Trained.</span>
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <p className="mt-6 text-lg font-medium" style={{ color: "hsl(220 15% 55%)" }}>
          We fix that.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default HookSection;
