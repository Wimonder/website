<script lang="ts">
	import type { PreviewPost } from '$api/posts';
	export let post: PreviewPost;

	const { estimatedReadingTime, title, _createdAt, shortContent, publishedAt } = post;
	const publishedAtDateString = new Date(publishedAt).toLocaleDateString(undefined, {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
</script>

<article class="text-foreground">
	<h3 class="text-xl text-inherit font-medium">{title}</h3>
	<p class="text-secondary text-sm">
		<span>{publishedAtDateString}</span>
		·
		<span>{estimatedReadingTime} min read</span>
	</p>
	<p class="text-secondary" />
	<p class="text-inherit mt-3">{shortContent}</p>
	<hr class="mt-4" />
</article>
