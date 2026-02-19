# Real Estate Listings

A property listing page built with [Next.js](https://nextjs.org) and [General Translation](https://generaltranslation.com) to demonstrate internationalization.

## Features

- Property cards with prices, square footage, bedroom/bathroom counts, and listing dates
- Property type badges (house, apartment, condo)
- Locale-aware number, currency, and date formatting
- Pluralization for bedroom and bathroom counts
- Translated UI in English, Spanish, French, Japanese, and Chinese
- Locale selector with `[locale]` routing

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Translations

Translations are stored locally in `public/_gt/`. To regenerate:

```bash
npx gtx-cli translate
```
