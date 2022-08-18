<script lang="ts">
	import type { PreviewPost } from '$api/posts';
	export let post: PreviewPost;

	const { estimatedReadingTime, title, shortContent, publishedAt } = post;
	const publishedAtDateString = new Date(publishedAt).toLocaleDateString(undefined, {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
</script>

<article class="text-primary dark:text-primary-dark">
	<h3 class="text-xl font-medium text-inherit">{title}</h3>
	<p class="text-sm text-secondary dark:text-secondary-dark">
		<span>{publishedAtDateString}</span>
		·
		<span>{estimatedReadingTime} min read</span>
	</p>
	<p class="text-secondary dark:text-secondary-dark" />
	<p class="mt-3 text-inherit">{shortContent}</p>
	<hr class="mt-4" />
</article>
