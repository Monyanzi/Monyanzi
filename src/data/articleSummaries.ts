import automationTrapHero from "@/assets/insights/automation-trap-hero.webp";
import aiWarningSignsHero from "@/assets/insights/ai-warning-signs-hero.webp";
import phoneboothImage from "@/assets/insights/phonebooth.webp";
import aiMistakesChecklistHero from "@/assets/insights/10-ai-agent-implementation-mistakes-checklist.webp";
import aiPowerWorkflowHero from "@/assets/insights/2026-ai-power-workflow.webp";
import blackMirrorLessonsHero from "@/assets/insights/black-mirror-lessons-ai-leaders.webp";
import wrongQuestionHero from "@/assets/insights/wrong-question-ai-leader.webp";
import fashionTechDesk from "@/assets/insights/fashion-tech-desk.webp";
import techStackHero from "@/assets/insights/tech-stack/tech-stack-hero.jpg";

export interface ArticleSummary {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

export const articleSummaries: ArticleSummary[] = [
  {
    id: "the-small-business-ai-toolkit",
    title: "The Small Business AI & Automation Toolkit",
    category: "AI STRATEGY",
    description:
      "A job-first guide to AI and automation tools. Six categories of practical software a lean business can use to build, automate, and market right now.",
    image: fashionTechDesk,
  },
  {
    id: "10-ai-agent-implementation-mistakes-checklist",
    title: "10 AI Agent Implementation Mistakes Leaders Make: A Practical Checklist",
    category: "AI STRATEGY",
    description:
      "A field-tested checklist to avoid the most expensive AI agent rollout mistakes across scope, data, risk, governance, and adoption.",
    image: aiMistakesChecklistHero,
  },
  {
    id: "2026-ai-power-workflow",
    title: "3-Step 2026 AI Power Workflow: From Rough Idea to Studio-Ready Content",
    category: "AI & TECHNOLOGY",
    description:
      "One workflow to rule them all. How to combine OpenAI's Prompt Optimiser, Deep Research (Perplexity/Gemini/ChatGPT), and NotebookLM into a single insight engine.",
    image: aiPowerWorkflowHero,
  },
  {
    id: "wrong-question-ai-leader",
    title: '9 Reasons "What Can AI Do for Me?" Is the Wrong Question for Leaders',
    category: "AI STRATEGY",
    description:
      "A practical guide with 9 better questions that turn AI talk into clear ownership and measurable outcomes.",
    image: wrongQuestionHero,
  },
  {
    id: "black-mirror-lessons-ai-leaders",
    title: "10 Black Mirror AI Lessons Every Business Leader Should Know",
    category: "AI & SOCIETY",
    description:
      "A practical watchlist linking 10 Black Mirror episodes to real AI governance, risk, and strategy decisions.",
    image: blackMirrorLessonsHero,
  },
  {
    id: "the-automation-trap",
    title: "12 Signs You're About to Automate the Wrong Thing: The Automation Trap",
    category: "AUTOMATION & PROCESS",
    description: "Automation promises speed, but speed in the wrong direction is expensive failure.",
    image: automationTrapHero,
  },
  {
    id: "why-ai-projects-fail",
    title: "8 Warning Signs Your AI Project Is Failing",
    category: "AI STRATEGY",
    description: "AI projects do not crash. They fade quietly while everyone stays busy.",
    image: aiWarningSignsHero,
  },
  {
    id: "5-signs-always-done-this-way",
    title: '5 Signs Your Organisation Is Trapped in "We Have Always Done It This Way"',
    category: "ORGANISATIONAL CHANGE",
    description: "Processes outlive their purpose. 5 signals that history is running your operations.",
    image: phoneboothImage,
  },
  {
    id: "12-ai-tools-in-my-tech-stack",
    title: "12 AI Tools for Productivity in My 2026 Tech Stack",
    category: "AI & TECHNOLOGY",
    description:
      "My practical list of 12 AI tools for productivity in 2026, covering chatbots, coding agents, and developer platforms I use in real workflows.",
    image: techStackHero,
  },
];

export const articleSummaryById = Object.fromEntries(
  articleSummaries.map((article) => [article.id, article]),
) as Record<string, ArticleSummary>;

export const entrepreneurResources = [
  {
    category: "Build",
    title: "Lovable",
    description: "Build polished web apps from natural language.",
    url: "https://lovable.dev",
    ctaText: "Open ↗",
  },
  {
    category: "Code",
    title: "OpenAI Codex",
    description: "Use an AI software engineering agent to inspect code, implement changes, and speed up shipping.",
    url: "https://openai.com/codex",
    ctaText: "Open ↗",
  },
  {
    category: "Code",
    title: "Claude Code",
    description: "Delegate codebase tasks from the terminal — edits, refactors, and implementation support.",
    url: "https://docs.anthropic.com/en/docs/claude-code",
    ctaText: "Open ↗",
  },
  {
    category: "Automate",
    title: "n8n",
    description: "Build owned automations across forms, email, spreadsheets, and CRMs without vendor lock-in.",
    url: "https://github.com/n8n-io/n8n",
    ctaText: "Open ↗",
  },
  {
    category: "Research",
    title: "NotebookLM",
    description: "Turn documents and notes into grounded summaries, briefings, and audio overviews.",
    url: "https://notebooklm.google/",
    ctaText: "Open ↗",
  },
  {
    category: "Learn",
    title: "Prompt Engineering Guide",
    description: "A practical open-source reference for prompting patterns, evaluation, and workflow design.",
    url: "https://github.com/dair-ai/Prompt-Engineering-Guide",
    ctaText: "Open ↗",
  },
] as const;
