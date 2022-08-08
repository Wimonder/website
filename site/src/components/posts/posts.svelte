<script lang="ts">
	import type { PreviewPost } from '$api/posts';
	import { page } from '$app/stores';
	import Link from '$components/link.svelte';
	import PostListItem from './post-list-item.svelte';

	export let posts: PreviewPost[];
	$: url = $page.url;
</script>

{#key url}
	<ul class="mt-3">
		{#each posts as post}
			<li>
				<Link external={false} href={`blog/${post.slug}`}>
					<PostListItem {post} />
				</Link>
			</li>
		{/each}
	</ul>
{/key}
