# SCoRe A⁺ Hydrogen and Carbon

Website for the SCoRe A⁺ Hydrogen and Carbon Centre at Montanuniversität Leoben, live at
[hydrogenandcarbon.at](https://hydrogenandcarbon.at).

Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev          # http://127.0.0.1:3001
```

| Script              | Purpose                                              |
| ------------------- | ---------------------------------------------------- |
| `npm run dev`       | Dev server on port 3001                               |
| `npm run dev:reset` | Clear `.next` and restart the dev server              |
| `npm run build`     | Production build (also runs the TypeScript compiler)  |
| `npm run start`     | Serve the production build                            |
| `npm run lint`      | ESLint                                                |
| `npm run typecheck` | `tsc --noEmit` (run after a build to avoid stale types) |

## Project structure

```
src/
  app/                 Routes (App Router). Pages are server components.
    home-page-content.tsx        Homepage body, rendered on the server
    research/research-track-explorer.tsx   Client island: track filter
    publications/publication-browser.tsx   Client island: filter + search
  components/          Shared UI. Only interactive pieces are "use client".
  data/
    h2c-*.ts           Research projects, publications, theses, chairs
    translations/      All EN/DE copy, one module per page area
  lib/
    i18n.ts            Locale type, cookie name, cookie builder
    server-i18n.ts     getLocale() for server components
    metadata.ts        buildPageMetadata() helper
```

## Language handling

The site is bilingual (English / German). The active locale lives in the `h2c-locale`
cookie rather than in the URL, so every page has a single canonical URL per route.

- Server components read the locale with `getLocale()` from `@/lib/server-i18n`.
- Client components read it from `useLanguage()` (`@/components/language-provider`).
- `LanguageToggle` writes the cookie and calls `router.refresh()` so server-rendered
  content re-renders in the new language.

Because the root layout reads a cookie, every page is server-rendered on demand.
Moving the locale into a URL segment (`/en/...`, `/de/...`) is the prerequisite for
static generation, but it would change every published URL, so it is deliberately
not done here.

### Adding or changing copy

All user-facing text lives in `src/data/translations/`. Add the English and German
strings to the relevant module — components should never contain hard-coded copy.

## Content data

- `src/data/h2c-research.ts` — doctoral research projects (also feeds `/research/[id]` and the sitemap)
- `src/data/h2c-publications.ts` — conference posters, with PDFs in `public/posters/`
- `src/data/h2c-theses.ts` — PURE thesis links
- `src/data/h2c-chairs.ts` — chair directory, derived from the supervisors listed on research projects
- `src/data/translations/meta.ts` — page titles and descriptions used for SEO and Open Graph

## SEO

Each route exports `generateMetadata` and uses `buildPageMetadata` from `@/lib/metadata`,
which sets the canonical URL, Open Graph, and Twitter card tags. `src/app/sitemap.ts`
generates entries for the static routes plus every research project and publication.

## Deployment

Deployed on Vercel. `main` is the production branch.
