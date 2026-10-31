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
  shortLabel: "Briefing",
  title: "Audio Overview",
  subtitle: "Audio overview of all guides and workflows.",
  duration: "04:46",
  updatedOn: "2026-02-19",
  audioSrc: "/audio/articles-briefing.m4a",
  isReady: true,
};
