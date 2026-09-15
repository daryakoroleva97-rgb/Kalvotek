# Kalvotek

Marketing site for Kalvotek, a car window tinting company, built with Next.js
(App Router), TypeScript, and Tailwind CSS. Includes an interactive 3D tint
visualizer (Three.js / react-three-fiber) that lets a visitor pick a car body
style, paint color, and tint shade (5%, 10%, 15%, 25%, 35%, 50% VLT) and see
it previewed on a car model in the browser.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

- `src/app` — pages (App Router): home, `/visualizer`, `/process`, `/faq`, `/location`.
- `src/components/visualizer` — the 3D visualizer: procedural car geometry
  (`CarModel.tsx`, `geometry.ts`, `carModels.ts`), tint color math (`tint.ts`),
  the Three.js scene (`CarScene.tsx`), and the control panel (`VisualizerApp.tsx`).
- `src/lib/site-config.ts` — all editable business content in one place:
  contact details, address, hours, tint shades, car colors/models, FAQ copy,
  process steps, and the external booking URL.
- `src/components/layout` — header, footer, and the "Book Now" button.

## Content you'll likely want to edit

Everything in `src/lib/site-config.ts`:

- `reservationUrl` — currently a placeholder (`https://booking.kalvotek.com/reserve`).
  Replace with the real external booking system URL before launch.
- `phone`, `email`, `address`, `businessId` — sourced from public Finnish
  business directories since kalvotek.com itself wasn't reachable while
  building this; double-check against the live site before publishing.
- `hours` — placeholder opening hours; not publicly listed anywhere found, so confirm the real hours.
- `tintShades`, `carModels`, `carColors` — power the visualizer's option lists.
- `faqs`, `processSteps`, `nuances`, `nearbyLandmarks` — page copy.

The car models in the visualizer are procedurally generated (no external
`.glb`/image assets), so there's nothing to swap out there — tweak
`src/components/visualizer/carModels.ts` to adjust body proportions instead.

## Deploying to Vercel

This is a stock Next.js app, so it deploys to [Vercel](https://vercel.com) with
zero configuration:

1. Push this repository to GitHub (or GitLab/Bitbucket).
2. In Vercel, click **Add New → Project** and import the repository.
3. Framework preset: **Next.js** (auto-detected). Leave build/output settings
   as default (`next build`).
4. Deploy.

Or from the CLI:

```bash
npm i -g vercel
vercel
```

No environment variables are required — all content lives in
`src/lib/site-config.ts`.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build locally
- `npm run lint` — ESLint
