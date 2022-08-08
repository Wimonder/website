<script lang="ts">
	import { page } from '$app/stores';

	export let href: string;
	export let external: boolean = false;

	$: isActive = $page.routeId ? href.includes($page.routeId.split('/')[0]) : href === '/';
</script>

<li class={`hover:bg-gray-100 dark:hover:bg-gray-800 hover:rounded-sm ${isActive && 'font-bold'}`}>
	{#if external}
		<a class="px-2 py-1 text-lg" {href} target="_blank"><slot /></a>
	{:else}
		<a class="px-2 py-1 text-lg" sveltekit:prefetch {href}><slot /></a>
	{/if}
</li>
