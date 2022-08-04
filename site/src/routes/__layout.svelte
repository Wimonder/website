<script>
	import Footer from '$components/footer/index.svelte';
	import Header from '$components/header';

	import '../app.css';
</script>

<Header />
<main class="m-auto mt-8 w-full max-w-3xl px-8">
	<slot />
</main>
<Footer />
