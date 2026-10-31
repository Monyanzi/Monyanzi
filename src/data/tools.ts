import chatgptLogo from "@/assets/insights/tech-stack/chatgpt-logo.png";
import claudeLogo from "@/assets/insights/tech-stack/claude-spark.svg";
import geminiLogo from "@/assets/insights/tech-stack/gemini-logo.webp";
import grokLogo from "@/assets/insights/tech-stack/grok-logo.svg";
import kimiLogo from "@/assets/insights/tech-stack/kimi-logo.png";
import antigravityLogo from "@/assets/insights/tech-stack/antigravity-logo.png";
import claudeCodeLogo from "@/assets/insights/tech-stack/claude-code-logo.svg";
import codexLogo from "@/assets/insights/tech-stack/codex-icon.svg";
import geminiNotebookLogo from "@/assets/insights/tech-stack/gemini-notebook-logo.svg";
import githubLogo from "@/assets/insights/tech-stack/github-logo.png";
import lovableLogo from "@/assets/insights/tech-stack/lovable-icon.svg";
import n8nLogo from "@/assets/insights/tech-stack/n8n-icon.svg";

export interface ToolItem {
  id: string;
  name: string;
  category: "Code" | "Research" | "Automation" | "Build" | "Reasoning";
  logo: string;
  href: string;
  description: string;
  notes: string;
  primary?: boolean;
  relatedArticleIds: string[];
}

export const toolsData: ToolItem[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    category: "Reasoning",
    logo: chatgptLogo,
    href: "https://chatgpt.com",
    description: "Drafts copy, customer replies, and outlines.",
    notes: "Drafts copy and customer replies in seconds.",
    primary: true,
    relatedArticleIds: ["the-small-business-ai-toolkit", "12-ai-tools-in-my-tech-stack"],
  },
  {
    id: "claude",
    name: "Claude",
    category: "Reasoning",
    logo: claudeLogo,
    href: "https://claude.ai",
    description: "Long documents, code, and technical editing.",
    notes: "Reads entire codebases and long documents.",
    primary: true,
    relatedArticleIds: ["the-small-business-ai-toolkit", "12-ai-tools-in-my-tech-stack", "wrong-question-ai-leader"],
  },
  {
    id: "gemini",
    name: "Gemini",
    category: "Research",
    logo: geminiLogo,
    href: "https://gemini.google.com",
    description: "Web search, video analysis, and large files.",
    notes: "Handles video analysis and multi-document research.",
    primary: true,
    relatedArticleIds: ["2026-ai-power-workflow", "12-ai-tools-in-my-tech-stack"],
  },
  {
    id: "grok",
    name: "Grok",
    category: "Research",
    logo: grokLogo,
    href: "https://grok.com",
    description: "Real-time search and social trends.",
    notes: "Live search and breaking tech updates.",
    relatedArticleIds: ["12-ai-tools-in-my-tech-stack"],
  },
  {
    id: "kimi",
    name: "Kimi",
    category: "Research",
    logo: kimiLogo,
    href: "https://kimi.moonshot.cn",
    description: "Searches long documents and manuals.",
    notes: "Fast recall across large documents.",
    relatedArticleIds: ["12-ai-tools-in-my-tech-stack"],
  },
  {
    id: "antigravity",
    name: "Antigravity",
    category: "Code",
    logo: antigravityLogo,
    href: "https://antigravity.google",
    description: "AI IDE for codebase refactoring.",
    notes: "Refactors multi-file codebases automatically.",
    relatedArticleIds: ["12-ai-tools-in-my-tech-stack", "10-ai-agent-implementation-mistakes-checklist"],
  },
  {
    id: "claude-code",
    name: "Claude Code",
    category: "Code",
    logo: claudeCodeLogo,
    href: "https://docs.anthropic.com/en/docs/claude-code",
    description: "Terminal agent for writing code.",
    notes: "Runs terminal commands and writes code.",
    relatedArticleIds: ["the-small-business-ai-toolkit", "12-ai-tools-in-my-tech-stack", "10-ai-agent-implementation-mistakes-checklist"],
  },
  {
    id: "codex",
    name: "OpenAI Codex",
    category: "Code",
    logo: codexLogo,
    href: "https://openai.com/codex",
    description: "Cloud agent for code reviews.",
    notes: "Asynchronous code reviews in the cloud.",
    relatedArticleIds: ["the-small-business-ai-toolkit", "12-ai-tools-in-my-tech-stack"],
  },
  {
    id: "gemini-notebook",
    name: "Gemini Notebook",
    category: "Research",
    logo: geminiNotebookLogo,
    href: "https://notebook.google/",
    description: "Turns documents into notes and audio.",
    notes: "Converts documents into summaries and audio.",
    relatedArticleIds: ["2026-ai-power-workflow", "the-small-business-ai-toolkit", "12-ai-tools-in-my-tech-stack"],
  },
  {
    id: "github",
    name: "GitHub",
    category: "Code",
    logo: githubLogo,
    href: "https://github.com",
    description: "Version control and deployments.",
    notes: "Tracks code and deploys builds.",
    relatedArticleIds: ["12-ai-tools-in-my-tech-stack"],
  },
  {
    id: "lovable",
    name: "Lovable",
    category: "Build",
    logo: lovableLogo,
    href: "https://lovable.dev",
    description: "Builds web apps from prompts.",
    notes: "Builds web applications from natural language.",
    relatedArticleIds: ["the-small-business-ai-toolkit", "12-ai-tools-in-my-tech-stack"],
  },
  {
    id: "n8n",
    name: "n8n",
    category: "Automation",
    logo: n8nLogo,
    href: "https://n8n.io",
    description: "Workflow automation across APIs.",
    notes: "Connects tools into automated workflows.",
    relatedArticleIds: ["the-small-business-ai-toolkit", "the-automation-trap", "12-ai-tools-in-my-tech-stack"],
  },
];
