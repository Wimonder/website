<script lang="ts">
	import { spring } from 'svelte/motion';

	export let isDark = true;

	const properties = {
		light: {
			r: 9,
			transform: 40,
			cx: 12,
			cy: 4,
			opacity: 0
		},
		dark: {
			r: 5,
			transform: 90,
			cx: 30,
			cy: 0,
			opacity: 1
		}
	};

	const springOptions = {
		stiffness: 0.2,
		damping: 0.2
	};
	const fadeSpring = spring(isDark ? properties.dark.opacity : properties.light.opacity, {
		stiffness: 0.5,
		damping: 0.8
	});
	const radiusSpring = spring(isDark ? properties.dark.r : properties.light.r, springOptions);
	const cxSpring = spring(isDark ? properties.dark.cx : properties.light.cx, springOptions);
	const cySpring = spring(isDark ? properties.dark.cy : properties.light.cy, springOptions);

	$: {
		fadeSpring.set(isDark ? properties.dark.opacity : properties.light.opacity);
		radiusSpring.set(isDark ? properties.dark.r : properties.light.r);
		cxSpring.set(isDark ? properties.dark.cx : properties.light.cx);
		cySpring.set(isDark ? properties.dark.cy : properties.light.cy);
	}
</script>

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
	transform={`rotate(${isDark ? properties.dark.transform : properties.light.transform})`}
>
	<mask id="mask">
		<rect x="0" y="0" width="100%" height="100%" fill="white" />
		<circle cx={$cxSpring} cy={$cySpring} r="9" fill="black" />
	</mask>
	<circle fill="currentColor" cx="12" cy="12" r={$radiusSpring} mask="url(#mask)" />

	<g fill="currentColor" opacity={$fadeSpring}>
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
