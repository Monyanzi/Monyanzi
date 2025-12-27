import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

/**
 * ValuePropositionSection - Visual-first with correct color palette
 * Using Navy, Gold, Forest, Terracotta from design system
 * Background: Cream (alternating pattern position 2)
 */

const ValuePropositionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const gradientY = useTransform(scrollYProgress, [0, 1], [200, -200]);

  return (
    <section ref={sectionRef} className="py-12 lg:py-16 relative overflow-hidden" style={{ background: "hsl(40 35% 98%)" }}>
      {/* Parallax gradient background */}
      <motion.div
        style={{ y: gradientY }}
        className="absolute inset-0 pointer-events-none will-change-transform"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-transparent" />
      </motion.div>

      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs tracking-[0.3em] text-[hsl(var(--terracotta))] uppercase mb-4 inline-block">
            Where Clients Bring Me In
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Problems I Solve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complex challenges that require analytical precision and strategic clarity.
          </p>
        </div>

        {/* Visual-first cards */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Card 1: Pattern Recognition - Scatter with Regression */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="group rounded-2xl bg-white border border-border overflow-hidden hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)] cursor-default"
          >
            {/* Visual area - Forest gradient */}
            <div className="h-56 p-6 relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(var(--forest)) 0%, hsl(140 18% 30%) 100%)" }}>
              {/* Scatter plot with regression curve */}
              <svg className="w-full h-full" viewBox="0 0 200 120">
                {/* Grid lines */}
                {[20, 40, 60, 80, 100].map(y => (
                  <line key={y} x1="20" y1={y} x2="190" y2={y} stroke="white" strokeOpacity="0.08" />
                ))}
                {[40, 80, 120, 160].map(x => (
                  <line key={x} x1={x} y1="10" x2={x} y2="110" stroke="white" strokeOpacity="0.08" />
                ))}

                {/* Scattered data points - Gold color */}
                {[
                  [30, 85], [45, 78], [55, 70], [65, 62], [80, 55],
                  [95, 48], [110, 42], [125, 38], [140, 32], [155, 28],
                  [38, 90], [52, 72], [70, 58], [88, 50], [102, 44],
                  [118, 36], [135, 34], [150, 30], [168, 25], [180, 22],
                ].map(([x, y], i) => (
                  <motion.circle
                    key={i}
                    cx={x}
                    cy={y}
                    r="3"
                    fill="hsl(38 82% 50%)"
                    fillOpacity="0.8"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.02, type: "spring", stiffness: 300 }}
                  />
                ))}

                {/* Regression curve - Forest color */}
                <motion.path
                  d="M 25 92 Q 60 65, 100 45 T 185 20"
                  fill="none"
                  stroke="hsl(140 18% 55%)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
                />

                {/* Axis labels */}
                <text x="105" y="118" fill="white" fillOpacity="0.4" fontSize="8" textAnchor="middle">complexity</text>
              </svg>

              {/* Insight badge - Forest */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-medium text-white"
                style={{ background: "hsl(var(--forest))" }}
              >
                Pattern Found
              </motion.div>
            </div>

            {/* Minimal text below */}
            <div className="p-6">
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                Find the signal in the noise
              </h3>
              <p className="text-sm text-muted-foreground">
                M&A Due Diligence • Equity Valuation • Capital Allocation
              </p>
            </div>
          </motion.div>

          {/* Card 2: Risk Quantification - Confidence Intervals */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="group rounded-2xl bg-white border border-border overflow-hidden hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)] cursor-default"
          >
            <div className="h-56 p-6 relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(210 45% 55%) 0%, hsl(210 45% 45%) 100%)" }}>
              {/* Distribution / confidence interval visual */}
              <svg className="w-full h-full" viewBox="0 0 200 120">
                {/* Probability distribution curve area - Gold gradient */}
                <defs>
                  <linearGradient id="distGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="hsl(38 82% 50%)" />
                    <stop offset="100%" stopColor="hsl(38 82% 50%)" stopOpacity="0" />
                  </linearGradient>
                </defs>

                <motion.path
                  d="M 20 100 Q 50 100, 70 80 Q 90 40, 100 25 Q 110 40, 130 80 Q 150 100, 180 100 L 180 100 L 20 100 Z"
                  fill="url(#distGradient)"
                  fillOpacity="0.3"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  style={{ transformOrigin: "bottom" }}
                />

                {/* Distribution curve line - Gold */}
                <motion.path
                  d="M 20 100 Q 50 100, 70 80 Q 90 40, 100 25 Q 110 40, 130 80 Q 150 100, 180 100"
                  fill="none"
                  stroke="hsl(38 82% 50%)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />

                {/* Confidence interval markers - Forest */}
                <motion.line x1="60" y1="20" x2="60" y2="105" stroke="hsl(140 18% 55%)" strokeWidth="1.5" strokeDasharray="4 2"
                  initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ delay: 1 }}
                  style={{ transformOrigin: "bottom" }}
                />
                <motion.line x1="140" y1="20" x2="140" y2="105" stroke="hsl(140 18% 55%)" strokeWidth="1.5" strokeDasharray="4 2"
                  initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ delay: 1.1 }}
                  style={{ transformOrigin: "bottom" }}
                />

                {/* Mean line */}
                <motion.line x1="100" y1="20" x2="100" y2="105" stroke="white" strokeWidth="2"
                  initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ delay: 1.2 }}
                  style={{ transformOrigin: "bottom" }}
                />

                {/* Labels */}
                <text x="60" y="115" fill="hsl(140 18% 55%)" fontSize="7" textAnchor="middle">P5</text>
                <text x="100" y="115" fill="white" fontSize="7" textAnchor="middle">μ</text>
                <text x="140" y="115" fill="hsl(140 18% 55%)" fontSize="7" textAnchor="middle">P95</text>
              </svg>

              {/* Insight badge - Gold */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.4 }}
                className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-medium"
                style={{ background: "hsl(var(--gold))", color: "hsl(var(--navy))" }}
              >
                90% Confidence
              </motion.div>
            </div>

            <div className="p-6">
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                Quantify the uncertainty
              </h3>
              <p className="text-sm text-muted-foreground">
                Scenario Modelling • Stress Testing • Portfolio Optimisation
              </p>
            </div>
          </motion.div>

          {/* Card 3: Data to Decision - Clean Pipeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="group rounded-2xl bg-white border border-border overflow-hidden hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)] cursor-default"
          >
            <div className="h-56 p-6 relative overflow-hidden flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(var(--navy)) 0%, hsl(210 55% 20%) 100%)" }}>
              {/* Data transformation pipeline with staggered animation */}
              <div className="flex items-center gap-3">
                {/* Raw data - messy grid */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="relative"
                >
                  <div className="w-14 h-14 rounded-lg bg-white/10 flex items-center justify-center overflow-hidden border border-white/10">
                    <div className="grid grid-cols-3 gap-0.5">
                      {[...Array(9)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-3 h-3 bg-white/30 rounded-sm"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 0.2 + Math.random() * 0.4 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + i * 0.05 }}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] text-white/50">raw</span>
                </motion.div>

                {/* Arrow 1 */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="w-8 h-0.5 origin-left"
                  style={{ background: "linear-gradient(90deg, white/30, hsl(var(--forest)))" }}
                />

                {/* Process - gear icon in Forest */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, type: "spring" }}
                  className="relative"
                >
                  <div className="w-14 h-14 rounded-lg flex items-center justify-center border border-white/20" style={{ background: "hsl(var(--forest))" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                  </div>
                  <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] text-white/50">model</span>
                </motion.div>

                {/* Arrow 2 - Gold gradient */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 }}
                  className="w-8 h-0.5 origin-left"
                  style={{ background: "linear-gradient(90deg, hsl(var(--forest)), hsl(var(--gold)))" }}
                />

                {/* Output - Gold chart icon */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, type: "spring" }}
                  className="relative"
                >
                  <div
                    className="w-14 h-14 rounded-lg flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, hsl(var(--gold)), hsl(var(--terracotta)))",
                      boxShadow: "0 0 20px hsl(38 82% 50% / 0.3)"
                    }}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path d="M3 20L9 14L13 18L21 10" stroke="hsl(var(--navy))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M17 10H21V14" stroke="hsl(var(--navy))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] font-medium" style={{ color: "hsl(var(--gold))" }}>insight</span>
                </motion.div>
              </div>

              {/* Insight badge - Terracotta */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 }}
                className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-medium text-white"
                style={{ background: "hsl(var(--terracotta))" }}
              >
                Actionable
              </motion.div>
            </div>

            <div className="p-6">
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                From noise to decision
              </h3>
              <p className="text-sm text-muted-foreground">
                Equity Analysis • Derivative Valuation • Strategic Pricing
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
