<script lang="ts">
	import { fly } from 'svelte/transition';

	interface Route {
		link: string;
		text: string;
	}

	export let routes: Route[];
	export let open: boolean;
</script>

<svelte:head>
	{#if open}
		<style>
			body {
				overflow: hidden;
			}
		</style>
	{/if}
</svelte:head>

{#if open}
	<aside class="absolute h-screen w-full">
		<nav
			class="mt-20 flex h-full flex-col bg-background dark:bg-background-dark px-8 pb-2 transition duration-300 ease-in-out"
		>
			{#each routes as route, i}
				<a
					transition:fly={{ x: -25, delay: 75 * i }}
					class="mt-4 border-b-2 border-secondary pb-4 text-xl font-semibold transition-colors dark:border-secondary-dark"
					href={route.link}
					on:click={() => (open = false)}>{route.text}</a
				>
			{/each}
		</nav>
	</aside>
{/if}
