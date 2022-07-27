<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import ThemeIcon from './theme-icon.svelte';

	const handleToggleTheme = () => {
		const isDark = $theme === 'dark';
		theme.set(isDark ? 'light' : 'dark');
		if (!isDark) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	};
</script>

<i
	class="flex cursor-pointer rounded-sm p-2 text-secondary hover:bg-gray-100 hover:text-gray-900"
	on:click={handleToggleTheme}
>
	<ThemeIcon isDark={$theme == 'dark'} />
</i>
