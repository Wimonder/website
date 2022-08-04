<script lang="ts">
	export let url: string;
	export let external: boolean = true;
</script>

<a href={url} target={external ? '_blank' : undefined}><slot /></a>
