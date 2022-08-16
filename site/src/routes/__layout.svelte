<script context="module" lang="ts">
	export async function load({ fetch }: LoadEvent) {
		const layoutData = await fetch('/data').then((res) => res.json());
		return {
			props: {
				layoutData
			}
		};
	}
</script>

<script lang="ts">
	import Footer from '$components/footer/index.svelte';
	import Header from '$components/header/header.svelte';
	import SearchMenu from '$components/search/search-menu.svelte';
	import type { LoadEvent } from '@sveltejs/kit';
	import '../app.css';
	import type { LayoutData } from './data';

	export let layoutData: LayoutData;
	$: resumeUrl = layoutData.resumeUrl;
</script>

<Header resume={resumeUrl} />
<main class="m-auto sm:mt-8 mt-4 w-full max-w-3xl px-8">
	<slot />
</main>
<Footer resume={resumeUrl} />
<SearchMenu {resumeUrl} blogPosts={layoutData.posts} />
