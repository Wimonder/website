<script lang="ts">
	import Link from '$components/link.svelte';

	export let href: string;
	export let external = false;
	export let styles: string;
</script>

<Link {href} {external} {styles} on:click>
	<slot />
</Link>
