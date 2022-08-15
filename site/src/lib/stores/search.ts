import { writable } from 'svelte/store';

export const searchMenuOpen = writable(false);

export function toggleSearchMenu() {
	searchMenuOpen.update((open) => !open);
}

export function closeSearchMenu() {
	searchMenuOpen.set(false);
}

export function openSearchMenu() {
	searchMenuOpen.set(true);
}
