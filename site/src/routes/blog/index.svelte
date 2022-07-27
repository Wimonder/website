<script lang="ts">
	import type { PreviewPost } from '$api/posts';
	import LatestPosts from '$components/posts/posts.svelte';
	import Section from '$components/section.svelte';

	export let posts: PreviewPost[] = [];
</script>

<section>
	<h1 class="text-4xl font-bold text-primary-9">Blog</h1>
	<p class="my-4">
		I love writing and sharing my thoughts and experiences about technology. On my blog, you can
		find content ranging from cloud, microservices, developer productivity to UI/UX design.
	</p>
	<Section name="Posts">
		<LatestPosts {posts} />
	</Section>
</section>
