import claudeLogo from "@/assets/insights/tech-stack/claude-spark.svg";
import lovableLogo from "@/assets/insights/tech-stack/lovable-icon.svg";
import n8nLogo from "@/assets/insights/tech-stack/n8n-icon.svg";
import codexLogo from "@/assets/insights/tech-stack/codex-icon.svg";
import geminiNotebookLogo from "@/assets/insights/tech-stack/gemini-notebook-logo.svg";
import chatgptLogo from "@/assets/insights/tech-stack/chatgpt-logo.png";

export interface ReadingPath {
  id: string;
  title: string;
  tagline: string;
  description: string;
  articleIds: string[];
  durationMinutes: number;
  toolLogos: { name: string; src: string }[];
}

export const readingPaths: ReadingPath[] = [
  {
    id: "practical-ai-builder",
    title: "The AI Builder Path",
    tagline: "Build",
    description: "Select your stack and ship your first software tool.",
    articleIds: [
      "the-small-business-ai-toolkit",
      "12-ai-tools-in-my-tech-stack",
      "10-ai-agent-implementation-mistakes-checklist",
    ],
    durationMinutes: 28,
    toolLogos: [
      { name: "Claude", src: claudeLogo },
      { name: "Lovable", src: lovableLogo },
      { name: "Codex", src: codexLogo },
    ],
  },
  {
    id: "automation-and-research",
    title: "Research & Automate",
    tagline: "Automate",
    description: "Turn messy documents into clear briefings and automated workflows.",
    articleIds: [
      "2026-ai-power-workflow",
      "the-automation-trap",
    ],
    durationMinutes: 20,
    toolLogos: [
      { name: "Gemini Notebook", src: geminiNotebookLogo },
      { name: "n8n", src: n8nLogo },
      { name: "ChatGPT", src: chatgptLogo },
    ],
  },
  {
    id: "executive-ai-strategy",
    title: "AI Strategy & Systems",
    tagline: "Strategy",
    description: "Spot stalled projects early and automate the right processes.",
    articleIds: [
      "wrong-question-ai-leader",
      "why-ai-projects-fail",
      "5-signs-always-done-this-way",
      "black-mirror-lessons-ai-leaders",
    ],
    durationMinutes: 35,
    toolLogos: [
      { name: "Claude", src: claudeLogo },
      { name: "ChatGPT", src: chatgptLogo },
    ],
  },
];

export const getPathForArticle = (articleId: string) => {
  for (const path of readingPaths) {
    const idx = path.articleIds.indexOf(articleId);
    if (idx !== -1) {
      const nextArticleId = path.articleIds[idx + 1] ?? null;
      const prevArticleId = idx > 0 ? path.articleIds[idx - 1] : null;
      return {
        path,
        partNumber: idx + 1,
        totalParts: path.articleIds.length,
        nextArticleId,
        prevArticleId,
      };
    }
  }
  return null;
};

