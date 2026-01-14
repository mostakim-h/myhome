# MyHome — Real estate listings (Next.js + TypeScript)

A small, modern real-estate listing frontend built with Next.js (app router), TypeScript and Tailwind CSS. It demonstrates a component-driven layout for property listings, detail pages, and UI primitives.

This README explains project features, technology choices, how to run and build the app locally, and where to find and extend key parts of the codebase.

---

## Features

- Property listing pages (land, flats, commercial) with data driven from `lib/property-data.ts`.
- Individual property detail pages (dynamic routes under `app/land-sale/[id]`).
- Reusable UI components in `components/` and `components/ui/` (cards, inputs, navigation, theme toggle, etc.).
- Responsive layout and image assets stored under `public/`.
- Theme provider and toggle to demonstrate light/dark theming.
- Accessible primitives using Radix UI and small utility libraries (clsx, CVA).


## Tech stack

- Next.js 16 (app router)
- React 19 + TypeScript
- Tailwind CSS (v4) + @tailwindcss/postcss plugin
- Radix UI components (avatar, select, tabs, navigation-menu)
- Swiper for carousels
- ESLint for linting


## Requirements

- Node.js 18+ (recommended: 18 or 20)
- npm (or use yarn/pnpm if you prefer)


## Quick start

Install dependencies and run the development server:

```powershell
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

Available npm scripts (from `package.json`):

- `npm run dev` — Start Next.js in development mode.
- `npm run build` — Build production assets.
- `npm run start` — Run the production server (after `build`).
- `npm run lint` — Run ESLint.


## Project layout (important files)

- `app/` — Next.js app router pages and layout. Look here for `page.tsx`, `layout.tsx`, and nested routes like `app/land-sale/[id]`.
- `components/` — Reusable UI and feature components (property-card, header, footer, hero, etc.).
- `components/ui/` — Primitive UI components (button, input, card) used across the app.
- `lib/property-data.ts` — Static property data and helper getters (use this as the sample data source).
- `public/` — Static assets (images, logos, icons). Add new images here and reference them with `/images/your-image.jpg` or `/your-image.jpg` depending on path.
- `next.config.ts`, `tsconfig.json`, `tailwind.config.*` — Project configuration files.


## How to extend property data

Properties are defined in `lib/property-data.ts` using the `Property` interface. To add more listings:

1. Open `lib/property-data.ts`.
2. Add another object to the exported `properties` array. Follow the shape of the `Property` interface (id, title, location, price, images, specifications, contact, etc.).
3. Add any images to `public/` and reference them by path in the `images` array.

The UI reads from `properties` via helper functions `getPropertyById` and `getPropertiesByType`.


## Theming and Tailwind

This project uses a theme provider component in `components/theme-provider.tsx` and Tailwind for styling. Tailwind configuration lives in the root (look for `tailwind.config.mjs` / `postcss.config.mjs`). If you change theme tokens or colors, update these config files.


## Accessibility and Best Practices

- Components try to follow accessible patterns (Radix UI primitives are used where appropriate).
- Keep semantic HTML for better SEO and screen-reader support.


## Deployment

This is a standard Next.js app and can be deployed to Vercel, Netlify (with adapter), or any Node.js host that supports Next.js.

For Vercel:

1. Push the repository to GitHub.
2. Import the project in Vercel and use the default settings.

Environment variables: This sample app currently uses only static data. If you add secrets or runtime configuration, add them to the Vercel dashboard or to `.env` files and reference them in `next.config.ts` as needed.


## Linting and type checking

- Run ESLint with `npm run lint`.
- Type checking is built-in to the TypeScript + Next.js toolchain. You can run `tsc --noEmit` to check types only.


## Tests

This repository does not include automated tests yet. Recommended next steps:

- Add unit tests with Jest + React Testing Library for components.
- Add end-to-end tests with Playwright or Cypress for key flows (list page -> detail page -> contact form).


## Contributing

Feel free to open issues or PRs. A suggested workflow:

1. Fork the repo and create a feature branch.
2. Run `npm install` and make your changes.
3. Ensure linting passes and types are correct.
4. Submit a PR with a clear description and screenshots if applicable.


## Notes & next improvements (suggested)

- Replace static `lib/property-data.ts` with a real API or CMS for dynamic content.
- Add tests and CI (GitHub Actions) to run linting and tests on PRs.
- Add pagination and filtering for large property datasets.
- Improve image optimization using Next.js Image component and remotePattern config if remote images are used.


## License

This project currently has no license file. Add a LICENSE (e.g., MIT) if you plan to publish it.
