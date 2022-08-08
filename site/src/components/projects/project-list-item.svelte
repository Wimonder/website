<script lang="ts">
	import type { Project } from '$api/projects';
	import Link from '$components/link.svelte';
	import TextContent from '$components/text-content/index.svelte';
	import { getImageUrl } from '$lib/sanity';
	export let project: Project;

	const { title, content, link, github, mainImage, slug } = project;
</script>

<a name={slug}>
	<article class="text-primary dark:text-primary-dark">
		<h3 class="text-2xl text-inherit font-bold">{title}</h3>
		<p>
			<Link styles="text-link dark:text-link-dark hover:underline" href={link} external={true}
				>Preview</Link
			>
			·
			<Link styles="text-link dark:text-link-dark hover:underline" href={github} external={true}
				>GitHub</Link
			>
		</p>
		<div class="mt-2">
			<TextContent blocks={content} />
		</div>
		<img src={getImageUrl(mainImage).url()} alt="Project" class="rounded-md mt-2" />
	</article>
</a>
