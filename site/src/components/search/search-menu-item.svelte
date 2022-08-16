<script lang="ts">
	import feather from 'feather-icons';
	import SearchMenuLink from './search-menu-link.svelte';
	import type { SearchResult } from './types';
	import { Category } from './types';

	export let result: SearchResult;

	let bookmarkIcon = feather.icons.bookmark.toSvg({
		width: '20px',
		height: '20px'
	});
	let clipboardIcon = feather.icons.clipboard.toSvg({
		width: '20px',
		height: '20px'
	});
</script>

{#if result.type === Category.Blog}
	<li class="group hover:bg-background-soft dark:hover:bg-secondary rounded-lg">
		<SearchMenuLink
			styles="w-full h-full flex pl-4 py-3 items-center"
			href={`/blog/${result.slug}`}
			external={false}
			on:click
		>
			<i class="inline mr-3 group-hover:text-primary dark:group-hover:text-primary-dark"
				>{@html bookmarkIcon}</i
			>
			<div>{result.title}</div>
		</SearchMenuLink>
	</li>
{:else if result.type === Category.Projects}
	<li class="group hover:bg-background-soft dark:hover:bg-secondary rounded-lg">
		<SearchMenuLink
			styles="w-full h-full flex pl-4 py-3 items-center"
			href={result.link}
			external={true}
			on:click
		>
			<i class="inline mr-3 group-hover:text-primary dark:group-hover:text-primary-dark"
				>{@html clipboardIcon}</i
			>
			<div>{result.name}</div>
		</SearchMenuLink>
	</li>
{:else if result.type === Category.Navigation}
	<li class="group hover:bg-background-soft dark:hover:bg-secondary rounded-lg">
		<SearchMenuLink styles="w-full h-full flex pl-4 py-3 items-center" href={result.link} on:click>
			<i class="inline mr-3 group-hover:text-primary dark:group-hover:text-primary-dark"
				>{@html result.icon}</i
			>
			<div>{result.text}</div>
		</SearchMenuLink>
	</li>
{:else if result.type === Category.Socials}
	<li class="group hover:bg-background-soft dark:hover:bg-secondary rounded-lg">
		<SearchMenuLink styles="w-full h-full flex pl-4 py-3 items-center" href={result.link} on:click>
			<i class="inline mr-3 group-hover:text-primary dark:group-hover:text-primary-dark"
				>{@html result.icon}</i
			>
			<div>{result.text}</div>
		</SearchMenuLink>
	</li>
{/if}
