import automationTrapHero from "@/assets/insights/automation-trap-hero.jpg";
import aiWarningSignsHero from "@/assets/insights/ai-warning-signs-hero.jpg";
import phoneboothImage from "@/assets/insights/phonebooth.jpg";
import aiMistakesChecklistHero from "@/assets/insights/10-ai-agent-implementation-mistakes-checklist.jpg";
import aiPowerWorkflowHero from "@/assets/insights/2026-ai-power-workflow.jpg";
import blackMirrorLessonsHero from "@/assets/insights/black-mirror-lessons-ai-leaders.jpg";
import wrongQuestionHero from "@/assets/insights/wrong-question-ai-leader.jpg";
import smallBusinessToolkitHero from "@/assets/insights/small-business-ai-toolkit.jpg";
import techStackHero from "@/assets/insights/tech-stack/tech-stack-hero.jpg";

export interface ArticleSummary {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  readTime: number;
}

export const articleSummaries: ArticleSummary[] = [
  {
    id: "the-small-business-ai-toolkit",
    title: "The Small Business AI & Automation Toolkit",
    category: "Build",
    description:
      "A job-first guide to AI and automation tools. Six categories of practical software a lean business can use to build, automate, and market right now.",
    image: smallBusinessToolkitHero,
    readTime: 12,
  },
  {
    id: "10-ai-agent-implementation-mistakes-checklist",
    title: "10 AI Agent Implementation Mistakes Leaders Make: A Practical Checklist",
    category: "Code",
    description:
      "A field-tested checklist to avoid the most expensive AI agent rollout mistakes across scope, data, risk, governance, and adoption.",
    image: aiMistakesChecklistHero,
    readTime: 10,
  },
  {
    id: "2026-ai-power-workflow",
    title: "3-Step 2026 AI Power Workflow: From Rough Idea to Studio-Ready Content",
    category: "Research",
    description:
      "One workflow to rule them all. How to combine OpenAI's Prompt Optimiser, Deep Research (Perplexity/Gemini/ChatGPT), and NotebookLM into a single insight engine.",
    image: aiPowerWorkflowHero,
    readTime: 8,
  },
  {
    id: "wrong-question-ai-leader",
    title: '9 Reasons "What Can AI Do for Me?" Is the Wrong Question for Leaders',
    category: "Strategy",
    description:
      "A practical guide with 9 better questions that turn AI talk into clear ownership and measurable outcomes.",
    image: wrongQuestionHero,
    readTime: 9,
  },
  {
    id: "black-mirror-lessons-ai-leaders",
    title: "10 Black Mirror AI Lessons Every Business Leader Should Know",
    category: "Learn",
    description:
      "A practical watchlist linking 10 Black Mirror episodes to real AI governance, risk, and strategy decisions.",
    image: blackMirrorLessonsHero,
    readTime: 11,
  },
  {
    id: "the-automation-trap",
    title: "12 Signs You're About to Automate the Wrong Thing: The Automation Trap",
    category: "Automate",
    description: "Automation promises speed, but speed in the wrong direction is expensive failure.",
    image: automationTrapHero,
    readTime: 7,
  },
  {
    id: "why-ai-projects-fail",
    title: "8 Warning Signs Your AI Project Is Failing",
    category: "Strategy",
    description: "AI projects do not crash. They fade quietly while everyone stays busy.",
    image: aiWarningSignsHero,
    readTime: 6,
  },
  {
    id: "5-signs-always-done-this-way",
    title: '5 Signs Your Organisation Is Trapped in "We Have Always Done It This Way"',
    category: "Strategy",
    description: "Processes outlive their purpose. 5 signals that history is running your operations.",
    image: phoneboothImage,
    readTime: 5,
  },
  {
    id: "12-ai-tools-in-my-tech-stack",
    title: "12 AI Tools for Productivity in My 2026 Tech Stack",
    category: "Build",
    description:
      "My practical list of 12 AI tools for productivity in 2026, covering chatbots, coding agents, and developer platforms I use in real workflows.",
    image: techStackHero,
    readTime: 14,
  },
];

export const READING_TIMES: Record<string, number> = Object.fromEntries(
  articleSummaries.map((a) => [a.id, a.readTime])
);

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
    description: "AI engineering agent for code reviews and implementation.",
    url: "https://openai.com/codex",
    ctaText: "Open ↗",
  },
  {
    category: "Code",
    title: "Claude Code",
    description: "Terminal agent for code edits and refactors.",
    url: "https://docs.anthropic.com/en/docs/claude-code",
    ctaText: "Open ↗",
  },
  {
    category: "Automate",
    title: "n8n",
    description: "Self-hosted automations across forms, email, and CRMs.",
    url: "https://github.com/n8n-io/n8n",
    ctaText: "Open ↗",
  },
  {
    category: "Research",
    title: "Gemini Notebook",
    description: "Grounded summaries, briefings, and audio from documents.",
    url: "https://notebook.google/",
    ctaText: "Open ↗",
  },
  {
    category: "Learn",
    title: "Prompt Engineering Guide",
    description: "Open-source reference for prompting patterns and workflows.",
    url: "https://github.com/dair-ai/Prompt-Engineering-Guide",
    ctaText: "Open ↗",
  },
] as const;
