<script lang="ts">
	import type { Education as EducationType } from '$api/education';
	import type { Experience } from '$api/experiences';
	import type { PreviewPost } from '$api/posts';
	import Education from '$components/education/index.svelte';
	import Experiences from '$components/experiences/index.svelte';
	import Head from '$components/head/index.svelte';
	import Link from '$components/link.svelte';
	import LatestPosts from '$components/posts/posts.svelte';
	import Section from '$components/section.svelte';
	import TextContent from '$components/text-content/index.svelte';
	import type { InputValue } from '@portabletext/svelte/ptTypes';
	import feather from 'feather-icons';

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

	export let name: string;
	export let email: string;
	export let short: InputValue;
	export let about: InputValue;

	export let posts: PreviewPost[];
	export let experiences: Experience[];
	export let education: EducationType[];
</script>

<Head title="Wim Onderbeke" meta="Wim's personal website" />

<section class="mt-4 flex">
	<div class="pr-5">
		<h1 class="mb-2 text-4xl font-bold">
			<span class="text-soft mr-1 absolute -translate-x-full sm:inline-block hidden">~$</span>{name}
		</h1>
		<byline><TextContent blocks={short} /></byline>
		<div class="space-x-4">
			{#each iconLinks as iconLink}
				<Link url={iconLink.link}>
					<i aria-hidden="true" class="text-soft mt-3 w-6 h-6 hover:text-primary"
						>{@html iconLink.icon}</i
					><span class="sr-only">{iconLink.text}</span>
				</Link>
			{/each}
		</div>
	</div>
	<div>
		<img
			src="profile-picture-500x500.webp"
			alt="Wim's profile"
			class="rounded-3xl sm:block hidden"
		/>
	</div>
</section>
<Section name="About me"><TextContent blocks={about} /></Section>
<Section name="Latest posts">
	<LatestPosts {posts} />
	<div class="mt-4">
		<Link url="/blog" external={false}>Read all posts<i>-></i></Link>
	</div>
</Section>

<Section name="Experience">
	<Experiences {experiences} />
</Section>

<Section name="Education">
	<Education {education} />
</Section>
