<script lang="ts">
	export let title: string;
	export let meta: string;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={meta} />
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
</svelte:head>
