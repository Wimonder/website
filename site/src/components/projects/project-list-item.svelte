<script lang="ts">
	import type { Project } from '$api/projects';
	import TextContent from '$components/text-content/index.svelte';
	import { getImageUrl } from '$lib/sanity';
	export let project: Project;

	const { title, content, link, github, mainImage, slug } = project;
</script>

<a name={slug}>
	<article class="text-primary dark:text-primary-dark">
		<h3 class="text-2xl text-inherit font-bold">{title}</h3>
		<p>
			<a class="text-blue-800 hover:underline" href={link} target="_blank">Preview</a> ·
			<a class="text-blue-800 hover:underline" href={github} target="_blank">GitHub</a>
		</p>
		<div class="mt-2">
			<TextContent blocks={content} />
		</div>
		<img src={getImageUrl(mainImage).url()} alt="Project" class="rounded-md mt-2" />
	</article>
</a>
