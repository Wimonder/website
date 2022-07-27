<script lang="ts">
	import type { Education } from '$api/education';

	export let education: Education[] = [];
	education = education.sort(
		(ed1, ed2) => new Date(ed2.start).getTime() - new Date(ed1.start).getTime()
	);
</script>

<ul>
	{#each education as ed}
		<li class="flex sm:my-2 my-4">
			<div class="flex flex-col sm:flex-row">
				<div class="w-24 sm:mr-20 text-secondary">
					<time datetime={ed.start}>{new Date(ed.start).getFullYear()}</time>
					-
					<time datetime={ed.end}
						>{ed.currentPosition || !ed.end ? ' Now' : new Date(ed.end).getFullYear()}</time
					>
				</div>
				<span class="text-foreground">{ed.title}</span>
			</div>
		</li>
	{/each}
</ul>
