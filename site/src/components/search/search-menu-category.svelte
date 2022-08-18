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

<li class="group rounded-lg hover:bg-background-soft dark:hover:bg-secondary">
	<button class="flex h-full w-full items-center py-3 pl-4" on:click={selectCategory}>
		<i class="mr-3 inline group-hover:text-primary dark:group-hover:text-primary-dark"
			>{@html icon}</i
		>
		<div>{category[0].toUpperCase() + category.slice(1)}</div>
	</button>
</li>
