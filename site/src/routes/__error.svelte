<script context="module" lang="ts">
	export async function load({ error, status }: LoadEvent) {
		return {
			props: {
				status
			}
		};
	}
</script>

<script lang="ts">
	export let status: number;
</script>

<div class="flex flex-col text-center justify-center sm:h-80">
	{#if status == 404}
		<!-- Use '==' instead of '===' to match string/number status code (just to be sure) -->
		<h1 class="mb-5 text-6xl font-bold text-accent dark:text-accent-dark">Page not found</h1>
		<p>
			The page you were looking for could not be found. It might have been removed, renamed, or did
			not exist in the first place.
		</p>
	{:else}
		<h1 class="mb-5 text-6xl font-bold text-accent dark:text-accent-dark">
			Something went wrong :(
		</h1>
		<p>We encountered an internal error. Please be patient and try again later.</p>
	{/if}
</div>
