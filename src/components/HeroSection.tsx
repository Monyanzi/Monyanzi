import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef, useCallback, useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import chatgptLogo from "@/assets/insights/tech-stack/chatgpt-logo.png";
import claudeLogo from "@/assets/insights/tech-stack/claude-logo.webp";
import geminiLogo from "@/assets/insights/tech-stack/gemini-logo.webp";
import grokLogo from "@/assets/insights/tech-stack/grok-logo.png";
import kimiLogo from "@/assets/insights/tech-stack/kimi-logo.png";
import claudeCodeLogo from "@/assets/insights/tech-stack/claude-logo.webp";
import codexLogo from "@/assets/insights/tech-stack/codex-logo.png";
import githubLogo from "@/assets/insights/tech-stack/github-logo.png";
import lovableLogo from "@/assets/insights/tech-stack/lovable-logo.png";
import notebookLmLogo from "@/assets/insights/tech-stack/notebooklm-logo.svg";

/** Inline brand SVG — Antigravity green diamond */
const AntigravityIcon = () => (
  <svg viewBox="0 0 28 28" className="h-7 w-7" aria-hidden="true">
    <defs>
      <linearGradient id="ag-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#34d399" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
    </defs>
    <path d="M14 2 L26 14 L14 26 L2 14 Z" fill="url(#ag-grad)" />
    <path d="M14 8 L20 14 L14 20 L8 14 Z" fill="white" fillOpacity="0.55" />
  </svg>
);

/** Inline brand SVG — n8n logo */
const N8nIcon = () => (
  <svg viewBox="0 0 28 28" className="h-7 w-7" aria-hidden="true">
    <rect x="2" y="8" width="8" height="12" rx="2" fill="#ff3f7f" />
    <rect x="10" y="4" width="8" height="20" rx="2" fill="#ea2f6c" />
    <rect x="18" y="8" width="8" height="12" rx="2" fill="#ff3f7f" />
    <circle cx="6" cy="14" r="1.5" fill="white" />
    <circle cx="14" cy="14" r="1.5" fill="white" />
    <circle cx="22" cy="14" r="1.5" fill="white" />
  </svg>
);

interface Tool {
  name: string;
  logo?: string;
  icon?: LucideIcon;
  iconColor?: string;
  customIcon?: "antigravity" | "n8n";
  href: string;
  description: string;
  tooltip: string;
  delay: number;
  primary?: boolean;
}

const tools: Tool[] = [
  { name: "ChatGPT", logo: chatgptLogo, href: "https://chatgpt.com", description: "Broad reasoning & writing", tooltip: "My daily thinking partner", delay: 0 },
  { name: "Claude", logo: claudeLogo, href: "https://claude.ai", description: "Long-context analysis", tooltip: "Where I write everything", delay: 0.04, primary: true },
  { name: "Gemini", logo: geminiLogo, href: "https://gemini.google.com", description: "Multimodal research", tooltip: "Best for deep research", delay: 0.08 },
  { name: "Grok", logo: grokLogo, href: "https://grok.com", description: "Real-time X/web search", tooltip: "Fast real-time answers", delay: 0.12 },
  { name: "Kimi", logo: kimiLogo, href: "https://kimi.moonshot.cn", description: "Massive context windows", tooltip: "Handles enormous documents", delay: 0.16 },
  { name: "Antigravity", customIcon: "antigravity", href: "https://antigravity.google", description: "Agentic code editor", tooltip: "Full codebase AI editing", delay: 0.2 },
  { name: "Claude Code", logo: claudeCodeLogo, href: "https://docs.anthropic.com/en/docs/claude-code", description: "Terminal coding agent", tooltip: "My go-to coding agent", delay: 0.24, primary: true },
  { name: "Codex", logo: codexLogo, href: "https://openai.com/codex", description: "Cloud-based coding agent", tooltip: "Async background coding", delay: 0.28 },
  { name: "NotebookLM", logo: notebookLmLogo, href: "https://notebooklm.google/", description: "Research synthesis & audio", tooltip: "Turns docs into podcasts", delay: 0.32, primary: true },
  { name: "GitHub", logo: githubLogo, href: "https://github.com", description: "Version control & CI/CD", tooltip: "Where it all ships", delay: 0.36 },
  { name: "Lovable", logo: lovableLogo, href: "https://lovable.dev", description: "AI-native app builder", tooltip: "Built this site with it", delay: 0.4, primary: true },
  { name: "n8n", customIcon: "n8n", href: "https://n8n.io", description: "Cloud-based automation", tooltip: "Automation workflow builder", delay: 0.44 },
];

const ToolCard = ({
  tool,
}: {
  tool: Tool;
}) => {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [hovered, setHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-1, 1], [3, -3]), { stiffness: 280, damping: 28 });
  const rotateY = useSpring(useTransform(mouseX, [-1, 1], [-3, 3]), { stiffness: 280, damping: 28 });
  const scale = useSpring(hovered ? 1.025 : 1, { stiffness: 260, damping: 24 });
  const Icon = tool.icon;

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
    mouseY.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
    setHovered(false);
  }, [mouseX, mouseY]);

  return (
    <motion.a
      ref={cardRef}
      href={tool.href}
      target="_blank"
      rel="noopener noreferrer"
      title={tool.tooltip}
      aria-label={`Open ${tool.name}`}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.48, delay: tool.delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ rotateX, rotateY, scale, transformPerspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`group relative flex min-h-[110px] flex-col items-center justify-center overflow-hidden rounded-[1.35rem] border bg-white/84 px-3 py-4 text-center shadow-[0_16px_38px_-30px_rgba(17,17,17,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:border-jacarta/24 hover:bg-white focus-visible:outline-jacarta sm:min-h-[124px] ${
        tool.primary ? "border-jacarta/18" : "border-white/90"
      }`}
    >
      <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
      <div className="flex h-10 w-10 items-center justify-center rounded-[0.95rem] bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.92),0_10px_20px_-16px_rgba(17,17,17,0.85)]">
        {tool.customIcon === "antigravity" ? (
          <AntigravityIcon />
        ) : tool.customIcon === "n8n" ? (
          <N8nIcon />
        ) : tool.logo ? (
          <img src={tool.logo} alt={`${tool.name} logo`} className="h-7 w-7 object-contain" loading="eager" />
        ) : Icon ? (
          <Icon className="h-7 w-7" style={{ color: tool.iconColor }} />
        ) : null}
      </div>
      <span className="mt-3 block text-[0.86rem] font-extrabold leading-tight text-foreground">
        {tool.name}
      </span>
      <span className="mt-1 block max-w-[8.5rem] font-mono text-[8px] font-bold uppercase leading-[1.45] tracking-[0.08em] text-foreground-muted">
        {tool.description}
      </span>
      <ExternalLink className="absolute bottom-2.5 right-2.5 h-3 w-3 text-foreground-subtle opacity-45 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent group-hover:opacity-100" />
    </motion.a>
  );
};

const MagneticCTA = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left - rect.width / 2) * 0.18);
    mouseY.set((e.clientY - rect.top - rect.height / 2) * 0.18);
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
    <section className="relative overflow-hidden border-b border-border/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.58),rgba(255,255,255,0.22))] pt-24 pb-0 sm:pt-28 lg:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(118deg,hsl(var(--accent)/0.07),transparent_30%,hsl(var(--jacarta)/0.055)_68%,transparent)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1360px] px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <h1 className="sr-only">AI tools and workflows for founders</h1>
          <span className="inline-flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-jacarta">
            <span className="h-px w-7 bg-jacarta/70" />
            My 2026 stack
          </span>

          <div className="flex items-center gap-4">
            <MagneticCTA>
              <a
                href="/insights/the-small-business-ai-toolkit"
                className="group inline-flex min-h-[44px] items-center justify-center gap-3 rounded-full bg-[#5f27d8] px-6 py-2.5 text-[13px] font-bold text-white shadow-[0_18px_38px_-22px_hsl(var(--jacarta))] transition-all duration-300 hover:-translate-y-0.5 hover:bg-foreground hover:shadow-[0_22px_44px_-24px_rgba(17,17,17,0.9)] active:scale-[0.98]"
              >
                Read the full guide
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </MagneticCTA>
            <a
              href="/insights"
              className="inline-flex items-center gap-2 text-[13px] font-bold text-accent transition-all duration-300 hover:gap-3 hover:text-foreground"
            >
              or browse all articles
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="relative pb-8 lg:pb-10"
        >
          <div className="relative z-10 mx-auto max-w-[820px] rounded-[1.65rem] border border-black/10 bg-[#f6f2eb]/88 p-4 shadow-[0_34px_80px_-52px_rgba(17,17,17,0.9)] backdrop-blur-3xl sm:p-5 lg:rotate-[1deg]">
            <div className="absolute inset-0 rounded-[1.65rem] bg-[radial-gradient(circle_at_25%_18%,rgba(255,255,255,0.86),transparent_28%),linear-gradient(rgba(17,17,17,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,0.035)_1px,transparent_1px)] bg-[size:auto,22px_22px,22px_22px]" />
            <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {tools.map((tool) => (
                <ToolCard key={tool.name} tool={tool} />
              ))}
            </div>
          </div>

          <div className="relative z-20 mt-8 flex justify-center lg:mt-10">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-foreground-muted">
              <span className="mr-4 inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle" />
              USEFUL TOOLS. CLEAR SYSTEMS. BETTER DECISIONS.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
