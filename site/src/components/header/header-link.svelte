<script lang="ts">
	import { page } from '$app/stores';

	export let text: string;
	export let href: string;
	export let external: boolean = false;

	$: isActive = $page.routeId ? href.includes($page.routeId.split('/')[0]) : href === '/';
</script>

<li
	class={`hover:bg-gray-100 dark:hover:bg-gray-800 text-primary dark:text-primary-dark hover:rounded-sm ${
		isActive && 'font-bold'
	}`}
>
	<a class="px-2 py-1 text-lg" sveltekit:prefetch {href} target={external ? '_blank' : undefined}
		>{text}</a
	>
</li>
