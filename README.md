# Real Estate Listings

A property listing page demonstrating internationalization with General Translation and Next.js.

**[Live Demo](https://real-estate-listings.generaltranslation.dev)** | **[General Translation Docs](https://generaltranslation.com/docs)**

## About

This example app showcases a realistic real estate listings site with full i18n support. Property cards display locale-aware currency, dates, and pluralization. Available in English, Spanish, French, Japanese, and Chinese.

## GT Features Used

- `<T>` — JSX translation
- `<Currency>` — Locale-aware currency formatting
- `<Num>` — Number formatting
- `<DateTime>` — Date/time formatting
- `<Plural>` — Pluralization
- `<Branch>` — Conditional rendering by property type
- `<Var>` — Dynamic values in translated content
- `<LocaleSelector>` — Language picker
- `getGT` / `useGT` — String translations (metadata, placeholders)
- `loadTranslations` — Local translation storage

## Getting Started

```bash
git clone https://github.com/gt-examples/real-estate-listings.git
cd real-estate-listings
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Built With

- [Next.js](https://nextjs.org)
- [General Translation](https://generaltranslation.com) (gt-next)
- [Tailwind CSS](https://tailwindcss.com)
