# Abhishek Narwal — Portfolio

A single-page personal portfolio for **Abhishek Narwal**, full-stack software engineer specializing in Java services, distributed systems, payment infrastructure, and modern web interfaces.

**Live site:** https://narwalabhi.github.io/abhishek-portfolio/

## Stack

- React 19 and TypeScript
- Vite 8
- Vitest and Testing Library
- Biome
- Lucide icons
- GitHub Pages via GitHub Actions

The interface uses a custom dark/cyan design system with no CSS or UI framework. Portfolio content is kept separately from the components so it can be updated without editing JSX.

## Requirements

- Node.js 22.12 or newer
- npm 10 or newer

## Getting started

```bash
npm ci
npm run dev
```

The development server runs at http://localhost:5173/abhishek-portfolio/.

## Commands

```bash
npm run dev        # Start the Vite development server
npm run lint       # Check formatting and lint rules with Biome
npm run lint:fix   # Apply safe Biome fixes
npm run format     # Format files with Biome
npm run typecheck  # Run the TypeScript compiler without emitting files
npm test           # Run the Vitest suite once
npm run test:watch # Run Vitest in watch mode
npm run build      # Typecheck and create the production build in build/
npm run preview    # Preview the production build locally
```

Pushing to `master` publishes the site through GitHub Actions.

## Content updates

All biography, experience, project, skill, education, and contact content lives in:

```text
src/data/portfolio.ts
```

The downloadable résumé is stored at `public/resume.pdf`. The portrait is loaded from the existing Cloudinary URL defined in the portfolio data.

## Project structure

```text
src/
  components/       # Page sections and shared UI
  data/portfolio.ts # Editable portfolio content
  test/setup.ts     # Vitest setup
  App.tsx           # Section composition
  main.tsx          # React entry point
  styles.css        # Global design system and responsive styles
public/             # Résumé, favicon, manifest, robots, sitemap
.github/workflows/  # CI verification and Pages deployment
```

## Deployment

Vite is configured with:

- Base path: `/abhishek-portfolio/`
- Output directory: `build`

`.github/workflows/deploy.yml` runs for pushes to `master`. It installs dependencies, verifies lint/types/tests, builds the site, uploads `build/` as the Pages artifact, and deploys it. The `gh-pages` branch is not used.

The repository's one-time Pages setting must be **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Verification

Pull requests run linting, type checking, tests, and a production build on Node.js 24 and 26 through GitHub Actions. The deployment workflow repeats those checks before publishing from `master`.
