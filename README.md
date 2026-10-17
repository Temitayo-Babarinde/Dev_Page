# Temitayo Babarinde — Portfolio

A personal portfolio for Temitayo Babarinde, a Computer Science and Mathematics freshman at Hunter College. The page uses a fan of playing cards: the Jack introduces Temitayo, and the other cards reveal skills, projects, background, and hackathon work when hovered, focused, or tapped.

## Stack

- Next.js 13 App Router
- React 18 and TypeScript
- Tailwind CSS (base utilities)

## Run locally

```sh
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```sh
npm run build
```

## Content and interaction

- `src/app/page.tsx` contains the card deck and portfolio content.
- `src/globals.css` defines the responsive card fan, suit colors, and 3D side-flip transitions.
- `src/app/layout.tsx` contains the page metadata.

Cards flip on hover or keyboard focus; on touch devices, tap the back of a card to turn it over. The fan becomes a swipeable card row on small screens. Reduced-motion settings shorten transitions. Project summaries link to their source repositories. Strategy Lab uses synthetic data for a repeatable safety demo; its results are not evidence of trading performance. HLPR is a private class workspace intended for Hunter College students.

## Production deployment

The production site is hosted on Vercel and connected to this GitHub repository. Commits to `main` trigger production deployments.
