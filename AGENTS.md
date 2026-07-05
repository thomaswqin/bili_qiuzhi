# AGENTS.md

## Project Overview

This repository contains a static personal website for Thomas Qin, a Data Scientist.
The site is designed as a bilingual English/Chinese personal-brand homepage with an elegant, slightly geeky visual style and a generated anime-inspired portrait asset.

The site is intentionally simple and dependency-free. It can be previewed by opening `index.html` directly in a browser.

## File Structure

- `index.html` - Semantic page structure and site copy.
- `styles.css` - All layout, colors, typography, responsive rules, and visual effects.
- `script.js` - Small interactive behavior for the gallery cards.
- `assets/thomas-anime-portrait.png` - Generated hero portrait used by the page.
- `README.md` - Basic repository README.

Keep HTML, CSS, and JavaScript separated. Do not move major styling or scripts inline into `index.html` unless there is a strong reason.

## Preview

Open this file directly:

```text
C:\Users\Thomas\Documents\bili_qiuzhi\index.html
```

No build step, package install, or local dev server is required.

## Design Direction

- Maintain the current tone: elegant, data-science oriented, geeky, polished, and personal.
- Keep the palette close to ink, ivory, teal, jade/cyan accents, and small warm highlights.
- Avoid childish anime styling, cluttered visuals, or generic corporate landing-page patterns.
- Preserve bilingual EN/ZH copy where appropriate.
- Ensure large display text never overlaps adjacent content at desktop or mobile widths.
- Keep cards and controls restrained, with border radius around the existing `8px` style.

## Content Rules

- Primary identity: `Thomas Qin`.
- Role: `Data Scientist / 数据科学家`.
- Core background:
  - Statistics background.
  - Expert Python experience.
  - Large data science and consulting project experience.
- Contact should remain GitHub-only unless Thomas asks otherwise.
- GitHub URL: `https://github.com/thomasqin`.

## Implementation Notes

- This is plain static HTML/CSS/JS. Do not introduce a framework or build tool unless explicitly requested.
- Prefer semantic HTML and accessible labels.
- Use responsive CSS with stable layout constraints so headings, cards, and buttons do not shift or overlap.
- Keep JavaScript lightweight and nonessential; the page should remain readable if JavaScript is unavailable.
- If replacing or adding generated images, place final project-bound assets under `assets/` and update references in `index.html`.

## Verification Checklist

Before finishing changes, check:

- `index.html` opens directly in a browser.
- The portrait image loads from `assets/thomas-anime-portrait.png`.
- Navigation links jump to the correct sections.
- GitHub links point to `https://github.com/thomasqin`.
- Desktop and mobile layouts do not overlap text and images.
- Chinese and English text fit cleanly inside their containers.
- Styling remains in `styles.css` and behavior remains in `script.js`.
