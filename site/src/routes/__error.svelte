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
	import Error from '$components/error.svelte';

	export let status: number;
</script>

<div class="flex flex-col text-center justify-center sm:h-80">
	{#if status == 404}
		<!-- Use '==' instead of '===' to match string/number status code (just to be sure) -->
		<Error
			title="Page not found"
			msg="The page you were looking for could not be found. It might have been removed, renamed, or did not exist in the first place."
		/>
	{:else}
		<Error
			title="Something went wrong"
			msg="We're sorry, but something went wrong. Please be patient and try again later."
		/>
	{/if}
</div>
