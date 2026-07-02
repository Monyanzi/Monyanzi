import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef, useCallback, useState } from "react";
import { ArrowRight } from "lucide-react";

// ─── Tech stack logos ────────────────────────────────────────────────────────
import chatgptLogo from "@/assets/insights/tech-stack/chatgpt-logo.png";
import claudeLogo from "@/assets/insights/tech-stack/claude-logo.webp";
import geminiLogo from "@/assets/insights/tech-stack/gemini-logo.webp";
import grokLogo from "@/assets/insights/tech-stack/grok-logo.png";
import kimiLogo from "@/assets/insights/tech-stack/kimi-logo.png";
import antigravityLogo from "@/assets/insights/tech-stack/gemini-logo.webp";
import claudeCodeLogo from "@/assets/insights/tech-stack/claude-logo.webp";
import codexLogo from "@/assets/insights/tech-stack/codex-logo.png";
import githubLogo from "@/assets/insights/tech-stack/github-logo.png";
import lovableLogo from "@/assets/insights/tech-stack/lovable-logo.png";
import replitLogo from "@/assets/insights/tech-stack/replit-logo.png";
import notebookLmLogo from "@/assets/insights/tech-stack/notebooklm-logo.svg";

interface Tool {
  name: string;
  logo: string;
  href: string;
  description: string;
  tooltip: string;
  delay: number;
  primary?: boolean;
}

const tools: Tool[] = [
  { name: "ChatGPT",     logo: chatgptLogo,    href: "https://chatgpt.com",        description: "Broad reasoning & writing",    tooltip: "My daily thinking partner",       delay: 0.0,  primary: false },
  { name: "Claude",      logo: claudeLogo,     href: "https://claude.ai",          description: "Long-context analysis",        tooltip: "Where I write everything",        delay: 0.06, primary: true  },
  { name: "Gemini",      logo: geminiLogo,     href: "https://gemini.google.com",  description: "Multimodal deep research",     tooltip: "Best for deep research",          delay: 0.12, primary: false },

  { name: "Grok",        logo: grokLogo,       href: "https://grok.com",           description: "Real-time X/web search",       tooltip: "Fast real-time answers",          delay: 0.18, primary: false },
  { name: "Kimi",        logo: kimiLogo,       href: "https://kimi.moonshot.cn",   description: "Massive context windows",      tooltip: "Handles enormous documents",      delay: 0.24, primary: false },
  { name: "Antigravity", logo: antigravityLogo, href: "https://antigravity.google", description: "Agentic code editor",        tooltip: "Full codebase AI editing",        delay: 0.30, primary: false },
  { name: "Claude Code",  logo: claudeCodeLogo, href: "https://docs.anthropic.com/en/docs/claude-code", description: "Terminal coding agent", tooltip: "My go-to coding agent", delay: 0.36, primary: true  },
  { name: "Codex",       logo: codexLogo,      href: "https://openai.com/codex",   description: "Cloud-based coding agent",     tooltip: "Async background coding",         delay: 0.42, primary: false },
  { name: "NotebookLM",  logo: notebookLmLogo, href: "https://notebooklm.google/", description: "Research synthesis & audio",   tooltip: "Turns docs into podcasts",        delay: 0.48, primary: true  },
  { name: "GitHub",      logo: githubLogo,     href: "https://github.com",         description: "Version control & CI/CD",      tooltip: "Where it all ships",              delay: 0.54, primary: false },
  { name: "Lovable",     logo: lovableLogo,    href: "https://lovable.dev",        description: "AI-native app builder",        tooltip: "Built this site with it",         delay: 0.60, primary: true  },
  { name: "Replit",      logo: replitLogo,     href: "https://replit.com",         description: "Cloud-based IDE",              tooltip: "Quick prototyping playground",    delay: 0.66, primary: false },
];

// ─── Single Logo Card with 3D tilt + magnetic hover + tooltip ───────────────
const ToolCard = ({
  tool,
  index,
  compact = false,
  hideName = false,
  className = "",
}: {
  tool: Tool;
  index: number;
  compact?: boolean;
  hideName?: boolean;
  className?: string;
}) => {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-1, 1], [8, -8]), { stiffness: 300, damping: 25 });
  const rotateY = useSpring(useTransform(mouseX, [-1, 1], [-8, 8]), { stiffness: 300, damping: 25 });
  const scale = useSpring(hovered ? 1.08 : 1, { stiffness: 300, damping: 22 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    mouseX.set(x);
    mouseY.set(y);
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
    setHovered(false);
  }, [mouseX, mouseY]);

  // Stagger float animation offset
  const floatDelay = (index % 5) * 0.8;
  const accentVar = index % 2 === 0 ? "--accent" : "--jacarta";

  return (
    <motion.a
      ref={cardRef}
      href={tool.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${tool.name}`}
      initial={{ opacity: 0, y: 24, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: tool.delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ rotateX, rotateY, scale, transformPerspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`group relative block rounded-[2rem] focus-visible:outline-jacarta ${className}`}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 5 + (index % 3),
          delay: floatDelay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative"
      >
        <div
          className={`relative flex flex-col items-center justify-center overflow-hidden rounded-[2rem] border bg-white/80 shadow-[0_18px_44px_-34px_rgba(17,17,17,0.75)] backdrop-blur-3xl transition-all duration-500 before:absolute before:inset-x-3 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent after:absolute after:inset-0 after:bg-[linear-gradient(145deg,hsl(var(--jacarta)/0.09),transparent_44%,hsl(var(--accent)/0.08))] after:opacity-70 after:transition-opacity after:duration-500 hover:bg-white/90 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] group-focus-visible:border-jacarta ${compact ? "min-h-[120px] w-full gap-2 p-3" : "min-h-[104px] w-[148px] gap-2 p-3"} ${tool.primary ? "border-jacarta/25 ring-1 ring-jacarta/10" : "border-white/80"}`}
          style={
            hovered
              ? {
                  borderColor: `hsl(var(${accentVar}) / 0.34)`,
                  boxShadow: `0 8px 24px rgba(0,0,0,0.08)`,
                  transform: `translateY(-3px)`,
                }
              : undefined
          }
        >
          <div
            className="pointer-events-none absolute -inset-10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
            style={{ background: `radial-gradient(circle at 50% 0%, hsl(var(${accentVar}) / 0.28), transparent 62%)` }}
          />

          <div className={`relative z-10 flex items-center justify-center rounded-2xl border border-border/60 bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_10px_20px_-16px_rgba(17,17,17,0.8)] transition-transform duration-300 group-hover:scale-105 ${compact ? "h-12 w-12 p-2" : "h-14 w-14 p-2"}`}>
            <img
              src={tool.logo}
              alt={`${tool.name} logo`}
              className="h-full w-full object-contain"
              loading="eager"
            />
          </div>

          {!hideName && (
            <div className="relative z-10 text-center">
              <span className={`block font-bold leading-tight text-foreground ${compact ? "text-[11px]" : "text-[13px]"}`}>
                {tool.name}
              </span>
              <span className="mt-0.5 block font-mono font-[500] uppercase tracking-[0.06em] text-foreground-muted text-[11px]">
                {tool.description}
              </span>
            </div>
          )}

          {hideName && (
            <div className="relative z-10 text-center">
              <span className="mt-0.5 block font-mono font-[500] uppercase tracking-[0.06em] text-foreground-muted text-[11px]">
                {tool.description}
              </span>
            </div>
          )}

        </div>
      </motion.div>
    </motion.a>
  );
};

// ─── Main Hero ───────────────────────────────────────────────────────────────

const MagneticCTA = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x * 0.2);
    mouseY.set(y * 0.2);
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] overflow-hidden pt-24 pb-12">
      {/* Very subtle top radial glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-40 h-[640px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,hsl(38_55%_42%/0.06),transparent)]" />

      <div className="page-container">
        {/* ── Eyebrow chip — static context only ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 flex justify-center"
        >
          <span className="inline-flex items-center rounded-full bg-[#6D28D9]/10 border border-[#6D28D9]/20 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#6D28D9]">
            MY 2026 STACK
          </span>
        </motion.div>

        {/* ── Headline ── */}
        <div className="mx-auto mb-4 max-w-4xl text-center">
          {/* ── Subline ── */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 text-[1rem] sm:text-[1.125rem] text-foreground-muted leading-relaxed max-w-xl mx-auto"
          >
            Practical AI tools and workflows for founders who ship.
          </motion.p>

          {/* ── Ghost guide link ── */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3"
          >
            <a
              href="/insights/12-ai-tools-in-my-tech-stack"
              className="text-[14px] font-semibold text-[#6D28D9] transition-opacity duration-200 hover:opacity-75"
            >
              → Read the full guide
            </a>
          </motion.div>
        </div>

        {/* ── Logo Constellation ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mb-10 max-w-6xl"
        >
          {/* Mobile 3-column grid — all 12 tools, logo + role only */}
          <div className="sm:hidden px-2">
            <div className="grid grid-cols-3 gap-3">
              {tools.map((tool, i) => (
                <ToolCard
                  key={tool.name}
                  tool={tool}
                  index={i}
                  compact
                  hideName
                  className="h-full"
                />
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="mt-8 flex flex-col items-center gap-3">
              <a
                href="/insights/the-small-business-ai-toolkit"
                style={{ backgroundColor: '#6D28D9' }}
                className="group inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-[14px] font-bold text-white transition-all duration-300 hover:opacity-90 hover:shadow-[0_0_40px_rgba(109,40,217,0.4)] hover:gap-3.5 active:scale-[0.97] relative overflow-hidden before:absolute before:inset-0 before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)] before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700 before:ease-in-out"
              >
                Read the guide
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="/insights"
                className="text-[14px] font-semibold text-[#6D28D9] transition-opacity duration-200 hover:opacity-75"
              >
                or browse all articles →
              </a>
            </div>
          </div>

          {/* Desktop grid */}
          <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-6 justify-items-center gap-4 px-4">
            {tools.map((tool, i) => (
              <ToolCard key={tool.name} tool={tool} index={i} />
            ))}
          </div>
        </motion.div>

        {/* ── CTA — single primary + subtle secondary (desktop only) ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="hidden flex-col items-center gap-4 sm:flex"
        >
          <MagneticCTA>
            <a
              href="/insights/the-small-business-ai-toolkit"
              style={{ backgroundColor: '#6D28D9' }}
              className="group inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-[14px] font-bold text-white transition-all duration-300 hover:opacity-90 hover:shadow-[0_0_40px_rgba(109,40,217,0.4)] hover:gap-3.5 active:scale-[0.97] relative overflow-hidden before:absolute before:inset-0 before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)] before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700 before:ease-in-out"
            >
              Read the guide
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </MagneticCTA>
          <a
            href="/insights"
            className="text-[14px] font-semibold text-[#6D28D9] transition-opacity duration-200 hover:opacity-75"
          >
            or browse all articles →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
