import { atom } from 'tldraw'
import { SYSTEM_PROMPT } from '../prompt'

export const PROVIDERS = [
	{
		id: 'openai',
		name: 'OpenAI',
		models: [ 'gpt-3.5-turbo', 'gpt-3.5', 'gpt-4o', 'gpt-4o-mini', 'gpt-4-turbo'], // 'o1-preview', 'o1-mini'],
		help: 'https://github.com/sahilkumardhala/OpenFrameAI/blob/main/README.md',
		validate: (key: string) => key.startsWith('sk-'),
	},
	{
		id: 'anthropic',
		name: 'Anthropic',
		models: [
			'claude-3-5-sonnet-20241022',
			'claude-3-5-sonnet-20240620',
			'claude-3-opus-20240229',
			'claude-3-sonnet-20240229',
			'claude-3-haiku-20240307',
		],
		help: 'https://github.com/sahilkumardhala/OpenFrameAI/blob/main/README.md',
		validate: (key: string) => key.startsWith('sk-'),
	},
	// { id: 'google', name: 'Google', model: 'Gemeni 1.5 Flash', validate: (key: string) => true },
]

export const modelSettings = atom('model settings', {
	provider: 'openai' as (typeof PROVIDERS)[number]['id'] | 'all',
	models: Object.fromEntries(PROVIDERS.map((provider) => [provider.id, provider.models[0]])),
	keys: {
		openai: '',
		anthropic: '',
		google: '',
	},
	prompts: {
		system: SYSTEM_PROMPT,
	},
})

export function applySettingsMigrations(settings) {
	const { keys, prompts, ...rest } = settings

	const settingsWithModelsProperty = {
		provider: 'openai',
		models: Object.fromEntries(PROVIDERS.map((provider) => [provider.id, provider.models[0]])),
		keys: {
			openai: '',
			anthropic: '',
			google: '',
			...keys,
		},
		prompts: {
			system: SYSTEM_PROMPT,
			...prompts,
		},
		...rest,
	}

	return settingsWithModelsProperty
}
