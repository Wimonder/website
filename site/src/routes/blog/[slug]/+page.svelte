<script lang="ts">
	import Divider from '$components/divider.svelte';
	import CustomPortableText from '$components/text-content/index.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const publishedAtDateString = new Date(data.post.publishedAt).toLocaleDateString(undefined, {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
</script>

<svelte:head>
	<title>{data.post.title}</title>
</svelte:head>

<article class="m-auto flex w-full max-w-2xl flex-col">
	<h1 class="mb-4 text-4xl font-bold text-accent dark:text-accent-dark">{data.post.title}</h1>
	<Divider />
	<div class="mt-2 mb-4">
		<p class="text-secondary dark:text-secondary-dark">
			{publishedAtDateString} · {data.post.estimatedReadingTime} min read
		</p>
	</div>
	<CustomPortableText blocks={data.post.content} />
</article>
