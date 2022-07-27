import sanity from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

const config = {
	projectId: 'oh3ilzqv',
	dataset: 'production',
	apiVersion: 'v2022-07-22',
	useCdn: true
};

export const sanityClient = sanity(config);

export type Fetch = (input: RequestInfo, init?: RequestInit) => Promise<Response>;
export type Parameters = {
	[key: string]: string;
};
export const getFetchUrl = (query: string, parameters?: Parameters) => {
	let url = `https://${config.projectId}.api.sanity.io/${config.apiVersion}/data/query/${
		config.dataset
	}?query=${encodeURIComponent(query)}`;
	if (parameters) {
		const urlParameters = Object.entries(parameters)
			.map(([key, val]) => `&$${key}=${encodeURIComponent(`"${val}"`)}`)
			.join('');
		url += urlParameters;
	}
	return url;
};

const builder = imageUrlBuilder(sanityClient);
export const getImageUrl = (source: SanityImageSource) => {
	return builder.image(source);
};
