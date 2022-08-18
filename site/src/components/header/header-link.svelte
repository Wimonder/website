<script lang="ts">
	import { page } from '$app/stores';
	import Link from '$components/link.svelte';

	export let href: string;
	export let external = false;

	$: isActive = $page.routeId ? href.includes($page.routeId.split('/')[0]) : href === '/';
</script>

<li
	class={`px-2 py-1 text-lg hover:rounded-sm hover:bg-gray-100 dark:hover:bg-gray-800 ${
		isActive && 'font-bold'
	}`}
>
	<Link {href} {external}><slot /></Link>
</li>
