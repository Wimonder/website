<script lang="ts">
	export let url: string;
	export let newPage: boolean = true;
</script>

<a
	class="inline-flex text-secondary hover:text-primary dark:text-secondary-dark dark:hover:text-primary-dark"
	href={url}
	target={newPage ? '_blank' : '_self'}
>
	<slot />
</a>
