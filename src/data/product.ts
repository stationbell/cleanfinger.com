// Everything on the page comes from this file. Edit here, not in the page.

export const product = {
	name: "CleanFinger",
	kind: "A wipe for your fingertips, not your screen.",
	headline: ["Clean finger.", "Clear screen."],
	description:
		"Wipe the grease off your fingertips in seconds, so it never ends up on your keyboard, trackpad, monitor or phone.",

	// Preorder price, shown in the buy box and in search results (e.g. 19). null hides the row.
	price: null as number | null,
	currency: "USD",
	availability: "Preorder · first batch",

	// Paste a checkout link (Stripe Payment Link, Shopify, Lemon Squeezy, …) to take paid preorders.
	// While empty, the button opens an email so people can reserve one.
	checkoutUrl: "",

	contactEmail: "hello@cleanfinger.com",

	// One line under the button. Make sure it matches your actual policy.
	ctaNote: "Cancel anytime before it ships.",

	benefits: [
		{ title: "Seconds", body: "Use it mid-task." },
		{ title: "No sink", body: "Right where you work." },
		{ title: "Fewer smudges", body: "Keys and screens stay clean." },
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
	label: takesPayment ? "Preorder now" : "Reserve yours",
};
