import fs from "node:fs";
import path from "node:path";

const DETAIL_SOURCE_PATH = path.join("src", "data", "insights.tsx");
const detailSource = fs.readFileSync(DETAIL_SOURCE_PATH, "utf8");

// Extract article slug keys from the insights.tsx record
const detailIds = [...detailSource.matchAll(/"([^"]+)":\s*\{/g)].map((match) => match[1]);
const uniqueIds = [...new Set(detailIds)];

if (uniqueIds.length === 0) {
  console.error("No articles found in insights.tsx — check file format.");
  process.exit(1);
}

const duplicates = detailIds.filter((id, i) => detailIds.indexOf(id) !== i);
if (duplicates.length) {
  console.error(`Duplicate article IDs in insights.tsx: ${[...new Set(duplicates)].join(", ")}`);
  process.exit(1);
}

console.log(`Article data verified (${uniqueIds.length} articles).`);
