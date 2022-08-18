<script lang="ts">
	import Education from '$components/education/index.svelte';
	import Experiences from '$components/experiences/index.svelte';
	import Head from '$components/head/index.svelte';
	import Link from '$components/link.svelte';
	import LatestPosts from '$components/posts/posts.svelte';
	import Section from '$components/section.svelte';
	import TextContent from '$components/text-content/index.svelte';
	import { toggleSearchMenu } from '$lib/stores/search';
	import feather from 'feather-icons';
	import type { PageData } from './$types';

	const iconLinks = [
		{
			icon: feather.icons.github.toSvg({ width: '100%', height: '100%' }),
			link: 'https://github.com/Wimonder',
			text: 'Github'
		},
		{
			icon: feather.icons.linkedin.toSvg({ width: '100%', height: '100%' }),
			link: 'https://www.linkedin.com/in/wim-onderbeke-344296163/',
			text: 'Linkedin'
		},
		{
			icon: feather.icons.mail.toSvg({ width: '100%', height: '100%' }),
			link: 'mailto:wim.onderbeke@zoho.eu',
			text: 'Mail'
		}
	];

	export let data: PageData;
</script>

<Head title="Wim Onderbeke" meta="Wim's personal website" />

<section class="flex">
	<div class="pr-5">
		<h1 class="mb-2 text-4xl font-bold text-accent dark:text-accent-dark">
			<span
				class="absolute mr-1 hidden -translate-x-full text-soft dark:text-soft-dark lg:inline-block"
				>~$</span
			>{data.name}
		</h1>
		<byline><TextContent blocks={data.short} /></byline>
		<br />
		<p>
			Tip: Use <button
				on:click|preventDefault={toggleSearchMenu}
				class="rounded-md border border-primary px-1
				text-sm hover:bg-primary hover:text-primary-dark dark:border-primary-dark dark:hover:bg-primary-dark
				dark:hover:text-primary"><span class="font-semibold">CTRL</span> K</button
			> to quickly search through this site.
		</p>
		<div class="mt-2 space-x-4">
			{#each iconLinks as iconLink}
				<Link href={iconLink.link} external={true}>
					<i
						aria-hidden="true"
						class="mt-3 inline-flex h-6 w-6 text-soft hover:text-primary dark:text-soft-dark dark:hover:text-primary-dark"
						>{@html iconLink.icon}</i
					><span class="sr-only">{iconLink.text}</span>
				</Link>
			{/each}
		</div>
	</div>
	<div>
		<img
			src="profile-picture-500x500.webp"
			width="500px"
			height="500px"
			alt="Wim's profile"
			class="hidden rounded-3xl sm:block"
		/>
	</div>
</section>
<Section name="About me"><TextContent blocks={data.about} /></Section>
<Section name="Latest posts">
	<LatestPosts posts={data.posts} />
	<div class="mt-4">
		<Link href="/blog" external={false}>Read all posts<i>-></i></Link>
	</div>
</Section>

<Section name="Experience">
	<Experiences experiences={data.experiences} />
</Section>

<Section name="Education">
	<Education education={data.education} />
</Section>
