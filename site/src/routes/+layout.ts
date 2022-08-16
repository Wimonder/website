export async function load({ fetch }: LoadEvent) {
	const layoutData = await fetch('/data').then((res) => res.json());
	return {
		layoutData
	};
}
