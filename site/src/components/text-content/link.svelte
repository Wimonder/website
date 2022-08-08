<script lang="ts">
	import Link from '$components/link.svelte';
	import type { MarkComponentProps } from '@portabletext/svelte';

	// export let portableText: MarkComponentProps<{ url: string }>;
	export let portableText: MarkComponentProps<{
		href?: string;
		newWindow?: boolean;
	}>;

	$: ({ value } = portableText);
	$: newWindow = value.newWindow || true;
</script>

{#if value.href}
	<Link
		styles="text-link dark:text-link-dark no-underline hover:underline font-normal"
		href={value.href}
		external={newWindow}><slot /></Link
	>
{:else}
	<slot />
{/if}
