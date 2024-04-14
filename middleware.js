import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse } from "next/server";

let locales = ["bn", "en"];
let defaultLocale = "en";

function getLocale(request) {
	const acceptedLanguage =
		request.headers.get("accept-language") ?? undefined;

	let headers = { "accept-language": acceptedLanguage };

	let languages = new Negotiator({ headers }).languages();

	return match(languages, locales, defaultLocale);
}

export function middleware(request) {
	const pathname = request.nextUrl.pathname;

	const pathnameIsMissing = locales.every(
		(locale) =>
			!pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
	);

	if (pathnameIsMissing) {
		const locale = getLocale(request);

		let redirectUrl;

		if (typeof localStorage !== "undefined") {
			const storageLang = localStorage.getItem("preferLang");
			const parsedLang = JSON.parse(storageLang);
			if (parsedLang) {
				redirectUrl = new URL(
					`/${parsedLang}/${pathname}`,
					request.url
				);
			}
		}

		if (!redirectUrl) {
			redirectUrl = new URL(`/${locale}/${pathname}`, request.url);
		}

		return NextResponse.redirect(redirectUrl);
	}
}

export const config = {
	matcher: [
		// Skip all internal paths (_next)
		"/((?!api|assets|.*\\..*|_next).*)",
		// Optional: only run on root (/) URL
		// '/'
	],
};
