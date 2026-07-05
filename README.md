# Astro quiet paper starter

Astro **template** for a prose-first personal site: static marketing pages + **React islands** styled with [`@lifanh/quiet-paper`](https://www.npmjs.com/package/@lifanh/quiet-paper).

**Quiet paper:** warm off-white, ink-like type, hairline borders, one restrained accent — no dashboard chrome.

## Stack

| Layer | Choice |
|--------|--------|
| Static | Astro 7 |
| Islands | React 19 + `@astrojs/react` |
| Styles | Tailwind CSS v4 + design system tokens |

## Quick start

```bash
git clone git@github.com:lifanh/lifan-astro-minimal-theme.git my-site
cd my-site
npm install
npm run dev
```

Open `http://localhost:4321`.

**Before `@lifanh/quiet-paper` is on npm**, link locally:

```bash
npm install /path/to/quiet-paper
# run `npm run build` in that repo first
```

## Design system setup

Tokens and utilities come from the package (Tailwind v4 Pattern A). Already wired in `src/styles/global.css`:

```css
@import "tailwindcss";
@import "@lifanh/quiet-paper/styles/tailwind-sources.css";
@import "@lifanh/quiet-paper/styles/tokens.css" layer(theme);
@import "@lifanh/quiet-paper/styles/tailwind-theme.css";
```

Components in React islands:

```tsx
import { Panel, Button } from "@lifanh/quiet-paper";
```

In `.astro` pages:

```astro
---
import DemoPrototype from "../components/DemoPrototype.tsx";
---
<DemoPrototype client:load />
```

## Customize

| File | What to change |
|------|----------------|
| `src/site.ts` | Site name, nav, default meta |
| `src/pages/index.astro` | Homepage copy (Work / Writing / Contact) |
| `src/pages/about.astro` | About |
| `src/components/*` | Demo composites — copy patterns, don’t fork primitives |

Primitives (`Button`, `Field`, `ErrorState`, …) live in the **design system repo**, not here.

## Project layout

```text
src/
├── layouts/BaseLayout.astro   # shell + global CSS
├── components/                # app-specific React (demos)
├── pages/                     # routes
├── site.ts                    # nav + metadata
└── styles/global.css          # Tailwind + DS imports
```

## Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Dev server `:4321` |
| `npm run build` | Static `dist/` |
| `npm run preview` | Preview production build |

## Deploy

Any static host (Cloudflare Pages, Vercel, Netlify): build command `npm run build`, output `dist/`.

## Related repos

- **Design system:** [quiet-paper](https://github.com/lifanh/quiet-paper) → npm `@lifanh/quiet-paper`
- **Learning notes (optional):** your own `my-minimalism` or design journal — not required to run this template

## License

MIT — fork and replace “Lifan” with your name in `src/site.ts`.