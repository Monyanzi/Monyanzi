import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const services = [
  { name: "Independent Consulting", icon: "◈" },
  { name: "Strategic Advisory", icon: "↗" },
  { name: "Capital Strategy", icon: "◐" },
  { name: "Portfolio Review", icon: "∑" }
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [80, -200]);

  return (
    <section id="about" ref={sectionRef} className="py-12 lg:py-16 relative overflow-hidden" style={{ background: "hsl(210 45% 96%)" }}>
      {/* Organic floating shapes with parallax */}
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-10 -left-10 w-[500px] h-[500px] opacity-[0.06] will-change-transform pointer-events-none"
      >
        <div
          className="w-full h-full"
          style={{
            background: 'radial-gradient(circle, hsl(var(--forest)) 0%, transparent 70%)',
            borderRadius: '60% 40% 50% 50% / 50% 60% 40% 50%'
          }}
        />
      </motion.div>
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-0 right-0 w-[450px] h-[450px] opacity-[0.05] will-change-transform pointer-events-none"
      >
        <div
          className="w-full h-full"
          style={{
            background: 'radial-gradient(circle, hsl(var(--terracotta)) 0%, transparent 70%)',
            borderRadius: '40% 60% 55% 45% / 55% 45% 55% 45%'
          }}
        />
      </motion.div>

      {/* Dot texture */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(hsl(var(--navy)) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-medium tracking-[0.3em] uppercase mb-5 mx-auto w-fit"
            style={{ color: "hsl(var(--terracotta))" }}
          >
            Who You Work With
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 tracking-tight"
          >
            Your Advisor
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-20 h-[2px] mx-auto origin-center"
            style={{ background: "linear-gradient(90deg, transparent, hsl(var(--terracotta)), transparent)" }}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left column: Big visual credential card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
            whileHover={{ y: -10, transition: { duration: 0.25 } }}
            className="rounded-3xl overflow-hidden cursor-default will-change-transform group"
            style={{
              background: "linear-gradient(135deg, hsl(var(--forest)) 0%, hsl(140 18% 30%) 100%)",
              boxShadow: "0 20px 60px -20px hsl(var(--forest) / 0.4)"
            }}
          >
            {/* Visual header area */}
            <div className="p-10 pb-8 relative">
              {/* Accent glow */}
              <div
                className="absolute top-0 right-0 w-48 h-48 opacity-25 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, hsl(var(--gold)) 0%, transparent 70%)',
                  borderRadius: '0 0 0 100%'
                }}
              />

              {/* Animated metrics visual */}
              <div className="flex items-center gap-8 mb-8">
                {/* Credential rings */}
                <div className="relative w-24 h-24">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    {/* Outer ring - Actuary */}
                    <motion.circle
                      cx="50" cy="50" r="45"
                      fill="none"
                      stroke="white"
                      strokeOpacity="0.3"
                      strokeWidth="4"
                      strokeDasharray="283"
                      initial={{ strokeDashoffset: 283 }}
                      whileInView={{ strokeDashoffset: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.3 }}
                    />
                    {/* Inner ring - MBA */}
                    <motion.circle
                      cx="50" cy="50" r="35"
                      fill="none"
                      stroke="hsl(var(--gold))"
                      strokeWidth="4"
                      strokeDasharray="220"
                      initial={{ strokeDashoffset: 220 }}
                      whileInView={{ strokeDashoffset: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.6 }}
                    />
                    {/* Center value */}
                    <motion.text
                      x="50" y="50"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="white"
                      fontSize="12"
                      fontWeight="600"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1 }}
                    >
                      2-in-1
                    </motion.text>
                  </svg>
                </div>

                <div>
                  <h3 className="font-display text-2xl text-white font-semibold mb-2">
                    Why I'm Credible
                  </h3>
                  <p className="text-white/60 text-sm">
                    Actuary + MBA in one advisor
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-white/80 leading-relaxed text-lg mb-6">
                I don't just advise - I <span className="text-white font-medium">execute</span>.
                I build the models myself: valuations, stress tests, pricing frameworks.
                Then translate them into strategy your board will back.
              </p>

              {/* Stats row - to fill empty space */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { value: "9+", label: "Years" },
                  { value: "50+", label: "Projects" },
                  { value: "3", label: "Industries" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="text-center p-3 rounded-xl bg-white/10"
                  >
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-xs text-white/60">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Credential badges */}
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "Actuary", glow: false },
                  { label: "Executive MBA", glow: false },
                  { label: "Board Ready", glow: true }
                ].map((badge, i) => (
                  <motion.span
                    key={badge.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + i * 0.1, type: "spring", stiffness: 200 }}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${badge.glow
                      ? "text-[hsl(var(--navy))]"
                      : "text-white/90 bg-white/10 hover:bg-white/20"
                      }`}
                    style={badge.glow ? {
                      background: "linear-gradient(135deg, hsl(var(--gold)), hsl(var(--terracotta)))",
                      boxShadow: "0 4px 20px hsl(var(--gold) / 0.3)"
                    } : undefined}
                  >
                    {badge.label}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right column: Services + Delivery */}
          <div className="space-y-8">
            {/* What You Get - visual-first */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.34, 1.56, 0.64, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="p-8 rounded-3xl bg-white border border-border cursor-default will-change-transform group"
              style={{ boxShadow: "0 8px 32px -12px rgba(0,0,0,0.1)" }}
            >
              {/* Visual: animated checkline */}
              <div className="mb-6 h-16 flex items-center">
                <svg className="w-full h-12" viewBox="0 0 300 48">
                  {/* Animated line */}
                  <motion.line
                    x1="0" y1="24" x2="300" y2="24"
                    stroke="hsl(var(--border))"
                    strokeWidth="2"
                    strokeDasharray="8 4"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  />
                  {/* Checkpoints */}
                  {[50, 150, 250].map((x, i) => (
                    <motion.g key={i}>
                      <motion.circle
                        cx={x} cy="24" r="12"
                        fill="white"
                        stroke="hsl(var(--forest))"
                        strokeWidth="2"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.2, type: "spring" }}
                      />
                      <motion.path
                        d={`M${x - 4} 24 L${x - 1} 27 L${x + 5} 21`}
                        fill="none"
                        stroke="hsl(var(--forest))"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.2, duration: 0.3 }}
                      />
                    </motion.g>
                  ))}
                  {/* Labels */}
                  <text x="50" y="44" textAnchor="middle" fill="hsl(210 10% 45%)" fontSize="9">Analysis</text>
                  <text x="150" y="44" textAnchor="middle" fill="hsl(210 10% 45%)" fontSize="9">Model</text>
                  <text x="250" y="44" textAnchor="middle" fill="hsl(210 10% 45%)" fontSize="9">Decision</text>
                </svg>
              </div>

              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                What You Get
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Capital strategy, M&A due diligence, portfolio stress-testing, and pricing models.
                <span className="text-foreground font-medium"> Clear analysis. Fast turnaround. Decisions you can defend.</span>
              </p>
            </motion.div>

            {/* Services grid - bigger cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
              className="p-8 rounded-3xl border border-border bg-gradient-to-br from-white to-[hsl(40,35%,98%)]"
              style={{ boxShadow: "0 8px 32px -12px rgba(0,0,0,0.1)" }}
            >
              <h3 className="text-xs font-mono tracking-[0.2em] uppercase mb-6" style={{ color: "hsl(var(--terracotta))" }}>
                Where Clients Bring Me In
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {services.map((service, i) => (
                  <motion.a
                    key={service.name}
                    href={`mailto:moses.k.nyanzi@gmail.com?subject=Enquiry: ${service.name}`}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.08, type: "spring", stiffness: 200 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="p-5 rounded-2xl border border-border bg-white flex items-center gap-4 cursor-pointer transition-all duration-200 hover:border-[hsl(var(--terracotta))]/40 hover:shadow-lg"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-lg text-white shrink-0"
                      style={{ background: "linear-gradient(135deg, hsl(var(--forest)), hsl(var(--gold)))" }}
                    >
                      {service.icon}
                    </div>
                    <span className="text-sm font-medium text-foreground">{service.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
