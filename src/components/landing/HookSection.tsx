import ScrollReveal from "./ScrollReveal";

const HookSection = () => (
  <section className="section-padding bg-surface">
    <div className="container max-w-2xl text-center">
      <ScrollReveal>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-foreground">
          You're Not Jobless.
          <br />
          <span className="text-gradient">You're Just Not Trained.</span>
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <p className="mt-6 text-lg font-medium text-muted-foreground">
          We fix that.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default HookSection;
