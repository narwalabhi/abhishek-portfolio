# AGENTS.md

## Toolchain

- Single-page React 19 + TypeScript app built with Vite 8. Node 22.12+ and npm only.
- Verified with Node 26.10.0 and npm 11.19.1.
- Biome owns formatting and linting. Do not add ESLint, Prettier, or a CSS framework.

## Commands

- `npm ci` — install exactly from the lockfile.
- `npm run dev` — Vite dev server at `http://localhost:5173/abhishek-portfolio/`.
- `npm run lint` / `npm run lint:fix` — Biome checks and safe fixes.
- `npm run typecheck` — `tsc --noEmit`.
- `npm test` — Vitest once; `npm run test:watch` for watch mode.
- `npm run build` — typecheck plus production build in `build/`.
- `npm run preview` — serve the production build locally.

Pushing to `master` deploys GitHub Pages through `.github/workflows/deploy.yml`; there is no manual deploy command and the `gh-pages` branch is not used.

## Architecture

- `src/main.tsx` mounts `src/App.tsx`. There is no router: the site is one page with anchor navigation.
- `src/data/portfolio.ts` is the source of truth for profile, experience, projects, skills, education, and contact content. Update it instead of editing JSX copy.
- `src/components/` contains one component per page section plus `SectionHeading`.
- `src/styles.css` is the only stylesheet. It defines the dark/cyan theme through CSS custom properties; preserve those tokens instead of introducing new colors ad hoc.
- `public/resume.pdf` is the published résumé. The portrait is an existing external Cloudinary URL in the data file.
- `vite.config.ts` fixes the GitHub Pages base path at `/abhishek-portfolio/` and output at `build/`. Change both deployment settings together if the repository path changes.
- SEO, Open Graph metadata, Person structured data, `site.webmanifest`, `robots.txt`, and `sitemap.xml` live outside the React app. Keep URLs and metadata in sync with `src/data/portfolio.ts`.
- `src/App.test.tsx` is the smoke test for positioning, navigation, experience, projects, and contact links.

## Conventions and constraints

- Keep the established visual language: dark background, cyan accent, glass cards, uppercase monospace labels. Do not reintroduce Bootstrap, Chart.js, FontAwesome, or the old Cloudinary background image.
- Accessibility is required: semantic headings, keyboard-visible focus, labelled controls, sufficient contrast, and `prefers-reduced-motion` support.
- Internal links use hash anchors; external links open with `rel="noreferrer"`.
- Resume and asset URLs must start with `import.meta.env.BASE_URL` so the GitHub Pages subpath keeps working.
- CI runs lint, typecheck, tests, and build on Node 24 and 26. `master` also runs the Pages deployment workflow. Keep `npm run lint`, `npm run typecheck`, `npm test`, and `npm run build` green before pushing or handing off.
