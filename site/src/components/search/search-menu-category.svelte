<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { Category } from './types';
	const dispatch = createEventDispatcher();

	function selectCategory() {
		dispatch('selectCategory', category);
	}

	export let category: Category;
	export let icon: string;
</script>

<li class="group hover:bg-background-soft dark:hover:bg-secondary rounded-lg">
	<button class="w-full h-full flex pl-4 py-3 items-center" on:click={selectCategory}>
		<i class="inline mr-3 group-hover:text-primary dark:group-hover:text-primary-dark"
			>{@html icon}</i
		>
		<div>{category[0].toUpperCase() + category.slice(1)}</div>
	</button>
</li>
