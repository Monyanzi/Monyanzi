import { readFileSync } from "node:fs";
import assert from "node:assert/strict";

const css = readFileSync("src/index.css", "utf8");
const hero = readFileSync("src/components/HeroSection.tsx", "utf8");
const navigation = readFileSync("src/components/Navigation.tsx", "utf8");
const footer = readFileSync("src/components/SiteFooter.tsx", "utf8");
const index = readFileSync("src/pages/Index.tsx", "utf8");
const work = readFileSync("src/components/SelectedWorkSection.tsx", "utf8");

function getHslVariable(name) {
  const match = css.match(new RegExp(`--${name}:\\s*([0-9.]+)\\s+([0-9.]+)%\\s+([0-9.]+)%`));
  assert.ok(match, `Missing --${name} HSL token`);
  return {
    hue: Number(match[1]),
    saturation: Number(match[2]),
    lightness: Number(match[3]),
  };
}

const background = getHslVariable("background");
const accent = getHslVariable("accent");
const jacarta = getHslVariable("jacarta");

assert.ok(
  background.lightness >= 85,
  `Ferrari theme should use a light mode base; got ${background.lightness}% lightness`,
);

assert.ok(accent.hue >= 145 && accent.hue <= 170, `accent should stay in the BCG green range; got hue ${accent.hue}`);
assert.ok(accent.saturation >= 40, `accent should stay vivid enough for interactive emphasis; got ${accent.saturation}% saturation`);
assert.ok(accent.lightness >= 20 && accent.lightness <= 40, `accent should keep enough contrast for light surfaces; got ${accent.lightness}% lightness`);

assert.ok(jacarta.hue >= 245 && jacarta.hue <= 265, `jacarta should stay in the purple range; got hue ${jacarta.hue}`);
assert.ok(jacarta.saturation >= 20 && jacarta.saturation <= 45, `jacarta should remain restrained; got ${jacarta.saturation}% saturation`);
assert.ok(jacarta.lightness >= 20 && jacarta.lightness <= 40, `jacarta should keep enough contrast for light surfaces; got ${jacarta.lightness}% lightness`);
assert.ok(
  Math.abs(accent.saturation - jacarta.saturation) <= 22,
  `accent and jacarta saturation should feel balanced; got ${accent.saturation}% vs ${jacarta.saturation}%`,
);

assert.match(css, /\.racing-glass\b/, "Expected a reusable racing glass utility");
assert.match(css, /\.kodo-line\b/, "Expected Kodo-inspired motion-line utility");
assert.doesNotMatch(hero, /hero-profile|Moses\s*<br|Actuary/i, "Hero should not be a personal portfolio pitch");
assert.doesNotMatch(index, /Actuary\. Builder\. Strategist\.|jobTitle:\s*"Actuary/i, "Home metadata should stop selling personal services");
assert.doesNotMatch(hero, /AI Founder Garage|Build sequence|Free stack|AI builds|Founder ops|No fluff/i, "Hero should avoid decorative garage/build-sequence labels");
assert.doesNotMatch(hero, />\s*Toolkit\s*</i, "Hero headline should not be the generic Toolkit label");
assert.doesNotMatch(hero, /Read the Toolkit/i, "Hero CTA should not repeat the generic Toolkit label");
assert.match(hero, /AI Tools|Codex|Claude Code|Lovable/i, "Hero should position the site as a useful AI entrepreneur resource");
assert.match(hero, /Codex|Claude Code|Lovable|n8n|NotebookLM|Custom GPTs/i, "Toolkit should surface practical AI founder resources");
assert.doesNotMatch(hero, /href=\{`\/insights\/12-ai-tools-in-my-tech-stack`\}/, "Hero tool cards should not hardcode every tile to the article page");
for (const url of [
  "https://chatgpt.com",
  "https://claude.ai",
  "https://gemini.google.com",
  "https://grok.com",
  "https://kimi.moonshot.cn",
  "https://antigravity.google",
  "https://docs.anthropic.com/en/docs/claude-code",
  "https://openai.com/codex",
  "https://notebooklm.google/",
  "https://github.com",
  "https://lovable.dev",
  "https://n8n.io",
]) {
  assert.match(hero, new RegExp(url.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")), `Hero should link the ${url} tile directly`);
}
assert.doesNotMatch(navigation, /AI\/OS/, "Header brand should be AI, not AI/OS");
assert.doesNotMatch(footer, /AI\/OS/, "Footer brand should be AI, not AI/OS");
assert.match(work, /PAWZA/, "PAWZA must remain featured in selected work");
assert.match(work, /Pet Project/, "Selected work heading should name the PAWZA work as a pet project");
assert.match(work, /In progress/, "Selected work status should be in progress");
assert.doesNotMatch(work, /Featured|Live client product/i, "Selected work should not use stale featured/client-project labels");
