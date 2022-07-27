<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import type { InputValue } from '@portabletext/svelte/ptTypes';
	import CodeBlock from './code-block.svelte';
	import Link from './link.svelte';
	import List from './list.svelte';

	export let blocks: InputValue;
</script>

<div class="prose max-w-none dark:prose-invert">
	<PortableText
		value={blocks}
		components={{
			types: {
				code_block: CodeBlock
			},
			list: List,
			marks: {
				link: Link
				// link: {
				// 	component: 'Link',
				// 	props: {
				// 		url: 'url'
				// 	}
				// }
			}
		}}
	/>
</div>
