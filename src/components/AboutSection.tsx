import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const services = [
  "Independent Consulting",
  "Strategic Advisory",
  "Capital Strategy",
  "Portfolio Review"
];

const deliveryPoints = [
  {
    title: "Proven Track Record",
    description: "Accelerated rate deployment from 6 months to 24 hours. Cut analytical turnaround by 80% through process automation."
  },
  {
    title: "Rigour",
    description: "Actuary + MBA. Financial models that hold up to board scrutiny."
  },
  {
    title: "Execution",
    description: "Not just strategy: I build what I recommend."
  }
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [80, -200]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20]);

  return (
    <section id="about" ref={sectionRef} className="py-28 lg:py-36 bg-background relative overflow-hidden">
      {/* Organic floating shapes with parallax */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          style={{ y: y1, rotate: rotate1 }}
          className="absolute -top-10 -left-10 w-[500px] h-[500px] opacity-[0.12] will-change-transform"
        >
          <div
            className="w-full h-full animate-float-slow"
            style={{
              background: 'radial-gradient(circle, hsl(140 18% 30%) 0%, transparent 70%)',
              borderRadius: '60% 40% 50% 50% / 50% 60% 40% 50%'
            }}
          />
        </motion.div>
        <motion.div
          style={{ y: y2, rotate: rotate2 }}
          className="absolute bottom-0 right-0 w-[450px] h-[450px] opacity-[0.10] will-change-transform"
        >
          <div
            className="w-full h-full animate-float-medium"
            style={{
              background: 'radial-gradient(circle, hsl(20 55% 53%) 0%, transparent 70%)',
              borderRadius: '40% 60% 55% 45% / 55% 45% 55% 45%'
            }}
          />
        </motion.div>
        {/* Subtle dot texture */}
        <div
          className="absolute inset-0 opacity-[0.012]"
          style={{
            backgroundImage: `radial-gradient(hsl(210 55% 12%) 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-xs font-medium tracking-[0.3em] text-[hsl(20,55%,53%)] uppercase mb-5 mx-auto w-fit">
            Who You Work With
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-8 tracking-tight">
            Your Advisor
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[hsl(20,55%,53%)] to-transparent mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column: What You Get + How I Deliver */}
          <div className="space-y-8">
            {/* What You Get card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              whileHover={{ y: -12, transition: { duration: 0.2, ease: "easeOut" } }}
              className="p-8 rounded-2xl bg-gradient-to-br from-[hsl(40,35%,97%)] to-white border border-border gradient-border-top hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)] cursor-default will-change-transform group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200"
                  style={{ background: 'linear-gradient(135deg, hsl(140 18% 30%), hsl(38 82% 50%))' }}>
                  <span className="text-xl text-white">◈</span>
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground">
                    What You Get
                  </h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Capital strategy, M&A due diligence, portfolio stress-testing, and pricing models.
                Clear analysis. Fast turnaround. Decisions you can defend.
              </p>
            </motion.div>

            {/* How I Deliver card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.2, delay: 0.1, ease: "easeOut" }}
              whileHover={{ y: -12, transition: { duration: 0.2, ease: "easeOut" } }}
              className="p-8 rounded-2xl bg-white border border-border hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)] cursor-default will-change-transform group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200"
                  style={{ background: 'linear-gradient(135deg, hsl(20 55% 53%), hsl(38 82% 50%))' }}>
                  <span className="text-xl text-white">↗</span>
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground">
                    How I Deliver
                  </h3>
                </div>
              </div>
              <ul className="space-y-4">
                {deliveryPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3 group/item">
                    <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform"
                      style={{ background: 'linear-gradient(135deg, hsl(140 18% 30%), hsl(20 55% 53%))' }} />
                    <div>
                      <strong className="text-foreground">{point.title}:</strong>
                      <span className="text-muted-foreground ml-1">{point.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right column: Credibility + Services */}
          <div className="space-y-8">
            {/* Credibility card - enhanced with gradient overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.2, delay: 0.2, ease: "easeOut" }}
              whileHover={{ y: -12, transition: { duration: 0.2, ease: "easeOut" } }}
              className="p-8 rounded-2xl text-white relative overflow-hidden hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.3)] cursor-default will-change-transform group"
              style={{ background: 'linear-gradient(135deg, hsl(140 18% 40%), hsl(140 18% 35%))' }}
            >
              {/* Subtle gradient accent */}
              <div className="absolute top-0 right-0 w-48 h-48 opacity-20 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, hsl(20 55% 53%) 0%, transparent 70%)',
                  borderRadius: '0 0 0 100%'
                }} />
              <div className="relative">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200"
                    style={{ background: 'linear-gradient(135deg, hsl(38 82% 50%), hsl(20 55% 53%))' }}>
                    <span className="text-xl text-white">∑</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold">
                      Why I'm Credible
                    </h3>
                  </div>
                </div>
                <p className="text-white/80 leading-relaxed mb-6">
                  I don't just advise. I <em className="text-white not-italic font-medium">execute</em>. Actuarial training means I build the models myself: valuations, stress tests, pricing frameworks. MBA means I translate them into strategy your board will back. You get rigorous analysis <em className="text-white not-italic">and</em> clear recommendations from one advisor.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 rounded-full bg-white/10 text-sm text-white/90 hover:bg-white/20 transition-colors cursor-default">Actuary</span>
                  <span className="px-4 py-2 rounded-full bg-white/10 text-sm text-white/90 hover:bg-white/20 transition-colors cursor-default">Executive MBA</span>
                  <span className="px-4 py-2 rounded-full text-sm hover:scale-105 transition-transform cursor-default"
                    style={{ background: 'linear-gradient(135deg, hsl(38 82% 50% / 0.3), hsl(20 55% 53% / 0.3))', color: 'hsl(38 82% 60%)' }}>$100M+ Managed</span>
                </div>
              </div>
            </motion.div>

            {/* Services - enhanced with hover effects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.2, delay: 0.3, ease: "easeOut" }}
              whileHover={{ y: -12, transition: { duration: 0.2, ease: "easeOut" } }}
              className="p-8 rounded-2xl border border-border bg-white gradient-border-top hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)] cursor-default will-change-transform"
            >
              <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-[hsl(20,55%,53%)] mb-6">
                Where Clients Bring Me In
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {services.map((service) => (
                  <a
                    key={service}
                    href={`mailto:moses.k.nyanzi@gmail.com?subject=Enquiry: ${service}`}
                    className="p-4 rounded-xl border border-border text-sm text-foreground hover:border-[hsl(20,55%,53%)]/50 hover:bg-gradient-to-br hover:from-[hsl(20,55%,53%)]/5 hover:to-[hsl(38,82%,50%)]/5 hover:-translate-y-1 hover:shadow-md transition-all duration-200 text-center"
                  >
                    {service}
                  </a>
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
