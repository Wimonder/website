<script lang="ts">
	import FooterLink from './footer-link.svelte';

	export let items: {
		text: string;
		link: string;
	}[];
</script>

<div class="flex flex-col space-y-3">
	{#each items as item}
		<FooterLink href={item.link} external={false}>{item.text}</FooterLink>
	{/each}
</div>
