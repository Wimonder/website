<script lang="ts">
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
	<a
		class="text-blue-800 no-underline hover:underline font-normal"
		href={value.href}
		target={newWindow ? '_blank' : undefined}><slot /></a
	>
{:else}
	<slot />
{/if}
