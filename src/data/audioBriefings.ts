export interface AudioBriefing {
  id: string;
  shortLabel: string;
  title: string;
  subtitle: string;
  duration: string;
  updatedOn: string;
  audioSrc: string;
  isReady: boolean;
}

export const insightsArticlesBriefing: AudioBriefing = {
  id: "insights-briefing",
  shortLabel: "Insights Briefing",
  title: "Articles Audio Overview",
  subtitle: "Top-down audio overview of every current article and how to use each one.",
  duration: "04:46",
  updatedOn: "2026-02-19",
  audioSrc: "/audio/articles-briefing.m4a",
  isReady: true,
};
