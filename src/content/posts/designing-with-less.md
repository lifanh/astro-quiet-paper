---
title: "Designing with less"
description: "A sample note about choosing constraints before components."
date: 2026-07-05
tags: ["design", "systems"]
---

Quiet interfaces start by deciding what not to draw. The first pass is rarely about components; it is about rhythm, measure, and the few moments where color should carry meaning.

## Start with defaults

Before adding a new card, badge, or variant, make the default text feel settled. A page with strong type, consistent spacing, and clear links can carry more work than a collection of decorative surfaces.

```mermaid
flowchart LR
    Writing[Markdown writing] --> Prose[quiet-paper Prose]
    Prose --> Astro[Static Astro page]
    Astro --> Workers[Cloudflare Workers assets]
```

## Let states earn their weight

Loading, empty, and error states need to be visible without becoming loud. Treat them like marginal notes: present, specific, and easy to recover from.
