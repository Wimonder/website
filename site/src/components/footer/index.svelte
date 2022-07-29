<script lang="ts">
	import feather from 'feather-icons';
	import FooterHolder from './footer-holder.svelte';

	const heartIcon = {
		icon: feather.icons.heart.toSvg({
			width: '20px',
			height: '20px',
			class: 'relative top-1'
		}),
		text: 'love'
	};

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

	const projects = [
		{
			link: 'https://linky.wimon.dev',
			text: 'URL Shortener'
		}
	];

	const socials = [
		{
			link: 'https://github.com/Wimonder',
			text: 'GitHub'
		},
		{
			link: 'https://www.linkedin.com/in/wim-onderbeke-344296163/',
			text: 'LinkedIn'
		},
		{
			link: 'https://twitter.com/wimon_dev',
			text: 'Twitter'
		}
	];

	const allRoutes = [routes, projects, socials];
	const websiteGithub = 'https://github.com/Wimonder/mywebsite';
</script>

<footer class="mt-16 w-full">
	<div class="m-auto flex h-full w-full max-w-3xl px-8 justify-between">
		{#each allRoutes as routes}
			<FooterHolder items={routes} />
		{/each}
	</div>
	<p class="m-auto mt-20 mb-20 w-fit text-foreground text-center">
		Made by Wim Onderbeke with <i aria-hidden="true" class="text-red-600 inline-block w-5 h-5"
			>{@html heartIcon.icon}</i
		><span class="sr-only">{heartIcon.text}</span>, find this website on
		<a class="hover:underline text-blue-800" href={websiteGithub} target="_blank">GitHub</a>
	</p>
</footer>
