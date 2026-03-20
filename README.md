# Podmaraj Boruah — Portfolio

Full-stack Next.js portfolio. Built with Next.js 14, TypeScript, Tailwind CSS.

## Setup (3 commands)

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          ← Root layout + metadata
│   ├── page.tsx            ← Assembles all sections
│   └── globals.css         ← All CSS (variables, animations, components)
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Education.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── LearningRoad.tsx
│   │   ├── Quotes.tsx
│   │   └── Contact.tsx
│   ├── phoenix/
│   │   └── PhoenixSVG.tsx
│   ├── map/
│   │   └── AssamMap.tsx
│   └── ui/
│       └── Cursor.tsx
│
├── hooks/
│   └── index.ts            ← All custom hooks
│
├── data/
│   └── index.ts            ← All content data
│
└── lib/
    └── utils.ts            ← cn() helper
```
