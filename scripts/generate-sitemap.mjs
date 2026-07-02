import fs from "node:fs";
import path from "node:path";

const SITE_URL = "https://mosesnyanzi.co.za";
const ARTICLES_SOURCE_PATH = path.join("src", "data", "insights.tsx");
const SITEMAP_OUTPUT_PATH = path.join("public", "sitemap.xml");

/** Per-slug last-modified dates.  Unmapped slugs fall back to today. */
const SLUG_LASTMOD = {
  "5-signs-always-done-this-way": "2026-02-03",
  "why-ai-projects-fail": "2026-02-05",
  "the-automation-trap": "2026-02-07",
  "12-ai-tools-in-my-tech-stack": "2026-02-18",
  "2026-ai-power-workflow": "2026-02-12",
  "black-mirror-lessons-ai-leaders": "2026-02-13",
  "wrong-question-ai-leader": "2026-02-14",
  "10-ai-agent-implementation-mistakes-checklist": "2026-02-18",
};

const readArticleSlugs = () => {
  const source = fs.readFileSync(ARTICLES_SOURCE_PATH, "utf8");
  // Match Record keys: "slug-name": {
  const slugMatches = [...source.matchAll(/"([^"]+)":\s*\{/g)];
  const slugs = slugMatches.map((match) => match[1].trim()).filter(Boolean);
  return [...new Set(slugs)];
};

const buildSitemap = (slugs) => {
  const today = new Date().toISOString().slice(0, 10);
  const urls = [
    { loc: `${SITE_URL}/`, changefreq: "monthly", priority: "1.0", lastmod: today },
    { loc: `${SITE_URL}/insights`, changefreq: "weekly", priority: "0.8", lastmod: today },
    ...slugs.map((slug) => ({
      loc: `${SITE_URL}/insights/${slug}`,
      changefreq: "monthly",
      priority: "0.7",
      lastmod: SLUG_LASTMOD[slug] ?? today,
    })),
  ];

  const rows = urls
    .map(
      (url) => [
        "  <url>",
        `    <loc>${url.loc}</loc>`,
        `    <lastmod>${url.lastmod}</lastmod>`,
        `    <changefreq>${url.changefreq}</changefreq>`,
        `    <priority>${url.priority}</priority>`,
        "  </url>",
      ].join("\n"),
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${rows}\n</urlset>\n`;
};

const slugs = readArticleSlugs();
if (!slugs.length) {
  throw new Error("No article slugs found in src/data/insights.tsx");
}

const sitemapXml = buildSitemap(slugs);
fs.writeFileSync(SITEMAP_OUTPUT_PATH, sitemapXml, "utf8");
console.log(`Generated ${SITEMAP_OUTPUT_PATH} with ${slugs.length + 2} URLs.`);
