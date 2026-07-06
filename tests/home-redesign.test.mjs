import { existsSync, readFileSync } from "node:fs";
import assert from "node:assert/strict";

const hero = readFileSync("src/components/HeroSection.tsx", "utf8");

const removedHeadlineEnding = ["for founders", "who ship"].join(" ");
assert.ok(!hero.includes(removedHeadlineEnding), "Hero should not show the removed concept headline");
assert.match(hero, /<h1 className="sr-only"[\s\S]*AI stack and build notes/, "Hero should keep a non-visual h1 for accessibility");
assert.match(hero, /Founder Workbench/, "Hero should name the tool board as a founder workbench");
assert.match(hero, /Build & Automate/, "Hero should include the handwritten-style board annotation from the concept");
assert.match(hero, /USEFUL TOOLS\. CLEAR SYSTEMS\. BETTER DECISIONS\./, "Hero should include the concept caption under the workbench");
assert.match(hero, /n8n/, "Hero tool board should include n8n like the concept PNG");
assert.match(hero, /lg:grid-cols-\[0\.44fr_1\.56fr\]/, "Hero should make the workbench the visual focus without the headline");

assert.ok(existsSync("src/components/ExperienceStrip.tsx"), "Homepage should include a compact value strip");

const experienceStrip = readFileSync("src/components/ExperienceStrip.tsx", "utf8");
for (const label of ["Practical", "Workflows", "Founder-first", "Stay current"]) {
  assert.match(experienceStrip, new RegExp(label), `Experience strip missing ${label}`);
}

const index = readFileSync("src/pages/Index.tsx", "utf8");
assert.match(index, /ExperienceStrip/, "Homepage should render the value strip between hero and articles");

const articles = readFileSync("src/components/FeaturedInsightsSection.tsx", "utf8");
assert.match(articles, /<h2[\s\S]*Articles/, "Homepage articles section should use the simpler concept heading");
assert.match(articles, /concept-article-grid/, "Homepage articles should use the named concept three-column row");
