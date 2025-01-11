import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const TITLE = 'OpenFrameAI'
const DESCRIPTION = 'OpenFrameAI is a versatile, AI-powered platform designed to provide users with a wide canvas to explore, create, and innovate. The platform converts UI designs into fully functional web applications with an intuitive interface, making it suitable for professionals, hobbyists, and organizations'

// const FACEBOOK_CARD = 'soc.webp'
const THEME_COLOR = '#FFFFFF'
const SITE_URL = 'https://OpenFrameAI-vercel.app'

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: {
		default: TITLE,
		template: `%s • ${TITLE}`,
	},
	description: DESCRIPTION,
	// openGraph: {
	// 	title: TITLE,
	// 	description: DESCRIPTION,
	// 	siteName: TITLE,
	// 	type: 'website',
	// 	url: SITE_URL,
	// 	images: FACEBOOK_CARD,
	// },

	applicationName: TITLE,
	appleWebApp: {
		capable: true,
		title: TITLE,
		statusBarStyle: 'black',
	},
	formatDetection: {
		telephone: false,
	},
	icons: [
		{ rel: 'mask-icon', url: 'safari-pinned-tab.svg', color: THEME_COLOR },
		{ rel: 'shortcut icon', url: '/OpenFrameAI.webp' },
		{ rel: 'icon', url: 'OpenFrameAI.webp', sizes: '32x32' },
		{ rel: 'icon', url: 'OpenFrameAI.webp', sizes: '16x16' },
		{ rel: 'OpenFrameAI', url: 'OpenFrameAI.webp' },
		{
			rel: 'OpenFrameAI',
			url: 'OpenFrameAI.webp',
			sizes: '152x152',
		},
		{
			rel: 'OpenFrameAI',
			url: 'OpenFrameAI.webp',
			sizes: '180x180',
		},
		{
			rel: 'OpenFrameAI',
			url: 'OpenFrameAI.webp',
			sizes: '167x167',
		},
	],
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, viewport-fit=cover, maximum-scale=1"
				/>
			</head>
			<body className={inter.className}>
				{children}
				<Analytics />
			</body>
		</html>
	)
}
