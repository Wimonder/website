<script lang="ts">
	export let open: boolean = false;
</script>

<button class:open on:click={() => (open = !open)} aria-label="Hamburger">
	<svg stroke="currentColor" width="32" height="23">
		<line id="top" x1="0" y1="2" x2="32" y2="2" />
		<line id="middle" x1="0" y1="12" x2="32" y2="12" />
		<line id="bottom" x1="0" y1="22" x2="32" y2="22" />
	</svg>
</button>

<style lang="css" global>
	:local(button) {
		z-index: 20;
	}
</style>
