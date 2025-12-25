import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface ExpertiseCategory {
  icon: string;
  title: string;
  description: string;
  skills: string[];
}

const expertiseCategories: ExpertiseCategory[] = [
  {
    icon: "◈",
    title: "Strategy & Growth",
    description: "Business model innovation and market positioning",
    skills: [
      "Blue Ocean Strategy",
      "Business Model Innovation",
      "M&A Due Diligence",
      "Strategic Pricing",
      "Game Theory Applications"
    ]
  },
  {
    icon: "⚡",
    title: "Operations & Automation",
    description: "Streamlining processes and eliminating waste",
    skills: [
      "Workflow Transformation (80% faster)",
      "Process Automation (45% error reduction)",
      "Dashboard Architecture",
      "Pricing Platform Implementation"
    ]
  },
  {
    icon: "◐",
    title: "Risk & Capital",
    description: "Quantifying uncertainty and optimising structure",
    skills: [
      "Reinsurance Treaty Structuring (managed $100M+ portfolio)",
      "Regulatory Capital (Solvency & Capital)",
      "Private Equity Valuation",
      "Structured Risk Solutions"
    ]
  },
  {
    icon: "∑",
    title: "Analytics & Modelling",
    description: "Turning data into defensible decisions",
    skills: [
      "SQL, Python, Power BI, SAS",
      "Cash Flow Valuation & Modelling",
      "Equity Analysis & Valuation",
      "Scenario Modelling",
      "Macroeconomic & FX Analysis"
    ]
  }
];

const industries = [
  "Private Equity & VC",
  "Banks & Lenders",
  "Asset Managers",
  "Insurance & Reinsurance",
  "Family Offices",
  "Corporates & Conglomerates"
];

const softSkills = "Plus: Executive communication • Stakeholder alignment • Change leadership • Global market insight";

const ExpertiseSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax for background elements
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const gradientY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const dotsY = useTransform(scrollYProgress, [0, 1], [40, -80]);
  const glassY = useTransform(scrollYProgress, [0, 1], [180, -100]);
  const glassRotate = useTransform(scrollYProgress, [0, 1], [0, 30]);

  return (
    <section id="expertise" ref={sectionRef} className="py-28 lg:py-36 bg-[hsl(210,55%,30%)] relative overflow-hidden">
      {/* Parallax gradient overlay */}
      <motion.div
        style={{ y: gradientY }}
        className="absolute inset-0 pointer-events-none will-change-transform"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,60%,25%)] via-transparent to-[hsl(210,50%,35%)] opacity-50" />
      </motion.div>

      {/* Glassmorphic floating shapes - MORE VISIBLE */}
      <motion.div
        style={{ y: glassY, rotate: glassRotate }}
        className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full will-change-transform"
      >
        <div
          className="w-full h-full rounded-full backdrop-blur-3xl"
          style={{ background: 'radial-gradient(circle, hsl(38 82% 50% / 0.15) 0%, hsl(38 82% 50% / 0.08) 40%, transparent 70%)' }}
        />
      </motion.div>

      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 80]) }}
        className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full will-change-transform"
      >
        <div
          className="w-full h-full rounded-full backdrop-blur-2xl"
          style={{ background: 'radial-gradient(circle, hsl(160 45% 40% / 0.1) 0%, transparent 70%)' }}
        />
      </motion.div>

      {/* Subtle dot texture with parallax */}
      <motion.div
        style={{ y: dotsY }}
        className="absolute inset-0 opacity-[0.02] pointer-events-none will-change-transform"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(hsl(40 35% 98%) 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
      </motion.div>

      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-xs font-medium tracking-[0.3em] text-white/40 uppercase mb-5 mx-auto w-fit">
            What I Bring Into the Room
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-semibold mb-8 tracking-tight">
            Expertise That Delivers
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
            Spanning strategy, automation, risk, and analytics: each grounded in real-world execution.
          </p>
        </div>

        {/* Capability grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {expertiseCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.2,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ y: -12, transition: { duration: 0.2, ease: "easeOut" } }}
              className="group p-8 rounded-2xl border bg-white/5 border-white/10 backdrop-blur-sm hover:border-[hsl(38,82%,50%)]/50 hover:bg-white/[0.12] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.4)] cursor-default will-change-transform"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl text-[hsl(38,82%,50%)] group-hover:scale-125 transition-transform duration-200 ease-out">
                  {category.icon}
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-xl text-white font-semibold mb-2 group-hover:text-[hsl(38,82%,60%)] transition-colors duration-200">
                    {category.title}
                  </h3>
                  <p className="text-sm text-white/50 mb-4 group-hover:text-white/70 transition-colors duration-200">
                    {category.description}
                  </p>
                  <ul className="space-y-2">
                    {category.skills.map((skill, i) => (
                      <li key={i} className="text-sm text-white/50 leading-relaxed group-hover:text-white/60 transition-colors duration-200">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Industries */}
        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-xs tracking-[0.2em] uppercase text-white/40 mb-6 inline-block">
            Industries
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {industries.map((industry, i) => (
              <span
                key={i}
                className="text-sm text-white/60 hover:text-[hsl(38,82%,50%)] transition-colors cursor-default"
              >
                {industry}
              </span>
            ))}
          </div>
          {/* Soft skills */}
          <p className="text-sm text-white/40 mt-8 italic">
            {softSkills}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
