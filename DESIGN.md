# DESIGN.md — Visual Specification

## 1. Philosophy
Apple Studio precision aesthetic: pure white, electric Apple Blue, disciplined squircles, polished glass. No "AI Founder Garage" text brand, no AI-slop paper, retro serifs, or murky greens.

## 2. Typography
- **Primary font (`font-sans` & `font-display`):** `"Instrument Sans Variable"`, `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `sans-serif`.
- **Mono font (`font-mono`):** `"JetBrains Mono Variable"`, `Consolas`, `monospace`.
- **Headings:** Modern tight-tracked neo-grotesque sans-serif (`font-display font-medium tracking-[-0.025em] text-foreground`).

## 3. Colour
- **Surfaces & Foreground (Light Mode):**
  - `--background`: Pure white (`0 0% 100%` / `#FFFFFF`)
  - `--surface`: Pure white (`0 0% 100%`)
  - `--surface-2`: Anodized precision zinc/slate inset (`220 14% 96%` / `#F1F5F9`)
  - `--foreground`: Deep obsidian slate (`222 47% 11%` / `#0F172A`)
  - `--foreground-muted`: Clean modern slate (`215 16% 44%` / `#64748B`)
  - `--foreground-subtle`: Titanium grey (`215 16% 62%` / `#94A3B8`)
- **Accent (Apple System Blue):**
  - `--accent`: Vivid Apple System Blue (`211 100% 45%` / `#0071E3` in light mode, `210 100% 55%` in dark mode).
  - `--accent-light`: Frosted ice blue tint (`214 100% 97%` / `#EFF6FF`).
  - `--accent-foreground`: Pure white (`0 0% 100%`).
  - `--ring`: Apple Blue (`211 100% 45%`).
- **Purged Tokens:**
  - Zero "AI Founder Garage" text. Replaced with minimal Apple tactile dot.
  - Zero warm bronze ink (`--jacarta` mapped to obsidian `--foreground`).
  - Zero murky amber/gold (`--gold` mapped to electric blue).
  - Zero forest/racing green.

## 4. Surfaces, Glass & Shapes
- **Corner Radii:**
  - `--radius`: `1rem` (16px squircle).
  - `rounded-3xl`: 1.5rem / 24px (showcase cards, bento cells, outer frames).
  - `rounded-2xl`: 1rem / 16px (cards, preview plates, tables).
  - `rounded-xl`: 0.75rem / 12px (buttons, input fields).
  - `rounded-full`: badges, filter pills, indicators, dot buttons.
- **Glassmorphism:**
  - `.glass-card`: Pure white translucent surface (`hsl(var(--surface) / 0.85)`), 18px backdrop blur, 1px specular top highlight, diffuse contact drop shadow.
  - `.glass-panel`: Elevated panel with 24px blur.
  - `.glass-pill`: Frosted capsule borders for filters and status tags.

## 5. Layout Architecture
- **Navigation:** Ultra-minimal tactile Apple dot button instead of "AI Founder Garage" brand name.
- **Hero:** Apple Studio split layout: crisp left column typography and CTAs, right column machined showcase window with precision engineering drafting workbench.
- **Home Tool Stack:** Strictly the 3 core tools (ChatGPT, Claude, Gemini) in a luxurious 3-column glass tray, linking to `/stack`.
- **Playbooks & Checklists:** Symmetrical Apple Bento Grid (7-col feature card + 5-col double-stacked horizontal card column) with zero dead space.
- **Work Showcase:** PAWZA in a machined Safari application window frame with specular top edge and status badge.

## 6. Copy Rules
- **No wording modifications:** All headings, button labels, subtitles, metadata, and body text are frozen.
- **Zero article modifications:** Never touch `src/data/insights.tsx` or article bodies.
- **Sentence case:** Headings, buttons, and UI controls use sentence case.
