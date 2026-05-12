# Lawguide.lk — Landing Page

Public marketing website for Lawguide.lk — AI-powered legal assistant for Sri Lanka.

**Live at:** https://www.lawguide.lk

## Stack
- React + Vite
- Tailwind CSS
- i18n: English, Sinhala, Tamil

## Local Development

```bash
npm install
npm run dev
```

Runs on http://localhost:5173

## Build for Production

```bash
npm run build
```

Output goes to `dist/`. Copy to `/var/www/landing/dist/` on VPS — served directly by nginx (no Node process needed).

## Deploy

This is a static site. No Docker, no server process.
- On VPS: `rsync -avz dist/ user@vps:/var/www/landing/dist/`
- nginx serves the `dist/` folder directly

## Repo Structure

```
src/
├── components/     # Hero, Features, Pricing, Audience, etc.
├── localization/   # EN/SI/TA translations
├── contexts/       # LanguageContext
└── App.tsx
```

## Branch Strategy
- `dev` — active development
- `main` — production (what's live on www.lawguide.lk)
