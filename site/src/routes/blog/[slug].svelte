<script lang="ts">
	import type { BlogPost } from '$api/post-by-slug';
	import Divider from '$components/divider.svelte';
	import CustomPortableText from '$components/text-content/index.svelte';
	export let post: BlogPost;
	const publishedAtDateString = new Date(post.publishedAt).toLocaleDateString(undefined, {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
	console.log(post.publishedAt);
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<article class="m-auto flex w-full max-w-2xl flex-col">
	<h1 class="mb-4 text-4xl font-bold text-accent dark:text-accent-dark">{post.title}</h1>
	<Divider />
	<div class="mt-2 mb-4">
		<p class="text-secondary dark:text-secondary-dark">
			{publishedAtDateString} · {post.estimatedReadingTime} min read
		</p>
	</div>
	<CustomPortableText blocks={post.content} />
</article>
