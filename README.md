# astro-quiet-paper

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/lifanh/astro-quiet-paper)

**Live preview:** <https://astro-quiet-paper.lifanh.workers.dev/>

Astro **template** for a prose-first personal site: static pages, Markdown writing, and a hidden React island demo styled with [`@lifanh/quiet-paper`](https://www.npmjs.com/package/@lifanh/quiet-paper).

**Quiet paper:** warm off-white, ink-like type, hairline borders, one restrained accent — no dashboard chrome.

![Astro quiet-paper homepage preview](docs/preview.png)

## Stack

| Layer | Choice |
|--------|--------|
| Static | Astro 7 |
| Writing | Astro content collections + Markdown |
| Islands | React 19 + `@astrojs/react` |
| Styles | Tailwind CSS v4 + design system tokens |
| Discovery | RSS, sitemap, robots |

## Quick start

```bash
git clone git@github.com:lifanh/astro-quiet-paper.git my-site
cd my-site
npm install
npm run dev
```

Open `http://localhost:4321`.

Before deploying, replace the template identity and URL in `src/site.ts` and `astro.config.mjs`.

## Writing

Posts live in `src/content/posts/*.md`:

```md
---
title: "Designing with less"
description: "Short summary for lists and SEO."
date: 2026-07-05
tags: ["design", "systems"]
draft: false
---
```

Routes included:

- `/writing` — all non-draft posts
- `/writing/[...slug]` — individual posts
- `/rss.xml` — feed for non-draft posts
- `/robots.txt` and `/sitemap-index.xml` — crawler discovery

The homepage automatically shows the latest three non-draft posts.

## Design system setup

Tokens and utilities come from the package (Tailwind v4 Pattern A). Already wired in `src/styles/global.css`:

```css
@import "tailwindcss";
@plugin "@tailwindcss/typography";
@import "@lifanh/quiet-paper/styles/tailwind-sources.css";
@import "@lifanh/quiet-paper/styles/tokens.css" layer(theme);
@import "@lifanh/quiet-paper/styles/tailwind-theme.css";
```

Components in React islands and rendered Markdown pages:

```tsx
import { Panel, Button, Prose } from "@lifanh/quiet-paper";
```

The developer demo route stays at `/demo`, but it is intentionally not linked from the site chrome.

## Customize

| File | What to change |
|------|----------------|
| `src/site.ts` | Site name, public URL, nav, default meta |
| `astro.config.mjs` | Astro `site` URL for sitemap/canonical output |
| `src/pages/index.astro` | Homepage copy (Work / Writing / Contact) |
| `src/content/pages/about.md` | About page copy |
| `src/content/posts/*.md` | Writing entries |
| `src/demo/*` | Demo composites — copy patterns, don’t fork primitives |

Primitives (`Button`, `Field`, `ErrorState`, …) live in the **design system repo**, not here.

## Project layout

```text
src/
├── components/                # site chrome (header, footer)
├── demo/                      # React islands for /demo only
├── content/pages/about.md     # Markdown-backed About page
├── content/posts/             # Markdown writing
├── content.config.ts          # page/post frontmatter schemas
├── layouts/BaseLayout.astro   # shell + global meta + CSS
├── lib/posts.ts               # writing helpers
├── pages/                     # routes, RSS, robots
├── site.ts                    # nav + metadata
└── styles/global.css          # Tailwind + DS imports
```

## Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Dev server `:4321` |
| `npm run lint` | Oxlint source checks |
| `npm run check` | Astro + TypeScript diagnostics |
| `npm run build` | Static `dist/` |
| `npm run preview` | Preview production build |

## Deploy

### Deploy to Cloudflare Workers (one click)

Use the **Deploy to Cloudflare** button above (or open the [deploy flow](https://deploy.workers.cloudflare.com/?url=https://github.com/lifanh/astro-quiet-paper)). Cloudflare will fork the repo into your GitHub account, connect **Workers Builds**, and deploy static assets from `dist/` using [`wrangler.jsonc`](wrangler.jsonc).

Suggested build settings (usually auto-detected):

| Setting | Value |
|---------|--------|
| Build command | `npm run build` |
| Deploy command | `npm run deploy` |

After the first deploy, set your public URL in `src/site.ts` and `astro.config.mjs` so RSS, sitemap, and canonical links are correct.

Local equivalent:

```bash
npm run build
npm run deploy
```

### Other static hosts

Cloudflare Pages, Vercel, Netlify: build command `npm run build`, output directory `dist/`.

Set the same production URL in `src/site.ts` and `astro.config.mjs` before publishing.

## Related repos

- **Design system:** [quiet-paper](https://github.com/lifanh/quiet-paper) → npm `@lifanh/quiet-paper`
- **Learning notes (optional):** your own `my-minimalism` or design journal — not required to run this template

## License

MIT — fork and replace “Lifan” with your name in `src/site.ts`.
