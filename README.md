# Volchik & Cheburashka

Bilingual (Spanish/Russian) static website with illustrated stories built with Astro.

Live site: `https://volchikcheburashka.com`

## What This Project Does

- Serves localized home pages at `/es` and `/ru`.
- Auto-redirects `/` to the visitor language (`ru` if browser locale starts with `ru`, otherwise `es`).
- Renders story detail pages from Markdown content collections.
- Uses localized SEO metadata (`canonical`, `hreflang`, Open Graph, Twitter cards).
- Generates sitemap via `@astrojs/sitemap`.

## Tech Stack

- Astro 6
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- Astro Content Collections
- TypeScript

## Requirements

- Node.js `>= 22.12.0`

## Project Structure

```text
.
├── public/                        # Static assets (logos, favicon, hero image, robots)
├── scripts/
│   └── png-to-webp.sh             # Utility script for image conversion
├── src/
│   ├── components/
│   │   └── LanguageSwitcher.astro
│   ├── content/
│   │   ├── imagenes_es/           # Spanish stories (.md + .webp)
│   │   └── imagenes_ru/           # Russian stories (.md + .webp)
│   ├── i18n/
│   │   └── translations.ts        # UI copy for ES/RU
│   ├── layouts/
│   │   └── Layout.astro           # Shared SEO + page shell
│   ├── pages/
│   │   ├── index.astro            # Language redirect entrypoint
│   │   ├── es/
│   │   │   ├── index.astro
│   │   │   └── imagenes/[slug].astro
│   │   └── ru/
│   │       ├── index.astro
│   │       └── imagenes/[slug].astro
│   ├── styles/
│   │   └── global.css
│   └── content.config.ts          # Content schema definitions
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Content Model

Each story is a Markdown file with frontmatter:

```md
---
title: "Story title"
date: 2026-01-01
image: "./story-image.webp"
---

Story body in Markdown...
```

Collections:

- `imagenes_es` from `src/content/imagenes_es`
- `imagenes_ru` from `src/content/imagenes_ru`

Both require:

- `title`: string
- `date`: date
- `image`: local image reference

## Development

Install dependencies:

```bash
npm install
```

Start local dev server:

```bash
npm run dev
```

Default local URL: `http://localhost:4321`

## Build and Preview

Build production output:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

## Astro CLI

Run Astro commands:

```bash
npm run astro -- <command>
```

Examples:

```bash
npm run astro -- check
npm run astro -- --help
```

## Adding a New Story

1. Add a Markdown file in `src/content/imagenes_es` and/or `src/content/imagenes_ru`.
2. Add matching `.webp` image in same folder.
3. Set frontmatter `title`, `date`, and `image` path.
4. Slug auto-generated from filename.
5. Rebuild site.

If Spanish and Russian filenames match (same slug), the site automatically exposes alternate-language links for the story page.

## Image Conversion Script

Script available at `scripts/png-to-webp.sh`.

Purpose:

- Converts `.png` files to `.webp` using ImageMagick (`magick`).
- Removes original `.png` after successful conversion.

Run manually:

```bash
bash scripts/png-to-webp.sh
```

Note: script currently scans `src/content` recursively.

## Deployment Notes

- `site` is set to `https://volchikcheburashka.com` in `astro.config.mjs`.
- Sitemap generated during build.
- Default locale is `es`, with prefixed locale routes enabled.

## License

No license file currently included.
