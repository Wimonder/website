<script lang="ts">
	import Link from '$components/link.svelte';
	import { projects, routes, socials } from '$lib/constants';
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

	const allRoutes = [routeLinks, projects, socials];
	const websiteGithub = 'https://github.com/Wimonder/mywebsite';
</script>

<footer class="mt-16 w-full">
	<div class="m-auto flex=col px-8 max-w-3xl items-center">
		<div class="flex h-full w-full justify-between">
			{#each allRoutes as routes}
				<FooterHolder items={routes} />
			{/each}
		</div>
		<p class="sm:mt-20 mt-10 sm:mb-20 mb-10 w-full text-primary dark:text-primary-dark text-center">
			Made by Wim Onderbeke with <i aria-hidden="true" class="text-red-600 inline-block w-5 h-5"
				>{@html heartIcon.icon}</i
			><span class="sr-only">{heartIcon.text}</span>, find this website on
			<Link
				styles="hover:underline text-link dark:text-link-dark"
				href={websiteGithub}
				external={true}>GitHub</Link
			>
		</p>
	</div>
</footer>
