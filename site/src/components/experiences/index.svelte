<script lang="ts">
	import type { Experience } from '$api/experiences';

	export let experiences: Experience[] = [];
</script>

<ul class="mt-3">
	{#each experiences as exp}
		<li class="flex items-center sm:my-2 my-4">
			<div class="flex flex-col sm:flex-row">
				<div class="w-24 sm:mr-20 text-secondary">
					<time datetime={exp.start}>{new Date(exp.start).getFullYear()}</time>
					-
					<time datetime={exp.end}
						>{exp.currentPosition || !exp.end ? ' Now' : new Date(exp.end).getFullYear()}</time
					>
				</div>
				<span class="text-foreground">{exp.title}</span>
			</div>
		</li>
	{/each}
</ul>
