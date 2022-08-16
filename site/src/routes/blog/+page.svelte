<script lang="ts">
	import LatestPosts from '$components/posts/posts.svelte';
	import Section from '$components/section.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="text-primary dark:text-primary-dark">
	<h1 class="text-4xl font-bold text-accent dark:text-accent-dark">Blog</h1>
	<p class="my-4">
		I love writing and sharing my thoughts and experiences about technology. On my blog, you can
		find content ranging from cloud, microservices, developer productivity to UI/UX design.
	</p>
	<Section name="Posts">
		<LatestPosts posts={data.posts} />
	</Section>
</section>
