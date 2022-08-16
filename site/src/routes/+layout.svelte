<script lang="ts">
	import Footer from '$components/footer/index.svelte';
	import Header from '$components/header/header.svelte';
	import SearchMenu from '$components/search/search-menu.svelte';
	import '../app.css';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
	$: resumeUrl = data.layoutData.resumeUrl;
</script>

<Header resume={resumeUrl} />
<main class="m-auto sm:mt-8 mt-4 w-full max-w-3xl px-8">
	<slot />
</main>
<Footer resume={resumeUrl} />
<SearchMenu {resumeUrl} blogPosts={data.layoutData.posts} />
