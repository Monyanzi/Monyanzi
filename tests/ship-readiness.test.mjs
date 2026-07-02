import { readFileSync, readdirSync, statSync } from "node:fs";
import assert from "node:assert/strict";
import path from "node:path";

const srcFiles = [];

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const fullPath = path.join(dir, entry);
    if (statSync(fullPath).isDirectory()) {
      walk(fullPath);
      continue;
    }
    if (/\.(tsx|ts|css|html)$/.test(fullPath)) srcFiles.push(fullPath);
  }
}

walk("src");

const sourceByFile = new Map(srcFiles.map((file) => [file, readFileSync(file, "utf8")]));
const combinedSource = [...sourceByFile.values()].join("\n");

for (const [file, source] of sourceByFile) {
  assert.doesNotMatch(source, /coming soon|next project|currently in development|in development|lorem ipsum|todo:/i, `${file} contains unfinished placeholder copy`);
  assert.doesNotMatch(source, /href=["']#["']/, `${file} contains a dead href="#" link`);
}

const homeAnchors = [...combinedSource.matchAll(/href=(?:["']\/#([^"']+)["']|\{`\/#([^`]+)`\})/g)]
  .map((match) => match[1] || match[2]);
const sectionIds = new Set([...combinedSource.matchAll(/id=["']([^"']+)["']/g)].map((match) => match[1]));

for (const anchor of homeAnchors) {
  assert.ok(sectionIds.has(anchor), `Missing section id for /#${anchor}`);
}

assert.match(readFileSync("src/components/SelectedWorkSection.tsx", "utf8"), /PAWZA/, "PAWZA must stay on the homepage");
