<script lang="ts">
	export let url: string;
	export let external: boolean = true;
</script>

<a class="inline-flex" href={url} target={external ? '_blank' : undefined}><slot /></a>
