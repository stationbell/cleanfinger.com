// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Fully static build. Cloudflare serves dist/ straight from its edge cache —
// no Worker runs on a page view. See wrangler.jsonc.
export default defineConfig({
	site: "https://cleanfinger.com",
	integrations: [sitemap()],
	build: {
		// One request per page: CSS is inlined into the HTML.
		inlineStylesheets: "always",
	},
	markdown: {
		// No Markdown on the site; Shiki is also incompatible with CSP.
		syntaxHighlight: false,
	},
	security: {
		// Emits a hash-based Content-Security-Policy <meta> for inline styles/scripts.
		csp: true,
	},
});
