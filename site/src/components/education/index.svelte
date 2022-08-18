<script lang="ts">
	import type { Education } from '$api/education';

	export let education: Education[] = [];
	education = education.sort(
		(ed1, ed2) => new Date(ed2.start).getTime() - new Date(ed1.start).getTime()
	);
</script>

<ul>
	{#each education as ed}
		<li class="my-4 flex sm:my-2 ">
			<div class="flex flex-col sm:flex-row">
				<div class="w-24 text-secondary dark:text-secondary-dark sm:mr-20">
					<time datetime={ed.start}>{new Date(ed.start).getFullYear()}</time>
					-
					<time datetime={ed.end}
						>{ed.currentPosition || !ed.end ? ' Now' : new Date(ed.end).getFullYear()}</time
					>
				</div>
				<span class="text-primary dark:text-primary-dark">{ed.title}</span>
			</div>
		</li>
	{/each}
</ul>
