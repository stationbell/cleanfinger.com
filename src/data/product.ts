// Everything on the page comes from this file. Edit here, not in the page.

export const product = {
	name: "CleanFinger",
	headline: "Clean fingertips in seconds.",
	description:
		"Take the grease off your fingers before it ends up on your keyboard, trackpad, monitor or phone.",

	// Preorder price, shown on the button and in search results (e.g. 19). null hides it.
	price: null as number | null,
	currency: "USD",

	// Paste a checkout link (Stripe Payment Link, Shopify, Lemon Squeezy, …) to take paid preorders.
	// While empty, the button opens an email so people can reserve one.
	checkoutUrl: "",

	contactEmail: "hello@cleanfinger.com",

	// One line under the button. Make sure it matches your actual policy.
	ctaNote: "Ships from the first batch. Cancel anytime before it ships.",

	facts: [
		{ title: "Quick", body: "A few seconds, right at your desk." },
		{ title: "Easy", body: "No sink. No getting up." },
		{ title: "Smudge-free", body: "Cleaner keys, trackpads and screens." },
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
};
