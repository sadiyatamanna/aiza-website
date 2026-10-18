# AIZA website

A responsive React and TypeScript marketing site for the AIZA mobile personal-safety project. The site is a standalone project and does not connect to any application backend.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Setup and development

```sh
npm install
npm run dev
```

## Type checking and production build

```sh
npm run typecheck
npm run build
npm run preview
```

The production output is written to `dist/`.

## Configuration before launch

Edit `src/config.ts` to set the supplied logo asset, verified mobile release URL, support and privacy/security contacts, and policy details. The release action remains unavailable and displays “Coming Soon” while `downloadUrl` is blank. Privacy Policy and Terms are drafts with placeholders; verify every statement against the app implementation and obtain the appropriate review before publication.

The site includes Home, About AIZA, Safety Features, PQC & Security, How It Works, Privacy, Terms, and Contact routes. PQC algorithms are presented as research/design focus only; production deployment has not been verified.

No API keys, Supabase credentials, or backend connection are used by this website.

## Cloudflare Pages

1. Create a Pages project from the repository, or upload the built `dist/` directory.
2. Choose **React (Vite)** when available, or configure the build command as `npm run build` and output directory as `dist`.
3. Use Node.js 20.19+ or 22.12+ for the build environment.
4. The site uses React Router browser routes. Add a Pages fallback/rewrite to serve `/index.html` for routes such as `/privacy` and `/terms` (for example, a `_redirects` file containing `/* /index.html 200`).

Deployment and domain purchase are not included.
