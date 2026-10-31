# DESIGN.md — AI Founder Garage Visual Specification

> **Design Philosophy:** Swiss Editorial & Field Manual (inspired by *Stripe Press*, *Linear*, and *Read.cv*).
> Every element must look authored by a human design director, never generated from a statistical average.

## 1. Typography
- **Display / Headings (`font-display`):** `Newsreader` (Optical size `6..72`, weights `400`, `500`, `600`, plus true editorial italic). Tight tracking (`-0.02em` to `-0.03em`), crisp line-height (`1.04` to `1.12`).
- **Body / UI (`font-sans`):** `Plus Jakarta Sans` (weights `400`, `500`, `600`, `700`). Never default to bare corporate `Inter`.
- **Technical / Indices (`font-mono`):** `JetBrains Mono` with `font-variant-numeric: tabular-nums` for step numbers (`01`, `02`), reading durations, keyboard shortcuts, and metadata ledgers.

## 2. Color System (Warm Stone & Deep Forest Ink)
- **Light Mode Surface Hierarchy:**
  - `--background`: Warm archival paper (`40 30% 96%`)
  - `--surface`: Crisp alabaster card/panel (`40 38% 98.5%`)
  - `--surface-2`: Subtle stone inset (`38 24% 92.5%`)
  - `--foreground`: Deep carbon ink (`36 18% 10%`)
  - `--foreground-muted`: Editorial charcoal (`34 10% 34%`)
  - `--foreground-subtle`: Muted warm grey (`36 8% 48%`)
- **Single Intentional Accent:**
  - `--accent`: Deep British Racing / Forest Pine (`152 52% 24%` in light mode, `150 55% 48%` in dark mode).
  - `--jacarta` & `--gold`: Mapped to harmonious editorial ink/warm bronze tones—**never** use neon purple or alternating `i % 2 === 0` color tricks.

## 3. Anti-Slop Rules (Strictly Enforced)
1. **No Orphan Pill Badges Above Headings:** Section kickers use crisp monospace index labels (`01 / GUIDES` or `FIELD NOTES`) without `rounded-full` colored backgrounds or tiny decorative Lucide icons.
2. **No Ambient Radial Glow Blobs:** Never place `bg-[radial-gradient(...)]` blurs behind page headers or cards. Let typography and surface contrast carry the hierarchy.
3. **No Giant Gradient-Clipped Numbers:** Never use `text-8xl` / `text-[10rem]` `background-clip: text` numbers. Use crisp tabular monospace indices (`01` — `10`) aligned to a structural hairline grid.
4. **No Emoji UI Chrome:** Never use emojis (`⚡`, `🔒`, `🐾`, `🚨`, `🌲`) as UI icons or inside fake screenshot overlays.
5. **No Repetitive Glass Card Grids in Prose:** Long-form articles should read like a book or journal—using horizontal hairlines (`border-t border-border`), structured ledger rows, and editorial typography rather than wrapping every paragraph in a `.glass` card.
6. **Restrained Motion:** Use fast, physical transitions (`150ms–250ms` `cubic-bezier(0.16, 1, 0.3, 1)`). Avoid magnetic nav links or competing scroll progress bars.

