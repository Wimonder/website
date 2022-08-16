<script lang="ts">
	import Projects from '$components/projects/projects.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="text-primary dark:text-primary-dark">
	<h1 class="text-4xl font-bold text-accent dark:text-accent-dark">Projects</h1>
	<p class="my-4">
		In my free time I enjoy tinkering with all kinds of software and hardware. Here you can find my
		latest projects.
	</p>
	<section>
		<Projects projects={data.projects} />
	</section>
</section>
