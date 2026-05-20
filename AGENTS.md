# Repository Guidelines

## Project Structure & Module Organization
This repo is an Astro 6 bilingual content site (`es`, `ru`). Core app code lives in `src/`:
- `src/pages/` route files (`/es`, `/ru`, and localized image detail pages).
- `src/layouts/` shared page shell.
- `src/components/` reusable UI pieces (for example language switching).
- `src/i18n/translations.ts` locale strings and typed locale keys.
- `src/content/imagenes_es` and `src/content/imagenes_ru` Markdown content + paired images.
- `src/content.config.ts` content collection schemas.
Static assets are in `public/`. Production output is generated to `dist/`.

## Build, Test, and Development Commands
Use Node `>=22.12.0` and Yarn/NPM from repo root.
- `yarn dev` (or `npm run dev`): run local dev server on `http://localhost:4321`.
- `yarn build`: create production build in `dist/`.
- `yarn preview`: serve built output locally.
- `yarn astro check`: run Astro type/content checks before opening a PR.
- `bash scripts/png-to-webp.sh`: convert `src/content/**/*.png` to `.webp` (requires ImageMagick `magick`).

## Coding Style & Naming Conventions
Use TypeScript + Astro with 2-space indentation and trailing semicolons, matching existing files. Keep components/layouts in PascalCase (`LanguageSwitcher.astro`, `Layout.astro`). Keep content folders locale-scoped (`imagenes_es`, `imagenes_ru`) and slug files kebab-case (for example `primera-cancion-del-año.md`). Keep localized text in `translations.ts`; avoid hardcoding UI copy across page files.

## Testing Guidelines
No dedicated unit-test suite yet. Minimum validation for every change:
1. `yarn astro check` passes.
2. `yarn build` succeeds.
3. Manual smoke test for both locales (`/es`, `/ru`) and affected dynamic image pages.
When adding schema/content logic, verify frontmatter matches `src/content.config.ts` (`title`, `date`, `image`).

## Commit & Pull Request Guidelines
Follow Conventional Commit style seen in history: `feat(scope): ...`, `chore(scope): ...` (example: `feat(site): launch bilingual Astro site`). Keep subject imperative and specific.

PRs should include:
- concise summary of user-visible changes,
- linked issue/task if available,
- screenshots for UI/content updates (both locales when relevant),
- confirmation that `yarn astro check` and `yarn build` passed.
