import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

const indexHtml = fs.readFileSync("index.html", "utf8");
const vercel = JSON.parse(fs.readFileSync("vercel.json", "utf8"));
const sitemapXml = fs.readFileSync("public/sitemap.xml", "utf8");
const articlesSource = fs.readFileSync("src/data/insights.tsx", "utf8");

const sitemapLocs = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const articleSlugs = [...new Set([...articlesSource.matchAll(/"([^"]+)":\s*\{/g)].map((match) => match[1]))];

const cspHeader = (vercel.headers || [])
  .flatMap((entry) => entry?.headers || [])
  .find((header) => header?.key === "Content-Security-Policy");

const hasInsightsWildcardRewrite = (vercel.rewrites || []).some(
  (rule) => rule?.source === "/insights/:path*" && rule?.destination === "/",
);

test("index.html does not define meta CSP when header CSP is configured", () => {
  assert.match(cspHeader?.value || "", /default-src/);
  assert.doesNotMatch(indexHtml, /<meta\s+http-equiv="Content-Security-Policy"/i);
});

test("sitemap URLs map to valid app routes and known article slugs", () => {
  const urlPaths = sitemapLocs.map((loc) => new URL(loc).pathname.replace(/\/$/, "") || "/");
  const sitemapArticleSlugs = urlPaths
    .filter((path) => path.startsWith("/insights/"))
    .map((path) => path.replace("/insights/", ""));

  for (const path of urlPaths) {
    const isRoot = path === "/";
    const isInsights = path === "/insights";
    const isArticle = /^\/insights\/[^/]+$/.test(path);
    assert.equal(isRoot || isInsights || isArticle, true, `Unexpected sitemap path: ${path}`);
  }

  assert.equal(hasInsightsWildcardRewrite, true);
  assert.equal(urlPaths.includes("/"), true);
  assert.equal(urlPaths.includes("/insights"), true);

  assert.deepEqual(new Set(sitemapArticleSlugs), new Set(articleSlugs));
});
