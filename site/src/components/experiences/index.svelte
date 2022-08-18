<script lang="ts">
	import type { Experience } from '$api/experiences';

	export let experiences: Experience[] = [];
	experiences = experiences.sort(
		(ex1, ex2) => new Date(ex2.start).getTime() - new Date(ex1.start).getTime()
	);
</script>

<ul class="mt-3">
	{#each experiences as exp}
		<li class="my-4 flex items-center sm:my-2">
			<div class="flex flex-col sm:flex-row">
				<div class="w-24 text-secondary dark:text-secondary-dark sm:mr-20">
					<time datetime={exp.start}>{new Date(exp.start).getFullYear()}</time>
					-
					<time datetime={exp.end}
						>{exp.currentPosition || !exp.end ? ' Now' : new Date(exp.end).getFullYear()}</time
					>
				</div>
				<span class="text-primary dark:text-primary-dark">{exp.title}</span>
			</div>
		</li>
	{/each}
</ul>
