# cleanfinger.com

Single-product storefront for **CleanFinger** (fingertip cleaner). Currently a simple preorder page.

- **Astro 7**, fully static — one HTML file per page, CSS inlined, **zero client JavaScript**
- **Cloudflare Workers static assets** — served from the edge cache; no Worker runs on a page view
- Hash-based CSP, security headers, long-lived caching for build assets (`public/_headers`)
- SEO: canonical URL, Open Graph/Twitter card (`public/og.png`), `Product` JSON-LD, sitemap, robots.txt
- Light/dark mode, responsive to 320px, respects `prefers-reduced-motion`

## Editing content

Everything on the page comes from **`src/data/product.ts`**: name, tagline, copy, price, features and FAQ.

- **Take paid preorders:** set `price` and paste a checkout link (Stripe Payment Link, Shopify Buy Button, Lemon Squeezy, …) into `checkoutUrl`. The button changes from "Reserve yours" to "Preorder — $price".
- **Until then:** "Reserve yours" opens an email to `contactEmail`. Make sure that inbox exists (Cloudflare Email Routing works).
- The FAQ promises a full refund on cancellation before shipping. Edit it if that isn't your policy.

`public/og.png` (1200×630) is the social share image. Regenerate it if the name or tagline changes.

## Commands

Requires Node **26+** (see `.node-version`).

| Command           | Action                                                     |
| :---------------- | :--------------------------------------------------------- |
| `npm install`     | Install dependencies                                       |
| `npm run dev`     | Dev server at `localhost:4321`                             |
| `npm run build`   | Build to `./dist/`                                         |
| `npm run preview` | Build, then serve with Wrangler (applies `_headers`, 404)  |
| `npm run check`   | Type-check, build, and run a deploy dry run                |
| `npm run deploy`  | Build and deploy to Cloudflare                             |

## Adding a backend later

When you need server code (own checkout, webhooks, a waitlist form), either add `@astrojs/cloudflare` (`npx astro add cloudflare`) or add a small Worker with `main` plus `assets.run_worker_first: ["/api/*"]` in `wrangler.jsonc`. Both keep the product page itself static.
