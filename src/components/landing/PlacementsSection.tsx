import ScrollReveal from "./ScrollReveal";

import s1 from "@/assets/placements/student1.jpeg";
import s2 from "@/assets/placements/student2.jpeg";
import s3 from "@/assets/placements/student3.jpeg";
import s4 from "@/assets/placements/student4.jpeg";
import s5 from "@/assets/placements/student5.jpeg";
import s6 from "@/assets/placements/student6.jpeg";
import s7 from "@/assets/placements/student7.jpeg";
import s8 from "@/assets/placements/student8.jpeg";
import s9 from "@/assets/placements/student9.jpeg";
import s10 from "@/assets/placements/student10.jpeg";

const row1 = [s1, s2, s3, s4, s5];
const row2 = [s6, s7, s8, s9, s10];

const MarqueeRow = ({ images, direction }: { images: string[]; direction: "left" | "right" }) => {
  const doubled = [...images, ...images];
  return (
    <div className="overflow-hidden">
      <div
        className={`flex gap-4 ${direction === "left" ? "animate-scroll-left" : "animate-scroll-right"}`}
        style={{ width: "max-content" }}
      >
        {doubled.map((src, i) => (
          <div
            key={i}
            className="w-52 h-64 sm:w-60 sm:h-72 rounded-2xl overflow-hidden card-elevated card-hover shrink-0"
          >
            <img
              src={src}
              alt="Placed student"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const PlacementsSection = () => (
  <section className="section-padding relative overflow-hidden bg-gradient-soft">
    <div className="blob w-[500px] h-[500px] bg-accent -top-40 right-0 animate-blob" />

    <div className="container relative z-10 space-y-10">
      <ScrollReveal>
        <div className="text-center space-y-3">
          <p className="eyebrow">Placements</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Our Students Are Getting <span className="text-gradient">Placed</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
            Real students, real jobs. See who's already launched their career with Fit My Job.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <div className="space-y-4">
          <MarqueeRow images={row1} direction="left" />
          <MarqueeRow images={row2} direction="right" />
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default PlacementsSection;
