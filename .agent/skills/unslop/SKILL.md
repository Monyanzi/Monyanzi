---
name: unslop
description: Audits and refactors frontend UI and prose to remove AI slop patterns (pill badge clutter, purple/teal gradients, radial glow blobs, emoji icons, uniform bento cards, and giant gradient numbers) based on DESIGN.md and open-source anti-slop frameworks (heydamir/unslop, taste-skill, impeccable.style).
---

# Unslop — Frontend Design & Editorial Polish Skill

Use this skill whenever creating or modifying UI components, pages, or article layouts in this repository.

## 7-Pass De-Slop Audit Checklist

1. **Typography Pass**
   - Use `font-display` (`Newsreader`) for editorial headings and `font-sans` (`Plus Jakarta Sans`) for UI/body.
   - Use `font-mono tabular-nums` (`JetBrains Mono`) for counts, indices (`01`, `02`), and timestamps.
   - Never use oversized gradient-clipped text (`WebkitBackgroundClip: "text"`).

2. **Color & Surface Pass**
   - Stick strictly to the warm stone paper palette (`bg-background`, `bg-surface`, `bg-surface-2`) and the single primary forest ink accent (`text-accent`).
   - Never alternate colors with `index % 2 === 0` between purple and green.
   - Never add radial glow blobs (`bg-[radial-gradient(...)]`) or colored drop shadows (`rgba(212,175,55,...)`).

3. **Eyebrow & Badge Pass**
   - Do not place `rounded-full` pill badges with tiny Lucide icons above section headings.
   - Use clean architectural kickers (`<p className="label-eyebrow">01 / Section</p>`).

4. **Layout & Grid Pass**
   - Avoid wrapping every list item in a `rounded-2xl border p-6` card.
   - Prefer architectural hairline dividers (`divide-y divide-border`, `border-t border-border`) and asymmetric editorial columns (`grid-cols-[auto_1fr]` or `lg:grid-cols-[240px_1fr]`).

5. **Icon & Chrome Pass**
   - Never use emojis (`⚡`, `🔒`, `🐾`, `🚨`) as UI icons.
   - Never overlay fake UI search bars or fake macOS traffic light dots on top of real product screenshots.

6. **Motion Pass**
   - Keep hover states subtle (`border-border-strong`, `bg-surface-2`, or a `1px` shift).
   - Avoid magnetic links, bouncy scaling, or duplicate scroll progress bars.

7. **Copy & Prose Pass**
   - Avoid em-dash overuse (`—`), hype adjectives, and shouty uppercase badges. Keep copy direct, operational, and grounded.

