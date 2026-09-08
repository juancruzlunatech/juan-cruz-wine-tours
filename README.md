# Juan Cruz Wine Tours · Waiheke Island

Private and small-group **wine tasting tours** on **Waiheke Island, New Zealand** (en-NZ).
Warm, premium island hospitality – burgundy / plum accents on cream & sand.

> Not Oaxaca — this brand is Waiheke Island only.

## Stack
- Vite + React 19 + TypeScript
- Tailwind CSS v4 via `@tailwindcss/vite`
- `react-router-dom` **HashRouter** with Vite `base: './'` (GitHub Pages friendly)

## Setup

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

## Pages

| Route | Page |
|---|---|
| `#/` | Home — hero, why us, package teaser, how the day works |
| `#/tours` | Classic Shared, Private, Sunset & Grazing (indicative NZD) |
| `#/about` | Juan Cruz local guide story (honest placeholder bio) |
| `#/experience` | Vineyards / scenery highlights (illustrative venues) |
| `#/faq` | Ferry, duration, food, dietary, weather, group size |
| `#/contact` | Enquiry form — browser **localStorage** |

## Contact form & localStorage

The contact form saves enquiries under:

```text
jcwine-enquiries-v1
```

Same demo pattern as the Waiheke Spa Hire site — data stays in the visitor's browser; no backend email is sent from this build. Clear site data to reset.

## GitHub Pages deploy (`gh-pages` branch pattern)

1. Build locally or in CI: `npm run build` (output in `dist/`).
2. Publish the **contents of `dist/`** to a `gh-pages` branch (or use GitHub Actions Pages).

Example with the `gh-pages` package (optional):

```bash
npm install -D gh-pages
npx gh-pages -d dist
```

Then in the repo: **Settings → Pages → deploy from branch → `gh-pages` / root**.

Because the app uses **HashRouter** and `base: './'`, it also works from project-site URLs like `https://<user>.github.io/<repo>/`.

### Alternative: GitHub Actions

You can add a workflow that builds on push to `main` and uploads `dist/` as a Pages artifact (same pattern as other Waiheke demo sites). Enable **Settings → Pages → Source: GitHub Actions**.

## Photo credits

See [public/images/CREDITS.md](public/images/CREDITS.md).

**Important:** All stock images are temporary placeholders until real tour photos are shot.

## License

Site code: as per repository owner. Photos: Unsplash License / CC BY-SA 3.0 (see credits).
