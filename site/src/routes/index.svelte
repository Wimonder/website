<script lang="ts">
	import Head from '../components/head/index.svelte';

	export let byline: string;
</script>

<Head title="Wim Onderbeke" meta="Wim's personal website" />

<section class="mt-4">
	<h1 class="m-0 font-hack text-2xl font-bold text-foreground-accent">
		<span class="relative text-highlight dark:text-primary-3">~$</span>Wim Onderbeke
	</h1>
	<byline>{byline}</byline>
</section>
