<script lang="ts">
	import type { PreviewPost } from '$api/posts';
	import Divider from '$components/divider.svelte';
	import { projects as projectsData, routes, socials as socialsData } from '$lib/constants';
	import { closeSearchMenu, searchMenuOpen, toggleSearchMenu } from '$lib/stores/search';
	import feather from 'feather-icons';
	import Fuse from 'fuse.js';
	import SearchMenuCategory from './search-menu-category.svelte';
	import SearchMenuItem from './search-menu-item.svelte';
	import type {
		NavigationResult,
		PostResult,
		ProjectResult,
		SearchResult,
		SocialResult
	} from './types';
	import { Category } from './types';

	export let blogPosts: PreviewPost[];
	export let resumeUrl;

	let searchValue: string | null = null;
	let searchCategory: Category | null = null;
	const categories = {
		blog: {
			name: Category.Blog,
			icon: feather.icons.bookmark.toSvg({
				width: '20px',
				height: '20px'
			}),
			data: [...blogPosts].map((post) => {
				return <PostResult>{ ...post, type: Category.Blog };
			})
		},
		projects: {
			name: Category.Projects,
			icon: feather.icons.clipboard.toSvg({ width: '20px', height: '20px' }),
			data: [...projectsData].map((project) => {
				return <ProjectResult>{ ...project, type: Category.Projects };
			})
		},
		navigation: {
			name: Category.Navigation,
			icon: feather.icons.map.toSvg({ width: '20px', height: '20px' }),
			data: [
				...routes(resumeUrl),
				{
					link: '/rss.xml',
					text: 'RSS Feed',
					icon: feather.icons.rss.toSvg({
						width: '20px',
						height: '20px'
					})
				}
			].map((route) => {
				return <NavigationResult>{ ...route, type: Category.Navigation };
			})
		},
		socials: {
			name: Category.Socials,
			icon: feather.icons['at-sign'].toSvg({ width: '20px', height: '20px' }),
			data: [...socialsData].map((social) => {
				return <SocialResult>{ ...social, type: Category.Socials };
			})
		}
	};

	const fzFinder = {
		projects: (searchString: string): ProjectResult[] => {
			return new Fuse<ProjectResult>(categories.projects.data, {
				keys: ['name', 'text']
			})
				.search(searchString)
				.map(({ item }) => item);
		},
		blog: (searchString: string): PostResult[] => {
			return new Fuse<PostResult>(categories.blog.data, {
				keys: ['title', 'shortContent']
			})
				.search(searchString)
				.map(({ item }) => item);
		},
		navigation: (searchString: string): NavigationResult[] => {
			return new Fuse<NavigationResult>(categories.navigation.data, {
				keys: ['text']
			})
				.search(searchString)
				.map(({ item }) => item);
		},
		socials: (searchString: string): SocialResult[] => {
			return new Fuse<SocialResult>(categories.socials.data, {
				keys: ['text']
			})
				.search(searchString)
				.map(({ item }) => item);
		}
	};

	let searchResults:
		| { type: 'one'; hasResults: boolean; results: SearchResult[] }
		| {
				type: 'all';
				hasResults: boolean;
				results: { category: string; results: SearchResult[] }[];
		  };
	$: {
		if (searchCategory === null) {
			const results = Object.entries(fzFinder).map(([key, finder]) => {
				return { category: key, results: finder(searchValue || '') };
			});
			searchResults = {
				type: 'all',
				hasResults: results.some((result) => result.results.length > 0),
				results: results
			};
		} else {
			if (!searchValue) {
				searchResults = {
					type: 'one',
					hasResults: true,
					results: categories[searchCategory].data
				};
			} else {
				let tempResults = fzFinder[searchCategory](searchValue);
				searchResults = {
					type: 'one',
					hasResults: !!tempResults.length,
					results: tempResults
				};
			}
		}
	}

	function onSelectCategory(event: CustomEvent<Category>) {
		searchCategory = event.detail;
		searchValue = null;
	}

	function onKeyDown(event: KeyboardEvent) {
		let { repeat, key, ctrlKey } = event;
		if (repeat) return;

		if (key === 'k' && ctrlKey) {
			event.preventDefault();
			toggleSearchMenu();
		} else if (key === 'Escape') {
			event.preventDefault();
			closeSearchMenu();
			searchCategory = null;
			searchValue = null;
		}
	}
</script>

<svelte:window on:keydown={onKeyDown} />

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
	<div class="absolute z-20 h-screen w-full bg-background/50 dark:bg-background-dark/50" />
	<div
		class="absolute top-1/4 left-1/2 z-30 flex w-4/5
		-translate-x-1/2 flex-col
		rounded-xl bg-background px-3 pb-3 shadow-[0_0px_150px_40px_rgba(0,0,0,0.3)] dark:bg-background-dark dark:shadow-[0_0px_150px_40px_rgba(250,250,250,0.15)] lg:w-full lg:max-w-3xl"
	>
		<div class="flex items-start">
			<input
				class="w-full bg-background py-4 placeholder-secondary focus:outline-none dark:bg-background-dark dark:placeholder-secondary-dark"
				placeholder="What are you looking for?"
				bind:value={searchValue}
			/>
			<button on:click={closeSearchMenu} class="mt-2 -mr-1">
				{@html feather.icons.x.toSvg({ width: '20px', height: '20px' })}
			</button>
		</div>
		<Divider />
		<div class="max-h-96 overflow-y-scroll text-secondary dark:text-secondary-dark">
			{#if searchCategory === null && !searchValue}
				<ul class="space-y-1">
					{#each Object.entries(categories) as [key, category]}
						<SearchMenuCategory
							on:selectCategory={onSelectCategory}
							category={category.name}
							icon={category.icon}
						/>
					{/each}
				</ul>
			{:else}
				{#if searchCategory !== null}
					<div class="mb-1 flex items-center text-sm">
						<button
							class="hover:text-primary dark:hover:text-primary-dark"
							on:click={() => {
								searchCategory = null;
								searchValue = null;
							}}
							>{@html feather.icons['arrow-left'].toSvg({
								width: '20px',
								height: '20px'
							})}
						</button>
						{searchCategory[0].toUpperCase() + searchCategory.slice(1)}
					</div>
				{/if}
				<div class="">
					{#if !searchResults.hasResults}
						<div class="ml-4 py-3">No results found</div>
					{:else}
						<ul>
							{#if searchResults.type === 'one'}
								{#each searchResults.results as result}
									<SearchMenuItem
										{result}
										on:click={() => {
											closeSearchMenu();
											searchCategory = null;
											searchValue = null;
										}}
									/>
								{/each}
							{:else}
								{#each searchResults.results as result}
									{#if result.results.length}
										<div class="mb-1 text-sm">
											{result.category[0].toUpperCase() + result.category.slice(1)}
										</div>
										{#each result.results as item}
											<SearchMenuItem
												result={item}
												on:click={() => {
													closeSearchMenu();
													searchCategory = null;
													searchValue = null;
												}}
											/>
										{/each}
									{/if}
								{/each}
							{/if}
						</ul>
					{/if}
				</div>
			{/if}
		</div>
		<div />
	</div>
{/if}
