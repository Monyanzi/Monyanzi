import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

const externalRuntimeSources = [
  "https://cdn.jsdelivr.net",
  "import LiquidBackground from 'https://",
];

const sourceFiles = [
  "src/components/ui/liquid-effect-animation.tsx",
  "src/components/FeaturedInsightsSection.tsx",
  "src/components/SelectedWorkSection.tsx",
  "src/components/CollaborateSection.tsx",
  "src/pages/Insights.tsx",
];

const retiredFiles = [
  "src/components/BackToTop.tsx",
  "src/components/ExpertiseModal.tsx",
  "src/components/MarqueeTicker.tsx",
  "src/utils/useScrollColorShift.ts",
  "src/utils/useAdvancedScroll.ts",
  "src/utils/email.ts",
  "src/components/SmoothScrollProvider.tsx",
  "src/components/lenisContext.ts",
  "src/components/ui/CustomCursor.tsx",
  "src/assets/insights/fashion-tech-desk.png",
  "alternate-tints.cjs",
  "elevate-typography.cjs",
  "remove-ctas.cjs",
  "replace-remaining-colors.cjs",
  "update-insights.cjs",
  "seo-audit.md",
  "seo-audit-checklist.md",
  "seo-audit-checklist-reviewed.md",
  "src/assets/hero-profile.webp",
  "src/assets/insights/glass-checklist.png",
  "src/assets/insights/marble-data-matrix.png",
  "public/audio/profile-audio-overview.m4a",
  "public/social-share.svg",
  "components.json",
  ".github/workflows/deploy.yml",
  "features.csv",
  "design-system",
  "src/components/SidebarMenu.tsx",
  "src/components/ui/liquid-glass.tsx",
];

test("runtime source does not import executable code from third-party CDNs", () => {
  for (const file of sourceFiles) {
    const source = fs.readFileSync(file, "utf8");
    for (const pattern of externalRuntimeSources) {
      assert.equal(source.includes(pattern), false, `${file} imports executable CDN code: ${pattern}`);
    }
  }
});

test("homepage and listing cards render without intersection-triggered invisible defaults", () => {
  for (const file of sourceFiles.filter((file) => !file.includes("liquid-effect"))) {
    const source = fs.readFileSync(file, "utf8");
    assert.doesNotMatch(source, /whileInView=/, `${file} hides content until IntersectionObserver fires`);
    assert.doesNotMatch(source, /initial=\{\{\s*opacity:\s*0/, `${file} renders initially invisible content`);
  }
});

test("retired modules are removed from the source tree", () => {
  for (const file of retiredFiles) {
    assert.equal(fs.existsSync(file), false, `${file} is unused and should be removed`);
  }
});

test("audio briefings only expose currently rendered audio cards", () => {
  const source = fs.readFileSync("src/data/audioBriefings.ts", "utf8");
  assert.doesNotMatch(source, /siteOverviewBriefing/, "siteOverviewBriefing is no longer rendered");
});

test("navigation brand does not duplicate the visible AI mark", () => {
  const source = fs.readFileSync("src/components/Navigation.tsx", "utf8");
  const visibleAiLabels = [...source.matchAll(/>\s*AI\s*</g)];

  assert.equal(visibleAiLabels.length, 1, "Navigation should render one visible AI label");
});

test("index and listing pages use lightweight article summaries", () => {
  const summaryConsumers = [
    "src/components/FeaturedInsightsSection.tsx",
    "src/components/SearchModal.tsx",
    "src/pages/Insights.tsx",
  ];

  for (const file of summaryConsumers) {
    const source = fs.readFileSync(file, "utf8");

    assert.doesNotMatch(
      source,
      /@\/data\/insights["']/,
      `${file} should not import full article content for listing metadata`,
    );
    assert.match(
      source,
      /@\/data\/articleSummaries["']/,
      `${file} should use lightweight article summaries`,
    );
  }
});

test("app shell avoids always-on smooth-scroll and custom-cursor runtime work", () => {
  const appSource = fs.readFileSync("src/App.tsx", "utf8");
  const navigationSource = fs.readFileSync("src/components/Navigation.tsx", "utf8");
  const articleSource = fs.readFileSync("src/pages/InsightArticle.tsx", "utf8");

  assert.doesNotMatch(appSource, /SmoothScrollProvider|CustomCursor/);
  assert.doesNotMatch(navigationSource, /useLenis|lenis/);
  assert.doesNotMatch(articleSource, /useLenis|lenis/);
});
