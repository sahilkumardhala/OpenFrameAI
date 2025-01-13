import { TldrawUiMenuGroup, TldrawUiMenuItem } from 'tldraw'

export function openUrl(url: string) {
	window.open(url, '_blank')
}

export function Links() {
	return (
		<TldrawUiMenuGroup id="links">
			<TldrawUiMenuItem
				id="github"
				label="help-menu.github"
				readonlyOk
				icon="github"
				onSelect={() => {
					openUrl('https://github.com/sahilkumardhala/sahilkumardhala')
				}}
			/>
			{/* <TldrawUiMenuItem
				id="twitter"
				label="help-menu.twitter"
				icon="twitter"
				readonlyOk
				onSelect={() => {
					openUrl('https://twitter.com/sahilkumardhala')
				}}
			/> */}
			{/* <TldrawUiMenuItem
				id="discord"
				label="help-menu.discord"
				icon="discord"
				readonlyOk
				onSelect={() => {
					openUrl('https://discord.gg/sahilkumardhala')
				}}
			/> */}
			<TldrawUiMenuItem
				id="about"
				label="About"
				icon="external-link"
				readonlyOk
				onSelect={() => {
					openUrl(
						'https://tldraw.notion.site/Make-Real-FAQs-93be8b5273d14f7386e14eb142575e6e?pvs=4'
					)
				}}
			/>
		</TldrawUiMenuGroup>
	)
}
