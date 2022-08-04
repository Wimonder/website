<script lang="ts">
	import Divider from './divider.svelte';

	export let name: string;
</script>

<section class="mt-8 text-primary dark:text-primary-dark">
	<h2 class="pb-2 text-2xl font-bold text-accent dark:text-accent-dark">
		{name}
	</h2>
	<Divider />
	<slot />
</section>
