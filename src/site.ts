/** Site chrome — single place for nav and defaults (Lesson 11). */

export const site = {
	name: "Lifan",
	url: "https://example.com",
	defaultTitle: "Lifan · Quiet paper",
	defaultDescription:
		"Personal site and writing — quiet paper, Astro + React.",
} as const;

export type NavItem = {
	label: string;
	href: string;
};

/** Primary nav — same on every page */
export const primaryNav: NavItem[] = [
	{ label: "Writing", href: "/writing" },
	{ label: "About", href: "/about" },
];
