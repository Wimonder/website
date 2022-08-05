<script lang="ts">
	import Footer from '$components/footer/index.svelte';
	import Header from '$components/header/header.svelte';
	import '../app.css';

	const resumeUrl =
		'https://cdn.sanity.io/files/oh3ilzqv/production/3d92dcdafdd70830426fe1d83fe671e9666712aa.pdf';
</script>

<Header resume={resumeUrl} />
<main class="m-auto mt-8 w-full max-w-3xl px-8">
	<slot />
</main>
<Footer resume={resumeUrl} />
