<script lang="ts">
	export let href: string;
	export let external = false;
	export let styles = '';
</script>

{#if external}
	<a class={styles} {href} target="_blank" on:click><slot /></a>
{:else}
	<a class={styles} sveltekit:prefetch {href} on:click><slot /></a>
{/if}
