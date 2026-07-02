# MEMORY.md — PhyXis

## Project Conventions
- Next.js 16 static export, App Router, pnpm, TypeScript 6, Tailwind CSS 3, Zustand.
- Dark-mode prototype is being refactored to a light-mode Figma design system.
- All authenticated pages live under `/app/*` route segment; use `app/app/layout.tsx` with `AppShell`.
- UI primitives are in `components/ui/`; they should reference only the Figma tokens in `tailwind.config.ts`.
- Icons use `lucide-react`; `react-feather` is being removed.
- `Button` primitive supports an `href` prop that renders `next/link` directly.

## Key Technical Decisions
- Foundation tokens (Tailwind, globals, root layout) are already in place; remaining work is components, pages, routing, and tests.
- Deleted page files were restored from git to serve as reference before planning.
- Dashboard and Simulator keep their full role-based implementations and are moved to `/app/*`.
- Quiz, Report, KPS, and Monitoring are archived to `docs/superpowers/archive/` (git-ignored) and replaced with placeholders at `/app/assessment`, `/app/report`, `/app/kps`, `/app/analytics`.
- Simulator logic and Zustand state machines must be preserved; only visual styling changes.
- Old route groups `(app)` and `(auth)` are removed only after all pages have been moved.

## Lessons Learned
- Always check the actual git status before planning; this repo was already in a partial refactor state with deleted route groups and missing pages.
- `lucide-react` can be present in `node_modules` without being declared in `package.json` (symlink from another install); verify `package.json` before assuming the dependency exists.

## Environment & Tools
- Build quirk: `pnpm build` fails on cleanup of `dist/dev/cache/turbopack/` due to FUSE/ENONTEMPTY. Workaround is to build in `/tmp` and copy `dist/` back. Documented in `AGENTS.md`.
- Tests: vitest (jsdom) for unit, Playwright for E2E.
