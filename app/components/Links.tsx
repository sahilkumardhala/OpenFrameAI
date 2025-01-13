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
			
			<TldrawUiMenuItem
				id="about"
				label="About"
				icon="external-link"
				readonlyOk
				onSelect={() => {
					openUrl(
						'https://github.com/sahilkumardhala/OpenFrameAI/blob/main/README.md'
					)
				}}
			/>
		</TldrawUiMenuGroup>
	)
}
