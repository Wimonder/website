<script lang="ts">
	import Hamburger from './hamburger.svelte';
	import HeaderLink from './header-link.svelte';
	import ThemeToggler from './theme-toggler.svelte';

	const routes = [
		{
			link: '/',
			text: 'Home'
		},
		{
			link: '/projects',
			text: 'Projects'
		},
		{
			link: '/blog',
			text: 'Blog'
		},
		{
			link: 'https://cdn.sanity.io/files/oh3ilzqv/production/877b4fbee9050de319f09c71beb68710a3974d81.pdf',
			text: 'Resume'
		}
	];

	let open: boolean = false;
</script>

<nav class="flex h-16 w-full">
	<div class="m-auto flex w-full max-w-4xl justify-between px-4">
		<div class="flex sm:hidden">
			<Hamburger bind:open />
		</div>
		<div class="flex">
			<ul class="hidden list-outside items-center sm:flex">
				{#each routes as route}
					<HeaderLink href={route.link} text={route.text} external={route.text === 'Resume'} />
				{/each}
			</ul>
		</div>
		<div class="flex">
			<ThemeToggler />
		</div>
	</div>
</nav>
