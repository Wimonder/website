<script lang="ts">
	import { page } from '$app/stores';
	import Error from '$components/error.svelte';
</script>

<div class="flex flex-col justify-center text-center sm:h-80">
	{#if $page.status == 404}
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
