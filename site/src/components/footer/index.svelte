<script lang="ts">
	import { routes } from '$lib/constants';
	import feather from 'feather-icons';
	import FooterHolder from './footer-holder.svelte';

	export let resume: string;

	const heartIcon = {
		icon: feather.icons.heart.toSvg({
			width: '20px',
			height: '20px',
			class: 'relative top-1'
		}),
		text: 'love'
	};

	const routeLinks = routes(resume);

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

	const allRoutes = [routeLinks, projects, socials];
	const websiteGithub = 'https://github.com/Wimonder/mywebsite';
</script>

<footer class="mt-16 w-full">
	<div class="m-auto flex h-full w-full max-w-3xl px-8 justify-between">
		{#each allRoutes as routes}
			<FooterHolder items={routes} />
		{/each}
	</div>
	<p class="m-auto mt-20 mb-20 w-fit text-primary dark:text-primary-dark text-center">
		Made by Wim Onderbeke with <i aria-hidden="true" class="text-red-600 inline-block w-5 h-5"
			>{@html heartIcon.icon}</i
		><span class="sr-only">{heartIcon.text}</span>, find this website on
		<a class="hover:underline text-link dark:text-link-dark" href={websiteGithub} target="_blank"
			>GitHub</a
		>
	</p>
</footer>
