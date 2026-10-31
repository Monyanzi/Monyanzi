---
name: unslop
description: Audits and refactors frontend UI and prose to eliminate first- and second-order slop patterns based on DESIGN.md.
---

# Unslop — Frontend Design & Editorial Polish

## 2. Typography
- Do use `Newsreader Variable` for headings (`font-display`), `Instrument Sans Variable` for body/UI (`font-sans`), and `JetBrains Mono Variable` (`font-mono`) for indices and tabular numbers.
- Never use oversized gradient-clipped text or retain kicker eyebrows (`Index 0X / ...`, `label-eyebrow`) above headings.

## 3. Colour
- Do use warm stone paper surfaces (`bg-background`, `bg-surface`, `bg-surface-2`), deep carbon ink (`text-foreground`), forest pine (`text-accent`), and warm bronze ink jacarta tokens.
- Never use neon purple, alternating `i % 2 === 0` color tricks, or colored drop shadows.

## 4. Shape
- Do use `--radius: 0.25rem` (4px) with `rounded-lg` for panels and `rounded-md` for buttons.
- Never use `rounded-xl`, `rounded-2xl`, `rounded-3xl`, `rounded-4xl`, or `rounded-5xl` (keep `rounded-full` only for indicator dots, toggles, or circular audio play buttons).

## 5. Components
- Do use standard Primary (`bg-foreground text-background hover:bg-accent`), Secondary (`border border-border-strong hover:bg-surface-2`), and minimal text link CTAs.
- Do use unadorned monospace category tags (`font-mono text-[11px] text-foreground-muted`) and underlined text filter tabs.
- Never wrap category tags or filters in pill badges, borders, or filled containers.

## 6. Uppercase Allowlist
- Do allow uppercase with tracking only in footer column headings, the stack ledger table header row, and article metadata lines.
- Never use uppercase or wide letter-spacing on buttons, CTAs, tags, or section headings.

## 7. Forbidden Patterns
- Do keep transitions fast, subtle, and physical (150ms hover state changes).
- Never use `radial-gradient`, `backdrop-blur`, `backdrop-filter`, `.glass`, `card-premium`, `audio-card-purple`, `hover:-translate-y`, `active:scale-`, `whileHover`, or emoji UI chrome.

## 8. Copy Rules
- Do write headings and buttons in sentence case, and replace visible UI em-dashes (`—` / `&mdash;`) with `·`, `:`, or `.`.
- Never use themed jargon such as "dispatch", "inspect", "field manual", "Vol.", "Zero-slop", or "Fig 1.1".

## Final Check
Run this command from root to ensure zero forbidden patterns remain:
```powershell
Get-ChildItem src -Recurse -Include *.tsx,*.ts,*.css | Select-String "radial-gradient|backdrop-blur|backdrop-filter|\.glass|card-premium|audio-card-purple|i % 2 === 0|hover:-translate-y|active:scale-|whileHover|Zero-slop|Fig 1\.1|dispatch\b"
```
