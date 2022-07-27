import type { InputValue } from '@portabletext/svelte/ptTypes';
import groq from 'groq';
import { sanityClient } from '$lib/sanity';

export interface BlogPost {
	title: string;
	tags: string[];
	categories: string[];
	content: InputValue;
	slug: string;
	estimatedReadingTime: number;
	publishedAt: string;
	_createdAt: string;
	_updatedAt: string;
}

const postBySlugQuery = groq`
		*[_type == "blogpost" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
			_createdAt,
			_updatedAt,
			title,
			"slug": slug.current,
			tags,
            categories,
			content,
			"estimatedReadingTime": round(length(pt::text(content)) / 5 / 180 ),
			publishedAt
		}
	`;

export const fetchPostBySlug = async (slug: string) =>
	sanityClient.fetch(postBySlugQuery, { slug });
