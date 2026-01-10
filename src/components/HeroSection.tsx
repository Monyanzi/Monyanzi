import { useState } from "react";
import { ArrowRight, MapPin, Linkedin, TrendingUp, DollarSign, Clock, Settings, Search, Users } from "lucide-react";
import { motion } from "motion/react";
import DiagnosticFlow from "./DiagnosticFlow";
import heroProfile from "../assets/hero-profile.jpg";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Core expertise items with unique icons
  const coreExpertise = [
    { icon: <Settings className="w-5 h-5" />, title: "Strategic Analysis", subtitle: "& Modeling" },
    { icon: <TrendingUp className="w-5 h-5" />, title: "Process", subtitle: "Optimisation" },
    { icon: <Search className="w-5 h-5" />, title: "M&A Due", subtitle: "Diligence" },
  ];

  // Key results - unique metrics not repeated elsewhere
  const keyResults = [
    { label: "Efficiency Gains", icon: <TrendingUp className="w-4 h-4" /> },
    { label: "Cost Savings", icon: <DollarSign className="w-4 h-4" /> },
    { label: "Faster Decisions", icon: <Clock className="w-4 h-4" /> },
  ];

  return (
    <>
      {/* Light cream background for Hero */}
      <section className="relative min-h-screen overflow-hidden" style={{ background: "hsl(40 35% 98%)" }}>

        {/* Mobile Background Photo - visible only on mobile */}
        <div className="lg:hidden absolute inset-0 z-0">
          <img
            src={heroProfile}
            alt="Moses Nyanzi"
            className="w-full h-full object-cover object-top"
          />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-[hsl(40_35%_98%)]" />
        </div>

        {/* Subtle background elements - desktop only */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block">
          {/* Subtle gradient orbs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.04 }}
            transition={{ duration: 1.5 }}
            className="absolute -top-20 -left-20 w-[600px] h-[600px] rounded-full"
            style={{ background: 'radial-gradient(circle, hsl(38 82% 50%) 0%, transparent 70%)' }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.03 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="absolute -bottom-32 right-1/4 w-[400px] h-[400px] rounded-full"
            style={{ background: 'radial-gradient(circle, hsl(140 18% 40%) 0%, transparent 70%)' }}
          />

          {/* Dot pattern */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.02 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(hsl(210 55% 25%) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="min-h-screen grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-20 lg:py-24">

            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xs font-semibold tracking-[0.3em] uppercase text-white lg:text-muted-foreground"
              >
                Strategy · Logic · Results
              </motion.p>

              {/* Name and Title */}
              <div className="space-y-2">
                <div className="flex items-baseline gap-4 flex-wrap">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white lg:text-foreground tracking-tight"
                  >
                    Moses<br className="hidden sm:block" /> Nyanzi
                  </motion.h1>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-sm font-medium text-[hsl(38_82%_50%)] whitespace-nowrap"
                  >
                    Actuary | INSEAD MBA
                  </motion.span>
                </div>
              </div>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-lg md:text-xl text-white/90 lg:text-muted-foreground max-w-md leading-relaxed"
              >
                For senior leaders who need clarity on complex decisions, fast.
              </motion.p>

              {/* Core Expertise Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="space-y-3"
              >
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/70 lg:text-muted-foreground">
                  Core Expertise
                </p>
                <div className="flex flex-wrap gap-3">
                  {coreExpertise.map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-border hover:border-[hsl(38_82%_50%)]/40 hover:shadow-md transition-all cursor-default group"
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform"
                        style={{ background: "linear-gradient(135deg, hsl(38 82% 50%), hsl(38 75% 45%))", color: "white" }}
                      >
                        {item.icon}
                      </div>
                      <div className="text-sm">
                        <p className="font-semibold text-foreground leading-tight">{item.title}</p>
                        <p className="text-muted-foreground text-xs">{item.subtitle}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Key Results */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="space-y-3"
              >
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                  Key Results
                </p>
                <div className="flex flex-wrap gap-4">
                  {keyResults.map((result, i) => (
                    <motion.div
                      key={result.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.1 + i * 0.1 }}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/80 border border-border/50"
                    >
                      <div style={{ color: "hsl(38 82% 50%)" }}>{result.icon}</div>
                      <span className="text-sm text-foreground font-medium">{result.label}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Location & LinkedIn */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
                className="flex items-center gap-4 text-sm text-muted-foreground"
              >
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  <span>Johannesburg</span>
                </div>
                <a
                  href="https://www.linkedin.com/in/moses-nyanzi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[hsl(38_82%_50%)] hover:text-[hsl(38_82%_40%)] transition-colors underline underline-offset-2"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <motion.button
                  onClick={() => setIsModalOpen(true)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wide text-white shadow-lg hover:shadow-xl transition-shadow"
                  style={{
                    background: "linear-gradient(135deg, hsl(20 55% 53%), hsl(38 82% 50%))",
                  }}
                >
                  Let's Talk
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                <a
                  href="#proof"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-[hsl(38_82%_50%)] transition-colors"
                >
                  See results I've delivered
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column - Photo */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Photo container with subtle styling */}
                <motion.div
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="relative rounded-3xl overflow-hidden shadow-2xl"
                  style={{ aspectRatio: "3/4" }}
                >
                  <img
                    src={heroProfile}
                    alt="Moses Nyanzi"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Subtle gradient overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>

                {/* Floating accent elements */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, type: "spring" }}
                  className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, hsl(var(--forest)), hsl(140 18% 35%))",
                    boxShadow: "0 8px 32px -8px hsl(140 18% 30% / 0.5)"
                  }}
                >
                  <Users className="w-10 h-10 text-white" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, type: "spring" }}
                  className="absolute -top-4 -right-4 px-4 py-2 rounded-full text-sm font-semibold"
                  style={{
                    background: "hsl(38 82% 50%)",
                    color: "hsl(210 55% 15%)",
                    boxShadow: "0 4px 20px hsl(38 82% 50% / 0.4)"
                  }}
                >
                  9+ Years
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>


      </section>

      <DiagnosticFlow isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default HeroSection;
