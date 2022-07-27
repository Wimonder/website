<script lang="ts">
	import Link from '$components/link.svelte';
	import type { MarkComponentProps } from '@portabletext/svelte';

	// export let portableText: MarkComponentProps<{ url: string }>;
	export let portableText: MarkComponentProps<{
		href?: string;
		newWindow?: boolean;
	}>;

	$: ({ value } = portableText);
	$: newWindow = value.newWindow || false;
</script>

{#if value.href}
	<div class="text-blue-800 no-underline not-prose inline hover:underline">
		<Link url={value.href} external={newWindow}>
			<slot />
		</Link>
	</div>
{:else}
	<slot />
{/if}
