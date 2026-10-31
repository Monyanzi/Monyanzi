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
- **Token:** `--radius`: `0.25rem` (4px). Delete Tailwind `borderRadius` `4xl` and `5xl`.
- **Radius Map:**
  - `rounded-3xl`, `rounded-2xl`, `rounded-xl` → `rounded-lg` (4px via token)
  - `rounded-full` → `rounded-md` (Exception: keep as-is when the element is a dot `h-1.5 w-1.5`, `h-2 w-2`, a toggle switch track or knob in `CookieConsent`, or a circular play button in the audio player)
  - `lg:rounded-2xl`, `lg:rounded-xl` → delete

## 5. Components
- **Buttons:**
  - **Primary:** `inline-flex min-h-[42px] items-center justify-center gap-2 rounded-md bg-foreground px-5 py-2 text-sm font-medium text-background transition-colors duration-150 hover:bg-accent`
  - **Secondary:** `inline-flex min-h-[42px] items-center gap-2 rounded-md border border-border-strong bg-transparent px-5 py-2 text-sm font-medium text-foreground transition-colors duration-150 hover:bg-surface-2`
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
