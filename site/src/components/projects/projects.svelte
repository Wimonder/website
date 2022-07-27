<script lang="ts">
	import type { Project } from '$api/projects';
	import { page } from '$app/stores';
	import ProjectListItem from './project-list-item.svelte';

	export let projects: Project[];
	$: url = $page.url;
</script>

{#key url}
	<ul class="mt-3">
		{#each projects as project}
			<li>
				<ProjectListItem {project} />
			</li>
		{/each}
	</ul>
{/key}
