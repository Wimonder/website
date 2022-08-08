<script lang="ts">
	import Link from '$components/link.svelte';

	export let href: string;
	export let external: boolean = true;
</script>

<Link
	styles="inline-flex text-secondary hover:text-primary dark:text-secondary-dark dark:hover:text-primary-dark"
	{href}
	{external}><slot /></Link
>
