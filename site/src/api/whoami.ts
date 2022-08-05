import { sanityClient } from '$lib/sanity';

import type { InputValue } from '@portabletext/svelte/ptTypes';
import groq from 'groq';

interface WhoamiData {
	whoami: {
		name: string;
		email: string;
		short: InputValue;
		about: InputValue;
		resumeUrl: string;
	};
}

const whoamiQuery = groq`{
	"whoami" : *[_type == "whoami" ] {
		name,
		email,
        short,
        about,
		"resumeUrl": resume.asset->url
	}[0],
}`;

export const fetchWhoamiData = () => sanityClient.fetch<WhoamiData>(whoamiQuery);
