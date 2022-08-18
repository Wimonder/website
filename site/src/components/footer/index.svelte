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
	<div class="flex=col m-auto max-w-3xl items-center px-8">
		<div class="flex h-full w-full justify-between">
			{#each allRoutes as routes}
				<FooterHolder items={routes} />
			{/each}
		</div>
		<p class="mt-10 mb-10 w-full text-center text-primary dark:text-primary-dark sm:mt-20 sm:mb-20">
			Made by Wim Onderbeke with <i aria-hidden="true" class="inline-block h-5 w-5 text-red-600"
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
