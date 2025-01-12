// import { NextRequest, NextResponse } from 'next/server'
// import { LINK_HOST } from './app/lib/hosts'

// export const config = {
// 	matcher: [
// 		/*
// 		 * Match all request paths except for the ones starting with:
// 		 * - _vercel (Vercel internals)
// 		 * - _next (next internals)
// 		 * - some-file.extension (static files)
// 		 */
// 		'/((?!_vercel|_next/|[\\w-]+\\.\\w+).*)',
// 	],
// }

// export function middleware(req: NextRequest) {
// 	const url = req.nextUrl

// 	const host = req.headers.get('host').toLowerCase()

// 	const rewrittenUrl = new URL(url.toString())

// 	if (host === LINK_HOST) {
// 		// rewrite requests on the link host to the link site:
// 		rewrittenUrl.pathname = `/openframeai.vercel.app.link${rewrittenUrl.pathname}`
// 	} else {
// 		// rewrite everything else to the main site:
// 		rewrittenUrl.pathname = `/openframeai.vercel.app.link${rewrittenUrl.pathname}`
// 	}

// 	return NextResponse.rewrite(rewrittenUrl)
// }

import { NextRequest, NextResponse } from 'next/server'
import { LINK_HOST, APP_HOST } from './app/lib/hosts'

export const config = {
	matcher: [
		'/((?!_vercel|_next/|[\\w-]+\\.\\w+).*)',
	],
}

export function middleware(req: NextRequest) {
	const url = req.nextUrl
	const host = req.headers.get('host')?.toLowerCase()

	// If we can't determine the host, just continue
	if (!host) {
		return NextResponse.next()
	}

	// For development environment
	if (host === APP_HOST) {
		return NextResponse.next()
	}

	const rewrittenUrl = new URL(url.toString())

	if (host === LINK_HOST) {
		// rewrite requests on the link host to the link site:
		rewrittenUrl.pathname = `/openframeai.vercel.app.link${rewrittenUrl.pathname}`
	} else {
		// rewrite everything else to the main site:
		rewrittenUrl.pathname = `/openframeai.vercel.app.link${rewrittenUrl.pathname}`
	}

	// Only rewrite if path doesn't already include the app link path
	if (!rewrittenUrl.pathname.startsWith('/openframeai.vercel.app.link')) {
		rewrittenUrl.pathname = `/openframeai.vercel.app.link${rewrittenUrl.pathname}`
		return NextResponse.rewrite(rewrittenUrl)
	}

	return NextResponse.next()
}