# DESIGN.md — Visual Specification

## 1. Philosophy
Independent publication, not a SaaS template.

## 2. Typography
- **Body font (`font-sans`):** `"Instrument Sans Variable"`, `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `sans-serif`.
- **Display font (`font-display`):** `"Newsreader Variable"`, `Georgia`, `serif`.
- **Mono font (`font-mono`):** `"JetBrains Mono Variable"`, `Consolas`, `monospace`.
- **Heading Spec:**
  - Remove every section kicker that matches `Index 0X / …`, `Index 0X — …`, or the label-eyebrow paragraph above an `h2`.
  - `h2`: `font-display text-3xl sm:text-4xl font-medium tracking-[-0.02em] text-foreground`. Sentence case ("Practical playbooks and checklists", not "Practical Playbooks & Checklists").
  - Optional dek below it: `mt-2 max-w-xl text-base text-foreground-muted`.

## 3. Colour
- **Surfaces & Foreground (Light Mode):**
  - `--background`: Warm archival paper (`40 30% 96%`)
  - `--surface`: Crisp alabaster card/panel (`40 38% 98.5%`)
  - `--surface-2`: Subtle stone inset (`38 24% 92.5%`)
  - `--foreground`: Deep carbon ink (`36 18% 10%`)
  - `--foreground-muted`: Editorial charcoal (`34 10% 34%`)
  - `--foreground-subtle`: Muted warm grey (`36 8% 48%`)
- **Accent:**
  - `--accent`: Deep British Racing / Forest Pine (`152 52% 24%` in light mode, `150 55% 48%` in dark mode).
- **Jacarta Token:**
  - Light mode: `28 28% 32%` (warm bronze ink)
  - Dark mode: `30 24% 72%`

## 4. Shape
- **Token:** `--radius`: `0.75rem` (12px continuous squircle).
- **Radius Map:**
  - `rounded-2xl`: 1.25rem (outer tray frames and showcase cards)
  - `rounded-xl`: 1rem (instrument cards and preview plates)
  - `rounded-lg`: 0.75rem (buttons, pills, and tool logo jewel-boxes)
  - `rounded-full`: for badge pills, indicators, and circular controls

## 5. Components
- **Buttons:**
  - **Primary:** `inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-foreground px-6 py-2.5 text-sm font-medium text-background shadow-keycap transition-all duration-150 hover:bg-accent hover:shadow-[0_4px_16px_rgba(18,74,44,0.28)] active:scale-[0.98]`
  - **Secondary:** `inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-border-strong/60 bg-surface/80 backdrop-blur-sm px-6 py-2.5 text-sm font-medium text-foreground shadow-sm transition-all duration-150 hover:bg-surface-2 hover:border-foreground/30 active:scale-[0.98]`
  - **Text link CTA:** `inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline decoration-border-strong underline-offset-4 hover:decoration-foreground`
- **Chips & Filters:**
  - **Category tag:** `font-mono text-[11px] text-foreground-muted` with no background, border, or radius.
  - **Filter tabs:** row of text buttons.
    - Inactive: `text-sm text-foreground-muted hover:text-foreground pb-2 border-b-2 border-transparent`
    - Active: `text-sm text-foreground pb-2 border-b-2 border-foreground`
    - Count: `font-mono text-[11px] text-foreground-subtle ml-1` span with no background.

## 6. Uppercase Allowlist
Uppercase plus `tracking-*` is only allowed in:
1. Footer column headings (`SiteFooter.tsx`)
2. Stack ledger table header row (created in T3.6)
3. Article meta line (category · date · read time)

Everywhere else (buttons, CTAs, chips, section kickers, tags, captions), remove uppercase and any `tracking-[…]`, `tracking-wide`, `tracking-wider` or `tracking-widest` on the same element. Buttons become sentence case: `text-sm font-medium`.

## 7. Forbidden Patterns
1. **Forbidden Classes & Tokens:** `radial-gradient`, `backdrop-blur`, `backdrop-filter`, `.glass`, `card-premium`, `audio-card-purple`, `i % 2 === 0`, `hover:-translate-y`, `active:scale-`, `whileHover`, `Zero-slop`, `Fig 1.1`, `dispatch` (in visible copy; `dispatchEvent` is fine).
2. **No Orphan Pill Badges Above Headings:** No `rounded-full` colored backgrounds or decorative Lucide icons above headings.
3. **No Ambient Radial Glow Blobs:** Never place `bg-[radial-gradient(...)]` blurs behind headers or cards.
4. **No Giant Gradient-Clipped Numbers:** Never use `background-clip: text` numbers.
5. **No Emoji UI Chrome:** Never use emojis as UI icons or inside fake screenshot overlays.
6. **No Repetitive Glass Card Grids in Prose:** Long-form articles read like a book using hairlines and editorial typography.
7. **Restrained Motion:** Subtle transitions only; avoid bouncy scaling, hover lift, or competing progress bars.

## 8. Copy Rules
- **Em-dash rule:** in `src/components/**` and `src/pages/**`, replace `—` / `&mdash;` in visible UI strings with `·`, `:` or a full stop, whichever reads naturally. Do not touch comments or `src/data/insights.tsx` article prose.
- **Sentence case:** headings, buttons, and UI controls use sentence case.
- **No themed jargon:** eliminate "dispatch", "inspect", "field manual", "Vol.".
