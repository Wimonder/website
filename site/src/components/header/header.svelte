<script lang="ts">
	import Dropdown from './dropdown.svelte';

	import { routes } from '$lib/constants';
	import feather from 'feather-icons';
	import Hamburger from './hamburger.svelte';
	import HeaderLink from './header-link.svelte';
	import ThemeToggler from './theme-toggler.svelte';

	export let resume: string;

	const routeLinks = routes(resume);
	const rssIcon = feather.icons.rss.toSvg({
		width: '20px',
		height: '20px'
	});
	let open: boolean = false;
</script>

<nav class="z-20 flex sm:h-16 h-12 w-full text-primary dark:text-primary-dark">
	<div class="m-auto flex w-full max-w-4xl justify-between px-4">
		<div class="sm:hidden flex items-center">
			<Hamburger bind:open />
		</div>
		<div class="flex">
			<ul class="hidden list-outside items-center sm:flex">
				{#each routeLinks as route}
					<HeaderLink href={route.link} external={route.text === 'Resume'}>{route.text}</HeaderLink>
				{/each}
			</ul>
		</div>
		<div class="flex justify-center">
			<a
				class="pt-3 flex cursor-pointer rounded-sm p-2 text-secondary dark:text-secondary-dark hover:bg-gray-100 dark:hover:bg-gray-800"
				width="24px"
				height="20px"
				href="/rss.xml">{@html rssIcon}</a
			>
			<ThemeToggler />
		</div>
	</div>
</nav>
<Dropdown bind:open routes={routeLinks} />
