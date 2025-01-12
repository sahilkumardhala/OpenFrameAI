import { redirect } from 'next/navigation'
import { APP_HOST, PROTOCOL } from '../lib/hosts'

export default function MainPage() {
	// redirect openframeai.vercel.app.link to openframeai.vercel.app
	return redirect(`${PROTOCOL}${APP_HOST}`)
}
