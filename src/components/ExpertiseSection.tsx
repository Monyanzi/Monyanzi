import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface ExpertiseCategory {
  title: string;
  tagline: string;
  skills: string[];
  bgColor: string;
  accentColor: string;
  visual: JSX.Element;
}

// Categories with UNIQUE visuals (different from ProofSection)
const expertiseCategories: ExpertiseCategory[] = [
  {
    title: "Strategy & Growth",
    tagline: "Navigate complexity, capture opportunity",
    skills: ["Blue Ocean Strategy", "Business Model Innovation", "M&A Due Diligence", "Strategic Pricing"],
    bgColor: "linear-gradient(135deg, hsl(38 82% 50%) 0%, hsl(38 75% 45%) 100%)",
    accentColor: "hsl(38 82% 50%)",
    visual: (
      <svg className="w-full h-full" viewBox="0 0 200 120">
        {/* Chess board pattern - strategic thinking */}
        <defs>
          <pattern id="chess" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="10" height="10" fill="white" fillOpacity="0.15" />
            <rect x="10" y="10" width="10" height="10" fill="white" fillOpacity="0.15" />
          </pattern>
        </defs>
        <rect x="50" y="30" width="60" height="60" fill="url(#chess)" rx="4" />

        {/* Chess piece (king) - strategic leadership with floating animation */}
        <motion.g
          animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <circle cx="130" cy="60" r="22" fill="white" fillOpacity="0.2" />
          <path d="M130 45 L130 55 M125 50 L135 50 M122 68 L138 68 L135 58 L125 58 Z" stroke="white" strokeWidth="2.5" fill="none" />
        </motion.g>

        {/* Growth arrow */}
        <motion.path
          d="M155 75 L175 45"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <motion.path
          d="M170 45 L175 45 L175 50"
          stroke="white"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Operations & Automation",
    tagline: "Streamline processes, eliminate waste",
    skills: ["Workflow Transformation", "Process Automation", "Dashboard Architecture", "Platform Implementation"],
    bgColor: "linear-gradient(135deg, hsl(140 18% 40%) 0%, hsl(140 18% 35%) 100%)",
    accentColor: "hsl(140 18% 40%)",
    visual: (
      <svg className="w-full h-full" viewBox="0 0 200 120">
        {/* Gear icons - automation */}
        <motion.g
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "60px 50px" }}
        >
          <circle cx="60" cy="50" r="18" fill="none" stroke="white" strokeOpacity="0.4" strokeWidth="2" />
          <circle cx="60" cy="50" r="8" fill="white" fillOpacity="0.3" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <rect
              key={i}
              x="57"
              y="28"
              width="6"
              height="8"
              rx="1"
              fill="white"
              fillOpacity="0.4"
              transform={`rotate(${angle} 60 50)`}
            />
          ))}
        </motion.g>

        {/* Smaller connected gear */}
        <motion.g
          initial={{ rotate: 0 }}
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "95px 70px" }}
        >
          <circle cx="95" cy="70" r="12" fill="none" stroke="white" strokeOpacity="0.3" strokeWidth="1.5" />
          <circle cx="95" cy="70" r="5" fill="white" fillOpacity="0.2" />
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <rect
              key={i}
              x="93"
              y="55"
              width="4"
              height="6"
              rx="1"
              fill="white"
              fillOpacity="0.3"
              transform={`rotate(${angle} 95 70)`}
            />
          ))}
        </motion.g>

        {/* Flow arrow to result */}
        <motion.path
          d="M115 60 L145 60"
          stroke="hsl(38 82% 50%)"
          strokeWidth="2.5"
          strokeDasharray="4 3"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        />

        {/* Checkmark result */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, type: "spring" }}
        >
          <circle cx="165" cy="60" r="18" fill="hsl(38 82% 50%)" />
          <path d="M156 60 L162 66 L174 54" stroke="hsl(140 18% 25%)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </motion.g>
      </svg>
    ),
  },
  {
    title: "Risk & Capital",
    tagline: "Quantify uncertainty, optimize structure",
    skills: ["Reinsurance Structuring", "Regulatory Capital (SAM)", "Private Equity Valuation", "Structured Solutions"],
    bgColor: "linear-gradient(135deg, hsl(20 55% 55%) 0%, hsl(20 50% 48%) 100%)",
    accentColor: "hsl(20 55% 55%)",
    visual: (
      <svg className="w-full h-full" viewBox="0 0 200 120">
        {/* Balance scale - risk/reward balance */}
        <line
          x1="100"
          y1="25"
          x2="100"
          y2="90"
          stroke="white"
          strokeOpacity="0.4"
          strokeWidth="3"
        />

        {/* Scale beam - with gentle rocking animation */}
        <motion.line
          x1="50"
          y1="45"
          x2="150"
          y2="45"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          animate={{ rotate: [-6, 6, -6] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          style={{ transformOrigin: "100px 45px" }}
        />

        {/* Left pan - Risk */}
        <g>
          <line x1="50" y1="45" x2="35" y2="70" stroke="white" strokeOpacity="0.5" strokeWidth="1.5" />
          <line x1="50" y1="45" x2="65" y2="70" stroke="white" strokeOpacity="0.5" strokeWidth="1.5" />
          <ellipse cx="50" cy="72" rx="18" ry="6" fill="white" fillOpacity="0.25" />
          <text x="50" y="90" fill="white" fillOpacity="0.7" fontSize="9" textAnchor="middle">Risk</text>
        </g>

        {/* Right pan - Capital */}
        <g>
          <line x1="150" y1="45" x2="135" y2="65" stroke="white" strokeOpacity="0.5" strokeWidth="1.5" />
          <line x1="150" y1="45" x2="165" y2="65" stroke="white" strokeOpacity="0.5" strokeWidth="1.5" />
          <ellipse cx="150" cy="67" rx="18" ry="6" fill="hsl(38 82% 50%)" fillOpacity="0.6" />
          <text x="150" y="85" fill="white" fontSize="9" textAnchor="middle">Capital</text>
        </g>

        {/* Balance indicator */}
        <circle cx="100" cy="25" r="6" fill="hsl(38 82% 50%)" />
      </svg>
    ),
  },
  {
    title: "Analytics & Modelling",
    tagline: "Data → Decisions you can defend",
    skills: ["SQL, Python, Power BI", "Cash Flow Modelling", "Equity Analysis", "Scenario Modelling"],
    bgColor: "linear-gradient(135deg, hsl(210 45% 55%) 0%, hsl(210 45% 48%) 100%)",
    accentColor: "hsl(210 45% 55%)",
    visual: (
      <svg className="w-full h-full" viewBox="0 0 200 120">
        {/* Database/data layers with pulsing glow */}
        <g>
          <motion.ellipse
            cx="45" cy="40" rx="20" ry="8"
            fill="white"
            animate={{ fillOpacity: [0.2, 0.5, 0.2], scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            style={{ transformOrigin: "45px 40px" }}
          />
          <rect x="25" y="40" width="40" height="20" fill="white" fillOpacity="0.2" />
          <ellipse cx="45" cy="60" rx="20" ry="8" fill="white" fillOpacity="0.3" />
          <line x1="35" y1="50" x2="55" y2="50" stroke="white" strokeOpacity="0.3" strokeWidth="1" />
        </g>

        {/* Processing arrows */}
        <path
          d="M75 50 L95 50"
          stroke="hsl(38 82% 50%)"
          strokeWidth="2"
          strokeDasharray="3 2"
        />

        {/* Code/function symbol */}
        <g>
          <rect x="100" y="35" width="30" height="30" rx="4" fill="white" fillOpacity="0.2" />
          <text x="115" y="55" fill="white" fontSize="14" fontFamily="monospace" textAnchor="middle">f(x)</text>
        </g>

        {/* Output arrow */}
        <path
          d="M140 50 L160 50"
          stroke="hsl(38 82% 50%)"
          strokeWidth="2"
          strokeDasharray="3 2"
        />

        {/* Insight output with pulsing animation */}
        <g>
          <motion.rect
            x="165" y="38" width="28" height="24" rx="12"
            fill="hsl(38 82% 50%)"
            animate={{ scale: [1, 1.25, 1], opacity: [1, 0.8, 1] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
            style={{ transformOrigin: "179px 50px" }}
          />
          <path d="M173 50 L182 50 M177 46 L177 54" stroke="hsl(210 45% 25%)" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Labels */}
        <text x="45" y="80" fill="white" fillOpacity="0.6" fontSize="8" textAnchor="middle">Data</text>
        <text x="115" y="80" fill="white" fillOpacity="0.6" fontSize="8" textAnchor="middle">Model</text>
        <text x="179" y="80" fill="white" fillOpacity="0.6" fontSize="8" textAnchor="middle">Insight</text>
      </svg>
    ),
  },
];

const industries = [
  "Private Equity & VC",
  "Banks & Lenders",
  "Asset Managers",
  "Insurance & Reinsurance",
  "Family Offices",
  "Corporates"
];

const ExpertiseSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const gradientY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section id="expertise" ref={sectionRef} className="py-12 lg:py-16 relative overflow-hidden" style={{ background: "hsl(40 35% 98%)" }}>
      {/* Parallax gradient overlay */}
      <motion.div
        style={{ y: gradientY }}
        className="absolute inset-0 pointer-events-none will-change-transform"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-transparent" />
      </motion.div>

      {/* Floating shapes */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.06 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full will-change-transform pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(38 82% 50%) 0%, transparent 70%)' }}
      />

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.05 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full will-change-transform pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(140 18% 40%) 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Section header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-medium tracking-[0.3em] uppercase mb-4 mx-auto w-fit"
            style={{ color: "hsl(38 82% 50%)" }}
          >
            What I Bring Into the Room
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground font-semibold mb-4 tracking-tight"
          >
            Expertise That Delivers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto font-light"
          >
            Spanning strategy, automation, risk, and analytics - grounded in real execution.
          </motion.p>
        </div>

        {/* Visual-first cards - 2x2 grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {expertiseCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group rounded-2xl bg-white border border-border overflow-hidden cursor-default hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.12)]"
            >
              {/* Visual area */}
              <div
                className="h-36 relative overflow-hidden"
                style={{ background: category.bgColor }}
              >
                {category.visual}
              </div>

              {/* Content area */}
              <div className="p-6">
                <h3 className="font-display text-xl text-foreground font-semibold mb-1 group-hover:text-[hsl(38_82%_50%)] transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm font-medium mb-4" style={{ color: category.accentColor }}>
                  {category.tagline}
                </p>

                {/* Skills as tags - with staggered animation */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.3 + skillIndex * 0.08,
                        type: "spring",
                        stiffness: 200
                      }}
                      className="px-3 py-1 rounded-full text-xs text-muted-foreground border border-border hover:border-[hsl(38_82%_50%)]/50 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Industries */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center pt-8 border-t border-border/50"
        >
          <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4">
            Industries I Work With
          </p>
          <div className="flex flex-wrap justify-center gap-x-2 gap-y-2 max-w-3xl mx-auto">
            {industries.map((industry, i) => (
              <motion.span
                key={industry}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.06 }}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[hsl(38_82%_50%)] transition-colors cursor-default"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "hsl(38 82% 50%)" }}
                />
                {industry}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
