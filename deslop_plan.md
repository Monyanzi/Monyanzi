# De-Slop Execution Plan (small-model edition)

Companion to `deslop_plan.md` (the audit and the reasoning behind it). This file is the runbook. An executor model should follow it top to bottom without making design decisions of its own.

---

## 0. Executor Operating Protocol

- **Project root:** `c:\Users\Moses\Documents\03 BUSINESS\01 CONSULTING\002 WEBSITES\01 PERSONAL WEBSITE`. The shell is PowerShell. Run every command from the root.
- Do exactly one task at a time, in the order listed. Don't skip ahead. Don't combine tasks.
- Before editing a file, read it. The line numbers here come from the 31 Oct 2026 baseline and will drift. Always locate the code by its quoted snippet, not by its line number.
- Only touch the files listed in the task. If a task seems to need another file, STOP and report.
- Don't invent design. Every value (colour, radius, class, copy) comes from §2 Design Spec or the task itself. If something isn't specified, leave it unchanged.
- Don't add npm packages unless the task explicitly names them.
- After every task, run the task's Verify block. If a check fails, fix it once. If it still fails, revert the task (`git checkout -- <files>`), mark it BLOCKED in the progress log (§10) with the error, and move on to the next task only if it doesn't depend on the blocked one.
- Commit after every task that passes, using the given message: `git add -A; git commit -m "<message>"`.
- **Standard checks (STD-CHECK):**
  ```powershell
  npx tsc -p tsconfig.app.json --noEmit 2>&1 | Select-String "error TS" | Measure-Object | Select -Expand Count
  node --test tests/ 2>&1 | Select-String "^ℹ (pass|fail)"
  ```
- **Screenshot command (`SHOT <name> <path>`):**
  ```powershell
  $out="C:\Users\Moses\.gemini\antigravity\brain\197ab789-ab12-46fb-9786-be4ae651121c\scratch"; Start-Process -Wait "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" -ArgumentList "--headless=new","--disable-gpu","--no-first-run","--user-data-dir=$env:TEMP\agy-edge-shot","--hide-scrollbars","--virtual-time-budget=9000","--window-size=1440,4000","--screenshot=$out\<name>.png","http://localhost:8081<path>"
  ```
- Never edit `node_modules`, `dist`, `.git`, `public/audio`, or the article body prose in `src/data/insights.tsx` (unless a task names it).

---

## 1. Baseline (State on 31 Oct 2026, before any task)

| Check | Baseline value |
|---|---|
| tsc errors | 8 (5 in HeroSection.tsx motion variants, plus unused imports in ThemeToggle.tsx, Insights.tsx, Stack.tsx) |
| Failing test files | ferrari-theme.test.mjs (stale), home-redesign.test.mjs (stale), cleanup-guardrails.test.mjs (2 tests), seo-route-integrity.test.mjs (sitemap contains /stack) |
| Passing | ship-readiness, seo-content-guardrails, vercel-config |
| Uncommitted changes | about 30 modified files and 2 deleted |

---

## 2. Design Spec

### 2.1 Tokens
| Token | Old | New |
|---|---|---|
| `--radius` (`index.css`) | `1.5rem` | `0.25rem` |
| `--jacarta` light (`index.css`) | `260 42% 35%` (purple) | `28 28% 32%` (warm bronze ink) |
| `--jacarta` dark (`index.css`) | `260 60% 70%` | `30 24% 72%` |
| Tailwind borderRadius `4xl`, `5xl` | defined | delete both keys |
| Body font | Inter | `"Instrument Sans Variable"` |
| Display font | Newsreader | `"Newsreader Variable"` |
| Mono font | JetBrains Mono | `"JetBrains Mono Variable"` |

### 2.2 Radius Map
- `rounded-3xl`, `rounded-2xl`, `rounded-xl` → `rounded-lg` (now 4px via the token)
- `rounded-full` → `rounded-md` (Exception: keep as-is when the element is a dot `h-1.5 w-1.5` / `h-2 w-2`, toggle switch track/knob in `CookieConsent`, or circular play button in audio player)
- `lg:rounded-2xl`, `lg:rounded-xl` → delete

### 2.3 Uppercase / Letter-Spacing Allowlist
Uppercase plus `tracking-*` is only allowed in:
1. Footer column headings (`SiteFooter.tsx`)
2. Stack ledger table header row (created in T3.6)
3. Article meta line (category · date · read time)

Everywhere else, remove uppercase and any `tracking-[...]`, `tracking-wide`, `tracking-wider`, `tracking-widest`. Buttons become sentence case: `text-sm font-medium`.

### 2.4 Button Spec
- **Primary:** `inline-flex min-h-[42px] items-center justify-center gap-2 rounded-md bg-foreground px-5 py-2 text-sm font-medium text-background transition-colors duration-150 hover:bg-accent`
- **Secondary:** `inline-flex min-h-[42px] items-center gap-2 rounded-md border border-border-strong bg-transparent px-5 py-2 text-sm font-medium text-foreground transition-colors duration-150 hover:bg-surface-2`
- **Text link CTA:** `inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline decoration-border-strong underline-offset-4 hover:decoration-foreground`

### 2.5 Chip / Tag Spec
- **Category tag:** `font-mono text-[11px] text-foreground-muted` with no background, border, or radius.
- **Filter tabs:** row of text buttons.
  - Inactive: `text-sm text-foreground-muted hover:text-foreground pb-2 border-b-2 border-transparent`
  - Active: `text-sm text-foreground pb-2 border-b-2 border-foreground`
  - Count: `<span className="font-mono text-[11px] text-foreground-subtle ml-1">` with no background.

### 2.6 Section Heading Spec
- Remove every section kicker matching `Index 0X / ...`, `Index 0X — ...`, or label-eyebrow paragraph above an `h2`.
- `h2`: `font-display text-3xl sm:text-4xl font-medium tracking-[-0.02em] text-foreground`. Sentence case.
- Optional dek: `mt-2 max-w-xl text-base text-foreground-muted`.

### 2.7 Forbidden After P2
`radial-gradient`, `backdrop-blur`, `backdrop-filter`, `.glass`, `card-premium`, `audio-card-purple`, `i % 2 === 0`, `hover:-translate-y`, `active:scale-`, `whileHover`, `Zero-slop`, `Fig 1.1`, `dispatch` (in visible copy; `dispatchEvent` is fine).

### 2.8 Copy Dictionary
| File (baseline line) | Find | Replace |
|---|---|---|
| ArticleCard.tsx (71) | Lead Dispatch | Featured |
| CollaborateSection.tsx (10) | Read workflow dispatch | Read the workflow |
| FeaturedInsightsSection.tsx (98) | Read dispatch | Read guide |
| HeroSection.tsx (141) | Read Field Guides | Read the guides |
| HeroSection.tsx (148) | Inspect 2026 Stack | See the 2026 stack |
| Navigation.tsx (102) | the Vol. 26 span | delete the whole span element |
| SearchModal.tsx (104) | No dispatches match | No guides match |
| SelectedWorkSection.tsx (111) | Launch Live Application | Visit PAWZA |
| SelectedWorkSection.tsx (115) | element containing Zero-slop production build | delete the element |
| SelectedWorkSection.tsx (138) | Fig 1.1 &mdash; PAWZA Regional Discovery &amp; Emergency Triage Interface | PAWZA, live in South Africa |
| SelectedWorkSection.tsx (140) | Inspect live | Open site |
| insights.tsx (415) | Inspect <strong | Take a look at <strong |
| insights.tsx (423) | Inspect PAWZA Live | Visit PAWZA |
| NotFound.tsx (20) | Dispatch not found | Page not found |
| SiteFooter.tsx | Plus Jakarta Sans | Instrument Sans |

---

## Checklist of Tasks

### Phase P0: Safety and Production Blockers
- [x] **T0.1 Snapshot branch** — `git checkout -b deslop; git add -A; git commit -m "chore: snapshot WIP before deslop"`
- [x] **T0.2 Add npm scripts** — Add `"test": "node --test tests/"` and `"typecheck": "tsc -p tsconfig.app.json --noEmit"` to `package.json`.
- [x] **T0.3 Remove stale design tests** — Delete `tests/ferrari-theme.test.mjs` and `tests/home-redesign.test.mjs`.
- [x] **T0.4 Fix unused-import tsc errors** — Clean unused imports in `ThemeToggle.tsx`, `Insights.tsx`, `Stack.tsx`. Target: tsc errors = 5.
- [x] **T0.5 Remove lovable-tagger dependency** — Clean `vite.config.ts`, check usages, npm prune.
- [x] **T0.6 Self-host fonts** — Install `@fontsource-variable/{newsreader,instrument-sans,jetbrains-mono}`, update `main.tsx`, `index.html`, `tailwind.config.ts`, `src/index.css`.
- [x] **T0.7 SPA rewrite for /stack** — Update `vercel.json` and `tests/seo-route-integrity.test.mjs`.
- [x] **T0.8 Fix zero-padded hero counts** — Fix padding in `src/components/HeroSection.tsx`.

### Phase P1: Spec and Tokens
- [x] **T1.1 Rewrite DESIGN.md** — Update with 8 sections matching §2.
- [x] **T1.2 Rewrite local unslop skill** — Update `.agent/skills/unslop/SKILL.md`.
- [x] **T1.3 Apply tokens** — Update `--radius` and `--jacarta` in `src/index.css` & `tailwind.config.ts`.
- [x] **T1.4 (Optional) Vendor external design skills** — Vendor into `.agent/skills/` if permissive.

### Phase P2: Global Primitives
- [x] **T2.1 Remove route page transitions** — Replace AnimatePresence in `App.tsx`, delete `PageTransition.tsx`.
- [x] **T2.2 Remove hero stagger animation** — Remove motion in `HeroSection.tsx`. Target: tsc = 0.
- [x] **T2.3 Purge glass, premium cards and purple CSS** — Clean `src/index.css`, `Insights.tsx`, `InsightArticle.tsx`.
- [x] **T2.4 Remove backdrop blur from components** — Clean blur and opacity classes in navigation and cards.
- [x] **T2.5 Remove radial glow blobs and alternating colours** — Clean `Insights.tsx`, `Stack.tsx`.
- [x] **T2.6 Remove hover lift and bounce** — Remove translate, scale, shadow in `ShareBar.tsx`, `BottomNavigation.tsx`, `InsightArticle.tsx`, `ThemeToggle.tsx`, `CollaborateSection.tsx`, `Stack.tsx`.
- [x] **T2.7 Replace jacarta usages** — Replace with accent or foreground across components.
- [x] **T2.8 Apply radius map site-wide** — Map `rounded-(full|xl|2xl|3xl)` to `rounded-lg` / `rounded-md`.
- [x] **T2.9 Buttons and uppercase pass** — Normalize buttons to §2.4 and enforce uppercase allowlist §2.3.
- [x] **T2.10 Remove unused keyframes** — Clean Tailwind animations and CSS keyframes.

### Phase P3: Page Redesigns
- [x] **T3.1 Home hero** — Clean eyebrow, quiet stats strip, un-overlap tool panel, remove tile numbers.
- [x] **T3.2 Delete 4-up value strip** — Remove `ExperienceStrip.tsx` from `Index.tsx` and delete file.
- [x] **T3.3 Featured insights: lead article plus list** — Redesign `FeaturedInsightsSection.tsx`.
- [x] **T3.4 Reading paths: numbered list** — Redesign `ReadingPathsSection.tsx` into `<ol>` list.
- [x] **T3.5 PAWZA case study** — Redesign `SelectedWorkSection.tsx` with `<dl>` features.
- [x] **T3.6 Stack page: ledger table** — Redesign `Stack.tsx` as table ledger.
- [x] **T3.7 Insights listing: editorial index** — Redesign `Insights.tsx`, `ArticleCard.tsx`, filters into index.
- [x] **T3.8 Article page** — Refactor `InsightArticle.tsx` into book-like layout.
- [x] **T3.9 "Where to begin", footer and 404** — Refactor `CollaborateSection.tsx`, `SiteFooter.tsx`, `NotFound.tsx`.

### Phase P4: Copy Pass
- [x] **T4.1 Apply copy dictionary** — Enforce §2.8 exact replacements.
- [x] **T4.2 Em-dash and Title Case pass** — Replace visible em-dashes and convert non-title headings to sentence case.

### Phase P5: Incremental Stack Upgrades
- [x] **T5.1 react-helmet → react-helmet-async** — Migrate helmet dependency across 5 pages.
- [x] **T5.2 Responsive images (hero only)** — Add webp `<picture>` support if image exists.

### Phase P6: QA and Close-Out
- [x] **T6.1 Forbidden-pattern sweep** — Zero occurrences of forbidden patterns.
- [x] **T6.2 Full checks** — `npm run typecheck` (0), `npm test` (all pass), `npm run lint`, `npm run build`.
- [x] **T6.3 Screenshots for review** — Capture final screenshots and append carousel.

---

## 10. Progress Log

| Task | Status (DONE / BLOCKED / SKIPPED) | tsc errors | Notes |
|---|---|---|---|
| T0.1 | DONE | 8 | Branch `deslop` created and WIP committed cleanly |
| T0.2 | DONE | 8 | Added `test` and `typecheck` npm scripts |
| T0.3 | DONE | 8 | Removed stale design tests (ferrari-theme, home-redesign) |
| T0.4 | DONE | 5 | Removed unused imports from ThemeToggle, Insights, Stack |
| T0.5 | REVERTED | 5 | User retained lovable-tagger dependency and plugin |
| T0.6 | DONE | 5 | Self-hosted Newsreader, Instrument Sans, JetBrains Mono; CSP passing |
| T0.7 | DONE | 5 | Added /stack SPA fallback rewrite and updated route test |
| T0.8 | DONE | 5 | Corrected zero-padding using padStart(2, "0") |
| T1.1–T1.4 | DONE | 5 | DESIGN.md, unslop skill, tokens (radius, jacarta) updated; 3 external skills vendored |
| T2.1–T2.10 | DONE | 0 | Dropped page transitions & hero motion; purged glass/premium/purple/blur/glow/hover lift/jacarta; tight radius & button normalization applied; unused animations removed |
| T3.1–T3.9 | DONE | 0 | Redesigned Home hero, removed value strip, lead+list featured insights, numbered reading paths, editorial PAWZA case study, stack ledger table, insights index listing, book-like article page, simplified start/footer/404 |
| T4.1–T4.2 | DONE | 0 | Removed themed jargon per §2.8 copy dictionary; converted non-title headings to sentence case; replaced UI em-dashes |
| T5.1–T5.2 | DONE | 0 | Migrated to react-helmet-async with HelmetProvider in main.tsx; hero image wrapped in picture element |
| T6.1–T6.3 | DONE | 0 | Forbidden pattern sweep passed (0 matches); typecheck (0), lint, build passed; final screenshots captured |

---

## 11. After (Final Screenshots)

````carousel
![Final Home Page](C:\Users\Moses\.gemini\antigravity\brain\ae190a5c-7c7c-4326-bd60-81fafc155078\final-home.png)
<!-- slide -->
![Final Insights Listing](C:\Users\Moses\.gemini\antigravity\brain\ae190a5c-7c7c-4326-bd60-81fafc155078\final-insights.png)
<!-- slide -->
![Final Stack Ledger Table](C:\Users\Moses\.gemini\antigravity\brain\ae190a5c-7c7c-4326-bd60-81fafc155078\final-stack.png)
<!-- slide -->
![Final Article Book Layout](C:\Users\Moses\.gemini\antigravity\brain\ae190a5c-7c7c-4326-bd60-81fafc155078\final-article.png)
````

