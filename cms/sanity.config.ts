import { codeInput } from '@sanity/code-input'
import { createConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemas/schema'

export default createConfig({
	name: 'default',
	title: 'My Website',

	projectId: 'oh3ilzqv',
	dataset: 'production',

	plugins: [deskTool(), codeInput()],

	schema: {
		types: schemaTypes
	}
})
