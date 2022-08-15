<script lang="ts">
	import Divider from '$components/divider.svelte';
	import { searchMenuOpen } from '$lib/stores/search';
	import SearchMenuCategory from './search-menu-category.svelte';

	let searchValue = '';
	let searchCategory;
	const categories = ['Blog', 'Projects', 'Navigation', 'Socials'];
	const categories = ['Blog', 'Projects', 'Navigation', 'Socials'];
</script>

<svelte:head>
	{#if $searchMenuOpen}
		<style>
			body {
				overflow: hidden;
			}
		</style>
	{/if}
</svelte:head>

{#if $searchMenuOpen}
	<div class="absolute h-screen w-full z-20 bg-background/50 dark:bg-background-dark/50" />
	<div
		class="absolute rounded-xl px-3 py-3 flex flex-col shadow-[0_0px_150px_40px_rgba(0,0,0,0.3)] top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 w-1/2 z-30 bg-background dark:bg-background-dark"
	>
		<input
			class="w-full bg-background py-4 focus:outline-none placeholder-secondary"
			placeholder="What are you looking for?"
			bind:value={searchValue}
		/>
		<Divider />
		<div class="text-secondary">
			{#if searchValue === ''}
				<ul class="space-y-1">
					{#each categories as category}
						<SearchMenuCategory>{category}</SearchMenuCategory>
					{/each}
				</ul>
			{:else}
				<div id="search-results">Empty</div>
			{/if}
		</div>
		<div />
	</div>
{/if}
