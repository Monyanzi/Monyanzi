import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface ValueProp {
  icon: string;
  title: string;
  description: string;
  metric: string;
}

const valuePropositions: ValueProp[] = [
  {
    icon: "◈",
    title: "From vague opportunities to disciplined capital deployment",
    description: "Evaluate deals, optimise capital structures, and identify mispriced opportunities. You get rigorous M&A due diligence and equity valuations that stand up to scrutiny.",
    metric: "M&A Due Diligence • Equity Valuation • Capital Allocation"
  },
  {
    icon: "↗",
    title: "From uncertainty to quantified, board-ready risk positions",
    description: "Stress-test portfolios under realistic scenarios and quantify risk-adjusted returns. I build the models that answer: What's the downside? What's the probability? What should we hedge?",
    metric: "Scenario Modelling • Stress Testing • Portfolio Optimisation"
  },
  {
    icon: "∑",
    title: "From complex data to actionable insights",
    description: "Financial models that drive decisions: Cash Flow Valuations, equity analysis, and strategic pricing frameworks. I translate complex data into insights your team can act on.",
    metric: "Equity Analysis • Derivative Valuation • Strategic Pricing"
  }
];

const ValuePropositionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax for background elements
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const gradientY = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const glassY = useTransform(scrollYProgress, [0, 1], [100, -150]);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-[hsl(160,15%,96%)] relative overflow-hidden">
      {/* Parallax gradient background */}
      <motion.div
        style={{ y: gradientY }}
        className="absolute inset-0 pointer-events-none will-change-transform"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-transparent" />
      </motion.div>

      {/* Glassmorphic floating accent */}
      <motion.div
        style={{ y: glassY }}
        className="absolute top-1/4 -right-32 w-64 h-64 rounded-full opacity-30 will-change-transform"
      >
        <div
          className="w-full h-full rounded-full backdrop-blur-xl"
          style={{ background: 'radial-gradient(circle, hsl(38 82% 50% / 0.15) 0%, transparent 70%)' }}
        />
      </motion.div>

      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs tracking-[0.3em] text-[hsl(20,55%,53%)] uppercase mb-4 inline-block">
            Where Clients Bring Me In
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Problems I Solve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complex challenges that require analytical precision and strategic clarity.
          </p>
        </div>

        {/* Value props grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {valuePropositions.map((prop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.2,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ y: -12, transition: { duration: 0.2, ease: "easeOut" } }}
              className="group p-8 rounded-2xl bg-white border border-border hover:border-[hsl(20,55%,53%)]/30 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)] cursor-default will-change-transform"
            >
              <div className="flex items-start gap-4 mb-4">
                {/* Gradient icon background like HTML design */}
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200"
                  style={{ background: 'linear-gradient(135deg, hsl(140 18% 30%), hsl(20 55% 53%))' }}>
                  <span className="text-2xl text-white">
                    {prop.icon}
                  </span>
                </div>
                <span className="text-xs font-mono text-muted-foreground/50">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-lg font-display font-semibold text-foreground leading-snug mb-4 group-hover:text-[hsl(160,45%,12%)] transition-colors duration-200">
                {prop.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {prop.description}
              </p>

              <p className="text-xs font-medium tracking-wide text-[hsl(38,82%,50%)]">
                {prop.metric}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
