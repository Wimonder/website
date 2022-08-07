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

		if (currentTheme === THEMES.DARK) {
			document.documentElement.classList.remove(THEMES.LIGHT);
			document.documentElement.classList.add(THEMES.DARK);
		} else {
			document.documentElement.classList.remove(THEMES.DARK);
			document.documentElement.classList.add(THEMES.LIGHT);
		}
	};

	onMount(() => {
		applyTheme();
		window.matchMedia(DARK_PREFERENCE).addEventListener('change', applyTheme);
	});
</script>

<svelte:head>
	<script>
	</script>
</svelte:head>

<i
	id="theme-toggler"
	class="flex cursor-pointer rounded-sm p-2 text-secondary dark:text-secondary-dark hover:bg-gray-100 dark:hover:bg-gray-800"
	on:click={toggleTheme}
>
	{#if currentTheme}
		<ThemeIcon isDark={currentTheme === THEMES.DARK} />
	{:else}
		<script>
			const STORAGE_KEY = 'theme';
			const DARK_PREFERENCE = '(prefers-color-scheme: dark)';
			const THEMES = {
				DARK: 'dark',
				LIGHT: 'light'
			};
			const prefersDarkThemes = () => window.matchMedia(DARK_PREFERENCE).matches;

			if (document) {
				const preferredTheme = prefersDarkThemes() ? THEMES.DARK : THEMES.LIGHT;
				currentTheme = localStorage.getItem(STORAGE_KEY) ?? preferredTheme;

				if (currentTheme === THEMES.DARK) {
					document.documentElement.classList.remove(THEMES.LIGHT);
					document.documentElement.classList.add(THEMES.DARK);
					const darkIcon = `
						<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						transform="rotate(90)"
						>
						<mask id="mask">
							<rect x="0" y="0" width="100%" height="100%" fill="white" />
							<circle cx="30" cy="0" r="9" fill="black" />
						</mask>
						<circle fill="currentColor" cx="12" cy="12" r="5" mask="url(#mask)" />
						<g fill="currentColor">
							<line x1="12" y1="1" x2="12" y2="3" />
							<line x1="12" y1="21" x2="12" y2="23" />
							<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
							<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
							<line x1="1" y1="12" x2="3" y2="12" />
							<line x1="21" y1="12" x2="23" y2="12" />
							<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
							<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
						</g>
						</svg>
					`;
					document.getElementById('theme-toggler').innerHTML = darkIcon;
				} else {
					document.documentElement.classList.remove(THEMES.DARK);
					document.documentElement.classList.add(THEMES.LIGHT);
					const lightIcon = `
						<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						transform="rotate(40)"
						>
						<mask id="mask">
							<rect x="0" y="0" width="100%" height="100%" fill="white" />
							<circle cx="12" cy="4" r="9" fill="black" />
						</mask>
						<circle fill="currentColor" cx="12" cy="12" r="9" mask="url(#mask)" />
						</svg>
					`;
					document.getElementById('theme-toggler').innerHTML = lightIcon;
				}
			}
		</script>
	{/if}
</i>
