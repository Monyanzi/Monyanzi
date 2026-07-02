import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

const vercel = JSON.parse(fs.readFileSync("vercel.json", "utf8"));
const siteConfig = fs.readFileSync("src/config/site.ts", "utf8");
const articlesSource = fs.readFileSync("src/data/insights.tsx", "utf8");
const insightArticleSource = fs.readFileSync("src/pages/InsightArticle.tsx", "utf8");

const articleSlugs = [...new Set([...articlesSource.matchAll(/"([^"]+)":\s*\{/g)].map((match) => match[1]))];
const seoBlockStart = insightArticleSource.indexOf("const ARTICLE_SEO");
const seoBlockEnd = insightArticleSource.indexOf("const RELATED_SLUGS_BY_ARTICLE");
const seoBlock =
  seoBlockStart >= 0 && seoBlockEnd > seoBlockStart
    ? insightArticleSource.slice(seoBlockStart, seoBlockEnd)
    : "";

const seoSlugs = [...new Set([...seoBlock.matchAll(/"([^"]+)":\s*\{/g)].map((match) => match[1]))];

const hasLegacyRedirect = (vercel.redirects || []).some(
  (rule) =>
    rule?.source === "/insights/wrong-question-ai-cxo" &&
    rule?.destination === "/insights/wrong-question-ai-leader" &&
    rule?.permanent === true,
);

test("vercel config permanently redirects legacy insight slug", () => {
  assert.equal(hasLegacyRedirect, true);
});

test("social share image is raster and file exists", () => {
  assert.match(siteConfig, /social-share\.(png|jpg|jpeg)/i);
  assert.equal(fs.existsSync("public/social-share.png"), true);
});

test("every article has explicit SEO metadata with publish and modify timestamps", () => {
  assert.deepEqual(new Set(seoSlugs), new Set(articleSlugs));

  for (const slug of articleSlugs) {
    const entryPattern = new RegExp(`"${slug}"\\s*:\\s*\\{([\\s\\S]*?)\\n\\s*\\},`, "m");
    const entryMatch = seoBlock.match(entryPattern);
    assert.ok(entryMatch, `Missing ARTICLE_SEO entry for ${slug}`);

    const entry = entryMatch[1];
    assert.match(entry, /publishedTime\s*:/, `Missing publishedTime for ${slug}`);
    assert.match(entry, /modifiedTime\s*:/, `Missing modifiedTime for ${slug}`);
  }
});
