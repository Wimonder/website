<script>
	import Footer from '$components/footer/index.svelte';
	import Header from '$components/header';
	import { theme } from '$lib/stores/theme';

	import { onMount } from 'svelte';
	import '../app.css';

	onMount(() => {
		if (localStorage.getItem('theme') === 'system') {
			const preferedTheme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
			theme.set(preferedTheme);
		}
	});
</script>

<Header />
<main class="m-auto mt-8 w-full max-w-3xl px-8">
	<slot />
</main>
<Footer />
