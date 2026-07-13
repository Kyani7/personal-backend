# Hima Aus – Test Preparation Services

React + TypeScript + Tailwind CSS + React Router replica of the Hima Aus
English/graduate test preparation services section (IELTS, PTE, TOEFL, GRE).

## Stack

- React 19 + TypeScript
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- React Router v7
- Vite

## Getting started

```bash
npm install
npm run dev       # start dev server
npm run build     # type-check + production build
npm run preview   # preview the production build
```

## Project structure

```
src/
├── components/        # Reusable, presentational building blocks
│   ├── Navbar.tsx
│   ├── HeroBanner.tsx      # generic banner (Services page)
│   ├── CourseHero.tsx      # per-course banner with back link
│   ├── ServicesIntro.tsx
│   ├── CourseContent.tsx   # composes the two-column course layout
│   ├── FeatureList.tsx
│   ├── InfoCards.tsx       # "Advantage" box
│   ├── QuickFactsCard.tsx
│   ├── ImageSection.tsx
│   ├── CTASection.tsx
│   ├── Footer.tsx
│   ├── FloatingWidgets.tsx
│   └── PageShell.tsx       # Navbar + page content + Footer + widgets
├── pages/
│   ├── Services.tsx    # combined page: IELTS → PTE → TOEFL → GRE
│   ├── IELTS.tsx
│   ├── PTE.tsx
│   ├── TOEFL.tsx
│   └── GRE.tsx
├── data/
│   └── courses.ts      # single source of truth for all course content
├── routes/
│   └── router.tsx
├── hooks/
│   └── useScrollToHash.ts
├── utils/
│   └── types.ts
└── App.tsx
```

## Routes

| Path        | Page                                          |
| ----------- | ---------------------------------------------- |
| `/`         | redirects to `/services`                       |
| `/services` | All four courses stacked, in fixed order        |
| `/ielts`    | Dedicated IELTS page                            |
| `/pte`      | Dedicated PTE page                              |
| `/toefl`    | Dedicated TOEFL page                            |
| `/gre`      | Dedicated GRE page                              |

## Content

All copy (headings, features, quick facts, advantage cards, images) lives in
`src/data/courses.ts`. Pages and sections render purely from that data — to
edit copy for any exam, edit the data file; no component changes are needed.
