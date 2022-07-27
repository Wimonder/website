<script lang="ts">
	import type { PreviewPost } from '$api/posts';
	import { page } from '$app/stores';
	import PostListItem from './post-list-item.svelte';

	export let posts: PreviewPost[];
	$: url = $page.url;
</script>

{#key url}
	<ul class="mt-3">
		{#each posts as post}
			<li>
				<a sveltekit:prefetch href={`blog/${post.slug}`}>
					<PostListItem {post} />
				</a>
			</li>
		{/each}
	</ul>
{/key}
