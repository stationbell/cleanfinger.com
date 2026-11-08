// Everything on the storefront comes from this file. Edit here, not in the page.

export type Feature = { title: string; body: string; icon: "drop" | "leaf" | "bolt" | "shield" };

export const product = {
	name: "CleanFinger",
	tagline: "Clean fingertips, anywhere.",
	description: "Wipe away grease, crumbs and sticky bits in seconds. No sink, no napkin, no mess. Preorders are open now.",

	// Preorder price, shown on the button and in search results (e.g. 19). null hides it.
	price: null as number | null,
	currency: "USD",

	// Paste a checkout link (Stripe Payment Link, Shopify, Lemon Squeezy, …) to take paid preorders.
	// While empty, the button opens an email so people can reserve one.
	checkoutUrl: "",

	contactEmail: "hello@cleanfinger.com",

	// One line under the button.
	ctaNote: "First batch. Cancel anytime before it ships.",

	features: [
		{ title: "Seconds, not sinks", body: "Clean fingertips without getting up.", icon: "bolt" },
		{ title: "Goes everywhere", body: "Desk, car, couch, bag.", icon: "drop" },
		{ title: "Gentle on skin", body: "Made for hands you use all day.", icon: "leaf" },
	] satisfies Feature[],

	// Make sure these answers match how you actually handle preorders.
	faq: [
		{
			q: "When will my order ship?",
			a: "Preorders ship from the first production run. We'll email you a ship date as soon as it's set, and tracking once it's on the way.",
		},
		{
			q: "Can I cancel my preorder?",
			a: "Yes. Email us any time before it ships for a full refund.",
		},
		{
			q: "Questions?",
			a: "Email hello@cleanfinger.com and a real person will get back to you.",
		},
	],
};

export const takesPayment = product.checkoutUrl.length > 0;

export const formattedPrice =
	product.price === null
		? null
		: new Intl.NumberFormat("en-US", { style: "currency", currency: product.currency }).format(product.price);

const reserveHref = `mailto:${product.contactEmail}?subject=${encodeURIComponent(`Reserve a ${product.name}`)}`;

export const cta = {
	href: takesPayment ? product.checkoutUrl : reserveHref,
	label: takesPayment ? `Preorder${formattedPrice ? ` — ${formattedPrice}` : " now"}` : "Reserve yours",
	short: takesPayment ? "Preorder" : "Reserve",
};
