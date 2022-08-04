<script lang="ts">
	import { onMount } from 'svelte';

	import ThemeIcon from './theme-icon.svelte';

	const STORAGE_KEY = 'theme';
	const DARK_PREFERENCE = '(prefers-color-scheme: dark)';

	const THEMES = {
		DARK: 'dark',
		LIGHT: 'light'
	};

	const prefersDarkThemes = () => window.matchMedia(DARK_PREFERENCE).matches;

	let currentTheme: string;
	const toggleTheme = () => {
		const stored = localStorage.getItem(STORAGE_KEY);

		let opposite: string;
		if (stored) {
			// If the user has already set a theme, toggle it
			localStorage.removeItem(STORAGE_KEY);
			opposite = stored === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
		} else {
			// Else store opposite of preference
			opposite = prefersDarkThemes() ? THEMES.LIGHT : THEMES.DARK;
		}
		localStorage.setItem(STORAGE_KEY, opposite);

		applyTheme();
	};

	const applyTheme = () => {
		const preferredTheme = prefersDarkThemes() ? THEMES.DARK : THEMES.LIGHT;
		currentTheme = localStorage.getItem(STORAGE_KEY) ?? preferredTheme;

		const htmlElement = document.querySelector('html')!;
		if (currentTheme === THEMES.DARK) {
			htmlElement.classList.remove(THEMES.LIGHT);
			htmlElement.classList.add(THEMES.DARK);
		} else {
			htmlElement.classList.remove(THEMES.DARK);
			htmlElement.classList.add(THEMES.LIGHT);
		}
	};

	onMount(() => {
		applyTheme();
		window.matchMedia(DARK_PREFERENCE).addEventListener('change', applyTheme);
	});
</script>

<i
	class="flex cursor-pointer rounded-sm p-2 text-secondary dark:text-secondary-dark hover:bg-gray-100 dark:hover:bg-gray-800"
	on:click={toggleTheme}
>
	<ThemeIcon isDark={currentTheme === THEMES.DARK} />
</i>
